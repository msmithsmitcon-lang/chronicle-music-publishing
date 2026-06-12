# Open The Door Current Briefing

Record type: Open The Door Current Briefing
Authority Level: Local Operational State
Created: 2026-06-07
Last reviewed: 2026-06-11

This briefing references the single Plexicon Open The Door protocol. It does not define a Chronicle-specific protocol variant.

## 1. Context Confidence

Confidence level:

```text
HIGH
```

Reason:

- Active repository identified.
- Public website launch state documented.
- Current production domain known.
- Portal phase handover exists.
- Catalogue workflow is documented and stable.
- Next allowed action is defined.
- Forbidden actions are defined.

Behavior:

- Resume from the return point below.
- Inspect only directly needed files.
- Do not restart public website redesign unless Markus explicitly requests it.
- Do not deploy production unless explicitly instructed.

## 2. Active Repository

- Repository name: Chronicle Music Website
- Repository path: `C:\Users\Euan Smith\Desktop\CHRONICLE MUSIC PUBLISHING\17_Marketing_Press\Website`
- Repository role: public website and future Chronicle Portal repository
- Active project: Chronicle Music Website / Chronicle Creative Operations Portal V1
- Active workstream: Private Creative Operations Portal planning after public website launch

## 3. Active Objective

```text
Plan the private Chronicle Creative Operations Portal V1 while preserving the stable live public Chronicle Music website.
```

## 4. Current Execution State

System state:

```text
Next.js public website is redeveloped, mobile-optimised, and live in production at https://www.chroniclemusic.co.za.
```

Operational state:

```text
Public website launch complete. Private Chronicle Creative Operations Portal V1 planning is the next operational phase.
```

Execution state:

```text
Next work should start from this briefing, the system state doc, the portal phase handover, and the portal V1 doctrine doc. Do not edit public webpages while planning or building portal features unless Markus explicitly approves it.
```

Completed public website outputs:

- Homepage rebuilt and live.
- About page refined and live.
- Contact page refined and live.
- Artists page live.
- M-WIS artist page live with official social links.
- Huey-D artist page live with official social links.
- Catalogue browse page live at `/catalogue/browse`.
- Excel-driven catalogue workflow stable.
- MP3 previews tracked and working.
- Contact mailto workflow working.
- Submit Works mailto workflow working.
- Chronicle Music social links integrated.
- Production deployed on Vercel project `chronicle-music-publishing`.

Open tasks:

- Define Chronicle Creative Operations Portal V1 scope with Markus.
- Use Clerk for private portal authentication unless a future approved plan changes that.
- Decide first workbook/Google Sheets source-of-truth shape.
- Mirror future database entities instead of designing around spreadsheet limitations.
- Apply the portal lifecycle: Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations.
- Consider spreadsheet/database-style workflows for marketing activity management.
- Preserve the public website as a stable live production surface.

Current blocker:

```text
Portal scope is not yet fully defined. Markus must define or approve the first useful private creative operations workflows before implementation should broaden.
```

## 5. Return Point

```text
Public website is live and stable. Resume by planning the private Chronicle Creative Operations Portal V1, starting from docs/portal/CHRONICLE-CREATIVE-OPERATIONS-PORTAL-V1.md and docs/execution-state/PORTAL-PHASE-HANDOVER.md.
```

## 6. Next Allowed Action

```text
Inspect the existing stack and docs, then define a private authenticated Creative Operations Portal V1 implementation plan before changing application code.
```

## 7. Forbidden Actions

- Do not destabilise the live public website.
- Do not deploy production unless explicitly instructed.
- Do not run `vercel --prod` unless explicitly instructed.
- Do not change DNS manually unless explicitly instructed.
- Do not delete old deployments.
- Do not redesign the public website as part of portal planning.
- Do not edit public webpages during portal work unless Markus explicitly approves it.
- Do not treat portal access as a public website feature.
- Do not replace the catalogue Excel workflow casually.
- Do not introduce authentication, database, or third-party services without an approved portal plan, except that Clerk is the intended authentication direction for this portal.
- Do not install packages unless the approved portal plan requires it.
- Do not change Next.js, Tailwind, deployment, API, SDK, or CLI setup without approval.
- Do not copy Plexicon doctrine into Chronicle as editable local authority.
- Do not promote Chronicle local learning to Plexicon Core without feedback candidate review.

## 8. Key Files For Next Chat

- `docs/system/CHRONICLE-MUSIC-WEBSITE-STATE.md`
- `docs/execution-state/PORTAL-PHASE-HANDOVER.md`
- `docs/open-the-door/CHRONICLE-OPEN-THE-DOOR.md`
- `docs/project-plan/CHRONICLE-MUSIC-PROJECT-PLAN.md`
- `docs/website/WEBSITE_STRUCTURE.md`
- `docs/catalogue/CATALOGUE-MANAGEMENT-WORKFLOW.md`
- `docs/portal/CHRONICLE-CREATIVE-OPERATIONS-PORTAL-V1.md`
- `package.json`
- `app/layout.tsx`
- `components/Header.tsx`

## 9. Portal Guardrails

- Public Chronicle Website = public brand/catalogue/showroom.
- Chronicle Creative Operations Portal V1 = private authenticated operational environment.
- Future Sentry Sound Creative Operations Module = industrialised version of the validated portal workflow.
- Portal must use the existing Chronicle brand direction unless a future approved plan changes it.
- Portal should use Next.js, React, Tailwind, Vercel, and Clerk.
- Public website routes and content should remain stable during portal development.
- Add sign-in / portal access carefully, ideally as a bounded navigation addition after portal route and access model are approved. This is only a doorway into the private portal.
- Workbook/Google Sheets is temporary source-of-truth for V1, but structure should mirror future database entities.
- Do not design around spreadsheet limitations.
- The catalogue spreadsheet/generator workflow is a design pattern for future marketing activity management:
  - spreadsheet/table-like source
  - clear fields
  - generator/sync step
  - typed/generated data
  - predictable asset paths
  - low-friction operator workflow

Operational lifecycle:

```text
Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations
```

Success criterion:

```text
When Markus opens the portal every morning, it must tell him what creative, marketing, catalogue, campaign, and release actions need to happen today.
```

## 10. Governing Doctrine

| Doctrine / standard | Plexicon Core source path | Why relevant |
| --- | --- | --- |
| Open The Door Protocol V1 | `docs/architecture/PLEXICON-OPEN-THE-DOOR-PROTOCOL-V1.md` | Governs new-chat and handover continuity. |
| Consumption Model V1 | `docs/architecture/PLEXICON-CONSUMPTION-MODEL-V1.md` | Governs Plexicon adoption by consuming systems. |
| Consuming-System Update, Adoption, and Promotion Lifecycle V1 | `docs/architecture/PLEXICON-CONSUMING-SYSTEM-UPDATE-ADOPTION-AND-PROMOTION-LIFECYCLE-V1.md` | Governs update checks, adoption status, and feedback candidates. |

## 11. What Is Needed Next

- Ask Markus to define the first Chronicle Creative Operations Portal V1 workflow.
- Confirm private authenticated user model.
- Confirm Clerk setup requirements.
- Decide workbook/Google Sheets source-of-truth structure.
- Map workbook tabs to future database entities.
- Draft a scoped implementation plan before code changes.

## 12. Review Triggers

Review this briefing when:

- Markus approves portal scope.
- Portal authentication or data storage is selected.
- Public website deployment is requested.
- Chronicle brand direction changes.
- Catalogue workflow changes.
- Major blocker appears.
