# FIX SESSION — Maturiraj

Aktivni program: `PLAN_POPRAVAKA_MATURIRAJ.md`
Faza: T2 Pristup i API
Zadatak na redu: **T2.2** server-side requirePro na `/api/ai`
Zastavica naplate: **OFF**

## Gotovo u gitu (branch `fix/t1-billing-rls`)

- T1.1 view invoker — `20260920000001` + stariji `20260718000002`
- T1.2/T1.3 RLS + guest API već postoje (`guest-scores`, `guest-push`); dodan `scores_delete_auth`
- T1.4 unique — `20260718000003` + idempotentni `20260920000002`
- T1.5 cijene — landing prenosi `?billing=`; 3mj/6mj maknuti s live Cijene (sljedeći commit ako nije u ovom)
- T2.1 `proxy.js` — `/dashboard` login, `/engleski-simulator` paid, post-login → `/dashboard`, admin → `/prijava`

**Živa baza:** migracije 20260718* i 20260920* treba pustiti na staging.

## Token pravila

Jedan task. Ne čitaj vision/brain/status/roadmap. Ne diraj HrvatskiSimulator / Game Mode / roditelje.
