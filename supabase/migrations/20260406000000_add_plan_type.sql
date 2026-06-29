-- Add plan_type and pro_expires_at to profiles
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS plan_type        text            DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS pro_expires_at   timestamptz     DEFAULT NULL;

-- Set the dev/test account to pro for local testing
UPDATE profiles
SET plan_type = 'pro'
WHERE email = 'danielrisavi77@gmail.com';
