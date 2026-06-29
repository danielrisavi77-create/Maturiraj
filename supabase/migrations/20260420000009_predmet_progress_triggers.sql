-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: Medicinar Mode — auto-update triggers on progress events
-- Date: 2026-04-20
-- ─────────────────────────────────────────────────────────────────────────────

-- ──────────── 1. HELPER: subject slug -> canonical predmet name ────────────
create or replace function derive_predmet_from_subject(subj text)
returns text language plpgsql immutable as $$
begin
  return case
    when subj in ('mat-a','mat-b','mat') then 'matematika'
    when subj in ('bio','bio-prijemni')  then 'biologija'
    when subj in ('kem','kem-prijemni')  then 'kemija'
    when subj in ('fiz','fiz-prijemni')  then 'fizika'
    when subj in ('hrv','hrv-a','hrv-b') then 'hrvatski'
    when subj in ('eng','eng-visa')      then 'engleski'
    else null
  end;
end; $$;

-- ──────────── 2. discere_answer_events ────────────────────────────────────
-- One row per question answered in Discere (vjezbe/arhiva).
-- The trigger on this table updates user_predmet_progress vjezbe metrics.
create table if not exists public.discere_answer_events (
  id          uuid        primary key default gen_random_uuid(),
  user_id     uuid        not null references auth.users(id) on delete cascade,
  subject     text        not null,   -- 'mat-a', 'bio', 'kem', etc.
  topic       text,                   -- optional: 'Organska kemija', 'Stehiometrija'
  is_correct  boolean     not null,
  question_id text,
  created_at  timestamptz default now()
);

create index if not exists idx_dae_user_subject
  on public.discere_answer_events(user_id, subject, created_at desc);

alter table public.discere_answer_events enable row level security;

create policy "discere_answer_events: insert own"
  on public.discere_answer_events for insert
  with check (auth.uid() = user_id);

create policy "discere_answer_events: select own"
  on public.discere_answer_events for select
  using (auth.uid() = user_id);

-- ──────────── 3. TRIGGER: chapter_progress -> skripte metrics ─────────────
-- Fires after every INSERT/UPDATE on chapter_progress.
-- Re-aggregates viewed/mastered counts for that user+predmet.
create or replace function sync_skripte_progress()
returns trigger language plpgsql security definer as $$
declare
  v_predmet    text;
  v_total      int;
  v_viewed     int;
  v_mastered   int;
begin
  v_predmet := derive_predmet_from_subject(NEW.subject);
  if v_predmet is null then return NEW; end if;

  -- Re-count from all rows for this user+subject
  select
    count(*)  filter (where true),
    count(*)  filter (where progress_pct > 0),
    count(*)  filter (where progress_pct >= 80)
  into v_total, v_viewed, v_mastered
  from chapter_progress
  where user_id = NEW.user_id
    and subject = NEW.subject;

  insert into user_predmet_progress
    (user_id, predmet, skripte_total_chapters, skripte_viewed_chapters, skripte_mastered_chapters, last_activity_at, updated_at)
  values
    (NEW.user_id, v_predmet, v_total, v_viewed, v_mastered, now(), now())
  on conflict (user_id, predmet) do update set
    skripte_total_chapters    = greatest(user_predmet_progress.skripte_total_chapters, excluded.skripte_total_chapters),
    skripte_viewed_chapters   = excluded.skripte_viewed_chapters,
    skripte_mastered_chapters = excluded.skripte_mastered_chapters,
    last_activity_at          = now(),
    updated_at                = now();

  return NEW;
end; $$;

drop trigger if exists trg_chapter_progress_sync on chapter_progress;
create trigger trg_chapter_progress_sync
  after insert or update on chapter_progress
  for each row execute function sync_skripte_progress();

-- ──────────── 4. TRIGGER: discere_answer_events -> vjezbe metrics ──────────
-- Fires after INSERT on discere_answer_events.
-- Increments attempt/correct counters and updates weak_topics JSONB.
create or replace function sync_discere_progress()
returns trigger language plpgsql security definer as $$
declare
  v_predmet       text;
  v_row           user_predmet_progress%rowtype;
  v_new_attempts  int;
  v_new_correct   int;
  v_new_accuracy  numeric(5,2);
  v_topics        jsonb;
  v_found         boolean := false;
  v_i             int;
  v_entry         jsonb;
  v_attempts_t    int;
  v_correct_t     int;
begin
  v_predmet := derive_predmet_from_subject(NEW.subject);
  if v_predmet is null then return NEW; end if;

  -- Upsert base row first (ensures row exists)
  insert into user_predmet_progress (user_id, predmet, vjezbe_total_attempts, vjezbe_correct, vjezbe_accuracy, last_activity_at, updated_at)
  values (NEW.user_id, v_predmet, 0, 0, 0, now(), now())
  on conflict (user_id, predmet) do nothing;

  -- Read current state
  select * into v_row
  from user_predmet_progress
  where user_id = NEW.user_id and predmet = v_predmet;

  v_new_attempts := coalesce(v_row.vjezbe_total_attempts, 0) + 1;
  v_new_correct  := coalesce(v_row.vjezbe_correct, 0) + (case when NEW.is_correct then 1 else 0 end);
  v_new_accuracy := round(v_new_correct::numeric / v_new_attempts * 100, 2);

  -- Update weak_topics JSONB if topic provided
  if NEW.topic is not null then
    v_topics := coalesce(v_row.weak_topics, '[]'::jsonb);

    -- Find existing entry for this topic
    for v_i in 0 .. jsonb_array_length(v_topics) - 1 loop
      v_entry := v_topics -> v_i;
      if v_entry->>'topic' = NEW.topic then
        v_attempts_t := (v_entry->>'attempts')::int + 1;
        v_correct_t  := (v_entry->>'correct')::int + (case when NEW.is_correct then 1 else 0 end);
        v_topics := jsonb_set(
          v_topics, array[v_i::text],
          jsonb_build_object(
            'topic',    NEW.topic,
            'attempts', v_attempts_t,
            'correct',  v_correct_t,
            'accuracy', round(v_correct_t::numeric / v_attempts_t * 100, 1)
          )
        );
        v_found := true;
        exit;
      end if;
    end loop;

    -- Append new entry if not found
    if not v_found then
      v_topics := v_topics || jsonb_build_array(jsonb_build_object(
        'topic',    NEW.topic,
        'attempts', 1,
        'correct',  case when NEW.is_correct then 1 else 0 end,
        'accuracy', case when NEW.is_correct then 100.0 else 0.0 end
      ));
    end if;

    -- Keep only topics with >= 5 attempts, sorted by accuracy asc, limit 20
    select coalesce(jsonb_agg(t order by (t->>'accuracy')::numeric asc), '[]'::jsonb)
    into v_topics
    from jsonb_array_elements(v_topics) as t
    where (t->>'attempts')::int >= 5
    limit 20;
  else
    v_topics := coalesce(v_row.weak_topics, '[]'::jsonb);
  end if;

  -- Write back
  update user_predmet_progress set
    vjezbe_total_attempts = v_new_attempts,
    vjezbe_correct        = v_new_correct,
    vjezbe_accuracy       = v_new_accuracy,
    weak_topics           = v_topics,
    last_activity_at      = now(),
    updated_at            = now()
  where user_id = NEW.user_id and predmet = v_predmet;

  return NEW;
end; $$;

drop trigger if exists trg_discere_answer_sync on discere_answer_events;
create trigger trg_discere_answer_sync
  after insert on public.discere_answer_events
  for each row execute function sync_discere_progress();

-- ──────────── 5. TRIGGER: simulator_attempts -> sim metrics ────────────────
-- Fires after UPDATE where status becomes 'completed'.
-- Updates simulator_best_score, simulator_last_score, simulator_attempts_count
-- for each predmet in the breakdown.
create or replace function sync_simulator_progress()
returns trigger language plpgsql security definer as $$
declare
  v_predmet   text;
  v_pct       numeric(5,2);
  v_key       text;
  v_val       jsonb;
begin
  if NEW.status <> 'completed' then return NEW; end if;
  if NEW.breakdown is null then return NEW; end if;

  for v_key, v_val in select * from jsonb_each(NEW.breakdown) loop
    v_predmet := derive_predmet_from_subject(v_key);
    if v_predmet is null then
      -- breakdown keys may already be canonical (biologija, kemija, etc.)
      v_predmet := v_key;
    end if;
    v_pct := (v_val->>'pct')::numeric;

    insert into user_predmet_progress
      (user_id, predmet, simulator_attempts_count, simulator_best_score, simulator_last_score, last_activity_at, updated_at)
    values
      (NEW.user_id, v_predmet, 1, v_pct, v_pct, now(), now())
    on conflict (user_id, predmet) do update set
      simulator_attempts_count = user_predmet_progress.simulator_attempts_count + 1,
      simulator_best_score     = greatest(coalesce(user_predmet_progress.simulator_best_score, 0), v_pct),
      simulator_last_score     = v_pct,
      last_activity_at         = now(),
      updated_at               = now();
  end loop;

  return NEW;
end; $$;

drop trigger if exists trg_simulator_complete_sync on simulator_attempts;
create trigger trg_simulator_complete_sync
  after update of status on public.simulator_attempts
  for each row
  when (NEW.status = 'completed' and OLD.status <> 'completed')
  execute function sync_simulator_progress();
