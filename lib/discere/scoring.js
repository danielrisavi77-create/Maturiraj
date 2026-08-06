const GROUP_TYPES = new Set(['passage_group', 'audio_group', 'media_response'])

const normalizeText = (value) => String(value ?? '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('hr-HR')

function sameSet(left = [], right = []) {
  if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) return false
  const a = [...left].sort()
  const b = [...right].sort()
  return a.every((value, index) => value === b[index])
}

function exactOrder(left = [], right = []) {
  return Array.isArray(left) && Array.isArray(right) && left.length === right.length && left.every((value, index) => value === right[index])
}

function splitPoints(total, ids, explicit = {}) {
  const fallback = ids.length ? total / ids.length : 0
  return Object.fromEntries(ids.map((id) => [id, Number.isFinite(explicit?.[id]) ? explicit[id] : fallback]))
}

function isAnswered(question, response) {
  if (GROUP_TYPES.has(question.type)) return true
  if (response === undefined || response === null || response === '') return false
  if (Array.isArray(response)) return response.length > 0
  if (typeof response === 'object') return Object.keys(response).length > 0
  return true
}

export function scoreQuestion(question, response) {
  if (!question || typeof question !== 'object') return { earned: 0, possible: 0, status: 'invalid' }

  if (GROUP_TYPES.has(question.type)) {
    const children = Array.isArray(question.children) ? question.children : []
    const childResponses = response && typeof response === 'object' ? response : {}
    return children.reduce((acc, child) => {
      const scored = scoreQuestion(child, childResponses[child.id])
      acc.earned += scored.earned
      acc.possible += scored.possible
      if (scored.status === 'manual') acc.status = 'manual'
      return acc
    }, { earned: 0, possible: 0, status: 'scored' })
  }

  const possible = Number.isFinite(question.points) ? question.points : 0

  switch (question.type) {
    case 'mc':
      return {
        earned: response === question.answer?.correct?.[0] ? possible : 0,
        possible,
        status: 'scored',
      }

    case 'multi':
      return {
        earned: sameSet(response, question.answer?.correct) ? possible : 0,
        possible,
        status: 'scored',
      }

    case 'short': {
      const accepted = (question.answer?.accepted || []).map(normalizeText)
      return {
        earned: accepted.includes(normalizeText(response)) ? possible : 0,
        possible,
        status: 'scored',
      }
    }

    case 'fill': {
      const gaps = Array.isArray(question.gaps) ? question.gaps.map((gap) => gap.id) : []
      const weights = splitPoints(possible, gaps, question.answer?.gapPoints)
      const values = response && typeof response === 'object' ? response : {}
      let earned = 0
      for (const gapId of gaps) {
        const accepted = (question.answer?.accepted?.[gapId] || []).map(normalizeText)
        if (accepted.includes(normalizeText(values[gapId]))) earned += weights[gapId]
      }
      return { earned, possible, status: 'scored' }
    }

    case 'matching': {
      const ids = Array.isArray(question.left) ? question.left.map((item) => item.id) : []
      const weights = splitPoints(possible, ids, question.answer?.pairPoints)
      const values = response && typeof response === 'object' ? response : {}
      let earned = 0
      for (const id of ids) {
        if (values[id] === question.answer?.pairs?.[id]) earned += weights[id]
      }
      return { earned, possible, status: 'scored' }
    }

    case 'ordering':
      return {
        earned: exactOrder(response, question.answer?.order) ? possible : 0,
        possible,
        status: 'scored',
      }

    case 'true_false': {
      const ids = Array.isArray(question.statements) ? question.statements.map((item) => item.id) : []
      const weights = splitPoints(possible, ids, question.answer?.statementPoints)
      const values = response && typeof response === 'object' ? response : {}
      let earned = 0
      for (const id of ids) {
        if (values[id] === question.answer?.values?.[id]) earned += weights[id]
      }
      return { earned, possible, status: 'scored' }
    }

    case 'essay':
      return { earned: 0, possible, status: 'manual' }

    default:
      return { earned: 0, possible, status: 'invalid' }
  }
}

function flattenLeafQuestions(questions, acc = []) {
  for (const question of questions || []) {
    if (GROUP_TYPES.has(question?.type) && Array.isArray(question.children)) {
      flattenLeafQuestions(question.children, acc)
    } else if (question) {
      acc.push(question)
    }
  }
  return acc
}

export function scoreExam(exam, responses = {}) {
  const leaves = flattenLeafQuestions(exam?.questions || [])
  const topicBreakdown = {}
  const unanswered = []
  let earnedPoints = 0
  let possiblePoints = 0
  let manualPending = false

  for (const question of leaves) {
    const response = responses[question.id]
    const scored = scoreQuestion(question, response)
    earnedPoints += scored.earned
    possiblePoints += scored.possible
    if (scored.status === 'manual') manualPending = true
    if (!isAnswered(question, response)) unanswered.push(question.id)

    const topic = question.topic || 'ostalo'
    if (!topicBreakdown[topic]) topicBreakdown[topic] = { earned: 0, possible: 0 }
    topicBreakdown[topic].earned += scored.earned
    topicBreakdown[topic].possible += scored.possible
  }

  const maxPoints = Number.isFinite(exam?.meta?.maxPoints) ? exam.meta.maxPoints : possiblePoints
  const percent = maxPoints > 0 ? Math.round((earnedPoints / maxPoints) * 10000) / 100 : 0

  return { earnedPoints, maxPoints, percent, topicBreakdown, unanswered, manualPending }
}

export function buildResult({ exam, responses = {}, startedAt, completedAt, flagged = [] }) {
  const scored = scoreExam(exam, responses)
  const startMs = Date.parse(startedAt)
  const endMs = Date.parse(completedAt)
  const durationSec = Number.isFinite(startMs) && Number.isFinite(endMs) && endMs >= startMs
    ? Math.round((endMs - startMs) / 1000)
    : 0

  return {
    subject: exam.meta.subject,
    examKey: exam.meta.key,
    examLabel: exam.meta.label,
    level: exam.meta.level === 'A' || exam.meta.level === 'B' ? exam.meta.level : null,
    startedAt,
    completedAt,
    durationSec,
    earnedPoints: scored.earnedPoints,
    maxPoints: scored.maxPoints,
    percent: scored.percent,
    answers: responses,
    topicBreakdown: scored.topicBreakdown,
    unanswered: scored.unanswered,
    flagged: [...flagged],
    manualPending: scored.manualPending,
  }
}
