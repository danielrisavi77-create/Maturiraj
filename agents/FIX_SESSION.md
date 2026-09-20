# FIX SESSION — Maturiraj

Aktivni program: `PLAN_POPRAVAKA_MATURIRAJ.md`
Faza: T1 Novac i podaci
Zadatak na redu: **T1.2** RLS `user_prijemni_scores`
Zastavica naplate: **OFF** (`isBillingCheckoutEnabled`) dok T1 nije zatvoren

## Zadnja sesija (T1.1)

- View `active_user_plan` u gitu već ima `20260718000002_active_user_plan_invoker.sql`.
- Dodana idempotentna migracija `supabase/migrations/20260920000001_t1_1_active_user_plan_invoker.sql` (CREATE OR REPLACE WITH security_invoker + revoke anon).
- Branch: `fix/t1-billing-rls`
- **Nije gotovo na živoj bazi dok se migracija ne pusti.** Checkout i dalje OFF.

## Token pravila

1. Ne čitaj vision / project_brain / project_status / roadmap / velike audite.
2. Otvori samo datoteke aktivnog taska.
3. Ne dodaji featuree. Ne diraj Game Mode, roditelje, nove predmete, HrvatskiSimulator.jsx.
4. Jedan task po sesiji.

## Što smiješ čitati

- ovaj file
- `PLAN_POPRAVAKA_MATURIRAJ.md` samo aktivni task
- `docs/AUDIT_P0_FIXES.md` za T1 SQL
- `supabase/migrations/20260419000003_user_prijemni_scores.sql`
- `supabase/migrations/20260718000000_fix_scores_rls.sql` (ako postoji)
- `lib/prijemni/api.js`

## Entitlement

- `useAuth()` = `{ user, planType, isPaid, isPro, loading }` — nema `profile`
- Discere = `isPaid`; AI = `isPro`; guard = `proxy.js`
- Checkout: `starter` mj, `pro` mj, `pro_god`
