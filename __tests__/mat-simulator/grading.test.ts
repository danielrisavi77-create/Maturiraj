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

/** Prvi broj bilo gdje u normaliziranom zapisu — ono što je stara rezerva uspoređivala. */
function leadingNumber(s: string): string | null {
  const m = normalizeAnswer(s).match(/[+-]?(?:\d+\.?\d*|\.\d+)/);
  return m ? m[0] : null;
}

/** Cijeli normalizirani zapis je broj ili razlomak? */
function isPureNumber(n: string): boolean {
  return /^[+-]?(?:\d+\.?\d*|\.\d+)(?:\/[+-]?(?:\d+\.?\d*|\.\d+))?$/.test(n);
}

describe('mat-grading: goli broj iz nenumeričkog rješenja nije točan', () => {
  it('nijedan od 70 ispita ne prihvaća "prvi broj iz sol.ans" kao odgovor', async () => {
    const falsePositives: string[] = [];
    let checked = 0;
    for (const file of examFiles()) {
      const qs = await loadExam(file);
      for (const q of qs) {
        if (!q.sol || !GRADABLE.has(String(q.type)) || q.type === 'mc') continue;
        const ans = q.sol.ans;
        if (ans === undefined || ans === null || String(ans).trim() === '') continue;
        const norm = normalizeAnswer(String(ans));
        if (!norm || isPureNumber(norm)) continue; // numeričko rješenje — broj je legitiman odgovor
        const raw = leadingNumber(String(ans));
        if (raw === null) continue;
        const lead = normalizeAnswer(raw);
        if (!lead) continue;
        // ako je taj broj i sam jedna od ponuđenih varijanti (autor ga je prihvatio),
        // prolaz je ispravan i ne broji se kao lažni pozitiv
        if (answerVariants(q).some((v) => normalizeAnswer(v) === lead || numEquals(v, lead))) continue;
        checked++;
        if (isAnswerCorrect(q, lead) === true) {
          falsePositives.push(`${file} q${q.id} (${q.type}): ${JSON.stringify(String(ans))} ← ${lead}`);
        }
      }
    }
    expect(checked).toBeGreaterThan(100);
    expect(falsePositives.slice(0, 20)).toEqual([]);
    expect(falsePositives.length).toBe(0);
  });
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
    // zarez je decimalni separator: "20,000" je 20, a ne 20000 (tisućice se pišu razmakom)
    ['num', '20 000', '20,000', false],
    ['num', '1375', '1,375', false],
    ['num', '1,375', '1375', false],
    // paritet sa starim numEq-om: apsolutna tolerancija 0,01 za male brojeve
    ['num', '1,76784', '1,77', true],
    ['num', '1,76784', '1,8', false],
    // goli broj iz nenumeričkog rješenja NIJE točan odgovor
    ['num', '√2', '2', false],
    ['num', '2√3', '2', false],
    ['num', '2π', '2', false],
    ['num', '148°40′17″', '148', false],
    ['sa', 'z = 3(cos(3π/2) + i·sin(3π/2))', '3', false],
    ['sa', 'y = −a − 14', '-14', false],
    ['sa', 'x ≤ [FRAC:−11|10]', '-11', false],
    ['pa', '90 paketa, 1440 kg', '90', false],
    ['num', '260π/3 cm³', '260', false],
  ];

  for (const [type, ans, input, expected] of cases) {
    it(`${type}: ${JSON.stringify(input)} vs ${JSON.stringify(ans)} → ${expected}`, () => {
      expect(isAnswerCorrect({ type, sol: { ans } }, input)).toBe(expected);
    });
  }

  // --- klasa: jedinice (simbol i riječ), DMS kutovi, razlomak ↔ decimala u izrazu ---
  const classCases: Array<[string, string, string, boolean]> = [
    // jedinice pisane riječju su jedinice, ne dio odgovora
    ['num', '30°', '30 stupnjeva', true],
    ['num', '11,5 g', '11,5 grama', true],
    ['sa', '1967.', '1967. godine', true],
    ['num', '168 cm2', '168', true],
    ['num', '20 dag', '20', true],
    ['num', '2,5 ha', '2,5', true],
    // brojive imenice NISU jedinice — ostaju dio odgovora
    ['sa', '90 paketa', '90', false],
    ['sa', '25 članova', '25', false],
    ['num', '30 stupnjeva', '31', false],
    // stupnjevi/minute/sekunde ↔ decimalni stupnjevi
    ['num', '148°40′17″', '148,67', true],
    ['num', '31°18′52″', '31,31', true],
    ['num', '148°40′17″', '148,5', false],
    ['num', '148°40′17″', '149', false],
    ['num', '148°40′17″', '40', false],
    // razlomak ↔ decimala i unutar izraza
    ['sa', 'x > [FRAC:19|4]', 'x > 4,75', true],
    ['sa', '3/5', '0,6', true],
    ['sa', '-7/4x + 17/2', '-1,75x + 8,5', true],
    ['sa', 'x > 19/4', 'x > 4,7', false],
    ['num', '1/2', '1/3', false],
    ['sa', '0,3', '1/3', false],
    ['sa', 'x > 19/4', 'x < 4,75', false],
    // uvodne oznake rješenja
    ['num', '320', 'Odgovor: 320', true],
    ['sa', '2x − 2', 'Odgovor: y = 2x − 2', true],
    ['sa', '(2, −1)', 'B(2, −1)', true],
    ['sa', 'K(600, 250)', '(600, 250)', true],
    ['sa', 'sin α = 0,8', '0,8', true],
    ['num', '320', 'Odgovor: 330', false],
    ['sa', '(2, −1)', '(−1, 2)', false],
    // goli grčki simbol ostaje oznaka veličine, ne skida se
    ['sa', 'φ = 47°', '47', false],
    // suvišne zagrade oko koeficijenta, djelitelja i argumenta funkcije
    ['sa', '3/8x² − 3/4x − 3', '(3/8)x² − (3/4)x − 3', true],
    ['sa', '−(2/3)x − 3/2', '(−2/3)x − 3/2', true],
    ['sa', '4pr/ac', '4pr/(ac)', true],
    ['sa', 'sin α', 'sin(α)', true],
    // zagrade koje nose značenje ostaju: interval ≠ interval s drugom zagradom
    ['sa', '⟨2, 7⟩', '[2, 7⟩', false],
    ['sa', '(3/8)x² − 3/4x − 3', '(3/7)x² − 3/4x − 3', false],
  ];

  for (const [type, ans, input, expected] of classCases) {
    it(`klasa ${type}: ${JSON.stringify(input)} vs ${JSON.stringify(ans)} → ${expected}`, () => {
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
    // paritet sa starim numEq-om (|a−b| < 0,01); izvan te granice tek 2,02
    expect(numEquals('2', '2,01')).toBe(true);
    expect(numEquals('2', '2,02')).toBe(false);
    expect(numEquals('', '')).toBe(false);
  });

  it('numEquals ne uspoređuje "prvi broj u stringu"', () => {
    expect(numEquals('√5−1', '5')).toBe(false);
    expect(numEquals('x₁ = √5−1, x₂ = √5+1', '5')).toBe(false);
    expect(numEquals('x > [FRAC:19|4]', '19')).toBe(false);
    expect(numEquals('3 cm i 4 cm', '3')).toBe(false);
    // identičan zapis i dalje prolazi
    expect(numEquals('148°40′17″', '148°40′17″')).toBe(true);
  });

  it('numEquals zadržava apsolutnu toleranciju 0,01 starog enginea', () => {
    expect(numEquals('1,76784', '1,77')).toBe(true);
    expect(numEquals('0,333', '0,3333')).toBe(true);
    expect(numEquals('2', '2,02')).toBe(false);
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
