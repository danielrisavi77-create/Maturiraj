// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Simulator from '@/app/discere/hrvatski/simulator/HrvatskiSimulator';
vi.mock('@/lib/hooks/useAuth', () => ({ useAuth: () => ({ user: null, isPro: false, isPaid: false }) }));
vi.mock('@/lib/discere-sim-state', () => ({ loadSimState: vi.fn(), saveSimState: vi.fn() }));
vi.mock('@/lib/sim-progress', () => ({ saveSimResult: vi.fn() }));
vi.mock('@/lib/analytics/tracker', () => ({ trackEvent: vi.fn() }));
vi.mock('canvas-confetti', () => ({ default: vi.fn() }));
vi.mock('@/app/discere/hrvatski/simulator/components/HomeScreen', () => ({ Home: () => <p>Home screen</p>, YearGroup: () => null, UputeModal: () => null }));
vi.mock('@/app/discere/hrvatski/simulator/components/BrowseScreen', () => ({ BrowseScreen: ({ onBack }) => <><p>Browse screen</p><button onClick={onBack}>Back home</button></> }));
vi.mock('@/app/discere/hrvatski/simulator/components/LektireScreen', () => ({ LektireScreen: ({ initialDjelo, initialAutor }) => <p>{initialDjelo} by {initialAutor}</p> }));
beforeEach(() => {
  localStorage.clear();
  localStorage.setItem('discere_hrv_user', JSON.stringify({ onboarded: true }));
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

it('restores the requested screen without adding a duplicate history entry', async () => {
  window.history.replaceState({}, '', '/discere/hrvatski/simulator?s=browse&exam=2024_ljeto_A');
  const push = vi.spyOn(window.history, 'pushState');
  await act(async () => { render(<Simulator />); });
  expect(screen.getByText('Browse screen')).toBeTruthy();
  expect(push).not.toHaveBeenCalled();
});

it('preserves the initial URL through StrictMode replay and records the next navigation', async () => {
  window.history.replaceState({}, '', '/discere/hrvatski/simulator?s=browse&exam=2024_ljeto_A');
  const push = vi.spyOn(window.history, 'pushState');
  await act(async () => { render(<React.StrictMode><Simulator /></React.StrictMode>); });
  expect(screen.getByText('Browse screen')).toBeTruthy();
  expect(push).not.toHaveBeenCalled();
  expect(new URLSearchParams(window.location.search).get('s')).toBe('browse');
  fireEvent.click(screen.getByText('Back home'));
  expect(screen.getByText('Home screen')).toBeTruthy();
  expect(push).toHaveBeenCalledOnce();
  expect(window.location.search).toBe('');
});

it('opens a requested literary work with its author', async () => {
  window.history.replaceState({}, '', '/discere/hrvatski/simulator?lektira=Hamlet&autor=Shakespeare');
  await act(async () => { render(<Simulator />); });
  expect(screen.getByText('Hamlet by Shakespeare')).toBeTruthy();
});

it('discards virtual session URLs after reload and rejects unavailable popstate sessions', async () => {
  window.history.replaceState({}, '', '/discere/hrvatski/simulator?s=filter_session');
  await act(async () => { render(<Simulator />); });
  expect(screen.getByText('Home screen')).toBeTruthy();
  expect(window.location.search).toBe('');
  act(() => window.dispatchEvent(new PopStateEvent('popstate', { state: { screen: 'vsession' } })));
  expect(screen.getByText('Home screen')).toBeTruthy();
});
