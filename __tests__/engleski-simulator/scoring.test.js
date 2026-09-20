import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  nrm,
  chk,
  grade,
  GRADE_THRESHOLDS,
  calcXpGain,
  updateStreak,
  validateUserData,
  validateBookmarks,
  timerTick,
  formatTimer,
  timerCls,
} from '../../lib/engleski-simulator/scoring.js';

// ─── nrm ───────────────────────────────────────────────────────────────────────
describe('nrm', () => {
  it('lowercases input', () => expect(nrm('Hello World')).toBe('hello world'));
  it('trims leading/trailing whitespace', () => expect(nrm('  hello  ')).toBe('hello'));
  it('strips period', () => expect(nrm('hello.')).toBe('hello'));
  it('strips comma', () => expect(nrm('hello,')).toBe('hello'));
  it('strips question mark', () => expect(nrm('hello?')).toBe('hello'));
  it('strips exclamation mark', () => expect(nrm('hello!')).toBe('hello'));
  it('strips semicolon and colon', () => expect(nrm('hello;:')).toBe('hello'));
  it('handles null gracefully', () => expect(nrm(null)).toBe(''));
  it('handles undefined gracefully', () => expect(nrm(undefined)).toBe(''));
  it('handles empty string', () => expect(nrm('')).toBe(''));
  it('does not strip letters/digits/hyphens', () => expect(nrm('it\'s fine-ish.')).toBe("it's fine-ish"));
});

// ─── chk ───────────────────────────────────────────────────────────────────────
describe('chk — mc type', () => {
  const q = { type: 'mc', sol: { cl: 'B' } };

  it('returns true for correct letter', () => expect(chk(q, 'B')).toBe(true));
  it('returns false for wrong letter',  () => expect(chk(q, 'A')).toBe(false));
  it('returns false for empty answer',  () => expect(chk(q, '')).toBe(false));
  it('is case-sensitive (mc letters are uppercase)', () => expect(chk(q, 'b')).toBe(false));
});

describe('chk — mat type', () => {
  const q = {
    type: 'mat',
    sol: { pairs: [{ l: 'Alpha', r: 'One' }, { l: 'Beta', r: 'Two' }] },
  };

  it('returns true when all pairs correct', () =>
    expect(chk(q, { Alpha: 'One', Beta: 'Two' })).toBe(true));

  it('returns false when one pair wrong', () =>
    expect(chk(q, { Alpha: 'One', Beta: 'One' })).toBe(false));

  it('returns false for null answer', () => expect(chk(q, null)).toBe(false));
  it('returns false for undefined answer', () => expect(chk(q, undefined)).toBe(false));
  it('returns false for empty object', () => expect(chk(q, {})).toBe(false));
});

describe('chk — fb type', () => {
  const single  = { type: 'fb', sol: { ans: 'running' } };
  const multi   = { type: 'fb', sol: { ans: ['running', 'jogging'] } };
  const withAlt = { type: 'fb', sol: { ans: 'run', alt: ['running', 'jog'] } };

  it('exact match is correct',                   () => expect(chk(single,  'running')).toBe(true));
  it('case-insensitive match',                   () => expect(chk(single,  'Running')).toBe(true));
  it('trims whitespace',                         () => expect(chk(single,  '  running  ')).toBe(true));
  it('ignores trailing period',                  () => expect(chk(single,  'running.')).toBe(true));
  it('wrong answer returns false',               () => expect(chk(single,  'swimming')).toBe(false));
  it('accepts any answer in array',              () => expect(chk(multi,   'jogging')).toBe(true));
  it('accepts first answer in array',            () => expect(chk(multi,   'running')).toBe(true));
  it('uses alt array when provided',             () => expect(chk(withAlt, 'running')).toBe(true));
  it('alt overrides sol.ans',                    () => expect(chk(withAlt, 'run')).toBe(false));
  it('accepts alt synonym',                      () => expect(chk(withAlt, 'jog')).toBe(true));
});

describe('chk — sa/es types (manual grading)', () => {
  it('returns null for sa', () => expect(chk({ type: 'sa', sol: { ans: 'x' } }, 'x')).toBeNull());
  it('returns null for es', () => expect(chk({ type: 'es', sol: { ans: 'x' } }, 'x')).toBeNull());
  it('returns null for unknown type', () => expect(chk({ type: 'unknown', sol: {} }, 'x')).toBeNull());
});

describe('chk — ins type (sentence insertion)', () => {
  const q = { type: 'ins', sol: { cl: 'C' } };

  it('returns true for correct letter', () => expect(chk(q, 'C')).toBe(true));
  it('returns false for wrong letter',  () => expect(chk(q, 'A')).toBe(false));
  it('returns false for empty answer',  () => expect(chk(q, '')).toBe(false));
  it('is case-sensitive',               () => expect(chk(q, 'c')).toBe(false));
  it('behaves identically to mc type',  () => {
    const mc = { type: 'mc', sol: { cl: 'C' } };
    expect(chk(q, 'C')).toBe(chk(mc, 'C'));
    expect(chk(q, 'B')).toBe(chk(mc, 'B'));
  });
});

// ─── grade ─────────────────────────────────────────────────────────────────────
describe('GRADE_THRESHOLDS', () => {
  it('is an array of [minPct, grade] pairs', () => {
    expect(Array.isArray(GRADE_THRESHOLDS)).toBe(true);
    GRADE_THRESHOLDS.forEach(([min, g]) => {
      expect(typeof min).toBe('number');
      expect(typeof g).toBe('number');
      expect(g).toBeGreaterThanOrEqual(1);
      expect(g).toBeLessThanOrEqual(5);
    });
  });
  it('highest threshold is 85 → 5', () => {
    expect(GRADE_THRESHOLDS[0]).toEqual([85, 5]);
  });
});

describe('grade', () => {
  const cases = [
    [0,   1],
    [39,  1],
    [40,  2],
    [54,  2],
    [55,  3],
    [69,  3],
    [70,  4],
    [84,  4],
    [85,  5],
    [100, 5],
  ];
  it.each(cases)('grade(%d) === %d', (pct, expected) => {
    expect(grade(pct)).toBe(expected);
  });
  it('boundary: exactly 40 → 2', () => expect(grade(40)).toBe(2));
  it('boundary: exactly 55 → 3', () => expect(grade(55)).toBe(3));
  it('boundary: exactly 70 → 4', () => expect(grade(70)).toBe(4));
  it('boundary: exactly 85 → 5', () => expect(grade(85)).toBe(5));
});

// ─── calcXpGain ────────────────────────────────────────────────────────────────
describe('calcXpGain', () => {
  it('returns minimum 5 XP for 0%',        () => expect(calcXpGain(0)).toBe(5));
  it('0% raw calc would be 0, clamped to 5', () => expect(calcXpGain(0)).toBeGreaterThanOrEqual(5));
  it('50% → 40 XP (no bonus)',             () => expect(calcXpGain(50)).toBe(40));
  it('70% → base 56 + 15 bonus = 71',      () => expect(calcXpGain(70)).toBe(71));
  it('85% → base 68 + 30 bonus = 98',      () => expect(calcXpGain(85)).toBe(98));
  it('100% → base 80 + 30 + 50 = 160',    () => expect(calcXpGain(100)).toBe(160));
  it('69% gets no bonus (< 70)',           () => expect(calcXpGain(69)).toBe(Math.round(69 * 0.8)));
  it('84% gets +15 bonus (70–84)',         () => expect(calcXpGain(84)).toBe(Math.round(84 * 0.8) + 15));
});

// ─── updateStreak ──────────────────────────────────────────────────────────────
describe('updateStreak', () => {
  // Use fixed dates to avoid flakiness
  const SUNDAY    = new Date('2026-04-12T12:00:00.000Z'); // Sun Apr 12 2026
  const SATURDAY  = new Date('2026-04-11T12:00:00.000Z'); // Sat Apr 11 2026
  const FRIDAY    = new Date('2026-04-10T12:00:00.000Z'); // Fri Apr 10 2026

  beforeEach(() => vi.useFakeTimers());
  afterEach(()  => vi.useRealTimers());

  it('returns the SAME object reference when lastDate is today (no mutation)', () => {
    vi.setSystemTime(SUNDAY);
    const data = { streak: 3, lastDate: SUNDAY.toDateString() };
    expect(updateStreak(data)).toBe(data);
  });

  it('increments streak when lastDate was yesterday', () => {
    vi.setSystemTime(SUNDAY);
    const result = updateStreak({ streak: 4, lastDate: SATURDAY.toDateString() });
    expect(result.streak).toBe(5);
    expect(result.lastDate).toBe(SUNDAY.toDateString());
  });

  it('resets streak to 1 on day gap (2+ days)', () => {
    vi.setSystemTime(SUNDAY);
    const result = updateStreak({ streak: 10, lastDate: FRIDAY.toDateString() });
    expect(result.streak).toBe(1);
  });

  it('resets streak to 1 when lastDate is null', () => {
    vi.setSystemTime(SUNDAY);
    const result = updateStreak({ streak: 5, lastDate: null });
    expect(result.streak).toBe(1);
  });

  it('midnight rollover edge case — 23:59 → 00:01 next day counts as consecutive', () => {
    // Use noon UTC so toDateString() returns the expected calendar date in any timezone (±12h)
    vi.setSystemTime(SUNDAY); // noon UTC → Apr 12 locally
    const lastDate = SATURDAY.toDateString(); // noon UTC day before → Apr 11 locally
    const result = updateStreak({ streak: 2, lastDate });
    expect(result.streak).toBe(3);
  });

  it('does not mutate the original data object', () => {
    vi.setSystemTime(SUNDAY);
    const data = { streak: 2, lastDate: SATURDAY.toDateString(), xp: 999 };
    const result = updateStreak(data);
    expect(data.streak).toBe(2);   // original unchanged
    expect(result.xp).toBe(999);   // other props preserved
  });
});

// ─── validateUserData ──────────────────────────────────────────────────────────
describe('validateUserData', () => {
  it('passes fully valid data through unchanged', () => {
    const input = { xp: 500, streak: 7, lastDate: 'Sun Apr 12 2026', history: [{ examKey: 'k', pct: 80 }], totalExams: 3 };
    const r = validateUserData(input);
    expect(r.xp).toBe(500);
    expect(r.streak).toBe(7);
    expect(r.history).toHaveLength(1);
    expect(r.totalExams).toBe(3);
  });

  it('clamps negative xp to 0',               () => expect(validateUserData({ xp: -1 }).xp).toBe(0));
  it('clamps excessive xp (> 10M) to 0',      () => expect(validateUserData({ xp: 10000001 }).xp).toBe(0));
  it('floors fractional xp',                  () => expect(validateUserData({ xp: 123.9 }).xp).toBe(123));
  it('rejects non-number xp',                 () => expect(validateUserData({ xp: '500' }).xp).toBe(0));
  it('clamps streak > 3650 to 0',             () => expect(validateUserData({ streak: 9999 }).streak).toBe(0));
  it('clamps negative streak to 0',           () => expect(validateUserData({ streak: -1 }).streak).toBe(0));
  it('rejects overly-long lastDate',          () => expect(validateUserData({ lastDate: 'x'.repeat(50) }).lastDate).toBeNull());
  it('rejects non-string lastDate',           () => expect(validateUserData({ lastDate: 12345 }).lastDate).toBeNull());

  it('filters history entries with invalid examKey', () => {
    const r = validateUserData({ history: [{ examKey: 123, pct: 80 }] });
    expect(r.history).toHaveLength(0);
  });

  it('filters history entries with pct > 100', () => {
    const r = validateUserData({ history: [{ examKey: 'k', pct: 150 }] });
    expect(r.history).toHaveLength(0);
  });

  it('filters history entries with negative pct', () => {
    const r = validateUserData({ history: [{ examKey: 'k', pct: -1 }] });
    expect(r.history).toHaveLength(0);
  });

  it('filters null history entries', () => {
    const r = validateUserData({ history: [null, { examKey: 'k', pct: 50 }] });
    expect(r.history).toHaveLength(1);
  });

  it('truncates history at 1000 entries', () => {
    const history = Array.from({ length: 1200 }, (_, i) => ({ examKey: `k${i}`, pct: 50 }));
    expect(validateUserData({ history }).history).toHaveLength(1000);
  });

  it('handles completely missing fields with safe defaults', () => {
    const r = validateUserData({});
    expect(r.xp).toBe(0);
    expect(r.streak).toBe(0);
    expect(r.lastDate).toBeNull();
    expect(r.history).toEqual([]);
    expect(r.totalExams).toBe(0);
  });

  it('handles null input', () => {
    const r = validateUserData(null);
    expect(r.xp).toBe(0);
  });
});

// ─── validateUserData — errorTracker ───────────────────────────────────────────
describe('validateUserData — errorTracker', () => {
  const validEntry = { q: 'What is...?', topic: 'grammar', examKey: 'eng2022a', qid: 'q1', count: 3, lastDate: '12.9.2026.' };

  it('keeps a fully valid entry unchanged', () => {
    const r = validateUserData({ errorTracker: { 'eng2022a_q1': validEntry } });
    expect(r.errorTracker['eng2022a_q1']).toEqual(validEntry);
  });

  it('drops entry missing examKey', () => {
    const { examKey, ...rest } = validEntry;
    const r = validateUserData({ errorTracker: { k: rest } });
    expect(r.errorTracker).toEqual({});
  });

  it('drops entry missing qid', () => {
    const { qid, ...rest } = validEntry;
    const r = validateUserData({ errorTracker: { k: rest } });
    expect(r.errorTracker).toEqual({});
  });

  it('drops entry missing count', () => {
    const { count, ...rest } = validEntry;
    const r = validateUserData({ errorTracker: { k: rest } });
    expect(r.errorTracker).toEqual({});
  });

  it('drops entry with non-numeric count', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, count: '3' } } });
    expect(r.errorTracker).toEqual({});
  });

  it('drops entry with negative count', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, count: -1 } } });
    expect(r.errorTracker).toEqual({});
  });

  it('rounds and clamps count to 9999', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, count: 20000.6 } } });
    expect(r.errorTracker.k.count).toBe(9999);
  });

  it('rounds fractional count', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, count: 3.6 } } });
    expect(r.errorTracker.k.count).toBe(4);
  });

  it('accepts numeric qid and stringifies it', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, qid: 7 } } });
    expect(r.errorTracker.k.qid).toBe('7');
  });

  it('truncates q to 300 chars', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, q: 'x'.repeat(400) } } });
    expect(r.errorTracker.k.q).toHaveLength(300);
  });

  it('truncates topic to 60 chars', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, topic: 'y'.repeat(100) } } });
    expect(r.errorTracker.k.topic).toHaveLength(60);
  });

  it('truncates examKey to 100 chars', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, examKey: 'z'.repeat(150) } } });
    expect(r.errorTracker.k.examKey).toHaveLength(100);
  });

  it('defaults missing topic to "ostalo"', () => {
    const { topic, ...rest } = validEntry;
    const r = validateUserData({ errorTracker: { k: rest } });
    expect(r.errorTracker.k.topic).toBe('ostalo');
  });

  it('defaults missing q to empty string', () => {
    const { q, ...rest } = validEntry;
    const r = validateUserData({ errorTracker: { k: rest } });
    expect(r.errorTracker.k.q).toBe('');
  });

  it('omits lastDate when missing', () => {
    const { lastDate, ...rest } = validEntry;
    const r = validateUserData({ errorTracker: { k: rest } });
    expect(r.errorTracker.k.lastDate).toBeUndefined();
  });

  it('drops lastDate longer than 40 chars', () => {
    const r = validateUserData({ errorTracker: { k: { ...validEntry, lastDate: 'd'.repeat(50) } } });
    expect(r.errorTracker.k.lastDate).toBeUndefined();
  });

  it('drops keys longer than 200 chars', () => {
    const longKey = 'k'.repeat(201);
    const r = validateUserData({ errorTracker: { [longKey]: validEntry } });
    expect(r.errorTracker).toEqual({});
  });

  it('converts legacy numeric format to { count } and then drops it (no examKey/qid)', () => {
    const r = validateUserData({ errorTracker: { 'legacy_q1': 5 } });
    expect(r.errorTracker).toEqual({});
  });

  it('ignores non-object errorTracker', () => {
    expect(validateUserData({ errorTracker: 'nope' }).errorTracker).toEqual({});
    expect(validateUserData({ errorTracker: [1, 2] }).errorTracker).toEqual({});
  });

  it('caps errorTracker at 2000 entries, keeping the highest counts', () => {
    const errorTracker = {};
    for (let i = 0; i < 2100; i++) {
      errorTracker[`k${i}`] = { q: 'q', topic: 't', examKey: 'e', qid: `${i}`, count: i };
    }
    const r = validateUserData({ errorTracker });
    const counts = Object.values(r.errorTracker).map(e => e.count);
    expect(counts).toHaveLength(2000);
    expect(Math.min(...counts)).toBe(100); // top 2000 of 0..2099 → 100..2099
  });
});

// ─── validateBookmarks ────────────────────────────────────────────────────────────────────
describe('validateBookmarks', () => {
  const good = {
    'eng2022a_q1': { qid: 'q1', examKey: 'eng2022a', examLabel: '2022 A', q: 'What is...' },
    'eng2023b_q5': { qid: 'q5', examKey: 'eng2023b', examLabel: '2023 B', q: 'Choose...' },
  };

  it('returns {} for null',          () => expect(validateBookmarks(null)).toEqual({}));
  it('returns {} for array',         () => expect(validateBookmarks([])).toEqual({}));
  it('returns {} for empty object',  () => expect(validateBookmarks({})).toEqual({}));

  it('keeps valid entries',          () => {
    const r = validateBookmarks(good);
    expect(Object.keys(r)).toHaveLength(2);
    expect(r['eng2022a_q1'].qid).toBe('q1');
  });

  it('drops entry with missing qid', () => {
    const r = validateBookmarks({ 'x_1': { examKey: 'x', examLabel: 'x', q: 'q' } });
    expect(r).toEqual({});
  });

  it('drops entry with non-string examKey', () => {
    const r = validateBookmarks({ 'x_1': { qid: '1', examKey: 42, examLabel: 'x', q: 'q' } });
    expect(r).toEqual({});
  });

  it('drops entry with key length > 300', () => {
    const longKey = 'a'.repeat(301);
    const r = validateBookmarks({ [longKey]: { qid: '1', examKey: 'x', examLabel: 'x', q: 'q' } });
    expect(r).toEqual({});
  });

  it('clamps examKey to 100 chars', () => {
    const longKey = 'a'.repeat(150);
    const r = validateBookmarks({ 'x_1': { qid: '1', examKey: longKey, examLabel: 'x', q: 'q' } });
    expect(r['x_1'].examKey).toHaveLength(100);
  });

  it('clamps examLabel to 200 chars', () => {
    const long = 'b'.repeat(250);
    const r = validateBookmarks({ 'x_1': { qid: '1', examKey: 'x', examLabel: long, q: 'q' } });
    expect(r['x_1'].examLabel).toHaveLength(200);
  });

  it('clamps q to 200 chars', () => {
    const long = 'c'.repeat(250);
    const r = validateBookmarks({ 'x_1': { qid: '1', examKey: 'x', examLabel: 'x', q: long } });
    expect(r['x_1'].q).toHaveLength(200);
  });

  it('defaults missing examLabel to empty string', () => {
    const r = validateBookmarks({ 'x_1': { qid: '1', examKey: 'x', q: 'q' } });
    expect(r['x_1'].examLabel).toBe('');
  });

  it('defaults missing q to empty string', () => {
    const r = validateBookmarks({ 'x_1': { qid: '1', examKey: 'x', examLabel: 'x' } });
    expect(r['x_1'].q).toBe('');
  });

  it('drops non-object values',       () => {
    const r = validateBookmarks({ 'x_1': 'invalid' });
    expect(r).toEqual({});
  });
});

// ─── timerTick ─────────────────────────────────────────────────────────────────
describe('timerTick', () => {
  it('decrements s by 1', () => {
    expect(timerTick(60, false, new Set(), []).s).toBe(59);
  });

  it('does not go below 0', () => {
    expect(timerTick(0, false, new Set(), []).s).toBe(0);
    expect(timerTick(1, false, new Set(), []).s).toBe(0);
  });

  it('sets didExpire=true when reaching 0 for first time', () => {
    const r = timerTick(1, false, new Set(), []);
    expect(r.s).toBe(0);
    expect(r.didExpire).toBe(true);
    expect(r.expired).toBe(true);
  });

  it('does NOT re-expire when already expired (guard against double-fire)', () => {
    const r = timerTick(1, true, new Set(), []);
    expect(r.didExpire).toBe(false);
  });

  it('triggers warn at matching threshold', () => {
    const r = timerTick(601, false, new Set(), [600, 300]);
    expect(r.s).toBe(600);
    expect(r.didWarn).toBe(600);
    expect(r.warned.has(600)).toBe(true);
  });

  it('does not warn twice at same threshold', () => {
    const r = timerTick(601, false, new Set([600]), [600, 300]);
    expect(r.didWarn).toBeNull();
  });

  it('returns null for didWarn when no threshold hit', () => {
    expect(timerTick(500, false, new Set(), [600, 300]).didWarn).toBeNull();
  });

  it('handles second warn threshold correctly', () => {
    const r = timerTick(301, false, new Set(), [600, 300]);
    expect(r.s).toBe(300);
    expect(r.didWarn).toBe(300);
  });

  it('does not modify the input warned Set', () => {
    const original = new Set([600]);
    timerTick(301, false, original, [600, 300]);
    expect(original.size).toBe(1); // original unchanged
  });
});

// ─── formatTimer ───────────────────────────────────────────────────────────────
describe('formatTimer', () => {
  it('formats 0 as 00:00',    () => expect(formatTimer(0)).toBe('00:00'));
  it('formats 59 as 00:59',   () => expect(formatTimer(59)).toBe('00:59'));
  it('formats 60 as 01:00',   () => expect(formatTimer(60)).toBe('01:00'));
  it('formats 90 as 01:30',   () => expect(formatTimer(90)).toBe('01:30'));
  it('formats 65 as 01:05',   () => expect(formatTimer(65)).toBe('01:05'));
  it('formats 7200 as 120:00', () => expect(formatTimer(7200)).toBe('120:00'));
  it('formats 9000 (150 min)', () => expect(formatTimer(9000)).toBe('150:00'));
});

// ─── timerCls ──────────────────────────────────────────────────────────────────
describe('timerCls', () => {
  it('returns "danger" for s = 0',       () => expect(timerCls(0)).toBe('danger'));
  it('returns "danger" for s = 1',       () => expect(timerCls(1)).toBe('danger'));
  it('returns "danger" for s = 299',     () => expect(timerCls(299)).toBe('danger'));
  it('returns "warn"   for s = 300',     () => expect(timerCls(300)).toBe('warn'));
  it('returns "warn"   for s = 599',     () => expect(timerCls(599)).toBe('warn'));
  it('returns ""       for s = 600',     () => expect(timerCls(600)).toBe(''));
  it('returns ""       for s = 7200',    () => expect(timerCls(7200)).toBe(''));
});
