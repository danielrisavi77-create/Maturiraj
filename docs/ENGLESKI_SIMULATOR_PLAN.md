# Engleski simulator — plan sanacije i poboljšanja

Datum: 2026-09-12. Temelji se na analizi koda u `components/engleski-simulator`, `lib/engleski-simulator`, `app/api/ai*` i usporedbi s hrvatskim simulatorom.

## Izbor modela

Fable se ne koristi za kodiranje. Podjela po vrsti posla:

| Vrsta posla | Model | Zašto |
|---|---|---|
| Mehanički popravci s jasnim receptom (faze 1 i 2) | Sonnet 5 | Jeftin, brz, dovoljan kad je dijagnoza već napravljena i datoteke poznate |
| Arhitektura i refaktori koji diraju više slojeva (faza 3) | Opus 5 | Supabase perzistencija, lazy loading i realni timer traže razumijevanje cijelog toka |
| Adversarijalna provjera svakog popravka | Sonnet 5 | Provjera je uska i mehanička: pokreni test, pokušaj oboriti tvrdnju |
| Završni review cijelog diffa | Opus 5 | Jedini korak gdje se isplati širi kontekst i dublje zaključivanje |

Orkestracija (pisanje workflowa, čitanje rezultata, odluke između faza) ostaje na glavnoj sesiji.

## Pravila koja vrijede za sve faze

- Nema `isolation: 'worktree'` u workflowu. Repo je u Dropboxu i worktree unutar njega ruši sinkronizaciju. Umjesto toga svaki zadatak ima **isključivo vlasništvo nad datotekama** i zadaci koji dijele datoteku idu u isti agent ili sekvencijalno.
- Svaki popravak dolazi s testom u `__tests__/engleski-simulator/` i `npx vitest run __tests__/engleski-simulator` mora proći.
- Nakon svake faze: `npm run lint`, testovi, jedan commit po fazi.
- Agenti ne smiju dirati `lib/engleski-simulator/exams.js` osim gdje faza to izričito kaže (21.666 linija, sadržaj je već auditiran).

## Faza 0 — Baseline (glavna sesija, bez agenata)

1. `git status` čist, `npx vitest run` zelen (trenutno 291/291).
2. Commit checkpoint tag `eng-sim-pre-fix`.

## Faza 1 — Kritični bugovi (Sonnet 5, 4 zadatka paralelno, disjunktne datoteke)

| # | Problem | Datoteke (vlasništvo) | Prihvatni kriterij |
|---|---|---|---|
| 1.1 | MC opcije samo A–F; 59 pitanja s točnim G/H/I nerješivo | `components/engleski-simulator/components/SimSharedUI.js`, `lib/engleski-simulator/constants.js` (LL) | `LL` pokriva A–J; test koji učita `EXAMS`, nađe pitanje s `sol.cl==='H'` i potvrdi da `MCQ` renderira slovo i da `chk` vraća true za 'H' |
| 1.2 | `validateUserData` briše errorTracker (čuva samo brojeve, app sprema objekte) | `lib/engleski-simulator/scoring.js`, `__tests__/engleski-simulator/scoring.test.js` | Validacija prihvaća `{q, topic, examKey, qid, count, lastDate}`, sanitizira duljine i tipove; test round-trip kroz JSON |
| 1.3 | Dnevni izazov dvostruko navigira na rezultate; side-effekti (zvuk, XP) unutar setState updatera | `components/engleski-simulator/EngleskiSimulator.js` (samo `onExamDone`, case `daily`) | `screenHistory` raste za 1 po završetku; `showXpFloat`/`playSound` izvan updatera |
| 1.4 | Virtualni ispit, filter sesija i sesija grešaka uvijek `razina:'osnovna'` | `components/engleski-simulator/EngleskiSimulator.js` (`generateVirtualExam`, case `filter`), `screens/ErrorAndBookmarkScreens.js`, `screens/TopicFilterScreen.js` | Razina se izvodi iz izvora pitanja (`mixed` ako miješa); ModeSelect i AudioPlayer ne pretpostavljaju osnovnu |

Napomena: 1.3 i 1.4 oba diraju `EngleskiSimulator.js` → **jedan agent** radi oba.

## Faza 2 — Konsolidacija i sitnice (Sonnet 5, 3 zadatka)

| # | Zadatak | Datoteke |
|---|---|---|
| 2.1 | Ukloniti duplicirane konstante iz `EngleskiSimulator.js` (GC, LL, TLBL, TBDG, TOPIC_LABELS, LEVEL_NAMES, getLevel, xpProgress, xpToNext) i uvoziti iz `constants.js`; uskladiti `grade` da postoji samo u `scoring.js` | `EngleskiSimulator.js`, `constants.js` |
| 2.2 | Jedna kopija CSS-a: zadržati `app/engleski-simulator/simulator.css`, obrisati `public/engleski-simulator/simulator.css`, provjeriti da ništa ne referencira `/engleski-simulator/simulator.css` | CSS + grep |
| 2.3 | Tekstualne i podatkovne sitnice: "5 pitanja danas" → stvarni broj; "NCE" → "NCVVO" u AnalyticsPanelFull i Home; `hasListening`/`hasReading` za `2010_jesen` i `2010_zima`; prikaz upozorenja timera na 10 i 5 min (onWarn → toast); odluka o rutama: `/engleski-simulator` postaje redirect na `/discere/engleski/simulator` | `HomeScreen.js`, `AnalyticsPanelFull.js`, `exams.js` (samo dvije zastavice), `EngleskiSimulator.js` (timer), `app/engleski-simulator/page.js` |

| 2.4 | **Podatkovni bug otkriven u fazi 1**: 64 mc pitanja tipa `reading_cloze4` (viša razina 2022–2025) imaju `sol.cl` kao riječ (npr. "seen") umjesto slova, a banka opcija ima 11–13 riječi. Ta pitanja su neocjenjiva. Skriptom (deterministički, `opts.indexOf(sol.cl)`) pretvoriti u slovo, proširiti `LL` na A–O, dodati test da je svako mc `sol.cl` slovo unutar duljine `opts`. Ovo je jedina dozvoljena izmjena `exams.js` u fazi 2. | `scripts/fix-eng-cloze-letters.mjs`, `exams.js` (samo 64 `sol.cl`), `constants.js` (LL), `__tests__/engleski-simulator/mc-letters.test.js` |

2.1 i 2.3 dijele `EngleskiSimulator.js` → sekvencijalno (2.1 pa 2.3). 2.4 dira `constants.js` koji dira i 2.1 → 2.4 ide u isti agent kao 2.1 ili nakon njega.

## Faza 3 — Arhitektura (Opus 5, sekvencijalno, svaki zadatak zaseban commit)

| # | Zadatak | Opis |
|---|---|---|
| 3.1 | **Supabase perzistencija** | Preslikati mehanizam iz `app/discere/hrvatski/simulator/HrvatskiSimulator.jsx` (red `sim_progress`, `subject='eng'`). localStorage ostaje kao offline cache i za neprijavljene. Migracija postojećeg localStorage stanja pri prvoj prijavi. Roditeljski dashboard (`app/dashboard/page.js`) mora vidjeti engleski. |
| 3.2 | **Lazy loading ispita** | Generirati `lib/data/engleski-simulator/exams-{osnovna,visa}.json` iz `exams.js` skriptom (`scripts/`), koristiti postojeći `app/api/exams/[razina]/route.js` i `lib/engleski-simulator/loader.js`. Ekrani koji statički uvoze `EXAMS` (AnalyticsPanelFull, CompareScreen, PDFReportScreen, TopicFilterScreen, VocabScreen) prelaze na `examsMap` prop. `exams.js` ostaje izvor istine, ali nije više u klijentskom bundleu. Kriterij: `next build` pokazuje da glavni chunk simulatora ne sadrži ispite. |
| 3.3 | **Realistična simulacija** | Timer po razini i po dijelu ispita (Reading / Writing / Listening imaju vlastite limite; vrijednosti uzeti iz važećeg NCVVO ispitnog kataloga, ne pogađati). Simulacija prolazi dijelove redom, bez povratka. Rezultat jasno označava da Writing nije bodovan i prikazuje postotak samo za auto-ocjenjive dijelove, uz napomenu o udjelu Writinga u konačnoj ocjeni. Pragovi ocjena dobivaju oznaku "orijentacijski". |
| 3.4 | **Slušanje** | Kod: AudioPlayer prelazi s Google Drive iframea na `<audio>` element s izvorom iz Supabase Storage ili `public/audio/eng/`. Mapping `examKey → task → datoteka` u JSON-u, ne u komponenti. **Blokirano na sadržaju**: audio datoteke NCVVO-a treba nabaviti i uploadati; do tada fallback ostaje tekst uz jasnu oznaku. |

## Faza 4 — Verifikacija (Sonnet 5 za provjere, Opus 5 za završni review)

1. Za svaki zadatak iz faza 1–3 jedan agent-skeptik: dobiva tvrdnju iz prihvatnog kriterija i pokušava je oboriti (pokreće testove, čita diff). Zadatak se vraća u rad ako skeptik obori tvrdnju.
2. `npm run lint`, `npx vitest run`, `next build` (mjerenje veličine chunka prije/poslije).
3. Završni review cijelog diffa u odnosu na `eng-sim-pre-fix` (Opus 5): ispravnost, regresije u paywallu, pristupačnost.
4. Ručni smoke test u pregledniku: riješiti jedan ispit osnovne i jedan više razine u sva tri moda, refreshati, provjeriti da greške i statistike ostaju.

## Workflow skripta (referenca; pokreće glavna sesija po fazama)

Svaka faza je zaseban `Workflow` poziv, tako da se rezultat čita prije sljedeće. Obrazac za fazu 1 i 2 (implementiraj → skeptik → po potrebi popravi):

```js
export const meta = {
  name: 'eng-sim-fix-phase',
  description: 'Implementiraj zadatke iz plana engleskog simulatora i adversarijalno ih provjeri',
  phases: [{ title: 'Implement' }, { title: 'Verify' }, { title: 'Repair' }],
}
// args = { tasks: [{ id, title, files, criteria, instructions }], model: 'sonnet' }
const RESULT = { type: 'object', properties: {
  summary: { type: 'string' }, filesChanged: { type: 'array', items: { type: 'string' } },
  testsAdded: { type: 'array', items: { type: 'string' } }, testsPass: { type: 'boolean' } },
  required: ['summary', 'filesChanged', 'testsPass'] }
const VERDICT = { type: 'object', properties: {
  refuted: { type: 'boolean' }, reason: { type: 'string' } }, required: ['refuted', 'reason'] }

const results = await pipeline(
  args.tasks,
  t => agent(
    `Zadatak ${t.id}: ${t.title}\n\nSmiješ mijenjati SAMO ove datoteke: ${t.files.join(', ')}.\n` +
    `Ne koristi git worktree. Ne diraj lib/engleski-simulator/exams.js osim ako je gore naveden.\n\n` +
    `Upute:\n${t.instructions}\n\nPrihvatni kriterij:\n${t.criteria}\n\n` +
    `Dodaj vitest test u __tests__/engleski-simulator/ i pokreni "npx vitest run __tests__/engleski-simulator". Vrati rezultat.`,
    { label: `impl:${t.id}`, phase: 'Implement', model: args.model, schema: RESULT }),
  (r, t) => r && agent(
    `Pokušaj OBORITI tvrdnju da je zadatak ${t.id} (${t.title}) ispravno riješen.\n` +
    `Kriterij: ${t.criteria}\nImplementator tvrdi: ${r.summary}\nDatoteke: ${r.filesChanged.join(', ')}\n` +
    `Pročitaj diff (git diff), pokreni testove, traži rubne slučajeve i regresije. Ako si nesiguran, refuted=true.`,
    { label: `verify:${t.id}`, phase: 'Verify', model: 'sonnet', schema: VERDICT })
    .then(v => ({ task: t, impl: r, verdict: v })),
  async x => {
    if (!x || !x.verdict?.refuted) return x
    log(`${x.task.id} oboren: ${x.verdict.reason} — popravak`)
    const fix = await agent(
      `Zadatak ${x.task.id} nije prošao provjeru. Razlog: ${x.verdict.reason}\n` +
      `Popravi unutar datoteka ${x.task.files.join(', ')}, ponovno pokreni testove.`,
      { label: `repair:${x.task.id}`, phase: 'Repair', model: args.model, schema: RESULT })
    return { ...x, repair: fix }
  },
)
return results.filter(Boolean)
```

Za fazu 3 isti obrazac, ali `args.model = 'opus'`, `tasks` se šalju **jedan po jedan** (svaki zadatak zaseban Workflow poziv i commit), jer svi diraju `EngleskiSimulator.js`.

## Struktura ispita prema NCVVO (za zadatak 3.3)

Izvor: službeni ispitni katalog 2025./2026. (https://www.ncvvo.hr/wp-content/uploads/2025/09/ENG-2026.pdf), tekst izvučen iz PDF-a i provjeren. Sekundarni izvori (gradivo.hr, srednja.hr) krivo navode udjele na višoj razini kao proporcionalne bodovima; katalog kaže da je svaka cjelina 1/3.

| | Viša razina (A) | Osnovna razina (B) |
|---|---|---|
| Ukupno | 180 min | 105 min |
| Čitanje | 70 min, 40 bodova, udio 1/3 | Čitanje + Pisanje jedan blok od 75 min; Čitanje 30 bodova, udio 40 % |
| Pisanje | 75 min, 20 bodova, udio 1/3, raspravljački esej 200–250 riječi | unutar bloka od 75 min; 10 bodova, udio 30 %; kraći tekst |
| Slušanje | približno 35 min (uklj. 5 min za prijenos odgovora), 25 bodova, udio 1/3 | približno 30 min (uklj. 5 min), 20 bodova, udio 30 % |
| Ukupno bodova | 85 | 60 |

Formula konačnog rezultata (osnovna, iz kataloga): `[(0.4 · Čitanje/30) + (0.3 · Pisanje/10) + (0.3 · Slušanje/20)] · 60`. Viša: svaka cjelina ponderirana na 1/3.

Posljedice za simulator: timer po cjelini umjesto fiksnih 90 min; na osnovnoj razini Čitanje i Pisanje dijele jedan blok od 75 min; postotak na rezultatima mora se računati ponderirano po cjelini (ne kao udio točnih pitanja), a Pisanje (1/3 odnosno 30 %) treba jasno označiti kao neocijenjeno.

## Redoslijed i ovisnosti

```
Faza 0 → Faza 1 (paralelno: 1.1, 1.2, [1.3+1.4]) → commit
       → Faza 2 (paralelno: 2.2 ; sekvencijalno 2.1 → 2.3) → commit
       → Faza 3.1 → commit → 3.2 → commit → 3.3 → commit → 3.4 (kod) → commit
       → Faza 4
```

Procjena broja agenata: faza 1 ≈ 6–9, faza 2 ≈ 6–9, faza 3 ≈ 8–12, faza 4 ≈ 10–14. Sve unutar smjernice od 15 agenata po workflowu.

## Odluke (2026-09-12)

- Rute: `/engleski-simulator` postaje redirect na `/discere/engleski/simulator`.
- Timer (3.3): vrijednosti po dijelu ispita i razini pronaći na ncvvo.hr (ispitni katalog), ne pogađati.
- Audio (3.4): preskočeno u ovom krugu.
- Perzistencija (3.1): migracija localStorage → Supabase pri prvoj prijavi; localStorage ostaje cache za neprijavljene.
- Git: grana `fix/engleski-simulator`, jedan commit po fazi, bez worktreea.
- Opseg prvog kruga: faze 0–2, zatim pauza za pregled prije faze 3.
- Pragovi ocjena: ostaju 85/70/55/40, u UI-ju označeni kao orijentacijski (dodano u zadatak 2.3).
