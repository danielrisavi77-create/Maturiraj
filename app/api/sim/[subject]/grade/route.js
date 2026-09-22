// app/api/sim/[subject]/grade/route.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001: JEDNA ruta za ocjenjivanje svih predmeta.
//
//   POST /api/sim/<predmet>/grade   { examKey, answers, examMode, attemptId, qTimes? }
//   → free: { pct, grade, cor, total, bodovi, xpGain, scores }
//     paid: …isto… + { topicBreakdown }
//
// ODLUKE VLASNIKA ugrađene ovdje:
//   • free NAKON predaje dobiva točno/netočno po pitanju (`scores`), ali nikad
//     sol/exp/why/steps — ruta ključeve ne vraća nikome;
//   • rezultat se NE uzima na vjeru od klijenta: ruta ocjenjuje i SAMA upisuje
//     red u sim_progress;
//   • najviše 5 ocijenjenih predaja po (korisnik, ispit) u 24 h i najmanje 60 s
//     razmaka. Bez toga je serversko ocjenjivanje kozmetika: `cor` je oracle iz
//     kojeg se ključ izvlači mijenjanjem jednog odgovora po zahtjevu.
//
// ZAŠTO KORISNIKOV KLIJENT, A NE ADMIN: RLS politika na sim_progress
// (supabase/migrations/20260627000000_sim_progress.sql) dopušta korisniku
// select/insert vlastitih redaka, a ruta piše isključivo redak tog korisnika.
// Service-role bi tu samo zaobišao RLS bez ikakve dobiti. Admin ključ ostaje
// gdje mu je mjesto — u checkRateLimit (atomični RPC) i getUserTier.
//
// ZAŠTO SE BUDŽET BROJI U sim_progress, BEZ NOVE TABLICE: ova ruta i tako piše
// po jedan redak po ocijenjenoj predaji, pa je brojanje istog skupa jedini
// izvor istine koji ne može otići u nesklad. Cijena: brojanje zahvaća i retke
// koje je za taj ispit upisao naslijeđeni klijentski put (lib/sim-progress.ts),
// dakle može precijeniti potrošnju — a to je smjer koji pooštrava, ne popušta.
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getUserTier } from '@/lib/billing/subscriptions'
import { normalizeTier, isPaidTier } from '@/lib/billing/getEffectiveTier'
import { checkRateLimit } from '@/lib/rate-limit'
import { getAdapter } from '@/lib/exam-secrets/registry'
import { stripQuestions } from '@/lib/exam-secrets'

export const dynamic = 'force-dynamic'

const SUBJECT_PATTERN = /^[a-z]{2,16}$/
const EXAM_KEY_PATTERN = /^[A-Za-z0-9_-]{1,64}$/
const ATTEMPT_ID_PATTERN = /^[A-Za-z0-9_-]{8,64}$/

/** Najmanji razmak između dvije ocijenjene predaje istog ispita. */
export const GRADE_MIN_INTERVAL_MS = 60 * 1000
/** Budžet ocijenjenih predaja po (korisnik, ispit) u 24 h. */
export const GRADE_DAILY_BUDGET = 5
const DAY_MS = 24 * 60 * 60 * 1000

const HEADERS = Object.freeze({
  'Cache-Control': 'private, no-store',
  Vary: 'Cookie',
})

/** Postgres/PostgREST kodovi kad migracija s attempt_id još nije pokrenuta. */
const UNKNOWN_COLUMN = new Set(['42703', 'PGRST204'])
let warnedMissingAttemptColumn = false

function isUnknownColumn(error) {
  if (!error) return false
  if (error.code && UNKNOWN_COLUMN.has(error.code)) return true
  return /attempt_id/.test(`${error.message ?? ''}${error.details ?? ''}`)
}

function fail(message, status, extraHeaders) {
  return NextResponse.json({ error: message }, { status, headers: { ...HEADERS, ...extraHeaders } })
}

/* ── idempotencija ─────────────────────────────────────────────────────────
   Dvije razine. Memorija je brza i pokriva ponovni klik u istoj instanci;
   trajna je provjera nad sim_progress.attempt_id i jedina koja vrijedi kroz
   instance. Ako migracija s tim stupcem nije pokrenuta, ostaje samo memorija —
   slabije, ali nikad krivo: u najgorem slučaju se ista predaja ocijeni dvaput.  */
const ATTEMPT_CACHE_MAX = 500
const attemptCache = new Map()

function readAttemptCache(key) {
  const hit = attemptCache.get(key)
  if (!hit) return null
  if (Date.now() - hit.at >= DAY_MS) {
    attemptCache.delete(key)
    return null
  }
  return hit.body
}

function writeAttemptCache(key, body) {
  if (attemptCache.size >= ATTEMPT_CACHE_MAX) attemptCache.delete(attemptCache.keys().next().value)
  attemptCache.set(key, { at: Date.now(), body })
}

async function findPriorAttempt(db, userId, subject, examKey, attemptId) {
  const { data, error } = await db
    .from('sim_progress')
    .select('answers, exam_mode')
    .eq('user_id', userId)
    .eq('subject', subject)
    .eq('exam_key', examKey)
    .eq('attempt_id', attemptId)
    .maybeSingle()

  if (error) {
    if (!isUnknownColumn(error)) console.error('[sim/grade] provjera attemptId-a nije uspjela.', error)
    return null
  }
  return data ?? null
}

async function countRecentAttempts(db, userId, subject, examKey) {
  const since = new Date(Date.now() - DAY_MS).toISOString()
  const { count, error } = await db
    .from('sim_progress')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('subject', subject)
    .eq('exam_key', examKey)
    .gte('created_at', since)

  if (error) {
    // Fail-open bi ovdje bio pogrešan smjer, ali fail-closed bi zbog jedne
    // nedostupne tablice svima blokirao predaju. Prijavi i pusti — razmak od
    // 60 s (atomičan, kroz RPC) i dalje vrijedi.
    console.error('[sim/grade] brojanje predaja nije uspjelo.', error)
    return 0
  }
  return count ?? 0
}

async function insertProgress(db, row) {
  const { error } = await db.from('sim_progress').insert(row)
  if (!error) return null
  if (!isUnknownColumn(error) || !('attempt_id' in row)) return error

  if (!warnedMissingAttemptColumn) {
    warnedMissingAttemptColumn = true
    console.warn(
      '[sim/grade] sim_progress.attempt_id ne postoji — pokreni migraciju '
        + 'supabase/migrations/20260922000000_sim_progress_attempt_id.sql. '
        + 'Do tada je idempotencija samo u memoriji procesa.',
    )
  }
  const { attempt_id: _ignored, ...withoutAttemptId } = row
  const retry = await db.from('sim_progress').insert(withoutAttemptId)
  return retry.error ?? null
}

/* ── ocjenjivanje ──────────────────────────────────────────────────────────── */

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

function clampPct(value) {
  const pct = Math.round(Number(value))
  if (!Number.isFinite(pct)) return 0
  return Math.min(100, Math.max(0, pct))
}

function buildBody(result, paid) {
  const body = {
    pct: clampPct(result?.pct),
    grade: result?.grade ?? null,
    cor: Number(result?.cor) || 0,
    total: Number(result?.total) || 0,
    bodovi: result?.bodovi ?? null,
    xpGain: Number(result?.xpGain) || 0,
    scores: isPlainObject(result?.scores) ? result.scores : {},
  }
  // topicBreakdown je razrada po temama — Standard sadržaj. Server ga svejedno
  // izračuna jer ga upisuje u sim_progress, ali free korisniku ne izlazi.
  if (paid) body.topicBreakdown = isPlainObject(result?.topicBreakdown) ? result.topicBreakdown : {}
  return body
}

export async function POST(request, { params } = {}) {
  const resolved = await params
  const subject = resolved?.subject ?? ''
  if (!SUBJECT_PATTERN.test(subject)) return fail('Neispravni parametri.', 400)

  const body = await request.json().catch(() => null)
  if (!isPlainObject(body)) return fail('Neispravno tijelo zahtjeva.', 400)

  const examKey = typeof body.examKey === 'string' ? body.examKey : ''
  const attemptId = typeof body.attemptId === 'string' ? body.attemptId : ''
  if (!EXAM_KEY_PATTERN.test(examKey) || !ATTEMPT_ID_PATTERN.test(attemptId)) {
    return fail('Neispravni parametri.', 400)
  }
  if (!isPlainObject(body.answers)) return fail('Nedostaju odgovori.', 400)

  const answers = body.answers
  const examMode = body.examMode !== false
  const qTimes = isPlainObject(body.qTimes) ? body.qTimes : {}
  const durationSec = Number.isInteger(body.durationSec) ? body.durationSec : null

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  const user = auth?.user
  if (!user) return fail('Prijava je obavezna.', 401)

  const adapter = getAdapter(subject)
  if (!adapter) return fail('Predmet nije dostupan.', 404)

  const exam = await adapter.loadPublic(examKey)
  if (!exam) return fail('Ispit ne postoji.', 404)

  const tier = normalizeTier(await getUserTier(user.id))
  const paid = isPaidTier(tier)

  // Ponovljeni attemptId vraća ISTI odgovor i ne troši ni limit ni budžet.
  const cacheKey = `${user.id}|${subject}|${examKey}|${attemptId}`
  const cached = readAttemptCache(cacheKey)
  if (cached) return NextResponse.json(buildBody(cached, paid), { headers: HEADERS })

  const publicQs = stripQuestions(exam.qs, adapter.publicFields)

  /** Tajni store se čita tek kad je jasno da se doista ocjenjuje. */
  const loadSecretsOrFail = async () => {
    const secrets = await adapter.loadSecrets(examKey)
    if (secrets) return secrets
    console.error(`[sim/grade] ${subject}/${examKey}: nema tajnog storea, ocjenjivanje nije moguće.`)
    return null
  }

  const prior = await findPriorAttempt(supabase, user.id, subject, examKey, attemptId)
  if (prior) {
    const secrets = await loadSecretsOrFail()
    if (!secrets) return fail('Ispit se trenutačno ne može ocijeniti.', 500)
    // Ocjenjuju se SPREMLJENI odgovori, ne novoposlani — inače bi ponovljeni
    // attemptId bio besplatan dodatni pokušaj.
    const replay = await adapter.score(publicQs, secrets, isPlainObject(prior.answers) ? prior.answers : {})
    writeAttemptCache(cacheKey, replay)
    return NextResponse.json(buildBody(replay, paid), { headers: HEADERS })
  }

  const limit = await checkRateLimit(user.id, `sim-grade:${subject}:${examKey}`, GRADE_MIN_INTERVAL_MS)
  if (limit.limited) {
    return fail(
      `Predaja je moguća svakih ${Math.round(GRADE_MIN_INTERVAL_MS / 1000)} s. Pokušaj ponovno za ${limit.retryAfterSec} s.`,
      429,
      { 'Retry-After': String(limit.retryAfterSec) },
    )
  }

  const used = await countRecentAttempts(supabase, user.id, subject, examKey)
  if (used >= GRADE_DAILY_BUDGET) {
    return fail(
      `Iskorišten je dnevni budžet od ${GRADE_DAILY_BUDGET} ocijenjenih predaja za ovaj ispit. Pokušaj ponovno sutra.`,
      429,
      { 'Retry-After': String(Math.round(DAY_MS / 1000)) },
    )
  }

  const secrets = await loadSecretsOrFail()
  if (!secrets) return fail('Ispit se trenutačno ne može ocijeniti.', 500)

  const result = await adapter.score(publicQs, secrets, answers)
  const razina = exam.meta?.razina === 'A' || exam.meta?.razina === 'B' ? exam.meta.razina : null

  const insertError = await insertProgress(supabase, {
    user_id: user.id,
    subject,
    exam_key: examKey,
    exam_label: exam.meta?.label ?? null,
    razina,
    pct: clampPct(result?.pct),
    grade: result?.grade ?? null,
    correct: Number(result?.cor) || 0,
    total: Number(result?.total) || 0,
    exam_mode: examMode,
    answers,
    q_times: qTimes,
    topic_breakdown: isPlainObject(result?.topicBreakdown) ? result.topicBreakdown : {},
    duration_sec: durationSec,
    attempt_id: attemptId,
  })
  if (insertError) {
    // Rezultat je izračunat i točan; izgubljeno je samo trajno spremanje.
    // Odbiti ga ovdje značilo bi korisniku pojesti pokušaj zbog tuđeg kvara.
    console.error('[sim/grade] upis u sim_progress nije uspio.', insertError)
  }

  writeAttemptCache(cacheKey, result)
  return NextResponse.json(buildBody(result, paid), { headers: HEADERS })
}
