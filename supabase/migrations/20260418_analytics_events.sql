-- Unified analytics events table
-- Zamijenjuje/proširuje stari prijemni_events
create table if not exists public.analytics_events (
  id           bigserial primary key,
  session_id   text not null,
  user_id      uuid references auth.users(id) on delete set null,

  event_name   text not null,
  fakultet_id  text,
  studij_id    text,
  tab          text,
  meta         jsonb default '{}'::jsonb,

  url          text,
  referrer     text,

  created_at   timestamptz default now()
);

-- Indexes za najčešće query-je
create index if not exists idx_ae_event_name on public.analytics_events(event_name, created_at desc);
create index if not exists idx_ae_user_event on public.analytics_events(user_id, event_name, created_at desc) where user_id is not null;
create index if not exists idx_ae_session    on public.analytics_events(session_id, created_at desc);
create index if not exists idx_ae_studij     on public.analytics_events(studij_id, event_name, created_at desc) where studij_id is not null;
-- idx_ae_date removed: date_trunc on timestamptz is STABLE not IMMUTABLE
-- Use idx_ae_event_name for date-range + event queries

-- Partitioning by month ako volumen postane velik (prep):
-- (Zakomentirano — enable kad events > 10M/month)
-- create index idx_ae_created_at on analytics_events(created_at);

-- RLS: umetanje je public (svi mogu insertati vlastite eventi)
alter table public.analytics_events enable row level security;

drop policy if exists "ae_insert_public" on public.analytics_events;
create policy "ae_insert_public" on public.analytics_events for insert
  with check (
    (auth.uid() is not null and user_id = auth.uid())
    or (auth.uid() is null and user_id is null)
  );

-- Read: samo service role (admin, ne expose user behaviour)
-- Nema select policy za authenticated = default deny

-- Agregirani views za admin dashboard (javno readable, nema PII)
create or replace view public.event_stats_daily as
select
  date_trunc('day', created_at) as day,
  event_name,
  count(*) as event_count,
  count(distinct session_id) as unique_sessions,
  count(distinct user_id) filter (where user_id is not null) as unique_users
from public.analytics_events
where created_at > now() - interval '90 days'
group by 1, 2;

grant select on public.event_stats_daily to authenticated;

create or replace view public.funnel_prijemni as
select
  date_trunc('week', created_at) as week,
  count(*) filter (where event_name = 'prijemni_page_view') as page_views,
  count(distinct session_id) filter (where event_name = 'prijemni_studij_view') as studij_views,
  count(distinct session_id) filter (where event_name = 'matcher_open') as matcher_opens,
  count(distinct session_id) filter (where event_name = 'matcher_saved') as matcher_completions,
  count(distinct session_id) filter (where event_name = 'kalkulator_threshold_crossed') as magic_moments,
  count(distinct session_id) filter (where event_name = 'paywall_hit') as paywall_hits,
  count(distinct session_id) filter (where event_name = 'billing_upgrade_click') as upgrade_clicks,
  count(distinct session_id) filter (where event_name = 'billing_upgrade_completed') as conversions
from public.analytics_events
where created_at > now() - interval '12 weeks'
group by 1
order by 1 desc;

grant select on public.funnel_prijemni to authenticated;

-- Conversion rates computed view
create or replace view public.conversion_rates as
with base as (
  select
    date_trunc('week', created_at) as week,
    count(distinct session_id) filter (where event_name = 'prijemni_page_view') as page_views,
    count(distinct session_id) filter (where event_name = 'kalkulator_threshold_crossed') as magic_moments,
    count(distinct session_id) filter (where event_name = 'paywall_hit') as paywall_hits,
    count(distinct session_id) filter (where event_name = 'billing_upgrade_completed') as conversions
  from public.analytics_events
  where created_at > now() - interval '12 weeks'
  group by 1
)
select
  week,
  page_views,
  magic_moments,
  paywall_hits,
  conversions,
  round(100.0 * magic_moments / nullif(page_views, 0), 1) as magic_moment_rate,
  round(100.0 * paywall_hits / nullif(page_views, 0), 1) as paywall_rate,
  round(100.0 * conversions / nullif(paywall_hits, 0), 1) as paywall_to_paid_rate,
  round(100.0 * conversions / nullif(page_views, 0), 2) as overall_cvr
from base
order by week desc;

grant select on public.conversion_rates to authenticated;
