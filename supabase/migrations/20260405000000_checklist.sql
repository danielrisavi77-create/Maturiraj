-- ─── checklist_progress ───────────────────────────────────────────────────────
-- One row per checked item. Existence = checked. Deleted = unchecked.
create table if not exists public.checklist_progress (
  user_id    uuid    not null references auth.users(id) on delete cascade,
  item_id    text    not null,
  checked_at timestamptz not null default now(),
  primary key (user_id, item_id)
);

alter table public.checklist_progress enable row level security;

create policy "checklist_progress: select own"
  on public.checklist_progress for select
  using (auth.uid() = user_id);

create policy "checklist_progress: insert own"
  on public.checklist_progress for insert
  with check (auth.uid() = user_id);

create policy "checklist_progress: delete own"
  on public.checklist_progress for delete
  using (auth.uid() = user_id);


-- ─── checklist_config ─────────────────────────────────────────────────────────
-- One row per user: stores subjects + streak JSON.
create table if not exists public.checklist_config (
  user_id    uuid    not null references auth.users(id) on delete cascade primary key,
  subjects   text[]  not null default '{hrv}',
  streak     jsonb   not null default '{"count":0,"lastDate":null,"longest":0}',
  updated_at timestamptz not null default now()
);

alter table public.checklist_config enable row level security;

create policy "checklist_config: all own"
  on public.checklist_config
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
