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
| `partial` | danas ne nastaje (free izuzetak je 0) | dio pitanja nosi ključ |
| `none` | **svaki** free korisnik, oba načina rada | nijedno pitanje nema ključ |

Javni payload se čisti **uvijek**, pa i kad ga adapter već isporučuje čistog; ključevi se
zatim **spajaju natrag** samo za pitanja koja na njih imaju pravo. Legitimni free izuzeci
žive isključivo u `lib/exam-secrets/free-policy.js` — i danas ih **nema**:
`freeKeyAllowance` vraća 0. Odluka vlasnika je da free korisnik nikad ne dobije
`sol`/`exp`/`why`/`steps`, a dok god izuzetak postoji, dovoljno ga je zatražiti za svih 70
ispita (jedan klik na ekran koji traži cijelu banku) da free korisnik ima stotine punih
rješenja bez ijedne provjere prava na te ispite. Posljedica u UI-ju je namjerna: bez ključa
nema gumba „Provjeri“ ni AnswerHelpera u free vježbanju (`hasKeys` u `ExamPlayScreen`), a
`previewScore` paywall modala je `null` umjesto lažnih „0 od 3 točno“.

`POST /api/sim/<predmet>/grade` prima `{ examKey, answers, examMode, attemptId }` i vraća
`{ pct, grade, cor, total, bodovi, xpGain, scores }`, a plaćenom tieru i `topicBreakdown`.
Odluke vlasnika ugrađene u rutu:

- free **nakon predaje** dobiva točno/netočno po pitanju (`scores`), ali nikad
  `sol`/`exp`/`why`/`steps` — ruta ključeve ne vraća nikome;
- **ruta sama** upisuje `sim_progress`; klijentov rezultat se ne uzima na vjeru;
- najviše **5** ocijenjenih predaja po (korisnik, ispit) u 24 h i najmanje **60 s** razmaka
  (`checkRateLimit`, ključ `sim-grade:<predmet>:<examKey>`);
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
  kroz instance. Ponovljena predaja **istih** odgovora ne troši ni razmak ni budžet i ne
  upisuje redak — rezultat je čista funkcija (ispit, odgovori), pa ponavljanje ne otkriva
  nijedan novi bit. Budžet time zapravo broji **različite skupove odgovora**, što je točno
  ono što oracle napad troši, a legitiman korisnik ne.

Iskreno o dosegu: `cor` i `scores` su bočni kanal i uz 5 različitih predaja dnevno napad je
usporen, ne spriječen (vidi „Posljedice“).

### 6. Baseline uz svaki novi predmet

Uz svaki novi predmet/ispit ide unos u `scripts/security/exam-secret-baseline.json` s
vrijednošću **0**. Baseline smije **samo padati**.

### 7. Regeneracijski lanci

Ako predmet ima regeneracijski lanac (`colocate-svg.mjs`, `build-engine.mjs`, sociološki
monolit `content/discere/soc.html`), razdvajanje javnog i tajnog dijela mora biti **korak u
tom lancu** — ne ručni zahvat nakon generiranja. Inače prva sljedeća regeneracija vrati
ključeve u javni payload.

### 8. Stanje po predmetima

| Predmet | Status | Javni payload | Tajni store |
| --- | --- | --- | --- |
| engleski (`eng`) | **migriran** (Faza 1) | `content/eng/exams/<examKey>.json` | `lib/data/eng/secrets/<examKey>.json` |
| hrvatski (`hrv`) | nije migriran | statički uvoz u `HrvatskiSimulator.jsx` | — |
| matematika (`mat`) | nije migriran | `content/simulator/mat/exams/*.mjs` (uz `qImages`) | — |
| sociologija (`soc`) | nije migriran | monolitni HTML u `public/` | — |

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
vježbanje po temi i usporedba ispita slože sesiju od pitanja iz cijele banke i ocjenjuju je
lokalno preko `chk`. Bez ijednog ključa taj put vraća `null` za svako pitanje, dakle 0 % i
prazan feedback, a usput bi za svaki ulazak povukao svih 70 ispita. Ti su ekrani zato u
`PAID_SCREENS` (dizajn: „preskočiti ih, NE pozvati s praznim ulazom“). Pravi ispiti s timerom
i vježbanje po ispitu ostaju besplatni.

Nedovršeni pokušaj živi u `localStorage` pod `disc_eng_exam_<key>` (TTL 6 h), kao što
hrvatski ima `discere_exam_<key>`, a matematika `mat_resume`. Bez toga je pad predaje nakon
90-minutne simulacije značio gubitak svih odgovora: postojali su samo u React stanju.

Ako ruta odbije predaju (mreža, 401, iskorišten budžet) **a klijent ima ključeve** (plaćeni
tier), rezultat se izračuna lokalno: pokušaj se ne smije izgubiti zbog tuđeg kvara. Redak u
`sim_progress` tada upisuje klijent (`result.serverSaved === false` → `saveEngSimResult`),
jer bi ga inače korisnik vidio na ekranu, a u napretku i percentilu ga ne bi bilo. Free
korisnik dobiva poruku i gumb za ponovni pokušaj; odgovori ostaju u stanju **i u
`localStorage`**, a `attemptId` je isti, pa ponovni pokušaj ne troši budžet.

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

## Posljedice

- Regeneracijski lanci moraju dobiti korak razdvajanja prije nego što se u njima doda novi
  predmet.
- Engleski je migriran (Faza 1, vidi odjeljak 8): `lib/data/engleski-simulator/exams-osnovna.json`
  i `exams-visa.json` su obrisani, pa je baseline pao s 59 532 na 50 496 pogodaka. Preostali
  veliki unos `lib/engleski-simulator/exams.js` (9036) je **izvor istine generatora**, nije u
  klijentskom grafu uvoza i test to zasebno tvrdi.
- Novi predmet koji pokuša ugurati ključ u javni payload pada na CI-ju, ne u produkciji.
