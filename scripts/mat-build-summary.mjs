// scripts/mat-build-summary.mjs
// Gradi content/simulator/mat/summary.json — meta-sazetak svih ispita: po ispitu popis
// pitanja s {id, topic, type, points, img}. BEZ teksta pitanja, opcija, rjesenja, koraka
// i objasnjenja.
//
// Zasto: Home (Trening dana, spremnost, pokrivenost tema) treba samo bazen pitanja, a ne
// njihov sadrzaj. Dok je racunao iz EXAMS, App je u pozadini dovlacio svih 70 chunkova
// (~7 MB) samo da bi Home imao statistiku. Sa sazetkom Home ne dohvaca nijedan ispit.
//
// Sigurnost: sazetak namjerno nema sadrzaj, pa ga smije dobiti i free korisnik — inace bi
// preko njega procurila banka zadataka zakljucanih ispita.
//
// Pokreni:  node scripts/mat-build-summary.mjs
// Provjera: node scripts/mat-build-summary.mjs --check   (izlaz 1 ako summary.json nije u
//           skladu s exams/*.mjs — isto sto provjerava __tests__/mat-simulator/summary.test.ts)
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const ROOT = resolve('content/simulator/mat');
const INDEX = resolve(ROOT, 'index.json');
const OUT = resolve(ROOT, 'summary.json');

// Jedan redak sazetka. Vrijednost koja u ispitu ne postoji ostaje null (a ne izmisljeni
// default), da se usporedbe u engineu ponasaju isto kao nad pravim pitanjem: undefined i
// null su oboje != "mc" i oboje falsy.
function row(q) {
  return {
    id: q.id,
    topic: q.topic ?? null,
    type: q.type ?? null,
    points: q.points ?? null,
    img: !!q.img,
  };
}

export async function buildSummary() {
  const index = JSON.parse(readFileSync(INDEX, 'utf8'));
  const exams = {};
  for (const meta of index.exams || []) {
    const file = resolve(ROOT, meta.file || `exams/${meta.key}.mjs`);
    const mod = await import(pathToFileURL(file).href);
    // _META redak nije pitanje (nosi zaglavlje ispita) — engine ga filtrira isto ovako.
    exams[meta.key] = (mod.qs || []).filter((q) => q && !q._META).map(row);
  }
  return { subject: index.subject || 'mat', count: Object.keys(exams).length, exams };
}

// Jedan ispit po retku: minificirano je necitljivo u diffu, a potpuni pretty-print bi
// datoteku napuhao ~3x (svaki redak sazetka ima 5 polja).
export function serialize(summary) {
  const keys = Object.keys(summary.exams);
  const body = keys
    .map((k) => `    ${JSON.stringify(k)}: ${JSON.stringify(summary.exams[k])}`)
    .join(',\n');
  return `{\n  "subject": ${JSON.stringify(summary.subject)},\n  "count": ${keys.length},\n  "exams": {\n${body}\n  }\n}\n`;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const check = process.argv.includes('--check');
  const text = serialize(await buildSummary());
  let current = null;
  // Repo je bez .gitattributes uz core.autocrlf=true, pa je radna kopija CRLF, a zapis LF.
  // Usporedba mora biti neovisna o zavrsecima redaka, inace --check pada na svjezem checkoutu.
  try { current = readFileSync(OUT, 'utf8').replace(/\r\n/g, '\n'); } catch { /* jos ne postoji */ }
  if (check) {
    if (current === text) {
      console.log('summary.json je u skladu s exams/*.mjs');
    } else {
      console.error('summary.json NIJE u skladu s exams/*.mjs — pokreni: node scripts/mat-build-summary.mjs');
      process.exit(1);
    }
  } else if (current === text) {
    console.log('summary.json vec je azuran (bez promjene)');
  } else {
    writeFileSync(OUT, text, 'utf8');
    const n = Object.values(JSON.parse(text).exams).reduce((s, a) => s + a.length, 0);
    console.log(`summary.json zapisan: ${JSON.parse(text).count} ispita, ${n} pitanja, ${(Buffer.byteLength(text) / 1024).toFixed(0)} KB`);
  }
}
