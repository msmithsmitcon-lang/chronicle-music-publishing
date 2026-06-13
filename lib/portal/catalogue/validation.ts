import { z } from "zod";

import {
  AssetLifecycleStatus,
  AssetReadinessState,
  CreativeAssetType,
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
