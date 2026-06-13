import { z } from "zod";

import {
  AssetActionStatus,
  AssetEvidenceRequirementStatus,
  AssetIndicatorSeverity,
  AssetLifecycleStatus,
  AssetReadinessState,
  CreativeAssetType,
  EvidenceType,
} from "@/lib/generated/prisma/client";
import { cuidSchema, workspaceSlugSchema } from "@/lib/portal/validation";

export const creativeAssetCreateSchema = z.object({
  workspaceId: cuidSchema,
  sourceReferenceId: cuidSchema.optional(),
  title: z.string().min(2).max(180),
  slug: workspaceSlugSchema,
  assetType: z.nativeEnum(CreativeAssetType),
  lifecycleStatus: z.nativeEnum(AssetLifecycleStatus).default(AssetLifecycleStatus.DRAFT),
  readinessState: z.nativeEnum(AssetReadinessState).default(AssetReadinessState.DRAFT_IMPORTED),
  description: z.string().max(2000).optional(),
  originNote: z.string().max(4000).optional(),
  strategicValue: z.string().max(4000).optional(),
});

export const creativeAssetReadinessUpdateSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  creativeAssetId: cuidSchema,
  readinessState: z.nativeEnum(AssetReadinessState),
  reason: z.string().min(2).max(1000),
});

export const creativeAssetInformationUpdateSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  creativeAssetId: cuidSchema,
  title: z.string().min(2).max(180).optional(),
  description: z.string().max(2000).optional(),
  originNote: z.string().max(4000).optional(),
  strategicValue: z.string().max(4000).optional(),
  metadata: z
    .object({
      alternateTitle: z.string().max(180).optional(),
      durationSeconds: z.number().int().positive().optional(),
      genre: z.string().max(120).optional(),
      mood: z.string().max(120).optional(),
      language: z.string().max(80).optional(),
      releaseDate: z.date().optional(),
      registrationCode: z.string().max(120).optional(),
      publishingIdentifier: z.string().max(120).optional(),
      metadataCompleteness: z.number().int().min(0).max(100).optional(),
      commercialNotes: z.string().max(4000).optional(),
      creativeNotes: z.string().max(4000).optional(),
    })
    .optional(),
});

export const creativeAssetLifecycleTransitionSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  creativeAssetId: cuidSchema,
  lifecycleStatus: z.nativeEnum(AssetLifecycleStatus),
  reason: z.string().min(2).max(1000),
});

export const assetMissingInformationSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  creativeAssetId: cuidSchema,
  indicatorKey: z.string().min(2).max(120),
  label: z.string().min(2).max(180),
  severity: z.nativeEnum(AssetIndicatorSeverity).default(AssetIndicatorSeverity.MEDIUM),
  evidenceRequired: z.boolean().default(false),
  details: z.string().max(1000).optional(),
});

export const assetRiskIndicatorSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  creativeAssetId: cuidSchema,
  riskKey: z.string().min(2).max(120),
  label: z.string().min(2).max(180),
  severity: z.nativeEnum(AssetIndicatorSeverity).default(AssetIndicatorSeverity.MEDIUM),
  mitigationNote: z.string().max(1000).optional(),
});

export const assetRecommendedActionSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  creativeAssetId: cuidSchema,
  actionKey: z.string().min(2).max(120),
  title: z.string().min(2).max(180),
  rationale: z.string().max(1000).optional(),
  dueAt: z.date().optional(),
});

export const assetRecommendedActionStatusSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  actionId: cuidSchema,
  status: z.nativeEnum(AssetActionStatus),
  reason: z.string().min(2).max(1000),
});

export const assetEvidenceAttachmentSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  creativeAssetId: cuidSchema,
  evidenceRecordId: cuidSchema,
  requirementKey: z.string().min(2).max(120).optional(),
  purpose: z.string().max(500).optional(),
});

export const assetEvidenceRequirementUpdateSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  creativeAssetId: cuidSchema,
  requirementKey: z.string().min(2).max(120),
  label: z.string().min(2).max(180).optional(),
  status: z.nativeEnum(AssetEvidenceRequirementStatus),
  evidenceType: z.nativeEnum(EvidenceType).optional(),
  notes: z.string().max(1000).optional(),
});

export const creativeAssetHealthInputSchema = z.object({
  creativeAssetId: cuidSchema,
  readinessScore: z.number().int().min(0).max(100).default(0),
  metadataScore: z.number().int().min(0).max(100).default(0),
  evidenceScore: z.number().int().min(0).max(100).default(0),
  ownershipScore: z.number().int().min(0).max(100).default(0),
  opportunityScore: z.number().int().min(0).max(100).default(0),
  riskScore: z.number().int().min(0).max(100).default(0),
  missingInformation: z.record(z.string(), z.unknown()).optional(),
  healthInputs: z.record(z.string(), z.unknown()).optional(),
  recommendedNextReview: z.date().optional(),
});
