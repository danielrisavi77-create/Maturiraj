import { isQuestionTable } from './question-table.js'
import { isReadingStimulus, isDetailedWritingRubric } from './question-writing.js'
import { isNumericAnswer } from './numeric-answer.js'
import { isAlgebraAnswer } from './algebra-answer.js'
import { isListeningStimulus } from '../learning/listening-state.js'

export const SCHEMA_VERSION = 1

export const QUESTION_TYPES = new Set([
  'mc',
  'multi',
  'short',
  'matching',
  'ordering',
  'fill',
  'true_false',
  'essay',
  'passage_group',
  'audio_group',
  'media_response',
])

export const QA_STATUSES = new Set(['draft', 'structural-pass', 'verified', 'published'])

const GROUP_TYPES = new Set(['passage_group', 'audio_group', 'media_response'])
const ANSWER_SOURCES = new Set(['official', 'maturiraj-reviewed', 'none'])

function issue(code, path, message) {
  return { code, path, message }
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isPositiveFinite(value) {
  return Number.isFinite(value) && value > 0
}

function isNonNegativeFinite(value) {
  return Number.isFinite(value) && value >= 0
}

function uniqueIds(items) {
  return new Set(items.map((item) => item?.id)).size === items.length
}

function normalizeOptionText(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('hr-HR')
}

function effectivePoints(question) {
  if (GROUP_TYPES.has(question?.type) && Array.isArray(question.children)) {
    return question.children.reduce((sum, child) => sum + effectivePoints(child), 0)
  }
  return Number.isFinite(question?.points) ? question.points : 0
}

function validateAssets(question, path, errors) {
  if (!Array.isArray(question.assets)) {
    errors.push(issue('ASSETS_REQUIRED', `${path}.assets`, 'assets mora biti niz.'))
    return
  }

  question.assets.forEach((asset, index) => {
    const assetPath = `${path}.assets[${index}]`
    if (!asset || !isNonEmptyString(asset.type) || !isNonEmptyString(asset.src)) {
      errors.push(issue('INVALID_ASSET', assetPath, 'Asset mora imati type i src.'))
      return
    }
    if (asset.type === 'image' && !isNonEmptyString(asset.alt)) {
      errors.push(issue('IMAGE_ALT_REQUIRED', `${assetPath}.alt`, 'Slika mora imati opisni alt tekst.'))
    }
  })
}

function validateAnswerSource(answer, path, errors) {
  if (!answer || !ANSWER_SOURCES.has(answer.source)) {
    errors.push(issue('INVALID_ANSWER_SOURCE', `${path}.answer.source`, 'answer.source mora biti official, maturiraj-reviewed ili none.'))
  }
}

function validateChoice(question, path, errors, warnings) {
  if (!Array.isArray(question.options) || question.options.length < 2) {
    errors.push(issue('OPTIONS_REQUIRED', `${path}.options`, 'Choice zadatak mora imati najmanje dvije opcije.'))
    return
  }

  if (!uniqueIds(question.options) || question.options.some((option) => !isNonEmptyString(option?.id))) {
    errors.push(issue('DUPLICATE_OPTION_ID', `${path}.options`, 'Opcije moraju imati jedinstvene neprazne id-eve.'))
  }

  const normalized = question.options.map((option) => normalizeOptionText(option?.text))
  if (new Set(normalized).size !== normalized.length) {
    warnings.push(issue('DUPLICATE_OPTION_TEXT', `${path}.options`, 'Dvije ili više opcija imaju isti tekst.'))
  }

  const optionIds = new Set(question.options.map((option) => option?.id))
  const correct = question.answer?.correct
  if (!question.answer || question.answer.kind !== 'choice' || !Array.isArray(correct) || correct.length === 0) {
    errors.push(issue('CHOICE_KEY_REQUIRED', `${path}.answer`, 'Choice zadatak mora imati answer.correct.'))
    return
  }

  if (question.type === 'mc' && correct.length !== 1) {
    errors.push(issue('MC_SINGLE_KEY_REQUIRED', `${path}.answer.correct`, 'MC zadatak mora imati točno jedan ključ.'))
  }

  if (new Set(correct).size !== correct.length || correct.some((id) => !optionIds.has(id))) {
    errors.push(issue('INVALID_CHOICE_KEY', `${path}.answer.correct`, 'Ključ mora referencirati postojeće jedinstvene opcije.'))
  }
}

function validateText(question, path, errors) {
  if (question.answer?.algebra !== undefined && !isAlgebraAnswer(question.answer)) errors.push(issue('INVALID_ALGEBRA_ANSWER', `${path}.answer.algebra`, 'Algebarski odgovor mora imati valjanu polinomsku provjeru i ključeve.'))
  if (question.answer?.numeric !== undefined && !isNumericAnswer(question.answer)) errors.push(issue('INVALID_NUMERIC_ANSWER', `${path}.answer.numeric`, 'Numerički ključ mora imati valjanu toleranciju, domenu i jedinicu te brojčane prihvatljive odgovore.'))
  if (!question.answer || question.answer.kind !== 'text' || !Array.isArray(question.answer.accepted) || question.answer.accepted.length === 0) {
    errors.push(issue('TEXT_KEY_REQUIRED', `${path}.answer`, 'Short zadatak mora imati neprazan niz answer.accepted.'))
    return
  }
  if (question.answer.accepted.some((value) => !isNonEmptyString(value))) {
    errors.push(issue('INVALID_TEXT_KEY', `${path}.answer.accepted`, 'Prihvatljivi odgovori moraju biti neprazni stringovi.'))
  }
}

function validateFill(question, path, errors) {
  if (!Array.isArray(question.gaps) || question.gaps.length === 0 || !uniqueIds(question.gaps)) {
    errors.push(issue('FILL_GAPS_REQUIRED', `${path}.gaps`, 'Fill zadatak mora imati jedinstvene gap id-eve.'))
    return
  }
  if (!question.answer || question.answer.kind !== 'fill' || !question.answer.accepted || typeof question.answer.accepted !== 'object') {
    errors.push(issue('FILL_KEY_REQUIRED', `${path}.answer`, 'Fill zadatak mora imati answer.accepted mapu.'))
    return
  }
  for (const gap of question.gaps) {
    const accepted = question.answer.accepted[gap.id]
    if (!Array.isArray(accepted) || accepted.length === 0 || accepted.some((value) => !isNonEmptyString(value))) {
      errors.push(issue('INVALID_FILL_KEY', `${path}.answer.accepted.${gap.id}`, 'Svaki gap mora imati barem jedan prihvatljiv odgovor.'))
    }
  }
}

function validateMatching(question, path, errors) {
  if (!Array.isArray(question.left) || !question.left.length || !uniqueIds(question.left)) {
    errors.push(issue('MATCHING_LEFT_REQUIRED', `${path}.left`, 'Matching zadatak mora imati jedinstvenu lijevu stranu.'))
    return
  }
  if (!Array.isArray(question.right) || !question.right.length || !uniqueIds(question.right)) {
    errors.push(issue('MATCHING_RIGHT_REQUIRED', `${path}.right`, 'Matching zadatak mora imati jedinstvenu desnu stranu.'))
    return
  }
  if (!question.answer || question.answer.kind !== 'matching' || !question.answer.pairs || typeof question.answer.pairs !== 'object') {
    errors.push(issue('MATCHING_KEY_REQUIRED', `${path}.answer`, 'Matching zadatak mora imati answer.pairs.'))
    return
  }

  const rightIds = new Set(question.right.map((item) => item.id))
  for (const left of question.left) {
    if (!rightIds.has(question.answer.pairs[left.id])) {
      errors.push(issue('INVALID_MATCHING_KEY', `${path}.answer.pairs.${left.id}`, 'Svaka lijeva stavka mora upućivati na postojeću desnu stavku.'))
    }
  }
}

function validateOrdering(question, path, errors) {
  if (!Array.isArray(question.items) || question.items.length < 2 || !uniqueIds(question.items)) {
    errors.push(issue('ORDER_ITEMS_REQUIRED', `${path}.items`, 'Ordering zadatak mora imati najmanje dvije jedinstvene stavke.'))
    return
  }
  const order = question.answer?.order
  const itemIds = question.items.map((item) => item.id)
  if (!question.answer || question.answer.kind !== 'ordering' || !Array.isArray(order)) {
    errors.push(issue('ORDER_KEY_REQUIRED', `${path}.answer`, 'Ordering zadatak mora imati answer.order.'))
    return
  }
  if (order.length !== itemIds.length || new Set(order).size !== order.length || order.some((id) => !itemIds.includes(id))) {
    errors.push(issue('INVALID_ORDER_KEY', `${path}.answer.order`, 'answer.order mora sadržavati svaki item id točno jednom.'))
  }
}

function validateTrueFalse(question, path, errors) {
  if (!Array.isArray(question.statements) || !question.statements.length || !uniqueIds(question.statements)) {
    errors.push(issue('TRUE_FALSE_STATEMENTS_REQUIRED', `${path}.statements`, 'True/false zadatak mora imati jedinstvene statements.'))
    return
  }
  if (!question.answer || question.answer.kind !== 'true_false' || !question.answer.values || typeof question.answer.values !== 'object') {
    errors.push(issue('TRUE_FALSE_KEY_REQUIRED', `${path}.answer`, 'True/false zadatak mora imati answer.values.'))
    return
  }
  for (const statement of question.statements) {
    if (typeof question.answer.values[statement.id] !== 'boolean') {
      errors.push(issue('INVALID_TRUE_FALSE_KEY', `${path}.answer.values.${statement.id}`, 'Svaka tvrdnja mora imati boolean ključ.'))
    }
  }
}

function validateEssay(question, path, errors) {
  if (question.answer?.rubricDetails !== undefined && !isDetailedWritingRubric(question.answer.rubricDetails, question.answer.rubric, question.points)) {
    errors.push(issue('INVALID_DETAILED_RUBRIC', `${path}.answer.rubricDetails`, 'Detaljna rubrika mora imati usklađene sastavnice, opisane razine, izvor i zbroj bodova.'))
  }
  if (!question.answer || question.answer.kind !== 'rubric' || !Array.isArray(question.answer.rubric) || question.answer.rubric.length === 0) {
    errors.push(issue('RUBRIC_REQUIRED', `${path}.answer`, 'Essay zadatak mora imati službenu ili pregledanu rubriku.'))
    return
  }
  if (question.answer.rubric.some((row) => !isNonEmptyString(row?.id) || !isNonEmptyString(row?.text) || !isNonNegativeFinite(row?.points))) {
    errors.push(issue('INVALID_RUBRIC', `${path}.answer.rubric`, 'Svaki rubric red mora imati id, tekst i nenegativne bodove.'))
  }
}

function validateQuestion(question, path, state, options) {
  const { errors, warnings, ids, mcKeys } = state

  if (!question || typeof question !== 'object') {
    errors.push(issue('INVALID_QUESTION', path, 'Zadatak mora biti objekt.'))
    return
  }

  if (!isNonEmptyString(question.id)) {
    errors.push(issue('QUESTION_ID_REQUIRED', `${path}.id`, 'Zadatak mora imati id.'))
  } else if (ids.has(question.id)) {
    errors.push(issue('DUPLICATE_QUESTION_ID', `${path}.id`, `Duplikat question id-a: ${question.id}.`))
  } else {
    ids.add(question.id)
  }

  if (!QUESTION_TYPES.has(question.type)) {
    errors.push(issue('UNKNOWN_QUESTION_TYPE', `${path}.type`, `Nepodržana vrsta zadatka: ${question.type}.`))
    return
  }

  if (!isNonEmptyString(question.prompt)) {
    errors.push(issue('QUESTION_PROMPT_REQUIRED', `${path}.prompt`, 'Zadatak mora imati prompt.'))
  }
  if (!isNonEmptyString(question.topic)) {
    warnings.push(issue('QUESTION_TOPIC_MISSING', `${path}.topic`, 'Zadatak nema topic oznaku.'))
  } else if (Array.isArray(options?.topics) && !options.topics.includes(question.topic)) {
    warnings.push(issue('UNKNOWN_TOPIC', `${path}.topic`, `Topic ${question.topic} nije u predmetnoj taksonomiji.`))
  }
  if (!question.sourceRef || !isNonEmptyString(String(question.sourceRef.task ?? ''))) {
    errors.push(issue('SOURCE_REF_REQUIRED', `${path}.sourceRef`, 'Zadatak mora imati sourceRef.task.'))
  }

  validateAssets(question, path, errors)
  if (question.stimulus?.listening !== undefined && (question.type !== 'audio_group' || !isListeningStimulus(question.stimulus.listening))) {
    errors.push(issue('INVALID_LISTENING_STIMULUS', `${path}.stimulus.listening`, 'Slušanje mora imati valjan transkript, trajanje i pravilo ponavljanja na audio grupi.'))
  }
  if (question.stimulus?.table !== undefined && !isQuestionTable(question.stimulus.table)) {
    errors.push(issue('INVALID_STIMULUS_TABLE', `${path}.stimulus.table`, 'Tablica mora imati naslov, zaglavlja i retke jednakoga broja tekstnih ćelija.'))
  }
  if (question.answer?.numeric !== undefined && question.type !== 'short') errors.push(issue('INVALID_NUMERIC_TYPE', `${path}.answer.numeric`, 'Numerička provjera podržana je samo za kratki odgovor.'))
  if (question.answer?.algebra !== undefined && question.type !== 'short') errors.push(issue('INVALID_ALGEBRA_TYPE', `${path}.answer.algebra`, 'Algebarska provjera podržana je samo za kratki odgovor.'))
  if (question.stimulus?.reading !== undefined && (question.type !== 'essay' || !isReadingStimulus(question.stimulus.reading))) {
    errors.push(issue('INVALID_READING_STIMULUS', `${path}.stimulus.reading`, 'Tekst radionice eseja mora imati izvor i neprazne retke s jedinstvenim oznakama.'))
  }
  if (question.stimulus?.afterText !== undefined && !isNonEmptyString(question.stimulus.afterText)) {
    errors.push(issue('INVALID_STIMULUS_AFTER_TEXT', `${path}.stimulus.afterText`, 'Tekst nakon tablice mora biti neprazan string.'))
  }

  if (GROUP_TYPES.has(question.type)) {
    if (!Array.isArray(question.children) || question.children.length === 0) {
      errors.push(issue('GROUP_CHILDREN_REQUIRED', `${path}.children`, 'Grupni zadatak mora imati child zadatke.'))
      return
    }
    if (question.type === 'audio_group' && !question.assets?.some((asset) => asset.type === 'audio')) {
      errors.push(issue('AUDIO_ASSET_REQUIRED', `${path}.assets`, 'Audio grupa mora referencirati audio asset.'))
    }
    if (question.type === 'media_response' && !question.assets?.length) {
      errors.push(issue('MEDIA_ASSET_REQUIRED', `${path}.assets`, 'Media response mora imati asset.'))
    }
    question.children.forEach((child, index) => validateQuestion(child, `${path}.children[${index}]`, state, options))
    return
  }

  if (!isPositiveFinite(question.points)) {
    errors.push(issue('INVALID_POINTS', `${path}.points`, 'Scorable zadatak mora imati pozitivne konačne bodove.'))
  }

  validateAnswerSource(question.answer, path, errors)

  switch (question.type) {
    case 'mc':
    case 'multi':
      validateChoice(question, path, errors, warnings)
      if (question.type === 'mc' && Array.isArray(question.answer?.correct) && question.answer.correct.length === 1) {
        mcKeys.push(question.answer.correct[0])
      }
      break
    case 'short':
      validateText(question, path, errors)
      break
    case 'fill':
      validateFill(question, path, errors)
      break
    case 'matching':
      validateMatching(question, path, errors)
      break
    case 'ordering':
      validateOrdering(question, path, errors)
      break
    case 'true_false':
      validateTrueFalse(question, path, errors)
      break
    case 'essay':
      validateEssay(question, path, errors)
      break
  }
}

function validateMeta(meta, errors) {
  if (!meta || typeof meta !== 'object') {
    errors.push(issue('META_REQUIRED', 'meta', 'Exam mora imati meta objekt.'))
    return
  }
  if (meta.schemaVersion !== SCHEMA_VERSION) errors.push(issue('SCHEMA_VERSION', 'meta.schemaVersion', `Očekivana schemaVersion je ${SCHEMA_VERSION}.`))
  if (!isNonEmptyString(meta.subject)) errors.push(issue('SUBJECT_REQUIRED', 'meta.subject', 'Predmet je obvezan.'))
  if (!isNonEmptyString(meta.key)) errors.push(issue('EXAM_KEY_REQUIRED', 'meta.key', 'Exam key je obvezan.'))
  const authored = meta.kind === 'authored-thematic'
  if (!authored && (!Number.isInteger(meta.year) || meta.year < 2000)) errors.push(issue('INVALID_YEAR', 'meta.year', 'Godina ispita nije valjana.'))
  if (!authored && !isNonEmptyString(meta.season)) errors.push(issue('SEASON_REQUIRED', 'meta.season', 'Rok/sezona je obvezna.'))
  if (!(meta.level === null || meta.level === 'A' || meta.level === 'B')) errors.push(issue('INVALID_LEVEL', 'meta.level', 'Razina mora biti A, B ili null.'))
  if (!isNonEmptyString(meta.label)) errors.push(issue('LABEL_REQUIRED', 'meta.label', 'Label ispita je obvezan.'))
  if (!isPositiveFinite(meta.durationSec)) errors.push(issue('INVALID_DURATION', 'meta.durationSec', 'Trajanje mora biti pozitivan broj sekundi.'))
  if (!Number.isInteger(meta.questionCount) || meta.questionCount < 1) errors.push(issue('INVALID_QUESTION_COUNT', 'meta.questionCount', 'questionCount mora biti pozitivan cijeli broj.'))
  if (!isPositiveFinite(meta.maxPoints)) errors.push(issue('INVALID_MAX_POINTS', 'meta.maxPoints', 'maxPoints mora biti pozitivan broj.'))

  if (authored && (!isNonEmptyString(meta.source?.provider) || !isNonEmptyString(meta.source?.contentPath) || !isNonEmptyString(meta.source?.authoredAt) || !isNonEmptyString(meta.version))) {
    errors.push(issue('AUTHORED_SOURCE_REQUIRED', 'meta.source', 'Autorska provjera zahtijeva autora, put sadržaja, datum izrade i verziju.'))
  }
  if (!authored && (!meta.source || !isNonEmptyString(meta.source.provider) || !isNonEmptyString(meta.source.examUrl) || !isNonEmptyString(meta.source.retrievedAt))) {
    errors.push(issue('SOURCE_REQUIRED', 'meta.source', 'Source mora sadržavati provider, examUrl i retrievedAt.'))
  }
  if (!meta.qa || !QA_STATUSES.has(meta.qa.status) || !Array.isArray(meta.qa.notes)) {
    errors.push(issue('INVALID_QA_STATE', 'meta.qa', 'QA mora imati valjan status i notes niz.'))
  }
}

function addAnswerBalanceWarning(mcKeys, warnings) {
  if (mcKeys.length < 12) return
  const counts = new Map()
  for (const key of mcKeys) counts.set(key, (counts.get(key) ?? 0) + 1)
  const [dominantKey, dominantCount] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0] ?? []
  if (dominantCount / mcKeys.length >= 0.65) {
    warnings.push(issue('SUSPICIOUS_ANSWER_IMBALANCE', 'questions', `${dominantKey} je ključ u ${dominantCount}/${mcKeys.length} MC zadataka.`))
  }
}

// Practice uses the same question contract without fictional exam metadata.
export function validateQuestionSet(questions, options = {}) {
  const errors = []
  const warnings = []
  if (!Array.isArray(questions) || questions.length === 0) {
    return { valid: false, errors: [issue('QUESTIONS_REQUIRED', 'questions', 'Potreban je neprazan niz zadataka.')], warnings }
  }
  const state = { errors, warnings, ids: new Set(), mcKeys: [] }
  questions.forEach((question, index) => validateQuestion(question, `questions[${index}]`, state, options))
  addAnswerBalanceWarning(state.mcKeys, warnings)
  return { valid: errors.length === 0, errors, warnings }
}

export function validateExam(exam, options = {}) {
  const errors = []
  const warnings = []

  if (!exam || typeof exam !== 'object') {
    return { valid: false, errors: [issue('EXAM_REQUIRED', '', 'Exam mora biti objekt.')], warnings }
  }

  validateMeta(exam.meta, errors)
  if (!Array.isArray(exam.questions) || exam.questions.length === 0) {
    errors.push(issue('QUESTIONS_REQUIRED', 'questions', 'Exam mora imati neprazan questions niz.'))
    return { valid: false, errors, warnings }
  }

  const questionValidation = validateQuestionSet(exam.questions, options)
  errors.push(...questionValidation.errors)
  warnings.push(...questionValidation.warnings)

  if (Number.isInteger(exam.meta?.questionCount) && exam.meta.questionCount !== exam.questions.length) {
    errors.push(issue('QUESTION_COUNT_MISMATCH', 'meta.questionCount', `Metadata navodi ${exam.meta.questionCount}, a sadržaj ima ${exam.questions.length} top-level zadataka.`))
  }

  const computedMaxPoints = exam.questions.reduce((sum, question) => sum + effectivePoints(question), 0)
  if (Number.isFinite(exam.meta?.maxPoints) && Math.abs(exam.meta.maxPoints - computedMaxPoints) > 1e-9) {
    errors.push(issue('MAX_POINTS_MISMATCH', 'meta.maxPoints', `Metadata navodi ${exam.meta.maxPoints}, a zbroj zadataka je ${computedMaxPoints}.`))
  }

  return { valid: errors.length === 0, errors, warnings }
}
