const fs = require('fs');
const path = require('path');

function getFiles(d) {
  let r = [];
  fs.readdirSync(d, { withFileTypes: true }).forEach(entry => {
    const p = path.join(d, entry.name);
    if (entry.isDirectory()) r.push(...getFiles(p));
    else if (entry.name.endsWith('.jsx') && entry.name !== 'page.jsx') r.push(p);
  });
  return r;
}

getFiles('.').forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const hasReact = c.includes("from 'react'");
  const hasE = c.includes("from '../utils/helpers'") || c.includes("from '../../utils/helpers'") || c.includes("from './utils/helpers'");
  const importsE = /import\s*\{[^}]*\be\b[^}]*\}/.test(c);
  console.log(path.basename(f), '| React:', hasReact, '| helpers:', hasE, '| imports-e:', importsE);
});
