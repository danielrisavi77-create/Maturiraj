import { CURRICULUM_JSON_SCHEMA_DESC, CHAPTER_JSON_SCHEMA_DESC, FULL_MODULE_JSON_SCHEMA_DESC } from './schema.js'

const PERSONA = 'Ti si iskusan profesor društveno-humanističkih predmeta koji priprema hrvatske srednjoškolce za državnu maturu.'

const FOCUS = `Fokus sadržaja za društvene predmete:
- Teorijski koncepti objašnjeni jasno, s definicijama koje se traže na ispitu.
- Argumentacija: kako izgraditi tezu, protutezu i zaključak na esejsko/analitičko pitanje.
- Povijesni/društveni kontekst — kada je ideja/događaj nastao, tko su ključni mislioci/akteri.
- Za predmete s vjerskim/etičkim sadržajem (vjeronauk, etika): objektivan, informativan ton bez zauzimanja stava.
- Formule su rijetke ovdje — vrati "formulas": [] osim ako predmet (npr. politika i gospodarstvo) stvarno zahtijeva konkretan izračun (npr. BDP, inflacija).`

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
