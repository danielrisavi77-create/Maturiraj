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
// ZAŠTO SE BUDŽET NE BROJI U sim_progress: brojanje redaka bilo je dvostruko
// krhko. (1) Redak nastaje tek nakon uspješnog INSERT-a, a INSERT ruta namjerno
// prašta — dovoljan je jedan namjerno neispravan `durationSec` ili odgovor s NUL
// bajtom pa upis padne, brojač nikad ne poraste i budžet se ne potroši.
// (2) Tablicu korisnik po RLS-u ("for all using auth.uid() = user_id") smije i
// BRISATI, pa bi budžet resetirao upravo onaj od koga štiti. Zato brojač živi u
// public.ai_rate_limit, koju piše isključivo service-role (lib/rate-limit.ts),
// i to kao N "mjesta" s prozorom od 24 h — isti atomični RPC koji drži i razmak
// od 60 s.
import { createHash } from 'node:crypto'
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
/**
 * Koliko od tih mjesta smije potrošiti vježbanje. Ostatak je rezerviran za
 * ispitni mod: bez toga pet predaja iz vježbanja ostavi korisnika koji je
 * navečer odradio 90-minutnu simulaciju bez ijednog rezultata.
 */
export const GRADE_PRACTICE_BUDGET = 3
const DAY_MS = 24 * 60 * 60 * 1000

/** Gornje granice ulaza — sve što ih probije je napad, ne pokušaj. */
const MAX_ANSWER_ENTRIES = 500
const MAX_ANSWER_STRING = 2000
const MAX_NESTED_ENTRIES = 64
const MAX_DURATION_SEC = 24 * 60 * 60
const MAX_QTIME_SEC = 24 * 60 * 60

const HEADERS = Object.freeze({
  'Cache-Control': 'private, no-store',
  Vary: 'Cookie',
})

/** Postgres/PostgREST kodovi kad migracija s attempt_id još nije pokrenuta. */
const UNKNOWN_COLUMN = new Set(['42703', 'PGRST204'])
/** Jedinstveni indeks (user_id, attempt_id) — isti pokušaj je već upisan. */
const UNIQUE_VIOLATION = '23505'
let warnedMissingAttemptColumn = false

function isUnknownColumn(error) {
  if (!error) return false
  if (error.code && UNKNOWN_COLUMN.has(error.code)) return true
  return /attempt_id/.test(`${error.message ?? ''}${error.details ?? ''}`)
}

function fail(message, status, extraHeaders) {
  return NextResponse.json({ error: message }, { status, headers: { ...HEADERS, ...extraHeaders } })
}

/* ── provjera ulaza ────────────────────────────────────────────────────────
   Sve što ide u `jsonb` mora proći ovdje. Postgres odbija NUL bajt u jsonb-u i
   vrijednost izvan raspona `int4`, a takav pad INSERT-a je bio besplatan način
   da se predaja ocijeni bez traga (vidi zaglavlje). */

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

function isSafeText(value) {
  return typeof value === 'string' && value.length <= MAX_ANSWER_STRING && !value.includes('\u0000')
}

function isSafeScalar(value) {
  if (value === null || typeof value === 'boolean') return true
  if (typeof value === 'number') return Number.isFinite(value)
  return isSafeText(value)
}

/** Odgovor je skalar, ili plitka struktura skalara (npr. mapa parova kod 'mat'). */
function isSafeAnswer(value, depth = 0) {
  if (isSafeScalar(value)) return true
  if (depth >= 2) return false
  if (Array.isArray(value)) {
    return value.length <= MAX_NESTED_ENTRIES && value.every(item => isSafeAnswer(item, depth + 1))
  }
  if (isPlainObject(value)) {
    const keys = Object.keys(value)
    if (keys.length > MAX_NESTED_ENTRIES) return false
    return keys.every(key => isSafeText(key) && isSafeAnswer(value[key], depth + 1))
  }
  return false
}

function isSafeAnswerMap(map) {
  const keys = Object.keys(map)
  if (keys.length > MAX_ANSWER_ENTRIES) return false
  return keys.every(key => isSafeText(key) && isSafeAnswer(map[key]))
}

/** Zadrži samo ključeve koji doista postoje u ovom ispitu. */
function pickKnown(source, ids, transform) {
  const out = {}
  for (const id of ids) {
    if (!Object.prototype.hasOwnProperty.call(source, id)) continue
    const value = transform ? transform(source[id]) : source[id]
    if (value !== undefined) out[id] = value
  }
  return out
}

function asQTime(value) {
  if (!Number.isFinite(value)) return undefined
  return Math.min(MAX_QTIME_SEC, Math.max(0, Math.round(value)))
}

/* ── idempotencija ─────────────────────────────────────────────────────────
   Tri razine. Memorija je najbrža i pokriva ponovni klik u istoj instanci;
   sim_progress.attempt_id je trajan, ali ovisi o pokrenutoj migraciji; zato
   iznad oboga stoji otisak (attemptId + odgovori) u ai_rate_limit, koji vrijedi
   kroz instance i bez te migracije.

   Ponovljena predaja ISTIH odgovora ne troši ni razmak ni budžet: rezultat je
   čista funkcija (ispit, odgovori), pa ponavljanje ne otkriva ni jedan novi bit.
   Budžet time zapravo broji RAZLIČITE skupove odgovora — upravo ono što oracle
   napad treba, a legitiman korisnik ne. */
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

/** Stabilan JSON (ključevi po abecedi) — otisak ne smije ovisiti o redoslijedu. */
function stableStringify(value) {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`
  if (isPlainObject(value)) {
    return `{${Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`)
      .join(',')}}`
  }
  return JSON.stringify(value === undefined ? null : value)
}

function answersFingerprint(answers) {
  return createHash('sha256').update(stableStringify(answers)).digest('hex').slice(0, 32)
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

/**
 * Potroši jedno mjesto dnevnog budžeta.
 *
 * Mjesta su ključevi u ai_rate_limit s prozorom od 24 h, pa je "koliko je
 * predaja ostalo" izvedeno iz tablice koju korisnik ne smije ni čitati ni
 * brisati. Vježbanje ide od dna (0…), ispitni mod od vrha (…N-1), pa
 * GRADE_DAILY_BUDGET - GRADE_PRACTICE_BUDGET mjesta ostaje nedostupno
 * vježbanju — ispitni pokušaj se ne može potrošiti u vježbanju.
 */
async function consumeBudgetSlot(userId, subject, examKey, examMode) {
  const slots = examMode
    ? Array.from({ length: GRADE_DAILY_BUDGET }, (_, i) => GRADE_DAILY_BUDGET - 1 - i)
    : Array.from({ length: GRADE_PRACTICE_BUDGET }, (_, i) => i)

  let soonest = Number.POSITIVE_INFINITY
  for (const slot of slots) {
    const res = await checkRateLimit(userId, `sim-grade-day:${subject}:${examKey}:${slot}`, DAY_MS)
    if (!res.limited) return { ok: true }
    soonest = Math.min(soonest, res.retryAfterSec || 0)
  }
  return {
    ok: false,
    retryAfterSec: Number.isFinite(soonest) && soonest > 0 ? soonest : Math.round(DAY_MS / 1000),
  }
}

async function insertProgress(db, row) {
  const { error } = await db.from('sim_progress').insert(row)
  if (!error) return null
  // Jedinstveni indeks (user_id, attempt_id): isti pokušaj je već upisan, što je
  // točno ono što idempotencija i traži — nije greška.
  if (error.code === UNIQUE_VIOLATION) return null
  if (!isUnknownColumn(error) || !('attempt_id' in row)) return error

  if (!warnedMissingAttemptColumn) {
    warnedMissingAttemptColumn = true
    console.warn(
      '[sim/grade] sim_progress.attempt_id ne postoji — pokreni migraciju '
        + 'supabase/migrations/20260922000000_sim_progress_attempt_id.sql. '
        + 'Do tada idempotenciju drži otisak pokušaja u ai_rate_limit.',
    )
  }
  const { attempt_id: _ignored, ...withoutAttemptId } = row
  const retry = await db.from('sim_progress').insert(withoutAttemptId)
  return retry.error ?? null
}

/* ── ocjenjivanje ──────────────────────────────────────────────────────────── */

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
  if (!isSafeAnswerMap(body.answers)) return fail('Neispravni odgovori.', 400)

  const sentQTimes = isPlainObject(body.qTimes) ? body.qTimes : {}
  const examMode = body.examMode !== false
  const durationSec = Number.isInteger(body.durationSec)
    && body.durationSec >= 0
    && body.durationSec <= MAX_DURATION_SEC
    ? body.durationSec
    : null

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
  // Odgovori i vremena svedeni na pitanja koja ovaj ispit doista ima: višak
  // ključeva ocjenjivanje ionako ignorira, a u `jsonb` nema što tražiti.
  const questionIds = publicQs.map(question => question?.id).filter(id => typeof id === 'string')
  const answers = pickKnown(body.answers, questionIds)
  const qTimes = pickKnown(sentQTimes, questionIds, asQTime)

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

  // Otisak pokušaja: isti attemptId s istim odgovorima na bilo kojoj instanci.
  // Prvi poziv ga "zauzme" (RPC je atomičan), svaki sljedeći ga prepozna kao
  // ponavljanje — pa mrežni retry ne čeka 60 s i ne troši mjesto u budžetu.
  const replayKey = `sim-grade-attempt:${subject}:${examKey}:${attemptId}:${answersFingerprint(answers)}`
  const replay = await checkRateLimit(user.id, replayKey, DAY_MS)
  if (replay.limited) {
    const secrets = await loadSecretsOrFail()
    if (!secrets) return fail('Ispit se trenutačno ne može ocijeniti.', 500)
    const result = await adapter.score(publicQs, secrets, answers)
    writeAttemptCache(cacheKey, result)
    // Bez upisa: redak je upisao prvi poziv (ili ga je odbio limit, pa ga ovaj
    // ponovljeni pokušaj ne smije stvoriti mimo budžeta).
    return NextResponse.json(buildBody(result, paid), { headers: HEADERS })
  }

  const limit = await checkRateLimit(user.id, `sim-grade:${subject}:${examKey}`, GRADE_MIN_INTERVAL_MS)
  if (limit.limited) {
    return fail(
      `Predaja je moguća svakih ${Math.round(GRADE_MIN_INTERVAL_MS / 1000)} s. Pokušaj ponovno za ${limit.retryAfterSec} s.`,
      429,
      { 'Retry-After': String(limit.retryAfterSec) },
    )
  }

  const budget = await consumeBudgetSlot(user.id, subject, examKey, examMode)
  if (!budget.ok) {
    return fail(
      examMode
        ? `Iskorišten je dnevni budžet od ${GRADE_DAILY_BUDGET} ocijenjenih predaja za ovaj ispit. Pokušaj ponovno sutra.`
        : `Iskorišten je dnevni budžet od ${GRADE_PRACTICE_BUDGET} ocijenjenih vježbanja za ovaj ispit. Simulacija s timerom i dalje je moguća.`,
      429,
      { 'Retry-After': String(budget.retryAfterSec) },
    )
  }

  const secrets = await loadSecretsOrFail()
  if (!secrets) return fail('Ispit se trenutačno ne može ocijeniti.', 500)

  const result = await adapter.score(publicQs, secrets, answers)
  // sim_progress.razina zna samo za 'A'/'B'. Predmet čija je vlastita oznaka
  // razine drukčija (engleski: 'visa'/'osnovna') daje `meta.razinaCode`; bez
  // njega bi stupac tiho ostao prazan za sve njegove retke.
  const razinaRaw = exam.meta?.razinaCode ?? exam.meta?.razina
  const razina = razinaRaw === 'A' || razinaRaw === 'B' ? razinaRaw : null

  const insertError = await insertProgress(supabase, {
    user_id: user.id,
    subject,
    exam_key: examKey,
    // `fullLabel` je naziv kakav predmet piše u povijest ("2024. — Ljetni rok");
    // `label` je kratak naziv za UI. Predmet koji ih ne razlikuje daje samo label.
    exam_label: exam.meta?.fullLabel ?? exam.meta?.label ?? null,
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
    // Budžet je već potrošen u ai_rate_limit, pa pad upisa ništa ne oslobađa.
    console.error('[sim/grade] upis u sim_progress nije uspio.', insertError)
  }

  writeAttemptCache(cacheKey, result)
  return NextResponse.json(buildBody(result, paid), { headers: HEADERS })
}
