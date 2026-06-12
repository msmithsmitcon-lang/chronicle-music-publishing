# Chronicle Music Project Plan

Record type: Local Project Plan
Authority Level: Local Operational State
Created: 2026-06-07

This plan is local to Chronicle Music Website. It references Plexicon Core authority through the local consumption map and does not redefine Plexicon doctrine.

## 1. Project Identity

- Project: Chronicle Music Website
- System: Chronicle Music
- Repository role: public website and private Chronicle Creative Operations Portal V1 repository
- Current lifecycle state: public website launched; Creative Operations Portal V1 planning next
- Current implementation mode: production-stable public site; private portal scope pending

## 2. Current Local Objective

```text
Maintain the stable live Chronicle Music public website while planning and building the private authenticated Chronicle Creative Operations Portal V1.
```

## 2.1 Surface Boundary And Governance History

Public Chronicle Website:

- public-facing
- live and stable
- brand/catalogue/artists/contact/showroom layer
- not to be edited during portal work unless Markus explicitly approves it

Chronicle Creative Operations Portal V1:

- private
- authenticated/logged-in
- separate section/route tree
- operational command centre
- not public UX/UI work
- not a public dashboard
- not a redesign of the website

Governance history:

- The public website was completed largely before the full high-level Plexicon-governed workflow was consistently available for this repository.
- Plexicon/Chronicle docs were added later to improve continuity, Open The Door readiness, and future governance.
- Do not imply that the completed public website was fully developed under the complete Plexicon method.
- Chronicle Creative Operations Portal V1 is the first Chronicle stream intended to proceed more deliberately under the governed workflow.
- Portal build direction is manual and governed by Markus/ChatGPT, with Codex used where useful for bounded execution.
- Docs must stay aligned so Codex and future chats have reliable context.
- Plexicon feedback/adoption-back may be useful later, but it is not the current implementation task.
- Chronicle remains a consuming system and does not become authoritative over Plexicon Core.

## 3. Current Repository Memory

Existing memory includes:

- `docs/strategy/`
- `docs/website/`
- `docs/catalogue/`
- `docs/ux-ui/`
- `docs/operational-experience/`
- `docs/backups/`
- local app, component, library, and public asset structure
- live production website state at https://www.chroniclemusic.co.za
- stable Excel-driven catalogue workflow
- portal phase handover in `docs/execution-state/PORTAL-PHASE-HANDOVER.md`
- Creative Operations Portal V1 doctrine in `docs/portal/CHRONICLE-CREATIVE-OPERATIONS-PORTAL-V1.md`
- formal Creative Operations Portal V1 execution plan in `docs/project-plan/CHRONICLE-CREATIVE-OPERATIONS-PORTAL-V1-EXECUTION-PLAN.md`

New adoption memory includes:

- `docs/authority/`
- `docs/adoption/`
- `docs/execution-state/`
- `docs/project-plan/`
- `docs/build-log/`

## 4. Workstreams

| Workstream | Status | Notes |
| --- | --- | --- |
| Public website redesign | Complete | Website is live in production. |
| Mobile/responsive optimisation | Complete | Catalogue browse was the priority mobile surface. |
| Catalogue Excel workflow | Stable | Spreadsheet to generated data workflow is approved and working. |
| Plexicon-consuming initialization | Complete, pending broader human review | Local records created by reference to Core templates. |
| Chronicle Creative Operations Portal V1 planning | Next | Private authenticated operational environment; scope, Clerk access model, and workbook/data workflow must be defined before implementation. |
| Portal Phase 0 - Product & Operational Definition | Active | Governed by `docs/project-plan/CHRONICLE-CREATIVE-OPERATIONS-PORTAL-V1-EXECUTION-PLAN.md`; no implementation before Phase 0 exit criteria are met. |
| Portal implementation | Pending approval | Must preserve public website stability and build separately from public pages. |
| Future Sentry Sound Creative Operations Module | Future | Industrialised version of the validated Chronicle portal workflow. |
| Plexicon feedback/adoption-back | Future optional | Possible later review path if Chronicle generates patterns or services worth Plexicon review; not current implementation work. |

## 5. Next Allowed Action

```text
Define private Chronicle Creative Operations Portal V1 scope and technical plan while preserving the live public website.
```

Portal execution must follow `docs/project-plan/CHRONICLE-CREATIVE-OPERATIONS-PORTAL-V1-EXECUTION-PLAN.md`. Current phase: Phase 0 - Product & Operational Definition.

## 6. Forbidden Actions

- Do not destabilise the live public website.
- Do not deploy production unless explicitly instructed.
- Do not run `vercel --prod` unless explicitly instructed.
- Do not redesign the public website as part of portal planning.
- Do not edit public webpages during portal work unless Markus explicitly approves it.
- Do not treat portal access as a public website feature.
- Do not modify website code without a future implementation prompt.
- Do not install packages.
- Do not alter framework, auth, database, deployment, API, SDK, or CLI setup.
- Do not copy Plexicon Core doctrine into Chronicle as local authority.
- Do not introduce database or third-party services without an approved portal plan.
- Use Clerk as the intended portal authentication direction unless a future approved plan changes it.
- Do not replace the catalogue Excel workflow casually.
- Do not design portal workflows around spreadsheet limitations; workbook/Google Sheets is temporary V1 source-of-truth and should mirror future database entities.

## 6.1 Portal Doctrine

Correct model:

- Public Chronicle Website = public brand/catalogue/showroom.
- Chronicle Creative Operations Portal V1 = private authenticated operational environment.
- Future Sentry Sound Creative Operations Module = industrialised version of the validated portal workflow.

Portal V1 operational lifecycle:

```text
Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations
```

Main success criterion:

```text
When Markus opens the portal every morning, it must tell him what creative, marketing, catalogue, campaign, and release actions need to happen today.
```

## 7. Validation Expectations

For docs-only adoption or planning updates:

- Confirm files exist.
- Confirm local records reference Plexicon Core.
- Confirm no website code was changed intentionally.
- Capture Git status.

For future implementation work:

- Inspect relevant local docs first.
- Confirm allowed files and forbidden actions.
- Run appropriate validation commands, likely `npm.cmd run build`, only when implementation changes justify it.
- Do not deploy production unless explicitly instructed.

## 8. Review Triggers

Review this plan when:

- Open The Door briefing changes.
- Plexicon Core adoption manifest changes.
- human owner changes the active objective.
- website implementation work is approved.
- a feedback candidate is identified.
- portal scope, authentication, or data model is approved.
- public website deployment is requested.
