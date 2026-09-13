// Skripta ispravlja mc pitanja u exams.js kojima je sol.cl postavljen na
// cijelu riječ (iz opts) umjesto na slovo opcije (A, B, C...).
// Idempotentna je: ako pokrenuta ponovno, ne nalazi više pogrešnih sol.cl pa ne mijenja ništa.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { EXAMS } from '../lib/engleski-simulator/exams.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const examsPath = path.join(__dirname, '..', 'lib', 'engleski-simulator', 'exams.js')

let src = fs.readFileSync(examsPath, 'utf8')
let replacements = 0

for (const examKey of Object.keys(EXAMS)) {
  const exam = EXAMS[examKey]
  for (const q of exam.qs || []) {
    if (q.type !== 'mc') continue
    if (/^[A-O]$/.test(q.sol.cl)) continue

    const idx = q.opts.indexOf(q.sol.cl)
    if (idx === -1) {
      console.error(`Greška: sol.cl "${q.sol.cl}" nije pronađen u opts pitanja ${q.id} (ispit ${examKey})`)
      process.exit(1)
    }
    const letter = String.fromCharCode(65 + idx)

    // Prvo pronađi granice bloka ispita (key: "<examKey>") da izbjegnemo
    // kolizije s istim id vrijednostima u drugim ispitima
    const keyNeedle = `key: "${examKey}"`
    const keyPos = src.indexOf(keyNeedle)
    if (keyPos === -1) {
      console.error(`Greška: ne mogu pronaći key: "${examKey}" u exams.js`)
      process.exit(1)
    }
    const nextKeyPos = src.indexOf('\n  "', keyPos + keyNeedle.length)
    const examBlockEnd = nextKeyPos === -1 ? src.length : nextKeyPos

    // Zatim unutar tog ispita pronađi blok pitanja: od id:"<qid>" do sljedećeg id:" ili kraja ispita
    const idNeedle = `id:"${q.id}"`
    const idPos = src.indexOf(idNeedle, keyPos)
    if (idPos === -1 || idPos >= examBlockEnd) {
      console.error(`Greška: ne mogu pronaći id:"${q.id}" unutar ispita ${examKey}`)
      process.exit(1)
    }
    const nextIdPos = src.indexOf('id:"', idPos + idNeedle.length)
    const blockEnd = (nextIdPos === -1 || nextIdPos > examBlockEnd) ? examBlockEnd : nextIdPos
    const block = src.slice(idPos, blockEnd)

    const oldWordEsc = q.sol.cl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const solRe = new RegExp(`sol:\\s*\\{\\s*cl:\\s*"${oldWordEsc}"\\s*\\}`)
    const match = block.match(solRe)
    if (!match) {
      console.error(`Greška: ne mogu pronaći sol:{cl:"${q.sol.cl}"} u bloku pitanja ${q.id}`)
      process.exit(1)
    }

    const newBlock = block.replace(solRe, `sol:{cl:"${letter}"}`)
    src = src.slice(0, idPos) + newBlock + src.slice(blockEnd)
    replacements++
  }
}

fs.writeFileSync(examsPath, src, 'utf8')
console.log(`Zamijenjeno ${replacements} sol.cl vrijednosti.`)
