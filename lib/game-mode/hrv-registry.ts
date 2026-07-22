import { EXAMS } from '@/app/discere/hrvatski/simulator/data/exams/index.js'
import { PITANJE_SKRIPTA } from '@/app/discere/hrvatski/simulator/data/lektiraSkripta.js'
import type { CroatianGameQuestion, ReviewStatus } from './types'

const RUNNER_TOPICS = new Set([
  'jez_gram',
  'jez_pravopis',
  'jez_sint',
  'jez_leks',
  'jez_stil',
  'knj_versif',
])
const LITERATURE_TOPICS = new Set([
  'knj_moderna',
  'knj_avangarda',
  'knj_suvremena',
  'knj_svjetska',
])

type LegacyQuestion = {
  id: string | number
  type?: string
  topic?: string
  ctx?: string
  q?: string
  opts?: string[]
  sol?: { cl?: string }
  exp?: string
}

type LegacyExam = {
  key: string
  year?: number
  label?: string
  qs?: LegacyQuestion[]
}

function normalizeText(value: unknown) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

export function promptFingerprint(value: unknown) {
  return normalizeText(value)
    .toLocaleLowerCase('hr')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9čćđšž]+/gi, ' ')
    .trim()
}

function hasLongEmbeddedQuote(prompt: string) {
  const quoted = prompt.match(/[„“\"'][^„“\"']{90,}[„“\"']/)
  return Boolean(quoted) || prompt.split(/[.!?]\s+/).length > 4
}

function literatureMapping(examKey: string, questionId: string | number) {
  return PITANJE_SKRIPTA[`${examKey}__${questionId}`] ?? null
}

function getConcept(question: LegacyQuestion, mapped: any) {
  const text = `${question.q ?? ''} ${(question.opts ?? []).join(' ')}`.toLocaleLowerCase('hr')
  const topic = question.topic ?? 'unknown'

  if (mapped?.djelo) {
    const slug = promptFingerprint(mapped.djelo).replace(/\s+/g, '_')
    return [`hrv.knjizevnost.${slug || 'djelo'}`]
  }
  if (topic === 'jez_gram') {
    if (/padež|nominativ|genitiv|dativ|akuzativ|vokativ|lokativ|instrumental/.test(text)) return ['hrv.morfologija.padezi']
    if (/glagol|aorist|imperfekt|perfekt|futur|kondicional|infinitiv/.test(text)) return ['hrv.morfologija.glagolski_oblici']
    if (/glas|fonem|naglas|palatal|sibilar|jotacij|jednačenj/.test(text)) return ['hrv.fonologija.glasovne_promjene']
    if (/imenic|zamjenic|pridjev|prilog|prijedlog|veznik/.test(text)) return ['hrv.morfologija.vrste_rijeci']
    return ['hrv.morfologija.opce']
  }
  if (topic === 'jez_sint') {
    if (/subjekt|predikat|objekt|atribut|apozic|priložn/.test(text)) return ['hrv.sintaksa.recenicni_clanovi']
    return ['hrv.sintaksa.recenice']
  }
  if (topic === 'jez_pravopis') {
    if (/zarez|točk|dvotočk|crtic|navodnik|interpunkc/.test(text)) return ['hrv.pravopis.interpunkcija']
    if (/velik|malim slov/.test(text)) return ['hrv.pravopis.veliko_malo_slovo']
    return ['hrv.pravopis.opce']
  }
  if (topic === 'jez_leks') {
    if (/frazem/.test(text)) return ['hrv.leksikologija.frazemi']
    if (/sinonim|antonim|homonim/.test(text)) return ['hrv.leksikologija.odnosi_medu_rijecima']
    return ['hrv.leksikologija.opce']
  }
  if (topic === 'jez_stil') {
    if (/metafor/.test(text)) return ['hrv.stilistika.metafora']
    return ['hrv.stilistika.stilska_sredstva']
  }
  if (topic === 'knj_versif') {
    if (/rim/.test(text)) return ['hrv.versifikacija.vrste_rime']
    return ['hrv.versifikacija.opce']
  }
  return [`hrv.knjizevnost.${topic.replace(/^knj_/, '')}`]
}

function getChapter(question: LegacyQuestion, concepts: string[], mapped: any) {
  if (mapped?.slug) return mapped.slug
  switch (question.topic) {
    case 'jez_stil': return 'h17'
    case 'knj_versif': return 'h18'
    case 'jez_gram': return concepts[0]?.startsWith('hrv.fonologija') ? 'h19' : 'h20'
    case 'jez_sint': return 'h21'
    case 'jez_leks': return 'h22'
    case 'jez_pravopis': return concepts[0] === 'hrv.pravopis.interpunkcija' ? 'h26' : 'h25'
    default: return null
  }
}

function eligibility(question: LegacyQuestion, isLiteratureFact: boolean) {
  const prompt = String(question.q ?? '').trim()
  const answers = Array.isArray(question.opts) ? question.opts : []
  const key = question.sol?.cl
  if (question.type !== 'mc') return { eligible: false, reason: 'not_multiple_choice' }
  if (answers.length < 2 || answers.length > 4) return { eligible: false, reason: 'answer_count' }
  if (!key || !answers['ABCD'.indexOf(key)]) return { eligible: false, reason: 'invalid_answer_key' }
  if (!normalizeText(question.exp)) return { eligible: false, reason: 'missing_explanation' }
  if (normalizeText(question.ctx)) return { eligible: false, reason: 'requires_context' }
  if (!prompt || prompt.length > 180 || prompt.split(/\r?\n/).length > 2) return { eligible: false, reason: 'prompt_too_long' }
  if (answers.some((answer) => normalizeText(answer).length > 55)) return { eligible: false, reason: 'answer_too_long' }
  const answerLengths = answers.map((answer) => normalizeText(answer).replace(/^[A-D][.)]\s*/, '').length).filter(Boolean)
  if (answerLengths.length && Math.max(...answerLengths) - Math.min(...answerLengths) > 18 && Math.max(...answerLengths) > Math.min(...answerLengths) * 2.8) {
    return { eligible: false, reason: 'answer_length_outlier' }
  }
  if (hasLongEmbeddedQuote(prompt)) return { eligible: false, reason: 'embedded_quote' }
  if (!RUNNER_TOPICS.has(question.topic ?? '') && !isLiteratureFact) return { eligible: false, reason: 'topic_not_approved' }
  return { eligible: true, reason: 'eligible' }
}

function transform(exam: LegacyExam, question: LegacyQuestion): CroatianGameQuestion {
  const mapped = literatureMapping(exam.key, question.id)
  const prompt = normalizeText(question.q).toLocaleLowerCase('hr')
  const isLiteratureFact = LITERATURE_TOPICS.has(question.topic ?? '') || (
    Boolean(mapped) && question.topic === 'knj_analiza' &&
    /autor|djelo|lik|razdoblj|epoha|književn|pripada|napisao|napisala/.test(prompt)
  )
  const conceptIds = getConcept(question, mapped)
  const runnerEligibility = eligibility(question, isLiteratureFact)
  const reviewStatus: ReviewStatus = runnerEligibility.eligible ? 'approved' : 'rejected'
  const answers = (question.opts ?? []).map((answer, index) => ({
    id: 'ABCD'[index],
    text: normalizeText(answer).replace(/^[A-D][.)]\s*/, ''),
  }))

  return {
    id: `hrv:discere:${exam.key}:${question.id}`,
    sourceQuestionId: String(question.id),
    sourceExamKey: exam.key,
    subjectId: 'hrv',
    topicId: isLiteratureFact ? 'literature_fact' : (question.topic ?? 'unknown'),
    conceptIds,
    chapterSlug: getChapter(question, conceptIds, mapped),
    mode: 'runner',
    prompt: normalizeText(question.q),
    answers,
    correctAnswerId: String(question.sol?.cl ?? ''),
    explanation: normalizeText(question.exp),
    source: {
      kind: 'official_exam',
      year: exam.year,
      examLabel: exam.label,
      scriptSlug: mapped?.slug,
    },
    reviewStatus,
    runnerEligibility,
  }
}

let registryCache: CroatianGameQuestion[] | null = null

export function getCroatianQuestionRegistry() {
  if (!registryCache) {
    registryCache = Object.values(EXAMS as Record<string, LegacyExam>).flatMap((exam) =>
      (exam.qs ?? []).map((question) => transform(exam, question))
    )
  }
  return registryCache.map((question) => ({
    ...question,
    conceptIds: [...question.conceptIds],
    answers: question.answers.map((answer) => ({ ...answer })),
    source: { ...question.source },
    runnerEligibility: { ...question.runnerEligibility },
  }))
}

export function getApprovedCroatianQuestions() {
  const seen = new Set<string>()
  return getCroatianQuestionRegistry().filter((question) => {
    if (question.reviewStatus !== 'approved' || !question.runnerEligibility.eligible) return false
    const fingerprint = promptFingerprint(question.prompt)
    if (!fingerprint || seen.has(fingerprint)) return false
    seen.add(fingerprint)
    return true
  })
}

export function getLaunchCroatianQuestions() {
  const approved = getApprovedCroatianQuestions()
  const selected: CroatianGameQuestion[] = []
  const used = new Set<string>()
  const take = (predicate: (question: CroatianGameQuestion) => boolean, count: number) => {
    for (const question of approved) {
      if (selected.length >= 400 || count <= 0) break
      if (!used.has(question.id) && predicate(question)) {
        selected.push(question); used.add(question.id); count -= 1
      }
    }
  }
  take((question) => question.topicId === 'jez_gram', 100)
  take((question) => question.chapterSlug === 'h26', 8)
  take((question) => question.topicId === 'jez_pravopis', 60)
  take((question) => question.topicId === 'jez_leks', 40)
  take((question) => question.topicId === 'jez_sint', 30)
  take((question) => question.topicId === 'jez_stil' || question.topicId === 'knj_versif', 30)
  take((question) => question.topicId === 'literature_fact', 40)
  take(() => true, 400 - selected.length)
  return selected
}

export function getCroatianQuestion(id: string) {
  return getCroatianQuestionRegistry().find((question) => question.id === id) ?? null
}

export function getCroatianRegistryReport() {
  const registry = getCroatianQuestionRegistry()
  const approved = getApprovedCroatianQuestions()
  const reasons = registry.reduce<Record<string, number>>((result, question) => {
    const reason = question.runnerEligibility.reason
    result[reason] = (result[reason] ?? 0) + 1
    return result
  }, {})
  const topics = approved.reduce<Record<string, number>>((result, question) => {
    result[question.topicId] = (result[question.topicId] ?? 0) + 1
    return result
  }, {})
  return { total: registry.length, approved: approved.length, launchPool: getLaunchCroatianQuestions().length, reasons, topics }
}

export function getCroatianValidationReport() {
  const registry = getCroatianQuestionRegistry()
  const exact = new Map<string, string[]>()
  const semantic = new Map<string, string[]>()
  const issues: Array<{ questionId: string; code: string; detail: string }> = []
  registry.forEach((question) => {
    const fingerprint = promptFingerprint(question.prompt)
    exact.set(fingerprint, [...(exact.get(fingerprint) ?? []), question.id])
    const semanticKey = [...new Set(fingerprint.split(' ').filter((token) => token.length > 3))].sort().join(' ')
    if (semanticKey) semantic.set(semanticKey, [...(semantic.get(semanticKey) ?? []), question.id])
    const lengths = question.answers.map((answer) => answer.text.length).filter(Boolean)
    if (lengths.length && Math.max(...lengths) - Math.min(...lengths) > 18 && Math.max(...lengths) > Math.min(...lengths) * 2.8) {
      issues.push({ questionId: question.id, code: 'answer_length_outlier', detail: lengths.join(',') })
    }
    if (/trenutačno|najnovij|važeć|aktualn/.test(question.prompt.toLocaleLowerCase('hr'))) {
      issues.push({ questionId: question.id, code: 'potentially_time_sensitive', detail: question.prompt })
    }
    if (!question.topicId || question.topicId === 'unknown') issues.push({ questionId: question.id, code: 'missing_topic', detail: '' })
    if (!question.source.examLabel && !question.source.scriptSlug) issues.push({ questionId: question.id, code: 'missing_source_label', detail: '' })
  })
  const duplicateGroups = [...exact.values()].filter((ids) => ids.length > 1)
  const semanticDuplicateGroups = [...semantic.values()].filter((ids) => ids.length > 1)
  return { issues, duplicateGroups, semanticDuplicateGroups }
}
