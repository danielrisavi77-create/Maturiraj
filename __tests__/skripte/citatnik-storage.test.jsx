// @vitest-environment happy-dom
import React from 'react';
import { cleanup, fireEvent, render, within } from '@testing-library/react';
import { afterEach, beforeEach, expect, it } from 'vitest';
import Citatnik from '@/app/skripte/data/hrv-components/H02_CitatnikTab';

beforeEach(() => localStorage.clear());
afterEach(cleanup);

it('keeps saved quote favorites synchronized across mounted chapter views', () => {
  const first = render(<Citatnik />);
  const second = render(<Citatnik />);
  const button = within(first.container).getAllByRole('button', { name: 'Dodaj u favorite' })[0];
  fireEvent.click(button);
  expect(button.getAttribute('aria-label')).toBe('Ukloni iz favorita');
  expect(within(second.container).queryAllByRole('button', { name: 'Ukloni iz favorita' })).toHaveLength(1);
});
