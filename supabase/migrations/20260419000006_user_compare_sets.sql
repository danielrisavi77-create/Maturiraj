create table if not exists public.user_compare_sets (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  name        text not null check (char_length(name) between 1 and 80),
  studij_ids  text[] not null check (array_length(studij_ids, 1) between 2 and 4),
  created_at  timestamptz not null default now()
);

-- Each user may save up to 10 sets (enforced at app level; belt-and-suspenders index)
create index if not exists user_compare_sets_user_id_idx
  on public.user_compare_sets (user_id, created_at desc);

-- RLS
alter table public.user_compare_sets enable row level security;

create policy "Users manage own compare sets"
  on public.user_compare_sets
  for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);
