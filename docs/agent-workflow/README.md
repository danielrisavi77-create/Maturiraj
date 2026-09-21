# Autonomous development workflow

The controller is a standalone Node.js 24 application using built-in modules. It is not imported by Next.js and adds no production dependencies.

## Commands

Run from the repository root:

```powershell
node tools/agent-ops/cli.mjs init
node tools/agent-ops/cli.mjs doctor
node tools/agent-ops/cli.mjs bootstrap
node tools/agent-ops/cli.mjs bridge-probe
node tools/agent-ops/cli.mjs start
```

`start` remains in the foreground. To start hidden at login:

```powershell
powershell -NoProfile -File tools/agent-ops/install-task.ps1
Start-ScheduledTask -TaskName 'Maturiraj Agent Orchestrator'
```

Use `status`, `pause`, `resume`, `stop` and `bridge-status` from a second terminal. Pause finishes the current action; stop terminates the controller's own child process tree. Interrupted writes are blocked for reconciliation, never silently repeated. Pause/stop are durable control requests; resume is required after stopping. `start --once` processes at most one stage.

If Windows kills the process before it can release its lock, `recover-lock` checks that its PID no longer exists before archiving the lock. A live or ambiguous lock is never removed automatically. For an interrupted code task, inspect its worktree and run `retry --task <id>` only when safe; this consumes a repair attempt. Interrupted deployments must be reconciled against Vercel before continuation.

## Goals and sessions

Create a JSON goal matching `tools/agent-ops/goal.example.json`. Supply exact file paths or directory prefixes ending in `/`; wildcards are not accepted. Tasks must stay inside the goal scope. Only dependency-ready tasks are scheduled. UI tasks require `smokePaths` and a successful Grok preview result.

```powershell
node tools/agent-ops/cli.mjs goal --file C:/path/to/approved.goal.json
node tools/agent-ops/cli.mjs start
```

For decomposition, `plan --file brief.json` calls Codex once. A brief contains `id`, `description`, `scope`, and `acceptance`. The generated goal is validated and saved locally; load it with `goal --file`. Model output cannot grant itself release permissions or inject completed statuses.

The lock must be free when importing a goal or running planning. Stop the idle controller first, import, request resume, and restart the scheduled task. When a goal finishes, the controller stays idle without model calls. Project instructions make the same state discoverable in new sessions, but an arbitrary external chat must still be opened in this project to load those instructions.

## Authentication and spending

The controller checks `codex login status` and `claude auth status` before each model invocation. Child environments remove API/provider overrides. Codex forces ChatGPT login and ignores user provider config. Claude uses `claude.ai`, ignores settings sources, and exposes only the tools needed for its phase. No `--bare` mode is used because that mode does not use the subscription login.

Use a complete official Codex CLI installation, not a copied `codex.exe` alone: Windows also needs the matching `codex-resources` helpers. This workflow pins 0.154.0: it passed both sandbox and real subscription probes here, while 0.155.1 failed with the runtime-path validation error described in [upstream issue #46388](https://github.com/openai/codex/issues/46388). Install the isolated version before `init`:

```powershell
npm install --prefix "$env:LOCALAPPDATA/MaturirajOrchestrator/tools/codex-0.154.0" --ignore-scripts --no-audit --no-fund @openai/codex@0.154.0
```

`init` uses that installation by default; `--codex <absolute-executable>` selects another verified complete installation. This does not change the IDE's Codex version. Windows workers explicitly select the elevated sandbox and retain read-only/workspace-write boundaries. Unrelated plugins, apps and nested agents are disabled for worker calls to keep context small. A failed sandbox setup blocks the worker; do not use a sandbox bypass as a workaround.

`doctor` and each Windows Codex invocation perform a deterministic sandbox readiness check before any model request. Parent IDE runtime paths and session identity are removed from worker environments. Repair a failing Windows sandbox before repeating a paid-subscription model probe. `status` reports provider attempts, including failures before the model was reached; this is deliberately not labeled an exact model-call count.

Sonnet is the routine Claude model; Opus is used for complex tasks and repairs. Models can be changed in local `config.json` only to models covered by the account. A quota waits one hour before another attempt; authentication failures block. There are two repair rounds maximum.

Subscription overage/extra-usage settings are account-side: turn them off in the providers' account settings to guarantee no charge beyond subscriptions. The controller does not enable or purchase them. No exact spend or token counter is invented when a CLI does not expose it. Inspect private `state.json` usage and `runs/` logs for telemetry. Failed calls can consume quota even without a usage report.

`provider-probe --provider claude` and `provider-probe --provider codex` run one bounded real read-only task and record evidence. Stop the controller before these probes to preserve the single-writer lock. Authentication checks alone are not proof of a working agent call.

## GitHub / Grok

Application code uses the existing public repository. Private tasks use `Maturiraj-agent-ops`. Share the `GROK_SETUP.md` link with the existing mobile Bot once. Setup must preserve its other jobs.

The controller accepts only an explicitly configured GitHub author, exact task/attempt/commit IDs and a valid result block. The Bot cannot change official task status. Issue creation is reconciled using an attempt marker; duplicate delivery never starts a second application task. An online-controller heartbeat prevents taking new work when the PC is unavailable.

The connection probe verifies a GitHub round trip. It does not by itself prove that a recurring trigger was configured; record the Bot's routine confirmation and test a second task without a manual message before enabling unattended goals.

The implementation automatically issues a second `grok-routine-probe` after the first response. Only a valid response to that second issue sets `bridgeVerified`. No second mobile message should be sent to trigger that challenge.

The local controller makes no model calls while idle. A scheduled Grok check can invoke its model even when there are no ready tasks. Verify event delivery and idle behavior on the connected account; successful polling alone does not establish zero-call idling. An event routine needs its own account connection and live delivery test.

For an account that supports `issue-assigned`, first connect a narrowly scoped routine to the private operations repository. Then stop the controller and set optional `grokAssignee` in private `config.json` to the connected GitHub login, which must also appear in `grokAuthors`. New task issues are assigned only after their complete body and ready labels exist. Recovery checks the recorded assignees and does not remove/re-add an assignment to retrigger it. The default is null, preserving polling until the event integration is configured.

Test event delivery with a fresh bounded probe and require the Bot's event run record, not merely a reply that the cron routine could have produced. After a successful event probe, pause only the old Maturiraj cron routine and repeat the probe; verify no scheduled wakes during an idle interval. Preserve every unrelated Bot job. Assignment by the same GitHub account may not produce the notification expected by the event connector; report that limitation instead of assuming delivery.

## Production release

Release starts disabled. Set a real `vercelCli` JS entrypoint and release project/team IDs, production URL, and `smoke` assertions in local configuration only after verifying the existing Vercel project. Each smoke assertion needs `path`, expected `status` (default 200), and nonempty `contains` text. Add assertions for the changed public flow. Protected/authenticated routes need a separate test account workflow; never substitute a login redirect for a successful user-flow test.

Vercel project `autoAssignCustomDomains` must be false. The controller checks it on every release so a normal Git push cannot auto-promote a deployment. It will not change this account setting silently. Deployments are built with production configuration and `--skip-domain`, checked on their candidate URL and promoted only afterward. Production gets checked immediately and after five minutes. Failure rolls back to the recorded previous deployment and blocks the queue.

Existing failing baseline checks block implementation; tests, lint and build must all pass for release. Changes in main require explicit rebase/review. Remote branch protections remain effective. No destructive database work, credential changes or self-modification of the controller is permitted through the task executor.

If builds need the existing local environment, set `buildEnvFile` in private configuration to the local `.env.local` path. Only the deterministic test/build subprocesses load it; it is not copied into worktrees, agent prompts or Git. Dependency installs are reused within a task only while the lockfile hash is unchanged.

## Verification

```powershell
node --test tools/agent-ops/checks/*.checks.mjs
npm test
npm run lint
npm run build
```

Local contract tests do not substitute for the live Claude/Codex/Grok pilot or Vercel rollback rehearsal. See `progress.md` for actual results and remaining setup. Do not claim production autonomy until these pass.

Official references: [Codex non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode), [Windows sandbox](https://learn.chatgpt.com/docs/windows/windows-sandbox), [Claude Code headless](https://code.claude.com/docs/en/headless), [Grok Bot routines](https://docs.x.ai/grok-bot/skills-routines-and-automations), [Vercel deploy](https://vercel.com/docs/cli/deploy), [promote](https://vercel.com/docs/cli/promote), [rollback](https://vercel.com/docs/cli/rollback).
