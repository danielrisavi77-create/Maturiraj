// @vitest-environment happy-dom
import React from 'react';
import { cleanup, createEvent, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { FigZoom } from '@/components/simulator/mat/viz/figzoom';

afterEach(cleanup);

it('updates drag feedback at gesture start and end without needing an extra move', () => {
  const { container } = render(<FigZoom fig={<span>Figure</span>} onClose={vi.fn()} />);
  fireEvent.click(screen.getByTitle('Povećaj'));
  const figure = container.querySelector('.zoom-fig-inner');
  const viewport = figure.parentElement;
  expect(viewport.style.cursor).toBe('grab');
  fireEvent.mouseDown(viewport, { clientX: 10, clientY: 20 });
  expect(viewport.style.cursor).toBe('grabbing');
  expect(figure.style.transition).toBe('none');
  fireEvent.mouseUp(viewport);
  expect(viewport.style.cursor).toBe('grab');
  expect(figure.style.transition).not.toBe('none');
});

it('uses touch event timing for double-tap reset and clears gesture feedback', () => {
  const { container } = render(<FigZoom fig={<span>Figure</span>} onClose={vi.fn()} />);
  fireEvent.click(screen.getByTitle('Povećaj'));
  const figure = container.querySelector('.zoom-fig-inner');
  const viewport = figure.parentElement;
  function tap(timeStamp) {
    const event = createEvent.touchStart(viewport, { touches: [{ clientX: 10, clientY: 20 }] });
    Object.defineProperty(event, 'timeStamp', { value: timeStamp });
    fireEvent(viewport, event);
  }
  tap(100);
  expect(viewport.style.cursor).toBe('grabbing');
  fireEvent.touchEnd(viewport, { touches: [] });
  expect(viewport.style.cursor).toBe('grab');
  tap(200);
  expect(viewport.style.cursor).toBe('default');
  expect(figure.style.transform).toContain('scale(1)');
  expect(figure.style.transition).not.toBe('none');
});
