// @ts-nocheck
// Smoke test enginea (faza 5.3): stvarno ucitava components/simulator/MatEngineCore i
// iscrtava Home + Sim, pa hvata simbol koji je pri razbijanju monolita ostao undefined.
// @vitest-environment happy-dom
import { describe, it, expect, beforeAll } from 'vitest';
import React from 'react';
import { render, cleanup } from '@testing-library/react';

let core: any;

beforeAll(async () => {
  core = await import('@/components/simulator/MatEngineCore');
});

const PUBLIC_API = [
  'Sim', 'ErrorBoundary', 'App', '__setQImages', '__setExams', '__setExamCatalog',
  '__setExamLoader', '__addExams', '__setSubject', '__onExamsChanged', 'loadExam',
  'loadAllExams', 'examQCount', 'isExamLocked', 'isExamLoaded', 'allExamsLoaded',
];

const Q_TAGS = 'Izracunaj [FRAC:1|2] + [FRAC:3|4] i x^(2) te [B:podebljano].';

function mkExam() {
  return {
    key: 'smoke_1',
    year: 2024,
    season: 'ljeto',
    razina: 'A',
    label: 'Smoke ispit',
    duration: 180,
    durationSec: 10800,
    questionCount: 2,
    locked: false,
    _loaded: true,
    qs: [
      {
        id: 1, type: 'mc', topic: 'kv', q: Q_TAGS,
        opts: ['[FRAC:5|4]', '2/3', '(1+x)/(2−x)', 'x^(1/2)'],
        sol: { cl: 'A', ex: 'Zbroj razlomaka [FRAC:5|4].' },
        exp: 'Nazivnik se izjednacava.',
        steps: [{ txt: 'Prosiri na [FRAC:2|4]', note: 'postupak' }],
      },
      {
        id: '2,1', type: 'num', topic: 'trig', q: 'Koliko je sin(0)?',
        sol: { ans: 0 }, exp: 'sin 0 = 0',
      },
    ],
  };
}

describe('5.3 smoke: engine se ucitava i iscrtava nakon razbijanja', () => {
  it('izvozi cijeli javni API', () => {
    PUBLIC_API.forEach((k) => {
      expect(typeof core[k], k).toBe('function');
    });
  });

  it('katalog, plan i predmet prolaze kroz izdvojene module', async () => {
    core.__setExamCatalog([
      { key: 'smoke_1', year: 2024, season: 'ljeto', razina: 'A', label: 'Smoke ispit', durationSec: 10800, questionCount: 2, locked: false },
      { key: 'smoke_2', year: 2023, season: 'jesen', razina: 'B', label: 'Zakljucan', durationSec: 10800, questionCount: 1, locked: true },
    ]);
    expect(core.isExamLocked('smoke_2')).toBe(true);
    expect(core.isExamLocked('smoke_1')).toBe(false);
    expect(core.isExamLoaded('smoke_1')).toBe(false);

    core.__setExamLoader((key: string) => Promise.resolve(key === 'smoke_1' ? mkExam() : null));
    const ex = await core.loadExam('smoke_1');
    expect(ex.qs.length).toBe(2);
    expect(core.examQCount(ex)).toBe(2);
    expect(core.isExamLoaded('smoke_1')).toBe(true);
    expect(core.allExamsLoaded()).toBe(true);

    // DISCERE_CONFIG most (IS_PRO/PLAN_NAME zive u core/state.ts)
    window.dispatchEvent(new MessageEvent('message', {
      data: { type: 'DISCERE_CONFIG', isPro: true, isPaid: true, planName: 'TestPlan', price: '1 €' },
    }));
    await new Promise((r) => setTimeout(r, 0));
    expect((window as any).__DISCERE_TIER__).toMatchObject({ isPro: true, planName: 'TestPlan' });

    // __setSubject mijenja SUBJECT + TOPIC_LABELS u istom modulu
    core.__setSubject({ name: 'SmokeMat' });
  });

  it('App se iscrtava (Home ekran)', () => {
    const { container } = render(React.createElement(core.App));
    expect(container.textContent.length).toBeGreaterThan(50);
    cleanup();
  });

  it('Sim iscrtava pitanje s [FRAC:]/[B:] tagovima (mathText modul)', () => {
    const exam = mkExam();
    const { container } = render(React.createElement(core.Sim, {
      exam,
      practice: true,
      examMode: false,
      timedPractice: false,
      onExit: () => {},
      onDone: () => {},
      userData: { xp: 0, streak: 0, history: [], errorTracker: {}, lastLogin: null },
    }));
    const txt = container.textContent;
    expect(txt).toContain('Izracunaj');
    // renderQText je razlozio tagove — sirovi tag ne smije ostati u DOM-u
    expect(txt).not.toContain('[FRAC:');
    expect(txt).not.toContain('[B:');
    // razlomci se iscrtavaju kroz .mfrac (FractionSVG/mfracEl)
    expect(container.querySelectorAll('.mfrac, .mfrac-num').length).toBeGreaterThan(0);
    cleanup();
  });
});
