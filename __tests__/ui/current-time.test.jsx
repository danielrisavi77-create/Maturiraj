// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { afterEach, expect, it, vi } from 'vitest';
import { useCurrentTime } from '@/lib/hooks/useCurrentTime';
function Clock() { const now = useCurrentTime(); return <span>{now === null ? 'waiting' : now}</span>; }
afterEach(() => { cleanup(); vi.useRealTimers(); vi.restoreAllMocks(); });

it('uses one ticking clock for all mounted consumers and stops when the last leaves', () => {
  vi.useFakeTimers();
  vi.setSystemTime(1000000);
  const first = render(<Clock />), second = render(<Clock />);
  expect(first.container.textContent).toBe('1000000');
  expect(second.container.textContent).toBe('1000000');
  expect(vi.getTimerCount()).toBe(1);
  act(() => vi.advanceTimersByTime(60000));
  expect(first.container.textContent).toBe('1060000');
  expect(second.container.textContent).toBe('1060000');
  first.unmount();
  expect(vi.getTimerCount()).toBe(1);
  second.unmount();
  expect(vi.getTimerCount()).toBe(0);
});

it('keeps server output deterministic without consulting the clock during render', () => {
  vi.spyOn(Date, 'now').mockImplementation(() => { throw new Error('render read the clock'); });
  expect(renderToString(<Clock />)).toBe('<span>waiting</span>');
  expect(renderToString(<Clock />)).toBe('<span>waiting</span>');
});
