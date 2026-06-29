-- Migration: add archived_at + archived_reason to user_target_studiji
-- Used by cron /api/cron/medicinar/archive-expired-targets
-- Runs daily — sets active=false 30 days after ispit_iso

alter table public.user_target_studiji
  add column if not exists archived_at     timestamptz,
  add column if not exists archived_reason text;  -- 'exam_expired' | 'manual'

comment on column public.user_target_studiji.archived_at     is 'When this target was deactivated';
comment on column public.user_target_studiji.archived_reason is 'Why: exam_expired (cron) or manual (user)';

-- Index for the cron query — active targets with an exam date in the past
create index if not exists idx_target_active_studij
  on public.user_target_studiji(active, studij_id)
  where active = true;
