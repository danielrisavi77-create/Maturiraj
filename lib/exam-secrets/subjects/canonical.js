import 'server-only' // @exam-secret
// lib/exam-secrets/subjects/canonical.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001 — JEDAN adapter za sve predmete na canonical engineu
//   GET  /api/sim/<predmet>/exam/<examKey>
//   POST /api/sim/<predmet>/grade
//
// eng i soc imaju vlastite adaptere jer im je ocjenjivanje prijepis legacy
// enginea. Canonical predmeti (19 iz lib/discere/subject-registry.js) dijele
// jednu shemu i jedan ocjenjivač (lib/discere/scoring.js), pa im je adapter
// FUNKCIJA, ne 19 gotovo istih datoteka: `createCanonicalAdapter(subjectId)`.
//
// Podaci: generator (scripts/gen-discere-exams.mjs, grupa A6) piše javni
//   content/<id>/exams/<key>.json          { meta, questions }  bez ključeva
// i tajni
//   lib/data/<id>/secrets/<key>.json       { qid: { answer, solution, … } }
// Oboje se čita `fs`-om (putanja je poznata tek u runtimeu), pa next.config.mjs
// mora imati `outputFileTracingIncludes` za './content/*/exams/*.json' i
// './lib/data/*/secrets/**' — što već ima.
//
// GRUPE: canonical shema ima `passage_group`/`audio_group`/`media_response`
// čija su prava pitanja u `children`. Zato su i čišćenje i spajanje i kvota
// REKURZIVNI (lib/exam-secrets/index.js), a ne po indeksu vrha popisa.
import { scoreExam, scoreQuestion } from '@/lib/discere/scoring'
// Ocjena 1–5 po pragovima 85/70/55/40 i XP su ISTI kao kod engleskog — jedna
// ljestvica za cijelu aplikaciju. Dok grupa A3 ne izdvoji lib/discere/grade-scale.js,
// izvor istine je eng modul (čista funkcija, bez ijednog serverskog uvoza);
// prepisivanje pragova ovdje bilo bi drugo mjesto koje se može razići.
import { grade, calcXpGain } from '@/lib/engleski-simulator/scoring'
import { loadSecrets, mergeSecrets } from '@/lib/exam-secrets'
import { createPublicStore } from '@/lib/exam-secrets/public-store'
import { manualReviewFields } from '@/lib/exam-secrets/free-policy'

/** Grupni tipovi — njihova djeca su listovi (ista definicija kao u scoring.js). */
const GROUP_TYPES = new Set(['passage_group', 'audio_group', 'media_response'])

/**
 * Polja pitanja koja smiju u klijent. Allowlista, ne denylista: novo polje iz
 * sheme v2 (npr. `solution.modelAnswer`) ispada samo od sebe dok ga netko
 * svjesno ne doda ovamo.
 *
 * Primjenjuje se REKURZIVNO, pa `children` mora biti na popisu. `stimulus` ide
 * cijeli osim `listening.transcript`, koji stripQuestion skida na svakoj razini
 * (ADR-001 §2: transkript je ključ zadatka slušanja).
 *
 * Namjerno NEMA: answer, solution, explanation, rubric, rubricDetails,
 * officialText, accepted, catalogOutcomes.
 */
export const PUBLIC_QUESTION_FIELDS = Object.freeze([
  'id',
  'type',
  'prompt',
  'points',
  'topic',
  'chapterSlug',
  'sourceRef',
  'assets',
  'options',
  'gaps',
  'left',
  'right',
  'items',
  'statements',
  'stimulus',
  'children',
  'language',
  'wordBank',
  'mode',
])

/**
 * Javni ispit u obliku koji ruta očekuje.
 *
 * Generator piše canonical oblik `{ meta, questions }`; ruta traži
 * `{ key, meta, texts, qs }`. Prihvaća se oboje, pa zamjena generatora ne traži
 * izmjenu adaptera.
 */
function normalizePublic(parsed, examKey) {
  const questions = Array.isArray(parsed.qs)
    ? parsed.qs
    : Array.isArray(parsed.questions)
      ? parsed.questions
      : null
  if (!questions) return null

  const meta = parsed.meta && typeof parsed.meta === 'object' ? parsed.meta : {}
  // sim_progress.razina zna samo za 'A'/'B'; canonical meta to zove `level`.
  const level = meta.razinaCode ?? meta.level
  return {
    key: parsed.key ?? meta.key ?? examKey,
    meta: {
      ...meta,
      ...(level === 'A' || level === 'B' ? { razinaCode: level } : {}),
      ...(meta.fullLabel === undefined && meta.label !== undefined ? { fullLabel: meta.label } : {}),
    },
    texts: parsed.texts && typeof parsed.texts === 'object' ? parsed.texts : {},
    qs: questions,
  }
}

/** Listovi popisa pitanja (grupe se raspakiraju) — isto pravilo kao scoring.js. */
function leafQuestions(questions, acc = []) {
  for (const question of questions || []) {
    if (GROUP_TYPES.has(question?.type) && Array.isArray(question.children)) {
      leafQuestions(question.children, acc)
    } else if (question) {
      acc.push(question)
    }
  }
  return acc
}

/** Bodovi znaju biti razlomljeni (podijeljeni po prazninama) — bez repa od 1e-15. */
function round2(value) {
  return Number.isFinite(value) ? Math.round(value * 100) / 100 : 0
}

/**
 * Ocijeni predaju canonical predmeta.
 *
 * Ruta predaje JAVNA pitanja i tajni store; spajanje je ovdje, pa ključ nikad ne
 * izlazi iz ovog modula. Brojanje je `lib/discere/scoring.js` — ista funkcija
 * koju plaćeni tier zove lokalno, pa se ocjena ne može razići između dva puta.
 *
 * @param {object[]} qs  javna pitanja (bez ključeva), grupe uključene
 * @param {Record<string, object>} secrets
 * @param {Record<string, unknown>} answers
 */
export function score(qs, secrets, answers) {
  const given = answers && typeof answers === 'object' ? answers : {}
  const merged = (Array.isArray(qs) ? qs : []).map((question) => mergeSecrets(question, secrets))
  const summary = scoreExam({ questions: merged }, given)

  const scores = {}
  const points = {}
  const manual = {}
  let cor = 0
  let total = 0

  for (const question of leafQuestions(merged)) {
    const scored = scoreQuestion(question, given[question.id])
    points[question.id] = { earned: round2(scored.earned), possible: round2(scored.possible) }

    if (scored.status !== 'scored') {
      // Ručni (essay) i neispravan tip nemaju automatsku ocjenu — null, ne false.
      scores[question.id] = null
      if (scored.status === 'manual') {
        const fields = manualReviewFields(question)
        if (fields) manual[question.id] = fields
      }
      continue
    }

    // Djelomični bodovi postoje (fill, matching, true_false), ali `scores` je
    // ugovor "točno/netočno po pitanju": točno je samo puni broj bodova.
    const ok = scored.possible > 0 && scored.earned >= scored.possible
    scores[question.id] = ok
    total += 1
    if (ok) cor += 1
  }

  const pct = Math.max(0, Math.min(100, Math.round(summary.percent)))

  return {
    scores,
    points,
    cor,
    total,
    pct,
    grade: grade(pct),
    bodovi: round2(summary.earnedPoints),
    xpGain: calcXpGain(pct),
    topicBreakdown: summary.topicBreakdown,
    // Dodatni stupci sim_progressa; ruta ih upisuje samo ako ih adapter da i ako
    // migracija postoji (nepoznat stupac se tiho ispušta).
    progressRow: {
      result_version: 2,
      score_pct: pct,
      earned_points: round2(summary.earnedPoints),
      max_points: round2(summary.maxPoints),
      manual_pending: !!summary.manualPending,
      unanswered: summary.unanswered,
    },
    // Amandman ADR §5a: rubrika + model + bodovi ručnog zadatka idu svim
    // tierovima nakon predaje (lib/exam-secrets/free-policy.js).
    review: { manual },
  }
}

/**
 * Adapter jednog canonical predmeta.
 *
 * @param {string} subjectId  id iz lib/discere/subject-registry.js ('bio', 'fiz'…)
 */
export function createCanonicalAdapter(subjectId) {
  if (typeof subjectId !== 'string' || !subjectId) {
    throw new TypeError('createCanonicalAdapter: subjectId mora biti neprazan string.')
  }

  const store = createPublicStore(subjectId, { normalize: normalizePublic })

  return Object.freeze({
    subject: subjectId,
    loadPublic: (examKey) => store.load(examKey),
    loadSecrets: (examKey) => loadSecrets(subjectId, examKey),
    // Bez ograničenja po ispitu: koji su ispiti uopće besplatni odlučuje registar
    // (`freeExam`), a što free korisnik dobiva odlučuje free-policy.js. Drugi
    // popis ovdje bio bi treće mjesto istog prava.
    allowedExamKeys: () => null,
    score,
    publicFields: PUBLIC_QUESTION_FIELDS,
    clearPublicCache: () => store.clear(),
  })
}
