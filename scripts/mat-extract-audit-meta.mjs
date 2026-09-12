// scripts/mat-extract-audit-meta.mjs
// Zadatak 5.2 (docs/MAT_SIMULATOR_PLAN.md): izbaci {_META:true,...} audit bilješke iz
// `qs` polja u content/simulator/mat/exams/*.mjs (idu u klijentski bundle bez ikakve
// funkcionalne svrhe) i premjesti ih u content/simulator/mat/audit/<key>.json.
// NAPOMENA: QS_*_META konstante u components/simulator/MatEngineCore.tsx su odvojena
// stvar (dira ih grupa engine) — ova skripta dira SAMO exams/*.mjs.
// Idempotentna, s dry-run. Pokreni:
//   node scripts/mat-extract-audit-meta.mjs --dry-run
//   node scripts/mat-extract-audit-meta.mjs
//
// PAŽNJA: neki ispiti imaju u `qs` DVA elementa s poljem `_META` — raniji opisni
// {_META:{rok:...,examCode:...}} i tek na kraju audit blok {_META:true,...}. Zato se
// odabire isključivo element s `_META === true` (isto što hvata META_RE), nikad prvi
// truthy `_META`. Prije upisa se provjerava da rezultat nije prazan objekt, jer bi inače
// skripta zapisala `{}` u audit JSON i pritom regexom obrisala pravi blok iz .mjs
// (nepovratan gubitak sadržaja, kakav se dogodio za 2016_ljeto_A, 2017_jesen_A,
// 2017_ljeto_A i 2018_jesen_A).
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const examsDir = resolve('content/simulator/mat/exams');
const auditDir = resolve('content/simulator/mat/audit');
const dryRun = process.argv.includes('--dry-run');

// Ukloni {_META:true,...} blok: uvijek zadnji element `qs` polja, odmah prije "];".
const META_RE = /,\s*\{_META:true[\s\S]*?\}(?=\s*\];)/;

let moved = 0, skipped = 0, failed = 0;
for (const f of readdirSync(examsDir).filter((x) => x.endsWith('.mjs')).sort()) {
  const key = f.replace('.mjs', '');
  const p = resolve(examsDir, f);
  const src = readFileSync(p, 'utf8');
  if (!META_RE.test(src)) { skipped++; continue; }
  const m = await import(pathToFileURL(p).href);
  // Samo `_META === true`: datoteke s ranijim {_META:{...}} blokom inače daju krivi objekt.
  const metaQs = (m.qs || []).filter((q) => q && q._META === true);
  if (metaQs.length !== 1) {
    console.error(`${key}: regex je pronašao blok, ali import ima ${metaQs.length} elemenata s _META===true — preskačem, provjeri ručno.`);
    failed++; continue;
  }
  const { _META, ...rest } = metaQs[0];
  if (Object.keys(rest).length === 0) {
    console.error(`${key}: _META blok bez ijednog polja — ne pišem prazan JSON i ne brišem blok iz .mjs, provjeri ručno.`);
    failed++; continue;
  }
  console.log(`${key}: premještam _META → audit/${key}.json`);
  moved++;
  if (!dryRun) {
    if (!existsSync(auditDir)) mkdirSync(auditDir, { recursive: true });
    writeFileSync(resolve(auditDir, `${key}.json`), JSON.stringify(rest, null, 2));
    const out = src.replace(META_RE, '');
    writeFileSync(p, out);
  }
}
console.log(`\n${dryRun ? '[dry-run] ' : ''}Premješteno: ${moved}, preskočeno (bez _META): ${skipped}, problematično: ${failed}`);
if (failed) process.exitCode = 1;
