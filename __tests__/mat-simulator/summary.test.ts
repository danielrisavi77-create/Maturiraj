// __tests__/mat-simulator/summary.test.ts
// content/simulator/mat/summary.json mora biti tocan meta-sazetak ispita: Home iz njega
// racuna bazen Treninga dana, spremnost i pokrivenost tema, pa nesklad sa stvarnim
// exams/*.mjs znaci da Home nudi pitanje koje ne postoji (ili preskace ono koje postoji).
// Istu provjeru radi i `node scripts/mat-build-summary.mjs --check`.
//
// Drugi dio testa cuva sigurnosno svojstvo: sazetak ne smije nositi sadrzaj (tekst pitanja,
// opcije, rjesenja, korake) — inace bi free korisnik kroz njega dobio banku zakljucanih ispita.
import { describe, expect, it } from 'vitest';
import { readdirSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import summary from '@/content/simulator/mat/summary.json';
import indexJson from '@/content/simulator/mat/index.json';

const here = dirname(fileURLToPath(import.meta.url));
const examsDir = resolve(here, '../../content/simulator/mat/exams');
const examFiles = readdirSync(examsDir).filter((f) => f.endsWith('.mjs')).sort();

const ALLOWED_KEYS = ['id', 'topic', 'type', 'points', 'img'];
const exams = (summary as any).exams as Record<string, any[]>;

describe('mat-simulator: summary.json ⇔ exams/*.mjs', () => {
  it('pokriva tocno iste ispite kao index.json', () => {
    const indexKeys = (indexJson as any).exams.map((e: any) => e.key).sort();
    expect(Object.keys(exams).sort()).toEqual(indexKeys);
    expect((summary as any).count).toBe(indexKeys.length);
  });

  for (const file of examFiles) {
    const key = file.replace('.mjs', '');

    it(`${key}: sazetak odgovara pitanjima u ispitu`, async () => {
      const mod = await import(pathToFileURL(resolve(examsDir, file)).href);
      const qs = (mod.qs || []).filter((q: any) => q && !q._META);
      const expected = qs.map((q: any) => ({
        id: q.id,
        topic: q.topic ?? null,
        type: q.type ?? null,
        points: q.points ?? null,
        img: !!q.img,
      }));
      expect(exams[key], `nema sazetka za ${key}`).toBeDefined();
      expect(exams[key]).toEqual(expected);
    });
  }

  it('ne nosi sadrzaj zadataka (samo meta polja)', () => {
    const extra = new Set<string>();
    Object.values(exams).forEach((rows) =>
      rows.forEach((r) => Object.keys(r).forEach((k) => { if (!ALLOWED_KEYS.includes(k)) extra.add(k); })),
    );
    expect([...extra], 'sazetak smije imati samo meta polja').toEqual([]);
    const text = JSON.stringify(summary);
    // Nijedno od polja koja nose tekst zadatka ne smije se pojaviti ni kao kljuc.
    ['"q"', '"opts"', '"sol"', '"exp"', '"steps"', '"why"', '"parts"'].forEach((k) => {
      expect(text.includes(k + ':'), `sazetak sadrzi polje ${k}`).toBe(false);
    });
  });

  it('svaki redak ima upotrebljiv id', () => {
    const bad: string[] = [];
    Object.entries(exams).forEach(([k, rows]) =>
      rows.forEach((r) => { if (r.id === null || r.id === undefined || r.id === '') bad.push(k); }),
    );
    expect(bad).toEqual([]);
  });

  // Trening dana iz sazetka bira meta-zapis, a stvarno pitanje trazi s
  // ex.qs.find(x=>String(x.id)===String(p.id)). Ponovljen id unutar ispita bi tiho
  // ubacio krivo pitanje u sesiju, pa id mora biti jedinstven po ispitu.
  it('id je jedinstven unutar ispita', () => {
    const dupes: string[] = [];
    Object.entries(exams).forEach(([k, rows]) => {
      const seen = new Set<string>();
      rows.forEach((r) => {
        const id = String(r.id);
        if (seen.has(id)) dupes.push(`${k}#${id}`);
        seen.add(id);
      });
    });
    expect(dupes).toEqual([]);
  });
});
