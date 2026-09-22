import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'

/**
 * ADR-001 — `lib/engleski-simulator/exams.js` (1,92 MB, svi ključevi i sva
 * obrazloženja) je IZVOR ISTINE GENERATORA, ne runtime modul. Smiju ga uvoziti
 * samo `scripts/` i `__tests__/`; čim ga uveze bilo koja datoteka iz runtime
 * stabla, cijela banka se vraća u klijentski bundle i sve ostalo je uzalud.
 *
 * Provjera je leksička nad izvorom (nadskup pravih rubova) — lažno pozitivan
 * pogodak samo pooštrava test.
 */

const ROOT = process.cwd()

/** Runtime mape: sve što se bundla i isporučuje. */
const RUNTIME_DIRS = ['app', 'components', 'content', 'hooks', 'lib', 'public', 'types']
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.html']
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'coverage', 'dist', 'build'])

/** `exams.js`, ali ne `examsLoader`, `exams-index.json` ni `content/eng/exams/`. */
const IMPORT_RE = /(?:^|[\s;{}(])(?:import|export)\s+(?:[\s\S]*?\sfrom\s*)?["']([^"']*engleski-simulator\/exams(?:\.js)?)["']|\b(?:import|require)\s*\(\s*["']([^"']*engleski-simulator\/exams(?:\.js)?)["']\s*\)/gm

function* walk(dir) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      yield* walk(path.join(dir, entry.name))
      continue
    }
    if (!entry.isFile()) continue
    if (!EXTENSIONS.includes(path.extname(entry.name))) continue
    yield path.join(dir, entry.name)
  }
}

function runtimeFiles() {
  const files = []
  for (const dir of RUNTIME_DIRS) {
    const abs = path.join(ROOT, dir)
    try {
      if (!statSync(abs).isDirectory()) continue
    } catch {
      continue
    }
    files.push(...walk(abs))
  }
  return files
}

function importersOfExamsSource(files) {
  const offenders = []
  for (const file of files) {
    const source = readFileSync(file, 'utf8')
    IMPORT_RE.lastIndex = 0
    let match
    while ((match = IMPORT_RE.exec(source)) !== null) {
      offenders.push(`${path.relative(ROOT, file).split(path.sep).join('/')} → ${match[1] ?? match[2]}`)
    }
  }
  return offenders
}

describe('izvor istine engleskog nije u runtime stablu', () => {
  const files = runtimeFiles()

  it('sken doista obilazi stablo (nije tiho prazan)', () => {
    expect(files.length).toBeGreaterThan(200)
    expect(files.some(f => f.endsWith(path.join('engleski-simulator', 'examsLoader.js')))).toBe(true)
  })

  it('nijedna runtime datoteka ne uvozi lib/engleski-simulator/exams.js', () => {
    expect(importersOfExamsSource(files)).toEqual([])
  })

  it('regex doista hvata uvoz (kontrola nad testnom datotekom koja ga ima)', () => {
    const generator = path.join(ROOT, 'scripts', 'gen-eng-exams-json.mjs')
    expect(importersOfExamsSource([generator])).toHaveLength(1)
  })

  it('exams.js i dalje postoji i nosi svih 70 ispita — ništa se nije izgubilo', async () => {
    const { EXAMS } = await import('../../lib/engleski-simulator/exams.js')
    expect(Object.keys(EXAMS)).toHaveLength(70)
  })
})
