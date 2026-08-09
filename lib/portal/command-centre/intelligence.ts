import "server-only";

import {
  AssetActionStatus,
  AssetEvidenceRequirementStatus,
  AssetReadinessState,
} from "@/lib/generated/prisma/client";
import type {
  CommandCentreAlert,
  CommandCentrePriority,
  IntelligencePanel,
  IntelligenceTone,
  OwnerCommandCentreData,
  RiskHealthIntelligence,
} from "@/lib/portal/command-centre/types";
import { developmentPortalContext } from "@/lib/portal/development-auth";
import { portalDb } from "@/lib/portal/db";

const implementedAssistantPrompts = [
  { title: "Explain the top risks", subtitle: "Get detailed risk analysis", icon: "shield" },
  { title: "Summarise business health", subtitle: "Current status overview", icon: "message" },
  { title: "What needs my attention?", subtitle: "Priority actions summary", icon: "target" },
  { title: "Find relevant knowledge", subtitle: "Search institutional memory", icon: "search" },
  { title: "Recommend next steps", subtitle: "AI suggested actions", icon: "box" },
] as const;

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatPercentage(value: number) {
  if (!Number.isFinite(value)) {
    return "0%";
  }

  return `${Math.round(value)}%`;
}

function formatDate(value: Date | null | undefined) {
  if (!value) {
    return "No intelligence refresh yet";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}

function healthLabel(score: number) {
  if (score >= 85) {
    return "Strong";
  }

  if (score >= 65) {
    return "Stable";
  }

  if (score >= 40) {
    return "Needs Attention";
  }

  return "Critical";
}

function priorityFromSeverity(severity: string): CommandCentreAlert["priority"] {
  if (severity === "CRITICAL" || severity === "HIGH") {
    return "High";
  }

  if (severity === "MEDIUM") {
    return "Medium";
  }

  return "Low";
}

function toneFromSeverity(severity: string): IntelligenceTone {
  if (severity === "CRITICAL" || severity === "HIGH") {
    return "red";
  }

  if (severity === "MEDIUM") {
    return "orange";
  }

  return "yellow";
}

function priorityDate(value: Date | null) {
  if (!value) {
    return "Open";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  }).format(value);
}

function priorityLabel(value: Date | null): CommandCentrePriority["priority"] {
  if (!value) {
    return "Medium Priority";
  }

  const now = Date.now();
  const due = value.getTime();
  const days = Math.ceil((due - now) / 86_400_000);

  if (days <= 7) {
    return "High Priority";
  }

  if (days <= 30) {
    return "Medium Priority";
  }

  return "Low Priority";
}

function buildReadinessDistribution(scores: number[]) {
  const total = scores.length || 1;
  const critical = scores.filter((score) => score < 40).length;
  const attention = scores.filter((score) => score >= 40 && score < 65).length;
  const stable = scores.filter((score) => score >= 65 && score < 85).length;
  const strong = scores.filter((score) => score >= 85).length;

  return [
    { label: "Critical", value: Math.round((critical / total) * 100), tone: "red" as const },
    { label: "Attention", value: Math.round((attention / total) * 100), tone: "orange" as const },
    { label: "Stable", value: Math.round((stable / total) * 100), tone: "yellow" as const },
    { label: "Strong", value: Math.round((strong / total) * 100), tone: "green" as const },
  ];
}

function placeholderPanels(): IntelligencePanel[] {
  return [
    {
      title: "Creative Identity Intelligence",
      icon: "users",
      rows: [
        { label: "Artist Identity Status", value: "Pending foundation", tone: "blue" },
        { label: "Brand Development", value: "Not connected", tone: "orange" },
        { label: "Creative Positioning", value: "Awaiting module", tone: "purple" },
        { label: "Strategic Growth Areas", value: "Future domain", tone: "blue" },
      ],
      link: "View identity intelligence",
    },
    {
      title: "Relationship Intelligence",
      icon: "users",
      rows: [
        { label: "Key Collaborators", value: "Pending module", tone: "blue" },
        { label: "Industry Relationships", value: "Not connected", tone: "orange" },
        { label: "Relationship Health", value: "Future signal", tone: "purple" },
        { label: "Important Follow-ups", value: "Awaiting actions", tone: "blue" },
      ],
      link: "View relationships",
    },
    {
      title: "Business Intelligence",
      icon: "briefcase",
      rows: [
        { label: "Asset Growth (YTD)", value: "Catalogue-linked", tone: "green" },
        { label: "Commercial Activity", value: "Pending module", tone: "blue" },
        { label: "Revenue Opportunity Pipeline", value: "Future domain", tone: "purple" },
        { label: "Strategic Performance", value: "Awaiting health model", tone: "orange" },
      ],
      link: "View business intelligence",
    },
    {
      title: "Institutional Memory",
      icon: "book",
      rows: [
        { label: "Recent Domain Events", value: "Connected below", tone: "green" },
        { label: "Important Decisions", value: "Audit-backed", tone: "blue" },
        { label: "Historical Insights", value: "Future domain", tone: "purple" },
        { label: "Knowledge Records", value: "Evidence-backed", tone: "green" },
      ],
      link: "View institutional memory",
    },
  ];
}

function emptyCommandCentreData(): OwnerCommandCentreData {
  return {
    statusStrip: {
      overallHealthScore: 0,
      overallHealthLabel: "No Data",
      systemStatus: "Awaiting Operational Data",
      systemStatusDetail: "Connected to intelligence foundation",
      lastIntelligenceRefresh: "No intelligence refresh yet",
      refreshDetail: "Auto-refresh: Pending data",
      criticalAlertCount: 0,
      criticalAlertDetail: "No active alerts",
    },
    overviewCards: [
      {
        title: "Creative Asset Health",
        value: "0",
        label: "Total Assets",
        icon: "database",
        accent: "blue",
        stats: [
          { value: "0", label: "Healthy", tone: "green" },
          { value: "0", label: "At Risk", tone: "orange" },
          { value: "0", label: "Needs Attention", tone: "red" },
        ],
        link: "View full analysis",
      },
      {
        title: "Evidence Readiness",
        value: "0%",
        label: "Evidence Complete",
        icon: "briefcase",
        accent: "purple",
        stats: [
          { value: "0", label: "Complete", tone: "green" },
          { value: "0", label: "Missing", tone: "orange" },
          { value: "0", label: "Ownership Gaps", tone: "red" },
        ],
        link: "View evidence report",
      },
      {
        title: "Operational Actions",
        value: "0",
        label: "Urgent Actions",
        icon: "target",
        accent: "blue",
        stats: [
          { value: "0", label: "Pending Reviews", tone: "orange" },
          { value: "0", label: "Outstanding Tasks", tone: "orange" },
          { value: "0", label: "Completed", tone: "green" },
        ],
        link: "View action centre",
      },
      {
        title: "Opportunity Intelligence",
        value: "0",
        label: "Ready Assets",
        icon: "star",
        accent: "purple",
        stats: [
          { value: "0", label: "Ready", tone: "green" },
          { value: "0", label: "Actions", tone: "orange" },
          { value: "0", label: "Reviewed", tone: "purple" },
        ],
        link: "View opportunities",
      },
    ],
    intelligencePanels: [
      {
        title: "Catalogue Intelligence",
        icon: "database",
        rows: [
          { label: "Asset Readiness", value: "0%", tone: "green" },
          { label: "Missing Metadata", value: "0", tone: "orange" },
          { label: "Rights Status", value: "0% Clear", tone: "green" },
          { label: "Evidence Completeness", value: "0%", tone: "orange" },
          { label: "Latest Changes", value: "0 new", tone: "blue" },
        ],
        link: "View catalogue intelligence",
      },
      ...placeholderPanels(),
    ],
    riskHealth: {
      topRisks: [],
      trendLabel: "No trend yet",
      assetsRequiringIntervention: "0",
      readinessDistribution: buildReadinessDistribution([]),
    },
    alerts: [],
    priorities: [],
    assistantPrompts: [...implementedAssistantPrompts],
  };
}

export async function getOwnerCommandCentreIntelligence(): Promise<OwnerCommandCentreData> {
  try {
    return await getPrismaBackedOwnerCommandCentreIntelligence();
  } catch (error) {
    console.error("Owner Command Centre intelligence aggregation failed", error);
    return {
      ...emptyCommandCentreData(),
      statusStrip: {
        ...emptyCommandCentreData().statusStrip,
        systemStatus: "Intelligence Foundation Connected",
        systemStatusDetail: "Awaiting database runtime",
      },
    };
  }
}

async function getPrismaBackedOwnerCommandCentreIntelligence(): Promise<OwnerCommandCentreData> {
  const workspace = await portalDb.workspace.findFirst({
    where: {
      slug: developmentPortalContext.workspace.slug,
    },
  });

  if (!workspace) {
    return emptyCommandCentreData();
  }

  const workspaceId = workspace.id;
  const sevenDaysAgo = new Date(Date.now() - 7 * 86_400_000);

  const [
    totalAssets,
    readyAssets,
    needsAttentionAssets,
    healthProfiles,
    evidenceComplete,
    evidenceMissing,
    ownershipGaps,
    openActions,
    inProgressActions,
    completedActions,
    criticalActions,
    unresolvedRisks,
    recentDomainEvents,
    recentAuditEvents,
    latestDomainEvent,
  ] = await Promise.all([
    portalDb.creativeAsset.count({ where: { workspaceId } }),
    portalDb.creativeAsset.count({
      where: { workspaceId, readinessState: AssetReadinessState.READY_FOR_ACTIVATION },
    }),
    portalDb.creativeAsset.count({
      where: {
        workspaceId,
        readinessState: {
          in: [
            AssetReadinessState.NEEDS_REVIEW,
            AssetReadinessState.MISSING_EVIDENCE,
            AssetReadinessState.ACTION_REQUIRED,
          ],
        },
      },
    }),
    portalDb.assetHealthProfile.findMany({
      where: { creativeAsset: { workspaceId } },
      select: {
        readinessScore: true,
        metadataScore: true,
        evidenceScore: true,
        ownershipScore: true,
        riskScore: true,
        calculatedAt: true,
      },
    }),
    portalDb.assetEvidenceRequirement.count({
      where: {
        creativeAsset: { workspaceId },
        status: {
          in: [
            AssetEvidenceRequirementStatus.ATTACHED,
            AssetEvidenceRequirementStatus.VERIFIED,
            AssetEvidenceRequirementStatus.WAIVED,
          ],
        },
      },
    }),
    portalDb.assetEvidenceRequirement.count({
      where: {
        creativeAsset: { workspaceId },
        status: {
          in: [AssetEvidenceRequirementStatus.REQUIRED, AssetEvidenceRequirementStatus.REQUESTED],
        },
      },
    }),
    portalDb.assetOwnership.count({
      where: {
        creativeAsset: { workspaceId },
        evidenceStatus: {
          in: [AssetEvidenceRequirementStatus.REQUIRED, AssetEvidenceRequirementStatus.REQUESTED],
        },
      },
    }),
    portalDb.assetRecommendedAction.count({
      where: {
        creativeAsset: { workspaceId },
        status: AssetActionStatus.OPEN,
      },
    }),
    portalDb.assetRecommendedAction.count({
      where: {
        creativeAsset: { workspaceId },
        status: {
          in: [AssetActionStatus.IN_PROGRESS, AssetActionStatus.BLOCKED],
        },
      },
    }),
    portalDb.assetRecommendedAction.count({
      where: {
        creativeAsset: { workspaceId },
        status: AssetActionStatus.COMPLETE,
      },
    }),
    portalDb.assetRecommendedAction.findMany({
      where: {
        creativeAsset: { workspaceId },
        status: {
          in: [AssetActionStatus.OPEN, AssetActionStatus.IN_PROGRESS, AssetActionStatus.BLOCKED],
        },
      },
      orderBy: [{ dueAt: "asc" }, { createdAt: "desc" }],
      take: 5,
    }),
    portalDb.assetRiskIndicator.findMany({
      where: {
        creativeAsset: { workspaceId },
        isResolved: false,
      },
      orderBy: [{ severity: "desc" }, { createdAt: "desc" }],
      take: 8,
    }),
    portalDb.domainEvent.count({
      where: {
        workspaceId,
        createdAt: { gte: sevenDaysAgo },
      },
    }),
    portalDb.auditEvent.count({
      where: {
        workspaceId,
        createdAt: { gte: sevenDaysAgo },
      },
    }),
    portalDb.domainEvent.findFirst({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const readinessScores = healthProfiles.map((profile) => profile.readinessScore);
  const averageReadiness =
    readinessScores.reduce((total, score) => total + score, 0) / (readinessScores.length || 1);
  const averageEvidence =
    healthProfiles.reduce((total, profile) => total + profile.evidenceScore, 0) /
    (healthProfiles.length || 1);
  const averageOwnership =
    healthProfiles.reduce((total, profile) => total + profile.ownershipScore, 0) /
    (healthProfiles.length || 1);
  const averageRisk =
    healthProfiles.reduce((total, profile) => total + profile.riskScore, 0) /
    (healthProfiles.length || 1);
  const healthyAssets = healthProfiles.filter((profile) => profile.readinessScore >= 85).length;
  const atRiskAssets = healthProfiles.filter(
    (profile) => profile.riskScore < 75 || profile.readinessScore < 65,
  ).length;
  const metadataGaps = healthProfiles.filter((profile) => profile.metadataScore < 100).length;
  const evidenceTotal = evidenceComplete + evidenceMissing;
  const evidenceReadiness = evidenceTotal === 0 ? 0 : (evidenceComplete / evidenceTotal) * 100;
  const openOperationalActions = openActions + inProgressActions;
  const criticalAlertCount =
    unresolvedRisks.filter((risk) => risk.severity === "CRITICAL" || risk.severity === "HIGH").length +
    criticalActions.filter((action) => action.status === AssetActionStatus.BLOCKED).length;

  const riskHealth: RiskHealthIntelligence = {
    topRisks: unresolvedRisks.slice(0, 5).map((risk) => ({
      label: risk.label,
      value: risk.severity,
      tone: toneFromSeverity(risk.severity),
    })),
    trendLabel: latestDomainEvent ? "Updated from operational events" : "No trend yet",
    assetsRequiringIntervention: formatNumber(needsAttentionAssets),
    readinessDistribution: buildReadinessDistribution(readinessScores),
  };

  const alerts: CommandCentreAlert[] = unresolvedRisks.slice(0, 3).map((risk) => ({
    label: risk.label,
    priority: priorityFromSeverity(risk.severity),
    status: "Action Required",
  }));

  const priorities: CommandCentrePriority[] = criticalActions.slice(0, 3).map((action) => ({
    label: action.title,
    date: priorityDate(action.dueAt),
    priority: priorityLabel(action.dueAt),
  }));

  return {
    statusStrip: {
      overallHealthScore: Math.round(averageReadiness),
      overallHealthLabel: healthLabel(averageReadiness),
      systemStatus: "Creative Intelligence Active",
      systemStatusDetail: "Operational data connected",
      lastIntelligenceRefresh: formatDate(latestDomainEvent?.createdAt),
      refreshDetail: `Recent events: ${formatNumber(recentDomainEvents + recentAuditEvents)}`,
      criticalAlertCount,
      criticalAlertDetail: criticalAlertCount > 0 ? "Require Attention" : "No active critical alerts",
    },
    overviewCards: [
      {
        title: "Creative Asset Health",
        value: formatNumber(totalAssets),
        label: "Total Assets",
        icon: "database",
        accent: "blue",
        stats: [
          { value: formatNumber(healthyAssets), label: "Healthy", tone: "green" },
          { value: formatNumber(atRiskAssets), label: "At Risk", tone: "orange" },
          { value: formatNumber(needsAttentionAssets), label: "Needs Attention", tone: "red" },
        ],
        link: "View full analysis",
      },
      {
        title: "Evidence Readiness",
        value: formatPercentage(evidenceReadiness),
        label: "Evidence Complete",
        icon: "briefcase",
        accent: "purple",
        stats: [
          { value: formatNumber(evidenceComplete), label: "Complete", tone: "green" },
          { value: formatNumber(evidenceMissing), label: "Missing", tone: "orange" },
          { value: formatNumber(ownershipGaps), label: "Ownership Gaps", tone: "red" },
        ],
        link: "View evidence report",
      },
      {
        title: "Operational Actions",
        value: formatNumber(openOperationalActions),
        label: "Urgent Actions",
        icon: "target",
        accent: "blue",
        stats: [
          { value: formatNumber(openActions), label: "Pending Reviews", tone: "orange" },
          { value: formatNumber(inProgressActions), label: "Outstanding Tasks", tone: "orange" },
          { value: formatNumber(completedActions), label: "Completed", tone: "green" },
        ],
        link: "View action centre",
      },
      {
        title: "Opportunity Intelligence",
        value: formatNumber(readyAssets),
        label: "Ready Assets",
        icon: "star",
        accent: "purple",
        stats: [
          { value: formatNumber(readyAssets), label: "Ready", tone: "green" },
          { value: formatNumber(openOperationalActions), label: "Actions", tone: "orange" },
          { value: formatNumber(completedActions), label: "Reviewed", tone: "purple" },
        ],
        link: "View opportunities",
      },
    ],
    intelligencePanels: [
      {
        title: "Catalogue Intelligence",
        icon: "database",
        rows: [
          { label: "Asset Readiness", value: formatPercentage(averageReadiness), tone: "green" },
          { label: "Missing Metadata", value: formatNumber(metadataGaps), tone: "orange" },
          { label: "Rights Status", value: `${formatPercentage(averageOwnership)} Clear`, tone: "green" },
          { label: "Evidence Completeness", value: formatPercentage(averageEvidence), tone: "orange" },
          { label: "Latest Changes", value: `${formatNumber(recentDomainEvents)} new`, tone: "blue" },
        ],
        link: "View catalogue intelligence",
      },
      ...placeholderPanels(),
    ],
    riskHealth: {
      ...riskHealth,
      trendLabel: averageRisk >= 75 ? "+ stable operational health" : "Risk review required",
    },
    alerts,
    priorities,
    assistantPrompts: [...implementedAssistantPrompts],
  };
}
