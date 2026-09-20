import { describe, it, expect } from 'vitest';
import { chk, hasAns, calcXpGain, qIdentity, computeSecLeft } from '../../app/discere/hrvatski/simulator/utils/helpers.js';

describe('qIdentity', () => {
  it('obično pitanje iz ispita — ključ i id ispita', () => {
    expect(qIdentity({ id: 7 }, { key: '2024_ljeto_A' })).toEqual({ examKey: '2024_ljeto_A', qid: 7 });
  });
  it('virtualna sesija — izvorni ispit i izvorni id imaju prednost', () => {
    const q = { id: 3, _srcId: 42, _examKey: '2019_jesen_A' };
    expect(qIdentity(q, { key: 'daily_session' })).toEqual({ examKey: '2019_jesen_A', qid: 42 });
  });
  it('_srcId 0 se ne gubi', () => {
    expect(qIdentity({ id: 5, _srcId: 0 }, { key: 'adaptive_session' }).qid).toBe(0);
  });
  it('pitanje bez _srcId u sesiji zadržava svoj id', () => {
    expect(qIdentity({ id: 11, _examKey: '2015_ljeto_A' }, { key: 'filter_custom' }))
      .toEqual({ examKey: '2015_ljeto_A', qid: 11 });
  });
});

describe('computeSecLeft', () => {
  it('preostalo vrijeme u sekundama', () => {
    expect(computeSecLeft(1000000 + 90000, 1000000)).toBe(90);
  });
  it('nikad ispod nule', () => {
    expect(computeSecLeft(1000, 999999)).toBe(0);
  });
  it('zaokružuje naviše (započeta sekunda se još broji)', () => {
    expect(computeSecLeft(1500, 0)).toBe(2);
  });
});

describe('chk', () => {
  it('mc — točno', () => {
    expect(chk({ type: 'mc', sol: { cl: 'B' } }, 'B')).toBe(true);
  });
  it('mc — krivo', () => {
    expect(chk({ type: 'mc', sol: { cl: 'B' } }, 'A')).toBe(false);
  });
  it('mc — neodgovoreno vraća null', () => {
    expect(chk({ type: 'mc', sol: { cl: 'B' } }, undefined)).toBe(null);
    expect(chk({ type: 'mc', sol: { cl: 'B' } }, '')).toBe(null);
  });
  it('mat — svi parovi točni', () => {
    const q = { type: 'mat', sol: { pairs: [{ l: '1', r: 'a' }, { l: '2', r: 'b' }] } };
    expect(chk(q, { 1: 'a', 2: 'b' })).toBe(true);
  });
  it('mat — jedan par krivi', () => {
    const q = { type: 'mat', sol: { pairs: [{ l: '1', r: 'a' }, { l: '2', r: 'b' }] } };
    expect(chk(q, { 1: 'a', 2: 'x' })).toBe(false);
  });
  it('mat — neodgovoreno vraća null', () => {
    const q = { type: 'mat', sol: { pairs: [{ l: '1', r: 'a' }] } };
    expect(chk(q, undefined)).toBe(null);
    expect(chk(q, 'nije objekt')).toBe(null);
  });
  it('nepoznat tip vraća null', () => {
    expect(chk({ type: 'sa' }, 'bilo što')).toBe(null);
  });
});

describe('hasAns', () => {
  it('undefined/null/prazan string = false', () => {
    expect(hasAns(undefined)).toBe(false);
    expect(hasAns(null)).toBe(false);
    expect(hasAns('')).toBe(false);
  });
  it('neprazan string = true', () => {
    expect(hasAns('A')).toBe(true);
  });
  it('prazan niz = false, pun niz = true', () => {
    expect(hasAns([])).toBe(false);
    expect(hasAns(['A'])).toBe(true);
  });
  it('objekt bez istinitih vrijednosti = false', () => {
    expect(hasAns({ 1: '', 2: null })).toBe(false);
  });
  it('objekt s barem jednom istinitom vrijednošću = true', () => {
    expect(hasAns({ 1: '', 2: 'a' })).toBe(true);
  });
  it('broj 0 se smatra odgovorom (true grana za sve ostale tipove)', () => {
    expect(hasAns(0)).toBe(true);
  });
});

describe('calcXpGain', () => {
  it('bez bonusa ispod 70%', () => {
    expect(calcXpGain(50, 100)).toBe(100);
  });
  it('s bonusom od 20 na točno 70%', () => {
    expect(calcXpGain(70, 100)).toBe(70 * 2 + 20);
  });
  it('100% točnosti', () => {
    expect(calcXpGain(100, 100)).toBe(100 * 2 + 20);
  });
  it('0% točnosti', () => {
    expect(calcXpGain(0, 100)).toBe(0);
  });
  it('zaokružuje rezultat', () => {
    expect(calcXpGain(33, 100)).toBe(Math.round(0.33 * 100 * 2));
  });
});
