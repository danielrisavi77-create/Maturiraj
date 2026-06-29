#!/usr/bin/env node
/**
 * extract-exams.mjs — Faza 1: data ekstrakcija iz mat-simulator monolita (8.4MB)
 *
 * Izvlači:
 *   - svaki `const QS_<NAME> = [...]` blok  → content/simulator/mat/exams/<key>.mjs (export const qs = [...])
 *   - `var FORMULE_DATA=[...]`              → content/simulator/mat/formule.mjs (export const formule = [...])
 *   - EXAMS registry                        → content/simulator/mat/index.json (metadata)
 *
 * NE parsira/reserializira — slice-a izvorni tekst (string+block-comment-aware lexer),
 * pa su funkcije (svgFn) očuvane byte-for-byte. Slobodne reference (e, Svg*) ostaju
 * unutar deferred funkcija → import() prolazi (ne izvršava se).
 *
 * Usage: node extract-exams.mjs [inputHtml] [outDir]
 *   default input : ./_prototypes/mat-simulator.html
 *   default outDir: ./content/simulator/mat
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const IN  = resolve(process.argv[2] || '_prototypes/mat-simulator.html');
const OUT = resolve(process.argv[3] || 'content/simulator/mat');
const EXAMS_DIR = join(OUT, 'exams');

// ── string + block-comment aware bracket matcher ───────────────────────────────
// src[openIdx] must be the opening bracket char (open). Returns index of matching close (inclusive).
function matchBracket(src, openIdx, open, close) {
  let depth = 0, state = 'code';
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i], n = src[i + 1];
    if (state === 'sq') { if (c === '\\') { i++; continue; } if (c === "'") state = 'code'; continue; }
    if (state === 'dq') { if (c === '\\') { i++; continue; } if (c === '"') state = 'code'; continue; }
    if (state === 'tpl') { if (c === '\\') { i++; continue; } if (c === '`') state = 'code'; continue; }
    if (state === 'block') { if (c === '*' && n === '/') { i++; state = 'code'; } continue; }
    if (state === 'line') { if (c === '\n') state = 'code'; continue; }
    // code:
    if (c === "'") { state = 'sq'; continue; }
    if (c === '"') { state = 'dq'; continue; }
    if (c === '`') { state = 'tpl'; continue; }
    if (c === '/' && n === '*') { state = 'block'; i++; continue; }
    if (c === '/' && n === '/') { state = 'line'; i++; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return i; }
  }
  return -1;
}

// slice the `[...]` (inclusive) that begins at the regex match end-1
function sliceArrayAfter(src, re) {
  const m = re.exec(src);
  if (!m) return null;
  const open = m.index + m[0].length - 1; // position of '['
  const end = matchBracket(src, open, '[', ']');
  if (end < 0) return null;
  return { name: m[1], text: src.slice(open, end + 1) };
}

function countQuestions(arrText) {
  // top-level questions carry `id:`; nested step/why/sol objects use txt/note/cl/ans — never id.
  const m = arrText.match(/\bid\s*:/g);
  return m ? m.length : 0;
}

function fmtBytes(b) {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1024 / 1024).toFixed(2)} MB`;
}

// ── run ────────────────────────────────────────────────────────────────────────
if (!existsSync(IN)) { console.error(`✗ input not found: ${IN}`); process.exit(1); }
const src = readFileSync(IN, 'utf8');

// 1) parse EXAMS registry (entries are single-line; backref guarantees key↔inner-key match)
const EXAM_RE = /"(\d{4}_[a-zšđčćž]+_[AB])":\{key:"\1",year:(\d+),season:"([a-zšđčćž]+)",razina:"([AB])",label:"([^"]+)",qs:(QS_[A-Za-z0-9_]+),duration:(\d+)\*60\}/g;
const registry = [];
for (const m of src.matchAll(EXAM_RE)) {
  registry.push({
    key: m[1], year: +m[2], season: m[3], razina: m[4], label: m[5],
    qsVar: m[6], durationSec: +m[7] * 60,
  });
}
if (!registry.length) { console.error('✗ EXAMS registry not parsed — pattern drift'); process.exit(1); }

// 2) prepare output dirs (clean)
rmSync(OUT, { recursive: true, force: true });
mkdirSync(EXAMS_DIR, { recursive: true });

// 3) slice each QS_* referenced by registry
const results = [];
const missing = [];
for (const r of registry) {
  const re = new RegExp(`const\\s+${r.qsVar}\\s*=\\s*\\[`, 'g');
  const sliced = sliceArrayAfter(src, re);
  if (!sliced) { missing.push(r.qsVar); continue; }
  const file = `exams/${r.key}.mjs`;
  const out = `// AUTO-GENERATED from mat-simulator monolith. Do not edit by hand.\n// exam: ${r.key}  (${r.year} ${r.season} ${r.razina})\nexport const qs = ${sliced.text};\n`;
  writeFileSync(join(OUT, file), out, 'utf8');
  results.push({ ...r, file, questionCount: countQuestions(sliced.text), bytes: Buffer.byteLength(out) });
}

// 4) FORMULE_DATA
const formule = sliceArrayAfter(src, /var\s+FORMULE_DATA\s*=\s*\[/g);
let formuleMeta = null;
if (formule) {
  const out = `// AUTO-GENERATED from mat-simulator monolith. Do not edit by hand.\nexport const formule = ${formule.text};\n`;
  writeFileSync(join(OUT, 'formule.mjs'), out, 'utf8');
  formuleMeta = { file: 'formule.mjs', topics: (formule.text.match(/\bt\s*:/g) || []).length, bytes: Buffer.byteLength(out) };
}

// 5) index.json
const index = results
  .map(({ key, year, season, razina, label, durationSec, file, questionCount }) =>
    ({ key, year, season, razina, label, durationSec, file, questionCount }))
  .sort((a, b) => a.razina.localeCompare(b.razina) || b.year - a.year || a.season.localeCompare(b.season));
writeFileSync(join(OUT, 'index.json'), JSON.stringify({ subject: 'mat', count: index.length, formule: formuleMeta?.file ?? null, exams: index }, null, 2), 'utf8');

// 6) verify — `node --check` (pure syntax; does NOT resolve identifiers, so engine-scope
//    refs like Svg*/e are fine). This is the correct gate for "correctly sliced valid JS".
const failures = [];
const allFiles = [...results.map(r => r.file), ...(formuleMeta ? ['formule.mjs'] : [])];
for (const f of allFiles) {
  try { execFileSync('node', ['--check', join(OUT, f)], { stdio: 'pipe' }); }
  catch (e) { failures.push(`${f}: ${String(e.stderr || e.message).split('\n')[0]}`); }
}

// faza-2 scope scan: modules with DIRECT svgFn:Svg refs (must co-locate/import that Svg in faza 2).
// Deferred form svgFn:()=>e(Svg,...) bundles fine via engine; direct form is the one to track.
const engineCoupled = results
  .filter(r => /svgFn\s*:\s*[A-Za-z_$]/.test(readFileSync(join(OUT, r.file), 'utf8')))
  .map(r => r.key);

// ── report ───────────────────────────────────────────────────────────────────
const sorted = [...results].sort((a, b) => a.bytes - b.bytes);
const totalBytes = results.reduce((s, r) => s + r.bytes, 0) + (formuleMeta?.bytes ?? 0);
const A = results.filter(r => r.razina === 'A').length;
const B = results.filter(r => r.razina === 'B').length;

console.log('\n══════ EXTRACTION REPORT ══════');
console.log(`input            ${IN} (${fmtBytes(statSync(IN).size)})`);
console.log(`EXAMS entries    ${registry.length}`);
console.log(`extracted        ${results.length}  (A: ${A}, B: ${B})`);
console.log(`formule.mjs      ${formuleMeta ? `${formuleMeta.topics} topics, ${fmtBytes(formuleMeta.bytes)}` : 'MISSING'}`);
console.log(`total questions  ${results.reduce((s, r) => s + r.questionCount, 0)}`);
console.log(`output size      ${fmtBytes(totalBytes)}  (vs ${fmtBytes(statSync(IN).size)} monolith)`);
if (sorted.length) {
  console.log(`smallest exam    ${sorted[0].key} (${fmtBytes(sorted[0].bytes)}, ${sorted[0].questionCount} q)`);
  console.log(`largest exam     ${sorted.at(-1).key} (${fmtBytes(sorted.at(-1).bytes)}, ${sorted.at(-1).questionCount} q)`);
}
console.log(`avg exam chunk   ${fmtBytes(Math.round(totalBytes / Math.max(results.length, 1)))}`);
console.log('───────────────────────────────');
console.log(missing.length  ? `✗ MISSING qs vars (${missing.length}): ${missing.join(', ')}` : '✓ all registry qs vars sliced');
console.log(failures.length ? `✗ SYNTAX failures (${failures.length}):\n   ${failures.join('\n   ')}` : '✓ all modules pass node --check (valid JS)');
console.log(`ℹ faza-2 engine-coupled (${engineCoupled.length}/${results.length}) — need Svg* in scope: ${engineCoupled.join(', ') || 'none'}`);
const ok = !missing.length && !failures.length && results.length === registry.length;
console.log(ok ? '\n✅ PASS\n' : '\n❌ FAIL\n');
process.exit(ok ? 0 : 1);
