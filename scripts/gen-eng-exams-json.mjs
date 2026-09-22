#!/usr/bin/env node
// Generator podataka engleskog simulatora — ADR-001 (docs/ADR-001-ispitni-podaci.md).
//
// Izvor istine je lib/engleski-simulator/exams.js; ovdje se sadržaj NIKAD ne
// mijenja, samo razdvaja. Razdvajanje javnog i tajnog dijela je KORAK OVOG
// GENERATORA (ADR točka 7), a ne ručni zahvat poslije: inače prva sljedeća
// regeneracija vrati ključeve u javni payload.
//
// Pokretanje:
//   node scripts/gen-eng-exams-json.mjs
//
// Izlaz — TRI obitelji datoteka:
//   content/eng/exams/<examKey>.json          javni payload, PO ISPITU
//                                             { key, meta, texts, qs } bez sol/exp
//   lib/data/eng/secrets/<examKey>.json       tajni store, PO ISPITU
//                                             { "<qid>": { sol, exp, type, topic } }
//   lib/data/engleski-simulator/exams-index.json   lagani indeks (bez pitanja)
//
// ZAŠTO PO ISPITU, A NE PO RAZINI: po razini je jedan dohvat nosio 440 KB
// (osnovna) odnosno 791 KB (viša) i sva pitanja te razine; po ispitu je medijan
// 14-22 KB, pa ulazak u ispit povuče samo taj ispit. Isporuku po ispitu traži i
// ugovor rute GET /api/sim/<predmet>/exam/<examKey>.
//
// ZAŠTO INDEKS OSTAJE POD lib/data/engleski-simulator/: statički se uvozi iz
// examsLoader.js i ne nosi nijedno tajno polje (samo meta i broj pitanja), pa
// nema razloga za selidbu.
//
// ZAŠTO JE `texts` PRAZAN: pitanja engleskog nemaju `ctx` polje. Tekstovi za
// čitanje žive u public/engleski-simulator/exam-context.json (javni NCVVO
// materijal, bez ključeva) i dohvaćaju se zasebno, pa deduplikacija kroz `texts`
// mapu ovdje nema što deduplicirati. Polje postoji da envelope bude isti za sve
// predmete i da budući `ctx` ima gdje sjesti.
//
// Skripta je idempotentna: za isti exams.js daje bajt-identične datoteke, a
// datoteke ispita kojih u izvoru više nema briše.

import { writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { EXAMS } from '../lib/engleski-simulator/exams.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PUBLIC_DIR = path.join(ROOT, 'content', 'eng', 'exams')
const SECRETS_DIR = path.join(ROOT, 'lib', 'data', 'eng', 'secrets')
const INDEX_DIR = path.join(ROOT, 'lib', 'data', 'engleski-simulator')

/**
 * Polja pitanja koja smiju u klijent (ADR točka 1). ALLOWLIST, ne denylist:
 * novo polje s ključem (why, steps, distraktori…) ispada samo od sebe, bez
 * izmjene ovog popisa.
 */
const PUBLIC_QUESTION_FIELDS = Object.freeze(['id', 'section', 'type', 'topic', 'q', 'opts', 'items', 'rights', 'note'])

/** Polja pitanja koja idu u tajni store (ADR točka 2). */
const SECRET_QUESTION_FIELDS = Object.freeze(['sol', 'exp'])

/** Meta ispita — sve osim pitanja. */
const PUBLIC_META_FIELDS = Object.freeze([
  'year',
  'season',
  'label',
  'razina',
  'hasListening',
  'hasReading',
  'listeningNote',
  'readingNote',
])

function pick(source, fields) {
  const out = {}
  for (const field of fields) {
    if (source[field] !== undefined) out[field] = source[field]
  }
  return out
}

function buildPublic(key, exam) {
  const meta = pick(exam, PUBLIC_META_FIELDS)
  // Viša razina je u ispitnom katalogu 'A', osnovna 'B'; sim_progress bilježi tu
  // oznaku, a klijent i examStructure.js rade s 'visa'/'osnovna' — zato oboje.
  meta.razinaCode = exam.razina === 'visa' ? 'A' : exam.razina === 'osnovna' ? 'B' : null
  // Naziv kakav je klijent dosad pisao u povijest i u sim_progress; `label` sam
  // za sebe ("Ljetni rok") ne razlikuje godine.
  meta.fullLabel = `${exam.year}. — ${exam.label}`
  return {
    key,
    meta,
    texts: {},
    qs: (exam.qs || []).map((q) => pick(q, PUBLIC_QUESTION_FIELDS)),
  }
}

function buildSecrets(exam) {
  const out = {}
  for (const q of exam.qs || []) {
    const secret = pick(q, SECRET_QUESTION_FIELDS)
    // `type` i `topic` se NAMJERNO dupliciraju: ruta za ocjenjivanje tako nikad
    // ne mora uvoziti javni payload da sazna kako se pitanje boduje.
    if (q.type !== undefined) secret.type = q.type
    if (q.topic !== undefined) secret.topic = q.topic
    out[q.id] = secret
  }
  return out
}

function buildIndex() {
  return Object.entries(EXAMS).map(([key, exam]) => ({
    key,
    year: exam.year,
    season: exam.season,
    label: exam.label,
    razina: exam.razina,
    hasListening: !!exam.hasListening,
    hasReading: !!exam.hasReading,
    qCount: (exam.qs || []).length,
  }))
}

function write(dir, name, data) {
  writeFileSync(path.join(dir, name), JSON.stringify(data) + '\n', 'utf8')
}

/** Ukloni datoteke ispita kojih u izvoru više nema — inače bi ostale živjeti. */
function pruneStale(dir, keep) {
  let entries = []
  try {
    entries = readdirSync(dir)
  } catch {
    return 0
  }
  let removed = 0
  for (const entry of entries) {
    if (!entry.endsWith('.json')) continue
    if (keep.has(entry.slice(0, -'.json'.length))) continue
    unlinkSync(path.join(dir, entry))
    removed += 1
  }
  return removed
}

mkdirSync(PUBLIC_DIR, { recursive: true })
mkdirSync(SECRETS_DIR, { recursive: true })
mkdirSync(INDEX_DIR, { recursive: true })

const keys = Object.keys(EXAMS)
let questionCount = 0
let secretCount = 0

for (const key of keys) {
  const exam = EXAMS[key]
  const publicPayload = buildPublic(key, exam)
  const secrets = buildSecrets(exam)
  questionCount += publicPayload.qs.length
  secretCount += Object.keys(secrets).length
  write(PUBLIC_DIR, `${key}.json`, publicPayload)
  write(SECRETS_DIR, `${key}.json`, secrets)
}

const keep = new Set(keys)
const prunedPublic = pruneStale(PUBLIC_DIR, keep)
const prunedSecrets = pruneStale(SECRETS_DIR, keep)

const index = buildIndex()
write(INDEX_DIR, 'exams-index.json', index)

console.log(`[gen-eng-exams-json] content/eng/exams/: ${keys.length} ispita, ${questionCount} pitanja`)
console.log(`[gen-eng-exams-json] lib/data/eng/secrets/: ${keys.length} ispita, ${secretCount} unosa`)
console.log(`[gen-eng-exams-json] exams-index.json: ${index.length} zapisa`)
if (prunedPublic || prunedSecrets) {
  console.log(`[gen-eng-exams-json] uklonjeno zastarjelih: ${prunedPublic} javnih, ${prunedSecrets} tajnih`)
}

if (questionCount !== secretCount) {
  console.error(`[gen-eng-exams-json] GREŠKA: ${questionCount} pitanja, a ${secretCount} unosa u tajnom storeu (duplikat qid-a?)`)
  process.exit(1)
}
