// @vitest-environment happy-dom
/**
 * exam-resume.test.jsx
 *
 * Provjerava nastavak ispita preko localStorage zapisa discere_exam_<key>:
 *   - zapis s budućim rokom (deadline) preskače 3-2-1 odbrojavanje, prikazuje
 *     banner "Nastavljaš ispit" i vraća prethodno unesen odgovor
 *   - zapis s isteklim rokom se briše, ispit kreće od nule s punim odbrojavanjem
 *     (nema bannera, nema auto-predaje)
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

function mkExam() {
  const qs = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    type: 'mc',
    topic: 'jezik',
    q: `Pitanje broj ${i + 1}?`,
    opts: ['Prva opcija', 'Druga opcija', 'Treća opcija', 'Četvrta opcija'],
    sol: { cl: 'A' },
    exp: `Obrazloženje za pitanje ${i + 1}.`,
  }));
  return { key: '2019_ljeto_B', year: 2019, season: 'ljeto', razina: 'B', label: 'B', qs };
}

const STANDARD_ACCESS = { subscriptionTier: 'standard', isLoggedIn: true };
const EXAM_LS_KEY = 'discere_exam_2019_ljeto_B';

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

describe('nastavak ispita (exam-resume)', () => {
  it('uklanja slusatelje sesije kad ispit postane nedostupan', () => {
    const addListener = vi.spyOn(window, 'addEventListener');
    const removeListener = vi.spyOn(window, 'removeEventListener');
    const props = {
      exam: mkExam(), practice: true, examMode: false,
      isPaid: true, userAccess: STANDARD_ACCESS,
      onExit: vi.fn(), onDone: vi.fn(),
    };
    const { rerender } = render(<Sim {...props} />);
    const keyboardHandlers = addListener.mock.calls
      .filter(([type]) => type === 'keydown').map(([, handler]) => handler);
    expect(keyboardHandlers.length).toBeGreaterThan(0);

    rerender(<Sim {...props} exam={null} />);

    expect(screen.getByText('Ispit nije pronađen.')).toBeTruthy();
    for (const handler of keyboardHandlers) {
      expect(removeListener).toHaveBeenCalledWith('keydown', handler);
    }
    expect(props.onDone).not.toHaveBeenCalled();
  });

  it('budući rok: preskače 3-2-1, prikazuje banner i vraća unesen odgovor', () => {
    localStorage.setItem(EXAM_LS_KEY, JSON.stringify({
      deadline: Date.now() + 30 * 60 * 1000,
      answers: { 1: 'A' },
      cur: 1,
      flag: {},
      rev: {},
    }));

    const onDone = vi.fn();
    const { container } = render(
      <Sim
        exam={mkExam()}
        examMode={true}
        practice={false}
        isPaid={true}
        userAccess={STANDARD_ACCESS}
        onExit={() => {}}
        onDone={onDone}
      />
    );

    expect(container.querySelector('.exam-countdown')).toBeNull();
    expect(screen.getByText(/Nastavljaš ispit/)).toBeTruthy();
    expect(screen.getByText('Pit. 2 / 5')).toBeTruthy();

    fireEvent.click(screen.getByText(/Prethodno/));
    expect(screen.getByText('Pit. 1 / 5')).toBeTruthy();
    const optionA = screen.getByText('Prva opcija').closest('.opt');
    expect(optionA.className).toMatch(/\bsel\b/);

    expect(onDone).not.toHaveBeenCalled();
  });

  it('istekli rok: zapis se briše, ispit kreće ispočetka s odbrojavanjem, bez auto-predaje', () => {
    localStorage.setItem(EXAM_LS_KEY, JSON.stringify({
      deadline: Date.now() - 1000,
      answers: { 1: 'A' },
      cur: 1,
      flag: {},
      rev: {},
    }));

    const onDone = vi.fn();
    const { container } = render(
      <Sim
        exam={mkExam()}
        examMode={true}
        practice={false}
        isPaid={true}
        userAccess={STANDARD_ACCESS}
        onExit={() => {}}
        onDone={onDone}
      />
    );

    // Stari (istekli) zapis je odbačen — autosave efekt odmah nakon toga sprema
    // NOVU, praznu sesiju (odgovori se ne prenose iz odbačenog zapisa).
    const fresh = JSON.parse(localStorage.getItem(EXAM_LS_KEY));
    expect(fresh.answers).toEqual({});
    expect(fresh.cur).toBe(0);
    expect(screen.queryByText(/Nastavljaš ispit/)).toBeNull();
    const countdown = container.querySelector('.exam-countdown .ecd-num');
    expect(countdown).toBeTruthy();
    expect(countdown.textContent).toBe('3');
    expect(onDone).not.toHaveBeenCalled();
  });
});
