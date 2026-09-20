// __tests__/mat-simulator/figures.test.ts
// Integritet registra slika (3.3): svaki zadatak s img:true mora imati SVG u qImages
// (MISSING), i svaki SVG u qImages mora odgovarati zadatku s img:true (ORPHAN).
// Ista logika kao scripts/mat-audit-figures.mjs — vidi 1.6/1.7 u docs/MAT_SIMULATOR_PLAN.md.
import { describe, expect, it } from 'vitest';
import { readdirSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const dir = resolve(here, '../../content/simulator/mat/exams');
const examFiles = readdirSync(dir).filter((f) => f.endsWith('.mjs')).sort();

// Engine gradi ključ kao `${examKey}__${q._origId ?? q.id}`; id-evi 2025 koriste zarez
// ("37,1"), registar točku ("37.1") — normaliziraj prije usporedbe (1.6).
const norm = (id: any) => String(id).replace(',', '.');

// Nema prihvaćenih orphana: svaki orphan mora biti popravljen (dodaj img:true zadatku
// ili makni SVG iz qImages), ne tiho dopušten ovdje. Zadnji je bio
// 2010_jesen_B__28.3 — zadatak 28 u ispitu ima samo 28.1 i 28.2, pa je unos maknut.
const ALLOWED_ORPHANS = new Set<string>([]);

// Poznati MISSING (img:true bez SVG-a) — čeka Fazu 6 (crtanje prema PDF-u, docs/MAT_SIMULATOR_PLAN.md
// §1.7 i §6), koja se pokreće tek kad su faze 1–5 spojene; nije u opsegu ovog zadatka (3.3).
// Test i dalje puca na SVAKI NOVI missing/orphan koji nije na ovom popisu — čuva regresiju,
// a popis se skraćuje kako Faza 6 crta slike (ne treba ga ručno prazniti, samo je gornja granica).
const ALLOWED_MISSING = new Set([
  '2010_jesen_A__25a', '2010_jesen_A__25b', '2010_jesen_A__25c', '2010_jesen_A__29e',
  '2010_ljeto_A__29e',
  '2010_zima_A__25a', '2010_zima_A__25b', '2010_zima_A__25c',
  '2010_zima_A__28a', '2010_zima_A__28b', '2010_zima_A__28c', '2010_zima_A__29.5',
  '2011_jesen_A__19.1', '2011_jesen_A__19.2', '2011_jesen_A__25.1', '2011_jesen_A__25.2', '2011_jesen_A__25.3',
  '2011_ljeto_A__19a', '2011_ljeto_A__21a', '2011_ljeto_A__29e',
  '2013_ljeto_B__8',
]);

describe('mat-simulator: integritet registra slika (img:true ⇔ qImages)', () => {
  for (const file of examFiles) {
    const key = file.replace('.mjs', '');

    it(`${key}: nema neočekivanih MISSING/ORPHAN izvan poznatih iznimaka`, async () => {
      const mod = await import(pathToFileURL(resolve(dir, file)).href);
      const qs = (mod.qs || []).filter((q: any) => q && !q._META);
      const qImages = mod.qImages || {};

      const flagged: { raw: string; n: string }[] = [];
      for (const q of qs) {
        if (q.img) flagged.push({ raw: `${key}__${q.id}`, n: `${key}__${norm(q.id)}` });
        if (Array.isArray(q.parts)) {
          for (const p of q.parts) {
            if (p.img) flagged.push({ raw: `${key}__${p.id ?? q.id}`, n: `${key}__${norm(p.id ?? q.id)}` });
          }
        }
      }
      const have = Object.keys(qImages);

      const missing = flagged
        .filter((x) => !qImages[x.n])
        .map((x) => x.raw)
        .filter((raw) => !ALLOWED_MISSING.has(raw));
      const orphan = have
        .filter((k) => !flagged.some((x) => x.n === k))
        .filter((k) => !ALLOWED_ORPHANS.has(k));

      expect(missing, `nov/neočekivan MISSING (img:true bez SVG-a) u ${key}`).toEqual([]);
      expect(orphan, `nov/neočekivan ORPHAN (SVG bez img:true) u ${key}`).toEqual([]);
    });
  }
});
