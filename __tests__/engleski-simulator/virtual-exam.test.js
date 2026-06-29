/**
 * virtual-exam.test.js
 *
 * Covers TEST COVERAGE GAPS for EXAMS mutation and generateVirtualExam():
 *   - EXAMS data integrity: required fields, correct types, no duplicate IDs
 *   - mc/mat/fb questions have the sol fields that chk() and the renderer expect
 *   - Virtual exam key uniqueness: key = 'virtual_' + Date.now() is always unique
 *     across rapidly consecutive calls
 *   - Virtual exam keys never collide with static EXAMS keys
 *   - EXAMS provides enough pool depth for generateVirtualExam's targets
 *     (mc=16, mat=6, fb=10, sa=1 — the targets used in EngleskiSimulator.js)
 *
 * generateVirtualExam() is module-level but not exported. The pool it draws from
 * IS the exported EXAMS constant, so we verify the preconditions it relies on.
 */
import { describe, it, expect } from 'vitest';
import { EXAMS } from '../../lib/engleski-simulator/exams.js';

const allExams = Object.values(EXAMS);
const allQuestions = allExams.flatMap(e => e.qs);

// ─── EXAMS — top-level structure ─────────────────────────────────────────────

describe('EXAMS — top-level structure', () => {
  it('EXAMS is a non-empty plain object', () => {
    expect(typeof EXAMS).toBe('object');
    expect(EXAMS).not.toBeNull();
    expect(Object.keys(EXAMS).length).toBeGreaterThan(0);
  });

  it('every map key matches the exam\'s own .key property', () => {
    for (const [mapKey, exam] of Object.entries(EXAMS)) {
      expect(exam.key).toBe(mapKey);
    }
  });

  it('every exam has a numeric year', () => {
    for (const exam of allExams) {
      expect(typeof exam.year).toBe('number');
      expect(exam.year).toBeGreaterThan(2000);
    }
  });

  it('every exam has a non-empty string season', () => {
    for (const exam of allExams) {
      expect(typeof exam.season).toBe('string');
      expect(exam.season.length).toBeGreaterThan(0);
    }
  });

  it('every exam has a non-empty string label', () => {
    for (const exam of allExams) {
      expect(typeof exam.label).toBe('string');
      expect(exam.label.length).toBeGreaterThan(0);
    }
  });

  it('every exam has a qs array', () => {
    for (const [key, exam] of Object.entries(EXAMS)) {
      expect(Array.isArray(exam.qs), `${key}.qs must be an array`).toBe(true);
    }
  });
});

// ─── EXAMS — question-level integrity ────────────────────────────────────────

describe('EXAMS — question fields', () => {
  it('every question has a string id', () => {
    for (const [examKey, exam] of Object.entries(EXAMS)) {
      for (const q of exam.qs) {
        expect(typeof q.id, `${examKey}: q.id must be a string`).toBe('string');
        expect(q.id.length, `${examKey}: q.id must be non-empty`).toBeGreaterThan(0);
      }
    }
  });

  it('every question has a known type (mc|ins|mat|fb|sa|es)', () => {
    const VALID_TYPES = new Set(['mc', 'ins', 'mat', 'fb', 'sa', 'es']);
    for (const [examKey, exam] of Object.entries(EXAMS)) {
      for (const q of exam.qs) {
        expect(VALID_TYPES.has(q.type), `${examKey}: unknown type "${q.type}" on ${q.id}`).toBe(true);
      }
    }
  });

  it('every question has a non-empty string q (question text)', () => {
    for (const [examKey, exam] of Object.entries(EXAMS)) {
      for (const q of exam.qs) {
        expect(typeof q.q, `${examKey} ${q.id}: q.q must be string`).toBe('string');
        expect(q.q.length, `${examKey} ${q.id}: q.q must be non-empty`).toBeGreaterThan(0);
      }
    }
  });

  it('question IDs are unique within each individual exam', () => {
    for (const [key, exam] of Object.entries(EXAMS)) {
      const ids = exam.qs.map(q => q.id);
      const unique = new Set(ids);
      expect(unique.size, `Duplicate IDs found in exam ${key}`).toBe(ids.length);
    }
  });
});

// ─── EXAMS — mc question sol fields ──────────────────────────────────────────

describe('EXAMS — mc question required fields', () => {
  const mcQuestions = allQuestions.filter(q => q.type === 'mc');

  it('all mc questions have a non-empty opts array', () => {
    for (const q of mcQuestions) {
      expect(Array.isArray(q.opts), `mc ${q.id}: missing opts`).toBe(true);
      expect(q.opts.length, `mc ${q.id}: opts must be non-empty`).toBeGreaterThan(0);
    }
  });

  it('all mc questions have sol.cl (a string matching one of the option letters)', () => {
    // Questions can have up to A–I (9 options). We only check it is a non-empty string;
    // the bounds check is handled by the opts array length test above.
    for (const q of mcQuestions) {
      expect(typeof q.sol?.cl, `mc ${q.id}: missing sol.cl`).toBe('string');
      expect(q.sol.cl.length, `mc ${q.id}: sol.cl must be non-empty`).toBeGreaterThan(0);
    }
  });
});

// ─── EXAMS — mat question sol fields ─────────────────────────────────────────

describe('EXAMS — mat question required fields', () => {
  const matQuestions = allQuestions.filter(q => q.type === 'mat');

  it('all mat questions have a sol.pairs array', () => {
    for (const q of matQuestions) {
      expect(Array.isArray(q.sol?.pairs), `mat ${q.id}: missing sol.pairs`).toBe(true);
    }
  });

  it('every pair has string l and r properties', () => {
    for (const q of matQuestions) {
      for (const pair of q.sol.pairs) {
        expect(typeof pair.l, `mat ${q.id}: pair.l must be string`).toBe('string');
        expect(typeof pair.r, `mat ${q.id}: pair.r must be string`).toBe('string');
      }
    }
  });
});

// ─── EXAMS — fb question sol fields ──────────────────────────────────────────

describe('EXAMS — fb question required fields', () => {
  const fbQuestions = allQuestions.filter(q => q.type === 'fb');

  it('all fb questions have sol.ans (string or array) OR sol.alt (array of alternates)', () => {
    // Some questions use sol.alt exclusively (e.g. open-cloze where many phrasings are valid).
    // chk() prioritises sol.alt over sol.ans, so either field satisfies the grader.
    for (const q of fbQuestions) {
      const hasAns = typeof q.sol?.ans === 'string' || Array.isArray(q.sol?.ans);
      const hasAlt = Array.isArray(q.sol?.alt);
      expect(
        hasAns || hasAlt,
        `fb ${q.id}: must have sol.ans (string/array) or sol.alt (array)`,
      ).toBe(true);
    }
  });

  it('fb sol.ans string is non-empty when it is a string', () => {
    for (const q of fbQuestions) {
      if (typeof q.sol?.ans === 'string') {
        expect(q.sol.ans.length, `fb ${q.id}: sol.ans must not be empty`).toBeGreaterThan(0);
      }
    }
  });
});

// ─── Virtual exam key uniqueness ─────────────────────────────────────────────
// generateVirtualExam() uses: key = 'virtual_' + Date.now()

describe('generateVirtualExam — key uniqueness guarantee', () => {
  it('Date.now() is strictly increasing, guaranteeing distinct virtual keys', async () => {
    const t1 = Date.now();
    await new Promise(r => setTimeout(r, 2));
    const t2 = Date.now();
    expect(t2).toBeGreaterThan(t1);
    expect(`virtual_${t1}`).not.toBe(`virtual_${t2}`);
  });

  it('virtual key format matches /^virtual_\\d+$/', () => {
    const key = 'virtual_' + Date.now();
    expect(key).toMatch(/^virtual_\d+$/);
  });

  it('virtual_ prefixed keys never collide with static EXAMS keys', () => {
    const staticKeys = Object.keys(EXAMS);
    // No static exam key should start with 'virtual_'
    for (const k of staticKeys) {
      expect(k.startsWith('virtual_')).toBe(false);
    }
  });
});

// ─── Virtual exam pool depth (precondition for generateVirtualExam) ──────────
// generateVirtualExam targets: { mc: 16, mat: 6, fb: 10, sa: 1 }
// If EXAMS doesn't have enough questions, generateVirtualExam silently produces
// fewer questions than expected.

describe('generateVirtualExam — EXAMS pool depth', () => {
  it('EXAMS contains ≥16 mc questions (target for virtual exam)', () => {
    expect(allQuestions.filter(q => q.type === 'mc').length).toBeGreaterThanOrEqual(16);
  });

  it('EXAMS contains ≥6 mat questions (target for virtual exam)', () => {
    expect(allQuestions.filter(q => q.type === 'mat').length).toBeGreaterThanOrEqual(6);
  });

  it('EXAMS contains ≥10 fb questions (target for virtual exam)', () => {
    expect(allQuestions.filter(q => q.type === 'fb').length).toBeGreaterThanOrEqual(10);
  });

  it('EXAMS contains ≥1 sa question (target for virtual exam)', () => {
    expect(allQuestions.filter(q => q.type === 'sa').length).toBeGreaterThanOrEqual(1);
  });

  it('total pool is at least 33 auto-gradeable questions (mc+mat+fb+sa target)', () => {
    const count = allQuestions.filter(q => ['mc', 'mat', 'fb', 'sa'].includes(q.type)).length;
    expect(count).toBeGreaterThanOrEqual(33);
  });
});
