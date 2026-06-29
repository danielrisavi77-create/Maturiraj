/**
 * extract_html_simulator.mjs
 *
 * Čita hrvatski_simulator HTML file, izvlači EXAMS + pitanja + kontekst tekstove
 * i konvertira ih u format koji koristi hrvatskiSimulatorData.js
 */

import { readFileSync, writeFileSync } from 'fs'
import { createContext, runInContext } from 'vm'
import { fileURLToPath } from 'url'
import path from 'path'

const INPUT_HTML  = 'C:\\Users\\Daniel\\Dropbox\\My PC (DESKTOP-LJMIVR9)\\Downloads\\hrvatski_simulator (56).html'
const OUTPUT_FILE = 'C:\\Users\\Daniel\\Desktop\\maturiraj\\app\\discere\\hrvatski\\simulator\\hrvatskiSimulatorData.js'

console.log('Reading HTML file...')
const html = readFileSync(INPUT_HTML, 'utf8')

// Extract all <script> content
const scriptMatches = [...html.matchAll(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/gi)]
const scripts = scriptMatches
  .map(m => m[0].replace(/<script[^>]*>/i, '').replace(/<\/script>/i, ''))
  .join('\n')

console.log(`Extracted ${scriptMatches.length} script blocks, total ${scripts.length} chars`)

// Build a sandboxed context where we capture the EXAMS object
// We simulate browser globals that might be needed
const sandbox = {
  console,
  window: {},
  document: { getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] },
  EXAMS: {},
  // Prevent errors from UI code
  setTimeout: () => {},
  setInterval: () => {},
  clearTimeout: () => {},
  React: { createElement: () => {}, useState: () => [null, () => {}], useEffect: () => {} },
}

// We only need the data portion. Find where EXAMS is defined and extract just up to the UI code.
// Strategy: find the const EXAMS = { ... } block
let examsStartIdx = scripts.indexOf('const EXAMS')
if (examsStartIdx === -1) examsStartIdx = scripts.indexOf('var EXAMS')
if (examsStartIdx === -1) examsStartIdx = scripts.indexOf('let EXAMS')

console.log(`EXAMS declaration found at: ${examsStartIdx}`)

// Find the data section: everything from const T1_ variables to end of EXAMS object
// Find first text variable
let dataStart = scripts.search(/const T\d+_\d{4}/)
if (dataStart === -1) dataStart = scripts.search(/var T\d+_\d{4}/)
console.log(`Data section starts at: ${dataStart}`)

// Extract the data-only portion (text vars + question arrays + EXAMS object)
// Cut it off before any React/UI code (look for "function App" or "ReactDOM" or similar)
let uiStart = scripts.indexOf('function App(')
if (uiStart === -1) uiStart = scripts.indexOf('ReactDOM.render')
if (uiStart === -1) uiStart = scripts.indexOf('createRoot(')
if (uiStart === -1) uiStart = scripts.length
console.log(`UI code starts at: ${uiStart}`)

const dataScript = scripts.substring(dataStart > 0 ? dataStart : 0, uiStart)
console.log(`Data script length: ${dataScript.length} chars`)

// Replace const/let with var so declarations leak into sandbox scope
const patchedScript = dataScript
  .replace(/\bconst\s+/g, 'var ')
  .replace(/\blet\s+/g, 'var ')

// Append a comment only (EXAMS leaks to ctx via var declaration)
const runnableScript = patchedScript

// Run in sandbox to capture all variables
const ctx = createContext(sandbox)
try {
  runInContext(runnableScript, ctx, { timeout: 60000 })
} catch (e) {
  console.warn('VM run warning:', e.message.substring(0, 500))
  // Try character position for syntax errors
  if (e instanceof SyntaxError && e.message.includes('position')) {
    const m = e.message.match(/position (\d+)/)
    if (m) {
      const pos = parseInt(m[1])
      console.warn('Near:', runnableScript.substring(Math.max(0, pos-100), pos+200))
    }
  }
}

const exams = ctx.EXAMS || {}
const eseji = ctx.ESEJI || {}
const sazeci = ctx.SAZECI || {}

// Merge all exam collections
// ESEJI have different structure (no qs array, have tekstovi+polaznoP+naslov)
// We flatten esej/sažetak into a unified format compatible with the simulator
const allExams = { ...exams }

// Add esej exams — mark them as type 'esej'
for (const [k, v] of Object.entries(eseji)) {
  allExams[k] = { ...v, _type: 'esej' }
}
// Add sažetak exams — mark them as type 'sazetak'
for (const [k, v] of Object.entries(sazeci)) {
  allExams[k] = { ...v, _type: 'sazetak' }
}

const examKeys = Object.keys(allExams)
console.log(`Captured ${Object.keys(exams).length} regular + ${Object.keys(eseji).length} esej + ${Object.keys(sazeci).length} sažetak = ${examKeys.length} total exams`)

if (examKeys.length === 0) {
  console.error('ERROR: No exams captured. Check script extraction.')
  process.exit(1)
}

// ─── Serialise helpers ────────────────────────────────────────────
function esc(str) {
  if (typeof str !== 'string') return ''
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')
}

function serializeQuestion(q) {
  const parts = []

  parts.push(`    id: ${JSON.stringify(q.id)}`)
  parts.push(`    type: ${JSON.stringify(q.type)}`)
  if (q.topic) parts.push(`    topic: ${JSON.stringify(q.topic)}`)

  // Context text — inline if present
  if (q.ctx && typeof q.ctx === 'string' && q.ctx.length > 0) {
    parts.push(`    ctx: \`${esc(q.ctx)}\``)
  }
  if (q.ctxNaslov) parts.push(`    ctxNaslov: ${JSON.stringify(q.ctxNaslov)}`)

  parts.push(`    q: ${JSON.stringify(q.q)}`)

  if (q.opts) {
    parts.push(`    opts: ${JSON.stringify(q.opts)}`)
  }
  if (q.sol !== undefined) {
    parts.push(`    sol: ${JSON.stringify(q.sol)}`)
  }
  if (q.exp) {
    parts.push(`    exp: ${JSON.stringify(q.exp)}`)
  }
  if (q.points !== undefined) {
    parts.push(`    points: ${q.points}`)
  }

  return `  {\n${parts.join(',\n')}\n  }`
}

function serializeExam(key, exam) {
  const isEsej    = exam._type === 'esej'
  const isSazetak = exam._type === 'sazetak'

  if (isEsej || isSazetak) {
    // Esej/Sažetak format — no question array, has tekstovi + task description
    const tekstoviStr = (exam.tekstovi || []).map(t =>
      `      { naslov: ${JSON.stringify(t.naslov || '')}, tekst: \`${esc(t.tekst || '')}\` }`
    ).join(',\n')

    return `  ${JSON.stringify(key)}: {
    key: ${JSON.stringify(exam.key || key)},
    year: ${exam.year || 0},
    season: ${JSON.stringify(exam.season || '')},
    razina: ${JSON.stringify(exam.razina || '')},
    label: ${JSON.stringify(exam.label || '')},
    type: ${JSON.stringify(exam._type)},
    trajanje: ${exam.trajanje || 160},
    naslov: ${JSON.stringify(exam.naslov || '')},
    polaznoP: ${JSON.stringify(exam.polaznoP || '')},
    minRijeci: ${exam.minRijeci || 400},
    maxRijeci: ${exam.maxRijeci || 600},
    tekstovi: [
${tekstoviStr}
    ],
    qs: []
  }`
  }

  // Regular exam with questions
  const qs = exam.qs || []
  const qsStr = qs.map(serializeQuestion).join(',\n')

  return `  ${JSON.stringify(key)}: {
    key: ${JSON.stringify(exam.key || key)},
    year: ${exam.year || 0},
    season: ${JSON.stringify(exam.season || '')},
    razina: ${JSON.stringify(exam.razina || '')},
    label: ${JSON.stringify(exam.label || '')},
    pravi: ${exam.pravi !== false},
    qs: [
${qsStr}
    ]
  }`
}

// ─── Build output file ────────────────────────────────────────────
console.log('Building output file...')

// Keep the same header constants from original file
const header = `// hrvatskiSimulatorData.js — Auto-generated from official simulator HTML
// Exams: ${examKeys.length} | Generated: ${new Date().toISOString().split('T')[0]}
// DO NOT EDIT MANUALLY — regenerate with scripts/extract_html_simulator.mjs

export const TLBL = {
  mc: "Jedan odgovor",
  ms: "Više odgovora",
  sa: "Kratki odgovor",
  es: "Esej / Interpretacija",
  saz: "Sažetak teksta",
  mat: "Povezivanje",
}

export const XP_LEVELS = [0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200]

export const LEVEL_NAMES = [
  "Početnik", "Učenik", "Marljivi", "Napredni", "Stručnjak",
  "Maturant", "Erudit", "Magister", "Profesor", "Legenda",
]

export const TOPIC_LABELS = {
  jez_gram: "Gramatika",
  jez_pravopis: "Pravopis",
  jez_leks: "Leksikologija",
  jez_stil: "Stilistika",
  jez_sint: "Sintaksa",
  jez_tvorba: "Tvorba riječi",
  knj_moderna: "Moderna",
  knj_avangarda: "Avangarda",
  knj_suvremena: "Suvremena književnost",
  knj_svjetska: "Svjetska književnost",
  knj_analiza: "Analiza teksta",
  knj_versif: "Versifikacija",
  sazetak: "Sažetak teksta",
  esej: "Interpretativni esej",
}

`

// Sort exam keys: newest first
const sortedKeys = examKeys.sort((a, b) => {
  const yearA = parseInt(allExams[a]?.year || a.match(/(\d{4})/)?.[1] || 0)
  const yearB = parseInt(allExams[b]?.year || b.match(/(\d{4})/)?.[1] || 0)
  if (yearB !== yearA) return yearB - yearA
  const seasonOrder = { ljeto: 3, jesen: 2, zima: 1 }
  const sA = seasonOrder[allExams[a]?.season] || 0
  const sB = seasonOrder[allExams[b]?.season] || 0
  return sB - sA
})

const examsStr = sortedKeys.map(k => serializeExam(k, allExams[k])).join(',\n\n')
const output = `${header}export const EXAMS = {\n${examsStr}\n}\n`

writeFileSync(OUTPUT_FILE, output, 'utf8')
console.log(`\n✅ Done! Written to: ${OUTPUT_FILE}`)
  console.log(`   Exams: ${examKeys.length} (${Object.keys(exams).length} regular + ${Object.keys(eseji).length} esej + ${Object.keys(sazeci).length} sažetak)`)
console.log(`   File size: ${(output.length / 1024 / 1024).toFixed(1)} MB`)
