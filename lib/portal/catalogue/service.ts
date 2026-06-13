import "server-only";

import { AssetLifecycleStatus, AssetReadinessState, Prisma } from "@/lib/generated/prisma/client";
import { evaluateCatalogueAssetReadiness } from "@/lib/portal/catalogue/evaluation";
import { catalogueDomainEvents, defaultCatalogueEvidenceRequirements } from "@/lib/portal/catalogue/readiness";
import {
  assetEvidenceAttachmentSchema,
  assetEvidenceRequirementUpdateSchema,
  assetMissingInformationSchema,
  assetRecommendedActionSchema,
  assetRecommendedActionStatusSchema,
  assetRiskIndicatorSchema,
  creativeAssetCreateSchema,
  creativeAssetHealthInputSchema,
  creativeAssetInformationUpdateSchema,
  creativeAssetLifecycleTransitionSchema,
  creativeAssetReadinessUpdateSchema,
} from "@/lib/portal/catalogue/validation";
import { portalDb } from "@/lib/portal/db";
import { recordFoundationAuditEvent, recordFoundationEvent } from "@/lib/portal/foundation-events";

const lifecycleTransitions: Record<AssetLifecycleStatus, AssetLifecycleStatus[]> = {
  DRAFT: [AssetLifecycleStatus.IN_PROGRESS, AssetLifecycleStatus.ARCHIVED],
  IN_PROGRESS: [
    AssetLifecycleStatus.REGISTERED,
    AssetLifecycleStatus.PUBLISHED,
    AssetLifecycleStatus.ARCHIVED,
  ],
  REGISTERED: [
    AssetLifecycleStatus.PUBLISHED,
    AssetLifecycleStatus.ACTIVE,
    AssetLifecycleStatus.ARCHIVED,
  ],
  PUBLISHED: [AssetLifecycleStatus.ACTIVE, AssetLifecycleStatus.ARCHIVED],
  ACTIVE: [AssetLifecycleStatus.ARCHIVED],
  ARCHIVED: [AssetLifecycleStatus.ACTIVE],
};

export class CatalogueWorkflowError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CatalogueWorkflowError";
  }
}

function toJsonInput(value: Record<string, unknown> | undefined) {
  return value as Prisma.InputJsonValue | undefined;
}

async function recordAssetEvent(input: {
  workspaceId: string;
  actorId?: string;
  eventType: string;
  entityId: string;
  payload?: Record<string, unknown>;
}) {
  await recordFoundationEvent({
    workspaceId: input.workspaceId,
    actorId: input.actorId,
    eventType: input.eventType,
    entityType: "CreativeAsset",
    entityId: input.entityId,
    sourceType: input.actorId ? "HUMAN" : "SYSTEM",
    payload: input.payload,
  });
}

async function recordAssetAudit(input: {
  workspaceId: string;
  actorId?: string;
  action: string;
  entityId: string;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
}) {
  await recordFoundationAuditEvent({
    workspaceId: input.workspaceId,
    actorId: input.actorId,
    action: input.action,
    entityType: "CreativeAsset",
    entityId: input.entityId,
    sourceType: input.actorId ? "HUMAN" : "SYSTEM",
    before: input.before,
    after: input.after,
  });
}

export async function createCreativeAsset(input: unknown) {
  const asset = creativeAssetCreateSchema.parse(input);

  const createdAsset = await portalDb.creativeAsset.create({
    data: {
      ...asset,
      evidenceRequirements: {
        create: defaultCatalogueEvidenceRequirements.map((requirement) => ({
          requirementKey: requirement.requirementKey,
          label: requirement.label,
          evidenceType: requirement.evidenceType,
        })),
      },
      healthProfile: {
        create: {},
      },
    },
  });

  await recordAssetEvent({
    workspaceId: createdAsset.workspaceId,
    eventType: catalogueDomainEvents.assetCreated,
    entityId: createdAsset.id,
    payload: {
      assetType: createdAsset.assetType,
      readinessState: createdAsset.readinessState,
      lifecycleStatus: createdAsset.lifecycleStatus,
    },
  });

  return createdAsset;
}

export async function updateCreativeAssetInformation(input: unknown) {
  const update = creativeAssetInformationUpdateSchema.parse(input);
  const { actorId, creativeAssetId, metadata, workspaceId, ...assetData } = update;

  const updatedAsset = await portalDb.creativeAsset.update({
    where: {
      id: creativeAssetId,
      workspaceId,
    },
    data: {
      ...assetData,
      metadata: metadata
        ? {
            upsert: {
              create: metadata,
              update: metadata,
            },
          }
        : undefined,
    },
  });

  await recordAssetEvent({
    workspaceId,
    actorId,
    eventType: catalogueDomainEvents.metadataUpdated,
    entityId: updatedAsset.id,
    payload: {
      updatedFields: Object.keys(assetData),
      metadataUpdated: Boolean(metadata),
    },
  });

  await recordAssetAudit({
    workspaceId,
    actorId,
    action: "creative_asset_information_updated",
    entityId: updatedAsset.id,
    after: {
      updatedFields: Object.keys(assetData),
      metadataUpdated: Boolean(metadata),
    },
  });

  return updatedAsset;
}

export async function updateCreativeAssetReadiness(input: unknown) {
  const readinessUpdate = creativeAssetReadinessUpdateSchema.parse(input);

  const updatedAsset = await portalDb.creativeAsset.update({
    where: {
      id: readinessUpdate.creativeAssetId,
      workspaceId: readinessUpdate.workspaceId,
    },
    data: {
      readinessState: readinessUpdate.readinessState,
    },
  });

  await recordAssetEvent({
    workspaceId: readinessUpdate.workspaceId,
    actorId: readinessUpdate.actorId,
    eventType: catalogueDomainEvents.workflowStateChanged,
    entityId: updatedAsset.id,
    payload: {
      readinessState: readinessUpdate.readinessState,
      reason: readinessUpdate.reason,
    },
  });

  await recordAssetAudit({
    workspaceId: readinessUpdate.workspaceId,
    actorId: readinessUpdate.actorId,
    action: "creative_asset_readiness_updated",
    entityId: updatedAsset.id,
    after: {
      readinessState: readinessUpdate.readinessState,
      reason: readinessUpdate.reason,
    },
  });

  return updatedAsset;
}

export async function transitionCreativeAssetLifecycle(input: unknown) {
  const transition = creativeAssetLifecycleTransitionSchema.parse(input);

  const currentAsset = await portalDb.creativeAsset.findUniqueOrThrow({
    where: {
      id: transition.creativeAssetId,
      workspaceId: transition.workspaceId,
    },
  });

  const allowedNextStatuses = lifecycleTransitions[currentAsset.lifecycleStatus];

  if (!allowedNextStatuses.includes(transition.lifecycleStatus)) {
    throw new CatalogueWorkflowError(
      `Cannot transition asset from ${currentAsset.lifecycleStatus} to ${transition.lifecycleStatus}.`,
    );
  }

  const updatedAsset = await portalDb.creativeAsset.update({
    where: {
      id: transition.creativeAssetId,
      workspaceId: transition.workspaceId,
    },
    data: {
      lifecycleStatus: transition.lifecycleStatus,
    },
  });

  await recordAssetEvent({
    workspaceId: transition.workspaceId,
    actorId: transition.actorId,
    eventType: catalogueDomainEvents.workflowStateChanged,
    entityId: updatedAsset.id,
    payload: {
      from: currentAsset.lifecycleStatus,
      to: transition.lifecycleStatus,
      reason: transition.reason,
    },
  });

  await recordAssetAudit({
    workspaceId: transition.workspaceId,
    actorId: transition.actorId,
    action: "creative_asset_lifecycle_transitioned",
    entityId: updatedAsset.id,
    before: {
      lifecycleStatus: currentAsset.lifecycleStatus,
    },
    after: {
      lifecycleStatus: transition.lifecycleStatus,
      reason: transition.reason,
    },
  });

  return updatedAsset;
}

export async function recordCreativeAssetMissingInformation(input: unknown) {
  const missingInformation = assetMissingInformationSchema.parse(input);

  const indicator = await portalDb.assetReadinessIndicator.create({
    data: {
      creativeAssetId: missingInformation.creativeAssetId,
      indicatorKey: missingInformation.indicatorKey,
      label: missingInformation.label,
      severity: missingInformation.severity,
      evidenceRequired: missingInformation.evidenceRequired,
      details: missingInformation.details,
    },
  });

  await recordAssetEvent({
    workspaceId: missingInformation.workspaceId,
    actorId: missingInformation.actorId,
    eventType: catalogueDomainEvents.healthIndicatorChanged,
    entityId: missingInformation.creativeAssetId,
    payload: {
      indicatorKey: indicator.indicatorKey,
      severity: indicator.severity,
      evidenceRequired: indicator.evidenceRequired,
    },
  });

  await recordAssetAudit({
    workspaceId: missingInformation.workspaceId,
    actorId: missingInformation.actorId,
    action: "creative_asset_missing_information_recorded",
    entityId: missingInformation.creativeAssetId,
    after: {
      indicatorKey: indicator.indicatorKey,
      label: indicator.label,
    },
  });

  return indicator;
}

export async function recordCreativeAssetRisk(input: unknown) {
  const risk = assetRiskIndicatorSchema.parse(input);

  const riskIndicator = await portalDb.assetRiskIndicator.create({
    data: {
      creativeAssetId: risk.creativeAssetId,
      riskKey: risk.riskKey,
      label: risk.label,
      severity: risk.severity,
      mitigationNote: risk.mitigationNote,
    },
  });

  await recordAssetEvent({
    workspaceId: risk.workspaceId,
    actorId: risk.actorId,
    eventType: catalogueDomainEvents.healthIndicatorChanged,
    entityId: risk.creativeAssetId,
    payload: {
      riskKey: riskIndicator.riskKey,
      severity: riskIndicator.severity,
    },
  });

  await recordAssetAudit({
    workspaceId: risk.workspaceId,
    actorId: risk.actorId,
    action: "creative_asset_risk_recorded",
    entityId: risk.creativeAssetId,
    after: {
      riskKey: riskIndicator.riskKey,
      label: riskIndicator.label,
    },
  });

  return riskIndicator;
}

export async function createAssetRecommendedAction(input: unknown) {
  const action = assetRecommendedActionSchema.parse(input);

  const recommendedAction = await portalDb.assetRecommendedAction.create({
    data: {
      creativeAssetId: action.creativeAssetId,
      actionKey: action.actionKey,
      title: action.title,
      rationale: action.rationale,
      dueAt: action.dueAt,
    },
  });

  await recordAssetEvent({
    workspaceId: action.workspaceId,
    actorId: action.actorId,
    eventType: catalogueDomainEvents.requiredActionCreated,
    entityId: action.creativeAssetId,
    payload: {
      actionKey: action.actionKey,
      title: action.title,
    },
  });

  await recordAssetAudit({
    workspaceId: action.workspaceId,
    actorId: action.actorId,
    action: "creative_asset_required_action_created",
    entityId: action.creativeAssetId,
    after: {
      actionKey: action.actionKey,
      title: action.title,
    },
  });

  return recommendedAction;
}

export async function updateAssetRecommendedActionStatus(input: unknown) {
  const actionUpdate = assetRecommendedActionStatusSchema.parse(input);

  const action = await portalDb.assetRecommendedAction.update({
    where: {
      id: actionUpdate.actionId,
      creativeAsset: {
        workspaceId: actionUpdate.workspaceId,
      },
    },
    data: {
      status: actionUpdate.status,
      completedAt: actionUpdate.status === "COMPLETE" ? new Date() : undefined,
    },
  });

  await recordAssetEvent({
    workspaceId: actionUpdate.workspaceId,
    actorId: actionUpdate.actorId,
    eventType: catalogueDomainEvents.workflowStateChanged,
    entityId: action.creativeAssetId,
    payload: {
      actionId: action.id,
      status: action.status,
      reason: actionUpdate.reason,
    },
  });

  await recordAssetAudit({
    workspaceId: actionUpdate.workspaceId,
    actorId: actionUpdate.actorId,
    action: "creative_asset_required_action_status_updated",
    entityId: action.creativeAssetId,
    after: {
      actionId: action.id,
      status: action.status,
      reason: actionUpdate.reason,
    },
  });

  return action;
}

export async function updateCreativeAssetEvidenceRequirement(input: unknown) {
  const requirement = assetEvidenceRequirementUpdateSchema.parse(input);

  const updatedRequirement = await portalDb.assetEvidenceRequirement.upsert({
    where: {
      creativeAssetId_requirementKey: {
        creativeAssetId: requirement.creativeAssetId,
        requirementKey: requirement.requirementKey,
      },
    },
    create: {
      creativeAssetId: requirement.creativeAssetId,
      requirementKey: requirement.requirementKey,
      label: requirement.label ?? requirement.requirementKey,
      status: requirement.status,
      evidenceType: requirement.evidenceType,
      notes: requirement.notes,
    },
    update: {
      label: requirement.label,
      status: requirement.status,
      evidenceType: requirement.evidenceType,
      notes: requirement.notes,
    },
  });

  await recordAssetEvent({
    workspaceId: requirement.workspaceId,
    actorId: requirement.actorId,
    eventType: catalogueDomainEvents.evidenceAttached,
    entityId: requirement.creativeAssetId,
    payload: {
      requirementKey: updatedRequirement.requirementKey,
      status: updatedRequirement.status,
    },
  });

  return updatedRequirement;
}

export async function attachEvidenceToCreativeAsset(input: unknown) {
  const attachment = assetEvidenceAttachmentSchema.parse(input);

  await portalDb.evidenceRecord.findFirstOrThrow({
    where: {
      id: attachment.evidenceRecordId,
      workspaceId: attachment.workspaceId,
    },
  });

  const evidenceLink = await portalDb.creativeAssetEvidence.upsert({
    where: {
      creativeAssetId_evidenceRecordId: {
        creativeAssetId: attachment.creativeAssetId,
        evidenceRecordId: attachment.evidenceRecordId,
      },
    },
    create: {
      creativeAssetId: attachment.creativeAssetId,
      evidenceRecordId: attachment.evidenceRecordId,
      purpose: attachment.purpose,
    },
    update: {
      purpose: attachment.purpose,
    },
  });

  if (attachment.requirementKey) {
    await updateCreativeAssetEvidenceRequirement({
      workspaceId: attachment.workspaceId,
      actorId: attachment.actorId,
      creativeAssetId: attachment.creativeAssetId,
      requirementKey: attachment.requirementKey,
      status: "ATTACHED",
    });
  }

  await recordAssetEvent({
    workspaceId: attachment.workspaceId,
    actorId: attachment.actorId,
    eventType: catalogueDomainEvents.evidenceAttached,
    entityId: attachment.creativeAssetId,
    payload: {
      evidenceRecordId: attachment.evidenceRecordId,
      purpose: attachment.purpose,
    },
  });

  await recordAssetAudit({
    workspaceId: attachment.workspaceId,
    actorId: attachment.actorId,
    action: "creative_asset_evidence_attached",
    entityId: attachment.creativeAssetId,
    after: {
      evidenceRecordId: attachment.evidenceRecordId,
      requirementKey: attachment.requirementKey,
    },
  });

  return evidenceLink;
}

export async function upsertCreativeAssetHealthProfile(input: unknown) {
  const healthInput = creativeAssetHealthInputSchema.parse(input);

  return portalDb.assetHealthProfile.upsert({
    where: {
      creativeAssetId: healthInput.creativeAssetId,
    },
    create: {
      ...healthInput,
      missingInformation: toJsonInput(healthInput.missingInformation),
      healthInputs: toJsonInput(healthInput.healthInputs),
      calculatedAt: new Date(),
    },
    update: {
      ...healthInput,
      missingInformation: toJsonInput(healthInput.missingInformation),
      healthInputs: toJsonInput(healthInput.healthInputs),
      calculatedAt: new Date(),
    },
  });
}

export async function evaluateAndPersistCreativeAssetReadiness(input: {
  workspaceId: string;
  actorId?: string;
  creativeAssetId: string;
}) {
  const asset = await portalDb.creativeAsset.findUniqueOrThrow({
    where: {
      id: input.creativeAssetId,
      workspaceId: input.workspaceId,
    },
    include: {
      metadata: true,
      ownershipRecords: true,
      evidenceRequirements: true,
      riskIndicators: true,
    },
  });

  const evaluation = evaluateCatalogueAssetReadiness(asset);

  await portalDb.$transaction(async (transaction) => {
    await transaction.assetHealthProfile.upsert({
      where: {
        creativeAssetId: input.creativeAssetId,
      },
      create: {
        creativeAssetId: input.creativeAssetId,
        readinessScore: evaluation.readinessScore,
        metadataScore: evaluation.metadataScore,
        evidenceScore: evaluation.evidenceScore,
        ownershipScore: evaluation.ownershipScore,
        opportunityScore: evaluation.opportunityScore,
        riskScore: evaluation.riskScore,
        missingInformation: evaluation.missingInformation,
        healthInputs: {
          deterministicRules: true,
        },
        calculatedAt: new Date(),
      },
      update: {
        readinessScore: evaluation.readinessScore,
        metadataScore: evaluation.metadataScore,
        evidenceScore: evaluation.evidenceScore,
        ownershipScore: evaluation.ownershipScore,
        opportunityScore: evaluation.opportunityScore,
        riskScore: evaluation.riskScore,
        missingInformation: evaluation.missingInformation,
        healthInputs: {
          deterministicRules: true,
        },
        calculatedAt: new Date(),
      },
    });

    await transaction.creativeAsset.update({
      where: {
        id: input.creativeAssetId,
        workspaceId: input.workspaceId,
      },
      data: {
        readinessState: evaluation.readinessState,
      },
    });

    for (const [indicatorKey, label] of Object.entries(evaluation.missingInformation)) {
      const existingIndicator = await transaction.assetReadinessIndicator.findFirst({
        where: {
          creativeAssetId: input.creativeAssetId,
          indicatorKey,
          isResolved: false,
        },
      });

      if (!existingIndicator) {
        await transaction.assetReadinessIndicator.create({
          data: {
            creativeAssetId: input.creativeAssetId,
            indicatorKey,
            label,
            severity: "MEDIUM",
            evidenceRequired: indicatorKey.startsWith("evidence-"),
          },
        });
      }
    }

    for (const risk of evaluation.riskIndicators) {
      const existingRisk = await transaction.assetRiskIndicator.findFirst({
        where: {
          creativeAssetId: input.creativeAssetId,
          riskKey: risk.riskKey,
          isResolved: false,
        },
      });

      if (!existingRisk) {
        await transaction.assetRiskIndicator.create({
          data: {
            creativeAssetId: input.creativeAssetId,
            ...risk,
          },
        });
      }
    }

    for (const action of evaluation.recommendedActions) {
      const existingAction = await transaction.assetRecommendedAction.findFirst({
        where: {
          creativeAssetId: input.creativeAssetId,
          actionKey: action.actionKey,
          status: {
            in: ["OPEN", "IN_PROGRESS", "BLOCKED"],
          },
        },
      });

      if (!existingAction) {
        await transaction.assetRecommendedAction.create({
          data: {
            creativeAssetId: input.creativeAssetId,
            ...action,
          },
        });
      }
    }
  });

  await recordAssetEvent({
    workspaceId: input.workspaceId,
    actorId: input.actorId,
    eventType: catalogueDomainEvents.healthIndicatorChanged,
    entityId: input.creativeAssetId,
    payload: {
      readinessState: evaluation.readinessState,
      readinessScore: evaluation.readinessScore,
    },
  });

  await recordAssetAudit({
    workspaceId: input.workspaceId,
    actorId: input.actorId,
    action: "creative_asset_readiness_evaluated",
    entityId: input.creativeAssetId,
    after: {
      readinessState: evaluation.readinessState,
      readinessScore: evaluation.readinessScore,
    },
  });

  return evaluation;
}
