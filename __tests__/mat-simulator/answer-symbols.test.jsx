// @vitest-environment happy-dom
import React, { useState } from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { CalcQuestion } from '@/components/simulator/mat/tools/question';
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

it('replaces the selected answer text with a symbol and restores the caret after it', () => {
  const frames = [];
  vi.stubGlobal('requestAnimationFrame', callback => { frames.push(callback); return frames.length; });
  function Question() {
    const [answer, setAnswer] = useState('1234');
    return <CalcQuestion q={{ id: 1, type: 'num', q: 'Answer', sol: { ans: '12' } }} answer={answer} onAnswer={setAnswer} />;
  }
  const view = render(<Question />);
  const input = view.container.querySelector('input');
  input.focus();
  input.setSelectionRange(1, 3);
  fireEvent.click(screen.getByRole('button', { name: 'π' }));
  expect(input.value).toBe('1π4');
  act(() => frames.forEach(callback => callback()));
  expect(document.activeElement).toBe(input);
  expect(input.selectionStart).toBe(2);
  expect(input.selectionEnd).toBe(2);
});
