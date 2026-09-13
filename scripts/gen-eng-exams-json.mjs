#!/usr/bin/env node
// Generator JSON podataka za engleski simulator.
// Izvor istine je lib/engleski-simulator/exams.js — ovdje se NIKAD ne mijenja sadržaj,
// samo se prepisuje u JSON oblik koji se u klijentu učitava lijeno (po razini).
//
// Pokretanje:
//   node scripts/gen-eng-exams-json.mjs
//
// Izlaz (lib/data/engleski-simulator/):
//   exams-osnovna.json  — puni ispiti osnovne razine (uključujući sol/exp)
//   exams-visa.json     — puni ispiti više razine
//   exams-index.json    — lagani indeks (bez pitanja) za početni ekran
//
// Skripta je idempotentna: za isti exams.js daje bajt-identične datoteke.

import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { EXAMS } from '../lib/engleski-simulator/exams.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'lib', 'data', 'engleski-simulator')

const RAZINE = ['osnovna', 'visa']

// Redoslijed ključeva je onaj iz EXAMS (deterministički) — JSON bez razmaka radi veličine.
function buildRazina(razina) {
  const out = {}
  for (const [key, exam] of Object.entries(EXAMS)) {
    if (exam.razina === razina) out[key] = exam
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

function write(name, data) {
  const file = path.join(OUT_DIR, name)
  writeFileSync(file, JSON.stringify(data) + '\n', 'utf8')
  return file
}

mkdirSync(OUT_DIR, { recursive: true })

let total = 0
for (const razina of RAZINE) {
  const map = buildRazina(razina)
  const n = Object.keys(map).length
  total += n
  const file = write('exams-' + razina + '.json', map)
  console.log('[gen-eng-exams-json] ' + path.basename(file) + ': ' + n + ' ispita')
}

const index = buildIndex()
write('exams-index.json', index)
console.log('[gen-eng-exams-json] exams-index.json: ' + index.length + ' zapisa')

const all = Object.keys(EXAMS).length
if (total !== all) {
  console.error('[gen-eng-exams-json] GREŠKA: razine pokrivaju ' + total + ' od ' + all + ' ispita (nepoznata razina?)')
  process.exit(1)
}
