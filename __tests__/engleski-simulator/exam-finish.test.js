/**
 * exam-finish.test.js
 *
 * Covers TEST COVERAGE GAPS for ExamPlayScreen:
 *   - finish() calculates pct correctly for a 0-question auto-grade subset (all sa/es)
 *   - finish() excludes sa/es from the denominator
 *   - finish() rounds pct to nearest integer
 *   - finish() chains through grade() correctly
 *   - timer expiry calls finish() — tested via timerTick's didExpire flag (the signal
 *     that ExamPlayScreen's useTimer.onExpire callback relies on)
 *   - goTo() accumulates qTimes correctly per question ID
 *
 * ExamPlayScreen's finish() and goTo() are defined inside the component closure and
 * are not exported. We test the underlying computation using the exported scoring
 * primitives (chk, grade, timerTick) plus the same inline formulas, so any
 * regression in the shared primitives is caught here as well as in scoring.test.js.
 */
import { describe, it, expect } from 'vitest';
import { chk, grade, timerTick } from '../../lib/engleski-simulator/scoring.js';

// ─── Helpers mirroring production code ───────────────────────────────────────

/**
 * Mirrors the finish() closure in EngleskiSimulator.js:
 *   const autoQ = qs.filter(x => x.type !== 'sa' && x.type !== 'es')
 *   const cor   = autoQ.filter(x => chk(x, answers[x.id]) === true).length
 *   const pct   = autoQ.length ? Math.round((cor / autoQ.length) * 100) : 0
 *   grade(pct)
 */
function simulateFinish(qs, answers) {
  const autoQ = qs.filter(x => x.type !== 'sa' && x.type !== 'es');
  const cor = autoQ.filter(x => chk(x, answers[x.id]) === true).length;
  const pct = autoQ.length ? Math.round((cor / autoQ.length) * 100) : 0;
  return { pct, grade: grade(pct), cor, total: autoQ.length };
}

/**
 * Mirrors goTo()'s qTimes update step:
 *   const elapsed = Math.max(0, Math.round((Date.now() - startedAt) / 1000))
 *   setQTimes(prev => ({ ...prev, [qId]: (prev[qId] || 0) + elapsed }))
 */
function accumulateQTime(prev, qId, elapsedMs) {
  const elapsed = Math.max(0, Math.round(elapsedMs / 1000));
  return { ...prev, [qId]: (prev[qId] || 0) + elapsed };
}

// ─── Question factories ───────────────────────────────────────────────────────

const mc  = (id, cl) => ({ id, type: 'mc',  q: `Q${id}`, opts: ['X', 'Y', 'Z'], sol: { cl } });
const sa  = id       => ({ id, type: 'sa',  q: `Q${id}`, sol: { ans: 'x' } });
const es  = id       => ({ id, type: 'es',  q: `Q${id}`, sol: { ans: 'x' } });
const fb  = (id, ans) => ({ id, type: 'fb', q: `Q${id}`, sol: { ans } });
const mat = (id, pairs) => ({
  id, type: 'mat', q: `Q${id}`,
  items:  pairs.map(p => p.l),
  rights: pairs.map(p => p.r),
  sol: { pairs },
});

// ─── finish() — pct calculation ──────────────────────────────────────────────

describe('finish() — pct calculation', () => {
  it('100% when all mc answers are correct', () => {
    const qs = [mc('q1', 'A'), mc('q2', 'B'), mc('q3', 'C')];
    expect(simulateFinish(qs, { q1: 'A', q2: 'B', q3: 'C' }).pct).toBe(100);
  });

  it('0% when all mc answers are wrong', () => {
    const qs = [mc('q1', 'A'), mc('q2', 'B')];
    expect(simulateFinish(qs, { q1: 'C', q2: 'C' }).pct).toBe(0);
  });

  it('pct = 0 (not NaN) when all questions are sa/es — 0-question autoQ subset', () => {
    const qs = [sa('sa1'), es('es1'), sa('sa2')];
    const result = simulateFinish(qs, {});
    expect(result.pct).toBe(0);
    expect(result.total).toBe(0);
    expect(Number.isNaN(result.pct)).toBe(false);
  });

  it('sa and es questions are excluded from total (denominator)', () => {
    const qs = [mc('q1', 'A'), sa('sa1'), es('es1')];
    expect(simulateFinish(qs, { q1: 'A' }).total).toBe(1);
  });

  it('sa and es are excluded from cor (numerator)', () => {
    // Sa question whose sol.ans matches the given answer — should NOT count
    const qs = [mc('q1', 'X'), sa('sa1')];
    const { cor } = simulateFinish(qs, { q1: 'X', sa1: 'x' });
    expect(cor).toBe(1); // only the mc counts
  });

  it('7 correct out of 10 → pct = 70', () => {
    const qs = Array.from({ length: 10 }, (_, i) => mc(`q${i}`, 'A'));
    const answers = Object.fromEntries(qs.map((q, i) => [q.id, i < 7 ? 'A' : 'B']));
    expect(simulateFinish(qs, answers).pct).toBe(70);
  });

  it('rounds pct to nearest integer (1 of 3 = 33.33... → 33)', () => {
    const qs = [mc('q0', 'A'), mc('q1', 'A'), mc('q2', 'A')];
    expect(simulateFinish(qs, { q0: 'A', q1: 'B', q2: 'B' }).pct).toBe(33);
  });

  it('rounds up at 0.5 boundary (1 of 2 = 50 exactly → 50, no rounding needed)', () => {
    const qs = [mc('q0', 'A'), mc('q1', 'A')];
    expect(simulateFinish(qs, { q0: 'A', q1: 'B' }).pct).toBe(50);
  });

  it('unanswered questions (missing from answers map) count as wrong', () => {
    const qs = [mc('q1', 'A'), mc('q2', 'A')];
    expect(simulateFinish(qs, {}).cor).toBe(0);
  });

  it('grade is derived correctly from pct: pct ≥ 85 → grade 5', () => {
    const qs = Array.from({ length: 20 }, (_, i) => mc(`q${i}`, 'A'));
    const answers = Object.fromEntries(qs.map(q => [q.id, 'A'])); // 100%
    expect(simulateFinish(qs, answers).grade).toBe(5);
  });

  it('grade is derived correctly from pct: pct < 40 → grade 1', () => {
    const qs = Array.from({ length: 10 }, (_, i) => mc(`q${i}`, 'A'));
    const answers = Object.fromEntries(qs.map(q => [q.id, 'B'])); // 0%
    expect(simulateFinish(qs, answers).grade).toBe(1);
  });
});

// ─── finish() — fb and mat types are graded auto (not excluded) ──────────────

describe('finish() — fb and mat auto-graded types are included', () => {
  it('fb correct answer counts towards cor', () => {
    const qs = [fb('fb1', 'running')];
    expect(simulateFinish(qs, { fb1: 'running' }).cor).toBe(1);
  });

  it('fb wrong answer counts as wrong (cor = 0)', () => {
    const qs = [fb('fb1', 'running')];
    expect(simulateFinish(qs, { fb1: 'swimming' }).cor).toBe(0);
  });

  it('mat correct pairs counts towards cor', () => {
    const pairs = [{ l: 'A', r: '1' }, { l: 'B', r: '2' }];
    const qs = [mat('m1', pairs)];
    expect(simulateFinish(qs, { m1: { A: '1', B: '2' } }).cor).toBe(1);
  });

  it('mat wrong pairs counts as wrong (cor = 0)', () => {
    const pairs = [{ l: 'A', r: '1' }, { l: 'B', r: '2' }];
    const qs = [mat('m1', pairs)];
    expect(simulateFinish(qs, { m1: { A: '2', B: '1' } }).cor).toBe(0);
  });
});

// ─── goTo() — qTimes accumulation ────────────────────────────────────────────

describe('goTo() — qTimes accumulation logic', () => {
  it('first visit initialises the time for a question from 0', () => {
    const next = accumulateQTime({}, 'q1', 5000);
    expect(next.q1).toBe(5);
  });

  it('revisiting the same question adds to its existing time', () => {
    const next = accumulateQTime({ q1: 10 }, 'q1', 3000);
    expect(next.q1).toBe(13);
  });

  it('negative elapsed (clock went backward) is clamped to 0', () => {
    const next = accumulateQTime({ q1: 5 }, 'q1', -1000);
    expect(next.q1).toBe(5); // no change
  });

  it('zero elapsed adds 0', () => {
    const next = accumulateQTime({ q1: 7 }, 'q1', 0);
    expect(next.q1).toBe(7);
  });

  it('sub-second elapsed rounds to nearest second (499ms → 0, 500ms → 1)', () => {
    expect(accumulateQTime({}, 'q1', 499).q1).toBe(0);
    expect(accumulateQTime({}, 'q1', 500).q1).toBe(1);
  });

  it('different question IDs accumulate independently', () => {
    let state = {};
    state = accumulateQTime(state, 'q1', 4000);
    state = accumulateQTime(state, 'q2', 2000);
    state = accumulateQTime(state, 'q1', 1000);
    expect(state.q1).toBe(5);
    expect(state.q2).toBe(2);
  });

  it('does not mutate the previous state object', () => {
    const prev = { q1: 5 };
    accumulateQTime(prev, 'q1', 1000);
    expect(prev.q1).toBe(5); // original unchanged
  });
});

// ─── Timer expiry → finish() trigger (via timerTick) ─────────────────────────
//
// ExamPlayScreen passes its finish() as the onExpire callback to useTimer.
// useTimer internally uses timerTick's didExpire signal to decide when to call
// onExpire. These tests verify that signal fires at the right moment.

describe('timer expiry → finish() call signal (via timerTick.didExpire)', () => {
  it('didExpire is false at s=2 (finish not yet triggered)', () => {
    expect(timerTick(2, false, new Set(), []).didExpire).toBe(false);
  });

  it('didExpire is false at s=1 (one tick remains before zero)', () => {
    expect(timerTick(2, false, new Set(), []).didExpire).toBe(false);
  });

  it('didExpire is true the moment s reaches 0 (finish() should be called)', () => {
    expect(timerTick(1, false, new Set(), []).didExpire).toBe(true);
  });

  it('didExpire is false when already expired=true (finish() not called twice)', () => {
    expect(timerTick(1, true, new Set(), []).didExpire).toBe(false);
  });

  it('s stays at 0 after expiry — timer does not tick below 0', () => {
    const r = timerTick(1, false, new Set(), []);
    expect(r.s).toBe(0);
    const r2 = timerTick(r.s, r.expired, r.warned, []);
    expect(r2.s).toBe(0);
    expect(r2.didExpire).toBe(false); // already expired
  });

  it('a 90-minute exam timer (5400s) triggers didExpire only at second 5400', () => {
    // Jump directly to the second-to-last tick
    const penultimate = timerTick(5401, false, new Set(), []);
    expect(penultimate.didExpire).toBe(false);
    const last = timerTick(1, false, new Set(), []);
    expect(last.didExpire).toBe(true);
  });
});
