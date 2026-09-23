#!/usr/bin/env node
// scripts/soc-split-solutions.mjs
// ─────────────────────────────────────────────────────────────────────────────
// Rez sociološkog monolita — ADR-001 (docs/ADR-001-ispitni-podaci.md), Faza 2.
//
// Sociologija nije modul nego JEDAN statički HTML (public/sim/sociologija.html,
// ~1,06 MB) koji se poslužuje iz public/ i koji je dosad nosio SVE: 32 ispita,
// 1718 pitanja, ključeve (`sol`) i naša obrazloženja (`exp`). Datoteka je
// dohvatljiva običnim GET-om, pa je to bilo najveće pojedinačno curenje u repou.
//
// Ova skripta razdvaja monolit i prepisuje HTML:
//   content/soc/exams/<examKey>.json      javni payload { key, meta, texts, qs }
//   lib/data/soc/secrets/<examKey>.json   tajni store  { "<qid>": { sol, exp, type, topic } }
//   lib/data/soc/exams-index.json         lagani indeks (bez pitanja), za discere-access
//   public/sim/sociologija.html           `const EXAMS={…}` → `let EXAMS={}` + SOC_EXAM_META
//
// Pokretanje:
//   node scripts/soc-split-solutions.mjs --dry-run   # ništa ne piše, samo provjeri i ispiši
//   node scripts/soc-split-solutions.mjs
//
// ZAŠTO ACORN, A NE REGEX: podaci su jedan JS literal unutar 1 MB inline scripta.
// Regex nad takvim izvorom nije balance-safe — jedna zagrada u tekstu zadatka i
// rez presiječe literal na pola. Acorn daje točne granice IZJAVA (`start`/`end`
// VariableDeclaration čvora), pa se reže isključivo na granici izjave.
//
// IDEMPOTENTNOST: drugo pokretanje ne mijenja ništa. Kad u HTML-u više nema
// podataka (prvi rez je prošao), izvor istine su generirane datoteke: skripta ih
// ponovno pročita i ponovno provjeri. Isti ulaz → bajt-identičan izlaz.
//
// PROVJERA je obavezna i vrti se u oba načina rada (i u --dry-run):
//   1. broj ispita i broj pitanja nepromijenjen,
//   2. nijedno pitanje u javnom payloadu nema tajno polje (na bilo kojoj dubini),
//   3. tajni store ima unos za SVAKI qid, i nijedan višak,
//   4. prepisani HTML se i dalje parsira (`new Function` nad script blokom).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'
import * as acorn from 'acorn'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const HTML_PATH = path.join(ROOT, 'public', 'sim', 'sociologija.html')
const PUBLIC_DIR = path.join(ROOT, 'content', 'soc', 'exams')
const SECRETS_DIR = path.join(ROOT, 'lib', 'data', 'soc', 'secrets')
const INDEX_PATH = path.join(ROOT, 'lib', 'data', 'soc', 'exams-index.json')

const DRY_RUN = process.argv.includes('--dry-run')

/* ── ugovor podataka ──────────────────────────────────────────────────────── */

/**
 * Polja pitanja koja smiju u klijent (ADR točka 1). ALLOWLIST, ne denylist:
 * novo polje s ključem ispada samo od sebe, bez izmjene ovog popisa.
 * `nsel` je IZVEDENO polje (vidi buildPublicQuestion) — ne postoji u izvoru.
 */
const PUBLIC_QUESTION_FIELDS = Object.freeze(['id', 'type', 'topic', 'q', 'opts', 'items', 'nsel'])

/** Polja pitanja koja idu u tajni store (ADR točka 2). */
const SECRET_QUESTION_FIELDS = Object.freeze(['sol', 'exp'])

/**
 * Svako ime polja koje u javnom payloadu znači pad provjere — uključujući
 * potpolja `sol`-a (`cl`, `cls`, `pairs`, `ans`, `alt`, `ex`), jer bi ravno
 * kopirano potpolje prošlo provjeru koja gleda samo `sol`.
 */
const FORBIDDEN_PUBLIC_FIELDS = Object.freeze(new Set([
  'sol', 'exp', 'why', 'steps', 'warn', 'graphRef', 'ocjenaKljuc', 'distraktori',
  'rubric', 'solFormula', 'svgFn', 'cl', 'cls', 'pairs', 'ans', 'alt', 'ex',
]))

/** Tipovi koje engine ne ocjenjuje automatski (Sim.submit: autoQ = sve osim sa/es). */
const MANUAL_TYPES = new Set(['sa', 'es'])

/**
 * Trajanje ispitnog moda u sekundama. U engineu je hardkodirano
 * (`useTimer(examMode?5400:…)`), isto za sve ispite — sociologija nema trajanje
 * po ispitu. Ovdje je zato konstanta, a ne podatak iz izvora.
 */
const EXAM_DURATION_SEC = 5400

/* ── čitanje i rez HTML-a ─────────────────────────────────────────────────── */

/** Nađi jedini inline <script> (ostali imaju src=) i vrati mu granice. */
function findInlineScript(html) {
  const open = html.lastIndexOf('<script>')
  if (open === -1) throw new Error('U HTML-u nema inline <script> bloka.')
  const bodyStart = open + '<script>'.length
  const close = html.indexOf('</script>', bodyStart)
  if (close === -1) throw new Error('Inline <script> nema zatvarajući tag.')
  return { bodyStart, bodyEnd: close, code: html.slice(bodyStart, close) }
}

const isQsName = (name) => name === 'QS' || name === 'QS2' || /^QS_/.test(name)

/**
 * Nađi deklaracije podataka u script bloku. Vraća granice REGIJE koja se reže:
 * od početka prve QS deklaracije do kraja deklaracije EXAMS.
 */
function findDataRegion(code) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest' })
  const qsNodes = []
  let examsNode = null
  let examsKind = null
  let examsInit = null

  for (const node of ast.body) {
    if (node.type !== 'VariableDeclaration') continue
    for (const declarator of node.declarations) {
      if (declarator.id?.type !== 'Identifier') continue
      if (isQsName(declarator.id.name)) qsNodes.push(node)
      if (declarator.id.name === 'EXAMS') {
        examsNode = node
        examsKind = node.kind
        examsInit = declarator.init
      }
    }
  }

  if (!examsNode) throw new Error('U script bloku nema deklaracije EXAMS.')

  const alreadySplit = qsNodes.length === 0
    && examsKind === 'let'
    && examsInit?.type === 'ObjectExpression'
    && examsInit.properties.length === 0

  if (alreadySplit) return { alreadySplit: true }

  if (!qsNodes.length) {
    throw new Error('EXAMS postoji, ali nema nijedne QS deklaracije — neočekivano stanje HTML-a.')
  }

  const start = qsNodes[0].start
  const end = examsNode.end
  // Regija smije sadržavati ISKLJUČIVO QS deklaracije i EXAMS; sve drugo je znak
  // da se datoteka promijenila i da rez više nije siguran.
  const inside = ast.body.filter((node) => node.start >= start && node.end <= end)
  const expected = qsNodes.length + 1
  if (inside.length !== expected) {
    const strays = inside
      .filter((node) => !qsNodes.includes(node) && node !== examsNode)
      .map((node) => `${node.type}@${node.start}`)
    throw new Error(`U regiji podataka su i tuđe izjave (${strays.join(', ')}) — rez bi ih pojeo. Prekidam.`)
  }

  return { alreadySplit: false, start, end, qsCount: qsNodes.length }
}

/** Evaluiraj QS deklaracije + EXAMS u izoliranom kontekstu i vrati objekt EXAMS. */
function evaluateExams(code, region) {
  const snippet = `${code.slice(region.start, region.end)}\n;globalThis.__SOC_EXAMS__ = EXAMS;`
  const context = vm.createContext(Object.create(null))
  vm.runInContext(snippet, context, { timeout: 60000 })
  const exams = context.__SOC_EXAMS__
  if (!exams || typeof exams !== 'object') throw new Error('Evaluacija nije dala objekt EXAMS.')
  return exams
}

/* ── izgradnja izlaznih datoteka ──────────────────────────────────────────── */

function pick(source, fields) {
  const out = {}
  for (const field of fields) {
    if (source[field] !== undefined) out[field] = source[field]
  }
  return out
}

/**
 * Javno pitanje.
 *
 * `id` se NORMALIZIRA U STRING. U monolitu je id broj ILI string ("29_1"), a
 * ključ JS objekta je ionako string — engine ga svugdje koristi samo kao ključ
 * mape (`answers[q.id]`) ili kroz `String(q.id)`, pa se ponašanje ne mijenja.
 * Bez normalizacije bi ocjenjivačka ruta otkazala: ona zadržava samo odgovore
 * čiji je id `typeof === 'string'` (app/api/sim/[subject]/grade/route.js), pa bi
 * svi brojčani id-evi tiho otpali i svaka predaja dala nula točnih.
 *
 * `nsel` je izvedeno iz `sol.cls.length`: MSQ bezuvjetno renderira
 * „Odaberi N odgovora“, a bez ključa toga broja nema. Emitira se, ne
 * hardkodira — danas je uvijek 2, ali to je svojstvo podataka, ne pravilo.
 */
function buildPublicQuestion(question) {
  const out = pick(question, PUBLIC_QUESTION_FIELDS)
  out.id = String(question.id)
  if (question.type === 'ms' && Array.isArray(question.sol?.cls)) out.nsel = question.sol.cls.length
  return out
}

function buildSecretQuestion(question) {
  const secret = pick(question, SECRET_QUESTION_FIELDS)
  // `type` i `topic` se NAMJERNO dupliciraju: ocjenjivanje tako nikad ne mora
  // uvoziti javni payload da sazna kako se pitanje boduje (ADR, odjeljak 3).
  if (question.type !== undefined) secret.type = question.type
  if (question.topic !== undefined) secret.topic = question.topic
  return secret
}

function examCounts(exam) {
  const qs = exam.qs || []
  return {
    qCount: qs.length,
    mcCount: qs.filter((q) => q.type === 'mc').length,
    autoCount: qs.filter((q) => !MANUAL_TYPES.has(q.type)).length,
  }
}

function buildPublicExam(key, exam) {
  const { qCount, mcCount, autoCount } = examCounts(exam)
  return {
    key,
    meta: {
      year: exam.year,
      season: exam.season,
      label: exam.label,
      // Naziv kakav engine piše u povijest i u sim_progress (`exam.year+". "+exam.label`).
      fullLabel: `${exam.year}. ${exam.label}`,
      // Sociologija nema razinu; stupac `razina` u sim_progress ostaje prazan.
      razinaCode: null,
      durationSec: EXAM_DURATION_SEC,
      qCount,
      mcCount,
      autoCount,
    },
    // Kontekstni ulomci (EXAM_CONTEXT) ostaju inline u HTML-u: to je izvorni
    // NCVVO materijal bez ijednog ključa, pa ga nema smisla seliti. Polje
    // postoji da envelope bude isti za sve predmete (ADR, odjeljak 5a).
    texts: {},
    qs: (exam.qs || []).map(buildPublicQuestion),
  }
}

function buildSecretStore(exam) {
  const out = {}
  for (const question of exam.qs || []) out[String(question.id)] = buildSecretQuestion(question)
  return out
}

function buildIndexEntry(key, exam) {
  const { qCount, mcCount } = examCounts(exam)
  return { key, year: exam.year, season: exam.season, label: exam.label, qCount, mcCount }
}

/* ── generirani blok u HTML-u ─────────────────────────────────────────────── */

function metaLine(entry) {
  return `{key:${JSON.stringify(entry.key)},year:${entry.year},season:${JSON.stringify(entry.season)},`
    + `label:${JSON.stringify(entry.label)},qCount:${entry.qCount},mcCount:${entry.mcCount},`
    + `durationSec:${EXAM_DURATION_SEC}}`
}

/**
 * Blok koji zamjenjuje podatke u HTML-u.
 *
 * META (ključevi, godine, rokovi, trajanje, broj pitanja) SMIJE ostati inline —
 * ne otkriva nijedno rješenje, a Home ekran ga treba prije nego ijedan ispit
 * stigne (popis ispita, ukupan broj MC pitanja za karticu „Ponavljanje“).
 *
 * EXAMS je `let` i puni se IN PLACE: svih ~20 mjesta koja rade
 * `Object.values(EXAMS)` nastavlja raditi bez izmjene.
 */
function buildGeneratedBlock(index, eol) {
  const lines = [
    '/* ── ISPITNI PODACI — NE UREĐUJ RUČNO ───────────────────────────────────────',
    '   ADR-001 (docs/ADR-001-ispitni-podaci.md), Faza 2.',
    '',
    '   Pitanja, ključevi (sol) i obrazloženja (exp) VIŠE NE ŽIVE u ovoj datoteci.',
    '   Ona se poslužuje iz public/ bez ijedne provjere, pa je svaki ključ u njoj',
    '   bio javan. Podaci su sada:',
    '     content/soc/exams/<examKey>.json      javni payload (bez ključeva)',
    '     lib/data/soc/secrets/<examKey>.json   ključevi i obrazloženja (samo server)',
    '',
    '   Engine u iframeu NIKAD ne zove mrežu. Roditelj (SociologijaClient.jsx)',
    '   dohvaća GET /api/sim/soc/exam/<key> i šalje ispit porukom DISCERE_EXAMS;',
    '   bridge tada zove window.__SOC_INGEST_EXAMS__ (dolje), koji puni EXAMS.',
    '',
    '   Generirano: node scripts/soc-split-solutions.mjs',
    '*/',
    'let EXAMS={};',
    'const SOC_EXAM_META=[',
    ...index.map((entry, i) => metaLine(entry) + (i === index.length - 1 ? '' : ',')),
    '];',
    'const SOC_EXAM_BY_KEY={};SOC_EXAM_META.forEach(function(m){SOC_EXAM_BY_KEY[m.key]=m;});',
    '',
    '// Prima envelope rute GET /api/sim/soc/exam/<key> ({key,meta,texts,qs,keys})',
    '// ili polje takvih. Puni EXAMS IN PLACE — referenca se nikad ne mijenja.',
    'function socIngestExam(payload){',
    '  if(!payload||typeof payload!=="object")return null;',
    '  const key=payload.key;if(typeof key!=="string"||!Array.isArray(payload.qs))return null;',
    '  const meta=payload.meta||{},fallback=SOC_EXAM_BY_KEY[key]||{};',
    '  const ex=EXAMS[key]||(EXAMS[key]={key:key});',
    '  ex.key=key;',
    '  ex.year=meta.year!=null?meta.year:fallback.year;',
    '  ex.season=meta.season||fallback.season;',
    '  ex.label=meta.label||fallback.label;',
    '  ex.qs=payload.qs;',
    '  ex.keys=payload.keys||"none";',
    '  return ex;',
    '}',
    'function socIngestExams(payload){',
    '  const list=Array.isArray(payload)?payload:[payload];',
    '  return list.map(socIngestExam).filter(Boolean);',
    '}',
    'try{window.__SOC_INGEST_EXAMS__=socIngestExams;}catch(e){}',
  ]
  return lines.join(eol)
}

/* ── provjera ─────────────────────────────────────────────────────────────── */

/** Rekurzivno traži ime polja koje u javnom payloadu ne smije postojati. */
function findForbiddenField(value, trail = '') {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      const hit = findForbiddenField(value[i], `${trail}[${i}]`)
      if (hit) return hit
    }
    return null
  }
  if (!value || typeof value !== 'object') return null
  for (const [field, child] of Object.entries(value)) {
    if (FORBIDDEN_PUBLIC_FIELDS.has(field)) return `${trail}.${field}`
    const hit = findForbiddenField(child, `${trail}.${field}`)
    if (hit) return hit
  }
  return null
}

/**
 * Obavezna provjera. `expected` su brojke iz izvora (ili iz prethodnog izlaza pri
 * ponovnom pokretanju) — svako odstupanje je pad, ne upozorenje.
 */
function verify({ publicExams, secretStores, expected, html }) {
  const problems = []
  const keys = Object.keys(publicExams).sort()

  if (keys.length !== expected.examCount) {
    problems.push(`broj ispita: ${keys.length}, očekivano ${expected.examCount}`)
  }

  let questionCount = 0
  let secretCount = 0

  for (const key of keys) {
    const payload = publicExams[key]
    const secrets = secretStores[key]

    const forbidden = findForbiddenField(payload.qs)
    if (forbidden) problems.push(`${key}: javni payload nosi tajno polje na qs${forbidden}`)

    const ids = payload.qs.map((q) => String(q.id))
    const idSet = new Set(ids)
    if (idSet.size !== ids.length) problems.push(`${key}: duplikat qid-a u javnom payloadu`)

    for (const id of ids) {
      if (!Object.prototype.hasOwnProperty.call(secrets, id)) {
        problems.push(`${key}: tajni store nema unos za qid ${id}`)
      }
    }
    for (const id of Object.keys(secrets)) {
      if (!idSet.has(id)) problems.push(`${key}: tajni store ima višak unosa ${id}`)
    }

    questionCount += ids.length
    secretCount += Object.keys(secrets).length
  }

  if (questionCount !== expected.questionCount) {
    problems.push(`broj pitanja: ${questionCount}, očekivano ${expected.questionCount}`)
  }
  if (secretCount !== questionCount) {
    problems.push(`tajnih unosa ${secretCount}, a pitanja ${questionCount}`)
  }

  // HTML mora ostati sintaktički ispravan — `new Function` kompajlira tijelo, ne
  // izvršava ga, pa je to najjeftinija potpuna provjera parsiranja.
  try {
    const { code } = findInlineScript(html)
    new Function(code)
  } catch (error) {
    problems.push(`prepisani HTML se ne parsira: ${error.message}`)
  }

  return problems
}

/* ── upis ─────────────────────────────────────────────────────────────────── */

function serialize(data) {
  return `${JSON.stringify(data)}\n`
}

function writeIfChanged(file, contents) {
  if (existsSync(file) && readFileSync(file, 'utf8') === contents) return false
  if (!DRY_RUN) writeFileSync(file, contents, 'utf8')
  return true
}

/** Ukloni datoteke ispita kojih u izvoru više nema. */
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
    if (!DRY_RUN) unlinkSync(path.join(dir, entry))
    removed += 1
  }
  return removed
}

const PUBLIC_README = [
  '# Javni payload — sociologija',
  '',
  '`exams/<examKey>.json` nosi **samo ono što treba za rješavanje**: `id`, `type`,',
  '`topic`, `q`, `opts`, `items`, izvedeni `nsel` (koliko odgovora traži pitanje',
  'tipa `ms`) i redoslijed pitanja, uz meta ispita.',
  '',
  'Ovdje **nikad** ne smije doći `sol`, `exp` ni bilo koje novo polje koje otkriva',
  'odgovor — to ide u `lib/data/soc/secrets/`. Obje obitelji datoteka generira',
  '`scripts/soc-split-solutions.mjs` iz `public/sim/sociologija.html`; ne uređuju',
  'se ručno.',
  '',
  'Pravilo: [`docs/ADR-001-ispitni-podaci.md`](../../docs/ADR-001-ispitni-podaci.md).',
  '',
].join('\n')

const SECRETS_README = [
  '# Tajni store — sociologija',
  '',
  'Ovdje su **ključevi i obrazloženja** ispita sociologije: po ispitu jedna',
  'datoteka `<examKey>.json` oblika `{ "<qid>": { sol, exp, type, topic } }`.',
  '',
  '**Ništa odavde se ne smije uvesti iz klijentske komponente.** Jedini čitač je',
  '`lib/exam-secrets` (`import \'server-only\'`), a jedini pozivatelji su rute',
  '`GET /api/sim/soc/exam/<key>` i `POST /api/sim/soc/grade`. Datoteke generira',
  '`scripts/soc-split-solutions.mjs` iz `public/sim/sociologija.html`; ne uređuju',
  'se ručno.',
  '',
  'Pravilo: [`docs/ADR-001-ispitni-podaci.md`](../../../../docs/ADR-001-ispitni-podaci.md).',
  '',
].join('\n')

/* ── glavni tok ───────────────────────────────────────────────────────────── */

function loadFromGeneratedOutput() {
  if (!existsSync(INDEX_PATH)) {
    throw new Error(
      'HTML je već razrezan, ali lib/data/soc/exams-index.json ne postoji — '
        + 'izvor istine je izgubljen. Vrati HTML iz gita pa pokreni ponovno.',
    )
  }
  const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
  const publicExams = {}
  const secretStores = {}
  for (const entry of index) {
    publicExams[entry.key] = JSON.parse(readFileSync(path.join(PUBLIC_DIR, `${entry.key}.json`), 'utf8'))
    secretStores[entry.key] = JSON.parse(readFileSync(path.join(SECRETS_DIR, `${entry.key}.json`), 'utf8'))
  }
  return { index, publicExams, secretStores }
}

function main() {
  const html = readFileSync(HTML_PATH, 'utf8')
  const eol = html.includes('\r\n') ? '\r\n' : '\n'
  const script = findInlineScript(html)
  const region = findDataRegion(script.code)

  let index
  const publicExams = {}
  const secretStores = {}

  if (region.alreadySplit) {
    console.log('[soc-split] HTML je već razrezan — izvor istine su generirane datoteke.')
    const loaded = loadFromGeneratedOutput()
    index = loaded.index
    Object.assign(publicExams, loaded.publicExams)
    Object.assign(secretStores, loaded.secretStores)
  } else {
    const exams = evaluateExams(script.code, region)
    const keys = Object.keys(exams)
    index = keys.map((key) => buildIndexEntry(key, exams[key]))
    for (const key of keys) {
      publicExams[key] = buildPublicExam(key, exams[key])
      secretStores[key] = buildSecretStore(exams[key])
    }
  }

  const expected = {
    examCount: index.length,
    questionCount: index.reduce((sum, entry) => sum + entry.qCount, 0),
  }

  // Prepiši HTML (ili ga ostavi kakav jest, ako je već razrezan).
  const block = buildGeneratedBlock(index, eol)
  const nextHtml = region.alreadySplit
    ? html
    : html.slice(0, script.bodyStart + region.start) + block + html.slice(script.bodyStart + region.end)

  const problems = verify({ publicExams, secretStores, expected, html: nextHtml })
  if (problems.length) {
    console.error('[soc-split] PROVJERA PALA — ništa nije zapisano:')
    for (const problem of problems) console.error(`  • ${problem}`)
    process.exit(1)
  }

  if (!DRY_RUN) {
    mkdirSync(PUBLIC_DIR, { recursive: true })
    mkdirSync(SECRETS_DIR, { recursive: true })
  }

  let changed = 0
  if (!DRY_RUN || existsSync(PUBLIC_DIR)) {
    for (const key of Object.keys(publicExams)) {
      if (writeIfChanged(path.join(PUBLIC_DIR, `${key}.json`), serialize(publicExams[key]))) changed += 1
      if (writeIfChanged(path.join(SECRETS_DIR, `${key}.json`), serialize(secretStores[key]))) changed += 1
    }
    if (writeIfChanged(INDEX_PATH, serialize(index))) changed += 1
    if (writeIfChanged(path.join(ROOT, 'content', 'soc', 'README.md'), PUBLIC_README)) changed += 1
    if (writeIfChanged(path.join(SECRETS_DIR, 'README.md'), SECRETS_README)) changed += 1
  } else {
    changed = Object.keys(publicExams).length * 2 + 3
  }
  if (nextHtml !== html) {
    if (!DRY_RUN) writeFileSync(HTML_PATH, nextHtml, 'utf8')
    changed += 1
  }

  const keep = new Set(Object.keys(publicExams))
  const pruned = pruneStale(PUBLIC_DIR, keep) + pruneStale(SECRETS_DIR, keep)

  const secretCount = Object.values(secretStores).reduce((sum, store) => sum + Object.keys(store).length, 0)
  const prefix = DRY_RUN ? '[soc-split][dry-run] ' : '[soc-split] '
  console.log(`${prefix}ispita: ${expected.examCount}, pitanja: ${expected.questionCount}, tajnih unosa: ${secretCount}`)
  console.log(`${prefix}HTML: ${html.length} → ${nextHtml.length} znakova (${html.length - nextHtml.length} manje)`)
  console.log(`${prefix}datoteka promijenjeno: ${changed}, uklonjeno zastarjelih: ${pruned}`)
  console.log(`${prefix}provjera OK — broj ispita i pitanja, bez tajnih polja u javnom payloadu, tajni unos za svaki qid, HTML se parsira.`)
  if (!changed) console.log(`${prefix}nema promjene — skripta je idempotentna.`)
}

main()
