# Chronicle Music Website — Current System State

Branch: checkpoint/mwis-artist-page

## Current focus
Chronicle Music public website refinement: artist pages, catalogue routing, and About page creation.

## Locked design direction
- Chronicle Music remains the primary brand.
- Website purpose: artist promotion, catalogue presentation, publishing identity, company story, and Chronicle capabilities.
- Do not make the About page an ecosystem page.
- Sentry Sound and StudyEdge references may appear only where they naturally support an individual artist story, such as Huey-D.
- Chronicle design language: dark luxury, black/gold, cinematic, premium publishing identity.
- Avoid fake achievements, awards, streams, charts, or exaggerated claims.

## Completed current checkpoint
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
- Contact page V1 is functionally complete.
- About page major visual sections are aligned and improved.
- Chronicle website direction remains artist, music, release and long-term catalogue focused.
