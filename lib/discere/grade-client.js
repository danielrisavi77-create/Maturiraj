// lib/discere/grade-client.js
// Predaja ispita na ocjenjivanje — port lib/engleski-simulator/gradeClient.js,
// parametriziran predmetom (ADR-001: jedna ruta POST /api/sim/<subject>/grade).
//
// Poslužitelj vraća { pct, grade, cor, total, bodovi, xpGain, scores } (+ za
// paid `topicBreakdown`) i sam upisuje redak u sim_progress; klijent ne
// računa ocjenu, samo je raspoređuje po ekranu.

import { isAbortError, timeoutSignal } from '../engleski-simulator/fetchTimeout'

/** Strop čekanja na ocjenjivanje; predaja je jedan kratak zahtjev, ne prijenos. */
const SUBMIT_TIMEOUT_MS = 30000

/**
 * Greška predaje — `status` razlikuje istek sesije (401) i odbijenu predaju
 * (429), a `retryAfterSec` razlikuje razmak od 60 s od dnevnog budžeta.
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
 * isti id poslužitelj prepoznaje kao istu predaju i ne troši budžet.
 */
export function newAttemptId() {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID()
  } catch {}
  return `a${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`
}

/**
 * @param {string} subjectId
 * @param {{examKey: string, answers: object, qTimes?: object, examMode?: boolean, attemptId: string, durationSec?: number|null}} body
 * @returns {Promise<{pct: number, grade: number|string, cor: number, total: number, bodovi: unknown, xpGain: number, scores: Record<string, boolean|null>, topicBreakdown?: object}>}
 */
export async function submitGrade(subjectId, body) {
  const { examKey, answers, qTimes, examMode, attemptId, durationSec } = body || {}
  const payloadBody = { examKey, answers: answers || {}, qTimes: qTimes || {}, examMode: !!examMode, attemptId }
  if (Number.isInteger(durationSec)) payloadBody.durationSec = durationSec

  let res
  try {
    res = await fetch(`/api/sim/${encodeURIComponent(subjectId)}/grade`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payloadBody),
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
