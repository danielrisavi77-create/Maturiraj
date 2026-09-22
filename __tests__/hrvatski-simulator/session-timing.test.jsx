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

it('auto-submits a resumed exam once with the latest answers and timing', () => {
  localStorage.setItem('discere_exam_timing', JSON.stringify({ deadline: Date.now() + 3000 }));
  const onDone = vi.fn();
  render(<React.StrictMode><Sim exam={exam} examMode isPaid userAccess={access} onDone={onDone} /></React.StrictMode>);
  fireEvent.keyDown(window, { key: 'a' });
  act(() => vi.advanceTimersByTime(1000));
  fireEvent.click(screen.getByText(/Sljedeće/));
  fireEvent.keyDown(window, { key: 'b' });
  act(() => vi.advanceTimersByTime(2000));
  expect(onDone).toHaveBeenCalledOnce();
  expect(onDone.mock.calls[0][0]).toMatchObject({ answers: { 1: 'A', 2: 'B' }, qTimes: { 1: 1, 2: 2 } });
  act(() => vi.advanceTimersByTime(5000));
  expect(onDone).toHaveBeenCalledOnce();
});

it('expires against the saved deadline when a background tab becomes visible', () => {
  localStorage.setItem('discere_exam_timing', JSON.stringify({ deadline: Date.now() + 3000 }));
  const onDone = vi.fn();
  render(<Sim exam={exam} examMode isPaid userAccess={access} onDone={onDone} />);
  fireEvent.keyDown(window, { key: 'a' });
  act(() => {
    vi.setSystemTime(Date.now() + 5000);
    document.dispatchEvent(new Event('visibilitychange'));
  });
  expect(onDone).toHaveBeenCalledOnce();
  expect(onDone.mock.calls[0][0]).toMatchObject({ answers: { 1: 'A' }, qTimes: { 1: 5 } });
});

it('ends the initial countdown after three seconds and cancels timers on unmount', () => {
  const onDone = vi.fn();
  const view = render(<Sim exam={exam} examMode isPaid userAccess={access} onDone={onDone} />);
  for (const num of ['3', '2', '1']) {
    expect(document.querySelector('.ecd-num').textContent).toBe(num);
    act(() => vi.advanceTimersByTime(1000));
  }
  expect(document.querySelector('.exam-countdown')).toBeNull();
  view.unmount();
  act(() => vi.advanceTimersByTime(6000000));
  expect(onDone).not.toHaveBeenCalled();
  expect(vi.getTimerCount()).toBe(0);
});
