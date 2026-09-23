// @vitest-environment happy-dom
/**
 * results-gating.test.jsx
 *
 * Renderira Results (components/engleski-simulator/screens/ResultsScreen.js) sa
 * sintetičkim ispitom više razine i provjerava politiku besplatnog ispita:
 *   - free korisnik vidi ocjenu/postotak, statove, 'Po ispitnim cjelinama' i
 *     'Rezultati po tipu pitanja', ali razrada (tekst pitanja, točni odgovori,
 *     obrazloženja, AnswerHelper, analiza po temama, vježbanje grešaka) NIJE u
 *     DOM-u — samo LockedResultsBlock s CTA-om prema Standardu,
 *   - pro korisnik vidi punu razradu bez ijednog zaključanog bloka,
 *   - checkSimulatorAccess: ispit je besplatan, vježbanje ostaje na FREE_LIMIT.
 *
 * AnswerHelper i AnalyticsPanel su stubovi s prepoznatljivim tekstom — tako se
 * vidi je li komponenta uopće renderirana, bez vučenja pravih ekrana.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { Results } from '@/components/engleski-simulator/screens/ResultsScreen';
import { chk, grade, scoreLookup } from '@/lib/engleski-simulator/scoring';
import { LL, TLBL, TOPIC_LABELS, LEVEL_NAMES, getLevel } from '@/lib/engleski-simulator/constants';
import { checkSimulatorAccess, FREE_LIMIT } from '@/components/discere/paywall/paywallHelpers';
import { FREE_ACCESS, PRO_ACCESS } from './_synthExam.js';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => '/engleski-simulator',
  useSearchParams: () => new URLSearchParams(),
}));

const GC = { 1: 'var(--red)', 2: 'var(--gold)', 3: 'var(--blue)', 4: 'var(--teal)', 5: 'var(--green)' };

function mc({ id, section }) {
  return {
    id,
    section,
    type: 'mc',
    topic: section,
    q: id + '-TEXT',
    opts: [id + '-optA', id + '-optB', id + '-optC'],
    sol: { cl: 'A' },
    exp: 'Obrazloženje za ' + id,
  };
}

const EXAM = {
  key: 'vis_2024_prvi',
  year: 2024,
  season: 'prvi',
  label: 'Prvi rok',
  razina: 'visa',
  qs: [mc({ id: 'R1', section: 'reading' }), mc({ id: 'R2', section: 'reading' }), mc({ id: 'L1', section: 'listening' })],
};
// R2 je namjerno netočan — bez pogreške nema ni 'Pogrešni odgovori' ni 'Vježbaj greške'
const ANSWERS = { R1: 'A', R2: 'B', L1: 'A' };

const AnswerHelper = ({ q }) => <div>{'HELPER:' + q.id}</div>;
const AnalyticsPanel = () => <div>ANALYTICS-PANEL</div>;

// Ono što free korisnik stvarno dobije nakon ADR-001: pitanja BEZ ključa i
// obrazloženja, a točno/netočno po pitanju iz odgovora ocjenjivačke rute.
const STRIPPED_EXAM = {
  ...EXAM,
  qs: EXAM.qs.map(({ sol, exp, ...rest }) => rest),
};
const SERVER_SCORES = { R1: true, R2: false, L1: true };

function renderResults(canSeeAnalysis, { exam = EXAM, chkFn = chk } = {}) {
  return render(
    <Results
      exam={exam}
      answers={ANSWERS}
      qTimes={{}}
      userData={{ history: [{ examKey: EXAM.key, pct: 67 }] }}
      onBack={() => {}}
      onPracticeErrors={() => {}}
      onGoFilter={() => {}}
      onGoStats={() => {}}
      chk={chkFn}
      grade={grade}
      GC={GC}
      TLBL={TLBL}
      TOPIC_LABELS={TOPIC_LABELS}
      LL={LL}
      AnswerHelper={AnswerHelper}
      AnalyticsPanel={AnalyticsPanel}
      LEVEL_NAMES={LEVEL_NAMES}
      getLevel={getLevel}
      canSeeAnalysis={canSeeAnalysis}
    />
  );
}

describe('ResultsScreen — gating razrade po planu', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });
  afterEach(() => cleanup());

  it('free: ocjena, postotak i bodovni pregled da — razrada ne ulazi u DOM', () => {
    const { container } = renderResults(false);

    expect(container.querySelector('.score-ring-pct').textContent).toMatch(/^\d+%$/);
    expect(screen.getByText('Točnih')).toBeTruthy();
    expect(screen.getByText('Netočnih')).toBeTruthy();
    expect(screen.getByText('Po ispitnim cjelinama')).toBeTruthy();
    expect(screen.getByText('Rezultati po tipu pitanja')).toBeTruthy();

    expect(screen.queryByText('R1-TEXT')).toBeNull();
    expect(screen.queryByText(/Obrazloženje za/)).toBeNull();
    expect(screen.queryByText(/^HELPER:/)).toBeNull();
    expect(screen.queryByText(/Točno: A/)).toBeNull();
    expect(screen.queryByText('Pregled svih pitanja')).toBeNull();
    expect(screen.queryByText('Rezultati po temi')).toBeNull();
    expect(screen.queryByText(/Vježbaj greške/)).toBeNull();
    expect(screen.queryByText('ANALYTICS-PANEL')).toBeNull();
    expect(container.querySelector('.revlist')).toBeNull();

    // Jedan bit po pitanju smije se vidjeti: mrežica ✓/✗ bez ijednog teksta pitanja.
    expect(screen.getByText('Po pitanjima')).toBeTruthy();
    expect(screen.getByText('Točan odgovor i obrazloženje dolaze uz Standard.')).toBeTruthy();
    const cells = container.querySelectorAll('.res-qgrid .res-qcell');
    expect(cells.length).toBe(3);
    cells.forEach((c) => {
      expect(c.querySelector('.res-qcell-mark').textContent).toMatch(/^[✓✗–]$/);
      expect(c.textContent).not.toMatch(/-TEXT|-opt/);
    });

    const cta = container.querySelector('a[href^="/pro?from=eng-results"]');
    expect(cta).toBeTruthy();
    expect(cta.textContent).toBe('Otključaj razradu → Standard');
  });

  it('pro: puna razrada u DOM-u, bez zaključanog bloka', () => {
    const { container } = renderResults(true);

    expect(screen.getByText('Pregled svih pitanja')).toBeTruthy();
    expect(screen.getByText('R1-TEXT')).toBeTruthy();
    expect(screen.getByText(/Obrazloženje za R2/)).toBeTruthy();
    expect(screen.getByText('HELPER:R1')).toBeTruthy();
    expect(screen.getByText(/Vježbaj greške/)).toBeTruthy();
    expect(screen.getByText('ANALYTICS-PANEL')).toBeTruthy();
    expect(container.querySelector('.revlist')).toBeTruthy();

    // Plaćeni prikaz je nepromijenjen — kompaktna mrežica je samo free zamjena.
    expect(container.querySelector('.res-qgrid')).toBeNull();
    expect(screen.queryByText('Po pitanjima')).toBeNull();
    expect(screen.queryByText(/dolaze uz Standard\./)).toBeNull();

    expect(container.querySelector('a[href^="/pro?from=eng-results"]')).toBeNull();
  });
});

describe('ResultsScreen — free ekran bez ijednog ključa u pitanjima', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });
  afterEach(() => cleanup());

  it('prsten, statovi i obje kartice rade iz serverskih scores, bez sol/exp', () => {
    const { container } = renderResults(false, {
      exam: STRIPPED_EXAM,
      chkFn: scoreLookup(SERVER_SCORES),
    });

    // Ni jedno pitanje nema ključ — to je payload koji free korisnik doista dobiva.
    expect(JSON.stringify(STRIPPED_EXAM)).not.toMatch(/"(sol|exp)"\s*:/);

    expect(container.querySelector('.score-ring-pct').textContent).toBe('67%');
    expect(screen.getByText('Po ispitnim cjelinama')).toBeTruthy();
    expect(screen.getByText('Rezultati po tipu pitanja')).toBeTruthy();
    // 2 od 3 točna: Čitanje 1/2, Slušanje 1/1
    expect(screen.getByText('1 / 2')).toBeTruthy();
    expect(screen.getByText('1 / 1')).toBeTruthy();

    // Mrežica po pitanjima: jedna stavka po automatski ocjenjivom pitanju,
    // oznaka ✓/✗ točno prema serverskim scores (R1 ✓, R2 ✗, L1 ✓).
    const cells = container.querySelectorAll('.res-qgrid .res-qcell');
    expect(cells.length).toBe(STRIPPED_EXAM.qs.filter((q) => q.type !== 'sa' && q.type !== 'es').length);
    expect([...cells].map((c) => c.querySelector('.res-qcell-mark').textContent)).toEqual(['✓', '✗', '✓']);
    expect([...cells].map((c) => c.className)).toEqual(['res-qcell ok', 'res-qcell bad', 'res-qcell ok']);
    expect([...cells].map((c) => c.querySelector('.res-qcell-num').textContent)).toEqual(['1', '2', '3']);
    // ...ali i dalje ni teksta pitanja, ni opcija, ni obrazloženja.
    const gridText = container.querySelector('.res-qgrid').textContent;
    expect(gridText).not.toMatch(/-TEXT|-opt/);
    expect(screen.queryByText('R1-TEXT')).toBeNull();

    expect(screen.queryByText(/Obrazloženje za/)).toBeNull();
    expect(screen.queryByText(/Točno: A/)).toBeNull();
    expect(container.querySelector('a[href^="/pro?from=eng-results"]')).toBeTruthy();
  });

  it('paid razrada nad okljaštrenim ispitom ne pada, samo izostavi ključ', () => {
    // Ne bi se smjelo dogoditi (paid dobiva keys:"full"), ali degradacija mora
    // biti tiha — prije bi `q.sol.cl` ovdje srušio cijeli ekran.
    expect(() => renderResults(true, {
      exam: STRIPPED_EXAM,
      chkFn: scoreLookup(SERVER_SCORES),
    })).not.toThrow();
    expect(screen.getByText('Pregled svih pitanja')).toBeTruthy();
    expect(screen.queryByText(/✓ Točno: A/)).toBeNull();
  });
});

describe('checkSimulatorAccess — ispit besplatan, vježbanje na FREE_LIMIT', () => {
  it('prijavljeni free korisnik prolazi cijeli ispit', () => {
    expect(checkSimulatorAccess(FREE_ACCESS, 0, { freeExam: true }).canProceed).toBe(true);
    expect(checkSimulatorAccess(FREE_ACCESS, FREE_LIMIT + 10, { freeExam: true }).canProceed).toBe(true);
  });

  it('u vježbanju free korisnik staje na FREE_LIMIT, pro ne staje', () => {
    expect(checkSimulatorAccess(FREE_ACCESS, FREE_LIMIT - 1, { freePractice: true }).canProceed).toBe(true);
    const locked = checkSimulatorAccess(FREE_ACCESS, FREE_LIMIT, { freePractice: true });
    expect(locked.canProceed).toBe(false);
    expect(locked.reason).toBe('limit-reached');
    expect(checkSimulatorAccess(PRO_ACCESS, FREE_LIMIT, { freePractice: true }).canProceed).toBe(true);
  });

  it('gost ostaje na prijavi i u ispitnom modu', () => {
    const guest = checkSimulatorAccess({ subscriptionTier: 'free', isLoggedIn: false }, 0, { freeExam: true });
    expect(guest.canProceed).toBe(false);
    expect(guest.reason).toBe('not-logged-in');
  });
});
