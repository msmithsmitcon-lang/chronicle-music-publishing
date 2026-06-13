import "server-only";

import { Prisma } from "@/lib/generated/prisma/client";
import { portalDb } from "@/lib/portal/db";
import { foundationEventInputSchema, foundationAuditInputSchema } from "@/lib/portal/validation";

function toJsonInput(value: Record<string, unknown> | undefined) {
  return value as Prisma.InputJsonValue | undefined;
}

export async function recordFoundationEvent(input: unknown) {
  const event = foundationEventInputSchema.parse(input);

  return portalDb.domainEvent.create({
    data: {
      ...event,
      payload: toJsonInput(event.payload),
    },
  });
}

export async function recordFoundationAuditEvent(input: unknown) {
  const auditEvent = foundationAuditInputSchema.parse(input);

  return portalDb.auditEvent.create({
    data: {
      ...auditEvent,
      before: toJsonInput(auditEvent.before),
      after: toJsonInput(auditEvent.after),
      metadata: toJsonInput(auditEvent.metadata),
    },
  });
}
