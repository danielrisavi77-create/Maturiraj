// Shared constants for Engleski simulator

export const TOPIC_LABELS = {
  reading_a: 'Reading A', reading_b: 'Reading B', reading_c: 'Reading C',
  reading_d: 'Reading D', reading_e: 'Reading E', reading_f: 'Reading F',
  reading_match: 'Reading matching', reading_ins: 'Reading insertion',
  reading_mc4: 'Reading MC', reading_cloze4: 'Reading cloze',
  reading_opencloze: 'Reading open cloze',
  listening_a: 'Listening A', listening_b: 'Listening B',
  listening_c: 'Listening C', listening_d: 'Listening D',
  listening_match: 'Listening matching', listening_mc3: 'Listening MC',
  listening_books: 'Listening books',
  writing_essay: 'Writing essay', writing_a: 'Writing A',
  writing_b: 'Writing B', writing_email: 'Writing email',
  use_cloze: 'Use of English cloze', use_mc: 'Use of English MC',
  use_wf: 'Word formation', use_of_english: 'Use of English',
}

export const TLBL = {
  mc: 'Višestruki izbor', ins: 'Umetanje', mat: 'Povezivanje',
  fb: 'Dopunjavanje', sa: 'Kratki odgovor', es: 'Esej',
}

export const TBDG = {
  mc: 'b-mc', ins: 'b-ins', mat: 'b-mat', fb: 'b-fb', sa: 'b-sa', es: 'b-sa',
}

export const GC = {
  1: 'var(--red)', 2: '#f97316', 3: 'var(--gold)', 4: '#60a5fa', 5: 'var(--green)',
}

export const LL = ['A', 'B', 'C', 'D', 'E', 'F']

export const LEVEL_NAMES = ['Početnik', 'Vježbač', 'Napredni', 'Matura Pro', 'Matura Master']

export const XP_LEVELS = [0, 250, 700, 1400, 2500, 4000]

export function getLevel(xp = 0) {
  let l = 0
  for (let i = 0; i < XP_LEVELS.length; i++) {
    if (xp >= XP_LEVELS[i]) l = i
  }
  return l
}

export function xpToNext(xp = 0) {
  const l = getLevel(xp)
  return XP_LEVELS[l + 1] ? XP_LEVELS[l + 1] - xp : 0
}

export function xpProgress(xp = 0) {
  const l = getLevel(xp)
  const base = XP_LEVELS[l]
  const next = XP_LEVELS[l + 1]
  return next ? Math.round((xp - base) / (next - base) * 100) : 100
}

export function grade(p) {
  return p >= 85 ? 5 : p >= 70 ? 4 : p >= 55 ? 3 : p >= 40 ? 2 : 1
}
