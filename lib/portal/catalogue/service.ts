import "server-only";

import { Prisma } from "@/lib/generated/prisma/client";
import { catalogueDomainEvents, defaultCatalogueEvidenceRequirements } from "@/lib/portal/catalogue/readiness";
import {
  creativeAssetCreateSchema,
  creativeAssetHealthInputSchema,
  creativeAssetReadinessUpdateSchema,
} from "@/lib/portal/catalogue/validation";
import { portalDb } from "@/lib/portal/db";
import { recordFoundationAuditEvent, recordFoundationEvent } from "@/lib/portal/foundation-events";

function toJsonInput(value: Record<string, unknown> | undefined) {
  return value as Prisma.InputJsonValue | undefined;
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

  await recordFoundationEvent({
    workspaceId: createdAsset.workspaceId,
    eventType: catalogueDomainEvents.assetCreated,
    entityType: "CreativeAsset",
    entityId: createdAsset.id,
    sourceType: "SYSTEM",
    payload: {
      assetType: createdAsset.assetType,
      readinessState: createdAsset.readinessState,
      lifecycleStatus: createdAsset.lifecycleStatus,
    },
  });

  return createdAsset;
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

  await recordFoundationEvent({
    workspaceId: readinessUpdate.workspaceId,
    actorId: readinessUpdate.actorId,
    eventType: catalogueDomainEvents.workflowStateChanged,
    entityType: "CreativeAsset",
    entityId: updatedAsset.id,
    sourceType: readinessUpdate.actorId ? "HUMAN" : "SYSTEM",
    payload: {
      readinessState: readinessUpdate.readinessState,
      reason: readinessUpdate.reason,
    },
  });

  await recordFoundationAuditEvent({
    workspaceId: readinessUpdate.workspaceId,
    actorId: readinessUpdate.actorId,
    action: "creative_asset_readiness_updated",
    entityType: "CreativeAsset",
    entityId: updatedAsset.id,
    sourceType: readinessUpdate.actorId ? "HUMAN" : "SYSTEM",
    after: {
      readinessState: readinessUpdate.readinessState,
      reason: readinessUpdate.reason,
    },
  });

  return updatedAsset;
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
