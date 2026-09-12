import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { isAnswerCorrect, normalizeAnswer, numEquals } from '@/lib/mat-grading';

const HERE = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const EXAM_DIR = path.join(ROOT, 'content', 'simulator', 'mat', 'exams');

type Q = { id?: any; type?: string; sol?: any };

function examFiles(): string[] {
  return fs.readdirSync(EXAM_DIR).filter((f) => f.endsWith('.mjs')).sort();
}

async function loadExam(file: string): Promise<Q[]> {
  const mod: any = await import(url.pathToFileURL(path.join(EXAM_DIR, file)).href);
  return (mod.qs || []).filter((q: any) => q && typeof q === 'object');
}

/** Sve varijante točnog odgovora koje engine nudi za jedan zadatak. */
function answerVariants(q: Q): string[] {
  const sol = q.sol || {};
  const out: string[] = [];
  if (q.type === 'mc' && sol.cl && sol.cl !== '?') out.push(String(sol.cl));
  if (sol.ans !== undefined && sol.ans !== null) out.push(String(sol.ans));
  for (const a of sol.alt || []) if (a !== undefined && a !== null) out.push(String(a));
  // prazni alt zapisi su greška u podacima, ne mogu biti točan korisnikov odgovor
  return out.filter((v) => v.trim() !== '');
}

const GRADABLE = new Set(['mc', 'num', 'calc', 'sa', 'pa']);

describe('mat-grading: sol.ans i sol.alt iz stvarnih podataka', () => {
  const files = examFiles();

  it('pronalazi svih 70 ispita', () => {
    expect(files.length).toBe(70);
  });

  for (const file of files) {
    it(`${file}: svaki sol.ans i svaki alt prolazi kao točan`, async () => {
      const qs = await loadExam(file);
      const fails: string[] = [];
      let checked = 0;
      for (const q of qs) {
        if (!q.sol || !GRADABLE.has(String(q.type))) continue;
        for (const v of answerVariants(q)) {
          checked++;
          if (isAnswerCorrect(q, v) !== true) {
            fails.push(`${file} q${q.id} (${q.type}): ${JSON.stringify(v)}`);
          }
        }
      }
      expect(checked).toBeGreaterThan(0);
      expect(fails).toEqual([]);
    });
  }
});

describe('mat-grading: ručni slučajevi', () => {
  const cases: Array<[string, string, string, boolean]> = [
    // [tip, točan odgovor u podacima, korisnikov unos, očekivano]
    ['sa', '3', 'x = 3', true],
    ['sa', 'x = 3', '3', true],
    ['num', '3/4', '0,75', true],
    ['num', '0,75', '3/4', true],
    ['num', '-2', '−2', true],
    ['sa', '1,5', '1.5', true],
    ['sa', '2π', '2pi', true],
    ['num', '[FRAC:3|4]', '0.75', true],
    ['num', '375 g', '375', true],
    ['sa', '⟨3, 5⟩', '(3, 5)', true],
    ['num', '3', '4', false],
    ['sa', 'crveno', 'plavo', false],
    ['num', '100', '100,05', true], // unutar 1e-3 relativno
    ['num', '100', '101', false],
    ['sa', '24, 36, 54', '24; 36; 54', true],
    ['num', '20 000', '20,000', true],
  ];

  for (const [type, ans, input, expected] of cases) {
    it(`${type}: ${JSON.stringify(input)} vs ${JSON.stringify(ans)} → ${expected}`, () => {
      expect(isAnswerCorrect({ type, sol: { ans } }, input)).toBe(expected);
    });
  }

  it('normalizeAnswer kanonizira zapis', () => {
    expect(normalizeAnswer('x = 3')).toBe('3');
    expect(normalizeAnswer('y = 1,5')).toBe('1.5');
    expect(normalizeAnswer('−2')).toBe('-2');
    expect(normalizeAnswer('x²')).toBe('x^2');
    expect(normalizeAnswer('√2')).toBe('sqrt2');
    expect(normalizeAnswer('5,745 cm')).toBe('5.745');
    expect(normalizeAnswer('[FRAC:−8|5]')).toBe('-8/5');
    expect(normalizeAnswer('')).toBe('');
  });

  it('numEquals podnosi razlomke, zareze i toleranciju', () => {
    expect(numEquals('3/4', '0,75')).toBe(true);
    expect(numEquals('1,5', '1.5')).toBe(true);
    expect(numEquals('2', '2,0001')).toBe(true);
    expect(numEquals('2', '2,01')).toBe(false);
    expect(numEquals('', '')).toBe(false);
  });

  it('prazan odgovor nije točan', () => {
    expect(isAnswerCorrect({ type: 'sa', sol: { ans: '3' } }, '')).toBe(false);
    expect(isAnswerCorrect({ type: 'num', sol: { ans: '3' } }, '')).toBe(false);
  });

  it('proof i nepoznati tipovi vraćaju null', () => {
    expect(isAnswerCorrect({ type: 'proof', sol: { ans: 'dokaz' } }, 'dokaz')).toBe(null);
    expect(isAnswerCorrect({ type: 'text', sol: { ans: 'a' } }, 'a')).toBe(null);
    expect(isAnswerCorrect({ type: 'mc', sol: { cl: '?' } }, 'A')).toBe(null);
  });

  it('mc prihvaća zapise slova', () => {
    const q = { type: 'mc', sol: { cl: 'C' } };
    for (const v of ['C', 'c', 'C)', '(c)', 'C.']) {
      expect(isAnswerCorrect(q, v)).toBe(true);
    }
    expect(isAnswerCorrect(q, 'D')).toBe(false);
  });
});
