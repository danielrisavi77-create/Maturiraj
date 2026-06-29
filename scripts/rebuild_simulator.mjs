/**
 * rebuild_simulator.mjs
 * 
 * Reads the original monolithic HTML simulator file and splits it into:
 *   1. hrvatskiSimulatorData.js  — all data (constants, QS_, T_, ESEJI, SAZECI, EXAMS)
 *   2. HrvatskiSimulator.jsx     — component logic (React components)
 * 
 * Usage: node scripts/rebuild_simulator.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const HTML_PATH = String.raw`c:\Users\Daniel\Dropbox\My PC (DESKTOP-LJMIVR9)\Downloads\hrvatski_simulator (56).html`;
const OUT_DIR = join(__dirname, '..', 'app', 'discere', 'hrvatski', 'simulator');

console.log('Reading HTML file...');
const html = readFileSync(HTML_PATH, 'utf-8');
const lines = html.split('\n');
console.log(`Total lines: ${lines.length}`);

// ── Find the main <script> block (the second one, after style) ──
let scriptStart = -1;
let scriptEnd = -1;
let scriptCount = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].match(/^<script>$/)) {
    scriptCount++;
    if (scriptCount === 2) { // first is the style script, second is main JS
      scriptStart = i + 1; // next line after <script>
    }
  }
  if (scriptStart > 0 && i > scriptStart && lines[i].match(/<\/script>/)) {
    scriptEnd = i; // the line with </script>
    break;
  }
}

// Actually the first <script> at line ~702 is a small dark-mode script.
// The second <script> at line ~718 is the main app.
// Let's be more precise - find line with "const {createElement" 
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const {createElement:e,useState')) {
    scriptStart = i;
    break;
  }
}
// Find the ReactDOM render line
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('ReactDOM.createRoot')) {
    scriptEnd = i + 1; // include this line
    break;
  }
}

console.log(`JS block: lines ${scriptStart + 1} to ${scriptEnd}`);

const jsLines = lines.slice(scriptStart, scriptEnd);
console.log(`Extracted ${jsLines.length} lines of JS`);

// ── Find the boundary between DATA and LOGIC ──
// Data section: everything from start until "function lsSave" or "function useUserData"
// Logic section: from useUserData onwards
let dataEndIdx = -1;
let logicStartIdx = -1;

// Find the lsSave function (utility that precedes components)
for (let i = 0; i < jsLines.length; i++) {
  if (jsLines[i].match(/^function lsSave/)) {
    dataEndIdx = i;
    logicStartIdx = i;
    break;
  }
}

// If no lsSave, find useUserData
if (dataEndIdx === -1) {
  for (let i = 0; i < jsLines.length; i++) {
    if (jsLines[i].match(/function useUserData/)) {
      dataEndIdx = i;
      logicStartIdx = i;
      break;
    }
  }
}

console.log(`Data section: lines 0-${dataEndIdx - 1} (${dataEndIdx} lines)`);
console.log(`Logic section: lines ${logicStartIdx}-${jsLines.length - 1} (${jsLines.length - logicStartIdx} lines)`);

// ── DATA SECTION ──
// The data section contains:
// - Constants (LL, TLBL, XP_LEVELS, etc.) - small, keep as exports
// - QS_ question arrays  
// - T_ text variables
// - ESEJI object
// - And note: SAZECI and EXAMS are INSIDE the logic section!

// We need to also extract SAZECI and EXAMS from the logic section
let sazeciStartIdx = -1;
let sazeciEndIdx = -1;
let examsStartIdx = -1;
let examsEndIdx = -1;

for (let i = logicStartIdx; i < jsLines.length; i++) {
  if (jsLines[i].match(/^const SAZECI=\{/)) {
    sazeciStartIdx = i;
  }
  if (sazeciStartIdx > 0 && sazeciEndIdx === -1 && jsLines[i].match(/^};$/)) {
    sazeciEndIdx = i + 1;
  }
  if (jsLines[i].match(/^const EXAMS=\{/)) {
    examsStartIdx = i;
  }
  if (examsStartIdx > 0 && examsEndIdx === -1 && jsLines[i].match(/^};$/)) {
    examsEndIdx = i + 1;
  }
}

console.log(`SAZECI: logic lines ${sazeciStartIdx}-${sazeciEndIdx - 1}`);
console.log(`EXAMS: logic lines ${examsStartIdx}-${examsEndIdx - 1}`);

// ── Build DATA FILE ──
// Extract constants that need to be exported
const dataLines = jsLines.slice(0, dataEndIdx);
const sazeciLines = jsLines.slice(sazeciStartIdx, sazeciEndIdx);
const examsLines = jsLines.slice(examsStartIdx, examsEndIdx);

// Remove the initial "const {createElement..." line and React-specific stuff from data
// The first line is: const {createElement:e,useState,...}=React;
// Skip it - it belongs to logic
let dataStart = 0;
if (dataLines[0].includes('createElement')) {
  dataStart = 1;
}

// Also skip utility functions that belong to logic (getLevel, xpProgress, etc.)
// Actually, those are needed by both data and logic. Let's export them from data.

// Build the data file content
let dataContent = '/* Auto-generated from hrvatski_simulator (56).html */\n';
dataContent += '/* DO NOT EDIT — regenerate with: node scripts/rebuild_simulator.mjs */\n\n';

// Process all data lines - we need to make consts exportable
const dataSection = dataLines.slice(dataStart);

// We'll collect all top-level const names to export them
const topLevelNames = [];
const processedDataLines = [];

for (let i = 0; i < dataSection.length; i++) {
  let line = dataSection[i];
  
  // Find top-level const declarations and mark for export
  const constMatch = line.match(/^const\s+([\w_]+)\s*=/);
  if (constMatch) {
    topLevelNames.push(constMatch[1]);
    // Don't add export here yet - we'll do a single export at the end
  }
  
  processedDataLines.push(line);
}

dataContent += processedDataLines.join('\n');
dataContent += '\n\n';

// Add SAZECI (from logic section)
dataContent += sazeciLines.join('\n');
dataContent += '\n\n';

// Add EXAMS (from logic section) 
dataContent += examsLines.join('\n');
dataContent += '\n\n';

// Collect SAZECI and EXAMS names
for (const line of sazeciLines) {
  const m = line.match(/^const\s+([\w_]+)\s*=/);
  if (m) topLevelNames.push(m[1]);
}
for (const line of examsLines) {
  const m = line.match(/^const\s+([\w_]+)\s*=/);
  if (m) topLevelNames.push(m[1]);
}

// Export everything
// The key exports the component needs: TLBL, XP_LEVELS, LEVEL_NAMES, TOPIC_LABELS, EXAMS, SAZECI, ESEJI
// Plus all the QS_ and T_ variables are used internally by EXAMS/ESEJI
// We only need to export the ones the component references directly
const componentNeeds = ['TLBL', 'XP_LEVELS', 'LEVEL_NAMES', 'TOPIC_LABELS', 'EXAMS', 'SAZECI', 'ESEJI'];
const exportsLine = 'export { ' + componentNeeds.join(', ') + ' };\n';
dataContent += exportsLine;

console.log(`\nData file: ${processedDataLines.length + sazeciLines.length + examsLines.length} lines`);
console.log(`Top-level variables: ${topLevelNames.length}`);
console.log(`Exports: ${componentNeeds.join(', ')}`);

// ── Build LOGIC FILE (Component) ──
// Take the logic section, but REMOVE the SAZECI and EXAMS blocks (they're in data now)
let logicLines = [];

// First: React imports and setup
logicLines.push("'use client';");
logicLines.push('');
logicLines.push('import React, { useEffect, useMemo, useRef, useState, Fragment } from "react";');
logicLines.push("import { EXAMS, SAZECI, ESEJI, TLBL, XP_LEVELS, LEVEL_NAMES, TOPIC_LABELS } from './hrvatskiSimulatorData';");
logicLines.push('');
logicLines.push('const e = React.createElement;');
logicLines.push('const LL=["A","B","C","D","E","F"];');
logicLines.push('');

// Helper functions that are in the data section but needed by logic
// getLevel, xpProgress, xpToNext, calcXpGain
logicLines.push('function getLevel(xp){let l=0;XP_LEVELS.forEach((v,i)=>{if(xp>=v)l=i;});return l;}');
logicLines.push('function xpProgress(xp){const l=getLevel(xp);const cur=XP_LEVELS[l],next=XP_LEVELS[l+1]||XP_LEVELS[l]+500;return Math.min(100,Math.round((xp-cur)/(next-cur)*100));}');
logicLines.push('function xpToNext(xp){const l=getLevel(xp);const next=XP_LEVELS[l+1]||XP_LEVELS[l]+500;return Math.max(0,next-xp);}');
logicLines.push('function calcXpGain(pct,total){return Math.round((pct/100)*total*2+(pct>=70?20:0));}');
logicLines.push('');

// Now add all logic lines, skipping SAZECI and EXAMS blocks, and skipping ReactDOM render
for (let i = logicStartIdx; i < jsLines.length; i++) {
  // Skip SAZECI block
  if (i >= sazeciStartIdx && i < sazeciEndIdx) continue;
  // Skip EXAMS block
  if (i >= examsStartIdx && i < examsEndIdx) continue;
  // Skip ReactDOM render line
  if (jsLines[i].includes('ReactDOM.createRoot')) continue;
  
  logicLines.push(jsLines[i]);
}

// Replace the App function's end with an export
// Find "function App()" and make it the default export
// Actually, we'll just add an export default wrapper at the end
logicLines.push('');
logicLines.push('export default function HrvatskiSimulator() {');
logicLines.push('  return e(App, null);');
logicLines.push('}');

const logicContent = logicLines.join('\n');

console.log(`\nLogic file: ${logicLines.length} lines`);

// ── Write files ──
const dataPath = join(OUT_DIR, 'hrvatskiSimulatorData.js');
const logicPath = join(OUT_DIR, 'HrvatskiSimulator.jsx');

// Backup existing files
const backupSuffix = '.pre-rebuild.' + Date.now();
try {
  const existingData = readFileSync(dataPath, 'utf-8');
  writeFileSync(dataPath + backupSuffix, existingData);
  console.log(`Backed up existing data file`);
} catch (e) {}
try {
  const existingLogic = readFileSync(logicPath, 'utf-8');
  writeFileSync(logicPath + backupSuffix, existingLogic);
  console.log(`Backed up existing logic file`);
} catch (e) {}

writeFileSync(dataPath, dataContent, 'utf-8');
console.log(`\n✅ Written: ${dataPath} (${(dataContent.length / 1024).toFixed(0)} KB)`);

writeFileSync(logicPath, logicContent, 'utf-8');
console.log(`✅ Written: ${logicPath} (${(logicContent.length / 1024).toFixed(0)} KB)`);

console.log('\nDone! Restart dev server to test.');
