# Phase 1 Creative Operations Platform Architecture Blueprint

## 1. Document Status

Project:
Chronicle Creative Operations Portal V1

Phase:
Phase 1 - Platform Architecture and Technical Blueprint

Status:
ARCHITECTURE BLUEPRINT CREATED FOR REVIEW

This document translates the locked Phase 0 doctrine into software architecture. It is not an implementation instruction by itself. No application code, database migration, route, UI, API, or automation should be created until this blueprint is reviewed and approved.

## 2. Source of Truth

Primary doctrine:

- `docs/portal/CHRONICLE-CREATIVE-OPERATIONS-HEALTH-INTELLIGENCE-FRAMEWORK.md`

Phase 1 execution roadmap:

- `docs/project-plan/CHRONICLE-CREATIVE-OPERATIONS-PORTAL-PHASE-1-EXECUTION-ROADMAP.md`

Codex must use these documents as the governing source. Codex must not recreate strategic objectives, KPA architecture, health intelligence logic, diagnostic logic, AI philosophy, or platform doctrine from memory.

## 3. Architecture Intent

The Chronicle Portal is a private authenticated Creative Operations Platform. It is not a public website feature, not a generic CRM, not a CMS, not a catalogue admin panel, and not a dashboard added to the public site.

The architecture must convert Chronicle's locked doctrine into a connected operational system where creative work, catalogue assets, creative identities, relationships, opportunities, business health, institutional memory, evidence, and AI-supported intelligence can operate together.

The immediate implementation target is Chronicle. The architecture should remain capable of later Sentry Sound generalisation without forcing Chronicle V1 to carry enterprise complexity too early.

## 4. Platform Domains and Modules

### 4.1 Platform Foundation Domain

Purpose:
Provide the private portal shell, authentication boundary, workspace boundary, user model, permissions, navigation, configuration, environment separation, and operational safety.

Modules:

- Authentication and identity.
- User and role management.
- Workspace or organisation scope.
- Permission policy layer.
- Portal shell and navigation.
- System configuration.
- Operational logging.

### 4.2 Creative Production Domain

Purpose:
Manage creative work from idea to completed output without turning creativity into rigid administration.

Modules:

- Creative projects.
- Songs and works.
- Production stages.
- Creative briefs.
- Contributors and responsibilities.
- Tasks, milestones, and blockers.
- Creative decisions.
- Project retrospectives.

### 4.3 Catalogue Intelligence Domain

Purpose:
Treat the catalogue as a living strategic asset rather than a passive archive.

Modules:

- Catalogue records.
- Metadata and completeness.
- Rights and ownership visibility.
- Versions and recordings.
- Release and commercial status.
- Usage history.
- Catalogue opportunity review.
- Catalogue health indicators.

### 4.4 Creative Identity Domain

Purpose:
Manage Chronicle, M-Wis, Huey-D, and future creative identities as strategic identity systems rather than fixed public labels.

Modules:

- Identity profiles.
- Capability records.
- Identity and positioning records.
- Contextual operational roles.
- Brand direction.
- Visual language.
- Sound and style references.
- Identity consistency checks.

### 4.5 Relationship Intelligence Domain

Purpose:
Preserve and develop collaborator, partner, audience, community, and network intelligence.

Modules:

- People and organisations.
- Relationship history.
- Collaboration outcomes.
- Communication context.
- Audience and community signals.
- Partnership context.
- Trust and continuity indicators.

### 4.6 Opportunity Pipeline Domain

Purpose:
Convert visible potential into tracked, prioritised, and actionable future value.

Modules:

- Catalogue opportunities.
- Sync and licensing prospects.
- Collaboration opportunities.
- Partnership possibilities.
- Campaign ideas.
- Commercial pathways.
- Strategic prioritisation.
- Opportunity outcomes.

### 4.7 Business Health Intelligence Domain

Purpose:
Measure whether Chronicle is becoming stronger as a creative ecosystem.

Modules:

- Strategic objective health.
- KPA and KPI composition records.
- Asset health.
- Relationship health.
- Intelligence health.
- Opportunity health.
- Sustainability health.
- Risk and intervention recommendations.

### 4.8 Institutional Memory Domain

Purpose:
Preserve lessons, decisions, histories, context, and reusable knowledge generated through creative operations.

Modules:

- Intelligence notes.
- Decision records.
- Lessons learned.
- Retrospectives.
- Source and evidence links.
- Reusable playbooks.
- Historical intelligence retrieval.

### 4.9 AI and Decision Intelligence Domain

Purpose:
Activate trusted organisational knowledge through explainable, human-reviewed assistance.

Modules:

- AI interaction sessions.
- Knowledge retrieval.
- Recommendation records.
- Missing information detection.
- Opportunity suggestions.
- Risk explanations.
- AI evidence and source tracking.
- Human feedback and override records.

## 5. Bounded Contexts

The first architecture boundary should use domain ownership rather than screen ownership.

Recommended bounded contexts:

- Identity and Access Context: users, roles, permissions, workspace membership, external collaborator access.
- Creative Work Context: creative projects, songs, works, contributors, production stages, briefs, milestones.
- Catalogue Context: catalogue entries, metadata, rights visibility, versions, release state, usage history.
- Identity and Capability Context: creative identities, capabilities, positioning, contextual roles.
- Relationship Context: people, organisations, relationship history, audience/community signals.
- Opportunity Context: opportunity records, prioritisation, pipeline state, outcome history.
- Intelligence Context: intelligence notes, health indicators, recommendations, diagnostic results, institutional memory.
- Workflow Context: workflow definitions, workflow instances, states, transitions, blockers, approvals.
- Evidence and Audit Context: sources, attachments, decision evidence, history, event logs, AI traceability.

Contexts should communicate through explicit relationships and events. They should not silently mutate each other's records.

## 6. Core Entities

### 6.1 Foundation Entities

- Workspace.
- User.
- Role.
- Permission.
- Membership.
- AccessPolicy.
- ExternalAccessGrant.

### 6.2 Creative Operations Entities

- CreativeWork.
- CreativeProject.
- CatalogueAsset.
- CreativeIdentity.
- Capability.
- ContextualRole.
- Person.
- Organisation.
- Relationship.
- Collaboration.
- AudienceSignal.
- Campaign.
- Opportunity.
- Task.
- Milestone.
- Workflow.
- WorkflowState.
- WorkflowTransition.

### 6.3 Intelligence Entities

- StrategicObjective.
- KeyPerformanceArea.
- KpiComposition.
- HealthIndicator.
- HealthAssessment.
- DiagnosticFinding.
- RecommendedIntervention.
- IntelligenceNote.
- DecisionRecord.
- EvidenceRecord.
- SourceReference.
- Recommendation.
- RiskSignal.
- LessonLearned.

### 6.4 AI and Audit Entities

- AiSession.
- AiPromptRecord.
- AiResponseRecord.
- AiRecommendation.
- AiSourceReference.
- HumanReview.
- AuditEvent.
- ChangeHistory.

Entity naming can be refined during schema design, but the model should preserve these conceptual boundaries.

## 7. Database Architecture Direction

The database should be relational first, with explicit relationships and strong auditability. The platform is a connected intelligence system, but V1 should avoid premature graph database adoption unless a later technical spike proves it necessary.

Recommended direction:

- PostgreSQL-compatible relational database.
- Clerk for authentication identity.
- Application database for portal domain data.
- Strict workspace scoping from the beginning.
- Soft deletion or archival for important doctrine-derived records.
- Created, updated, and actor metadata on operational records.
- Evidence and source references as first-class records.
- JSON fields only for flexible metadata where structure is not yet stable.
- Typed tables for doctrine-derived concepts once stable.

Initial schema work should separate:

- Auth identity references.
- Operational records.
- Intelligence records.
- Evidence and audit records.
- Workflow records.
- AI traceability records.

## 8. Relationship Model

The platform value comes from relationship intelligence. The data model must support many-to-many relationships without flattening context.

Required relationship patterns:

- CreativeWork to Person or Organisation through Contribution.
- CreativeWork to CatalogueAsset.
- CreativeWork to CreativeIdentity.
- CreativeProject to CreativeWork.
- CreativeProject to Workflow.
- CatalogueAsset to Opportunity.
- CatalogueAsset to Rights or Ownership context.
- CreativeIdentity to Capability.
- CreativeIdentity to Positioning.
- Person or Organisation to Capability.
- Person or Organisation to ContextualRole by project, work, campaign, or opportunity.
- Relationship to Collaboration outcome.
- Opportunity to assets, relationships, campaigns, and required actions.
- HealthIndicator to the entity or workflow it evaluates.
- IntelligenceNote to any relevant entity.
- DecisionRecord to evidence, source references, and affected entities.

The key architecture principle is:

Entity -> Capabilities -> Identity / Positioning -> Contextual Role -> Evidence -> Health / Intelligence.

## 9. Event Architecture

The first implementation should use an internal domain-event model before introducing external event infrastructure.

Events should capture significant operational changes, support auditability, and later power health scoring and AI recommendations.

Candidate event types:

- CreativeWorkCreated.
- CreativeWorkStatusChanged.
- CatalogueAssetMetadataUpdated.
- RightsStatusChanged.
- CreativeIdentityPositioningUpdated.
- RelationshipInteractionRecorded.
- OpportunityIdentified.
- OpportunityStatusChanged.
- WorkflowStateChanged.
- MilestoneCompleted.
- BlockerRaised.
- DecisionRecorded.
- EvidenceAttached.
- IntelligenceNoteCreated.
- HealthIndicatorChanged.
- RecommendationGenerated.
- RecommendationReviewed.
- AiInteractionCompleted.

V1 direction:

- Persist important events as audit and intelligence evidence.
- Keep event naming stable.
- Avoid external message queues until actual operational need appears.
- Design event records so they can later feed background jobs, notifications, health scoring, and AI context assembly.

## 10. Workflow Engine Direction

The workflow engine should be state-based and evidence-aware, not a generic task list.

V1 workflow concepts:

- WorkflowDefinition.
- WorkflowInstance.
- WorkflowState.
- WorkflowTransition.
- RequiredAction.
- Blocker.
- Approval.
- EvidenceRequirement.
- CompletionCondition.

Initial workflow families:

- Creative work lifecycle.
- Catalogue asset readiness.
- Opportunity pipeline.
- Campaign readiness.
- Content queue readiness.
- Review and approval.
- Knowledge capture or retrospective.

Workflow rules should support:

- Status progression.
- Required fields.
- Required evidence.
- Owner or reviewer responsibility.
- Blockers and dependency visibility.
- Derived next actions.
- Health indicator updates.

## 11. Intelligence Objects

The doctrine defines intelligence objects as more than records. They must explain meaning, context, and action.

Required intelligence object types:

- CreativeWork.
- PersonOrOrganisation.
- Project.
- Opportunity.
- IntelligenceNote.
- HealthIndicator.

Architecture additions for implementation:

- DiagnosticFinding.
- RecommendedIntervention.
- RiskSignal.
- DecisionRecord.
- EvidenceRecord.
- SourceReference.
- AiRecommendation.

Every intelligence object should support:

- Source or origin.
- Related entities.
- Current status.
- Confidence or verification state where useful.
- Review owner where relevant.
- Recommended next action where relevant.
- Audit history.

## 12. Health Scoring Architecture

Health scoring must consume the locked Strategic Objective, KPA, and KPI composition doctrine. Codex must not recreate these models.

Recommended V1 health architecture:

- Doctrine registry: stores or references locked strategic objectives, KPA architecture, and KPI composition.
- Health observation: captures evidence against a KPA or indicator.
- Health assessment: calculates or records condition, trend, risk, and recommended action.
- Diagnostic finding: explains root cause.
- Intervention recommendation: proposes next action for human review.

Evaluation dimensions:

- System Capability.
- Human Execution.
- External Outcome / Validation.

Initial scoring should be transparent and reviewable. Avoid opaque AI-only scoring.

Health records should answer:

- What area is being evaluated?
- What evidence supports the evaluation?
- What changed?
- What risk or opportunity is visible?
- What action should happen next?
- Who reviewed or accepted the assessment?

## 13. AI Interaction Architecture

AI is an intelligence activation layer, not an autonomous creative authority.

V1 AI architecture should be gated and evidence-first:

- AI may retrieve approved repository doctrine and approved platform records.
- AI may summarise context, surface missing information, identify patterns, and recommend possible actions.
- AI must cite or link source records wherever practical.
- AI recommendations require human review before they become operational decisions.
- AI interactions should be logged with prompt, response, source references, user, timestamp, and review state.
- AI must respect permissions and workspace scope.

Recommended AI surfaces:

- Creative operations assistant.
- Project context assistant.
- Catalogue opportunity assistant.
- Health and risk explanation assistant.
- Institutional memory retrieval assistant.

Forbidden AI posture:

- Do not allow AI to invent strategy outside approved doctrine.
- Do not allow AI to override human creative decisions.
- Do not allow AI to expose records outside permission boundaries.

## 14. Permission and User Model

The portal must be private and authenticated.

Authentication direction:

- Clerk as the authentication layer.
- App database stores workspace membership and operational roles.
- Clerk identity is not the full permission model by itself.

Initial user categories:

- Owner / Markus.
- Executive leadership.
- Creative management.
- Artist or creative identity stakeholder.
- Producer / writer / contributor.
- Operations administrator.
- External collaborator.

Permission dimensions:

- Workspace-level access.
- Module-level access.
- Entity-level access.
- Project-specific access.
- Asset-level visibility.
- External temporary access.
- Review and approval authority.
- AI context access.

The permission model must protect:

- Creative ownership information.
- Rights and commercial intelligence.
- Private relationship context.
- Unreleased assets.
- Internal strategic notes.
- AI-generated or AI-assisted recommendations awaiting review.

## 15. Evidence and Audit Model

The platform must preserve evidence, history, and decision accountability.

Required evidence concepts:

- EvidenceRecord: proof or support for a claim, status, decision, recommendation, health score, or opportunity.
- SourceReference: origin of information, such as uploaded file, spreadsheet, meeting note, email extract, catalogue record, AI output, or manual entry.
- DecisionRecord: human decision with context, alternatives, supporting evidence, and outcome.
- ChangeHistory: record-level change tracking.
- AuditEvent: actor, action, target, timestamp, and relevant metadata.

Evidence must support:

- Human accountability.
- AI explainability.
- Health scoring transparency.
- Institutional memory.
- Future Sentry Sound trust architecture.

## 16. API Boundary Direction

V1 API architecture should separate public website concerns from private portal concerns.

Boundary principles:

- Public website routes remain stable and untouched during portal build unless explicitly approved.
- Portal APIs live under private authenticated route boundaries.
- All portal mutations require authentication and permission checks.
- Server-side actions or route handlers should enforce workspace scope.
- API inputs should be validated with typed schemas.
- Doctrine-derived records should not be modified casually through generic admin endpoints.

Potential API groups:

- `/portal/api/foundation/*`
- `/portal/api/creative-work/*`
- `/portal/api/catalogue-intelligence/*`
- `/portal/api/creative-identities/*`
- `/portal/api/relationships/*`
- `/portal/api/opportunities/*`
- `/portal/api/workflows/*`
- `/portal/api/health/*`
- `/portal/api/intelligence/*`
- `/portal/api/evidence/*`
- `/portal/api/ai/*`

Exact route naming must be confirmed during implementation planning.

## 17. Frontend Application Surfaces

Frontend surfaces should be role-aware operating environments, not a marketing dashboard.

Recommended surfaces:

- Portal entry and authenticated shell.
- Executive Command Centre.
- Creative Operations Dashboard.
- Creative Production workspace.
- Catalogue Intelligence workspace.
- Creative Identity workspace.
- Relationship and Community Intelligence workspace.
- Opportunity and Growth workspace.
- Business Health and Risk workspace.
- Institutional Memory workspace.
- Workflow and approvals surface.
- AI companion surface.
- Administration and governance surface.

First surfaces should prioritise:

- Secure portal entry.
- Executive or owner command centre.
- Daily priorities and blockers.
- Current projects and workflows.
- Catalogue readiness signals.
- Opportunity visibility.
- Evidence-backed health signals.

## 18. Chronicle-Specific vs Future Sentry Sound Generalisation

### Chronicle-Specific V1

- Single Chronicle organisation or workspace.
- Chronicle public website remains stable and separate.
- Chronicle, M-Wis, Huey-D, catalogue, and current operating patterns are the proving environment.
- Workbook or spreadsheet workflows may remain temporary source-of-truth during early V1 where approved.
- Role model reflects Markus-led operations first.

### Sentry Sound Future Generalisation

- Multi-organisation support.
- Configurable doctrine and health frameworks.
- Industry templates.
- Reusable Creative Operations Intelligence modules.
- Generalised onboarding.
- Configurable role, permission, workflow, and health models.
- AI operating patterns that can consume approved client doctrine.

Design principle:
Build Chronicle clearly enough that its successful patterns can later be abstracted. Do not over-generalise before Chronicle proves the workflow.

## 19. Recommended Development Sequencing

### Phase 1A - Architecture Approval Package

- Review and approve this blueprint.
- Create detailed data model specification.
- Create workflow model specification.
- Create permissions specification.
- Create AI and evidence specification.

### Phase 1B - Technical Boundary Specifications

- Confirm route separation.
- Confirm Clerk authentication boundary.
- Confirm database provider and migration approach.
- Confirm workspace model.
- Confirm API and server action patterns.
- Confirm public website protection rules.

### Phase 2A - Platform Foundation Build

- Protected portal shell.
- Clerk integration.
- Workspace and membership model.
- Base permission checks.
- Portal navigation.
- Environment and deployment safety.

### Phase 2B - Data Foundation

- Core entity schema.
- Evidence and audit schema.
- Workflow schema.
- Initial doctrine registry or doctrine reference model.
- Seed data strategy.

### Phase 3A - First Operational Loop

- Creative project or work intake.
- Catalogue asset linkage.
- Workflow state visibility.
- Evidence capture.
- Daily command centre readout.

### Phase 3B - Intelligence Activation

- Health indicators.
- Missing information detection.
- Recommended next actions.
- Institutional memory notes.
- Human-reviewed AI assistance.

## 20. Build Readiness Gates Before Implementation

Before code begins, confirm:

- Blueprint approved by Markus / governance.
- Database architecture approved.
- Auth and permission boundary approved.
- First implementation package defined.
- Public website protection rule restated.
- No unstaged doctrine files needed for Phase 0 lock.
- Git state is clean or deliberately staged for commit.

## 21. Open Questions Before Build Sequencing

The following questions should be resolved before implementation:

- Should Chronicle V1 begin as a single workspace only, with multi-workspace deferred?
- Which database provider is approved for V1?
- Should workbook or spreadsheet data remain read-only source input during the first portal build, or should portal records become editable immediately?
- What is the first operational loop Markus wants to use every morning: command centre, creative projects, catalogue readiness, opportunities, or health risks?
- Which user roles need access in the first private release besides Markus?
- Which AI functions are allowed in V1, and which must wait until evidence and permission controls are mature?

## 22. Phase 1 Close-Out Requirement

This blueprint must pass the Chronicle Phase Close-Out Protocol before implementation begins:

- Strategic Integrity Gate.
- Repository Integrity Gate.
- Codex Consumption Readiness Gate.
- Git Protection Gate.
- Governance Approval Readiness Gate.

Codex may recommend readiness but does not independently declare Phase 1 complete.
