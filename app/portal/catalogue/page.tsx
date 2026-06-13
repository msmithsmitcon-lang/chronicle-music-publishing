import {
  catalogueLifecycleStatuses,
  catalogueReadinessStates,
  defaultCatalogueEvidenceRequirements,
} from "@/lib/portal/catalogue/readiness";

const readinessLabels: Record<string, string> = {
  DRAFT_IMPORTED: "Draft / Imported",
  NEEDS_REVIEW: "Needs Review",
  MISSING_EVIDENCE: "Missing Evidence",
  READY_FOR_ACTIVATION: "Ready for Activation",
  OPPORTUNITY_IDENTIFIED: "Opportunity Identified",
  ACTION_REQUIRED: "Action Required",
  REVIEWED: "Reviewed",
};

const lifecycleLabels: Record<string, string> = {
  DRAFT: "Draft",
  IN_PROGRESS: "In progress",
  REGISTERED: "Registered",
  PUBLISHED: "Published",
  ACTIVE: "Active",
  ARCHIVED: "Archived",
};

export default function PortalCataloguePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a55b]">
          Catalogue Intelligence
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">
          Asset Readiness Foundation
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-[#d7d0c3] md:text-base">
          Private operational surface for tracking catalogue asset readiness, evidence gaps,
          ownership context, risk, opportunity, and required actions.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7a55b]">
            Domain
          </p>
          <p className="mt-3 text-lg font-semibold text-white">CreativeAsset</p>
          <p className="mt-2 text-sm leading-6 text-[#d7d0c3]">
            Internal intelligence record for songs, recordings, compositions, lyrics,
            arrangements, concepts, and future asset categories.
          </p>
        </div>
        <div className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7a55b]">
            Evidence
          </p>
          <p className="mt-3 text-lg font-semibold text-white">Traceable readiness</p>
          <p className="mt-2 text-sm leading-6 text-[#d7d0c3]">
            Asset readiness is designed to connect to source references, evidence records,
            audit events, and domain events.
          </p>
        </div>
        <div className="border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7a55b]">
            Next Action
          </p>
          <p className="mt-3 text-lg font-semibold text-white">Human-reviewed</p>
          <p className="mt-2 text-sm leading-6 text-[#d7d0c3]">
            Recommendations are captured as operational actions. AI decision-making is not
            active in this foundation milestone.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c7a55b]">
            Readiness States
          </h2>
          <div className="grid gap-3">
            {catalogueReadinessStates.map((state) => (
              <div key={state} className="border border-white/10 px-4 py-3 text-sm text-[#f5f0e8]">
                {readinessLabels[state]}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c7a55b]">
            Lifecycle Status
          </h2>
          <div className="grid gap-3">
            {catalogueLifecycleStatuses.map((status) => (
              <div key={status} className="border border-white/10 px-4 py-3 text-sm text-[#f5f0e8]">
                {lifecycleLabels[status]}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c7a55b]">
          Default Evidence Requirements
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {defaultCatalogueEvidenceRequirements.map((requirement) => (
            <div key={requirement.requirementKey} className="border border-white/10 p-4">
              <p className="text-sm font-semibold text-white">{requirement.label}</p>
              <p className="mt-2 text-xs text-[#d7d0c3]">{requirement.evidenceType}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
