import { describe, it, expect } from 'vitest';
import { EXAMS, stripLetterPrefix } from '../../app/discere/hrvatski/simulator/data/exams/index.js';

const LETTERS = 'ABCDEF';
// Zaostali prefiks prepoznaje se samo ako je slovo jednako slovu vlastitog indeksa;
// sadržaj koji legitimno počinje inicijalom ("A. P. Čehov" na mjestu B) nije greška.
const selfPrefix = i => new RegExp('^' + LETTERS[i] + '[.)]\\s');
const GAP_PATTERN = /\(\d+\)\s*_{3,}/;

describe('stripLetterPrefix', () => {
  it('uklanja prefiks "A. "', () => {
    expect(stripLetterPrefix('A. lirici')).toBe('lirici');
  });
  it('uklanja prefiks s zagradom "B) ..."', () => {
    expect(stripLetterPrefix('B) epici')).toBe('epici');
  });
  it('radi za sva slova A-F', () => {
    expect(stripLetterPrefix('F. nešto')).toBe('nešto');
  });
  it('ne dira string bez prefiksa', () => {
    expect(stripLetterPrefix('lirici')).toBe('lirici');
  });
  it('propušta ne-stringove nepromijenjeno', () => {
    expect(stripLetterPrefix(null)).toBe(null);
    expect(stripLetterPrefix(undefined)).toBe(undefined);
  });
});

describe('EXAMS — integritet podataka po ispitu', () => {
  const keys = Object.keys(EXAMS);

  it('EXAMS nije prazan', () => {
    expect(keys.length).toBeGreaterThan(0);
  });

  for (const key of keys) {
    describe(key, () => {
      const qs = EXAMS[key].qs || [];

      it('nijedno pitanje nema broken:true', () => {
        const broken = qs.filter(q => q.broken === true);
        expect(broken.map(q => q.id)).toEqual([]);
      });

      it('nijedno pitanje nema (\\d+) ___ uzorak u q', () => {
        const withGap = qs.filter(q => GAP_PATTERN.test(q.q || ''));
        expect(withGap.map(q => q.id)).toEqual([]);
      });

      it('svako mc pitanje ima opts.length>=2 i sol.cl unutar A..(opts.length)', () => {
        const bad = qs
          .filter(q => q.type === 'mc')
          .filter(q => {
            const n = (q.opts || []).length;
            if (n < 2) return true;
            const validLetters = 'ABCDEF'.slice(0, n);
            return !validLetters.includes(q.sol && q.sol.cl);
          });
        expect(bad.map(q => q.id)).toEqual([]);
      });

      it('nijedna opcija ne zadržava prefiks vlastitog slova', () => {
        const bad = [];
        qs.forEach(q => {
          (q.opts || []).forEach((o, i) => {
            if (typeof o === 'string' && i < LETTERS.length && selfPrefix(i).test(o)) bad.push({ id: q.id, o });
          });
        });
        expect(bad).toEqual([]);
      });

      it('nijedno mc pitanje nema dvije doslovno iste opcije', () => {
        const bad = [];
        qs.filter(q => q.type === 'mc').forEach(q => {
          const seen = new Set();
          (q.opts || []).forEach(o => {
            const t = String(o).trim();
            if (seen.has(t)) bad.push({ id: q.id, o: t });
            seen.add(t);
          });
        });
        expect(bad).toEqual([]);
      });
    });
  }

  it('broj pitanja po ispitu (snapshot)', () => {
    const counts = {};
    keys.forEach(k => { counts[k] = (EXAMS[k].qs || []).length; });
    expect(counts).toEqual({
      "2010_jesen_A": 78, "2010_jesen_B": 75, "2010_ljeto_A": 74, "2010_ljeto_B": 75,
      "2010_zima_A": 77, "2010_zima_B": 74,
      "2011_zima_A": 75, "2011_zima_B": 76, "2011_ljeto_A": 76, "2011_ljeto_B": 74,
      "2011_jesen_A": 75, "2011_jesen_B": 73,
      "2012_zima_A": 72, "2012_zima_B": 72, "2012_ljeto_A": 72, "2012_ljeto_B": 72,
      "2012_jesen_A": 72, "2012_jesen_B": 72,
      "2013_ljeto_A": 72, "2013_ljeto_B": 69, "2013_jesen_A": 72, "2013_jesen_B": 70,
      "2014_jesen_A": 72, "2014_jesen_B": 72, "2014_ljeto_A": 72, "2014_ljeto_B": 70,
      "2015_jesen_A": 80, "2015_jesen_B": 80, "2015_ljeto_A": 80, "2015_ljeto_B": 77,
      "2016_jesen_A": 80, "2016_jesen_B": 80, "2016_ljeto_A": 79, "2016_ljeto_B": 80,
      "2017_jesen_A": 80, "2017_jesen_B": 80, "2017_ljeto_A": 80, "2017_ljeto_B": 80,
      "2018_jesen_A": 80, "2018_jesen_B": 80, "2018_ljeto_A": 80, "2018_ljeto_B": 80,
      "2019_jesen_A": 80, "2019_jesen_B": 80, "2019_ljeto_A": 80, "2019_ljeto_B": 80,
      "2020_ljeto_A": 80, "2020_ljeto_B": 80, "2020_jesen_A": 72, "2020_jesen_B": 72,
      "2021_jesen_A": 80, "2021_jesen_B": 80, "2021_ljeto_A": 80, "2021_ljeto_B": 80,
      "2022_jesen_B": 80, "2022_jesen_A": 80, "2022_ljeto_A": 80, "2022_ljeto_B": 80,
      "2023_ljeto": 62, "2023_jesen": 62, "2024_jesen": 62, "2024_ljeto": 62,
      "2025_jesen": 62, "2025_ljeto": 62,
    });
  });
});
