# FIX SESSION — Maturiraj

Aktivni program: `PLAN_POPRAVAKA_MATURIRAJ.md`
Faza: T2 zatvoren u gitu; sljedeće je T3
Zadatak na redu: **T3.1** dashboard kao ulaz (next-step CTA)
Zastavica naplate: **OFF**

## Gotovo na branchu `fix/t1-billing-rls` (PR #4)

- T1.1–T1.4 migracije + guest API
- T1.5 Cijene: samo mj / god; Standard samo mjesečno; CTA šalje `/pro?billing=`
- T2.1 proxy gateovi
- T2.2 AI rute već imaju requirePro / requireStandardOrPro
- T2.3 exam API već skida `sol` i `exp`
- T2.4 zadnji fail-open cron: `archive-expired-targets`

**Živa baza:** pustiti `20260718*` i `20260920*` na staging.

## Token pravila

Jedan task. Ne čitaj vision/brain/status/roadmap. Ne diraj HrvatskiSimulator / Game Mode / roditelje.
