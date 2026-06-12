# Chronicle Music Plexicon Consumption Map

Record type: Consumption Map
Authority Level: Local Operational State
Template source: `../plexicon-contracts/docs/templates/PLEXICON-CONSUMPTION-MAP-TEMPLATE-V1.md`
Created: 2026-06-07

This map declares Chronicle Music's local Plexicon consumption. Plexicon Core remains authoritative for doctrine, protocols, templates, capability definitions, and promotion rules.

## 1. System Identity

- System name: Chronicle Music
- System owner: Human owner
- Product / client / platform type: public website plus private Creative Operations Portal V1 planning
- Repository name: Chronicle Music Website
- Repository URL: local repository, Git remote not asserted by this record
- Primary human authority: Human owner
- Primary technical maintainer: Codex-assisted local repository maintainer
- Current lifecycle state: public website stable; private portal planning under governed workflow

## 2. Plexicon Adoption Summary

- Development-time doctrine adoption: adopted by reference only.
- Execution-state continuity adoption: adopted through local Open The Door current briefing.
- Product Composition adoption: not adopted as runtime logic; referenced only as Core authority where relevant.
- Capability consumption adoption: presentation, asset, OEF, governance, and public-safe boundary consumption declared at development-time level.
- Runtime/API/SDK adoption: none at this documentation stage.
- Portal auth direction: Clerk intended for Chronicle Creative Operations Portal V1, pending implementation planning.
- Deferred adoption: CLI, SDK, API, Workbench automation, database-backed adoption state, capability-service integration, and any Plexicon feedback/adoption-back process.

## 2.1 Governance History

- The public Chronicle website was completed largely before the full high-level Plexicon-governed workflow was consistently available for this repository.
- Plexicon/Chronicle docs were added later to improve continuity, Open The Door readiness, and future governance.
- Do not treat the completed website as evidence that the complete Plexicon method governed that build end to end.
- Chronicle Creative Operations Portal V1 is the first Chronicle stream intended to proceed more deliberately under the governed workflow.
- Portal build direction remains manual and governed by Markus/ChatGPT, with Codex used where useful for bounded execution.
- Docs must stay updated so Codex and future chats stay aligned.
- Plexicon feedback/adoption-back may be useful later, but it is not the current implementation task.
- Chronicle does not own, redefine, or supersede Plexicon Core.

## 3. Adopted Plexicon Capabilities

| Capability | Plexicon source reference | Purpose of use | Consumption status | Notes |
| --- | --- | --- | --- | --- |
| Open The Door continuity | `docs/architecture/PLEXICON-OPEN-THE-DOOR-PROTOCOL-V1.md` | Recover repository context in new chats | active | Implemented through local briefing. |
| Consumption model | `docs/architecture/PLEXICON-CONSUMPTION-MODEL-V1.md` | Define Core/local authority boundary | active | Referenced, not copied as local doctrine. |
| Adoption lifecycle | `docs/architecture/PLEXICON-CONSUMING-SYSTEM-UPDATE-ADOPTION-AND-PROMOTION-LIFECYCLE-V1.md` | Govern update checks and feedback candidates | active | Used for initialization records. |
| Adoption manifest comparison | `docs/registry/PLEXICON-ADOPTION-MANIFEST.md` | Initial update check source | active | Manual docs-based comparison. |
| Operational Experience Framework patterns | Core OEF-related references, where approved | Guide public-safe operational UX patterns | partial | Local repo contains prior OEF-style docs; Core remains authority. |
| Feedback candidate pathway | `docs/templates/PLEXICON-FEEDBACK-CANDIDATE-TEMPLATE-V1.md` | Capture reusable local learning for Core review | active | No candidates submitted yet. |

## 4. Adopted Protocols

| Protocol | Plexicon source reference | Local use | Local artifact |
| --- | --- | --- | --- |
| Open The Door | `docs/architecture/PLEXICON-OPEN-THE-DOOR-PROTOCOL-V1.md` | New-chat and handover alignment | `docs/execution-state/OPEN-THE-DOOR-CURRENT-BRIEFING.md` |
| Execution-state continuity | `docs/architecture/PLEXICON-OPEN-THE-DOOR-PROTOCOL-V1.md` | Preserve return point, allowed action, forbidden actions | `docs/execution-state/OPEN-THE-DOOR-CURRENT-BRIEFING.md` |
| Update/adoption lifecycle | `docs/architecture/PLEXICON-CONSUMING-SYSTEM-UPDATE-ADOPTION-AND-PROMOTION-LIFECYCLE-V1.md` | Adoption status, update checks, feedback candidates | `docs/adoption/` |

## 5. Adopted Operating Models

| Operating model / standard | Plexicon source reference | Local scope | Adaptation required |
| --- | --- | --- | --- |
| Consuming-system authority boundary | `docs/architecture/PLEXICON-CONSUMPTION-MODEL-V1.md` | Website repository governance | Local records reference Core authority. |
| Existing-system alignment flow | `docs/architecture/PLEXICON-CONSUMING-SYSTEM-UPDATE-ADOPTION-AND-PROMOTION-LIFECYCLE-V1.md` | Non-disruptive initialization | Preserve existing website code and docs. |
| Feedback/promotion path | `docs/templates/PLEXICON-FEEDBACK-CANDIDATE-TEMPLATE-V1.md` | Local learning capture | Candidates remain Candidate Only until Core review. |

## 6. Authority Boundary

### Plexicon Core Owns

- Plexicon doctrine and protocols.
- Reusable intelligence definitions.
- Platform-wide governance standards.
- Capability authority and promotion rules.
- Product Composition and consumption rules.
- Open The Door protocol definition.
- Doctrine/source-of-truth boundaries.

### Chronicle Music Owns

- Local website implementation.
- Local private portal implementation when approved.
- Local runtime behavior.
- Local repository structure.
- Local UI and user workflows.
- Local assets and content decisions.
- Local deployment and environment configuration.
- Local execution-state records.
- Local project plans.
- Chronicle Music domain evidence and public presentation.
- Chronicle Creative Operations Portal V1 local workflow decisions.

### Chronicle Music Does Not Own

- Plexicon Core doctrine.
- Plexicon-wide governance authority.
- Reusable intelligence definitions.
- Capability registry authority.
- Institutional Memory promotion authority.
- Global source-of-truth hierarchy.
- Regulated, professional, legal, financial, tax, medical, audit, certification, or compliance authority unless separately approved by the relevant authority.

## 7. Local Implementation Boundary

- Local implementation language / stack: Next.js App Router, React, TypeScript, Tailwind.
- Local database / storage: no database declared in current repo inspection.
- Local auth: Clerk intended for private portal; not implemented by this docs update.
- Local deployment target: Vercel project `chronicle-music-publishing` for current public website; portal deployment behavior requires future approval.
- Local integration points: static assets, local content modules, public routes.
- Local tests / validation: `npm.cmd run build` historically used; not run during initialization.
- Local source-of-truth documents: `docs/strategy/`, `docs/website/`, `docs/catalogue/`, `docs/authority/`, `docs/adoption/`, `docs/execution-state/`, `docs/project-plan/`, `docs/build-log/`.

## 8. Deviations And Local Adaptations

| Deviation | Reason | Local owner | Risk | Approval / review status |
| --- | --- | --- | --- | --- |
| Existing repo has `README.txt` rather than startup `README.md` | Existing-system alignment should be non-disruptive | Chronicle Music | Low | Recorded; no README change made in this pass. |
| Existing docs include local copies or local adaptations of OEF/UX protocols | Pre-existing repository memory | Chronicle Music | Medium, possible drift from Core | Preserve for now; Core remains authority. |
| Public website completed before full governed workflow | Codex and full high-level Plexicon-governed workflow were not consistently available during the website build | Chronicle Music | Medium, possible historical overstatement | Record explicitly; do not imply the website was fully Plexicon-governed end to end. |
| Clerk planned but not implemented | Portal V1 is private and authenticated, but this pass is docs-only | Chronicle Music | Medium | Record as intended direction; implement only after approved portal plan. |
| No Supabase, API, SDK, or CLI adoption | Public website scope and portal planning stage | Chronicle Music | Low | Deferred until approved portal/runtime plan. |

Deviation rule:

```text
Local adaptation is allowed.
Local redefinition of Plexicon Core is not allowed.
```

## 9. Forbidden Local Redefinitions

This consuming system must not copy or redefine the following as local authority:

- Plexicon Central Source of Truth.
- Stable Operational Identity.
- Open The Door protocol.
- Product Composition and Consumption Model.
- Capability Registry Model.
- Institutional Memory promotion rules.
- Doctrine vs Operational State Boundary.
- AI/Codex execution governance.
- Repository authority rules.
- Source-of-truth hierarchy.
- Outcome non-authority boundaries.

## 10. Execution-State Continuity

- Local current briefing path: `docs/execution-state/OPEN-THE-DOOR-CURRENT-BRIEFING.md`
- Latest execution-state record: current briefing only; no separate live execution-state milestone record created in this pass
- Current return point: adoption initialization complete, pending human review
- Next allowed action: human review of generated adoption records, then decide whether to reconcile website implementation with existing strategy docs
- Current portal return point: define private Chronicle Creative Operations Portal V1 scope and technical plan while preserving the live public website
- Forbidden actions: website code changes, UI redesign, package installation, API/SDK/CLI logic, deployment changes, local doctrine redefinition
- Review cadence: after each Plexicon Core manifest update, before major website workstreams, and when Open The Door detects stale adoption state

## 11. Review And Version

- Template version used: Plexicon Consumption Map Template V1
- Plexicon doctrine version / commit reference: Core files read from `C:\Users\Euan Smith\Desktop\Plexicon\02_REPOSITORIES\plexicon-contracts`, manifest version 2026-06-07
- Last reviewed: 2026-06-07
- Launch/portal continuity reviewed: 2026-06-12
- Reviewed by: Codex draft, human review required for authority-bearing acceptance
- Next review trigger: Core manifest update, new capability consumption, local boundary change, portal auth/runtime decision, runtime/API/SDK introduction, approved local deviation, or major workstream change
- Update rule: update this map by reference to Plexicon Core sources; do not copy Core doctrine as local authority
