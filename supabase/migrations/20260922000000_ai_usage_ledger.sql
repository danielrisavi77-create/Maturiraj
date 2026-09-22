-- Server-only usage ledger. Never grant these functions to browser roles.
create table public.ai_usage_monthly (
  user_id uuid not null references auth.users(id) on delete cascade,
  period date not null,
  spent_microusd bigint not null default 0 check (spent_microusd >= 0),
  reserved_microusd bigint not null default 0 check (reserved_microusd >= 0),
  primary key (user_id, period)
);

create table public.ai_usage_reservations (
  request_id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  period date not null,
  feature text not null,
  model text not null,
  reserved_microusd bigint not null check (reserved_microusd > 0),
  actual_microusd bigint check (actual_microusd >= 0),
  state text not null default 'reserved' check (state in ('reserved','uncertain','completed','released')),
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);
create index ai_usage_reservations_user_period_idx on public.ai_usage_reservations(user_id, period);

create table public.ai_usage_events (
  request_id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  period date not null,
  feature text not null,
  model text not null,
  input_tokens integer not null check (input_tokens >= 0),
  output_tokens integer not null check (output_tokens >= 0),
  cache_read_tokens integer not null check (cache_read_tokens >= 0),
  cache_write_tokens integer not null check (cache_write_tokens >= 0),
  actual_microusd bigint not null check (actual_microusd >= 0),
  price_version text not null,
  created_at timestamptz not null default now()
);
create index ai_usage_events_user_period_idx on public.ai_usage_events(user_id, period);

alter table public.ai_usage_monthly enable row level security;
alter table public.ai_usage_reservations enable row level security;
alter table public.ai_usage_events enable row level security;

create function public.ai_usage_reserve(
  p_user_id uuid, p_request_id uuid, p_feature text, p_model text,
  p_period date, p_budget_microusd bigint, p_reserved_microusd bigint, p_expires_at timestamptz,
  p_message_limit integer default null
) returns boolean language plpgsql security definer set search_path = '' as $$
declare v_spent bigint; v_reserved bigint;
begin
  if p_user_id is null or p_request_id is null or p_feature is null or p_model is null
     or p_period is null or p_budget_microusd is null or p_budget_microusd <= 0
     or p_reserved_microusd is null or p_reserved_microusd <= 0 or p_expires_at <= now()
     or (p_message_limit is not null and p_message_limit <= 0)
  then raise exception 'invalid usage reservation'; end if;

  insert into public.ai_usage_monthly(user_id, period) values (p_user_id, p_period)
  on conflict (user_id, period) do nothing;
  select spent_microusd, reserved_microusd into v_spent, v_reserved
  from public.ai_usage_monthly where user_id = p_user_id and period = p_period for update;
  if exists(select 1 from public.ai_usage_reservations where request_id = p_request_id)
     or v_spent + v_reserved + p_reserved_microusd > p_budget_microusd
     or (p_message_limit is not null and p_feature = 'ai-profesor' and
       (select count(*) from public.ai_usage_reservations where user_id = p_user_id
          and period = p_period and feature = 'ai-profesor' and state <> 'released') >= p_message_limit)
  then return false; end if;
  insert into public.ai_usage_reservations(request_id,user_id,period,feature,model,reserved_microusd,expires_at)
  values (p_request_id,p_user_id,p_period,p_feature,p_model,p_reserved_microusd,p_expires_at);
  update public.ai_usage_monthly set reserved_microusd = reserved_microusd + p_reserved_microusd
  where user_id = p_user_id and period = p_period;
  return true;
end $$;

create function public.ai_usage_complete(
  p_request_id uuid, p_input_tokens integer, p_output_tokens integer,
  p_cache_read_tokens integer, p_cache_write_tokens integer,
  p_actual_microusd bigint, p_price_version text
) returns boolean language plpgsql security definer set search_path = '' as $$
declare v public.ai_usage_reservations%rowtype;
begin
  if p_input_tokens is null or p_input_tokens < 0 or p_output_tokens is null or p_output_tokens < 0
    or p_cache_read_tokens is null or p_cache_read_tokens < 0
    or p_cache_write_tokens is null or p_cache_write_tokens < 0
    or p_actual_microusd is null or p_actual_microusd < 0 or nullif(p_price_version,'') is null
  then raise exception 'invalid usage completion'; end if;
  select * into v from public.ai_usage_reservations where request_id = p_request_id for update;
  if not found then return false; end if;
  if v.state = 'completed' then return true; end if;
  if v.state not in ('reserved','uncertain') then return false; end if;

  insert into public.ai_usage_events(request_id,user_id,period,feature,model,input_tokens,output_tokens,
      cache_read_tokens,cache_write_tokens,actual_microusd,price_version)
  values (v.request_id,v.user_id,v.period,v.feature,v.model,p_input_tokens,p_output_tokens,
      p_cache_read_tokens,p_cache_write_tokens,p_actual_microusd,p_price_version);
  update public.ai_usage_monthly set
    spent_microusd = spent_microusd + p_actual_microusd,
    reserved_microusd = reserved_microusd - v.reserved_microusd
  where user_id = v.user_id and period = v.period;
  update public.ai_usage_reservations set state = 'completed', actual_microusd = p_actual_microusd
  where request_id = p_request_id;
  return true;
end $$;

create function public.ai_usage_mark_uncertain(p_request_id uuid)
returns boolean language plpgsql security definer set search_path = '' as $$
begin
  update public.ai_usage_reservations set state = 'uncertain'
  where request_id = p_request_id and state in ('reserved','uncertain');
  return found;
end $$;

create function public.ai_usage_release(p_request_id uuid)
returns boolean language plpgsql security definer set search_path = '' as $$
declare v public.ai_usage_reservations%rowtype;
begin
  select * into v from public.ai_usage_reservations where request_id = p_request_id for update;
  if not found or v.state <> 'reserved' then return false; end if;
  update public.ai_usage_monthly set reserved_microusd = reserved_microusd - v.reserved_microusd
  where user_id = v.user_id and period = v.period;
  update public.ai_usage_reservations set state = 'released' where request_id = p_request_id;
  return true;
end $$;

create function public.ai_usage_stats(p_user_id uuid, p_period date)
returns jsonb language sql stable security definer set search_path = '' as $$
  select jsonb_build_object(
    'usedMicroUsd', coalesce((select spent_microusd from public.ai_usage_monthly where user_id = p_user_id and period = p_period),0),
    'reservedMicroUsd', coalesce((select reserved_microusd from public.ai_usage_monthly where user_id = p_user_id and period = p_period),0),
    'uncertainCount', (select count(*) from public.ai_usage_reservations where user_id = p_user_id and period = p_period and state = 'uncertain'),
    'period', p_period,
    'messageCount', (select count(*) from public.ai_usage_reservations
      where user_id = p_user_id and period = p_period and feature = 'ai-profesor' and state <> 'released')
  )
$$;

create function public.ai_usage_prune()
returns void language plpgsql security definer set search_path = '' as $$
begin
  delete from public.ai_usage_events where created_at < now() - interval '90 days';
  delete from public.ai_usage_reservations where state in ('completed','released') and created_at < now() - interval '90 days';
  delete from public.ai_usage_monthly where period < date_trunc('month', now() - interval '13 months')::date
    and not exists(select 1 from public.ai_usage_reservations r
      where r.user_id = ai_usage_monthly.user_id and r.period = ai_usage_monthly.period
        and r.state in ('reserved','uncertain'));
end $$;

revoke all on public.ai_usage_monthly, public.ai_usage_reservations, public.ai_usage_events from public, anon, authenticated;
revoke all on function public.ai_usage_reserve(uuid,uuid,text,text,date,bigint,bigint,timestamptz,integer) from public, anon, authenticated;
revoke all on function public.ai_usage_complete(uuid,integer,integer,integer,integer,bigint,text) from public, anon, authenticated;
revoke all on function public.ai_usage_mark_uncertain(uuid) from public, anon, authenticated;
revoke all on function public.ai_usage_release(uuid) from public, anon, authenticated;
revoke all on function public.ai_usage_stats(uuid,date) from public, anon, authenticated;
revoke all on function public.ai_usage_prune() from public, anon, authenticated;
grant execute on function public.ai_usage_reserve(uuid,uuid,text,text,date,bigint,bigint,timestamptz,integer) to service_role;
grant execute on function public.ai_usage_complete(uuid,integer,integer,integer,integer,bigint,text) to service_role;
grant execute on function public.ai_usage_mark_uncertain(uuid) to service_role;
grant execute on function public.ai_usage_release(uuid) to service_role;
grant execute on function public.ai_usage_stats(uuid,date) to service_role;
grant execute on function public.ai_usage_prune() to service_role;
