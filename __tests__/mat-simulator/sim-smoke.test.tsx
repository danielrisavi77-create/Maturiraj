// @ts-nocheck
// @vitest-environment happy-dom
/**
 * sim-smoke.test.tsx
 *
 * Mreza za razbijanje Sim-a (jedna funkcija od ~1258 redaka) na podkomponente i
 * hookove: cijeli put kroz ispit mora ostati identican bez obzira na to gdje
 * stanje zivi.
 *   - fixture ispit s tri tipa zadatka (mc, sa, num)
 *   - odgovaranje (klik na opciju, upis u polje konacnog odgovora)
 *   - navigacija naprijed/natrag i skok iz navigatora
 *   - predaja preko "Zavrsi ispit" -> "Predaj ispit"
 *   - rezultat na ekranu i zapis koji ide u history (onDone payload iz kojeg
 *     app/app.tsx slaze userData.history)
 *
 * Test je napisan PRIJE razbijanja i mora prolaziti i prije i poslije.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
// Sim ide preko javne fasade MatEngineCore, pa test ne ovisi o tome u koliko je
// datoteka unutar mat/sim/* raspodijeljen.
import { Sim } from '@/components/simulator/MatEngineCore';
import { grade } from '@/components/simulator/mat/core/progress';

// Razrada rezultata je iza Standard plana; test zeli vidjeti puni ekran.
function pushConfig(cfg) {
  const data = { type: 'DISCERE_CONFIG', isPro: false, isPaid: true, freeExam: true, ...cfg };
  window.dispatchEvent(new MessageEvent('message', { data }));
}

const FIX_EXAM = () => ({
  key: '2099_ljeto_B',
  year: 2099,
  season: 'ljeto',
  razina: 'B',
  label: 'Ljeto B',
  duration: 3600,
  qs: [
    {
      id: 1, type: 'mc', topic: 'br', points: 1,
      q: 'Koliko je 2 + 2?',
      opts: ['4', '5', '6', '7'],
      sol: { cl: 'A', ex: 'Zbroj dva i dva je cetiri.' },
    },
    {
      id: 2, type: 'sa', topic: 'alg', points: 1,
      q: 'Rijesi jednadzbu x + 1 = 3.',
      sol: { ans: 'x=2', ex: 'Oduzmi jedan.' },
    },
    {
      id: 3, type: 'num', topic: 'geo', points: 1,
      q: 'Kolika je povrsina kvadrata stranice 3?',
      sol: { ans: 9, ex: 'a na kvadrat.' },
    },
  ],
});

function renderSim(extra = {}) {
  const onDone = vi.fn();
  const exam = FIX_EXAM();
  const utils = render(
    React.createElement(Sim, {
      exam,
      practice: false,
      examMode: false,
      timedPractice: false,
      onExit: () => {},
      onHome: () => {},
      onDone,
      userData: { xp: 0, streak: 0, history: [], errorTracker: {} },
      onPracticeErrors: () => {},
      onPracticeSimilar: () => {},
      onStats: () => {},
      onFilter: () => {},
      onPatchResult: () => {},
      ...extra,
    })
  );
  return { ...utils, onDone, exam };
}

beforeEach(() => {
  localStorage.clear();
  pushConfig({});
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe('Sim: puni put kroz ispit (mc + sa + num)', () => {
  it('odgovara, navigira, predaje i vraca rezultat te history zapis', async () => {
    const { container, onDone, exam } = renderSim();

    // 1. zadatak (mc) - tocan odgovor A
    expect(screen.getByText('Zadatak 1/3')).toBeTruthy();
    const opts = container.querySelectorAll('.opt');
    expect(opts).toHaveLength(4);
    fireEvent.click(opts[0]);
    expect(container.querySelector('.opt.sel')).toBeTruthy();

    // navigacija naprijed
    fireEvent.click(screen.getByText(/Sljedeći/));
    expect(screen.getByText('Zadatak 2/3')).toBeTruthy();

    // 2. zadatak (sa) - opisni, ide u samoocjenjivanje, ne u automatski rezultat
    const saInput = container.querySelector('input.finp');
    expect(saInput).toBeTruthy();
    fireEvent.change(saInput, { target: { value: 'x=2' } });

    // navigacija natrag pa opet naprijed - odgovor mora prezivjeti
    fireEvent.click(screen.getByText(/Prethodni/));
    expect(screen.getByText('Zadatak 1/3')).toBeTruthy();
    expect(container.querySelector('.opt.sel')).toBeTruthy();
    fireEvent.click(screen.getByText(/Sljedeći/));
    expect(container.querySelector('input.finp').value).toBe('x=2');

    // 3. zadatak (num) - namjerno netocan, da rezultat ne bude 100 % (bez konfeta)
    fireEvent.click(screen.getByText(/Sljedeći/));
    expect(screen.getByText('Zadatak 3/3')).toBeTruthy();
    fireEvent.change(container.querySelector('input.finp'), { target: { value: '8' } });

    // predaja: Zavrsi ispit -> pregled -> Predaj ispit
    fireEvent.click(screen.getByText(/Završi ispit/));
    expect(screen.getByText('Pregled prije predaje')).toBeTruthy();
    fireEvent.click(screen.getByText(/Predaj ispit/));

    // ekran rezultata
    expect(container.querySelector('.results')).toBeTruthy();
    const bdk = [...container.querySelectorAll('.bdk-val')].map((n) => n.textContent);
    // tocnih / netocnih / neodgovorenih / bodova; sa se ne broji u automatskom rezultatu
    expect(bdk).toEqual(['1', '1', '0', '1/2']);
    expect(container.textContent).toContain('1/2 zadataka točno');

    // resume zapis se cisti pri predaji
    expect(localStorage.getItem('mat_resume') || '').toBe('');

    // history zapis (onDone payload) - iz njega app/app.tsx slaze userData.history
    await waitFor(() => expect(onDone).toHaveBeenCalledTimes(1));
    const rec = onDone.mock.calls[0][0];
    expect(rec.examKey).toBe(exam.key);
    expect(rec.examLabel).toBe('2099  -  Ljeto B');
    expect(rec.razina).toBe('B');
    expect(rec.pct).toBe(50);
    expect(rec.grade).toBe(grade(50));
    expect(rec.cor).toBe(1);
    expect(rec.total).toBe(2); // opisni (sa) nije u automatskom rezultatu
    expect(rec.examMode).toBe(false);
    expect(rec.answers).toEqual({ 1: 'A', 2: 'x=2', 3: '8' });
    expect(rec.topic_breakdown).toEqual({
      br: { correct: 1, total: 1, points: 1, earned: 1 },
      geo: { correct: 0, total: 1, points: 1, earned: 0 },
    });
    // Zateceno ponasanje: finishExam salje qTimes iz svog rendera, pa vrijeme
    // zadnjeg zadatka (recordTime u istoj funkciji) jos nije u zapisu.
    expect(Object.keys(rec.qTimes).sort()).toEqual(['1', '2']);
    expect(rec.errorTags).toEqual({});
  });

  it('navigator skace na zadani zadatak, oznaka (F) se pamti', () => {
    const { container } = renderSim();

    // skok preko navigatora u bocnom stupcu
    const gridBtns = container.querySelectorAll('.sidebar .qgrid-btn');
    expect(gridBtns.length).toBe(3);
    fireEvent.click(gridBtns[2]);
    expect(screen.getByText('Zadatak 3/3')).toBeTruthy();

    // oznaci zadatak prekidacem na tipkovnici
    fireEvent.keyDown(window, { key: 'f' });
    expect(container.querySelector('.qicon.on-flag')).toBeTruthy();
    expect(container.querySelector('.sidebar .qgrid-btn.flag')).toBeTruthy();

    // oznaka prezivi navigaciju
    fireEvent.click(screen.getByText(/Prethodni/));
    expect(container.querySelector('.qicon.on-flag')).toBeNull();
    fireEvent.click(screen.getByText(/Sljedeći/));
    expect(container.querySelector('.qicon.on-flag')).toBeTruthy();
  });

  it('vjezba: provjera MC odgovora otkriva rjesenje i broji tocnost', () => {
    const { container } = renderSim({ practice: true });

    fireEvent.click(container.querySelectorAll('.opt')[0]);
    fireEvent.click(screen.getByText(/Provjeri odgovor/));
    expect(container.querySelector('.opt.ok')).toBeTruthy();
    expect(container.querySelector('.acc-ring')).toBeTruthy();
  });

  it('nastavak sesije (resume) vraca odgovore, poziciju i oznake', () => {
    const { container } = renderSim({
      resume: { cur: 1, answers: { 1: 'A' }, flag: { 2: true }, conf: {}, qTimes: { 1: 12 } },
    });

    expect(screen.getByText('Zadatak 2/3')).toBeTruthy();
    expect(container.querySelector('.qicon.on-flag')).toBeTruthy();
    fireEvent.click(screen.getByText(/Prethodni/));
    expect(container.querySelector('.opt.sel')).toBeTruthy();
  });
});

// Sim 2/4: zaglavlje (SimHeader), sat (SimTimer) i navigacija po pitanjima (SimNav)
// zive u zasebnim komponentama. Testovi ispod drze njihovo ponasanje na mjestu.
function navGridButtons(container) {
  return [...container.querySelectorAll('.qgrid-btn')].filter((b) => !b.closest('.sidebar'));
}

describe('Sim: zaglavlje, sat i navigacija', () => {
  it('zaglavlje prikazuje ispit, razinu i poziciju te otvara izlazni modal', () => {
    const { container } = renderSim();
    const nav = container.querySelector('.nav');
    expect(nav).toBeTruthy();
    expect(nav.textContent).toContain('2099  -  Ljeto B');
    expect(nav.textContent).toContain('B · osnovna');

    const navBtn = container.querySelector('button[title="Navigator zadataka"]');
    expect(navBtn.textContent).toContain('1/3');

    fireEvent.click(nav.querySelector('button'));
    expect(screen.getByText('Prekid ispita?')).toBeTruthy();
  });

  it('mobilni navigator skace na zadatak i zatvara se nakon skoka', () => {
    const { container } = renderSim();
    expect(navGridButtons(container)).toHaveLength(0);

    fireEvent.click(container.querySelector('button[title="Navigator zadataka"]'));
    const sheet = navGridButtons(container);
    expect(sheet).toHaveLength(3);

    fireEvent.click(sheet[1]);
    expect(screen.getByText('Zadatak 2/3')).toBeTruthy();
    expect(navGridButtons(container)).toHaveLength(0);
  });

  it('izbornik "vise opcija" skace na prvi neodgovoreni zadatak', () => {
    const { container } = renderSim();
    fireEvent.click(container.querySelectorAll('.opt')[0]);

    fireEvent.click(container.querySelector('button[title="Više opcija"]'));
    fireEvent.click(screen.getByText('Skoči na neodgovoreni'));
    expect(screen.getByText('Zadatak 2/3')).toBeTruthy();
  });

  it('filtar po temi skace na temu, "sakrij rijesene" mice rijesene iz palete', () => {
    const { container } = renderSim();
    const sel = container.querySelector('.sidebar .nav-filters select');
    expect(sel).toBeTruthy();
    // opcije: placeholder + po jedna tema u redoslijedu zadataka (br, alg, geo)
    expect(sel.options).toHaveLength(4);
    fireEvent.change(sel, { target: { value: sel.options[3].value } });
    expect(screen.getByText('Zadatak 3/3')).toBeTruthy();
    // Zateceno ponasanje: bocni stupac usporeduje sirovi topic s odabranom OZNAKOM
    // teme, pa prigusi sve zadatke; donji sheet usporeduje oznaku i prigusi samo druge.
    expect(container.querySelectorAll('.sidebar .qgrid-btn.nf-dim')).toHaveLength(3);
    fireEvent.click(container.querySelector('button[title="Navigator zadataka"]'));
    expect(navGridButtons(container).filter((b) => b.classList.contains('nf-dim'))).toHaveLength(2);
    fireEvent.click([...container.querySelectorAll('button')].find((b) => b.textContent === '✕'));
    expect(navGridButtons(container)).toHaveLength(0);

    // odgovori na 3. zadatak, pa se makni s njega i sakrij rijesene
    fireEvent.change(container.querySelector('input.finp'), { target: { value: '9' } });
    fireEvent.click(screen.getByText(/Prethodni/));
    expect(container.querySelectorAll('.sidebar .qgrid-btn')).toHaveLength(3);
    fireEvent.click(container.querySelector('.sidebar .nf-toggle'));
    expect(container.querySelectorAll('.sidebar .qgrid-btn')).toHaveLength(2);
  });

  it('sat: timed vjezba prikazuje tajmer i budzet vremena u zaglavlju', () => {
    const { container } = renderSim({ practice: true, timedPractice: true });
    const nav = container.querySelector('.nav');
    expect(nav.querySelector('.timer')).toBeTruthy();
    expect(nav.querySelector('.timer').textContent).toMatch(/\d+:\d\d/);
    const budget = nav.querySelector('.time-budget');
    expect(budget).toBeTruthy();
    expect(budget.textContent).toContain('DIO 1');
    expect(budget.textContent).toContain('DIO 2');
  });
});
