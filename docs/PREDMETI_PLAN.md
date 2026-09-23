# Plan: svi ostali predmeti državne mature na Maturiraj

## Kontekst

Aplikacija ima 4 aktivna simulatora (hrv, mat, eng, soc) na tri legacy enginea i jedan generički "canonical" engine (`components/discere/common/**`, `lib/discere/**`) koji poslužuje samo biologiju, samo u dev okolini. Registar (`lib/discere/subject-registry.js`) poznaje 24 predmeta; 19 je prazno. Skripte postoje za hrv, mat, eng, kem (1 modul) i soc (1 poglavlje). ADR-001 (ključevi ispita na serveru) je proveden samo za engleski; canonical engine ga krši (bio ispiti s `answer` poljem se uvoze u klijent, a sigurnosni sken ta polja ne broji).

Cilj: 19 predmeta (+ bio) u produkciji na jednom engineu, sa stvarnim NCVVO ispitima i službenim ključevima, razradom koju piše i provjerava AI, jednim dizajn sustavom i jednom matricom tiera; taksonomija pitanja postavljena tako da se kasnije bez ponovnog označavanja poveže sa skriptama.

Način rada: sve kroz Workflow tool (Opus 5 kod/razrada/refuteri, Sonnet 5 mehanika), worktreeovi pod `C:\Users\Daniel\worktrees\Maturiraj`, build i dev server samo u referentnom `mat-sim-round4`. Obrazac: `.claude/workflows/mat-sim-fixes.js` (grupe po disjunktnim datotekama, 2 refutera po grupi, merge agent s `npm test` + `npm run build`).

## Odluke vlasnika (2026-09-23)

| Tema | Odluka |
|---|---|
| Redoslijed | Val 1: fiz, kem, bio, pig, psi, pov, geo, inf. Val 2: nje, tal, spn, fra. Val 3: lat, grk, fil, log, lik, gla, eti, vje. Unutar predmeta najnovije godine prve. |
| Izvor pitanja | Stvarni NCVVO ispiti + službena rješenja, sve godine od 2010, oba roka (+ zimski 2010–2012), jezici A i B. `answer.source: official`. Bez ključa → najviše `draft`. |
| Engine | Jedan canonical engine, prije predmeta podignut na razinu mat (Faza 0). Legacy hrv/mat/soc: samo ADR-001 migracija. |
| Tieri (svi predmeti, i legacy) | Free: ispitni mod na svim ispitima, vježbanje prva 3, ocjena/XP/percentil/po cjelinama. Standard (`starter`): cijelo vježbanje, razrada, po temama, SRS, greške, oznake, browse, nastavak sesije. Pro: sav AI, dnevni izazov, adaptivni. Eng AI objašnjenje ide u Pro odmah. |
| Razrada | Opus piše; Opus refuter svako pitanje (effort medium za MC, high za otvorene/numeričke/ručne). Nakon prva dva predmeta vala 1 vlasnik vidi stvarni trošak po ispitu. |
| Ručni zadaci | Rubrika + model odgovora + samoprocjena za sve; AI ocjena po rubrici u Pro. |
| Izgled | Jedan dizajn sustav (`.dsc-root`), predmet mijenja akcent, simbol, motiv. |
| Skripte | Taksonomija (topic + chapterSlug) sada; skripte i "Uči ovo poglavlje" kasnije, zasebna faza. |
| Audio | Službeni NCVVO zapis ako je dostupan, TTS kao rezerva s oznakom "sintetički glas". |
| Prava | Nastaviti bez upita NCVVO-u, kao za mat/eng/hrv. Tuđe medije (fotografije, karte, umjetnine, glazba) ne hostati bez jasne osnove: zadatak ostaje s `mediaUnavailable` + link na PDF. |
| Lansiranje | Po predmetu, isti prag za sve valove: ≥ 5 ispita `verified`, baseline 0, Playwright prolaz, audit slika → `status: active`, `freeExam: true`. |

## Ciljna arhitektura (sažetak)

- **Podaci po predmetu**: `content/discere/<id>/` = autorski izvor istine (`index.json`, `topics.json`, `taxonomy.json`, `exams/<key>.mjs` s ključem i razradom, `qa/*.json`, `source-manifest/*.json`) → generator `scripts/gen-discere-exams.mjs` → javni `content/<id>/exams/<key>.json` + tajni `lib/data/<id>/secrets/<key>.json` + `summary.json` (meta bez sadržaja, kao mat). Izvor se nikad ne uvozi iz klijenta.
- **Isporuka**: postojeće rute `GET /api/sim/[subject]/exam/[examKey]` i `POST /api/sim/[subject]/grade` + generički adapter `lib/exam-secrets/subjects/canonical.js` (`createCanonicalAdapter(id)`, registriran za svaki `runtime: 'canonical'` iz registra). Ocjenjivanje serverski kroz `lib/discere/scoring.js`.
- **Klijent**: `lib/discere/{exam-client, grade-client, session-store, cloud-sync, entitlements, modes, srs, stats, daily, adaptive, taxonomy, theme}.js` (portovi iz eng/mat s `subjectId`), `components/discere/common/{SubjectShell, SubjectApp, ExamShell, ResultsScreen, ExamReview, explanation/*, screens/*}`, jedna CSS datoteka `discere-canonical.css`.
- **Pravilo**: klijentski prekidač je `keys: none|partial|full` iz rute, nikad prisutnost `sol`/`answer` u podacima.

## Faza 0: platforma (blokira sve predmete)

Grupe po disjunktnim datotekama; svaka grupa = 1 implementacijski agent + 2 refutera + popravak. Merge agent spaja redom, testovi + `security:secrets` + `discere:validate` nakon svake grane, build nakon vala.

### Val A: temelji (paralelno; A6 nakon A1)

| Grupa | Model | Datoteke | Zadatak | Gotovo kad |
|---|---|---|---|---|
| A1 shema v2 | Opus | `lib/discere/exam-schema.js`, `types.js`, `__tests__/discere/exam-schema*.test.js` | `SCHEMA_VERSION 2` + `upgradeExam` (v1 ostaje valjan); nova polja: `chapterSlug`, `catalogOutcomes[]`, `solution{steps[{txt,note,final}],why[],warn,commonMistakes[],modelAnswer,source,reviewedBy,reviewedAt}` (isti oblik kao mat), `answer.numeric.relativeTolerance`, `fill.wordBank[]`/`fill.mode:'letter'`, `stimulus.code{language,text}`, `stimulus.source{title,author,year}`, `stimulus.mediaUnavailable{reason,officialRef}`, `essay.responseMode:'translation'|'drawing'`, `assets[].source:'official'|'maturiraj'|'tts'` + `rights`, `meta.blocks[{id,label,minutes,questionIds}]` (jezici), `meta.qa.refuter`; `validateExam(exam,{public:true})` pada ako ijedno pitanje (rekurzivno) ima `answer/solution/explanation/transcript`; `options.topics` iz `taxonomy.json` pretvara `UNKNOWN_TOPIC` u error | testovi zeleni, bio i dalje valjan |
| A2 secrets core | Opus | `lib/exam-secrets/**`, `app/api/sim/**`, `__tests__/security/exam-secret*.test.js`, `exam-secrets-routes.test.js`, `docs/ADR-001-ispitni-podaci.md` | `stripQuestion`/`mergeSecrets` **rekurzivni po `children`**; `subjects/canonical.js` (loadPublic fs + LRU, loadSecrets, allowedExamKeys→null, score preko `scoring.js` → `{scores, cor, total, pct, grade, bodovi, xpGain, topicBreakdown, progressRow{result_version:2,...}, review{manual}}`, rekurzivna `publicFields` allowlista); `registry.js` registrira sve canonical predmete + stubove mat/hrv/soc; `free-policy.js` broji **listove** (`freeLeafAllowance`), `manualReviewFields` (rubrika + model odgovora nakon predaje, za sve tiere; amandman ADR §5a); grade ruta prihvaća `progressRow` i vraća `review`; `exam-secret-scan.mjs` STRONG keys + `answer`, `explanation`, `solution`, `rubricDetails`, `officialText`, `transcript` | eng regresija 0, isolation test s novim popisom, fixture `passage_group`: točno 3 lista s ključem |
| A3 entitlements | Opus | `lib/discere/entitlements.js`, `modes.js`, `grade-scale.js`, `components/discere/paywall/paywallHelpers.js`, `__tests__/discere/entitlements.test.js` | `FEATURES` (feature→minTier) + `SCREEN_FEATURE` + `MODES` tablica; `canUse`, `upgradeTargetFor` (zamjena za `getUpgradeTarget` koji uvijek vraća 'pro'); jedna konstanta `FREE_PRACTICE_LIMIT=3` (re-export u `paywallCopy.FREE_LIMIT`, `free-policy.js`; `ChapterWrapper` 5 → 3); `buildUserAccess` vraća `starter`; `freeExam` i `freePracticeExams` samo u registru | matrica kao snapshot test; `discere-paywall-links.test.js` zelen |
| A4 tema/CSS | Sonnet (refuter Opus) | `components/discere/common/discere-canonical.css`, `SubjectShell.jsx`, `lib/discere/theme.js`, `SubjectExamHub.jsx`, `*.module.css` | tokeni kao mat-engine.css, `.dsc-root[data-theme=light]`, `data-cb`/`data-dys`, `--accent` iz `subjectThemeStyle()`, klase umjesto inline, mobilni 390 px (sticky timer, donji drawer navigatora, ≥44 px mete) | Playwright snapshot light/dark, 0 inline stilova u dodijeljenim datotekama |
| A5 dijeljene lib | Sonnet | `lib/discere/{exam-client,grade-client,session-store,cloud-sync,srs,stats,daily,adaptive,taxonomy}.js`, `hooks/useDiscereCloudSync.js`, testovi | portovi iz `lib/engleski-simulator/{examsLoader,gradeClient,resumeSession,cloudSync,useEngCloudSync}.js` i mat `screens/{srs,stats,today,practice}.tsx`, parametrizirani `subjectId`; snapshot `disc_<id>_active_session` s apsolutnim `endsAt` | testovi ≥ eng ekvivalenti |
| A6 generator | Sonnet | `scripts/gen-discere-exams.mjs`, `scripts/discere-validate.mjs`, `package.json`, `content/bio/**`, `lib/data/bio/**`, `content/discere/bio/{summary.json,topics.json,loaders.js}`, `__tests__/discere/generated-drift.test.js`, `scripts/security/exam-secret-baseline.json` | uzor `scripts/gen-eng-exams-json.mjs`: javni JSON + tajni JSON + summary + index refresh, `validateExam({public:true})`, broj listova == broj tajnih unosa; `loaders.js` bez `examLoaders`; `npm run discere:gen`; baseline samo pada | drift test, `security:secrets` zelen, `content/bio/exams/*.json` = 0 |

### Val B: engine (nakon A)

| Grupa | Model | Datoteke | Zadatak |
|---|---|---|---|
| B1 sesija | Opus | `SubjectApp.jsx` (ex GenericSubjectApp), `ExamShell.jsx`, `ResultsScreen.jsx`, `hooks/useExamSession.js`, `lib/discere/{content-loader,progress}.js`, `app/discere/[subject]/page.jsx`, testovi | fetch loader kroz rutu, sesija/timer (blokovi iz `meta.blocks` kao eng `examStructure`)/autosave/resume, predaja rutom s `attemptId` + 429 odbrojavanje + lokalni fallback samo kad `keys==='full'`, modovi exam/practice/practice_timed, free preview gate nakon 3 lista, "Provjeri" po pitanju u vježbanju, klijent upisuje `sim_progress` samo kad `serverSaved===false` |
| B2 razrada | Opus | `explanation/{StepReveal,WhyPanel,RubricSelfAssess,AiExplain}.jsx`, `ExamReview.jsx`, testovi | koraci progresivno (port mat `tools/question.tsx`), zašto/upozorenje/česte greške, rubrika sa samoprocjenom (port mat `MaturaRubric` + hrv essay), model odgovora, oznaka izvora "Razradu pripremio Maturiraj uz AI"; free vidi `LockedResultsBlock` ali rubriku/model iz `review.manual` |
| B3 Standard ekrani | Opus | `screens/{Home,Exams,Stats,Errors,Bookmarks,Browse,Srs}Screen.jsx`, testovi | Home po mat uzoru (resume kartica, XP/streak, prsten spremnosti iz `summary.json`, kartice modova s lokotima, akordeon ispita); ekrani nad bankom rade iz `summary.json`, puni ispiti samo za izabrane (`mapWithLimit(6)`), free ih ne montira (0 dohvata, test kao `home-no-prefetch`) |
| B4 Pro/AI | Opus | `screens/{Daily,Adaptive}Screen.jsx`, `app/api/ai-simulator/route.js` (mode `explain` + `subject` kontekst), `app/api/discere/essay-grade/route.js` (nova; rubrika s servera), brisanje `app/api/discere/ask-ai`, `lib/ai-usage/ledger.js` (`discere-explain`, `discere-grade`, `discere-analysis`), `lib/discere/ai-prompts.js` (okvir po grupi predmeta), `__tests__/security/ai-*.test.js` | `requirePro` za sve AI; `/api/agents/*` dobiva `requirePro` + ledger ili se isključuje iz builda; eng `explain` → Pro |
| B5 QA | Sonnet | `scripts/qa/discere-secrets-visual.mjs` (port `eng-secrets-visual.mjs`, `--subject`), proširenje `hrv-sim-mock-supabase.mjs` | free exam `keys:none`, nijedno tijelo bez `answer/solution`, Standard `keys:full`, free practice točno 3 lista, `.revlist`=0 za free, 429 na dvostruku predaju, F5 čuva nacrt |

### Val C: legacy ADR-001 (nakon A2, neovisno o B)

| Grupa | Model | Sažetak |
|---|---|---|
| C1 mat | Opus (+Sonnet) | `scripts/mat-split-figures.mjs` (SVG funkcije + `qImages` → `content/simulator/mat/figures/<key>.mjs`, tekstualno po markerima `export const qs = [` / `export const qImages = {`), `scripts/gen-mat-exams-json.mjs` (javni `content/mat/exams/*.json`, tajni `lib/data/mat/secrets/*.json` s `sol/steps/why/warn/exp`), `lib/exam-secrets/subjects/mat.js` (score = `lib/mat-grading.ts`; nerdamer preko `node:vm` iz `public/sim/nerdamer.js`, paritet mjeri `mat-grading-report.mjs` server vs klijent), `MatFullSimulator.jsx` loader → ruta + figures import, `useExamSession.tsx` finish → grade ruta, `SimResults` iz `scores`; `exam-loaders.ts` na figures |
| C2 hrv | Opus | `scripts/gen-hrv-exams-json.mjs` iz `app/discere/hrvatski/simulator/data/exams/index.js` (`ctx` dedupliciran u `texts`), eseji javno/rubrika tajno, `subjects/hrv.js` (score = `utils/qcore.js chk`), klijent na `lib/discere/{exam-client,grade-client}`, ekrani nad bankom po PAID_SCREENS obrascu, `hrvatskiSimulatorData.js` bez `EXAMS` |
| C3 soc | Opus | `content/discere/soc.html` = izvor, `public/sim/sociologija.html` = build artefakt (prvo diff dvije kopije); `scripts/gen-soc-exams-json.mjs` (izrez `<script>` bloka podataka, `node:vm`), `scripts/soc-build-html.mjs` (ubacuje loader koji zove `/api/sim/soc/exam` same-origin, `finish` zove grade, `DISCERE_RESULT` s `serverSaved`), `lib/soc-simulator/scoring.js`, `subjects/soc.js`; `prebuild` korak |

### Val D: merge
Redoslijed A1→A6→A2→A3→A5→A4→B1→B2→B3→B4→B5→C1,C2,C3. Procjena: 14 implementacijskih + ~28 refutera + 1 merge ≈ 44 agentska zadatka. Kritični put A1→A6→B1→B2/B3→D.

## Faza 1: pipeline sadržaja (alati + workflowi)

Radna arhiva izvan gita: `C:\Users\Daniel\worktrees\Maturiraj\_discere-archive\<id>\`. Grana `discere/<id>`, worktree `discere-<id>`, jedan ispit = jedan commit. Svaki stage piše `stage-<n>.json` s `inputSha256`; ponovni prolaz preskače nepromijenjene stageove (idempotencija neovisna o Workflow cacheu).

| Korak | Alat / model | Ulaz → izlaz |
|---|---|---|
| a) katalog izvora | workflow `discere-catalog.js`, Sonnet po 8 godina, WebFetch + curl ≤1 req/s | stranice roka `ncvvo.hr/drzavna-matura-YYYY-YYYY-{prvi,drugi}-rok/`, arhiva, Wayback → `content/discere/<id>/source-catalog.json` {examUrl, keyUrl, audioUrl, sha256, status found/missing/ambiguous}. Naslovnica potvrđuje predmet/godinu/rok/razinu. Nedostajući se ne rekonstruiraju. |
| b) preuzimanje | `scripts/discere-fetch.mjs` (Sonnet) | PDF ispita, rješenja, knjižica slušanja, audio ZIP → arhiva + `source-manifest/<key>.json` |
| c) render | `scripts/discere-render-pages.py` (pymupdf 150/216 dpi), zajednički `discere-pdf-common.py` iz `mat-crop-pdf-figures.py` | `pages/<key>/pNN.png`, `text.json`, `words.json`, mapa zadatak→stranica |
| d) izvlačenje strukture | Opus po ~10 stranica (PNG + tekstualni dump), `EXTRACT_SCHEMA`; strukturalni refuter Opus (nedostaje zadatak? bodovi = naslovnica? opcije potpune?) | `sections`, `tasks[{task, type, prompt, options, points, pdfPage, figure, table, unclear[]}]`, `passages` |
| d2) slike | `scripts/discere-crop-figures.py` (bbox slike, 216 dpi, lossless webp) + Opus alt tekst (bez odgovora) | `public/discere/<id>/<key>/qNN.webp`, `qa/<key>-assets.json` |
| e) službeni ključ | Opus nad rješenjima, `KEY_SCHEMA`; spajanje `scripts/discere-assemble.mjs` | `answer` po tipu, `officialText`, rubrike (`rubricDetails`, `basisYear`), errata; nesklad broja zadataka/bodova → `manual` |
| f) taksonomija | workflow `discere-taxonomy.js` jednom po predmetu: Opus iz NCVVO ispitnog kataloga (URL+SHA iz `subject-inventory.json`), drugi Opus provjerava pokrivenost; vlasnik odobrava | `content/discere/<id>/taxonomy.json` {modules[{slug,title,chapters[{slug,title,outcomes}]}], topics{code:{label,chapterSlug,aliases}}}; grubi `topic` (6–12) + fini `chapterSlug`; stariji zadaci izvan kataloga → `chapterSlug:'izvan-kataloga'` |
| g) razrada | workflow `discere-explain.js`, Opus, batch 5 pitanja | `solution{steps 2–8 × ≤280 zn, why 2–5, commonMistakes 1–3, modelAnswer ≤900}`; zadnji korak `final` = doslovni službeni odgovor; u istom pozivu `topic`/`chapterSlug`; za `short` i `numeric` varijante `accepted` |
| h) refuter po pitanju | Opus, neovisni kontekst, dobiva PNG ispita i ključa (ne JSON), `effort` medium (MC) / high (ostalo) | provjerava doslovnost, ključ = slika ključa, bodovi/scoring, tip, razrada završava ključem i ne proturječi, `accepted` ne prihvaća krivo, alt ne odaje odgovor, taksonomija; `fix` → popravljač (≤2 kruga) → `manual` u `qa/<key>.json.manualDecisions`; 2 % pitanja dobiva i drugi refuter druge perspektive |
| i) audit slika | workflow `discere-figure-audit.js` (kao mat faza 6 bez SVG-a) | webp vs izrez zadatka iz PDF-a, Sonnet usporedba, Opus sudac, ponovni izrez |
| j) validacija + ledger | `discere:validate`, `discere-asset-integrity`, `discere-normalize-topics.mjs`, `scripts/discere-qa-ledger.mjs` (jedini piše status) | `qa/<key>.json` {checks, manualDecisions, stages}; status draft → structural-pass → verified (→ published samo vlasnik); promjena SHA izvora vraća na draft |
| k) ADR razdvajanje | `gen-discere-exams.mjs` kao zadnji stage svakog ispita | javni/tajni JSON, summary, baseline bez porasta |
| l) audio (jezici, gla) | workflow `discere-audio.js`: ZIP → mono 48 kbps → mapiranje snimka→zadatak (Opus) → transkript (Opus/Whisper, tajno polje) → GitHub Release `discere-audio-<id>-v1` → `lib/data/discere/<id>/audio-map.json`; `scripts/discere-audio-integrity.mjs` (HEAD + sha) | `audio_group.assets[{type:'audio', src, source:'official'|'tts'}]`, `stimulus.listening{maxPlays, durationSec}`; TTS fallback `synthetic:true` s oznakom u UI-ju |
| m) test po predmetu | `__tests__/discere/<slug>-exams.test.js` parametriziran nad `index.json` (uzor `biologija-2026.test.js`) | validateExam, assets = manifest, totali iz manifesta, svi listovi `official` + `officialText`, ključ prihvaća sam sebe, kanarinci iz `qa/<key>.json.canaries`, javni JSON bez tajnih polja, topic/chapterSlug u taksonomiji |

Orkestrator `discere-subject-run.js` (args `{subject, exams?, from?}`) zove pod-workflowe `discere-extract-exam.js` → `discere-explain.js` → `discere-figure-audit.js` → publish, preskače ispite koje ledger označi gotovima. Bez `Date.now()` u skriptama (vrijeme kroz `args.now`). Commit po ispitu (`content(fiz): 2024_ljeto verified`), bez pusha iz workflowa; PR po predmetu ili po 10–15 ispita (webp).

## Faza 2: predmeti po valovima (specifičnosti)

| Grupa | Predmeti | Tipovi iz sheme | Posebnosti (renderer) |
|---|---|---|---|
| Prirodni | fiz, kem, bio | mc, short+numeric (jedinica, rel. tolerancija), fill (kem koeficijenti), essay (izvod/obrazloženje, rubrika postupak+rezultat), media_response, passage_group | kalkulator + formule (port mat `tools/{calc,formulas}`), `stimulus.constants`, kem `lib/discere/chemical-answer.js` (H2O/H₂O, koeficijenti, →), periodni sustav kao statični asset; **generic** |
| Društveni A | pov, geo | mc, matching, ordering (kronologija), true_false, media_response (karte, izvori), short, essay | `stimulus.source` za izvore; fotografije trećih → `mediaUnavailable`; **generic** |
| Društveni B | psi, pig | mc, matching, short, essay | `accepted` varijante + refuter; **generic** |
| Argumentacijski | fil, log, eti, vje | mc, short, essay s rubrikom (fil esej 30–40 % bodova), matching; log: fill u tablicama istinitosti (`gaps[].cell`), `answer.logic` normalizacija simbola | `modelAnswer` + `rubricDetails`; **generic** |
| Informatika | inf | mc, short, fill (izlaz programa), essay (algoritam, ručno), true_false | `stimulus.code` monospace; brojevni sustavi kao `short` s `accepted`; **generic** |
| Strani jezici | nje, fra, tal, spn | passage_group (mc, matching naslova, fill/cloze s `wordBank`, `mode:'letter'`), audio_group, essay sastavak s `rubricDetails`; A/B | `meta.blocks` s timerima (eng `examStructure`), audio pipeline, transkript tajno; **language** |
| Klasični | lat (A/B), grk | passage_group, short (oblici), matching, essay `responseMode:'translation'` (rubrika po rečenici) | grk: NFD normalizacija dijakritika; **language** |
| Umjetnički | lik, gla | media_response, mc, matching, short, essay (`responseMode:'drawing'` = uputa + model + samoprocjena) | glazbeni ulomci i reprodukcije bez licence → `mediaUnavailable`; **media** |

Količine (procjena): ~835 ispita (jednorazinski 32–35 po predmetu, A/B 64–70), ~40 000 listova (65 % automatski ocjenjivih), 85–110 agent poziva po ispitu (~75 Opus), ~80 000 ukupno. Val 1 ≈ 280 ispita. Nakon fiz i kem: pregled stvarnog troška i kvalitete, pa odluka o tempu.

## Faza 3: lansiranje po predmetu

Checklist (`content/discere/<id>/launch.json`, generira `discere-qa-ledger.mjs`): `taxonomy.json` odobren; `source-catalog.json` bez `ambiguous`, `missing` s razlogom; ≥ 5 ispita `verified`; tajni store za sve ispite + baseline unos 0; `qa/*-assets.json` (alt, rights); Playwright `discere-secrets-visual.mjs --subject <id>` zelen u sva tri tiera; `<slug>-exams.test.js` zelen.

Promjene pri lansiranju: registar `status:'active', freeExam:true`; `subject-inventory.json` capabilities `published`; adapter već registriran; `next.config.mjs` `outputFileTracingIncludes` pokriva `content/<id>/exams/*.json` i `lib/data/<id>/secrets/**`. UI popisi predmeta koji se danas ručno nabrajaju (derivirati iz registra): `app/discere/page.js` fusnota, `app/dashboard/page.js` `SUBJECT_LABELS`, `lib/data/subjects.js`, `app/plan-ucenja/lib/planGenerator.js`, `components/landing/Hero.jsx`, `app/skripte/data/subjects.js`, `app/checklist/data.js`, `lib/kalkulatorData.js`; `generate-study-plan` prima `subject.id` iz registra. Marketinška tablica tiera: jedna komponenta iz `entitlements.js` (koristi ju `HrvatskiViewer.jsx` i `/pro`).

Oznaka izvora u UI-ju: uvodna kartica ispita i rezultati "Izvor: NCVVO, Državna matura <godina>, <rok>, <predmet> (<razina>)" s linkom na `meta.source.examUrl`; razrada "pripremio Maturiraj uz AI, nije službeni materijal NCVVO-a"; sintetički audio i `mediaUnavailable` s vlastitom oznakom.

## Faza 4 (kasnije, zasebno): skripte i most

Priprema koja se radi sada: `taxonomy.json` po predmetu, `chapterSlug` na svakom pitanju, `lib/discere/chapter-links.js` (`chapterUrl(id, slug, {embed})` = `/skripte/<id>/<slug>#embed`, generalizacija `lektiraSkripta.js`), `SkriptaModal.jsx` seli u `components/discere/common/`. Kasnije: `scripts/gen-skripta.mjs` skeleton faza čita `taxonomy.json` i nameće slugove poglavlja; Rezultati/Razrada prikazuju "Uči ovo poglavlje" kad poglavlje postoji; hrv dobiva vlastiti `taxonomy.json` (danas `getChapter()` switch u `lib/game-mode/hrv-registry.ts`).

## Dizajn sustav (sažetak specifikacije)

- Tokeni iz `mat-engine.css` + `--accent/--accent-soft/--accent-border/--content-font` iz `subject-themes.js`; dark zadano, `.dsc-root[data-theme=light]`; `data-cb`, `data-dys`; tipkovnica (port mat `useSimKeyboard`).
- Home → Odabir moda (Ispitni mod "besplatno", Vježbanje "prva 3 besplatno") → Ispit (zaglavlje: izlaz, naziv, blok, timer bloka + ukupni, oznaka; navigator desno ≥1024 / donji drawer; panel pitanja sa stimulusom; alati po `workspace`) → Rezultati (prsten, bodovi, ocjena, XP; po cjelinama; po temama 🔒; percentil; pregled → Razrada 🔒 Standard; AI 🔒 Pro; CTA vježbaj greške / podijeli / novi ispit) → Razrada (tvoj odgovor → ključ → koraci progresivno → zašto → česte greške → model + rubrika + samoprocjena; Pro: AI objasni / AI ocijeni).
- Prikaz po tipu: mc radio kartice (tipke 1–4); multi checkbox s brojačem; short jedno polje (+ jedinica/tolerancija nakon predaje); fill inline polja; matching dropdown (mobitel) ili drag; ordering drag + ↑↓; true_false redak po tvrdnji; essay textarea + brojač riječi + bilježnica; passage_group sticky tekst / tab na mobitelu; audio_group `ListeningPlayer` s pravilom ponavljanja, transkript samo u razradi; media_response slika/audio + djeca.

## AI po predmetu

Ruta `app/api/ai-simulator/route.js` s `mode: explain|grade|analysis`, tijelo `{subject, examKey, questionId, answer}`; server sam učitava pitanje + tajna polja kroz `lib/exam-secrets` (klijent nikad ne šalje ključ ni rubriku). `requirePro`, ledger feature `discere-explain|grade|analysis`, rate limit 8 s, `discere-grade` 20/dan, `discere-analysis` idempotentno po `attemptId`. Model `claude-sonnet-4-6` (streaming; `grade` temperature 0, JSON `{criteria[{id,points,rationale}],total,feedback}`, zbroj ≤ max). Prompt okvir po grupi u `lib/discere/ai-prompts.js` (prirodni: formule/jedinice/SI, inf kod; jezici: gramatika na hrvatskom + ispravak sastavka po rubrici; klasični: prijevod po rečenici + morfologija; društveni: teza–dokaz–zaključak; umjetnički: opis djela). Kontekst: pitanje, opcije, ključ, razrada, tema, korisnikov odgovor; nikad cijeli ispit.

## Modeli i workflow politika

| Posao | Model |
|---|---|
| Engine, adapteri, rute, migracije legacy, refuteri koda | Opus 5 |
| Izvlačenje pitanja, ključ, razrada, refuter po pitanju, alt tekstovi, sudac slika, taksonomija | Opus 5 |
| Portovi lib-ova, CSS, generatori, fetch/render/izrez, validacija, ledger, Playwright, usporedba slika prvi prolaz | Sonnet 5 |
| Orkestracija, čitanje izvještaja, merge odluke, push | glavna sesija (Fable), ne kodira |

Pravila: agenti rade samo u svom worktreeu, referentni `mat-sim-round4` samo za build/dev server; commit poruke bez BOM-a; `Date.now()` zabranjen u workflow skriptama; nastavak nakon limita kroz resume + ledger.

## Verifikacija

- Faza 0: `npm test` (postojećih 99 datoteka + novi), `npm run security:secrets` (baseline samo pada; `content/<id>/exams/*.json` = 0), `npm run discere:validate`, `npm run build` u `mat-sim-round4`, Playwright `discere-secrets-visual.mjs --subject bio` (free/Standard/Pro), regresijski prolazi `eng-secrets-visual.mjs`, `hrv-sim-visual.mjs`, novi `soc-secrets-visual.mjs`, mat `results-gating`/`free-tier-leaks`; paritet ocjene mat server vs klijent (`mat-grading-report.mjs` 0 razlika ili dokumentirano).
- Po ispitu: statusi u `meta.qa`, `index.json.qaStatus` i ledgeru jednaki; refuter 100 %; audit slika 100 %; `<slug>-exams.test.js`.
- Po predmetu: launch checklist + Playwright + build; nakon lansiranja ručni prolaz kroz jedan ispit u pregledniku u obje teme na 390 px.

## Rizici

Regresija bio (drift test + `all-content` + Playwright); curenje ključeva kroz `children`/transkript (rekurzivni strip, `{public:true}` validacija, sken s novim ključevima, SLOJ C); tier bypass (server iz baze, matrica snapshot); razilaženje ocjene mat (nerdamer na serveru, paritet report); grupni zadaci i `partial` (test s fixtureom); dvije kopije soc monolita (diff prvi korak); veličina bundlea (test < 250 KB statike po predmetu, 0 dohvata ispita na Homeu); trošak refutera (mjerenje nakon fiz+kem); NCVVO PDF-ovi koji nedostaju (status `missing`, bez rekonstrukcije).

## Ostaje vlasniku tijekom izvedbe

Odobrenje `taxonomy.json` po predmetu (jednokratno); `manualDecisions` (dvosmisleni ključevi, errata, nečitljivi PDF-ovi); `missing` ispiti (čekati/odustati); hostanje audija po predmetu; `published` status; odluka o tempu nakon fiz+kem.

## Kritične datoteke

- `lib/exam-secrets/index.js` (rekurzivni strip/merge — preduvjet), `lib/exam-secrets/registry.js`, `app/api/sim/[subject]/{exam/[examKey],grade}/route.js`, `lib/exam-secrets/{free-policy,grade-policy}.js`
- `lib/discere/exam-schema.js` (v2), `lib/discere/{scoring,content-loader,subject-registry,subject-themes}.js`
- `components/discere/common/{GenericSubjectApp→SubjectApp,ExamShell,ExamReview,SubjectExamHub}.jsx`, `question-renderers/**`
- Uzori za port: `lib/engleski-simulator/{examsLoader,gradeClient,resumeSession,cloudSync,useEngCloudSync,examStructure}.js`, `components/simulator/mat/{tools/question.tsx,screens/*.tsx,app/home.tsx,core/exams.ts}`, `scripts/gen-eng-exams-json.mjs`, `scripts/mat-crop-pdf-figures.py`, `.claude/workflows/mat-sim-figure-audit.js`, `scripts/qa/eng-secrets-visual.mjs`, `content/discere/bio/qa/2026_ljeto.json`, `__tests__/discere/biologija-2026.test.js`
- Legacy: `content/simulator/mat/exams/*.mjs`, `components/discere/mat/MatFullSimulator.jsx`, `app/discere/hrvatski/simulator/data/exams/index.js`, `utils/qcore.js`, `content/discere/soc.html`, `public/sim/sociologija.html`
