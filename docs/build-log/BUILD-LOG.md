# Chronicle Music Build Log

Record type: Local Build / Change Log
Authority Level: Local Operational State
Created: 2026-06-07

This build log records local repository work after Plexicon-consuming initialization. It does not replace historical website build memory in `docs/website/BUILD_LOG.md`.

## 2026-06-07 - Plexicon-Consuming System Initialization

### Objective

Initialize Chronicle Music Website as a Plexicon-consuming system using Plexicon Core templates and adoption model.

### Plexicon Core References Used

- `docs/architecture/PLEXICON-CONSUMPTION-MODEL-V1.md`
- `docs/architecture/PLEXICON-OPEN-THE-DOOR-PROTOCOL-V1.md`
- `docs/architecture/PLEXICON-CONSUMING-SYSTEM-UPDATE-ADOPTION-AND-PROMOTION-LIFECYCLE-V1.md`
- `docs/registry/PLEXICON-ADOPTION-MANIFEST.md`
- `docs/templates/PLEXICON-CONSUMPTION-MAP-TEMPLATE-V1.md`
- `docs/templates/PLEXICON-REPOSITORY-AUTHORITY-DECLARATION-TEMPLATE-V1.md`
- `docs/templates/OPEN-THE-DOOR-CURRENT-BRIEFING-TEMPLATE-V1.md`
- `docs/templates/PLEXICON-ADOPTION-STATUS-TEMPLATE-V1.md`
- `docs/templates/PLEXICON-UPDATE-CHECK-RECORD-TEMPLATE-V1.md`
- `docs/templates/PLEXICON-FEEDBACK-CANDIDATE-TEMPLATE-V1.md`

### Created

- `docs/authority/CHRONICLE-MUSIC-REPOSITORY-AUTHORITY.md`
- `docs/authority/CHRONICLE-MUSIC-PLEXICON-CONSUMPTION-MAP.md`
- `docs/adoption/CHRONICLE-MUSIC-PLEXICON-ADOPTION-STATUS.md`
- `docs/adoption/update-check-initial.md`
- `docs/adoption/feedback-candidates.md`
- `docs/execution-state/OPEN-THE-DOOR-CURRENT-BRIEFING.md`
- `docs/project-plan/CHRONICLE-MUSIC-PROJECT-PLAN.md`
- `docs/build-log/BUILD-LOG.md`

### Not Changed

- Website code.
- UI design.
- Dependencies.
- Next.js, Tailwind, Supabase, Clerk, deployment, API, SDK, or CLI setup.
- Plexicon Core doctrine.

### Validation

- Docs-only initialization.
- Build not run because no website code was modified and the task prohibited implementation changes.
- Git status should be checked after this pass.

### Next Allowed Action

Human review of generated adoption records, then decide whether to proceed to website-state reconciliation.

## 2026-06-11 - Public Website Launch And Portal Handover

### Objective

Record the completed Chronicle Music public website launch state and hand over the repository toward Chronicle Creative Operations Portal V1 planning.

### Completed

- Public website redesign completed.
- Production deployment completed on Vercel project `chronicle-music-publishing`.
- Live domain confirmed:
  - https://www.chroniclemusic.co.za
- Mobile/responsive optimisation completed.
- Catalogue browse page stable at `/catalogue/browse`.
- Excel-driven catalogue workflow stable:
  - `data/catalogue/chronicle-master-catalogue.xlsx`
  - `scripts/generate-catalogue-browse.cjs`
  - `lib/catalogueBrowse.ts`
- MP3 previews tracked and working under:
  - `public/catalogue/audio`
  - `public/catalogue/audio-huey-d`
- Contact page and Submit Works mailto workflows working with `markus@chroniclemusic.co.za`.
- About page refined.
- Artists page live.
- M-WIS and Huey-D pages live with official social links.
- Chronicle Music social links integrated.

### Portal Handover

Chronicle Creative Operations Portal V1 development is the next phase.

Initial portal direction:

- Add sign-in / portal access from the website when approved.
- Portal scope will be defined later by Markus.
- Portal must preserve the live public website and existing brand direction.
- Portal is private and authenticated; it is not a public website feature.
- Existing catalogue spreadsheet/generator workflow is a useful pattern for future marketing activity management.

### Not Changed

- No application code changed in this docs update.
- No deployment run.
- No DNS or Vercel production settings changed.

### Next Allowed Action

Define Chronicle Creative Operations Portal V1 scope, Clerk access model, and workbook/data workflow before implementation.

## 2026-06-11 - Creative Operations Portal Doctrine Alignment

### Objective

Clarify the next phase after public website launch as Chronicle Creative Operations Portal V1.

### Alignment

- Public Chronicle Website = public brand/catalogue/showroom.
- Chronicle Creative Operations Portal V1 = private authenticated operational environment.
- Future Sentry Sound Creative Operations Module = industrialised version of the validated portal workflow.
- Portal may have a website entry button/link, but it must not be treated as a public website feature.
- Portal should use Next.js, React, Tailwind, Vercel, and Clerk.
- Workbook/Google Sheets is temporary source-of-truth for V1.
- Workbook structure should mirror future database entities.
- Do not design around spreadsheet limitations.
- Portal lifecycle:
  - Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations.
- Main success criterion:
  - When Markus opens the portal every morning, it must tell him what creative, marketing, catalogue, campaign, and release actions need to happen today.

### Not Changed

- No application code changed.
- No deployment run.
- Public website remains stable and live.
