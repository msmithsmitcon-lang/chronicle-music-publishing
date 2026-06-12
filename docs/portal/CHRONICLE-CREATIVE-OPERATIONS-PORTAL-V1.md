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

## Operational Lifecycle

Artist
-> Song
-> Creative Direction
-> Assets
-> Campaigns
-> Content Queue
-> Daily Operations

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
- Build portal routes separately.
- Keep public website stable.
- Treat this as a product prototype, not a utility.

## Success Criterion

When Markus opens the portal every morning, it must tell him what creative, marketing, catalogue, campaign, and release actions need to happen today.

