// lib/rate-limit.ts
// Zajednički rate-limit helper za AI rute (2.4). Izvor istine je Supabase tablica
// ai_rate_limit (supabase/migrations/20260722000000_ai_rate_limit.sql) — radi kroz
// više instanci/regija procesa, za razliku od stare in-memory Mape po ruti.
// Ako tablica (još) ne postoji ili je Supabase nedostupan, pada natrag na
// in-memory Mapu po procesu (isto ponašanje kao prije).
import { createAdminClient } from "@/lib/supabase/server";

export type RateLimitResult = { limited: boolean; retryAfterSec: number };

// in-memory fallback: route -> (userId -> zadnji zahtjev u ms)
const _memory = new Map<string, Map<string, number>>();

function memoryCheck(route: string, userId: string, windowMs: number): RateLimitResult {
  let bucket = _memory.get(route);
  if (!bucket) {
    bucket = new Map();
    _memory.set(route, bucket);
  }
  const now = Date.now();
  const last = bucket.get(userId) ?? 0;
  const elapsed = now - last;
  if (elapsed < windowMs) {
    return { limited: true, retryAfterSec: Math.ceil((windowMs - elapsed) / 1000) };
  }
  bucket.set(userId, now);
  return { limited: false, retryAfterSec: 0 };
}

// Postgres kod kad tablica ne postoji (undefined_table) — migracija nije pokrenuta.
const UNDEFINED_TABLE = "42P01";

/**
 * Provjeri i (ako prolazi) upiši rate-limit pokušaj za (userId, route).
 * windowMs: minimalni razmak između dva zahtjeva istog korisnika na istoj ruti.
 */
export async function checkRateLimit(
  userId: string,
  route: string,
  windowMs: number
): Promise<RateLimitResult> {
  try {
    const admin = createAdminClient();
    const now = Date.now();

    const { data, error } = await admin
      .from("ai_rate_limit")
      .select("last_request_at")
      .eq("user_id", userId)
      .eq("route", route)
      .maybeSingle();

    if (error) {
      if (error.code === UNDEFINED_TABLE) return memoryCheck(route, userId, windowMs);
      throw error;
    }

    const last = data ? new Date(data.last_request_at).getTime() : 0;
    const elapsed = now - last;
    if (elapsed < windowMs) {
      return { limited: true, retryAfterSec: Math.ceil((windowMs - elapsed) / 1000) };
    }

    const { error: upsertError } = await admin
      .from("ai_rate_limit")
      .upsert(
        { user_id: userId, route, last_request_at: new Date(now).toISOString() },
        { onConflict: "user_id,route" }
      );
    if (upsertError && upsertError.code !== UNDEFINED_TABLE) throw upsertError;

    return { limited: false, retryAfterSec: 0 };
  } catch {
    // Supabase nedostupan (mreža, service-role ključ, itd.) — ne blokiraj korisnika.
    return memoryCheck(route, userId, windowMs);
  }
}
