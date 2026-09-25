-- ════════════════════════════════════════════════════════════════════════════
-- sim_progress.attempt_id — idempotencija ocijenjene predaje (ADR-001)
--
-- POST /api/sim/[subject]/grade mora na ponovljeni attemptId vratiti isti
-- odgovor i NE upisati novi redak. Bez trajnog traga to vrijedi samo unutar
-- jedne serverless instance, pa ista predaja poslana dvaput (mrežni retry,
-- dvostruki klik, druga regija) stvara dva retka i troši dva mjesta u dnevnom
-- budžetu od 5 predaja po ispitu.
--
-- Stupac je nullable jer stari redci nemaju attemptId, a jedinstvenost je
-- djelomična (WHERE attempt_id IS NOT NULL) da ih to ne pogodi.
-- Idempotentno; pokreni u Supabase SQL editoru.
-- ════════════════════════════════════════════════════════════════════════════

alter table public.sim_progress add column if not exists attempt_id text;

create unique index if not exists sim_progress_user_attempt_uidx
  on public.sim_progress (user_id, attempt_id)
  where attempt_id is not null;

-- Budžet predaja: "koliko je ocijenjenih predaja ovaj korisnik imao na ovom
-- ispitu u zadnja 24 h". sim_progress_user_exam_idx pokriva (user_id, subject,
-- exam_key); created_at dolazi kao zadnji stupac da brojanje ostane index-only.
create index if not exists sim_progress_user_exam_time_idx
  on public.sim_progress (user_id, subject, exam_key, created_at desc);
