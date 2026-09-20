-- T1 APPLY — zalijepi u Supabase SQL editor na STAGING (ne produkcija).
-- Idempotentno. Checkout zastavica ostaje OFF.

-- T1.1 active_user_plan
CREATE OR REPLACE VIEW public.active_user_plan
WITH (security_invoker = true) AS
SELECT
  s.user_id,
  s.plan,
  s.status,
  s.stripe_customer_id,
  s.stripe_subscription_id,
  s.current_period_end,
  p.plan_type AS profile_plan_type,
  p.pro_expires_at
FROM subscriptions s
LEFT JOIN profiles p ON p.id = s.user_id
WHERE s.status IN ('active', 'trialing')
  AND (s.current_period_end IS NULL OR s.current_period_end > now());

ALTER VIEW public.active_user_plan SET (security_invoker = true);
REVOKE ALL ON public.active_user_plan FROM anon, authenticated;
GRANT SELECT ON public.active_user_plan TO authenticated;

-- T1.2 scores RLS
ALTER TABLE public.user_prijemni_scores ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "scores_read_own" ON public.user_prijemni_scores;
DROP POLICY IF EXISTS "scores_insert_own" ON public.user_prijemni_scores;
DROP POLICY IF EXISTS "scores_update_own" ON public.user_prijemni_scores;
DROP POLICY IF EXISTS "scores_select_auth" ON public.user_prijemni_scores;
DROP POLICY IF EXISTS "scores_insert_auth" ON public.user_prijemni_scores;
DROP POLICY IF EXISTS "scores_update_auth" ON public.user_prijemni_scores;
DROP POLICY IF EXISTS "scores_delete_auth" ON public.user_prijemni_scores;
CREATE POLICY "scores_select_auth" ON public.user_prijemni_scores
  FOR SELECT USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);
CREATE POLICY "scores_insert_auth" ON public.user_prijemni_scores
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);
CREATE POLICY "scores_update_auth" ON public.user_prijemni_scores
  FOR UPDATE USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
  WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);
CREATE POLICY "scores_delete_auth" ON public.user_prijemni_scores
  FOR DELETE USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- T1.3 push RLS
ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "push_own_rw" ON public.push_subscriptions;
DROP POLICY IF EXISTS "push_auth_rw" ON public.push_subscriptions;
CREATE POLICY "push_auth_rw" ON public.push_subscriptions FOR ALL
  USING (auth.uid() IS NOT NULL AND user_id = auth.uid())
  WITH CHECK (auth.uid() IS NOT NULL AND user_id = auth.uid());

-- T1.4 unique stripe_subscription_id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'subscriptions_stripe_subscription_id_key'
  ) THEN
    DROP INDEX IF EXISTS public.subscriptions_stripe_sub_idx;
    ALTER TABLE public.subscriptions
      ADD CONSTRAINT subscriptions_stripe_subscription_id_key UNIQUE (stripe_subscription_id);
  END IF;
END $$;
