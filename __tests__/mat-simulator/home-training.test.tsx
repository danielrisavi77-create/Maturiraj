// @ts-nocheck
// Trening dana bira pitanja iz meta-sazetka, a stvarna pitanja stizu tek na klik.
// Dva svojstva koja to ne smije pokvariti:
//  1. sesija je iste velicine kao prije lijenog ucitavanja, i kad dio ispita padne
//     (loadExams po dizajnu ne prekida seriju na pojedinacnom padu),
//  2. bez sazetka se i dalje prvo ucitava cijela banka, umjesto da se sesija slozi
//     iz jednog ispita koji je slucajno vec ucitan.
// Uz to: brojaci ispita/zadataka na naslovnici (disclaimer, vodic) citaju questionCount
// iz index.json, pa ne pisu "0 zadataka" dok ispiti jos nisu ucitani.
// @vitest-environment happy-dom
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {
  __setExamCatalog, __setExamLoader, __setSummary, loadExams, loadAllExams, isExamLoaded,
} from '@/components/simulator/mat/core/exams';
import { TodayHero } from '@/components/simulator/mat/screens/today';
import { GuideScreen } from '@/components/simulator/mat/screens/modes';
import { DisclaimerModal } from '@/components/simulator/mat/tools/modals';

const KEYS = ['e_1', 'e_2', 'e_3'];
const PER_EXAM = 6;

const CATALOG = KEYS.map((key, i) => ({
  key, year: 2020 + i, season: 'ljeto', razina: 'A', label: 'Ispit ' + (i + 1),
  durationSec: 10800, questionCount: PER_EXAM, locked: false,
}));

const SUMMARY = {
  subject: 'mat', count: KEYS.length,
  exams: Object.fromEntries(KEYS.map((k) => [
    k, Array.from({ length: PER_EXAM }, (_, j) => ({ id: j + 1, topic: 'kv', type: 'mc', points: 1, img: false })),
  ])),
};

function mkModule(key) {
  return {
    qs: Array.from({ length: PER_EXAM }, (_, j) => ({
      id: j + 1, type: 'mc', topic: 'kv', points: 1,
      q: 'Pitanje ' + key + '/' + (j + 1), opts: ['a', 'b', 'c', 'd'], sol: { cl: 'A' },
    })),
    qImages: {},
  };
}

// Prazna povijest → nema ciljnih tema → trainCount je 10 (hasTargets false).
const TRAIN_COUNT = 10;
const userData = () => ({ xp: 0, streak: 0, history: [], errorTracker: {}, bookmarks: [] });

// Isto kao withExams/withAllExams u app.tsx: bez popisa kljuceva pada na sve ispite.
function prepareExams(keys, cb) {
  const p = (keys && keys.length) ? loadExams(keys) : loadAllExams();
  return p.then(() => cb());
}

function renderHero(started, onPrepare) {
  return render(React.createElement(TodayHero, {
    userData: userData(), razina: 'A', onPrepareExams: onPrepare,
    onStartErrorSession: (s) => started.push(s),
  }));
}

function clickTrening(container) {
  const btn = [...container.querySelectorAll('button')].find((b) => /Zapo/.test(b.textContent));
  expect(btn, 'gumb Zapocni trening nije pronaden').toBeTruthy();
  fireEvent.click(btn);
}

beforeEach(() => { __setSummary(null); __setExamLoader(null); });
afterEach(() => { cleanup(); });

describe('Trening dana: velicina sesije pri lijenom ucitavanju', () => {
  it('djelomican pad dohvata ne skracuje sesiju', async () => {
    // e_2 ne stize (CDN 404 / deploy u tijeku); loadExams zabiljezi pad i ide dalje.
    __setExamLoader((key) => (key === 'e_2'
      ? Promise.reject(new Error('404'))
      : Promise.resolve(mkModule(key))));
    __setExamCatalog(CATALOG);
    __setSummary(SUMMARY);

    const started = [];
    const { container } = renderHero(started, prepareExams);
    clickTrening(container);
    await new Promise((r) => setTimeout(r, 50));

    expect(isExamLoaded('e_2')).toBe(false);
    expect(started.length).toBe(1);
    // 12 pitanja iz dva uspjela ispita je dovoljno za punu sesiju od 10.
    expect(started[0].qs.length).toBe(TRAIN_COUNT);
    expect(started[0].qs.every((q) => q._examKey !== 'e_2')).toBe(true);
    // Nijedno pitanje se ne ponavlja.
    const uids = started[0].qs.map((q) => q._examKey + '__' + q.id);
    expect(new Set(uids).size).toBe(TRAIN_COUNT);
    // Pitanja su stvarna (imaju tekst i opcije), a ne meta-zapisi iz sazetka.
    expect(started[0].qs.every((q) => typeof q.q === 'string' && Array.isArray(q.opts))).toBe(true);
  });

  it('bez sazetka, a s jednim vec ucitanim ispitom, prvo dohvaca ostale', async () => {
    __setExamLoader((key) => Promise.resolve(mkModule(key)));
    __setExamCatalog(CATALOG);
    __setSummary(null);
    await loadExams(['e_1']);       // samo jedan ispit je ucitan

    const asked = [];
    const started = [];
    const { container } = renderHero(started, (keys, cb) => { asked.push(keys); return prepareExams(keys, cb); });
    clickTrening(container);
    await new Promise((r) => setTimeout(r, 50));

    // Stari put: bez sazetka se trazi cijela banka (null), ne samo e_1.
    expect(asked).toEqual([null]);
    expect(isExamLoaded('e_2')).toBe(true);
    expect(isExamLoaded('e_3')).toBe(true);
    expect(started[0].qs.length).toBe(TRAIN_COUNT);
    expect(new Set(started[0].qs.map((q) => q._examKey)).size).toBeGreaterThan(1);
  });
});

describe('Brojaci na naslovnici ne ovise o ucitanim pitanjima', () => {
  beforeEach(() => {
    __setExamLoader((key) => Promise.resolve(mkModule(key)));
    __setExamCatalog(CATALOG);   // svi ispiti imaju qs:[], samo questionCount
  });

  it('DisclaimerModal broji zadatke iz questionCount', () => {
    const { container } = render(React.createElement(DisclaimerModal, { onClose: () => {} }));
    expect(container.textContent).toContain('3 ispita');
    expect(container.textContent).toContain(String(KEYS.length * PER_EXAM));
    expect(container.textContent).not.toContain('više od 0 zadataka');
  });

  it('GuideScreen broji zadatke iz questionCount', () => {
    const { container } = render(React.createElement(GuideScreen, { onBack: () => {} }));
    expect(container.textContent).toContain('3 ispita');
    expect(container.textContent).toContain(KEYS.length * PER_EXAM + ' zadataka');
  });
});
