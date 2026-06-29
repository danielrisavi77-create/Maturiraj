-- ─── Experiment definitions ───────────────────────────
create table if not exists public.ab_experiments (
  id              text primary key,               -- 'copy_paywall', 'paywall_layout_v2'
  name            text not null,
  description     text,
  variants        text[] not null,                -- ['a', 'b'] or ['control', 'v1', 'v2']
  weights         numeric[] not null,             -- [50, 50] sums to 100
  
  status          text default 'active' check (status in ('draft', 'active', 'paused', 'concluded')),
  winner          text,                           -- set when concluded
  
  target_audience text default 'all' check (target_audience in ('all', 'free', 'paid', 'new')),
  
  started_at      timestamptz default now(),
  concluded_at    timestamptz,
  created_at      timestamptz default now()
);

-- ─── User assignments ───────────────────────────
create table if not exists public.ab_assignments (
  id              bigserial primary key,
  experiment_id   text not null references public.ab_experiments(id) on delete cascade,
  
  user_id         uuid references auth.users(id) on delete cascade,
  session_id      text,                           -- za guest assignments
  
  variant         text not null,
  
  created_at      timestamptz default now(),
  
  constraint ab_assignment_user_or_session check (user_id is not null or session_id is not null),
  unique(experiment_id, user_id),
  unique(experiment_id, session_id)
);

create index if not exists idx_ab_user_exp on public.ab_assignments(user_id, experiment_id);
create index if not exists idx_ab_session_exp on public.ab_assignments(session_id, experiment_id);

-- ─── Seed experiments ───────────────────────────
insert into public.ab_experiments (id, name, description, variants, weights, status) values
  ('copy_paywall',   'Paywall copy test',            'Active vs friendly paywall language', ARRAY['a','b'], ARRAY[50,50], 'active'),
  ('copy_list',      'List hero copy',               'Informational vs action-oriented hero', ARRAY['a','b'], ARRAY[50,50], 'active'),
  ('copy_matcher',   'Matcher banner copy',          'Describe vs direct CTA', ARRAY['a','b'], ARRAY[50,50], 'active'),
  ('copy_kalkulator','Kalkulator result copy',       'Neutral vs celebratory result language', ARRAY['a','b'], ARRAY[50,50], 'active'),
  ('copy_stories',   'Stories section copy',         'Humble vs encouraging empty state', ARRAY['a','b'], ARRAY[50,50], 'active')
on conflict (id) do nothing;

-- ─── RLS ───────────────────────────────────────
alter table public.ab_experiments  enable row level security;
alter table public.ab_assignments  enable row level security;

-- Experiments su public read
drop policy if exists "ab_exp_public_read" on public.ab_experiments;
create policy "ab_exp_public_read" on public.ab_experiments for select using (true);

-- Assignments: read/write vlastiti
drop policy if exists "ab_assign_own_rw" on public.ab_assignments;
create policy "ab_assign_own_rw" on public.ab_assignments for all
  using (
    (auth.uid() is not null and user_id = auth.uid())
    or (auth.uid() is null and session_id is not null)
  )
  with check (
    (auth.uid() is not null and user_id = auth.uid())
    or (auth.uid() is null and session_id is not null)
  );

-- ─── RPC: get_or_create_assignment ───────────────
create or replace function public.get_or_create_ab_assignment(
  p_experiment_id text,
  p_session_id    text default null
) returns text language plpgsql security definer as $$
declare
  v_user_id uuid := auth.uid();
  v_variant text;
  v_experiment public.ab_experiments%rowtype;
  v_idx int;
  v_cumulative numeric;
  v_rand numeric;
begin
  -- Fetch experiment
  select * into v_experiment from public.ab_experiments where id = p_experiment_id and status = 'active';
  if not found then return 'a'; end if;

  -- Try to get existing assignment
  if v_user_id is not null then
    select variant into v_variant from public.ab_assignments
    where experiment_id = p_experiment_id and user_id = v_user_id;
  else
    select variant into v_variant from public.ab_assignments
    where experiment_id = p_experiment_id and session_id = p_session_id;
  end if;

  if v_variant is not null then return v_variant; end if;

  -- Assign new variant by weight
  v_rand := random() * 100;
  v_cumulative := 0;
  v_variant := v_experiment.variants[1];

  for v_idx in 1..array_length(v_experiment.variants, 1) loop
    v_cumulative := v_cumulative + v_experiment.weights[v_idx];
    if v_rand <= v_cumulative then
      v_variant := v_experiment.variants[v_idx];
      exit;
    end if;
  end loop;

  -- Save assignment
  if v_user_id is not null then
    insert into public.ab_assignments(experiment_id, user_id, variant)
    values (p_experiment_id, v_user_id, v_variant)
    on conflict (experiment_id, user_id) do update set variant = excluded.variant;
  elsif p_session_id is not null then
    insert into public.ab_assignments(experiment_id, session_id, variant)
    values (p_experiment_id, p_session_id, v_variant)
    on conflict (experiment_id, session_id) do update set variant = excluded.variant;
  end if;

  return v_variant;
end; $$;

grant execute on function public.get_or_create_ab_assignment(text, text) to authenticated, anon;
