-- T1.1 — active_user_plan ne smije zaobilaziti RLS.
-- Idempotentno: smije se pustiti i ako je 20260718000002 već prošla.
-- App ne čita ovaj view s anon ključem (nema from('active_user_plan') u kodu).
-- Service-role i dalje vidi sve redove (namjerno).

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
