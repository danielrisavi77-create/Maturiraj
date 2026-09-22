# Three-Tool Development Benchmark Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Compare Codex, Claude Code and Grok on reproducible Maturiraj development tasks, then use evidence to decide who authors and who reviews each class of work.

**Architecture:** A local, opt-in CLI validates a task manifest, creates isolated worktrees from one base commit and records artifact references and verified measurements. The first version never launches an AI CLI automatically: a human/operator runs an installed tool inside its worktree and imports a structured result. A second tool summarizes comparable outcomes without interpreting missing token counts as zero.

**Tech Stack:** Node.js scripts, built-in `node:test`, Git worktrees, JSON files; no new runtime dependency or production endpoint.

**Spec:** `docs/superpowers/specs/2026-09-22-ai-usage-and-agent-workflow-design.md`

## Global Constraints

- Do not include API keys, student records, proprietary exam solutions or full prompts in benchmark logs.
- CLI subscription use and API usage are separate. Unknown CLI token counts remain `null`.
- Each run has the same pinned base commit and input brief; each author has a separate worktree.
- No tool self-approves a content or security result. Publication requires source/subject review under existing repo policies.
- Grok remains optional until installed CLI identity, accepted options and output contract have been checked live.
- No automatic calls to paid services, no concurrent writes to shared files, and no production modification.

## Review Focus

- Missing Grok executable: benchmark still records Codex/Claude observations and says Grok unmeasured (Task 1 test).
- Tool reports no token usage: store `null`, exclude from cost ranking (Task 2 test).
- Two authors start from different commits: comparator rejects cross-run ranking (Task 2 test).
- A result points outside its allocated worktree: reject it before reading artifacts (Task 1 test).
- A content check passes tests but has no source review: mark quality gate incomplete (Task 2 test).

---

### Task 1: Task manifest, isolation and result contract

**Files:**
- Create: `scripts/agent-benchmark/schema.mjs`
- Create: `scripts/agent-benchmark/prepare.mjs`
- Create: `scripts/agent-benchmark/import-result.mjs`
- Create: `scripts/agent-benchmark/fixtures/tasks.json`
- Create: `__tests__/agent-benchmark/contract.test.mjs`
- Modify: `.gitignore`

**Interfaces:**
- `validateTask(task)` accepts `{id,kind,baseCommit,goal,allowedPaths,checks,risk}` with `kind: 'code'|'content'|'security'` and nonempty arrays.
- `prepareTask(task,{workspaceRoot})` returns per-tool worktree paths; `importResult({task,tool,resultPath,workspaceRoot})` returns a sanitized JSON record with `tokens: number|null`.
- Result fields: `taskId,tool,model,baseCommit,branch,worktree,elapsedSeconds,tokens,tokenSource,checks,sourceReview,artifactPaths,reviewFindings`. Tool is one of `codex`, `claude`, `grok`; tokenSource is `provider_report`, `cli_report` or `unknown`.

- [ ] **Step 1: Add failing Node tests.** Assert a path such as `../../.env` and a result with `artifactPaths:['../other-run/file']` are rejected; empty paths/checks are rejected; absent Grok does not abort preparation for selected `['codex','claude']`; `tokens` omitted becomes `null`.
- [ ] **Step 2: Verify red.** Run `node --test __tests__/agent-benchmark/contract.test.mjs` and expect missing module failures.
- [ ] **Step 3: Implement validators and preparation.** Require `git rev-parse --verify <baseCommit>^{commit}` to succeed, reject dirty base worktree, resolve every path under `workspaceRoot`, and create branch/worktree names `benchmark/<task-id>/<tool>` from the same commit using `spawnSync('git',['worktree','add','-b',branch,path,baseCommit])` (no shell string). Import only the structured result, reject paths escaping that specific worktree via `path.relative`, and store sanitized local output under `scripts/agent-benchmark/runs/` (ignored by Git). Store task fixtures with real repository checks such as `npm run security:secrets` and `npx vitest run __tests__/security/ai-api-contract.test.js`; the goal is short and scoped, never an entire subject.
- [ ] **Step 4: Verify green.** Run the Node tests and `git status --short`; dry-run preparation in a disposable Git fixture, not in the working repo.
- [ ] **Step 5: Commit.** `git add scripts/agent-benchmark/schema.mjs scripts/agent-benchmark/prepare.mjs scripts/agent-benchmark/import-result.mjs scripts/agent-benchmark/fixtures/tasks.json __tests__/agent-benchmark/contract.test.mjs .gitignore && git commit -m "feat: add isolated AI development benchmark contract"`.

### Task 2: Comparison, independent review and usage guide

**Files:**
- Create: `scripts/agent-benchmark/compare.mjs`
- Create: `__tests__/agent-benchmark/compare.test.mjs`
- Create: `docs/AI_DEVELOPMENT_WORKFLOW.md`
- Modify: `package.json`

**Interfaces:**
- Consumes sanitized records from Task 1.
- Produces `compareResults(results)` with `eligible`, `ineligible`, `qualityGate`, `timeSeconds`, `tokenComparison`, `recommendationEvidence`. Never produces a numeric token rank if any compared result lacks verified tokens.

- [ ] **Step 1: Write failing tests.** Feed the comparator three records with a shared commit, one with `tokens:null`, one with a failing test, one with content missing `sourceReview`; expect no cost winner and only results with complete quality gates eligible. Feed different `baseCommit` values and expect an error. Feed a security report reviewed by its own author and expect review gate failure.
- [ ] **Step 2: Verify red.** Run `node --test __tests__/agent-benchmark/compare.test.mjs`.
- [ ] **Step 3: Implement comparison.** Check shared `taskId`/`baseCommit`, explicit completed checks and independent reviewer identity; rank only eligible work by measured time, defects and verified token counts. Show `unknown` for absent token/price data and avoid projecting API dollar prices onto subscriptions. `docs/AI_DEVELOPMENT_WORKFLOW.md` gives exact commands for prepare, manual run in an allocated worktree, import, test, independent review and compare. Include a live Grok CLI preflight checklist for executable/version/options/output contract; if unavailable, record `unmeasured` and do not fake its output. Add `agent:benchmark:test` to `package.json` using `node --test __tests__/agent-benchmark/*.test.mjs`.
- [ ] **Step 4: Verify green.** Run `npm run agent:benchmark:test` and `npm run security:secrets`; manually compare two fixture results, checking the report exposes missing data.
- [ ] **Step 5: Commit.** `git add scripts/agent-benchmark/compare.mjs __tests__/agent-benchmark/compare.test.mjs docs/AI_DEVELOPMENT_WORKFLOW.md package.json && git commit -m "feat: compare independently reviewed agent runs"`.

### Task 3: First controlled comparison and decision record

**Files:**
- Create: `docs/AI_AGENT_BENCHMARK_RESULTS.md`

**Interfaces:**
- Consumes Tasks 1–2 artifacts and an available installation of each CLI. Produces a signed-off decision table by task type, with explicit `unmeasured` cells where a CLI or usage metric is unavailable.

- [ ] **Step 1: Confirm environment.** Run `command -v codex`, `command -v claude` and `command -v grok` (or documented xAI executable); record only version and supported command form, never credentials or environment dumps.
- [ ] **Step 2: Run three small tasks.** From the pinned base commit use one bounded code fix, one source-backed content check and one security review. For every available tool, use the same brief and separate worktree; attach relevant test outputs and independent review findings. If a tool is unavailable, mark it `unmeasured`, without substituting another tool's result.
- [ ] **Step 3: Compare and decide.** `node scripts/agent-benchmark/compare.mjs scripts/agent-benchmark/runs/<task-id>/*.json` for each task; document actual quality, time, verified token measurements, unknowns and a provisional author/reviewer assignment. If no comparably measured results exist, record `no routing recommendation` and defer automation.
- [ ] **Step 4: Verify record.** A second reviewer checks each finding against diff, tests and sources; run `npm run agent:benchmark:test`, `npm run security:secrets`, and check that no local run artifacts or secrets are staged.
- [ ] **Step 5: Commit.** `git add docs/AI_AGENT_BENCHMARK_RESULTS.md && git commit -m "docs: record AI agent benchmark evidence"`.
