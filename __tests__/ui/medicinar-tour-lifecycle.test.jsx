// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Tour from '@/components/medicinar/MedicinarTour.js?lang.jsx';
let anchor;
beforeEach(() => {
  vi.useFakeTimers();
  localStorage.clear();
  anchor = document.createElement('div');
  anchor.id = 'mm-tour-progress';
  anchor.getBoundingClientRect = () => ({ top: 20, left: 500, width: 100, height: 30 });
  anchor.scrollIntoView = vi.fn();
  document.body.append(anchor);
});
afterEach(() => { cleanup(); anchor.remove(); vi.restoreAllMocks(); vi.useRealTimers(); });

it('can restart on the same target after the tour was dismissed', () => {
  const view = render(<Tour isPro={false} />);
  act(() => vi.advanceTimersByTime(600));
  fireEvent.click(view.container.querySelector('.mt-backdrop'));
  expect(view.container.querySelector('.mt-popover')).toBeNull();
  act(() => {
    window.dispatchEvent(new Event('tour:start'));
    vi.advanceTimersByTime(150);
  });
  expect(view.container.querySelector('.mt-popover')).not.toBeNull();
});

it('reclamps the popover when viewport width changes but its target rect does not', () => {
  const width = vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
  const view = render(<Tour isPro={false} />);
  act(() => vi.advanceTimersByTime(600));
  expect(view.container.querySelector('.mt-popover').style.left).toBe('400px');
  width.mockReturnValue(400);
  fireEvent(window, new Event('resize'));
  expect(view.container.querySelector('.mt-popover').style.left).toBe('88px');
});
