// scripts/mat-audit-figures.mjs
// Provjera integriteta registra slika mat simulatora: za svaki ispit usporedi zadatke
// označene img:true s ključevima u qImages. Ispisuje MISSING (oznaka bez SVG-a) i
// ORPHAN (SVG bez oznake). Pokreni: node scripts/mat-audit-figures.mjs [--json docs/mat-figure-audit.json]
import { readdirSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dir = resolve('content/simulator/mat/exams');
const jsonIdx = process.argv.indexOf('--json');
const jsonOut = jsonIdx > -1 ? process.argv[jsonIdx + 1] : null;

// Engine gradi ključ kao `${examKey}__${q._origId ?? q.id}`; id-evi 2025 koriste zarez ("37,1"),
// registar točku ("37.1") — zato prijavljujemo i "comma" nesklad zasebno.
const norm = (id) => String(id).replace(',', '.');

let totals = { flagged: 0, svg: 0, missing: 0, orphan: 0, comma: 0 };
const report = [];
for (const f of readdirSync(dir).filter((x) => x.endsWith('.mjs')).sort()) {
  const m = await import(pathToFileURL(resolve(dir, f)).href);
  const key = f.replace('.mjs', '');
  const qs = (m.qs || []).filter((q) => q && !q._META);
  const qi = m.qImages || {};
  const flagged = [];
  for (const q of qs) {
    if (q.img) flagged.push({ raw: `${key}__${q.id}`, n: `${key}__${norm(q.id)}` });
    if (Array.isArray(q.parts)) for (const p of q.parts) if (p.img) flagged.push({ raw: `${key}__${p.id ?? q.id}`, n: `${key}__${norm(p.id ?? q.id)}` });
  }
  const have = Object.keys(qi);
  const comma = flagged.filter((x) => x.raw !== x.n && qi[x.n]).map((x) => x.raw);
  const missing = flagged.filter((x) => !qi[x.n]).map((x) => x.raw);
  const orphan = have.filter((k) => !flagged.some((x) => x.n === k));
  totals.flagged += flagged.length; totals.svg += have.length;
  totals.missing += missing.length; totals.orphan += orphan.length; totals.comma += comma.length;
  if (missing.length || orphan.length || comma.length) {
    report.push({ key, flagged: flagged.length, svg: have.length, missing, orphan, commaIdMismatch: comma });
    const short = (a) => a.map((k) => k.split('__')[1]).join(',') || '-';
    console.log(`${key}: img=${flagged.length} svg=${have.length} MISSING=${short(missing)} ORPHAN=${short(orphan)} COMMA=${short(comma)}`);
  }
}
console.log(`\nTOTAL flagged=${totals.flagged} svg=${totals.svg} missing=${totals.missing} orphan=${totals.orphan} commaIdMismatch=${totals.comma}`);
if (jsonOut) { writeFileSync(resolve(jsonOut), JSON.stringify({ totals, exams: report }, null, 2)); console.log(`→ ${jsonOut}`); }
process.exit(totals.missing || totals.orphan || totals.comma ? 1 : 0);
