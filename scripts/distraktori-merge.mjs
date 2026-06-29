/**
 * distraktori-merge.mjs — spaja ručno/subagentski autorizirane distraktore u
 * app/discere/hrvatski/simulator/data/distraktoriData.js (bez AI/API poziva).
 *
 * Ulaz: scripts/.distraktori/done/<examKey>.json
 *   Svaka datoteka je mapa punih ključeva → mapa pogrešnih slova:
 *   { "2024_ljeto__1": { "A":"…","C":"…","D":"…" }, "2024_ljeto__2": {…}, … }
 *   (Točan odgovor se NE uključuje.)
 *
 * Postupak:
 *   1. učita POSTOJEĆI EXP_DISTRAKTORI (čuva sve što već imamo),
 *   2. doda/zamijeni ključeve iz done datoteka,
 *   3. (opcionalno) validira protiv ispita: izbaci točan odgovor, upozori na višak slova,
 *   4. ponovno ispiše distraktoriData.js — grupirano po ispitu, sortirano po id-u.
 *
 * Pokretanje:
 *   node scripts/distraktori-merge.mjs           # spoji sve iz done/
 *   node scripts/distraktori-merge.mjs --check    # samo provjeri, ne piši
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const EXAMS_INDEX = resolve(ROOT, 'app/discere/hrvatski/simulator/data/exams/index.js');
const DATA_FILE   = resolve(ROOT, 'app/discere/hrvatski/simulator/data/distraktoriData.js');
const DONE_DIR    = resolve(__dirname, '.distraktori/done');
const CHECK_ONLY  = process.argv.includes('--check');

function examKeyOf(fullKey) { const i = fullKey.lastIndexOf('__'); return fullKey.slice(0, i); }
function idOf(fullKey) { const i = fullKey.lastIndexOf('__'); return fullKey.slice(i + 2); }

async function main() {
  // 1) postojeći podaci
  let store = {};
  if (existsSync(DATA_FILE)) {
    try { store = { ...(await import(pathToFileURL(DATA_FILE).href)).EXP_DISTRAKTORI }; } catch {}
  }
  const before = Object.keys(store).length;

  // za validaciju: točni odgovori po ključu
  const correctBy = {};
  try {
    const EXAMS = (await import(pathToFileURL(EXAMS_INDEX).href)).EXAMS || {};
    for (const ek of Object.keys(EXAMS)) for (const q of (EXAMS[ek].qs || []))
      if (q?.type === 'mc' && q.sol?.cl) correctBy[ek + '__' + q.id] = q.sol.cl;
  } catch (e) { console.warn('⚠ ne mogu učitati ispite za validaciju:', e.message); }

  // 2) učitaj done datoteke
  if (!existsSync(DONE_DIR)) { console.error('✗ Nema mape', DONE_DIR); process.exit(1); }
  const files = readdirSync(DONE_DIR).filter(f => f.endsWith('.json'));
  let added = 0, warned = 0;
  for (const f of files) {
    let obj;
    try { obj = JSON.parse(readFileSync(resolve(DONE_DIR, f), 'utf8')); }
    catch (e) { console.warn('⚠ neispravan JSON:', f, e.message); warned++; continue; }
    // dopusti i format { entries:{…} }
    const entries = obj.entries && typeof obj.entries === 'object' ? obj.entries : obj;
    for (const key of Object.keys(entries)) {
      const val = entries[key];
      if (!val || typeof val !== 'object') { console.warn('⚠ preskačem', key, '(nije objekt)'); warned++; continue; }
      const correct = correctBy[key];
      const clean = {};
      for (const L of Object.keys(val)) {
        if (correct && L === correct) { console.warn('⚠', key, '— uklanjam točno slovo', L); warned++; continue; }
        if (typeof val[L] === 'string' && val[L].trim()) clean[L] = val[L].trim();
      }
      if (Object.keys(clean).length) { store[key] = clean; added++; }
    }
  }

  const after = Object.keys(store).length;
  console.log(`Done datoteka: ${files.length} | ključeva obrađeno: ${added} | upozorenja: ${warned}`);
  console.log(`Ukupno distraktora: ${before} → ${after}`);

  if (CHECK_ONLY) { console.log('(--check: ništa nije zapisano)'); return; }

  // 3) ispiši grupirano po ispitu, sortirano po brojčanom id-u
  const byExam = {};
  for (const key of Object.keys(store)) (byExam[examKeyOf(key)] ||= []).push(key);
  const examKeys = Object.keys(byExam).sort();
  let body = '';
  for (const ek of examKeys) {
    const keys = byExam[ek].sort((a, b) => (parseInt(idOf(a), 10) - parseInt(idOf(b), 10)) || idOf(a).localeCompare(idOf(b)));
    body += `\n  // ${ek}\n`;
    for (const k of keys) body += `  ${JSON.stringify(k)}: ${JSON.stringify(store[k])},\n`;
  }

  const header =
`// Statički generirana obrazloženja distraktora — "zašto je svaki pogrešan odgovor kriv".
// Popunjava se ručno / subagentski (bez API troška) i SPAJA skriptom
// scripts/distraktori-merge.mjs — ne uređivati ručno između spajanja.
// Runtime trošak = 0 (bez API poziva po pregledu). Lazy-load u AnswerHelperu.
//
// Ključ:    "<examKey>__<qid>"   (npr. "2025_ljeto__12")
// Vrijednost: { "<slovo pogrešne opcije>": "kratko obrazloženje zašto je krivo", ... }
//             (točan odgovor se NE uključuje — njega objašnjava postojeći q.exp)
export const EXP_DISTRAKTORI = {${body}};

// Vrati mapu distraktora za pitanje, ili null.
export function getDistraktori(examKey, qid){
  if(examKey == null || qid == null) return null;
  return EXP_DISTRAKTORI[examKey + "__" + qid] || null;
}
`;
  writeFileSync(DATA_FILE, header, 'utf8');
  console.log('✓ Zapisano u', DATA_FILE);
}

main().catch(e => { console.error('✗', e); process.exit(1); });
