// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { Sim } from '@/components/simulator/mat/sim/sim';
import { useQuestionTime } from '@/components/simulator/mat/sim/use-question-time';

const exam = {
  key: 'question-time', year: 2024, season: 'session', label: 'Timing', razina: 'B', duration: 100,
  qs: [1, 2].map(id => ({ id, type: 'mc', topic: 'kv', q: `Question ${id}`, opts: ['1', '2'], sol: { cl: 'A' } })),
};
beforeEach(() => { vi.useFakeTimers(); vi.setSystemTime(new Date('2026-01-01T00:00:00Z')); });
afterEach(() => { cleanup(); vi.useRealTimers(); });

it('includes time on the final question and accumulated time from revisits in the submitted result', () => {
  const onDone = vi.fn();
  render(<Sim exam={exam} examMode onExit={() => {}} onDone={onDone} userData={{ history: [] }} />);
  act(() => vi.advanceTimersByTime(3000));
  fireEvent.keyDown(document.body, { key: 'ArrowRight' });
  act(() => vi.advanceTimersByTime(4000));
  fireEvent.keyDown(document.body, { key: 'ArrowLeft' });
  act(() => vi.advanceTimersByTime(2000));
  fireEvent.keyDown(document.body, { key: 'ArrowRight' });
  act(() => vi.advanceTimersByTime(1000));
  fireEvent.click(screen.getByRole('button', { name: /Završi ispit/ }));
  fireEvent.click(screen.getByRole('button', { name: /Predaj ispit/ }));
  act(() => vi.advanceTimersByTime(50));
  expect(onDone).toHaveBeenCalledOnce();
  expect(onDone.mock.calls[0][0].qTimes).toEqual({ 1: 5, 2: 5 });
});

it('includes the current question when the countdown expires automatically', () => {
  const onDone = vi.fn();
  render(<Sim exam={{ ...exam, duration: 3 }} examMode onExit={() => {}} onDone={onDone} userData={{ history: [] }} />);
  act(() => vi.advanceTimersByTime(3000));
  act(() => vi.advanceTimersByTime(50));
  expect(onDone).toHaveBeenCalledOnce();
  expect(onDone.mock.calls[0][0].qTimes).toEqual({ 1: 3 });
});

it('preserves resumed totals across batched records and releases its timer on unmount', () => {
  const initial = Object.freeze({ 1: 10 });
  const { result, unmount } = renderHook(() => useQuestionTime(initial, 1, false), { wrapper: React.StrictMode });
  act(() => {
    vi.advanceTimersByTime(2000);
    result.current.recordTime(1);
    vi.advanceTimersByTime(3000);
    result.current.recordTime(1);
  });
  expect(result.current.qTimes).toEqual({ 1: 15 });
  expect(initial).toEqual({ 1: 10 });
  unmount();
  expect(vi.getTimerCount()).toBe(0);
});

it('navigates with a quick horizontal swipe while ignoring slow and interactive gestures', () => {
  const { container } = render(<Sim exam={exam} examMode onExit={() => {}} userData={{ history: [] }} />);
  const layout = container.querySelector('.exam-layout');
  function swipe(target, duration, startX = 200, endX = 100) {
    fireEvent.touchStart(target, { touches: [{ clientX: startX, clientY: 10 }] });
    act(() => vi.advanceTimersByTime(duration));
    fireEvent.touchEnd(target, { changedTouches: [{ clientX: endX, clientY: 10 }] });
  }
  swipe(layout, 601);
  expect(screen.getByText('Question 1')).toBeTruthy();
  swipe(layout.querySelector('button'), 100);
  expect(screen.getByText('Question 1')).toBeTruthy();
  swipe(layout, 100);
  expect(screen.getByText('Question 2')).toBeTruthy();
  swipe(layout, 100, 100, 200);
  expect(screen.getByText('Question 1')).toBeTruthy();
});
