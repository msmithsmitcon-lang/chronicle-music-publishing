# Phase 1.1 V1 Implementation Strategy

## 1. Document Status

Project:
Chronicle Creative Operations Portal V1

Phase:
Phase 1.1 - V1 Implementation Strategy and Foundational Decisions

Status:
IMPLEMENTATION STRATEGY CREATED FOR GOVERNANCE REVIEW

This document defines the recommended path from approved architecture into the first build sequence. It does not authorize application code, database migrations, API creation, route creation, or deployment by itself.

## 2. Governing Source Documents

Codex inspected and aligned this strategy to:

- `docs/portal/CHRONICLE-CREATIVE-OPERATIONS-HEALTH-INTELLIGENCE-FRAMEWORK.md`
- `docs/project-plan/CHRONICLE-CREATIVE-OPERATIONS-PORTAL-PHASE-1-EXECUTION-ROADMAP.md`
- `docs/architecture/PHASE-1-CREATIVE-OPERATIONS-PLATFORM-ARCHITECTURE-BLUEPRINT.md`

Phase 0 is complete and repository locked. The implementation strategy must consume the locked doctrine and must not recreate the strategic intelligence model.

## 3. Foundational Strategy Decision

Recommended first build path:

Build a private, authenticated Chronicle workspace that proves Creative Operations Intelligence through one complete operational loop:

Catalogue Asset Readiness -> Evidence Capture -> Health Signal -> Opportunity / Required Action -> Owner Command Centre Visibility -> Human-reviewed AI Assistance.

This is the smallest complete slice that demonstrates the doctrine becoming software because it connects:

- A real Chronicle asset.
- Operational evidence.
- Workflow state.
- Health intelligence.
- Recommended action.
- Dashboard visibility.
- Human decision accountability.
- Future AI assistance.

The first slice should not begin with a generic dashboard, generic CRM, generic CMS, or full module build-out. It should begin with a narrow operational loop that makes one creative/catologue item intelligible, actionable, and reviewable.

## 4. Technical Foundation Decisions

### 4.1 Application Architecture

Decision:
Continue with the existing Next.js, React, TypeScript, and Tailwind stack. Add the private portal as a separated route tree inside the same application only after architecture approval.

Recommended route boundary:

- Public website remains unchanged.
- Private portal lives under a dedicated protected route tree, recommended as `/portal`.
- Public website components and portal components should be separated.
- Shared primitives may be introduced only where they do not destabilize the public site.

Reasoning:
The current site is already deployed on Vercel and built with Next.js. Keeping the portal in the same repository preserves deployment continuity, documentation continuity, and brand alignment while allowing strict route and auth boundaries.

### 4.2 Backend Architecture

Decision:
Use Next.js server-side capabilities for V1 backend operations, with a clear service layer for portal domains.

Recommended backend shape:

- Server actions or route handlers for authenticated mutations.
- Domain services under a portal-specific server boundary.
- Repository/data-access layer separated from UI.
- Validation at API/action boundary.
- Audit/event writing included in meaningful mutations.

Reasoning:
V1 needs controlled implementation speed and strong repository alignment. A separate backend service would add operational overhead before the Chronicle workflow has been validated.

### 4.3 Database Strategy

Decision:
Use PostgreSQL as the application database, with Prisma recommended as the ORM and migration layer.

Recommended provider:
Use Vercel Postgres / Neon-compatible Postgres for V1 unless an existing approved database provider is later mandated.

Data strategy:

- Relational-first.
- Workspace-scoped records from the beginning.
- First-class evidence, audit, workflow, and health tables.
- JSON fields allowed only for unstable metadata during early V1.
- Doctrine-derived architecture should be represented in typed tables once the seed model is approved.

Reasoning:
The doctrine requires connected intelligence, evidence, auditability, health scoring, and future generalisation. PostgreSQL provides the right balance of structure, relationships, JSON flexibility, and Vercel-friendly deployment.

### 4.4 Data Ownership Model

Decision:
Chronicle owns the operational data in V1. The application database becomes the operational source of truth for portal-created records. Existing workbook/spreadsheet systems remain import/source inputs where needed, not the long-term editable platform model.

Ownership principles:

- Chronicle workspace owns records.
- User actions are attributed.
- AI outputs are records requiring human review.
- Evidence and source references preserve origin.
- Existing catalogue spreadsheet patterns inform design but should not limit the platform model.

Reasoning:
The workbook workflow is valuable as a proven operating pattern, but the portal must not be designed around spreadsheet limitations.

### 4.5 API Architecture

Decision:
Use private authenticated API/server-action boundaries under the portal domain.

Recommended groups:

- Foundation and workspace.
- Creative work.
- Catalogue intelligence.
- Creative identities.
- Relationships.
- Opportunities.
- Workflows.
- Health.
- Intelligence.
- Evidence.
- AI.

API rules:

- No unauthenticated portal mutations.
- Every mutation checks workspace membership and permission.
- Every significant mutation writes an audit event.
- Inputs use typed validation.
- Public website APIs remain separate.

### 4.6 Authentication and Authorization Model

Decision:
Use Clerk for authentication and an application-owned authorization layer for roles, workspace membership, and permissions.

Initial role model:

- Owner.
- Admin.
- Manager.
- Contributor.
- Viewer.
- External Collaborator.

Initial V1 access:
Start with Markus as Owner in one Chronicle workspace. Add other users only after workspace, membership, and permission primitives exist.

Reasoning:
Clerk solves identity and session management. The portal still needs its own domain permission model because creative records, rights, relationships, unreleased work, and AI context require application-specific access decisions.

### 4.7 Environment Strategy

Decision:
Use separate local, preview, and production environment configuration.

Rules:

- Local development uses local `.env.local`.
- Preview deployments test portal changes before production.
- Production deployment requires explicit approval.
- Public website must not be changed incidentally during portal work.
- Sensitive keys must not be committed.

Required future env families:

- Clerk publishable and secret keys.
- Database connection string.
- Optional AI provider key.
- App base URL and environment name.

### 4.8 Testing Approach

Decision:
Introduce tests as the portal foundation is built, focused on domain safety rather than broad snapshot coverage.

Recommended V1 testing:

- TypeScript build as baseline.
- Unit tests for permission, workflow, health, and relationship logic.
- Integration tests for data-access and server mutations once database exists.
- Route/auth boundary tests for protected portal access.
- Manual preview smoke tests before deployment.

Reasoning:
The highest risk areas are authorization, workflow state, evidence/audit integrity, and doctrine-derived health logic. Tests should protect those first.

### 4.9 Deployment Strategy

Decision:
Continue using Vercel, with preview deployments for portal review and production only by explicit approval.

Deployment rules:

- No `vercel --prod` unless explicitly requested.
- Preview deployment is the default for testing.
- Migrations must be reviewed before production.
- Portal changes must not disturb the live public website.

## 5. First Operational Vertical Slice

### 5.1 Selected Slice

Catalogue Asset Readiness and Opportunity Intelligence Loop.

This is the first vertical slice because the catalogue is already central to the public website, has a proven spreadsheet workflow, contains real Chronicle assets, and naturally connects evidence, completeness, opportunity, health, and daily action.

### 5.2 Starting User

Markus as Owner.

### 5.3 User Objective

When Markus opens the portal, he can see which catalogue asset requires attention today, why it matters, what evidence supports that assessment, what action is required, and whether it creates a creative, campaign, commercial, or operational opportunity.

### 5.4 Actions Taken

The first user loop:

1. Markus signs in to the private portal.
2. Markus enters the Chronicle workspace.
3. Markus views the Owner Command Centre.
4. The system surfaces catalogue readiness items.
5. Markus opens one catalogue asset.
6. Markus reviews metadata, rights/status context, evidence, and missing information.
7. Markus records or confirms evidence.
8. Markus updates readiness state or adds a required action.
9. The system records workflow and audit events.
10. The system updates health signals and dashboard visibility.
11. The system can later offer human-reviewed AI suggestions based on approved evidence.

### 5.5 Data Captured

Minimum data:

- Workspace.
- User.
- CatalogueAsset.
- CreativeWork reference.
- CreativeIdentity link where relevant.
- Contributor or related person/organisation.
- Metadata completeness fields.
- Rights/status note.
- EvidenceRecord.
- SourceReference.
- WorkflowInstance.
- RequiredAction.
- HealthIndicator.
- AuditEvent.
- IntelligenceNote.
- Opportunity candidate.

### 5.6 Workflow States

Recommended initial catalogue readiness states:

- Draft / Imported.
- Needs Review.
- Missing Evidence.
- Ready for Activation.
- Opportunity Identified.
- Action Required.
- Reviewed.

State changes must record actor, timestamp, reason, and related evidence where relevant.

### 5.7 Events Generated

Initial events:

- CatalogueAssetCreated.
- CatalogueAssetReviewed.
- CatalogueAssetMetadataUpdated.
- EvidenceAttached.
- RequiredActionCreated.
- WorkflowStateChanged.
- HealthIndicatorChanged.
- OpportunityIdentified.
- IntelligenceNoteCreated.
- DecisionRecorded.

### 5.8 Evidence Captured

Evidence examples:

- Spreadsheet row/source reference.
- Audio/file reference.
- Metadata source.
- Rights or ownership note.
- Manual Markus confirmation.
- Historical note.
- Public release reference.
- Decision note.

Evidence must support reviewability. The platform should show why the system believes an asset is ready, incomplete, risky, dormant, or opportunity-bearing.

### 5.9 Intelligence Created

The slice creates:

- Catalogue readiness intelligence.
- Missing information detection.
- Activation opportunity.
- Health signal.
- Required action.
- Institutional memory note.
- Decision history.

### 5.10 Health Signals Generated

Initial health signals:

- Metadata completeness.
- Evidence completeness.
- Rights/status clarity.
- Catalogue activation readiness.
- Dormant asset risk.
- Opportunity readiness.

These signals should be transparent and manually reviewable before automated scoring matures.

### 5.11 Dashboard Visibility Created

Owner Command Centre should show:

- Catalogue assets requiring review.
- Missing evidence.
- Ready for activation.
- Opportunity candidates.
- Blocked items.
- Recent decisions.
- Health risks.
- Next required actions.

### 5.12 AI Support Opportunities

Initial AI support, once permissions/evidence logging exist:

- Explain why an asset is flagged.
- Summarise catalogue asset context.
- Identify missing information from approved fields.
- Suggest possible activation actions.
- Draft an opportunity note for human review.
- Compare similar catalogue patterns.

AI must not approve readiness, change rights status, make commercial decisions, or publish/action anything without human confirmation.

## 6. V1 Workspace and Organisation Model

### 6.1 Organisation Model

Decision:
Start with one organisation: Chronicle Music.

Create a workspace model even if V1 only has one workspace.

Reasoning:
This keeps Chronicle simple while avoiding rework when Sentry Sound later needs multi-organisation support.

### 6.2 Workspace Boundaries

Workspace boundary:

- All portal records belong to a workspace.
- Users join workspaces through membership.
- AI context retrieval is workspace-scoped.
- Audit events are workspace-scoped.

### 6.3 Teams

V1 should model teams lightly:

- No heavy team hierarchy at foundation.
- Use role and project membership first.
- Add teams when multiple active users require coordination.

### 6.4 Users and Roles

Initial user:
Markus as Owner.

Initial roles:

- Owner: full authority.
- Admin: configuration and data maintenance.
- Manager: operational management.
- Contributor: project/task contribution.
- Viewer: read-only access.
- External Collaborator: limited project-specific access.

### 6.5 Permissions

Permission model:

- Workspace-level permission.
- Module-level permission.
- Entity-level permission.
- Project-specific permission.
- Evidence and AI-context permission.

Sensitive areas:

- Rights and commercial notes.
- Unreleased creative material.
- Private relationship context.
- Internal strategic analysis.
- AI-generated recommendations awaiting human review.

### 6.6 Ownership

Records should store:

- Workspace owner.
- Created by.
- Updated by.
- Responsible owner where relevant.
- Review owner where relevant.
- Decision maker where relevant.

### 6.7 Sentry Sound Readiness

V1 should include a workspace/organisation boundary from the beginning but defer:

- Multi-tenant billing.
- Client onboarding flows.
- Industry template management.
- Cross-organisation analytics.
- Generalised doctrine configuration UI.

## 7. AI Operating Boundary for V1

### 7.1 AI Can Do Initially

AI may support:

- Knowledge retrieval from approved doctrine and approved portal records.
- Context explanation.
- Missing information identification.
- Pattern detection.
- Draft generation for notes, summaries, and recommendations.
- Operational guidance based on visible workflow state.
- Health signal explanation.
- Opportunity suggestion for human review.

### 7.2 AI Must Not Control in V1

AI must not:

- Define or alter doctrine.
- Approve strategic objectives or phase locks.
- Change rights, ownership, commercial, or legal status.
- Publish public website changes.
- Make final creative decisions.
- Make final commercial decisions.
- Grant permissions.
- Delete evidence or audit history.
- Create irreversible workflow transitions without human confirmation.
- Access records outside the user's permission boundary.

### 7.3 Human Accountability

Every AI recommendation should be treated as:

- Draft.
- Explainable.
- Source-linked where possible.
- Human-reviewed.
- Auditable.

## 8. Build Sequencing

### 8.1 Phase 2 - Foundation Build

Build order:

1. Public website protection check.
2. Clerk installation and auth boundary.
3. Protected `/portal` route shell.
4. Workspace and membership model.
5. Role and permission primitives.
6. Database connection and migration setup.
7. Audit event foundation.
8. Portal navigation and owner shell.
9. Environment and preview deployment safety.

### 8.2 First Vertical Slice

Build order:

1. CatalogueAsset schema.
2. EvidenceRecord and SourceReference schema.
3. WorkflowInstance and workflow state schema.
4. HealthIndicator schema.
5. RequiredAction schema.
6. Opportunity candidate schema.
7. Owner Command Centre read model.
8. Catalogue readiness review UI.
9. Audit/event writes.
10. Manual readiness and health update flow.
11. Preview deployment for real Markus testing.

### 8.3 Expansion Order of Operational Modules

Recommended order:

1. Catalogue Intelligence.
2. Creative Work / Creative Production.
3. Creative Identity and Capability.
4. Relationship Intelligence.
5. Opportunity Pipeline.
6. Institutional Memory.
7. Business Health Intelligence.
8. Platform Operations and Administration.

Reasoning:
Catalogue readiness gives the first concrete intelligence loop. Creative work and identity then connect the asset to creation and positioning. Relationships and opportunities activate future value. Institutional memory and business health deepen intelligence once enough events exist.

### 8.4 Intelligence Layer Introduction

Introduce intelligence after the first operational data exists:

1. Manual health indicators.
2. Missing information detection.
3. Transparent scoring rules.
4. Diagnostic findings.
5. Recommended interventions.
6. AI-assisted explanation and drafting.
7. Pattern detection.

### 8.5 Dashboard and Executive Layer

Build dashboard in this order:

1. Owner Command Centre for daily action.
2. Catalogue readiness panel.
3. Required actions and blockers.
4. Opportunity candidates.
5. Health risk summary.
6. Recent decisions and evidence.
7. Strategic objective health view.

### 8.6 Future Sentry Sound Generalisation

Defer generalisation until Chronicle proves the loop:

1. Keep workspace boundary from day one.
2. Keep doctrine references modular.
3. Keep event names and intelligence objects reusable.
4. Avoid hard-coding Chronicle-specific assumptions into core domain services.
5. Generalise only after repeated Chronicle workflows reveal stable patterns.

## 9. Repository Structure Required Before and During Implementation

### 9.1 Required Before Build

Recommended repository docs before implementation:

- `docs/architecture/PHASE-1-CREATIVE-OPERATIONS-PLATFORM-ARCHITECTURE-BLUEPRINT.md`
- `docs/architecture/PHASE-1.1-V1-IMPLEMENTATION-STRATEGY.md`
- `docs/data-models/PORTAL-V1-DATA-MODEL-SPECIFICATION.md`
- `docs/workflows/CATALOGUE-ASSET-READINESS-WORKFLOW.md`
- `docs/api/PORTAL-V1-API-BOUNDARY-SPECIFICATION.md`
- `docs/intelligence/PORTAL-V1-HEALTH-INTELLIGENCE-SPECIFICATION.md`
- `docs/security/PORTAL-V1-AUTH-PERMISSIONS-SPECIFICATION.md`

### 9.2 Required During Build

Maintain:

- `docs/build-log/BUILD-LOG.md`
- `docs/execution-state/OPEN-THE-DOOR-CURRENT-BRIEFING.md`
- `docs/execution-state/PORTAL-PHASE-HANDOVER.md`

Add or update implementation notes only when a decision becomes repository-relevant.

### 9.3 Repository Memory Rule

No major architecture, schema, permission, AI, workflow, or health-scoring decision should live only in chat.

## 10. True Governance Blockers

No blocker prevents the next architecture specification step.

The following decisions do not need to block progress and are recommended above:

- Database: PostgreSQL.
- ORM: Prisma.
- Authentication: Clerk.
- First workspace: single Chronicle workspace with future multi-workspace readiness.
- First vertical slice: Catalogue Asset Readiness and Opportunity Intelligence Loop.
- AI V1 boundary: retrieval, explanation, draft recommendations, and missing information support only, all human-reviewed.

Governance approval is still required before implementation begins because this strategy transitions the project from architecture into build sequencing.

## 11. Recommended Next Repository Step

Create the implementation specifications in this order:

1. `docs/data-models/PORTAL-V1-DATA-MODEL-SPECIFICATION.md`
2. `docs/workflows/CATALOGUE-ASSET-READINESS-WORKFLOW.md`
3. `docs/security/PORTAL-V1-AUTH-PERMISSIONS-SPECIFICATION.md`
4. `docs/api/PORTAL-V1-API-BOUNDARY-SPECIFICATION.md`
5. `docs/intelligence/PORTAL-V1-HEALTH-INTELLIGENCE-SPECIFICATION.md`

After those specs pass close-out, implementation can begin with Phase 2 foundation build.
