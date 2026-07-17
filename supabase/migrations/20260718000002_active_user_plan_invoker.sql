-- ─────────────────────────────────────────────────────────────────────────────
-- P0 sigurnost: view `active_user_plan` je bez security_invoker zaobilazio RLS
-- baznih tablica → svaki prijavljeni korisnik je mogao pročitati Stripe ID-eve,
-- plan i status SVIH korisnika. (Audit 2026-07, docs/AUDIT_P0_FIXES.md #3)
--
-- SIGURNO ZA PRIMJENU ODMAH — nema app-strane ovisnosti.
-- Backend helperi koji ovaj view čitaju sa service-role ključem i dalje rade
-- (service-role namjerno zaobilazi RLS).
-- ─────────────────────────────────────────────────────────────────────────────

alter view public.active_user_plan set (security_invoker = true);

revoke all on public.active_user_plan from anon, authenticated;
grant select on public.active_user_plan to authenticated;  -- sada poštuje RLS tablice subscriptions
