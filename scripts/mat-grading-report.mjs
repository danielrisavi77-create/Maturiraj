#!/usr/bin/env node
// Točka 3.4 plana: prijavi zadatke gdje isAnswerCorrect ne prihvaća sol.ans ili neki alt.
//
// Dvije provjere po zadatku:
//   1) UGOVOR   — svaka varijanta (sol.ans + alt) mora proći kroz puni isAnswerCorrect.
//   2) KANON    — svaka varijanta mora biti prihvaćena i kad je sol.ans jedini uzorak
//                 (alt liste su nakon 3.2 samo rezerva).
//
// Skripta je read-only i idempotentna. Ne mijenja podatke, pa je --dry-run zadano ponašanje;
// --write samo zapisuje JSON izvještaj na disk.
//
// Uporaba:
//   node scripts/mat-grading-report.mjs
//   node scripts/mat-grading-report.mjs --json docs/mat-grading-report.json --write
//   node scripts/mat-grading-report.mjs --exam 2019_ljeto_A --limit 40

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const HERE = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const EXAM_DIR = path.join(ROOT, 'content', 'simulator', 'mat', 'exams');

const argv = process.argv.slice(2);
const flag = (name, def = null) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : def;
};
const has = (name) => argv.includes(name);

const ONLY = flag('--exam');
const JSON_OUT = flag('--json');
const LIMIT = Number(flag('--limit', '60'));
const WRITE = has('--write') && !has('--dry-run');

// grading je TS; učitavamo ga kroz tsx ako treba, inače kroz već transpilirani import
let grading;
try {
  grading = await import(url.pathToFileURL(path.join(ROOT, 'lib', 'mat-grading.ts')).href);
} catch (e) {
  console.error('Ne mogu učitati lib/mat-grading.ts — pokreni kroz tsx:');
  console.error('  npx tsx scripts/mat-grading-report.mjs');
  console.error(String(e && e.message));
  process.exit(1);
}
const { isAnswerCorrect, normalizeAnswer } = grading;

const GRADABLE = new Set(['mc', 'num', 'calc', 'sa', 'pa']);

function variants(q) {
  const sol = q.sol || {};
  const out = [];
  if (q.type === 'mc' && sol.cl && sol.cl !== '?') out.push(String(sol.cl));
  if (sol.ans !== undefined && sol.ans !== null) out.push(String(sol.ans));
  for (const a of sol.alt || []) if (a !== undefined && a !== null) out.push(String(a));
  return out;
}

/** Prazan alt zapis — greška u podacima, prijavljuje se odvojeno. */
function isBlank(v) {
  return String(v).trim() === '';
}

/** Zadatak sveden na kanonsko rješenje (bez alt rezerve). */
function canonQ(q) {
  const sol = q.sol || {};
  if (q.type === 'mc') return { type: 'mc', sol: { cl: sol.cl } };
  return { type: q.type, sol: { ans: sol.ans } };
}

const files = fs
  .readdirSync(EXAM_DIR)
  .filter((f) => f.endsWith('.mjs'))
  .filter((f) => (ONLY ? f.startsWith(ONLY) : true))
  .sort();

const contractFails = [];
const blanks = [];
const canonFails = [];
let examCount = 0;
let qCount = 0;
let varCount = 0;
const byType = {};

for (const file of files) {
  const key = file.replace(/\.mjs$/, '');
  const mod = await import(url.pathToFileURL(path.join(EXAM_DIR, file)).href);
  examCount++;
  for (const q of mod.qs || []) {
    if (!q || typeof q !== 'object' || !q.sol) continue;
    const type = String(q.type || '?');
    if (!GRADABLE.has(type)) continue;
    qCount++;
    byType[type] = byType[type] || { q: 0, variants: 0, canonFail: 0 };
    byType[type].q++;
    const cq = canonQ(q);
    const vs = variants(q);
    for (const v of vs) {
      if (isBlank(v)) {
        blanks.push({ exam: key, id: q.id, type });
        continue;
      }
      varCount++;
      byType[type].variants++;
      if (isAnswerCorrect(q, v) !== true) {
        contractFails.push({ exam: key, id: q.id, type, variant: v, norm: normalizeAnswer(v) });
      }
      if (isAnswerCorrect(cq, v) !== true) {
        byType[type].canonFail++;
        canonFails.push({
          exam: key,
          id: q.id,
          type,
          ans: String(q.sol.ans ?? q.sol.cl ?? ''),
          variant: v,
          normAns: normalizeAnswer(String(q.sol.ans ?? q.sol.cl ?? '')),
          normVariant: normalizeAnswer(v),
        });
      }
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  exams: examCount,
  questions: qCount,
  variants: varCount,
  byType,
  blanks,
  contractFails,
  canonFails,
};

console.log('=== mat-grading report ===');
console.log(`ispita: ${examCount}   ocjenjivih zadataka: ${qCount}   varijanti: ${varCount}`);
console.log('');
console.log(`1) UGOVOR — varijanti koje isAnswerCorrect ne prihvaća: ${contractFails.length}`);
for (const f of contractFails.slice(0, LIMIT)) {
  console.log(`   ${f.exam} q${f.id} (${f.type}): ${JSON.stringify(f.variant)} → ${JSON.stringify(f.norm)}`);
}
if (contractFails.length > LIMIT) console.log(`   … i još ${contractFails.length - LIMIT}`);
console.log('');
console.log(`2) KANON — varijanti koje normalizator ne izjednačuje sa sol.ans: ${canonFails.length}`);
for (const f of canonFails.slice(0, LIMIT)) {
  console.log(
    `   ${f.exam} q${f.id} (${f.type}): ans ${JSON.stringify(f.ans)} ≠ alt ${JSON.stringify(f.variant)}` +
      `  [${JSON.stringify(f.normAns)} vs ${JSON.stringify(f.normVariant)}]`
  );
}
if (canonFails.length > LIMIT) console.log(`   … i još ${canonFails.length - LIMIT}`);
console.log('');
console.log(`3) PRAZNE varijante u podacima: ${blanks.length}`);
for (const f of blanks.slice(0, LIMIT)) console.log(`   ${f.exam} q${f.id} (${f.type})`);
console.log('');
console.log('po tipu:');
for (const [t, s] of Object.entries(byType)) {
  console.log(`   ${t.padEnd(5)} zadataka ${String(s.q).padStart(5)}  varijanti ${String(s.variants).padStart(5)}  kanon-promašaja ${String(s.canonFail).padStart(5)}`);
}

if (JSON_OUT) {
  const out = path.resolve(ROOT, JSON_OUT);
  if (WRITE) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, JSON.stringify(report, null, 2) + '\n', 'utf8');
    console.log(`\nzapisano: ${out}`);
  } else {
    console.log(`\n[dry-run] izvještaj bi bio zapisan u: ${out} (dodaj --write)`);
  }
}

process.exitCode = contractFails.length ? 1 : 0;
