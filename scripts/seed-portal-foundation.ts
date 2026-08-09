import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import {
  OrganizationOwnershipType,
  PrismaClient,
  WorkspaceLifecycleState,
} from "../lib/generated/prisma/client";

const workspaceSlug = "chronicle-music";
const organizationName = "Chronicle Music";
const workspaceName = "Chronicle Music";

function loadEnvFile(fileName: string) {
  const filePath = resolve(process.cwd(), fileName);

  if (!existsSync(filePath)) {
    return;
  }

  const content = readFileSync(filePath, "utf8");

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^["']|["']$/g, "");

    process.env[key] = value;
  }
}

loadEnvFile(".env");
loadEnvFile(".env.local");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required to seed the Chronicle portal foundation.");
}

if (!/^postgres(?:ql)?:\/\//.test(process.env.DATABASE_URL)) {
  throw new Error("DATABASE_URL must be a PostgreSQL connection string for Prisma seeding.");
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const organization = await prisma.organization.upsert({
    where: { slug: workspaceSlug },
    update: {
      name: organizationName,
      ownershipType: OrganizationOwnershipType.INTERNAL,
    },
    create: {
      name: organizationName,
      slug: workspaceSlug,
      ownershipType: OrganizationOwnershipType.INTERNAL,
    },
  });

  const workspace = await prisma.workspace.upsert({
    where: { slug: workspaceSlug },
    update: {
      name: workspaceName,
      ownerOrganizationId: organization.id,
      lifecycleState: WorkspaceLifecycleState.ACTIVE,
      description: "Chronicle Creative Operations workspace.",
    },
    create: {
      name: workspaceName,
      slug: workspaceSlug,
      ownerOrganizationId: organization.id,
      lifecycleState: WorkspaceLifecycleState.ACTIVE,
      description: "Chronicle Creative Operations workspace.",
    },
  });

  const verifiedWorkspace = await prisma.workspace.findFirst({
    where: { slug: workspaceSlug },
    include: { ownerOrganization: true },
  });

  if (!verifiedWorkspace) {
    throw new Error(`Workspace verification failed for slug: ${workspaceSlug}`);
  }

  console.log(
    JSON.stringify(
      {
        organization: {
          id: organization.id,
          name: organization.name,
          slug: organization.slug,
          ownershipType: organization.ownershipType,
        },
        workspace: {
          id: workspace.id,
          name: workspace.name,
          slug: workspace.slug,
          lifecycleState: workspace.lifecycleState,
          ownerOrganizationSlug: verifiedWorkspace.ownerOrganization?.slug ?? null,
        },
        verification: {
          workspaceBySlug: "PASS",
        },
      },
      null,
      2,
    ),
  );
}

main()
  .catch((error) => {
    console.error(
      JSON.stringify(
        {
          name: error instanceof Error ? error.name : "UnknownError",
          message: error instanceof Error ? error.message : String(error),
          code:
            typeof error === "object" && error !== null && "code" in error
              ? error.code
              : undefined,
          meta:
            typeof error === "object" && error !== null && "meta" in error
              ? error.meta
              : undefined,
        },
        null,
        2,
      ),
    );
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
