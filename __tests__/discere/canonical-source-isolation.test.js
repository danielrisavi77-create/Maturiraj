// ADR-001 / A6: kanonski izvor content/discere/<id>/exams/** nosi answer/
// solution/explanation (i transkript) i ne smije završiti u isporuci —
// klijent dobiva generirani content/<id>/exams/<key>.json preko rute.
//
// Tvrdnja je STROŽA od "nije dohvatljiv iz klijenta": nijedna datoteka u
// izvršnom stablu (sve korijenske mape osim scripts/__tests__/docs/… — isti
// popis kao SLOJ A skena) ne smije uopće uvoziti kanonski izvor. Zato ovdje
// NEMA kopije BFS-a i razrješivača uvoza iz scripts/security/exam-secret-scan.mjs:
// kopija bi s vremenom divergirala od originala (i već je bila bez SKIP_DIRS
// zaštite), a ovdje je dovoljan jedan prolaz nad specifikatorima uvoza.
import { describe, expect, it } from 'vitest'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import {
  REPO_ROOT,
  extractImportSpecifiers,
  listScanRootDirs,
  loadAliases,
} from '@/scripts/security/exam-secret-scan.mjs'

const GRAPH_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']

/** Mape koje nikad ne obilazimo — inače bi ugniježđeni node_modules/.next usporili prolaz. */
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'coverage', 'dist', 'build', '.turbo', '.vercel'])

function toPosix(relPath) {
  return relPath.split(path.sep).join('/')
}

/** Kanonski izvor ispita — nosi answer/solution/explanation, nikad u isporuku. */
function isCanonicalExamPath(relPosixPath) {
  return /^content\/discere\/[^/]+\/exams(\/|$)/.test(relPosixPath)
}

async function walk(dir, onFile) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      await walk(path.join(dir, entry.name), onFile)
      continue
    }
    if (!entry.isFile()) continue
    if (!GRAPH_EXTENSIONS.includes(path.extname(entry.name))) continue
    await onFile(path.join(dir, entry.name))
  }
}

/**
 * Kamo specifikator pokazuje, bez dodira diska: relativni put se razrješava
 * prema mapi datoteke, alias prema tsconfig `paths` (isti izvor kao sken).
 * Zanima nas samo pokazuje li U mapu kanonskih ispita.
 */
function specifierTargets(specifier, fromFile, { root, aliases }) {
  if (!specifier) return []
  if (specifier.startsWith('.')) return [path.resolve(path.dirname(fromFile), specifier)]
  for (const alias of aliases) {
    if (specifier.startsWith(alias.prefix)) {
      const rest = specifier.slice(alias.prefix.length)
      return alias.targets.map((target) => path.resolve(target, rest))
    }
  }
  return []
}

async function findCanonicalExamImporters(root = REPO_ROOT) {
  const aliases = await loadAliases(root)
  const dirs = await listScanRootDirs(root)
  const files = []
  for (const dir of dirs) await walk(path.join(root, dir), (absPath) => files.push(absPath))

  const violations = []
  for (const absPath of files) {
    const rel = toPosix(path.relative(root, absPath))
    if (isCanonicalExamPath(rel)) continue // kanonski moduli smiju uvoziti jedan drugoga
    const source = await readFile(absPath, 'utf8').catch(() => '')
    for (const specifier of extractImportSpecifiers(source)) {
      for (const target of specifierTargets(specifier, absPath, { root, aliases })) {
        const relTarget = toPosix(path.relative(root, target))
        if (relTarget.startsWith('..')) continue
        if (isCanonicalExamPath(relTarget)) violations.push({ file: rel, specifier })
      }
    }
  }
  return violations
}

describe('Discere canonical source isolation (ADR-001)', () => {
  it('nijedna datoteka izvršnog stabla ne uvozi content/discere/<predmet>/exams/**', async () => {
    const violations = await findCanonicalExamImporters()
    const details = violations.map((v) => `${v.file} -> ${v.specifier}`).join('\n')
    expect(violations, `Kanonski izvor se uvozi iz isporučivog koda:\n${details}`).toEqual([])
  })

  it('provjera doista hvata uvoz kanonskog izvora (lažni primjer)', () => {
    const aliases = [{ prefix: '@/', targets: [REPO_ROOT] }]
    const targets = specifierTargets('@/content/discere/bio/exams/2026_ljeto.mjs', path.join(REPO_ROOT, 'lib', 'x.js'), { root: REPO_ROOT, aliases })
    expect(targets).toHaveLength(1)
    expect(isCanonicalExamPath(toPosix(path.relative(REPO_ROOT, targets[0])))).toBe(true)
  })

  it('content/discere/bio/loaders.js ne izvozi examLoaders (samo index/topics/summary)', async () => {
    const loaders = await import('@/content/discere/bio/loaders.js')
    expect(loaders.examLoaders).toBeUndefined()
    expect(loaders.index).toBeDefined()
    expect(loaders.topics).toBeDefined()
    expect(loaders.summary).toBeDefined()
  })
})
