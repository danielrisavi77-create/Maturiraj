-- Parent-Children linking table
-- Replaces the old user_metadata.childEmail approach with proper relational model.
-- Supports multi-child, status tracking, and RLS-based access.

create table public.parent_children (
  id          uuid primary key default gen_random_uuid(),
  parent_id   uuid not null references auth.users(id) on delete cascade,
  child_id    uuid references auth.users(id) on delete set null,
  child_email text not null,
  child_name  text,
  status      text not null default 'pending'
    check (status in ('pending', 'linked', 'declined')),
  linked_at   timestamptz,
  created_at  timestamptz not null default now(),

  unique(parent_id, child_email)
);

-- Index for fast parent lookup
create index idx_parent_children_parent on public.parent_children(parent_id);

-- Index for child lookup (child seeing who tracks them)
create index idx_parent_children_child on public.parent_children(child_id);

-- RLS
alter table public.parent_children enable row level security;

-- Parent can read their own children
create policy "parent_read_own_children"
  on public.parent_children for select
  using (parent_id = auth.uid());

-- Parent can insert (link a child)
create policy "parent_insert_child"
  on public.parent_children for insert
  with check (parent_id = auth.uid());

-- Parent can update their own rows (e.g. update name)
create policy "parent_update_own_children"
  on public.parent_children for update
  using (parent_id = auth.uid());

-- Parent can delete their own rows (unlink)
create policy "parent_delete_own_children"
  on public.parent_children for delete
  using (parent_id = auth.uid());

-- Child can see who is tracking them
create policy "child_read_linked_parents"
  on public.parent_children for select
  using (child_id = auth.uid());

-- Child can update status (accept/decline)
create policy "child_update_link_status"
  on public.parent_children for update
  using (child_id = auth.uid());

------------------------------------------------------
-- RLS policies for parent reading child data
------------------------------------------------------

-- Parent can read child's activity_events
create policy "parent_read_child_activity"
  on public.activity_events for select
  using (
    user_id in (
      select child_id from public.parent_children
      where parent_id = auth.uid()
        and status = 'linked'
        and child_id is not null
    )
  );

-- Parent can read child's profile
create policy "parent_read_child_profile"
  on public.profiles for select
  using (
    id in (
      select child_id from public.parent_children
      where parent_id = auth.uid()
        and status = 'linked'
        and child_id is not null
    )
  );

-- Parent can read child's checklist_progress
create policy "parent_read_child_checklist"
  on public.checklist_progress for select
  using (
    user_id in (
      select child_id from public.parent_children
      where parent_id = auth.uid()
        and status = 'linked'
        and child_id is not null
    )
  );

-- Parent can read child's study_plans
create policy "parent_read_child_plans"
  on public.study_plans for select
  using (
    user_id in (
      select child_id from public.parent_children
      where parent_id = auth.uid()
        and status = 'linked'
        and child_id is not null
    )
  );

-- Parent can read child's plan_weeks
create policy "parent_read_child_plan_weeks"
  on public.plan_weeks for select
  using (
    plan_id in (
      select sp.id from public.study_plans sp
      inner join public.parent_children pc on pc.child_id = sp.user_id
      where pc.parent_id = auth.uid()
        and pc.status = 'linked'
        and pc.child_id is not null
    )
  );
