# Audio — Engleski simulator (slušanje)

## Hosting

Audio datoteke se **ne nalaze u repou** (rade se o ~711 MB / 454 MP3 datoteke —
prevelike i nepotrebne za git povijest). Hostane su kao asseti GitHub Release-a
[`eng-audio-v1`](https://github.com/danielrisavi77-create/maturiraj-eng-audio/releases/tag/eng-audio-v1)
na ovom repou.

Bazni URL je definiran u `lib/engleski-simulator/audioBase.js`:

```js
export const ENG_AUDIO_BASE = process.env.NEXT_PUBLIC_ENG_AUDIO_BASE
  || 'https://github.com/danielrisavi77-create/maturiraj-eng-audio/releases/download/eng-audio-v1/'
```

Postavi `NEXT_PUBLIC_ENG_AUDIO_BASE` (mora završavati s `/`) ako se audio poslužuje
s drugog mjesta (CDN, lokalni dev server, drugi release) — npr. u `.env.local`:

```
NEXT_PUBLIC_ENG_AUDIO_BASE=http://localhost:3000/audio/eng/
```

## Konvencija imenovanja

Datoteke u `audio-map.json` referenciraju se samo imenom (ne punim putem);
`audioUrl(file)` iz `audioBase.js` spaja ime s `ENG_AUDIO_BASE` i URL-enkodira ga.
Obrazac imena: `<examKey>__task<N>-1.mp3` (1. slušanje), `<examKey>__task<N>-2.mp3`
(ponavljanje), `<examKey>__intro.mp3` (uvodna snimka/upute, kad postoji), gdje je
`<examKey>` ključ ispita (npr. `vis_2015_ljeto`) a `N` redni broj task-a slušanja za
taj ispit i razinu.

Registar je `lib/data/engleski-simulator/audio-map.json`:

```json
{
  "<examKey>": {
    "intro": "<examKey>__intro.mp3" | null,
    "tasks": {
      "<N>": { "topic": "listening_a", "first": "<file>", "repeat": "<file>|null", "confidence": "high|medium|low", "note": "" }
    },
    "extra": [ { "first": "<file>", "repeat": "<file>|null", "note": "..." } ]
  },
  "_missing": []
}
```

`extra` (opcionalno, samo kod nekih `confidence: 'low'` ispita) su sirovi zapisi iz
NCVVO ZIP-a koje ni jedan task iz `tasks` ne koristi — obrazac imena
`<examKey>__extra<M>-1.mp3` (1. slušanje) / `-2.mp3` (ponavljanje, kad je par
prepoznat preko sličnog ffprobe trajanja; inače `repeat: null`). Prikazuju se u
`AudioPlayer` kao blok „Dodatni zapisi slušanja” uz zadnji task ispita (ili uz
svaki task ako su svi `confidence: 'low'`) — vidi `scripts/eng-audio/build-audio-C-extra.py`.

`confidence` govori koliko je mapiranje snimka→task pouzdano:
- **high** — ZIP je imao točno `2×broj_taskova + 1` audio snimki (uvod + 1. slušanje
  + ponavljanje po tasku); mapiranje je jednoznačno.
- **medium** — nije se pojavilo u trenutnom skupu podataka (rezervirano za `n = 2×tasks`
  bez uvoda, ili `n = tasks` s jednom snimkom po tasku, gdje `first === repeat`).
- **low** — broj snimki u ZIP-u ne odgovara ni jednom očekivanom obrascu (najčešće
  stariji ispiti gdje je cijeli listening dio jedna kombinirana CD-snimka, ili
  godine gdje `topic` oznake u `exams-*.json` ne razlikuju sve taskove). Mapiranje je
  pozicijsko nagađanje uz `note` s objašnjenjem; `first`/`repeat` mogu biti `null`
  kad snimka fizički ne postoji zasebno.

Kad datoteka fizički ne postoji (404) ili joj `first` nedostaje u mapi, `AudioPlayer`
(`components/engleski-simulator/components/SimSharedUI.js`) prikazuje tekstualni
fallback umjesto playera. `<audio>` elementi imaju `preload='none'` (bez prometa prije
klika na Play), a nedostupnost se otkriva jednim laganim `HEAD` zahtjevom pri
montiranju playera; `onError` na `<audio>` ostaje druga linija obrane. Kad je baza
cross-origin bez CORS-a za `HEAD` (kao GitHub Release), provjera se ne može izvesti pa
se snimka tretira kao dostupna — postavi `NEXT_PUBLIC_ENG_AUDIO_BASE` na isti origin
(ili CDN s CORS-om) da provjera bude stvarna.

## Trenutno stanje (Korak C, 2026-09-20)

- **68/68** ispita sa slušanjem (34 osnovna + 34 viša razina) imaju zapis u
  `audio-map.json`; `_missing` je prazan.
- **454** enkodiranih MP3 datoteka (430 task/intro + 24 extra), ukupno **~711 MB**
  (mono, 32 kHz, 48 kbps — `libmp3lame`, znatno manje od originala).
- Od 255 task-zapisa: **160 confidence `high`**, **95 confidence `low`**, 0 `medium`.
- 28 ispita ima napomenu u `audio-map.json` (nestandardan obrazac) — vidi
  `docs/ENGLESKI_SIMULATOR_PLAN.md` odjeljak „Status 3.4 (audio)” za popis.
- **8 ispita** ima i polje `extra` (**24 dodatna zapisa**, svi samostalni — nijedan
  par nije prepoznat unutar 15% razlike trajanja): `2014_jesen` (2), `2015_jesen`,
  `2016_jesen`, `2016_ljeto`, `2017_jesen`, `2017_ljeto` (4 svaki — NCVVO je imao 4
  zadatka slušanja, naši podaci ih grupiraju u 2 teme), `2024_jesen` i
  `vis_2024_drugi` (1 svaki).

## Kako regenerirati

Skripte su u `scripts/eng-audio/` (izlaze iz repoa u vlastiti scratchpad, ne pišu
audio u repo):

1. `python scripts/eng-audio/build-audio-A.py --base <scratchpad> --exams-index lib/data/engleski-simulator/exams-index.json`
   — pronađe i preuzme NCVVO ZIP-ove sa slušanjem (NCVVO stranice su iza WAF-a s
   ove IP adrese pa se dio otkrivanja radi preko Wayback Machine; 1 zahtjev/s
   prema ncvvo.hr).
2. `python scripts/eng-audio/build-audio-B.py --base <scratchpad> --repo-data lib/data/engleski-simulator --ffmpeg <put> --ffprobe <put>`
   — raspakira ZIP-ove, mapira snimke na taskove i enkodira u mono MP3;
   ispisuje `<scratchpad>/audio-map.json`.
3. Kopiraj `<scratchpad>/audio-map.json` preko `lib/data/engleski-simulator/audio-map.json`.
4. `python scripts/eng-audio/build-audio-C-extra.py --base <scratchpad> --ffmpeg <put> --ffprobe <put> --repo-audio-map lib/data/engleski-simulator/audio-map.json`
   — za ispite gdje ZIP ima više sirovih zapisa nego što ih `tasks` koristi,
   enkodira ostatak kao `extra` zapise i spaja `extra` polje izravno u repo kopiju
   `audio-map.json`.
5. `scripts/eng-audio/upload-audio.sh <scratchpad>/out` — objavi `*.mp3` na GitHub
   Release `eng-audio-v1` (ručno se pokreće; zahtijeva `gh auth login`).

Sva tri Python skripta su idempotentna (preskaču već preuzete/enkodirane datoteke), pa
je siguno ponovno pokretanje nakon prekida.
