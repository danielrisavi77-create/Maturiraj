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
uklonjena; ostaje `POST /api/exams/check` kao predložak poslužiteljskog ocjenjivanja.

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

### 6. Baseline uz svaki novi predmet

Uz svaki novi predmet/ispit ide unos u `scripts/security/exam-secret-baseline.json` s
vrijednošću **0**. Baseline smije **samo padati**.

### 7. Regeneracijski lanci

Ako predmet ima regeneracijski lanac (`colocate-svg.mjs`, `build-engine.mjs`, sociološki
monolit `content/discere/soc.html`), razdvajanje javnog i tajnog dijela mora biti **korak u
tom lancu** — ne ručni zahvat nakon generiranja. Inače prva sljedeća regeneracija vrati
ključeve u javni payload.

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

Danas u repozitoriju **nema** tajnih modula, pa sloj radi „na prazno“. Da se zna da doista
hvata, test uz stvarno stablo vrti i lažni primjer u privremenom direktoriju: klijentska
komponenta koja alias uvozom povuče `lib/exam-secrets` i druga koja dinamičkim uvozom povuče
`lib/data/hrvatski/secrets/2024.json` — obje moraju biti prijavljene.

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

Skenira **sve runtime mape na korijenu repozitorija** (`app/`, `components/`, `content/`,
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
- Postojeći engleski simulator i dalje nosi ključeve u klijentu; baseline to bilježi kao
  zatečeno stanje i sprječava daljnje pogoršanje dok se migracija ne napravi.
- Novi predmet koji pokuša ugurati ključ u javni payload pada na CI-ju, ne u produkciji.
