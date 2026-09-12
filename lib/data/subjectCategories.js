/**
 * Ruter: predmet → kategorija → Claude model za generiranje sadržaja skripti.
 *
 * Kategorije prate postojeću podjelu u ./subjects.js (SUBJECTS_OBVEZNI/PRIRODO/
 * DRUSTVO/UMJETNOST/KLASICNI), uz dvije prilagodbe za generiranje sadržaja:
 *  - Latinski/Grčki (SUBJECTS_KLASICNI) tretiraju se kao jezici, ne kao poseban blok.
 *  - Umjetnost (SUBJECTS_UMJETNOST) koristi isti model kao društveni predmeti,
 *    ali svoj vlastiti prompt (vidi scripts/skripta-prompts/umjetnost.js).
 *
 * Matematika je konceptualno prirodni predmet, ali NIJE u ovoj mapi jer već ima
 * gotov sadržaj i ne dira se generatorom skripti u ovoj fazi.
 */

export const SUBJECT_CATEGORY = {
  // ── Jezici (moderni + klasični) ──────────────────────────────────────────
  nje: 'jezici',
  fra: 'jezici',
  tal: 'jezici',
  spn: 'jezici',
  lat: 'jezici',
  grk: 'jezici',

  // ── Prirodni ──────────────────────────────────────────────────────────────
  fiz: 'prirodni',
  bio: 'prirodni',
  inf: 'prirodni',

  // ── Društveni ─────────────────────────────────────────────────────────────
  geo: 'drustveni',
  pov: 'drustveni',
  psi: 'drustveni',
  fil: 'drustveni',
  log: 'drustveni',
  pig: 'drustveni',
  vje: 'drustveni',
  eti: 'drustveni',

  // ── Umjetnost (poseban prompt, model kao društveni) ─────────────────────
  gla: 'umjetnost',
  lik: 'umjetnost',
}

// Predmeti već pokriveni ručno/starijim skriptama — generator ih preskače.
export const EXCLUDED_SUBJECTS = new Set(['hrv', 'mat', 'eng', 'kem', 'soc'])

export const CATEGORY_MODEL = {
  jezici: 'claude-sonnet-5',
  prirodni: 'claude-opus-5',
  drustveni: 'claude-sonnet-5',
  umjetnost: 'claude-sonnet-5',
}

export function getSubjectCategory(subjectId) {
  return SUBJECT_CATEGORY[subjectId] || null
}

export function getModelForSubject(subjectId) {
  const category = getSubjectCategory(subjectId)
  return category ? CATEGORY_MODEL[category] : null
}

export function getMissingSubjectIds() {
  return Object.keys(SUBJECT_CATEGORY)
}
