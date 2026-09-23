# Discere ispitna shema v2

Izvor istine: `lib/discere/exam-schema.js` (validacija), `lib/discere/types.js` (JSDoc tipovi).
Testovi: `__tests__/discere/exam-schema.test.js` (v1 ugovor), `__tests__/discere/exam-schema-v2.test.js` (v2 polja).

## Verzioniranje

- `SCHEMA_VERSION === 2`, `SUPPORTED_SCHEMA_VERSIONS === {1, 2}`.
- `validateExam` prihvaća `meta.schemaVersion` 1 i 2; sve ostalo je greška `SCHEMA_VERSION`.
  Postojeći v1 sadržaj (bio 2026\_ljeto) ostaje valjan bez ijedne izmjene.
- `upgradeExam(exam)` vraća **novi** objekt s `meta.schemaVersion = 2` i, rekurzivno kroz
  `children`, pretvara v1 `explanation {text, source}` u `solution.summary`:

  ```js
  solution = { summary: explanation.text, steps: [], why: [], commonMistakes: [], source }
  ```

  Mapiranje izvora: `official → official`, `maturiraj|maturiraj-reviewed → maturiraj`,
  `ai|ai-draft → ai-draft`, `ai-opus-reviewed → ai-opus-reviewed`, ostalo → `maturiraj`.
  Ispit koji je već v2 vraća se nepromijenjen (ista referenca), kao i ispit s nepodržanom verzijom.
  `upgradeExam` ne izmišlja `assets[].source` (podrijetlo zapisa nije izvedivo iz sadržaja), pa
  nadograđeni v1 ispit s audio assetom traži svjesnu dopunu tog polja. Dok ostaje v1, valjan je
  bez ijedne izmjene.

## Nova polja zadatka

| Polje | Tip | Obvezno | Greška |
|---|---|---|---|
| `chapterSlug` | string | ne | `INVALID_CHAPTER_SLUG`, `UNKNOWN_CHAPTER` |
| `catalogOutcomes` | string[] | ne | `INVALID_CATALOG_OUTCOMES` |
| `solution` | objekt (dolje) | ne | `INVALID_SOLUTION*` |
| `qa` | `{status, verifiedBy?, verifiedAt?}` | ne | `INVALID_QUESTION_QA` |
| `wordBank` | string[] (≥ 2 jedinstvene) | samo `fill` | `INVALID_WORD_BANK`, `FILL_FIELD_ON_NON_FILL` |
| `mode` | `'letter'` | samo `fill` | `INVALID_FILL_MODE`, `WORD_BANK_REQUIRED` |
| `responseMode` | `'translation' \| 'drawing'` | samo `essay` | `INVALID_RESPONSE_MODE` |

`qa.status` koristi isti skup kao `meta.qa.status`: `draft`, `structural-pass`, `verified`, `published`.
`verifiedAt` i `reviewedAt` su ISO datum (`YYYY-MM-DD`) ili puni timestamp.

### `solution`

Isti oblik koji čita mat (`components/simulator/mat/tools/question.tsx`: `steps`, `why`, `warn`).

```js
solution: {
  steps: [{ txt: 'Izračunaj omjer.', note: 'postupak' }, { txt: 'Rezultat je 3.', final: true }],
  why: ['…'],                  // obvezno, smije biti prazno
  commonMistakes: ['…'],       // obvezno, smije biti prazno
  warn: '…',                   // opcionalno
  modelAnswer: '…',            // opcionalno, ručni zadaci
  summary: '…',                // opcionalno; ovdje sjeda v1 explanation.text
  source: 'ai-opus-reviewed',  // maturiraj | official | ai-draft | ai-opus-reviewed
  reviewedBy: 'opus-refuter',  // opcionalno
  reviewedAt: '2026-09-01',    // opcionalno
}
```

- Korak: ključevi samo `txt` (obvezan, neprazan), `note`
  (`postupak | diagnostika | odgovor | verifikacija | intuicija`) i `final` (boolean).
- Najviše jedan korak smije imati `final: true` (doslovni službeni odgovor).
- `explanation {text, source}` iz v1 i dalje je dopušten i validira se (`INVALID_EXPLANATION`);
  čitači ga tretiraju kao `solution.summary`.

### `answer.numeric.relativeTolerance` — rezervirano, zasad odbijeno

Polje je predviđeno planom, ali ga shema **odbija** (`RELATIVE_TOLERANCE_UNSUPPORTED`) jer
ocjenjivanje još ne zna za njega:

- `lib/discere/numeric-answer.js` (`isNumericAnswer`) dopušta samo ključeve `absoluteTolerance`,
  `domain` i `unit`; nepoznat ključ ruši provjeru cijeloga pravila.
- Zato bi `matchesNumericAnswer` vratio `false` za **svaki** odgovor, uključujući službeni ključ,
  pa bi zadatak s relativnom tolerancijom bio neocjenjiv (0 bodova u `lib/discere/scoring.js`).

Autoru je jedina ispravna tolerancija danas `absoluteTolerance`. Kad `numeric-answer.js` dobije
relativnu toleranciju (zasebna grupa), ovdje se zamjenjuje odbijanje provjerom oblika
(nenegativan decimalni ili razlomački string, `'0.02'`, `'1/50'`) i dodaje test koji veže polje
uz ocjenjivanje.

### Stimulusi

```js
stimulus: {
  code: { language: 'python', text: 'print(1)' },              // INVALID_STIMULUS_CODE
  source: { title: 'Ustav', author: 'Sabor', year: 1990, citation: 'čl. 1.' }, // INVALID_STIMULUS_SOURCE
  mediaUnavailable: { reason: '…', officialRef: 'PDF str. 7' }, // INVALID_MEDIA_UNAVAILABLE
}
```

`source.title` je obvezan; `author`, `citation` su neprazni stringovi kad postoje, `year` cijeli
pozitivan broj. `mediaUnavailable` traži oba polja — koristi se za medije trećih strana koje ne
hostamo (fotografije, karte, reprodukcije).

### Assets

```js
assets: [{ type: 'audio', src: '…', source: 'tts', rights: { holder: 'Maturiraj', basis: 'sinteza glasa' } }]
```

- `source`: `official | maturiraj | tts` (`INVALID_ASSET_SOURCE`).
- Audio asset **mora** imati `source` (`AUDIO_ASSET_SOURCE_REQUIRED`) — pravilo vrijedi samo za
  `meta.schemaVersion === 2` (i za `validateQuestionSet` bez mete, koji se ravna po aktualnoj
  verziji). v1 ispit s audiom ostaje valjan bez izmjena; `source` se dopunjuje kad se ispit
  prevede na v2. Za ostale vrste asseta `source` je opcionalan.
- `rights` traži `holder` i `basis` kad je prisutan (`INVALID_ASSET_RIGHTS`).
- Pravilo za `image.alt` ostaje nepromijenjeno.

## Nova polja mete

### `meta.blocks`

Blokovi s vlastitim timerom (jezici, uzor `lib/engleski-simulator/examStructure.js`):

```js
blocks: [{ id: 'b1', label: 'Čitanje', minutes: 40, questionIds: ['1', '2'] }]
```

Pravila: neprazan niz, jedinstveni `id`, `label` neprazan, `minutes` pozitivan, `questionIds`
neprazan niz stringova. `questionIds` moraju pokriti **sve** top-level `id`-eve ispita, svaki
točno jednom. Greške: `INVALID_BLOCKS`, `INVALID_BLOCK`, `BLOCK_QUESTION_OVERLAP`,
`UNKNOWN_BLOCK_QUESTION`, `BLOCK_COVERAGE_INCOMPLETE`.

### `meta.qa.refuter`

```js
refuter: { verdict: 'pass', at: '2026-09-01', model: 'opus-5', notes: [] }
```

`verdict` je `pass` ili `fail`, `at` ISO datum/timestamp, `model` neprazan, `notes` niz stringova.
Greška: `INVALID_QA_REFUTER`.

## Opcije validacije

`validateExam(exam, options)` i `validateQuestionSet(questions, options)`:

| Opcija | Učinak |
|---|---|
| `topics: string[]` | Topic izvan popisa je **greška** `UNKNOWN_TOPIC` (bez popisa se ne provjerava; topic koji nedostaje ostaje upozorenje `QUESTION_TOPIC_MISSING`). |
| `chapters: string[]` | `chapterSlug` izvan popisa je greška `UNKNOWN_CHAPTER`. |
| `public: true` | Validacija javnog (klijentskog) ispita — vidi dolje. |

Popisi dolaze iz `content/discere/<id>/taxonomy.json`.

### `public: true` (ADR-001)

Javni ispit se ne smije validirati kao da ima ključ, a istodobno mora pasti ako ga ima.

- **Ne traži** `answer` ni `answer.source`; preskaču se sve provjere ključa
  (choice/text/fill/matching/ordering/true_false/rubrika).
- **I dalje provjerava** strukturu: id-eve, tip, prompt, `sourceRef`, bodove, opcije, gapove,
  stavke, tvrdnje, assete, stimuluse, blokove i totale.
- **Pada** (`PUBLIC_FIELD_LEAK`) ako ijedan zadatak — rekurzivno kroz `children` — ima
  `answer`, `solution`, `explanation` ili `stimulus.listening.transcript`.
  `null` se tretira kao odsutno (v1 sadržaj piše `explanation: null`).
- Slušanje bez transkripta prolazi `isListeningStimulus` jer se u javnom modu provjerava kopija
  s praznim mjestom za transkript; ostala pravila (trajanje, `maxPlays`, jezik) vrijede.

Generator (`scripts/gen-discere-exams.mjs`) javni JSON provjerava s `{ public: true }`, a autorski
izvor bez te opcije.
