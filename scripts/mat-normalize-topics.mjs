// scripts/mat-normalize-topics.mjs
// Normalizira kodove tema (topic:"...") u content/simulator/mat/exams/*.mjs na kanonsku
// tablicu. Idempotentna: drugi prolaz ne mijenja ništa.
// Pokreni: node scripts/mat-normalize-topics.mjs --dry-run   (samo izvještaj)
//          node scripts/mat-normalize-topics.mjs             (piše promjene)
//
// INVARIJANTA (ne kršiti!): živi engine (TOPIC_LABELS u components/simulator/MatEngineCore.tsx)
// prevodi kod -> labelu koju korisnik vidi u rezultatima, topic-tagu, filtru i "slabim
// točkama". Engine je u vlasništvu grupe engine i ova grupa (data) ga NE mijenja, pa
// normalizacija smije spajati samo kodove koje engine već prikazuje pod ISTOM labelom.
// Svako spajanje preko granice labele bi (a) krivo označilo zadatke u UI-u i (b) razdvojilo
// postojeću povijest u localStorage (topic_breakdown se agregira po labeli). Zato je
// ENGINE_LABELS ispod doslovna kopija enginea, a assertCanonMatchesEngine() ruši skriptu
// ako neki alias izlazi iz svoje labele.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dir = resolve('content/simulator/mat/exams');
const dryRun = process.argv.includes('--dry-run');

// Doslovna kopija TOPIC_LABELS iz components/simulator/MatEngineCore.tsx (samo za provjeru;
// engine ostaje izvor istine). Ako engine doda ili promijeni kod, ažuriraj i ovdje.
export const ENGINE_LABELS = {
  br: 'Skupovi i brojevi', skupovi: 'Skupovi i brojevi',
  al: 'Algebarski izrazi', alg: 'Algebarski izrazi',
  lin: 'Linearne funkcije',
  kv: 'Kvadratne funkcije',
  exp: 'Eksponencijalne i log.', ek: 'Eksponencijalne i log.', eks: 'Eksponencijalne i log.', log: 'Eksponencijalne i log.',
  trig: 'Trigonometrija', trg: 'Trigonometrija',
  geom: 'Geometrija', geo: 'Geometrija', ge: 'Geometrija', '3d': 'Geometrija', pov: 'Geometrija',
  anal: 'Analitička geometrija', koo: 'Analitička geometrija', kon: 'Analitička geometrija', vek: 'Analitička geometrija', vekt: 'Analitička geometrija',
  seq: 'Nizovi i redovi', niz: 'Nizovi i redovi', nizovi: 'Nizovi i redovi', red: 'Nizovi i redovi', lim: 'Nizovi i redovi', limes: 'Nizovi i redovi',
  stat: 'Statistika i vjerojatnost', st: 'Statistika i vjerojatnost', ver: 'Statistika i vjerojatnost', vjer: 'Statistika i vjerojatnost',
  fin: 'Financijska matematika', pos: 'Financijska matematika',
  mat: 'Matrice i sustavi', je: 'Matrice i sustavi', jed: 'Matrice i sustavi', ne: 'Matrice i sustavi', neje: 'Matrice i sustavi',
  comb: 'Kombinatorika', komb: 'Kombinatorika', komp: 'Kombinatorika', kompl: 'Kombinatorika',
  kompleks: 'Kompleksni brojevi',
  func: 'Funkcije', fn: 'Funkcije', fnk: 'Funkcije', fun: 'Funkcije', funk: 'Funkcije', funkc: 'Funkcije', grf: 'Funkcije',
  der: 'Derivacije i integrali', de: 'Derivacije i integrali', dif: 'Derivacije i integrali', kp: 'Derivacije i integrali',
  om: 'Ostalo', omj: 'Ostalo', omjer: 'Ostalo', opt: 'Ostalo', ord: 'Ostalo', mj: 'Ostalo', ostalo: 'Ostalo',
};

// Kanonska tablica: kanonski kod -> { label, aliases }. `label` je labela koju engine već
// prikazuje za taj kod; alias liste pokrivaju isključivo sinonime i tipfelere UNUTAR iste
// labele (vidi INVARIJANTU gore).
export const CANON = {
  br: { label: 'Skupovi i brojevi', aliases: ['br', 'skupovi'] },
  al: { label: 'Algebarski izrazi', aliases: ['al', 'alg'] },
  lin: { label: 'Linearne funkcije', aliases: ['lin'] },
  kv: { label: 'Kvadratne funkcije', aliases: ['kv'] },
  exp: { label: 'Eksponencijalne i log.', aliases: ['exp', 'ek', 'eks', 'log'] },
  trig: { label: 'Trigonometrija', aliases: ['trig', 'trg'] },
  geom: { label: 'Geometrija', aliases: ['geom', 'geo', 'ge', '3d', 'pov'] },
  anal: { label: 'Analitička geometrija', aliases: ['anal', 'koo'] },
  // kon i vek ostaju zasebni kodovi: engine ih prikazuje pod istom labelom kao `anal`, ali
  // su sadržajno različiti (konusni presjeci / vektori) i spajanje bi trajno izbrisalo tu
  // razliku ako ih engine jednom razdvoji.
  kon: { label: 'Analitička geometrija', aliases: ['kon'] },
  vek: { label: 'Analitička geometrija', aliases: ['vek', 'vekt'] },
  niz: { label: 'Nizovi i redovi', aliases: ['niz', 'nizovi', 'seq', 'red'] },
  lim: { label: 'Nizovi i redovi', aliases: ['lim', 'limes'] },
  stat: { label: 'Statistika i vjerojatnost', aliases: ['stat', 'st', 'vjer', 'ver'] },
  fin: { label: 'Financijska matematika', aliases: ['fin', 'pos'] },
  mat: { label: 'Matrice i sustavi', aliases: ['mat', 'je', 'jed', 'ne', 'neje'] },
  komb: { label: 'Kombinatorika', aliases: ['komb', 'comb'] },
  // TODO (sadržaj): `komp`/`kompl` engine prikazuje kao "Kombinatorika", iako kratica
  // sugerira kompleksne brojeve. Dok se ti zadaci ručno ne provjere, ostaju zasebni kodovi —
  // prekodiranje u `kompleks` promijenilo bi labelu u UI-u bez pokrića u podacima.
  komp: { label: 'Kombinatorika', aliases: ['komp'] },
  kompl: { label: 'Kombinatorika', aliases: ['kompl'] },
  kompleks: { label: 'Kompleksni brojevi', aliases: ['kompleks'] },
  fun: { label: 'Funkcije', aliases: ['fun', 'func', 'fn', 'fnk', 'funk', 'funkc', 'grf'] },
  der: { label: 'Derivacije i integrali', aliases: ['der', 'de', 'dif', 'kp'] },
  ostalo: { label: 'Ostalo', aliases: ['ostalo', 'om', 'omj', 'omjer', 'opt', 'ord', 'mj'] },
};

// Sigurnosna brava: nijedan alias ne smije promijeniti labelu koju engine već prikazuje.
export function assertCanonMatchesEngine() {
  const errors = [];
  for (const [canon, { label, aliases }] of Object.entries(CANON)) {
    for (const a of [canon, ...aliases]) {
      const engineLabel = ENGINE_LABELS[a];
      if (engineLabel === undefined) { errors.push(`alias "${a}" (kanon "${canon}") ne postoji u TOPIC_LABELS enginea`); continue; }
      if (engineLabel !== label) errors.push(`alias "${a}" -> kanon "${canon}" mijenja labelu: engine prikazuje "${engineLabel}", kanon tvrdi "${label}"`);
    }
  }
  if (errors.length) {
    throw new Error(`Kanonska tablica krši invarijantu (spajanje preko granice labele):\n  - ${errors.join('\n  - ')}`);
  }
}

assertCanonMatchesEngine();

// alias -> kanonski kod (uključujući kanonski kod samog sebe, za idempotenciju)
const aliasToCanon = {};
for (const [canon, { aliases }] of Object.entries(CANON)) {
  for (const a of aliases) aliasToCanon[a] = canon;
  aliasToCanon[canon] = canon;
}

export function normalizeAll({ write = true } = {}) {
  let totalChanges = 0;
  const perFile = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.mjs')).sort()) {
    const p = resolve(dir, f);
    const src = readFileSync(p, 'utf8');
    let changes = 0;
    const unknown = new Set();
    const out = src.replace(/topic:"([^"]+)"/g, (m, code) => {
      const canon = aliasToCanon[code];
      if (!canon) { unknown.add(code); return m; }
      if (canon === code) return m;
      changes++;
      return `topic:"${canon}"`;
    });
    if (changes || unknown.size) {
      perFile.push({ file: f, changes, unknown: [...unknown] });
      totalChanges += changes;
      if (write && changes) writeFileSync(p, out);
    }
  }
  return { totalChanges, perFile };
}

// Samo kad se skripta pokrene izravno — `import { CANON }` ne smije prepisivati podatke.
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  const { totalChanges, perFile } = normalizeAll({ write: !dryRun });
  for (const r of perFile) {
    const u = r.unknown.length ? ` UNKNOWN=${r.unknown.join(',')}` : '';
    console.log(`${r.file}: ${r.changes} promjena${u}`);
  }
  console.log(`\n${dryRun ? '[dry-run] ' : ''}Ukupno promjena: ${totalChanges}, datoteka s nepoznatim kodom: ${perFile.filter((r) => r.unknown.length).length}`);
}
