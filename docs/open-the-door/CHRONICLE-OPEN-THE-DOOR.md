# Open The Door — Chronicle Music Website

## Purpose
Use this before continuing development in a new chat.

It collects the current project state, key files, M-WIS page code, asset registry, and available M-WIS assets into clipboard so the assistant can align before making changes.

## PowerShell Command

```powershell
$output = @()

$output += "===== PROJECT STRUCTURE ====="
$output += Get-ChildItem .\app -Recurse -File | Select-Object -ExpandProperty FullName

$output += "`n===== M-WIS ARTIST PAGE ====="
$output += Get-Content .\app\artists\m-wis\page.tsx -Raw

$output += "`n===== ARTISTS MOCKUP REFERENCE ====="
$output += Get-Content .\app\artists\mockup\page.tsx -Raw

$output += "`n===== ARTISTS MOCKUP CSS ====="
$output += Get-Content .\app\artists\mockup\page.module.css -Raw

$output += "`n===== ASSET REGISTRY ====="
$output += Get-Content .\lib\assets.ts -Raw

$output += "`n===== M-WIS ASSETS ====="
$output += Get-ChildItem .\public\assets -Recurse |
Where-Object { $_.Name -like "*m-wis*" } |
Select-Object FullName

$output += "`n===== SYSTEM STATE DOC ====="
$output += Get-Content .\docs\system\CHRONICLE-MUSIC-WEBSITE-STATE.md -Raw

$output | Set-Clipboard

Write-Host "OPEN THE DOOR COMPLETE - Chronicle project state copied to clipboard."
