// lib/sociologija/scoring.js
// ─────────────────────────────────────────────────────────────────────────────
// Čisto ocjenjivanje sociologije — bez uvoza, bez stanja, bez React-a.
//
// PODRIJETLO: doslovan prijepis `nrm`, `chk`, `grade` i `calcXpGain` iz
// public/sim/sociologija.html (inline engine). Funkcije su i dalje ondje — engine
// ih treba za plaćeni tier, koji ključeve dobiva u preglednik (ODLUKA 7) — pa ovaj
// modul NE smije od njih odstupiti: isti ispit i isti odgovori moraju dati isti
// `cor/total/pct/ocjena` na obje strane. Paritet se ne tvrdi komentarom nego
// testom: __tests__/discere/soc-scoring-parity.test.js izvlači `chk`/`grade`
// ravno iz HTML-a acornom i uspoređuje ih s ovima nad sva 32 ispita.
//
// TRI SVJESNE RAZLIKE OD HTML-a, sve u smjeru „ne ruši se“:
//
//   1. `if (!q || !q.sol) return null` — HTML danas bezuvjetno čita `q.sol.cl` i
//      za pitanje bez ključa baca TypeError. To nije teorijsko: 2018_jesen ima tri
//      `mc` pitanja (33_1, 34_1, 35_1) koja u izvoru NEMAJU `sol`, pa svaka
//      predaja tog ispita danas puca. Otkako ispit dolazi s poslužitelja
//      (ADR-001), free korisnik uz to dobiva sva pitanja bez ključa, pa bi
//      bezuvjetni pristup značio bijeli ekran umjesto tihe degradacije.
//      `null` znači „ne ocjenjuje se automatski“, a svi pozivatelji uspoređuju
//      s `=== true`.
//   2. Odgovor koji nije očekivanog tipa (broj tamo gdje se čeka polje, objekt
//      tamo gdje se čeka tekst) ne baca iznimku nego se svodi na prazan odgovor.
//      Ulaz ovdje dolazi iz tijela HTTP zahtjeva, a ne iz UI-ja; HTML na takvom
//      ulazu puca. Za sve oblike koje UI doista proizvodi ponašanje je identično.
//   3. `mat` bez `sol.pairs` daje `null`, a ne `true`. HTML bi bacio iznimku;
//      `[].every(...)` bi tiho vratio `true` i poklonio bod za pokvaren podatak.
//
// Sociologija NEMA bodove po pitanju: rezultat je broj točnih od automatski
// ocjenjivih (mc/ms/mat/fb). Nazivnik su SVA pitanja osim `sa`/`es`, kako ih
// broji `Sim.submit()` — ne samo ona koja je `chk` uspio ocijeniti; inače bi se
// postoci svih zatečenih korisnika tiho promijenili.

/** Tipovi koje se ocjenjuje ručno — nikad ne ulaze u `cor`, ali ulaze u… ništa. */
export const MANUAL_TYPES = Object.freeze(['sa', 'es'])

const MANUAL = new Set(MANUAL_TYPES)

/** Ulazi li pitanje u automatsko ocjenjivanje (nazivnik postotka)? */
export function isAutoGraded(question) {
  return !!question && !MANUAL.has(question.type)
}

/**
 * Normalizacija teksta za usporedbu `fb` odgovora: mala slova, bez rubnih
 * praznina, bez `.,!?;:`. Isto kao `nrm` u HTML-u; `String()` je jedina razlika i
 * postoji samo da ne-tekst iz tijela zahtjeva ne baci iznimku.
 */
export function nrm(s) {
  return String(s || '').toLowerCase().trim().replace(/[.,!?;:]/g, '')
}

/** Odgovor sveden na popis oznaka — polje ostaje polje, tekst se rastavlja na znakove (kao `[...a]` u HTML-u). */
function asList(value) {
  if (Array.isArray(value)) return value
  if (typeof value === 'string') return [...value]
  return []
}

/**
 * Provjeri jedan odgovor.
 *
 * @param {object} q  pitanje SPOJENO s tajnim poljima (javno pitanje + secrets[qid])
 * @param {unknown} a
 * @returns {true|false|null} null = ne ocjenjuje se automatski
 */
export function chk(q, a) {
  if (!q || !q.sol) return null
  if (q.type === 'mc') return q.sol.cl === '?' ? null : a === q.sol.cl
  if (q.type === 'ms') {
    return [...asList(q.sol.cls)].sort().join(',') === [...asList(a)].sort().join(',')
  }
  if (q.type === 'mat') {
    if (!Array.isArray(q.sol.pairs)) return null
    if (!a || typeof a !== 'object') return false
    return q.sol.pairs.every((p) => a[p.l] === p.r)
  }
  if (q.type === 'fb') {
    const accepted = q.sol.alt || [q.sol.ans]
    return asList(accepted).some((x) => nrm(x) === nrm(a))
  }
  return null
}

/**
 * Pragovi ocjene iz HTML-a (`grade(p)`): 85/70/55/40. Jedan izvor istine za
 * klijentski i poslužiteljski put. [minPct, ocjena]
 */
export const GRADE_THRESHOLDS = Object.freeze([
  [85, 5],
  [70, 4],
  [55, 3],
  [40, 2],
  [0, 1],
])

/** Postotak → ocjena 1–5. */
export function grade(p) {
  for (const [min, g] of GRADE_THRESHOLDS) {
    if (p >= min) return g
  }
  return 1
}

/** XP za dovršen ispit — doslovno `calcXpGain` iz HTML-a (drugi argument je i ondje neiskorišten). */
export function calcXpGain(pct) {
  let xp = Math.round(pct * 0.8)
  if (pct >= 85) xp += 30
  else if (pct >= 70) xp += 15
  if (pct === 100) xp += 50
  return Math.max(5, xp)
}

/**
 * Agregat predaje — isti račun koji radi `Sim.submit()` u HTML-u, uz
 * `topicBreakdown` iz `App.onExamDone()` (preskače `sa`/`es`, tema je
 * `q.topic || 'ostalo'`).
 *
 * @param {object[]} questions  pitanja SPOJENA s tajnim poljima
 * @param {Record<string, unknown>} answers
 */
export function scoreExam(questions, answers) {
  const given = answers && typeof answers === 'object' ? answers : {}
  const scores = {}
  const topicBreakdown = {}
  let cor = 0
  let total = 0

  for (const question of Array.isArray(questions) ? questions : []) {
    const id = String(question?.id)
    if (!isAutoGraded(question)) {
      scores[id] = null
      continue
    }
    const ok = chk(question, given[id])
    scores[id] = ok
    total += 1
    if (ok === true) cor += 1

    const topic = question.topic || 'ostalo'
    if (!topicBreakdown[topic]) topicBreakdown[topic] = { correct: 0, total: 0 }
    topicBreakdown[topic].total += 1
    if (ok === true) topicBreakdown[topic].correct += 1
  }

  const pct = total ? Math.round((cor / total) * 100) : 0
  return {
    scores,
    cor,
    total,
    pct,
    grade: grade(pct),
    // Sociologija nema bodove po pitanju — rezultat je čist broj točnih.
    bodovi: null,
    xpGain: calcXpGain(pct),
    topicBreakdown,
  }
}
