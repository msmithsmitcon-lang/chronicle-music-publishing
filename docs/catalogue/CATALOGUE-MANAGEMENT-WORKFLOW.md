# Chronicle Music Website — Handover 2026-06-10-2351

## Current state
We are working on the Chronicle Music Publishing website.

The catalogue page is now at:
- /catalogue/browse

The catalogue is no longer M-WIS-only. It is now positioned as:
- Chronicle Music Publishing catalogue
- multi-artist
- searchable by title, artist, mood, language, category
- filterable by represented artist, category, language, and preview availability

## Completed catalogue architecture
- Master catalogue spreadsheet is now the source of truth:
  data/catalogue/chronicle-master-catalogue.xlsx
- Generator script created:
  scripts/generate-catalogue-browse.cjs
- NPM command added:
  npm run generate:catalogue
- Generated website data file:
  lib/catalogueBrowse.ts
- MP3 files are stored in Git under:
  public/catalogue/audio
  public/catalogue/audio-huey-d

## Current workflow to add songs
1. Open:
   data/catalogue/chronicle-master-catalogue.xlsx
2. Add/edit song rows.
3. Ensure:
   Website Visible = Yes
   Preview Available = Yes
   Audio File Name = exact mp3 filename
   Cover Image Key = mwis or hueyd
   Website Mood = public-facing mood text
4. Save Excel.
5. Run:
   npm run generate:catalogue
6. Refresh /catalogue/browse.
7. Commit and push.

## Current visual state of catalogue page
- Hero heading:
  Discover the Chronicle Music Publishing Catalogue.
- Hero copy:
  Search by title, artist, category, language, or mood. Explore represented works, discover new voices, and preview selected catalogue recordings.
- Stats block was removed from hero.
- Hero image changed to:
  /assets/ecosystem/chronicle-catalouge-hero.png
- Filter bar has:
  Search | Represented Artists | Category | Language | Preview available
- Dropdown arrow was changed to plain "v" to avoid encoding corruption.
- Adult Contemporary is sorted first via generator genre sort order.

## Important issue to remember
Avoid broad text replacements like replacing "Artist" globally. It previously broke variables such as catalogueBrowseArtists and matchesArtist.

## Current likely next changes before publishing
User wants a few final visual polish changes on the catalogue page before publishing.
Do not redesign everything. Make only bounded changes.
Inspect components/CatalogueBrowse.tsx before editing.

## Key files
- components/CatalogueBrowse.tsx
- lib/catalogueBrowse.ts
- scripts/generate-catalogue-browse.cjs
- data/catalogue/chronicle-master-catalogue.xlsx
- public/assets/ecosystem/chronicle-catalouge-hero.png
- package.json

## Commit checkpoint
This handover documents the working Excel-to-catalogue system and current catalogue visual direction.
