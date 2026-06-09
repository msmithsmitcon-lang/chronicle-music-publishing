# Operational Truth UX

Operational Truth UX defines how systems expose real operational state to users.

The interface must never imply more certainty, completion, approval, or readiness than the backend truth supports.

## Principle

```text
Never make the interface look more complete, certain, or approved than the backend truth supports.
```

## Readiness Visibility

Users must know whether a surface, workflow, action, or system is ready.

Readiness may include:

- required data present
- validation passed
- dependencies available
- permissions confirmed
- approvals complete
- backend process ready

## Validation States

Validation states must be visible where they affect action.

Common states include:

- not started
- in progress
- valid
- invalid
- partially valid
- blocked
- needs review
- expired

## Workflow Truth

Workflow truth is the actual state of work.

The interface should expose:

- current stage
- completed stages
- skipped stages
- blocked stages
- owner
- last action
- next required action
- pending external dependency

## Backend Truth Exposure

Backend truth should be surfaced when it affects user action or trust.

This may include:

- sync status
- queue status
- save status
- processing status
- source-of-record state
- integration availability
- policy or permission state

## Audit-Safe Interactions

Audit-safe interactions make important actions reviewable.

They should preserve:

- who acted
- what changed
- when it changed
- why it changed where applicable
- whether AI contributed
- what approval or validation existed

## Governance Visibility

Governance should be visible where it changes user authority or workflow state.

Examples include:

- approval required
- locked section
- policy constraint
- restricted action
- review pending
- audit-critical workflow

## Status Transparency

Status should be plain and specific.

Avoid generic success, warning, or loading language where the user needs operational clarity.

## Error Honesty

Errors should explain what failed and what can happen next.

Do not hide failures behind vague messages or optimistic UI states that imply success.

## Confidence Indicators

Confidence indicators are useful when AI, incomplete data, prediction, or inference is involved.

They should clarify:

- confidence level
- reason for uncertainty
- source of evidence
- need for human review
- limitations of the recommendation

## Incomplete or Missing Data States

Incomplete data must be visible.

The interface should distinguish between:

- not loaded
- unavailable
- missing
- incomplete
- stale
- unknown
- intentionally blank

Users should not have to guess whether missing information is a system issue, data issue, permission issue, or expected state.
