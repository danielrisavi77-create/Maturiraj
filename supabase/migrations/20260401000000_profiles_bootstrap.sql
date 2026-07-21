-- Bootstrap the profiles relation for fresh local Supabase databases.
-- The hosted project predates this migration chain and already has profiles;
-- this idempotent table lets local migrations replay from an empty database.
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  full_name   text,
  tier        text not null default 'free'
              check (tier in ('free','standard','pro')),
  role        text not null default 'user',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- These relations are part of the hosted application's pre-existing schema
-- but are not represented by migrations. Keep a minimal local shape so the
-- parent/child RLS migrations can be replayed from an empty database.
create table if not exists public.study_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);
create table if not exists public.plan_weeks (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null references public.study_plans (id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.study_plans enable row level security;
alter table public.plan_weeks enable row level security;

create table if not exists public.prijemni_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  event_type text not null,
  fakultet_id text,
  studij_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
