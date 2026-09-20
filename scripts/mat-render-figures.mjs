#!/usr/bin/env node
// Renders every entry of an exam's `qImages` export to PNG, in light and dark theme.
// Usage: node scripts/mat-render-figures.mjs <examId> [outDir]
//   examId: e.g. 2010_zima_B  (reads content/simulator/mat/exams/<examId>.mjs)
//   outDir: default _audit/render/<examId>
// Internal (used by the driver to isolate a single entry in its own process
// so a content bug that hangs forever, e.g. an infinite loop from a stray
// `,` typo'd for `.` in a for-loop step, only kills that one entry instead of
// the whole batch):
//   node scripts/mat-render-figures.mjs <examId> <outDir> --only <imgKey>

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { chromium } from 'playwright';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const examId = process.argv[2];
if (!examId) {
  console.error('Usage: node scripts/mat-render-figures.mjs <examId> [outDir]');
  process.exit(1);
}
const outDir = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(ROOT, '_audit', 'render', examId);
const onlyFlagIdx = process.argv.indexOf('--only');
const onlyKey = onlyFlagIdx >= 0 ? process.argv[onlyFlagIdx + 1] : null;

fs.mkdirSync(outDir, { recursive: true });

// --- pull the light/dark CSS variables straight out of mat-engine.css ---
const cssPath = path.join(ROOT, 'public', 'sim', 'mat-engine.css');
const css = fs.readFileSync(cssPath, 'utf8');

function extractVars(blockRe) {
  const m = css.match(blockRe);
  if (!m) return {};
  const body = m[1];
  const vars = {};
  const re = /(--[a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let mm;
  while ((mm = re.exec(body))) vars[mm[1]] = mm[2].trim();
  return vars;
}

// first :root{...} block = light theme
const lightVars = extractVars(/:root\{([^}]*)\}/);
// .dark-mode{...} block = dark theme overrides (merged onto light)
const darkOverrides = extractVars(/\.dark-mode\{([^}]*)\}/);
const darkVars = { ...lightVars, ...darkOverrides };

const NEEDED = ['--text', '--muted', '--bg', '--s1', '--s2', '--bdr', '--blue', '--red', '--green', '--gold'];

function cssVarBlock(vars) {
  return NEEDED.map((k) => `${k}:${vars[k] ?? ''}`).join(';');
}

const lightVarCss = cssVarBlock(lightVars);
const darkVarCss = cssVarBlock(darkVars);

// parseMath emitira <span class="mfrac|mfrac-num|mfrac-bar|mfrac-den"> bez inline
// stilova, pa razlomak bez tih pravila u PNG-u ispadne kao dva broja jedan do
// drugog ("1" pa "2", bez crte). CSS varijable gore nisu dovoljne — povlačimo i
// sama .mfrac* pravila iz mat-engine.css (izvor istine, da se ne razilaze).
// (Prolazak po SVIM pravilima pa filtriranje po selektoru — regex koji bi tražio
// samo mfrac pravila trošio bi zatvarajuću vitičastu prethodnog pravila i preskakao
// svako drugo podudaranje, pa bi baš .mfrac i .mfrac-bar ispali.)
const mathCss = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
  .filter(([, sel]) => /\bmfrac/.test(sel))
  .map(([, sel, body]) => `${sel.trim()}{${body.trim()}}`)
  .join('\n');

// (Bivši `globalThis.parseMath = () => null` stub je uklonjen.) KoordOs je zvao
// nedeklarirani `parseMath(label)` i rušio se na "parseMath is not defined" izvan
// preglednika; sada ga mat-shared-svg.mjs uvozi iz
// components/simulator/mat/core/parseMath.mjs (obični ESM, bez aliasa i .tsx-a), pa
// se labeli iscrtavaju kroz pravi parseMath umjesto da ih stub tiho svodi na null.
// Tipografiju razlomaka pokriva `mathCss` gore; eksponenti/indeksi nose inline
// stilove iz parseMath-a, pa im dodatni CSS ne treba.

// Some auto-generated exam files reference bare, never-declared module-level
// counters for SVG element keys (e.g. `++_s15jk`, `_uid15j()`) — a
// codegen/content bug where the `let _foo = 0; function _foo(){...}`
// declaration was dropped. These identifiers resolve through globalThis, so
// on a ReferenceError/TypeError naming one we stub it in as both an
// incrementable number and a callable unique-id generator and retry.
const stubbedGlobals = new Set();
function stubMissingGlobal(err) {
  const m = /^([$_A-Za-z][$_A-Za-z0-9]*) is not (?:defined|a function)$/.exec(err.message || '');
  if (!m || stubbedGlobals.has(m[1])) return false;
  const name = m[1];
  stubbedGlobals.add(name);
  let n = 0;
  const fn = () => ++n;
  fn.valueOf = () => ++n; // so `++name` also works if it's used as a number
  fn[Symbol.toPrimitive] = () => ++n;
  globalThis[name] = fn;
  console.warn(`WARN stubbed missing global identifier: ${name} (content bug in exam file)`);
  return true;
}

// --- import the exam module and grab qImages ---
const examPath = path.join(ROOT, 'content', 'simulator', 'mat', 'exams', `${examId}.mjs`);
const mod = await import(`file://${examPath.replace(/\\/g, '/')}`);
const qImages = mod.qImages;
if (!qImages) {
  console.error(`No qImages export found in ${examPath}`);
  process.exit(1);
}

const allEntries = Object.entries(qImages);

if (!onlyKey) {
  // --- driver mode: isolate each entry in its own child process with a
  // timeout, so one hanging/broken entry (content bug) can't take down the
  // whole batch or leave the rest unrendered. ---
  console.log(`Found ${allEntries.length} qImages entries in ${examId}`);
  fs.mkdirSync(outDir, { recursive: true });
  const results = [];
  for (const [imgKey] of allEntries) {
    const r = spawnSync(
      process.execPath,
      [__filename, examId, outDir, '--only', imgKey],
      { encoding: 'utf8', timeout: 60000, cwd: ROOT }
    );
    if (r.stdout) process.stdout.write(r.stdout);
    // A child that hit ETIMEDOUT (or a non-zero exit, e.g. browser.close()
    // hanging/erroring on shutdown after the actual render work is already
    // done) may still have written both PNGs before it was killed/errored —
    // so always check the filesystem for real output before recording an
    // error, instead of trusting the child's own exit status.
    if (r.error && r.error.code === 'ETIMEDOUT') {
      console.error(`WARN ${imgKey}: child timed out (checking for output written before the timeout)`);
    } else if (r.status !== 0) {
      const errTail = (r.stderr || '').trim().split('\n').slice(-5).join(' | ');
      console.error(`WARN ${imgKey}: child exited ${r.status} (checking for output anyway): ${errTail}`);
    }
    for (const theme of ['light', 'dark']) {
      const p = path.join(outDir, `${imgKey}.${theme}.png`);
      if (fs.existsSync(p)) results.push({ imgKey, theme, path: p });
      else results.push({ imgKey, theme, error: 'no output produced' });
    }
  }
  const errCount = results.filter((r) => r.error).length;
  console.log(`\nDone. ${results.length - errCount} renders ok, ${errCount} errors.`);
  fs.writeFileSync(path.join(outDir, `_results.${examId}.json`), JSON.stringify(results, null, 2));
  process.exit(errCount > 0 && results.length === errCount ? 1 : 0);
}

fs.mkdirSync(outDir, { recursive: true });
const entries = allEntries.filter(([k]) => k === onlyKey);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1200 } });

const results = [];

for (const [imgKey, fn] of entries) {
  let el;
  for (let attempt = 0; attempt < 8; attempt++) {
    try {
      el = fn();
      break;
    } catch (err) {
      if (stubMissingGlobal(err)) continue;
      console.error(`FAIL ${imgKey}: could not invoke qImages fn:`, err.message);
      results.push({ imgKey, error: `invoke: ${err.message}` });
      el = undefined;
      break;
    }
  }
  if (el === undefined) continue;
  let markup;
  for (let attempt = 0; attempt < 8; attempt++) {
    try {
      markup = ReactDOMServer.renderToStaticMarkup(el);
      break;
    } catch (err) {
      if (stubMissingGlobal(err)) {
        el = fn(); // re-invoke so keys are generated with the now-stubbed global
        continue;
      }
      console.error(`FAIL ${imgKey}: renderToStaticMarkup failed:`, err.message);
      results.push({ imgKey, error: `render: ${err.message}` });
      markup = undefined;
      break;
    }
  }
  if (markup === undefined) continue;

  const vbMatch = markup.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const vbW = vbMatch ? Math.ceil(Number(vbMatch[1])) : 320;
  const vbH = vbMatch ? Math.ceil(Number(vbMatch[2])) : 320;

  for (const theme of ['light', 'dark']) {
    const varCss = theme === 'light' ? lightVarCss : darkVarCss;
    const bg = theme === 'light' ? lightVars['--bg'] : darkVars['--bg'];
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>
      html,body{margin:0;padding:0;background:${bg};}
      #stage{display:inline-block;width:${vbW}px;padding:16px;background:${bg};${varCss}}
      #stage svg{display:block;width:${vbW}px;height:${vbH}px;}
      ${mathCss}
    </style></head><body><div id="stage">${markup}</div></body></html>`;

    const outPath = path.join(outDir, `${imgKey}.${theme}.png`);
    try {
      await page.setContent(html, { waitUntil: 'load' });
      const stage = await page.$('#stage');
      const box = await stage.boundingBox();
      if (!box || box.width < 1 || box.height < 1) {
        throw new Error(`invalid boundingBox ${JSON.stringify(box)} (vbW=${vbW} vbH=${vbH})`);
      }
      const buf = await page.screenshot({ clip: box, omitBackground: false, timeout: 15000 });
      // resize to width 800
      await sharp(buf).resize({ width: 800 }).png().toFile(outPath);
      results.push({ imgKey, theme, path: outPath });
      console.log(`OK   ${imgKey} [${theme}] -> ${outPath}`);
    } catch (err) {
      console.error(`FAIL ${imgKey} [${theme}]: ${err.message}`);
      results.push({ imgKey, theme, error: err.message });
    }
  }
}

await browser.close();

const errCount = results.filter((r) => r.error).length;
console.log(`\nDone. ${results.length - errCount} renders ok, ${errCount} errors.`);
