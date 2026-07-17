-- ─────────────────────────────────────────────────────────────────────────────
-- P0 sigurnost (IDOR): user_prijemni_scores — RLS grana
-- `(auth.uid() is null and session_id is not null)` bila je istinita za SVAKI
-- gostujući red kod bilo kojeg anonimnog zahtjeva → anon je javnim `anon`
-- ključem mogao čitati i mijenjati tuđe rezultate (GPA, postoci).
-- (Audit 2026-07, docs/AUDIT_P0_FIXES.md #1)
--
-- ⚠️ OVISNOST O APP-STRANI PRIJE DEPLOYA:
-- Ova migracija UKLANJA anon RLS pristup. Gostujuća (nelogirana) perzistencija
-- rezultata MORA prijeći na poslužiteljski endpoint / SECURITY DEFINER RPC koji
-- veže `session_id` iz httpOnly cookieja i koristi service-role. Inače se
-- guest-flow (spremanje/čitanje rezultata bez logina) lomi.
-- Provjeriti pozivatelje: lib/prijemni/api.js, components/prijemni/*.
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.user_prijemni_scores enable row level security;

drop policy if exists "scores_read_own"   on public.user_prijemni_scores;
drop policy if exists "scores_insert_own" on public.user_prijemni_scores;
drop policy if exists "scores_update_own" on public.user_prijemni_scores;

-- Samo prijavljeni vlasnik dobiva direktan RLS pristup:
create policy "scores_select_auth" on public.user_prijemni_scores
  for select using (auth.uid() is not null and auth.uid() = user_id);

create policy "scores_insert_auth" on public.user_prijemni_scores
  for insert with check (auth.uid() is not null and auth.uid() = user_id);

create policy "scores_update_auth" on public.user_prijemni_scores
  for update using (auth.uid() is not null and auth.uid() = user_id)
           with check (auth.uid() is not null and auth.uid() = user_id);

-- Gost NEMA direktan RLS pristup; ide preko servera (service-role) / RPC-a.
