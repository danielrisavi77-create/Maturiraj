import { isQuestionTable } from './question-table.js'
import { isReadingStimulus, isDetailedWritingRubric } from './question-writing.js'
import { isNumericAnswer } from './numeric-answer.js'
import { isAlgebraAnswer } from './algebra-answer.js'
import { isListeningStimulus } from '../learning/listening-state.js'

export const SCHEMA_VERSION = 2
// v1 ostaje valjan; upgradeExam ga podiže na v2 bez ručnog prepisivanja sadržaja.
export const SUPPORTED_SCHEMA_VERSIONS = new Set([1, 2])

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

export const SOLUTION_SOURCES = new Set(['maturiraj', 'official', 'ai-draft', 'ai-opus-reviewed'])
export const SOLUTION_STEP_NOTES = new Set(['postupak', 'diagnostika', 'odgovor', 'verifikacija', 'intuicija'])
export const ASSET_SOURCES = new Set(['official', 'maturiraj', 'tts'])
const RESPONSE_MODES = new Set(['translation', 'drawing'])
const FILL_MODES = new Set(['letter'])
const REFUTER_VERDICTS = new Set(['pass', 'fail'])
// Polja koja javni (klijentski) ispit nikad ne smije sadržavati — ADR-001.
const SECRET_QUESTION_FIELDS = ['answer', 'solution', 'explanation']

function issue(code, path, message) {
  return { code, path, message }
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((entry) => isNonEmptyString(entry))
}

// Dovoljno je ISO datum ili puni timestamp; točnost vremena ne provjeravamo.
function isIsoDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2})?(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})?)?$/.test(value)
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

function validateAssets(question, path, errors, schemaVersion) {
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
    if (asset.source !== undefined && !ASSET_SOURCES.has(asset.source)) {
      errors.push(issue('INVALID_ASSET_SOURCE', `${assetPath}.source`, 'asset.source mora biti official, maturiraj ili tts.'))
    }
    // Pravilo je novo u v2; v1 ispit s audiom ostaje valjan bez ručnog prepisivanja.
    if (asset.type === 'audio' && asset.source === undefined && schemaVersion >= 2) {
      errors.push(issue('AUDIO_ASSET_SOURCE_REQUIRED', `${assetPath}.source`, 'Audio asset mora deklarirati source (official, maturiraj ili tts).'))
    }
    if (asset.rights !== undefined && (!isPlainObject(asset.rights) || !isNonEmptyString(asset.rights.holder) || !isNonEmptyString(asset.rights.basis))) {
      errors.push(issue('INVALID_ASSET_RIGHTS', `${assetPath}.rights`, 'asset.rights mora imati holder i basis.'))
    }
  })
}

function isSolutionStep(step) {
  if (!isPlainObject(step)) return false
  if (!Object.keys(step).every((key) => ['txt', 'note', 'final'].includes(key))) return false
  if (!isNonEmptyString(step.txt)) return false
  if (step.note !== undefined && !SOLUTION_STEP_NOTES.has(step.note)) return false
  return step.final === undefined || typeof step.final === 'boolean'
}

// Razrada u istom obliku kao mat (steps/why/warn), plus izvor i trag pregleda.
function validateSolution(solution, path, errors) {
  if (solution === undefined || solution === null) return
  if (!isPlainObject(solution)) {
    errors.push(issue('INVALID_SOLUTION', `${path}.solution`, 'solution mora biti objekt.'))
    return
  }
  if (!Array.isArray(solution.steps) || !solution.steps.every(isSolutionStep)) {
    errors.push(issue('INVALID_SOLUTION_STEPS', `${path}.solution.steps`, 'Svaki korak mora imati txt, dopuštenu note oznaku i boolean final.'))
  } else if (solution.steps.filter((step) => step.final === true).length > 1) {
    errors.push(issue('INVALID_SOLUTION_STEPS', `${path}.solution.steps`, 'Najviše jedan korak smije biti označen kao final.'))
  }
  if (!isStringArray(solution.why)) {
    errors.push(issue('INVALID_SOLUTION_WHY', `${path}.solution.why`, 'why mora biti niz nepraznih stringova.'))
  }
  if (!isStringArray(solution.commonMistakes)) {
    errors.push(issue('INVALID_SOLUTION_MISTAKES', `${path}.solution.commonMistakes`, 'commonMistakes mora biti niz nepraznih stringova.'))
  }
  for (const field of ['warn', 'modelAnswer', 'summary', 'reviewedBy']) {
    if (solution[field] !== undefined && !isNonEmptyString(solution[field])) {
      errors.push(issue('INVALID_SOLUTION_FIELD', `${path}.solution.${field}`, `solution.${field} mora biti neprazan string.`))
    }
  }
  if (!SOLUTION_SOURCES.has(solution.source)) {
    errors.push(issue('INVALID_SOLUTION_SOURCE', `${path}.solution.source`, 'solution.source mora biti maturiraj, official, ai-draft ili ai-opus-reviewed.'))
  }
  if (solution.reviewedAt !== undefined && solution.reviewedAt !== null && !isIsoDate(solution.reviewedAt)) {
    errors.push(issue('INVALID_SOLUTION_FIELD', `${path}.solution.reviewedAt`, 'reviewedAt mora biti ISO datum.'))
  }
}

// v1 explanation ostaje podržan i čita se kao solution.summary.
function validateExplanation(explanation, path, errors) {
  if (explanation === undefined || explanation === null) return
  if (!isPlainObject(explanation) || !isNonEmptyString(explanation.text) || !isNonEmptyString(explanation.source)) {
    errors.push(issue('INVALID_EXPLANATION', `${path}.explanation`, 'explanation mora imati text i source.'))
  }
}

function validateStimulusExtras(stimulus, path, errors) {
  if (stimulus === undefined) return
  if (!isPlainObject(stimulus)) {
    errors.push(issue('INVALID_STIMULUS', `${path}.stimulus`, 'stimulus mora biti objekt.'))
    return
  }
  if (stimulus.code !== undefined && (!isPlainObject(stimulus.code) || !isNonEmptyString(stimulus.code.language) || !isNonEmptyString(stimulus.code.text))) {
    errors.push(issue('INVALID_STIMULUS_CODE', `${path}.stimulus.code`, 'stimulus.code mora imati language i text.'))
  }
  if (stimulus.source !== undefined) {
    const source = stimulus.source
    const okYear = source?.year === undefined || (Number.isInteger(source.year) && source.year > 0)
    const okOptional = ['author', 'citation'].every((key) => source?.[key] === undefined || isNonEmptyString(source[key]))
    if (!isPlainObject(source) || !isNonEmptyString(source.title) || !okYear || !okOptional) {
      errors.push(issue('INVALID_STIMULUS_SOURCE', `${path}.stimulus.source`, 'stimulus.source mora imati title te po izboru author, year i citation.'))
    }
  }
  if (stimulus.mediaUnavailable !== undefined && (!isPlainObject(stimulus.mediaUnavailable) || !isNonEmptyString(stimulus.mediaUnavailable.reason) || !isNonEmptyString(stimulus.mediaUnavailable.officialRef))) {
    errors.push(issue('INVALID_MEDIA_UNAVAILABLE', `${path}.stimulus.mediaUnavailable`, 'mediaUnavailable mora imati reason i officialRef.'))
  }
}

function validateAnswerSource(answer, path, errors) {
  if (!answer || !ANSWER_SOURCES.has(answer.source)) {
    errors.push(issue('INVALID_ANSWER_SOURCE', `${path}.answer.source`, 'answer.source mora biti official, maturiraj-reviewed ili none.'))
  }
}

function validateChoice(question, path, errors, warnings, publicMode) {
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

  if (publicMode) return

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

// relativeTolerance je rezerviran, ali još nije podržan pri ocjenjivanju: numeric-answer.js
// (isNumericAnswer) odbija nepoznat ključ, pa bi matchesNumericAnswer svaki odgovor — i sam
// službeni ključ — ocijenio s 0 bodova. Zato ga shema odbija dok se ne primjenjuje.
function validateNumeric(answer, path, errors) {
  const rule = answer.numeric
  if (isPlainObject(rule) && rule.relativeTolerance !== undefined) {
    errors.push(issue('RELATIVE_TOLERANCE_UNSUPPORTED', `${path}.answer.numeric.relativeTolerance`, 'relativeTolerance se još ne primjenjuje pri ocjenjivanju i učinio bi zadatak neocjenjivim; koristi absoluteTolerance.'))
    return
  }
  if (!isNumericAnswer(answer)) {
    errors.push(issue('INVALID_NUMERIC_ANSWER', `${path}.answer.numeric`, 'Numerički ključ mora imati valjanu toleranciju, domenu i jedinicu te brojčane prihvatljive odgovore.'))
  }
}

function validateText(question, path, errors, publicMode) {
  if (publicMode) return
  if (question.answer?.algebra !== undefined && !isAlgebraAnswer(question.answer)) errors.push(issue('INVALID_ALGEBRA_ANSWER', `${path}.answer.algebra`, 'Algebarski odgovor mora imati valjanu polinomsku provjeru i ključeve.'))
  if (question.answer?.numeric !== undefined) validateNumeric(question.answer, path, errors)
  if (!question.answer || question.answer.kind !== 'text' || !Array.isArray(question.answer.accepted) || question.answer.accepted.length === 0) {
    errors.push(issue('TEXT_KEY_REQUIRED', `${path}.answer`, 'Short zadatak mora imati neprazan niz answer.accepted.'))
    return
  }
  if (question.answer.accepted.some((value) => !isNonEmptyString(value))) {
    errors.push(issue('INVALID_TEXT_KEY', `${path}.answer.accepted`, 'Prihvatljivi odgovori moraju biti neprazni stringovi.'))
  }
}

function validateFill(question, path, errors, publicMode) {
  if (!Array.isArray(question.gaps) || question.gaps.length === 0 || !uniqueIds(question.gaps)) {
    errors.push(issue('FILL_GAPS_REQUIRED', `${path}.gaps`, 'Fill zadatak mora imati jedinstvene gap id-eve.'))
    return
  }
  if (question.wordBank !== undefined) {
    const bank = question.wordBank
    const unique = Array.isArray(bank) && new Set(bank.map((word) => String(word).trim())).size === bank.length
    if (!Array.isArray(bank) || bank.length < 2 || !isStringArray(bank) || !unique) {
      errors.push(issue('INVALID_WORD_BANK', `${path}.wordBank`, 'wordBank mora imati najmanje dvije jedinstvene neprazne ponuđenice.'))
    }
  }
  if (question.mode !== undefined) {
    if (!FILL_MODES.has(question.mode)) {
      errors.push(issue('INVALID_FILL_MODE', `${path}.mode`, 'Jedini podržani fill mode je letter.'))
    } else if (!Array.isArray(question.wordBank)) {
      errors.push(issue('WORD_BANK_REQUIRED', `${path}.wordBank`, 'Fill u letter modu mora imati wordBank.'))
    }
  }
  if (publicMode) return
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

function validateMatching(question, path, errors, publicMode) {
  if (!Array.isArray(question.left) || !question.left.length || !uniqueIds(question.left)) {
    errors.push(issue('MATCHING_LEFT_REQUIRED', `${path}.left`, 'Matching zadatak mora imati jedinstvenu lijevu stranu.'))
    return
  }
  if (!Array.isArray(question.right) || !question.right.length || !uniqueIds(question.right)) {
    errors.push(issue('MATCHING_RIGHT_REQUIRED', `${path}.right`, 'Matching zadatak mora imati jedinstvenu desnu stranu.'))
    return
  }
  if (publicMode) return
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

function validateOrdering(question, path, errors, publicMode) {
  if (!Array.isArray(question.items) || question.items.length < 2 || !uniqueIds(question.items)) {
    errors.push(issue('ORDER_ITEMS_REQUIRED', `${path}.items`, 'Ordering zadatak mora imati najmanje dvije jedinstvene stavke.'))
    return
  }
  if (publicMode) return
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

function validateTrueFalse(question, path, errors, publicMode) {
  if (!Array.isArray(question.statements) || !question.statements.length || !uniqueIds(question.statements)) {
    errors.push(issue('TRUE_FALSE_STATEMENTS_REQUIRED', `${path}.statements`, 'True/false zadatak mora imati jedinstvene statements.'))
    return
  }
  if (publicMode) return
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

function validateEssay(question, path, errors, publicMode) {
  if (publicMode) return
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

// Javni ispit ne smije nositi ključ, razradu ni transkript — ni na djeci.
function validatePublicLeak(question, path, errors) {
  for (const field of SECRET_QUESTION_FIELDS) {
    if (question[field] !== undefined && question[field] !== null) {
      errors.push(issue('PUBLIC_FIELD_LEAK', `${path}.${field}`, `Javni ispit ne smije sadržavati ${field}.`))
    }
  }
  if (question.stimulus?.listening?.transcript !== undefined) {
    errors.push(issue('PUBLIC_FIELD_LEAK', `${path}.stimulus.listening.transcript`, 'Javni ispit ne smije sadržavati transkript slušanja.'))
  }
}

function validateQuestion(question, path, state, options) {
  const { errors, warnings, ids, mcKeys } = state
  const publicMode = options?.public === true
  // Bez mete (praktični setovi) vrijedi aktualna verzija sheme.
  const schemaVersion = Number.isInteger(options?.schemaVersion) ? options.schemaVersion : SCHEMA_VERSION

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
    // Uz predan kanonski popis tema nepoznat topic je greška, ne upozorenje.
    errors.push(issue('UNKNOWN_TOPIC', `${path}.topic`, `Topic ${question.topic} nije u predmetnoj taksonomiji.`))
  }
  if (question.chapterSlug !== undefined) {
    if (!isNonEmptyString(question.chapterSlug)) {
      errors.push(issue('INVALID_CHAPTER_SLUG', `${path}.chapterSlug`, 'chapterSlug mora biti neprazan string.'))
    } else if (Array.isArray(options?.chapters) && !options.chapters.includes(question.chapterSlug)) {
      errors.push(issue('UNKNOWN_CHAPTER', `${path}.chapterSlug`, `chapterSlug ${question.chapterSlug} nije u predmetnoj taksonomiji.`))
    }
  }
  if (question.catalogOutcomes !== undefined && !isStringArray(question.catalogOutcomes)) {
    errors.push(issue('INVALID_CATALOG_OUTCOMES', `${path}.catalogOutcomes`, 'catalogOutcomes mora biti niz nepraznih stringova.'))
  }
  if (question.qa !== undefined) {
    const qa = question.qa
    const okReviewer = qa?.verifiedBy === undefined || isNonEmptyString(qa.verifiedBy)
    const okAt = qa?.verifiedAt === undefined || qa.verifiedAt === null || isIsoDate(qa.verifiedAt)
    if (!isPlainObject(qa) || !QA_STATUSES.has(qa.status) || !okReviewer || !okAt) {
      errors.push(issue('INVALID_QUESTION_QA', `${path}.qa`, 'qa mora imati valjan status te po izboru verifiedBy i ISO verifiedAt.'))
    }
  }
  if (!question.sourceRef || !isNonEmptyString(String(question.sourceRef.task ?? ''))) {
    errors.push(issue('SOURCE_REF_REQUIRED', `${path}.sourceRef`, 'Zadatak mora imati sourceRef.task.'))
  }

  if (publicMode) validatePublicLeak(question, path, errors)
  else {
    validateSolution(question.solution, path, errors)
    validateExplanation(question.explanation, path, errors)
  }

  validateAssets(question, path, errors, schemaVersion)
  validateStimulusExtras(question.stimulus, path, errors)
  if (question.responseMode !== undefined && (question.type !== 'essay' || !RESPONSE_MODES.has(question.responseMode))) {
    errors.push(issue('INVALID_RESPONSE_MODE', `${path}.responseMode`, 'responseMode (translation ili drawing) podržan je samo za essay.'))
  }
  if ((question.wordBank !== undefined || question.mode !== undefined) && question.type !== 'fill') {
    errors.push(issue('FILL_FIELD_ON_NON_FILL', `${path}.wordBank`, 'wordBank i mode podržani su samo za fill zadatke.'))
  }
  if (question.stimulus?.listening !== undefined) {
    // U javnom ispitu transkript je uklonjen, pa provjeravamo ostatak pravila.
    const listening = question.stimulus.listening
    const probe = publicMode && isPlainObject(listening) && listening.transcript === undefined
      ? { ...listening, transcript: [{ id: 'public', text: 'javno' }] }
      : listening
    if (question.type !== 'audio_group' || !isListeningStimulus(probe)) {
      errors.push(issue('INVALID_LISTENING_STIMULUS', `${path}.stimulus.listening`, 'Slušanje mora imati valjan transkript, trajanje i pravilo ponavljanja na audio grupi.'))
    }
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

  if (!publicMode) validateAnswerSource(question.answer, path, errors)

  switch (question.type) {
    case 'mc':
    case 'multi':
      validateChoice(question, path, errors, warnings, publicMode)
      if (question.type === 'mc' && Array.isArray(question.answer?.correct) && question.answer.correct.length === 1) {
        mcKeys.push(question.answer.correct[0])
      }
      break
    case 'short':
      validateText(question, path, errors, publicMode)
      break
    case 'fill':
      validateFill(question, path, errors, publicMode)
      break
    case 'matching':
      validateMatching(question, path, errors, publicMode)
      break
    case 'ordering':
      validateOrdering(question, path, errors, publicMode)
      break
    case 'true_false':
      validateTrueFalse(question, path, errors, publicMode)
      break
    case 'essay':
      validateEssay(question, path, errors, publicMode)
      break
  }
}

function validateMeta(meta, errors) {
  if (!meta || typeof meta !== 'object') {
    errors.push(issue('META_REQUIRED', 'meta', 'Exam mora imati meta objekt.'))
    return
  }
  if (!SUPPORTED_SCHEMA_VERSIONS.has(meta.schemaVersion)) errors.push(issue('SCHEMA_VERSION', 'meta.schemaVersion', `Podržane schemaVersion vrijednosti su ${[...SUPPORTED_SCHEMA_VERSIONS].join(', ')}.`))
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
  const refuter = meta.qa?.refuter
  if (refuter !== undefined && (!isPlainObject(refuter) || !REFUTER_VERDICTS.has(refuter.verdict) || !isIsoDate(refuter.at) || !isNonEmptyString(refuter.model) || !isStringArray(refuter.notes))) {
    errors.push(issue('INVALID_QA_REFUTER', 'meta.qa.refuter', 'refuter mora imati verdict pass/fail, ISO at, model i notes niz.'))
  }
}

// Blokovi (jezici) dobivaju vlastiti timer; svaki top-level zadatak točno u jednom bloku.
function validateBlocks(meta, questions, errors) {
  const blocks = meta?.blocks
  if (blocks === undefined) return
  if (!Array.isArray(blocks) || blocks.length === 0 || !uniqueIds(blocks)) {
    errors.push(issue('INVALID_BLOCKS', 'meta.blocks', 'blocks mora biti neprazan niz s jedinstvenim id-evima.'))
    return
  }

  const seen = new Set()
  let shaped = true
  blocks.forEach((block, index) => {
    const blockPath = `meta.blocks[${index}]`
    if (!isPlainObject(block) || !isNonEmptyString(block.id) || !isNonEmptyString(block.label) || !isPositiveFinite(block.minutes) || !isStringArray(block.questionIds) || block.questionIds.length === 0) {
      errors.push(issue('INVALID_BLOCK', blockPath, 'Blok mora imati id, label, pozitivne minutes i neprazan questionIds niz.'))
      shaped = false
      return
    }
    for (const id of block.questionIds) {
      if (seen.has(id)) errors.push(issue('BLOCK_QUESTION_OVERLAP', `${blockPath}.questionIds`, `Zadatak ${id} pojavljuje se u više blokova.`))
      seen.add(id)
    }
  })

  if (!shaped || !Array.isArray(questions)) return
  const topLevel = questions.map((question) => question?.id).filter((id) => isNonEmptyString(id))
  for (const id of seen) {
    if (!topLevel.includes(id)) errors.push(issue('UNKNOWN_BLOCK_QUESTION', 'meta.blocks', `Blok navodi nepostojeći zadatak ${id}.`))
  }
  for (const id of topLevel) {
    if (!seen.has(id)) errors.push(issue('BLOCK_COVERAGE_INCOMPLETE', 'meta.blocks', `Zadatak ${id} nije ni u jednom bloku.`))
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

  validateBlocks(exam.meta, exam.questions, errors)

  // Verzija sheme ispita odlučuje o pravilima uvedenima u v2 (npr. assets[].source za audio).
  const questionValidation = validateQuestionSet(exam.questions, { ...options, schemaVersion: exam.meta?.schemaVersion })
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

const EXPLANATION_SOURCE_MAP = {
  official: 'official',
  maturiraj: 'maturiraj',
  'maturiraj-reviewed': 'maturiraj',
  ai: 'ai-draft',
  'ai-draft': 'ai-draft',
  'ai-opus-reviewed': 'ai-opus-reviewed',
}

function upgradeQuestion(question) {
  if (!isPlainObject(question)) return question
  const next = { ...question }
  if (Array.isArray(next.children)) next.children = next.children.map(upgradeQuestion)
  // v1 explanation postaje solution.summary; koraci i ostatak razrade dolaze kasnije.
  if (next.solution === undefined && isPlainObject(next.explanation) && isNonEmptyString(next.explanation.text)) {
    // Polja se pune pridruživanjem da sken tajnih ključeva (ADR-001) ne broji lažni pogodak.
    const solution = { summary: next.explanation.text.trim(), source: EXPLANATION_SOURCE_MAP[next.explanation.source] ?? 'maturiraj' }
    solution.steps = []
    solution.why = []
    solution.commonMistakes = []
    next.solution = solution
  }
  return next
}

// v1 → v2 bez ručnog prepisivanja sadržaja; ostale verzije vraća nepromijenjene.
export function upgradeExam(exam) {
  if (!isPlainObject(exam) || !isPlainObject(exam.meta)) return exam
  if (!SUPPORTED_SCHEMA_VERSIONS.has(exam.meta.schemaVersion)) return exam
  if (exam.meta.schemaVersion === SCHEMA_VERSION) return exam
  return {
    ...exam,
    meta: { ...exam.meta, schemaVersion: SCHEMA_VERSION },
    questions: Array.isArray(exam.questions) ? exam.questions.map(upgradeQuestion) : exam.questions,
  }
}
