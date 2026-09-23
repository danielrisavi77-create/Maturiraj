#!/usr/bin/env node
// Generator kanonskih (Discere) ispita — ADR-001 (docs/ADR-001-ispitni-podaci.md).
//
// Uzor: scripts/gen-eng-exams-json.mjs. Izvor istine je content/discere/<id>/
// (autorski kanonski JS/mjs s answer/solution/explanation); ovdje se sadržaj
// NIKAD ne mijenja, samo razdvaja. Razdvajanje javnog i tajnog dijela je KORAK
// OVOG GENERATORA (ADR točka 7), a ne ručni zahvat poslije.
//
// Pokretanje:
//   node scripts/gen-discere-exams.mjs --subject bio
//   node scripts/gen-discere-exams.mjs            (svi predmeti s content/discere/<id>/index.json)
//
// Izlaz — PO ISPITU:
//   content/<id>/exams/<key>.json         javni payload {key, meta, texts, qs, schemaVersion}
//   lib/data/<id>/secrets/<key>.json      tajni store {"<leafQid>": {answer, solution, explanation, transcript?, type, topic, points}}
// Izlaz — PO PREDMETU:
//   content/discere/<id>/summary.json     {subject, exams:{key:[{id,topic,type,points,hasAssets,manual}]}}
//   content/discere/<id>/index.json       osvježen (qaStatus, questionCount, maxPoints)
//
// ZAŠTO ALLOWLISTA, NE DENYLISTA: novo tajno polje (buduće `distraktori`,
// `rubricDetails`…) treba ispasti iz javnog payloada samo od sebe, bez izmjene
// generatora — zato PUBLIC_QUESTION_FIELDS bira što SMIJE van, a ne što ne smije.
//
// Skripta je idempotentna: isti kanonski ulaz daje bajt-identičan izlaz, a
// datoteke ispita kojih u indeksu više nema briše.

import { writeFileSync, mkdirSync, readdirSync, unlinkSync, readFileSync, existsSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { validateExam, upgradeExam } from '../lib/discere/exam-schema.js'
import { countSecretKeys } from './security/exam-secret-scan.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const CANONICAL_ROOT = path.join(ROOT, 'content', 'discere')

const GROUP_TYPES = new Set(['passage_group', 'audio_group', 'media_response'])

/** Polja pitanja koja smiju u klijent (ADR točka 1). ALLOWLIST, ne denylist. */
const PUBLIC_QUESTION_FIELDS = Object.freeze([
  'id', 'type', 'prompt', 'topic', 'chapterSlug', 'catalogOutcomes', 'sourceRef',
  'assets', 'stimulus', 'options', 'gaps', 'wordBank', 'mode', 'left', 'right',
  'items', 'statements', 'responseMode', 'points',
])

/** Polja pitanja koja idu isključivo u tajni store (ADR točka 2, isto kao exam-schema.js). */
const SECRET_QUESTION_FIELDS = Object.freeze(['answer', 'solution', 'explanation'])

/** Meta polja ispita koja smiju u klijent. */
const PUBLIC_META_FIELDS = Object.freeze(['subject', 'key', 'kind', 'year', 'season', 'level', 'label', 'durationSec', 'questionCount', 'maxPoints'])

function pick(source, fields) {
  const out = {}
  if (!source || typeof source !== 'object') return out
  for (const field of fields) {
    if (source[field] !== undefined) out[field] = source[field]
  }
  return out
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function isGroupQuestion(question) {
  return GROUP_TYPES.has(question?.type) && Array.isArray(question?.children)
}

/** Zbroj bodova, uključujući djecu grupnih zadataka (isto pravilo kao exam-schema.js). */
function effectivePoints(question) {
  if (isGroupQuestion(question)) return question.children.reduce((sum, child) => sum + effectivePoints(child), 0)
  return Number.isFinite(question?.points) ? question.points : 0
}

/** Broj "listova" — svih pitanja bez djece (stvarno ocjenjivih jedinica). */
function countLeaves(questions) {
  let count = 0
  for (const question of questions || []) {
    count += isGroupQuestion(question) ? countLeaves(question.children) : 1
  }
  return count
}

/** Ukloni transkript slušanja iz javnog stimulusa (ADR: javni ispit ga ne smije nositi). */
function publicStimulus(stimulus) {
  if (!isPlainObject(stimulus)) return stimulus
  if (stimulus.listening?.transcript === undefined) return stimulus
  const { transcript, ...restListening } = stimulus.listening
  return { ...stimulus, listening: restListening }
}

function buildPublicQuestion(question) {
  const out = pick(question, PUBLIC_QUESTION_FIELDS)
  if (out.stimulus !== undefined) out.stimulus = publicStimulus(out.stimulus)
  if (Array.isArray(question.children)) out.children = question.children.map(buildPublicQuestion)
  return out
}

/**
 * `alt` je u pred-A2 exam-secret-scan.mjs slabi ključ (mišljen za CSS
 * className, ne za opisni tekst slike), pa bi svaka slika na exam-shaped
 * datoteci (ima `qs:`) lažno pala kao "curenje". Shema (exam-schema.js)
 * zahtijeva `asset.alt` pa se struktura validira PRIJE ovoga; tek zapis na
 * disk preimenuje `alt` → `altText`, samo u javnoj omotnici. Kanonski izvor i
 * tajni store i dalje čuvaju izvorno `alt` polje iz sheme. Ukloniti kad A2
 * doda alt na dopuštene/jake ključeve exam-secret-scan.mjs.
 */
function renameAltForDisk(questions) {
  return (questions || []).map((question) => {
    const next = { ...question }
    if (Array.isArray(next.assets)) {
      next.assets = next.assets.map(({ alt, ...rest }) => (alt !== undefined ? { ...rest, altText: alt } : rest))
    }
    if (Array.isArray(next.children)) next.children = renameAltForDisk(next.children)
    return next
  })
}

function buildPublicMeta(meta) {
  const out = pick(meta, PUBLIC_META_FIELDS)
  // Isti par kao eng generator: klijent i sim_progress rade s A/B, kataloški level već jest A/B/null.
  out.razinaCode = meta.level ?? null
  out.fullLabel = Number.isInteger(meta.year) && meta.season ? `${meta.year}. — ${meta.label}` : meta.label
  return out
}

function buildPublicExam(exam) {
  return {
    key: exam.meta.key,
    meta: buildPublicMeta(exam.meta),
    texts: {},
    qs: (exam.questions || []).map(buildPublicQuestion),
    schemaVersion: exam.meta.schemaVersion,
  }
}

/**
 * Tajni store: jedan unos po LISTU (pitanje bez djece). Grupni zadatak sam
 * nema answer/solution (boduje se preko djece), ali audio grupa može nositi
 * transkript slušanja — taj unos ne ulazi u broj listova.
 */
function buildSecrets(questions) {
  const secrets = {}
  let leafCount = 0

  function walk(question) {
    if (isGroupQuestion(question)) {
      if (question.stimulus?.listening?.transcript !== undefined) {
        secrets[question.id] = { transcript: question.stimulus.listening.transcript, type: question.type, topic: question.topic }
      }
      question.children.forEach(walk)
      return
    }
    const entry = {}
    for (const field of SECRET_QUESTION_FIELDS) {
      if (question[field] !== undefined) entry[field] = question[field]
    }
    if (question.stimulus?.listening?.transcript !== undefined) entry.transcript = question.stimulus.listening.transcript
    entry.type = question.type
    entry.topic = question.topic
    entry.points = question.points
    secrets[question.id] = entry
    leafCount += 1
  }

  ;(questions || []).forEach(walk)
  return { secrets, leafCount }
}

/** Sažetak po listu za summary.json — bez sadržaja, samo meta za ekrane nad bankom. */
function buildSummaryLeaves(questions, inheritedAssets = false) {
  const out = []
  for (const question of questions || []) {
    const hasAssets = inheritedAssets || (Array.isArray(question.assets) && question.assets.length > 0)
    if (isGroupQuestion(question)) {
      out.push(...buildSummaryLeaves(question.children, hasAssets))
      continue
    }
    out.push({
      id: question.id,
      topic: question.topic ?? null,
      type: question.type,
      points: question.points,
      hasAssets,
      manual: question.type === 'essay',
    })
  }
  return out
}

function write(dir, name, data) {
  mkdirSync(dir, { recursive: true })
  writeFileSync(path.join(dir, name), `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

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

function subjectDirs(requestedSubject) {
  if (requestedSubject) return [path.join(CANONICAL_ROOT, requestedSubject)]
  if (!existsSync(CANONICAL_ROOT)) return []
  return readdirSync(CANONICAL_ROOT)
    .map((name) => path.join(CANONICAL_ROOT, name))
    .filter((dir) => statSync(dir).isDirectory() && existsSync(path.join(dir, 'index.json')))
    .sort()
}

/** Isti sigurnosni put-check kao discere-validate.mjs: exam file mora ostati unutar subjectDir. */
function resolveExamModulePath(subjectDir, entryFile) {
  const root = path.resolve(subjectDir)
  const target = path.resolve(root, entryFile)
  const rel = path.relative(root, target)
  if (rel.startsWith(`..${path.sep}`) || rel === '..') {
    throw new Error(`Exam module path is outside subject directory: ${entryFile}`)
  }
  return target
}

async function loadExamModule(subjectDir, entry) {
  const modulePath = resolveExamModulePath(subjectDir, entry.file)
  if (!existsSync(modulePath)) throw new Error(`Nedostaje modul ispita: ${entry.file}`)
  const imported = await import(`${pathToFileURL(modulePath).href}?v=${Date.now()}`)
  if (!imported.exam) throw new Error(`Exam modul ${entry.file} mora exportati "exam".`)
  return imported.exam
}

async function generateSubject(subjectDir) {
  const subjectId = path.basename(subjectDir)
  const indexPath = path.join(subjectDir, 'index.json')
  const index = JSON.parse(readFileSync(indexPath, 'utf8'))

  const publicDir = path.join(ROOT, 'content', subjectId, 'exams')
  const secretsDir = path.join(ROOT, 'lib', 'data', subjectId, 'secrets')

  const keys = new Set()
  const summaryExams = {}
  let totalQuestions = 0
  let totalSecrets = 0

  for (const entry of index.exams) {
    const rawExam = await loadExamModule(subjectDir, entry)
    const exam = upgradeExam(rawExam)

    // Kanonski izvor (s ključevima) mora proći PUNU validaciju prije razdvajanja.
    const canonicalResult = validateExam(exam)
    if (!canonicalResult.valid) {
      const details = canonicalResult.errors.map((e) => `  ${e.code} ${e.path}: ${e.message}`).join('\n')
      throw new Error(`[gen-discere-exams] ${subjectId}/${entry.key}: kanonski ispit ne prolazi validaciju:\n${details}`)
    }

    const publicExam = buildPublicExam(exam)

    // Javni ispit mora proći public-mode validaciju (bez answer/solution/explanation/transkripta).
    const publicResult = validateExam(
      { meta: { ...exam.meta, ...publicExam.meta }, questions: publicExam.qs },
      { public: true },
    )
    if (!publicResult.valid) {
      const details = publicResult.errors.map((e) => `  ${e.code} ${e.path}: ${e.message}`).join('\n')
      throw new Error(`[gen-discere-exams] ${subjectId}/${entry.key}: javni ispit propušta tajno polje:\n${details}`)
    }

    // Omotnica koja se stvarno piše na disk (alt -> altText, vidi renameAltForDisk).
    const diskExam = { ...publicExam, qs: renameAltForDisk(publicExam.qs) }

    // Dvostruka provjera protiv istog regexa kao ADR-001 sigurnosni sken — 0 pogodaka.
    const leakHits = countSecretKeys(JSON.stringify(diskExam))
    if (leakHits > 0) {
      throw new Error(`[gen-discere-exams] ${subjectId}/${entry.key}: javni payload sadrži ${leakHits} pogodaka na tajne ključeve (exam-secret-scan regex).`)
    }

    const { secrets, leafCount } = buildSecrets(exam.questions)
    const secretLeafCount = Object.values(secrets).filter((entryValue) => entryValue.points !== undefined).length
    if (leafCount !== secretLeafCount) {
      throw new Error(`[gen-discere-exams] ${subjectId}/${entry.key}: ${leafCount} listova naspram ${secretLeafCount} tajnih unosa.`)
    }

    write(publicDir, `${entry.key}.json`, diskExam)
    write(secretsDir, `${entry.key}.json`, secrets)
    keys.add(entry.key)

    summaryExams[entry.key] = buildSummaryLeaves(exam.questions)
    totalQuestions += exam.questions.length
    totalSecrets += Object.keys(secrets).length

    // Osvježi index.json unos iz stvarnog (nakon-upgrade) sadržaja.
    entry.qaStatus = exam.meta.qa?.status ?? entry.qaStatus
    entry.questionCount = exam.questions.length
    entry.maxPoints = exam.questions.reduce((sum, q) => sum + effectivePoints(q), 0)
  }

  const prunedPublic = pruneStale(publicDir, keys)
  const prunedSecrets = pruneStale(secretsDir, keys)

  write(subjectDir, 'index.json', index)
  write(subjectDir, 'summary.json', { subject: subjectId, exams: summaryExams })

  const topicCounts = new Map()
  for (const leaves of Object.values(summaryExams)) {
    for (const leaf of leaves) {
      if (!leaf.topic) continue
      topicCounts.set(leaf.topic, (topicCounts.get(leaf.topic) ?? 0) + 1)
    }
  }
  const topics = [...topicCounts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], 'hr'))
    .map(([code, count]) => ({ code, label: code.charAt(0).toLocaleUpperCase('hr-HR') + code.slice(1), count }))
  write(subjectDir, 'topics.json', { subject: subjectId, topics })

  console.log(`[gen-discere-exams] ${subjectId}: ${keys.size} ispita, ${totalQuestions} pitanja, ${totalSecrets} tajnih unosa`)
  if (prunedPublic || prunedSecrets) {
    console.log(`[gen-discere-exams] ${subjectId}: uklonjeno zastarjelih: ${prunedPublic} javnih, ${prunedSecrets} tajnih`)
  }
}

function parseArgs(argv) {
  let subject = null
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--subject') {
      subject = argv[i + 1] ?? null
      i += 1
    }
  }
  return { subject }
}

async function main() {
  const { subject } = parseArgs(process.argv.slice(2))
  const dirs = subjectDirs(subject)
  if (!dirs.length) {
    console.error(`[gen-discere-exams] Nema predmeta za generiranje${subject ? ` (${subject})` : ''}.`)
    process.exitCode = 1
    return
  }
  for (const dir of dirs) {
    await generateSubject(dir)
  }
}

const isDirectRun = process.argv[1] ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url) : false
if (isDirectRun) {
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}

export { buildPublicExam, buildSecrets, buildSummaryLeaves, buildPublicMeta, buildPublicQuestion, renameAltForDisk, countLeaves, generateSubject }
