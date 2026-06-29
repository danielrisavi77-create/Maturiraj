create table if not exists public.reminders (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  studij_id    text not null references public.studiji(id) on delete cascade,
  tip          text not null check (tip in ('prijava_do', 'ispit', 'rezultati')),

  -- Computed from studij
  target_date  date not null,

  -- State
  email        boolean default true,
  push         boolean default false,
  status       text default 'active' check (status in ('active', 'sent', 'canceled')),

  created_at   timestamptz default now(),
  sent_at      timestamptz,

  unique(user_id, studij_id, tip)
);

create index if not exists idx_reminders_user on public.reminders(user_id);
create index if not exists idx_reminders_target on public.reminders(target_date) where status = 'active';

alter table public.reminders enable row level security;

drop policy if exists "reminders_own" on public.reminders;
create policy "reminders_own" on public.reminders
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create trigger trg_reminders_upd before update on public.reminders
  for each row execute function public.tg_set_updated_at();
