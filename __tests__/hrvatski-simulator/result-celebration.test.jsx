// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import confetti from 'canvas-confetti';
import { Sim } from '@/app/discere/hrvatski/simulator/components/Sim';
vi.mock('canvas-confetti', () => ({ default: vi.fn() }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
const exam = { key: 'celebration', year: 2024, label: 'Test', qs: [
  { id: 1, type: 'mc', topic: 'jezik', q: 'Question', opts: ['Correct', 'Wrong'], sol: { cl: 'A' } },
] };
beforeEach(() => { vi.useFakeTimers(); confetti.mockClear(); localStorage.clear(); });
afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals(); });
function finish() {
  const view = render(<Sim exam={exam} practice isPaid userAccess={{ isLoggedIn: true, subscriptionTier: 'standard' }} />);
  fireEvent.click(screen.getByText('Correct'));
  fireEvent.click(screen.getByText(/Završi ispit/));
  return view;
}

it('keeps all three celebration bursts for a top score', () => {
  finish();
  expect(confetti).toHaveBeenCalledTimes(1);
  act(() => vi.advanceTimersByTime(500));
  expect(confetti).toHaveBeenCalledTimes(3);
});

it('does not leave animation frames or delayed bursts after unmount', () => {
  const frames = new Map();
  let id = 0;
  vi.stubGlobal('requestAnimationFrame', callback => { frames.set(++id, callback); return id; });
  vi.stubGlobal('cancelAnimationFrame', frame => frames.delete(frame));
  const view = finish();
  act(() => { for (const [frame, callback] of [...frames]) { frames.delete(frame); callback(100); } });
  view.unmount();
  expect(frames.size).toBe(0);
  act(() => vi.advanceTimersByTime(500));
  expect(confetti).toHaveBeenCalledTimes(1);
});
