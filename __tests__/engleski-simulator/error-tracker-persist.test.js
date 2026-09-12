import { describe, it, expect } from 'vitest';
import { validateUserData } from '../../lib/engleski-simulator/scoring.js';

// Simulira spremanje/učitavanje kroz localStorage (JSON.stringify/parse) kako
// aplikacija stvarno radi u EngleskiSimulator.js.
function roundTrip(userData) {
  return validateUserData(JSON.parse(JSON.stringify(userData)));
}

describe('errorTracker JSON round-trip (localStorage persistence)', () => {
  it('preserves entries in the shape onExamDone actually saves', () => {
    const userData = {
      xp: 100,
      streak: 2,
      lastDate: '12.9.2026.',
      history: [],
      totalExams: 1,
      errorTracker: {
        'eng2022a_q1': { q: 'Choose the correct form.', topic: 'grammar', examKey: 'eng2022a', qid: 'q1', count: 2, lastDate: '12.9.2026.' },
        'eng2022a_q7': { q: 'Fill in the blank.', topic: 'vocabulary', examKey: 'eng2022a', qid: 7, count: 1, lastDate: '11.9.2026.' },
      },
      bookmarks: [],
    };

    const r = roundTrip(userData);

    expect(r.errorTracker['eng2022a_q1']).toEqual({
      q: 'Choose the correct form.',
      topic: 'grammar',
      examKey: 'eng2022a',
      qid: 'q1',
      count: 2,
      lastDate: '12.9.2026.',
    });
    // numeric qid persisted through JSON stays numeric, sanitizer stringifies it
    expect(r.errorTracker['eng2022a_q7']).toEqual({
      q: 'Fill in the blank.',
      topic: 'vocabulary',
      examKey: 'eng2022a',
      qid: '7',
      count: 1,
      lastDate: '11.9.2026.',
    });
  });

  it('preserves an entry without lastDate (fresh mistake, not yet re-answered)', () => {
    const userData = {
      errorTracker: {
        'eng2023b_q2': { q: 'Match the pairs.', topic: 'ostalo', examKey: 'eng2023b', qid: 'q2', count: 1 },
      },
    };
    const r = roundTrip(userData);
    expect(r.errorTracker['eng2023b_q2'].count).toBe(1);
    expect(r.errorTracker['eng2023b_q2'].lastDate).toBeUndefined();
  });

  it('rejects tampered entry: count as string', () => {
    const r = roundTrip({ errorTracker: { k: { q: 'q', topic: 't', examKey: 'e', qid: 'q1', count: '5' } } });
    expect(r.errorTracker).toEqual({});
  });

  it('rejects tampered entry: negative count', () => {
    const r = roundTrip({ errorTracker: { k: { q: 'q', topic: 't', examKey: 'e', qid: 'q1', count: -3 } } });
    expect(r.errorTracker).toEqual({});
  });

  it('rejects tampered entry: missing examKey', () => {
    const r = roundTrip({ errorTracker: { k: { q: 'q', topic: 't', qid: 'q1', count: 2 } } });
    expect(r.errorTracker).toEqual({});
  });

  it('rejects tampered entry: missing qid', () => {
    const r = roundTrip({ errorTracker: { k: { q: 'q', topic: 't', examKey: 'e', count: 2 } } });
    expect(r.errorTracker).toEqual({});
  });

  it('rejects tampered entry: key longer than 200 chars', () => {
    const longKey = 'k'.repeat(250);
    const r = roundTrip({ errorTracker: { [longKey]: { q: 'q', topic: 't', examKey: 'e', qid: 'q1', count: 2 } } });
    expect(r.errorTracker).toEqual({});
  });

  it('treats legacy numeric errorTracker values (old format) as unusable and drops them', () => {
    const r = roundTrip({ errorTracker: { 'oldkey_1': 4, 'oldkey_2': 0 } });
    expect(r.errorTracker).toEqual({});
  });

  it('keeps multiple valid entries side by side after round-trip', () => {
    const errorTracker = {};
    for (let i = 0; i < 10; i++) {
      errorTracker[`eng_q${i}`] = { q: `Question ${i}`, topic: 'grammar', examKey: 'eng', qid: `q${i}`, count: i + 1, lastDate: '1.1.2026.' };
    }
    const r = roundTrip({ errorTracker });
    expect(Object.keys(r.errorTracker)).toHaveLength(10);
    expect(r.errorTracker['eng_q5'].count).toBe(6);
  });
});
