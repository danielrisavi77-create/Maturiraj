-- ───────────────────────── STAGING ─────────────────────────
-- Svaki run scrapera ubacuje podatke ovdje prije verifikacije
create table if not exists public.pragovi_staging (
  id             bigserial primary key,
  run_id         uuid not null,              -- grupira sve redove iz jednog runa
  studij_id      text,                       -- ako se matcha; null ako je nov studij
  studij_naziv   text not null,              -- raw naziv iz AZVO ("Medicina")
  fakultet_hint  text,                       -- raw string iz AZVO koji treba mapirati
  godina         int not null,
  prag           int,
  prijavljenih   int,
  upisanih       int,
  source         text not null,              -- 'AZVO', 'fakultet_mef', 'manual'
  source_url     text,
  raw_payload    jsonb,                      -- sirovi payload za debug

  -- Diff status
  diff_status    text default 'pending' check (diff_status in (
    'pending',      -- još neanalizirano
    'new',          -- novi zapis, ne postoji u pragovi
    'unchanged',    -- postojeći, iste vrijednosti (auto-ignore)
    'changed',      -- postojeći, nove vrijednosti (treba review)
    'unmatched',    -- ne može se matchirati sa studij_id
    'applied',      -- već primijenjen u pragovi
    'rejected'      -- admin ga je odbio
  )),
  diff_delta     jsonb,                      -- {prag: {old: 654, new: 658}}

  -- Audit
  reviewed_by    uuid references auth.users(id),
  reviewed_at    timestamptz,
  review_note    text,

  created_at     timestamptz default now()
);

create index if not exists idx_staging_run on public.pragovi_staging(run_id);
create index if not exists idx_staging_status on public.pragovi_staging(diff_status, godina desc);
create index if not exists idx_staging_studij on public.pragovi_staging(studij_id);

-- ───────────────────────── SCRAPER RUNS ─────────────────────────
-- Svaki run scrapera = jedan audit red
create table if not exists public.scraper_runs (
  id             uuid primary key default gen_random_uuid(),
  source         text not null,              -- 'azvo_upisi', 'mef_zg_web'
  triggered_by   text not null,              -- 'cron', 'manual', user_uuid
  status         text default 'running' check (status in ('running', 'success', 'failed', 'partial')),
  
  rows_total     int default 0,
  rows_new       int default 0,
  rows_changed   int default 0,
  rows_unchanged int default 0,
  rows_unmatched int default 0,
  
  error_message  text,
  duration_ms    int,
  
  started_at     timestamptz default now(),
  finished_at    timestamptz
);

create index if not exists idx_scraper_runs_source on public.scraper_runs(source, started_at desc);

-- ───────────────────────── AUDIT TRAIL za pragovi ─────────────────────────
-- Every change to pragovi table = one row here
create table if not exists public.pragovi_audit (
  id           bigserial primary key,
  studij_id    text references public.studiji(id) on delete set null,
  godina       int,
  
  action       text not null check (action in ('insert', 'update', 'delete')),
  old_values   jsonb,
  new_values   jsonb,
  
  changed_by   uuid references auth.users(id),
  staging_id   bigint references public.pragovi_staging(id) on delete set null,
  
  created_at   timestamptz default now()
);

create index if not exists idx_pragovi_audit_studij on public.pragovi_audit(studij_id, godina desc);

-- ───────────────────────── EXTEND pragovi s last_updated ─────────────────────────
alter table public.pragovi 
  add column if not exists last_verified_at timestamptz,
  add column if not exists last_verified_by uuid references auth.users(id);

-- ───────────────────────── RLS ─────────────────────────
alter table public.pragovi_staging enable row level security;
alter table public.scraper_runs    enable row level security;
alter table public.pragovi_audit   enable row level security;

-- Svi ovo su admin-only (service role piše, admins čitaju)
drop policy if exists "staging_admin_read" on public.pragovi_staging;
create policy "staging_admin_read" on public.pragovi_staging for select
  using (exists(select 1 from public.profiles where id = auth.uid() and role = 'admin'));

drop policy if exists "staging_admin_write" on public.pragovi_staging;
create policy "staging_admin_write" on public.pragovi_staging for all
  using (exists(select 1 from public.profiles where id = auth.uid() and role = 'admin'))
  with check (exists(select 1 from public.profiles where id = auth.uid() and role = 'admin'));

drop policy if exists "runs_admin_read" on public.scraper_runs;
create policy "runs_admin_read" on public.scraper_runs for select
  using (exists(select 1 from public.profiles where id = auth.uid() and role = 'admin'));

drop policy if exists "audit_admin_read" on public.pragovi_audit;
create policy "audit_admin_read" on public.pragovi_audit for select
  using (exists(select 1 from public.profiles where id = auth.uid() and role = 'admin'));

-- ───────────────────────── TRIGGER: auto-audit za pragovi ─────────────────────────
create or replace function public.tg_pragovi_audit()
returns trigger language plpgsql as $$
begin
  if TG_OP = 'INSERT' then
    insert into public.pragovi_audit(studij_id, godina, action, new_values, changed_by)
    values (NEW.studij_id, NEW.godina, 'insert', to_jsonb(NEW), auth.uid());
    return NEW;
  elsif TG_OP = 'UPDATE' then
    insert into public.pragovi_audit(studij_id, godina, action, old_values, new_values, changed_by)
    values (NEW.studij_id, NEW.godina, 'update', to_jsonb(OLD), to_jsonb(NEW), auth.uid());
    return NEW;
  elsif TG_OP = 'DELETE' then
    insert into public.pragovi_audit(studij_id, godina, action, old_values, changed_by)
    values (OLD.studij_id, OLD.godina, 'delete', to_jsonb(OLD), auth.uid());
    return OLD;
  end if;
  return null;
end; $$;

drop trigger if exists trg_pragovi_audit on public.pragovi;
create trigger trg_pragovi_audit
  after insert or update or delete on public.pragovi
  for each row execute function public.tg_pragovi_audit();

-- ───────────────────────── RPC: apply_staging ─────────────────────────
-- Jedan atomic call koji promotes staging row → pragovi + updates audit
create or replace function public.apply_staging_row(p_staging_id bigint, p_note text default null)
returns jsonb language plpgsql security definer as $$
declare
  v_row public.pragovi_staging%rowtype;
  v_result jsonb;
begin
  -- Permission check
  if not exists(select 1 from public.profiles where id = auth.uid() and role = 'admin') then
    raise exception 'Unauthorized';
  end if;

  select * into v_row from public.pragovi_staging where id = p_staging_id;
  if not found then raise exception 'Staging row not found'; end if;
  if v_row.studij_id is null then raise exception 'Cannot apply unmatched row — match studij_id first'; end if;
  if v_row.diff_status not in ('new', 'changed') then
    raise exception 'Row not applicable (status=%)', v_row.diff_status;
  end if;

  -- Upsert in pragovi
  insert into public.pragovi(studij_id, godina, prag, prijavljenih, upisanih, source, source_url, verified, last_verified_at, last_verified_by)
  values (v_row.studij_id, v_row.godina, v_row.prag, v_row.prijavljenih, v_row.upisanih, v_row.source, v_row.source_url, true, now(), auth.uid())
  on conflict (studij_id, godina) do update set
    prag = excluded.prag,
    prijavljenih = excluded.prijavljenih,
    upisanih = excluded.upisanih,
    source = excluded.source,
    source_url = excluded.source_url,
    verified = true,
    last_verified_at = now(),
    last_verified_by = auth.uid();

  -- Mark staging as applied
  update public.pragovi_staging set
    diff_status = 'applied',
    reviewed_by = auth.uid(),
    reviewed_at = now(),
    review_note = coalesce(p_note, review_note)
  where id = p_staging_id;

  v_result := jsonb_build_object('success', true, 'studij_id', v_row.studij_id, 'godina', v_row.godina);
  return v_result;
end; $$;

grant execute on function public.apply_staging_row(bigint, text) to authenticated;

-- Bulk apply — jedan call za array staging IDs
create or replace function public.apply_staging_batch(p_ids bigint[])
returns jsonb language plpgsql security definer as $$
declare
  v_id bigint;
  v_applied int := 0;
  v_failed int := 0;
  v_errors jsonb := '[]'::jsonb;
begin
  if not exists(select 1 from public.profiles where id = auth.uid() and role = 'admin') then
    raise exception 'Unauthorized';
  end if;

  foreach v_id in array p_ids loop
    begin
      perform public.apply_staging_row(v_id);
      v_applied := v_applied + 1;
    exception when others then
      v_failed := v_failed + 1;
      v_errors := v_errors || jsonb_build_object('id', v_id, 'error', sqlerrm);
    end;
  end loop;

  return jsonb_build_object('applied', v_applied, 'failed', v_failed, 'errors', v_errors);
end; $$;

grant execute on function public.apply_staging_batch(bigint[]) to authenticated;
