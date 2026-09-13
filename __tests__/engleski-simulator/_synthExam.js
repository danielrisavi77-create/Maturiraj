// Sintetički ispit više razine za testove ExamPlayScreena.
//
// Nije test datoteka (nema .test.js) — samo pomoćni modul. Ispit je sintetički
// namjerno: pravi ispiti iz exams.js imaju desetine pitanja po cjelini, pa bi
// provjera blokovske navigacije bila nečitka i spora.
//
// Struktura više razine daje točno tri bloka: Čitanje 70 min, Pisanje 75 min,
// Slušanje 35 min (lib/engleski-simulator/examStructure.js).

/**
 * @param {{id: string, section: string}} args
 * @returns {Object} mc pitanje s rješenjem 'A'
 */
function mc({ id, section }) {
  return {
    id,
    section,
    type: 'mc',
    topic: section,
    q: id + '-TEXT',
    opts: [id + '-optA', id + '-optB', id + '-optC'],
    sol: { cl: 'A' },
  }
}

/**
 * @param {{id: string}} args
 * @returns {Object} esejsko pitanje (chk vraća null — ocjenjivač ga ocjenjuje)
 */
function es({ id }) {
  return { id, section: 'writing', type: 'es', topic: 'writing', q: id + '-TEXT', sol: { cl: null } }
}

/**
 * Sintetički ispit više razine: po 2 pitanja u Čitanju, Pisanju i Slušanju.
 * @returns {{key: string, year: number, season: string, label: string, razina: string, qs: Array}}
 */
export function makeVisaExam() {
  return {
    key: 'vis_9999_test',
    year: 9999,
    season: 'test',
    label: 'Testni rok',
    razina: 'visa',
    qs: [
      mc({ id: 'R1', section: 'reading' }),
      mc({ id: 'R2', section: 'reading' }),
      es({ id: 'W1' }),
      es({ id: 'W2' }),
      mc({ id: 'L1', section: 'listening' }),
      mc({ id: 'L2', section: 'listening' }),
    ],
  }
}

/** userAccess koji prolazi checkSimulatorAccess za sva pitanja (pro + prijavljen). */
export const PRO_ACCESS = { subscriptionTier: 'pro', isLoggedIn: true }

/** userAccess koji je zaključan iza FREE_LIMIT pitanja (besplatan, ali prijavljen). */
export const FREE_ACCESS = { subscriptionTier: 'free', isLoggedIn: true }
