// __tests__/mat-simulator/shared-svg.test.tsx
// Dijeljeni SVG-ovi (content/simulator/mat/mat-shared-svg.mjs) moraju se iscrtati bez
// iznimke. Regresija koju čuva: KoordOs je zvao parseMath koji u toj datoteci nije bio
// ni definiran ni uvezen — svaki qImages unos koji koristi KoordOs s labelom rušio se
// na "parseMath is not defined" (ReferenceError) čim bi ga engine iscrtao.
import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readdirSync, readFileSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import { KoordOs } from '@/content/simulator/mat/mat-shared-svg.mjs';
import { parseMath } from '@/components/simulator/mat/core/parseMath.mjs';
import { parseMath as parseMathReexport } from '@/components/simulator/mat/core/mathText';

const here = dirname(fileURLToPath(import.meta.url));
const examDir = resolve(here, '../../content/simulator/mat/exams');
const allExams = readdirSync(examDir)
  .filter((f) => f.endsWith('.mjs'))
  .sort();

// Ispiti koji stvarno koriste dijeljeni KoordOs (trenutno 2011_zima_B) — njih iscrtavamo
// u cijelosti. Popis se računa iz izvora, pa test sam pokriva svaki novi ispit koji
// posegne za KoordOs-om, bez ručnog održavanja.
const koordExams = allExams.filter((f) =>
  /\bKoordOs\b/.test(readFileSync(resolve(examDir, f), 'utf8')),
);

// Tri "nasumična" druga ispita: deterministički PRNG s fiksnim sjemenom, da izbor bude
// isti lokalno i u CI-u (inače bi pad bio nereproducibilan).
function pickDeterministic(list: string[], n: number): string[] {
  let seed = 20110126;
  const pool = [...list];
  const out: string[] = [];
  while (out.length < n && pool.length) {
    seed = (seed * 1103515245 + 12345) >>> 0;
    out.push(pool.splice(seed % pool.length, 1)[0]);
  }
  return out;
}
const otherExams = pickDeterministic(
  allExams.filter((f) => !koordExams.includes(f)),
  3,
);

async function loadExam(file: string) {
  return import(pathToFileURL(resolve(examDir, file)).href);
}

describe('mat-simulator: dijeljeni SVG-ovi se iscrtavaju bez iznimke', () => {
  it('barem jedan ispit koristi dijeljeni KoordOs', () => {
    expect(koordExams.length).toBeGreaterThan(0);
  });

  for (const file of koordExams) {
    const key = file.replace('.mjs', '');
    it(`${key}: svaki qImages unos se iscrta (KoordOs ispit)`, async () => {
      const mod: any = await loadExam(file);
      const qImages = mod.qImages || {};
      const ids = Object.keys(qImages);
      expect(ids.length).toBeGreaterThan(0);
      for (const id of ids) {
        const el = qImages[id]();
        expect(() => renderToStaticMarkup(el), `qImages["${id}"]`).not.toThrow();
      }
    });
  }

  for (const file of otherExams) {
    const key = file.replace('.mjs', '');
    it(`${key}: prvi qImages unos se iscrta (kontrolni uzorak)`, async () => {
      const mod: any = await loadExam(file);
      const qImages = mod.qImages || {};
      const ids = Object.keys(qImages);
      if (ids.length === 0) return; // ispit bez slika — nema što provjeriti
      const el = qImages[ids[0]]();
      expect(() => renderToStaticMarkup(el), `qImages["${ids[0]}"]`).not.toThrow();
    });
  }
});

describe('mat-simulator: KoordOs s labelom (parseMath)', () => {
  it('iscrta se bez ReferenceError i za label s matematičkim zapisom', () => {
    let html = '';
    expect(() => {
      html = renderToStaticMarkup(
        React.createElement(KoordOs, {
          W: 240,
          H: 220,
          xMin: -4,
          xMax: 4,
          yMin: -4,
          yMax: 5,
          label: 'Graf funkcije x^(2) + 1/2',
        }),
      );
    }).not.toThrow();
    expect(html).toContain('<svg');
    // label završava ispod SVG-a kao caption
    expect(html).toContain('Graf funkcije');
  });

  it('običan tekstualni label prolazi kroz fallback granu', () => {
    const html = renderToStaticMarkup(
      React.createElement(KoordOs, { label: 'Koordinatni sustav za crtanje pravca' }),
    );
    expect(html).toContain('Koordinatni sustav za crtanje pravca');
  });

  it('bez labela vraća goli <svg> (bez wrappera)', () => {
    const html = renderToStaticMarkup(React.createElement(KoordOs, {}));
    expect(html.startsWith('<svg')).toBe(true);
  });

  it('label s razlomkom ide kroz parseMath, ne kroz goli tekst', () => {
    const html = renderToStaticMarkup(
      React.createElement(KoordOs, { label: 'Pravac y = 1/2 x' }),
    );
    // parseMath razlomak iscrtava kao .mfrac blok; da se vratio fallback na plain text,
    // caption bi sadržavao doslovno "1/2" bez ijedne mfrac klase.
    expect(html).toContain('mfrac');
  });

  it('mathText.tsx i dalje izvozi istu parseMath (javni API nepromijenjen)', () => {
    expect(parseMathReexport).toBe(parseMath);
  });
});
