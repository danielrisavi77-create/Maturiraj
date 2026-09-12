-- ════════════════════════════════════════════════════════════════════════════
-- maturiraj.hr — atomični rate-limit za AI rute (2.4, popravak)
-- Prva verzija helpera radila je SELECT last_request_at pa (nakon await granice)
-- UPSERT. Dva paralelna zahtjeva istog korisnika oba pročitaju isti stari
-- timestamp, oba zaključe da je prozor istekao i oba prođu — burst od N
-- paralelnih POST-ova potpuno zaobiđe cooldown.
--
-- Rješenje: jedan atomični INSERT ... ON CONFLICT DO UPDATE ... WHERE. Postgres
-- serijalizira konkurentne upsertove na istom ključu (red se zaključa), pa
-- točno jedan zahtjev unutar prozora ažurira redak i dobije prolaz; ostali ne
-- pogode nijedan redak i tretiraju se kao limited.
-- Idempotent.
-- ════════════════════════════════════════════════════════════════════════════

-- Vraća 0 ako je zahtjev dopušten (i tada je last_request_at već pomaknut na now()),
-- inače broj milisekundi koje preostaju do kraja prozora (> 0).
create or replace function public.ai_rate_limit_try(
  p_user_id   uuid,
  p_route     text,
  p_window_ms integer
)
returns integer
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_window  interval;
  v_allowed boolean;
  v_last    timestamptz;
begin
  if p_window_ms is null or p_window_ms <= 0 then
    return 0;
  end if;

  v_window := make_interval(secs => p_window_ms / 1000.0);

  -- Atomično: ili upišemo/pomaknemo timestamp (prolaz), ili ne pogodimo redak (limit).
  insert into public.ai_rate_limit as t (user_id, route, last_request_at)
  values (p_user_id, p_route, now())
  on conflict (user_id, route) do update
    set last_request_at = now()
    where t.last_request_at <= now() - v_window
  returning true into v_allowed;

  if coalesce(v_allowed, false) then
    return 0;
  end if;

  select last_request_at into v_last
    from public.ai_rate_limit
   where user_id = p_user_id and route = p_route;

  if v_last is null then
    -- Redak je u međuvremenu nestao (npr. cascade delete) — ne blokiraj.
    return 0;
  end if;

  return greatest(
    1,
    ceil(extract(epoch from ((v_last + v_window) - now())) * 1000)
  )::integer;
end;
$$;

-- Funkciju zove isključivo service-role klijent (lib/rate-limit.ts).
revoke all on function public.ai_rate_limit_try(uuid, text, integer) from public;
revoke all on function public.ai_rate_limit_try(uuid, text, integer) from anon;
revoke all on function public.ai_rate_limit_try(uuid, text, integer) from authenticated;
