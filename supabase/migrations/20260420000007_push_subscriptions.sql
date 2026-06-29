create table if not exists public.push_subscriptions (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid references auth.users(id) on delete cascade,
  session_id     text,  -- za anonymne

  endpoint       text not null unique,
  p256dh         text not null,
  auth_key       text not null,  -- 'auth' je rezervirana riječ u PG

  user_agent     text,
  platform       text,  -- 'desktop', 'mobile-ios', 'mobile-android'

  studij_ids     text[] default '{}',  -- za koje studije user želi pushove

  active         boolean default true,
  last_sent_at   timestamptz,

  created_at     timestamptz default now(),
  updated_at     timestamptz default now(),

  constraint push_user_or_session check (user_id is not null or session_id is not null)
);

create index if not exists idx_push_user on public.push_subscriptions(user_id);
create index if not exists idx_push_active on public.push_subscriptions(active, last_sent_at);

alter table public.push_subscriptions enable row level security;

drop policy if exists "push_own_rw" on public.push_subscriptions;
create policy "push_own_rw" on public.push_subscriptions for all
  using (
    (auth.uid() is not null and user_id = auth.uid())
    or (auth.uid() is null and session_id is not null)
  )
  with check (
    (auth.uid() is not null and user_id = auth.uid())
    or (auth.uid() is null and session_id is not null)
  );

create trigger trg_push_subs_upd before update on public.push_subscriptions
  for each row execute function public.tg_set_updated_at();
