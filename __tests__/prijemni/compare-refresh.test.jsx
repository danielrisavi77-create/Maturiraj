// @vitest-environment happy-dom
import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import CompareView from '@/components/prijemni/CompareView.js?lang.jsx';

vi.mock('@/lib/prijemni/scores', () => ({ getUserScores: () => Promise.resolve(null) }));
vi.mock('@/components/prijemni/CompareSetsDrawer', () => ({ default: () => null }));
vi.mock('@/components/prijemni/CompareInsight', () => ({ default: () => null }));
vi.mock('@/components/ui/Skeleton', () => ({ Sk: () => null }));
afterEach(cleanup);

it('updates subjects and study material when refreshed data keeps the same study IDs', async () => {
  const original = { id: 'same-id', naziv: 'Studij', predmeti: ['Stari predmet'], gradivo: ['Staro gradivo'] };
  let view;
  await act(async () => { view = render(<CompareView open studiji={[original]} />); });
  expect(screen.getByText(/Stari predmet/)).toBeTruthy();
  fireEvent.click(screen.getByText('Gradivo'));
  view.rerender(<CompareView open studiji={[{ ...original, predmeti: ['Novi predmet'], gradivo: ['Novo gradivo'] }]} />);
  expect(screen.queryByText(/Stari predmet/)).toBeNull();
  expect(screen.getByText(/Novi predmet/)).toBeTruthy();
  expect(screen.queryByText(/Staro gradivo/)).toBeNull();
  expect(screen.getByText(/Novo gradivo/)).toBeTruthy();
});
