# Maturiraj development agents

Read `docs/agent-workflow/RULES.md` for the shared execution contract.

For an autonomous goal, inspect `node tools/agent-ops/cli.mjs status` first. Never start another controller while one owns the lock. The runtime stores private state under `%LOCALAPPDATA%/MaturirajOrchestrator`, outside this public repository.

Codex coordinates; Claude implements; Grok Bot researches and checks previews. Only one local model executes at a time. The approved goal defines the scope. Existing unrelated branches, PRs and uncommitted work are not part of it.

The approved workflow supersedes the legacy blanket single-agent prohibition in `agents/README_FOR_AGENTS.md`; all other stability, performance and correctness guidance still applies. Use three bounded roles, not unrestricted parallel agents.

Do not activate production release until doctor and the live Grok connection probe succeed and Vercel's production guard is verified. Never fall back to paid AI API credentials.
