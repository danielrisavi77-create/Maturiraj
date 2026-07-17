-- Parent consent V2 — fail-closed replacement for parent-controlled linking.
--
-- IMPORTANT: legacy rows did not prove child consent. Existing linked/pending
-- rows are intentionally reset to pending and detached below. Restoring access
-- requires a fresh decision by the authenticated child; rolling back code alone
-- must not silently restore the old trust state.

begin;

alter table public.parent_children
  add column if not exists consent_version text,
  add column if not exists consent_decided_at timestamptz;

-- Invalidate every legacy relationship, including declined rows. No legacy
-- child_id or status survives as evidence of V2 consent.
update public.parent_children
set
  status = 'pending',
  child_id = null,
  linked_at = null,
  consent_version = null,
  consent_decided_at = null;

alter table public.parent_children
  add constraint parent_children_consent_version_v2
    check (consent_version is null or consent_version = 'v2') not valid,
  add constraint parent_children_consent_state_v2
    check (
      (
        status = 'pending'
        and child_id is null
        and linked_at is null
        and consent_version is null
        and consent_decided_at is null
      )
      or
      (
        status = 'linked'
        and child_id is not null
        and linked_at is not null
        and consent_version = 'v2'
        and consent_decided_at is not null
      )
      or
      (
        status = 'declined'
        and child_id is null
        and linked_at is null
        and consent_version = 'v2'
        and consent_decided_at is not null
      )
    ) not valid;

alter table public.parent_children
  validate constraint parent_children_consent_version_v2;
alter table public.parent_children
  validate constraint parent_children_consent_state_v2;

-- Remove every legacy path that let either side directly mutate link state.
drop policy if exists "parent_insert_child" on public.parent_children;
drop policy if exists "parent_update_own_children" on public.parent_children;
drop policy if exists "child_update_link_status" on public.parent_children;
drop policy if exists "parent_read_own_children" on public.parent_children;
drop policy if exists "parent_delete_own_children" on public.parent_children;
drop policy if exists "child_read_linked_parents" on public.parent_children;

revoke update on table public.parent_children from public, anon, authenticated;
grant select, insert, delete on table public.parent_children to authenticated;

-- Resolve the current user's email from auth.users, not merely from an
-- unconfirmed JWT claim. The JWT value must still agree with the canonical,
-- confirmed auth.users value so a stale token cannot select invitations.
create or replace function public.current_verified_email_v2()
returns text
language sql
stable
security definer
set search_path = pg_catalog
as $$
  select lower(btrim(u.email))
  from auth.users as u
  where u.id = auth.uid()
    and u.email_confirmed_at is not null
    and lower(btrim(u.email)) = lower(btrim(coalesce(auth.jwt() ->> 'email', '')))
$$;

revoke all on function public.current_verified_email_v2() from public, anon;
grant execute on function public.current_verified_email_v2() to authenticated;

-- Parent reads and deletes remain own-row only.
create policy "parent_read_own_children_v2"
  on public.parent_children for select
  to authenticated
  using (parent_id = auth.uid());

create policy "parent_delete_own_children_v2"
  on public.parent_children for delete
  to authenticated
  using (parent_id = auth.uid());

-- A parent can create only a normalized, detached, pending invitation.
create policy "parent_insert_pending_invitation_v2"
  on public.parent_children for insert
  to authenticated
  with check (
    parent_id = auth.uid()
    and child_id is null
    and status = 'pending'
    and linked_at is null
    and consent_version is null
    and consent_decided_at is null
    and child_email = lower(btrim(child_email))
    and char_length(child_email) between 3 and 254
    and child_email ~ '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
    and child_email <> lower(btrim(coalesce(auth.jwt() ->> 'email', '')))
  );

-- Once accepted, the child may see only their own V2-approved relationship.
create policy "child_read_linked_parents_v2"
  on public.parent_children for select
  to authenticated
  using (
    child_id = auth.uid()
    and status = 'linked'
    and consent_version = 'v2'
    and consent_decided_at is not null
  );

-- A confirmed child account can discover only its own still-pending invites.
-- This supplies the invitation id needed by the consent endpoint without an
-- admin lookup or account-enumeration side channel.
create policy "child_read_pending_invitations_v2"
  on public.parent_children for select
  to authenticated
  using (
    status = 'pending'
    and child_id is null
    and linked_at is null
    and consent_version is null
    and consent_decided_at is null
    and public.current_verified_email_v2() is not null
    and lower(btrim(child_email)) = public.current_verified_email_v2()
  );

create or replace function public.respond_to_parent_invitation_v2(
  p_invitation_id uuid,
  p_decision text
)
returns table (
  id uuid,
  status text,
  child_id uuid,
  linked_at timestamptz,
  consent_decided_at timestamptz
)
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_child_id uuid := auth.uid();
  v_child_email text := public.current_verified_email_v2();
  v_decision text := lower(btrim(coalesce(p_decision, '')));
  v_link public.parent_children%rowtype;
begin
  if v_child_id is null or v_child_email = '' then
    raise exception 'Invitation unavailable' using errcode = '42501';
  end if;

  if p_invitation_id is null or v_decision not in ('accept', 'decline') then
    raise exception 'Invalid consent decision' using errcode = '22023';
  end if;

  -- The row lock serializes competing decisions. Replays cannot match the
  -- pending/null-consent predicate after the first successful decision.
  select pc.*
  into v_link
  from public.parent_children as pc
  where pc.id = p_invitation_id
    and pc.status = 'pending'
    and pc.child_id is null
    and pc.consent_version is null
    and pc.consent_decided_at is null
    and lower(btrim(pc.child_email)) = v_child_email
  for update;

  if not found then
    raise exception 'Invitation unavailable or already processed' using errcode = 'P0001';
  end if;

  if v_decision = 'accept' then
    update public.parent_children as pc
    set
      status = 'linked',
      child_id = v_child_id,
      linked_at = now(),
      consent_version = 'v2',
      consent_decided_at = now()
    where pc.id = v_link.id
      and pc.status = 'pending'
    returning pc.* into v_link;
  else
    update public.parent_children as pc
    set
      status = 'declined',
      child_id = null,
      linked_at = null,
      consent_version = 'v2',
      consent_decided_at = now()
    where pc.id = v_link.id
      and pc.status = 'pending'
    returning pc.* into v_link;
  end if;

  if not found then
    raise exception 'Invitation unavailable or already processed' using errcode = 'P0001';
  end if;

  return query
  select
    v_link.id,
    v_link.status,
    v_link.child_id,
    v_link.linked_at,
    v_link.consent_decided_at;
end;
$$;

revoke all on function public.respond_to_parent_invitation_v2(uuid, text) from public, anon;
grant execute on function public.respond_to_parent_invitation_v2(uuid, text) to authenticated;

-- Legacy linked rows must not continue authorizing reads in related tables.
drop policy if exists "parent_read_child_activity" on public.activity_events;
create policy "parent_read_child_activity"
  on public.activity_events for select
  using (
    exists (
      select 1 from public.parent_children pc
      where pc.parent_id = auth.uid()
        and pc.child_id = activity_events.user_id
        and pc.status = 'linked'
        and pc.consent_version = 'v2'
        and pc.consent_decided_at is not null
    )
  );

drop policy if exists "parent_read_child_profile" on public.profiles;
create policy "parent_read_child_profile"
  on public.profiles for select
  using (
    exists (
      select 1 from public.parent_children pc
      where pc.parent_id = auth.uid()
        and pc.child_id = profiles.id
        and pc.status = 'linked'
        and pc.consent_version = 'v2'
        and pc.consent_decided_at is not null
    )
  );

drop policy if exists "parent_read_child_checklist" on public.checklist_progress;
create policy "parent_read_child_checklist"
  on public.checklist_progress for select
  using (
    exists (
      select 1 from public.parent_children pc
      where pc.parent_id = auth.uid()
        and pc.child_id = checklist_progress.user_id
        and pc.status = 'linked'
        and pc.consent_version = 'v2'
        and pc.consent_decided_at is not null
    )
  );

drop policy if exists "parent_read_child_plans" on public.study_plans;
create policy "parent_read_child_plans"
  on public.study_plans for select
  using (
    exists (
      select 1 from public.parent_children pc
      where pc.parent_id = auth.uid()
        and pc.child_id = study_plans.user_id
        and pc.status = 'linked'
        and pc.consent_version = 'v2'
        and pc.consent_decided_at is not null
    )
  );

drop policy if exists "parent_read_child_plan_weeks" on public.plan_weeks;
create policy "parent_read_child_plan_weeks"
  on public.plan_weeks for select
  using (
    exists (
      select 1
      from public.study_plans sp
      join public.parent_children pc on pc.child_id = sp.user_id
      where sp.id = plan_weeks.plan_id
        and pc.parent_id = auth.uid()
        and pc.status = 'linked'
        and pc.consent_version = 'v2'
        and pc.consent_decided_at is not null
    )
  );

drop policy if exists "parent_read_child_predmet_progress" on public.user_predmet_progress;
create policy "parent_read_child_predmet_progress"
  on public.user_predmet_progress for select
  using (
    exists (
      select 1 from public.parent_children pc
      where pc.parent_id = auth.uid()
        and pc.child_id = user_predmet_progress.user_id
        and pc.status = 'linked'
        and pc.consent_version = 'v2'
        and pc.consent_decided_at is not null
    )
  );

drop policy if exists "parent_read_child_targets" on public.user_target_studiji;
create policy "parent_read_child_targets"
  on public.user_target_studiji for select
  using (
    exists (
      select 1 from public.parent_children pc
      where pc.parent_id = auth.uid()
        and pc.child_id = user_target_studiji.user_id
        and pc.status = 'linked'
        and pc.consent_version = 'v2'
        and pc.consent_decided_at is not null
    )
  );

drop policy if exists "parent_read_child_simulator_attempts" on public.simulator_attempts;
create policy "parent_read_child_simulator_attempts"
  on public.simulator_attempts for select
  using (
    exists (
      select 1 from public.parent_children pc
      where pc.parent_id = auth.uid()
        and pc.child_id = simulator_attempts.user_id
        and pc.status = 'linked'
        and pc.consent_version = 'v2'
        and pc.consent_decided_at is not null
    )
  );

commit;
