# Matematika simulator — plan sanacije i poboljšanja

Datum: 2026-09-12. Temelji se na analizi koda u `components/simulator/MatEngineCore.tsx`,
`components/discere/mat/MatFullSimulator.jsx`, `content/simulator/mat/**`, `lib/discere-*.ts`,
`proxy.js` i API ruta pod `app/api/`.

## 0. Modeli i podjela rada

| Uloga | Model | Zašto |
|---|---|---|
| Orkestracija, pregled rezultata, odluke | Fable 5.1 (ova sesija) | Ne kodira, samo vodi workflow i čita izvještaje. |
| Engine, bridge, tier logika, grading, lazy-load | **Opus 5** (`opus`) | Generirana datoteka od 10 800 linija, dugačke linije, puno skrivenih ovisnosti. Treba najjači model za kod. |
| Vizualna usporedba slika s PDF-om | **Opus 5** (`opus`) | Vision + prosudba "je li identično". Sonnet radi prvi prolaz, Opus sudi sporne. |
| Skripte nad podacima, testovi, normalizacija tema, boje u SVG-u, download PDF-ova, render | **Sonnet 5** (`sonnet`) | Mehanički posao s jasnim pravilima. Brže i jeftinije. |
| Haiku 4.5 | ne koristiti | Premalo pouzdan za ovaj kod. |

Pravilo: svaka izmjena enginea prolazi adversarijalni pregled (dva neovisna Opus agenta koji pokušavaju oboriti izmjenu). Merge radi čovjek nakon zelenih testova i builda.

Radi se u worktreeu: `C:\Users\Daniel\worktrees\Maturiraj\<grana>` (nikad in-place, Dropbox).

## 1. Faza P0 — ono što korisnik vidi kao pokvareno

| # | Problem | Rješenje | Datoteke | Model |
|---|---|---|---|---|
| 1.1 | Svi AI pozivi idu na `/api/ai-profesor` koji ne postoji (6 mjesta). | Preusmjeriti na `/api/ai-simulator`. Ne slati `model` iz klijenta. Obraditi 429/503 s porukom korisniku. | `MatEngineCore.tsx` (2522, 3077, 3134, 3993, 5406, 8071) | Opus |
| 1.2 | Tier na tri mjesta, tri različita pravila (`plan_type` u proxyju, `profiles.tier` u engineu, `requireStandardOrPro` u API-ju). | Jedan izvor istine: helper `getEffectiveTier(profile)` u `lib/billing/`, koriste ga proxy, `useAuth`, API. Engine dobiva `isPro` i `isPaid` u `DISCERE_CONFIG`. | `proxy.js`, `lib/hooks/useAuth.js`, `lib/billing/*`, `MatFullSimulator.jsx`, engine linija 52 | Opus |
| 1.3 | Hardkodirana cijena "19,99 €/mj" i "Otključaj uz Pro" u engineu. | Cijenu i naziv plana slati kroz `DISCERE_CONFIG` iz jednog config modula. | engine 4256, 5515, 8113 | Sonnet |
| 1.4 | Zaključani ispiti pišu "Uskoro". | Prikazati lokot + CTA koji šalje `DISCERE_UPGRADE`. | engine 3572–3585 | Sonnet |
| 1.5 | `sim_progress` dobiva prazne `answers` i `errorTags`, bez `duration_sec`. | History zapis u engineu proširiti s `answers` mapom i `errorTags`; `flushAttempt` ih proslijediti. | engine (Sim.onDone / history push), `MatFullSimulator.jsx:289` | Opus |
| 1.6 | Slike 2025: id `"37,1"` (zarez) a registar `"37.1"` (točka) → 11 slika se nikad ne prikaže. | Normalizirati id-eve na točku u podacima ili u engineu pri gradnji ključa. | `exams/2025_*.mjs`, engine 5334, 5664 | Sonnet |
| 1.7 | 21 zadatak označen `img:true` bez SVG-a (2010–2011 A, 2013_ljeto_B); 28 SVG-ova bez oznake pa se nikad ne prikažu (2024_jesen_A: 7, 2014_ljeto_A: 6, 2013_ljeto_A: 5, 2018_jesen_B: 5, 2024_ljeto_A: 4, 2010_jesen_B: 1). Popis: `docs/mat-figure-audit.json` (generira `node scripts/mat-audit-figures.mjs --json docs/mat-figure-audit.json`). | Za orphan: dodati `img:true`. Za missing: nacrtati SVG prema PDF-u (Faza 6) ili maknuti oznaku ako slika nije nužna. | `exams/2010_*`, `2011_*`, `2013_ljeto_*`, `2014_ljeto_A`, `2018_jesen_B`, `2024_*` | Sonnet, crtanje Opus |

## 2. Faza — performanse

| # | Problem | Rješenje | Model |
|---|---|---|---|
| 2.1 | Na ulasku se učita svih 70 ispita (7 MB), engine 747 KB, nerdamer 436 KB. | Engine dobije `loadExam(key)` async API umjesto gotovog `EXAMS`. Home prikazuje popis iz `index.json`. Ispit se učita na klik. Cross-exam modovi (vježba, SRS, adaptivni) učitavaju postupno s progress barom, po godini ili po razini. | Opus |
| 2.2 | nerdamer se učita uvijek. | Učitati tek kad korisnik otvori kalkulator, solver ili provjeru. | Sonnet |
| 2.3 | Google fontovi s vanjskog CDN-a. | Self-host u `public/fonts`, `font-display: swap`. | Sonnet |
| 2.4 | Rate limit u memoriji procesa. | Prebaciti na Supabase tablicu ili Upstash; isti helper za sve AI rute. | Sonnet |

## 3. Faza — kvaliteta podataka i ocjenjivanja

| # | Problem | Rješenje | Model |
|---|---|---|---|
| 3.1 | 55 kodova tema, aliasi (geom/geo/ge, trig/trg, fun/func/fn/fnk/funk/funkc, kompl/kompleks/komp, vek/vekt, seq/niz/nizovi) i tipfeleri (ne, je, st, om). | Skripta `scripts/mat-normalize-topics.mjs` s kanonskom tablicom (≈15 tema). Idempotentna, s dry-run. TOPIC_LABELS u engineu svesti na kanon. | Sonnet |
| 3.2 | Kratki odgovori: čisto tekstualna usporedba, zarez se mijenja samo prvi put, "x = 3" ≠ "3", "3/4" ≠ "0,75", tolerancija 0,01 apsolutna. | Novi `lib/mat-grading.ts`: normalizacija (ukloni "x =", razmake, jedinice, zamijeni sve zareze), razlomak ↔ decimalni, relativna tolerancija, simbolička ekvivalencija kroz nerdamer kad je učitan. Engine `chk`/`nrm`/`numEq` delegiraju na njega. | Opus |
| 3.3 | Nema testova za matematiku. | `__tests__/mat-simulator/`: grading nad svim `sol.ans` + `sol.alt` iz stvarnih podataka (svaki alt mora proći), integritet registra slika, kanon tema, index.json ↔ datoteke. Dodati u `vitest.config.js`. | Sonnet |
| 3.4 | Alt liste nejednake (2–9 varijanti). | Nakon 3.2 alt liste postaju rezerva; skripta prijavi zadatke gdje normalizator ne prihvaća `sol.ans` u barem dva zapisa. | Sonnet |

## 4. Faza — boje i vidljivost slika (bez PDF-a)

Nalaz: SVG-ovi miješaju CSS varijable (`var(--text)`, `var(--muted)`) i hardkodirane boje iz tamne teme.
U svijetloj temi (pozadina `#f4f5f7`) osi nacrtane s `#e2e8f0` (78 pojava, 8 ispita) i pomoćne linije s `#94a3b8` su gotovo nevidljive.
Pozadine `#060910`, `#0a0f1a`, `#0a1525`, `#1e3a5f` su tamne bez obzira na temu.

| # | Rješenje | Model |
|---|---|---|
| 4.1 | Skripta zamijeni hardkodirane boje po tablici: `#e2e8f0`→`var(--text)`, `#94a3b8`→`var(--muted)`, tamne pozadine→`var(--s2)`/`var(--bg)`, `#e9b446`→`var(--gold)`, `#4a90d9`→`var(--blue)`, `#e05252`→`var(--red)`, `#50c878`→`var(--green)`. | Sonnet |
| 4.2 | Render svih 585 SVG-ova u PNG u svijetloj i tamnoj temi (`react-dom/server` + `sharp`), spremiti u `_audit/render/`. | Sonnet |
| 4.3 | Vision prolaz: je li svaki element vidljiv u obje teme, jesu li oznake čitljive. Sporne slike na Opus. | Sonnet → Opus |

## 5. Faza — održivost

| # | Rješenje | Model |
|---|---|---|
| 5.1 | Odluka: `MatEngineCore.tsx` postaje izvor (prototip `_prototypes/mat-simulator.html` nije u repou). Obrisati `build-engine.mjs` ili vratiti prototip i dokumentirati build. Preporuka: engine je izvor. | čovjek |
| 5.2 | Izbaciti `QS_*_META` audit bilješke iz klijentskog bundlea (premjestiti u `content/simulator/mat/audit/`). | Sonnet |
| 5.3 | Razbiti engine na module po ekranima (Sim, Home, Stats, SRS, Viz…) bez promjene ponašanja; Prettier formatirati; skinuti `@ts-nocheck` postupno. | Opus |
| 5.4 | Obrisati `content/discere/mat.html` (8,8 MB, nereferenciran). Dovršiti ili maknuti placeholder `app/api/discere/ai-analysis`. | Sonnet |

## 6. Faza (zadnja) — usporedba slika s originalnim NCVVO ispitima

Cilj: svaka slika u simulatoru mora biti geometrijski i sadržajno identična slici iz PDF-a ispita (iste točke, oznake, vrijednosti, orijentacija), u bojama koje rade u obje teme.

1. **Download** (Sonnet): za svaki od 70 ispita pronaći PDF na ncvvo.hr (arhiva "Ispiti i rješenja"), spremiti u `_audit/pdf/<key>.pdf` i zapisati URL u `_audit/pdf/index.json`. Prijaviti ispite koji nedostaju, ne nagađati.
2. **Render** (Sonnet): PDF stranice u PNG (`playwright` + pdf.js ili `pymupdf`), locirati zadatak po broju i izrezati sliku. SVG iz 4.2.
3. **Usporedba** (Sonnet prvi prolaz, Opus sudi): za svaki par vratiti `{identical, differences[], colorsOk, severity}`. Kriterij "identično": isti oblici, isti brojevi i slova, isti odnosi, isti smjer osi. Dopušteno: boje, debljina linija, font.
4. **Adversarijalna provjera** (Opus): za svaku sliku označenu kao različitu drugi agent pokuša oboriti nalaz.
5. **Popravak** (Opus, worktree): ispraviti SVG prema PDF-u; nacrtati 32 slike koje nedostaju.
6. **Izvještaj**: `docs/MAT_FIGURE_AUDIT.md` s tablicom po ispitu.

Pokreće se tek kad su faze 1–5 spojene, jer 1.6 i 1.7 mijenjaju registar slika.

## 7. Redoslijed i workflowi

```
Faza 1 + 3.1 + 4.1 + 5.2 + 5.4   → workflow  mat-sim-fixes      (grane: mat-sim/engine, mat-sim/data, mat-sim/platform)
Faza 2 + 3.2 + 3.3 + 3.4         → workflow  mat-sim-fixes  (drugi krug, args.round = 2)
Faza 4.2 + 4.3                   → workflow  mat-sim-figure-audit  (args.mode = "colors")
Faza 5.3                         → ručno vođeno, Opus, jedan ekran po PR-u
Faza 6                           → workflow  mat-sim-figure-audit  (args.mode = "pdf")
```

Skripte: `.claude/workflows/mat-sim-fixes.js`, `.claude/workflows/mat-sim-figure-audit.js`.
Pokretanje: "run workflow mat-sim-fixes" odnosno "run workflow mat-sim-figure-audit" uz args.

Definicija gotovog za svaku fazu: `npm test` zelen, `npm run build` prolazi, ručni prolaz kroz jedan ispit A i jedan B u svijetloj i tamnoj temi na mobilnoj širini.

## Status 2026-09-20

1. **Faza 1 (P0)** — gotovo, spojeno u `main`.
2. **Faza 2 (performanse)** — gotovo, spojeno u `main`.
3. **Faza 3 (kvaliteta podataka i ocjenjivanja)** — gotovo, spojeno u `main`.
4. **Faza 4 (boje i vidljivost slika)** — gotovo, spojeno u `main`.
5. **Faza 5 (održivost)** — 5.1, 5.2 i 5.4 gotovi i spojeni; 5.3 (razbijanje enginea po ekranima) ostaje ručno vođen posao, u tijeku, nije bila u workflowima.
6. **Faza 6 (usporedba slika s NCVVO originalima)** — gotovo za 70/70 ispita s preuzetim originalom (581 slika uspoređeno, 189 odstupanja popravljeno na 56 grana, sve spojeno; izvještaj u `docs/MAT_FIGURE_AUDIT.md`). Ovim workflowom (mat-sim/cleanup) pospremljene su privremene skripte agenata i dodan `_audit/` u `.gitignore`. Otvoreno: 21 zadatak označen `img:true` bez SVG-a (2010 i 2011 A razina, 2013_ljeto_B) — jedan kratki dodatni prolaz; i 4 slike za ručnu odluku iz `docs/MAT_FIGURE_AUDIT.md` (2018_jesen_B 28.1–28.3, 2020_ljeto_B 23.1 — simulator namjerno prikazuje popunjeni predložak, sadržajno nije krivo).
