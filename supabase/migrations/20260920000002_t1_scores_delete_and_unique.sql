-- T1.2 residual: auth user mora moći DELETE vlastiti score (scores.js).
-- T1.4 residual: unique constraint idempotentno ako 20260718000003 nije prošla.

alter table public.user_prijemni_scores enable row level security;

drop policy if exists "scores_delete_auth" on public.user_prijemni_scores;
create policy "scores_delete_auth" on public.user_prijemni_scores
  for delete using (auth.uid() is not null and auth.uid() = user_id);

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'subscriptions_stripe_subscription_id_key'
  ) then
    drop index if exists public.subscriptions_stripe_sub_idx;
    alter table public.subscriptions
      add constraint subscriptions_stripe_subscription_id_key unique (stripe_subscription_id);
  end if;
end $$;
