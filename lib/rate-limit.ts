// lib/rate-limit.ts
// Zajednički rate-limit helper za AI rute (2.4). Izvor istine je Supabase —
// funkcija public.ai_rate_limit_try nad tablicom ai_rate_limit
// (supabase/migrations/20260722000000_ai_rate_limit.sql +
//  supabase/migrations/20260722010000_ai_rate_limit_atomic.sql) — radi kroz više
// instanci/regija procesa, za razliku od stare in-memory Mape po ruti.
//
// Provjera MORA biti atomična: raniji SELECT-pa-UPSERT je pucao na burstu
// (N paralelnih zahtjeva pročita isti stari timestamp prije nego ijedan upiše novi
// i svi prođu). Zato cijeli "provjeri i pomakni" korak radi jedan
// INSERT ... ON CONFLICT DO UPDATE ... WHERE unutar RPC-a, a "limited" se izvodi
// iz toga je li redak stvarno ažuriran.
//
// Ako migracija (još) nije pokrenuta ili je Supabase nedostupan, pada natrag na
// in-memory Mapu po procesu. Fallback je slabiji (po procesu), pa se svaki prelazak
// na njega logira i svaki uspješan DB prolaz se zrcali u Mapu — inače bi prvi
// zahtjev nakon ispada Supabasea prošao neograničeno za svakog korisnika.
import { createAdminClient } from "@/lib/supabase/server";

export type RateLimitResult = { limited: boolean; retryAfterSec: number };

// in-memory fallback: route -> (userId -> zadnji zahtjev u ms)
const _memory = new Map<string, Map<string, number>>();

function memoryBucket(route: string): Map<string, number> {
  let bucket = _memory.get(route);
  if (!bucket) {
    bucket = new Map();
    _memory.set(route, bucket);
  }
  return bucket;
}

// Sinkrono (read + set u istom ticku) => atomično unutar procesa.
function memoryCheck(route: string, userId: string, windowMs: number): RateLimitResult {
  const bucket = memoryBucket(route);
  const now = Date.now();
  const last = bucket.get(userId) ?? 0;
  const elapsed = now - last;
  if (elapsed < windowMs) {
    return { limited: true, retryAfterSec: Math.ceil((windowMs - elapsed) / 1000) };
  }
  bucket.set(userId, now);
  return { limited: false, retryAfterSec: 0 };
}

// Zrcali zadnji poznati zahtjev iz DB puta u fallback Mapu, da fallback ne krene
// od praznog stanja ("jedan besplatan zahtjev po korisniku") kad Supabase padne.
function memoryTouch(route: string, userId: string, ts: number): void {
  const bucket = memoryBucket(route);
  const last = bucket.get(userId) ?? 0;
  if (ts > last) bucket.set(userId, ts);
}

// Postgres kodovi kad migracija nije pokrenuta.
const UNDEFINED_TABLE = "42P01"; // tablica ne postoji
const UNDEFINED_FUNCTION = "42883"; // RPC ne postoji
const MISSING_MIGRATION = new Set([UNDEFINED_TABLE, UNDEFINED_FUNCTION]);

// Nedostajuća migracija je trajno stanje procesa — logiraj jednom po ruti, ne po zahtjevu.
const _warnedMissingMigration = new Set<string>();

function fallback(route: string, userId: string, windowMs: number, reason: unknown): RateLimitResult {
  const missing = typeof reason === "string";
  if (missing) {
    if (!_warnedMissingMigration.has(route)) {
      _warnedMissingMigration.add(route);
      console.error(
        `[rate-limit] ${route}: ai_rate_limit_try nedostupan (${reason}) — migracija nije pokrenuta. ` +
          "Fallback na in-memory limit po procesu (ne vrijedi kroz instance)."
      );
    }
  } else {
    console.error(`[rate-limit] ${route}: Supabase provjera nije uspjela, fallback na in-memory limit.`, reason);
  }
  return memoryCheck(route, userId, windowMs);
}

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

    // Jedan atomični poziv: RPC vrati 0 (prošlo, timestamp već pomaknut) ili
    // broj preostalih ms do kraja prozora (limited).
    const { data, error } = await admin.rpc("ai_rate_limit_try", {
      p_user_id: userId,
      p_route: route,
      p_window_ms: windowMs,
    });

    if (error) {
      if (error.code && MISSING_MIGRATION.has(error.code)) {
        return fallback(route, userId, windowMs, error.code);
      }
      throw error;
    }

    const remainingMs = Number(data);
    if (!Number.isFinite(remainingMs)) {
      throw new Error(`ai_rate_limit_try vratio neočekivanu vrijednost: ${JSON.stringify(data)}`);
    }

    const now = Date.now();
    if (remainingMs > 0) {
      // Limited — zrcali kad je bio zadnji (uspješan) zahtjev prema DB-u.
      memoryTouch(route, userId, now - Math.max(0, windowMs - remainingMs));
      return { limited: true, retryAfterSec: Math.ceil(remainingMs / 1000) };
    }

    memoryTouch(route, userId, now);
    return { limited: false, retryAfterSec: 0 };
  } catch (err) {
    // Supabase nedostupan (mreža, service-role ključ, itd.) — ne blokiraj korisnika,
    // ali ostavi trag u logovima da distribuirani limit trenutno ne radi.
    return fallback(route, userId, windowMs, err);
  }
}
