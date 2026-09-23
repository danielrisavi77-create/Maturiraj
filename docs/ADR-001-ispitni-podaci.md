# ADR-001 — Ispitni podaci: što smije u klijentski bundle

- **Status:** prihvaćeno
- **Datum:** 2026-09-21
- **Vrijedi za:** sve simulatore i ispitne module (engleski, hrvatski, matematika, sociologija, biologija te svaki budući predmet)
- **Provodi se:** `scripts/security/exam-secret-scan.mjs`, `__tests__/security/exam-secret-isolation.test.js`, `scripts/security/exam-secret-baseline.json`

## Kontekst

Ispitni sadržaj i ispitni ključ dosad su živjeli u istoj strukturi. Zbog toga je rješenje
putovalo u klijentski bundle zajedno s pitanjem: tko otvori DevTools ili dohvati JSON iz
`public/`, ima cijeli ključ. Javna ruta `GET /api/exams/[razina]` pokušavala je to popraviti
skidanjem polja `sol` i `exp` u letu, ali je i dalje posluživala ispite **bez prijave** i s
`Cache-Control: public, max-age=3600`. Ruta je bila mrtva (nijedan pozivatelj u kodu) pa je
uklonjena. Uz nju je stajala i `POST /api/exams/check`, koja je bila predložak poslužiteljskog
ocjenjivanja, ali s vlastitim `checkQ` umjesto dijeljenog `chk` (usporedba `mat` parova bez
`.trim()` → lažni netočni; implementiran tip `ms` kojeg u podacima nema) i bez ijednog
ograničenja broja predaja. Obje su uklonjene u Fazi 1 — `app/api/exams/` više ne postoji.

Odluka niže vrijedi unaprijed: svaki novi predmet gradi se tako da ključ nikad ne uđe u
klijentski graf uvoza, a ne da se naknadno filtrira.

## Odluka

### 1. Što smije u klijentski bundle

Samo ono što je potrebno za **rješavanje** zadatka:

`id`, `type`, `q`, kontekst/ulomak, `opts`, `items`/`rights`, `points`, `topic`, slike
(putanje i `alt`), redoslijed pitanja i zadataka.

### 2. Što NIKAD ne smije u klijentski bundle

`sol` (uključujući `cl`, `ans`, `alt`, `pairs`, `ex`, `rubric`, `solFormula`, `svgFn`),
`exp`, `why`, `steps`, `graphRef`, `ocjenaKljuc`, `distraktori` — **i svako novo polje koje
otkriva odgovor**.

> Ako dvojiš je li polje tajno, polje **jest** tajno. Pravilo se rješava dodavanjem polja u
> tajni store, ne raspravom.

### 3. Gdje podaci žive

Novi podaci idu u **dvije** datoteke:

| Dio | Mjesto | Tko ga smije čitati |
| --- | --- | --- |
| Javni payload | `content/<predmet>/` | klijent i poslužitelj |
| Tajni store | `lib/data/<predmet>/secrets/` | isključivo `lib/exam-secrets` |

`lib/exam-secrets` je jedini modul koji dodiruje tajni store i počinje s
`import 'server-only'`. Svaki tajni modul nosi marker `@exam-secret` u prvih 500 bajtova
(obično u uvodnom komentaru) da ga automatska provjera prepozna.

Obje obitelji datoteka čitaju se `fs`-om, ne `import`-om: putanja je poznata tek u runtimeu
(70 ispita po predmetu), a statički uvoz bi ih uvukao u graf modula. Cijena je da ih Next
output tracing ne vidi, pa `next.config.mjs` ima `outputFileTracingIncludes` za
`./lib/data/*/secrets/**` i `./content/*/exams/**` — bez toga je prvi produkcijski poziv
ENOENT.

### 4. Rute

Svaki predmet koristi **iste** rute — bez ad-hoc varijanti po predmetu:

- `GET /api/sim/<predmet>/exam/<key>` — javni payload ispita
- `POST /api/sim/<predmet>/grade` — ocjenjivanje na poslužitelju

### 5. Pravila za rute koje vraćaju ključeve

- **401** bez prijave, bez iznimke.
- Tier se čita **isključivo iz baze** (`getUserTier` iz `lib/billing/subscriptions.js` +
  `normalizeTier` iz `lib/billing/getEffectiveTier.js`). Nikad iz tijela zahtjeva, query
  parametra, zaglavlja ili bridge/klijentskog stanja.
- Zaglavlja: `Cache-Control: private, no-store` **i** `Vary: Cookie`.
- Pokušaj korisnika **bez prava** na ključeve ocjenjuje **server**: odgovor sadrži rezultat,
  ne ključ. Klijent nikad ne dobije ključ da bi sam usporedio.

### 5a. Što rute doista rade (Faza 1, zajednička infrastruktura)

`GET /api/sim/<predmet>/exam/<key>?mode=exam|practice` vraća
`{ key, meta, texts, qs, keys }`, gdje `keys` **opisuje payload**, a ne zahtjev klijenta:

| `keys` | Kad | Što je u `qs` |
| --- | --- | --- |
| `full` | plaćeni tier, i to samo za ispite iz `allowedExamKeys` tog tiera | svako pitanje nosi ključ |
| `partial` | free **vježbanje** (prvih `FREE_LIMIT` pitanja tog ispita) | dio pitanja nosi ključ |
| `none` | free **ispitni mod** | nijedno pitanje nema ključ |

Javni payload se čisti **uvijek**, pa i kad ga adapter već isporučuje čistog; ključevi se
zatim **spajaju natrag** samo za pitanja koja na njih imaju pravo. Legitimni free izuzeci
žive isključivo u `lib/exam-secrets/free-policy.js`.

**Svjesna iznimka: free vježbanje pravog ispita.** `freeKeyAllowance` vraća `FREE_LIMIT`
(3) za `mode=practice`, a **0** za `mode=exam`. To je isti javni preview koji paywall ionako
pokazuje: u vježbanju free korisnik dalje od trećeg pitanja ne može ni doći
(`checkSimulatorAccess`, `freePractice`), pa bi mu bez ključa gumb „Provjeri“ i AnswerHelper
tiho ne radili ništa, a `previewScore` bi tvrdio „0 od 3 točno“ i kad su sva tri točna.
Cijena je 3 od ~43 pitanja po ispitu; dobitak je da besplatni preview uopće ima smisla.

Iznimka je izvediva **samo zato što je vezana uz pojedinačan dohvat** i drže je tri stvari:

1. skupni dohvat cijele banke ide s `mode=exam` (`BULK_MODE` u `examsLoader.js`), pa
   70 ispita × 3 ključa ne postoji ni kao slučajna posljedica;
2. svaki ekran koji traži cijelu banku za free je zaključan (`PAID_SCREENS`);
3. free korisnik ima **kvotu dohvata ispita**: `FREE_EXAM_FETCH_LIMIT` (30) na sat, mjesta u
   `ai_rate_limit` (`sim-exam-get:<predmet>:<mjesto>`). Bez nje bi ručnih 70 `curl` poziva
   dalo 210 punih rješenja u minuti. Plaćeni tier kvote nema — njegovi ekrani nad cijelom
   bankom rade 70 dohvata odjednom i to im je zadano ponašanje.

U ISPITNOM modu free korisnik i dalje ne dobiva ništa: ispit rješava naslijepo, a ocjenu
(uz točno/netočno po pitanju) daje ocjenjivačka ruta.

`POST /api/sim/<predmet>/grade` prima `{ examKey, answers, examMode, attemptId }` i vraća
`{ pct, grade, cor, total, bodovi, xpGain, scores }`, a plaćenom tieru i `topicBreakdown`.
Odluke vlasnika ugrađene u rutu:

- free **nakon predaje** dobiva točno/netočno po pitanju (`scores`), ali nikad
  `sol`/`exp`/`why`/`steps` — ruta ključeve ne vraća nikome;
- **ruta sama** upisuje `sim_progress`; klijentov rezultat se ne uzima na vjeru;
- dnevni budžet od **5** ocijenjenih predaja po (korisnik, ispit) vrijedi **samo za free**.
  Budžet je zaštita od oraclea, a oracle postoji samo za onoga tko ključ nema: plaćeni tier
  iste ključeve već drži u pregledniku (`keys: 'full'`), pa mu ruta ne otkriva ništa novo —
  budžet bi mu samo pojeo legitiman pokušaj i, gore, ostavio taj pokušaj bez retka u
  `sim_progress`;
- razmak od **60 s** (`checkRateLimit`, ključ `sim-grade:<predmet>:<examKey>`) vrijedi za
  **sve** tierove: on je zaštita od dvostruke predaje, ne od napada. Klijent na takav 429
  ne računa lokalno nego prikaže odbrojavanje i pošalje **isti** `attemptId`
  (`GRADE_AUTO_RETRY_MAX_SEC`), pa rezultat završi i u bazi, ne samo na ekranu;
- `attemptId` je **obavezan** i idempotentan: ponovljeni id vraća isti odgovor, ne upisuje
  novi redak i ne troši budžet.

**Gdje se budžet broji i zašto ne u `sim_progress`.** Mjesta budžeta su ključevi u
`public.ai_rate_limit` s prozorom od 24 h (`sim-grade-day:<predmet>:<examKey>:<mjesto>`),
dakle u tablici koju piše isključivo service-role. Brojanje redaka `sim_progress` imalo je
dvije rupe: redak nastaje tek nakon uspješnog `INSERT`-a, a ruta pad upisa namjerno prašta
(dovoljan je `durationSec` izvan raspona `int4` ili odgovor s NUL bajtom pa upis padne,
brojilo ostane na nuli i budžet se nikad ne potroši); i sam korisnik je po RLS-u smio
**brisati** svoje retke, pa je budžet resetirao upravo onaj od koga štiti. Uz to:
- ulaz se provjerava **prije** upisa (raspon `durationSec`, dubina i veličina `answers`,
  zabrana NUL bajta), a `answers`/`qTimes` se sužavaju na pitanja koja ispit doista ima;
- RLS za `sim_progress` sužen je na `select` + `insert`
  (`supabase/migrations/20260922010000_sim_progress_rls_insert_only.sql`);
- vježbanje smije potrošiti najviše `GRADE_PRACTICE_BUDGET` (3) od 5 mjesta — ostatak je
  rezerviran za ispitni mod, da pet predaja iz vježbanja ne ostavi korisnika koji je navečer
  odradio 90-minutnu simulaciju bez ijednog rezultata;
- idempotencija ne ovisi o pokrenutoj migraciji `attempt_id`: iznad nje stoji **otisak
  pokušaja** (`attemptId` + stabilan hash odgovora) kao ključ u `ai_rate_limit`, koji vrijedi
  kroz instance. Ponovljena predaja **istih** odgovora ne troši budžet i ne upisuje drugi
  redak — rezultat je čista funkcija (ispit, odgovori), pa ponavljanje ne otkriva nijedan novi
  bit. Budžet time zapravo broji **različite skupove odgovora**, što je točno ono što oracle
  napad troši, a legitiman korisnik ne;
- **redoslijed provjera je dio ugovora**: razmak ide PRIJE otiska. Predaja odbijena razmakom
  nije dovršen pokušaj (nije ocijenjena, nije upisana), pa joj se otisak ne smije zauzeti —
  inače bi klijentov ponovni pokušaj bio prepoznat kao ponavljanje i vratio ocjenu **bez
  retka** u `sim_progress`. Ovako ponovni pokušaj nakon isteka razmaka prolazi kao prvi.
  Predaja odbijena **budžetom** je druga priča: tamo ponovljeni otisak namjerno vraća rezultat
  bez upisa, jer je budžet doista potrošen.

**Gdje žive brojke.** `GRADE_MIN_INTERVAL_MS`, `GRADE_DAILY_BUDGET`, `GRADE_PRACTICE_BUDGET`,
`FREE_EXAM_FETCH_LIMIT` i `GRADE_AUTO_RETRY_MAX_SEC` su u `lib/exam-secrets/grade-policy.js`,
ne u datoteci rute: Next iz `app/**/route.js` prihvaća samo HTTP metode i poznate
konfiguracijske izvoze, pa je svaki dodatni `export` **greška builda**. Modul je namjerno
bez ijednog uvoza — brojke čita i klijent (odbrojavanje u `ExamPlayScreenu`), a uvoz
`lib/rate-limit` bi povukao service-role klijent u klijentski graf. Samo trošenje mjesta je
zato `consumeRateLimitSlots` u `lib/rate-limit.ts`.

**Iskreno o dosegu — što `scores` po pitanju stvarno košta.** Free korisnik nakon predaje
dobiva mapu `qid → true|false|null` (odluka vlasnika 1). To je 1 bit po pitanju, ne ključ,
ali je bočni kanal: tko svaki put pošalje isto slovo na sva pitanja, nakon *k* **različitih**
predaja zna ključ svakog pitanja s najviše *k+1* opcija. Za ispit s 3 ponuđena odgovora to je
2 predaje, dakle unutar dnevnog budžeta; za 4 opcije 3 predaje. Original dizajna je
pretpostavljao ~4×N poziva jer je free dobivao samo agregat — s per-question mapom napad je
desetak puta jeftiniji.

Odluka vlasnika je da se to prihvati: povratna informacija po pitanju je proizvodno vrijedna,
a `scores` ne nosi ni `sol` ni `exp` (obrazloženje, koje je glavnina vrijednosti, ostaje
nedostupno). Ono što napad **stvarno** košta jest otisak pokušaja: ponovljena predaja ISTIH
odgovora je besplatna i idempotentna, pa budžet od 5 zapravo broji **različite skupove
odgovora** — točno ono što napadač troši, a legitiman korisnik ne. Zaključak ostaje:
usporeno, ne spriječeno. Napadač s više računa i strpljenjem i dalje prolazi.

### 6. Baseline uz svaki novi predmet

Uz svaki novi predmet/ispit ide unos u `scripts/security/exam-secret-baseline.json` s
vrijednošću **0**. Baseline smije **samo padati**.

### 7. Regeneracijski lanci

Ako predmet ima regeneracijski lanac (`colocate-svg.mjs`, `build-engine.mjs`, sociološki
monolit `public/sim/sociologija.html`), razdvajanje javnog i tajnog dijela mora biti **korak
u tom lancu** — ne ručni zahvat nakon generiranja. Inače prva sljedeća regeneracija vrati
ključeve u javni payload.

### 8. Stanje po predmetima

| Predmet | Status | Javni payload | Tajni store |
| --- | --- | --- | --- |
| engleski (`eng`) | **migriran** (Faza 1) | `content/eng/exams/<examKey>.json` | `lib/data/eng/secrets/<examKey>.json` |
| hrvatski (`hrv`) | nije migriran | statički uvoz u `HrvatskiSimulator.jsx` | — |
| matematika (`mat`) | nije migriran | `content/simulator/mat/exams/*.mjs` (uz `qImages`) | — |
| sociologija (`soc`) | **migriran** (Faza 2) | `content/soc/exams/<examKey>.json` | `lib/data/soc/secrets/<examKey>.json` |

#### Sociologija — što se točno promijenilo

Sociologija nije modul nego JEDAN statički HTML (`public/sim/sociologija.html`, 1,06 MB) koji
se poslužuje iz `public/` bez ijedne provjere: 32 ispita, 1718 pitanja, 1715 `sol:` i 721
`exp:` bili su dohvatljivi običnim GET-om. Monolit je usto postojao u **dvije** kopije —
`content/discere/soc.html` nije imao nijednog čitatelja u kodu (samo `docs/` i baseline), bio
je stariji od one u `public/` (sadržavao je pitanja ispravljena u auditu) i **obrisan je**:
dvije kopije banke su dvostruko curenje i nejasan izvor istine.

`scripts/soc-split-solutions.mjs` acornom nalazi `const EXAMS={…}` i 32 `QS_*` niza u inline
scriptu, evaluira ih u `vm`-u i razdvaja na javni payload (`content/soc/exams/<key>.json`) i
tajni store (`lib/data/soc/secrets/<key>.json`), a u HTML-u ostavlja `let EXAMS={}` uz inline
`SOC_EXAM_META` (ključevi, godine, rokovi, trajanje, broj pitanja i MC pitanja — ništa od
toga ne otkriva rješenje, a Home ekran to treba prije prvog dohvata). Rez ide isključivo po
granicama izjava iz AST-a (balance-safe), skripta ima `--dry-run`, idempotentna je i na kraju
obavezno provjerava: broj ispita i pitanja nepromijenjen, nijedno pitanje u javnom payloadu
nema tajno polje ni na kojoj dubini, tajni store ima unos za svaki `qid`, HTML se i dalje
parsira. HTML je pao s 1 065 370 na 467 089 znakova.

`EXAM_CONTEXT` (kontekstni ulomci, 105 KB) ostaje inline: izvorni NCVVO materijal bez
ključeva. `qid` se normalizira u string — ocjenjivačka ruta zadržava samo odgovore čiji je id
string, pa bi brojčani id iz monolita tiho dao nula točnih. Za `ms` pitanja se emitira
izvedeni `nsel` (`sol.cls.length`), jer MSQ bezuvjetno ispisuje „Odaberi N odgovora“.

Ocjenjivanje je prijepis `chk`/`grade`/`calcXpGain` iz istog HTML-a u
`lib/sociologija/scoring.js` (HTML ih zadržava jer plaćeni tier ocjenjuje lokalno).
`__tests__/discere/soc-scoring-parity.test.js` izvlači referentne funkcije acornom ravno iz
isporučenog HTML-a i uspoređuje ih s modulom nad sva 32 ispita i 3 skupa odgovora — 5154
usporedbi po pitanju plus `cor/total/pct/ocjena` po ispitu. Poznata iznimka: 2018_jesen ima
tri `mc` pitanja (33_1, 34_1, 35_1) bez `sol` u izvoru; i modul i engine za njih vraćaju
`null`, a test ih nabraja poimence. Čuvar `if(!q||!q.sol) return null` u engineu nije
kozmetika: free korisnik u ispitnom modu dobiva SVA pitanja bez ključa, pa bi bez njega
prvo renderiranje ispita bilo TypeError.

`SOC_FREE_DEMO` (`2025_ljeto`, `2025_jesen`) preselio je iz
`app/discere/sociologija/SociologijaClient.jsx` u `lib/exam-secrets/free-policy.js`, pa ga
sada iz istog izvora čitaju i klijent (`DISCERE_CONFIG.allowed`) i poslužitelj
(`allowedExamKeys(tier, 'soc')`).

#### Sociologija — most: engine u iframeu nikad ne zove mrežu

Ostali predmeti su moduli i sami dohvaćaju svoj ispit. Sociologija je statički asset iz
`public/`, pa bi dohvat iz njega značio da o tome što se traži s poslužitelja odlučuje
datoteka koju svatko može otvoriti izravno. Zato mrežu drži **isključivo**
`app/discere/sociologija/SociologijaClient.jsx` (iza `PlanGate`-a), a engine s njim
razgovara postMessageom — isti most koji je već nosio `DISCERE_CONFIG`/`DISCERE_SAVE`:

| poruka | smjer | značenje |
| --- | --- | --- |
| `DISCERE_NEED_EXAM {key, mode}` | iframe → parent | daj mi ispit (`key:"*"` = cijela banka) |
| `DISCERE_EXAMS {key, exam}` | parent → iframe | envelope rute `GET /api/sim/soc/exam/<key>` |
| `DISCERE_EXAM_ERROR {key, mode, status, error}` | parent → iframe | dohvat nije uspio |
| `DISCERE_EXAMS_DONE {delivered, total}` | parent → iframe | kraj skupnog dohvata |
| `DISCERE_SUBMIT {examKey, answers, qTimes, examMode, attemptId, durationSec?}` | iframe → parent | predaja |
| `DISCERE_GRADE {attemptId, result}` | parent → iframe | odgovor `POST /api/sim/soc/grade` |
| `DISCERE_GRADE_ERROR {attemptId, status, retryAfterSec, error}` | parent → iframe | predaja odbijena |

Posljedice koje nisu očite iz popisa poruka:

- **Način rada je dio ključa keša**, i kod roditelja i u engineu. Isti ispit u vježbanju
  smije nositi ključ za prvih `FREE_LIMIT` pitanja, a u ispitnom modu nijedan; kad bi se
  payload iz vježbanja upotrijebio u simulaciji, prekidač `qs.some(q => q.sol)` bi lagao.
- **Timer ne kreće prije pitanja.** Ulazak u ispit (`goExam`/`goModeSelect`/`goExamMode`/
  `goPractice`/`goPracticeTimer`) prvo traži ispit i prikazuje ekran čekanja; `Sim` se
  montira tek kad pitanja stignu, pa timer ne može krenuti ranije.
- **Free nikad ne radi skupni dohvat.** `socFeatureGate()` stoji PRIJE `withAllExams(…)` u
  svakom ekranu nad cijelom bankom (Pregled, Filter, Greške, Bookmarci, Flashcards, Dnevni
  izazov, SRS, Virtualni ispit), a roditelj `key:"*"` za free odbija s 403. Home i
  ModeSelect popis ispita čitaju iz `SOC_EXAM_META`, pa ne traže ništa.
- **Predaja uvijek ide na poslužitelj.** S punim ključevima (`keys:"full"`) engine smije
  ocijeniti lokalno radi trenutnog prikaza, ali povijest, XP i `sim_progress` idu po
  rezultatu iz `DISCERE_GRADE`. Kod `keys:"partial"` lokalni rezultat ne bi bio nepotpun
  nego KRIV (pitanju bez ključa `chk` vraća `null`, pa ispada iz brojnika a ostaje u
  nazivniku), pa se tada čeka poslužitelja.
- **`sim_progress` piše ruta.** `DISCERE_RESULT` nosi `serverSaved`; preglednik upisuje
  redak samo kad je `false` — dakle kad je ruta predaju odbila (mreža, 429), a engine je s
  vlastitim ključevima izračunao rezultat lokalno. Taj rezervni upis nosi i **`attemptId`**
  (`saveSimResult` ga šalje kao `attempt_id`): „ruta je odbila“ i „ruta je ocijenila, ali se
  odgovor izgubio“ izvana izgledaju isto, pa je djelomični jedinstveni indeks
  `(user_id, attempt_id)` jedino što u drugom slučaju sprječava drugi redak za isti pokušaj.
  Bez otiska bi upis prošao kao `NULL` redak (indeks vrijedi samo `where attempt_id is not
  null`) i ispit bi se brojao dvaput u povijesti, napretku i percentilu.
- **Nacrt ispita** (`disc_soc_exam_<key>_<exam|practice|practice_timed|plain>`, TTL 6 h) nosi
  `answers`, `qTimes`, `cur`, **`deadline`** i `attemptId`. Rok je apsolutan trenutak, ne
  preostale sekunde: bez njega osvježavanje vrati pun timer i 90-minutna simulacija se
  produljuje unedogled. Istekao rok predaje ispit sam. Način rada je dio ključa **uključujući
  timer**: vježbanje otkriva točan odgovor po pitanju, pa bi zajednički nacrt prenio već
  viđena rješenja u vježbanje s timerom, a njegov rok u netimirano vježbanje. `attemptId` se
  zapisuje **prije** prelaska na ekran rezultata — efekt koji nacrt piše izlazi na `done`, pa
  bi otisak stvoren kasnije nestao s osvježavanjem i ista bi predaja dobila novi id, potrošila
  još jedno mjesto dnevnog budžeta i upisala drugi redak.
- **Prazan `EXAMS` nije prazan rezultat.** Banka stiže s poslužitelja, pa svaki izračun nad
  njom mora razlikovati „nema grešaka“ od „nemam podatke“: Statistika za plaćeni tier
  dohvaća banku prije ulaska (`goStats` → `withAllExams`; za free je po ODLUCI 4 nikad ne
  traži), blokovi koji je trebaju bez nje pišu poruku umjesto nule, prečaci na slabu temu
  predaju **recept** za virtualnu vježbu koji se izvršava tek nakon dohvata (inače `Sim`
  dobije `qs:[]` i sruši se), a brojač dospjelih SRS kartica na Home ekranu računa se iz
  `SOC_EXAM_META` (`socSrsDueCount`), ne iz banke.
- **Standalone otvaranje je fail-closed.** Bez roditelja nema odakle dobiti pitanja, pa
  `/sim/sociologija.html` otvoren izravno pokaže poruku da se simulator otvara kroz
  aplikaciju, a ne prazan ekran ni vječno „Učitavamo…“.

Testovi: `__tests__/discere/soc-bridge.test.js` (roditelj u happy-domu + statička sidra nad
HTML-om i nad redoslijedom `socFeatureGate` → `withAllExams`) i
`__tests__/discere/soc-engine-flow.test.js`, koji **pokreće sam engine** (React iz
`public/sim/vendor/` + inline skripta u happy-dom prozoru) i odigra cijeli put free i
plaćenog korisnika, nastavak iz nacrta, auto-predaju po isteku roka i standalone slučaj.
U tom testu je `window.fetch` mina, pa bi svaki mrežni poziv iz enginea srušio test.

#### Engleski — što se točno promijenilo

Izvor istine ostaje `lib/engleski-simulator/exams.js` (1,92 MB), koji **nijedna klijentska
datoteka ne uvozi** — samo `scripts/` i `__tests__/`; test to i tvrdi.
`scripts/gen-eng-exams-json.mjs` iz njega generira javni payload **po ispitu** (medijan 19,6 KB)
i tajni store po ispitu, te lagani `exams-index.json` koji smije ostati statički uvoz jer ne
nosi nijedno tajno polje.

Isporuka je po ispitu, ne po razini: prije je ulazak u JEDAN ispit povlačio cijelu razinu
(440 KB osnovna, 791 KB viša) kao javan webpack chunk, bez ikakve provjere prijave — a
`useEffect` na ekranu rezultata dovlačio je **obje** razine nakon svake predaje, pa je svaki
free korisnik završavao s 1,74 MB i svih 3009 pitanja s ključevima. Danas
`lib/engleski-simulator/examsLoader.js` dohvaća ispit s `GET /api/sim/eng/exam/<key>?mode=…`,
a `mode` je dio ključa keša: payload jednog načina rada ne smije se upotrijebiti u drugom,
inače bi klijentski prekidač `qs.some(q => q.sol)` mogao pomisliti da smije ocjenjivati sam.
Skupni dohvat cijele banke ide s `mode=exam` (najuži payload) i pokreće ga samo tier koji
smije vidjeti njezin sadržaj — free korisnik nema ekran koji je traži, pa 70 zahtjeva za
njega više ne postoji.

Tih 70 zahtjeva ide kroz `mapWithLimit` sa semantikom `allSettled`: jedan 500 ili timeout
preskače se, ne ruši ostalih 69. S `Promise.all` je jedan pali zahtjev odbijao cijeli
`loadRazina` — a poziva se i u **pozadini ekrana rezultata**, pa je korisniku znao zamijeniti
upravo zarađen rezultat karticom „Učitavanje ispita nije uspjelo“. Razina se u tom slučaju ne
proglašava učitanom, pa sljedeći ulazak dohvati samo ono što nedostaje (ostalo je u kešu);
odbija se tek kad ne stigne **nijedan** ispit, jer je to prava greška (istekla sesija, mreža).
Tier se na poslužitelju kešira 60 s po korisniku (`cachedTier`), pa 70 dohvata ne znači i 70
upita nad `subscriptions`; sama prijava (`auth.getUser`) se ne kešira.

Ocjenjivanje: `POST /api/sim/eng/grade` ocjenjuje **postojećim** `chk` iz
`lib/engleski-simulator/scoring.js` — istim koji koristi i preglednik, pa se ocjena ne može
razići. Klijent iz vraćene mape `scores` (qid → true|false|null) izvodi sve što je prije
računao iz ključeva: bojenje mrežice, rezultat po ispitnim cjelinama, `topic_breakdown` i
SM-2 `errorTracker` (`scoreLookup` u `scoring.js`). Time free korisnik ne gubi nijednu od tih
funkcija na pravom ispitu, a nijedan ključ ne dolazi u preglednik. Klijentski upis u
`sim_progress` (`saveEngSimResult`) za engleski se u redovnom toku više ne poziva — piše ga
ruta; ostaje samo kao rezerva kad ruta predaju odbije, a klijent rezultat izračuna lokalno
(vidi niže).

Što free korisnik **gubi** i zašto je to svjesna odluka: dnevni izazov, virtualni ispit,
vježbanje po temi i usporedba ispita slože sesiju od pitanja iz **cijele banke** i ocjenjuju
je lokalno preko `chk`. Bez ključeva taj put vraća `null` za svako pitanje, dakle 0 % upisanih
u povijest i prazan feedback na točan odgovor, a usput bi za svaki ulazak povukao svih 70
ispita. Ti su ekrani zato u `PAID_SCREENS` (dizajn: „preskočiti ih, NE pozvati s praznim
ulazom“) — isto kao u hrvatskom i matematici, s `goPaidScreen`/`LockedResultsBlock` i CTA-om
umjesto ekrana. Politika ih ionako svrstava u vježbanje, koje je Standard sadržaj.

Pravi ispiti s timerom i vježbanje **po ispitu** ostaju besplatni, i u vježbanju free korisnik
zadržava punu povratnu informaciju na prva `FREE_LIMIT` pitanja — „Provjeri“, AnswerHelper i
istinit `previewScore` (vidi 5a). `hasKeys` (ima li payload ijedan ključ) upravlja tim
prikazom; za **lokalni izračun cijele ocjene** vrijedi stroži uvjet `fullKeys` (ključ na
svakom auto-ocjenjivom pitanju), inače bi plaćeni fallback s tri ključa od 43 pitanja dao
rezultat od 7 %.

Nedovršeni pokušaj živi u `localStorage` pod `disc_eng_exam_<key>_<exam|practice>` (TTL 6 h),
kao što hrvatski ima `discere_exam_<key>`, a matematika `mat_resume`. Bez toga je pad predaje
nakon 90-minutne simulacije značio gubitak svih odgovora: postojali su samo u React stanju.

Nacrt nosi **odgovore, `qTimes`, apsolutni rok tekuće cjeline i njezin indeks**, i to zajedno:
odgovori koji prežive osvježavanje stranice, a rok koji ne preživi, daju ispit bez vremenskog
ograničenja (F5 remounta `BlockTimer` s punim trajanjem i ponovno otvara blok koji je
jednosmjerna navigacija već zatvorila), a takav pokušaj ocjenjivačka ruta upisuje u
`sim_progress` kao regularan — iz njega se računaju napredak i percentil.

**Način rada je dio ključa.** Vježbanje istog ispita free korisniku pokazuje točan odgovor na
prvih `FREE_LIMIT` pitanja („Provjeri“/AnswerHelper), a plaćenom na svima; sa zajedničkim
ključem bi se ti odgovori vratili pri ulasku u simulaciju i predali kao regularan pokušaj sa
100 %. Iz istog razloga potvrđeni izlazak iz simulacije („Napredak neće biti spremljen“) doista
briše nacrt — poruka inače laže.

Neuspjela predaja ima **tri** puta, po tome što se stvarno dogodilo:

1. **429 s kratkim `Retry-After`** (razmak od 60 s) — klijent prikaže odbrojavanje i sam
   ponovi predaju s istim `attemptId`. Lokalni izračun bi ovdje bio gori i za plaćenog
   korisnika: rezultat bi vidio na ekranu, a u `sim_progress` (napredak, percentil) ga ne bi
   bilo, dok ga ponovljena predaja uredno upiše.
2. **Mreža ili trajna greška, a klijent ima ključeve za sva pitanja** (`fullKeys`, plaćeni
   tier) — rezultat se izračuna lokalno: pokušaj se ne smije izgubiti zbog tuđeg kvara. Redak
   u `sim_progress` tada upisuje klijent (`result.serverSaved === false` → `saveEngSimResult`).
3. **Inače** (free, ili iskorišten dnevni budžet) — poruka i gumb za ponovni pokušaj.
   Odgovori ostaju u stanju **i u `localStorage`**, a `attemptId` je isti, pa ponovni pokušaj
   ne troši ni razmak ni budžet.

Mrežni pozivi imaju strop (`AbortSignal.timeout`: 20 s za dohvat ispita, 30 s za predaju).
Bez njega `fetch` nad vezom koja nestane bez RST-a nikad ne razriješi promise, pa gumb
zauvijek stoji na „Predajem…“, a ekran na „Učitavamo...“ — bez ijednog puta prema ponovnom
pokušaju.

## Automatska provjera

`npm run security:secrets` (i `__tests__/security/exam-secret-isolation.test.js`) vrte dva
sloja.

### SLOJ A — izolacija grafa uvoza

Skripta gradi graf uvoza (`import … from`, `import()`, `require`, `export … from`) po
`app/**`, `components/**`, `lib/**`, `content/**`, razrješava alias `@/` iz `tsconfig.json`,
i radi BFS iz klijentskih korijena:

- datoteke s `'use client'` u prvih 200 B,
- `app/**/page.*` i `app/**/layout.*` bez `server-only`.

Tajni moduli su datoteke s markerom `@exam-secret` u prvih 500 B te JSON pod
`lib/data/*/secrets/**`. Provjera pada ako je ijedan tajni modul dohvatljiv iz klijentskog
korijena i ispisuje cijeli lanac uvoza.

Od Faze 1 tajni moduli s markerom su `lib/exam-secrets/index.js`, `lib/exam-secrets/registry.js`
i `lib/exam-secrets/subjects/eng.js`, uz 70 JSON datoteka pod `lib/data/eng/secrets/`.
Test uz stvarno stablo tvrdi točno taj popis, pa se novi tajni modul ne može pojaviti bez
izmjene testa. Uz to vrti i lažni primjer u privremenom direktoriju — klijentska komponenta
koja alias uvozom povuče `lib/exam-secrets` i druga koja dinamičkim uvozom povuče
`lib/data/hrvatski/secrets/2024.json` — obje moraju biti prijavljene, da se zna da provjera
doista hvata, a ne samo da je zelena.

### SLOJ B — ratchet nad izvorom

Regex traži tajni ključ u poziciji svojstva objekta ili JSON ključa:

```
/(?:^|[{,\[])\s*["']?(<ključ>)["']?\s*:/gm
```

Ključevi su dvije vrste:

- **jaki** (`sol`, `why`, `pairs`, `ocjenaKljuc`, `solFormula`, `graphRef`, `rubric`,
  `distraktori`, `svgFn`) — otkrivaju rješenje sami po sebi i broje se u svakoj datoteci;
- **slabi** (`exp`, `steps`, `ans`, `cl`, `ex`, `alt`) — generički nazivi (XP ima `exp`,
  onboarding wizard ima `steps`), pa se broje samo u datoteci **oblika ispita**: onoj koja ima
  `q:`/`opts:`/`items:`/`rights:`/`qs:` kao svojstvo ili bar jedan jaki ključ. Pravi ispitni
  payload uvijek nosi `q:`, pa mu se broji svaki ključ; nedužan `{ steps: [...] }` je 0.

Tajni store (`lib/data/<predmet>/secrets/**.json`) se **ne broji**. To je mjesto na koje
ključeve treba preseliti, pa bi ga ratchet inače kaznio za svaku uspješnu migraciju i učinio
točku 6 („novi predmet ide u baseline s vrijednošću 0") neizvedivom. Te datoteke nisu
nezaštićene: SLOJ A gleda točno isti skup putanja (`isSecretDataPath`) i pada ako je ijedna
od njih dohvatljiva iz klijentskog grafa uvoza.

Inače se skeniraju **sve runtime mape na korijenu repozitorija** (`app/`, `components/`, `content/`,
`hooks/`, `lib/`, `public/`, `types/` — i svaku novu koja se pojavi), s ekstenzijama
`.js/.jsx/.ts/.tsx/.mjs/.json/.html`. Popis mapa se izračunava, ne piše ručno — izuzimaju se
samo alati i dokumentacija (`scripts/`, `__tests__/`, `docs/`, `supabase/`, `agents/`) te
`node_modules`, `.next`, `.git`. Klijentski korijen je svaka datoteka kojoj je `'use client'`
prva izjava — komentari i licenčni banner ispred nje su dopušteni, kao i u Nextu.

Baseline je mapa `datoteka → broj pogodaka`. Test pada ako:

- datoteka **premaši** svoj baseline unos, ili
- se pojavi datoteka s pogotkom koja **nema** unos u baselineu.

### Kako se baseline regenerira

Baseline se **ne uređuje ručno** — generira ga skripta:

```bash
npm run security:secrets -- --write-baseline
```

Skripta **odbija zapisati porast** (veći broj u postojećoj datoteci ili nova datoteka): izlazi
s greškom i ispisuje što bi poraslo. Time regeneracija zbog legitimnog smanjenja ne može
usput podići strop i za pravu regresiju u istom commitu. Porast baselinea je promjena
politike — traži izmjenu ovog ADR-a i izričitu zastavicu:

```bash
npm run security:secrets -- --write-baseline --allow-increase
```

Koristi se samo uz izmjenu popisa ključeva ili skeniranih mapa (kao pri uvođenju pravila).

### SLOJ C — prolaz kroz preglednik

Prva dva sloja tvrde da ključa nema u izvoru i da tajni modul nije dohvatljiv iz klijentskog
grafa uvoza. Nijedan ne tvrdi da **ruta** doista ne pošalje ključ prijavljenom free korisniku:
to ovisi o tieru iz baze, načinu rada (`exam`/`practice`), free izuzetku i rate limitu — dakle
o runtimeu, ne o izvoru.

Taj dio pokriva `scripts/qa/eng-secrets-visual.mjs` — Playwright prolaz **bez `DEV_BYPASS_EMAIL`**
(free korisnik prolazi sam, ne kroz owner bypass u `proxy.js`) nad lažnim Supabaseom
`scripts/qa/hrv-sim-mock-supabase.mjs`. Mock je zbog ovih ruta dobio ono što one doista zovu:
`subscriptions` (tier čita **admin** klijent, kojemu korisnikov token uopće ne stiže, pa svaki
tier ima vlastiti `user_id`), RPC `ai_rate_limit_try` i `sim_progress` s jedinstvenim
`(user_id, attempt_id)` — oboje sa stanjem u memoriji (`mockState`), da druga predaja doista
vidi prvu.

Prolaz presreće **svaki** mrežni odgovor kartice i za free tvrdi da nijedno tijelo ne nosi
`sol`/`exp`/`why`/`steps`, uz jedini dopušteni izuzetak iz `free-policy.js` (vježbanje, prvih
`FREE_LIMIT` pitanja). Uz to provjerava: `keys:"none"` u ispitnom modu za free i `keys:"full"`
za plaćeni tier; da ocjenu daje ruta i da redak u `sim_progress` upisuje poslužitelj; da free
rezultati nemaju ni `.revlist` ni tekst obrazloženja iz tajnog storea u `outerHTML`-u; da
Dnevni izazov / Virtualni ispit / Vježbaj po temi za free ne povuku **nijedan** dohvat ispita;
da druga predaja istog ispita unutar 60 s vrati 429 s odbrojavanjem; i da osvježavanje stranice
usred ispita sačuva odgovore (`disc_eng_exam_<key>_<mode>`).

```bash
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321 \
NEXT_PUBLIC_SUPABASE_ANON_KEY=<JWT-oblik string> \
SUPABASE_SERVICE_ROLE_KEY=<JWT-oblik string> \
npx next dev --webpack -p 3012
node scripts/qa/eng-secrets-visual.mjs --base http://localhost:3012 --out ./.qa-shots
```

Nije dio CI-ja (traži dev server i preglednik) — vrti se uz svaki predmet koji prelazi na
serversku isporuku.

## Posljedice

- Regeneracijski lanci moraju dobiti korak razdvajanja prije nego što se u njima doda novi
  predmet.
- Engleski je migriran (Faza 1, vidi odjeljak 8): `lib/data/engleski-simulator/exams-osnovna.json`
  i `exams-visa.json` su obrisani, pa je baseline pao s 59 532 na 50 496 pogodaka. Preostali
  veliki unos `lib/engleski-simulator/exams.js` (9036) je **izvor istine generatora**, nije u
  klijentskom grafu uvoza i test to zasebno tvrdi.
- Sociologija je migrirana (Faza 2, vidi odjeljak 8): ključevi su izašli iz
  `public/sim/sociologija.html` (4133 → 0 pogodaka), a druga kopija monolita
  `content/discere/soc.html` (4133) je obrisana — baseline je pao s 50 496 na 42 230 pogodaka
  u 172 datoteke.
- Novi predmet koji pokuša ugurati ključ u javni payload pada na CI-ju, ne u produkciji.
