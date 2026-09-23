// lib/discere/exam-client.js
// Klijentski dohvat canonical ispita — port lib/engleski-simulator/examsLoader.js,
// parametriziran predmetom (ADR-001: jedna ruta GET /api/sim/<subject>/exam/<key>).
//
// Razlika prema eng loaderu: canonical ruta vraća envelope
// { key, meta, texts, qs, keys }, a ekrani/schema (exam-schema.js) očekuju
// { meta, questions } — toCanonicalExam() je jedino mjesto koje to pretvara.

import { isAbortError, timeoutSignal } from '../engleski-simulator/fetchTimeout'

/**
 * Način rada koji se traži pri skupnom dohvatu (npr. ekrani nad cijelom
 * bankom — statistike, adaptivno). Namjerno 'exam': najuži mogući payload —
 * skupni dohvat povlači SVE ispite predmeta, a korisnik nijedan od njih nije
 * otvorio, pa vježbanje ovdje ne smije nositi ključeve.
 */
export const BULK_MODE = 'exam'

/** Koliko ispita dohvaćamo usporedno pri skupnom dohvatu. */
const BULK_CONCURRENCY = 6

/** Strop čekanja na jedan dohvat ispita. */
const FETCH_TIMEOUT_MS = 20000

/** Greška dohvata ispita — nosi HTTP status da UI zna razlikovati istek sesije. */
export class ExamLoadError extends Error {
  constructor(message, status = 0) {
    super(message)
    this.name = 'ExamLoadError'
    this.status = status
  }
}

/**
 * Pretvori envelope rute ({ key, meta, texts, qs, keys }) u oblik koji
 * očekuje canonical shema/ekrani ({ meta, questions, keys }).
 * @param {string} key - ključ ispita (fallback ako payload.key nedostaje)
 * @param {object} payload
 * @returns {{meta: object, questions: Array, keys: 'none'|'partial'|'full'}}
 */
export function toCanonicalExam(key, payload) {
  const meta = (payload && payload.meta) || {}
  return {
    meta: { ...meta, key: meta.key ?? (payload && payload.key) ?? key },
    questions: Array.isArray(payload && payload.qs) ? payload.qs : [],
    keys: (payload && payload.keys) || 'none',
  }
}

/**
 * Pokreni `task` nad svakim elementom, najviše `limit` istovremeno, i vrati
 * greške umjesto da prva od njih sruši cijeli posao (semantika `allSettled`).
 */
export async function mapWithLimit(items, limit, task) {
  const errors = []
  let cursor = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    for (;;) {
      const index = cursor++
      if (index >= items.length) return
      try {
        await task(items[index])
      } catch (err) {
        errors.push(err)
      }
    }
  })
  await Promise.all(workers)
  return errors
}

function defaultFetchExam(subjectId) {
  return async function fetchExam(key, mode) {
    let res
    try {
      res = await fetch(`/api/sim/${encodeURIComponent(subjectId)}/exam/${encodeURIComponent(key)}?mode=${mode}`, {
        credentials: 'same-origin',
        headers: { Accept: 'application/json' },
        signal: timeoutSignal(FETCH_TIMEOUT_MS),
      })
    } catch (err) {
      if (isAbortError(err)) throw new ExamLoadError('Dohvat ispita je predugo trajao.', 0)
      throw new ExamLoadError(err?.message || 'Mreža nije dostupna.', 0)
    }
    if (!res.ok) {
      throw new ExamLoadError(`Dohvat ispita ${key} nije uspio (${res.status}).`, res.status)
    }
    return toCanonicalExam(key, await res.json())
  }
}

/**
 * Tvornica loadera za jedan predmet — 'fetchExam' se injektira radi testiranja.
 * @param {string} subjectId
 * @param {(key: string, mode: 'exam'|'practice') => Promise<object>} [fetchExam]
 */
export function createExamsLoader(subjectId, fetchExam = defaultFetchExam(subjectId)) {
  /** key → { exam, mode } */
  const cache = new Map()
  /** `${key}|${mode}` → Promise */
  const pending = new Map()
  let merged = {}
  let mergedStale = false

  function isExamLoaded(key, mode) {
    const hit = cache.get(key)
    return !!hit && (mode === undefined || hit.mode === mode)
  }

  /** Učitaj jedan ispit u traženom načinu rada; istovremeni pozivi dijele promise. */
  function loadExamByKey(key, mode = 'exam') {
    const hit = cache.get(key)
    if (hit && hit.mode === mode) return Promise.resolve(hit.exam)

    const pendingKey = `${key}|${mode}`
    const inFlight = pending.get(pendingKey)
    if (inFlight) return inFlight

    let started
    try {
      started = Promise.resolve(fetchExam(key, mode))
    } catch (err) {
      return Promise.reject(err)
    }

    const p = started
      .then(exam => {
        cache.set(key, { exam, mode })
        mergedStale = true
        pending.delete(pendingKey)
        return exam
      })
      .catch(err => {
        pending.delete(pendingKey)
        throw err
      })
    pending.set(pendingKey, p)
    return p
  }

  /**
   * Učitaj popis ispita (skupni dohvat, mode='exam'). Ekrani nad cijelom
   * bankom su jedini pozivatelji — ulazak u jedan ispit ide kroz
   * loadExamByKey i povlači samo taj ispit.
   * @param {string[]} keys
   */
  function loadMany(keys) {
    return mapWithLimit(keys, BULK_CONCURRENCY, key => loadExamByKey(key, BULK_MODE))
      .then(errors => {
        if (keys.length && errors.length >= keys.length) throw errors[0]
        if (errors.length) {
          console.warn(`Dohvat ${errors.length}/${keys.length} ispita (${subjectId}) nije uspio.`, errors[0])
        }
        return getLoadedSync()
      })
  }

  /** Sinkroni pristup već učitanim ispitima. */
  function getLoadedSync() {
    if (mergedStale) {
      merged = {}
      for (const [key, entry] of cache) merged[key] = entry.exam
      mergedStale = false
    }
    return merged
  }

  /** Samo za testove — očisti keš. */
  function reset() {
    cache.clear()
    pending.clear()
    merged = {}
    mergedStale = false
  }

  return { loadExamByKey, loadMany, getLoadedSync, isExamLoaded, reset }
}
