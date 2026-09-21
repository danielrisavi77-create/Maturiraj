// @vitest-environment happy-dom
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import SearchFilterBar from '@/components/prijemni/SearchFilterBar.js?lang.jsx';
import OnboardingWizard from '@/components/prijemni/OnboardingWizard.js?lang.jsx';
import { DEFAULT_FILTER } from '@/lib/prijemni/searchFilter';
import { useCompareDeepLink } from '@/lib/prijemni/useCompareDeepLink';
vi.mock('@/lib/prijemni/onboardingStore', () => ({ useOnboarding: () => ({ shouldShow: false, complete: vi.fn(), skip: vi.fn() }) }));
vi.mock('@/lib/ab/useABVariant', () => ({ useABVariant: () => ({ getVariant: () => 'a', trackConversion: vi.fn() }) }));
beforeEach(() => { localStorage.clear(); window.history.replaceState({}, '', '/prijemni'); });
afterEach(cleanup);

it('restores presets and permits closing and reopening a parent-requested filter panel', () => {
  localStorage.setItem('pr_filter_presets', JSON.stringify([{ name: 'Saved Zagreb', filter: { city: 'Zagreb' } }]));
  const handled = vi.fn();
  const setFilter = vi.fn();
  const props = { filter: DEFAULT_FILTER, defaultFilter: DEFAULT_FILTER, setFilter, totalStudiji: 10, isPro: true, onForceOpenHandled: handled };
  const view = render(<SearchFilterBar {...props} forceOpen />);
  fireEvent.click(screen.getByText('Saved Zagreb'));
  expect(setFilter).toHaveBeenCalledWith({ ...DEFAULT_FILTER, city: 'Zagreb' });
  expect(handled).toHaveBeenCalledOnce();
  fireEvent.click(view.container.querySelector('.sfb-toggle'));
  view.rerender(<SearchFilterBar {...props} forceOpen />);
  expect(view.container.querySelector('.sfb-panel')).toBeNull();
  view.rerender(<SearchFilterBar {...props} forceOpen={false} />);
  view.rerender(<SearchFilterBar {...props} forceOpen />);
  expect(view.container.querySelector('.sfb-panel')).not.toBeNull();
  expect(handled).toHaveBeenCalledTimes(2);
});

it('resets onboarding only for a new edit request and uses its supplied draft', () => {
  const initialDraft = { razred: 2, interesi: ['medicina'], prosjek_band: null, city_preference: null };
  const view = render(<OnboardingWizard forceOpen initialDraft={initialDraft} />);
  fireEvent.click(screen.getByRole('button', { name: /Dalje/ }));
  expect(view.container.querySelector('.ow-step-label').textContent).toMatch(/^2/);
  view.rerender(<OnboardingWizard forceOpen initialDraft={{ ...initialDraft, razred: 3 }} />);
  expect(view.container.querySelector('.ow-step-label').textContent).toMatch(/^2/);
  view.rerender(<OnboardingWizard forceOpen={false} initialDraft={initialDraft} />);
  view.rerender(<OnboardingWizard forceOpen initialDraft={{ ...initialDraft, razred: 3 }} />);
  expect(view.container.querySelector('.ow-step-label').textContent).toMatch(/^1/);
  expect(screen.getByRole('button', { name: '3. razred' }).classList.contains('on')).toBe(true);
});

it('preserves a compare link and unrelated URL parameters while hydrating filters', () => {
  window.history.replaceState({}, '', '/prijemni?openCompare=1&city=Zagreb&utm_source=share');
  function Page() {
    const [filter, setFilter] = React.useState(DEFAULT_FILTER);
    return <SearchFilterBar filter={filter} setFilter={setFilter} defaultFilter={DEFAULT_FILTER} />;
  }
  render(<Page />);
  const params = new URLSearchParams(window.location.search);
  expect(params.get('city')).toBe('Zagreb');
  expect(params.get('openCompare')).toBe('1');
  expect(params.get('utm_source')).toBe('share');
});

it('opens the comparison once after child filters hydrate and keeps user dismissal', () => {
  window.history.replaceState({}, '', '/prijemni?openCompare=1&city=Zagreb&utm_source=share');
  const track = vi.fn();
  function Page() {
    const [open, setOpen] = useCompareDeepLink(track);
    const [filter, setFilter] = React.useState(DEFAULT_FILTER);
    return <><button onClick={() => setOpen(false)}>{open ? 'Comparison open' : 'Comparison closed'}</button><SearchFilterBar filter={filter} setFilter={setFilter} defaultFilter={DEFAULT_FILTER} /></>;
  }
  const view = render(<React.StrictMode><Page /></React.StrictMode>);
  fireEvent.click(screen.getByText('Comparison open'));
  view.rerender(<React.StrictMode><Page /></React.StrictMode>);
  expect(screen.getByText('Comparison closed')).toBeTruthy();
  expect(track).toHaveBeenCalledExactlyOnceWith('compare_deeplink_open');
  const params = new URLSearchParams(window.location.search);
  expect(params.get('openCompare')).toBeNull();
  expect(params.get('city')).toBe('Zagreb');
  expect(params.get('utm_source')).toBe('share');
});
