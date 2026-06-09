# AI-Native UX/UI Development Protocol

This protocol defines the governed execution standard for AI-assisted frontend work across Plexicon, Sentry Sound, StudyEdge, and future systems.

It is intended for documentation, governance, and repeatable frontend execution. It does not authorize changes to backend systems, Supabase logic, runtime orchestration, APIs, workflows, or application behavior.

## Purpose

AI-native frontend work must be bounded, inspectable, and visually verified.

The goal is to make UI development faster without allowing broad, uncontrolled edits or accidental changes to protected system behavior.

This protocol formalizes:

- bounded frontend execution
- architecture-first UI reasoning
- screenshot-driven refinement
- visual QA discipline
- backend protection during frontend work
- reusable prompt structure for Codex UI tasks

## Scope

This protocol applies to frontend design and implementation tasks only.

It may be used for:

- layout refinement
- visual hierarchy improvements
- component styling
- responsive behavior
- surface-level UX clarity
- visual QA and screenshot feedback loops
- governed frontend implementation plans

It must not be used to authorize:

- backend changes
- Supabase changes
- workflow or orchestration changes
- API changes
- data model changes
- authentication changes
- asset-system logic changes
- operational behavior changes

## One-Surface Rule

Each Codex UI task must target one surface at a time.

A surface may be:

- one page
- one route
- one modal
- one dashboard panel
- one component family
- one narrow workflow view

Codex must not redesign multiple unrelated surfaces in a single task unless explicitly instructed and bounded by a screen map.

The objective must name the exact surface and the target files involved.

## Inspect First Rule

Before making frontend changes, Codex must inspect the current target files and existing component structure.

Codex must report:

- current files involved
- existing layout structure
- dependencies/components used
- proposed exact edits

Codex must not edit until the proposal is approved.

## Backend Protection Rule

Frontend tasks must protect backend and operational systems by default.

Unless explicitly authorized, Codex must not modify:

- backend code
- API routes
- Supabase schemas, queries, policies, migrations, or client logic
- runtime orchestration
- operational workflows
- authentication or authorization logic
- billing, finance, entitlement, or permission logic
- asset-system logic
- tests unrelated to the frontend surface

If a frontend change appears to require backend changes, Codex must stop and report the dependency instead of making the change.

## Screenshot Feedback Rule

Visual refinement must be driven by screenshots wherever practical.

For UI implementation or refinement tasks, Codex should:

- run or use the existing frontend preview environment when available
- capture screenshots for relevant desktop and mobile viewports
- inspect visual hierarchy, spacing, alignment, overflow, and responsiveness
- refine based on observed output
- report what was visually checked

If screenshots cannot be captured, Codex must state why and describe the remaining visual risk.

## Locking Rule

Approved UI sections may be locked after review.

Locked sections must not be modified during future Codex UI tasks unless the prompt explicitly unlocks them or names them as editable.

Locked sections should be recorded in `docs/ux-ui/LOCKED-SECTIONS.md` with:

- section name
- project
- route or surface
- date locked
- approver
- notes

When a task touches a nearby surface, Codex must check the locking registry before proposing edits.

## Visual Reference Rule

When a visual reference is provided, Codex must treat it as directional guidance for the named surface only.

Codex should extract reusable visual intent, such as:

- hierarchy
- density
- spacing
- tone
- card treatment
- button treatment
- navigation behavior
- image usage
- responsiveness

Codex must not blindly copy a reference if it conflicts with the product context, existing design system, accessibility needs, or locked sections.

## Required Prompt Format

Frontend execution prompts should use this structure:

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

## Execution Flow

1. Confirm the task is frontend-only.
2. Identify the single target surface.
3. Inspect the current files and component structure.
4. Report the inspect-first summary and proposed exact edits.
5. Wait for approval when required by the prompt or governance mode.
6. Make only the approved frontend edits.
7. Preserve backend, Supabase, runtime, workflow, API, and asset-system logic.
8. Run appropriate checks for the frontend scope.
9. Capture or review screenshots when practical.
10. Report files changed, visual QA performed, and any remaining risks.

## Visual QA Standard

Codex must evaluate frontend output for:

- hierarchy
- spacing
- responsiveness
- alignment
- image quality
- backend preservation
- operational clarity
- accessibility awareness
- consistency with the local design system

The reusable checklist lives in `docs/ux-ui/VISUAL-QA-CHECKLIST.md`.

## Reuse Across Systems

This protocol is designed to be reused across:

- Plexicon
- Sentry Sound
- StudyEdge
- future systems

Each project may maintain its own screen map, design system notes, locked sections, and visual QA history while preserving this shared execution standard.
