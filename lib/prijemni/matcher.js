/** @import { Studij } from '@/lib/types/prijemni' */

// ── Module-level match cache ────────────────────────────────────────────────
// Caches matchStudij results across all renders and components.
// Key: "${studijId}:${scoresHash}". Evicts oldest 25% when full.
const _cache = new Map()
const _CACHE_MAX = 500

/**
 * Lightweight fingerprint of a UserScores object.
 * Serialises only the numeric/object fields that affect scoring.
 * @param {UserScores} scores
 * @returns {string}
 */
export function hashScores(scores) {
  const {
    prosjek_r1, prosjek_r2, prosjek_r3, prosjek_r4,
    mat_a_pct, mat_b_pct, hrv_a_pct, hrv_b_pct,
    eng_a_pct, eng_b_pct, izborni, posebne_provjere,
  } = scores
  return JSON.stringify([
    prosjek_r1, prosjek_r2, prosjek_r3, prosjek_r4,
    mat_a_pct, mat_b_pct, hrv_a_pct, hrv_b_pct,
    eng_a_pct, eng_b_pct, izborni, posebne_provjere,
  ])
}

/**
 * @typedef {Object} UserScores
 * @property {number|null} [prosjek_r1]
 * @property {number|null} [prosjek_r2]
 * @property {number|null} [prosjek_r3]
 * @property {number|null} [prosjek_r4]
 * @property {number|null} [mat_a_pct]
 * @property {number|null} [mat_b_pct]
 * @property {number|null} [hrv_a_pct]
 * @property {number|null} [hrv_b_pct]
 * @property {number|null} [eng_a_pct]
 * @property {number|null} [eng_b_pct]
 * @property {Record<string, number|null>} [izborni]
 * @property {Record<string, number|boolean|null>} [posebne_provjere]
 */

/**
 * @typedef {'safe'|'borderline'|'risky'|'no_data'|'incomputable'} MatchStatus
 */

/**
 * @typedef {Object} MatchResult
 * @property {string} studij_id
 * @property {MatchStatus} status
 * @property {number|null} bodovi
 * @property {number|null} prag
 * @property {number|null} razlika  - bodovi - prag
 * @property {number} completeness  - 0-1, koliko inputa je user dao od potrebnih
 * @property {string[]} missing_fields
 * @property {string} [reason]
 */

/** @type {Record<string, { a: string, b: string }>} */
const PREDMET_TO_FIELD = {
  'Matematika':        { a: 'mat_a_pct', b: 'mat_b_pct' },
  'Matematika (A)':    { a: 'mat_a_pct', b: 'mat_a_pct' },
  'Matematika (B)':    { a: 'mat_b_pct', b: 'mat_b_pct' },
  'Hrvatski':          { a: 'hrv_a_pct', b: 'hrv_b_pct' },
  'Hrvatski (A)':      { a: 'hrv_a_pct', b: 'hrv_a_pct' },
  'Hrvatski (B)':      { a: 'hrv_b_pct', b: 'hrv_b_pct' },
  'Strani jezik':      { a: 'eng_a_pct', b: 'eng_b_pct' },
  'Strani jezik (A)':  { a: 'eng_a_pct', b: 'eng_a_pct' },
  'Strani jezik (B)':  { a: 'eng_b_pct', b: 'eng_b_pct' },
}

/** @type {Record<string, string>} */
const IZBORNI_KEYS = {
  'Biologija':   'bio',
  'Kemija':      'kem',
  'Fizika':      'fiz',
  'Povijest':    'pov',
  'Geografija':  'geo',
  'Psihologija': 'psi',
  'Sociologija': 'soc',
  'Filozofija':  'fil',
  'Latinski':    'lat',
  'Likovna':     'lik',
  'Glazbena':    'glz',
}

/**
 * Izračunaj procijenjene bodove za studij na temelju user score-ova.
 *
 * @param {Studij} studij
 * @param {UserScores} scores
 * @returns {MatchResult}
 */
export function matchStudij(studij, scores) {
  // ── Cache lookup ──────────────────────────────────────────────────────────
  const _hash = hashScores(scores)
  const _key  = `${studij.id}:${_hash}`
  if (_cache.has(_key)) return _cache.get(_key)

  function _store(result) {
    if (_cache.size >= _CACHE_MAX) {
      // Evict oldest 25%
      const evict = Array.from(_cache.keys()).slice(0, _CACHE_MAX >> 2)
      evict.forEach(k => _cache.delete(k))
    }
    _cache.set(_key, result)
    return result
  }

  const base = {
    studij_id: studij.id,
    bodovi: null,
    prag: studij.prag_2025,
    razlika: null,
    completeness: 0,
    missing_fields: [],
  }

  // 1. Studij nema kalk formulu → audicija / psihomotorika
  if (!studij.kalk) {
    return _store({
      ...base,
      status: 'incomputable',
      reason: `${studij.naziv} zahtijeva ${studij.tip_upisa === 'audicija' ? 'audiciju' : 'provjeru psihomotorike'} — bodovi se ne mogu automatski procijeniti.`,
    })
  }

  const k = studij.kalk
  let totalBod = 0
  let fieldsFilled = 0
  let fieldsNeeded = 0
  const missing = []

  // ─── Prosjeci ocjena ───
  const prosjeci = [scores.prosjek_r1, scores.prosjek_r2, scores.prosjek_r3, scores.prosjek_r4]
  const filledProsjeci = prosjeci.filter(p => p != null && p > 0)
  fieldsNeeded += 4
  fieldsFilled += filledProsjeci.length
  if (filledProsjeci.length < 4) {
    missing.push(`Unesi prosjeke svih 4 razreda (trenutno ${filledProsjeci.length}/4)`)
  }
  if (filledProsjeci.length > 0) {
    const avg = filledProsjeci.reduce((a, b) => a + (b || 0), 0) / 4 // /4 fiksno, nedostajući = 0
    totalBod += (avg / 5) * k.ocjene_max
  }

  // ─── Matura polja ───
  for (const polje of k.polja) {
    fieldsNeeded += 1
    let pct = null

    // 1) Standardni predmeti (mat, hrv, eng)
    const mapped = PREDMET_TO_FIELD[polje.label] || PREDMET_TO_FIELD[polje.label.split(' ')[0]]
    if (mapped) {
      const fieldKey = polje.razina === 'B' ? mapped.b : mapped.a
      pct = scores[fieldKey] ?? null
    }

    // 2) Izborni predmet
    if (pct == null) {
      const izbKey = IZBORNI_KEYS[polje.label] || IZBORNI_KEYS[polje.label.split(' ')[0]]
      if (izbKey && scores.izborni) {
        pct = scores.izborni[izbKey] ?? null
      }
    }

    if (pct != null && pct > 0) {
      fieldsFilled += 1
      // Razina B ide do 160% (1.6x skala)
      const bod = polje.razina === 'B'
        ? (pct / 160) * polje.max
        : (pct / 100) * polje.max
      totalBod += Math.min(bod, polje.max)
    } else {
      missing.push(`Unesi ${polje.label} (max ${polje.max} bod.)`)
    }
  }

  // ─── Posebne provjere (ZVS, motorika) ───
  if (k.posebno) {
    fieldsNeeded += 1
    const key  = `zvs_${studij.fakultet_id}`
    const key2 = `motorika_${studij.fakultet_id}`
    const pct  = scores.posebne_provjere?.[key] ?? scores.posebne_provjere?.[key2] ?? null

    if (typeof pct === 'number' && pct > 0) {
      fieldsFilled += 1
      totalBod += (pct / 100) * k.posebno.max
    } else {
      missing.push(`Unesi ${k.posebno.label} (max ${k.posebno.max} bod.)`)
    }
  }

  const bodovi = Math.round(totalBod)
  const completeness = fieldsNeeded > 0 ? fieldsFilled / fieldsNeeded : 0

  // ─── Status ───
  if (!studij.prag_2025) {
    return _store({ ...base, bodovi, completeness, missing_fields: missing, status: 'no_data' })
  }

  const razlika = bodovi - studij.prag_2025

  // Ako user nije popunio ništa bitno → no_data
  if (completeness < 0.3) {
    return _store({ ...base, bodovi: null, completeness, missing_fields: missing, status: 'no_data' })
  }

  let status
  if (completeness < 0.6) {
    status = 'borderline'
  } else if (razlika >= 20) {
    status = 'safe'
  } else if (razlika >= -20) {
    status = 'borderline'
  } else {
    status = 'risky'
  }

  return _store({ ...base, bodovi, razlika, completeness, missing_fields: missing, status })
}

/**
 * Matchaj sve studije i grupiraj po statusu.
 *
 * @param {Studij[]} studiji
 * @param {UserScores} scores
 */
export function matchAll(studiji, scores) {
  const results = studiji.map(s => ({ studij: s, match: matchStudij(s, scores) }))

  const groups = {
    safe:         results.filter(r => r.match.status === 'safe'),
    borderline:   results.filter(r => r.match.status === 'borderline'),
    risky:        results.filter(r => r.match.status === 'risky'),
    no_data:      results.filter(r => r.match.status === 'no_data'),
    incomputable: results.filter(r => r.match.status === 'incomputable'),
  }

  // Sort svaku grupu descendingly po razlici (najbolji prvi)
  for (const key of Object.keys(groups)) {
    groups[key].sort((a, b) => (b.match.razlika ?? -Infinity) - (a.match.razlika ?? -Infinity))
  }

  return { results, groups }
}

/**
 * Quick check: je li user uopće unio dovoljno za smisleni match?
 *
 * @param {UserScores} scores
 * @returns {boolean}
 */
export function hasMinimumScores(scores) {
  const prosjeci = [scores.prosjek_r1, scores.prosjek_r2, scores.prosjek_r3, scores.prosjek_r4]
  const hasProsjek = prosjeci.some(p => p != null && p > 0)
  const hasMatura = !!(scores.mat_a_pct || scores.mat_b_pct || scores.hrv_a_pct || scores.hrv_b_pct)
  return hasProsjek && hasMatura
}
