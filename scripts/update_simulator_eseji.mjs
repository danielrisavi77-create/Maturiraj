/**
 * update_simulator_eseji.mjs
 *
 * Surgically replaces ESEJI and SAZECI objects in HrvatskiSimulator.jsx
 * with the full/updated data from the HTML simulator file.
 */

import { readFileSync, writeFileSync } from 'fs'
import { createContext, runInContext } from 'vm'

const INPUT_HTML  = 'C:\\Users\\Daniel\\Dropbox\\My PC (DESKTOP-LJMIVR9)\\Downloads\\hrvatski_simulator (56).html'
const SIMULATOR   = 'C:\\Users\\Daniel\\Desktop\\maturiraj\\app\\discere\\hrvatski\\simulator\\HrvatskiSimulator.jsx'
const BACKUP      = SIMULATOR + '.bak'

// ─── 1. Extract data from HTML ────────────────────────────────────
console.log('Reading HTML file...')
const html = readFileSync(INPUT_HTML, 'utf8')

const scriptMatches = [...html.matchAll(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/gi)]
const scripts = scriptMatches.map(m => m[0].replace(/<script[^>]*>/i,'').replace(/<\/script>/i,'')).join('\n')

let dataStart = scripts.search(/const T\d+_\d{4}/)
if (dataStart < 0) dataStart = 0

let uiStart = scripts.indexOf('function App(')
if (uiStart < 0) uiStart = scripts.indexOf('ReactDOM.render')
if (uiStart < 0) uiStart = scripts.length

const dataScript = scripts.substring(dataStart, uiStart)
  .replace(/\bconst\s+/g, 'var ')
  .replace(/\blet\s+/g, 'var ')

const sandbox = {
  console,
  window: {}, document: { getElementById:()=>null, querySelector:()=>null, querySelectorAll:()=>[] },
  EXAMS:{}, ESEJI:{}, SAZECI:{},
  setTimeout:()=>{}, setInterval:()=>{}, clearTimeout:()=>{},
}

console.log('Running VM extraction...')
const ctx = createContext(sandbox)
try {
  runInContext(dataScript, ctx, { timeout: 60000 })
} catch(e) {
  console.warn('VM warning:', e.message.substring(0, 300))
}

const eseji = ctx.ESEJI || {}
const sazeci = ctx.SAZECI || {}
console.log(`Extracted: ${Object.keys(eseji).length} ESEJI, ${Object.keys(sazeci).length} SAZECI`)

// ─── 2. Serialise helpers ─────────────────────────────────────────
function esc(str) {
  if (typeof str !== 'string') return ''
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')
}

function serializeEsejEntry(key, e) {
  const tekstoviStr = (e.tekstovi || []).map(t =>
    `    {naslov:${JSON.stringify(t.naslov||'')},tekst:\`${esc(t.tekst||'')}\`}`
  ).join(',\n')

  const razina = e.razina === undefined || e.razina === null ? 'null' : JSON.stringify(e.razina)
  const jedinstven = e.jedinstven ? ',jedinstven:true' : ''

  return `  ${JSON.stringify(key)}:{
    key:${JSON.stringify(e.key||key)},
    year:${e.year||0},season:${JSON.stringify(e.season||'')}${jedinstven},razina:${razina},
    label:${JSON.stringify(e.label||'')},
    trajanje:${e.trajanje||160},
    naslov:${JSON.stringify(e.naslov||'')},
    polaznoP:${JSON.stringify(e.polaznoP||'')},
    minRijeci:${e.minRijeci||400},maxRijeci:${e.maxRijeci||600},
    tekstovi:[
${tekstoviStr}
    ]
  }`
}

function serializeSazetakEntry(key, e) {
  const tekstoviStr = (e.tekstovi || []).map(t =>
    `    {naslov:${JSON.stringify(t.naslov||'')},tekst:\`${esc(t.tekst||'')}\`}`
  ).join(',\n')

  return `  ${JSON.stringify(key)}:{
    key:${JSON.stringify(e.key||key)},
    year:${e.year||0},season:${JSON.stringify(e.season||'')},
    label:${JSON.stringify(e.label||'')},
    trajanje:${e.trajanje||80},
    naslov:${JSON.stringify(e.naslov||'')},
    uputaTema:${JSON.stringify(e.uputaTema||'')},
    minRijeci:${e.minRijeci||200},maxRijeci:${e.maxRijeci||250},
    tekstovi:[
${tekstoviStr}
    ]
  }`
}

// Sort by year desc, then season, then razina
function sortKeys(obj) {
  return Object.keys(obj).sort((a, b) => {
    const yA = obj[a]?.year || 0, yB = obj[b]?.year || 0
    if (yB !== yA) return yB - yA
    const sOrder = { ljeto:3, jesen:2, zima:1 }
    const sA = sOrder[obj[a]?.season] || 0
    const sB = sOrder[obj[b]?.season] || 0
    if (sB !== sA) return sB - sA
    return (obj[a]?.razina||'').localeCompare(obj[b]?.razina||'')
  })
}

const newEsejiStr = 'const ESEJI={\n' +
  sortKeys(eseji).map(k => serializeEsejEntry(k, eseji[k])).join(',\n\n') +
  '\n}'

const newSazeciStr = 'const SAZECI={\n' +
  sortKeys(sazeci).map(k => serializeSazetakEntry(k, sazeci[k])).join(',\n\n') +
  '\n}'

console.log(`ESEJI output: ${(newEsejiStr.length/1024).toFixed(0)}KB`)
console.log(`SAZECI output: ${(newSazeciStr.length/1024).toFixed(0)}KB`)

// ─── 3. Patch the simulator ───────────────────────────────────────
console.log('Reading simulator JSX...')
let sim = readFileSync(SIMULATOR, 'utf8')

// Backup
writeFileSync(BACKUP, sim, 'utf8')
console.log(`Backup saved: ${BACKUP}`)

// Find ESEJI bounds
const esejiStart = sim.indexOf('const ESEJI={')
const sazeciStart = sim.indexOf('const SAZECI={')
const examsStart  = sim.indexOf('const EXAMS={')

if (esejiStart < 0 || sazeciStart < 0 || examsStart < 0) {
  console.error('Could not find ESEJI/SAZECI/EXAMS markers in simulator!')
  process.exit(1)
}

console.log(`Simulator structure:`)
console.log(`  ESEJI  starts at: ${esejiStart}`)
console.log(`  SAZECI starts at: ${sazeciStart}`)
console.log(`  EXAMS  starts at: ${examsStart}`)

// Check SAZECI in current simulator
const existingSazeciEnd = sim.indexOf('const EXAMS={', sazeciStart)
const existingSazeci = sim.substring(sazeciStart, existingSazeciEnd).trim()
console.log(`Existing SAZECI length: ${existingSazeci.length}`)

// Build new simulator content
const prefix  = sim.substring(0, esejiStart)
const suffix  = sim.substring(examsStart) // keep EXAMS + all code after it

const newSim = prefix + newEsejiStr + '\n\n' + newSazeciStr + '\n\n' + suffix

console.log(`Original size: ${(sim.length/1024/1024).toFixed(2)}MB`)
console.log(`New size:      ${(newSim.length/1024/1024).toFixed(2)}MB`)

writeFileSync(SIMULATOR, newSim, 'utf8')
console.log(`\n✅ Done! Simulator updated.`)
console.log(`   ESEJI: was 21, now ${Object.keys(eseji).length} entries (+${Object.keys(eseji).length - 21} new)`)
console.log(`   SAZECI: updated to ${Object.keys(sazeci).length} entries`)
