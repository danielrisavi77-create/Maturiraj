-- ─── activity_events ──────────────────────────────────────────────────────────
-- Tracks page visits per user. One row per visit.
-- section: short slug identifying which part of the app was visited
--   e.g. 'discere', 'ai-profesor', 'plan-ucenja', 'skripte', 'checklist',
--        'formule', 'kalkulator', 'prijemni'

create table if not exists public.activity_events (
  id          uuid        primary key default gen_random_uuid(),
  user_id     uuid        not null references auth.users(id) on delete cascade,
  section     text        not null,
  duration_s  integer     not null default 0,  -- seconds spent (updated on leave)
  visited_at  timestamptz not null default now()
);

alter table public.activity_events enable row level security;

create policy "activity_events: select own"
  on public.activity_events for select
  using (auth.uid() = user_id);

create policy "activity_events: insert own"
  on public.activity_events for insert
  with check (auth.uid() = user_id);

create policy "activity_events: update own"
  on public.activity_events for update
  using (auth.uid() = user_id);

-- Index for fast per-user queries
create index if not exists activity_events_user_id_visited_at
  on public.activity_events (user_id, visited_at desc);
