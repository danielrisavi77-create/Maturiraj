-- Canonical Stripe webhook idempotency ledger.
-- Stores identifiers and processing state only: never the Stripe payload,
-- signature, request headers, customer email, or secret values.

create table if not exists public.stripe_webhook_events (
  event_id         text primary key,
  event_type       text not null,
  status           text not null default 'processing',
  claim_token      uuid,
  attempt_count    integer not null default 1,
  claimed_at       timestamptz,
  lease_expires_at timestamptz,
  processed_at     timestamptz,
  failed_at        timestamptz,
  last_error_code  text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),

  constraint stripe_webhook_events_event_id_length
    check (char_length(event_id) between 1 and 255),
  constraint stripe_webhook_events_event_type_length
    check (char_length(event_type) between 1 and 128),
  constraint stripe_webhook_events_status_check
    check (status in ('processing', 'processed', 'failed')),
  constraint stripe_webhook_events_attempt_count_check
    check (attempt_count > 0),
  constraint stripe_webhook_events_error_code_length
    check (last_error_code is null or char_length(last_error_code) <= 64)
);

create index if not exists stripe_webhook_events_status_lease_idx
  on public.stripe_webhook_events (status, lease_expires_at);

alter table public.stripe_webhook_events enable row level security;

-- No anon/authenticated policies are created. Only the service role can use
-- the table and the three SECURITY DEFINER state-transition functions.
revoke all on table public.stripe_webhook_events from public;
revoke all on table public.stripe_webhook_events from anon;
revoke all on table public.stripe_webhook_events from authenticated;
grant select, insert, update on table public.stripe_webhook_events to service_role;

create or replace function public.claim_stripe_webhook_event(
  p_event_id text,
  p_event_type text
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_event public.stripe_webhook_events%rowtype;
  v_claim_token uuid := gen_random_uuid();
begin
  if p_event_id is null or char_length(p_event_id) not between 1 and 255 then
    raise exception 'invalid Stripe event id' using errcode = '22023';
  end if;
  if p_event_type is null or char_length(p_event_type) not between 1 and 128 then
    raise exception 'invalid Stripe event type' using errcode = '22023';
  end if;

  insert into public.stripe_webhook_events (
    event_id,
    event_type,
    status,
    claim_token,
    attempt_count,
    claimed_at,
    lease_expires_at,
    updated_at
  )
  values (
    p_event_id,
    p_event_type,
    'processing',
    v_claim_token,
    1,
    now(),
    now() + interval '5 minutes',
    now()
  )
  on conflict (event_id) do nothing
  returning * into v_event;

  if found then
    return jsonb_build_object(
      'status', 'claimed',
      'claim_token', v_event.claim_token,
      'attempt_count', v_event.attempt_count
    );
  end if;

  -- Serialize duplicate deliveries and retries for this event ID.
  select *
    into v_event
    from public.stripe_webhook_events
   where event_id = p_event_id
   for update;

  if v_event.event_type <> p_event_type then
    raise exception 'Stripe event type mismatch for existing event id'
      using errcode = '22023';
  end if;

  if v_event.status = 'processed' then
    return jsonb_build_object(
      'status', 'processed',
      'claim_token', null,
      'attempt_count', v_event.attempt_count
    );
  end if;

  if v_event.status = 'processing' and v_event.lease_expires_at > now() then
    return jsonb_build_object(
      'status', 'in_progress',
      'claim_token', null,
      'attempt_count', v_event.attempt_count
    );
  end if;

  -- Failed deliveries and expired processing leases are retryable.
  v_claim_token := gen_random_uuid();
  update public.stripe_webhook_events
     set status = 'processing',
         claim_token = v_claim_token,
         attempt_count = attempt_count + 1,
         claimed_at = now(),
         lease_expires_at = now() + interval '5 minutes',
         processed_at = null,
         failed_at = null,
         last_error_code = null,
         updated_at = now()
   where event_id = p_event_id
     and (
       status = 'failed'
       or (status = 'processing' and lease_expires_at <= now())
     )
  returning * into v_event;

  if not found then
    return jsonb_build_object(
      'status', 'in_progress',
      'claim_token', null,
      'attempt_count', v_event.attempt_count
    );
  end if;

  return jsonb_build_object(
    'status', 'claimed',
    'claim_token', v_event.claim_token,
    'attempt_count', v_event.attempt_count
  );
end;
$$;

create or replace function public.complete_stripe_webhook_event(
  p_event_id text,
  p_claim_token uuid
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_rows integer;
begin
  if p_event_id is null or p_claim_token is null then
    return false;
  end if;

  update public.stripe_webhook_events
     set status = 'processed',
         claim_token = null,
         processed_at = now(),
         failed_at = null,
         lease_expires_at = null,
         last_error_code = null,
         updated_at = now()
   where event_id = p_event_id
     and status = 'processing'
     and claim_token = p_claim_token;

  get diagnostics v_rows = row_count;
  return v_rows = 1;
end;
$$;

create or replace function public.fail_stripe_webhook_event(
  p_event_id text,
  p_claim_token uuid,
  p_error_code text
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_rows integer;
  v_error_code text;
begin
  if p_event_id is null or p_claim_token is null then
    return false;
  end if;

  -- Store a bounded machine code only, never a provider error or payload.
  v_error_code := left(
    regexp_replace(upper(coalesce(p_error_code, 'WEBHOOK_PROCESSING_FAILED')), '[^A-Z0-9_:-]', '', 'g'),
    64
  );

  update public.stripe_webhook_events
     set status = 'failed',
         claim_token = null,
         failed_at = now(),
         lease_expires_at = null,
         last_error_code = nullif(v_error_code, ''),
         updated_at = now()
   where event_id = p_event_id
     and status = 'processing'
     and claim_token = p_claim_token;

  get diagnostics v_rows = row_count;
  return v_rows = 1;
end;
$$;

revoke all on function public.claim_stripe_webhook_event(text, text) from public;
revoke all on function public.claim_stripe_webhook_event(text, text) from anon;
revoke all on function public.claim_stripe_webhook_event(text, text) from authenticated;
grant execute on function public.claim_stripe_webhook_event(text, text) to service_role;

revoke all on function public.complete_stripe_webhook_event(text, uuid) from public;
revoke all on function public.complete_stripe_webhook_event(text, uuid) from anon;
revoke all on function public.complete_stripe_webhook_event(text, uuid) from authenticated;
grant execute on function public.complete_stripe_webhook_event(text, uuid) to service_role;

revoke all on function public.fail_stripe_webhook_event(text, uuid, text) from public;
revoke all on function public.fail_stripe_webhook_event(text, uuid, text) from anon;
revoke all on function public.fail_stripe_webhook_event(text, uuid, text) from authenticated;
grant execute on function public.fail_stripe_webhook_event(text, uuid, text) to service_role;

comment on table public.stripe_webhook_events is
  'Payload-free Stripe event processing ledger; service-role access only.';
