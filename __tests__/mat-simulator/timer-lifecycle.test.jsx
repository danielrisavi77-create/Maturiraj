// @vitest-environment happy-dom
import React, { StrictMode, useState } from 'react';
import { act, cleanup, render, renderHook, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { useTimer } from '@/components/simulator/mat/sim/helpers';

afterEach(() => { cleanup(); vi.useRealTimers(); vi.restoreAllMocks(); });

it('notifies the parent after committing the countdown instead of from a state updater', () => {
  vi.useFakeTimers();
  const error = vi.spyOn(console, 'error').mockImplementation(() => {});
  function Timer({ onExpire }) {
    const timer = useTimer(2, true, onExpire);
    return <span>{timer.s}</span>;
  }
  function Parent() {
    const [done, setDone] = useState(false);
    return <><Timer onExpire={() => setDone(true)} /><span>{done ? 'finished' : 'running'}</span></>;
  }
  render(<StrictMode><Parent /></StrictMode>);
  act(() => vi.advanceTimersByTime(1000));
  act(() => vi.advanceTimersByTime(1000));
  expect(screen.getByText('finished')).toBeTruthy();
  expect(error).not.toHaveBeenCalled();
});

it('warns once at each threshold, pauses, and expires once under StrictMode', () => {
  vi.useFakeTimers();
  const expire = vi.fn();
  const warn = vi.fn();
  const wrapper = ({ children }) => <StrictMode>{children}</StrictMode>;
  const { result, rerender, unmount } = renderHook(({ run }) => useTimer(601, run, expire, warn), {
    initialProps: { run: true }, wrapper,
  });
  act(() => vi.advanceTimersByTime(1000));
  expect(result.current.s).toBe(600);
  expect(warn.mock.calls).toEqual([[600]]);
  rerender({ run: false });
  act(() => vi.advanceTimersByTime(5000));
  expect(result.current.s).toBe(600);
  rerender({ run: true });
  for (let i = 0; i < 600; i++) act(() => vi.advanceTimersByTime(1000));
  expect(result.current.s).toBe(0);
  expect(warn.mock.calls).toEqual([[600], [300]]);
  expect(expire).toHaveBeenCalledOnce();
  act(() => vi.advanceTimersByTime(5000));
  expect(expire).toHaveBeenCalledOnce();
  unmount();
  expect(vi.getTimerCount()).toBe(0);
});
