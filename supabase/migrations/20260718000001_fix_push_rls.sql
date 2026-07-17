-- ─────────────────────────────────────────────────────────────────────────────
-- P0 sigurnost (IDOR + PII): push_subscriptions — politika `for all` s granom
-- `(auth.uid() is null and session_id is not null)` davala je anon korisniku
-- pun SELECT/UPDATE/DELETE nad SVIM gostujućim redovima (endpoint, p256dh,
-- auth_key, user_agent) → curenje PII, masovno brisanje, hijack push-targetiranja.
-- (Audit 2026-07, docs/AUDIT_P0_FIXES.md #2)
--
-- ⚠️ OVISNOST O APP-STRANI PRIJE DEPLOYA:
-- Uklanja anon RLS pristup. Registracija push-a za goste MORA ići kroz
-- poslužiteljski endpoint (service-role) koji upisuje `session_id`, ne direktno
-- anon klijentom. Provjeriti: lib/prijemni/push.ts i pozivatelje.
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.push_subscriptions enable row level security;

drop policy if exists "push_own_rw" on public.push_subscriptions;

create policy "push_auth_rw" on public.push_subscriptions for all
  using      (auth.uid() is not null and user_id = auth.uid())
  with check (auth.uid() is not null and user_id = auth.uid());

-- Gostujuće pretplate: samo preko servera (service-role) koji upisuje session_id.
