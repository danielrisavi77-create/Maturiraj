create table if not exists public.user_prijemni_scores (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid references auth.users(id) on delete cascade,
  session_id       text,  -- za anonimne usere (guest flow)

  -- Raw input
  prosjek_r1       numeric(3,2),
  prosjek_r2       numeric(3,2),
  prosjek_r3       numeric(3,2),
  prosjek_r4       numeric(3,2),
  mat_a_pct        int,   -- matematika A (0-100)
  mat_b_pct        int,   -- matematika B (0-160, jer B = 1.6x skala)
  hrv_a_pct        int,
  hrv_b_pct        int,
  eng_a_pct        int,
  eng_b_pct        int,

  -- Izborni predmeti (JSON za fleksibilnost)
  izborni          jsonb default '{}'::jsonb,
  /* format:
     {
       "bio": 78,          -- percentage
       "kem": 65,
       "fiz": 70,
       "pov": 82,
       "geo": 75,
       "psi": 80,
       "soc": 88,
       "fil": 72,
       "lat": null
     }
  */

  -- Dodatne provjere (ZVS, motorika, audicija, psihomotorika)
  posebne_provjere jsonb default '{}'::jsonb,
  /* format:
     {
       "zvs_afz": 72,           -- % uspjeha na ZVS
       "motorika_kif": 68,
       "psihomotorika_pass": true,  -- boolean za pass/fail
       "audicija_adu": null
     }
  */

  created_at       timestamptz default now(),
  updated_at       timestamptz default now(),

  -- Jedan user = jedan active score (upsert)
  constraint user_or_session check (user_id is not null or session_id is not null)
);

create unique index if not exists idx_user_scores_user on public.user_prijemni_scores(user_id) where user_id is not null;
create index if not exists idx_user_scores_session on public.user_prijemni_scores(session_id) where session_id is not null;

-- RLS
alter table public.user_prijemni_scores enable row level security;

drop policy if exists "scores_read_own" on public.user_prijemni_scores;
create policy "scores_read_own" on public.user_prijemni_scores
  for select using (
    (auth.uid() is not null and auth.uid() = user_id)
    or (auth.uid() is null and session_id is not null)
  );

drop policy if exists "scores_insert_own" on public.user_prijemni_scores;
create policy "scores_insert_own" on public.user_prijemni_scores
  for insert with check (
    (auth.uid() is not null and auth.uid() = user_id)
    or (auth.uid() is null and session_id is not null)
  );

drop policy if exists "scores_update_own" on public.user_prijemni_scores;
create policy "scores_update_own" on public.user_prijemni_scores
  for update using (
    (auth.uid() is not null and auth.uid() = user_id)
    or (auth.uid() is null and session_id is not null)
  );

-- Updated_at trigger
drop trigger if exists trg_scores_upd on public.user_prijemni_scores;
create trigger trg_scores_upd before update on public.user_prijemni_scores
  for each row execute function public.tg_set_updated_at();
