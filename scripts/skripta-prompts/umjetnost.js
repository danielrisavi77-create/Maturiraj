import { CURRICULUM_JSON_SCHEMA_DESC, CHAPTER_JSON_SCHEMA_DESC, FULL_MODULE_JSON_SCHEMA_DESC } from './schema.js'

const PERSONA = 'Ti si iskusan profesor umjetnosti koji priprema hrvatske srednjoškolce za državnu maturu.'

const FOCUS = `Fokus sadržaja za umjetničke predmete (glazbena/likovna umjetnost):
- Stilovi i razdoblja: obilježja, vremenski okvir, prijelaz iz jednog u drugi.
- Konkretni autori i djela — ime, djelo, razdoblje, zašto je djelo reprezentativno.
- Prepoznavanje i analiza (formalna analiza djela/skladbe) važnija je od memoriranja golih datuma.
- Terminologija struke (glazbeni oblici, likovne tehnike i kompozicijska načela) objašnjena jednostavno.
- Formule i brojčani izračuni gotovo se ne pojavljuju — vrati "formulas": [] osim rijetkih iznimki (npr. omjeri u glazbenoj teoriji, zlatni rez u likovnoj).`

export function buildCurriculumPrompt(subject) {
  return `${PERSONA}

Predmet: ${subject.name} — priprema modul 1 (uvodni modul) skripte za državnu maturu iz ovog predmeta.

${FOCUS}

${CURRICULUM_JSON_SCHEMA_DESC}`
}

export function buildChapterPrompt(subject, chapterMeta) {
  return `${PERSONA}

Predmet: ${subject.name}. Pišeš puni sadržaj JEDNOG poglavlja skripte za državnu maturu.

Poglavlje: "${chapterMeta.title}" — ${chapterMeta.subtitle}
Težina: ${chapterMeta.difficulty}. Relevantnost za maturu: ${chapterMeta.maturaRelevance}.

${FOCUS}

${CHAPTER_JSON_SCHEMA_DESC}`
}

export function buildFullModulePrompt(subject) {
  return `${PERSONA}

Predmet: ${subject.name} — piši modul 1 (uvodni modul) skripte za državnu maturu iz ovog predmeta, s punim sadržajem svih poglavlja u jednom odgovoru.

${FOCUS}

${FULL_MODULE_JSON_SCHEMA_DESC}`
}
