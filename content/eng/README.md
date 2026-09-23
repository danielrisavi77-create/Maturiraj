# Javni payload — engleski jezik

`exams/<examKey>.json` nosi **samo ono što treba za rješavanje**: `id`, `section`,
`type`, `topic`, `q`, `opts`, `items`/`rights`, `note` i redoslijed pitanja, uz
meta ispita.

Ovdje **nikad** ne smije doći `sol`, `exp` ni bilo koje novo polje koje otkriva
odgovor — to ide u `lib/data/eng/secrets/`. Obje obitelji datoteka generira
`scripts/gen-eng-exams-json.mjs` iz `lib/engleski-simulator/exams.js`; ne uređuju
se ručno.

Pravilo: [`docs/ADR-001-ispitni-podaci.md`](../../docs/ADR-001-ispitni-podaci.md).
