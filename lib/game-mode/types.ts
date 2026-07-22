export type GameRecipe = 'quick_review' | 'mistake_review' | 'chapter_boost'
export type GameQuestionMode = 'runner' | 'classic_quiz' | 'post_check'
export type ReviewStatus = 'candidate' | 'approved' | 'rejected' | 'flagged'

export type CroatianGameQuestion = {
  id: string
  sourceQuestionId: string
  sourceExamKey: string
  subjectId: 'hrv'
  topicId: string
  conceptIds: string[]
  chapterSlug: string | null
  mode: GameQuestionMode
  prompt: string
  answers: Array<{ id: string; text: string }>
  correctAnswerId: string
  explanation: string
  source: {
    kind: 'official_exam' | 'maturiraj_script'
    year?: number
    examLabel?: string
    scriptSlug?: string
  }
  reviewStatus: ReviewStatus
  runnerEligibility: { eligible: boolean; reason: string }
}

export type GameAccessibility = {
  motorAssist?: boolean
  reducedMotion?: boolean
  semanticMode?: boolean
}

export type GameManifest = {
  id: string
  subjectId: 'hrv'
  recipe: GameRecipe
  seed: number
  contentVersion: string
  runtimeVersion: string
  createdAt: string
  expiresAt: string
  chapterSlug: string | null
  accessibility: GameAccessibility
  experimentVariant: 'control' | 'runner'
  questions: CroatianGameQuestion[]
  postCheck: CroatianGameQuestion[]
}

export const HRV_CONTENT_VERSION = 'hrv-discere-v1'
export const GAME_RUNTIME_VERSION = 'runner-v1'
