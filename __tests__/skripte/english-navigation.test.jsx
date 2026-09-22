// @vitest-environment happy-dom
import React, { Suspense, startTransition } from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import Chapter from '@/app/skripte/data/eng/niza/poglavlje01.js?lang.jsx';

afterEach(cleanup);

it('keeps navigation tied to the committed chapter while a new render is suspended', () => {
  const previous = vi.fn();
  const pending = vi.fn();
  const suspended = new Promise(() => {});
  function Gate({ blocked }) {
    if (blocked) throw suspended;
    return null;
  }
  const view = (onBack, blocked) => (
    <Suspense fallback={<p>Loading</p>}>
      <Chapter onBack={onBack} />
      <Gate blocked={blocked} />
    </Suspense>
  );
  const { container, rerender } = render(view(previous, false));
  act(() => startTransition(() => rerender(view(pending, true))));
  const back = container.querySelector('[onclick*="index.html"]');
  expect(back).toBeTruthy();
  fireEvent.click(back);
  expect(previous).toHaveBeenCalledOnce();
  expect(pending).not.toHaveBeenCalled();
  rerender(view(pending, false));
  fireEvent.click(container.querySelector('[onclick*="index.html"]'));
  expect(pending).toHaveBeenCalledOnce();
});
