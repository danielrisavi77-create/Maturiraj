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

// Ljestvica ocjena 1-5: crvena -> narančasta -> zlatna -> plava -> zelena.
// GC su CSS varijable teme i vrijede SAMO u DOM-u pod .eng-sim. Vrijednosti dolaze iz
// scopeanog bloka `.eng-sim` / `body.dark-mode .eng-sim` u
// app/discere/engleski/simulator/simulator.css (NE iz app/globals.css — ondje je jedna
// fiksna tamna paleta bez svijetle varijante i --orange je posve druga boja).
export const GC = {
  1: 'var(--red)', 2: 'var(--orange)', 3: 'var(--gold)', 4: 'var(--blue)', 5: 'var(--green)',
}

// Ista ljestvica u hex obliku — za kontekste koji ne razumiju CSS varijable.
// Canvas 2D ih tiho ignorira (fillStyle ostane stara boja) ili baca SyntaxError
// (createLinearGradient().addColorStop), pa ShareStoryCard mora dobiti hex.
// Vrijednosti su tamni par iz simulator.css jer je podloga story kartice uvijek tamna.
export const GC_HEX = {
  1: '#f87171', 2: '#fb923c', 3: '#e9b446', 4: '#4b7bff', 5: '#3ecf6e',
}

export const LL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']

// Napomena o orijentacijskoj ocjeni — jedan izvor teksta za sve ekrane.
export const GRADE_NOTE = 'Orijentacijska ocjena — NCVVO određuje pragove za svaki rok.'
export const GRADE_NOTE_WRITING = ' Pisanje nije bodovano.'

// Sastav dnevnog izazova (broj pitanja po tipu) — dijele ga HomeScreen
// (prikaz broja pitanja) i DailyChallengeScreen (generiranje izazova).
export const DAILY_TARGETS = { mc: 10, mat: 4, fb: 6 }
export const DAILY_COUNT = Object.values(DAILY_TARGETS).reduce((a, b) => a + b, 0)

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

// jedan izvor istine za grade() je scoring.js
export { grade } from './scoring'
