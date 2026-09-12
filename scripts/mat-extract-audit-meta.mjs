// scripts/mat-extract-audit-meta.mjs
// Zadatak 5.2 (docs/MAT_SIMULATOR_PLAN.md): izbaci {_META:true,...} audit bilješke iz
// `qs` polja u content/simulator/mat/exams/*.mjs (idu u klijentski bundle bez ikakve
// funkcionalne svrhe) i premjesti ih u content/simulator/mat/audit/<key>.json.
// NAPOMENA: QS_*_META konstante u components/simulator/MatEngineCore.tsx su odvojena
// stvar (dira ih grupa engine) — ova skripta dira SAMO exams/*.mjs.
// Idempotentna, s dry-run. Pokreni:
//   node scripts/mat-extract-audit-meta.mjs --dry-run
//   node scripts/mat-extract-audit-meta.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const examsDir = resolve('content/simulator/mat/exams');
const auditDir = resolve('content/simulator/mat/audit');
const dryRun = process.argv.includes('--dry-run');

// Ukloni {_META:true,...} blok: uvijek zadnji element `qs` polja, odmah prije "];".
const META_RE = /,\s*\{_META:true[\s\S]*?\}(?=\s*\];)/;

let moved = 0, skipped = 0;
for (const f of readdirSync(examsDir).filter((x) => x.endsWith('.mjs')).sort()) {
  const key = f.replace('.mjs', '');
  const p = resolve(examsDir, f);
  const src = readFileSync(p, 'utf8');
  if (!META_RE.test(src)) { skipped++; continue; }
  const m = await import(pathToFileURL(p).href);
  const metaQ = (m.qs || []).find((q) => q && q._META);
  if (!metaQ) { console.log(`${key}: regex je pronašao blok ali import nema _META — preskačem, provjeri ručno.`); skipped++; continue; }
  const { _META, ...rest } = metaQ;
  console.log(`${key}: premještam _META → audit/${key}.json`);
  moved++;
  if (!dryRun) {
    if (!existsSync(auditDir)) mkdirSync(auditDir, { recursive: true });
    writeFileSync(resolve(auditDir, `${key}.json`), JSON.stringify(rest, null, 2));
    const out = src.replace(META_RE, '');
    writeFileSync(p, out);
  }
}
console.log(`\n${dryRun ? '[dry-run] ' : ''}Premješteno: ${moved}, preskočeno (bez _META): ${skipped}`);
