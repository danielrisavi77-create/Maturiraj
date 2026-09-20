// @vitest-environment happy-dom
/**
 * results-gating.test.jsx
 *
 * Besplatan ispitni mod u matematici + zaključana razrada rezultata:
 *   - free korisnik nakon predaje vidi ocjenu/postotak/bodove/XP, ali ni jedan
 *     točan odgovor, pregled zadataka ni "Vježbaj greške" nisu u DOM-u
 *   - standard korisnik vidi punu razradu (revlist, točni odgovori) i nema CTA
 *   - anti-leak: zaključan ispit se u ispitnom modu učitava u side-store, a
 *     EXAMS[key].qs ostaje prazan — inače bi ga ~15 cross-exam modova (SRS,
 *     browse, virtualni, filter, adaptivni…) podijelilo free korisniku
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
// Monolit je razbijen u components/simulator/mat/*; MatEngineCore je jos uvijek javni API
// (shim), pa Sim i loader idu preko njega. EXAMS nije dio javnog API-ja — dolazi izravno
// iz modula, jer anti-leak tvrdnja je bas o tom objektu.
import * as core from '@/components/simulator/MatEngineCore';
import { EXAMS } from '@/components/simulator/mat/core/exams';
// Statistika rekonstruira analizu po temama iz history[].topic_breakdown, pa je gate
// na rezultatima bez vrijednosti ako je isti podatak jedan klik dalje ("📊 Statistika").
import { StatsScreen, PDFReportScreen } from '@/components/simulator/mat/screens/stats';

const { Sim } = core;

function mkQs(n = 3) {
  return Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    type: 'mc',
    topic: 'br',
    q: `Zadatak broj ${i + 1}?`,
    opts: ['Prva opcija', 'Druga opcija', 'Treća opcija', 'Četvrta opcija'],
    // zadnji zadatak je netočan kad se svugdje odgovori A → 2/3, bez konfeta na 100 %
    sol: { cl: i === n - 1 ? 'B' : 'A' },
  }));
}

function mkExam(key = '2019_ljeto_B') {
  return { key, year: 2019, season: 'ljeto', razina: 'B', label: 'B', duration: 3600, qs: mkQs(3) };
}

// Engine čita tier i freeExam iz DISCERE_CONFIG poruke koju šalje MatFullSimulator.
function pushConfig(cfg) {
  const data = { type: 'DISCERE_CONFIG', isPro: false, isPaid: false, freeExam: true, ...cfg };
  window.dispatchEvent(new MessageEvent('message', { data }));
}

// Odgovori A na svaki zadatak i predaj ispit (Završi ispit → Predaj ispit).
function answerAllAndSubmit(container, qCount) {
  for (let i = 0; i < qCount; i++) {
    fireEvent.click(container.querySelectorAll('.opt')[0]);
    if (i < qCount - 1) fireEvent.click(screen.getByText(/Sljedeći/));
  }
  fireEvent.click(screen.getByText(/Završi ispit/));
  fireEvent.click(screen.getByText(/Predaj ispit/));
}

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  cleanup();
});

describe('rezultati ispita — razrada iza Standard plana', () => {
  it('free: ocjena, bodovi i XP vidljivi; točni odgovori i pregled zadataka nisu u DOM-u', () => {
    pushConfig({ isPaid: false });
    const exam = mkExam();
    const { container } = render(
      <Sim exam={exam} examMode practice={false} onExit={() => {}} onDone={() => {}}
        onPracticeErrors={() => {}} onFilter={() => {}} />
    );

    answerAllAndSubmit(container, exam.qs.length);

    expect(container.querySelector('.results')).toBeTruthy();
    expect([...container.querySelectorAll('.bdk-val')].map((n) => n.textContent)).toContain('2/3');
    expect(screen.getByText(/XP$/)).toBeTruthy();

    // Razrada NE smije biti u DOM-u — blur sam po sebi nije zaštita.
    expect(container.querySelector('.revlist')).toBeNull();
    expect(screen.queryByText('Pregled zadataka')).toBeNull();
    expect(screen.queryByText('Pregled po temama')).toBeNull();
    expect(container.textContent).not.toContain('Točno:');
    expect(screen.queryByText(/Vježbaj greške/)).toBeNull();
    expect(screen.queryByText('Vježbaj po temi')).toBeNull();

    expect(container.querySelector('a[href^="/pro?from=mat-results"]')).toBeTruthy();
  });

  it('standard: revlist, točni odgovori i "Vježbaj greške" su tu, bez zaključanog bloka', () => {
    pushConfig({ isPaid: true });
    const exam = mkExam();
    const { container } = render(
      <Sim exam={exam} examMode practice={false} onExit={() => {}} onDone={() => {}}
        onPracticeErrors={() => {}} onFilter={() => {}} />
    );

    answerAllAndSubmit(container, exam.qs.length);

    expect(container.querySelector('.revlist')).toBeTruthy();
    expect(screen.getByText('Pregled zadataka')).toBeTruthy();
    expect(container.textContent).toContain('Točno:');
    expect(screen.getByText(/Vježbaj greške/)).toBeTruthy();
    expect(screen.getByText('Vježbaj po temi')).toBeTruthy();

    expect(container.querySelector('a[href^="/pro?from=mat-results"]')).toBeNull();
  });
});

describe('zaključan ispit u besplatnom ispitnom modu — banka pitanja ne curi', () => {
  it('loadExam odbija bez forExamMode, a s njim ne puni EXAMS[key].qs', async () => {
    core.__setExamCatalog([
      { key: '2010_ljeto_B', year: 2010, season: 'ljeto', razina: 'B', label: 'B', questionCount: 3, locked: true },
      { key: '2016_ljeto_B', year: 2016, season: 'ljeto', razina: 'B', label: 'B', questionCount: 3, locked: false },
    ]);
    core.__setExamLoader(() => Promise.resolve({ qs: mkQs(3) }));

    pushConfig({ freeExam: false });
    await expect(core.loadExam('2010_ljeto_B')).rejects.toThrow(/zakljucan/i);

    pushConfig({ freeExam: true });
    await expect(core.loadExam('2010_ljeto_B')).rejects.toThrow(/zakljucan/i);

    const examOnly = await core.loadExam('2010_ljeto_B', true, true);
    expect(examOnly.qs).toHaveLength(3);
    expect(core.examOnlyQs('2010_ljeto_B')).toHaveLength(3);
    expect(core.isExamOnlyLoaded('2010_ljeto_B')).toBe(true);
    // Ovo je cijela poanta: cross-exam modovi čitaju EXAMS[key].qs, koji ostaje prazan.
    expect(core.isExamLoaded('2010_ljeto_B')).toBe(false);
    expect(EXAMS['2010_ljeto_B'].qs).toHaveLength(0);
    expect(EXAMS['2010_ljeto_B']._loaded).toBe(false);

    await core.loadExam('2016_ljeto_B');
    expect(core.isExamLoaded('2016_ljeto_B')).toBe(true);
    expect(core.examOnlyQs('2016_ljeto_B')).toHaveLength(0);
  });
});

describe('besplatan ispitni mod — oznake (Shift+F) ne spremaju tekst zadatka', () => {
  // U ispitnom modu QSX su pitanja zaključanog ispita (__EXAM_ONLY). Prečac je prije
  // pisao {examKey, q:'<tekst zadatka>'} u mat_bookmarks → localStorage + DISCERE_SAVE +
  // korisnikov "⬇ Izvezi" backup, a BookmarksScreen ga ionako ne može razriješiti.
  it('Shift+F u ispitnom modu ne upiše ništa u mat_bookmarks', () => {
    pushConfig({ isPaid: false });
    const exam = mkExam('2010_ljeto_B');
    render(<Sim exam={exam} examMode practice={false} onExit={() => {}} onDone={() => {}} />);

    fireEvent.keyDown(window, { key: 'F', shiftKey: true });

    expect(localStorage.getItem('mat_bookmarks')).toBeNull();
  });

  it('izvan ispitnog moda prečac i dalje sprema oznaku', () => {
    pushConfig({ isPaid: true });
    const exam = mkExam();
    render(<Sim exam={exam} examMode={false} practice={false} onExit={() => {}} onDone={() => {}} />);

    fireEvent.keyDown(window, { key: 'F', shiftKey: true });

    const saved = JSON.parse(localStorage.getItem('mat_bookmarks') || '{}');
    expect(Object.keys(saved)).toHaveLength(1);
    expect(Object.values(saved)[0].q).toContain('Zadatak broj 1');
  });
});

// Ista analiza po temama koju rezultati skrivaju iza LockedResultsBlocka dostupna je
// sa "📊 Statistika" (rezultati) i s Početne — pa gate mora vrijediti i u StatsScreenu.
const statsUserData = () => ({
  xp: 300, streak: 2,
  history: [1, 2].map((i) => ({
    examKey: '2010_ljeto_B', examLabel: 'Ispit ' + i, razina: 'B', date: i + '.1.2025.', hour: 12,
    pct: 40 + i * 5, grade: 2, cor: 8 + i, total: 20, mode: 'simulacija', examMode: true,
    qTimes: { 1: 30 },
    topic_breakdown: { kv: { correct: 1, total: 5 }, lin: { correct: 4, total: 5 } },
  })),
  errorTracker: {},
});

describe('statistika — analiza po temama je iza istog gatea kao rezultati', () => {
  it('free: teme, postoci i tab "Teme" nisu u DOM-u, nego CTA na Standard', () => {
    pushConfig({ isPaid: false });
    const { container } = render(
      <StatsScreen userData={statsUserData()} onBack={() => {}} onPDFReport={() => {}} />
    );

    expect(container.textContent).not.toContain('Kvadratne funkcije');
    expect(container.textContent).not.toContain('Linearne funkcije');
    expect(container.textContent).not.toContain('Najslabija tema');
    expect(container.textContent).not.toContain('Mapa znanja');
    expect(screen.queryByText(/Teme$/)).toBeNull();
    // Ostaje ono što je besplatno: broj ispita, prosjek, rekord, XP.
    expect(container.textContent).toContain('Prosjek');
    expect(container.querySelector('a[href^="/pro?from=mat-results"]')).toBeTruthy();
  });

  it('standard: teme i najslabija/najjača tema su tu, bez CTA-a', () => {
    pushConfig({ isPaid: true });
    const { container } = render(
      <StatsScreen userData={statsUserData()} onBack={() => {}} onPDFReport={() => {}} />
    );

    expect(container.textContent).toContain('Najslabija tema');
    expect(container.textContent).toContain('Kvadratne funkcije');
    expect(container.querySelector('a[href^="/pro?from=mat-results"]')).toBeNull();
  });

  it('PDF izvještaj: free ne dobiva slabe/jake teme', () => {
    pushConfig({ isPaid: false });
    const { container } = render(<PDFReportScreen userData={statsUserData()} onBack={() => {}} />);

    expect(container.textContent).not.toContain('Slabe teme');
    expect(container.textContent).not.toContain('Kvadratne funkcije');
    expect(container.querySelector('a[href^="/pro?from=mat-results"]')).toBeTruthy();
  });
});
