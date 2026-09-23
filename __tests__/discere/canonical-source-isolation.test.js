// ADR-001 / A6: kanonski izvor content/discere/<id>/exams/** nosi answer/
// solution/explanation (i transkript) i ne smije biti dohvatljiv iz klijenta —
// isporuka klijentu ide preko generiranog content/<id>/exams/<key>.json.
//
// Isti pristup kao SLOJ A u scripts/security/exam-secret-scan.mjs (BFS iz
// klijentskih korijena kroz graf uvoza), ali cilj nije "@exam-secret" marker
// nego bilo koja datoteka pod content/discere/<predmet>/exams/**.
import { describe, expect, it } from 'vitest'
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import {
  REPO_ROOT,
  extractImportSpecifiers,
  hasLeadingUseClient,
  listScanRootDirs,
  loadAliases,
} from '@/scripts/security/exam-secret-scan.mjs'

const GRAPH_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.json']
const RESOLVE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json']

function toPosix(relPath) {
  return relPath.split(path.sep).join('/')
}

/** Kanonski izvor ispita — nosi answer/solution/explanation, nikad javno. */
function isCanonicalExamPath(relPosixPath) {
  return /^content\/discere\/[^/]+\/exams\/.+/.test(relPosixPath)
}

function isClientRootPath(relPosixPath) {
  return /^app\/.*\/(page|layout)\.(js|jsx|ts|tsx|mjs)$/.test(relPosixPath)
    || /^app\/(page|layout)\.(js|jsx|ts|tsx|mjs)$/.test(relPosixPath)
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
      await walk(path.join(dir, entry.name), onFile)
      continue
    }
    if (!entry.isFile()) continue
    if (!GRAPH_EXTENSIONS.includes(path.extname(entry.name))) continue
    await onFile(path.join(dir, entry.name))
  }
}

async function isFile(absPath) {
  try {
    return (await stat(absPath)).isFile()
  } catch {
    return false
  }
}

async function resolveSpecifier(specifier, fromFile, { root, aliases }) {
  if (!specifier) return null
  let candidates = null

  if (specifier.startsWith('.')) {
    candidates = [path.resolve(path.dirname(fromFile), specifier)]
  } else {
    for (const alias of aliases) {
      if (specifier.startsWith(alias.prefix)) {
        const rest = specifier.slice(alias.prefix.length)
        candidates = alias.targets.map((target) => path.resolve(target, rest))
        break
      }
    }
  }
  if (!candidates) return null

  for (const candidate of candidates) {
    if (!candidate.startsWith(root)) continue
    if (path.extname(candidate) && (await isFile(candidate))) return candidate
    for (const ext of RESOLVE_EXTENSIONS) {
      const withExt = `${candidate}${ext}`
      if (await isFile(withExt)) return withExt
    }
    for (const ext of RESOLVE_EXTENSIONS) {
      const indexFile = path.join(candidate, `index${ext}`)
      if (await isFile(indexFile)) return indexFile
    }
  }
  return null
}

async function findClientReachableCanonicalExams(root = REPO_ROOT) {
  const aliases = await loadAliases(root)
  const dirs = await listScanRootDirs(root)
  const files = []
  for (const dir of dirs) await walk(path.join(root, dir), (absPath) => files.push(absPath))

  const clientRoots = []
  for (const absPath of files) {
    const rel = toPosix(path.relative(root, absPath))
    if (path.extname(absPath) === '.json') continue
    const head = await readFile(absPath, 'utf8').catch(() => '')
    if (hasLeadingUseClient(head.slice(0, 4096))) {
      clientRoots.push(rel)
    } else if (isClientRootPath(rel) && !/["']server-only["']/.test(head.slice(0, 4096))) {
      clientRoots.push(rel)
    }
  }

  const visited = new Set()
  const parent = new Map()
  const queue = []
  const violations = []
  const sources = new Map()

  for (const rel of clientRoots) {
    if (visited.has(rel)) continue
    visited.add(rel)
    parent.set(rel, null)
    queue.push(rel)
  }

  let cursor = 0
  while (cursor < queue.length) {
    const rel = queue[cursor++]
    if (isCanonicalExamPath(rel)) {
      const chain = []
      for (let node = rel; node != null; node = parent.get(node) ?? null) chain.unshift(node)
      violations.push({ file: rel, chain })
      continue
    }
    const absPath = path.join(root, rel)
    if (path.extname(absPath) === '.json') continue

    let source = sources.get(rel)
    if (source === undefined) {
      source = await readFile(absPath, 'utf8').catch(() => '')
      sources.set(rel, source)
    }

    for (const specifier of extractImportSpecifiers(source)) {
      const resolved = await resolveSpecifier(specifier, absPath, { root, aliases })
      if (!resolved) continue
      const relChild = toPosix(path.relative(root, resolved))
      if (relChild.startsWith('..')) continue
      if (visited.has(relChild)) continue
      visited.add(relChild)
      parent.set(relChild, rel)
      queue.push(relChild)
    }
  }

  return violations
}

describe('Discere canonical source isolation (ADR-001)', () => {
  it('nijedna klijentska datoteka ne uvozi content/discere/<predmet>/exams/**', async () => {
    const violations = await findClientReachableCanonicalExams()
    if (violations.length) {
      const details = violations.map((v) => `${v.file} preko: ${v.chain.join(' -> ')}`).join('\n')
      throw new Error(`Kanonski izvor dohvatljiv iz klijenta:\n${details}`)
    }
    expect(violations).toEqual([])
  })

  it('content/discere/bio/loaders.js ne izvozi examLoaders (samo index/topics/summary)', async () => {
    const loaders = await import('@/content/discere/bio/loaders.js')
    expect(loaders.examLoaders).toBeUndefined()
    expect(loaders.index).toBeDefined()
    expect(loaders.topics).toBeDefined()
    expect(loaders.summary).toBeDefined()
  })
})
