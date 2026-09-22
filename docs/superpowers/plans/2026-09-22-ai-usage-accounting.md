# AI Usage Accounting Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enforce a server-side monthly AI budget and record actual provider usage for Maturiraj's paid AI routes.

**Architecture:** A forward-only Postgres migration owns atomic reservations, reconciliation and per-user aggregation. A small server-only adapter quotes the selected model, calls the RPCs with the service-role client and returns an opaque reservation ID. Route handlers invoke it after authentication/entitlement and before Anthropic; the browser reads only its own stats.

**Tech Stack:** Next.js 16 route handlers, Supabase Postgres/RPC, Anthropic SDK, Vitest.

**Spec:** `docs/superpowers/specs/2026-09-22-ai-usage-and-agent-workflow-design.md`

## Global Constraints

- Follow `docs/ADR-001-ispitni-podaci.md`: exam answers and explanations cannot leak into the public bundle or logs.
- The browser never supplies the user ID to a privileged usage write; derive it from verified auth on the server.
- Each enabled paid route must fail closed when usage storage, price mapping or budget configuration is unavailable.
- Pricing, CLI subscription allowances and API accounting are separate concepts.
- Only forward migrations; never edit historical Supabase migrations.
- The streaming SSE event shape currently consumed by `app/ai-profesor/page.js` must remain compatible.
- Raw usage records have 90-day retention and monthly aggregates 13-month retention; account deletion removes attributable raw usage.
- Roll out route by route; do not claim an overall budget until all paid AI routes are covered.

## Review Focus

- Two simultaneous requests with only one reservation's room: exactly one provider call proceeds (Task 1 test).
- Duplicate completion after a response retry: counted exactly once (Task 1 test).
- Stream disconnect after the provider might have received a request: retain conservative reservation (Task 3 test).
- A different authenticated user asking for somebody else's statistics: return only caller-owned aggregates (Task 4 test).
- Provider returns unknown model/usage or DB becomes unavailable: deny the next new call and expose an explicit unknown status (Tasks 2 and 3 tests).

---

### Task 1: Atomic usage ledger

**Files:**
- Create: `supabase/migrations/20260922000000_ai_usage_ledger.sql`
- Create: `__tests__/security/ai-usage-ledger.test.js`

**Interfaces:**
- Produces RPC `ai_usage_reserve(p_user_id uuid,p_request_id uuid,p_feature text,p_model text,p_period date,p_budget_cents bigint,p_reserved_cents bigint,p_expires_at timestamptz)` returning `boolean`.
- Produces RPC `ai_usage_complete(p_request_id uuid,p_input_tokens int,p_output_tokens int,p_cache_read_tokens int,p_cache_write_tokens int,p_actual_cents bigint,p_price_version text)` returning `boolean`.
- Produces RPC `ai_usage_mark_uncertain(p_request_id uuid)` and `ai_usage_stats(p_user_id uuid,p_period date)`; access revoked from `anon` and `authenticated` on all write RPCs.

- [ ] **Step 1: Write failing database tests.** Run against a disposable local Supabase instance, guarded by `TEST_SUPABASE_DATABASE_URL`. Use two concurrent clients and assert one reservation succeeds when each would consume the last allowance, completion twice produces one event, a missing request cannot complete, and no `authenticated` role can execute the write functions. Simulate a 91-day-old event and a 14-month-old aggregate and verify cleanup deletes only those, while recent records remain. Example assertion:

```js
const [a, b] = await Promise.all([
  reserve({ requestId: crypto.randomUUID(), budgetCents: 100, reservedCents: 80 }),
  reserve({ requestId: crypto.randomUUID(), budgetCents: 100, reservedCents: 80 }),
])
expect([a, b].filter(Boolean)).toHaveLength(1)
```

- [ ] **Step 2: Verify red.** Run `npx vitest run __tests__/security/ai-usage-ledger.test.js` with a disposable DB; missing functions must fail. If local DB is unavailable, keep the test skipped only behind an explicit environment guard and report this as a release blocker.
- [ ] **Step 3: Add the migration.** Create private `ai_usage_reservations` keyed by `request_id` and `ai_usage_events` with a unique `request_id`; add RLS without user-facing policies and `ON DELETE CASCADE` to `auth.users`. Lock one row for `(user_id,period)` in an `ai_usage_monthly` aggregate during reserve/complete; reserve compares settled cost plus outstanding reservations to budget. Include constrained nonnegative amounts, states `reserved/completed/uncertain/released`, expiry and recorded model/feature. Make complete idempotent; allow `actual_cents > reserved_cents` and settle the real amount, thereby blocking subsequent reserves. `uncertain` retains its reservation and must not silently expire into free allowance. Expose server-only stats for the caller's UUID. Add server-only `ai_usage_prune()` that deletes raw events older than 90 days and monthly aggregates older than 13 months without releasing current outstanding reservations; schedule it only after staging verification. Revoke public execution on every SECURITY DEFINER function and pin `search_path`.
- [ ] **Step 4: Verify green.** Apply migration to disposable DB, run the test above twice and `npm run security:secrets`; inspect grants and `EXPLAIN` on the `(user_id,period)` lookups.
- [ ] **Step 5: Commit.** `git add supabase/migrations/20260922000000_ai_usage_ledger.sql __tests__/security/ai-usage-ledger.test.js && git commit -m "feat: add atomic AI usage ledger"`.

### Task 2: Server-only usage adapter and price configuration

**Files:**
- Create: `lib/ai-usage/prices.js`
- Create: `lib/ai-usage/ledger.js`
- Create: `__tests__/security/ai-usage-adapter.test.js`

**Interfaces:**
- Consumes Task 1 RPCs through `createAdminClient()` from `lib/supabase/server.ts`.
- Produces `reserveUsage({userId,feature,model,estimatedInputTokens,maxOutputTokens}) -> {requestId}`, `completeUsage({requestId,usage})`, `markUsageUncertain({requestId})`, `getUsageStats({userId})`.
- Defines `quoteCents({model,inputTokens,outputTokens,priceVersion})` for explicitly configured model and cache token rates. All amounts are integer cents; use ceiling rounding only after calculating all token categories.

- [ ] **Step 1: Add failing unit tests.** Stub the admin client's `.rpc()` and env. Assert unsupported model, missing `AI_MONTHLY_BUDGET_CENTS_PRO` or missing rates throws before any provider call; reserve passes an internally generated UUID; duplicate completion returns a stable result; a missing usage object goes to `markUsageUncertain`. Use concrete mocks such as `vi.stubEnv('AI_MONTHLY_BUDGET_CENTS_PRO','300')` and `expect(rpc).toHaveBeenCalledWith('ai_usage_reserve', expect.objectContaining({p_budget_cents:300}))`.
- [ ] **Step 2: Verify red.** Run `npx vitest run __tests__/security/ai-usage-adapter.test.js` and expect missing imports.
- [ ] **Step 3: Implement exact adapter contract.** `prices.js` explicitly lists only the models used by included routes and a dated price version. Obtain and verify official provider rates at implementation time; commit the version and source link rather than guessing a rate. `reserveUsage` rejects missing budget, non-finite estimates, negative values and RPC errors. Apply per-feature monthly budget using a server-only config keyed by verified entitlement; do not accept budget or price from requests. `completeUsage` requires finite provider counts and includes cache counters when available; an unsupported response moves reservation to `uncertain`. Wrap all RPC errors in internal errors without logging prompts or keys.
- [ ] **Step 4: Verify green.** Run adapter tests and `npm run security:secrets`.
- [ ] **Step 5: Commit.** `git add lib/ai-usage __tests__/security/ai-usage-adapter.test.js && git commit -m "feat: add server AI usage adapter"`.

### Task 3: Meter the existing streaming and simulator routes

**Files:**
- Modify: `app/api/ai/route.js`
- Modify: `app/api/ai-simulator/route.js`
- Modify: `__tests__/security/ai-api-contract.test.js`
- Create: `__tests__/security/ai-simulator-usage.test.js`

**Interfaces:**
- Consumes Task 2's `reserveUsage`, `completeUsage`, `markUsageUncertain`.
- Preserves `POST` response contracts, entitlements, feature flags and current SSE text delta events.

- [ ] **Step 1: Write failing route tests.** Mock the adapter and provider. Assert no provider call on budget denial, missing ledger or unsupported model; `/api/ai` preserves SSE text; `message_start`/`message_delta` terminal usage fields settle actual tokens; stream abort or missing terminal usage calls `markUsageUncertain`; simulator settles `response.usage`; repeated invalid requests never reserve. Add tests for 20-turn and 16,000-character bounds to keep prompt limits intact.
- [ ] **Step 2: Verify red.** `npx vitest run __tests__/security/ai-api-contract.test.js __tests__/security/ai-simulator-usage.test.js` must fail on missing budget enforcement.
- [ ] **Step 3: Implement minimal route wiring.** After auth, tier check, payload validation and existing rate limit, reserve with server-derived user ID and chosen model. Then invoke provider. In SSE `start`, capture provider usage and settle only at terminal event; on error/disconnect after invoking the provider, mark uncertain. Simulator settles from `response.usage` before returning JSON. Map budget to 429 with a stable `AI_BUDGET_EXCEEDED` code, ledger outage to 503, provider failures to 502; never expose raw upstream error bodies.
- [ ] **Step 4: Verify green.** Run both route test files, `npm run security:secrets`, and a manual authenticated stream test in a disposable environment. Confirm ledger events contain no messages.
- [ ] **Step 5: Commit.** `git add app/api/ai/route.js app/api/ai-simulator/route.js __tests__/security/ai-api-contract.test.js __tests__/security/ai-simulator-usage.test.js && git commit -m "feat: enforce usage budget on AI routes"`.

### Task 4: Replace browser accounting with caller-owned statistics

**Files:**
- Create: `app/api/ai/usage/route.js`
- Modify: `app/ai-profesor/page.js`
- Create: `__tests__/security/ai-usage-stats-route.test.js`

**Interfaces:**
- Consumes `getUsageStats({userId})` from Task 2; returns `{usedCents,budgetCents,period,coverage}` with `coverage:'partial'` until Task 5 is done.
- Browser no longer calls `check_and_increment_ai_usage` or `get_ai_usage_stats` directly.

- [ ] **Step 1: Write failing tests.** Send caller A's cookie plus B's ID in query/body; mocked auth returns A, and assert only A reaches `getUsageStats`. Assert no stats leakage on 401/403, a missing ledger returns 503, and the browser source no longer contains either legacy RPC name.
- [ ] **Step 2: Verify red.** Run `npx vitest run __tests__/security/ai-usage-stats-route.test.js`.
- [ ] **Step 3: Implement route and UI.** Reuse `requirePro` and server-side `createClient().auth.getUser()`; ignore any caller-supplied ID. Query Task 2 adapter and return `no-store` JSON. AI Profesor fetches the route on load and after a completed stream; show the configured budget and current server amount, never optimistic token estimates. Keep a clear temporarily unavailable state rather than displaying stale numbers as current.
- [ ] **Step 4: Verify green.** Run the tests plus the existing AI route contract tests; manually test refresh, denial and successful stream.
- [ ] **Step 5: Commit.** `git add app/api/ai/usage/route.js app/ai-profesor/page.js __tests__/security/ai-usage-stats-route.test.js && git commit -m "feat: show server-owned AI usage"`.

### Task 5: Complete route coverage and staged release gate

**Files:**
- Modify: `app/api/generate-study-plan/route.js`
- Modify: `app/api/prijemni/compare-insight/route.js`
- Modify: `app/api/medicinar/briefing/generate/route.js`
- Modify: `app/api/ai/usage/route.js`
- Create: `__tests__/security/ai-usage-remaining-routes.test.js`
- Create: `docs/AI_USAGE_RELEASE.md`

**Interfaces:**
- Consumes Task 2 adapter. Existing `ai_briefings.tokens_in/out` remains a feature record; ledger accounting occurs once per successful provider response.

- [ ] **Step 1: Write failing tests.** For each active provider route, test denied reserve yields zero provider calls and successful usage settles once. Test retry or weekly idempotency in briefing returns cached result without a new reserve; an unaccounted provider failure is `uncertain`. Test unauthenticated or insufficient-plan requests do not reserve.
- [ ] **Step 2: Verify red.** `npx vitest run __tests__/security/ai-usage-remaining-routes.test.js`.
- [ ] **Step 3: Wire remaining routes and inventory.** Add reservation after each route's auth/entitlement/input checks; settle based on provider `usage`. Inspect `app/api` for all outbound AI requests, including placeholders (`/api/discere/ask-ai` does not currently call a provider). In `docs/AI_USAGE_RELEASE.md` list every active call site, accounting status, model, budget tier and whether the feature flag is on. Change stats coverage to `complete` only once every active paid route is accounted for. Avoid double charging a reused weekly briefing.
- [ ] **Step 4: Verify green and release gates.** Run the new tests, `npm run security:secrets`, relevant existing Vitest security tests and `npm run build`. Apply migration to staging and test concurrent reserve, idempotency, expiry/uncertain handling, account deletion and 90-day/13-month retention with representative data. Enable one route at a time; monitor unknown usage and refund errors. Do not enable production if staging database/RPC or official model price verification is missing.
- [ ] **Step 5: Commit.** `git add app/api/generate-study-plan/route.js app/api/prijemni/compare-insight/route.js app/api/medicinar/briefing/generate/route.js app/api/ai/usage/route.js __tests__/security/ai-usage-remaining-routes.test.js docs/AI_USAGE_RELEASE.md && git commit -m "feat: complete AI usage coverage and release gate"`.
