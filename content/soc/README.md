# Javni payload — sociologija

`exams/<examKey>.json` nosi **samo ono što treba za rješavanje**: `id`, `type`,
`topic`, `q`, `opts`, `items`, izvedeni `nsel` (koliko odgovora traži pitanje
tipa `ms`) i redoslijed pitanja, uz meta ispita.

Ovdje **nikad** ne smije doći `sol`, `exp` ni bilo koje novo polje koje otkriva
odgovor — to ide u `lib/data/soc/secrets/`. Obje obitelji datoteka generira
`scripts/soc-split-solutions.mjs` iz `public/sim/sociologija.html`; ne uređuju
se ručno.

Pravilo: [`docs/ADR-001-ispitni-podaci.md`](../../docs/ADR-001-ispitni-podaci.md).
