# Maturiraj autonomous workflow rules

The user-approved goal is the only source of new work. Work only within its paths and acceptance criteria. Report newly discovered unrelated work; do not execute it.

Codex owns planning, acceptance and release decisions. Claude implements assigned changes. Grok Bot researches and tests preview user flows. One local model runs at a time; one writer per worktree. No recursive delegation.

Use subscription authentication only. Do not configure API keys, buy usage, change plans, or bypass a quota. A quota means checkpoint and wait.

Read relevant files, not the entire repository. Keep final handoffs short, with concrete evidence. Do not expose credentials, private logs, production records or conversation history in public issues/PRs. Never read `.env*` or authentication stores.

The controller, not a model, creates worktrees, commits, PRs and releases. Model workers must not commit, push, merge, deploy, change git configuration, modify this workflow, alter provider settings or run shell services. Stop at a blocked tool request; do not bypass it.

Implementation is limited to the listed files. Research and review are read-only. A reviewer must be different from the implementer and must review the exact commit provided. Output pass/fail/blocked, a concise summary and evidence; never invent checks.

Do not change production data, billing settings, secrets, database migrations, policies or destructive operations unless a separate concrete goal supplies an approved procedure and recovery plan. This workflow's first version blocks those operations.

Interrupted work requires reconciliation, not blind retry. Two repair rounds maximum. No tasks remain means idle without model calls.
