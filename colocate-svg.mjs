#!/usr/bin/env node
/**
 * colocate-svg.mjs — Faza 1.5: SVG co-location (correctness-required)
 *
 * Two binding mechanisms in the monolith:
 *   (a) solution SVGs: svgFn:()=>e(SvgX,null) | svgFn:SvgX  inside qs  → ref lives in exam data
 *   (b) question SVGs: Q_IMAGES["<examkey>__<qid>"]=()=>e(SvgX,null) → ref lives in engine registry
 * Both reference Svg* by bare name → must resolve in the consuming module's scope.
 *
 * For each exam, co-locate the SVGs it needs (from BOTH (a) and (b) + transitive), export its
 * own qImages slice, and import shared SVGs (KoordOs + multi-exam) from mat-shared-svg.mjs.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const IN  = resolve(process.argv[2] || '_prototypes/mat-simulator.html');
const DIR = resolve(process.argv[3] || 'content/simulator/mat');
const EXAMS_DIR = join(DIR, 'exams');
if (!existsSync(IN) || !existsSync(EXAMS_DIR)) { console.error('✗ missing input or faza-1 output'); process.exit(1); }

function match(src, openIdx, open, close) {
  let depth = 0, st = 'code';
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i], n = src[i + 1];
    if (st === 'sq') { if (c === '\\') { i++; continue; } if (c === "'") st = 'code'; continue; }
    if (st === 'dq') { if (c === '\\') { i++; continue; } if (c === '"') st = 'code'; continue; }
    if (st === 'tpl'){ if (c === '\\') { i++; continue; } if (c === '`') st = 'code'; continue; }
    if (st === 'blk'){ if (c === '*' && n === '/') { i++; st = 'code'; } continue; }
    if (st === 'lin'){ if (c === '\n') st = 'code'; continue; }
    if (c === "'") { st = 'sq'; continue; }
    if (c === '"') { st = 'dq'; continue; }
    if (c === '`') { st = 'tpl'; continue; }
    if (c === '/' && n === '*') { st = 'blk'; i++; continue; }
    if (c === '/' && n === '/') { st = 'lin'; i++; continue; }
    if (c === open) depth++; else if (c === close) { depth--; if (depth === 0) return i; }
  }
  return -1;
}
function sliceFn(src, kwIdx) {
  const pOpen = src.indexOf('(', kwIdx), pClose = match(src, pOpen, '(', ')');
  let b = pClose + 1; while (b < src.length && src[b] !== '{') b++;
  return src.slice(kwIdx, match(src, b, '{', '}') + 1);
}
const idents = (s) => new Set(s.match(/\b[A-Za-z_]\w*\b/g) || []);

const src = readFileSync(IN, 'utf8');

// 1) pool: all function Svg* + KoordOs
const pool = new Map();
for (const m of src.matchAll(/^function (Svg[A-Za-z0-9_]+|KoordOs)\s*\(/gm))
  if (!pool.has(m[1])) pool.set(m[1], sliceFn(src, m.index));
const poolNames = new Set(pool.keys());

// 2) parse Q_IMAGES registry → entries grouped by exam key
const qiStart = src.indexOf('Q_IMAGES = {');
const qiOpen = src.indexOf('{', qiStart), qiEnd = match(src, qiOpen, '{', '}');
const qiBlock = src.slice(qiOpen, qiEnd + 1);
const qiByExam = new Map();
let qiMatched = 0;
for (const m of qiBlock.matchAll(/"((\d{4}_[a-zšđčćž]+_[AB])__[^"]+)"\s*:\s*\(\)\s*=>\s*e\(\s*(\w+)\s*,\s*null\s*\)/g)) {
  qiMatched++;
  if (!qiByExam.has(m[2])) qiByExam.set(m[2], []);
  qiByExam.get(m[2]).push({ key: m[1], svg: m[3] });
}
const qiTotal = (qiBlock.match(/"\d{4}_[a-zšđčćž]+_[AB]__/g) || []).length;

// 3) edges among pool
const edges = new Map();
for (const [name, code] of pool) {
  const refs = new Set();
  for (const id of idents(code)) if (id !== name && poolNames.has(id)) refs.add(id);
  edges.set(name, refs);
}
// 4) roots per exam = svgFn refs (in qs file) ∪ Q_IMAGES svgs for that exam
const examFiles = readdirSync(EXAMS_DIR).filter(f => f.endsWith('.mjs'));
const roots = new Map();
for (const f of examFiles) {
  const r = new Set();
  for (const id of idents(readFileSync(join(EXAMS_DIR, f), 'utf8'))) if (poolNames.has(id)) r.add(id);
  for (const { svg } of (qiByExam.get(f.replace(/\.mjs$/, '')) || [])) if (poolNames.has(svg)) r.add(svg);
  roots.set(f, r);
}
// 5) transitive closures
const cl = (start) => { const s = new Set(), st = [...start]; while (st.length) { const x = st.pop(); if (s.has(x)) continue; s.add(x); for (const d of (edges.get(x) || [])) st.push(d); } return s; };
const examClosure = new Map(); for (const [f, r] of roots) examClosure.set(f, cl(r));
// 6) classify
const usage = new Map();
for (const c of examClosure.values()) for (const n of c) usage.set(n, (usage.get(n) || 0) + 1);
const shared = new Set([...usage].filter(([, c]) => c > 1).map(([n]) => n)); shared.add('KoordOs');
for (const n of [...shared]) for (const d of cl([n])) shared.add(d);
const perExam = new Map(); for (const [f, c] of examClosure) perExam.set(f, [...c].filter(n => !shared.has(n)));

// 7) emit shared module
const sharedList = [...shared].filter(n => pool.has(n));
const sharedBody = sharedList.map(n => pool.get(n)).join('\n\n');
writeFileSync(join(DIR, 'mat-shared-svg.mjs'),
`// AUTO-GENERATED — shared SVGs (KoordOs + multi-exam). Do not edit by hand.
// parseMath se MORA uvesti: KoordOs ga zove za label, a u monolitu je bio globalan.
// Bez ovog retka regeneriranje vraća ReferenceError "parseMath is not defined"
// (relativno, s ekstenzijom — ovu datoteku učitava i obični Node, gdje alias '@'
// nije razrješiv ni .tsx učitljiv).
import React from 'react';
import { parseMath } from '../../../components/simulator/mat/core/parseMath.mjs';
const e = React.createElement;

${sharedBody}

export { ${sharedList.join(', ')} };
`, 'utf8');

// 8) rewrite exam modules: imports + local SVGs + qs (verbatim) + qImages slice
let movedBytes = 0;
for (const f of examFiles) {
  const orig = readFileSync(join(EXAMS_DIR, f), 'utf8');
  const qsAt = orig.indexOf('export const qs');
  const qsSrc = orig.slice(qsAt).trimEnd();
  const examKey = f.replace(/\.mjs$/, '');
  const localSvgs = perExam.get(f).filter(n => pool.has(n));
  const sharedUsed = [...examClosure.get(f)].filter(n => shared.has(n) && pool.has(n));
  const localBody = localSvgs.map(n => pool.get(n)).join('\n\n');
  movedBytes += Buffer.byteLength(localBody);
  const qi = qiByExam.get(examKey) || [];
  const qiSrc = `export const qImages = {\n${qi.map(x => `  ${JSON.stringify(x.key)}: () => e(${x.svg}, null),`).join('\n')}\n};`;
  const head =
`// AUTO-GENERATED from mat-simulator monolith (v2: SVG co-located + qImages). Do not edit by hand.
import React from 'react';
${sharedUsed.length ? `import { ${sharedUsed.join(', ')} } from '../mat-shared-svg.mjs';\n` : ''}const e = React.createElement;

${localBody ? localBody + '\n\n' : ''}`;
  writeFileSync(join(EXAMS_DIR, f), `${head}${qsSrc}\n\n${qiSrc}\n`, 'utf8');
}

// 9) verify: import + call every qImages thunk (resolves every bound SVG)
const failures = [];
for (const f of examFiles) {
  try {
    const mod = await import(pathToFileURL(join(EXAMS_DIR, f)).href);
    if (!Array.isArray(mod.qs) || !mod.qs.length) failures.push(`${f}: qs invalid`);
    if (!mod.qImages || typeof mod.qImages !== 'object') failures.push(`${f}: qImages missing`);
    else for (const [k, thunk] of Object.entries(mod.qImages)) {
      try { const el = thunk(); if (!el || !el.type) failures.push(`${f}: ${k} bad element`); }
      catch (e) { failures.push(`${f}: ${k} → ${String(e.message).split('\n')[0]}`); }
    }
  } catch (e) { failures.push(`${f}: ${String(e.message).split('\n')[0]}`); }
}
try { await import(pathToFileURL(join(DIR, 'mat-shared-svg.mjs')).href); } catch (e) { failures.push(`shared: ${e.message}`); }

const fmt = b => b < 1024 ? `${b} B` : b < 1048576 ? `${(b/1024).toFixed(1)} KB` : `${(b/1048576).toFixed(2)} MB`;
const totalLocal = [...perExam.values()].reduce((s, a) => s + a.length, 0);
const totalQi = [...qiByExam.values()].reduce((s, a) => s + a.length, 0);
const dead = [...poolNames].filter(n => !usage.has(n));
console.log('\n══════ SVG CO-LOCATION REPORT (v2 + Q_IMAGES) ══════');
console.log(`pool (Svg*/KoordOs)            ${pool.size}`);
console.log(`Q_IMAGES entries parsed        ${qiMatched}/${qiTotal}  (${qiByExam.size} exams)`);
console.log(`qImages thunks emitted         ${totalQi}`);
console.log(`shared → mat-shared-svg.mjs    ${sharedList.length}`);
console.log(`co-located into exams          ${totalLocal}`);
console.log(`still unused (real dead code)  ${dead.length}`);
console.log(`SVG bytes moved → exams        ${fmt(movedBytes)}  + shared ${fmt(Buffer.byteLength(sharedBody))}`);
console.log('──────────────────────────────────────────────');
console.log(failures.length ? `✗ FAILURES (${failures.length}):\n   ${failures.slice(0,15).join('\n   ')}${failures.length>15?`\n   …+${failures.length-15} more`:''}` : `✓ all ${examFiles.length} modules import + all ${totalQi} qImages thunks render`);
console.log(qiMatched === qiTotal ? '✓ all Q_IMAGES entries matched' : `⚠ ${qiTotal-qiMatched} Q_IMAGES entries unmatched (non-standard value form)`);
const ok = !failures.length && qiMatched === qiTotal;
console.log(ok ? '\n✅ PASS\n' : '\n❌ FAIL\n');
process.exit(ok ? 0 : 1);
