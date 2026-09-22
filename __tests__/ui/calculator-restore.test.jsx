// @vitest-environment happy-dom
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Calculator from '@/app/kalkulator/page.js?lang.jsx';
const route = vi.hoisted(() => ({ params: new URLSearchParams('restored=1') }));
vi.mock('next/navigation', () => ({ useSearchParams: () => route.params, useRouter: () => ({ push: vi.fn() }) }));
vi.mock('@/lib/hooks/useAuth', () => ({ useAuth: () => ({ user: null, isPaid: false, isPro: false }) }));
vi.mock('@/lib/hooks/usePageTracking', () => ({ usePageTracking: vi.fn() }));
vi.mock('@/app/kalkulator/KartaHrvatske', () => ({ default: () => null }));
beforeEach(() => {
  localStorage.clear(); sessionStorage.clear();
  localStorage.setItem('maturiraj_onboarded', '1');
  route.params = new URLSearchParams('restored=1');
});
afterEach(cleanup);

it('restores the form after a return and handles a later return without overwriting edits in between', () => {
  const scores = { prosjek: 4.8, hr: 70, mat: 60, strani: 80, izb1: 0, izb2: 0, natjecanja: 0, sport: 0, prijemni: 0 };
  sessionStorage.setItem('maturiraj_presave_scores', JSON.stringify(scores));
  sessionStorage.setItem('maturiraj_presave_profil', JSON.stringify({ ime: 'Saved name', razred: '4. razred' }));
  const view = render(<Calculator />);
  const name = () => view.container.querySelector('.profil-name-input');
  expect(name().value).toBe('Saved name');
  expect(view.container.querySelector('input[type="number"]').value).toBe('4.8');
  expect(sessionStorage.getItem('maturiraj_presave_scores')).toBeNull();
  fireEvent.change(name(), { target: { value: 'Edited name' } });
  view.rerender(<Calculator />);
  expect(name().value).toBe('Edited name');
  route.params = new URLSearchParams();
  view.rerender(<Calculator />);
  sessionStorage.setItem('maturiraj_presave_profil', JSON.stringify({ ime: 'Second return', razred: '4. razred' }));
  route.params = new URLSearchParams('restored=1');
  view.rerender(<Calculator />);
  expect(name().value).toBe('Second return');
  expect(sessionStorage.getItem('maturiraj_presave_profil')).toBeNull();
});
