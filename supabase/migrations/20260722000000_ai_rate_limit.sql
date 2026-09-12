-- ════════════════════════════════════════════════════════════════════════════
-- maturiraj.hr — zajednički rate-limit za AI rute (2.4)
-- Zamjenjuje in-memory Mapu po procesu (ne preživi restart/više instanci).
-- Piše/čita isključivo service-role klijent (lib/rate-limit.ts), pa RLS bez
-- policyja = default deny za anon/authenticated, service role ionako zaobilazi RLS.
-- Idempotent.
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.ai_rate_limit (
  user_id          uuid not null references auth.users (id) on delete cascade,
  route            text not null,               -- npr. "ai", "ai-simulator"
  last_request_at  timestamptz not null default now(),
  primary key (user_id, route)
);

alter table public.ai_rate_limit enable row level security;
-- namjerno nema policyja: samo service-role (lib/rate-limit.ts) smije čitati/pisati
