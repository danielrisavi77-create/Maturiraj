-- Discere canonical result v2.
-- Keeps legacy math columns intact while preserving exact point-based scoring
-- for generic subjects such as Biology.

alter table public.sim_progress
  add column if not exists result_version integer not null default 1,
  add column if not exists score_pct numeric(5,2),
  add column if not exists earned_points numeric(8,2),
  add column if not exists max_points numeric(8,2),
  add column if not exists manual_pending boolean not null default false,
  add column if not exists unanswered jsonb not null default '[]'::jsonb,
  add column if not exists flagged jsonb not null default '[]'::jsonb;

alter table public.sim_progress
  drop constraint if exists sim_progress_score_pct_check;

alter table public.sim_progress
  add constraint sim_progress_score_pct_check
  check (score_pct is null or (score_pct >= 0 and score_pct <= 100));

comment on column public.sim_progress.result_version is
  '1 = legacy simulator payload, 2 = canonical Discere result contract';
comment on column public.sim_progress.score_pct is
  'Exact percentage for canonical results; legacy pct integer remains for compatibility.';
comment on column public.sim_progress.earned_points is
  'Exact earned points for point-based exams.';
comment on column public.sim_progress.max_points is
  'Exact maximum points for point-based exams.';
