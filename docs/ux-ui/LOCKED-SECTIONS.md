# Locked Sections

This registry records approved UI sections that must be protected during future Codex UI tasks.

Locked sections must not be modified unless a future prompt explicitly unlocks them or names them as editable.

Before proposing frontend edits, Codex must check whether the target surface or nearby components are listed here.

## Registry

| Locked Section Name | Project | Route/Surface | Date Locked | Approved By | Notes |
| --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | TODO | TODO | TODO |

## Unlocking Rule

To modify a locked section, the task prompt must explicitly state:

- which locked section is being unlocked
- who approved the unlock
- whether the section should be re-locked after the task
- what edits are allowed

If this information is missing, Codex must preserve the locked section and report the conflict.
