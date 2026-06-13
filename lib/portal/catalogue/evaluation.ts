import {
  AssetIndicatorSeverity,
  AssetReadinessState,
  type AssetEvidenceRequirement,
  type AssetMetadata,
  type AssetOwnership,
  type AssetRiskIndicator,
  type CreativeAsset,
} from "@/lib/generated/prisma/client";

type EvaluationAsset = CreativeAsset & {
  metadata: AssetMetadata | null;
  ownershipRecords: AssetOwnership[];
  evidenceRequirements: AssetEvidenceRequirement[];
  riskIndicators: AssetRiskIndicator[];
};

export type CatalogueReadinessEvaluation = {
  readinessState: AssetReadinessState;
  readinessScore: number;
  metadataScore: number;
  evidenceScore: number;
  ownershipScore: number;
  opportunityScore: number;
  riskScore: number;
  missingInformation: Record<string, string>;
  riskIndicators: Array<{
    riskKey: string;
    label: string;
    severity: AssetIndicatorSeverity;
    mitigationNote: string;
  }>;
  recommendedActions: Array<{
    actionKey: string;
    title: string;
    rationale: string;
  }>;
};

function scoreFromRatio(completed: number, total: number) {
  if (total === 0) {
    return 100;
  }

  return Math.round((completed / total) * 100);
}

export function evaluateCatalogueAssetReadiness(
  asset: EvaluationAsset,
): CatalogueReadinessEvaluation {
  const missingInformation: Record<string, string> = {};
  const riskIndicators: CatalogueReadinessEvaluation["riskIndicators"] = [];
  const recommendedActions: CatalogueReadinessEvaluation["recommendedActions"] = [];

  const metadataChecks = [
    { key: "genre", label: "Genre is missing", present: Boolean(asset.metadata?.genre) },
    { key: "mood", label: "Mood is missing", present: Boolean(asset.metadata?.mood) },
    { key: "duration", label: "Duration is missing", present: Boolean(asset.metadata?.durationSeconds) },
    {
      key: "registration-code",
      label: "Registration or reference code is missing",
      present: Boolean(asset.metadata?.registrationCode || asset.metadata?.publishingIdentifier),
    },
  ];

  for (const check of metadataChecks) {
    if (!check.present) {
      missingInformation[check.key] = check.label;
    }
  }

  const metadataScore = scoreFromRatio(
    metadataChecks.filter((check) => check.present).length,
    metadataChecks.length,
  );

  const evidenceChecks = asset.evidenceRequirements.map((requirement) => ({
    key: requirement.requirementKey,
    label: requirement.label,
    present: requirement.status === "ATTACHED" || requirement.status === "VERIFIED" || requirement.status === "WAIVED",
  }));

  for (const check of evidenceChecks) {
    if (!check.present) {
      missingInformation[`evidence-${check.key}`] = `Evidence required: ${check.label}`;
    }
  }

  const evidenceScore = scoreFromRatio(
    evidenceChecks.filter((check) => check.present).length,
    evidenceChecks.length,
  );

  const verifiedOwnership = asset.ownershipRecords.some(
    (record) => record.evidenceStatus === "ATTACHED" || record.evidenceStatus === "VERIFIED",
  );
  const ownershipScore = verifiedOwnership ? 100 : 0;

  if (!verifiedOwnership) {
    missingInformation["ownership-evidence"] = "Ownership evidence has not been attached or verified";
    riskIndicators.push({
      riskKey: "ownership-unverified",
      label: "Ownership evidence is incomplete",
      severity: AssetIndicatorSeverity.HIGH,
      mitigationNote: "Attach or verify ownership/contributor evidence before activation.",
    });
  }

  const unresolvedRiskCount = asset.riskIndicators.filter((risk) => !risk.isResolved).length;
  const riskScore = Math.max(0, 100 - unresolvedRiskCount * 25 - riskIndicators.length * 25);

  if (metadataScore < 100) {
    recommendedActions.push({
      actionKey: "complete-metadata",
      title: "Complete asset metadata",
      rationale: "Metadata gaps reduce catalogue search, activation, and opportunity readiness.",
    });
  }

  if (evidenceScore < 100) {
    recommendedActions.push({
      actionKey: "attach-required-evidence",
      title: "Attach required evidence",
      rationale: "Evidence gaps prevent trustworthy operational decisions.",
    });
  }

  if (ownershipScore < 100) {
    recommendedActions.push({
      actionKey: "verify-ownership-context",
      title: "Verify ownership context",
      rationale: "Ownership uncertainty creates operational and commercial risk.",
    });
  }

  const readinessScore = Math.round(
    metadataScore * 0.25 + evidenceScore * 0.3 + ownershipScore * 0.25 + riskScore * 0.2,
  );

  let readinessState: AssetReadinessState = AssetReadinessState.NEEDS_REVIEW;

  if (Object.keys(missingInformation).length > 0) {
    readinessState = AssetReadinessState.MISSING_EVIDENCE;
  }

  if (riskScore < 75) {
    readinessState = AssetReadinessState.ACTION_REQUIRED;
  }

  if (readinessScore >= 85 && evidenceScore === 100 && ownershipScore === 100 && riskScore >= 75) {
    readinessState = AssetReadinessState.READY_FOR_ACTIVATION;
  }

  return {
    readinessState,
    readinessScore,
    metadataScore,
    evidenceScore,
    ownershipScore,
    opportunityScore: readinessState === AssetReadinessState.READY_FOR_ACTIVATION ? 75 : 25,
    riskScore,
    missingInformation,
    riskIndicators,
    recommendedActions,
  };
}
