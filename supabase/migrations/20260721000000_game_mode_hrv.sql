-- Hrvatski Game Mode pilot: normalized attempts, concept mastery and resumable sessions.
insert into public.ab_experiments (id, name, description, variants, weights, status)
values ('hrv_runner_pilot', 'Hrvatski Runner pilot', 'Isti manifest i post-check: klasični kviz nasuprot Runner prikazu.', array['control','runner'], array[50,50], 'active')
on conflict (id) do nothing;

create table if not exists public.game_sessions (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_id text not null check (subject_id = 'hrv'),
  recipe text not null check (recipe in ('quick_review', 'mistake_review', 'chapter_boost')),
  seed bigint not null,
  status text not null default 'active' check (status in ('active', 'completed', 'abandoned')),
  manifest jsonb not null,
  checkpoint jsonb not null default '{}'::jsonb,
  content_version text not null,
  runtime_version text not null,
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.learning_attempt_events (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references public.game_sessions(id) on delete set null,
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_id text not null check (subject_id = 'hrv'),
  question_id text not null,
  concept_id text not null,
  mode text not null check (mode in ('runner', 'classic_quiz', 'post_check', 'exam')),
  classification text not null default 'learning' check (classification in ('learning', 'motor', 'technical', 'suspend')),
  answer_id text,
  correct boolean not null,
  evidence_weight numeric(4,2) not null check (evidence_weight >= 0 and evidence_weight <= 1),
  response_ms integer check (response_ms is null or response_ms >= 0),
  sequence integer not null,
  source_event_key text unique,
  occurred_at timestamptz not null default now(),
  unique(session_id, sequence)
);

create table if not exists public.user_concept_mastery (
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_id text not null check (subject_id = 'hrv'),
  concept_id text not null,
  alpha numeric(12,4) not null default 1,
  beta numeric(12,4) not null default 1,
  mastery numeric(6,5) not null default .5 check (mastery >= 0 and mastery <= 1),
  has_non_runner_evidence boolean not null default false,
  last_attempt_at timestamptz,
  next_review_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key(user_id, concept_id)
);

create table if not exists public.game_question_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null,
  reason text not null check (reason in ('incorrect', 'outdated', 'ambiguous', 'other')),
  details text,
  status text not null default 'open' check (status in ('open', 'reviewed', 'resolved', 'dismissed')),
  created_at timestamptz not null default now()
);

create table if not exists public.game_user_migrations (
  user_id uuid not null references auth.users(id) on delete cascade,
  migration_version text not null,
  migrated_at timestamptz not null default now(),
  details jsonb not null default '{}'::jsonb,
  primary key(user_id, migration_version)
);

create index if not exists game_sessions_user_started_idx on public.game_sessions(user_id, started_at desc);
create index if not exists attempt_events_user_question_idx on public.learning_attempt_events(user_id, question_id);
create index if not exists mastery_user_review_idx on public.user_concept_mastery(user_id, next_review_at);

alter table public.game_sessions enable row level security;
alter table public.learning_attempt_events enable row level security;
alter table public.user_concept_mastery enable row level security;
alter table public.game_question_reports enable row level security;
alter table public.game_user_migrations enable row level security;

create policy "users read own game sessions" on public.game_sessions for select using (auth.uid() = user_id);
create policy "users read own attempts" on public.learning_attempt_events for select using (auth.uid() = user_id);
create policy "users read own mastery" on public.user_concept_mastery for select using (auth.uid() = user_id);
create policy "users create own reports" on public.game_question_reports for insert with check (auth.uid() = user_id);
create policy "users read own reports" on public.game_question_reports for select using (auth.uid() = user_id);
create policy "users read own game migrations" on public.game_user_migrations for select using (auth.uid() = user_id);
