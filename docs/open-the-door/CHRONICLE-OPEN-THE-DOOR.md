# Open The Door - Chronicle Music Website / Creative Operations Portal V1

## Purpose
Use this before continuing Chronicle development in a new chat.

The public website is now stable, mobile-optimised, and live at:

```text
https://www.chroniclemusic.co.za
```

The next development phase is Chronicle Creative Operations Portal V1 planning and implementation. This helper gathers the current operational state, public website guardrails, catalogue workflow, and portal doctrine so future work does not accidentally restart public website redesign or treat the portal as a public website feature.

## Current Return Point

- Public website redesign: complete.
- Production deployment: complete.
- Mobile/responsive optimisation: complete.
- Catalogue browse page: stable at `/catalogue/browse`.
- Excel-driven catalogue workflow: stable.
- MP3 previews: tracked and working.
- Social links: integrated for Chronicle Music, M-WIS, and Huey-D.
- Next phase: define and build private authenticated Chronicle Creative Operations Portal V1.

## Correct Model

- Public Chronicle Website = public brand/catalogue/showroom.
- Chronicle Creative Operations Portal V1 = private authenticated operational environment.
- Future Sentry Sound Creative Operations Module = industrialised version of the validated portal workflow.

## Portal Guardrails

- Do not destabilise the live public website while building portal features.
- Do not edit public webpages during portal work unless Markus explicitly approves it.
- Do not change production deployment or DNS unless explicitly instructed.
- Do not replace the catalogue Excel workflow casually.
- Portal must use Next.js, React, Tailwind, Vercel, and Clerk unless a future approved plan changes that.
- Portal may have a sign-in / portal access link from the website, but this is only an entry into the private authenticated environment.
- Workbook/Google Sheets is temporary source-of-truth for V1, but structure should mirror future database entities.
- Do not design around spreadsheet limitations.
- Portal lifecycle: Artist -> Song -> Creative Direction -> Assets -> Campaigns -> Content Queue -> Daily Operations.
- Morning success criterion: the portal tells Markus what creative, marketing, catalogue, campaign, and release actions need to happen today.

## PowerShell Command

```powershell
$output = @()

$output += "===== GIT STATUS ====="
$output += git status --short --branch

$output += "`n===== PACKAGE JSON ====="
$output += Get-Content .\package.json -Raw

$output += "`n===== SYSTEM STATE DOC ====="
$output += Get-Content .\docs\system\CHRONICLE-MUSIC-WEBSITE-STATE.md -Raw

$output += "`n===== CURRENT BRIEFING ====="
$output += Get-Content .\docs\execution-state\OPEN-THE-DOOR-CURRENT-BRIEFING.md -Raw

$output += "`n===== PORTAL PHASE HANDOVER ====="
$output += Get-Content .\docs\execution-state\PORTAL-PHASE-HANDOVER.md -Raw

$output += "`n===== CREATIVE OPERATIONS PORTAL V1 DOCTRINE ====="
$output += Get-Content .\docs\portal\CHRONICLE-CREATIVE-OPERATIONS-PORTAL-V1.md -Raw

$output += "`n===== PROJECT PLAN ====="
$output += Get-Content .\docs\project-plan\CHRONICLE-MUSIC-PROJECT-PLAN.md -Raw

$output += "`n===== WEBSITE STRUCTURE ====="
$output += Get-Content .\docs\website\WEBSITE_STRUCTURE.md -Raw

$output += "`n===== CATALOGUE WORKFLOW ====="
$output += Get-Content .\docs\catalogue\CATALOGUE-MANAGEMENT-WORKFLOW.md -Raw

$output += "`n===== KEY PUBLIC APP FILES ====="
$output += Get-ChildItem .\app -Recurse -File |
Where-Object {
  $_.FullName -match "\\app\\(page|layout|globals)\." -or
  $_.FullName -match "\\app\\(about|contact|artists|catalogue)"
} |
Select-Object -ExpandProperty FullName

$output += "`n===== KEY COMPONENTS ====="
$output += Get-ChildItem .\components -File | Select-Object -ExpandProperty FullName

$output | Set-Clipboard

Write-Host "OPEN THE DOOR COMPLETE - Chronicle live website and Creative Operations Portal V1 state copied to clipboard."
```
