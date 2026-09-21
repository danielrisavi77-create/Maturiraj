// @vitest-environment happy-dom
import React, { StrictMode } from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { afterEach, expect, it, vi } from 'vitest';
import { useClientState } from '@/lib/hooks/useClientState';

afterEach(cleanup);

function Counter({ read }) {
  const [value, setValue] = useClientState(read, 0);
  return <button onClick={() => { setValue(v => v + 1); setValue(v => v + 1); }}>{value}</button>;
}

it('reads browser session state once in StrictMode and keeps batched local edits', () => {
  const read = vi.fn(() => 4);
  const view = render(<StrictMode><Counter read={read} /></StrictMode>);
  expect(read).toHaveBeenCalledOnce();
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('button').textContent).toBe('6');
  view.rerender(<StrictMode><Counter read={() => 100} /></StrictMode>);
  expect(screen.getByRole('button').textContent).toBe('6');
  expect(read).toHaveBeenCalledOnce();
});

it('hydrates the server fallback before reading browser state, without a mismatch', async () => {
  const read = vi.fn(() => 8);
  const html = renderToString(<Counter read={read} />);
  expect(read).not.toHaveBeenCalled();
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.append(container);
  const onRecoverableError = vi.fn();
  let root;
  try {
    await act(async () => { root = hydrateRoot(container, <Counter read={read} />, { onRecoverableError }); });
    expect(container.textContent).toBe('8');
    expect(read).toHaveBeenCalledOnce();
    expect(onRecoverableError).not.toHaveBeenCalled();
  } finally {
    act(() => root?.unmount());
    container.remove();
  }
});
