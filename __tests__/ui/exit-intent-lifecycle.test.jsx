// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import ExitIntentModal from '@/components/prijemni/ExitIntentModal.js?lang.jsx';

vi.mock('@/lib/prijemni/urgency', () => ({
  getActiveUrgencies: studies => studies.map(study => ({ studij_id: study.id, label: 'Soon', level: 'warning' })),
  urgencyColor: () => '#ff9900',
}));
const fakulteti = [{ studiji: [{ id: 'mef', fak_short: 'MEF', naziv: 'Medicine' }] }];
beforeEach(() => { vi.useFakeTimers(); vi.setSystemTime(new Date('2026-01-01T00:00:00Z')); });
afterEach(() => { cleanup(); vi.useRealTimers(); localStorage.clear(); sessionStorage.clear(); });

it('counts engagement from mount across data changes and shows the current deadline once', () => {
  const track = vi.fn();
  const view = render(<ExitIntentModal fakulteti={fakulteti} track={track} />);
  act(() => vi.advanceTimersByTime(10000));
  fireEvent.mouseLeave(document, { clientY: 0 });
  expect(screen.queryByRole('button', { name: 'Zatvori' })).toBeNull();
  view.rerender(<ExitIntentModal fakulteti={[...fakulteti]} track={track} />);
  act(() => vi.advanceTimersByTime(5000));
  fireEvent.mouseLeave(document, { clientY: 0 });
  expect(screen.getByText('MEF — Medicine')).toBeTruthy();
  expect(track).toHaveBeenCalledWith('exit_intent_shown', null, null, null, expect.objectContaining({ time_on_page: 15000 }));
  fireEvent.click(screen.getByRole('button', { name: 'Zatvori' }));
  fireEvent.mouseLeave(document, { clientY: 0 });
  expect(screen.queryByRole('button', { name: 'Zatvori' })).toBeNull();
});

it('respects the persistent cooldown and removes listeners on unmount', () => {
  localStorage.setItem('mh_exit_intent_shown', String(Date.now() - 1000));
  const track = vi.fn();
  const view = render(<ExitIntentModal fakulteti={fakulteti} track={track} />);
  act(() => vi.advanceTimersByTime(20000));
  fireEvent.mouseLeave(document, { clientY: 0 });
  expect(track).not.toHaveBeenCalled();
  view.unmount();
  fireEvent.mouseLeave(document, { clientY: 0 });
  expect(track).not.toHaveBeenCalled();
});
