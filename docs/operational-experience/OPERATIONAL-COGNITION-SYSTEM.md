# Operational Cognition System

The Operational Cognition System defines how human and AI operational environments manage attention, focus, authority, and confidence.

Its purpose is to make AI-assisted operational work safer and easier to execute.

## Attention Management

The interface should direct attention to the most important operational state without flooding the user.

Attention should be guided by:

- severity
- urgency
- ownership
- workflow stage
- dependency status
- user role

## Focus Preservation

Operational systems should protect the user's working context.

Focus preservation includes:

- stable layouts
- predictable navigation
- minimal unnecessary context switching
- visible return paths
- inline actions where appropriate
- grouped related decisions

## Interruption Recovery

Users must be able to recover after interruption.

Recovery support includes:

- last-action visibility
- resume points
- changed-state indicators
- unfinished task markers
- AI-generated summaries when appropriate
- clear distinction between saved and unsaved work

## AI Guidance Timing

AI guidance should appear when it helps the user decide, recover, or execute.

AI guidance should not interrupt focused work unless:

- risk has changed
- validation failed
- escalation is required
- the user requested help
- the next step is ambiguous

## Escalation Visibility

Escalation must be visible and understandable.

The user should know:

- what escalated
- why it escalated
- who owns it
- what action is required
- whether work can continue
- whether AI can assist

## Execution Confidence

Execution confidence is the user's sense that they understand what will happen when they act.

Interfaces should support confidence through:

- clear action labels
- preview where useful
- confirmation for high-risk actions
- visible validation
- reversible actions where possible
- honest uncertainty indicators

## Cognitive Fatigue Prevention

Operational systems should reduce fatigue by avoiding unnecessary repetition, unclear status, and excessive manual reconstruction.

Patterns that reduce fatigue include:

- summaries
- saved filters
- role-specific defaults
- clear grouped actions
- consistent terminology
- reduced duplicate prompts

## Human and AI Authority Boundaries

The system must make authority boundaries explicit.

AI may:

- suggest
- summarize
- classify
- draft
- validate
- execute bounded approved actions

Humans must remain in control where accountability, approval, risk acceptance, or judgment is required.

## When the System Should Lead

The system should lead when:

- the next step is deterministic
- validation is required
- workflow order matters
- a known risk must be surfaced
- the user is resuming interrupted work
- operational state has changed materially

## When the User Must Remain in Control

The user must remain in control when:

- approval is required
- risk must be accepted
- judgment is contextual
- data is incomplete
- AI confidence is limited
- action affects external users, money, permissions, legal exposure, or production systems
