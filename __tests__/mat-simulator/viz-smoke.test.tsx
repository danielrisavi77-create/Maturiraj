// @ts-nocheck
// Smoke test vizualnog sloja (faza 5.3, korak "viz"): svaka komponenta izdvojena u
// components/simulator/mat/viz/* mora se iscrtati, pa se odmah vidi ako je pri
// premjestanju neki simbol ostao undefined.
// @vitest-environment happy-dom
import { describe, it, expect, afterEach } from 'vitest';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {
  sliderRow, tgBtn, vizSvg, QuadViz, LinViz, CircleViz, ExpLogViz, AnalGeoViz, SeqViz,
  VecViz, ComplexViz, DerivViz, FnFamViz, StatViz, FinViz, GeoViz, VizModal,
} from '@/components/simulator/mat/viz/interactive';
import { FigZoom, ZoomableFig } from '@/components/simulator/mat/viz/figzoom';
import { GraphSVG, GraphInput } from '@/components/simulator/mat/viz/graph';
import { KnowledgeMap, CountUp, AnimatedRing, TrendChart } from '@/components/simulator/mat/viz/charts';

afterEach(() => cleanup());

const VIZ = {
  quad: QuadViz, lin: LinViz, circle: CircleViz, explog: ExpLogViz, analgeo: AnalGeoViz,
  seq: SeqViz, vec: VecViz, complex: ComplexViz, deriv: DerivViz, fnfam: FnFamViz,
  stat: StatViz, fin: FinViz, geo: GeoViz,
};

describe('mat/viz: interaktivni prikazi', () => {
  it('svaki *Viz se iscrta i ima svoj SVG', () => {
    Object.keys(VIZ).forEach((kind) => {
      const { container } = render(React.createElement(VIZ[kind]));
      expect(container.querySelectorAll('svg').length, kind).toBeGreaterThan(0);
      cleanup();
    });
  });

  it('VizModal otvara prikaz za svaku vrstu', () => {
    Object.keys(VIZ).forEach((kind) => {
      const { container } = render(React.createElement(VizModal, { kind, onClose: () => {} }));
      expect(container.querySelectorAll('svg').length, kind).toBeGreaterThan(0);
      cleanup();
    });
    // nepoznata vrsta: modal se i dalje iscrta, samo bez prikaza
    const { container } = render(React.createElement(VizModal, { kind: 'nepostojeci', onClose: () => {} }));
    expect(container.textContent).toContain('Interaktivni prikaz');
  });

  it('pomocnici sliderRow/tgBtn/vizSvg vracaju ono sto i prije', () => {
    expect(React.isValidElement(sliderRow('a', 1, -3, 3, 0.1, () => {}))).toBe(true);
    expect(React.isValidElement(vizSvg(null))).toBe(true);
    expect(tgBtn(true).borderRadius).toBe(99);
    expect(tgBtn(false).background).toBe('var(--s2)');
  });
});

describe('mat/viz: zoom slike', () => {
  it('ZoomableFig prikazuje sliku i znacku za uvecanje', () => {
    const fig = React.createElement('svg', { 'data-testid': 'fig' });
    const { container } = render(React.createElement(ZoomableFig, { fig }));
    expect(container.querySelector('.fig-zoomable')).toBeTruthy();
    expect(container.querySelector('.fig-zoom-badge')).toBeTruthy();
  });

  it('FigZoom se iscrta na 100% i nudi kontrole', () => {
    const fig = React.createElement('svg', null);
    const { container } = render(React.createElement(FigZoom, { fig, onClose: () => {} }));
    expect(container.textContent).toContain('100%');
    expect(container.querySelector('.zoom-fig-inner')).toBeTruthy();
    expect(container.querySelectorAll('button').length).toBe(4);
  });
});

describe('mat/viz: graf', () => {
  const q = { id: 1, graphType: 'line', graphRef: { pts: [[0, -2], [1, 1]] }, graphRange: { xMin: -4, xMax: 4, yMin: -2, yMax: 7 } };

  it('GraphInput se iscrta i prihvaca unos', () => {
    const { container } = render(React.createElement(GraphInput, {
      q, answer: '', onAnswer: () => {}, isReviewed: false, isPractice: true,
    }));
    expect(container.querySelector('input.finp')).toBeTruthy();
    expect(container.textContent).toContain('Dvije');
  });

  it('GraphSVG je izvezen', () => {
    expect(typeof GraphSVG).toBe('function');
  });
});

describe('mat/viz: grafovi statistike', () => {
  it('CountUp ispise ciljni broj sa sufiksom', () => {
    const { container } = render(React.createElement(CountUp, { to: 42, duration: 1, suffix: '%' }));
    expect(container.textContent.endsWith('%')).toBe(true);
  });

  it('AnimatedRing crta prsten s ocjenom', () => {
    const { container } = render(React.createElement(AnimatedRing, { pct: 72, gc: 'var(--green)', g: 4 }));
    expect(container.querySelectorAll('circle').length).toBe(2);
    expect(container.textContent).toContain('72%');
  });

  it('TrendChart trazi barem tri ispita, pa crta liniju', () => {
    const mk = (pct, i) => ({ pct, grade: 4, examLabel: 'Ispit ' + i, date: '1.1.2025.', cor: 10, total: 20, examMode: true });
    const { container: few } = render(React.createElement(TrendChart, { history: [mk(50, 1), mk(60, 2)] }));
    expect(few.textContent).toContain('Trend rezultata');
    cleanup();
    const { container } = render(React.createElement(TrendChart, { history: [mk(50, 1), mk(60, 2), mk(70, 3)] }));
    expect(container.querySelector('polyline')).toBeTruthy();
    expect(container.querySelectorAll('circle.trend-point').length).toBe(3);
  });

  it('KnowledgeMap crta mapu tek od tri teme', () => {
    const tb = (keys) => { const o = {}; keys.forEach((k) => { o[k] = { correct: 3, total: 5 }; }); return o; };
    const { container: few } = render(React.createElement(KnowledgeMap, {
      userData: { history: [{ topic_breakdown: tb(['kv', 'lin']) }] }, onTopic: null,
    }));
    expect(few.textContent).toBe('');
    cleanup();
    const { container } = render(React.createElement(KnowledgeMap, {
      userData: { history: [{ topic_breakdown: tb(['kv', 'lin', 'trig', 'stat']) }] }, onTopic: () => {},
    }));
    expect(container.textContent).toContain('Mapa znanja');
    expect(container.querySelectorAll('svg text').length).toBeGreaterThan(4);
  });
});
