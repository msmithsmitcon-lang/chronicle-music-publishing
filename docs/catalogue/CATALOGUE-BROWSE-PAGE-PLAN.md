# Catalogue Browse Page Plan

## 1. Purpose Of `/catalogue`

`/catalogue` remains the curated premium showcase for Chronicle Music Publishing.

Its role is to present a small set of selected works in an editorial, rights-aware format. It should stay focused, cinematic, and restrained, with the current three-card showcase preserved as the public-facing catalogue entry point.

## 2. Purpose Of `/catalogue/browse`

`/catalogue/browse` is a future deeper discovery surface for selected and represented works.

Its role is to support catalogue browsing, rights-aware music discovery, publishing context, controlled preview listening, and future licensing discussion flow without turning Chronicle into a streaming platform or public rights marketplace.

## 3. Approved Layout Direction

- Desktop: compact song rows for efficient browsing.
- Mobile: compact cards that preserve the row rhythm in a smaller viewport.
- Overall structure: hybrid browse experience with grouped collections, restrained filters, and controlled preview interactions.

The page should feel like a premium publishing catalogue and cinematic music showcase, not an AI generation dashboard, admin panel, SaaS dashboard, or Spotify clone.

## 4. Filter Categories

Approved future filter categories:

- Artist
- Status
- Genre / Mood
- Preview available
- Licensing discussion
- Language
- Collection

Filters should remain clear and restrained. They should help users narrow catalogue context without exposing excessive operational metadata.

## 5. Song Row / Card Fields

Recommended fields for future browse rows or compact cards:

- Cover
- Title
- Artist
- Genre / mood
- Status pill
- 60-second preview control
- Catalogue context note
- Future streaming buttons
- Licensing discussion CTA

Suggested catalogue context note:

```text
Preview for catalogue context only.
```

Suggested CTA language:

```text
Publishing / Licensing Discussion
```

Future streaming buttons must only appear when real links are available and approved.

## 6. Rules

- Do not copy Suno UI directly.
- Do not make Chronicle look or behave like a streaming platform.
- Keep `/catalogue` as the curated three-card showcase.
- Keep `/catalogue/browse` as the deeper discovery surface.
- Do not add fake streaming links.
- Do not imply public marketplace availability.
- Do not imply guaranteed licensing availability.
- Do not imply all works are fully published, registered, distributed, or cleared.
- Do not store or deploy full masters in public assets.
- Keep previews controlled, limited, and clearly labelled.
- Keep preview wording tied to catalogue context, not entertainment streaming.

## 7. Future Implementation Phases

### Phase 1: Data Readiness

- Confirm required browse fields.
- Confirm which works can appear in browse mode.
- Confirm preview approval state per work.
- Confirm cover artwork availability.
- Confirm language, genre, mood, status, and collection labels.

### Phase 2: Browse Route Prototype

- Create `/catalogue/browse` as a separate route.
- Preserve `/catalogue` unchanged as the curated showcase.
- Build static grouped browse sections using existing Chronicle visual language.
- Use compact desktop rows and compact mobile cards.

### Phase 3: Controlled Preview Integration

- Reuse or adapt the controlled 60-second preview behavior.
- Ensure previews do not autoplay.
- Prevent download-oriented controls where practical.
- Display the catalogue context note beside preview controls.

### Phase 4: Filtering

- Add restrained local filtering by approved categories.
- Keep filters simple and readable.
- Avoid dashboard-heavy or admin-style filter density.

### Phase 5: Licensing Discussion Flow

- Connect row/card CTAs to the contact path.
- Preserve wording such as "discussion where applicable."
- Avoid implying automatic licensing, instant clearance, or marketplace purchase.

### Phase 6: Rights And Deployment Review

- Confirm no full masters are deployed publicly.
- Confirm only approved preview assets are public.
- Confirm all public labels preserve development-stage publishing truth.
- Review mobile and desktop presentation before release.

## No Build Approved Yet

This document is a planning artifact only.

It does not authorize UI work, route creation, code changes, backend/API work, audio expansion, streaming behavior, public deployment of full masters, or fake streaming links.
