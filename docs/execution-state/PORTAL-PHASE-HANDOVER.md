# Chronicle Creative Operations Portal V1 Handover

Record type: Execution-State Handover
Authority Level: Local Operational State
Created: 2026-06-11

## Current Status

The Chronicle Music Publishing public website is stable, mobile-optimised, and live in production.

Live site:

```text
https://www.chroniclemusic.co.za
```

Vercel project:

```text
chronicle-music-publishing
```

## Public Website Completion Summary

- Homepage rebuilt and live.
- Catalogue browse page live at `/catalogue/browse`.
- Catalogue is driven by `data/catalogue/chronicle-master-catalogue.xlsx`.
- Catalogue generator script is `scripts/generate-catalogue-browse.cjs`.
- Generated catalogue data is `lib/catalogueBrowse.ts`.
- MP3 previews are tracked under `public/catalogue/audio` and `public/catalogue/audio-huey-d`.
- Contact page is working.
- Contact form uses mailto to `markus@chroniclemusic.co.za`.
- Submit Works CTA uses a mailto catalogue submission enquiry.
- About page is refined.
- Artists page is live.
- M-WIS artist page is live with official social links.
- Huey-D artist page is live with official social links.
- Chronicle Music social links are integrated.
- Mobile/responsive optimisation has been completed, with `/catalogue/browse` treated as the highest-priority mobile surface.

## Current Return Point

The public website should now be treated as a production-stable surface. Future work should start with Chronicle Creative Operations Portal V1 planning and should avoid reopening broad public website redesign unless Markus explicitly requests it.

The public website and portal are separate surfaces. The website is the public brand/catalogue/showroom layer. The portal is a private authenticated operational command centre.

Do not edit public webpages during portal work unless Markus explicitly approves it.

## Governance History

- The public website was completed largely before the full high-level Plexicon-governed development workflow was consistently available for this repository.
- Plexicon/Chronicle docs were added later to improve continuity, Open The Door readiness, and future governance.
- Do not falsely imply that the completed website was fully developed under the complete Plexicon method.
- Chronicle Creative Operations Portal V1 is the first Chronicle stream intended to proceed more deliberately under the governed workflow.
- Portal build direction is manual and governed by Markus/ChatGPT, with Codex used where useful for bounded execution.
- Keep docs current so Codex and future chats stay aligned.
- Plexicon feedback/adoption-back may be useful later, but it is not the immediate task.
- Chronicle remains a Plexicon-consuming system and does not become authoritative over Plexicon Core.

## Correct Model

- Public Chronicle Website = public brand/catalogue/showroom.
- Chronicle Creative Operations Portal V1 = private authenticated operational environment.
- Future Sentry Sound Creative Operations Module = industrialised version of the validated portal workflow.

Keep public website docs Chronicle-first. Sentry Sound relationship belongs mainly in portal, strategy, and handover docs.

## Next Development Phase

Chronicle Creative Operations Portal V1 development.

Initial portal idea:

- Add sign-in / portal access from the website only when approved.
- User enters a private authenticated Chronicle Creative Operations Portal.
- Portal scope will be defined later by Markus.
- Portal manages operational creative work, not public marketing-page UX.
- Portal may use workbook/Google Sheets as temporary V1 source-of-truth.
- Workbook structure should mirror future database entities.
- Do not design around spreadsheet limitations.

## Portal Guardrails

- Do not destabilise the public website while building portal features.
- Do not change routes on the live public site unless explicitly approved.
- Do not edit public webpages during portal work unless Markus explicitly approves it.
- Do not treat portal access as a public website feature.
- Do not change DNS, Vercel production settings, or production deployment unless explicitly instructed.
- Do not replace the catalogue Excel workflow casually.
- Preserve Chronicle's approved brand direction:
  - dark luxury
  - black/gold
  - cinematic
  - premium music company identity
- Use the existing project stack unless a future approved technical plan changes it:
  - Next.js App Router
  - React
  - Tailwind CSS
  - Vercel
  - Clerk

## Portal V1 Operational Lifecycle

```text
Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations
```

## Creative Entity, Capability, Identity, and Contextual Role Model

Phase 0.1 identified an important portal architecture principle:

```text
Entity
-> Capabilities
-> Identity / Positioning
-> Contextual Operational Role
```

The portal must not reduce a person or entity to one fixed label such as artist, producer, engineer, builder, or performer.

Capability is what a person/entity can do, such as producer, songwriter, beat creator, performer, recording artist, engineer, or visual creator.

Identity / Positioning is how the person/entity is presented to the market or operating environment.

Chronicle configuration:

- Chronicle Music = creative house, catalogue, legacy platform, and ecosystem.
- M-Wis / Markus = creative identity, producer, songwriter, beat creator, musical creator, and architect behind the sound.
- Huey-D = creative identity, producer, songwriter, beat creator, musical creator, and public-facing creative world/personality.

Do not position Markus/M-Wis or Huey-D as traditional performing artists unless Markus explicitly changes that positioning later. Huey-D being "the face" means the public-facing identity/personality of Huey-D, not traditional artist/performer positioning.

Contextual Operational Role is the role performed in a specific project, song, campaign, asset, release, or work item. The same person/entity may play different roles in different contexts.

Chronicle Portal must support this Chronicle configuration while keeping the larger future model flexible enough for traditional music roles and other configurations.

Future Sentry Sound candidate:

```text
Creative Capability vs Identity vs Contextual Operational Role separation
```

Possible Plexicon relevance:

This may become a later cross-domain adoption candidate because the logic transfers beyond music. Construction example: a person/entity may have capabilities such as architect, engineer, builder, painter, or tiler; their market identity may be "luxury residential specialist"; and their contextual role on a project may be "lead architect", "site engineer", or "finishing contractor."

This is not current Plexicon Core doctrine. Do not promote it into Plexicon Core now, do not make Chronicle authoritative over Plexicon, and do not create new Plexicon doctrine.

## Strategic Path

```text
Chronicle Creative Operations Portal V1 -> validated workflow -> Sentry Sound Creative Operations Module
```

## Main Success Criterion

```text
When Markus opens the portal every morning, it must tell him what creative, marketing, catalogue, campaign, and release actions need to happen today.
```

## Health Intelligence Framework

The portal must evaluate whether Chronicle Music is becoming a stronger creative ecosystem, why or why not, and what must improve.

Source-of-truth framework:

```text
docs/portal/CHRONICLE-CREATIVE-OPERATIONS-HEALTH-INTELLIGENCE-FRAMEWORK.md
```

The framework distinguishes System Capability, Human Execution, and External Outcome / Validation so the portal can diagnose root cause rather than merely show activity. Codex must not invent health logic; future implementation must consume the approved framework.

## Catalogue Workflow Pattern

The catalogue workflow is an approved operational pattern to study for portal data management:

1. Structured spreadsheet-style source.
2. Clear required fields.
3. Generator/sync step.
4. Typed/generated data consumed by the website.
5. Assets stored under predictable public paths.
6. Low-friction operating model for Chronicle users.

Potential portal application:

- marketing activity trackers
- artist campaign planning
- release tasks
- social content calendars
- press/playlist outreach logs
- catalogue promotion activity

## Next Allowed Action

Inspect the existing stack, docs, and public site boundaries, then define the private authenticated Chronicle Creative Operations Portal V1 scope and technical plan before implementation.

## Forbidden Actions Without Explicit Approval

- Do not deploy production.
- Do not run `vercel --prod`.
- Do not delete old deployments.
- Do not change DNS.
- Do not replace the catalogue system.
- Do not introduce database or third-party services without a plan and approval.
- Clerk is the intended portal authentication direction.
- Do not redesign the public website as part of portal planning.

## Suggested First Portal Planning Questions

- Who should sign in first: Markus only, internal Chronicle team, artists, or collaborators?
- What must Markus see every morning on the dashboard?
- What should the first portal manage: artist actions, song actions, creative direction, assets, campaigns, content queue, or daily operations?
- Should V1 source data be Google Sheets, Excel workbook, or another workbook-style source?
- What future database entities should the workbook mirror?
- What should remain public website content versus private portal content?
