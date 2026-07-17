-- SEC-P0-01: profiles identity, entitlement, and role fields are server-maintained.
--
-- This migration intentionally combines three independent controls:
--   1. authenticated receives UPDATE only on non-sensitive columns;
--   2. RLS restricts those writes to the caller's own profile row;
--   3. a BEFORE UPDATE trigger rejects protected OLD/NEW changes even if a
--      future grant or policy accidentally becomes broader.
--
-- Service-role requests and trusted database maintenance roles remain able to
-- update protected fields. The trigger is SECURITY INVOKER so current_user is
-- the role executing the UPDATE, not the function owner.

alter table public.profiles enable row level security;

-- Replace the broad own-row policy with an explicit USING + WITH CHECK pair.
drop policy if exists "profiles update own" on public.profiles;
create policy "profiles update own"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- The older role-only restrictive policy is superseded by the column grants
-- and OLD/NEW trigger below. Removing it also avoids a same-table policy
-- subquery for ordinary profile preference updates.
drop policy if exists "Only admins can change role" on public.profiles;

create or replace function public.guard_profile_entitlement_fields()
returns trigger
language plpgsql
security invoker
set search_path = pg_catalog, public
as $function$
declare
  protected_column text;
  protected_columns constant text[] := array[
    'id',
    'email',
    'tier',
    'plan_type',
    'pro_expires_at',
    'role',
    'stripe_customer_id',
    'stripe_subscription_id',
    'stripe_price_id',
    'subscription_status',
    'agent_access',
    'created_at'
  ];
begin
  -- Supabase service-role clients bypass RLS but still execute triggers.
  -- Direct migrations/maintenance commonly execute as postgres or
  -- supabase_admin. These are the only trusted bypass identities here.
  if current_user in ('service_role', 'postgres', 'supabase_admin') then
    return new;
  end if;

  foreach protected_column in array protected_columns loop
    if (to_jsonb(new) -> protected_column)
       is distinct from
       (to_jsonb(old) -> protected_column) then
      raise exception using
        errcode = '42501',
        message = format(
          'profiles.%I is maintained by a trusted server context',
          protected_column
        );
    end if;
  end loop;

  return new;
end;
$function$;

drop trigger if exists guard_profile_entitlement_fields on public.profiles;
create trigger guard_profile_entitlement_fields
  before update on public.profiles
  for each row
  execute function public.guard_profile_entitlement_fields();

-- Remove any table-wide UPDATE inherited from earlier default grants. A
-- table-level grant would otherwise override column-level restrictions.
revoke update on table public.profiles from public, anon, authenticated;

-- Remove any pre-existing column grants for guaranteed protected
-- columns as well. These columns exist because this migration runs after the
-- historical plan, role, and tier migrations.
revoke update (email, tier, plan_type, pro_expires_at, role)
  on table public.profiles
  from public, anon, authenticated;

-- Preserve only inventoried ordinary own-profile editing. This is a positive
-- allowlist: newly added columns remain non-writable until a later migration
-- explicitly classifies them as safe for authenticated users.
do $block$
declare
  allowed_columns text;
  denied_columns text;
  allowed_profile_columns constant text[] := array[
    'full_name',
    'email_reminders',
    'preferences',
    'updated_at'
  ];
begin
  select string_agg(format('%I', column_name), ', ' order by ordinal_position)
    into denied_columns
  from information_schema.columns
  where table_schema = 'public'
    and table_name = 'profiles'
    and column_name = any (array[
      'id',
      'email',
      'tier',
      'plan_type',
      'pro_expires_at',
      'role',
      'stripe_customer_id',
      'stripe_subscription_id',
      'stripe_price_id',
      'subscription_status',
      'agent_access',
      'created_at'
    ]);

  if denied_columns is not null then
    execute format(
      'revoke update (%s) on table public.profiles from public, anon, authenticated',
      denied_columns
    );
  end if;

  select string_agg(format('%I', column_name), ', ' order by ordinal_position)
    into allowed_columns
  from information_schema.columns
  where table_schema = 'public'
    and table_name = 'profiles'
    and column_name = any (allowed_profile_columns);

  if allowed_columns is not null then
    execute format(
      'grant update (%s) on table public.profiles to authenticated',
      allowed_columns
    );
  end if;
end;
$block$;

-- Explicitly preserve the trusted PostgREST service-role write path. Table
-- owners such as postgres/supabase_admin retain owner privileges separately.
grant update on table public.profiles to service_role;
