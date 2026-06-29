#!/usr/bin/env node
/**
 * Extract CSS from the original HTML simulator and scope it for .hrv-sim wrapper.
 * Reads the <style> block, transforms selectors to be scoped under .hrv-sim.
 */
import { readFileSync, writeFileSync } from 'fs';

const HTML_PATH = String.raw`c:\Users\Daniel\Dropbox\My PC (DESKTOP-LJMIVR9)\Downloads\hrvatski_simulator (56).html`;
const CSS_OUT = String.raw`c:\Users\Daniel\Desktop\maturiraj\app\discere\hrvatski\simulator\hrvatski-simulator-scoped.css`;

const html = readFileSync(HTML_PATH, 'utf-8');

// Extract content between <style> and </style>
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) { console.error('No <style> block found'); process.exit(1); }

let css = styleMatch[1];

// First, let's properly format the CSS a bit for readability
// (The original is somewhat minified but has some line breaks)

// We need to scope every rule under .hrv-sim
// Strategy:
// 1. Parse CSS into individual rules (handling @media, @keyframes blocks)
// 2. Prefix each selector with .hrv-sim

function scopeCSS(raw) {
  const lines = [];
  
  // Add font import
  lines.push("@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');");
  lines.push('/* Auto-extracted from hrvatski_simulator (56).html — DO NOT EDIT MANUALLY */');
  lines.push('');
  
  // We'll process the CSS character by character to handle nesting
  let i = 0;
  const len = raw.length;
  
  // Collect all top-level blocks
  const blocks = [];
  let current = '';
  let depth = 0;
  
  for (i = 0; i < len; i++) {
    const ch = raw[i];
    if (ch === '{') {
      depth++;
      current += ch;
    } else if (ch === '}') {
      depth--;
      current += ch;
      if (depth === 0) {
        blocks.push(current.trim());
        current = '';
      }
    } else {
      current += ch;
    }
  }
  if (current.trim()) blocks.push(current.trim());
  
  for (const block of blocks) {
    // Find the selector part (before first {)
    const braceIdx = block.indexOf('{');
    if (braceIdx === -1) continue;
    
    const selector = block.substring(0, braceIdx).trim();
    const rest = block.substring(braceIdx);
    
    // Handle @keyframes - pass through without scoping
    if (selector.startsWith('@keyframes')) {
      lines.push(block);
      lines.push('');
      continue;
    }
    
    // Handle @media - need to scope the inner rules
    if (selector.startsWith('@media')) {
      // Extract inner content
      const innerStart = block.indexOf('{') + 1;
      const innerEnd = block.lastIndexOf('}');
      const inner = block.substring(innerStart, innerEnd);
      
      // Parse inner rules
      const innerBlocks = [];
      let ic = '';
      let id = 0;
      for (let j = 0; j < inner.length; j++) {
        const ch = inner[j];
        if (ch === '{') { id++; ic += ch; }
        else if (ch === '}') { id--; ic += ch; if (id === 0) { innerBlocks.push(ic.trim()); ic = ''; } }
        else { ic += ch; }
      }
      
      lines.push(selector + '{');
      for (const ib of innerBlocks) {
        const ibrace = ib.indexOf('{');
        if (ibrace === -1) continue;
        const isel = ib.substring(0, ibrace).trim();
        const ibody = ib.substring(ibrace);
        const scoped = scopeSelectors(isel);
        lines.push('  ' + scoped + ibody);
      }
      lines.push('}');
      lines.push('');
      continue;
    }
    
    // Regular rule - scope selectors
    const scoped = scopeSelectors(selector);
    lines.push(scoped + rest);
    lines.push('');
  }
  
  return lines.join('\n');
}

function scopeSelectors(selectorGroup) {
  // Split by comma for grouped selectors
  const selectors = selectorGroup.split(',').map(s => s.trim());
  
  return selectors.map(sel => {
    // Skip empty
    if (!sel) return sel;
    
    // Universal reset: *,*::before,*::after
    if (sel === '*' || sel === '*::before' || sel === '*::after') {
      return '.hrv-sim ' + sel;
    }
    
    // :root -> .hrv-sim  
    if (sel === ':root') {
      return '.hrv-sim';
    }
    
    // html,body -> .hrv-sim
    if (sel === 'html' || sel === 'body') {
      return '.hrv-sim';
    }
    
    // html,body combined
    if (sel === 'html,body' || sel === 'html, body') {
      return '.hrv-sim';
    }
    
    // #root -> .hrv-sim
    if (sel === '#root') {
      return '.hrv-sim';
    }
    
    // .dark-mode -> .hrv-sim.dark-mode
    if (sel === '.dark-mode') {
      return '.hrv-sim.dark-mode';
    }
    
    // .dark-mode .something -> .hrv-sim.dark-mode .something
    if (sel.startsWith('.dark-mode ')) {
      return '.hrv-sim' + sel;
    }
    
    // Pseudo-element on root: ::-webkit-scrollbar etc
    if (sel.startsWith('::-webkit-scrollbar') || sel.startsWith('::')) {
      return '.hrv-sim ' + sel;
    }
    if (sel.startsWith('::-webkit-scrollbar')) {
      return '.hrv-sim ' + sel;
    }
    
    // Scrollbar rules with *
    if (sel === '*') {
      return '.hrv-sim *';
    }
    
    // input:focus etc
    if (sel.startsWith('input') || sel.startsWith('textarea') || sel.startsWith('select')) {
      return '.hrv-sim ' + sel;
    }
    
    // html{scroll-behavior} -> skip or scope
    if (sel === 'html') {
      return '.hrv-sim';
    }
    
    // Regular class selector -> .hrv-sim .selector
    return '.hrv-sim ' + sel;
  }).join(',');
}

const result = scopeCSS(css);
writeFileSync(CSS_OUT, result, 'utf-8');

console.log('CSS extracted and scoped successfully!');
console.log(`Output: ${CSS_OUT}`);
console.log(`Lines: ${result.split('\n').length}`);
