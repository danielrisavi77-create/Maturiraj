#!/usr/bin/env node
// Trazi slobodne (nerazrijesene) identifikatore u modulu — hvata simbol koji je
// premjesten u drugi modul, a nije uvezen natrag (bio bi undefined u runtimeu).
import { readFileSync } from 'node:fs';
import { Parser } from 'acorn';
import { analyze } from 'eslint-scope';

const GLOBALS = new Set([
  'window', 'document', 'console', 'localStorage', 'sessionStorage', 'navigator', 'location',
  'Math', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Date', 'RegExp', 'Error',
  'Promise', 'Set', 'Map', 'WeakMap', 'WeakSet', 'Symbol', 'Proxy', 'Reflect', 'BigInt',
  'parseInt', 'parseFloat', 'isNaN', 'isFinite', 'undefined', 'NaN', 'Infinity',
  'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'requestAnimationFrame',
  'cancelAnimationFrame', 'fetch', 'Headers', 'Request', 'Response', 'FormData', 'Blob', 'File',
  'FileReader', 'URL', 'URLSearchParams', 'CustomEvent', 'Event', 'MessageEvent', 'AbortController',
  'IntersectionObserver', 'ResizeObserver', 'MutationObserver', 'Image', 'Audio', 'XMLHttpRequest',
  'globalThis', 'self', 'process', 'structuredClone', 'queueMicrotask', 'atob', 'btoa',
  'TextEncoder', 'TextDecoder', 'Intl', 'performance', 'crypto', 'alert', 'confirm', 'prompt',
  'HTMLElement', 'Node', 'DOMParser', 'SVGElement', 'getComputedStyle', 'matchMedia', 'speechSynthesis',
  'SpeechSynthesisUtterance', 'AudioContext', 'webkitAudioContext', 'nerdamer', 'html2canvas',
  'arguments', 'eval', 'Function', 'XMLSerializer', 'encodeURIComponent', 'decodeURIComponent',
  'innerWidth', 'innerHeight', 'KoordOs',
]);

let bad = 0;
for (const file of process.argv.slice(2)) {
  const src = readFileSync(file, 'utf8');
  const ast = Parser.parse(src, { ecmaVersion: 2022, sourceType: 'module', ranges: true, locations: true });
  const sm = analyze(ast, { ecmaVersion: 2022, sourceType: 'module' });
  const seen = new Map();
  for (const ref of sm.globalScope.through) {
    const n = ref.identifier.name;
    if (GLOBALS.has(n)) continue;
    if (!seen.has(n)) seen.set(n, ref.identifier.loc.start.line);
  }
  if (seen.size) {
    bad += seen.size;
    console.log(file);
    [...seen.entries()].sort().forEach(([n, l]) => console.log(`  ${n}  (redak ${l})`));
  }
}
console.log(bad === 0 ? 'OK: nema slobodnih identifikatora' : `NADENO: ${bad}`);
process.exit(bad === 0 ? 0 : 1);
