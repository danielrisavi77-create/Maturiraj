-- ════════════════════════════════════════════════════════════════════════════
-- maturiraj.hr — Discere simulator full state (cross-device sync)
-- One row per (user, subject). Stores the engine's DS key/value blob verbatim
-- (mat_sim_v1 = xp/streak/history/errorTracker/badges/…, plus settings like
-- mat_dark / mat_razina / mat_resume). Hydrated on load, upserted on DISCERE_SAVE.
--
-- Per-exam analytics still live in public.sim_progress (one row per attempt);
-- this table is the app's own continuity store. Idempotent.
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.discere_sim_state (
  user_id     uuid not null references auth.users (id) on delete cascade,
  subject     text not null default 'mat',
  state       jsonb not null default '{}'::jsonb,   -- { [dsKey]: value }
  updated_at  timestamptz not null default now(),
  primary key (user_id, subject)
);

alter table public.discere_sim_state enable row level security;
drop policy if exists "discere_sim_state own" on public.discere_sim_state;
create policy "discere_sim_state own" on public.discere_sim_state
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create index if not exists discere_sim_state_user_idx
  on public.discere_sim_state (user_id);
