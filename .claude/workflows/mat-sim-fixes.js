export const meta = {
  name: 'mat-sim-fixes',
  description: 'Matematika simulator: implementiraj grupe popravaka iz docs/MAT_SIMULATOR_PLAN.md u worktreeima, adversarijalno pregledaj, spoji i verificiraj',
  whenToUse: 'Kad treba odraditi fazu 1–5 plana za mat simulator. args: { round: 1 | 2 }',
  phases: [
    { title: 'Implement', detail: 'jedna grupa datoteka = jedan agent u vlastitom worktreeu', model: 'opus' },
    { title: 'Review', detail: 'dva neovisna Opus refutera po grupi', model: 'opus' },
    { title: 'Repair', detail: 'agent ispravlja potvrđene nalaze u istoj grani', model: 'opus' },
    { title: 'Merge', detail: 'spoji grane redom, npm test + npm run build' },
  ],
}

const round = (args && args.round) || 1
const PLAN = 'docs/MAT_SIMULATOR_PLAN.md'
const WT = 'C:\\Users\\Daniel\\worktrees\\Maturiraj'

// Grupe su podijeljene po datotekama koje diraju da worktreeovi ne konfliktiraju.
// Engine (MatEngineCore.tsx) smije dirati SAMO grupa "engine".
const ROUND1 = [
  {
    key: 'engine', model: 'opus', branch: 'mat-sim/engine',
    tasks: ['1.1 AI rute → /api/ai-simulator', '1.2 engine dio: čitaj isPro/isPaid/price iz DISCERE_CONFIG', '1.3 cijena i naziv plana iz configa', '1.4 zaključani ispit → lokot + CTA (DISCERE_UPGRADE)', '1.5 history zapis nosi answers + errorTags', '1.6 ključ slike: normaliziraj id (zarez → točka) pri gradnji imgKey'],
    files: ['components/simulator/MatEngineCore.tsx'],
  },
  {
    key: 'platform', model: 'opus', branch: 'mat-sim/platform',
    tasks: ['1.2 helper getEffectiveTier u lib/billing, koriste ga proxy.js, useAuth, requirePro; MatFullSimulator šalje isPro/isPaid/price u DISCERE_CONFIG', '1.5 flushAttempt prosljeđuje answers, errorTags, duration_sec', '5.4 obriši content/discere/mat.html, dovrši ili makni app/api/discere/ai-analysis placeholder'],
    files: ['proxy.js', 'lib/hooks/useAuth.js', 'lib/billing/**', 'components/discere/mat/MatFullSimulator.jsx', 'lib/sim-progress.ts', 'app/api/discere/**'],
  },
  {
    key: 'data', model: 'sonnet', branch: 'mat-sim/data',
    tasks: ['1.6 u exams/2025_*.mjs id-eve "37,1" prepiši u "37.1" (i sve reference u qImages)', '1.7 orphan SVG → dodaj img:true; missing bez SVG-a → zapiši u docs/mat-figure-audit.json kao TODO za fazu 6 (ne crtaj)', '3.1 scripts/mat-normalize-topics.mjs s kanonskom tablicom + dry-run, pokreni ga, ažuriraj TOPIC_LABELS popis u docs (NE diraj engine)', '4.1 scripts/mat-svg-colors.mjs: zamijeni hardkodirane boje CSS varijablama po tablici iz plana, pokreni', '5.2 premjesti QS_*_META blokove iz enginea? NE — samo iz exams/*.mjs ako postoje; engine dira grupa engine'],
    files: ['content/simulator/mat/**', 'scripts/mat-*.mjs', 'docs/mat-figure-audit.json'],
  },
]

const ROUND2 = [
  {
    key: 'engine', model: 'opus', branch: 'mat-sim/engine-r2',
    tasks: ['2.1 engine koristi async loadExam(key) umjesto gotovog EXAMS; Home iz index.json; cross-exam modovi učitavaju postupno s progress barom', '2.2 nerdamer lazy (ensureNerdamer tek na kalkulator/solver/provjeru)', '3.2 chk/nrm/numEq delegiraju na lib/mat-grading.ts', '5.2 makni QS_*_META iz enginea u content/simulator/mat/audit/'],
    files: ['components/simulator/MatEngineCore.tsx', 'components/discere/mat/MatFullSimulator.jsx'],
  },
  {
    key: 'grading', model: 'opus', branch: 'mat-sim/grading',
    tasks: ['3.2 lib/mat-grading.ts: normalizacija (x =, razmaci, jedinice, svi zarezi), razlomak↔decimal, relativna tolerancija, nerdamer ekvivalencija kad je dostupan', '3.3 __tests__/mat-simulator/grading.test.ts: svaki sol.ans i svaki sol.alt iz svih 70 ispita mora proći kao točan; dodaj u vitest.config.js', '3.4 skripta prijavi zadatke gdje normalizator ne prihvaća sol.ans'],
    files: ['lib/mat-grading.ts', '__tests__/mat-simulator/**', 'vitest.config.js', 'scripts/mat-*.mjs'],
  },
  {
    key: 'platform', model: 'sonnet', branch: 'mat-sim/platform-r2',
    tasks: ['2.3 self-host DM Serif Display + Instrument Sans u public/fonts, ukloni Google link', '2.4 zajednički rate-limit helper (Supabase tablica) za /api/ai, /api/ai-simulator', '3.3 testovi: integritet registra slika (img:true ⇔ qImages), kanon tema, index.json ⇔ datoteke'],
    files: ['public/fonts/**', 'app/api/ai*/**', 'lib/rate-limit.ts', '__tests__/mat-simulator/**'],
  },
]

const GROUPS = round === 2 ? ROUND2 : ROUND1

const IMPL_SCHEMA = {
  type: 'object',
  properties: {
    branch: { type: 'string' },
    worktree: { type: 'string' },
    done: { type: 'array', items: { type: 'string' } },
    skipped: { type: 'array', items: { type: 'object', properties: { task: { type: 'string' }, why: { type: 'string' } }, required: ['task', 'why'] } },
    filesTouched: { type: 'array', items: { type: 'string' } },
    testsRun: { type: 'string' },
  },
  required: ['branch', 'worktree', 'done', 'skipped', 'filesTouched', 'testsRun'],
}

const REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' }, line: { type: 'integer' },
          summary: { type: 'string' }, failure: { type: 'string' },
          severity: { type: 'string', enum: ['blocker', 'major', 'minor'] },
        },
        required: ['file', 'summary', 'failure', 'severity'],
      },
    },
  },
  required: ['findings'],
}

const VERDICT_SCHEMA = { type: 'object', properties: { refuted: { type: 'boolean' }, reason: { type: 'string' } }, required: ['refuted', 'reason'] }

function implPrompt(g) {
  return `Radiš na Maturiraj repou (Next.js). Pravi git repo je u Maturiraj/Maturiraj. Pročitaj ${PLAN} u cijelosti.
Tvoja grupa: "${g.key}". Grana: ${g.branch}. Worktree: ${WT}\\${g.branch.replace('/', '-')} (napravi ga s "git worktree add", NIKAD ne radi in-place jer Dropbox sync lomi worktree; na velikim checkoutovima dodaj 2>/dev/null da git progress ne blokira).
Smiješ dirati SAMO ove datoteke/uzorke: ${g.files.join(', ')}. Ako popravak traži izmjenu izvan toga, zapiši u "skipped" s razlogom, ne diraj.
Zadaci (točke iz plana):
${g.tasks.map(t => '- ' + t).join('\n')}
Pravila: minimalne, ciljane izmjene; ne mijenjaj ponašanje koje nije u zadatku; nema novih ovisnosti bez potrebe; komentari na hrvatskom kratki. Za MatEngineCore.tsx: ne reformatiraj datoteku, radi kirurške zamjene. Za skripte nad podacima: idempotentne, s --dry-run, ispiši sažetak promjena.
Na kraju: pokreni "npm test" u worktreeu i zapiši rezultat; commitaj na granu s porukom koja nabraja točke plana i završava s "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>". Ne pushaj, ne mergeaj.
Vrati strukturirani rezultat.`
}

function reviewPrompt(impl, g, lens) {
  return `Adversarijalni pregled grane ${impl.branch} u worktreeu ${impl.worktree} (Maturiraj). Leća: ${lens}.
Kontekst: ${PLAN}, grupa "${g.key}", zadaci: ${g.tasks.join(' | ')}.
Pogledaj "git diff main...${impl.branch}" (ili odgovarajuću baznu granu). Traži SAMO stvarne greške koje bi se manifestirale: krivi ključ, regresija postojećeg toka, ne-idempotentna skripta, promjena ponašanja izvan zadatka, sigurnosni propust (tier bypass, klijent šalje model/cijenu), pokvaren build. Svaki nalaz s konkretnim scenarijem neuspjeha. Bez stilskih primjedbi. Ako nema nalaza, vrati prazan niz.`
}

function verdictPrompt(f, impl) {
  return `Pokušaj OBORITI ovaj nalaz pregleda na grani ${impl.branch} (worktree ${impl.worktree}): ${f.file}:${f.line || '?'} — ${f.summary}. Scenarij: ${f.failure}.
Pročitaj stvarni kod. Ako scenarij ne može nastati ili je nalaz kriv, refuted=true. Ako nisi siguran, refuted=true.`
}

const results = await pipeline(
  GROUPS,
  (g) => agent(implPrompt(g), { label: `impl:${g.key}`, phase: 'Implement', model: g.model, schema: IMPL_SCHEMA }),
  async (impl, g) => {
    if (!impl) return null
    const reviews = await parallel(['ispravnost i regresije', 'sigurnost i tier/paywall'].map((lens) => () =>
      agent(reviewPrompt(impl, g, lens), { label: `review:${g.key}:${lens.split(' ')[0]}`, phase: 'Review', model: 'opus', schema: REVIEW_SCHEMA })))
    const findings = reviews.filter(Boolean).flatMap((r) => r.findings)
    const judged = await parallel(findings.map((f) => () =>
      agent(verdictPrompt(f, impl), { label: `verdict:${g.key}`, phase: 'Review', model: 'opus', schema: VERDICT_SCHEMA }).then((v) => ({ f, v }))))
    const confirmed = judged.filter(Boolean).filter((x) => x.v && !x.v.refuted).map((x) => x.f)
    log(`${g.key}: ${findings.length} nalaza, ${confirmed.length} potvrđeno`)
    return { impl, confirmed }
  },
  async (r, g) => {
    if (!r) return null
    if (!r.confirmed.length) return { ...r, repaired: [] }
    const rep = await agent(`Ispravi potvrđene nalaze na grani ${r.impl.branch} u worktreeu ${r.impl.worktree} (samo datoteke grupe "${g.key}": ${g.files.join(', ')}):\n${r.confirmed.map((f) => `- ${f.file}:${f.line || '?'} [${f.severity}] ${f.summary} — ${f.failure}`).join('\n')}\nPokreni npm test, commitaj s Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>. Vrati popis što je ispravljeno.`, { label: `repair:${g.key}`, phase: 'Repair', model: 'opus' })
    return { ...r, repaired: rep }
  },
)

const ok = results.filter(Boolean)
phase('Merge')
const merge = await agent(`U Maturiraj repou (Maturiraj/Maturiraj) napravi integracijsku granu mat-sim/round${round} od trenutne glavne grane i spoji redom: ${ok.map((r) => r.impl.branch).join(', ')}. Radi u novom worktreeu ${WT}\\mat-sim-round${round}. Riješi konflikte čuvajući namjeru obje strane (plan: ${PLAN}). Pokreni "npm test" i "npm run build". Ako nešto padne, popravi minimalno i ponovi. Ne pushaj. Vrati: naziv grane, rezultat testova i builda doslovno, popis konflikata i kako su riješeni.`, { label: 'merge', model: 'opus' })

return { round, groups: ok.map((r) => ({ key: r.impl.branch, done: r.impl.done, skipped: r.impl.skipped, confirmedFindings: r.confirmed.length, repaired: r.repaired })), merge }
