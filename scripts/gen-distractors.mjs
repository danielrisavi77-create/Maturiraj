/**
 * gen-distractors.mjs — JEDNOKRATNO generiranje statičkih obrazloženja distraktora
 * za hrvatski simulator ("zašto je svaki pogrešan odgovor kriv").
 *
 * Zašto: u runtimeu se onda ne plaća AI po pregledu — sve je statički u
 *   app/discere/hrvatski/simulator/data/distraktoriData.js  (0 API troška).
 *
 * Pokretanje (PowerShell):
 *   $env:ANTHROPIC_API_KEY="sk-ant-..."; node scripts/gen-distractors.mjs
 *   # test na malo pitanja:        node scripts/gen-distractors.mjs --limit 20
 *   # promijeni model/konkurentnost: --model claude-haiku-4-5-20251001 --concurrency 5
 *
 * Idempotentno/nastavljivo: rezultati se spremaju u checkpoint
 *   (scripts/.distraktori-checkpoint.json) pa ponovno pokretanje preskače gotova
 *   pitanja. Na kraju (i periodički) prepisuje distraktoriData.js.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const EXAMS_INDEX = resolve(ROOT, 'app/discere/hrvatski/simulator/data/exams/index.js');
const OUT_FILE   = resolve(ROOT, 'app/discere/hrvatski/simulator/data/distraktoriData.js');
const CHECKPOINT = resolve(__dirname, '.distraktori-checkpoint.json');

// ── CLI args ──────────────────────────────────────────────────────────────────
function arg(name, def) {
  const i = process.argv.indexOf('--' + name);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
const LIMIT       = parseInt(arg('limit', '0'), 10) || 0;          // 0 = sve
const MODEL       = arg('model', 'claude-haiku-4-5-20251001');     // jeftini model
const CONCURRENCY = parseInt(arg('concurrency', '5'), 10);
const API_KEY     = process.env.ANTHROPIC_API_KEY;
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

if (!API_KEY) { console.error('✗ Nedostaje ANTHROPIC_API_KEY u okruženju.'); process.exit(1); }

// ── Checkpoint ──────────────────────────────────────────────────────────────────
let store = {};
if (existsSync(CHECKPOINT)) {
  try { store = JSON.parse(readFileSync(CHECKPOINT, 'utf8')) || {}; } catch { store = {}; }
}
function saveCheckpoint() { writeFileSync(CHECKPOINT, JSON.stringify(store), 'utf8'); }

function emitDataFile() {
  const header =
`// Statički generirana obrazloženja distraktora — "zašto je svaki pogrešan odgovor kriv".
// GENERIRANO skriptom scripts/gen-distractors.mjs — ne uređivati ručno (osim ispravaka).
// Ključ: "<examKey>__<qid>"  →  { "<slovo pogrešne opcije>": "razlog", ... }
export const EXP_DISTRAKTORI = ${JSON.stringify(store, null, 0)};

export function getDistraktori(examKey, qid){
  if(examKey == null || qid == null) return null;
  return EXP_DISTRAKTORI[examKey + "__" + qid] || null;
}
`;
  writeFileSync(OUT_FILE, header, 'utf8');
}

// ── Anthropic poziv ─────────────────────────────────────────────────────────────
async function callAnthropic(prompt, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify({ model: MODEL, max_tokens: 400, messages: [{ role: 'user', content: prompt }] }),
      });
      if (res.status === 429 || res.status >= 500) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const text = data?.content?.[0]?.text || '';
      return text;
    } catch (e) {
      if (attempt === retries) throw e;
      await new Promise(r => setTimeout(r, 1500 * (attempt + 1))); // backoff
    }
  }
}

function buildPrompt(q) {
  const opts = (q.opts || []).map((o, i) => LETTERS[i] + ') ' + o).join('\n');
  return `Ti si profesor hrvatskog jezika i književnosti. Učenik uči za državnu maturu.

Pitanje: "${q.q}"
Ponuđeni odgovori:
${opts}
Točan odgovor je ${q.sol.cl}.

Za SVAKU NETOČNU opciju napiši jednu kratku rečenicu (hrvatski) zašto je pogrešna — konkretno, bez ponavljanja teksta pitanja. Vrati ISKLJUČIVO važeći JSON objekt: ključ je slovo netočne opcije, vrijednost je obrazloženje. Bez markdowna, bez teksta izvan JSON-a. Primjer: {"A":"…","C":"…","D":"…"}`;
}

function parseJson(text) {
  if (!text) return null;
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s === -1 || e === -1) return null;
  try { return JSON.parse(t.slice(s, e + 1)); } catch { return null; }
}

// ── Glavni tok ──────────────────────────────────────────────────────────────────
async function main() {
  const mod = await import(pathToFileURL(EXAMS_INDEX).href);
  const EXAMS = mod.EXAMS || {};

  // Sastavi posao: sva MC pitanja koja još nisu u storeu
  const jobs = [];
  for (const examKey of Object.keys(EXAMS)) {
    const qs = EXAMS[examKey]?.qs || [];
    for (const q of qs) {
      if (q?.type !== 'mc' || !Array.isArray(q.opts) || !q.sol?.cl) continue;
      const key = examKey + '__' + q.id;
      if (store[key]) continue;            // već generirano
      jobs.push({ key, q });
    }
  }
  const todo = LIMIT > 0 ? jobs.slice(0, LIMIT) : jobs;
  console.log(`Ukupno MC bez distraktora: ${jobs.length}; obrađujem: ${todo.length} (model=${MODEL}, concurrency=${CONCURRENCY})`);

  let done = 0, ok = 0, fail = 0;
  let cursor = 0;
  async function worker() {
    while (cursor < todo.length) {
      const job = todo[cursor++];
      try {
        const text = await callAnthropic(buildPrompt(job.q));
        const obj = parseJson(text);
        if (obj && typeof obj === 'object') {
          // Zadrži samo slova različita od točnog
          const clean = {};
          for (const L of Object.keys(obj)) {
            if (L !== job.q.sol.cl && typeof obj[L] === 'string') clean[L] = obj[L].trim();
          }
          if (Object.keys(clean).length) { store[job.key] = clean; ok++; }
          else fail++;
        } else fail++;
      } catch { fail++; }
      done++;
      if (done % 25 === 0) { saveCheckpoint(); emitDataFile(); console.log(`… ${done}/${todo.length} (ok=${ok}, fail=${fail})`); }
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, CONCURRENCY) }, worker));

  saveCheckpoint();
  emitDataFile();
  console.log(`✓ Gotovo. Generirano ukupno: ${Object.keys(store).length} pitanja (ovaj run: ok=${ok}, fail=${fail}).`);
  console.log(`  Zapisano u: ${OUT_FILE}`);
}

main().catch(e => { console.error('✗ Greška:', e); saveCheckpoint(); emitDataFile(); process.exit(1); });
