import ENG_NIZA_CH01 from './poglavlje01'
import ENG_NIZA_CH02 from './poglavlje02'
import ENG_NIZA_CH03 from './poglavlje03'
import ENG_NIZA_CH04 from './poglavlje04'
import ENG_NIZA_CH05 from './poglavlje05'
import ENG_NIZA_CH06 from './poglavlje06'
import ENG_NIZA_CH07 from './poglavlje07'
import ENG_NIZA_CH08 from './poglavlje08'
import ENG_NIZA_CH09 from './poglavlje09'
import ENG_NIZA_CH10 from './poglavlje10'
import ENG_NIZA_CH11 from './poglavlje11'
import ENG_NIZA_CH12 from './poglavlje12'
import ENG_NIZA_CH13 from './poglavlje13'
import ENG_NIZA_CH14 from './poglavlje14'
import ENG_NIZA_CH15 from './poglavlje15'

// ── Metadata za prikaz u chapter listu ──────────────────────────────────────
export const ENG_NIZA_POGLAVLJA_META = [
  { id: 'poglavlje-01', broj: 1, kategorija: 'Gramatika', naslov: 'Present Simple & Continuous', opis: 'Rutine · navike · radnja sada · signal words', implemented: true },
  { id: 'poglavlje-02', broj: 2, kategorija: 'Gramatika', naslov: 'Past Simple & Continuous', opis: 'Prošle radnje · signal words za prošlost', implemented: true },
  { id: 'poglavlje-03', broj: 3, kategorija: 'Gramatika', naslov: 'Present Perfect', opis: 'have/has + past participle · yet, already, ever', implemented: true },
  { id: 'poglavlje-04', broj: 4, kategorija: 'Gramatika', naslov: 'Future: will & going to', opis: 'Predviđanja · namjere · spontane odluke', implemented: true },
  { id: 'poglavlje-05', broj: 5, kategorija: 'Gramatika', naslov: 'Modal glagoli', opis: 'can · must · should · may · might · have to', implemented: true },
  { id: 'poglavlje-06', broj: 6, kategorija: 'Gramatika', naslov: 'Conditionals 0, 1, 2', opis: 'If-rečenice · realni i irealni uvjeti', implemented: true },
  { id: 'poglavlje-07', broj: 7, kategorija: 'Gramatika', naslov: 'Pasiv', opis: 'be + past participle · agent · by', implemented: true },
  { id: 'poglavlje-08', broj: 8, kategorija: 'Vještine', naslov: 'Vocabulary: Life', opis: 'Posao & karijera · kolokacije · phrasal verbs', implemented: true },
  { id: 'poglavlje-09', broj: 9, kategorija: 'Vještine', naslov: 'Čitanje s razumijevanjem', opis: 'Skimming · scanning · parafraziranje · true/false', implemented: true },
  { id: 'poglavlje-10', broj: 10, kategorija: 'Vještine', naslov: 'Pisanje — kratki tekst', opis: 'Esej · email · signal words · struktura', implemented: true },
  { id: 'poglavlje-11', broj: 11, kategorija: 'Vještine', naslov: 'Listening strategije', opis: 'Pitanja prvo · signal words · parafraziranje · bilježenje', implemented: true },
  { id: 'poglavlje-12', broj: 12, kategorija: 'Vještine', naslov: 'Višestruki izbor — taktika', opis: 'Eliminacija · zamke · strategija MCQ', implemented: true },
  { id: 'poglavlje-13', broj: 13, kategorija: 'Prošireno', naslov: 'Reported Speech', opis: 'Backshift · say/tell · upitne rečenice', implemented: true },
  { id: 'poglavlje-14', broj: 14, kategorija: 'Prošireno', naslov: 'Articles & Determiners', opis: 'a/an/the · zero article · some/any', implemented: true },
  { id: 'poglavlje-15', broj: 15, kategorija: 'Prošireno', naslov: 'Comparatives & Question Tags', opis: 'Stupnjevanje pridjeva · tag pitanja', implemented: true },
]

export const ENG_NIZA_RAZINA = {
  id: 'niza',
  label: 'Niža razina',
  poglavlja: ENG_NIZA_POGLAVLJA_META,
  chapters: {
    'poglavlje-01': ENG_NIZA_CH01,
    'poglavlje-02': ENG_NIZA_CH02,
    'poglavlje-03': ENG_NIZA_CH03,
    'poglavlje-04': ENG_NIZA_CH04,
    'poglavlje-05': ENG_NIZA_CH05,
    'poglavlje-06': ENG_NIZA_CH06,
    'poglavlje-07': ENG_NIZA_CH07,
    'poglavlje-08': ENG_NIZA_CH08,
    'poglavlje-09': ENG_NIZA_CH09,
    'poglavlje-10': ENG_NIZA_CH10,
    'poglavlje-11': ENG_NIZA_CH11,
    'poglavlje-12': ENG_NIZA_CH12,
    'poglavlje-13': ENG_NIZA_CH13,
    'poglavlje-14': ENG_NIZA_CH14,
    'poglavlje-15': ENG_NIZA_CH15,
  },
}

export { ENG_NIZA_CH01, ENG_NIZA_CH02, ENG_NIZA_CH03, ENG_NIZA_CH04, ENG_NIZA_CH05, ENG_NIZA_CH06, ENG_NIZA_CH07, ENG_NIZA_CH08, ENG_NIZA_CH09, ENG_NIZA_CH10, ENG_NIZA_CH11, ENG_NIZA_CH12, ENG_NIZA_CH13, ENG_NIZA_CH14, ENG_NIZA_CH15 }
