/**
 * distraktori-extract.mjs — izvlači MC pitanja koja JOŠ NEMAJU statički distraktor
 * i sprema po jedan "radni spec" po ispitu (bez ikakvog AI/API poziva).
 *
 * Izlaz: scripts/.distraktori/work/<examKey>.json
 *   { examKey, label, total, questions:[ {id, q, opts, correct, exp, ctx} ] }
 *
 * Pokretanje (PowerShell):
 *   node scripts/distraktori-extract.mjs            # svi ispiti
 *   node scripts/distraktori-extract.mjs 2024_ljeto 2023_jesen   # samo navedeni
 *
 * Spec se onda dade autoru (čovjeku ili subagentu) koji popunjava
 * scripts/.distraktori/done/<examKey>.json, a distraktori-merge.mjs ih spaja.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const EXAMS_INDEX = resolve(ROOT, 'app/discere/hrvatski/simulator/data/exams/index.js');
const DATA_FILE   = resolve(ROOT, 'app/discere/hrvatski/simulator/data/distraktoriData.js');
const WORK_DIR    = resolve(__dirname, '.distraktori/work');

const onlyKeys = process.argv.slice(2);   // ako prazno → svi ispiti

function trunc(s, n) { if (!s) return undefined; s = String(s); return s.length > n ? s.slice(0, n) + '…' : s; }

async function main() {
  mkdirSync(WORK_DIR, { recursive: true });

  const mod = await import(pathToFileURL(EXAMS_INDEX).href);
  const EXAMS = mod.EXAMS || {};

  // Postojeći distraktori (da ih preskočimo)
  let existing = {};
  if (existsSync(DATA_FILE)) {
    try { existing = (await import(pathToFileURL(DATA_FILE).href)).EXP_DISTRAKTORI || {}; } catch {}
  }

  const keys = onlyKeys.length ? onlyKeys : Object.keys(EXAMS);
  const summary = [];
  let grand = 0;

  for (const examKey of keys) {
    const ex = EXAMS[examKey];
    if (!ex) { console.warn('⚠ nepoznat ispit:', examKey); continue; }
    const qs = ex.qs || [];
    const questions = [];
    for (const q of qs) {
      if (q?.type !== 'mc' || !Array.isArray(q.opts) || !q.sol?.cl) continue;
      const key = examKey + '__' + q.id;
      if (existing[key]) continue;                  // već imamo
      questions.push({
        id: q.id,
        q: q.q,
        opts: q.opts,
        correct: q.sol.cl,
        exp: q.exp || '',
        ctx: trunc(q.ctx, 700),
      });
    }
    grand += questions.length;
    summary.push({ examKey, label: ex.label, todo: questions.length });
    if (questions.length) {
      const out = { examKey, label: ex.label, total: questions.length, questions };
      writeFileSync(resolve(WORK_DIR, examKey + '.json'), JSON.stringify(out, null, 2), 'utf8');
    }
  }

  summary.sort((a, b) => b.todo - a.todo);
  console.log('Ispit'.padEnd(20), 'Preostalo MC bez distraktora');
  console.log('─'.repeat(50));
  for (const s of summary) if (s.todo) console.log(s.examKey.padEnd(20), s.todo);
  console.log('─'.repeat(50));
  console.log('Ukupno MC bez distraktora:', grand, '| ispita za obradu:', summary.filter(s => s.todo).length);
  console.log('Spec datoteke u:', WORK_DIR);
}

main().catch(e => { console.error('✗', e); process.exit(1); });
