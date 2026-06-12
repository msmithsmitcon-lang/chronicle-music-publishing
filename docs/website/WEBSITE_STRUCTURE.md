# Chronicle Music Publishing Website Structure

## Current Production State

The Chronicle Music Publishing public website is live in production:

```text
https://www.chroniclemusic.co.za
```

Hosting platform:

```text
Vercel project: chronicle-music-publishing
```

The public website is redesigned, mobile-optimised, and stable. Future Chronicle Creative Operations Portal V1 work must not destabilise the live public site.

## Public Routes

- `/` - Homepage for Chronicle Music as an independent music company.
- `/about` - Chronicle Music company story and publishing identity.
- `/artists` - Artists landing page.
- `/artists/m-wis` - M-WIS artist page with official social links.
- `/artists/huey-d` - Huey-D artist page with official social links.
- `/catalogue` - Legacy/static catalogue overview route retained.
- `/catalogue/browse` - Primary catalogue browse page.
- `/contact` - Contact page with mailto enquiry workflow.
- `/resources` - Resources and infrastructure page.
- `/capabilities` - Capabilities/services page.

Mockup/reference routes may exist in the app tree and should not be treated as primary public navigation unless explicitly approved.

## Key App Files

- `app/layout.tsx` - Root metadata, shared header, shared footer, and global layout.
- `app/page.tsx` - Homepage.
- `app/about/page.tsx` - About page.
- `app/artists/page.tsx` - Artists landing route.
- `app/artists/m-wis/page.tsx` - M-WIS artist page.
- `app/artists/huey-d/page.tsx` - Huey-D artist page.
- `app/catalogue/browse/page.tsx` - Primary catalogue browse route.
- `app/contact/page.tsx` - Contact page.
- `app/contact/ContactEmailForm.tsx` - Mailto contact form.
- `app/globals.css` - Tailwind directives and global brand/mobile guardrails.

## Key Components

- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/CatalogueBrowse.tsx`
- `components/CataloguePreviewPlayer.tsx`
- `components/HueyDCollection.tsx`
- `components/SectionCard.tsx`
- `components/CatalogueList.tsx`

## Catalogue System

The primary catalogue workflow is Excel-driven.

Source spreadsheet:

```text
data/catalogue/chronicle-master-catalogue.xlsx
```

Generator:

```text
scripts/generate-catalogue-browse.cjs
```

Generated website data:

```text
lib/catalogueBrowse.ts
```

NPM command:

```powershell
npm run generate:catalogue
```

Audio preview assets:

```text
public/catalogue/audio
public/catalogue/audio-huey-d
```

This workflow is stable and should be preserved. It is also a useful pattern for future Chronicle Portal spreadsheet/database-style marketing workflows.

## Contact Workflows

- Contact form uses mailto to `markus@chroniclemusic.co.za`.
- Submit Works CTA uses a prefilled mailto catalogue submission enquiry.
- There is no backend form submission in the public website.

## Brand And Assets

Brand direction:

- Chronicle Music remains the primary brand.
- Dark luxury / black-gold / cinematic / premium music company identity.
- Avoid fake achievements, inflated claims, fake awards, fake streams, or unsupported commercial claims.

Important asset areas:

- `public/assets/branding`
- `public/assets/hero`
- `public/assets/chronicle-sections`
- `public/assets/catalogue`
- `public/assets/artists`
- `public/catalogue/audio`
- `public/catalogue/audio-huey-d`

## Public Website / Portal Boundary

Public Chronicle Website = public brand/catalogue/showroom.

Chronicle Creative Operations Portal V1 = private authenticated operational environment.

The portal may have a sign-in / portal access entry button or link from the website when Markus approves it, but that entry point must not be treated as a public website feature. It is only a doorway into the private authenticated portal.

Do not edit public webpages during portal work unless Markus explicitly approves it.

## Next Phase

Chronicle Creative Operations Portal V1 development is the next phase.

Initial direction:

- Private authenticated operational environment.
- Use Next.js, React, Tailwind, Vercel, and Clerk.
- Workbook/Google Sheets is temporary V1 source-of-truth.
- Workbook structure should mirror future database entities.
- Do not design around spreadsheet limitations.
- Portal V1 lifecycle:
  - Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations.
- Strategic path:
  - Chronicle Creative Operations Portal V1 -> validated workflow -> Sentry Sound Creative Operations Module.

Portal work should preserve the public site, routes, catalogue workflow, and brand direction unless a future approved plan changes them.
