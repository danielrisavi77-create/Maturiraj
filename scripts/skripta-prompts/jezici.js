import { CURRICULUM_JSON_SCHEMA_DESC, CHAPTER_JSON_SCHEMA_DESC, FULL_MODULE_JSON_SCHEMA_DESC } from './schema.js'

const PERSONA = 'Ti si iskusan profesor stranih/klasičnih jezika koji priprema hrvatske srednjoškolce za državnu maturu.'

const FOCUS = `Fokus sadržaja za jezične predmete:
- Gramatika: konkretna pravila, paradigme, iznimke — s primjerima na izvornom jeziku i prijevodom.
- Vokabular: tematski povezane riječi/izrazi relevantni za maturu.
- Forma pisanja: struktura eseja/pisama/prijevoda koja se traži na ispitu, ako je poglavlje o produkciji teksta.
- Za klasične jezike (latinski, grčki): deklinacije, konjugacije, sintaksa i prevođenje kratkih tekstova.
- Primjeri uvijek pišu izvorni jezik + hrvatski prijevod/objašnjenje.`

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
