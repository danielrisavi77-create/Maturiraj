/**
 * gen-skripta.mjs — generira PRVI MODUL (skeleton + puna poglavlja) skripte za
 * predmete koji još nemaju sadržaj, koristeći model/prompt po KATEGORIJI predmeta
 * (jezici / prirodni / drustveni / umjetnost) — vidi lib/data/subjectCategories.js
 * i scripts/skripta-prompts/*.js.
 *
 * Generalizacija obrasca iz scripts/gen-distractors.mjs (isti retry/backoff,
 * isti JSON-parse, isti checkpoint pristup) na proizvoljan predmet i model.
 *
 * Izlazni format datoteka identičan je postojećem modulu kem:
 *   app/skripte/data/<id>/modules/01-<slug>.js
 *   app/skripte/data/<id>/modules.js
 *   app/skripte/data/<id>/index.js
 *
 * Pokretanje (PowerShell):
 *   $env:ANTHROPIC_API_KEY="sk-ant-..."; node scripts/gen-skripta.mjs --subject fiz
 *   node scripts/gen-skripta.mjs --all-missing
 *   node scripts/gen-skripta.mjs --subject fiz --limit-chapters 1   # brzi test
 *
 * Idempotentno/nastavljivo: rezultati se spremaju u checkpoint
 *   (scripts/.skripta-checkpoint.json) pa ponovno pokretanje preskače gotove
 *   skeletone/poglavlja. Datoteke predmeta se prepisuju nakon svakog napretka.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { SUBJECTS } from '../lib/data/subjects.js'
import { SUBJECT_CATEGORY, CATEGORY_MODEL, getMissingSubjectIds } from '../lib/data/subjectCategories.js'
import { buildSubjectFiles, writeSubjectFiles } from './skripta-emit.mjs'
import * as jeziciPrompts from './skripta-prompts/jezici.js'
import * as prirodniPrompts from './skripta-prompts/prirodni.js'
import * as drustveniPrompts from './skripta-prompts/drustveni.js'
import * as umjetnostPrompts from './skripta-prompts/umjetnost.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DATA_DIR = resolve(ROOT, 'app/skripte/data')
const CHECKPOINT = resolve(__dirname, '.skripta-checkpoint.json')

const PROMPTS = {
  jezici: jeziciPrompts,
  prirodni: prirodniPrompts,
  drustveni: drustveniPrompts,
  umjetnost: umjetnostPrompts,
}

// ── CLI args ──────────────────────────────────────────────────────────────────
function arg(name, def) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : def
}
const SUBJECT_ARG    = arg('subject', '')
const ALL_MISSING    = process.argv.includes('--all-missing')
const LIMIT_CHAPTERS = parseInt(arg('limit-chapters', '0'), 10) || 0 // 0 = svih 5
const MODEL_OVERRIDE = arg('model', '')
const CONCURRENCY    = parseInt(arg('concurrency', '3'), 10)
const API_KEY        = process.env.ANTHROPIC_API_KEY

if (!API_KEY) { console.error('✗ Nedostaje ANTHROPIC_API_KEY u okruženju.'); process.exit(1) }

let TARGET_IDS = []
if (SUBJECT_ARG) TARGET_IDS = [SUBJECT_ARG]
else if (ALL_MISSING) TARGET_IDS = getMissingSubjectIds()
else { console.error('✗ Navedi --subject <id> ili --all-missing.'); process.exit(1) }

for (const id of TARGET_IDS) {
  if (!SUBJECT_CATEGORY[id]) {
    console.error(`✗ Predmet "${id}" nije u lib/data/subjectCategories.js (ili je već pokriven — vidi EXCLUDED_SUBJECTS).`)
    process.exit(1)
  }
}

const SUBJECT_BY_ID = Object.fromEntries(SUBJECTS.map((s) => [s.id, s]))

// ── Checkpoint ──────────────────────────────────────────────────────────────────
// { [subjectId]: { curriculum: {title,subtitle,icon,color,colorDim,chapters:[...]} | null, chapters: { [slug]: fullChapterObj } } }
let store = {}
if (existsSync(CHECKPOINT)) {
  try { store = JSON.parse(readFileSync(CHECKPOINT, 'utf8')) || {} } catch { store = {} }
}
function saveCheckpoint() { writeFileSync(CHECKPOINT, JSON.stringify(store, null, 2), 'utf8') }

// ── Anthropic poziv ─────────────────────────────────────────────────────────────
async function callAnthropic(prompt, model, maxTokens, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify({ model, max_tokens: maxTokens, messages: [{ role: 'user', content: prompt }] }),
      })
      if (res.status === 429 || res.status >= 500) throw new Error('HTTP ' + res.status)
      const data = await res.json()
      const text = data?.content?.[0]?.text || ''
      return text
    } catch (e) {
      if (attempt === retries) throw e
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1))) // backoff
    }
  }
}

function parseJson(text) {
  if (!text) return null
  let t = text.trim()
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) t = fence[1].trim()
  const s = t.indexOf('{'), e = t.lastIndexOf('}')
  if (s === -1 || e === -1) return null
  try { return JSON.parse(t.slice(s, e + 1)) } catch { return null }
}

// ── Emitanje datoteka predmeta (format identičan kem) ─────────────────────────────
function emitSubjectFiles(id) {
  const category = SUBJECT_CATEGORY[id]
  const files = buildSubjectFiles({
    id,
    entry: store[id],
    subject: SUBJECT_BY_ID[id],
    category,
    model: CATEGORY_MODEL[category],
  })
  if (!files) return
  writeSubjectFiles(DATA_DIR, id, files)
}

function emitAllTargetFiles() {
  for (const id of TARGET_IDS) emitSubjectFiles(id)
}

// ── Glavni tok ──────────────────────────────────────────────────────────────────
async function main() {
  // 1) Skeleton modula po predmetu (1 poziv/predmet, sekvencijalno — jeftino)
  for (const id of TARGET_IDS) {
    if (store[id]?.curriculum) continue
    const subject = SUBJECT_BY_ID[id]
    const category = SUBJECT_CATEGORY[id]
    const model = MODEL_OVERRIDE || CATEGORY_MODEL[category]
    console.log(`… [${id}] generiram skeleton modula (kategorija=${category}, model=${model})`)
    let skeleton
    try {
      const text = await callAnthropic(PROMPTS[category].buildCurriculumPrompt(subject), model, 1500, 4)
      skeleton = parseJson(text)
    } catch (e) {
      console.error(`✗ [${id}] greška pri generiranju skeletona:`, e.message)
      continue
    }
    if (!skeleton || !Array.isArray(skeleton.chapters) || skeleton.chapters.length === 0) {
      console.error(`✗ [${id}] neuspio parse skeletona modula, preskačem predmet.`)
      continue
    }
    let chapters = skeleton.chapters
    if (LIMIT_CHAPTERS > 0) chapters = chapters.slice(0, LIMIT_CHAPTERS)
    store[id] = store[id] || { curriculum: null, chapters: {} }
    store[id].curriculum = { ...skeleton, chapters }
    saveCheckpoint()
    console.log(`✓ [${id}] skeleton: "${skeleton.title}" (${chapters.length} poglavlja)`)
  }

  // 2) Puni sadržaj poglavlja — plosnat popis poslova, worker pool
  const jobs = []
  for (const id of TARGET_IDS) {
    const entry = store[id]
    if (!entry?.curriculum) continue
    for (const chapterMeta of entry.curriculum.chapters) {
      if (entry.chapters[chapterMeta.slug]) continue // već generirano
      jobs.push({ id, chapterMeta })
    }
  }
  console.log(`Ukupno poglavlja za generirati: ${jobs.length} (concurrency=${CONCURRENCY})`)

  let cursor = 0, done = 0, ok = 0, fail = 0
  async function worker() {
    while (cursor < jobs.length) {
      const job = jobs[cursor++]
      const subject = SUBJECT_BY_ID[job.id]
      const category = SUBJECT_CATEGORY[job.id]
      const model = MODEL_OVERRIDE || CATEGORY_MODEL[category]
      try {
        const prompt = PROMPTS[category].buildChapterPrompt(subject, job.chapterMeta)
        const text = await callAnthropic(prompt, model, 4000, 3)
        const body = parseJson(text)
        if (body) {
          store[job.id].chapters[job.chapterMeta.slug] = body
          ok++
        } else {
          console.error(`✗ [${job.id}/${job.chapterMeta.slug}] neuspio parse odgovora.`)
          fail++
        }
      } catch (e) {
        console.error(`✗ [${job.id}/${job.chapterMeta.slug}] greška:`, e.message)
        fail++
      }
      done++
      if (done % 3 === 0 || done === jobs.length) {
        saveCheckpoint()
        emitAllTargetFiles()
        console.log(`… ${done}/${jobs.length} (ok=${ok}, fail=${fail})`)
      }
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, CONCURRENCY) }, worker))

  saveCheckpoint()
  emitAllTargetFiles()
  console.log(`✓ Gotovo. ok=${ok} fail=${fail}. Datoteke zapisane u ${DATA_DIR}/<predmet>/`)
}

main().catch((e) => {
  console.error('✗ Greška:', e)
  saveCheckpoint()
  emitAllTargetFiles()
  process.exit(1)
})
