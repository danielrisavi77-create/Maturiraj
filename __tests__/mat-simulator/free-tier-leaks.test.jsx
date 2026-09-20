// @vitest-environment happy-dom
/**
 * free-tier-leaks.test.jsx
 *
 * Dva propusta koja su zaobilazila politiku "free vidi ocjenu, ne i razradu"
 * (canSeeDetails u mat/sim/sim.tsx, canSeeTopics u mat/screens/stats.tsx):
 *
 *   1) CURENJE — coach overlay u components/discere/mat/MatFullSimulator.jsx crta se
 *      PARENT-side, iznad zaključanog bloka "Analiza po temama", pa ga engineov gate
 *      ne pokriva. Savjet "Slaba tema" je analiza po temama → samo za plaćeni tier.
 *      Usput: tip je ispisivao sirovi slug ("anal") umjesto oznake teme.
 *   2) MRTVE OPCIJE — "Vježbaj po temi" je nudio godine iz cijelog kataloga EXAMS, pa
 *      je free korisnik birao npr. 2024. i dobio "Nema pitanja za odabrane filtere".
 *
 * Zaseban file (ne results-gating.test.jsx) jer __setExamCatalog mijenja globalni EXAMS,
 * a ondašnji testovi o njemu ovise.
 */
import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { generateCoachTips } from '@/components/discere/mat/MatFullSimulator';
import { __setExamCatalog, __addExams } from '@/components/simulator/mat/core/exams';
import { TopicFilterScreen } from '@/components/simulator/mat/screens/practice';
import { BrowseScreen } from '@/components/simulator/mat/screens/browse';

afterEach(() => cleanup());

// Predani ispit: druga polovica riješena upadljivo brže (tip o tempu — besplatan) i
// jedna jasno slaba tema "anal" = Analitička geometrija (analiza po temama — Standard).
const attempt = () => ({
  examKey: '2010_ljeto_B', examLabel: 'Ljeto B', razina: 'B', mode: 'simulacija',
  pct: 40, grade: 2, cor: 8, total: 20,
  qTimes: { 1: 100, 2: 100, 3: 100, 4: 10, 5: 10, 6: 10 },
  topic_breakdown: { anal: { correct: 0, total: 3 }, lin: { correct: 3, total: 3 } },
});

const titles = (tips) => tips.map((t) => t.title);
const detailsText = (tips) => tips.map((t) => t.detail).join(' | ');

describe('coach savjeti nakon ispita — analiza po temama je iza Standarda', () => {
  it('free: nema savjeta o slaboj temi ni prijedloga filtriranja po temi', () => {
    const tips = generateCoachTips(attempt(), false);

    expect(titles(tips)).not.toContain('Slaba tema');
    expect(detailsText(tips)).not.toContain('Analitička geometrija');
    expect(detailsText(tips)).not.toContain('anal');
    expect(detailsText(tips)).not.toContain('vježbaj filtrirano');
    // Ono što ne otkriva razradu i dalje stiže besplatno.
    expect(titles(tips)).toContain('Ubrzavaš pred kraj');
  });

  it('bez proslijeđenog tiera savjet je zaključan (siguran default)', () => {
    expect(titles(generateCoachTips(attempt()))).not.toContain('Slaba tema');
  });

  it('plaćeni: savjet o slaboj temi stiže, s ljudskom oznakom teme umjesto sluga', () => {
    const tips = generateCoachTips(attempt(), true);

    expect(titles(tips)).toContain('Slaba tema');
    const weak = tips.find((t) => t.title === 'Slaba tema');
    expect(weak.detail).toContain('Analitička geometrija: 0/3 točnih');
    expect(weak.detail).not.toMatch(/^anal[:\s]/);
    // Tempo savjet ostaje i njemu.
    expect(titles(tips)).toContain('Ubrzavaš pred kraj');
  });

  it('prazna povijest ne ruši generator', () => {
    expect(generateCoachTips(null, true)).toEqual([]);
  });
});

// Katalog kakav MatFullSimulator šalje free korisniku: 2024. je zaključana (nikad ne dobije
// pitanja — loadExam ih drži u __EXAM_ONLY), a 2019. je njegov besplatni ispit.
function setupFreeCatalog() {
  __setExamCatalog([
    { key: '2024_ljeto_B', year: 2024, season: 'ljeto', razina: 'B', label: 'B', questionCount: 3, locked: true },
    { key: '2019_ljeto_B', year: 2019, season: 'ljeto', razina: 'B', label: 'B', questionCount: 2, locked: false },
  ]);
  __addExams({
    '2019_ljeto_B': {
      key: '2019_ljeto_B', year: 2019, season: 'ljeto', razina: 'B', label: 'B',
      duration: 3600, locked: false,
      qs: [
        { id: 1, type: 'mc', topic: 'lin', q: 'Koliko je 2+2?', opts: ['3', '4', '5', '6'], sol: { cl: 'B' }, points: 1 },
        { id: 2, type: 'mc', topic: 'kv', q: 'Koliko je 3+3?', opts: ['5', '6', '7', '8'], sol: { cl: 'B' }, points: 1 },
      ],
    },
  });
}

beforeEach(() => {
  localStorage.clear();
});

describe('"Vježbaj po temi" — filtri nude samo stvarno dostupne godine', () => {
  it('free: zaključana godina nije ponuđena, a sesija se može pokrenuti', () => {
    setupFreeCatalog();
    const { container } = render(
      React.createElement(TopicFilterScreen, { onStart: () => {}, onBack: () => {} })
    );

    expect(screen.getByText('2019.')).toBeTruthy();
    expect(screen.queryByText('2024.')).toBeNull();
    // Mrtva opcija je izgledala ovako: 0 pogodaka i onemogućen gumb.
    expect(container.textContent).not.toContain('Nema pitanja za odabrane filtere');
    expect(screen.getByText(/^▶ Pokreni/).disabled).toBe(false);
  });

  it('plaćeni: sve godine iz kataloga su ponuđene', () => {
    __setExamCatalog([
      { key: '2024_ljeto_B', year: 2024, season: 'ljeto', razina: 'B', label: 'B', questionCount: 3, locked: false },
      { key: '2019_ljeto_B', year: 2019, season: 'ljeto', razina: 'B', label: 'B', questionCount: 2, locked: false },
    ]);

    render(React.createElement(TopicFilterScreen, { onStart: () => {}, onBack: () => {} }));

    expect(screen.getByText('2024.')).toBeTruthy();
    expect(screen.getByText('2019.')).toBeTruthy();
  });
});

describe('Pregled pitanja — copy o "Svim ispitima" opisuje stvarni bazen', () => {
  it('free: bez obećanja svih 70 ispita', () => {
    setupFreeCatalog();
    const { container } = render(React.createElement(BrowseScreen, { onBack: () => {} }));

    expect(container.textContent).not.toContain('svih 70 ispita');
    expect(container.textContent).toContain('Pretraži sva pitanja koja su ti dostupna (1 ispit)');
    // Zaključan ispit se ne nudi ni u odabiru po godini (otvorio bi se s 0 zadataka).
    expect(container.textContent).not.toContain('2024');
  });

  it('plaćeni: copy broji cijeli katalog', () => {
    __setExamCatalog([
      { key: '2024_ljeto_B', year: 2024, season: 'ljeto', razina: 'B', label: 'B', questionCount: 3, locked: false },
      { key: '2019_ljeto_B', year: 2019, season: 'ljeto', razina: 'B', label: 'B', questionCount: 2, locked: false },
    ]);

    const { container } = render(React.createElement(BrowseScreen, { onBack: () => {} }));

    expect(container.textContent).toContain('Pretraži sva pitanja iz cijele banke (2 ispita)');
  });
});
