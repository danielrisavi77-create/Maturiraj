// ── HOW TO ADD A NEW CHAPTER (HTML string format) ────────────────────────────
// New chapters are full HTML documents exported as template literals:
//
// 1. Place poglavljeXX.js in this folder.
//    File exports an HTML string:
//      export const engVisaP{XX}Html = `<!DOCTYPE html>...`
//      export default engVisaP{XX}Html
//
// 2. Import it here:
//      import engVisaP{XX}Html from './poglavlje{XX}'
//
// 3. Set implemented: true in ENG_VISA_POGLAVLJA_META for that chapter.
//
// 4. Add to chapters map:
//      'poglavlje-{XX}': engVisaP{XX}Html,
//
// Note: poglavlje05 is a React component (legacy) — still works fine.
// ─────────────────────────────────────────────────────────────────────────────

import { ENG_VISA_CH05 } from './poglavlje05'
import { html as engVisaP01Html } from './poglavlje01'
import { html as engVisaP02Html } from './poglavlje02'
import { html as engVisaP03Html } from './poglavlje03'
import { html as engVisaP04Html } from './poglavlje04'
import { html as engVisaP06Html } from './poglavlje06'
import { html as engVisaP07Html } from './poglavlje07'
import { html as engVisaP08Html } from './poglavlje08'
import { html as engVisaP09Html } from './poglavlje09'
import { html as engVisaP10Html } from './poglavlje10'
import { html as engVisaP11Html } from './poglavlje11'
import { html as engVisaP12Html } from './poglavlje12'
import { html as engVisaP13Html } from './poglavlje13'
import { html as engVisaP14Html } from './poglavlje14'
import { html as engVisaP15Html } from './poglavlje15'
import { html as engVisaP16Html } from './poglavlje16'
import { html as engVisaP17Html } from './poglavlje17'
import { html as engVisaP18Html } from './poglavlje18'
import { html as engVisaP19Html } from './poglavlje19'
import { html as engVisaP20Html } from './poglavlje20'

// ── Blok struktura (prema README) ────────────────────────────────────────────
// Blok 1 (P01–P02): Uvod i orijentacija
// Blok 2 (P03–P08): Gramatika
// Blok 3 (P09–P12): Use of English
// Blok 4 (P13–P16): Writing
// Blok 5 (P17–P18): Reading i Listening
// Blok 6 (P19–P20): Finalni prep
// ─────────────────────────────────────────────────────────────────────────────

export const ENG_VISA_POGLAVLJA_META = [
  { id: 'poglavlje-01', broj: 1,  blok: 1, blokNaziv: 'Uvod i orijentacija', kategorija: 'Uvod i orijentacija', naslov: 'Engleski na državnoj maturi',        opis: 'Struktura ispita · bodovanje · strategija pristupa', implemented: true },
  { id: 'poglavlje-02', broj: 2,  blok: 1, blokNaziv: 'Uvod i orijentacija', kategorija: 'Uvod i orijentacija', naslov: 'Tenses — pregled i razlike',         opis: 'PS · PC · PP · PPC · Past Simple · Past Perfect', implemented: true },
  { id: 'poglavlje-03', broj: 3,  blok: 2, blokNaziv: 'Gramatika',           kategorija: 'Gramatika',     naslov: 'Present Perfect i aspekti',          opis: 'Present Perfect Simple vs Continuous · for/since/already/yet/ever', implemented: true },
  { id: 'poglavlje-04', broj: 4,  blok: 2, blokNaziv: 'Gramatika',           kategorija: 'Gramatika',     naslov: 'Future — svi oblici',                opis: 'will · going to · Present Continuous · Future Perfect', implemented: true },
  { id: 'poglavlje-05', broj: 5,  blok: 2, blokNaziv: 'Gramatika',           kategorija: 'Gramatika',     naslov: 'Conditionals od nule do mixed',      opis: 'Zero · First · Second · Third · Mixed · Inverzija', implemented: true },
  { id: 'poglavlje-06', broj: 6,  blok: 2, blokNaziv: 'Gramatika',           kategorija: 'Gramatika',     naslov: 'Passive Voice i Reported Speech',    opis: 'Pasivne konstrukcije · say/tell · backshift · upitne rečenice', implemented: true },
  { id: 'poglavlje-07', broj: 7,  blok: 2, blokNaziv: 'Gramatika',           kategorija: 'Gramatika',     naslov: 'Modal verbs — napredni',             opis: 'must/might/could have done · deduction · criticism · regret', implemented: true },
  { id: 'poglavlje-08', broj: 8,  blok: 2, blokNaziv: 'Gramatika',           kategorija: 'Gramatika',     naslov: 'Relative & Adverbial clauses',       opis: 'who/which/that · defining vs non-defining · omission · adverbials', implemented: true },
  { id: 'poglavlje-09', broj: 9,  blok: 3, blokNaziv: 'Use of English',      kategorija: 'Use of English',naslov: 'Gerunds & Infinitives',              opis: 'verb + ing · verb + to · change of meaning · verbs of perception', implemented: true },
  { id: 'poglavlje-10', broj: 10, blok: 3, blokNaziv: 'Use of English',      kategorija: 'Use of English',naslov: 'Articles & Determiners',             opis: 'a/an/the · zero article · quantifiers · some/any/no', implemented: true },
  { id: 'poglavlje-11', broj: 11, blok: 3, blokNaziv: 'Use of English',      kategorija: 'Use of English',naslov: 'Word formation',                     opis: 'Prefixes · suffixes · compound words · collocations', implemented: true },
  { id: 'poglavlje-12', broj: 12, blok: 3, blokNaziv: 'Use of English',      kategorija: 'Use of English',naslov: 'Phrasal verbs & idioms',             opis: 'Separable · non-separable · exam phrasal verbs', implemented: true },
  { id: 'poglavlje-13', broj: 13, blok: 4, blokNaziv: 'Writing',             kategorija: 'Writing',       naslov: 'Writing — essay',                   opis: 'Argumentativni esej · structure · linking words · register', implemented: true },
  { id: 'poglavlje-14', broj: 14, blok: 4, blokNaziv: 'Writing',             kategorija: 'Writing',       naslov: 'Writing — report & review',         opis: 'Formal report · informal review · headings · recommendations', implemented: true },
  { id: 'poglavlje-15', broj: 15, blok: 4, blokNaziv: 'Writing',             kategorija: 'Writing',       naslov: 'Key Word Transformation (KWT)',      opis: 'Part 4 · sentence rephrasing · target structures', implemented: true },
  { id: 'poglavlje-16', broj: 16, blok: 4, blokNaziv: 'Writing',             kategorija: 'Writing',       naslov: 'Reading — Use of English Part 1–3', opis: 'MCQ cloze · open cloze · word formation · Part 1/2/3', implemented: true },
  { id: 'poglavlje-17', broj: 17, blok: 5, blokNaziv: 'Reading i Listening', kategorija: 'Reading i Listening', naslov: 'Reading comprehension (Part 5–7)',   opis: 'Long text · multiple matching · gapped text', implemented: true },
  { id: 'poglavlje-18', broj: 18, blok: 5, blokNaziv: 'Reading i Listening', kategorija: 'Reading i Listening', naslov: 'Listening strategije',              opis: 'Part 1–4 taktike · paraphrase · distractor elimination', implemented: true },
  { id: 'poglavlje-19', broj: 19, blok: 6, blokNaziv: 'Finalni prep',        kategorija: 'Finalni prep',        naslov: 'Speaking & pronunciation',          opis: 'Part A/B · fluency · pronunciation · connecting phrases', implemented: true },
  { id: 'poglavlje-20', broj: 20, blok: 6, blokNaziv: 'Finalni prep',        kategorija: 'Finalni prep',        naslov: 'Integrirani ispit — taktike',        opis: 'Vremenska raspodjela · pogreške · MCQ finalni pregled', implemented: true },
]

export const ENG_VISA_RAZINA = {
  id: 'visa',
  label: 'Viša razina',
  poglavlja: ENG_VISA_POGLAVLJA_META,
  chapters: {
    'poglavlje-01': engVisaP01Html,
    'poglavlje-02': engVisaP02Html,
    'poglavlje-03': engVisaP03Html,
    'poglavlje-04': engVisaP04Html,
    'poglavlje-05': ENG_VISA_CH05,          // React component (legacy)
    'poglavlje-06': engVisaP06Html,
    'poglavlje-07': engVisaP07Html,
    'poglavlje-08': engVisaP08Html,
    'poglavlje-09': engVisaP09Html,
    'poglavlje-10': engVisaP10Html,
    'poglavlje-11': engVisaP11Html,
    'poglavlje-12': engVisaP12Html,
    'poglavlje-13': engVisaP13Html,
    'poglavlje-14': engVisaP14Html,
    'poglavlje-15': engVisaP15Html,
    'poglavlje-16': engVisaP16Html,
    'poglavlje-17': engVisaP17Html,
    'poglavlje-18': engVisaP18Html,
    'poglavlje-19': engVisaP19Html,
    'poglavlje-20': engVisaP20Html,
  },
}

export { ENG_VISA_CH05 }
