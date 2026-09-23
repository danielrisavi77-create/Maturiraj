import 'server-only'
// lib/exam-secrets/public-store.js
// ─────────────────────────────────────────────────────────────────────────────
// Zajednički čitač JAVNIH ispita: content/<predmet>/exams/<examKey>.json.
//
// Sadržaj je javan, pa datoteka namjerno nema marker tajnog modula (sloj A u
// scripts/security/exam-secret-scan.mjs) — ali dira `fs` i `process.cwd()`, pa
// ostaje `server-only`. Prije je isti kôd (put + LRU keš +
// ENOENT kao "ispit ne postoji") stajao prepisan u eng i soc adapteru; svaki
// novi canonical predmet bio bi treća kopija.
//
// Keš ima strop jer jedna serverless instanca ne smije završiti sa svih ~70
// ispita u memoriji; promašaji se NE keširaju (negativan keš bi novododanu
// datoteku sakrio do restarta instance).
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { isSafeSegment } from './index.js'

export const DEFAULT_MAX_CACHED_EXAMS = 24

/** Zadana provjera oblika: javni payload rute ({ key, meta, texts, qs }). */
function defaultNormalize(parsed) {
  return Array.isArray(parsed.qs) ? parsed : null
}

/**
 * @param {string} subject
 * @param {{ max?: number, normalize?: (parsed: object, examKey: string) => object|null }} [options]
 *        `normalize` pretvara sadržaj datoteke u payload rute i vraća null kad
 *        oblik nije valjan (ruta tada odgovara 404, kao i za ENOENT).
 */
export function createPublicStore(subject, { max = DEFAULT_MAX_CACHED_EXAMS, normalize } = {}) {
  const toPayload = typeof normalize === 'function' ? normalize : defaultNormalize
  const cache = new Map()

  /** Apsolutna putanja javnog ispita, ili null za neispravan segment. */
  function publicPath(examKey) {
    if (!isSafeSegment(subject) || !isSafeSegment(examKey)) return null
    return path.join(process.cwd(), 'content', subject, 'exams', `${examKey}.json`)
  }

  /** @param {string} examKey @returns {Promise<object|null>} */
  async function load(examKey) {
    const file = publicPath(examKey)
    if (!file) return null

    const cached = cache.get(examKey)
    if (cached !== undefined) return cached

    let parsed = null
    try {
      parsed = JSON.parse(await readFile(file, 'utf8'))
    } catch (err) {
      // ENOENT je legitiman odgovor ("ispit ne postoji"), sve ostalo je kvar.
      if (err?.code !== 'ENOENT') {
        console.error(`[exam-secrets/${subject}] ${examKey}: javni payload nije čitljiv.`, err)
      }
      return null
    }
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null

    const payload = toPayload(parsed, examKey)
    if (!payload) return null

    if (cache.size >= max) cache.delete(cache.keys().next().value)
    cache.set(examKey, payload)
    return payload
  }

  /** Samo za testove i regeneraciju sadržaja. */
  function clear() {
    cache.clear()
  }

  return { load, clear, publicPath }
}
