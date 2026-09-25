# Phase 0 baseline

## Svrha

Ovaj dokument zamrzava provjereno stanje projekta prije funkcionalnih Phase 1 popravaka. Služi kao dokazna početna točka, a ne kao tvrdnja da je projekt spreman za produkciju.

> **Povijesni snapshot:** ovaj dokument se ne ažurira retroaktivno na današnji source contract. Aktualno stanje Phase 1 popravaka i runtime acceptance vodi se u `docs/remediation/STATUS.md` i `docs/remediation/PHASE_1_RUNTIME_ACCEPTANCE.md`. Na 25. 9. 2026. source implementacije SEC-P0-01, SEC-P0-02 i BIL-P0-01 postoje, ali ostaju u `review` statusu dok non-production runtime/staging acceptance ne prođe.

Baseline je prikupljen bez poziva prema živom Stripeu, Supabaseu, AI providerima ili produkcijskom deploymentu. Vrijednosti tajni nisu pregledane ni zapisane.

## Referentni snapshot

| Polje | Vrijednost |
|---|---|
| Datum audita | 2026-07-15, Europe/Zagreb |
| Referentna grana | `main` |
| Referentni commit | `11cded5022b4c64681a96279f2d93401c0bf813a` (`11cded5`) |
| Commit vrijeme | 2026-07-14T23:34:22+02:00 |
| Commit poruka | `Update dialect map and migrate middleware proxy` |
| Lokalni tracking status pri auditu | `main...origin/main` prema lokalnom tracking refu |
| Live GitHub fetch | Nije potvrđeno tijekom audita |

Phase 0 rad odvija se u zajedničkom worktreeju. Promjene nastale nakon navedenog commita nisu dio referentnog commita dok ne budu zasebno verificirane i commitane.

## Provjereni testni rezultat

Pokrenuta naredba:

```powershell
npm run test
```

Rezultat:

- Vitest 4.1.9;
- 10 testnih datoteka;
- 301 od 301 testa prošlo;
- Vitest vrijeme približno 10,24 s;
- ukupno wall vrijeme približno 14,5 s;
- postojeći testovi dominantno pokrivaju Engleski simulator;
- nisu potvrđeni auth, RLS, billing, parent-consent ni API security acceptance testovi.

Ovaj rezultat vrijedi za audit snapshot. Nakon svake remediation faze potrebno ga je ponovno potvrditi.

## Lint baseline

Pokrenuta naredba:

```powershell
npm run lint
```

Rezultat:

- proces je prekinut timeoutom nakon približno 124,1 s;
- nije dobiven lint izvještaj;
- nije dokazano da lint prolazi;
- timeout nije dokaz konkretne lint pogreške.

Status: **NIJE POTVRĐENO**.

## Standardni build baseline

Pokrenuta naredba:

```powershell
npm run build
```

Rezultat:

- Next.js 16.2.9 / Turbopack kompilacija završila je nakon približno 2,1 minute;
- TypeScript worker zatim je završio s Node heap OOM pogreškom;
- zabilježen je `Allocation failed - JavaScript heap out of memory`;
- izlazni kod bio je 134;
- standardna build naredba zato se smatra neuspješnom i nepouzdanom.

Status: **FAIL**.

## Kontrolni build s 4 GB heapa

Pokrenuta naredba:

```powershell
node --max-old-space-size=4096 .\node_modules\next\dist\bin\next build
```

Rezultat:

- build uspješno završen;
- ukupno wall vrijeme približno 181,5 s;
- kompilacija približno 89 s;
- TypeScript provjera približno 63 s;
- generirano 113 statičkih outputa u približno 10,8 s;
- primijećeno je upozorenje da Edge runtime onemogućuje static generation za najmanje jednu stranicu; točna stranica nije potvrđena.

Status: **PASS samo uz ručno povećan heap**. Ovo nije zamjena za prolazan standardni `npm run build`.

## Phase 0 sigurnosni source-contract baseline

Offline harness nalazi se u `scripts/security/p0-baseline.mjs`. On čita samo unaprijed definirane tracked source datoteke, ne importira aplikacijske module, ne čita vrijednosti environment varijabli i ne koristi mrežu.

| Contract | Trenutni izvorni rizik | Lokalni containment | Phase 1 kriterij |
|---|---|---|---|
| `SEC-P0-01` | Broad `profiles` owner UPDATE ne štiti entitlement stupce | Nije potvrđen DB containment | Korisnik ne može promijeniti nijedan entitlement stupac |
| `SEC-P0-02` | Parent UPDATE politika dopušta promjenu vlastitog link retka bez column/transition zaštite | Linking POST i child dashboard hard-disabled su u kodu i env flagovi ih ne mogu uključiti; GET/DELETE popisa zasebno kontrolira portal flag | Samo dijete kroz jednokratni server flow može potvrditi ili odbiti link |
| `BIL-P0-01` | Legacy webhook mapira nepoznat Stripe price na Pro i koristi admin write | Legacy checkout je hard 410; canonical checkout i billing refresh su iza oba billing flaga; canonical unknown/conflicting mapping fail-closed je prije prvog DB writea | Uklonjen ili trajno ugašen legacy webhook, jedan provisioning contract i negativni billing testovi |

Pokretanje sigurnog scannera:

```powershell
node scripts/security/p0-baseline.mjs
```

Izlaz sadrži samo:

- ID i naziv contracta;
- status detekcije;
- repository-relative putanju;
- marker ID i broj retka;
- acceptance kriterij.

Ne sadrži source snippetove, apsolutne putanje ni vrijednosti tajni.

Baseline test namjerno zaključava trenutačno ranjivo stanje sva tri contracta: svaki nalaz mora imati `riskPresent=true`, svaki izvor mora biti čitljiv i svaki marker mora biti pogođen. Nestala datoteka ili zastarjeli regex zato ne mogu dati lažno zeleni Phase 0 test. Kada Phase 1 popravci slete, ova characterization očekivanja moraju se svjesno zamijeniti efektivnim RLS/billing acceptance testovima; tri postojeća acceptance testa do tada ostaju `todo`.

## Aktivni containment nakon referentnog commita

Ove lokalne promjene nastale su nakon referentnog commita i ne zatvaraju temeljne Phase 1 pakete:

- `/api/stripe/checkout` uvijek vraća HTTP 410;
- `/api/checkout` i `/api/billing/refresh` zahtijevaju `BILLING_CHECKOUT_ENABLED=true` i `BILLING_V2_ENABLED=true`;
- canonical plan/price derivation odbija unknown ili konfliktan mapping prije prvog admin DB writea;
- legacy `/api/stripe/webhook` još sadrži unknown-price-to-Pro contract i ostaje otvoreni P0;
- POST `/api/parent/children` i GET `/api/parent/child-dashboard/[childId]` uvijek vraćaju 503 `PARENT_LINKING_V2_NOT_IMPLEMENTED`, neovisno o env flagovima;
- GET/DELETE `/api/parent/children` zasebno zahtijevaju `PARENT_PORTAL_ENABLED=true`;
- `AI_ENDPOINTS_ENABLED` štiti `/api/ai`, `/api/ai-simulator`, `/api/generate-study-plan`, `/api/prijemni/compare-insight` i `/api/medicinar/briefing/generate`;
- svih osam `/api/agents/*` ruta zahtijeva i `AI_ENDPOINTS_ENABLED=true` i `AGENT_API_ENABLED=true`.

Containment smanjuje neposrednu dostupnost ranjivih tokova, ali nije dokaz da su RLS, consent ili billing contracti popravljeni. Produkcija, billing i parent linking ostaju **NO-GO** do prolaska Phase 1 acceptance gateova.

## Phase 0 gate

Phase 0 je dokumentacijski i containment gate. Ne označava P0 probleme riješenima.

Prije početka Phase 1 mora biti potvrđeno:

1. svih 29 work paketa postoji u `STATUS.md`;
2. svih 42 trenutačnih API route datoteka postoji u `docs/API_SECURITY_MATRIX.md`;
3. offline P0 baseline test prolazi bez live servisa;
4. tri Phase 1 acceptance testa ostaju jasno označena kao `todo` dok popravci nisu implementirani;
5. standardni test, lint i build rezultati ne smiju se predstavljati boljima od gore navedenih dok se stvarno ponovno ne pokrenu.

## Poznate granice baselinea

- Produkcijski Supabase RLS i primijenjene migracije nisu provjereni.
- Stripe proizvodi, aktivni webhook endpointi i webhook tajne nisu provjereni.
- Deployment env konfiguracija nije provjerena.
- Build i test rezultati ne potvrđuju produkcijsku konfiguraciju.
- Statička detekcija contracta nije zamjena za RLS/integracijske testove.
- Zbog zajedničkog worktreeja pojedine containment promjene mogu biti prisutne lokalno prije nego što su pokrivene ovim referentnim commitom.
