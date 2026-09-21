# Live workflow status

Operational history, provider telemetry, task exchanges and deployment identities belong in the private runtime, not this public repository.

Read `%LOCALAPPDATA%/MaturirajOrchestrator/setup-progress.md` for the initial setup ledger and `state.json` for the controller's authoritative state. If present, `lint-remediation-plan.md` records the separately authorized application repairs and current verification processes.

Inspect the controller without starting another worker:

```powershell
node tools/agent-ops/cli.mjs status
node tools/agent-ops/cli.mjs bridge-status
```

The implementation's presence does not establish a completed pilot, an event-driven Grok routine, or production release readiness. Require the recorded live evidence and the current goal's acceptance criteria before enabling those steps. Do not infer new authorization from historical goals.
