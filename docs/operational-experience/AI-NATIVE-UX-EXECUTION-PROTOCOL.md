# AI-Native UX Execution Protocol

This protocol formalizes Codex execution for bounded AI-native UX work.

Codex must not "improve the whole UI". Codex must only work on bounded surfaces with explicit scope.

## One-Surface Rule

Each task must target one surface at a time.

A surface may be:

- one page
- one route
- one modal
- one dashboard panel
- one workflow step
- one assistant interaction area
- one monitoring view
- one component family

## Inspect-First Rule

Before editing, Codex must inspect the current target files and component structure.

Codex must report:

- current files involved
- existing layout structure
- dependencies and components used
- proposed exact edits

Codex must not edit until approval is given where governance requires approval.

## Screenshot Refinement Rule

For visual implementation or refinement work, Codex should use screenshots where practical.

Codex should check:

- hierarchy
- spacing
- alignment
- responsiveness
- overflow
- image treatment
- interaction visibility
- consistency with visual rules

If screenshots cannot be captured, Codex must report the reason and remaining visual risk.

## Backend Protection Rule

Codex must not modify backend or operational behavior during UX tasks unless explicitly authorized.

Protected areas include:

- backend code
- Supabase schemas, queries, policies, migrations, or client logic
- API routes
- runtime orchestration
- operational workflows
- authentication or authorization
- billing, finance, entitlement, or permission logic
- asset-system logic
- tests unrelated to the approved surface

## Locked-Sections Rule

Locked sections must not be changed unless the task explicitly unlocks them or names them as editable.

Codex must check the relevant locked-section registry before proposing edits that may affect approved surfaces.

## Visual Reference Rule

Visual references are directional guidance for the named surface only.

Codex should extract:

- hierarchy
- spacing
- density
- rhythm
- tone
- component treatment
- image treatment
- responsive behavior

Codex must not copy a reference blindly when it conflicts with product context, operational truth, accessibility, governance, or locked sections.

## Product Screen Rule

Product and operational screens must prioritize work over spectacle.

They should provide:

- clear state
- clear next action
- visible ownership
- validation status
- workflow position
- interruption recovery
- backend truth where relevant

## Static Page Rule

Static pages may use more narrative visual structure, but must still preserve truth, accessibility, brand consistency, and approved scope.

Static pages must not imply product maturity, integration readiness, approval, or operational completeness beyond the underlying truth.

## Required Codex Prompt Structure

```text
MODE:
PROJECT:
SURFACE:
TARGET FILES:
LOCKED SECTIONS:
DO NOT TOUCH:
REFERENCE:
OBJECTIVE:
VISUAL RULES:
INSPECT FIRST SUMMARY:
SUCCESS CHECK:
OUTPUT REQUIRED:
```

## Execution Discipline

Codex must:

- work only within the named surface
- preserve semantics and operational truth
- protect backend contracts
- avoid broad visual rewrites
- report files changed
- report visual QA performed
- report any assumptions or remaining risk

This protocol supports governed execution, bounded Codex workflows, reusable system patterns, and future cross-product inheritance.
