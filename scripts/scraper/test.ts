/**
 * Offline test for scraper match engine.
 * Koristi mock data — ne kontaktira live servise.
 * Pokreni: tsx scripts/scraper/test.ts
 */

import { matchScrapedRow, normalize } from './match'
import type { StudijLookup } from './match'
import type { ScrapedRow } from './sources/types'

// ---------------------------------------------------------------------------
// Mock studiji — subset za testiranje matchera
// ---------------------------------------------------------------------------
const MOCK_STUDIJI: StudijLookup[] = [
  { id: 'mef_zg__medicina',  fakultet_id: 'mef_zg', fak_short: 'MEF ZG', fak_name: 'Medicinski fakultet Zagreb', naziv: 'Medicina',                                   short: 'medicina' },
  { id: 'mef_zg__medlab',    fakultet_id: 'mef_zg', fak_short: 'MEF ZG', fak_name: 'Medicinski fakultet Zagreb', naziv: 'Medicinsko-laboratorijska dijagnostika',      short: 'medlab' },
  { id: 'mef_zg__sanitarno', fakultet_id: 'mef_zg', fak_short: 'MEF ZG', fak_name: 'Medicinski fakultet Zagreb', naziv: 'Sanitarno inženjerstvo',                      short: 'sanitarno' },
  { id: 'sfzg__dentalna',    fakultet_id: 'sfzg',   fak_short: 'SFZG',   fak_name: 'Stomatološki fakultet Zagreb', naziv: 'Dentalna medicina',                         short: 'dentalna' },
  { id: 'adu__gluma',        fakultet_id: 'adu',    fak_short: 'ADU',    fak_name: 'Akademija dramske umjetnosti', naziv: 'Gluma',                                      short: 'gluma' },
  { id: 'fer__racunarstvo',  fakultet_id: 'fer',    fak_short: 'FER',    fak_name: 'Fakultet elektrotehnike i računarstva', naziv: 'Računarstvo',                       short: null },
  { id: 'fer__elektroteh',   fakultet_id: 'fer',    fak_short: 'FER',    fak_name: 'Fakultet elektrotehnike i računarstva', naziv: 'Elektrotehnika i informacijska tehnologija', short: null },
]

// ---------------------------------------------------------------------------
// Mock scraped rows — pokriva: exact match, fuzzy match, OVERRIDE, no-match
// ---------------------------------------------------------------------------
const MOCK_ROWS: Array<{ row: ScrapedRow; expectedId: string | null; label: string }> = [
  {
    label: 'OVERRIDE — Medicina MEF',
    row: { studij_naziv: 'Medicina', fakultet_hint: 'Medicinski fakultet Zagreb', godina: 2025, prag: 150, raw_payload: {} },
    expectedId: 'mef_zg__medicina',
  },
  {
    label: 'Exact match — Dentalna medicina',
    row: { studij_naziv: 'Dentalna medicina', fakultet_hint: 'Stomatološki fakultet Zagreb', godina: 2025, prag: 140, raw_payload: {} },
    expectedId: 'sfzg__dentalna',
  },
  {
    label: 'Fuzzy match — typo u nazivu (Racunarstvo bez dijakritika)',
    row: { studij_naziv: 'Racunarstvo', fakultet_hint: 'Fakultet elektrotehnike i racunarstva', godina: 2025, prag: 145, raw_payload: {} },
    expectedId: 'fer__racunarstvo',
  },
  {
    label: 'Fuzzy match — minor variation u faculty name',
    row: { studij_naziv: 'Gluma', fakultet_hint: 'Akademija Dramske Umjetnosti', godina: 2025, prag: 120, raw_payload: {} },
    expectedId: 'adu__gluma',
  },
  {
    label: 'No match — nepostojeci studij',
    row: { studij_naziv: 'Astrofizika', fakultet_hint: 'Svemirski fakultet', godina: 2025, prag: 200, raw_payload: {} },
    expectedId: null,
  },
  {
    label: 'OVERRIDE — MedLab (punim imenom)',
    row: { studij_naziv: 'Medicinsko-laboratorijska dijagnostika', fakultet_hint: 'Medicinski fakultet Zagreb', godina: 2025, prag: 130, raw_payload: {} },
    expectedId: 'mef_zg__medlab',
  },
]

// ---------------------------------------------------------------------------
// Mock AZVO JSON payload — simulates what azvoSource.run() would return
// ---------------------------------------------------------------------------
export const MOCK_AZVO_PAYLOAD = {
  rezultati: [
    { studij: 'Medicina',                                   fakultet: 'Medicinski fakultet Zagreb',             bodovi_min: 150, prijavljenih: 800, upisanih: 60 },
    { studij: 'Dentalna medicina',                          fakultet: 'Stomatološki fakultet Zagreb',           bodovi_min: 140, prijavljenih: 500, upisanih: 50 },
    { studij: 'Računarstvo',                                fakultet: 'Fakultet elektrotehnike i računarstva',  bodovi_min: 145, prijavljenih: 1200, upisanih: 200 },
    { studij: 'Medicinsko-laboratorijska dijagnostika',     fakultet: 'Medicinski fakultet Zagreb',             bodovi_min: 130, prijavljenih: 300, upisanih: 40 },
  ],
}

// ---------------------------------------------------------------------------
// Test runner
// ---------------------------------------------------------------------------
let passed = 0
let failed = 0

console.log('\n=== Scraper match engine — offline tests ===\n')

for (const { label, row, expectedId } of MOCK_ROWS) {
  const got = matchScrapedRow(row.studij_naziv, row.fakultet_hint, MOCK_STUDIJI)
  const ok = got === expectedId
  if (ok) {
    passed++
    console.log(`  ✓ ${label}`)
  } else {
    failed++
    console.log(`  ✗ ${label}`)
    console.log(`      expected: ${expectedId ?? 'null'}`)
    console.log(`      got:      ${got ?? 'null'}`)
  }
}

// Test normalize helper
const normalizeTests: Array<[string, string]> = [
  ['Medicina', 'medicina'],
  ['Stomatološki fakultet', 'stomatoloski fakultet'],
  ['  Računarstvo  ', 'racunarstvo'],
  ['Medicinsko-laboratorijska dijagnostika', 'medicinsko-laboratorijska dijagnostika'],
]
for (const [input, expected] of normalizeTests) {
  const got = normalize(input)
  const ok = got === expected
  if (ok) { passed++ }
  else { failed++; console.log(`  ✗ normalize("${input}") → "${got}" (expected "${expected}")`) }
}

console.log(`\n${passed} passed, ${failed} failed\n`)
if (failed > 0) process.exit(1)
