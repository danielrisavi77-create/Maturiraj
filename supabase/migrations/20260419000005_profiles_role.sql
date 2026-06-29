-- Add role column to profiles (if Supabase Auth hasn't created it yet via a trigger).
-- Safe to re-run — uses IF NOT EXISTS.

alter table public.profiles
  add column if not exists role text not null default 'user'
  check (role in ('user', 'admin', 'editor'));

-- Set initial admin — change to your real email:
-- update public.profiles set role = 'admin' where email = 'daniel@maturiraj.hr';

-- Block non-admin from promoting themselves via direct table writes:
drop policy if exists "Only admins can change role" on public.profiles;
create policy "Only admins can change role"
  on public.profiles
  as restrictive
  for update
  using (
    -- either the actor is an admin, or they are not changing the role column
    exists(select 1 from public.profiles where id = auth.uid() and role = 'admin')
    or (role = (select role from public.profiles where id = auth.uid()))
  );
