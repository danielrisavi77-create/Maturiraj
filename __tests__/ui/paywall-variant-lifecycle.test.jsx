// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { afterEach, expect, it, vi } from 'vitest';
import PuttingRateCard from '@/components/medicinar/PuttingRateCard.js?lang.jsx';

afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); localStorage.clear(); window.history.replaceState({}, '', '/'); });
const card = <PuttingRateCard studij={{ id: 'mef' }} progress={[]} isPro={false} />;

it('assigns once per committed card even when storage is blocked and StrictMode replays effects', () => {
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: () => { throw new Error('blocked'); } });
  const random = vi.spyOn(Math, 'random').mockReturnValueOnce(0.2).mockReturnValue(0.8);
  render(<React.StrictMode>{card}</React.StrictMode>);
  expect(random).toHaveBeenCalledTimes(1);
  expect(screen.getByRole('link').getAttribute('href')).toContain('ab=control');
});

it('honors and persists the URL assignment without drawing another variant', () => {
  window.history.replaceState({}, '', '/?pw_ab=roi');
  const random = vi.spyOn(Math, 'random');
  render(card);
  expect(screen.getByRole('link').getAttribute('href')).toContain('ab=roi');
  expect(localStorage.getItem('pw_ab')).toBe('roi');
  expect(random).not.toHaveBeenCalled();
});

it('hydrates the server fallback before showing the stored assignment without hydration errors', async () => {
  localStorage.setItem('pw_ab', 'roi');
  const random = vi.spyOn(Math, 'random');
  const host = document.createElement('div');
  host.innerHTML = renderToString(card);
  expect(host.querySelector('a').getAttribute('href')).toContain('ab=control');
  expect(random).not.toHaveBeenCalled();
  const errors = [];
  let root;
  await act(async () => { root = hydrateRoot(host, card, { onRecoverableError: error => errors.push(error) }); });
  expect(host.querySelector('a').getAttribute('href')).toContain('ab=roi');
  expect(errors).toEqual([]);
  act(() => root.unmount());
});
