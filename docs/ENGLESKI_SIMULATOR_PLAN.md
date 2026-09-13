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

| 2.5 | **Lint čišćenje** (naslijeđeno, 28 grešaka + 4 upozorenja, sve React Compiler pravila: refs tijekom rendera, setState u effectu, Date.now u renderu, komponente stvorene u renderu, neescapirani navodnici). Popraviti bez promjene ponašanja. | sve datoteke simulatora, zadnji korak faze |

Redoslijed u fazi 2: paralelno [2.1+2.4] i [2.2]; zatim 2.3; zatim 2.5 (dira sve datoteke pa ide zadnji). CSS se seli u `app/discere/engleski/simulator/simulator.css` jer stara ruta postaje redirect.

## Faza 3 — Arhitektura (Opus 5, sekvencijalno, svaki zadatak zaseban commit)

| # | Zadatak | Opis |
|---|---|---|
| 3.1 | **Supabase perzistencija** | Preslikati mehanizam iz `app/discere/hrvatski/simulator/HrvatskiSimulator.jsx` (red `sim_progress`, `subject='eng'`). localStorage ostaje kao offline cache i za neprijavljene. Migracija postojećeg localStorage stanja pri prvoj prijavi. Roditeljski dashboard (`app/dashboard/page.js`) mora vidjeti engleski. |
| 3.2 | **Lazy loading ispita** | Generirati `lib/data/engleski-simulator/exams-{osnovna,visa}.json` iz `exams.js` skriptom (`scripts/`), koristiti postojeći `app/api/exams/[razina]/route.js` i `lib/engleski-simulator/loader.js`. Ekrani koji statički uvoze `EXAMS` (AnalyticsPanelFull, CompareScreen, PDFReportScreen, TopicFilterScreen, VocabScreen) prelaze na `examsMap` prop. `exams.js` ostaje izvor istine, ali nije više u klijentskom bundleu. Kriterij: `next build` pokazuje da glavni chunk simulatora ne sadrži ispite. |
| 3.3 | **Realistična simulacija** | Timer po razini i po dijelu ispita (Reading / Writing / Listening imaju vlastite limite; vrijednosti uzeti iz važećeg NCVVO ispitnog kataloga, ne pogađati). Simulacija prolazi dijelove redom, bez povratka. Rezultat jasno označava da Writing nije bodovan i prikazuje postotak samo za auto-ocjenjive dijelove, uz napomenu o udjelu Writinga u konačnoj ocjeni. Pragovi ocjena dobivaju oznaku "orijentacijski". |
| 3.4 | **Slušanje** | Kod: AudioPlayer prelazi s Google Drive iframea na `<audio>` element s izvorom iz Supabase Storage ili `public/audio/eng/`. Mapping `examKey → task → datoteka` u JSON-u, ne u komponenti. **Blokirano na sadržaju**: audio datoteke NCVVO-a treba nabaviti i uploadati; do tada fallback ostaje tekst uz jasnu oznaku. |

### Status 3.1 (implementirano)

- Novi `lib/engleski-simulator/cloudSync.js`: čiste funkcije `buildCloudBlob` / `parseCloudBlob` / `shouldHydrateFromCloud` / `mergeUserData` / `toSimProgressPayload` + tanki async omotači (`loadEngCloudState`, `saveEngCloudState`, `saveEngSimResult`) s lazy `import()` Supabase modula.
- `EngleskiSimulator.js`: na mountu s prijavljenim korisnikom hidrira iz `discere_sim_state` (`subject='eng'`) ako je cloud noviji od `eng_synced_at`; ako je cloud prazan a lokalno ima povijest, migrira localStorage stanje u cloud. Debounce (1500 ms) sprema `engleski_simulator_user` + `disc_eng_bookmarks` na svaku promjenu `userData` i na promjenu bookmarka u `ExamPlayScreenu` i `BookmarksScreenu` (prop `onBookmarkChange`); brisanje bookmarka se ne sinkronizira (merge je unija).
- Svaki pravi ispit (`/^(vis_)?\d{4}_/`) upisuje red u `sim_progress` sa `subject='eng'` i razinom `visa→A` / `osnovna→B`; virtualne sesije (virtual/filter/errors/bookmarks/daily) se preskaču.
- Neprijavljeni korisnici rade isključivo na localStorageu — nema nijednog Supabase poziva bez korisnika. Paywall nije dirani.
- Zaštita od race-a: `useAuth()` prvo vrati `user=null`, pa tek naknadno pravog korisnika. Zato svaka promjena `user` sinkrono postavlja `_hydrated.current = false` i otkazuje zakazani upload; spremanje je dopušteno samo kroz `shouldCloudSave(user, _hydrated.current)`, a efekt spremanja se nakon završene hidracije ponovno pokreće preko okidača `hydrateRev`. Time staro lokalno stanje ne može pregaziti svježije cloud stanje.
- Testovi: `__tests__/engleski-simulator/cloud-sync.test.js` (39 testova) pokriva sve čiste funkcije. `app/dashboard/page.js` već ima `eng` u `SUBJECT_LABELS`, pa dashboard label ne treba promjenu.
- Ostaje: RLS/migracije za `discere_sim_state` i `sim_progress` moraju biti primijenjene na produkciji (moduli tiho degradiraju na localStorage ako tablica ne postoji); sync konflikt između dva uređaja rješava se po `_savedAt` (last-write-wins uz merge povijesti).

### Status 3.2 (implementirano)

- Novi generator `scripts/gen-eng-exams-json.mjs` (`node scripts/gen-eng-exams-json.mjs`) iz `lib/engleski-simulator/exams.js` (izvor istine, sadržajno nedirnut) piše tri datoteke u `lib/data/engleski-simulator/`: `exams-osnovna.json` (35 ispita), `exams-visa.json` (35) i novi `exams-index.json` — lagani indeks svih 70 ispita (`key, year, season, label, razina, hasListening, hasReading, qCount`, bez pitanja, ~10 KB). Skripta je idempotentna (bajt-identičan izlaz za isti `exams.js`).
- `lib/engleski-simulator/examsLoader.js` prepisan u loader po razini: `getExamsIndex()` (statički import indeksa), `loadRazina(razina)` s dva eksplicitna dinamička importa (`exams-visa.json` / `exams-osnovna.json`, jer turbopack/webpack za code-splitting traže statički poznatu putanju), dedup istovremenih poziva + keš po razini, `loadExamByKey(key)` (razina iz `vis_` prefiksa ili indeksa), `loadAllRazine()`, `getLoadedSync()` (stabilan identitet spojene mape). `createExamsLoader(importer)` prima injektirani importer radi testiranja. Stari `lib/engleski-simulator/loader.js` i njegov test su obrisani (logiku dedupa preuzeo je novi loader).
- `EngleskiSimulator.js` više ne uvozi `exams.js`: drži state `examsMap` (učitane razine) + `extraExams`, a `ensureExams(razine, then)` / `ensureAllExams(then)` učitaju što treba pa tek onda navigiraju (dok traje, `renderScreen` vraća `ScreenLoader`). Odabir ispita učitava samo njegovu razinu; virtualni ispit, filter, greške, bookmarki, dnevni izazov, analytics, compare, PDF, vocab i browse prije ulaska pozovu `loadAllRazine()`.
- Home radi isključivo iz indeksa (`examsIndex` prop, `qCount` umjesto `ex.qs.length`); `ModeSelect` dobiva `examsMap={examLookup}` nakon što je razina učitana. Ekrani `AnalyticsPanelFull`, `CompareScreen`, `PDFReportScreen`, `TopicFilterScreen`, `VocabScreen` više ne uvoze `EXAMS` — koriste `examsMap` prop s `getLoadedSync()` kao fallback (roditelj zajamči učitanost).
- Odgovori (`sol`, `exp`) svjesno ostaju na klijentu kao i prije (trenutna povratna informacija pri vježbanju; paywall ne renderira zaključana pitanja). `/api/exams/[razina]` i `/api/exams/check` nisu mijenjani, ali rade nad svježe generiranim JSON-ima (prijašnji su bili zastarjeli — drugačiji `sol` od `exams.js`).
- Testovi: `__tests__/engleski-simulator/exams-json.test.js` (JSON-i i indeks usklađeni s `EXAMS` — ključevi, redoslijed, broj pitanja, `sol` i cijelo pitanje po `JSON.stringify`, 70 zapisa indeksa s ispravnim `qCount`) i `__tests__/engleski-simulator/examsLoader.test.js` (dedup, keširanje, razina iz ključa, propagacija greške + retry). Suite: 16 datoteka / 390 testova zeleno, eslint 0 grešaka.
- Sve navigacije na ekrane koji trebaju obje razine idu kroz `ensureAllExams(...)` (uključujući `Results` → Filter/Statistike i `Stats` → Filter/Greške/PDF), a uz to postoji i sigurnosna mreža: `FULL_EXAMS_SCREENS` popis + `useEffect` koji dovuče razine ako je neki put preskočio `ensureAllExams`, pri čemu `renderScreen` dotad vraća `ScreenLoader`. Na `results` se druga razina dovlači u pozadini (bez loadera). Analitici se `examsMap` injektira kroz `AnalyticsPanelBound` jer `ResultsScreen`/`StatsScreen` taj prop ne prosljeđuju.
- `next build` nije dovršen u ovoj radnoj kopiji: turbopack puca prije kompilacije (`TurbopackInternalError: Invalid distDirRoot: ".next"`) zbog Dropbox putanje s razmacima i zagradama — greška je okolinska, ne ovisi o ovoj izmjeni. Dokaz da ispiti nisu u početnom chunku: `grep -rn "engleski-simulator/exams'" components/engleski-simulator app/discere/engleski` → 0 pogodaka, a jedini statički JSON import je indeks (~10 KB); velika dva JSON-a dolaze samo kroz `import()` u `examsLoader.js`. Veličinu chunka `/discere/engleski/simulator` treba izmjeriti u fazi 4 na okolini gdje build prolazi.

### Status 3.3 (implementirano)

- Novi `lib/engleski-simulator/examStructure.js`: `EXAM_STRUCTURE` (viša 70/75/35 min, ponder 1/3 po cjelini; osnovna 75 min zajednički blok Čitanje+Pisanje s udjelima 40/30 % + 30 min Slušanje), `structureFor` (`mixed`/nepoznato → osnovna), `getExamBlocks` (blokovi s `qIdx` po `section`, bez praznih blokova), `totalMinutes`, `scoringUnits`, `sectionScores` i `weightedEstimate`. Sve su čiste funkcije; `use_of_english` ide u blok Čitanja.
- `ExamPlayScreen` u simulaciji (`examMode`) ide blok po blok: prikazana pitanja, navigacijska mreža i ←/→ ograničeni su na tekući blok, traka blokova pokazuje završen/aktivan/predstoji, naslov je `Simulacija · Čitanje (1/3)`. Gumb je `Završi dio →` (confirm: nema povratka) do zadnjeg bloka, zatim `Predaj ispit`. Istek timera bloka daje toast `Vrijeme za <label> je isteklo` i automatski prelazi dalje, a na zadnjem bloku predaje ispit. Vježbanje ostaje slobodno; vježbanje s timerom koristi `totalMinutes(exam)` (180/105/75 min) umjesto fiksnih 90.
- Timer po cjelini rješen je remountom: novi `BlockTimer` s `key={'block_' + blockIdx}` zove `useTimer`, pa se `s`/`expired`/`warned` resetiraju bez setState-a u efektu (React Compiler). `useTimer` API nije mijenjan — samo dokumentiran (postojeći `useTimer.test.js` ostaje nedirnut). Pozicija unutar bloka je izvedena (`curIdx`) pa i ispit bez čitanja (2010_ljeto) startava na prvom pitanju svog bloka, a mjerenje vremena po pitanju preseljeno je iz `startedAtRef` + `Date.now()` u renderu u cleanup efekta na `curQid` (React Compiler zabranjuje nečiste pozive tijekom rendera).
- `finish()` uz postojeća polja vraća `sectionScores` i `weighted`; `pct` u povijesti ostaje udio točnih auto-ocjenjivih pitanja radi kompatibilnosti sa statistikama i cloud syncom. `ResultsScreen` prikazuje karticu „Po ispitnim cjelinama“ (točno/ukupno, % i udio, Pisanje kao „nije bodovano (ručno ocjenjivanje, udio X %)“) i red „Ponderirana procjena (bez pisanja): Y %“ — računa se iz `exam` + `answers` pa radi i za stare zapise. `ModeSelect` više ne piše 90 min nego stvarno trajanje i popis cjelina s minutama.
- Paywall (`SimulatorPreviewGate` dobiva globalni indeks pitanja i ukupan broj), bookmarki, `AudioPlayer` i `ContextPanel` nisu dirani.
- Testovi: novi `__tests__/engleski-simulator/exam-structure.test.js` (25 testova: blokovi za višu/osnovnu/stari `use_of_english`/2010_zima/2010_ljeto/`mixed`, trajanja 180/105/75/30, `sectionScores` i `weightedEstimate` na sintetičkim ispitima — viša 65 %, osnovna 57 %). Suite: 17 datoteka / 415 testova zeleno, eslint 0 grešaka.

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
- Audio (3.4): kod spreman, čekaju se datoteke po konvenciji iz `public/audio/eng/README.md`.
- Perzistencija (3.1): migracija localStorage → Supabase pri prvoj prijavi; localStorage ostaje cache za neprijavljene.
- Git: grana `fix/engleski-simulator`, jedan commit po fazi, bez worktreea.
- Opseg prvog kruga: faze 0–2, zatim pauza za pregled prije faze 3.
- Pragovi ocjena: ostaju 85/70/55/40, u UI-ju označeni kao orijentacijski (dodano u zadatak 2.3).

## Status faze 4 — review i popravci

Završni review (Opus 5) nad cijelim diffom faza 1–3 potvrdio je 15 nalaza; svi su popravljeni u ovoj grani (`fix/engleski-simulator`). Redom:

| # | Težina | Nalaz | Popravak |
|---|---|---|---|
| F1 | high | localStorage ključevi (`engleski_simulator_user`, `disc_eng_bookmarks`, `eng_synced_at`) nisu po korisniku, a odjava ih ne briše → nakon prebacivanja računa u istom tabu tuđe lokalno stanje se migrira/mergea u cloud novog korisnika. | Novi ključ `eng_cloud_uid` + čista funkcija `resolveLocalOwnership(storedUid, userId) → 'same' / 'foreign' / 'unclaimed'` u `cloudSync.js`. Kod `'foreign'` hidracija NE migrira i NE mergea: `userData` se resetira na `validateUserData(null)`, `disc_eng_bookmarks` i `eng_synced_at` se brišu, a stanje se uzima isključivo iz clouda (ili se kreće prazno). `'unclaimed'` (prva prijava na uređaju ikad) zadržava staro ponašanje s migracijom. Nakon uspješne hidracije/migracije zapisuje se uid. |
| F2 | high | `loadSimState` na grešku vraća `{}`, pa se neuspjelo čitanje clouda tretiralo kao prazan cloud i lokalno stanje je moglo pregaziti cloud. | `lib/discere-sim-state.ts` aditivno dobiva `loadSimStateStrict(subject) → { ok, state }` odnosno `{ ok: false, error, missingSchema }` i `saveSimStateStrict(state, subject) → { ok }` (postojeće funkcije nedirnute jer ih dijeli hrvatski simulator). `loadEngCloudState` vraća `{ ok, blob, missingSchema }`, `saveEngCloudState` vraća `boolean`. Hidracija kod `ok === false` ne migrira, ne otvara spremanje i tiho zakaže jedan retry za 15 s (čisti se u cleanupu); kod `missingSchema` se ponaša kao neprijavljen (localStorage only, bez retryja). Cloud stanje s `userData` ali bez valjanog `_savedAt` (`savedAt === 0`) tretira se kao novije (hidracija s mergeom) da se ne pregazi. |
| F3 | medium | `eng_synced_at` se zapisivao prije uspjeha uploada. | I u debounce spremanju i u migraciji `eng_synced_at` se zapisuje tek kad `saveEngCloudState` vrati `true`; pri neuspjehu ostaje stara vrijednost. |
| F4 | medium | `mergeUserData` bez limita i s gubitkom pokušaja. | (a) `mergeUserData` vraća `validateUserData(merged)` pa vrijede limiti (history 1000, errorTracker 2000, bookmarks 500). (b) Zapis povijesti dobiva `at: Date.now()`; `historyKey` koristi `at` kad postoji (`examKey` + `at`), inače stari ključ, a za zapise bez `at` merge radi multiset brojanje (max broja pojavljivanja lokalno/cloud) pa se dva ista pokušaja istog dana ne gube. (c) `localStorage.setItem` za `userData` je u `try/catch`. |
| F5 | medium | `DailyChallengeScreen` je za slovo odgovora koristio lokalni `'ABCDE'.indexOf(...)`. | Koristi `LL.indexOf` iz `constants.js`. |
| F6 | medium | Dnevni izazov je nakon `onDone` vodio na `results` tuđeg/nepostojećeg ispita (TypeError bez odabranog ispita); `case 'results'` je navigirao tijekom rendera. | `onExamDone(result, { navigateTo = 'results' })`; `case 'daily'` zove `onExamDone(result, { navigateTo: 'home' })` jer dnevni izazov ima vlastiti prikaz rezultata. `ResultsScreen` ima ranu zaštitu `if (!exam` ili `exam.qs` nije niz `→ return null`, a `case 'results'` umjesto `navigate('home')` u renderu prikazuje fallback karticu s gumbom `← Natrag`. |
| F7 | medium | Upozorenje timera bez naziva cjeline; zvuk upozorenja bio je `wrong`. | `onTimerWarn` dodaje `' za ' + block.label` kad blok postoji; novi tip zvuka `'warn'` (kratki neutralni dvostruki ton 660 Hz) koristi se za toastove. `warnMessage` dobiva hrvatski plural preko `minuteWord` (2–4 osim 12–14 → `minute`). |
| F8 | medium | Napomena o ocjeni duplicirana i netočna. | `GRADE_NOTE` (`Orijentacijska ocjena — NCVVO određuje pragove za svaki rok.`) i `GRADE_NOTE_WRITING` (` Pisanje nije bodovano.`) u `constants.js`; `ResultsScreen` dodaje drugi dio samo kad ispit ima ručno ocjenjivanu cjelinu, `DailyChallengeScreen` prikazuje samo prvu rečenicu. |
| F9 | medium | Kartica „Po ispitnim cjelinama“ prikazivala se i za virtualne sesije, a objašnjenje pondera bilo je hardkodirano po razini. | Novi `isRealExamKey(key)` (izvezen iz `cloudSync.js`, koristi ga i `toSimProgressPayload`) uvjetuje prikaz kartice; tekst pondera se generira iz `scoringUnits(exam.razina)` filtrirano na cjeline koje se u ispitu stvarno pojavljuju. |
| F10 | medium | `DAILY_TARGETS` / `DAILY_COUNT` živjeli su u `DailyChallengeScreen`, pa ih je `HomeScreen` uvlačio uvozom cijelog ekrana. | Premješteni u `lib/engleski-simulator/constants.js`; `HomeScreen` i `DailyChallengeScreen` uvoze odande, `HomeScreen` više ne uvozi `DailyChallengeScreen`. |
| F11 | medium | Neuspjelo učitavanje razine ispita nije davalo povratnu informaciju. | Novi state `examsError` (`{ message, retry }`): `ensureExams` i sigurnosna mreža ga postavljaju u `.catch`, a `renderScreen` prikazuje karticu `Učitavanje ispita nije uspjelo.` s gumbima `Pokušaj ponovno` i `← Natrag` (čisti error). |
| F12 | low | Traka ispitnih cjelina i timer bez semantike za čitače ekrana. | Traka je `role="list"` / `role="listitem"`, aktivna cjelina nosi `aria-current="step"` i tekstualni marker `▶ `; `BlockTimer` span dobiva `role="timer"` i `aria-label` `Preostalo vrijeme — <cjelina>`. |
| F13 | low | Debounce cloud save gubio se pri unmountu. | Poseban efekt s praznim ovisnostima (deklariran prije efekta spremanja, pa mu cleanup na unmountu ide prvi) flusha zakazano spremanje na unmountu i na `pagehide`; debounce pri promjeni ovisnosti ostaje netaknut. |
| F14 | low | `case 'virtual_exam'` renderirao je `ExamPlayScreen` bez `userAccess` i `isPro`. | Prosljeđuju se kao u `case 'exam'`. Dnevni izazov svjesno ostaje bez `SimulatorPreviewGate` (besplatan dnevni sadržaj za korisnika). |
| F15 | medium | `BookmarksScreen` je brisao bookmarke bez obavijesti roditelju, pa cloud debounce nije startao. | Novi prop `onBookmarkChange` (bump `bookmarkRev` iz `EngleskiSimulator`). |

Testovi komponente (dopuna): `ExamPlayScreen` je dobio named export i renderira se u `__tests__/engleski-simulator/exam-play-blocks.test.js` (blokovska navigacija, istek timera, upozorenje s nazivom cjeline) i u `exam-finish.test.js` (`sectionScores` + `weighted`), a hidracija clouda je izvučena u hook `lib/engleski-simulator/useEngCloudSync.js` i pokrivena u `cloud-hydration.test.js` — 19 datoteka / 450 testova zeleno.

### Poznata ograničenja nakon faze 4

- **Brisanje bookmarka se ne propagira na druge uređaje**: cloud merge bookmarka je unija (`{ ...localBm, ...cloudBm }` i `dedupeByJson` za `userData.bookmarks`), pa obrisani bookmark koji još postoji u cloudu ili na drugom uređaju vraća se pri sljedećoj hidraciji. Za pravo brisanje trebaju tombstonei (`deletedAt` po ključu) — nije u dosegu ove faze.
- Konflikt između dva uređaja i dalje je last-write-wins po `_savedAt`, uz merge povijesti (sada s `at` identitetom).
- `missingSchema` (tablica `discere_sim_state` bez migracije) znači tihu degradaciju na localStorage — korisnik ne dobiva poruku, što je namjerno.

## Status faze 5

- **P1 Audio**: `AudioPlayer` (`components/SimSharedUI.js`) više ne gradi Google Drive iframe. Putanje dolaze iz `lib/data/engleski-simulator/audio-map.json` (`{examKey: {taskNum: {first, repeat, legacyDriveId}}}`), popunjen za `vis_2015_ljeto`; render je pravi `<audio controls preload="none">` s `onError` fallbackom na tekstualnu poruku (+ link na Drive ako `legacyDriveId` postoji). Konvencija imenovanja u `public/audio/eng/README.md`.
- **P2 Paywall na dnevnom izazovu**: `DailyChallengeScreen` sad omata pitanje u `SimulatorPreviewGate` (isti ugovor kao `ExamPlayScreen`, `from="eng-daily"`); `userAccess` se prosljeđuje iz `EngleskiSimulator.js` (`case 'daily'`). Ovime je F14 iz faze 4 („dnevni izazov svjesno bez paywalla“) svjesno napušten — dnevni izazov sad prati isto pravilo pristupa kao ostatak simulatora.
- **P3 Tombstonei za brisanje bookmarka**: novi ključ `disc_eng_bookmarks_deleted` + čista funkcija `mergeBookmarks(localBm, localDel, cloudBm, cloudDel)` u `cloudSync.js` (bookmark preživi samo ako nema tombstone noviji od njegova `addedAt`; tombstonei se spajaju s max vremenom i čiste nakon 90 dana). `toggleBookmark` (EngleskiSimulator.js) i `removeBookmark` (ErrorAndBookmarkScreens.js) pišu tombstone pri brisanju i `addedAt` pri dodavanju; `useEngCloudSync` hidracija i spremanje koriste `mergeBookmarks` umjesto unije. Time je limitacija „brisanje bookmarka se ne propagira“ iz statusa faze 4 riješena.
- **P4 Integracijski smoke test**: `__tests__/engleski-simulator/simulator-smoke.test.js` renderira pravi `EngleskiSimulator` (mockani `useAuth`, `next/navigation`, `examsLoader`, `fetch`) i prati puni tok Home → ModeSelect → Vježbanje → Provjeri → Rezultati → `localStorage` → unmount/remount → `✓ NN%` badge na Homeu.
- **P5**: uklonjen neiskorišten `eslint-disable-next-line no-console` u `analytics.js` (pravilo `no-console` nije uključeno u projektu).
