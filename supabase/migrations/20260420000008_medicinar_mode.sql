-- ───────────────────────── USER TARGETS ─────────────────────────
-- Student deklarira koje studije cilja → aktivira personalizirani track
create table if not exists public.user_target_studiji (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  studij_id     text not null references public.studiji(id) on delete cascade,
  
  priority      int default 1,  -- 1 = primary target, 2-3 = backup
  active        boolean default true,
  
  created_at    timestamptz default now(),
  updated_at    timestamptz default now(),
  
  unique(user_id, studij_id)
);

create index if not exists idx_target_user_active on public.user_target_studiji(user_id, active);
create index if not exists idx_target_studij on public.user_target_studiji(studij_id);

-- ───────────────────────── PREDMET PROGRESS ─────────────────────────
-- Agregirani progress po predmetu (Bio, Kem, Fiz...) za user-a
-- Update-a se triggerom iz skripte/discere events-a
create table if not exists public.user_predmet_progress (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  predmet       text not null,  -- 'biologija', 'kemija', 'fizika', 'matematika'
  
  -- Gradivo coverage (iz skripti)
  skripte_total_chapters   int default 0,
  skripte_viewed_chapters  int default 0,
  skripte_mastered_chapters int default 0,  -- quiz completed > 80%
  
  -- Vježbe performance
  vjezbe_total_attempts    int default 0,
  vjezbe_correct           int default 0,
  vjezbe_accuracy          numeric(5,2),    -- 0-100
  
  -- Simulator performance (zadnjih 5)
  simulator_attempts_count int default 0,
  simulator_best_score     numeric(5,2),    -- 0-100%
  simulator_last_score     numeric(5,2),
  
  -- Weakness detection — top 3 najslabije teme
  weak_topics              jsonb default '[]'::jsonb,
  /* format: [{"topic":"Stehiometrija","accuracy":34,"attempts":12},...] */
  
  last_activity_at         timestamptz,
  updated_at               timestamptz default now(),
  
  unique(user_id, predmet)
);

create index if not exists idx_predmet_progress_user on public.user_predmet_progress(user_id);

-- ───────────────────────── SIMULATOR ATTEMPTS ─────────────────────────
-- Timed simulacija prijemnog (120 pitanja, 3h za MEF)
create table if not exists public.simulator_attempts (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  target_studij_id text references public.studiji(id) on delete set null,
  
  -- Config
  predmeti        text[] not null,           -- ['biologija','kemija','fizika']
  question_count  int not null,              -- 120 za MEF, druge varijante
  time_limit_s    int not null,              -- 10800 (3h) za MEF
  
  -- Question IDs from discere pool (JSON za flexibilnost)
  question_ids    text[] not null,
  
  -- State
  status          text not null default 'in_progress' check (status in ('in_progress', 'completed', 'abandoned')),
  started_at      timestamptz default now(),
  finished_at     timestamptz,
  duration_s      int,
  
  -- Results (null dok status != 'completed')
  answers         jsonb default '{}'::jsonb,  
  /* format: {"q_123":{"answer":"b","correct":true,"time_s":45},...} */
  
  total_correct   int,
  total_answered  int,
  score_pct       numeric(5,2),               -- 0-100
  
  -- Per-predmet breakdown
  breakdown       jsonb,
  /* format: {"biologija":{"correct":28,"total":40,"pct":70},...} */
  
  -- Percentile (ažurira se batch cron-om)
  percentile      numeric(5,2),
  
  created_at      timestamptz default now()
);

create index if not exists idx_sim_user_recent on public.simulator_attempts(user_id, created_at desc);
create index if not exists idx_sim_target on public.simulator_attempts(target_studij_id, score_pct desc) where status = 'completed';
create index if not exists idx_sim_completed_score on public.simulator_attempts(score_pct desc) where status = 'completed';

-- ───────────────────────── AI BRIEFINGS (Pro only) ─────────────────────────
-- Weekly personalizirane analize generirane Claude-om
create table if not exists public.ai_briefings (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  week_of       date not null,  -- Monday of the week
  
  target_studij_id text references public.studiji(id),
  
  -- Inputs snapshot za reproducibility
  inputs_snapshot jsonb,
  
  -- Generated content
  summary       text not null,          -- 2-3 rečenice TL;DR
  priorities    jsonb not null,         -- [{"topic":"Organska kemija","why":"...","action":"..."}]
  encouragement text,                    -- motivacijski kratki tekst
  
  -- Meta
  model         text default 'claude-sonnet-4-6',
  tokens_in     int,
  tokens_out    int,
  generated_at  timestamptz default now(),
  
  unique(user_id, week_of)
);

create index if not exists idx_briefings_user on public.ai_briefings(user_id, week_of desc);

-- ───────────────────────── RLS ─────────────────────────
alter table public.user_target_studiji    enable row level security;
alter table public.user_predmet_progress  enable row level security;
alter table public.simulator_attempts     enable row level security;
alter table public.ai_briefings           enable row level security;

-- User can CRUD own targets
drop policy if exists "targets_own" on public.user_target_studiji;
create policy "targets_own" on public.user_target_studiji for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- User can read own progress (update ide kroz triggers/service role)
drop policy if exists "progress_read_own" on public.user_predmet_progress;
create policy "progress_read_own" on public.user_predmet_progress for select
  using (auth.uid() = user_id);

drop policy if exists "progress_write_own" on public.user_predmet_progress;
create policy "progress_write_own" on public.user_predmet_progress for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Simulator attempts — user read/write own
drop policy if exists "sim_own" on public.simulator_attempts;
create policy "sim_own" on public.simulator_attempts for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Briefings — user read own only (write ide service role)
drop policy if exists "briefings_read_own" on public.ai_briefings;
create policy "briefings_read_own" on public.ai_briefings for select
  using (auth.uid() = user_id);

-- ───────────────────────── VIEW za leaderboard (anonimiziran) ─────────────────────────
-- Vraća samo statistike, nikad user_id na UI
create or replace view public.simulator_stats as
select
  target_studij_id,
  count(*) filter (where status = 'completed') as total_attempts,
  count(distinct user_id) filter (where status = 'completed') as unique_users,
  avg(score_pct) filter (where status = 'completed') as avg_score,
  percentile_cont(0.5) within group (order by score_pct) filter (where status = 'completed') as median_score,
  percentile_cont(0.9) within group (order by score_pct) filter (where status = 'completed') as p90_score,
  percentile_cont(0.75) within group (order by score_pct) filter (where status = 'completed') as p75_score,
  percentile_cont(0.25) within group (order by score_pct) filter (where status = 'completed') as p25_score,
  max(score_pct) filter (where status = 'completed') as max_score
from public.simulator_attempts
group by target_studij_id;

-- Public read na view
grant select on public.simulator_stats to authenticated, anon;

-- ───────────────────────── RPC: compute percentile za attempt ─────────────────────────
create or replace function public.compute_attempt_percentile(p_attempt_id uuid)
returns numeric language plpgsql security definer as $$
declare
  v_target text;
  v_score numeric;
  v_percentile numeric;
begin
  select target_studij_id, score_pct into v_target, v_score
  from public.simulator_attempts
  where id = p_attempt_id and status = 'completed';
  
  if v_target is null or v_score is null then return null; end if;
  
  select 
    case 
      when count(*) = 0 then 50
      else round(
        100.0 * count(*) filter (where score_pct < v_score) / count(*),
        1
      )
    end into v_percentile
  from public.simulator_attempts
  where target_studij_id = v_target and status = 'completed';
  
  update public.simulator_attempts set percentile = v_percentile where id = p_attempt_id;
  return v_percentile;
end; $$;

grant execute on function public.compute_attempt_percentile(uuid) to authenticated;

-- ───────────────────────── TRIGGER: auto-compute percentile ─────────────────────────
create or replace function public.tg_sim_attempt_finalize()
returns trigger language plpgsql as $$
begin
  -- Kad se status promijeni u 'completed', compute percentile
  if NEW.status = 'completed' and (OLD.status is null or OLD.status != 'completed') then
    perform public.compute_attempt_percentile(NEW.id);
  end if;
  return NEW;
end; $$;

drop trigger if exists trg_sim_finalize on public.simulator_attempts;
create trigger trg_sim_finalize
  after update on public.simulator_attempts
  for each row execute function public.tg_sim_attempt_finalize();
