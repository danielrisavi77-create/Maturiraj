-- ── chapter_progress ─────────────────────────────────────────────────────────
-- Tracks per-user, per-chapter progress percentage.
-- Used by useMatProgress hook (and future subject hooks) for cloud sync.
-- Free users: localStorage only (this table is NOT written to).
-- Paid users: localStorage + this table, merge takes max().
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS chapter_progress (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject      text NOT NULL,             -- e.g. 'mat-a', 'eng-visa'
  chapter      text NOT NULL,             -- e.g. 'p01', 'poglavlje-05'
  progress_pct integer NOT NULL DEFAULT 0 CHECK (progress_pct >= 0 AND progress_pct <= 100),
  updated_at   timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT chapter_progress_unique UNIQUE (user_id, subject, chapter)
);

-- Index for fast per-user lookups
CREATE INDEX IF NOT EXISTS chapter_progress_user_idx ON chapter_progress(user_id);

-- Row-Level Security: users can only read/write their own rows
ALTER TABLE chapter_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own progress"
  ON chapter_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can upsert own progress"
  ON chapter_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON chapter_progress FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON chapter_progress FOR DELETE
  USING (auth.uid() = user_id);
