/**
 * scoring-gaps.test.js
 *
 * Covers the TEST COVERAGE GAPS identified in the QA audit for scoring.js:
 *   - updateStreak(): leap-year edge cases (Feb 28→29, Feb 29→Mar 1, non-leap Feb 28→Mar 1)
 *   - validateUserData(): errorTracker sanitization, bookmarks array filtering, totalExams edge cases
 *   - timerTick(): sequential 600→300 warn accumulation
 *
 * These tests complement the existing scoring.test.js without duplicating its cases.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  updateStreak,
  validateUserData,
  timerTick,
} from '../../lib/engleski-simulator/scoring.js';

// ─── updateStreak — leap-year edge cases ──────────────────────────────────────

describe('updateStreak — leap-year edge cases', () => {
  // Use noon UTC throughout to avoid DST boundary artefacts in any timezone.
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('Feb 28 → Feb 29 on a leap year counts as consecutive (streak increments)', () => {
    const today = new Date('2024-02-29T12:00:00.000Z');
    vi.setSystemTime(today);
    const result = updateStreak({
      streak: 5,
      lastDate: new Date('2024-02-28T12:00:00.000Z').toDateString(),
    });
    expect(result.streak).toBe(6);
    expect(result.lastDate).toBe(today.toDateString());
  });

  it('Feb 29 → Mar 1 on a leap year counts as consecutive (streak increments)', () => {
    const today = new Date('2024-03-01T12:00:00.000Z');
    vi.setSystemTime(today);
    const result = updateStreak({
      streak: 3,
      lastDate: new Date('2024-02-29T12:00:00.000Z').toDateString(),
    });
    expect(result.streak).toBe(4);
    expect(result.lastDate).toBe(today.toDateString());
  });

  it('Feb 28 → Mar 1 on a non-leap year counts as consecutive (no Feb 29 in 2025)', () => {
    const today = new Date('2025-03-01T12:00:00.000Z');
    vi.setSystemTime(today);
    const result = updateStreak({
      streak: 7,
      lastDate: new Date('2025-02-28T12:00:00.000Z').toDateString(),
    });
    expect(result.streak).toBe(8);
  });

  it('Feb 27 → Mar 1 on a non-leap year is a 2-day gap and resets streak', () => {
    const today = new Date('2025-03-01T12:00:00.000Z');
    vi.setSystemTime(today);
    const result = updateStreak({
      streak: 10,
      lastDate: new Date('2025-02-27T12:00:00.000Z').toDateString(),
    });
    expect(result.streak).toBe(1);
  });

  it('same day on Feb 29 returns the original object reference unchanged', () => {
    const today = new Date('2024-02-29T12:00:00.000Z');
    vi.setSystemTime(today);
    const data = { streak: 4, lastDate: today.toDateString() };
    expect(updateStreak(data)).toBe(data);
  });
});

// ─── validateUserData — errorTracker sanitization ────────────────────────────

describe('validateUserData — errorTracker', () => {
  it('preserves valid errorTracker entries unchanged', () => {
    const r = validateUserData({ errorTracker: { q1: 3, q2: 0 } });
    expect(r.errorTracker).toEqual({ q1: 3, q2: 0 });
  });

  it('drops errorTracker keys longer than 200 characters', () => {
    const longKey = 'a'.repeat(201);
    const r = validateUserData({ errorTracker: { [longKey]: 5 } });
    expect(Object.keys(r.errorTracker)).toHaveLength(0);
  });

  it('drops entries whose value is a string', () => {
    const r = validateUserData({ errorTracker: { q1: 'oops' } });
    expect(Object.keys(r.errorTracker)).toHaveLength(0);
  });

  it('drops entries whose value is null, undefined, or an object', () => {
    const r = validateUserData({ errorTracker: { q1: null, q2: undefined, q3: {} } });
    expect(Object.keys(r.errorTracker)).toHaveLength(0);
  });

  it('drops entries whose value is Infinity or NaN (non-finite guards)', () => {
    const r = validateUserData({ errorTracker: { q1: Infinity, q2: NaN, q3: -Infinity } });
    expect(Object.keys(r.errorTracker)).toHaveLength(0);
  });

  it('drops entries with negative values', () => {
    const r = validateUserData({ errorTracker: { q1: -1 } });
    expect(Object.keys(r.errorTracker)).toHaveLength(0);
  });

  it('clamps errorTracker values that exceed 9999', () => {
    const r = validateUserData({ errorTracker: { q1: 50000, q2: 10000 } });
    expect(r.errorTracker.q1).toBe(9999);
    expect(r.errorTracker.q2).toBe(9999);
  });

  it('value of 9999 is kept as-is (boundary)', () => {
    const r = validateUserData({ errorTracker: { q1: 9999 } });
    expect(r.errorTracker.q1).toBe(9999);
  });

  it('floors float errorTracker values', () => {
    const r = validateUserData({ errorTracker: { q1: 3.9, q2: 0.1 } });
    expect(r.errorTracker.q1).toBe(3);
    expect(r.errorTracker.q2).toBe(0);
  });

  it('returns empty errorTracker when field is missing', () => {
    expect(validateUserData({}).errorTracker).toEqual({});
  });

  it('returns empty errorTracker when field is an array (not a keyed object)', () => {
    expect(validateUserData({ errorTracker: [] }).errorTracker).toEqual({});
  });

  it('returns empty errorTracker when field is a string', () => {
    expect(validateUserData({ errorTracker: 'bad' }).errorTracker).toEqual({});
  });
});

// ─── validateUserData — bookmarks array ──────────────────────────────────────

describe('validateUserData — bookmarks array', () => {
  it('returns empty array when bookmarks is absent', () => {
    expect(validateUserData({}).bookmarks).toEqual([]);
  });

  it('returns empty array when bookmarks field is not an array', () => {
    expect(validateUserData({ bookmarks: {} }).bookmarks).toEqual([]);
    expect(validateUserData({ bookmarks: 'x' }).bookmarks).toEqual([]);
  });

  it('filters out null entries', () => {
    expect(validateUserData({ bookmarks: [null, null] }).bookmarks).toEqual([]);
  });

  it('filters out primitive (string/number/boolean) entries', () => {
    const r = validateUserData({ bookmarks: ['str', 42, true] });
    expect(r.bookmarks).toEqual([]);
  });

  it('keeps valid plain-object entries', () => {
    const entry = { qid: 'q1', examKey: 'k', examLabel: 'L', q: 'Q?' };
    const r = validateUserData({ bookmarks: [entry] });
    expect(r.bookmarks).toHaveLength(1);
    expect(r.bookmarks[0]).toBe(entry);
  });

  it('filters out nested-array entries (arrays are objects but should be excluded)', () => {
    const r = validateUserData({ bookmarks: [[1, 2, 3]] });
    expect(r.bookmarks).toEqual([]);
  });

  it('truncates bookmarks array at 500 entries', () => {
    const items = Array.from({ length: 600 }, (_, i) => ({ qid: String(i) }));
    expect(validateUserData({ bookmarks: items }).bookmarks).toHaveLength(500);
  });
});

// ─── validateUserData — totalExams edge cases ────────────────────────────────

describe('validateUserData — totalExams', () => {
  it('accepts valid integer 0', () => expect(validateUserData({ totalExams: 0 }).totalExams).toBe(0));
  it('accepts valid positive integer', () => expect(validateUserData({ totalExams: 42 }).totalExams).toBe(42));
  it('floors fractional totalExams', () => expect(validateUserData({ totalExams: 9.9 }).totalExams).toBe(9));
  it('returns 0 for negative totalExams', () => expect(validateUserData({ totalExams: -5 }).totalExams).toBe(0));
  it('returns 0 for non-number totalExams (string)', () => expect(validateUserData({ totalExams: '5' }).totalExams).toBe(0));
  it('returns 0 when totalExams is absent', () => expect(validateUserData({}).totalExams).toBe(0));
});

// ─── validateUserData — additional primitive inputs ───────────────────────────

describe('validateUserData — undefined/boolean input', () => {
  it('handles undefined input (same path as null: !p is true)', () => {
    const r = validateUserData(undefined);
    expect(r.xp).toBe(0);
    expect(r.streak).toBe(0);
    expect(r.history).toEqual([]);
  });

  it('handles boolean false input', () => {
    const r = validateUserData(false);
    expect(r.xp).toBe(0);
  });

  it('handles a number input', () => {
    const r = validateUserData(42);
    expect(r.xp).toBe(0);
  });
});

// ─── timerTick — sequential warn accumulation ────────────────────────────────

describe('timerTick — sequential 600→300 warn accumulation', () => {
  it('fires warn=600 when ticking from 601 to 600', () => {
    const r = timerTick(601, false, new Set(), [600, 300]);
    expect(r.s).toBe(600);
    expect(r.didWarn).toBe(600);
    expect(r.warned.has(600)).toBe(true);
  });

  it('fires warn=300 on tick from 301→300 after 600 was already warned', () => {
    const warned600 = new Set([600]);
    const r = timerTick(301, false, warned600, [600, 300]);
    expect(r.s).toBe(300);
    expect(r.didWarn).toBe(300);
    expect(r.warned.has(600)).toBe(true);
    expect(r.warned.has(300)).toBe(true);
  });

  it('does not re-fire 600 warn once it is in the warned set', () => {
    const r = timerTick(601, false, new Set([600]), [600, 300]);
    expect(r.didWarn).toBeNull();
  });

  it('does not re-fire 300 warn once it is in the warned set', () => {
    const r = timerTick(301, false, new Set([600, 300]), [600, 300]);
    expect(r.didWarn).toBeNull();
  });

  it('no warn fires between thresholds (e.g. s=450)', () => {
    const r = timerTick(451, false, new Set([600]), [600, 300]);
    expect(r.didWarn).toBeNull();
  });
});
