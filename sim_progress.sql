-- ════════════════════════════════════════════════════════════════════════════
-- maturiraj.hr — Discere simulator progress + tier  (Supabase / Postgres)
-- Columns mirror Sim.onDone payload exactly:
--   { examKey, examLabel, razina, pct, grade, cor, total, answers, qTimes,
--     examMode, topic_breakdown, errorTags }
-- Run in Supabase SQL editor. Idempotent.
-- ════════════════════════════════════════════════════════════════════════════

-- ── profiles (tier source for paywall/gate; Stripe webhook writes `tier`) ─────
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  full_name   text,
  tier        text not null default 'free'
              check (tier in ('free','standard','pro')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
-- if profiles already existed without tier:
alter table public.profiles add column if not exists tier text not null default 'free';

alter table public.profiles enable row level security;
drop policy if exists "profiles read own"   on public.profiles;
drop policy if exists "profiles update own"  on public.profiles;
create policy "profiles read own"  on public.profiles for select using (auth.uid() = id);
create policy "profiles update own" on public.profiles for update using (auth.uid() = id);
-- NOTE: `tier` must be written by a trusted server context only (Stripe webhook via
-- service-role key). The update policy above lets users edit their own row but NOT
-- escalate tier — enforce that server-side, or split tier into a column updated only
-- by service role (RLS is bypassed by service-role key).

-- auto-create a profile row on signup (tier defaults to 'free')
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name')
  on conflict (id) do nothing;
  return new;
end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users for each row execute function public.handle_new_user();

-- ── sim_progress (one row per completed exam attempt) ─────────────────────────
create table if not exists public.sim_progress (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users (id) on delete cascade,
  subject          text not null default 'mat',          -- future: fizika, kemija…
  exam_key         text not null,                        -- "2025_ljeto_A"
  exam_label       text,                                 -- "2025  -  Ljeto A"
  razina           text check (razina in ('A','B')),
  pct              int  not null check (pct between 0 and 100),
  grade            text,                                 -- grade(pct)
  correct          int  not null default 0,
  total            int  not null default 0,
  exam_mode        boolean not null default true,        -- true = exam, false = practice
  answers          jsonb not null default '{}'::jsonb,   -- { [qid]: answer }
  q_times          jsonb not null default '{}'::jsonb,   -- { [qid]: seconds }
  topic_breakdown  jsonb not null default '{}'::jsonb,   -- { [topic]: {correct,total,points,earned} }
  error_tags       jsonb not null default '[]'::jsonb,
  duration_sec     int,                                  -- optional (exam meta)
  created_at       timestamptz not null default now()
);

alter table public.sim_progress enable row level security;
drop policy if exists "sim_progress own" on public.sim_progress;
create policy "sim_progress own" on public.sim_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create index if not exists sim_progress_user_time_idx
  on public.sim_progress (user_id, created_at desc);
create index if not exists sim_progress_user_exam_idx
  on public.sim_progress (user_id, subject, exam_key);
-- topic mastery aggregation (achievements/dashboard) reads topic_breakdown:
create index if not exists sim_progress_topic_gin_idx
  on public.sim_progress using gin (topic_breakdown);
