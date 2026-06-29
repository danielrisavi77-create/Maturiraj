# Bugs Log — Maturiraj

Tracks bugs found and their resolution status.

---

## Fixed Bugs

### [FIXED] useAuth returned wrong isPro semantics
**File:** `lib/hooks/useAuth.js`
**Severity:** Critical (business logic)
**Symptom:** Standard users ('starter' plan) were getting `isPro: true`, giving them PRO features for free.
**Root cause:** `isPro` was set to `true` for both `plan_type === 'starter'` AND `plan_type === 'pro'`.
**Fix:** Rewrote useAuth to expose:
- `planType: null | 'starter' | 'pro'` — raw value
- `isPaid: planType !== null` — any paid plan (gates Discere)
- `isPro: planType === 'pro'` — pro-only (gates AI features)
**Fixed in:** Session [entitlement overhaul]

---

### [FIXED] Middleware did not check paid plan for /discere
**File:** `middleware.js`
**Severity:** Critical (security/monetization)
**Symptom:** Any logged-in user (including free) could access `/discere` — no plan check.
**Root cause:** `/discere` was in `authRequired` (login-only check), not in a paid-plan gate.
**Fix:** Added `paidRequired = ['/discere']` — checks `plan_type IN ('starter', 'pro')` and valid expiry. Redirects to `/pro?from=discere` if free.
**Fixed in:** Session [entitlement overhaul]

---

### [FIXED] Middleware did not gate /ai-profesor to Pro
**File:** `middleware.js`
**Severity:** Critical (security/monetization)
**Symptom:** Any logged-in user could access `/ai-profesor` — should be Pro-only.
**Root cause:** `/ai-profesor` was in `authRequired` (login-only), not in `proRoutes`.
**Fix:** Moved `/ai-profesor` from `authRequired` → `proRoutes` (Pro-only gate).
**Fixed in:** Session [entitlement overhaul]

---

### [FIXED] Simulator (HrvatskiSimulator.jsx) had zero plan gating
**File:** `app/discere/hrvatski/simulator/page.jsx` + new `PlanGate.jsx`
**Severity:** High (defense-in-depth)
**Symptom:** Simulator component itself had no auth/plan checks — relied entirely on middleware.
**Fix:** Created `PlanGate.jsx` client component that checks `isPaid` from `useAuth`. Wraps `<HrvatskiSimulator>` in `page.jsx`.
**Fixed in:** Session [entitlement overhaul]

---

### [FIXED] plan-ucenja/page.js: profile undefined from useAuth
**File:** `app/plan-ucenja/page.js`
**Severity:** High (logic bug — hasPro always false)
**Symptom:** `const { user, profile } = useAuth()` — `profile` is NOT returned by useAuth. So `hasPro = profile?.plan_type === 'pro'` was always `undefined` (false). Pro save button never worked.
**Fix:** Changed to `const { user, isPro } = useAuth()` and `const hasPro = isPro`.
**Fixed in:** Session [entitlement overhaul]

---

### [FIXED] plan-ucenja/dashboard/page.js: profile undefined from useAuth
**File:** `app/plan-ucenja/dashboard/page.js`
**Severity:** High (logic bug — hasPro always false)
**Symptom:** Same as plan-ucenja/page.js — `profile` not returned from useAuth. `hasPro` always false. Also `profile?.full_name` always undefined.
**Fix:** Changed to `const { user, isPro, loading: authLoading } = useAuth()`, `const hasPro = isPro`. Fixed name display to use `user?.user_metadata?.full_name`.
**Fixed in:** Session [entitlement overhaul]

---

### [FIXED] ai-profesor/page.js: profile and isPro destructured but not used
**File:** `app/ai-profesor/page.js`
**Severity:** Low (unused variable, potential confusion)
**Symptom:** `const { user, profile, isPro } = useAuth()` — `profile` not returned, `isPro` unused (file uses its own `userPlan` fetched from Supabase).
**Fix:** Simplified to `const { user } = useAuth()`.
**Fixed in:** Session [entitlement overhaul]

---

### [FIXED] pro/success/page.js: profile destructured but unused
**File:** `app/pro/success/page.js`
**Severity:** Low (unused variable)
**Symptom:** `const { profile } = useAuth()` — `profile` not returned, never used in the file.
**Fix:** Removed import and destructure.
**Fixed in:** Session [entitlement overhaul]

---

## Open Bugs

_None known at this time._

---

## Architecture Changes

### [FEATURE] /dashboard command center hub
**Session:** Dashboard command center (2026-06-27)
**Severity:** New product layer (NOW roadmap #3)

**Što je dodano:**
- `app/dashboard/page.js` — novi top-level hub. Agregira "što dalje" kroz cijeli proizvod: sljedeći nezavršeni tjedan plana (`study_plans`+`plan_weeks`), zadnja simulator sesija (`simulator_sessions`), nastavak skripte (`chapter_progress`), AI Profesor (PRO, gated). Linka u postojeće sekcije — ne duplicira plan kalendar/heatmapu.
- `lib/dashboard/helpers.js` — izdvojeni dijeljeni helperi (MATURA_DATE, getGreeting, daysUntil, progressColor, card). Plan dashboard sada importa iste umjesto lokalnih kopija.
- `components/dashboard/ProBlur.jsx` — izdvojen iz plan dashboarda za reuse.

**Izmijenjeno:**
- `proxy.js` — `/dashboard` dodan u `authRequired`; prijavljeni na `/prijava`/`/registracija` → `/dashboard`.
- `app/auth/page.js` — post-login landing (email + OAuth callback) → `/dashboard`.
- `components/layout/Nav.jsx` — "🏠 Dashboard" link za prijavljene (desktop nav, mobile drawer, UserPill dropdown); "Moj plan →" fallback na `/dashboard`.

**Doc ispravak:** route protection je u `proxy.js` (Next.js 16), NE `middleware.js` kako su ranije tvrdili NEXT_SESSION_BOOT.md/bugs.md.



### [CLEANUP] Dashboard / Parent Dashboard sustav uklonjen
**Session:** Dashboard audit & cleanup (2026-04-06)
**Severity:** Architecture cleanup

**What was removed:**
- `app/dashboard/` (page.js + layout.js) — stari roditeljski dashboard
- `app/parent-dashboard/` (page.js) — legacy redirect
- `components/parent/` (42 komponente) — sav parent dashboard UI
- `components/dashboard/` (2 komponente) — ParentChildLink, ParentProgressSummary
- `lib/parent/` (5 fajlova) — dashboard.js, multiChildDashboard.js, builders.js, parentActions.js, styles.js
- `lib/hooks/useDashboardData.js` — dead hook (nikad importan)
- `components/agents/DiagnosticDashboard.jsx` — dev tool (nikad importan)

**What was kept:**
- `app/plan-ucenja/dashboard/` — studentski PRO plan dashboard (NIJE parent)
- `app/roditelji/page.jsx` — marketing landing page za roditelje

**References updated (30+ fajlova):**
- Svi `/dashboard` redirecti → `/` ili `/roditelji`
- Svi `/parent-dashboard` → `/roditelji`
- Svi `/plan-ucenja/dashboard` linkovi (osim same rute) → `/plan-ucenja`
- Svi "Roditeljski dashboard" tekstovi → "Roditeljski uvid"
- RoditeljiUrgency: `onDashboard` → `onRoditelji`
- Middleware, auth callback, prijava, pro, stripe portal, email templates — sve ažurirano
- Build: ✅ successful, zero errors

### [ARCH] /roditelji parent application — architecture defined
**Session:** Parent app architecture design (2026-04-07)
**Severity:** New product layer

**New architecture document:** `agents/RODITELJI_ARCHITECTURE.md`
- 13-section comprehensive architecture for parent portal
- Routes: /roditelji/pregled, /dijete/[childId], /obavijesti, /preporuke, /rokovi, /postavke, /povezi
- New DB tables: `parent_children` (multi-child linking), `parent_preferences`
- RLS policies: parent reads child data only when status='linked'
- Component structure: shell/ + sections/ + ui/ under `components/roditelji/`
- State: ParentContext (children list + activeChildId), URL params for filters
- 4-phase implementation plan

**New migrations:**
- `supabase/migrations/20260407000000_parent_children.sql` — parent-child linking with RLS
- `supabase/migrations/20260407000001_parent_preferences.sql` — digest/notification preferences

---

## Notes

- Always use `useAuth().isPaid` for Discere-level gating (any paid plan)
- Always use `useAuth().isPro` for Pro-only features (AI profesor, AI chat, share, etc.)
- Never destructure `profile` from useAuth — it is not returned. Use `user.user_metadata` for display name.
- Middleware is the primary entitlement guard; `PlanGate.jsx` is defense-in-depth only.
