// Lijeno učitavanje ispita po razini.
//
// exams.js (~1.7 MB) više se NE uvozi statički u klijentski bundle. Umjesto njega
// postoje tri generirane datoteke (scripts/gen-eng-exams-json.mjs):
//   exams-index.json    — lagani indeks svih 70 ispita (bez pitanja), statički import
//   exams-osnovna.json  — puni ispiti osnovne razine, dinamički import
//   exams-visa.json     — puni ispiti više razine, dinamički import
//
// Dinamički importi su napisani kao dvije eksplicitne grane jer webpack/turbopack
// za code-splitting traže statički poznatu putanju (template literal ne bi dao
// zasebne chunkove).

import examsIndex from '../data/engleski-simulator/exams-index.json'

export const RAZINE = ['osnovna', 'visa']

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

function defaultImporter(razina) {
  return razina === 'visa'
    ? import('../data/engleski-simulator/exams-visa.json')
    : import('../data/engleski-simulator/exams-osnovna.json')
}

/**
 * Tvornica loadera — 'importer' se injektira radi testiranja.
 * @param {(razina: string) => Promise<object>} importer
 */
export function createExamsLoader(importer = defaultImporter) {
  const cache = {}
  const pending = {}
  let merged = {}
  let mergedStale = false

  function isRazinaLoaded(razina) {
    return !!cache[razina]
  }

  /** Učitaj jednu razinu; istovremeni pozivi dijele isti promise. */
  function loadRazina(razina) {
    if (cache[razina]) return Promise.resolve(cache[razina])
    if (pending[razina]) return pending[razina]
    const p = (async () => {
      const mod = await importer(razina)
      const data = (mod && mod.default) || mod
      cache[razina] = data
      mergedStale = true
      delete pending[razina]
      return data
    })().catch(err => {
      // Greška se propagira, ali se pending čisti da je retry moguć.
      delete pending[razina]
      throw err
    })
    pending[razina] = p
    return p
  }

  /** Učitaj sve razine i vrati spojenu mapu ispita. */
  function loadAllRazine() {
    return Promise.all(RAZINE.map(loadRazina)).then(() => getLoadedSync())
  }

  /** Učitaj razinu kojoj pripada ključ i vrati taj ispit (ili undefined). */
  function loadExamByKey(key) {
    return loadRazina(razinaForKey(key)).then(map => map[key])
  }

  /**
   * Sinkroni pristup već učitanim razinama. Identitet rezultata je stabilan
   * dok se ne učita nova razina — sigurno za React usporedbe.
   */
  function getLoadedSync() {
    if (mergedStale) {
      merged = RAZINE.reduce((acc, r) => (cache[r] ? { ...acc, ...cache[r] } : acc), {})
      mergedStale = false
    }
    return merged
  }

  /** Samo za testove — očisti keš. */
  function reset() {
    RAZINE.forEach(r => { delete cache[r]; delete pending[r] })
    merged = {}
    mergedStale = false
  }

  return { loadRazina, loadAllRazine, loadExamByKey, getLoadedSync, isRazinaLoaded, reset }
}

const shared = createExamsLoader()

export const loadRazina = shared.loadRazina
export const loadAllRazine = shared.loadAllRazine
export const loadExamByKey = shared.loadExamByKey
export const getLoadedSync = shared.getLoadedSync
export const isRazinaLoaded = shared.isRazinaLoaded
