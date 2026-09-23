import { describe, expect, it } from 'vitest'
import { validateExam } from '@/lib/discere/exam-schema'

function baseMeta(questionCount = 1, maxPoints = 1) {
  return {
    schemaVersion: 1,
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
  }
}

function wrap(question, maxPoints = question.points ?? 1) {
  return { meta: baseMeta(1, maxPoints), questions: [question] }
}

const sourceRef = { page: 3, task: '1' }

const mc = {
  id: '1', type: 'mc', prompt: 'Koja tvrdnja vrijedi?', points: 1, topic: 'stanica',
  sourceRef, assets: [], explanation: null,
  options: [{ id: 'A', text: 'Prva' }, { id: 'B', text: 'Druga' }],
  answer: { kind: 'choice', correct: ['A'], source: 'official' },
}

describe('canonical Discere exam schema', () => {
  it('accepts a valid canonical exam', () => {
    expect(validateExam(wrap(mc)).valid).toBe(true)
  })

  it('rejects duplicate question ids', () => {
    const exam = { meta: baseMeta(2, 2), questions: [mc, { ...mc }] }
    const result = validateExam(exam)
    expect(result.errors.some((error) => error.code === 'DUPLICATE_QUESTION_ID')).toBe(true)
  })

  it('rejects an mc key that references a missing option', () => {
    const exam = wrap({ ...mc, answer: { ...mc.answer, correct: ['C'] } })
    const result = validateExam(exam)
    expect(result.errors.some((error) => error.code === 'INVALID_CHOICE_KEY')).toBe(true)
  })

  it('warns on duplicate option text', () => {
    const exam = wrap({ ...mc, options: [{ id: 'A', text: 'Isto' }, { id: 'B', text: 'Isto' }] })
    const result = validateExam(exam)
    expect(result.warnings.some((warning) => warning.code === 'DUPLICATE_OPTION_TEXT')).toBe(true)
  })

  it('supports multi choice', () => {
    const question = {
      ...mc,
      type: 'multi',
      options: [{ id: 'A', text: 'A' }, { id: 'B', text: 'B' }, { id: 'C', text: 'C' }],
      answer: { kind: 'choice', correct: ['A', 'C'], source: 'official' },
    }
    expect(validateExam(wrap(question)).valid).toBe(true)
  })

  it('supports short text answers', () => {
    const question = {
      id: '1', type: 'short', prompt: 'Navedi pojam.', points: 1, topic: 'stanica', sourceRef,
      assets: [], explanation: null,
      answer: { kind: 'text', accepted: ['mitoza'], source: 'official' },
    }
    expect(validateExam(wrap(question)).valid).toBe(true)
  })

  it('supports multi-gap fill answers', () => {
    const question = {
      id: '1', type: 'fill', prompt: 'Dopuni rečenicu.', points: 2, topic: 'genetika', sourceRef,
      assets: [], explanation: null,
      gaps: [{ id: 'g1' }, { id: 'g2' }],
      answer: { kind: 'fill', accepted: { g1: ['DNA'], g2: ['RNA'] }, source: 'official' },
    }
    expect(validateExam(wrap(question, 2)).valid).toBe(true)
  })

  it('supports matching answers', () => {
    const question = {
      id: '1', type: 'matching', prompt: 'Poveži.', points: 2, topic: 'ekologija', sourceRef,
      assets: [], explanation: null,
      left: [{ id: 'l1', text: 'A' }, { id: 'l2', text: 'B' }],
      right: [{ id: 'r1', text: '1' }, { id: 'r2', text: '2' }],
      answer: { kind: 'matching', pairs: { l1: 'r2', l2: 'r1' }, source: 'official' },
    }
    expect(validateExam(wrap(question, 2)).valid).toBe(true)
  })

  it('supports ordering answers', () => {
    const question = {
      id: '1', type: 'ordering', prompt: 'Poredaj.', points: 1, topic: 'evolucija', sourceRef,
      assets: [], explanation: null,
      items: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }],
      answer: { kind: 'ordering', order: ['b', 'a'], source: 'official' },
    }
    expect(validateExam(wrap(question)).valid).toBe(true)
  })

  it('supports true/false subitems', () => {
    const question = {
      id: '1', type: 'true_false', prompt: 'Odredi točnost.', points: 2, topic: 'fiziologija', sourceRef,
      assets: [], explanation: null,
      statements: [{ id: 's1', text: 'A' }, { id: 's2', text: 'B' }],
      answer: { kind: 'true_false', values: { s1: true, s2: false }, source: 'official' },
    }
    expect(validateExam(wrap(question, 2)).valid).toBe(true)
  })

  it('supports essay/rubric tasks without inventing a closed key', () => {
    const question = {
      id: '1', type: 'essay', prompt: 'Objasni proces.', points: 3, topic: 'fiziologija', sourceRef,
      assets: [], explanation: null,
      answer: { kind: 'rubric', rubric: [{ id: 'r1', points: 3, text: 'Potpun odgovor' }], source: 'official' },
    }
    expect(validateExam(wrap(question, 3)).valid).toBe(true)
  })

  it('supports passage groups with child questions', () => {
    const question = {
      id: 'g1', type: 'passage_group', prompt: 'Pročitaj tekst.', points: 1, topic: 'ekologija', sourceRef,
      assets: [], explanation: null, stimulus: { text: 'Izvorni tekst.' },
      children: [{ ...mc, id: 'g1.1', sourceRef: { page: 3, task: '1.1' } }],
    }
    expect(validateExam(wrap(question)).valid).toBe(true)
  })

  it('supports audio groups with a referenced audio asset', () => {
    const question = {
      id: 'g1', type: 'audio_group', prompt: 'Poslušaj zapis.', points: 1, topic: 'jezik', sourceRef,
      assets: [{ type: 'audio', src: '/discere/test/audio.mp3', source: 'official' }], explanation: null,
      children: [{ ...mc, id: 'g1.1', sourceRef: { page: 3, task: '1.1' } }],
    }
    expect(validateExam(wrap(question)).valid).toBe(true)
  })

  it('supports media-response groups and requires image alt text', () => {
    const question = {
      id: 'g1', type: 'media_response', prompt: 'Promotri sliku.', points: 1, topic: 'stanica', sourceRef,
      assets: [{ type: 'image', src: '/discere/bio/cell.webp', alt: 'Shema stanice' }], explanation: null,
      children: [{ ...mc, id: 'g1.1', sourceRef: { page: 3, task: '1.1' } }],
    }
    expect(validateExam(wrap(question)).valid).toBe(true)

    const broken = structuredClone(wrap(question))
    delete broken.questions[0].assets[0].alt
    expect(validateExam(broken).errors.some((error) => error.code === 'IMAGE_ALT_REQUIRED')).toBe(true)
  })

  it('rejects mismatched official structural totals', () => {
    const exam = wrap(mc)
    exam.meta.questionCount = 2
    exam.meta.maxPoints = 5
    const result = validateExam(exam)
    expect(result.errors.some((error) => error.code === 'QUESTION_COUNT_MISMATCH')).toBe(true)
    expect(result.errors.some((error) => error.code === 'MAX_POINTS_MISMATCH')).toBe(true)
  })
})
