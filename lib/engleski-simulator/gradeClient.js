// Predaja ispita engleskog na ocjenjivanje — klijentska strana ugovora
// `POST /api/sim/eng/grade` (ADR-001, odjeljak 5a).
//
// Poslužitelj vraća { pct, grade, cor, total, bodovi, xpGain, scores } i sam
// upisuje redak u sim_progress; klijent iz `scores` (qid → true|false|null)
// izvodi sve što je prije računao iz ključeva — bojenje mrežice, rezultat po
// cjelinama, topic_breakdown i errorTracker (vidi scoreLookup u scoring.js).

import { isAbortError, timeoutSignal } from './fetchTimeout'

const ENDPOINT = '/api/sim/eng/grade'

/** Strop čekanja na ocjenjivanje; predaja je jedan kratak zahtjev, ne prijenos. */
const SUBMIT_TIMEOUT_MS = 30000

/**
 * Greška predaje — `status` razlikuje istek sesije (401) i odbijenu predaju
 * (429), a `retryAfterSec` razlikuje dvije vrste 429: razmak od 60 s (kratko,
 * klijent odbroji i ponovi s istim attemptId) od dnevnog budžeta (sati, gdje je
 * jedini pošten odgovor iskrena poruka).
 */
export class GradeError extends Error {
  constructor(message, status = 0, retryAfterSec = 0) {
    super(message)
    this.name = 'GradeError'
    this.status = status
    this.retryAfterSec = retryAfterSec
  }
}

/**
 * Identitet pokušaja. Mora preživjeti ponovni pokušaj nakon mrežne greške —
 * isti id poslužitelj prepoznaje kao istu predaju, vrati isti rezultat i ne
 * potroši budžet od 5 ocijenjenih predaja po ispitu u 24 h.
 */
export function newAttemptId() {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID()
  } catch {}
  return `a${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`
}

/**
 * @param {{examKey: string, answers: object, qTimes?: object, examMode?: boolean, attemptId: string, durationSec?: number|null}} input
 * @returns {Promise<{pct: number, grade: number|string, cor: number, total: number, bodovi: unknown, xpGain: number, scores: Record<string, boolean|null>, topicBreakdown?: object}>}
 */
export async function submitGrade({ examKey, answers, qTimes, examMode, attemptId, durationSec }) {
  const body = { examKey, answers: answers || {}, qTimes: qTimes || {}, examMode: !!examMode, attemptId }
  if (Number.isInteger(durationSec)) body.durationSec = durationSec

  let res
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      // Bez stropa zahtjev nad izgubljenom vezom visi zauvijek: gumb ostaje na
      // "Predajem…", a `finally` s ponovnim pokušajem se nikad ne izvrši.
      signal: timeoutSignal(SUBMIT_TIMEOUT_MS),
    })
  } catch (err) {
    if (isAbortError(err)) throw new GradeError('Slanje je predugo trajalo.', 0)
    throw new GradeError(err?.message || 'Mreža nije dostupna.', 0)
  }

  const payload = await res.json().catch(() => null)
  if (!res.ok) {
    const retryAfter = Number(res.headers?.get?.('Retry-After'))
    throw new GradeError(
      payload?.error || `Ocjenjivanje nije uspjelo (${res.status}).`,
      res.status,
      Number.isFinite(retryAfter) && retryAfter > 0 ? Math.ceil(retryAfter) : 0,
    )
  }
  return payload
}

/** Poruka za korisnika; sve je na hrvatskom jer je ovo tekst u sučelju. */
export function gradeErrorMessage(err) {
  if (err?.status === 401) return 'Sesija je istekla. Prijavi se pa ponovno predaj — odgovori su sačuvani.'
  if (err?.status === 429) return err.message || 'Previše predaja u kratkom vremenu. Pokušaj ponovno malo kasnije.'
  if (err?.status === 404) return 'Ovaj ispit nije dostupan za ocjenjivanje.'
  return 'Slanje rezultata nije uspjelo. Odgovori su sačuvani — pokušaj ponovno.'
}
