import {
  FiAlertTriangle,
  FiArrowRight,
  FiBookOpen,
  FiBox,
  FiBriefcase,
  FiCalendar,
  FiDatabase,
  FiMessageSquare,
  FiSearch,
  FiSend,
  FiShield,
  FiStar,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const overviewCards = [
  {
    title: "Creative Asset Health",
    value: "1,247",
    label: "Total Assets",
    icon: FiDatabase,
    accent: "blue",
    stats: [
      { value: "892", label: "Healthy", tone: "green" },
      { value: "198", label: "At Risk", tone: "orange" },
      { value: "157", label: "Needs Attention", tone: "red" },
    ],
    link: "View full analysis",
  },
  {
    title: "Evidence Readiness",
    value: "76%",
    label: "Evidence Complete",
    icon: FiBriefcase,
    accent: "purple",
    stats: [
      { value: "724", label: "Complete", tone: "green" },
      { value: "231", label: "Missing", tone: "orange" },
      { value: "292", label: "Ownership Gaps", tone: "red" },
    ],
    link: "View evidence report",
  },
  {
    title: "Operational Actions",
    value: "14",
    label: "Urgent Actions",
    icon: FiTarget,
    accent: "blue",
    stats: [
      { value: "28", label: "Pending Reviews", tone: "orange" },
      { value: "67", label: "Outstanding Tasks", tone: "orange" },
      { value: "45", label: "Completed", tone: "green" },
    ],
    link: "View action centre",
  },
  {
    title: "Opportunity Intelligence",
    value: "$2.4M",
    label: "Potential Value",
    icon: FiStar,
    accent: "purple",
    stats: [
      { value: "12", label: "Licensing", tone: "green" },
      { value: "8", label: "Sync", tone: "orange" },
      { value: "6", label: "Partnerships", tone: "purple" },
    ],
    link: "View opportunities",
  },
];

const intelligencePanels = [
  {
    title: "Catalogue Intelligence",
    icon: FiDatabase,
    rows: [
      ["Asset Readiness", "82%", "green"],
      ["Missing Metadata", "156", "orange"],
      ["Rights Status", "94% Clear", "green"],
      ["Evidence Completeness", "76%", "orange"],
      ["Latest Changes", "23 new", "blue"],
    ],
    link: "View catalogue intelligence",
  },
  {
    title: "Creative Identity Intelligence",
    icon: FiUsers,
    rows: [
      ["Artist Identity Status", "Strong", "green"],
      ["Brand Development", "In Progress", "blue"],
      ["Creative Positioning", "Differentiated", "green"],
      ["Strategic Growth Areas", "3 Identified", "purple"],
    ],
    link: "View identity intelligence",
  },
  {
    title: "Relationship Intelligence",
    icon: FiUsers,
    rows: [
      ["Key Collaborators", "16", "green"],
      ["Industry Relationships", "38", "blue"],
      ["Relationship Health", "Good", "green"],
      ["Important Follow-ups", "7", "orange"],
    ],
    link: "View relationships",
  },
  {
    title: "Business Intelligence",
    icon: FiBarIcon,
    rows: [
      ["Asset Growth (YTD)", "+18%", "green"],
      ["Commercial Activity", "Strong", "green"],
      ["Revenue Opportunity Pipeline", "$2.4M", "blue"],
      ["Strategic Performance", "Above Target", "green"],
    ],
    link: "View business intelligence",
  },
  {
    title: "Institutional Memory",
    icon: FiBookOpen,
    rows: [
      ["Recent Lessons", "12", "green"],
      ["Important Decisions", "8", "green"],
      ["Historical Insights", "23", "blue"],
      ["Knowledge Records", "156", "blue"],
    ],
    link: "View institutional memory",
  },
];

const riskRows = [
  ["Missing Documentation", "87", "red"],
  ["Rights Expiry", "24", "orange"],
  ["Ownership Gaps", "19", "orange"],
  ["Unclear Licensing", "14", "yellow"],
  ["Contract Expiry", "9", "yellow"],
];

const alerts = [
  ["3 contracts expiring within 30 days", "High", "Action Required"],
  ["87 assets missing critical documentation", "High", "Action Required"],
  ["19 ownership records need verification", "Medium", "Review Required"],
];

const priorities = [
  ["Rights audit review", "16 May", "High Priority"],
  ["Quarterly business review", "20 May", "Medium Priority"],
  ["Partnership proposal follow-up", "23 May", "Medium Priority"],
];

const assistantPrompts = [
  { title: "Explain the top risks", subtitle: "Get detailed risk analysis", icon: FiShield },
  { title: "Summarise business health", subtitle: "Current status overview", icon: FiMessageSquare },
  { title: "What needs my attention?", subtitle: "Priority actions summary", icon: FiTarget },
  { title: "Find relevant knowledge", subtitle: "Search institutional memory", icon: FiSearch },
  { title: "Recommend next steps", subtitle: "AI suggested actions", icon: FiBox },
];

function FiBarIcon(props: { className?: string; "aria-hidden"?: boolean }) {
  return <FiBriefcase {...props} />;
}

function toneClass(tone: string) {
  const classes: Record<string, string> = {
    blue: "text-[#2f52ff]",
    green: "text-[#00965f]",
    orange: "text-[#ff7a00]",
    purple: "text-[#6f3df5]",
    red: "text-[#ef3f35]",
    yellow: "text-[#f6a600]",
  };

  return classes[tone] ?? "text-[#4f5a7a]";
}

function iconAccent(accent: string) {
  return accent === "purple"
    ? "bg-[#f3eaff] text-[#8738f4]"
    : "bg-[#edf3ff] text-[#245cff]";
}

function MiniTrend() {
  return (
    <svg viewBox="0 0 150 48" className="h-12 w-24" aria-hidden="true">
      <polyline
        points="4,38 20,37 32,39 44,25 60,26 72,20 86,28 104,10 120,16 136,8 148,13"
        fill="none"
        stroke="#3f46ff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[4, 44, 72, 104, 136].map((x, index) => (
        <circle key={x} cx={x} cy={[38, 25, 20, 10, 8][index]} r="3" fill="#3f46ff" />
      ))}
    </svg>
  );
}

function SparkLine() {
  return (
    <svg viewBox="0 0 260 72" className="h-20 w-full" aria-hidden="true">
      <polyline
        points="0,58 24,48 48,45 72,38 96,35 120,28 144,34 168,43 192,33 216,36 240,31 260,22"
        fill="none"
        stroke="#2f52ff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[0, 48, 96, 144, 192, 240].map((x, index) => (
        <circle key={x} cx={x} cy={[58, 45, 35, 34, 33, 31][index]} r="4" fill="#2f52ff" />
      ))}
    </svg>
  );
}

function OverviewCard({ card }: { card: (typeof overviewCards)[number] }) {
  const Icon = card.icon;

  return (
    <article className="rounded-lg border border-[#e1e6f1] bg-white p-5 shadow-[0_12px_30px_rgba(32,43,78,0.06)]">
      <div className="flex items-start gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${iconAccent(card.accent)}`}>
          <Icon className="h-6 w-6" aria-hidden={true} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#101a3d]">{card.title}</h3>
          <p className="mt-3 text-3xl font-semibold text-[#3448ff]">{card.value}</p>
          <p className="text-sm text-[#4f5a7a]">{card.label}</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 border-t border-[#edf0f6] pt-4">
        {card.stats.map((stat) => (
          <div key={stat.label} className="space-y-1 text-center">
            <p className={`text-lg font-semibold ${toneClass(stat.tone)}`}>{stat.value}</p>
            <p className="text-xs leading-4 text-[#101a3d]">{stat.label}</p>
          </div>
        ))}
      </div>
      <a className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#3448ff]" href="#">
        {card.link}
        <FiArrowRight className="h-3 w-3" aria-hidden="true" />
      </a>
    </article>
  );
}

function IntelligencePanel({ panel }: { panel: (typeof intelligencePanels)[number] }) {
  const Icon = panel.icon;

  return (
    <article className="rounded-lg border border-[#e1e6f1] bg-white shadow-[0_12px_30px_rgba(32,43,78,0.05)]">
      <header className="flex items-center gap-3 border-b border-[#edf0f6] px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef0ff] text-[#3448ff]">
          <Icon className="h-5 w-5" aria-hidden={true} />
        </span>
        <h3 className="text-sm font-semibold text-[#101a3d]">{panel.title}</h3>
      </header>
      <div className="divide-y divide-[#edf0f6] px-5">
        {panel.rows.map(([label, value, tone]) => (
          <div key={label} className="flex items-center justify-between gap-4 py-3 text-sm">
            <span className="text-[#101a3d]">{label}</span>
            <span className={`font-semibold ${toneClass(tone)}`}>{value}</span>
          </div>
        ))}
      </div>
      <a className="inline-flex items-center gap-2 px-5 pb-4 pt-1 text-xs font-semibold text-[#3448ff]" href="#">
        {panel.link}
        <FiArrowRight className="h-3 w-3" aria-hidden="true" />
      </a>
    </article>
  );
}

function RiskHealthPanel() {
  return (
    <article className="rounded-lg border border-[#e1e6f1] bg-white shadow-[0_12px_30px_rgba(32,43,78,0.05)] xl:col-span-2">
      <header className="flex items-center gap-3 border-b border-[#edf0f6] px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef0ff] text-[#3448ff]">
          <FiShield className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-sm font-semibold text-[#101a3d]">Risk & Health Intelligence</h3>
      </header>
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-[#edf0f6] p-5 lg:border-b-0 lg:border-r">
          <h4 className="text-xs font-semibold text-[#101a3d]">Top Risks</h4>
          <div className="mt-4 space-y-3">
            {riskRows.map(([label, value, tone]) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-[#4f5a7a]">
                  <span className={`h-2 w-2 rounded-full bg-current ${toneClass(tone)}`} />
                  {label}
                </span>
                <span className="font-medium text-[#101a3d]">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-semibold text-[#101a3d]">Health Trend (30 Days)</h4>
            <span className="text-xs font-semibold text-[#00965f]">+6% improvement</span>
          </div>
          <SparkLine />
          <div className="mt-2 flex items-center justify-between border-t border-[#edf0f6] py-3 text-sm">
            <span className="font-medium text-[#101a3d]">Assets Requiring Intervention</span>
            <span className="font-semibold text-[#101a3d]">42</span>
          </div>
          <div>
            <p className="text-sm font-medium text-[#101a3d]">Readiness Score Distribution</p>
            <div className="mt-3 flex h-4 overflow-hidden rounded-full">
              <span className="w-[9%] bg-[#ef3f35]" />
              <span className="w-[21%] bg-[#ff7a00]" />
              <span className="w-[45%] bg-[#f4c84d]" />
              <span className="w-[25%] bg-[#48bd83]" />
            </div>
            <div className="mt-2 grid grid-cols-4 text-center text-xs text-[#4f5a7a]">
              <span>9%</span>
              <span>21%</span>
              <span>45%</span>
              <span>25%</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function AlertsPanel() {
  return (
    <article className="rounded-lg border border-[#e1e6f1] bg-white shadow-[0_12px_30px_rgba(32,43,78,0.05)]">
      <header className="flex items-center gap-3 px-5 py-4">
        <FiAlertTriangle className="h-5 w-5 text-[#ef3f35]" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-[#101a3d]">Critical Alerts</h3>
      </header>
      <div className="divide-y divide-[#edf0f6] px-5">
        {alerts.map(([label, priority, status]) => (
          <div key={label} className="grid gap-3 py-3 text-sm md:grid-cols-[1fr_90px_130px]">
            <span className="flex items-center gap-2 text-[#101a3d]">
              <span className="h-2 w-2 rounded-full bg-[#ef3f35]" />
              {label}
            </span>
            <span className={priority === "High" ? "font-semibold text-[#ef3f35]" : "font-semibold text-[#ff7a00]"}>
              {priority}
            </span>
            <span className="text-[#101a3d]">{status}</span>
          </div>
        ))}
      </div>
      <a className="inline-flex items-center gap-2 px-5 pb-4 pt-1 text-xs font-semibold text-[#3448ff]" href="#">
        View all alerts
        <FiArrowRight className="h-3 w-3" aria-hidden="true" />
      </a>
    </article>
  );
}

function PriorityPanel() {
  return (
    <article className="rounded-lg border border-[#e1e6f1] bg-white shadow-[0_12px_30px_rgba(32,43,78,0.05)]">
      <header className="flex items-center gap-3 px-5 py-4">
        <FiCalendar className="h-5 w-5 text-[#6f3df5]" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-[#101a3d]">Upcoming Priority</h3>
      </header>
      <div className="divide-y divide-[#edf0f6] px-5">
        {priorities.map(([label, date, priority]) => (
          <div key={label} className="grid gap-3 py-3 text-sm md:grid-cols-[1fr_80px_130px]">
            <span className="flex items-center gap-2 text-[#101a3d]">
              <span className="h-2 w-2 rounded-full bg-[#8b93aa]" />
              {label}
            </span>
            <span className="text-[#101a3d]">{date}</span>
            <span className={priority === "High Priority" ? "font-semibold text-[#ef3f35]" : "font-semibold text-[#ff7a00]"}>
              {priority}
            </span>
          </div>
        ))}
      </div>
      <a className="inline-flex items-center gap-2 px-5 pb-4 pt-1 text-xs font-semibold text-[#3448ff]" href="#">
        View full calendar
        <FiArrowRight className="h-3 w-3" aria-hidden="true" />
      </a>
    </article>
  );
}

function AssistantPanel() {
  return (
    <aside className="rounded-lg border border-[#e1e6f1] bg-white p-5 shadow-[0_12px_30px_rgba(32,43,78,0.05)] xl:sticky xl:top-8 xl:h-[calc(100vh-4rem)] xl:min-h-[820px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FiZap className="h-5 w-5 text-[#6f3df5]" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-[#101a3d]">AI Creative Operations Assistant</h2>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center text-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#e8e9ff] shadow-[0_0_36px_rgba(92,74,255,0.45)]">
          <div className="absolute h-20 w-20 rounded-full bg-[#7b65ff]/40 blur-md" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1bb7ff] to-[#6d4cff] text-white shadow-lg">
            <FiZap className="h-7 w-7" aria-hidden="true" />
          </div>
        </div>
        <h3 className="mt-10 text-xl font-semibold text-[#101a3d]">Ask Chronicle Intelligence</h3>
        <p className="mt-2 text-sm text-[#6d7799]">Your AI operations partner</p>
      </div>

      <div className="mt-8 space-y-3">
        {assistantPrompts.map((prompt) => {
          const Icon = prompt.icon;

          return (
            <button
              key={prompt.title}
              type="button"
              className="flex w-full items-center gap-4 rounded-lg border border-[#e8ecf4] bg-white px-4 py-4 text-left shadow-[0_8px_18px_rgba(32,43,78,0.04)] transition hover:border-[#cbd3ff]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0ecff] text-[#6045f2]">
                <Icon className="h-5 w-5" aria-hidden={true} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-[#101a3d]">{prompt.title}</span>
                <span className="mt-1 block text-sm text-[#6d7799]">{prompt.subtitle}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-16 text-center text-xs leading-5 text-[#6d7799]">
        <p>AI provides recommendations only.</p>
        <p>Human ownership and decisions remain central.</p>
      </div>

      <div className="mt-8 flex items-center gap-3 rounded-lg border border-[#e1e6f1] px-4 py-3">
        <span className="flex-1 text-sm text-[#8b93aa]">Ask a question...</span>
        <button
          type="button"
          aria-label="Send question"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4d46ff] text-white shadow-lg shadow-[#4d46ff]/25"
        >
          <FiSend className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}

export function OwnerCommandCentre() {
  return (
    <div className="min-h-screen bg-[#f8faff] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1680px] gap-6 xl:grid-cols-[1fr_340px]">
        <section className="min-w-0">
          <div className="grid gap-5 border-b border-[#e1e6f1] pb-5 lg:grid-cols-[1fr_640px]">
            <div>
              <p className="text-sm font-semibold text-[#3a37cc]">
                Chronicle Creative Operations Intelligence
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#101a3d] md:text-5xl">
                Owner Command Centre
              </h1>
              <p className="mt-3 text-base text-[#6d7799]">
                Executive operations and intelligence overview
              </p>
            </div>

            <div className="grid rounded-lg border border-[#e1e6f1] bg-white shadow-[0_12px_30px_rgba(32,43,78,0.05)] md:grid-cols-4">
              <div className="border-b border-[#edf0f6] p-5 md:border-b-0 md:border-r">
                <p className="text-xs font-semibold text-[#101a3d]">Overall Health Score</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-semibold leading-none text-[#3f46ff]">87</span>
                  <span className="pb-1 text-lg text-[#101a3d]">/100</span>
                  <MiniTrend />
                </div>
                <p className="mt-2 text-sm font-semibold text-[#00965f]">Strong</p>
              </div>
              <div className="border-b border-[#edf0f6] p-5 md:border-b-0 md:border-r">
                <p className="text-xs font-semibold text-[#101a3d]">System Status</p>
                <p className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#101a3d]">
                  <span className="h-3 w-3 rounded-full bg-[#12aa69]" />
                  All Systems Active
                </p>
                <p className="mt-4 text-sm text-[#4f5a7a]">Operational</p>
              </div>
              <div className="border-b border-[#edf0f6] p-5 md:border-b-0 md:border-r">
                <p className="text-xs font-semibold text-[#101a3d]">Last Intelligence Refresh</p>
                <p className="mt-6 text-base font-semibold text-[#101a3d]">15 May 2025, 8:42 AM</p>
                <p className="mt-4 text-sm text-[#4f5a7a]">Auto-refresh: Enabled</p>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-[#101a3d]">Critical Alerts</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-4xl font-semibold text-[#ef3f35]">3</span>
                  <FiAlertTriangle className="h-7 w-7 text-[#ef3f35]" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm text-[#4f5a7a]">Require Attention</p>
              </div>
            </div>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-[#101a3d]">Intelligence Overview</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {overviewCards.map((card) => (
              <OverviewCard key={card.title} card={card} />
            ))}
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-3">
            <IntelligencePanel panel={intelligencePanels[0]} />
            <RiskHealthPanel />
            {intelligencePanels.slice(1).map((panel) => (
              <IntelligencePanel key={panel.title} panel={panel} />
            ))}
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_1.2fr]">
            <AlertsPanel />
            <PriorityPanel />
          </div>
        </section>

        <AssistantPanel />
      </div>
    </div>
  );
}
