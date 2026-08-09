export type IntelligenceTone = "blue" | "green" | "orange" | "purple" | "red" | "yellow";

export type IntelligenceStat = {
  value: string;
  label: string;
  tone: IntelligenceTone;
};

export type IntelligenceOverviewCard = {
  title: string;
  value: string;
  label: string;
  icon: "database" | "briefcase" | "target" | "star";
  accent: "blue" | "purple";
  stats: IntelligenceStat[];
  link: string;
};

export type IntelligencePanel = {
  title: string;
  icon: "database" | "users" | "briefcase" | "book";
  rows: Array<{
    label: string;
    value: string;
    tone: IntelligenceTone;
  }>;
  link: string;
};

export type RiskHealthIntelligence = {
  topRisks: Array<{
    label: string;
    value: string;
    tone: IntelligenceTone;
  }>;
  trendLabel: string;
  assetsRequiringIntervention: string;
  readinessDistribution: Array<{
    label: string;
    value: number;
    tone: IntelligenceTone;
  }>;
};

export type CommandCentreAlert = {
  label: string;
  priority: "High" | "Medium" | "Low";
  status: string;
};

export type CommandCentrePriority = {
  label: string;
  date: string;
  priority: "High Priority" | "Medium Priority" | "Low Priority";
};

export type AssistantPrompt = {
  title: string;
  subtitle: string;
  icon: "shield" | "message" | "target" | "search" | "box";
};

export type OwnerCommandCentreData = {
  statusStrip: {
    overallHealthScore: number;
    overallHealthLabel: string;
    systemStatus: string;
    systemStatusDetail: string;
    lastIntelligenceRefresh: string;
    refreshDetail: string;
    criticalAlertCount: number;
    criticalAlertDetail: string;
  };
  overviewCards: IntelligenceOverviewCard[];
  intelligencePanels: IntelligencePanel[];
  riskHealth: RiskHealthIntelligence;
  alerts: CommandCentreAlert[];
  priorities: CommandCentrePriority[];
  assistantPrompts: AssistantPrompt[];
};
