# Codex UI Prompt Template

Use this template for governed frontend execution tasks.

```text
MODE:
PROJECT:
SURFACE:
TARGET FILES:
DO NOT TOUCH:
LOCKED SECTIONS:
REFERENCE:
OBJECTIVE:
INSPECT FIRST SUMMARY:
VISUAL RULES:
SUCCESS CHECK:
OUTPUT REQUIRED:
```

## Field Guide

## MODE

Define the task type and governance posture.

Example:

```text
MODE: FRONTEND / UX-UI / BOUNDED EXECUTION
```

## PROJECT

Name the project.

Example:

```text
PROJECT: Plexicon
```

## SURFACE

Name the single page, route, modal, component family, or workflow view being edited.

Example:

```text
SURFACE: Dashboard overview
```

## TARGET FILES

List exact files Codex may inspect and propose edits for.

Example:

```text
TARGET FILES:
- app/dashboard/page.tsx
- components/dashboard/overview-panel.tsx
```

## DO NOT TOUCH

List protected systems and files.

Example:

```text
DO NOT TOUCH:
- backend code
- Supabase logic
- runtime orchestration
- APIs
- workflows
- asset-system logic
- tests unless explicitly requested
```

## LOCKED SECTIONS

List locked sections that must be preserved.

Example:

```text
LOCKED SECTIONS:
- Main navigation
- Billing status card
```

## REFERENCE

Provide visual references, screenshots, design notes, or links.

Example:

```text
REFERENCE:
- Screenshot: docs/references/dashboard-approved.png
- Direction: denser operational layout, less marketing-style spacing
```

## OBJECTIVE

Describe the intended outcome in concrete frontend terms.

Example:

```text
OBJECTIVE:
Improve hierarchy and responsiveness for the dashboard overview without changing data flow or backend behavior.
```

## INSPECT FIRST SUMMARY

Codex must fill this in after inspection and before editing.

Required summary:

```text
INSPECT FIRST SUMMARY:
- Current files involved:
- Existing layout structure:
- Dependencies/components used:
- Proposed exact edits:
- Approval status:
```

## VISUAL RULES

List visual constraints and project-specific style guidance.

Example:

```text
VISUAL RULES:
- Keep operational density.
- Avoid decorative landing-page treatment.
- Preserve existing navigation behavior.
- Use the project design system where available.
```

## SUCCESS CHECK

Define how the result will be judged.

Example:

```text
SUCCESS CHECK:
- Desktop and mobile screenshots show no overlap or overflow.
- Primary action is visually clear.
- Locked sections are unchanged.
- Backend and Supabase files are unchanged.
```

## OUTPUT REQUIRED

Define what Codex must report at completion.

Example:

```text
OUTPUT REQUIRED:
- Files changed
- Summary of edits
- Visual QA performed
- Screenshots reviewed or reason screenshots were not available
- Backend preservation confirmation
- Any remaining risks or placeholders
```
