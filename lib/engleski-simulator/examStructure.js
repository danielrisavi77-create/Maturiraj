// Struktura državne mature iz engleskog jezika prema službenom NCVVO ispitnom
// katalogu za školsku godinu 2025./2026. (ENG-2026.pdf).
//
// Viša razina (A), ukupno 180 min i 85 bodova: Čitanje 70 min / 40 bodova,
// Pisanje 75 min / 20 bodova, Slušanje ~35 min / 25 bodova — svaka je cjelina
// ponderirana s 1/3 (bodovi NISU udio u ocjeni).
// Osnovna razina (B), ukupno 105 min i 60 bodova: Čitanje i Pisanje rješavaju se
// u JEDNOM bloku od 75 min (Čitanje 30 bodova / 40 %, Pisanje 10 bodova / 30 %),
// Slušanje ~30 min / 20 bodova / 30 %.
// Formula osnovne razine iz kataloga:
//   [(0.4 · Čitanje/30) + (0.3 · Pisanje/10) + (0.3 · Slušanje/20)] · 60
//
// NAPOMENA: 'minutes' za Slušanje uključuje 5 min predviđenih za prijenos
// odgovora na list za odgovore (katalog navodi "približno 35/30 minuta").
export const EXAM_STRUCTURE = {
  visa: {
    blocks: [
      { id: 'reading', label: 'Čitanje', sections: ['reading', 'use_of_english'], minutes: 70, weight: 1 / 3 },
      { id: 'writing', label: 'Pisanje', sections: ['writing'], minutes: 75, weight: 1 / 3 },
      { id: 'listening', label: 'Slušanje', sections: ['listening'], minutes: 35, weight: 1 / 3 },
    ],
  },
  osnovna: {
    blocks: [
      {
        id: 'reading_writing',
        label: 'Čitanje i pisanje',
        sections: ['reading', 'use_of_english', 'writing'],
        minutes: 75,
        parts: [
          { id: 'reading', label: 'Čitanje', sections: ['reading', 'use_of_english'], weight: 0.4 },
          { id: 'writing', label: 'Pisanje', sections: ['writing'], weight: 0.3 },
        ],
      },
      { id: 'listening', label: 'Slušanje', sections: ['listening'], minutes: 30, weight: 0.3 },
    ],
  },
}

// Tipovi koji se ne boduju automatski (kratki odgovor i esej — chk vraća null)
const MANUAL_TYPES = ['sa', 'es']

/**
 * Struktura za danu razinu. Nepoznata razina ('mixed', undefined) → osnovna.
 *
 * @param {string} [razina]
 * @returns {{blocks: Array}}
 */
export function structureFor(razina) {
  return EXAM_STRUCTURE[razina] || EXAM_STRUCTURE.osnovna
}

/**
 * Blokovi (ispitne cjeline kako se rješavaju) za dani ispit, u redoslijedu iz
 * strukture. Svaki blok dobiva 'qIdx' — indekse pitanja iz exam.qs koja mu
 * pripadaju po 'section'. Blokovi bez pitanja se izostavljaju (npr. 2010_zima
 * nema slušanje, 2010_ljeto ima samo slušanje).
 *
 * @param {{razina?: string, qs?: Array}} exam
 * @returns {Array<{id: string, label: string, sections: string[], minutes: number, qIdx: number[]}>}
 */
export function getExamBlocks(exam) {
  const qs = (exam && exam.qs) || []
  return structureFor(exam && exam.razina).blocks
    .map(b => {
      const qIdx = []
      qs.forEach((q, i) => { if (b.sections.includes(q.section)) qIdx.push(i) })
      return { ...b, qIdx }
    })
    .filter(b => b.qIdx.length > 0)
}

/**
 * Ukupno propisano trajanje ispita u minutama — samo blokovi koji u ovom ispitu
 * postoje (180 viša, 105 osnovna, 75 za ispit bez slušanja).
 *
 * @param {{razina?: string, qs?: Array}} exam
 * @returns {number}
 */
export function totalMinutes(exam) {
  return getExamBlocks(exam).reduce((sum, b) => sum + b.minutes, 0)
}

/**
 * Bodovne cjeline za razinu (ono što NCVVO ponderira). Na osnovnoj razini
 * Čitanje i Pisanje su dvije odvojene bodovne cjeline unutar zajedničkog bloka.
 *
 * @param {string} [razina]
 * @returns {Array<{id: string, label: string, sections: string[], weight: number}>}
 */
export function scoringUnits(razina) {
  const out = []
  structureFor(razina).blocks.forEach(b => {
    if (b.parts) {
      b.parts.forEach(p => out.push({ id: p.id, label: p.label, sections: p.sections, weight: p.weight }))
    } else {
      out.push({ id: b.id, label: b.label, sections: b.sections, weight: b.weight })
    }
  })
  return out
}

/**
 * Rezultat po bodovnim cjelinama. Pisanje nije automatski ocjenjivo
 * (autoGraded: false, pct: null) jer ga ocjenjuje ocjenjivač.
 *
 * @param {{razina?: string, qs?: Array}} exam
 * @param {Object} answers - mapa qid → odgovor
 * @param {Function} chkFn - (q, a) => true|false|null
 * @returns {Array<{id: string, label: string, weight: number, correct: number, total: number, autoGraded: boolean, pct: number|null}>}
 */
export function sectionScores(exam, answers, chkFn) {
  const qs = (exam && exam.qs) || []
  const ans = answers || {}
  return scoringUnits(exam && exam.razina)
    .map(u => {
      const uq = qs.filter(q => u.sections.includes(q.section))
      const autoGraded = u.id !== 'writing'
      // Za auto-ocjenjive cjeline u ukupan broj idu samo pitanja koja chk uopće boduje
      const scored = autoGraded ? uq.filter(q => !MANUAL_TYPES.includes(q.type)) : uq
      const correct = autoGraded && chkFn ? scored.filter(q => chkFn(q, ans[q.id]) === true).length : 0
      const total = scored.length
      return {
        id: u.id,
        label: u.label,
        weight: u.weight,
        correct,
        total,
        autoGraded,
        pct: autoGraded && total ? Math.round((correct / total) * 100) : null,
      }
    })
    .filter(u => u.total > 0)
}

/**
 * Ponderirana procjena po NCVVO formuli, ali samo nad auto-ocjenjivim cjelinama:
 * ponderi se renormaliziraju na pokrivene (viša bez pisanja → (Č + S)/2;
 * osnovna → (0.4·Č + 0.3·S)/0.7).
 *
 * @param {Array} scores - izlaz sectionScores()
 * @returns {{pct: number|null, coveredWeight: number}}
 */
export function weightedEstimate(scores) {
  const covered = (scores || []).filter(s => s.autoGraded && s.pct !== null)
  const coveredWeight = covered.reduce((a, s) => a + s.weight, 0)
  if (!covered.length || !coveredWeight) return { pct: null, coveredWeight: 0 }
  const sum = covered.reduce((a, s) => a + s.weight * s.pct, 0)
  return { pct: Math.round(sum / coveredWeight), coveredWeight }
}
