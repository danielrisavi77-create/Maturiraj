-- Explicit Data API grants for subscriptions.
--
-- RLS already limits authenticated reads to auth.uid() = user_id.
-- Trusted billing/server flows use the service role and require real table
-- privileges even though service_role bypasses RLS.
--
-- Keep anon fully closed. Authenticated users may only SELECT their own rows;
-- only service_role may provision, update, or delete subscription records.
begin;

revoke all on table public.subscriptions from public, anon, authenticated;

grant select on table public.subscriptions to authenticated;
grant select, insert, update, delete on table public.subscriptions to service_role;

commit;
