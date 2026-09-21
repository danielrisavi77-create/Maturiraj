// @vitest-environment happy-dom
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import Index from '@/app/skripte/hrv/page';
vi.mock('next/navigation', () => ({ useRouter: () => ({ prefetch: vi.fn() }) }));
vi.mock('@/app/skripte/data/hrv-components/chapters', () => ({ CHAPTER_LIST: [] }));
afterEach(() => { cleanup(); delete window.dataLayer; vi.useRealTimers(); localStorage.clear(); });

it('restores the sticky variant and increments yesterday\'s streak once in StrictMode', () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 8, 21, 12));
  localStorage.setItem('mt.hrv.proVariant', 'B');
  localStorage.setItem('mt.hrv.lastVisit', new Date(2026, 8, 20, 12).toDateString());
  localStorage.setItem('mt.hrv.streak', '3');
  window.dataLayer = [];
  const view = render(<React.StrictMode><Index /></React.StrictMode>);
  expect(screen.getByText('4 dana')).toBeTruthy();
  expect(localStorage.getItem('mt.hrv.streak')).toBe('4');
  expect(window.dataLayer.filter(e => e.event === 'pro_card_view')).toEqual([{ event: 'pro_card_view', variant: 'B' }]);
  view.rerender(<React.StrictMode><Index /></React.StrictMode>);
  expect(localStorage.getItem('mt.hrv.streak')).toBe('4');
});
