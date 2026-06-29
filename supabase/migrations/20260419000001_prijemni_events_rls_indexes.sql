-- Extra indexes for new event types
create index if not exists idx_prijemni_events_user_event
  on public.prijemni_events(user_id, event_type, created_at desc);

create index if not exists idx_prijemni_events_fakultet_event
  on public.prijemni_events(fakultet_id, event_type, created_at desc);

-- RLS
alter table public.prijemni_events enable row level security;

-- All users (including anonymous) can insert their own events
drop policy if exists "events_insert_own" on public.prijemni_events;
create policy "events_insert_own" on public.prijemni_events
  for insert with check (
    (auth.uid() = user_id) or (user_id is null)
  );

-- Read access restricted to service role only (default deny for authenticated)
