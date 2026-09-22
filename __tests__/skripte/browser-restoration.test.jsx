// @vitest-environment happy-dom
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Chapter from '@/app/skripte/data/eng/visa/poglavlje05.js?lang.jsx';
import HrvatskiViewer from '@/app/skripte/wiewers/hrv/HrvatskiViewer';
import DanasUcim from '@/components/landing/DanasUcim';
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock('@/app/skripte/data/hrv-components', () => ({ HRV_POGAVLJA_META: [] }));
vi.mock('@/app/skripte/data/hrv-components/H06_OnjeginTab', () => ({ default: () => null }));
vi.mock('@/lib/data/pojmovi', () => ({ POJMOVI: { kem: [{ pojam: 'Kemija pojam' }], eng: [{ pojam: 'English term' }] } }));
beforeEach(() => { localStorage.clear(); sessionStorage.clear(); });
afterEach(cleanup);

it('restores a completed English drill, then keeps a retry in progress', () => {
  localStorage.setItem('maturiraj_en_visa_p05', JSON.stringify({ drillDone: true, drillScore: 7, drillResults: [true, false], tabs: { 1: true } }));
  const view = render(<Chapter />);
  expect(view.container.querySelector('.sd-score-num').textContent).toMatch(/^7\//);
  fireEvent.click(screen.getByText(/Ponovi drill/));
  expect(view.container.querySelector('.sd-score-num')).toBeNull();
  view.rerender(<Chapter />);
  expect(view.container.querySelector('.sd-score-num')).toBeNull();
  expect(JSON.parse(localStorage.getItem('maturiraj_en_visa_p05')).drillDone).toBeUndefined();
});

it('shows Croatian pricing once per session and keeps the user-selected overview', () => {
  const view = render(<React.StrictMode><HrvatskiViewer /></React.StrictMode>);
  expect(view.container.querySelector('.sid-pricing-btn').classList.contains('active')).toBe(true);
  expect(sessionStorage.getItem('hrv_pricing_seen')).toBe('1');
  fireEvent.click(view.container.querySelector('.sid-overview-btn'));
  view.rerender(<React.StrictMode><HrvatskiViewer /></React.StrictMode>);
  expect(view.container.querySelector('.sid-overview-btn').classList.contains('active')).toBe(true);
  view.unmount();
  const reopened = render(<HrvatskiViewer />);
  expect(reopened.container.querySelector('.sid-overview-btn').classList.contains('active')).toBe(true);
});

it('selects the first saved daily subject and preserves a later tab choice', () => {
  localStorage.setItem('maturiraj_danas_predmeti', JSON.stringify(['kem', 'eng']));
  localStorage.setItem('maturiraj_danas_known', JSON.stringify({ 'Kemija pojam': true }));
  const view = render(<DanasUcim />);
  expect(screen.getByText('Kemija pojam').style.textDecoration).toBe('line-through');
  fireEvent.click(screen.getByRole('button', { name: /Engleski/ }));
  view.rerender(<DanasUcim />);
  expect(screen.getByText('English term')).toBeTruthy();
  expect(screen.queryByText('Kemija pojam')).toBeNull();
});
