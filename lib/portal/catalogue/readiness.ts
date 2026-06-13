import {
  AssetLifecycleStatus,
  AssetReadinessState,
  CreativeAssetType,
  EvidenceType,
} from "@/lib/generated/prisma/client";

export const catalogueAssetTypes = [
  CreativeAssetType.SONG,
  CreativeAssetType.RECORDING,
  CreativeAssetType.COMPOSITION,
  CreativeAssetType.LYRICS,
  CreativeAssetType.ARRANGEMENT,
  CreativeAssetType.CREATIVE_CONCEPT,
  CreativeAssetType.VISUAL_ASSET,
  CreativeAssetType.OTHER,
] as const;

export const catalogueLifecycleStatuses = [
  AssetLifecycleStatus.DRAFT,
  AssetLifecycleStatus.IN_PROGRESS,
  AssetLifecycleStatus.REGISTERED,
  AssetLifecycleStatus.PUBLISHED,
  AssetLifecycleStatus.ACTIVE,
  AssetLifecycleStatus.ARCHIVED,
] as const;

export const catalogueReadinessStates = [
  AssetReadinessState.DRAFT_IMPORTED,
  AssetReadinessState.NEEDS_REVIEW,
  AssetReadinessState.MISSING_EVIDENCE,
  AssetReadinessState.READY_FOR_ACTIVATION,
  AssetReadinessState.OPPORTUNITY_IDENTIFIED,
  AssetReadinessState.ACTION_REQUIRED,
  AssetReadinessState.REVIEWED,
] as const;

export const defaultCatalogueEvidenceRequirements = [
  {
    requirementKey: "ownership-context",
    label: "Ownership or contributor context",
    evidenceType: EvidenceType.SUPPORTING_RECORD,
  },
  {
    requirementKey: "metadata-source",
    label: "Metadata source or catalogue record",
    evidenceType: EvidenceType.DOCUMENT,
  },
  {
    requirementKey: "asset-location",
    label: "Asset file, reference, or storage location",
    evidenceType: EvidenceType.LINK,
  },
] as const;

export const catalogueDomainEvents = {
  assetCreated: "CatalogueAssetCreated",
  assetReviewed: "CatalogueAssetReviewed",
  metadataUpdated: "CatalogueAssetMetadataUpdated",
  evidenceAttached: "EvidenceAttached",
  workflowStateChanged: "WorkflowStateChanged",
  healthIndicatorChanged: "HealthIndicatorChanged",
  opportunityIdentified: "OpportunityIdentified",
  requiredActionCreated: "RequiredActionCreated",
} as const;
