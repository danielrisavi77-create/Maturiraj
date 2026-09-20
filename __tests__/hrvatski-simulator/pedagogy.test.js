import { describe, it, expect } from 'vitest';
import { sm2Update, getDueReviews } from '../../app/discere/hrvatski/simulator/utils/pedagogy.js';

describe('sm2Update', () => {
  it('krivo (correct=false) resetira reps/interval, count++', () => {
    const entry = { ef: 2.5, interval: 7, reps: 3, count: 1 };
    const res = sm2Update(entry, false, 0);
    expect(res.reps).toBe(0);
    expect(res.interval).toBe(0);
    expect(res.count).toBe(2);
    expect(res.ef).toBeCloseTo(2.3);
  });

  it('quality < 3 tretira se kao neuspjeh iako je correct=true', () => {
    const entry = { ef: 2.5, interval: 7, reps: 3, count: 0 };
    const res = sm2Update(entry, true, 2);
    expect(res.reps).toBe(0);
    expect(res.interval).toBe(0);
    expect(res.count).toBe(1);
  });

  it('ef ne pada ispod 1.3 kod ponovljenih neuspjeha', () => {
    let entry = { ef: 1.35, interval: 0, reps: 0, count: 0 };
    entry = sm2Update(entry, false, 0);
    expect(entry.ef).toBe(1.3);
  });

  it('točno — prvi ponovljeni odgovor daje interval 1', () => {
    const res = sm2Update({ ef: 2.5, interval: 0, reps: 0, count: 1 }, true, 5);
    expect(res.reps).toBe(1);
    expect(res.interval).toBe(1);
  });

  it('točno — drugi ponovljeni odgovor daje interval 3', () => {
    const res = sm2Update({ ef: 2.5, interval: 1, reps: 1, count: 1 }, true, 5);
    expect(res.reps).toBe(2);
    expect(res.interval).toBe(3);
  });

  it('točno — treći ponovljeni odgovor daje interval 7', () => {
    const res = sm2Update({ ef: 2.5, interval: 3, reps: 2, count: 1 }, true, 5);
    expect(res.reps).toBe(3);
    expect(res.interval).toBe(7);
  });

  it('točno — četvrti ponovljeni odgovor daje interval 14', () => {
    const res = sm2Update({ ef: 2.5, interval: 7, reps: 3, count: 1 }, true, 5);
    expect(res.reps).toBe(4);
    expect(res.interval).toBe(14);
  });

  it('savladano (reps>=5 i ef>=2.3) vraća null', () => {
    const res = sm2Update({ ef: 2.5, interval: 14, reps: 4, count: 1 }, true, 5);
    expect(res).toBe(null);
  });

  it('nije savladano ako je ef ispod 2.3 unatoč 5+ ponavljanja', () => {
    const res = sm2Update({ ef: 2.29, interval: 14, reps: 4, count: 0 }, true, 3);
    expect(res).not.toBe(null);
    expect(res.reps).toBe(5);
  });

  it('count se ne spušta ispod 0 kod uzastopnih točnih odgovora', () => {
    const res = sm2Update({ ef: 2.0, interval: 3, reps: 2, count: 0 }, true, 4);
    expect(res.count).toBe(0);
  });
});

describe('getDueReviews', () => {
  it('prazan/nedostajući errorTracker vraća prazan niz', () => {
    expect(getDueReviews(null)).toEqual([]);
    expect(getDueReviews(undefined)).toEqual([]);
    expect(getDueReviews({})).toEqual([]);
  });

  it('unos bez nextReview je uvijek dospio', () => {
    const res = getDueReviews({ q1: { interval: 0 } });
    expect(res).toHaveLength(1);
    expect(res[0].key).toBe('q1');
  });

  it('unos s prošlim datumom je dospio', () => {
    const past = new Date(Date.now() - 5 * 86400000).toLocaleDateString('hr');
    const res = getDueReviews({ q1: { nextReview: past, interval: 0 } });
    expect(res).toHaveLength(1);
  });

  it('unos s budućim datumom nije dospio', () => {
    const future = new Date(Date.now() + 5 * 86400000).toLocaleDateString('hr');
    const res = getDueReviews({ q1: { nextReview: future, interval: 0 } });
    expect(res).toHaveLength(0);
  });

  it('unos s današnjim datumom je dospio', () => {
    const today = new Date().toLocaleDateString('hr');
    const res = getDueReviews({ q1: { nextReview: today, interval: 0 } });
    expect(res).toHaveLength(1);
  });

  it('sortira po intervalu (najmanji prvi)', () => {
    const past = new Date(Date.now() - 86400000).toLocaleDateString('hr');
    const res = getDueReviews({
      a: { nextReview: past, interval: 7 },
      b: { nextReview: past, interval: 1 },
      c: { nextReview: past, interval: 3 },
    });
    expect(res.map(r => r.key)).toEqual(['b', 'c', 'a']);
  });
});
