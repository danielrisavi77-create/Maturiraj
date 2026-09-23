# Tajni store — engleski jezik

Ovdje su **ključevi i obrazloženja** ispita engleskog: po ispitu jedna datoteka
`<examKey>.json` oblika `{ "<qid>": { sol, exp, type, topic } }`.

**Ništa odavde se ne smije uvesti iz klijentske komponente.** Jedini čitač je
`lib/exam-secrets` (`import 'server-only'`), a jedini pozivatelji su rute
`GET /api/sim/eng/exam/<key>` i `POST /api/sim/eng/grade`. Datoteke generira
`scripts/gen-eng-exams-json.mjs` iz `lib/engleski-simulator/exams.js`; ne uređuju
se ručno.

Pravilo: [`docs/ADR-001-ispitni-podaci.md`](../../../../docs/ADR-001-ispitni-podaci.md).
