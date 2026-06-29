-- Parent read access to child's Medicinar Mode data
-- Extends 20260407000000_parent_children.sql with medicinar-specific tables

-- Helper: check if requester is a linked parent of a given user_id
-- (inline subquery pattern used instead of a helper function for simplicity)

-- user_predmet_progress
drop policy if exists "parent_read_child_predmet_progress" on public.user_predmet_progress;
create policy "parent_read_child_predmet_progress"
  on public.user_predmet_progress for select
  using (
    user_id in (
      select child_id from public.parent_children
      where parent_id = auth.uid()
        and status = 'linked'
        and child_id is not null
    )
  );

-- user_target_studiji
drop policy if exists "parent_read_child_targets" on public.user_target_studiji;
create policy "parent_read_child_targets"
  on public.user_target_studiji for select
  using (
    user_id in (
      select child_id from public.parent_children
      where parent_id = auth.uid()
        and status = 'linked'
        and child_id is not null
    )
  );

-- simulator_attempts (read-only; parent can see scores, not question contents)
drop policy if exists "parent_read_child_simulator_attempts" on public.simulator_attempts;
create policy "parent_read_child_simulator_attempts"
  on public.simulator_attempts for select
  using (
    user_id in (
      select child_id from public.parent_children
      where parent_id = auth.uid()
        and status = 'linked'
        and child_id is not null
    )
  );
