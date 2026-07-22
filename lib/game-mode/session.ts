import { randomUUID } from 'node:crypto'
import { getLaunchCroatianQuestions, promptFingerprint } from './hrv-registry'
import { hashSeed, shuffledCopy } from './seeded'
import {
  GAME_RUNTIME_VERSION,
  HRV_CONTENT_VERSION,
  type GameAccessibility,
  type GameManifest,
  type GameRecipe,
} from './types'

export type CreateGameSessionInput = {
  recipe: GameRecipe
  chapterSlug?: string | null
  conceptIds?: string[]
  errorQuestionIds?: string[]
  accessibility?: GameAccessibility
  seed?: number
  questionCount?: number
}

function matchesConcept(question: ReturnType<typeof getLaunchCroatianQuestions>[number], concepts: string[]) {
  return concepts.length === 0 || question.conceptIds.some((concept) => concepts.includes(concept))
}

function deduplicate<T extends { prompt: string }>(questions: T[]) {
  const seen = new Set<string>()
  return questions.filter((question) => {
    const key = promptFingerprint(question.prompt)
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function buildCroatianGameManifest(input: CreateGameSessionInput): GameManifest {
  const seed = input.seed ?? hashSeed(`${Date.now()}:${randomUUID()}`)
  const questionCount = Math.max(8, Math.min(12, input.questionCount ?? 10))
  const approved = getLaunchCroatianQuestions()
  const concepts = (input.conceptIds ?? []).filter(Boolean)
  const errorIds = new Set(input.errorQuestionIds ?? [])
  let restrictFallback = input.recipe === 'chapter_boost'

  let preferred = approved.filter((question) => matchesConcept(question, concepts))
  if (input.recipe === 'chapter_boost' && input.chapterSlug) {
    preferred = preferred.filter((question) => question.chapterSlug === input.chapterSlug)
  }
  if (input.recipe === 'mistake_review') {
    const mistakes = preferred.filter((question) => errorIds.has(question.id))
    const mistakeConcepts = new Set(mistakes.flatMap((question) => question.conceptIds))
    const related = preferred.filter((question) =>
      !errorIds.has(question.id) && question.conceptIds.some((concept) => mistakeConcepts.has(concept))
    )
    preferred = [...shuffledCopy(mistakes, `${seed}:mistakes`), ...shuffledCopy(related, `${seed}:related`)]
    restrictFallback = mistakes.length > 0
  } else {
    preferred = shuffledCopy(preferred, `${seed}:preferred`)
  }

  const fallback = restrictFallback ? [] : shuffledCopy(
      approved.filter((question) => !preferred.some((preferredQuestion) => preferredQuestion.id === question.id)),
      `${seed}:fallback`
    )
  const questions = deduplicate([...preferred, ...fallback]).slice(0, questionCount)
  if (questions.length < 8) throw new Error('Nema dovoljno odobrenih pitanja za ovu rundu.')

  const sessionPromptKeys = new Set(questions.map((question) => promptFingerprint(question.prompt)))
  const postCheck = questions.map((question, index) => {
    const alternative = shuffledCopy(
      approved.filter((candidate) =>
        !sessionPromptKeys.has(promptFingerprint(candidate.prompt)) &&
        candidate.conceptIds.some((concept) => question.conceptIds.includes(concept))
      ),
      `${seed}:post:${index}`
    )[0]
    return alternative ? { ...alternative, mode: 'post_check' as const } : null
  }).filter((question): question is NonNullable<typeof question> => Boolean(question)).slice(0, 3)

  const createdAt = new Date()
  const expiresAt = new Date(createdAt.getTime() + 24 * 60 * 60 * 1000)
  return {
    id: randomUUID(),
    subjectId: 'hrv',
    recipe: input.recipe,
    seed,
    contentVersion: HRV_CONTENT_VERSION,
    runtimeVersion: GAME_RUNTIME_VERSION,
    createdAt: createdAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    chapterSlug: input.chapterSlug ?? null,
    accessibility: input.accessibility ?? {},
    experimentVariant: 'runner',
    questions: questions.map((question, index) => ({
      ...question,
      answers: shuffledCopy(question.answers, `${seed}:answers:${index}`),
    })),
    postCheck,
  }
}
