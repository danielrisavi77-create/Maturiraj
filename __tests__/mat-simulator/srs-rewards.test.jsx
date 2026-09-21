// @vitest-environment happy-dom
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { SpacedRepetitionScreen } from '@/components/simulator/mat/screens/srs';

vi.mock('@/components/simulator/mat/core/exams', () => ({ EXAMS: {
  rewards: { key: 'rewards', qs: [{ id: 1, type: 'mc', topic: 'kv', q: '2+2?', opts: ['4', '5'], sol: { cl: 'A' } }] },
} }));
afterEach(() => { cleanup(); localStorage.clear(); });

it('shows the same reward that is awarded once after completing a review session', () => {
  const onUpdateUserData = vi.fn();
  render(<React.StrictMode><SpacedRepetitionScreen userData={{ xp: 0 }} onUpdateUserData={onUpdateUserData} /></React.StrictMode>);
  fireEvent.keyDown(window, { code: 'Space', key: ' ' });
  fireEvent.click(screen.getByRole('button', { name: /Znao\/la sam/ }));
  expect(screen.getByText('+22 XP')).toBeTruthy();
  expect(onUpdateUserData).toHaveBeenCalledOnce();
  expect(onUpdateUserData.mock.calls[0][0]({ xp: 0, streak: 0 }).xp).toBe(22);
  fireEvent.keyDown(window, { key: '3' });
  expect(onUpdateUserData).toHaveBeenCalledOnce();
});
