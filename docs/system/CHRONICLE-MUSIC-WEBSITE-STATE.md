# Chronicle Music Website — Current System State

Branch: checkpoint/mwis-artist-page

## Current focus
Chronicle Music public website is live and stable. The next development phase is Chronicle Creative Operations Portal V1 planning and implementation.

## Live production state
- Live domain: https://www.chroniclemusic.co.za
- Hosting platform: Vercel
- Vercel project: chronicle-music-publishing
- Public website redesign: complete
- Production deployment: complete
- Mobile/responsive optimisation: complete
- Current branch: checkpoint/mwis-artist-page
- Public website should now be treated as a stable production surface.

## Public Website / Private Portal Boundary
- Public Chronicle Website = public-facing brand, catalogue, artists, contact, and showroom layer.
- Chronicle Creative Operations Portal V1 = private authenticated operational command centre.
- These are separate surfaces.
- Do not edit public webpages during portal work unless Markus explicitly approves it.
- Portal work is not public UX/UI work, not a public dashboard, and not a redesign of the website.

## Governance history
- The public website was completed largely before the full high-level Plexicon-governed development workflow was consistently available for this repository.
- Plexicon/Chronicle docs were added later to improve continuity, Open The Door readiness, and future governance.
- Do not imply that the completed public website was fully developed under the complete Plexicon method.
- Chronicle Creative Operations Portal V1 is the first Chronicle stream intended to proceed more deliberately under the governed workflow.
- Portal development should be led manually by Markus/ChatGPT, with Codex used where useful for bounded execution.
- The docs Codex references must be kept updated so Codex and future chats stay aligned.
- Plexicon feedback/adoption-back may be useful later if Chronicle develops patterns or services worth review, but it is not the current implementation task.
- Chronicle remains a consuming system and does not become authoritative over Plexicon Core.

## Next phase
Chronicle Creative Operations Portal V1 development is the next active workstream.

Correct model:
- Public Chronicle Website = public brand/catalogue/showroom.
- Chronicle Creative Operations Portal V1 = private authenticated operational environment.
- Future Sentry Sound Creative Operations Module = industrialised version of the validated portal workflow.

Portal direction:
- Portal is private and requires login/authentication.
- Portal should use the current stack: Next.js, React, Tailwind, Vercel, Clerk.
- Portal may have a website entry button/link when approved, but it must not be treated as a public website feature.
- Do not edit public webpages during portal work unless Markus explicitly approves it.
- Workbook/Google Sheets is temporary source-of-truth for V1, but structure should mirror future database entities.
- Do not design around spreadsheet limitations.
- Portal V1 operational lifecycle:
  - Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations.
- Strategic path:
  - Chronicle Creative Operations Portal V1 -> validated workflow -> Sentry Sound Creative Operations Module.
- Main success criterion:
  - When Markus opens the portal every morning, it must tell him what creative, marketing, catalogue, campaign, and release actions need to happen today.

## Locked design direction
- Chronicle Music remains the primary brand.
- Website purpose: artist promotion, catalogue presentation, publishing identity, company story, and Chronicle capabilities.
- Do not make the About page an ecosystem page.
- Sentry Sound and StudyEdge references may appear only where they naturally support an individual artist story, such as Huey-D.
- Chronicle design language: dark luxury, black/gold, cinematic, premium publishing identity.
- Avoid fake achievements, awards, streams, charts, or exaggerated claims.

## Completed current checkpoint
- Website redesign completed and deployed live to production.
- Mobile/responsive optimisation completed across the public website, with /catalogue/browse treated as the priority mobile surface.
- Catalogue browse page is working at /catalogue/browse.
- Catalogue source is stable:
  - data/catalogue/chronicle-master-catalogue.xlsx
  - scripts/generate-catalogue-browse.cjs
  - lib/catalogueBrowse.ts
- MP3 catalogue previews are tracked and working under:
  - public/catalogue/audio
  - public/catalogue/audio-huey-d
- Chronicle Music social links integrated.
- M-WIS official social links integrated.
- Huey-D official social links integrated.
- Contact page mailto workflow works with markus@chroniclemusic.co.za.
- Submit Works mailto workflow works for catalogue submission enquiries.
- M-WIS artist page refined into cinematic creative archive / publishing dossier direction.
- M-WIS catalogue link routes directly to /catalogue/browse.
- Huey-D artist page redesigned with cinematic producer profile direction.
- Huey-D includes StudyEdge ambassador positioning as part of his individual artist profile.
- Huey-D lower section converted into Music / Technology / Legacy showcase using ecosystem image.
- Huey-D Browse Catalogue / Music button links directly to /catalogue/browse.
- Header Catalogue navigation now links directly to /catalogue/browse.
- Footer and homepage catalogue links already point to /catalogue/browse.
- /about page created and no longer returns 404.
- About page follows Chronicle-only positioning:
  - Chronicle Music Publishing as independent music publishing house.
  - Artist/catalogue/rights/legacy focus.
  - No Sentry Sound / StudyEdge ecosystem framing.
- About page sections currently:
  - Hero: Chronicle Music Publishing.
  - Our Purpose.
  - What We Stand For.
  - We Believe That.
  - Our Approach.
- About page uses cinematic full-width image background sections.

## Current image assets used
- /assets/ecosystem/chronicle-about-hero.png
- /assets/ecosystem/chronicle-legacy-manuscript.png
- /assets/ecosystem/chronicle-music-legacy.png
- /assets/ecosystem/chronicle-publishing-approach.png
- /assets/ecosystem/huey-d-music-technology-legacy.png

## Important design rule
Chronicle should present catalogue, rights, legacy, representation, music, artists, and creative value truthfully.
Do not reintroduce fake achievements, gold records, awards, streams, or exaggerated commercial claims.

## Rollback point
Backup folder:
.\docs\backups\checkpoint-about-page-2026-06-10-1959

Git commit message:
Checkpoint Chronicle artist pages catalogue routing and About page

---

## Checkpoint update - Contact and About page refinement

### Contact page updates
- Contact page email updated to markus@chroniclemusic.co.za.
- Phone number removed from public contact information.
- Based in South Africa retained.
- Social placeholders added for Instagram, Facebook, YouTube and TikTok. Final links still pending.
- Contact enquiry form uses a mailto flow to markus@chroniclemusic.co.za.
- Catalogue CTA "Submit Works" now opens a pre-filled email to markus@chroniclemusic.co.za.

### Contact page visual updates
- Contact hero image treatment reduced excessive fade and improved studio visibility.
- Contact "We Work With" card was refined with a dedicated image asset.
- Final contact card image path:
  - /assets/chronicle-sections/contact-mic-card-new.png
- Contact card wording aligned away from rights-holder-only positioning toward:
  - Artists.
  - Creators.
  - Collaborators.

### Homepage routing update
- Homepage "Learn More About Us" button now routes to /about instead of /contact.

### About page updates
- About page hero left unchanged.
- Our Purpose image visibility increased; avoid global image treatment changes.
- "Music is more than sound" section image fade reduced and damaged encoding text repaired.
- Our Approach section converted from one full-width image-overlay card into a two-card layout:
  - Left card: image only.
  - Right card: text and CTA.
- Our Approach image now uses:
  - /assets/chronicle-sections/chronicle-contact-studio-hero.png

### Asset folder correction
Use this folder for Chronicle section-specific images:

public/assets/chronicle-sections/

Confirmed current relevant assets:
- chronicle-contact-studio-hero.png
- contact-mic-card-new.png
- hero-studio-wide.png
- resources-mic-reference.png
- studio-control-room.png
- Untitledrights-panel.png

Do not assume section images are in /assets/ecosystem/. Verify actual folder and filename before editing image paths.

### Development notes
- PowerShell edits can cause UTF-8 corruption if not saved carefully.
- After editing TSX files through PowerShell, write files using UTF-8 without BOM:
  [System.Text.UTF8Encoding]::new($false)
- Avoid broad replacements such as replacing all instances of one word or one href.
- Inspect the exact current source before changing image paths.
- For image-heavy Chronicle sections, prefer purpose-built assets or two-card layouts over forcing an unsuitable image with excessive CSS crop, opacity or transform hacks.

### Current status
- Public website is functionally complete, mobile-optimised, and live in production.
- Contact page, About page, Artists page, M-WIS page, Huey-D page, and Catalogue Browse page are stable public surfaces.
- Chronicle website direction remains artist, music, release and long-term catalogue focused.
- Next work should start from Chronicle Creative Operations Portal V1 planning, not public-site redesign.

---

## Launch and Portal Handover - 2026-06-11

### Public Website Stable/Live
- The redeveloped Chronicle Music website is live at https://www.chroniclemusic.co.za.
- Do not run production deployment commands unless explicitly instructed.
- Do not redesign the public website while building portal functionality.
- Public website changes should be bounded, inspected first, and validated with `npm.cmd run build`.

### Portal Development Guardrails
- Portal work should preserve Chronicle's dark luxury, black/gold, cinematic brand language.
- Portal is private and authenticated; it is not a public-facing UX/UI extension.
- Portal should use Next.js, React, Tailwind, Vercel, and Clerk.
- Add sign-in / portal access carefully so public navigation remains stable, but treat it only as an entry point into the private portal.
- Portal routes, authentication boundaries, data model, and scope require a planning pass before implementation.
- Workbook/Google Sheets may be used as temporary V1 source-of-truth.
- Workbook structure should mirror future database entities.
- Spreadsheet/database-style workflows are approved as a pattern to explore for marketing activity management, but portal design must not be limited by spreadsheet constraints.
- Sentry Sound belongs mainly in portal/strategy/handover docs, not public website positioning.

### Catalogue Pattern To Preserve
- The catalogue Excel pipeline is stable and should not be casually replaced.
- Future portal data workflows may borrow this pattern:
  - structured spreadsheet-style source or table
  - generator or sync layer
  - typed/generated website data
  - clear file ownership
  - low-friction management for Markus/Chronicle operators
