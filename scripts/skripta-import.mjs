/**
 * skripta-import.mjs — uvozi JSON modul (odgovor Claude agenta na
 * buildFullModulePrompt iz scripts/skripta-prompts/*.js) u datoteke predmeta,
 * u formatu identičnom postojećem modulu kem.
 *
 * Koristi se kad se sadržaj generira preko Claude agenta (Agent tool, tj.
 * korisnikova Claude pretplata) umjesto preko scripts/gen-skripta.mjs
 * (koji zahtijeva plaćeni ANTHROPIC_API_KEY). Ista shema/format datoteka,
 * druga metoda dobivanja sadržaja.
 *
 * Pokretanje:
 *   node scripts/skripta-import.mjs --subject fiz --file scripts/.skripta-json/fiz.json
 */
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { SUBJECTS } from '../lib/data/subjects.js'
import { SUBJECT_CATEGORY, CATEGORY_MODEL } from '../lib/data/subjectCategories.js'
import { buildSubjectFiles, writeSubjectFiles } from './skripta-emit.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DATA_DIR = resolve(ROOT, 'app/skripte/data')

function arg(name) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 ? process.argv[i + 1] : undefined
}

const id = arg('subject')
const file = arg('file')
if (!id || !file) {
  console.error('Upotreba: node scripts/skripta-import.mjs --subject <id> --file <put-do-json-a>')
  process.exit(1)
}

const category = SUBJECT_CATEGORY[id]
if (!category) {
  console.error(`✗ Predmet "${id}" nije u lib/data/subjectCategories.js.`)
  process.exit(1)
}

let moduleJson
try {
  moduleJson = JSON.parse(readFileSync(file, 'utf8'))
} catch (e) {
  console.error(`✗ Neuspio parse ${file}:`, e.message)
  process.exit(1)
}

const chapters = Array.isArray(moduleJson.chapters) ? moduleJson.chapters : []
if (chapters.length === 0) {
  console.error('✗ JSON nema "chapters" niz — provjeri odgovor agenta.')
  process.exit(1)
}

const entry = {
  curriculum: {
    title: moduleJson.title,
    subtitle: moduleJson.subtitle,
    icon: moduleJson.icon,
    color: moduleJson.color,
    colorDim: moduleJson.colorDim,
    chapters: chapters.map(({ slug, title, subtitle, duration, difficulty, maturaRelevance, order }) => ({
      slug, title, subtitle, duration, difficulty, maturaRelevance, order,
    })),
  },
  chapters: Object.fromEntries(chapters.map((c) => [c.slug, c])),
}

const subject = Object.fromEntries(SUBJECTS.map((s) => [s.id, s]))[id]
const files = buildSubjectFiles({ id, entry, subject, category, model: CATEGORY_MODEL[category] })
if (!files) {
  console.error('✗ buildSubjectFiles vratio null — provjeri oblik JSON-a.')
  process.exit(1)
}
writeSubjectFiles(DATA_DIR, id, files)
console.log(`✓ [${id}] zapisano u ${DATA_DIR}/${id}/ (${chapters.length} poglavlja)`)
