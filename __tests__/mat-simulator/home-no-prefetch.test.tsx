// @ts-nocheck
// Home ne smije dohvatiti nijedan exam chunk.
// Prije: App je 1,5 s nakon montiranja u pozadini povlacio svih 70 ispita (~7 MB) samo zato
// sto su Trening dana, spremnost i pokrivenost tema racunali iz EXAMS. Sada to racunaju iz
// meta-sazetka (summary.json), a puni ispit stize tek kad korisnik pokrene sesiju.
// Test instrumentira loader i broji pozive — mjera je "broj zatrazenih chunkova na Homeu".
// @vitest-environment happy-dom
import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import React from 'react';
import { render, cleanup } from '@testing-library/react';

let core: any;
let requested: string[] = [];

const CATALOG = [
  { key: 'e_A1', year: 2024, season: 'ljeto', razina: 'A', label: 'A1', durationSec: 10800, questionCount: 2, locked: false },
  { key: 'e_A2', year: 2023, season: 'jesen', razina: 'A', label: 'A2', durationSec: 10800, questionCount: 2, locked: false },
  { key: 'e_L', year: 2022, season: 'ljeto', razina: 'A', label: 'Zakljucan', durationSec: 10800, questionCount: 2, locked: true },
];

const SUMMARY = {
  subject: 'mat',
  count: 3,
  exams: {
    e_A1: [{ id: 1, topic: 'kv', type: 'mc', points: 1, img: false }, { id: 2, topic: 'trig', type: 'sa', points: 2, img: false }],
    e_A2: [{ id: 1, topic: 'anal', type: 'mc', points: 1, img: false }, { id: 2, topic: 'kv', type: 'proof', points: 4, img: false }],
    e_L: [{ id: 1, topic: 'niz', type: 'mc', points: 1, img: false }, { id: 2, topic: 'niz', type: 'mc', points: 1, img: false }],
  },
};

function mkModule(key: string) {
  return {
    qs: (SUMMARY.exams as any)[key].map((r: any) => ({
      id: r.id, type: r.type, topic: r.topic, points: r.points,
      q: 'Pitanje ' + key + '/' + r.id, opts: ['a', 'b', 'c', 'd'], sol: { cl: 'A' },
    })),
    qImages: {},
  };
}

beforeAll(async () => {
  core = await import('@/components/simulator/MatEngineCore');
  core.__setExamLoader((key: string) => { requested.push(key); return Promise.resolve(mkModule(key)); });
});

afterEach(() => { cleanup(); });

describe('Home se iscrtava bez ijednog exam chunka', () => {
  it('summaryQuestions daje bazen iz sazetka, bez zakljucanih i bez ucitavanja', () => {
    core.__setExamCatalog(CATALOG);
    core.__setSummary(SUMMARY);
    requested = [];
    const pool = core.summaryQuestions();
    expect(requested).toEqual([]);
    expect(core.hasSummary()).toBe(true);
    // 4 pitanja iz dva otkljucana ispita; zakljucani e_L se ne vidi (kao ni dosad kroz EXAMS)
    expect(pool.length).toBe(4);
    expect(pool.some((q: any) => q.examKey === 'e_L')).toBe(false);
    expect(pool.map((q: any) => q.topic).sort()).toEqual(['anal', 'kv', 'kv', 'trig']);
    expect(pool.every((q: any) => q.razina === 'A')).toBe(true);
  });

  it('App na Homeu ne zatrazi nijedan chunk (ni nakon pozadinskog prozora od 1,5 s)', async () => {
    core.__setExamCatalog(CATALOG);
    core.__setSummary(SUMMARY);
    requested = [];
    const { container } = render(React.createElement(core.App));
    expect(container.textContent.length).toBeGreaterThan(50);
    await new Promise((r) => setTimeout(r, 2000));
    expect(requested, 'Home je dohvatio exam chunkove').toEqual([]);
    expect(core.allExamsLoaded()).toBe(false);
  });

  it('loadExams dohvaca samo navedene ispite (Trening dana), ne sve', async () => {
    core.__setExamCatalog(CATALOG);
    core.__setSummary(SUMMARY);
    requested = [];
    const r = await core.loadExams(['e_A2']);
    expect(requested).toEqual(['e_A2']);
    expect(r).toMatchObject({ total: 1, failed: 0 });
    expect(core.isExamLoaded('e_A2')).toBe(true);
    expect(core.isExamLoaded('e_A1')).toBe(false);
    // zakljucan ispit se ni izrijekom ne dohvaca izvan ispitnog moda
    requested = [];
    await core.loadExams(['e_L', 'e_A2']);
    expect(requested).toEqual([]);
  });

  it('bez sazetka Home i dalje radi (stari put: racuna iz ucitanih ispita)', () => {
    core.__setExamCatalog(CATALOG);
    core.__setSummary(null);
    requested = [];
    expect(core.hasSummary()).toBe(false);
    expect(core.summaryQuestions()).toEqual([]);
    const { container } = render(React.createElement(core.App));
    expect(container.textContent.length).toBeGreaterThan(50);
    expect(requested).toEqual([]);
  });
});
