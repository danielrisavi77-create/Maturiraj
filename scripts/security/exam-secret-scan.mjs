/**
 * Provjera izolacije ispitnih tajni (ADR-001).
 *
 * SLOJ A — izolacija grafa uvoza
 *   Tajni modul = datoteka s markerom "@exam-secret" u prvih 500 B, ili bilo koji
 *   JSON pod lib/data/<predmet>/secrets/**. Graf uvoza gradi se nad CIJELIM
 *   repozitorijem osim izuzetih mapa (node_modules, .next, scripts, __tests__,
 *   docs…), pa nova mapa poput hooks/ ne može promaknuti. BFS-om iz klijentskih
 *   korijena ('use client' kao prva direktiva — komentari i licenčni banner
 *   ispred nje su dopušteni — te app/**\/page.* i layout.* bez 'server-only')
 *   provjerava se je li ijedan tajni modul dohvatljiv iz klijenta.
 *
 * SLOJ B — ratchet nad izvorom
 *   Regexom se traže tajni ključevi u poziciji svojstva objekta / JSON ključa.
 *   "Jaki" ključevi (sol, why, pairs, ocjenaKljuc…) broje se uvijek; "slabi",
 *   generički ključevi (exp, cl, ans, steps, ex, alt) samo u datotekama oblika
 *   ispita (imaju q:/opts: svojstvo ili bar jedan jaki ključ) — inače bi svaki
 *   wizard sa `steps:` bio lažni pozitivac. Baseline smije samo padati: pad ako
 *   datoteka premaši svoj unos ili se pojavi nova datoteka. `--write-baseline`
 *   odbija zapisati porast bez izričitog `--allow-increase` (to je promjena
 *   politike i traži izmjenu ADR-a).
 *
 * CLI:
 *   node scripts/security/exam-secret-scan.mjs                   # provjeri (izlaz 1 na pad)
 *   node scripts/security/exam-secret-scan.mjs --write-baseline   # regeneriraj baseline (samo prema dolje)
 *   node scripts/security/exam-secret-scan.mjs --write-baseline --allow-increase
 *   node scripts/security/exam-secret-scan.mjs --json             # strojno čitljiv ispis
 */

import { readdir, readFile, stat, writeFile, open } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** Korijen repozitorija (scripts/security/ -> ../../). */
export const REPO_ROOT = path.resolve(__dirname, '..', '..')

export const BASELINE_PATH = path.join(REPO_ROOT, 'scripts', 'security', 'exam-secret-baseline.json')

/** Marker kojim se tajni modul izričito označava. */
export const SECRET_MARKER = '@exam-secret'

/** Koliko bajtova s početka datoteke gledamo za marker odnosno za direktive. */
export const MARKER_WINDOW_BYTES = 500
/** Direktiva mora biti prva izjava, ali komentari/banner ispred nje su dopušteni — zato širok prozor. */
export const DIRECTIVE_WINDOW_BYTES = 4096

/**
 * Jaki ključevi otkrivaju rješenje sami po sebi — broje se u svakoj datoteci.
 * svgFn je funkcija koja crta rješenje (mat), graphRef pokazuje na graf rješenja.
 */
export const STRONG_SECRET_KEYS = Object.freeze([
  'sol',
  'why',
  'pairs',
  'ocjenaKljuc',
  'solFormula',
  'graphRef',
  'rubric',
  'distraktori',
  'svgFn',
  // Canonical shema (lib/discere/exam-schema.js) — ista uloga, druga imena.
  // `answer` nosi ključ, `solution`/`explanation` razradu, `rubricDetails`
  // bodovnu shemu, `officialText` doslovni službeni odgovor, `transcript`
  // tekst snimke zadatka slušanja. Bez njih sloj B nije vidio nijedan canonical
  // ispit (ADR-001 §2, rizik "curenje kroz children/transkript").
  'answer',
  'explanation',
  'solution',
  'rubricDetails',
  'officialText',
  'transcript',
])

/**
 * Slabi ključevi su generički (XP ima `exp`, wizard ima `steps`, className `cl`) —
 * broje se samo u datoteci oblika ispita, inače bi lažni pozitivci tjerali ljude
 * na regeneraciju baselinea i time skrivali prave regresije.
 */
export const WEAK_SECRET_KEYS = Object.freeze(['exp', 'steps', 'ans', 'cl', 'ex', 'alt'])

/** Svi ključevi koji otkrivaju rješenje — nikad ne smiju u klijentski bundle. */
export const SECRET_KEYS = Object.freeze([...STRONG_SECRET_KEYS, ...WEAK_SECRET_KEYS])

const keyPattern = (keys) => new RegExp(`(?:^|[{,\\[])\\s*["']?(${keys.join('|')})["']?\\s*:`, 'gm')

/** Ključ u poziciji svojstva objekta ili JSON ključa. */
export const SECRET_KEY_PATTERN = keyPattern(SECRET_KEYS)
const STRONG_KEY_PATTERN = keyPattern(STRONG_SECRET_KEYS)
const WEAK_KEY_PATTERN = keyPattern(WEAK_SECRET_KEYS)

/**
 * Brojači za PODSKUP ključeva. Ratchet uspoređuje s baselineom, a baseline je
 * zapisan pod nekim popisom ključeva (`baseline.keys`): kad se popis proširi,
 * usporedba starih brojeva s novima nije regresija nego druga mjera. Zato se
 * sken može pokrenuti nad točno onim ključevima pod kojima je baseline nastao,
 * a proširenje se prijavljuje kao ono što jest — zahtjev za regeneracijom
 * baselinea (ADR-001 §6).
 *
 * @param {readonly string[]} keys
 */
export function makeKeyMatchers(keys) {
  const wanted = new Set(keys)
  const strong = STRONG_SECRET_KEYS.filter((key) => wanted.has(key))
  const weak = WEAK_SECRET_KEYS.filter((key) => wanted.has(key))
  return {
    keys: [...strong, ...weak],
    strong: strong.length ? keyPattern(strong) : null,
    weak: weak.length ? keyPattern(weak) : null,
  }
}

const DEFAULT_MATCHERS = Object.freeze({
  keys: [...SECRET_KEYS],
  strong: STRONG_KEY_PATTERN,
  weak: WEAK_KEY_PATTERN,
})
/** Datoteka oblika ispita: ima pitanje ili ponuđene odgovore kao svojstvo. */
const EXAM_SHAPE_PATTERN = keyPattern(['q', 'opts', 'items', 'rights', 'qs'])

/** Direktoriji koje nikad ne obilazimo (performanse i šum). */
const SKIP_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  '.turbo',
  '.vercel',
  '.netlify',
  '.claude',
  '.codex',
  '.github',
  '.vscode',
  'coverage',
  'dist',
  'build',
  '.qa-shots',
])

/**
 * Mape koje se ne bundlaju u klijent i ne isporučuju: alati, testovi, dokumentacija.
 * Sve OSTALO na korijenu repozitorija se skenira — nova mapa (hooks/, types/…)
 * ne može promaknuti provjeri.
 */
const NON_RUNTIME_TOP_DIRS = new Set(['scripts', '__tests__', 'docs', 'supabase', 'agents'])

const GRAPH_EXTENSIONS = Object.freeze(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.json'])
const SCAN_EXTENSIONS = Object.freeze(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.json', '.html'])

/** Korijenske mape koje se skeniraju: sve osim izuzetih. Izračunato, ne popisano ručno. */
export async function listScanRootDirs(root = REPO_ROOT) {
  const entries = await readdir(root, { withFileTypes: true }).catch(() => [])
  return entries
    .filter((entry) => entry.isDirectory() && !SKIP_DIRS.has(entry.name) && !NON_RUNTIME_TOP_DIRS.has(entry.name))
    .map((entry) => entry.name)
    .sort()
}

/** Redoslijed pokušaja pri razrješavanju uvoza bez ekstenzije. */
const RESOLVE_EXTENSIONS = Object.freeze(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json'])

/* ------------------------------------------------------------------ */
/* Pomoćno                                                             */
/* ------------------------------------------------------------------ */

/** Uvijek POSIX separatori da baseline bude isti na Windowsu i na CI-ju. */
function toPosix(relPath) {
  return relPath.split(path.sep).join('/')
}

async function walk(dir, { extensions, onFile }) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      await walk(path.join(dir, entry.name), { extensions, onFile })
      continue
    }
    if (!entry.isFile()) continue
    if (!extensions.includes(path.extname(entry.name))) continue
    await onFile(path.join(dir, entry.name))
  }
}

/** Čita samo prvih `bytes` bajtova — ne učitavamo 5 MB JSON zbog markera. */
async function readHead(absPath, bytes) {
  let handle
  try {
    handle = await open(absPath, 'r')
    const buffer = Buffer.alloc(bytes)
    const { bytesRead } = await handle.read(buffer, 0, bytes, 0)
    return buffer.subarray(0, bytesRead).toString('utf8')
  } catch {
    return ''
  } finally {
    await handle?.close()
  }
}

const fileStatCache = new Map()

async function isFile(absPath) {
  const cached = fileStatCache.get(absPath)
  if (cached !== undefined) return cached
  let result = false
  try {
    result = (await stat(absPath)).isFile()
  } catch {
    result = false
  }
  fileStatCache.set(absPath, result)
  return result
}

/** tsconfig.json smije imati komentare — uklonimo ih prije JSON.parse. */
function stripJsonComments(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

/**
 * Čita `compilerOptions.paths` iz tsconfig.json i vraća mapu prefiks -> korijeni.
 * Pad na razumni default (@/ -> korijen) ako tsconfig nije čitljiv.
 */
export async function loadAliases(root = REPO_ROOT) {
  const fallback = [{ prefix: '@/', targets: [root] }]
  try {
    const raw = await readFile(path.join(root, 'tsconfig.json'), 'utf8')
    const config = JSON.parse(stripJsonComments(raw))
    const paths = config?.compilerOptions?.paths
    if (!paths || typeof paths !== 'object') return fallback
    const baseUrl = path.resolve(root, config.compilerOptions.baseUrl ?? '.')
    const aliases = []
    for (const [pattern, targets] of Object.entries(paths)) {
      if (!pattern.endsWith('*') || !Array.isArray(targets)) continue
      aliases.push({
        prefix: pattern.slice(0, -1),
        targets: targets
          .filter((t) => typeof t === 'string' && t.endsWith('*'))
          .map((t) => path.resolve(baseUrl, t.slice(0, -1))),
      })
    }
    return aliases.length ? aliases : fallback
  } catch {
    return fallback
  }
}

/* ------------------------------------------------------------------ */
/* Sloj A — graf uvoza                                                 */
/* ------------------------------------------------------------------ */

/**
 * Izvlači specifikatore uvoza. Namjerno je leksički (bez parsera): treba nam
 * nadskup rubova, a lažno pozitivan rub samo pooštrava provjeru.
 */
export function extractImportSpecifiers(source) {
  const specifiers = new Set()
  const patterns = [
    // import x from '…' / import '…' / export { x } from '…'
    /(?:^|[\s;}])(?:import|export)\s+(?:[\s\S]*?\sfrom\s*)?["']([^"']+)["']/gm,
    // import('…')
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
    // require('…')
    /\brequire\s*\(\s*["']([^"']+)["']\s*\)/g,
  ]
  for (const pattern of patterns) {
    pattern.lastIndex = 0
    let match
    while ((match = pattern.exec(source)) !== null) specifiers.add(match[1])
  }
  return [...specifiers]
}

/** Razrješava relativni ili alias specifikator u apsolutnu putanju datoteke. */
async function resolveSpecifier(specifier, fromFile, { root, aliases }) {
  if (!specifier) return null
  let base = null

  if (specifier.startsWith('.')) {
    base = [path.resolve(path.dirname(fromFile), specifier)]
  } else {
    for (const alias of aliases) {
      if (specifier.startsWith(alias.prefix)) {
        const rest = specifier.slice(alias.prefix.length)
        base = alias.targets.map((target) => path.resolve(target, rest))
        break
      }
    }
  }
  if (!base) return null // bare specifier -> node_modules, ne zanima nas

  for (const candidate of base) {
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

/** Je li JSON pod lib/data/<predmet>/secrets/** ? */
export function isSecretDataPath(relPosixPath) {
  return /^lib\/data\/[^/]+\/secrets\/.+\.json$/i.test(relPosixPath)
}

function isClientRootPath(relPosixPath) {
  return /^app\/.*\/(page|layout)\.(js|jsx|ts|tsx|mjs)$/.test(relPosixPath)
    || /^app\/(page|layout)\.(js|jsx|ts|tsx|mjs)$/.test(relPosixPath)
}

/**
 * Ima li datoteka `'use client'` kao PRVU izjavu? Isto što gleda i Next: ispred
 * direktive smiju stajati samo praznine, blok i linijski komentari (licenčni
 * banner, JSDoc) — nakon prve prave izjave direktiva više ne vrijedi.
 */
export function hasLeadingUseClient(head) {
  let text = head
  for (;;) {
    const trimmed = text.replace(/^\s+/, '')
    if (trimmed.startsWith('/*')) {
      const end = trimmed.indexOf('*/')
      if (end === -1) return false
      text = trimmed.slice(end + 2)
      continue
    }
    if (trimmed.startsWith('//')) {
      const end = trimmed.indexOf('\n')
      if (end === -1) return false
      text = trimmed.slice(end + 1)
      continue
    }
    return /^["']use client["']/.test(trimmed)
  }
}

/**
 * Sloj A. Vraća { secretModules, clientRoots, violations, moduleCount }.
 * `violations` je popis { secret, chain } gdje je chain put od klijentskog
 * korijena do tajnog modula.
 */
export async function scanImportIsolation({ root = REPO_ROOT, rootDirs } = {}) {
  const aliases = await loadAliases(root)
  const dirs = rootDirs ?? (await listScanRootDirs(root))
  const files = []
  for (const dir of dirs) {
    await walk(path.join(root, dir), {
      extensions: GRAPH_EXTENSIONS,
      onFile: (absPath) => files.push(absPath),
    })
  }

  const secretModules = []
  const clientRoots = []
  const sources = new Map()

  for (const absPath of files) {
    const rel = toPosix(path.relative(root, absPath))
    const ext = path.extname(absPath)

    if (ext === '.json') {
      if (isSecretDataPath(rel)) secretModules.push(rel)
      continue // JSON nema uvoza — list grafa
    }

    const prefix = await readHead(absPath, Math.max(MARKER_WINDOW_BYTES, DIRECTIVE_WINDOW_BYTES))
    if (prefix.slice(0, MARKER_WINDOW_BYTES).includes(SECRET_MARKER)) secretModules.push(rel)

    const isUseClient = hasLeadingUseClient(prefix.slice(0, DIRECTIVE_WINDOW_BYTES))
    if (isUseClient) {
      clientRoots.push(rel)
    } else if (isClientRootPath(rel)) {
      // Stranica/layout bez 'server-only' u zaglavlju tretira se kao klijentski korijen
      // (konzervativno: server komponenta koja renderira klijentske ionako ih uvozi).
      const isServerOnly = /["']server-only["']/.test(prefix.slice(0, DIRECTIVE_WINDOW_BYTES))
      if (!isServerOnly) clientRoots.push(rel)
    }
  }

  // Graf se gradi lijeno: čitamo samo module do kojih BFS doista dođe.
  const secretSet = new Set(secretModules)
  const visited = new Set()
  const parent = new Map()
  const queue = []
  const violations = []

  for (const rel of clientRoots) {
    if (visited.has(rel)) continue
    visited.add(rel)
    parent.set(rel, null)
    queue.push(rel)
  }

  let cursor = 0
  while (cursor < queue.length) {
    const rel = queue[cursor++]
    if (secretSet.has(rel)) {
      const chain = []
      for (let node = rel; node != null; node = parent.get(node) ?? null) chain.unshift(node)
      violations.push({ secret: rel, chain })
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

  return {
    moduleCount: files.length,
    secretModules: secretModules.sort(),
    clientRoots: clientRoots.sort(),
    reachableFromClient: visited.size,
    violations,
  }
}

/* ------------------------------------------------------------------ */
/* Sloj B — ratchet nad izvorom                                        */
/* ------------------------------------------------------------------ */

function countMatches(pattern, source) {
  pattern.lastIndex = 0
  let count = 0
  while (pattern.exec(source) !== null) count += 1
  pattern.lastIndex = 0
  return count
}

/** Datoteka oblika ispita: ima q:/opts:/items:/rights:/qs: kao svojstvo objekta. */
export function isExamShaped(source) {
  return countMatches(EXAM_SHAPE_PATTERN, source) > 0
}

/**
 * Jaki ključevi se broje uvijek; slabi (generički) samo ako je datoteka oblika
 * ispita ili već ima bar jedan jaki ključ. Time `{ steps: [...] }` u wizardu ili
 * `{ exp: 120 }` u XP logici ne ruši provjeru, a pravi ispitni payload — koji
 * uvijek nosi q:/opts: — i dalje broji svaki ključ.
 */
export function countSecretKeys(source, matchers = DEFAULT_MATCHERS) {
  const strong = matchers.strong ? countMatches(matchers.strong, source) : 0
  if (strong === 0 && !isExamShaped(source)) return 0
  return strong + (matchers.weak ? countMatches(matchers.weak, source) : 0)
}

/**
 * Vraća { files: { relPath: count }, totalHits, fileCount, roots }.
 *
 * Tajni store (`lib/data/<predmet>/secrets/**.json`) se NE broji: to je mjesto
 * na koje ključeve treba preseliti, pa bi ga ratchet inače kaznio za svaku
 * uspješnu migraciju i učinio ADR točku 6 ("novi predmet ide u baseline s
 * vrijednošću 0") neizvedivom. Ta datoteka nije nezaštićena — sloj A gleda
 * točno isti skup putanja (`isSecretDataPath`) i pada ako je ijedna od njih
 * dohvatljiva iz klijentskog grafa uvoza.
 */
export async function scanSecretKeys({ root = REPO_ROOT, rootDirs, keys } = {}) {
  const matchers = keys ? makeKeyMatchers(keys) : DEFAULT_MATCHERS
  const files = {}
  let totalHits = 0
  const dirs = rootDirs ?? (await listScanRootDirs(root))

  for (const dir of dirs) {
    await walk(path.join(root, dir), {
      extensions: SCAN_EXTENSIONS,
      onFile: async (absPath) => {
        const rel = toPosix(path.relative(root, absPath))
        if (isSecretDataPath(rel)) return
        const source = await readFile(absPath, 'utf8').catch(() => '')
        const count = countSecretKeys(source, matchers)
        if (count === 0) return
        files[rel] = count
        totalHits += count
      },
    })
  }

  const sorted = {}
  for (const key of Object.keys(files).sort()) sorted[key] = files[key]

  return {
    files: sorted,
    totalHits,
    fileCount: Object.keys(sorted).length,
    roots: [...dirs],
    keys: [...matchers.keys],
  }
}

/**
 * Ključevi koje sken danas poznaje, a baseline ih još ne broji. Prazan popis =
 * baseline je zapisan pod istim pravilima pod kojima se sada mjeri.
 *
 * @param {object|null} baseline
 * @returns {string[]}
 */
export function baselineMissingKeys(baseline) {
  const known = Array.isArray(baseline?.keys) ? new Set(baseline.keys) : null
  if (!known) return []
  return SECRET_KEYS.filter((key) => !known.has(key))
}

export async function loadBaseline(baselinePath = BASELINE_PATH) {
  const raw = await readFile(baselinePath, 'utf8')
  const parsed = JSON.parse(raw)
  return parsed?.files && typeof parsed.files === 'object' ? parsed : { files: parsed }
}

/**
 * Usporedba s baselineom. Ratchet smije samo padati:
 *   - `regressions`  — datoteka ima više pogodaka nego baseline
 *   - `newFiles`     — datoteka s pogotkom koje nema u baselineu
 *   - `improvements` — datoteka ima manje pogodaka (regeneriraj baseline)
 *   - `removed`      — datoteka iz baselinea više nema pogodaka
 */
export function compareToBaseline(current, baseline) {
  const baselineFiles = baseline?.files ?? {}
  const regressions = []
  const newFiles = []
  const improvements = []
  const removed = []

  for (const [file, count] of Object.entries(current.files)) {
    if (!(file in baselineFiles)) {
      newFiles.push({ file, count })
      continue
    }
    const allowed = baselineFiles[file]
    if (count > allowed) regressions.push({ file, count, allowed })
    else if (count < allowed) improvements.push({ file, count, allowed })
  }

  for (const file of Object.keys(baselineFiles)) {
    if (!(file in current.files)) removed.push({ file, allowed: baselineFiles[file] })
  }

  return { regressions, newFiles, improvements, removed, ok: regressions.length === 0 && newFiles.length === 0 }
}

export function buildBaselinePayload(current) {
  return {
    schemaVersion: 2,
    note: 'ADR-001: ratchet ispitnih tajni. Vrijednosti smiju samo padati. Regeneriraj s `npm run security:secrets -- --write-baseline`; porast prolazi samo uz --allow-increase i izmjenu ADR-a.',
    keys: Array.isArray(current.keys) ? [...current.keys] : [...SECRET_KEYS],
    strongKeys: [...STRONG_SECRET_KEYS],
    roots: current.roots ?? [],
    totalHits: current.totalHits,
    fileCount: current.fileCount,
    files: current.files,
  }
}

export class BaselineIncreaseError extends Error {
  constructor(diff) {
    const lines = [
      ...diff.newFiles.map((item) => `  nova datoteka: ${item.file} (${item.count})`),
      ...diff.regressions.map((item) => `  porast: ${item.file} ${item.allowed} -> ${item.count}`),
    ]
    super(`Baseline bi porastao — to je promjena politike (ADR-001). Ponovi s --allow-increase ako je namjerno.\n${lines.join('\n')}`)
    this.name = 'BaselineIncreaseError'
    this.diff = diff
  }
}

/**
 * Zapisuje baseline. Ratchet smije samo padati: ako bi ijedna datoteka porasla
 * ili se pojavila nova, zapis se odbija osim uz `allowIncrease`. Bez toga bi
 * regeneracija zbog jednog nedužnog lažnog pozitivca tiho podigla strop i za
 * pravu regresiju u istom commitu.
 */
export async function writeBaseline(current, baselinePath = BASELINE_PATH, { allowIncrease = false } = {}) {
  if (!allowIncrease) {
    let existing = null
    try {
      existing = await loadBaseline(baselinePath)
    } catch {
      existing = null
    }
    if (existing) {
      const diff = compareToBaseline(current, existing)
      if (!diff.ok) throw new BaselineIncreaseError(diff)
    }
  }
  const payload = buildBaselinePayload(current)
  await writeFile(baselinePath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  return payload
}

/* ------------------------------------------------------------------ */
/* CLI                                                                 */
/* ------------------------------------------------------------------ */

export async function runScan({ root = REPO_ROOT } = {}) {
  const isolation = await scanImportIsolation({ root })
  let baseline = null
  try {
    baseline = await loadBaseline()
  } catch {
    baseline = null
  }
  // Ratchet mjeri istom mjerom kojom je baseline zapisan; prošireni popis
  // ključeva je zaseban događaj (`pendingKeys`), ne regresija.
  const pendingKeys = baselineMissingKeys(baseline)
  const keys = await scanSecretKeys({ root, keys: baseline?.keys })
  const ratchet = baseline ? compareToBaseline(keys, baseline) : null
  return { isolation, keys, ratchet, pendingKeys }
}

const isDirectRun = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false

if (isDirectRun) {
  const argv = process.argv.slice(2)
  let existingBaseline = null
  try {
    existingBaseline = await loadBaseline()
  } catch {
    existingBaseline = null
  }
  const pendingKeys = baselineMissingKeys(existingBaseline)
  // Provjera mjeri ključevima baselinea; regeneracija uvijek punim popisom.
  const keys = argv.includes('--write-baseline')
    ? await scanSecretKeys()
    : await scanSecretKeys({ keys: existingBaseline?.keys })

  if (argv.includes('--write-baseline')) {
    try {
      const payload = await writeBaseline(keys, BASELINE_PATH, { allowIncrease: argv.includes('--allow-increase') })
      process.stdout.write(
        `Baseline zapisan: ${path.relative(REPO_ROOT, BASELINE_PATH)} — ${payload.totalHits} pogodaka u ${payload.fileCount} datoteka.\n`,
      )
      process.exit(0)
    } catch (error) {
      if (error instanceof BaselineIncreaseError) {
        process.stderr.write(`ODBIJENO: ${error.message}\n`)
        process.exit(1)
      }
      throw error
    }
  }

  const isolation = await scanImportIsolation()
  const baseline = existingBaseline
  if (!baseline) {
    process.stderr.write('GREŠKA: baseline ne postoji. Pokreni s --write-baseline.\n')
    process.exit(1)
  }
  const ratchet = compareToBaseline(keys, baseline)

  if (argv.includes('--json')) {
    process.stdout.write(`${JSON.stringify({ isolation, keys, ratchet, pendingKeys }, null, 2)}\n`)
    process.exit(isolation.violations.length === 0 && ratchet.ok ? 0 : 1)
  }

  const top = Object.entries(keys.files)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  process.stdout.write('— SLOJ A: izolacija grafa uvoza —\n')
  process.stdout.write(
    `  moduli: ${isolation.moduleCount}, klijentski korijeni: ${isolation.clientRoots.length}, `
      + `dohvatljivo iz klijenta: ${isolation.reachableFromClient}, tajni moduli: ${isolation.secretModules.length}\n`,
  )
  for (const violation of isolation.violations) {
    process.stdout.write(`  PAD: tajni modul ${violation.secret} dohvatljiv je preko:\n`)
    for (const step of violation.chain) process.stdout.write(`       ${step}\n`)
  }
  if (isolation.violations.length === 0) process.stdout.write('  OK — nijedan tajni modul nije dohvatljiv iz klijenta.\n')

  process.stdout.write('\n— SLOJ B: ratchet nad izvorom —\n')
  process.stdout.write(`  ukupno pogodaka: ${keys.totalHits} u ${keys.fileCount} datoteka (baseline: ${baseline.totalHits ?? '?'})\n`)
  if (pendingKeys.length) {
    process.stdout.write(
      `  NAPOMENA: baseline ne broji ključeve ${pendingKeys.join(', ')} — mjeri se popisom pod kojim je zapisan.\n`
        + '           Regeneriraj s `--write-baseline --allow-increase` (ADR-001 §6: prvi upis novog popisa je promjena politike).\n',
    )
  }
  process.stdout.write('  top 5:\n')
  for (const [file, count] of top) process.stdout.write(`       ${count.toString().padStart(6)}  ${file}\n`)
  for (const item of ratchet.newFiles) process.stdout.write(`  PAD: nova datoteka bez baseline unosa: ${item.file} (${item.count})\n`)
  for (const item of ratchet.regressions) {
    process.stdout.write(`  PAD: ${item.file} ima ${item.count} pogodaka, baseline dopušta ${item.allowed}\n`)
  }
  if (ratchet.improvements.length) {
    process.stdout.write(`  Napredak u ${ratchet.improvements.length} datoteka — spusti baseline s --write-baseline (porast se odbija).\n`)
  }
  if (ratchet.ok) process.stdout.write('  OK — nijedna datoteka ne premašuje baseline.\n')

  process.exit(isolation.violations.length === 0 && ratchet.ok ? 0 : 1)
}
