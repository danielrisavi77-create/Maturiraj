#!/usr/bin/env node
// build-engine.mjs — AST-based extraction (balance-safe, regex-aware via acorn).
// Parses the app-IIFE body, drops top-level: function Svg*/KoordOs (co-located), const QS_* arrays
// (extracted), Q_IMAGES registry (per-exam holder), const EXAMS + _META strip, createRoot bootstrap.
// Keeps the destructure, parseMath family, FractionSVG/EquationSystemSVG/FormulaBlock, all components,
// constants, helpers, FORMULE_DATA, QS_*_META objects, Sim, ErrorBoundary. Emits core + thin wrapper.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { Parser } from 'acorn';

const IN  = resolve(process.argv[2] || '_prototypes/mat-simulator.html');
const OUT = resolve(process.argv[3] || 'components/simulator/MatEngine.tsx');
const OUT_CORE = OUT.replace(/MatEngine\.tsx$/, 'MatEngineCore.tsx');

const src = readFileSync(IN, 'utf8');

// ── Zastita od tihog gazenja rucnih zakrpa u MatEngineCore.tsx ──────────────────────────────
// Generirani core se poslije generiranja rucno dorađuje (vidi POST_GEN_PATCHES). Ako te zakrpe
// pregazimo, MatFullSimulator.jsx (koji zove __setExamCatalog/__setExamLoader) prestaje raditi
// — "core.__setExamCatalog is not a function" — i 70 QS_*_META konstanti se vraca u bundle.
// Zato: ako postojeci MatEngineCore.tsx nema nas stamp, build staje i trazi --force.
const GEN_STAMP = 'BUILD-ENGINE-GENERATED (bez post-gen zakrpa)';
const POST_GEN_PATCHES = [
  '2.1 lazy ispiti: __setExamCatalog/__setExamLoader/__addExams, loadExam/loadAllExams, gating u App-u',
  '2.2 lazy nerdamer: __ensureNerdamer() umjesto eager window.nerdamer',
  '3.2 grading: import { isAnswerCorrect, normalizeAnswer, numEquals } from "@/lib/mat-grading"',
  '5.2 izbacenih 70 QS_*_META konstanti iz klijentskog bundlea',
];
{
  const force = process.argv.includes('--force');
  let existing = '';
  try { existing = readFileSync(OUT_CORE, 'utf8'); } catch { /* prvi build */ }
  if (existing && !existing.includes(GEN_STAMP) && !force) {
    console.error('\n✖ ' + OUT_CORE);
    console.error('  Postojeci core je rucno dorađen nakon generiranja i ovaj build bi ga pregazio.');
    console.error('  Zakrpe koje bi nestale:');
    POST_GEN_PATCHES.forEach((p) => console.error('   · ' + p));
    console.error('  Prenesi ih u ovaj generator (ili u monolit), pa pokreni ponovno.');
    console.error('  Svjesno gazenje: node build-engine.mjs <in> <out> --force\n');
    process.exit(1);
  }
}


// ── nerdamer (symbolic-math lib bundled as its own <script>) → public/sim/nerdamer.js ──
// The engine references window.nerdamer for CAS features (solver, exact calc, answer verify).
// We only extract the app IIFE below, so nerdamer must be emitted separately and loaded as a
// classic script (MatFullSimulator injects it before mounting the engine).
{
  const scripts = [...src.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const nd = scripts.find(t => /\bvar\s+nerdamer\s*=/.test(t.slice(0, 300)));
  const outNd = resolve(dirname(OUT), '../../public/sim/nerdamer.js');
  if (nd) {
    mkdirSync(dirname(outNd), { recursive: true });
    writeFileSync(outNd,
      nd.trim() + '\n;try{if(typeof window!=="undefined"&&typeof nerdamer!=="undefined")window.nerdamer=nerdamer;}catch(e){}\n',
      'utf8');
    console.log(`nerdamer.js          ${(Buffer.byteLength(nd) / 1024).toFixed(0)} KB → public/sim/nerdamer.js`);
  } else {
    console.log('nerdamer             ⚠ NOT FOUND in monolith (CAS features will be disabled)');
  }
}
const MARK = '<script>(function(){';
const s = src.indexOf(MARK);
const bodyStart = s + MARK.length;
const bodyEnd = src.indexOf('})();</script>', bodyStart);
if (s < 0 || bodyEnd < 0) { console.error('app IIFE not found'); process.exit(1); }
const body = src.slice(bodyStart, bodyEnd);

const ast = Parser.parse(body, { ecmaVersion: 'latest', sourceType: 'script', allowReturnOutsideFunction: true });

const txt = (n) => body.slice(n.start, n.end);
let dropped = { svg: 0, qs: 0, qimages: 0, exams: 0, strip: 0, bootstrap: 0 };
const kept = [];

// the whole app is wrapped in `try { ...everything... } catch(...) {...}` — unwrap to reach real top-level
let statements = ast.body;
if (statements.length === 1 && statements[0].type === 'TryStatement') statements = statements[0].block.body;

for (const node of statements) {
  if (node.type === 'FunctionDeclaration' && node.id && (/^Svg/.test(node.id.name) || node.id.name === 'KoordOs')) { dropped.svg++; continue; }
  if (node.type === 'VariableDeclaration') {
    const d = node.declarations[0];
    if (d && d.id.type === 'Identifier' && /^QS_/.test(d.id.name) && d.init && d.init.type === 'ArrayExpression') { dropped.qs++; continue; }
    if (d && d.id.type === 'Identifier' && d.id.name === 'EXAMS') { dropped.exams++; continue; }
  }
  if (node.type === 'ExpressionStatement') {
    const ex = node.expression;
    if (ex.type === 'AssignmentExpression' && ex.left.type === 'Identifier' && ex.left.name === 'Q_IMAGES') { dropped.qimages++; continue; }
    const t = txt(node);
    if (/^Object\.values\(EXAMS\)\.forEach\(exam\s*=>/.test(t)) { dropped.strip++; continue; }
    if (/^ReactDOM\.createRoot\(/.test(t)) { dropped.bootstrap++; continue; }
  }
  kept.push(txt(node));
}

let engine = kept.join('\n');
engine = engine.split('Q_IMAGES[').join('__MAT.Q_IMAGES[');
// Native (same-window) integration: when NOT inside an iframe, route DISCERE_SAVE/READY/etc
// to an in-process hook instead of window.parent. Keeps iframe behaviour as fallback.
engine = engine
  .split('function toParent(msg){try{if(window.parent&&window.parent!==window)window.parent.postMessage(msg,"*");}catch(e){}}')
  .join('function toParent(msg){try{if(typeof window!=="undefined"&&window.__DISCERE_NATIVE_SAVE__){window.__DISCERE_NATIVE_SAVE__(msg);return;}if(window.parent&&window.parent!==window)window.parent.postMessage(msg,"*");}catch(e){}}');
// renderOptText is placed into array-literal children in many spots (e.g. ["Točno: ", renderOptText(x)]).
// Some of its return paths yield an element without a `key`, tripping React's "unique key" dev warning.
// Wrap it so it always returns a keyed node (rename original → __renderOptTextRaw, add keyed shell).
engine = engine.replace(
  'function renderOptText(text){',
  'function renderOptText(text){var __r=__renderOptTextRaw(text);if(__r==null)return null;'
  + 'if(Array.isArray(__r))return e(React.Fragment,{key:"rot"},__r);'
  + 'if(React.isValidElement(__r))return __r.key!=null?__r:React.cloneElement(__r,{key:"rot"});'
  + 'return __r;}\nfunction __renderOptTextRaw(text){'
);
// navFilterControls topic-filter <option> map keys on the label, which is undefined for any
// question with a falsy topic → React "unique key" warning. Make the key robust.
engine = engine
  .split('labels.map(l=>e("option",{key:l,value:l},l))')
  .join('labels.map((l,i)=>e("option",{key:l||("__t"+i),value:l},l))');

const coreHeader =
`// @ts-nocheck
'use client';
/* AUTO-GENERATED engine core from mat-simulator monolith (AST-extracted).
   SVG (628) + exam data (70) + Q_IMAGES externalized. Exposes Sim + ErrorBoundary + __setQImages.
   ${GEN_STAMP} — prije upotrebe treba ponovo primijeniti:
${POST_GEN_PATCHES.map((p) => `     - ${p}`).join('\n')} */
import React from 'react';
let EXAMS = {};
const __MAT = { Q_IMAGES: {} };
`;
const coreFooter =
`
export { Sim, ErrorBoundary, App };
export function __setQImages(q) { __MAT.Q_IMAGES = q || {}; }
export function __setExams(x) { EXAMS = x || {}; }
`;
writeFileSync(OUT_CORE, coreHeader + engine + coreFooter, 'utf8');

writeFileSync(OUT,
`// @ts-nocheck
'use client';
/* Platform entry. Route: const { qs, qImages } = await import('@/content/simulator/mat/exams/<key>.mjs');
   <MatEngine examKey={key} qs={qs} qImages={qImages} duration={durationSec} onDone={...} onExit={...} /> */
import React from 'react';
import { Sim, ErrorBoundary, __setQImages } from './MatEngineCore';

export function MatEngine({ examKey, qs, qImages = {}, duration = 10800, onExit, onDone, userData }) {
  __setQImages(qImages);
  const e = React.createElement;
  const exam = { key: examKey, qs: (qs || []).filter((q) => !q._META), duration };
  return e(ErrorBoundary, null, e(Sim, {
    exam, examMode: true, practice: false,
    onExit: onExit || (() => {}), onDone: onDone || (() => {}), userData: userData || {},
    onPracticeErrors: () => {}, onPracticeSimilar: () => {}, onStats: () => {},
    onFilter: () => {}, onHome: () => {}, resume: null, onPatchResult: () => {},
  }));
}
export default MatEngine;
`, 'utf8');

const fmt = b => b < 1048576 ? `${(b/1024).toFixed(0)} KB` : `${(b/1048576).toFixed(2)} MB`;
const core = readFileSync(OUT_CORE, 'utf8');
console.log('\n══════ ENGINE EXTRACTION (AST, core + wrapper) ══════');
console.log(`monolith             ${fmt(src.length)}`);
console.log(`top-level statements ${statements.length} -> kept ${kept.length}`);
console.log(`dropped              SVG ${dropped.svg} | QS ${dropped.qs} | Q_IMAGES ${dropped.qimages} | EXAMS ${dropped.exams} | strip ${dropped.strip} | bootstrap ${dropped.bootstrap}`);
console.log(`MatEngineCore.tsx    ${fmt(core.length)}  (${core.split('\n').length} lines)`);
console.log(`MatEngine.tsx        ${fmt(readFileSync(OUT,'utf8').length)}  (thin wrapper)`);
