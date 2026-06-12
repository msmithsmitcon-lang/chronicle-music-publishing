# Chronicle Music Repository Authority

Record type: Repository Authority Declaration
Authority Level: Local Operational State
Template source: `../plexicon-contracts/docs/templates/PLEXICON-REPOSITORY-AUTHORITY-DECLARATION-TEMPLATE-V1.md`
Created: 2026-06-07

This declaration references Plexicon Core authority. It does not redefine Plexicon doctrine locally.

## 1. Repository Identity

- Repository name: Chronicle Music Website
- Repository URL: local repository, Git remote not asserted by this record
- Owning system: Chronicle Music
- Repository type: public website / private portal / consuming system
- Primary owner: Human owner
- Technical maintainer: Codex-assisted local repository maintainer
- Human authority: Human owner
- Current implementation mode: public website stable; private Creative Operations Portal V1 planning next

## 2. Repository Purpose

Chronicle Music Website is the public-facing website repository for Chronicle Music and the planned home for the private Chronicle Creative Operations Portal V1.

The public website presents Chronicle Music, artists, selected music, catalogue context, resources, capabilities, and contact paths. It is live and stable.

The private portal is a separate authenticated operational environment for creative, marketing, catalogue, campaign, and release operations. It is not public UX/UI work, not a public dashboard, and not a redesign of the website.

## 2.1 Governance History

- The completed public website was built largely before the full high-level Plexicon-governed workflow was consistently available for this repository.
- Plexicon/Chronicle docs were added later to improve continuity, Open The Door readiness, and future governance.
- This record must not imply the completed public website was fully developed under the complete Plexicon method.
- Chronicle Creative Operations Portal V1 is the first Chronicle stream intended to proceed more deliberately under the governed workflow.
- Portal build direction is manual and governed by Markus/ChatGPT, with Codex used where useful for bounded execution.
- Chronicle may later identify feedback/adoption-back candidates for Plexicon review, but that is not immediate implementation work.
- Chronicle remains a Plexicon-consuming system and does not become authoritative over Plexicon Core.

## 3. Authority Domain

### This Repository Owns

- Local website implementation.
- Local private portal implementation when approved.
- Local Next.js, TypeScript, Tailwind, asset, and route structure.
- Chronicle Music public presentation decisions approved by the human owner.
- Chronicle Creative Operations Portal V1 product decisions approved by Markus/human owner.
- Local project memory, project plans, build logs, and execution-state records.
- Local adoption records that reference Plexicon Core authority.

### This Repository Does Not Own

- Plexicon Core doctrine, protocols, templates, or platform-wide governance.
- Plexicon Central Source of Truth, Stable Operational Identity, or Open The Door protocol definition.
- Plexicon capability registry authority or Institutional Memory promotion authority.
- Runtime truth for external services not implemented in this repo.
- Plexicon Core adoption or promotion decisions.
- Sentry Sound platform-wide module authority beyond local Chronicle planning.
- Legal, financial, tax, audit, certification, regulatory, or compliance authority.

## 4. Relationship To Plexicon Core

This repository consumes Plexicon Core during development by referencing approved Core doctrine, protocols, templates, and adoption lifecycle records.

This repository must not:

- redefine Plexicon Core doctrine;
- become a shadow Plexicon authority;
- copy Plexicon doctrine as editable local truth;
- promote local adaptations to platform doctrine without Core review.

Future feedback/adoption-back from Chronicle to Plexicon may be useful if portal development produces reusable patterns or services. That process must be explicitly initiated and reviewed later; it is not part of ordinary portal implementation.

Required local reference:

```text
docs/authority/CHRONICLE-MUSIC-PLEXICON-CONSUMPTION-MAP.md
```

## 5. Governing Doctrine References

| Doctrine / standard | Plexicon Core source path | Purpose in this repository |
| --- | --- | --- |
| Consumption Model V1 | `docs/architecture/PLEXICON-CONSUMPTION-MODEL-V1.md` | Defines how Chronicle consumes Plexicon. |
| Open The Door Protocol V1 | `docs/architecture/PLEXICON-OPEN-THE-DOOR-PROTOCOL-V1.md` | Defines new-chat and handover continuity. |
| Consuming-System Update, Adoption, and Promotion Lifecycle V1 | `docs/architecture/PLEXICON-CONSUMING-SYSTEM-UPDATE-ADOPTION-AND-PROMOTION-LIFECYCLE-V1.md` | Defines adoption checks and feedback candidate flow. |
| Adoption Manifest | `docs/registry/PLEXICON-ADOPTION-MANIFEST.md` | Lists Core items available for local adoption checks. |

## 6. Execution-State Requirement

This repository preserves execution continuity through:

- `docs/execution-state/`
- a current Open The Door briefing
- return points
- next allowed actions
- forbidden actions
- governing doctrine references

Required local file:

```text
docs/execution-state/OPEN-THE-DOOR-CURRENT-BRIEFING.md
```

## 7. Open The Door Requirement

This repository uses the single Plexicon Open The Door protocol.

Do not create local protocol variants such as:

- Open The Door Chronicle
- Open The Door Chronicle Music
- Open The Door Website

The active repository, project, and workstream must be determined from the current briefing, adoption records, project plan, and repository memory.

## 8. AI / Codex Participation Rules

Codex / AI may:

- inspect repository files within approved scope;
- summarize current state;
- draft bounded changes when authorized;
- run validation commands when safe;
- update or recommend execution-state updates;
- implement approved tasks inside this repository authority boundary.
- perform bounded execution during portal work when Markus/ChatGPT direction and docs define the scope.

Codex / AI may not:

- redefine Plexicon doctrine;
- change authority boundaries without approval;
- treat local implementation as Plexicon Core authority;
- create hidden runtime logic;
- bypass Open The Door / execution-state continuity;
- expand scope into other repositories without approval.
- treat Chronicle portal patterns as Plexicon Core doctrine.
- promote Chronicle learnings into Plexicon Core without an explicit review process.

## 9. Manual Fallback And Reproducibility

Important work should remain reproducible through:

- PowerShell commands;
- Git commits;
- explicit files;
- documented validation;
- execution-state records.

## 10. Review And Version

- Declaration version: Chronicle Music Repository Authority, initial adoption initialization
- Created: 2026-06-07
- Last reviewed: 2026-06-12
- Reviewed by: Codex draft, human review required for authority-bearing acceptance
- Next review trigger: repository purpose, Plexicon consumption, implementation mode, portal auth/runtime decisions, authority boundary, or runtime behavior changes
