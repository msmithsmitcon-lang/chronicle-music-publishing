# Chronicle Creative Operations Portal V1

## Status

Planning and architecture alignment phase.

## Core Positioning

The Chronicle Creative Operations Portal V1 is a private, logged-in operational portal for Chronicle Music.

It is not a public-facing website page, public UX project, or simple social media dashboard.

Correct model:

- Public Chronicle Website = public brand/catalogue/showroom.
- Chronicle Creative Operations Portal V1 = private authenticated operational environment.
- Future Sentry Sound Creative Operations Module = industrialised version of the validated portal workflow.

## Governance Context

The completed public website should not be described as a fully Plexicon-governed build. It was completed largely before Codex and the full high-level Plexicon-governed workflow were consistently available for this repository.

Plexicon/Chronicle docs were added later for continuity, Open The Door readiness, and future governance.

Chronicle Creative Operations Portal V1 is the first Chronicle development stream intended to proceed more deliberately under the governed workflow.

Portal development is a manual governed build led by Markus/ChatGPT, with Codex used where useful for bounded execution. Documentation must stay current so Codex and future chats can remain aligned.

Chronicle does not own or redefine Plexicon Core. Future feedback/adoption-back into Plexicon may be useful later, but it is not the immediate portal implementation task.

## Public Website Boundary

The public Chronicle Music website is live and stable.

Do not modify public website pages while building the portal unless Markus explicitly approves it.

The portal may have a sign-in / portal access entry button or link from the website, but that entry point must not be treated as a public website feature. It is only a doorway into the private authenticated environment.

Public website routes are treated as locked:

- /
- /about
- /artists
- /artists/m-wis
- /artists/huey-d
- /catalogue
- /catalogue/browse
- /contact

## Portal Purpose

The portal must become the private daily command centre for Chronicle Music.

Primary question:

> What creative, marketing, catalogue, campaign, and release actions must happen today?

## Stack Direction

Use the existing Chronicle stack:

- Next.js
- React
- Tailwind
- Vercel
- Clerk for authentication
- Spreadsheet/workbook-driven data first
- Future-ready for Supabase/PostgreSQL

## Data Philosophy

Google Sheets or Excel-style workbook data is a temporary data layer.

Do not design around spreadsheet limitations.

Workbook tabs should mirror future database entities.

Portal V1 may start from workbook/Google Sheets data, but the operational model must be designed as if it will become durable database entities later.

Future direction:

Chronicle Creative Operations Portal V1
-> validated workflow
-> Sentry Sound Creative Operations Module
-> Supabase PostgreSQL backend

## Health Intelligence Framework

The portal does not merely track tasks. It evaluates whether Chronicle Music is becoming a stronger creative ecosystem, why or why not, and what must improve.

Source-of-truth framework:

```text
docs/portal/CHRONICLE-CREATIVE-OPERATIONS-HEALTH-INTELLIGENCE-FRAMEWORK.md
```

Codex must not invent health logic. Future implementation must consume the approved strategic objectives, KPAs, KPI composition, diagnostic logic, workbook/data mapping, and product map from the framework.

## Operational Lifecycle

Artist
-> Song
-> Creative Direction
-> Assets
-> Campaigns
-> Content Queue
-> Daily Operations

## Creative Entity, Capability, Identity, and Contextual Role Model

Chronicle Portal must not reduce a person or entity to one fixed label such as artist, producer, engineer, builder, or performer.

The correct model separates:

```text
Entity
-> Capabilities
-> Identity / Positioning
-> Contextual Operational Role
```

### 1. Capability

Capability means what a person or entity can do.

Music examples:

- Producer.
- Songwriter.
- Beat creator.
- Performer.
- Recording artist.
- Engineer.
- Visual creator.

### 2. Identity / Positioning

Identity / Positioning means how that person or entity is presented to the market or operating environment.

Chronicle configuration:

- Chronicle Music = creative house, catalogue, legacy platform, and ecosystem.
- M-Wis / Markus = creative identity, producer, songwriter, beat creator, musical creator, and architect behind the sound.
- Huey-D = creative identity, producer, songwriter, beat creator, musical creator, and public-facing creative world/personality.

Do not position Markus/M-Wis or Huey-D as traditional performing artists unless Markus explicitly changes that positioning later.

Huey-D being "the face" means the public-facing identity/personality of Huey-D. It does not mean traditional artist/performer positioning.

### 3. Contextual Operational Role

Contextual Operational Role means the role performed in a specific project, song, campaign, asset, release, or work item.

The same person or entity may play different roles in different contexts.

Chronicle Portal must support the Chronicle configuration, but the larger future model must remain flexible enough for traditional music roles and other configurations.

Construction example:

- A person/entity may have capabilities such as architect, engineer, builder, painter, or tiler.
- Their market identity may be "luxury residential specialist."
- Their contextual role on a specific project may be "lead architect", "site engineer", or "finishing contractor."

Future Sentry Sound relevance:

```text
Creative Capability vs Identity vs Contextual Operational Role separation
```

This is a future Sentry Sound architecture candidate.

Plexicon relevance:

This is a possible later Plexicon cross-domain adoption candidate because the abstract reusable logic is transferable beyond music. It is not current Plexicon Core doctrine, does not make Chronicle authoritative over Plexicon, and must not be promoted into Plexicon Core without a separate future review process.

## Initial Workbook Modules

Source workbook:

Chronicle Creative Operations Workbook V1.xlsx

Expected modules:

- Dashboard
- Song Master
- Creative Direction
- Asset Library
- Campaigns
- Content Queue
- Artists & Platforms

## Future Entity Mapping

| Workbook Module | Future Entity |
|---|---|
| Dashboard | operational_views |
| Song Master | songs |
| Creative Direction | creative_briefs |
| Asset Library | assets |
| Campaigns | campaigns |
| Content Queue | content_items |
| Artists & Platforms | artists / platforms |

## Route Direction

Portal routes should be separated from the public website.

Possible route structure:

- /portal
- /portal/dashboard
- /portal/artists
- /portal/songs
- /portal/creative
- /portal/assets
- /portal/campaigns
- /portal/content
- /portal/calendar

## Authentication Boundary

Portal access must require login.

Use Clerk for authentication.

The public website remains accessible without login.

## Development Rules

- Inspect before editing.
- Do not guess file paths.
- Do not edit public website pages.
- Do not deploy production unless explicitly approved.
- Do not treat the portal as public-facing website UX.
- Update documentation as part of development.
- Keep Open The Door, execution-state, and portal docs aligned as decisions are made.
- Use Codex for bounded execution when useful; keep Markus/ChatGPT responsible for direction and governance decisions.
- Build portal routes separately.
- Keep public website stable.
- Treat this as a product prototype, not a utility.
- Do not promote Chronicle learnings into Plexicon Core from this repo; record future feedback candidates only if Markus explicitly starts that process.

## Success Criterion

When Markus opens the portal every morning, it must tell him what creative, marketing, catalogue, campaign, and release actions need to happen today.

