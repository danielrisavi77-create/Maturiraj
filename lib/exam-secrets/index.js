import 'server-only' // @exam-secret
// lib/exam-secrets/index.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001 (docs/ADR-001-ispitni-podaci.md) — JEDINI čitač tajnog storea.
//
// Tajni store živi pod lib/data/<predmet>/secrets/<examKey>.json i čita se
// `fs`-om, NIKAD `import`-om: statički uvoz bi bundler uvukao u graf modula, pa
// bi jedan neoprezan re-export iz klijentske komponente vratio ključeve u
// preglednik. Uz `fs` put je jedino zvanje ove funkcije, a ono je iza
// `server-only`.
//
// Cijena tog izbora: datoteka mora postojati u bundleu serverless funkcije.
// Next output tracing ne vidi `readFile(process.cwd() + …)`, pa next.config.mjs
// ima `outputFileTracingIncludes` za '/api/sim/…' → bez toga je prvi
// produkcijski poziv 500 (docs: ADR-001, "Regeneracijski lanci").
import { readFile } from 'node:fs/promises'
import path from 'node:path'

/** Predmet i ključ ispita ulaze u putanju — samo bezopasni segmenti. */
const SAFE_SEGMENT = /^[A-Za-z0-9_-]{1,64}$/

/**
 * Polja koja otkrivaju rješenje. Popis je zrcalo ADR-a i sloja B ratcheta
 * (scripts/security/exam-secret-scan.mjs). Gnijezdena polja (cl, ans, alt,
 * pairs, ex) žive unutar sol, pa ih uklanjanje sol-a nosi sa sobom.
 */
export const SECRET_FIELDS = Object.freeze([
  'sol',
  'exp',
  'why',
  'steps',
  'warn',
  'graphRef',
  'ocjenaKljuc',
  'distraktori',
  'rubric',
  'solFormula',
  'svgFn',
])

/**
 * Keš učitanih tajni. Ispiti su nepromjenjivi u jednoj instanci, ali mat ima
 * ~100 KB po ispitu, pa keš ima strop i izbacuje najstariji unos (FIFO).
 * Promašaji se NE keširaju — negativan keš bi značio da novododana datoteka
 * ostaje nevidljiva do restarta instance.
 */
const MAX_CACHED_EXAMS = 24
const cache = new Map()

/** @param {unknown} value */
export function isSafeSegment(value) {
  return typeof value === 'string' && SAFE_SEGMENT.test(value)
}

/** Apsolutna putanja tajnog storea za (predmet, ispit), ili null za neispravan segment. */
export function secretsPath(subject, examKey) {
  if (!isSafeSegment(subject) || !isSafeSegment(examKey)) return null
  return path.join(process.cwd(), 'lib', 'data', subject, 'secrets', `${examKey}.json`)
}

/**
 * Učitaj tajni store jednog ispita.
 *
 * @param {string} subject
 * @param {string} examKey
 * @returns {Promise<Record<string, object>|null>} mapa qid → tajna polja, ili null
 */
export async function loadSecrets(subject, examKey) {
  const file = secretsPath(subject, examKey)
  if (!file) return null

  const cacheKey = `${subject}/${examKey}`
  const cached = cache.get(cacheKey)
  if (cached !== undefined) return cached

  let parsed = null
  try {
    parsed = JSON.parse(await readFile(file, 'utf8'))
  } catch (err) {
    // ENOENT je legitiman odgovor ("ispit nema ključ"), sve ostalo je kvar.
    if (err?.code !== 'ENOENT') {
      console.error(`[exam-secrets] ${subject}/${examKey}: tajni store nije čitljiv.`, err)
    }
    return null
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null

  if (cache.size >= MAX_CACHED_EXAMS) cache.delete(cache.keys().next().value)
  cache.set(cacheKey, parsed)
  return parsed
}

/** Testovi i regeneracija sadržaja. */
export function clearSecretsCache() {
  cache.clear()
}

/**
 * Tajna polja koja ne žive na korijenu pitanja nego dublje u stablu. Transkript
 * slušanja je jedini takav slučaj (canonical `audio_group`): sve ostalo su
 * korijenska polja, a `children` se čiste rekurzivno istom allowlistom.
 */
const NESTED_SECRET_PATHS = Object.freeze([['stimulus', 'listening', 'transcript']])

/** Vrati kopiju bez polja na zadanoj putanji; isti objekt kad putanje nema. */
function withoutPath(node, [head, ...rest]) {
  if (!node || typeof node !== 'object' || !(head in node)) return node
  if (rest.length === 0) {
    const { [head]: _removed, ...keep } = node
    return keep
  }
  const child = withoutPath(node[head], rest)
  if (child === node[head]) return node
  return { ...node, [head]: child }
}

function withoutNestedSecrets(question) {
  let out = question
  for (const secretPath of NESTED_SECRET_PATHS) out = withoutPath(out, secretPath)
  return out
}

/**
 * Očisti jedno pitanje za isporuku bez ključeva.
 *
 * `publicFields` (allowlist iz adaptera) je jači oblik: novo polje s ključem
 * ispada samo od sebe. Bez njega vrijedi denylist nad SECRET_FIELDS — dovoljan
 * za zatečene predmete, ali svaki novi predmet treba dati allowlistu.
 *
 * REKURZIVNO po `children`: canonical grupe (passage_group, audio_group,
 * media_response) drže prava pitanja u djeci, pa bi plitko čišćenje ostavilo
 * ključ svakog lista unutar grupe. Allowlista vrijedi i za djecu (zato u njoj
 * mora stajati `children`). Predmeti bez djece (eng, soc) ne osjete razliku.
 *
 * @param {object} question
 * @param {readonly string[]|null} [publicFields]
 */
export function stripQuestion(question, publicFields = null) {
  if (!question || typeof question !== 'object') return question

  let out
  if (Array.isArray(publicFields) && publicFields.length) {
    out = {}
    for (const field of publicFields) {
      if (question[field] !== undefined) out[field] = question[field]
    }
  } else {
    out = { ...question }
    for (const field of SECRET_FIELDS) delete out[field]
  }

  if (Array.isArray(out.children)) {
    out.children = out.children.map((child) => stripQuestion(child, publicFields))
  }
  return withoutNestedSecrets(out)
}

/** @param {object[]} questions */
export function stripQuestions(questions, publicFields = null) {
  if (!Array.isArray(questions)) return []
  return questions.map((question) => stripQuestion(question, publicFields))
}

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

/**
 * Spoji tajni zapis u javno pitanje — DUBOKO, po objektima.
 *
 * Plitki `{ ...question, ...secret }` bio bi točan samo da su sva tajna polja
 * korijenska. Nisu: transkript slušanja živi na `stimulus.listening.transcript`
 * (`NESTED_SECRET_PATHS`, ADR-001 §2), pa je tajni zapis grupe realno
 * `{ stimulus: { listening: { transcript } } }`. Plitkim spajanjem bi cijeli
 * javni `stimulus` bio ZAMIJENJEN tim objektom, a s njim bi nestali tekst
 * ulomka i konfiguracija snimke (`maxPlays`) — plaćeni korisnik bi dobio ispit
 * koji se ne može riješiti, a ocjenjivanje bi izgubilo `gaps`/`left` kad bi ih
 * tajni zapis dirao.
 *
 * Objekt se spaja rekurzivno; polje, niz i skalar iz tajne zamjenjuju javno
 * (tajni `answer.correct` mora nadjačati eventualni javni ostatak, ne stopiti se
 * s njim).
 */
function deepMergeSecret(base, secret) {
  if (!isPlainObject(secret)) return secret
  const out = isPlainObject(base) ? { ...base } : {}
  for (const key of Object.keys(secret)) {
    const value = secret[key]
    out[key] = isPlainObject(value) && isPlainObject(out[key]) ? deepMergeSecret(out[key], value) : value
  }
  return out
}

/**
 * Spoji tajna polja natrag u javno pitanje (plaćeni tier, i legitimni free
 * izuzeci iz free-policy.js). Vraća isto pitanje kad tajne za taj qid nema, pa
 * pozivatelj po identitetu objekta zna je li spajanje doista bilo.
 *
 * REKURZIVNO po `children`: tajni store je mapa qid → polja, a qid-ovi listova
 * unutar grupe su u njoj ravnopravni ključevi.
 *
 * @param {object} question
 * @param {Record<string, object>|null} secrets
 */
export function mergeSecrets(question, secrets) {
  if (!question || typeof question !== 'object') return question

  const qid = question.id
  const secret = qid != null && secrets ? secrets[qid] : null
  const hasSecret = !!secret && typeof secret === 'object'

  const children = question.children
  let nextChildren = children
  if (Array.isArray(children)) {
    let changed = false
    const merged = children.map((child) => {
      const next = mergeSecrets(child, secrets)
      if (next !== child) changed = true
      return next
    })
    if (changed) nextChildren = merged
  }

  if (!hasSecret && nextChildren === children) return question
  const out = hasSecret ? deepMergeSecret(question, secret) : { ...question }
  if (nextChildren !== children) out.children = nextChildren
  return out
}

/** Koliko LISTOVA (pitanja koja se doista rješavaju) nosi jedno pitanje. */
export function countLeaves(question) {
  if (!question || typeof question !== 'object') return 0
  const children = question.children
  if (Array.isArray(children) && children.length) {
    return children.reduce((sum, child) => sum + countLeaves(child), 0)
  }
  return 1
}

/** @param {object[]} questions */
export function countLeavesIn(questions) {
  if (!Array.isArray(questions)) return 0
  return questions.reduce((sum, question) => sum + countLeaves(question), 0)
}

/**
 * Svi qid-ovi stabla pitanja (grupe i listovi). Ocjenjivačka ruta time sužava
 * `answers`/`qTimes` na pitanja koja ispit doista ima — bez rekurzije bi kod
 * grupnih zadataka ispali SVI odgovori, jer odgovori stoje pod qid-om lista.
 *
 * @param {object[]} questions
 * @returns {string[]}
 */
export function collectQuestionIds(questions, acc = []) {
  for (const question of Array.isArray(questions) ? questions : []) {
    if (!question || typeof question !== 'object') continue
    if (typeof question.id === 'string') acc.push(question.id)
    if (Array.isArray(question.children)) collectQuestionIds(question.children, acc)
  }
  return acc
}

function mergeNodeWithBudget(question, secrets, state) {
  if (!question || typeof question !== 'object') return question

  const children = question.children
  if (Array.isArray(children) && children.length) {
    const leavesBefore = state.leaves
    const grantedBefore = state.granted
    let changed = false
    const nextChildren = children.map((child) => {
      const next = mergeNodeWithBudget(child, secrets, state)
      if (next !== child) changed = true
      return next
    })
    // Grupa svoju tajnu (npr. transkript slušanja) dobiva samo ako su SVI
    // njezini listovi unutar kvote.
    //
    // Nije dovoljno da je ijedan list dobio ključ: transkript je ključ SVIH
    // zadataka te snimke (ADR-001 §2), pa bi audio_group od šest listova uz
    // FREE_LIMIT=3 free korisniku dala tekst koji rješava i preostala tri —
    // dvostruko više nego što kvota dopušta. Broji se DODIJELJENOST (list je
    // stao u kvotu), ne spajanje: list kojemu tajni store nema ključ potrošio
    // je svoje mjesto i ne smije grupu držati zatvorenom.
    const leavesInGroup = state.leaves - leavesBefore
    const grantedInGroup = state.granted - grantedBefore
    const wholeGroupGranted = leavesInGroup > 0 && grantedInGroup === leavesInGroup
    const groupSecret = wholeGroupGranted && secrets ? secrets[question.id] : null
    const hasGroupSecret = !!groupSecret && typeof groupSecret === 'object'
    if (!changed && !hasGroupSecret) return question
    const out = hasGroupSecret ? deepMergeSecret(question, groupSecret) : { ...question }
    out.children = nextChildren
    return out
  }

  state.leaves += 1
  if (state.remaining <= 0) return question
  state.remaining -= 1
  state.granted += 1
  const merged = mergeSecrets(question, secrets)
  if (merged !== question) state.merged += 1
  return merged
}

/**
 * Spoji tajne u prvih `allowance` LISTOVA (ne prvih `allowance` stavaka na
 * vrhu): kvota free vježbanja je kvota pitanja koja korisnik rješava, a jedna
 * `passage_group` ih nosi pet. Za predmete bez djece ponašanje je identično
 * starom brojanju po indeksu.
 *
 * @param {object[]} questions  već očišćena javna pitanja
 * @param {Record<string, object>|null} secrets
 * @param {number} allowance  broj listova koji smiju nositi ključ (Infinity = svi)
 * @returns {{ qs: object[], mergedLeaves: number, totalLeaves: number }}
 */
export function mergeSecretsWithAllowance(questions, secrets, allowance) {
  const state = {
    remaining: Number.isFinite(allowance) ? Math.max(0, allowance) : Number.POSITIVE_INFINITY,
    // `merged` = listovi koji su doista dobili ključ (od toga ovisi `keys`);
    // `granted` = listovi koji su stali u kvotu, imali ključ ili ne. Grupna
    // tajna se veže uz `granted`, pa rupa u tajnom storeu ne otvara transkript.
    merged: 0,
    granted: 0,
    leaves: 0,
  }
  const qs = (Array.isArray(questions) ? questions : []).map((question) =>
    mergeNodeWithBudget(question, secrets, state),
  )
  return { qs, mergedLeaves: state.merged, totalLeaves: state.leaves }
}
