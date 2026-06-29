-- Parent preferences table
-- Stores notification/digest preferences for parent accounts.

create table public.parent_preferences (
  parent_id       uuid primary key references auth.users(id) on delete cascade,
  digest_enabled  boolean not null default true,
  digest_day      smallint not null default 1
    check (digest_day between 0 and 6),  -- 0=sunday, 1=monday, ...
  locale          text not null default 'hr',
  updated_at      timestamptz not null default now()
);

-- RLS
alter table public.parent_preferences enable row level security;

-- Parent can read their own preferences
create policy "parent_read_own_preferences"
  on public.parent_preferences for select
  using (parent_id = auth.uid());

-- Parent can insert their own preferences
create policy "parent_insert_own_preferences"
  on public.parent_preferences for insert
  with check (parent_id = auth.uid());

-- Parent can update their own preferences
create policy "parent_update_own_preferences"
  on public.parent_preferences for update
  using (parent_id = auth.uid());

-- Auto-update updated_at on changes
create or replace function public.handle_parent_preferences_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger on_parent_preferences_update
  before update on public.parent_preferences
  for each row
  execute function public.handle_parent_preferences_updated_at();
