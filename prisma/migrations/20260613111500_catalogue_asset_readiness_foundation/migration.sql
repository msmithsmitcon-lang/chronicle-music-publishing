-- CreateEnum
CREATE TYPE "CreativeAssetType" AS ENUM ('SONG', 'RECORDING', 'COMPOSITION', 'LYRICS', 'ARRANGEMENT', 'CREATIVE_CONCEPT', 'VISUAL_ASSET', 'OTHER');

-- CreateEnum
CREATE TYPE "AssetLifecycleStatus" AS ENUM ('DRAFT', 'IN_PROGRESS', 'REGISTERED', 'PUBLISHED', 'ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "AssetReadinessState" AS ENUM ('DRAFT_IMPORTED', 'NEEDS_REVIEW', 'MISSING_EVIDENCE', 'READY_FOR_ACTIVATION', 'OPPORTUNITY_IDENTIFIED', 'ACTION_REQUIRED', 'REVIEWED');

-- CreateEnum
CREATE TYPE "AssetOwnershipType" AS ENUM ('ORIGINAL_CREATOR', 'CONTRIBUTOR', 'PUBLISHER', 'ADMINISTRATOR', 'RIGHTS_HOLDER', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "AssetIndicatorSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "AssetActionStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'BLOCKED', 'COMPLETE', 'DISMISSED');

-- CreateEnum
CREATE TYPE "AssetEvidenceRequirementStatus" AS ENUM ('REQUIRED', 'REQUESTED', 'ATTACHED', 'VERIFIED', 'WAIVED');

-- CreateTable
CREATE TABLE "CreativeAsset" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "sourceReferenceId" TEXT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "assetType" "CreativeAssetType" NOT NULL,
    "lifecycleStatus" "AssetLifecycleStatus" NOT NULL DEFAULT 'DRAFT',
    "readinessState" "AssetReadinessState" NOT NULL DEFAULT 'DRAFT_IMPORTED',
    "description" TEXT,
    "originNote" TEXT,
    "strategicValue" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreativeAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetVersion" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "versionLabel" TEXT NOT NULL,
    "notes" TEXT,
    "fileReference" TEXT,
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetMetadata" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "alternateTitle" TEXT,
    "durationSeconds" INTEGER,
    "genre" TEXT,
    "mood" TEXT,
    "language" TEXT,
    "releaseDate" TIMESTAMP(3),
    "registrationCode" TEXT,
    "publishingIdentifier" TEXT,
    "metadataCompleteness" INTEGER NOT NULL DEFAULT 0,
    "commercialNotes" TEXT,
    "creativeNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetOwnership" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "ownershipType" "AssetOwnershipType" NOT NULL DEFAULT 'UNKNOWN',
    "percentage" DECIMAL(5,2),
    "rightsScope" TEXT,
    "territory" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "evidenceStatus" "AssetEvidenceRequirementStatus" NOT NULL DEFAULT 'REQUIRED',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetOwnership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetHealthProfile" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "readinessScore" INTEGER NOT NULL DEFAULT 0,
    "metadataScore" INTEGER NOT NULL DEFAULT 0,
    "evidenceScore" INTEGER NOT NULL DEFAULT 0,
    "ownershipScore" INTEGER NOT NULL DEFAULT 0,
    "opportunityScore" INTEGER NOT NULL DEFAULT 0,
    "riskScore" INTEGER NOT NULL DEFAULT 0,
    "missingInformation" JSONB,
    "healthInputs" JSONB,
    "recommendedNextReview" TIMESTAMP(3),
    "calculatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetHealthProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetReadinessIndicator" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "indicatorKey" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "severity" "AssetIndicatorSeverity" NOT NULL DEFAULT 'MEDIUM',
    "isResolved" BOOLEAN NOT NULL DEFAULT false,
    "evidenceRequired" BOOLEAN NOT NULL DEFAULT false,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetReadinessIndicator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetRiskIndicator" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "riskKey" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "severity" "AssetIndicatorSeverity" NOT NULL DEFAULT 'MEDIUM',
    "isResolved" BOOLEAN NOT NULL DEFAULT false,
    "mitigationNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetRiskIndicator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetEvidenceRequirement" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "requirementKey" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "status" "AssetEvidenceRequirementStatus" NOT NULL DEFAULT 'REQUIRED',
    "evidenceType" "EvidenceType",
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetEvidenceRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreativeAssetEvidence" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "evidenceRecordId" TEXT NOT NULL,
    "purpose" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CreativeAssetEvidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetRecommendedAction" (
    "id" TEXT NOT NULL,
    "creativeAssetId" TEXT NOT NULL,
    "actionKey" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rationale" TEXT,
    "status" "AssetActionStatus" NOT NULL DEFAULT 'OPEN',
    "dueAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetRecommendedAction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreativeAsset_workspaceId_lifecycleStatus_idx" ON "CreativeAsset"("workspaceId", "lifecycleStatus");

-- CreateIndex
CREATE INDEX "CreativeAsset_workspaceId_readinessState_idx" ON "CreativeAsset"("workspaceId", "readinessState");

-- CreateIndex
CREATE INDEX "CreativeAsset_assetType_idx" ON "CreativeAsset"("assetType");

-- CreateIndex
CREATE INDEX "CreativeAsset_sourceReferenceId_idx" ON "CreativeAsset"("sourceReferenceId");

-- CreateIndex
CREATE UNIQUE INDEX "CreativeAsset_workspaceId_slug_key" ON "CreativeAsset"("workspaceId", "slug");

-- CreateIndex
CREATE INDEX "AssetVersion_creativeAssetId_idx" ON "AssetVersion"("creativeAssetId");

-- CreateIndex
CREATE INDEX "AssetVersion_isCurrent_idx" ON "AssetVersion"("isCurrent");

-- CreateIndex
CREATE UNIQUE INDEX "AssetVersion_creativeAssetId_versionLabel_key" ON "AssetVersion"("creativeAssetId", "versionLabel");

-- CreateIndex
CREATE UNIQUE INDEX "AssetMetadata_creativeAssetId_key" ON "AssetMetadata"("creativeAssetId");

-- CreateIndex
CREATE INDEX "AssetOwnership_creativeAssetId_idx" ON "AssetOwnership"("creativeAssetId");

-- CreateIndex
CREATE INDEX "AssetOwnership_ownershipType_idx" ON "AssetOwnership"("ownershipType");

-- CreateIndex
CREATE INDEX "AssetOwnership_evidenceStatus_idx" ON "AssetOwnership"("evidenceStatus");

-- CreateIndex
CREATE UNIQUE INDEX "AssetHealthProfile_creativeAssetId_key" ON "AssetHealthProfile"("creativeAssetId");

-- CreateIndex
CREATE INDEX "AssetReadinessIndicator_creativeAssetId_idx" ON "AssetReadinessIndicator"("creativeAssetId");

-- CreateIndex
CREATE INDEX "AssetReadinessIndicator_indicatorKey_idx" ON "AssetReadinessIndicator"("indicatorKey");

-- CreateIndex
CREATE INDEX "AssetReadinessIndicator_severity_idx" ON "AssetReadinessIndicator"("severity");

-- CreateIndex
CREATE INDEX "AssetReadinessIndicator_isResolved_idx" ON "AssetReadinessIndicator"("isResolved");

-- CreateIndex
CREATE INDEX "AssetRiskIndicator_creativeAssetId_idx" ON "AssetRiskIndicator"("creativeAssetId");

-- CreateIndex
CREATE INDEX "AssetRiskIndicator_riskKey_idx" ON "AssetRiskIndicator"("riskKey");

-- CreateIndex
CREATE INDEX "AssetRiskIndicator_severity_idx" ON "AssetRiskIndicator"("severity");

-- CreateIndex
CREATE INDEX "AssetRiskIndicator_isResolved_idx" ON "AssetRiskIndicator"("isResolved");

-- CreateIndex
CREATE INDEX "AssetEvidenceRequirement_creativeAssetId_idx" ON "AssetEvidenceRequirement"("creativeAssetId");

-- CreateIndex
CREATE INDEX "AssetEvidenceRequirement_status_idx" ON "AssetEvidenceRequirement"("status");

-- CreateIndex
CREATE UNIQUE INDEX "AssetEvidenceRequirement_creativeAssetId_requirementKey_key" ON "AssetEvidenceRequirement"("creativeAssetId", "requirementKey");

-- CreateIndex
CREATE INDEX "CreativeAssetEvidence_creativeAssetId_idx" ON "CreativeAssetEvidence"("creativeAssetId");

-- CreateIndex
CREATE INDEX "CreativeAssetEvidence_evidenceRecordId_idx" ON "CreativeAssetEvidence"("evidenceRecordId");

-- CreateIndex
CREATE UNIQUE INDEX "CreativeAssetEvidence_creativeAssetId_evidenceRecordId_key" ON "CreativeAssetEvidence"("creativeAssetId", "evidenceRecordId");

-- CreateIndex
CREATE INDEX "AssetRecommendedAction_creativeAssetId_idx" ON "AssetRecommendedAction"("creativeAssetId");

-- CreateIndex
CREATE INDEX "AssetRecommendedAction_status_idx" ON "AssetRecommendedAction"("status");

-- CreateIndex
CREATE INDEX "AssetRecommendedAction_dueAt_idx" ON "AssetRecommendedAction"("dueAt");

-- AddForeignKey
ALTER TABLE "CreativeAsset" ADD CONSTRAINT "CreativeAsset_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreativeAsset" ADD CONSTRAINT "CreativeAsset_sourceReferenceId_fkey" FOREIGN KEY ("sourceReferenceId") REFERENCES "SourceReference"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetVersion" ADD CONSTRAINT "AssetVersion_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetMetadata" ADD CONSTRAINT "AssetMetadata_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetOwnership" ADD CONSTRAINT "AssetOwnership_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetHealthProfile" ADD CONSTRAINT "AssetHealthProfile_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetReadinessIndicator" ADD CONSTRAINT "AssetReadinessIndicator_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetRiskIndicator" ADD CONSTRAINT "AssetRiskIndicator_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetEvidenceRequirement" ADD CONSTRAINT "AssetEvidenceRequirement_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreativeAssetEvidence" ADD CONSTRAINT "CreativeAssetEvidence_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreativeAssetEvidence" ADD CONSTRAINT "CreativeAssetEvidence_evidenceRecordId_fkey" FOREIGN KEY ("evidenceRecordId") REFERENCES "EvidenceRecord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetRecommendedAction" ADD CONSTRAINT "AssetRecommendedAction_creativeAssetId_fkey" FOREIGN KEY ("creativeAssetId") REFERENCES "CreativeAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
