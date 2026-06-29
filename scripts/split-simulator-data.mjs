/**
 * split-simulator-data.mjs
 * Splits the monolithic hrvatskiSimulatorData.js (16k+ lines) into per-year files.
 * Run from project root: node scripts/split-simulator-data.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = resolve(__dir, '..');
const SRC   = resolve(ROOT, 'app/discere/hrvatski/simulator/hrvatskiSimulatorData.js');
const OUTDIR = resolve(ROOT, 'app/discere/hrvatski/simulator/data/exams');

const src = readFileSync(SRC, 'utf8');

// ── State-machine parser ─────────────────────────────────────────────────────
// Finds all top-level "const NAME = VALUE;" declarations (must start at col 0).
function parseDeclarations(text) {
  const decls = [];
  const n = text.length;
  let pos = 0;

  // Find each '\nconst ' (or start-of-file 'const ')
  while (pos < n) {
    let lineStart;
    if (pos === 0 && text.startsWith('const ')) {
      lineStart = 0;
    } else {
      const idx = text.indexOf('\nconst ', pos);
      if (idx === -1) break;
      lineStart = idx + 1;
    }

    // Extract variable name
    const nameMatch = text.slice(lineStart).match(/^const ([A-Za-z_][A-Za-z0-9_]*)\s*=/);
    if (!nameMatch) { pos = lineStart + 1; continue; }

    const name = nameMatch[1];
    const afterEq = lineStart + nameMatch[0].length;

    // Skip whitespace after '='
    let vi = afterEq;
    while (vi < n && (text[vi] === ' ' || text[vi] === '\t')) vi++;

    const firstChar = text[vi];

    let end;
    if (firstChar === '`') {
      end = parseTemplateLiteral(text, vi);
      // Skip optional ';'
      if (text[end] === ';') end++;
    } else if (firstChar === '[' || firstChar === '{') {
      end = parseBrackets(text, vi);
      // Skip optional ';'
      if (text[end] === ';') end++;
    } else {
      // Simple value — scan to next ';' or '\n'
      end = vi;
      while (end < n && text[end] !== ';' && text[end] !== '\n') end++;
      if (text[end] === ';') end++;
    }

    const value = text.slice(vi, end).replace(/;$/, '').trim();
    decls.push({ name, value, raw: text.slice(lineStart, end) });
    pos = end;
  }
  return decls;
}

// Parse template literal starting at pos (pos points to opening backtick)
function parseTemplateLiteral(text, pos) {
  const n = text.length;
  pos++; // skip opening backtick
  let depth = 0; // ${} nesting depth
  while (pos < n) {
    const c = text[pos];
    if (c === '\\') { pos += 2; continue; }
    if (depth === 0 && c === '`') { return pos + 1; } // end of template
    if (c === '$' && text[pos + 1] === '{') { depth++; pos += 2; continue; }
    if (depth > 0) {
      if (c === '{') { depth++; }
      else if (c === '}') { depth--; }
    }
    pos++;
  }
  return pos;
}

// Parse balanced brackets/braces starting at pos, handling strings
function parseBrackets(text, pos) {
  const n = text.length;
  const open = text[pos];
  const close = open === '[' ? ']' : '}';
  let depth = 1;
  pos++; // skip opening bracket
  while (pos < n && depth > 0) {
    const c = text[pos];
    if (c === '\\') { pos += 2; continue; }
    if (c === '"' || c === "'") {
      const q = c; pos++;
      while (pos < n) {
        if (text[pos] === '\\') { pos += 2; continue; }
        if (text[pos] === q) { pos++; break; }
        pos++;
      }
      continue;
    }
    if (c === '`') {
      pos = parseTemplateLiteral(text, pos);
      continue;
    }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) { return pos + 1; } }
    pos++;
  }
  return pos;
}

// ── Extract everything ───────────────────────────────────────────────────────
console.log('Parsing declarations...');
const allDecls = parseDeclarations(src);
console.log(`Found ${allDecls.length} declarations`);

// Separate by category
const headerDecls = [];  // LL, TLBL, TBDG, XP_LEVELS, etc.
const yearDecls   = {};  // year -> [decls]
const tailDecls   = [];  // EXAMS, ESEJI, SAZECI, functions

// Classify
for (const d of allDecls) {
  const yearMatch = d.name.match(/_(\d{4})_/);
  if (yearMatch) {
    const year = yearMatch[1];
    (yearDecls[year] = yearDecls[year] || []).push(d);
  } else if (['EXAMS','ESEJI','SAZECI'].includes(d.name)) {
    tailDecls.push(d);
  } else {
    headerDecls.push(d);
  }
}

// Also grab functions (getLevel, xpProgress, etc.) from the src that aren't const
const functionBlocks = src.match(/^function \w[^]*?^}/mg) || [];

// ── Write per-year files ─────────────────────────────────────────────────────
if (!existsSync(OUTDIR)) mkdirSync(OUTDIR, { recursive: true });

const yearList = Object.keys(yearDecls).sort();
console.log('Years:', yearList.join(', '));

for (const year of yearList) {
  const decls = yearDecls[year];
  const lines = [
    `/* Auto-split from hrvatskiSimulatorData.js — year ${year} */`,
    `/* DO NOT EDIT — regenerate with: node scripts/split-simulator-data.mjs */`,
    '',
    ...decls.map(d => `const ${d.name}=${d.value};`),
    '',
    `export { ${decls.map(d => d.name).join(', ')} };`,
  ];
  const outPath = resolve(OUTDIR, `exam${year}.js`);
  writeFileSync(outPath, lines.join('\n'), 'utf8');
  console.log(`  Wrote ${outPath.replace(ROOT + '\\', '')} (${decls.length} declarations)`);
}

// ── Write per-year index ─────────────────────────────────────────────────────
// Build the EXAMS, ESEJI, SAZECI section from the original tail
// We need to reconstruct the file:
// - Import all QS_ variables from per-year files
// - Include the header constants (LL, TLBL, etc.) + functions
// - Include EXAMS/ESEJI/SAZECI

// Find what QS_ variables are referenced in EXAMS
const examDecl = tailDecls.find(d => d.name === 'EXAMS');
const sazeciDecl = tailDecls.find(d => d.name === 'SAZECI');
const esejiDecl = tailDecls.find(d => d.name === 'ESEJI');

// Build the new index file
const importLines = yearList.map(year => {
  const qsVars = yearDecls[year].filter(d => d.name.startsWith('QS_')).map(d => d.name);
  if (qsVars.length === 0) return null;
  return `import { ${qsVars.join(', ')} } from './exam${year}.js';`;
}).filter(Boolean);

// Get the original header section (before first T_ or QS_)
const firstDataDecl = allDecls.find(d => d.name.match(/_\d{4}_/) || ['EXAMS','ESEJI','SAZECI'].includes(d.name));
const headerEnd = firstDataDecl ? src.indexOf(`const ${firstDataDecl.name}`) : src.length;
const originalHeader = src.slice(0, headerEnd).trim();

const indexLines = [
  `/* Auto-generated index for hrvatskiSimulatorData — DO NOT EDIT */`,
  `/* Regenerate with: node scripts/split-simulator-data.mjs */`,
  '',
  ...importLines,
  '',
  '// ── Constants & helpers ──',
  ...headerDecls.map(d => `const ${d.name}=${d.value};`),
  ...functionBlocks,
  '',
  '// ── EXAMS ──',
  examDecl ? `const EXAMS=${examDecl.value};` : '',
  '',
  sazeciDecl ? `const SAZECI=${sazeciDecl.value};` : '',
  '',
  esejiDecl ? `const ESEJI=${esejiDecl.value};` : '',
  '',
  `export { TLBL, XP_LEVELS, LEVEL_NAMES, TOPIC_LABELS, EXAMS, SAZECI, ESEJI };`,
];

const indexPath = resolve(OUTDIR, 'index.js');
writeFileSync(indexPath, indexLines.join('\n'), 'utf8');
console.log(`  Wrote ${indexPath.replace(ROOT + '\\', '')}`);

// ── Summary ──────────────────────────────────────────────────────────────────
const totalFiles = yearList.length + 1; // years + index
console.log(`\n✓ Split into ${totalFiles} files`);
console.log(`\nNext step: Update imports in HrvatskiSimulator.jsx and others:`);
console.log(`  import { EXAMS, ESEJI, SAZECI } from './data/exams/index.js';`);
