// scripts/mat-svg-colors.mjs
// Zamjenjuje hardkodirane boje u SVG-ovima (content/simulator/mat/exams/*.mjs i
// mat-shared-svg.mjs) CSS varijablama po tablici iz docs/MAT_SIMULATOR_PLAN.md #4.1,
// tako da slike rade i u svijetloj i u tamnoj temi. Idempotentna, s dry-run.
// Pokreni: node scripts/mat-svg-colors.mjs --dry-run   (samo izvještaj)
//          node scripts/mat-svg-colors.mjs             (piše promjene)
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dryRun = process.argv.includes('--dry-run');
const targets = [
  resolve('content/simulator/mat/exams'),
  resolve('content/simulator/mat'),
];

// hex (malim slovima) -> zamjena. Pozadine zadržavaju hex kao CSS var() fallback jer je
// to već postojeća konvencija u ovim datotekama (npr. "var(--bg,#060910)").
const MAP = {
  '#e2e8f0': 'var(--text)',
  '#94a3b8': 'var(--muted)',
  '#e9b446': 'var(--gold)',
  '#4a90d9': 'var(--blue)',
  '#e05252': 'var(--red)',
  '#50c878': 'var(--green)',
  '#060910': 'var(--bg,#060910)',
  '#0a0f1a': 'var(--s1,#0a0f1a)',
  '#0a1525': 'var(--s2,#0a1525)',
  '#1e3a5f': 'var(--s3,#1e3a5f)',
};

const files = new Set();
for (const dir of targets) {
  for (const f of readdirSync(dir, { withFileTypes: true })) {
    if (f.isFile() && f.name.endsWith('.mjs')) files.add(resolve(dir, f.name));
  }
}

let totalChanges = 0;
const perFile = [];
for (const p of [...files].sort()) {
  const src = readFileSync(p, 'utf8');
  let changes = 0;
  let out = src;
  for (const [hex, repl] of Object.entries(MAP)) {
    // Zamijeni samo doslovni hex unutar navodnika (', ") — ne diraj ako je već var(...).
    const re = new RegExp(`(['"])${hex}\\1`, 'gi');
    out = out.replace(re, (m, q) => { changes++; return `${q}${repl}${q}`; });
  }
  if (changes) {
    perFile.push({ file: p.split(/[\\/]/).pop(), changes });
    totalChanges += changes;
    if (!dryRun) writeFileSync(p, out);
  }
}

for (const r of perFile) console.log(`${r.file}: ${r.changes} promjena`);
console.log(`\n${dryRun ? '[dry-run] ' : ''}Ukupno promjena: ${totalChanges} u ${perFile.length} datoteka`);
