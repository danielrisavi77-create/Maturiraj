import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { computePercentile, bestPctByUser } from "@/lib/discere/percentile";

// GET /api/discere/percentile?subject=hrv&examKey=2025_ljeto_A&pct=72
// → { n, percentile } — postotak maturanata s lošijim rezultatom na istom ispitu.
// Vraća samo agregat: pojedinačni redovi ni user_id nikad ne izlaze iz rute.

const WINDOW_MS = 365 * 24 * 60 * 60 * 1000;
const PAGE = 1000;
const MAX_ROWS = 20000;
const CACHE_HEADERS = { "Cache-Control": "private, max-age=300" };
const DIST_TTL_MS = 5 * 60 * 1000;
const DIST_MAX_KEYS = 200;
const RATE_MAX = 20;
const RATE_WINDOW_MS = 60 * 1000;

// Distribucija je ista za sve korisnike i mijenja se sporo, a `pct` je samo parametar
// računanja — zato se drži sažeta distribucija (jedan red po korisniku) u memoriji, da
// petlja po pct-u ne pokreće nijedan novi upit. Rate limit ograničava i promašaje keša
// (različiti examKey), jer upit ide service-role ključem, mimo RLS-a.
const distCache = new Map();
const rateHits = new Map();

function prune(map, ttl, now) {
  for (const [key, value] of map) if (now - value.at >= ttl) map.delete(key);
}

function rateLimited(userId) {
  const now = Date.now();
  const hit = rateHits.get(userId);
  if (!hit || now - hit.at >= RATE_WINDOW_MS) {
    if (rateHits.size > DIST_MAX_KEYS) prune(rateHits, RATE_WINDOW_MS, now);
    rateHits.set(userId, { at: now, n: 1 });
    return false;
  }
  hit.n += 1;
  return hit.n > RATE_MAX;
}

function readDist(key) {
  const hit = distCache.get(key);
  if (!hit || Date.now() - hit.at >= DIST_TTL_MS) return null;
  return hit.rows;
}

function writeDist(key, rows) {
  const now = Date.now();
  if (distCache.size >= DIST_MAX_KEYS) {
    prune(distCache, DIST_TTL_MS, now);
    if (distCache.size >= DIST_MAX_KEYS) distCache.delete(distCache.keys().next().value);
  }
  distCache.set(key, { at: now, rows });
}

export async function GET(req) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const subject = (searchParams.get("subject") || "").trim();
  const examKey = (searchParams.get("examKey") || "").trim();
  const pct = Number(searchParams.get("pct"));

  if (
    !/^[a-z]{2,12}$/.test(subject) ||
    !/^[A-Za-z0-9_-]{1,64}$/.test(examKey) ||
    !Number.isInteger(pct) || pct < 0 || pct > 100
  ) {
    return NextResponse.json({ error: "Neispravni parametri." }, { status: 400 });
  }

  if (rateLimited(user.id)) {
    return NextResponse.json({ error: "Previše zahtjeva. Pokušaj za koju minutu." }, { status: 429 });
  }

  try {
    const cacheKey = subject + "|" + examKey;
    let dist = readDist(cacheKey);

    if (!dist) {
      const admin = createAdminClient();
      const since = new Date(Date.now() - WINDOW_MS).toISOString();

      // PostgREST nema distinct-on, pa se "jedan red po korisniku (najbolji pct)"
      // računa u bestPctByUser; stranicanje jer je odgovor ograničen na ~1000 redova.
      const rows = [];
      for (let from = 0; from < MAX_ROWS; from += PAGE) {
        const { data, error } = await admin
          .from("sim_progress")
          .select("user_id,pct")
          .eq("subject", subject)
          .eq("exam_key", examKey)
          .eq("exam_mode", true)
          .gte("created_at", since)
          .order("id", { ascending: true })
          .range(from, from + PAGE - 1);
        if (error) throw error;
        rows.push(...data);
        if (data.length < PAGE) break;
      }

      dist = bestPctByUser(rows);
      writeDist(cacheKey, dist);
    }

    return NextResponse.json(computePercentile(dist, pct), { headers: CACHE_HEADERS });
  } catch (err) {
    console.error("[discere/percentile]", err);
    return NextResponse.json({ error: "Percentil trenutačno nije dostupan." }, { status: 500 });
  }
}
