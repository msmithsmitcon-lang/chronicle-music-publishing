import { z } from "zod";

export const cuidSchema = z.string().min(1);

export const workspaceSlugSchema = z
  .string()
  .min(2)
  .max(80)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const foundationEventInputSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  eventType: z.string().min(2).max(120),
  entityType: z.string().min(2).max(120),
  entityId: z.string().min(1).optional(),
  sourceType: z.enum(["HUMAN", "SYSTEM", "IMPORT", "AI_ASSISTED"]).default("SYSTEM"),
  sourceId: z.string().min(1).optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
});

export const foundationAuditInputSchema = z.object({
  workspaceId: cuidSchema,
  actorId: cuidSchema.optional(),
  action: z.string().min(2).max(120),
  entityType: z.string().min(2).max(120),
  entityId: z.string().min(1).optional(),
  sourceType: z.enum(["HUMAN", "SYSTEM", "IMPORT", "AI_ASSISTED"]).default("SYSTEM"),
  sourceId: z.string().min(1).optional(),
  before: z.record(z.string(), z.unknown()).optional(),
  after: z.record(z.string(), z.unknown()).optional(),
  severity: z.enum(["INFO", "WARNING", "CRITICAL"]).default("INFO"),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const evidenceInputSchema = z.object({
  workspaceId: cuidSchema,
  sourceReferenceId: cuidSchema.optional(),
  verifiedByUserId: cuidSchema.optional(),
  evidenceType: z.enum(["DOCUMENT", "LINK", "NOTE", "ATTACHMENT", "SUPPORTING_RECORD"]),
  title: z.string().min(2).max(180),
  body: z.string().max(10000).optional(),
  uri: z.string().url().optional(),
  attachmentKey: z.string().min(1).optional(),
  targetEntityType: z.string().min(2).max(120).optional(),
  targetEntityId: z.string().min(1).optional(),
  verificationStatus: z
    .enum(["UNVERIFIED", "REVIEW_REQUIRED", "VERIFIED", "REJECTED", "ARCHIVED"])
    .default("UNVERIFIED"),
  verifiedAt: z.date().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
