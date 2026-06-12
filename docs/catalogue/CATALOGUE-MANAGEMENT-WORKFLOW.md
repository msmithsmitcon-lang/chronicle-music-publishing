# Chronicle Music Catalogue Management Workflow

## Current Status - 2026-06-11

The catalogue system is stable, mobile-optimised, and live on the public website at:

```text
https://www.chroniclemusic.co.za/catalogue/browse
```

This workflow should be preserved. It is also an important pattern for future Chronicle Creative Operations Portal V1 workbook/database-style workflows, especially marketing activity management.

## Catalogue Positioning

The catalogue is positioned as:

- Chronicle Music Publishing catalogue
- multi-artist
- searchable by title, artist, mood, language, and category
- filterable by represented artist, category, language, and preview availability
- public-facing discovery and licensing context, not a full backend catalogue management system

## Source Of Truth

Master catalogue spreadsheet:

```text
data/catalogue/chronicle-master-catalogue.xlsx
```

Generator script:

```text
scripts/generate-catalogue-browse.cjs
```

NPM command:

```powershell
npm run generate:catalogue
```

Generated website data:

```text
lib/catalogueBrowse.ts
```

Audio preview folders:

```text
public/catalogue/audio
public/catalogue/audio-huey-d
```

## Current Workflow To Add Songs

1. Open:
   `data/catalogue/chronicle-master-catalogue.xlsx`
2. Add or edit song rows.
3. Ensure the required website fields are correct:
   - `Website Visible = Yes`
   - `Preview Available = Yes` where a preview should appear
   - `Audio File Name` exactly matches the MP3 filename
   - `Cover Image Key` is valid, such as `mwis` or `hueyd`
   - `Website Mood` contains public-facing mood text
4. Save the Excel file.
5. Run:
   `npm run generate:catalogue`
6. Check `/catalogue/browse`.
7. Commit the spreadsheet, generated data, and any audio/assets together.

## Current Production State

- Catalogue browse is live and mobile-optimised.
- Public route: `/catalogue/browse`.
- Search, filters, preview availability, and selected-track preview behavior are working.
- Adult Contemporary is sorted first via generator genre sort order.
- Dropdown arrow uses plain `v` to avoid encoding corruption.
- MP3 previews are tracked in Git.

## Important Issues To Remember

- Avoid broad text replacements like replacing `Artist` globally. This previously broke variables such as `catalogueBrowseArtists` and `matchesArtist`.
- Do not replace the Excel workflow casually.
- Inspect `components/CatalogueBrowse.tsx` before changing catalogue UI.
- Inspect `scripts/generate-catalogue-browse.cjs` before changing generated fields or ordering.
- Preserve public-safe wording and avoid unsupported claims.

## Creative Operations Portal Pattern Note

The catalogue workflow can inform Chronicle Creative Operations Portal V1 data management:

- spreadsheet/table-like source of truth
- required fields
- controlled generator/sync process
- typed/generated app data
- predictable public asset paths
- clear operator instructions
- low-friction workflow for Chronicle operators

Important constraint:

- Workbook/Google Sheets may be a temporary V1 source-of-truth.
- Do not design around spreadsheet limitations.
- Workbook structure should mirror future database entities.

Portal V1 lifecycle:

```text
Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations
```

Possible private portal workflows that may use this pattern:

- campaign trackers
- artist marketing activity
- release task planning
- social content calendar
- press and playlist outreach logs
- catalogue promotion activity
- daily creative/marketing/release actions for Markus
