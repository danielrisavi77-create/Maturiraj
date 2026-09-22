// @vitest-environment happy-dom
import React, { useLayoutEffect } from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import ScoreMatcherModal from '@/components/prijemni/ScoreMatcherModal';
vi.mock('@/lib/prijemni/scores', () => ({ saveUserScores: vi.fn() }));
afterEach(cleanup);

it('commits the supplied scores before layout observers see the form', () => {
  const committed = [];
  function Parent({ scores }) {
    useLayoutEffect(() => { committed.push(document.querySelector('input').value); }, [scores]);
    return <ScoreMatcherModal open initialScores={scores} />;
  }
  const view = render(<Parent scores={{ prosjek_r1: 4.7 }} />);
  view.rerender(<Parent scores={{ prosjek_r1: 3.5 }} />);
  expect(committed).toEqual(['4.7', '3.5']);
});

it('preserves the wizard step but restores supplied scores when reopening', () => {
  const initialScores = { prosjek_r1: 4.7, mat_a_pct: 75 };
  const view = render(<ScoreMatcherModal open initialScores={initialScores} />);
  fireEvent.click(screen.getByRole('button', { name: /Dalje/ }));
  const input = view.container.querySelector('input');
  expect(input.value).toBe('75');
  fireEvent.change(input, { target: { value: '90' } });
  view.rerender(<ScoreMatcherModal open={false} initialScores={initialScores} />);
  view.rerender(<ScoreMatcherModal open initialScores={initialScores} />);
  expect(screen.getByText('Rezultati s mature')).toBeTruthy();
  expect(view.container.querySelector('input').value).toBe('75');
});

it('preserves an unsaved draft when there are no initial scores', () => {
  const view = render(<ScoreMatcherModal open />);
  fireEvent.change(view.container.querySelector('input'), { target: { value: '4.5' } });
  view.rerender(<ScoreMatcherModal open={false} />);
  view.rerender(<ScoreMatcherModal open />);
  expect(view.container.querySelector('input').value).toBe('4.5');
});
