// @vitest-environment happy-dom
/**
 * results-gating.test.jsx
 *
 * Renderira Sim (app/discere/hrvatski/simulator/components/Sim.jsx) izravno,
 * s malim sintetičkim ispitom (5 mc pitanja), i provjerava:
 *   - free korisnik nakon predaje ispita vidi ocjenu/postotak, ali NE vidi
 *     obrazloženja ni točne odgovore (canSeeHrvAnalysis === false) i vidi
 *     CTA link prema /pro?from=hrv-results
 *   - standard korisnik vidi punu razradu (obrazloženja, "Pregled pitanja")
 *     bez ijednog zaključanog bloka
 *   - paywall gate za vježbanje (FREE_LIMIT=3) se ne pojavljuje za besplatni
 *     ispit 2016_ljeto_B, ali se pojavljuje za ostale (2019_ljeto_B)
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Sim } from '@/app/discere/hrvatski/simulator/components/Sim.jsx';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => '/discere/hrvatski/simulator',
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock('@/lib/hooks/useAuth', () => ({
  useAuth: () => ({ user: null, isPro: false, isPaid: false, loading: false }),
}));

vi.mock('@/lib/discere-sim-state', () => ({}));
vi.mock('@/lib/sim-progress', () => ({}));
vi.mock('@/lib/analytics/tracker', () => ({}));
vi.mock('canvas-confetti', () => ({ default: vi.fn() }));

function mkExam(key, year) {
  const qs = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    type: 'mc',
    topic: 'jezik',
    q: `Pitanje broj ${i + 1}?`,
    opts: ['Prva opcija', 'Druga opcija', 'Treća opcija', 'Četvrta opcija'],
    sol: { cl: 'A' },
    exp: `Obrazloženje za pitanje ${i + 1}.`,
  }));
  return { key, year, season: 'ljeto', razina: 'B', label: 'B', qs };
}

const FREE_ACCESS = { subscriptionTier: 'free', isLoggedIn: true };
const STANDARD_ACCESS = { subscriptionTier: 'standard', isLoggedIn: true };

beforeEach(() => {
  localStorage.clear();
  global.fetch = vi.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve({ n: 0, percentile: null }) })
  );
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

// Odgovori na svako pitanje (opcija A, koja je uvijek točna u sintetičkom
// ispitu) i predaje ispit klikom na "Sljedeće →" / "Završi ispit ✓".
function answerAllAndSubmit(qCount) {
  for (let i = 0; i < qCount - 1; i++) {
    fireEvent.click(screen.getByText('Prva opcija'));
    fireEvent.click(screen.getByText(/Sljedeće/));
  }
  fireEvent.click(screen.getByText('Prva opcija'));
  fireEvent.click(screen.getByText(/Završi ispit/));
}

describe('rezultati ispita — gating po planu (examMode)', () => {
  it('free korisnik: ocjena i postotak vidljivi, obrazloženja i točni odgovori nisu, CTA prema Standardu', async () => {
    vi.useFakeTimers();
    const exam = mkExam('2019_ljeto_B', 2019);
    const { container } = render(
      <Sim
        exam={exam}
        examMode={true}
        practice={false}
        isPaid={false}
        userAccess={FREE_ACCESS}
        onExit={() => {}}
        onDone={() => {}}
      />
    );
    // Preskoči 3-2-1 odbrojavanje ispitnog moda.
    vi.advanceTimersByTime(3100);

    answerAllAndSubmit(exam.qs.length);

    expect(screen.getByText('ocjena testa')).toBeTruthy();
    expect(screen.getByText('100%')).toBeTruthy();

    // Razrada rezultata (obrazloženja, opcije, "Pregled pitanja") ne smije biti u DOM-u.
    expect(screen.queryByText(/Obrazloženje za pitanje/)).toBeNull();
    expect(screen.queryByText('Prva opcija')).toBeNull();
    expect(container.querySelector('.revlist')).toBeNull();

    const cta = container.querySelector('a[href^="/pro?from=hrv-results"]');
    expect(cta).toBeTruthy();
  });

  it('standard korisnik: obrazloženja i "Pregled pitanja" u DOM-u, bez zaključanog bloka', async () => {
    vi.useFakeTimers();
    const exam = mkExam('2019_ljeto_B', 2019);
    const { container } = render(
      <Sim
        exam={exam}
        examMode={true}
        practice={false}
        isPaid={true}
        userAccess={STANDARD_ACCESS}
        onExit={() => {}}
        onDone={() => {}}
      />
    );
    vi.advanceTimersByTime(3100);

    answerAllAndSubmit(exam.qs.length);

    expect(screen.getByText('ocjena testa')).toBeTruthy();
    expect(screen.getByText('100%')).toBeTruthy();
    expect(screen.getByText(/Pregled pitanja/)).toBeTruthy();
    expect(screen.getByText('Obrazloženje za pitanje 1.')).toBeTruthy();

    const cta = container.querySelector('a[href^="/pro?from=hrv-results"]');
    expect(cta).toBeNull();
  });
});

describe('paywall gate za vježbanje (FREE_LIMIT)', () => {
  it('2016_ljeto_B (besplatan ispit u cijelosti): gate se ne pojavljuje na 4. pitanju', () => {
    const exam = mkExam('2016_ljeto_B', 2016);
    render(
      <Sim
        exam={exam}
        examMode={false}
        practice={true}
        isPaid={false}
        userAccess={FREE_ACCESS}
        onExit={() => {}}
      />
    );
    fireEvent.click(screen.getByText(/Sljedeće/));
    fireEvent.click(screen.getByText(/Sljedeće/));
    fireEvent.click(screen.getByText(/Sljedeće/));

    expect(screen.getByText('Pit. 4 / 5')).toBeTruthy();
    expect(screen.queryByText(/pitanja gotovo/)).toBeNull();
  });

  it('2019_ljeto_B: gate se pojavljuje na 4. pitanju', () => {
    const exam = mkExam('2019_ljeto_B', 2019);
    render(
      <Sim
        exam={exam}
        examMode={false}
        practice={true}
        isPaid={false}
        userAccess={FREE_ACCESS}
        onExit={() => {}}
      />
    );
    fireEvent.click(screen.getByText(/Sljedeće/));
    fireEvent.click(screen.getByText(/Sljedeće/));
    fireEvent.click(screen.getByText(/Sljedeće/));

    expect(screen.queryByText('Pit. 4 / 5')).toBeNull();
    expect(screen.getByText(/pitanja gotovo/)).toBeTruthy();
  });
});
