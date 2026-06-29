-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: Discere Paywall — simulator sessions + paywall analytics events
-- Date: 2026-04-18
-- ─────────────────────────────────────────────────────────────────────────────

-- Ensure subscriptions table exists and has minimum required columns.
-- If it was created manually / via a previous migration, the ADD COLUMN is a no-op.
CREATE TABLE IF NOT EXISTS subscriptions (
  id                      uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                 uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan                    text        NOT NULL DEFAULT 'pro',
  status                  text        NOT NULL DEFAULT 'active',
  stripe_customer_id      text,
  stripe_subscription_id  text        UNIQUE,
  current_period_end      timestamptz,
  created_at              timestamptz NOT NULL DEFAULT now(),
  updated_at              timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE subscriptions
  ADD COLUMN IF NOT EXISTS plan    text NOT NULL DEFAULT 'pro',
  ADD COLUMN IF NOT EXISTS updated_at timestamptz NOT NULL DEFAULT now();

-- Indexes for common lookups
CREATE INDEX IF NOT EXISTS subscriptions_user_id_idx          ON subscriptions (user_id);
CREATE INDEX IF NOT EXISTS subscriptions_stripe_customer_idx  ON subscriptions (stripe_customer_id);
-- Remove duplicate stripe_subscription_id rows before creating unique index.
-- Keeps the row with the latest updated_at (or created_at if updated_at is equal).
DELETE FROM subscriptions a
USING subscriptions b
WHERE a.stripe_subscription_id IS NOT NULL
  AND a.stripe_subscription_id = b.stripe_subscription_id
  AND a.id <> b.id
  AND a.updated_at < b.updated_at;

-- Also remove any remaining dups with same updated_at, keeping highest id
DELETE FROM subscriptions a
USING subscriptions b
WHERE a.stripe_subscription_id IS NOT NULL
  AND a.stripe_subscription_id = b.stripe_subscription_id
  AND a.id < b.id;

-- Drop legacy unnamed unique constraint if it exists (created by earlier manual setup)
DO $$
DECLARE
  _con text;
BEGIN
  SELECT constraint_name INTO _con
  FROM information_schema.table_constraints
  WHERE table_name = 'subscriptions'
    AND constraint_type = 'UNIQUE'
    AND constraint_name != 'subscriptions_pkey'
    AND constraint_name NOT LIKE '%stripe_sub_idx%'
  LIMIT 1;
  IF _con IS NOT NULL THEN
    EXECUTE format('ALTER TABLE subscriptions DROP CONSTRAINT IF EXISTS %I', _con);
  END IF;
END $$;

DROP INDEX IF EXISTS subscriptions_stripe_sub_idx;
CREATE UNIQUE INDEX subscriptions_stripe_sub_idx ON subscriptions (stripe_subscription_id)
  WHERE stripe_subscription_id IS NOT NULL;

-- RLS — only service role writes; users can read their own
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "subscriptions: select own" ON subscriptions;
CREATE POLICY "subscriptions: select own"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- ─── simulator_sessions ───────────────────────────────────────────────────────
-- One row per simulator attempt.
-- tier_at_start is denormalised for analytics — captures what plan the user had
-- when they started, regardless of later upgrades.
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS simulator_sessions (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject          text        NOT NULL,             -- e.g. 'mat', 'eng', 'hrv'
  simulator_id     text        NOT NULL,             -- e.g. 'mat-a-2025', 'eng-b1-2024'
  tier_at_start    text        NOT NULL DEFAULT 'free', -- 'free' | 'starter' | 'pro'
  started_at       timestamptz NOT NULL DEFAULT now(),
  finished_at      timestamptz,
  score            integer,
  total_questions  integer     NOT NULL DEFAULT 0,
  correct_count    integer     NOT NULL DEFAULT 0,
  incorrect_count  integer     NOT NULL DEFAULT 0,
  metadata         jsonb       NOT NULL DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS sim_sessions_user_idx     ON simulator_sessions (user_id, started_at DESC);
CREATE INDEX IF NOT EXISTS sim_sessions_subject_idx  ON simulator_sessions (subject);

ALTER TABLE simulator_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "sim_sessions: select own"
  ON simulator_sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "sim_sessions: insert own"
  ON simulator_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "sim_sessions: update own"
  ON simulator_sessions FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ─── paywall_events ───────────────────────────────────────────────────────────
-- Analytics events for all paywall-related interactions.
-- user_id nullable — allows tracking unauthenticated events too (anon_id in metadata).
--
-- event_type values (non-exhaustive):
--   simulator_started | free_preview_limit_hit | paywall_opened | upgrade_cta_clicked
--   checkout_started  | checkout_completed | results_viewed | locked_analysis_seen
--   ai_feature_blocked | pro_upgrade_from_results
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS paywall_events (
  id                uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           uuid        REFERENCES auth.users(id) ON DELETE SET NULL,
  event_type        text        NOT NULL,
  subject           text,
  simulator_id      text,
  question_index    integer,
  subscription_tier text,                          -- tier at time of event
  source_screen     text,                          -- e.g. 'simulator', 'results', 'atlas'
  metadata          jsonb       NOT NULL DEFAULT '{}',
  created_at        timestamptz NOT NULL DEFAULT now()
);

-- Fast per-user and per-event-type queries
CREATE INDEX IF NOT EXISTS paywall_events_user_idx       ON paywall_events (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS paywall_events_type_idx       ON paywall_events (event_type, created_at DESC);
CREATE INDEX IF NOT EXISTS paywall_events_subject_idx    ON paywall_events (subject, event_type);

-- RLS: users can insert their own events; admins (service role) read all
ALTER TABLE paywall_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "paywall_events: insert own"
  ON paywall_events FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "paywall_events: select own"
  ON paywall_events FOR SELECT
  USING (auth.uid() = user_id);

-- ─── Helper view — active_user_plan ──────────────────────────────────────────
-- Fast single-row plan lookup for a user.
-- Joins subscriptions + profiles so callers don't have to.
-- ─────────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW active_user_plan AS
SELECT
  s.user_id,
  s.plan,
  s.status,
  s.stripe_customer_id,
  s.stripe_subscription_id,
  s.current_period_end,
  p.plan_type   AS profile_plan_type,
  p.pro_expires_at
FROM subscriptions s
LEFT JOIN profiles p ON p.id = s.user_id
WHERE s.status IN ('active', 'trialing')
  AND (s.current_period_end IS NULL OR s.current_period_end > now());

-- RLS doesn't apply to views; security handled by the underlying table RLS.
-- Service-role callers bypass RLS entirely (expected for backend helpers).
