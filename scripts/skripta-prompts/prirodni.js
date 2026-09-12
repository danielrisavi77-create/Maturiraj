import { CURRICULUM_JSON_SCHEMA_DESC, CHAPTER_JSON_SCHEMA_DESC, FULL_MODULE_JSON_SCHEMA_DESC } from './schema.js'

const PERSONA = 'Ti si iskusan profesor prirodnih znanosti koji priprema hrvatske srednjoškolce za državnu maturu.'

const FOCUS = `Fokus sadržaja za prirodne predmete:
- Precizne formule s jasno objašnjenim varijablama i jedinicama (SI sustav).
- Brojčani zadaci s eksplicitnim koracima računanja, ne samo konačnim odgovorom.
- Razlikuj kvalitativno razumijevanje (zašto) od kvantitativnog (koliko) — oboje treba biti prisutno.
- Tablice za usporedbu veličina/svojstava/klasifikacija gdje je to prirodno (npr. periodni sustav, taksonomija, vrste sila).
- Tipične pogreške učenika kod jedinica, predznaka i zaokruživanja.`

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
