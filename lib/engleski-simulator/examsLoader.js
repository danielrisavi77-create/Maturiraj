// Učitavanje ispita engleskog — PO ISPITU, s poslužitelja (ADR-001).
//
// Prije je ovdje stajao `import('../data/engleski-simulator/exams-visa.json')`,
// pa je ulazak u JEDAN ispit povlačio cijelu razinu kao javan webpack chunk —
// 440 KB (osnovna) odnosno 791 KB (viša), sa svim `sol` i `exp`, bez ikakve
// provjere prijave. Danas ispit dolazi s `GET /api/sim/eng/exam/<key>?mode=…`,
// koja ključeve dodaje tek onoliko koliko tier i način rada dopuštaju.
//
// Ostaje statički samo `exams-index.json` (meta i broj pitanja, bez ijednog
// pitanja) — početni ekran ga treba sinkrono i ne otkriva ništa.
//
// ZAŠTO JE `mode` DIO KLJUČA KEŠA: isti ispit u vježbanju smije nositi ključeve
// za prvih FREE_LIMIT pitanja, a u ispitnom modu nijedan. Kad bi se keširani
// payload iz vježbanja upotrijebio u ispitnom modu, klijent bi po prekidaču
// `qs.some(q => q.sol)` pomislio da smije ocjenjivati sam — s ključevima za tri
// pitanja i krivim rezultatom. Cijena je jedan dodatni dohvat (~20 KB) kad
// korisnik na istom ispitu prijeđe iz vježbanja u simulaciju.

import examsIndex from '../data/engleski-simulator/exams-index.json'
import { isAbortError, timeoutSignal } from './fetchTimeout'

export const RAZINE = ['osnovna', 'visa']

/** Koliko ispita dohvaćamo usporedno kad ekran treba cijelu banku. */
const BULK_CONCURRENCY = 6

/**
 * Način rada koji se traži pri skupnom dohvatu. Namjerno 'exam', dakle najuži
 * mogući payload: skupni dohvat povlači SVE ispite banke, a korisnik ni jedan od
 * njih nije otvorio — traži li ih kao vježbanje, svaki odgovor nosi onoliko
 * ključeva koliko vježbanje smije nositi, pomnoženo sa 70.
 */
const BULK_MODE = 'exam'

/** Strop čekanja na jedan dohvat ispita (vidi fetchTimeout.js). */
const FETCH_TIMEOUT_MS = 20000

/** Greška dohvata ispita — nosi HTTP status da UI zna razlikovati istek sesije. */
export class ExamLoadError extends Error {
  constructor(message, status = 0) {
    super(message)
    this.name = 'ExamLoadError'
    this.status = status
  }
}

/** Lagani indeks ispita — dostupan sinkrono, bez pitanja. */
export function getExamsIndex() {
  return examsIndex
}

/** Razina iz ključa ispita ('vis_' prefiks) ili iz indeksa; fallback 'osnovna'. */
export function razinaForKey(key) {
  if (typeof key === 'string' && key.startsWith('vis_')) return 'visa'
  const rec = examsIndex.find(r => r.key === key)
  return rec ? rec.razina : 'osnovna'
}

/** Ključevi ispita jedne razine, po redoslijedu iz indeksa. */
export function examKeysForRazina(razina) {
  return examsIndex.filter(r => r.razina === razina).map(r => r.key)
}

/**
 * Envelope rute → oblik ispita kakav očekuju ekrani
 * ({ key, year, season, label, razina, hasListening, hasReading, qs }).
 */
export function toExam(key, payload) {
  const meta = (payload && payload.meta) || {}
  return {
    ...meta,
    key: (payload && payload.key) || key,
    texts: (payload && payload.texts) || {},
    qs: Array.isArray(payload && payload.qs) ? payload.qs : [],
  }
}

async function defaultFetchExam(key, mode) {
  let res
  try {
    res = await fetch(`/api/sim/eng/exam/${encodeURIComponent(key)}?mode=${mode}`, {
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
  return toExam(key, await res.json())
}

/**
 * Pokreni `task` nad svakim elementom, najviše `limit` istovremeno, i vrati
 * greške umjesto da prva od njih sruši cijeli posao (semantika `allSettled`).
 *
 * Skupni dohvat je 70 zahtjeva. S `Promise.all` je jedan 500 ili timeout rušio
 * svih 70 — a poziva se i u pozadini, na ekranu rezultata, pa je jedan pali
 * zahtjev znao korisniku zamijeniti upravo zarađen rezultat karticom o grešci.
 */
async function mapWithLimit(items, limit, task) {
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

/**
 * Tvornica loadera — 'fetchExam' se injektira radi testiranja.
 * @param {(key: string, mode: 'exam'|'practice') => Promise<object>} fetchExam
 */
export function createExamsLoader(fetchExam = defaultFetchExam) {
  /** key → { exam, mode } */
  const cache = new Map()
  /** `${key}|${mode}` → Promise */
  const pending = new Map()
  const razinaLoaded = new Set()
  let merged = {}
  let mergedStale = false

  function isExamLoaded(key, mode) {
    const hit = cache.get(key)
    return !!hit && (mode === undefined || hit.mode === mode)
  }

  function isRazinaLoaded(razina) {
    return razinaLoaded.has(razina)
  }

  /** Učitaj jedan ispit u traženom načinu rada; istovremeni pozivi dijele promise. */
  function loadExamByKey(key, mode = 'exam') {
    const hit = cache.get(key)
    if (hit && hit.mode === mode) return Promise.resolve(hit.exam)

    const pendingKey = `${key}|${mode}`
    const inFlight = pending.get(pendingKey)
    if (inFlight) return inFlight

    // Dohvat se pokreće SINKRONO: tek tada dva poziva u istom tiku dijele isti
    // promise umjesto da oba krenu na mrežu.
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
        // Greška se propagira, ali se pending čisti da je retry moguć.
        pending.delete(pendingKey)
        throw err
      })
    pending.set(pendingKey, p)
    return p
  }

  /**
   * Učitaj sve ispite jedne razine. Ekrani koji analiziraju cijelu banku
   * (statistike, filter, usporedba, PDF) su jedini pozivatelji — ulazak u jedan
   * ispit ide kroz loadExamByKey i povlači samo taj ispit.
   */
  function loadRazina(razina) {
    const keys = examKeysForRazina(razina)
    return mapWithLimit(keys, BULK_CONCURRENCY, key => loadExamByKey(key, BULK_MODE))
      .then(errors => {
        // Ništa nije stiglo → to je prava greška (istekla sesija, mreža dolje) i
        // ekran mora ponuditi ponovni pokušaj.
        if (keys.length && errors.length >= keys.length) throw errors[0]
        // Dio je stigao: ekran se otvara s onim što ima. Razinu NE proglašavamo
        // učitanom, pa sljedeći ulazak dohvati samo ono što nedostaje (ostalo je
        // već u kešu) umjesto da rupa ostane zauvijek.
        if (errors.length) {
          console.warn(`Dohvat ${errors.length}/${keys.length} ispita razine ${razina} nije uspio.`, errors[0])
        } else {
          razinaLoaded.add(razina)
        }
        return getLoadedSync()
      })
  }

  /** Učitaj sve razine i vrati spojenu mapu ispita. */
  function loadAllRazine() {
    return Promise.all(RAZINE.map(loadRazina)).then(() => getLoadedSync())
  }

  /**
   * Sinkroni pristup već učitanim ispitima. Identitet rezultata je stabilan
   * dok se ne učita novi ispit — sigurno za React usporedbe.
   */
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
    razinaLoaded.clear()
    merged = {}
    mergedStale = false
  }

  return { loadExamByKey, loadRazina, loadAllRazine, getLoadedSync, isExamLoaded, isRazinaLoaded, reset }
}

const shared = createExamsLoader()

export const loadExamByKey = shared.loadExamByKey
export const loadRazina = shared.loadRazina
export const loadAllRazine = shared.loadAllRazine
export const getLoadedSync = shared.getLoadedSync
export const isExamLoaded = shared.isExamLoaded
export const isRazinaLoaded = shared.isRazinaLoaded
