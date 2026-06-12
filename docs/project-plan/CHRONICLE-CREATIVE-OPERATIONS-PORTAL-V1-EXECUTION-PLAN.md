# Chronicle Creative Operations Portal V1 Execution Plan

Record type: Formal Execution Governance Plan
Authority Level: Local Operational State
Created: 2026-06-12
Current branch: `feature/chronicle-creative-operations-portal-v1`

This document is the source of truth for Chronicle Creative Operations Portal V1 execution governance, Open The Door continuity, and future development sessions.

## 1. Project Position

- The Chronicle public website phase is complete.
- The website remains live and stable.
- The portal is a new development stream.
- Portal work must not destabilize the public website.

The public website is the public-facing Chronicle brand, catalogue, artists, contact, and showroom layer. The portal is a separate private authenticated operational environment.

## 2. Execution Governance Rule

Development proceeds strictly phase-by-phase.

A phase cannot be exited until:

- Scope is defined.
- Design is reviewed.
- Markus approves.
- Documentation is updated.
- The repository state is aligned.

No jumping between phases.

No uncontrolled feature additions.

No implementation before the required planning phase is complete.

## 3. Execution Phases

## Phase 0 - Product & Operational Definition

Status:
ACTIVE

Deliverables:

- Portal Product Map.
- Workbook -> operational model mapping.
- Daily command centre definition.
- Sentry Sound strategic alignment.
- Approval of operational philosophy.

Exit criteria:
Product definition is approved and documented.

## Phase 1 - Portal Architecture & Technical Boundary

Status:
Not started.

Topics:

- Route separation.
- Clerk authentication boundary.
- Access model.
- Workbook data strategy.
- Component architecture.
- Separation from public website.

Exit criteria:
Technical architecture approved.

## Phase 2 - Portal Foundation Build

Status:
Not started.

Implementation:

- Protected portal shell.
- Authentication.
- Navigation.
- Layout foundation.
- Shared components.

Exit criteria:
Portal can be entered and navigated securely.

## Phase 3 - Command Centre Dashboard V1

Status:
Not started.

Objective:

The portal must answer:

```text
What does Chronicle need to do today?
```

Includes:

- Priorities.
- Blockers.
- Approvals.
- Deadlines.
- Campaign readiness.
- Content readiness.

Exit criteria:
Daily operational dashboard is functioning.

## Phase 4 - Operational Modules

Status:
Not started.

Modules:

- Artists.
- Songs.
- Creative Direction.
- Assets.
- Campaigns.
- Content Queue.

Each module must define:

- Purpose.
- Data relationships.
- Workflow.
- Status.
- Required actions.

## Phase 5 - Workflow Intelligence & Optimization

Status:
Not started.

Includes:

- Cross-module relationships.
- Dependency awareness.
- Missing information detection.
- Readiness indicators.
- Operational guidance.

## Phase 6 - Future Sentry Sound Evaluation

Status:
Not started.

Evaluate:

- Transferable workflows.
- Database migration requirements.
- Multi-user requirements.
- Enterprise opportunities.

## 4. Development Roles

Markus:

- Operational reality.
- Creative workflow.
- Business priorities.
- Phase approval.

ChatGPT:

- Product architecture.
- Governance.
- Strategic alignment.
- Preventing scope drift.

Codex:

- Repository inspection.
- Documentation updates.
- Controlled implementation tasks.

Codex does not define product scope.

## 5. Current Project State

Current branch:

```text
feature/chronicle-creative-operations-portal-v1
```

Current phase:

```text
Phase 0 - Product & Operational Definition
```

Status:

```text
ACTIVE
```

## 6. Important Principles

- The portal is not a public website feature.
- The portal is not a dashboard added to the website.
- The portal is a private creative operations system.
- The workbook is the temporary V1 data layer.
- The portal validates future Sentry Sound Creative Operations concepts.
- Documentation is the source of truth for Codex and future Open The Door sessions.

## 7. Forbidden During This Planning Stage

- Do not modify `app/`.
- Do not modify `components/`.
- Do not modify `lib/`.
- Do not modify `public/`.
- Do not modify `scripts/`.
- Do not change runtime behavior.
- Do not install packages.
- Do not create authentication.
- Do not create routes.
- Do not implement portal screens.
- Do not deploy.
