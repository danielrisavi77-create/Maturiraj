import { describe, expect, it } from 'vitest'
import { SCHEMA_VERSION, upgradeExam, validateExam } from '@/lib/discere/exam-schema'

function baseMeta(overrides = {}, questionCount = 1, maxPoints = 1) {
  return {
    schemaVersion: SCHEMA_VERSION,
    subject: 'bio',
    key: '2026_ljeto',
    year: 2026,
    season: 'ljeto',
    level: null,
    label: 'Ljetni rok 2026.',
    durationSec: 9000,
    questionCount,
    maxPoints,
    source: {
      provider: 'NCVVO',
      examUrl: 'https://www.ncvvo.hr/example',
      keyUrl: 'https://www.ncvvo.hr/example-key',
      retrievedAt: '2026-08-06',
    },
    qa: { status: 'draft', verifiedAt: null, notes: [] },
    ...overrides,
  }
}

const sourceRef = { page: 3, task: '1' }

const mc = {
  id: '1', type: 'mc', prompt: 'Koja tvrdnja vrijedi?', points: 1, topic: 'stanica',
  sourceRef, assets: [],
  options: [{ id: 'A', text: 'Prva' }, { id: 'B', text: 'Druga' }],
  answer: { kind: 'choice', correct: ['A'], source: 'official' },
}

function wrap(question, { meta = {}, maxPoints = question.points ?? 1 } = {}) {
  return { meta: baseMeta(meta, 1, maxPoints), questions: [question] }
}

function codes(exam, options) {
  return validateExam(exam, options).errors.map((error) => error.code)
}

const solution = {
  steps: [{ txt: 'Izračunaj omjer.', note: 'postupak' }, { txt: 'Rezultat je 3.', final: true }],
  why: ['Omjer slijedi iz definicije.'],
  commonMistakes: ['Zamjena brojnika i nazivnika.'],
  source: 'ai-opus-reviewed',
}

describe('schema v2 — verzija i nadogradnja', () => {
  it('prihvaća v1 ispit bez izmjena', () => {
    const exam = wrap(mc)
    exam.meta.schemaVersion = 1
    expect(validateExam(exam).valid).toBe(true)
  })

  it('prihvaća v2 ispit', () => {
    expect(validateExam(wrap(mc)).valid).toBe(true)
  })

  it('odbija nepoznatu schemaVersion', () => {
    const exam = wrap(mc)
    exam.meta.schemaVersion = 3
    expect(codes(exam)).toContain('SCHEMA_VERSION')
  })

  it('upgradeExam podiže v1 na v2 i explanation pretvara u solution.summary', () => {
    const v1 = wrap({ ...mc, explanation: { text: 'Peptidna veza spaja aminokiseline.', source: 'maturiraj-reviewed' } })
    v1.meta.schemaVersion = 1
    const upgraded = upgradeExam(v1)
    expect(upgraded.meta.schemaVersion).toBe(SCHEMA_VERSION)
    expect(upgraded.questions[0].solution).toEqual({
      summary: 'Peptidna veza spaja aminokiseline.',
      steps: [], why: [], commonMistakes: [], source: 'maturiraj',
    })
    expect(v1.meta.schemaVersion).toBe(1)
    expect(validateExam(upgraded).valid).toBe(true)
  })

  it('upgradeExam prolazi kroz djecu grupnoga zadatka', () => {
    const group = {
      id: 'g1', type: 'passage_group', prompt: 'Pročitaj.', points: 1, topic: 'ekologija', sourceRef,
      assets: [], stimulus: { text: 'Tekst.' },
      children: [{ ...mc, id: 'g1.1', explanation: { text: 'Zato.', source: 'official' } }],
    }
    const v1 = wrap(group)
    v1.meta.schemaVersion = 1
    const upgraded = upgradeExam(v1)
    expect(upgraded.questions[0].children[0].solution.source).toBe('official')
  })

  it('upgradeExam ne dira već nadograđen ispit', () => {
    const exam = wrap(mc)
    expect(upgradeExam(exam)).toBe(exam)
  })
})

describe('schema v2 — razrada (solution)', () => {
  it('prihvaća punu razradu', () => {
    expect(validateExam(wrap({ ...mc, solution })).valid).toBe(true)
  })

  it('odbija korak bez txt-a', () => {
    const broken = { ...solution, steps: [{ note: 'postupak' }] }
    expect(codes(wrap({ ...mc, solution: broken }))).toContain('INVALID_SOLUTION_STEPS')
  })

  it('odbija nepoznatu note oznaku koraka', () => {
    const broken = { ...solution, steps: [{ txt: 'Korak', note: 'sazetak' }] }
    expect(codes(wrap({ ...mc, solution: broken }))).toContain('INVALID_SOLUTION_STEPS')
  })

  it('odbija dva final koraka', () => {
    const broken = { ...solution, steps: [{ txt: 'A', final: true }, { txt: 'B', final: true }] }
    expect(codes(wrap({ ...mc, solution: broken }))).toContain('INVALID_SOLUTION_STEPS')
  })

  it('odbija nepoznat izvor razrade', () => {
    const broken = { ...solution, source: 'wikipedia' }
    expect(codes(wrap({ ...mc, solution: broken }))).toContain('INVALID_SOLUTION_SOURCE')
  })

  it('odbija why koji nije niz stringova', () => {
    const broken = { ...solution, why: 'jer' }
    expect(codes(wrap({ ...mc, solution: broken }))).toContain('INVALID_SOLUTION_WHY')
  })

  it('odbija commonMistakes koji nije niz stringova', () => {
    const broken = { ...solution, commonMistakes: [''] }
    expect(codes(wrap({ ...mc, solution: broken }))).toContain('INVALID_SOLUTION_MISTAKES')
  })

  it('odbija neispravan reviewedAt', () => {
    const broken = { ...solution, reviewedBy: 'opus', reviewedAt: 'jučer' }
    expect(codes(wrap({ ...mc, solution: broken }))).toContain('INVALID_SOLUTION_FIELD')
  })

  it('odbija neispravan explanation objekt', () => {
    expect(codes(wrap({ ...mc, explanation: { text: 'Bez izvora' } }))).toContain('INVALID_EXPLANATION')
  })
})

describe('schema v2 — taksonomija', () => {
  it('prihvaća chapterSlug i catalogOutcomes', () => {
    const question = { ...mc, chapterSlug: 'grada-atoma', catalogOutcomes: ['BIO.1.2'] }
    expect(validateExam(wrap(question)).valid).toBe(true)
  })

  it('odbija chapterSlug izvan popisa poglavlja', () => {
    const question = { ...mc, chapterSlug: 'nepoznato' }
    expect(codes(wrap(question), { chapters: ['grada-atoma'] })).toContain('UNKNOWN_CHAPTER')
  })

  it('odbija prazan chapterSlug', () => {
    expect(codes(wrap({ ...mc, chapterSlug: '  ' }))).toContain('INVALID_CHAPTER_SLUG')
  })

  it('odbija catalogOutcomes koji nije niz stringova', () => {
    expect(codes(wrap({ ...mc, catalogOutcomes: [1] }))).toContain('INVALID_CATALOG_OUTCOMES')
  })

  it('uz predan popis tema nepoznat topic je greška', () => {
    expect(codes(wrap(mc), { topics: ['genetika'] })).toContain('UNKNOWN_TOPIC')
    expect(validateExam(wrap(mc), { topics: ['stanica'] }).valid).toBe(true)
  })

  it('bez popisa tema nepoznat topic ostaje samo strukturalno valjan', () => {
    expect(validateExam(wrap(mc)).valid).toBe(true)
  })

  it('prihvaća qa oznaku po pitanju i odbija nepoznat status', () => {
    const ok = { ...mc, qa: { status: 'verified', verifiedBy: 'opus-refuter', verifiedAt: '2026-09-01' } }
    expect(validateExam(wrap(ok)).valid).toBe(true)
    expect(codes(wrap({ ...mc, qa: { status: 'nepoznato' } }))).toContain('INVALID_QUESTION_QA')
  })
})

describe('schema v2 — odgovori i stimulusi', () => {
  function shortQuestion(numeric) {
    return {
      id: '1', type: 'short', prompt: 'Izračunaj.', points: 1, topic: 'stanica', sourceRef, assets: [],
      answer: { kind: 'text', accepted: ['2.5'], numeric, source: 'official' },
    }
  }

  it('prihvaća relativeTolerance uz absoluteTolerance', () => {
    const question = shortQuestion({ absoluteTolerance: '0.01', relativeTolerance: '0.02' })
    expect(validateExam(wrap(question)).valid).toBe(true)
  })

  it('odbija negativan relativeTolerance', () => {
    const question = shortQuestion({ absoluteTolerance: '0.01', relativeTolerance: '-0.02' })
    expect(codes(wrap(question))).toContain('INVALID_RELATIVE_TOLERANCE')
  })

  it('odbija relativeTolerance koji nije broj', () => {
    const question = shortQuestion({ relativeTolerance: 'dva posto' })
    expect(codes(wrap(question))).toContain('INVALID_RELATIVE_TOLERANCE')
  })

  function fillQuestion(extra) {
    return {
      id: '1', type: 'fill', prompt: 'Dopuni.', points: 2, topic: 'genetika', sourceRef, assets: [],
      gaps: [{ id: 'g1' }, { id: 'g2' }],
      answer: { kind: 'fill', accepted: { g1: ['A'], g2: ['B'] }, source: 'official' },
      ...extra,
    }
  }

  it('prihvaća wordBank i letter mod', () => {
    const question = fillQuestion({ wordBank: ['A. kiša', 'B. snijeg', 'C. tuča'], mode: 'letter' })
    expect(validateExam(wrap(question, { maxPoints: 2 })).valid).toBe(true)
  })

  it('odbija letter mod bez wordBanka', () => {
    const question = fillQuestion({ mode: 'letter' })
    expect(codes(wrap(question, { maxPoints: 2 }))).toContain('WORD_BANK_REQUIRED')
  })

  it('odbija nepoznat fill mod i duplikate u wordBanku', () => {
    expect(codes(wrap(fillQuestion({ mode: 'drag' }), { maxPoints: 2 }))).toContain('INVALID_FILL_MODE')
    expect(codes(wrap(fillQuestion({ wordBank: ['A', 'A'] }), { maxPoints: 2 }))).toContain('INVALID_WORD_BANK')
  })

  it('odbija wordBank na zadatku koji nije fill', () => {
    expect(codes(wrap({ ...mc, wordBank: ['A', 'B'] }))).toContain('FILL_FIELD_ON_NON_FILL')
  })

  it('prihvaća stimulus.code i odbija nepotpun', () => {
    const ok = { ...mc, stimulus: { code: { language: 'python', text: 'print(1)' } } }
    expect(validateExam(wrap(ok)).valid).toBe(true)
    const broken = { ...mc, stimulus: { code: { language: 'python' } } }
    expect(codes(wrap(broken))).toContain('INVALID_STIMULUS_CODE')
  })

  it('prihvaća stimulus.source i odbija izvor bez naslova', () => {
    const ok = { ...mc, stimulus: { source: { title: 'Ustav', author: 'Sabor', year: 1990, citation: 'čl. 1.' } } }
    expect(validateExam(wrap(ok)).valid).toBe(true)
    const broken = { ...mc, stimulus: { source: { author: 'Sabor' } } }
    expect(codes(wrap(broken))).toContain('INVALID_STIMULUS_SOURCE')
  })

  it('prihvaća mediaUnavailable i odbija onaj bez officialRef', () => {
    const ok = { ...mc, stimulus: { mediaUnavailable: { reason: 'Nemamo prava na fotografiju.', officialRef: 'PDF str. 7' } } }
    expect(validateExam(wrap(ok)).valid).toBe(true)
    const broken = { ...mc, stimulus: { mediaUnavailable: { reason: 'Nemamo prava.' } } }
    expect(codes(wrap(broken))).toContain('INVALID_MEDIA_UNAVAILABLE')
  })

  it('prihvaća essay responseMode i odbija ga izvan eseja', () => {
    const essay = {
      id: '1', type: 'essay', prompt: 'Prevedi rečenicu.', points: 3, topic: 'jezik', sourceRef, assets: [],
      responseMode: 'translation',
      answer: { kind: 'rubric', rubric: [{ id: 'r1', points: 3, text: 'Točan prijevod' }], source: 'official' },
    }
    expect(validateExam(wrap(essay, { maxPoints: 3 })).valid).toBe(true)
    expect(codes(wrap({ ...essay, responseMode: 'crtanje' }, { maxPoints: 3 }))).toContain('INVALID_RESPONSE_MODE')
    expect(codes(wrap({ ...mc, responseMode: 'drawing' }))).toContain('INVALID_RESPONSE_MODE')
  })
})

describe('schema v2 — assets i prava', () => {
  const imageAsset = { type: 'image', src: '/discere/bio/cell.webp', alt: 'Shema stanice' }

  function mediaQuestion(asset) {
    return {
      id: 'g1', type: 'media_response', prompt: 'Promotri.', points: 1, topic: 'stanica', sourceRef,
      assets: [asset],
      children: [{ ...mc, id: 'g1.1', sourceRef: { page: 3, task: '1.1' } }],
    }
  }

  it('prihvaća source i rights na assetu', () => {
    const asset = { ...imageAsset, source: 'maturiraj', rights: { holder: 'Maturiraj', basis: 'vlastita izrada' } }
    expect(validateExam(wrap(mediaQuestion(asset))).valid).toBe(true)
  })

  it('odbija nepoznat asset.source', () => {
    expect(codes(wrap(mediaQuestion({ ...imageAsset, source: 'flickr' })))).toContain('INVALID_ASSET_SOURCE')
  })

  it('odbija nepotpun rights zapis', () => {
    expect(codes(wrap(mediaQuestion({ ...imageAsset, rights: { holder: 'NCVVO' } })))).toContain('INVALID_ASSET_RIGHTS')
  })

  it('traži source na audio assetu', () => {
    const question = {
      id: 'g1', type: 'audio_group', prompt: 'Poslušaj.', points: 1, topic: 'jezik', sourceRef,
      assets: [{ type: 'audio', src: '/discere/test/audio.mp3' }],
      children: [{ ...mc, id: 'g1.1', sourceRef: { page: 3, task: '1.1' } }],
    }
    expect(codes(wrap(question))).toContain('AUDIO_ASSET_SOURCE_REQUIRED')
    const fixed = { ...question, assets: [{ ...question.assets[0], source: 'tts' }] }
    expect(validateExam(wrap(fixed)).valid).toBe(true)
  })
})

describe('schema v2 — blokovi i QA refuter', () => {
  function twoQuestionExam(blocks) {
    return {
      meta: baseMeta({ blocks }, 2, 2),
      questions: [mc, { ...mc, id: '2' }],
    }
  }

  it('prihvaća blokove koji pokrivaju sve zadatke', () => {
    const exam = twoQuestionExam([{ id: 'b1', label: 'Čitanje', minutes: 40, questionIds: ['1', '2'] }])
    expect(validateExam(exam).valid).toBe(true)
  })

  it('odbija blokove koji ne pokrivaju sve zadatke', () => {
    const exam = twoQuestionExam([{ id: 'b1', label: 'Čitanje', minutes: 40, questionIds: ['1'] }])
    expect(codes(exam)).toContain('BLOCK_COVERAGE_INCOMPLETE')
  })

  it('odbija preklapanje zadataka među blokovima', () => {
    const exam = twoQuestionExam([
      { id: 'b1', label: 'Čitanje', minutes: 40, questionIds: ['1', '2'] },
      { id: 'b2', label: 'Pisanje', minutes: 30, questionIds: ['2'] },
    ])
    expect(codes(exam)).toContain('BLOCK_QUESTION_OVERLAP')
  })

  it('odbija blok koji navodi nepostojeći zadatak', () => {
    const exam = twoQuestionExam([{ id: 'b1', label: 'Čitanje', minutes: 40, questionIds: ['1', '2', '9'] }])
    expect(codes(exam)).toContain('UNKNOWN_BLOCK_QUESTION')
  })

  it('odbija blok bez minuta', () => {
    const exam = twoQuestionExam([{ id: 'b1', label: 'Čitanje', questionIds: ['1', '2'] }])
    expect(codes(exam)).toContain('INVALID_BLOCK')
  })

  it('prihvaća qa.refuter i odbija nepoznat verdict', () => {
    const ok = wrap(mc, { meta: { qa: { status: 'verified', verifiedAt: null, notes: [], refuter: { verdict: 'pass', at: '2026-09-01', model: 'opus-5', notes: [] } } } })
    expect(validateExam(ok).valid).toBe(true)
    const broken = wrap(mc, { meta: { qa: { status: 'verified', verifiedAt: null, notes: [], refuter: { verdict: 'maybe', at: '2026-09-01', model: 'opus-5', notes: [] } } } })
    expect(codes(broken)).toContain('INVALID_QA_REFUTER')
  })
})

describe('schema v2 — javna validacija', () => {
  const publicMc = { id: '1', type: 'mc', prompt: 'Koja tvrdnja vrijedi?', points: 1, topic: 'stanica', sourceRef, assets: [], options: mc.options }

  it('prihvaća javni ispit bez ključa', () => {
    expect(validateExam(wrap(publicMc), { public: true }).valid).toBe(true)
  })

  it('pada kad javni ispit nosi answer', () => {
    expect(codes(wrap(mc), { public: true })).toContain('PUBLIC_FIELD_LEAK')
  })

  it('pada kad javni ispit nosi solution ili explanation', () => {
    expect(codes(wrap({ ...publicMc, solution }), { public: true })).toContain('PUBLIC_FIELD_LEAK')
    expect(codes(wrap({ ...publicMc, explanation: { text: 'Zato.', source: 'official' } }), { public: true })).toContain('PUBLIC_FIELD_LEAK')
  })

  it('ne prijavljuje explanation: null kao curenje', () => {
    expect(validateExam(wrap({ ...publicMc, explanation: null }), { public: true }).valid).toBe(true)
  })

  it('pada rekurzivno kroz djecu grupe', () => {
    const group = {
      id: 'g1', type: 'passage_group', prompt: 'Pročitaj.', points: 1, topic: 'ekologija', sourceRef,
      assets: [], stimulus: { text: 'Tekst.' },
      children: [{ ...mc, id: 'g1.1', sourceRef: { page: 3, task: '1.1' } }],
    }
    const result = validateExam(wrap(group), { public: true })
    expect(result.valid).toBe(false)
    expect(result.errors.some((error) => error.code === 'PUBLIC_FIELD_LEAK' && error.path.includes('children[0]'))).toBe(true)
  })

  it('pada kad javni ispit nosi transkript slušanja', () => {
    const listening = { title: 'Zapis', language: 'en', synthetic: false, durationSec: 120, maxPlays: 2 }
    const group = {
      id: 'g1', type: 'audio_group', prompt: 'Poslušaj.', points: 1, topic: 'jezik', sourceRef,
      assets: [{ type: 'audio', src: '/discere/test/audio.mp3', source: 'official' }],
      stimulus: { listening },
      children: [{ ...publicMc, id: 'g1.1', sourceRef: { page: 3, task: '1.1' } }],
    }
    expect(validateExam(wrap(group), { public: true }).valid).toBe(true)
    const leaking = structuredClone(group)
    leaking.stimulus.listening.transcript = [{ id: 't1', text: 'Hello.' }]
    expect(codes(wrap(leaking), { public: true })).toContain('PUBLIC_FIELD_LEAK')
  })

  it('i dalje provjerava strukturu zadatka u javnom modu', () => {
    const broken = { ...publicMc, options: [{ id: 'A', text: 'Jedina' }] }
    expect(codes(wrap(broken), { public: true })).toContain('OPTIONS_REQUIRED')
  })
})
