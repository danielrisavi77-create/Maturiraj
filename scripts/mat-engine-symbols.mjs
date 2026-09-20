#!/usr/bin/env node
// Popis top-level deklaracija (funkcije/konstante/klase) i exporta zadanih datoteka.
// Faza 5.3: pokreni prije i poslije premjestanja koda i usporedi — nista ne smije nestati ni biti duplo.
import { readFileSync } from 'node:fs';
import { Parser } from 'acorn';

const files = process.argv.slice(2);
const decls = new Map(); // ime -> [datoteka...]
const exports = new Set();

function addDecl(name, file) {
  if (!decls.has(name)) decls.set(name, []);
  decls.get(name).push(file);
}

function namesFromId(id, out) {
  if (!id) return;
  if (id.type === 'Identifier') out.push(id.name);
  else if (id.type === 'ObjectPattern') id.properties.forEach((p) => namesFromId(p.value || p.argument, out));
  else if (id.type === 'ArrayPattern') id.elements.forEach((el) => namesFromId(el, out));
  else if (id.type === 'AssignmentPattern') namesFromId(id.left, out);
  else if (id.type === 'RestElement') namesFromId(id.argument, out);
}

function collect(node, file) {
  if (node.type === 'FunctionDeclaration' || node.type === 'ClassDeclaration') {
    if (node.id) addDecl(node.id.name, file);
  } else if (node.type === 'VariableDeclaration') {
    node.declarations.forEach((d) => {
      const out = [];
      namesFromId(d.id, out);
      out.forEach((n) => addDecl(n, file));
    });
  }
}

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const ast = Parser.parse(src, { ecmaVersion: 2022, sourceType: 'module', allowHashBang: true });
  for (const node of ast.body) {
    if (node.type === 'ExportNamedDeclaration') {
      if (node.declaration) {
        collect(node.declaration, file);
        if (node.declaration.id) exports.add(node.declaration.id.name);
        else if (node.declaration.declarations) {
          node.declaration.declarations.forEach((d) => {
            const out = [];
            namesFromId(d.id, out);
            out.forEach((n) => exports.add(n));
          });
        }
      }
      node.specifiers.forEach((s) => exports.add(s.exported.name));
    } else if (node.type === 'ImportDeclaration') {
      // uvezeni simboli se broje kao dostupni, ali ne kao deklaracije ovog modula
    } else {
      collect(node, file);
    }
  }
}

const dups = [...decls.entries()].filter(([, fs]) => fs.length > 1);
console.log('DECLS ' + decls.size);
[...decls.keys()].sort().forEach((n) => console.log('D ' + n));
console.log('EXPORTS ' + exports.size);
[...exports].sort().forEach((n) => console.log('E ' + n));
console.log('DUPLICATES ' + dups.length);
dups.forEach(([n, fs]) => console.log('X ' + n + '  ' + fs.join(' , ')));
