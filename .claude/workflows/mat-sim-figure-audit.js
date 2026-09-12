export const meta = {
  name: 'mat-sim-figure-audit',
  description: 'Matematika simulator: renderiraj sve SVG slike, provjeri boje u obje teme i (mode=pdf) usporedi s originalnim NCVVO PDF ispitima',
  whenToUse: 'Faza 4 (args.mode="colors") ili faza 6 (args.mode="pdf") plana docs/MAT_SIMULATOR_PLAN.md. args: { mode: "colors"|"pdf", exams?: string[] }',
  phases: [
    { title: 'Fetch', detail: 'PDF-ovi s ncvvo.hr → _audit/pdf/', model: 'sonnet' },
    { title: 'Render', detail: 'SVG → PNG (light+dark), PDF stranice → PNG', model: 'sonnet' },
    { title: 'Compare', detail: 'Sonnet prvi prolaz, Opus sudi sporne', model: 'opus' },
    { title: 'Fix', detail: 'Opus ispravlja SVG prema PDF-u u worktreeu', model: 'opus' },
    { title: 'Report' },
  ],
}

const mode = (args && args.mode) || 'colors'
const PLAN = 'docs/MAT_SIMULATOR_PLAN.md'
const AUDIT = '_audit'
const WT = 'C:\\Users\\Daniel\\worktrees\\Maturiraj'

const ALL_EXAMS = []
for (const y of [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]) {
  for (const s of ['ljeto', 'jesen', 'zima']) {
    if (s === 'zima' && y > 2012) continue
    for (const r of ['A', 'B']) ALL_EXAMS.push(`${y}_${s}_${r}`)
  }
}
const EXAMS = (args && Array.isArray(args.exams) && args.exams.length) ? args.exams : ALL_EXAMS

const FETCH_SCHEMA = {
  type: 'object',
  properties: {
    found: { type: 'array', items: { type: 'object', properties: { key: { type: 'string' }, url: { type: 'string' }, path: { type: 'string' } }, required: ['key', 'url', 'path'] } },
    missing: { type: 'array', items: { type: 'object', properties: { key: { type: 'string' }, why: { type: 'string' } }, required: ['key', 'why'] } },
  },
  required: ['found', 'missing'],
}

const RENDER_SCHEMA = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    figures: { type: 'array', items: { type: 'object', properties: { imgKey: { type: 'string' }, qid: { type: 'string' }, light: { type: 'string' }, dark: { type: 'string' }, pdfCrop: { type: 'string' } }, required: ['imgKey', 'qid', 'light', 'dark'] } },
    errors: { type: 'array', items: { type: 'string' } },
  },
  required: ['key', 'figures', 'errors'],
}

const COMPARE_SCHEMA = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          imgKey: { type: 'string' },
          identical: { type: 'boolean' },
          colorsOk: { type: 'boolean' },
          severity: { type: 'string', enum: ['none', 'minor', 'major', 'wrong'] },
          differences: { type: 'array', items: { type: 'string' } },
        },
        required: ['imgKey', 'identical', 'colorsOk', 'severity', 'differences'],
      },
    },
  },
  required: ['key', 'results'],
}

const VERDICT_SCHEMA = { type: 'object', properties: { refuted: { type: 'boolean' }, reason: { type: 'string' } }, required: ['refuted', 'reason'] }

// ── Fetch (samo mode=pdf) ───────────────────────────────────────────────────
let pdfIndex = { found: [], missing: [] }
if (mode === 'pdf') {
  phase('Fetch')
  const chunks = []
  for (let i = 0; i < EXAMS.length; i += 10) chunks.push(EXAMS.slice(i, i + 10))
  const fetched = await parallel(chunks.map((c, i) => () => agent(
    `Radiš u Maturiraj repou (Maturiraj/Maturiraj). Za svaki ključ ispita iz popisa pronađi originalni PDF ispita državne mature iz MATEMATIKE na ncvvo.hr (arhiva "Ispiti i rješenja" / "Provedeni ispiti", ljetni = 1. rok, jesenski = 2. rok, zimski rok postoji do 2012; A = viša razina, B = osnovna razina). Preuzmi ispitnu knjižicu (ne samo rješenja) u ${AUDIT}/pdf/<key>.pdf. Ako postoji i PDF s rješenjima, spremi ga kao ${AUDIT}/pdf/<key>_rjesenja.pdf. Koristi WebFetch/WebSearch i curl. Ne nagađaj URL-ove: ako ne možeš potvrditi da je PDF pravi ispit (godina, rok, razina na naslovnici), zapiši u "missing" s razlogom. Popis: ${c.join(', ')}`,
    { label: `fetch:${i + 1}/${chunks.length}`, phase: 'Fetch', model: 'sonnet', schema: FETCH_SCHEMA })))
  for (const f of fetched.filter(Boolean)) { pdfIndex.found.push(...f.found); pdfIndex.missing.push(...f.missing) }
  log(`PDF: ${pdfIndex.found.length} pronađeno, ${pdfIndex.missing.length} nedostaje`)
}

const pdfByKey = {}
for (const f of pdfIndex.found) pdfByKey[f.key] = f.path

// ── Render → Compare → Fix, po ispitu, bez barijere ─────────────────────────
const perExam = await pipeline(
  EXAMS,
  (key) => agent(
    `Maturiraj repo (Maturiraj/Maturiraj). Ispit ${key}: datoteka content/simulator/mat/exams/${key}.mjs izvozi "qs" i "qImages" (React SVG funkcije).
1) Renderiraj SVAKI unos iz qImages u PNG u SVIJETLOJ i TAMNOJ temi: react-dom/server renderToStaticMarkup → omotaj u <svg> s CSS varijablama iz public/sim/mat-engine.css (:root = light, .dark-mode = dark; postavi --text, --muted, --bg, --s1, --s2, --bdr, --blue, --red, --green, --gold) → sharp ili playwright u PNG širine 800px. Spremi u ${AUDIT}/render/${key}/<imgKey>.light.png i .dark.png. Napravi malu pomoćnu skriptu u scripts/mat-render-figures.mjs ako ne postoji (ponovno iskoristi ako postoji).
${pdfByKey[key] ? `2) PDF ${pdfByKey[key]}: renderiraj stranice u PNG (playwright + pdf.js ili python pymupdf; instaliraj pymupdf s pip ako treba), pronađi stranicu s brojem zadatka svakog imgKey-a (qid) i izreži sliku zadatka u ${AUDIT}/render/${key}/<imgKey>.pdf.png (uključi tekst zadatka iznad slike za kontekst).` : '2) Nema PDF-a za ovaj ispit u ovom prolazu; pdfCrop ostavi prazan.'}
Vrati popis slika s putanjama i greške.`,
    { label: `render:${key}`, phase: 'Render', model: 'sonnet', schema: RENDER_SCHEMA }),
  async (r, key) => {
    if (!r || !r.figures.length) return { key, results: [], skipped: !r ? 'render failed' : 'no figures' }
    const cmp = await agent(
      mode === 'pdf'
        ? `Usporedi slike simulatora s originalnim ispitom ${key}. Za svaku sliku otvori (Read) .light.png, .dark.png i .pdf.png. Kriterij "identical": isti geometrijski oblici, iste točke i oznake (slova, brojevi, jedinice), isti odnosi i orijentacija, iste vrijednosti u tablicama/grafovima, isti smjer osi i podjele. Dopuštene razlike: boje, debljina linija, font, veličina. "colorsOk": svaki element vidljiv i čitljiv u OBJE teme (osi, mreža, oznake, ispuna). Severity: none | minor (kozmetika) | major (nedostaje oznaka/vrijednost ili kriva pozicija koja ne mijenja rješenje) | wrong (slika vodi na drugo rješenje ili prikazuje drugi objekt). Ako .pdf.png ne postoji, identical=false i differences=["nema PDF izreza"]. Slike:\n${r.figures.map((f) => `- ${f.imgKey}: ${f.light} | ${f.dark} | ${f.pdfCrop || '-'}`).join('\n')}`
        : `Provjeri vidljivost i boje slika ispita ${key}. Za svaku sliku otvori (Read) .light.png i .dark.png. "colorsOk" = svaki element (osi, mreža, krivulje, oznake, ispune tablica) jasno vidljiv i čitljiv u OBJE teme; ništa ne smije biti nevidljivo na svijetloj pozadini (svijetlo sive osi) ni na tamnoj (tamne ispune). identical postavi true (nema PDF-a u ovom modu). Severity: none ako je sve ok, major ako je element nevidljiv u jednoj temi. Slike:\n${r.figures.map((f) => `- ${f.imgKey}: ${f.light} | ${f.dark}`).join('\n')}`,
      { label: `compare:${key}`, phase: 'Compare', model: 'sonnet', schema: COMPARE_SCHEMA })
    if (!cmp) return { key, results: [], skipped: 'compare failed' }
    const flagged = cmp.results.filter((x) => !x.identical || !x.colorsOk)
    const judged = await parallel(flagged.map((x) => () => {
      const fig = r.figures.find((f) => f.imgKey === x.imgKey) || {}
      return agent(`Pokušaj OBORITI nalaz o slici ${x.imgKey} (ispit ${key}): identical=${x.identical}, colorsOk=${x.colorsOk}, razlike: ${x.differences.join('; ')}. Otvori (Read) ${fig.light}, ${fig.dark}${fig.pdfCrop ? ', ' + fig.pdfCrop : ''} i sam usporedi. refuted=true ako je nalaz kriv ili pretjeran (npr. razlika je samo boja/font). Ako nisi siguran, refuted=false NIJE dopušten — provjeri ponovno pa odluči.`, { label: `judge:${key}:${x.imgKey.split('__')[1]}`, phase: 'Compare', model: 'opus', schema: VERDICT_SCHEMA }).then((v) => ({ x, v }))
    }))
    const confirmed = judged.filter(Boolean).filter((j) => j.v && !j.v.refuted).map((j) => j.x)
    log(`${key}: ${cmp.results.length} slika, ${flagged.length} sporno, ${confirmed.length} potvrđeno`)
    return { key, results: cmp.results, confirmed, figures: r.figures }
  },
  async (c, key) => {
    if (!c || !c.confirmed || !c.confirmed.length) return c
    const fix = await agent(
      `Maturiraj repo. Grana mat-sim/figures-${key} u worktreeu ${WT}\\mat-sim-figures-${key} (git worktree add; nikad in-place). Ispravi SVG funkcije u content/simulator/mat/exams/${key}.mjs za ove slike tako da budu identične originalu${mode === 'pdf' ? ' (referenca: .pdf.png izrez)' : ''} i vidljive u obje teme (koristi var(--text), var(--muted), var(--blue), var(--red), var(--green), var(--gold), var(--bg), var(--s2); nikad hardkodirane svijetlo/tamno sive):\n${c.confirmed.map((x) => { const f = c.figures.find((g) => g.imgKey === x.imgKey) || {}; return `- ${x.imgKey} [${x.severity}]: ${x.differences.join('; ')} | ${f.light} | ${f.dark}${f.pdfCrop ? ' | ' + f.pdfCrop : ''}` }).join('\n')}\nNakon izmjene ponovno renderiraj te slike (scripts/mat-render-figures.mjs) i otvori PNG-ove da potvrdiš. Commitaj s porukom koja nabraja imgKey-eve i završava s "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>". Ne pushaj. Vrati što je promijenjeno i što nisi mogao riješiti.`,
      { label: `fix:${key}`, phase: 'Fix', model: 'opus' })
    return { ...c, fix }
  },
)

phase('Report')
const rows = perExam.filter(Boolean)
const report = await agent(`Napiši docs/MAT_FIGURE_AUDIT.md (hrvatski, za vlasnika projekta) iz ovih podataka (JSON): ${JSON.stringify({ mode, pdfMissing: pdfIndex.missing, exams: rows.map((r) => ({ key: r.key, total: (r.results || []).length, confirmed: (r.confirmed || []).map((x) => ({ imgKey: x.imgKey, severity: x.severity, differences: x.differences })), fix: r.fix || null, skipped: r.skipped || null })) })}. Struktura: sažetak s brojevima (ukupno slika, identično, sporno, popravljeno, neriješeno), tablica po ispitu, popis ispita bez PDF-a, popis slika koje traže ručnu odluku. Bez em-crtica. Vrati putanju datoteke.`, { label: 'report', model: 'sonnet' })

return { mode, pdfMissing: pdfIndex.missing, exams: rows.map((r) => ({ key: r.key, figures: (r.results || []).length, confirmed: (r.confirmed || []).length, skipped: r.skipped || null })), report }
