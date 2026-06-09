# Chronicle Music Project Plan

Record type: Local Project Plan
Authority Level: Local Operational State
Created: 2026-06-07

This plan is local to Chronicle Music Website. It references Plexicon Core authority through the local consumption map and does not redefine Plexicon doctrine.

## 1. Project Identity

- Project: Chronicle Music Website
- System: Chronicle Music
- Repository role: public website and Plexicon-consuming system
- Current lifecycle state: existing-system adoption initialized
- Current implementation mode: docs-only initialization, no website code changes

## 2. Current Local Objective

```text
Maintain Chronicle Music Website as a public-facing music company website while consuming Plexicon Core governance, execution-state continuity, adoption lifecycle, and public-safe boundary patterns by reference.
```

## 3. Current Repository Memory

Existing memory includes:

- `docs/strategy/`
- `docs/website/`
- `docs/catalogue/`
- `docs/ux-ui/`
- `docs/operational-experience/`
- `docs/backups/`
- local app, component, library, and public asset structure

New adoption memory includes:

- `docs/authority/`
- `docs/adoption/`
- `docs/execution-state/`
- `docs/project-plan/`
- `docs/build-log/`

## 4. Workstreams

| Workstream | Status | Notes |
| --- | --- | --- |
| Plexicon-consuming initialization | Complete, pending human review | Local records created by reference to Core templates. |
| Adoption record review | Next | Human review required before treating records as accepted local state. |
| Website-state reconciliation | Proposed | Compare implemented website state against existing strategy docs and adoption boundaries. |
| Public presentation implementation | Deferred | Requires explicit implementation approval. |
| Runtime/API/SDK/CLI integration | Not planned | Forbidden in initialization pass. |

## 5. Next Allowed Action

```text
Review generated adoption records and decide whether to proceed to website-state reconciliation.
```

## 6. Forbidden Actions

- Do not modify website code without a future implementation prompt.
- Do not redesign UI as part of adoption review.
- Do not install packages.
- Do not alter framework, auth, database, deployment, API, SDK, or CLI setup.
- Do not copy Plexicon Core doctrine into Chronicle as local authority.

## 7. Validation Expectations

For docs-only adoption initialization:

- Confirm files exist.
- Confirm local records reference Plexicon Core.
- Confirm no website code was changed intentionally.
- Capture Git status.

For future implementation work:

- Inspect relevant local docs first.
- Confirm allowed files and forbidden actions.
- Run appropriate validation commands, likely `npm.cmd run build`, only when implementation changes justify it.

## 8. Review Triggers

Review this plan when:

- Open The Door briefing changes.
- Plexicon Core adoption manifest changes.
- human owner changes the active objective.
- website implementation work is approved.
- a feedback candidate is identified.

