// @vitest-environment happy-dom
import React, { useLayoutEffect } from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { Sim } from '@/app/discere/hrvatski/simulator/components/Sim';
vi.mock('canvas-confetti', () => ({ default: vi.fn() }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
const exam = { key: 'timing', year: 2024, label: 'Test', qs: [1, 2].map(id => (
  { id, type: 'mc', topic: 'jezik', q: `Timing question ${id}`, opts: ['First', 'Second'], sol: { cl: 'A' } }
)) };
const access = { isLoggedIn: true, subscriptionTier: 'standard' };
beforeEach(() => { vi.useFakeTimers(); vi.setSystemTime(1000000); localStorage.clear(); });
afterEach(() => { cleanup(); vi.useRealTimers(); });

it('includes the latest question duration in the submitted result', () => {
  const onDone = vi.fn();
  render(<Sim exam={exam} practice isPaid userAccess={access} onDone={onDone} />);
  act(() => vi.advanceTimersByTime(2000));
  fireEvent.click(screen.getByText(/Sljedeće/));
  act(() => vi.advanceTimersByTime(4000));
  fireEvent.click(screen.getByText(/Završi ispit/));
  expect(onDone).toHaveBeenCalledOnce();
  expect(onDone.mock.calls[0][0].qTimes).toEqual({ 1: 2, 2: 4 });
});

it('commits a requested highlight before layout observers see the question', () => {
  const committed = [];
  function Parent({ highlight }) {
    useLayoutEffect(() => { committed.push(document.querySelector('.qtext')?.textContent); }, [highlight]);
    return <Sim exam={exam} practice isPaid userAccess={access} highlightQid={highlight} />;
  }
  const view = render(<Parent highlight={2} />);
  view.rerender(<Parent highlight={1} />);
  expect(committed).toEqual(['Timing question 2', 'Timing question 1']);
});

it('can repeat a highlight after it was cleared without resetting manual navigation', () => {
  const props = { exam, practice: true, isPaid: true, userAccess: access };
  const view = render(<Sim {...props} highlightQid={2} />);
  view.rerender(<Sim {...props} highlightQid={null} />);
  fireEvent.click(screen.getByText(/Prethodno/));
  expect(document.querySelector('.qtext').textContent).toBe('Timing question 1');
  view.rerender(<Sim {...props} highlightQid={2} />);
  expect(document.querySelector('.qtext').textContent).toBe('Timing question 2');
});
