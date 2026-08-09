# Experience Type System

The Experience Type System classifies product surfaces by purpose, risk, density, and user expectation.

Different experience types require different UX rules. As operational maturity and risk increase, the rules become stricter.

## Experience Categories

| Type | Purpose | Emotional Mode | Interaction Model | User Expectation | Information Density | Operational Risk Level | Design Priority |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Marketing Website | Communicate value, build trust, convert interest | Curious, inspired, reassured | Browse, scan, compare, act | Clear story and confident next step | Low to medium | Low | Narrative clarity and conversion |
| Operational Platform | Execute recurring work across workflows | Focused, capable, in control | Stateful task execution | Reliable work surfaces and clear status | Medium to high | Medium to high | Workflow clarity and continuity |
| Enterprise Dashboard | Monitor, compare, and decide across operational data | Alert, analytical, accountable | Scan, filter, investigate, escalate | Accurate state and fast interpretation | High | High | Hierarchy, density, and decision support |
| Mobile App | Perform focused actions in constrained contexts | Efficient, reassured, lightweight | Tap, resume, confirm, receive updates | Fast task completion and readable status | Low to medium | Medium | Simplicity and interruption recovery |
| AI Assistant | Guide, summarize, recommend, or execute bounded tasks | Supported, understood, cautious | Conversational, guided, confirmable | Helpful guidance with clear limits | Variable | Medium to high | Authority boundaries and trust |
| Runtime Monitoring Layer | Observe live systems, incidents, jobs, and orchestration | Vigilant, precise, calm | Monitor, diagnose, acknowledge, escalate | Current truth and low ambiguity | High | High to mission-critical | Truth exposure and response speed |
| Academy / Learning Environment | Teach concepts, track progression, support practice | Encouraged, oriented, progressing | Learn, practice, review, resume | Clear path and visible progress | Medium | Low to medium | Learning flow and motivation |
| Creator / Production Workspace | Support creative or production execution | Immersed, productive, confident | Create, edit, organize, publish, review | Powerful tools without losing context | Medium to high | Medium | Focus preservation and asset clarity |

## Operational Maturity Levels

| Level | Description | UX Governance Implication |
| --- | --- | --- |
| Exploratory | Early concept, discovery, or prototype work | UX may be flexible, but must not misrepresent readiness |
| Guided | Users are led through a defined workflow | Clear steps, plain language, and validation states are required |
| Semi-Operational | System supports real work but may still require manual oversight | Stronger state visibility and recovery paths are required |
| Enterprise-Operational | System supports business-critical users and repeatable workflows | Consistency, role clarity, auditability, and status transparency are required |
| Mission-Critical | Mistakes can create major operational damage | Strict truth exposure, confirmation, escalation, and interruption recovery are required |
| Audit-Critical | Decisions and actions must be reviewable later | Audit trails, approvals, provenance, and governance visibility are required |

## Rule Strictness

UX rules become stricter as maturity and risk increase.

Higher-risk systems require:

- less ambiguity
- stronger validation
- clearer handoff
- more explicit status
- tighter AI authority boundaries
- more conservative visual language
- stronger audit and approval visibility

Lower-risk systems may use more exploratory interaction and visual storytelling, but must still preserve operational truth.
