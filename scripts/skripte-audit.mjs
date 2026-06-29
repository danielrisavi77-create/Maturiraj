/**
 * skripte-audit.mjs — READ-ONLY audit dosljednosti hrvatskih skripti.
 * Skenira app/skripte/data/hrv-components/poglavlje01..28.jsx i 2 shared CSS filea
 * te izvještava o odstupanjima u "chrome"-u (tabovi, back-to-top, mount obrazac,
 * imena importa, shared CSS, tvrdo kodirani fontovi). Ništa ne mijenja.
 *
 * Pokretanje:  node scripts/skripte-audit.mjs
 * Izlaz: tablica u konzoli + scripts/.skripte/audit.json
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIR = resolve(ROOT, 'app/skripte/data/hrv-components');
const OUT_DIR = resolve(__dirname, '.skripte');

const FE0F = '️';                 // variation selector-16
const PENCIL = '✍';               // ✍
const CHECK = '✅';                // ✅
const BOOK = '📖';           // 📖
const MASK = '🎭';           // 🎭

function read(f) { return readFileSync(resolve(DIR, f), 'utf8'); }
function stripTags(s) { return s.replace(/<span[^>]*>[\s\S]*?<\/span>/g, '').replace(/<[^>]+>/g, '').trim(); }

function auditChapter(num) {
  const file = `poglavlje${String(num).padStart(2, '0')}.jsx`;
  const path = resolve(DIR, file);
  if (!existsSync(path)) return null;
  const txt = readFileSync(path, 'utf8');
  const hNN = 'h' + String(num).padStart(2, '0');

  // ── back-to-top glyph ──
  const bttM = txt.match(/<button[^>]*class="btt"[^>]*>([\s\S]*?)<\/button>/);
  const bttGlyph = bttM ? stripTags(bttM[1]) : '(nema)';

  // ── tab gumbi (class="tab", onclick="sw(N)") ──
  const tabs = [];
  const re = /<button\s+([^>]*?)>([\s\S]*?)<\/button>/g;
  let m;
  while ((m = re.exec(txt)) !== null) {
    const attrs = m[1], inner = m[2];
    if (!/class="tab(?:\s|")/.test(attrs)) continue;     // samo .tab (ne .tab-…, .nb, .fcb)
    const swM = attrs.match(/onclick="sw\((\d+)\)"/);
    if (!swM) continue;
    const idx = Number(swM[1]);
    const badgeM = inner.match(/class="tab-badge"[^>]*>([^<]*)</);
    tabs.push({
      idx,
      label: stripTags(inner),
      hasId: /id="tab\d+"/.test(attrs),
      hasDone: /class="tab-done"/.test(inner),
      badge: badgeM ? badgeM[1].trim() : null,
      lock: /class="tab-lock"/.test(inner),
    });
  }
  tabs.sort((a, b) => a.idx - b.idx);
  const lockSet = tabs.filter(t => t.lock).map(t => t.idx);

  // ── mount obrazac (sva četiri su VALJANA — ne flagiraju se kao odstupanje) ──
  //  portal    = inline createPortal (deklarativno; h01–03)
  //  root      = inline createRoot u useEffect (h07–16)
  //  delegated = chapter delegira mount helperu (<…ReactLayers/>; h04–06)
  //  none      = nema React pod-komponenti, čisti HTML/JS (jezična obitelj h17–28)
  const era = /createPortal/.test(txt) ? 'portal'
    : /createRoot/.test(txt) ? 'root'
    : /ReactLayers/.test(txt) ? 'delegated'
    : 'none';

  // ── imena pomoćnih importa (relativni) ──
  const imp = new Set();
  let im; const reImp = /from\s+'\.\/([^']+)'/g;
  while ((im = reImp.exec(txt)) !== null) {
    const base = im[1];
    if (/^h\d{2}-/.test(base)) imp.add('lower-hyphen');
    else if (/^H\d{2}_/.test(base)) imp.add('upper-underscore');
    else if (/^H\d{2}-/.test(base)) imp.add('upper-hyphen');
    else if (/^h\d{2}_/.test(base)) imp.add('lower-underscore');
  }

  // ── shared CSS ──
  const css = /SHARED_LIT_CSS/.test(txt) ? 'lit' : /SHARED_LANG_CSS/.test(txt) ? 'lang' : '(?)';

  // ── izvor STYLES_CSS-a (referencira li uopće shared sloj?) ──
  // Kritično: poglavlje čiji STYLES_CSS NE koristi SHARED_*_CSS živi izvan
  // zajedničkog sloja → shared fixevi (tokeni, sidebar v2…) ga ne dohvaćaju.
  const cssM = txt.match(/const\s+STYLES_CSS\s*=\s*([^\n]+)/);
  const cssExpr = cssM ? cssM[1].trim() : '';
  const usesSharedCss = /SHARED_(LIT|LANG)_CSS/.test(cssExpr);
  let cssSource;
  if (!cssExpr) cssSource = '(?)';
  else if (/^`/.test(cssExpr)) cssSource = 'inline-literal';        // h06: vlastiti CSS, ne shared
  else if (!usesSharedCss) cssSource = 'other';
  else if (/CHAPTER_CSS_DELTA/.test(cssExpr) && /\+[^+]*\+/.test(cssExpr.replace('CHAPTER_CSS_DELTA','').replace(/SHARED_(LIT|LANG)_CSS/,''))) cssSource = 'shared+embed+delta';
  else if (/CHAPTER_CSS_DELTA/.test(cssExpr)) cssSource = 'shared+delta';
  else cssSource = 'shared';
  // import deklariran ali (kod inline-literal) nije iskorišten
  const sharedImported = /import\s*\{\s*SHARED_(LIT|LANG)_CSS\s*\}/.test(txt);
  const sharedImportDead = sharedImported && !usesSharedCss;

  // ── inventar funkcija (inline boilerplate; copy-paste drift) ──
  const functions = [...new Set([...txt.matchAll(/^\s*function\s+([A-Za-z_$][\w$]*)\s*\(/gm)].map(x => x[1]))];
  // ── globalna izloženost (window.X = …) ──
  const globals = [...new Set([...txt.matchAll(/window\.([A-Za-z_$][\w$]*)\s*=(?!=)/g)].map(x => x[1]))]
    .filter(g => !['print','location','innerWidth','innerHeight','scrollTo','open'].includes(g));
  // ── podsustavi (markeri u cijelom fileu) ──
  const featDefs = {
    pojmovnik:   /pojmovnik/i,
    kviz:        /\bkviz\b|renderQuiz|quizState/i,
    checkpoint:  /checkpoint/i,
    citatnik:    /citatnik/i,
    sidebar:     /class="sb-item|class="sb"|sb-nav/,
    countdown:   /daysToMatura|renderCountdown|class="countdown"|id="cd-days"/,  // imenovana fn ILI inline IIFE (h12)
    socialProof: /renderSocialProof/,
    pdf:         /generatePDF/,
    feedback:    /openFeedbackModal/,
    diagnostic:  /function\s+diag\d*Start/,   // diagStart (h01–11) ILI diag0Start (h12–16)
    paywall:     /showHrvPaywall|__mtShowHrvPaywall/,
    cheatsheet:  /printCheatSheet|generateCheat/,
    signup:      /supabaseSignup|submitSignup/,
  };
  const features = {};
  for (const [k, rx] of Object.entries(featDefs)) features[k] = rx.test(txt);

  // ── CSS health: balans zagrada u CHAPTER_CSS_DELTA (otkriva slomljeni/okrnjeni CSS) ──
  // Δ≠0 znači nedostaju zatvarajuće } → pravila se mis-scopeaju (zaglave u @media) ili odbacuju.
  let cssDeltaImbalance = 0;
  const dMark = 'const CHAPTER_CSS_DELTA = `';
  const dStart = txt.indexOf(dMark);
  if (dStart >= 0) {
    const dEnd = txt.indexOf('`;', dStart + dMark.length);
    const delta = txt.slice(dStart + dMark.length, dEnd);
    cssDeltaImbalance = (delta.match(/\{/g) || []).length - (delta.match(/\}/g) || []).length;
  }

  // ── tvrdo kodirani font-family (ne var) ──
  // NB: `font-family:\s*(?!var\()` lažno broji (\s* backtracka na 0 pa lookahead
  // gleda razmak). Uhvati vrijednost i flagiraj SAMO konkretne imenovane fontove
  // (navodnici ili vlastito ime); generici sans-serif/serif/system-ui (legitimni
  // u @media print i <noscript> gdje var() ne vrijedi) se NE broje.
  // Navodnik se broji kao font SAMO ako ga slijedi slovo ('Courier New' da,
  // a "system-ui\"> iz HTML atributa ne).
  const NAMED = /['"][A-Za-z]|\b(Georgia|Times|Courier|Arial|Helvetica|Verdana|Garamond|Palatino|Cambria|Tahoma|Inter|Merriweather|Roboto|Calibri)\b/i;
  // NB: preskači SVG glyph-fontove (linija sadrži `fill:` → tekst u SVG-u, npr. dijagrami
  // abecede .ci-glyph/.la-glyph/.gl-glyph) — ondje su Times/Georgia namjerni i legitimni.
  const strayFonts = txt.split('\n').filter(line => {
    const m = line.match(/font-family:\s*([^;}\n)]+)/);
    if (!m) return false;
    const v = m[1].trim();
    if (!v || v.startsWith('var(') || !NAMED.test(v)) return false;
    if (/\bfill:/.test(line)) return false;            // SVG glyph text — namjerno
    return true;
  }).length;

  // ── odstupanja ──
  const dev = [];
  if (bttGlyph !== '↑') dev.push(`btt glyph "${bttGlyph}" (≠ ↑)`);
  // NB: id="tabN" se NE koristi nigdje u JS-u (0 referenci) — mrtav markup; ne flagiramo izostanak.
  // tab-done bi trebao biti na svim ne-lock tabovima
  const missingDone = tabs.filter(t => !t.lock && !t.hasDone).map(t => t.idx);
  if (tabs.length && missingDone.length) dev.push('bez tab-done: ' + missingDone.join(','));
  for (const t of tabs) {
    if (t.label.includes(PENCIL) && !t.label.includes(PENCIL + FE0F)) dev.push(`tab${t.idx} ✍ bez VS16`);
    if (/checkpoint/i.test(t.label) && !t.label.includes(CHECK)) dev.push(`tab${t.idx} Checkpoint bez ✅`);
    if (t.label.includes(MASK)) dev.push(`tab${t.idx} koristi 🎭`);
  }
  // mount obrazac se NE flagira (sva četiri su valjana); ostaje informativno u tablici.
  if (imp.size > 1) dev.push('miješane konvencije imena importa: ' + [...imp].join('+'));
  if (strayFonts > 0) dev.push(`tvrdi font-family ×${strayFonts}`);
  if (cssSource === 'inline-literal' || cssSource === 'other') dev.push(`STYLES_CSS ne koristi shared (${cssSource})`);
  if (sharedImportDead) dev.push('mrtav import SHARED_*_CSS');
  if (cssDeltaImbalance !== 0) dev.push(`CSS delta nebalans: ${cssDeltaImbalance > 0 ? '+' + cssDeltaImbalance : cssDeltaImbalance} } fali`);

  return { hNN, file, bttGlyph, tabCount: tabs.length, lockSet, era, imports: [...imp], css, strayFonts,
           cssSource, usesSharedCss, sharedImportDead, cssDeltaImbalance, functions, globals, features,
           tabs: tabs.map(t => ({ i: t.idx, label: t.label, id: t.hasId, done: t.hasDone, badge: t.badge, lock: t.lock })),
           deviations: dev };
}

// ── shared token parnost ──
function tokenLine(txt, name) {
  const m = txt.match(new RegExp('--' + name + ':([^;]+);'));
  return m ? m[1].trim() : null;
}
function auditShared() {
  // Tokeni od Faze C žive u jednom izvoru istine: shared-base-styles.js.
  // Provjeri (a) da lit/lang više NEMAJU vlastiti :root (anti-drift) i
  // (b) da baza definira sve kanonske tokene.
  const lit = read('shared-lit-styles.js'), lang = read('shared-lang-styles.js'), base = read('shared-base-styles.js');
  const keys = ['font', 'serif', 'display', 'mono', 'bg', 'bronze', 'gold', 't1', 't2', 't3'];
  const diffs = [];
  if (/:root\{/.test(lit)) diffs.push('shared-lit ima vlastiti :root (treba uvoziti bazu)');
  if (/:root\{/.test(lang)) diffs.push('shared-lang ima vlastiti :root (treba uvoziti bazu)');
  for (const k of keys) {
    if (tokenLine(base, k) == null) diffs.push(`baza ne definira --${k}`);
  }
  return diffs;
}

function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const rows = [];
  for (let n = 1; n <= 28; n++) { const r = auditChapter(n); if (r) rows.push(r); }
  const sharedDiffs = auditShared();

  console.log('\n=== HRV SKRIPTE — AUDIT CHROME-a ===\n');
  console.log('ch   btt  tabs lock          era     css   importi              fonts  ODSTUPANJA');
  console.log('─'.repeat(110));
  for (const r of rows) {
    console.log(
      r.hNN.padEnd(5),
      (r.bttGlyph === '↑' ? '↑' : r.bttGlyph).padEnd(4),
      String(r.tabCount).padEnd(4),
      ('[' + r.lockSet.join(',') + ']').padEnd(14),
      r.era.padEnd(7),
      r.css.padEnd(5),
      (r.imports.join('+') || '-').padEnd(20),
      String(r.strayFonts).padEnd(6),
      r.deviations.length ? r.deviations.join(' · ') : '✓ ok'
    );
  }
  console.log('─'.repeat(110));
  console.log('\nShared token parnost (lit vs lang):', sharedDiffs.length ? '\n  ' + sharedDiffs.join('\n  ') : '✓ identično');

  // sažetak PRO-lock politika (koji setovi tabova su zaključani)
  const lockGroups = {};
  for (const r of rows) { const key = '[' + r.lockSet.join(',') + ']'; (lockGroups[key] ||= []).push(r.hNN); }
  console.log('\nPRO-lock politika (set zaključanih tabova → poglavlja):');
  for (const k of Object.keys(lockGroups)) console.log('  ' + k.padEnd(14) + ' ' + lockGroups[k].join(', '));

  // ── izvor CSS-a po poglavlju ──
  console.log('\nIzvor STYLES_CSS-a:');
  const cssGroups = {};
  for (const r of rows) (cssGroups[r.cssSource] ||= []).push(r.hNN);
  for (const k of Object.keys(cssGroups)) console.log('  ' + k.padEnd(20) + cssGroups[k].join(', '));

  // ── podsustavi (parnost) — koja poglavlja NEMAJU podsustav koji većina ima ──
  console.log('\nPodsustavi (× = nedostaje; prikazano samo gdje postoji nesklad):');
  const featKeys = Object.keys(rows[0].features);
  for (const fk of featKeys) {
    const have = rows.filter(r => r.features[fk]).map(r => r.hNN);
    const miss = rows.filter(r => !r.features[fk]).map(r => r.hNN);
    if (have.length && miss.length) console.log(`  ${fk.padEnd(12)} ima ${have.length}/28 · NEMA: ${miss.join(', ')}`);
  }

  // ── funkcijski inventar: union + rolling/odstupanje od "kanonske jezgre" ──
  // kanonska jezgra = funkcije prisutne u ≥80% poglavlja iste obitelji
  console.log('\nFunkcijski drift (kanonska jezgra = u ≥80% poglavlja obitelji; × = poglavlje ju nema):');
  for (const fam of [['lit', rows.filter(r => r.css === 'lit')], ['lang', rows.filter(r => r.css === 'lang')]]) {
    const [name, frows] = fam;
    const counts = {};
    for (const r of frows) for (const fn of r.functions) counts[fn] = (counts[fn] || 0) + 1;
    const core = Object.entries(counts).filter(([, c]) => c >= Math.ceil(frows.length * 0.8)).map(([fn]) => fn);
    console.log(`  [${name}] ${frows.length} poglavlja · jezgra ${core.length} fn`);
    for (const r of frows) {
      const missing = core.filter(fn => !r.functions.includes(fn));
      const extra = r.functions.filter(fn => (counts[fn] || 0) <= Math.ceil(frows.length * 0.2));
      const parts = [];
      if (missing.length) parts.push('NEMA jezgru: ' + missing.join(','));
      if (extra.length) parts.push('unikat: ' + extra.join(','));
      if (parts.length) console.log(`    ${r.hNN}: ${parts.join(' · ')}`);
    }
  }

  // ── globalna izloženost: parnost window.* funkcija ──
  console.log('\nGlobalne window.* funkcije (parnost po obitelji):');
  for (const fam of [['lit', rows.filter(r => r.css === 'lit')], ['lang', rows.filter(r => r.css === 'lang')]]) {
    const [name, frows] = fam;
    const counts = {};
    for (const r of frows) for (const g of r.globals) counts[g] = (counts[g] || 0) + 1;
    const core = Object.entries(counts).filter(([, c]) => c >= Math.ceil(frows.length * 0.8)).map(([g]) => g);
    for (const r of frows) {
      const missing = core.filter(g => !r.globals.includes(g));
      if (missing.length) console.log(`    [${name}] ${r.hNN}: NEMA global: ${missing.join(',')}`);
    }
  }

  const totalDev = rows.reduce((s, r) => s + r.deviations.length, 0);
  console.log(`\nUkupno poglavlja: ${rows.length} | s odstupanjima: ${rows.filter(r => r.deviations.length).length} | ukupno odstupanja: ${totalDev}`);

  writeFileSync(resolve(OUT_DIR, 'audit.json'), JSON.stringify({ rows, sharedDiffs }, null, 2), 'utf8');
  console.log('Detalji: scripts/.skripte/audit.json');
}

main();
