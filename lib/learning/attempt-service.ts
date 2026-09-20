import { validateAttemptEvent } from './outbox'
import { validateQuestionSet } from '../discere/exam-schema'
import { scoreQuestion } from '../discere/scoring'
import { isAssessmentResponse } from './assessment-response'

/** Only the fields this service reads are named. The full question contract
 * lives in the schema; validateQuestionSet remains the sole authority on it,
 * so nothing here may be read as a structural guarantee of validity. */
type AttemptQuestion = {
  id: string
  version: string
  type: string
  outcomeIds: string[]
}
type QuestionSet = {
  id: string
  version: string
  lessonId: string
  subjectId: string
  level: string
  questions: AttemptQuestion[]
}
type AttemptEvent = {
  eventId: string
  sessionId: string
  questionId: string
  questionVersion: string
  response: unknown
  helpUsed: boolean
}

export type LessonSessionRecord = {
  id: string
  userId: string
  status: string
  lessonId: string
  questionSetId: string
  questionVersion: string
  subjectId: string
  level: string
}
type CommonQuestionSet = Pick<QuestionSet, 'id' | 'version' | 'subjectId' | 'level' | 'questions'>
type CommonSessionRecord = Omit<LessonSessionRecord, 'lessonId'>
export type AssessmentSessionRecord = CommonSessionRecord & {
  kind: 'assessment'
  assessmentId: string
  startedAt: string
  expiresAt: string
}

/** Server-side preparation, not persistence or authorization middleware.
 * Caller must obtain userId from verified auth, session from an owner-filtered
 * DB read and questionSet from the registered loader, never the request body.
 * The atomic accept operation must recheck owner/status/version under its lock
 * and resolve event replay before accepting a newly prepared event.
 */
export function prepareLessonAttempt({ userId, session, questionSet, event: input, receivedAt }: {
  userId: string
  session: LessonSessionRecord
  questionSet: QuestionSet
  event: unknown
  receivedAt: string
}) {
  if (!session || !questionSet || session.lessonId !== questionSet.lessonId) throw new Error('SESSION_CONTENT_MISMATCH')
  return { ...prepareAttempt({ userId, session, questionSet, event: input, receivedAt }), lessonId: session.lessonId }
}

export function prepareAssessmentAttempt({ userId, session, questionSet, event, receivedAt }: {
  userId: string
  session: AssessmentSessionRecord
  questionSet: CommonQuestionSet & { assessmentId: string }
  event: unknown
  receivedAt: string
}) {
  if (!session || !questionSet || session.kind !== 'assessment' || session.assessmentId !== questionSet.assessmentId) throw new Error('SESSION_CONTENT_MISMATCH')
  const prepared = prepareAttempt({ userId, session, questionSet, event, receivedAt, assessment: true })
  const started = Date.parse(session.startedAt), deadline = Date.parse(session.expiresAt), received = Date.parse(receivedAt)
  if (!Number.isFinite(started) || !Number.isFinite(deadline) || deadline <= started || received < started) throw new Error('INVALID_SESSION_TIME')
  if (received >= deadline) throw new Error('ASSESSMENT_EXPIRED')
  return { ...prepared, assessmentId: session.assessmentId }
}

function prepareAttempt({ userId, session, questionSet, event: input, receivedAt, assessment = false }: {
  userId: string, session: CommonSessionRecord, questionSet: CommonQuestionSet, event: unknown, receivedAt: string, assessment?: boolean
}) {
  if (!userId || !session || session.userId !== userId) throw new Error('SESSION_OWNER_MISMATCH')
  const event = JSON.parse(validateAttemptEvent(input)) as AttemptEvent
  if (session.id !== event.sessionId) throw new Error('SESSION_ID_MISMATCH')
  if (session.status !== 'active') throw new Error('SESSION_NOT_ACTIVE')
  if (!questionSet || session.questionSetId !== questionSet.id ||
      session.questionVersion !== questionSet.version || event.questionVersion !== questionSet.version ||
      session.subjectId !== questionSet.subjectId || session.level !== questionSet.level) {
    throw new Error('SESSION_CONTENT_MISMATCH')
  }
  if (!validateQuestionSet(questionSet.questions).valid) throw new Error('INVALID_SESSION_CONTENT')
  const question = questionSet.questions.find(candidate => candidate.id === event.questionId)
  if (!question || question.version !== event.questionVersion) throw new Error('QUESTION_VERSION_MISMATCH')
  // Lesson legacy contracts remain MC-only. Assessment preparation supports
  // structured responses; registration/persistence must also support the type.
  if (!assessment && question.type !== 'mc') throw new Error('UNSUPPORTED_ATTEMPT_TYPE')
  if (!isAssessmentResponse(question, event.response)) {
    throw new Error('INVALID_ATTEMPT_RESPONSE')
  }
  if (typeof receivedAt !== 'string' || !Number.isFinite(Date.parse(receivedAt))) throw new Error('INVALID_SERVER_TIME')
  const result = scoreQuestion(question, event.response)
  if ((result.status !== 'scored' && !(assessment && result.status === 'manual')) ||
      !Number.isFinite(result.earned) || !Number.isFinite(result.possible) ||
      result.possible <= 0 || result.earned < 0 || result.earned > result.possible) {
    throw new Error('INVALID_ATTEMPT_SCORE')
  }
  return {
    userId,
    event,
    subjectId: session.subjectId,
    level: session.level,
    questionSetId: questionSet.id,
    result,
    receivedAt,
    outcomeIds: [...question.outcomeIds],
    // Draft legacy keys/outcomes have no publication/coverage approval. A
    // separate reviewed policy is required before projecting mastery or XP.
    masteryEligible: false,
  }
}
