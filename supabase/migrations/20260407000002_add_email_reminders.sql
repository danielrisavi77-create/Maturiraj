-- Add email_reminders preference to profiles
-- NOT NULL DEFAULT true → existing users are kept opted in
-- Unsubscribe endpoint sets this to false

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS email_reminders boolean NOT NULL DEFAULT true;
