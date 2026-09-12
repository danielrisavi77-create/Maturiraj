// scripts/mat-normalize-topics.mjs
// Normalizira kodove tema (topic:"...") u content/simulator/mat/exams/*.mjs na kanonsku
// tablicu od ~15-ak tema. Idempotentna: drugi prolaz ne mijenja ništa.
// Pokreni: node scripts/mat-normalize-topics.mjs --dry-run   (samo izvještaj)
//          node scripts/mat-normalize-topics.mjs             (piše promjene)
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dir = resolve('content/simulator/mat/exams');
const dryRun = process.argv.includes('--dry-run');

// Kanonska tablica: kanonski kod -> { label, aliases }. Alias liste pokrivaju sinonime
// i tipfelere nađene u postojećim podacima (vidi docs/MAT_SIMULATOR_PLAN.md #3.1).
export const CANON = {
  al: { label: 'Algebra', aliases: ['al', 'alg', 'jed', 'je', 'ne', 'neje', 'omjer', 'omj', 'om', 'pos', 'skupovi', 'mat'] },
  br: { label: 'Brojevi', aliases: ['br', 'mj', 'ord'] },
  geom: { label: 'Geometrija', aliases: ['geom', 'geo', 'ge', 'koo', 'pov', '3d'] },
  kon: { label: 'Konusni presjeci', aliases: ['kon'] },
  kv: { label: 'Kvadratna funkcija', aliases: ['kv'] },
  lin: { label: 'Linearna funkcija', aliases: ['lin'] },
  trig: { label: 'Trigonometrija', aliases: ['trig', 'trg'] },
  fun: { label: 'Funkcije', aliases: ['fun', 'func', 'fn', 'fnk', 'funk', 'funkc', 'grf'] },
  anal: { label: 'Analiza (derivacije, limesi)', aliases: ['anal', 'der', 'dif', 'lim', 'limes', 'de', 'opt'] },
  stat: { label: 'Statistika', aliases: ['stat', 'st'] },
  exp: { label: 'Eksponencijalne i logaritamske funkcije', aliases: ['exp', 'eks', 'log', 'ek'] },
  niz: { label: 'Nizovi', aliases: ['seq', 'niz', 'nizovi', 'red'] },
  fin: { label: 'Financijska matematika', aliases: ['fin'] },
  kompl: { label: 'Kompleksni brojevi', aliases: ['kompl', 'kompleks', 'komp', 'kp'] },
  vek: { label: 'Vektori', aliases: ['vek', 'vekt'] },
  komb: { label: 'Kombinatorika i vjerojatnost', aliases: ['komb', 'vjer', 'ver'] },
  ostalo: { label: 'Ostalo', aliases: ['ostalo'] },
};

// alias -> kanonski kod (uključujući kanonski kod samog sebe, za idempotenciju)
const aliasToCanon = {};
for (const [canon, { aliases }] of Object.entries(CANON)) {
  for (const a of aliases) aliasToCanon[a] = canon;
  aliasToCanon[canon] = canon;
}

let totalChanges = 0;
const perFile = [];
for (const f of readdirSync(dir).filter((x) => x.endsWith('.mjs')).sort()) {
  const p = resolve(dir, f);
  const src = readFileSync(p, 'utf8');
  let changes = 0;
  const unknown = new Set();
  const out = src.replace(/topic:"([^"]+)"/g, (m, code) => {
    const canon = aliasToCanon[code];
    if (!canon) { unknown.add(code); return m; }
    if (canon === code) return m;
    changes++;
    return `topic:"${canon}"`;
  });
  if (changes || unknown.size) {
    perFile.push({ file: f, changes, unknown: [...unknown] });
    totalChanges += changes;
    if (!dryRun && changes) writeFileSync(p, out);
  }
}

for (const r of perFile) {
  const u = r.unknown.length ? ` UNKNOWN=${r.unknown.join(',')}` : '';
  console.log(`${r.file}: ${r.changes} promjena${u}`);
}
console.log(`\n${dryRun ? '[dry-run] ' : ''}Ukupno promjena: ${totalChanges}, datoteka s nepoznatim kodom: ${perFile.filter((r) => r.unknown.length).length}`);
