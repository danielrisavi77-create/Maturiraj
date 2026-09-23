# Tajni store — sociologija

Ovdje su **ključevi i obrazloženja** ispita sociologije: po ispitu jedna
datoteka `<examKey>.json` oblika `{ "<qid>": { sol, exp, type, topic } }`.

**Ništa odavde se ne smije uvesti iz klijentske komponente.** Jedini čitač je
`lib/exam-secrets` (`import 'server-only'`), a jedini pozivatelji su rute
`GET /api/sim/soc/exam/<key>` i `POST /api/sim/soc/grade`. Datoteke generira
`scripts/soc-split-solutions.mjs` iz `public/sim/sociologija.html`; ne uređuju
se ručno.

Pravilo: [`docs/ADR-001-ispitni-podaci.md`](../../../../docs/ADR-001-ispitni-podaci.md).
