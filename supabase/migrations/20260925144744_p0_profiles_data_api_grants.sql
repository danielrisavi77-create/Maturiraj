-- Explicit Data API grants for profiles.
--
-- supabase/config.toml intentionally leaves auto_expose_new_tables disabled.
-- RLS policies do not grant table privileges by themselves, so fresh local /
-- hosted schemas need an explicit SELECT grant for authenticated application
-- reads and server-side service-role reads.
--
-- Keep anon fail-closed. UPDATE privileges remain governed by
-- 20260715010000_profile_entitlement_guard.sql.
begin;

revoke select on table public.profiles from public, anon;
grant select on table public.profiles to authenticated, service_role;

commit;
