// @vitest-environment happy-dom
/**
 * UI smoke tests — verify React rendering infrastructure works with
 * @testing-library/react. Components are defined inline using createElement
 * to avoid Vite 6 OXC constraints on .js files containing JSX syntax.
 *
 * The renderHook-based tests in useTimer.test.js also exercise
 * @testing-library/react for the useTimer hook.
 */
import { describe, it, expect } from 'vitest';
import React, { createElement as e, useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useTimer } from '../lib/engleski-simulator/useTimer.js';
import { renderHook, act } from '@testing-library/react';

// ─── Simple counter component (createElement, no JSX) ────────────────────────

function Counter({ start = 0 }) {
  const [count, setCount] = useState(start);
  return e('div', null,
    e('span', { 'data-testid': 'count' }, String(count)),
    e('button', { onClick: () => setCount(c => c + 1) }, '+'),
    e('button', { onClick: () => setCount(c => c - 1) }, '-'),
  );
}

describe('React render infrastructure (createElement)', () => {
  it('renders a component without crashing', () => {
    const { container } = render(e(Counter));
    expect(container).toBeTruthy();
  });

  it('renders initial value', () => {
    render(e(Counter, { start: 5 }));
    expect(screen.getByTestId('count').textContent).toBe('5');
  });

  it('increments on button click', () => {
    render(e(Counter, { start: 0 }));
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('count').textContent).toBe('1');
  });

  it('decrements on button click', () => {
    render(e(Counter, { start: 3 }));
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count').textContent).toBe('2');
  });

  it('multiple state updates accumulate correctly', () => {
    render(e(Counter, { start: 0 }));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count').textContent).toBe('2');
  });
});

// ─── Toggle component (smoke: conditional render) ────────────────────────────

function Toggle({ label }) {
  const [on, setOn] = useState(false);
  return e('div', null,
    e('button', { onClick: () => setOn(v => !v) }, on ? 'Hide' : 'Show'),
    on && e('p', { 'data-testid': 'panel' }, label),
  );
}

describe('Conditional render smoke', () => {
  it('does not render panel initially', () => {
    render(e(Toggle, { label: 'Hello' }));
    expect(screen.queryByTestId('panel')).toBeNull();
  });

  it('renders panel after toggle click', () => {
    render(e(Toggle, { label: 'Hello' }));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('panel').textContent).toBe('Hello');
  });

  it('hides panel on second click', () => {
    render(e(Toggle, { label: 'Hello' }));
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByTestId('panel')).toBeNull();
  });
});

// ─── useTimer hook smoke (via renderHook) ────────────────────────────────────

describe('useTimer hook smoke', () => {
  it('returns expected shape on mount', () => {
    const { result } = renderHook(() => useTimer(120, false, null));
    expect(typeof result.current.s).toBe('number');
    expect(typeof result.current.d).toBe('string');
    expect(typeof result.current.cls).toBe('string');
  });

  it('d is formatted as MM:SS', () => {
    const { result } = renderHook(() => useTimer(90, false, null));
    expect(result.current.d).toMatch(/^\d{2}:\d{2}$/);
  });
});


