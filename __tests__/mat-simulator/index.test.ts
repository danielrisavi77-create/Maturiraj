// __tests__/mat-simulator/index.test.ts
// index.json ⇔ exam-loaders.ts ⇔ datoteke (3.3): sve tri strane popisa ispita moraju se
// slagati, inače Home prikaže ispit koji se ne može učitati (2.1) ili obrnuto.
import { describe, expect, it } from 'vitest';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import indexJson from '@/content/simulator/mat/index.json';
import { examLoaders, examKeys } from '@/content/simulator/mat/exam-loaders';

const here = dirname(fileURLToPath(import.meta.url));
const examsDir = resolve(here, '../../content/simulator/mat/exams');

describe('mat-simulator: index.json ⇔ exam-loaders.ts ⇔ datoteke', () => {
  const indexKeys = (indexJson as any).exams.map((e: any) => e.key) as string[];
  const fileKeys = readdirSync(examsDir)
    .filter((f) => f.endsWith('.mjs'))
    .map((f) => f.replace('.mjs', ''))
    .sort();
  const loaderKeys = [...examKeys].sort();

  it('index.json nema duplikate ključeva', () => {
    expect(new Set(indexKeys).size).toBe(indexKeys.length);
  });

  it('index.json "count" odgovara broju stavki', () => {
    expect((indexJson as any).count).toBe(indexKeys.length);
  });

  it('svaki exam iz index.json ima loader u exam-loaders.ts', () => {
    const missing = indexKeys.filter((k) => !(k in examLoaders));
    expect(missing, 'nedostaju loaderi za').toEqual([]);
  });

  it('svaki loader u exam-loaders.ts ima stavku u index.json', () => {
    const extra = loaderKeys.filter((k) => !indexKeys.includes(k));
    expect(extra, 'loaderi bez odgovarajuće stavke u index.json').toEqual([]);
  });

  it('svaki exam iz index.json ima odgovarajuću .mjs datoteku', () => {
    const missing = indexKeys.filter((k) => !fileKeys.includes(k));
    expect(missing, 'nedostaju datoteke za').toEqual([]);
  });

  it('svaka .mjs datoteka u exams/ ima stavku u index.json', () => {
    const extra = fileKeys.filter((k) => !indexKeys.includes(k));
    expect(extra, 'datoteke bez odgovarajuće stavke u index.json').toEqual([]);
  });

  it('index.json "file" polje pokazuje na stvarnu putanju', () => {
    const bad = (indexJson as any).exams.filter((e: any) => e.file !== `exams/${e.key}.mjs`);
    expect(bad.map((e: any) => e.key), 'krivo "file" polje za').toEqual([]);
  });
});
