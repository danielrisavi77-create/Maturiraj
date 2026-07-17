-- ─────────────────────────────────────────────────────────────────────────────
-- P0 billing: provisioning upsert pada s 42P10 čim se naplata uključi.
-- Migracija 20260418000000 (DO-blok) dropala je puni UNIQUE(stripe_subscription_id)
-- i ostavila samo PARCIJALNI unique indeks (... WHERE stripe_subscription_id IS NOT NULL).
-- supabase-js `.upsert({ onConflict: 'stripe_subscription_id' })` generira
-- `ON CONFLICT (stripe_subscription_id)` BEZ predikata → Postgres 42P10
-- ("no unique or exclusion constraint matching the ON CONFLICT specification").
-- Posljedica: syncSubscriptionToSupabase baca na svaki webhook/refresh →
-- korisnik plati, ali profiles se ne ažurira (nema Pro).
-- (Audit 2026-07, docs/AUDIT_P0_FIXES.md #4)
--
-- Puni UNIQUE dopušta više NULL-ova (rows bez Stripe suba su OK), pa je zamjena
-- bezopasna. Duplikati ne-NULL vrijednosti već su deduplicirani u 20260418000000.
--
-- SIGURNO ZA PRIMJENU (schema-only). Preporuka: primijeniti PRIJE uključivanja
-- isBillingCheckoutEnabled().
-- ─────────────────────────────────────────────────────────────────────────────

drop index if exists public.subscriptions_stripe_sub_idx;

alter table public.subscriptions
  add constraint subscriptions_stripe_subscription_id_key unique (stripe_subscription_id);
