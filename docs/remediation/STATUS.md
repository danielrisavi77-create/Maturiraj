# Remediation status

## Status snapshot

Datum: 2026-07-15

Dozvoljeni statusi:

- `pending` — rad nije započeo;
- `in_progress` — paket ima jednog aktivnog vlasnika;
- `blocked` — postoji dokumentirana vanjska ovisnost;
- `review` — implementacija je završena, ali acceptance još nije potvrđen;
- `done` — svi kriteriji i dokazne provjere su završeni.

Paket se ne smije označiti kao `done` samo zato što postoji lokalna izmjena. Potrebni su acceptance test, pregled diffa i dokaz da nije prekršen opseg paketa.

## Kanonski popis od 29 paketa

| # | ID | Paket | Faza | Status | Primarni dokaz završetka |
|---:|---|---|---|---|---|
| 1 | `CFG-00` | Phase 0 baseline, statusni registar i koordinacijska pravila | 0 | `done` | Baseline i 29 paketa verificirani |
| 2 | `SEC-00` | API security matrica i offline P0 contract harness | 0 | `done` | 42/42 API rute i prolazan offline test |
| 3 | `SEC-P0-01` | Onemogućiti samostalnu promjenu entitlement stupaca | 1 | `pending` | Negativni RLS test za `tier`/plan entitlemente |
| 4 | `SEC-P0-02` | Siguran parent-child consent i uklanjanje IDOR lanca | 1 | `pending` | Parent ne može sam potvrditi link niti čitati tuđe podatke |
| 5 | `BIL-P0-01` | Jedan Stripe checkout/webhook, price allowlist i fail-closed provisioning | 1 | `pending` | Unknown price ne daje entitlement; jedan aktivni webhook contract |
| 6 | `PROD-01` | Ukloniti lažne success, feedback i placeholder product flowove | 1 | `pending` | UI ne potvrđuje radnju koju server nije verificirao |
| 7 | `AUTH-01` | Centralni auth/admin/tier API guardovi i `getUser` validacija | 2 | `pending` | Sve privatne rute koriste odgovarajući centralni guard |
| 8 | `RLS-01` | Potpuni RLS, RPC i SECURITY DEFINER pregled | 2 | `pending` | Negativni cross-account testovi prolaze |
| 9 | `CRON-01` | Fail-closed cron i posebna interna job autentikacija | 2 | `pending` | Missing secret uvijek odbijen; service-role nije mrežni bearer |
| 10 | `AI-01` | AI entitlement, input limiti, distribuirani rate limit i budget | 2 | `pending` | Auth, quota i troškovni limiti testirani |
| 11 | `AGENT-01` | Agent-core contracti, user kontekst, persistence i konkurentnost | 2 | `pending` | Agent rute imaju contract testove i ne vjeruju client user ID-u |
| 12 | `HARD-01` | Tokeni, input schema, output sanitizacija, headers i endpoint hardening | 2 | `pending` | Security checklist i negativni testovi prolaze |
| 13 | `CI-01` | Standardni build bez ručnog workarounda | 2 | `pending` | `npm run build` prolazi u definiranom CI okruženju |
| 14 | `CI-02` | Pouzdan lint, typecheck i package-manager konfiguracija | 2 | `pending` | Lint završava i typecheck pokriva dogovoreni scope |
| 15 | `TEST-01` | Proširiti unit, API, auth, billing i RLS testnu bazu | 2–8 | `pending` | Dogovorene suite kategorije prolaze u CI-u |
| 16 | `CONT-01` | Ukloniti content registry koliziju | 3 | `pending` | Jedan kanonski registar i nema neodređenog `./data` importa |
| 17 | `CONT-02` | Typed content schema, lifecycle, viewer adapteri i validator | 3 | `pending` | Schema i published gate prolaze za sve predmete |
| 18 | `CONT-03` | Curriculum mapping prema potvrđenim službenim katalozima | 3 | `pending` | Svaki ishod mapiran i stručno odobren |
| 19 | `CONT-04` | Migrirati HRV, MAT, ENG, KEM i SOC bez prekida | 3–4 | `pending` | URL, broj poglavlja i napredak imaju parity |
| 20 | `CONT-05` | Dovršiti 35 KEM i najmanje 3 SOC cjeline | 4 | `pending` | Oba predmeta prolaze stručni i content CI gate |
| 21 | `CONT-06` | Izraditi preostalih najmanje 75 outline cjelina | 5–7 | `pending` | Svih 19 predmeta ima odobren published sadržaj |
| 22 | `UX-01` | Jedan layout/Nav te responsive katalog i vieweri | 3 | `pending` | Nema duplog Nava ni horizontalnog prelijevanja |
| 23 | `UX-02` | Accessibility: semantika, tipkovnica, fokus i modal contracti | 3 | `pending` | Automatski i ručni a11y gate prolaze |
| 24 | `SEO-01` | Metadata, sitemap, robots, OG i noindex privatnih ruta | 4 | `pending` | SEO route matrica i build output verificirani |
| 25 | `LEGAL-01` | Uvjeti, privatnost, kolačići i prava obrazovnih asseta | 4 | `pending` | Objavljene pravne stranice i rights ledger |
| 26 | `PERF-01` | Homepage/client bundle, viewer loading i performance budget | 4 | `pending` | Dogovoreni browser performance budget prolazi |
| 27 | `CLEAN-01` | Backup datoteke, dependencyji, encoding i jedan package manager | 4 | `pending` | Čist inventar bez izgubljenog korisničkog rada |
| 28 | `QA-01` | Integrirana sigurnosna, sadržajna, responsive i regresijska provjera | 8 | `pending` | Završni QA izvještaj bez otvorenog P0/P1 |
| 29 | `REL-01` | Produkcijski release gate i rollback runbook | 8 | `pending` | Test/lint/build/E2E/security gate i rollback dokaz |

Sažetak trenutnog stanja:

| Status | Broj |
|---|---:|
| `in_progress` | 0 |
| `pending` | 27 |
| `blocked` | 0 |
| `review` | 0 |
| `done` | 2 |
| **Ukupno** | **29** |

## Dokaz završetka Faze 0

| Stavka | Dokaz |
|---|---|
| Vlasnici | Glavni orkestrator te odvojeni security/billing, product/UX i content/docs workstreami |
| Write scope | `.codex/`, `docs/`, `scripts/security/`, `__tests__/security/` i uski fail-closed containment na postojećim API/UI putanjama |
| Acceptance | 29/29 paketa u registru, 42/42 API rute u matrici, 6/6 flagova, 3/3 zamrznuta P0 source contracta i četiri projektna Terra agenta |
| Provjere | 340 testova prolazi, 3 Phase 1 acceptance testa su namjerno `todo`; scoped ESLint, `git diff --check` i produkcijski build s 4 GB heapom (113/113 stranica) prolaze |
| Poznati rizici | `SEC-P0-01`, `SEC-P0-02` i legacy dio `BIL-P0-01` ostaju otvoreni za Fazu 1; produkcijski status ostaje NO-GO |
| Rollback | Flagovi su default-false; parent linking/dashboard i legacy checkout hard-disabled; nema live konfiguracijskih ni produkcijskih promjena |
| Commit/PR | Nije izrađen; promjene su lokalne i necommitane |

## Valovi subagenata

Najviše tri child agenta smiju raditi paralelno. Glavni orkestrator nije vlasnik produkcijskih datoteka dok koordinira val.

| Val | Najviše tri paralelna workstreama | Uvjet izlaza |
|---|---|---|
| 0 | `CFG-00`, `SEC-00`, read-only verificiranje | Baseline, matrica i harness provjereni |
| 1 | `SEC-P0-01`, `SEC-P0-02`, `BIL-P0-01` | Sva tri P0 acceptance testa prolaze |
| 2A | `AUTH-01` + `RLS-01`, `CRON-01` + `HARD-01`, `AI-01` + `AGENT-01` | Centralni sigurnosni contracti stabilni |
| 2B | `CI-01`, `CI-02`, `TEST-01` | Standardni CI gate pouzdan |
| 3 | `CONT-01` + `CONT-02`, `CONT-03`, `UX-01` + `UX-02` | Platforma i curriculum spremni |
| 4 | `CONT-04`, `CONT-05`, `PROD-01` | Postojeći sadržaj i product truth usklađeni |
| 5–7 | Predmetni sadržaj iz `CONT-06`, najviše tri predmeta/batcha | Svaki batch prolazi neovisni review |
| 8 | `QA-01`, `REL-01`, završni `LEGAL/SEO/PERF` dokaz | Produkcijski gate ili dokumentirani NO-GO |

## Zaštita od konflikata u zajedničkom worktreeju

1. Svaki paket prije rada dobiva jednog `file ownera` i eksplicitan popis dopuštenih putanja.
2. Dva aktivna agenta ne smiju imati preklapajuće write scopeove.
3. Shared datoteke kao `package.json`, lockfileovi, centralni registry, auth helperi i migracije imaju samo jednog vlasnika po valu.
4. Agent koji otkrije potrebnu izmjenu izvan scopea ne mijenja tu datoteku, nego šalje orkestratoru dependency poruku.
5. Prije svakog patcha agent provjerava `git status --short` i čuva tuđe postojeće promjene.
6. Orkestrator integrira shared-file promjene serijski nakon što su predmetni agenti završili.
7. Testovi se pokreću nad trenutačnim zajedničkim stanjem, a izvještaj mora navesti ako uključuje tuđe necommitane izmjene.
8. Nema `git reset --hard`, checkout odbacivanja, stashanja tuđeg rada ni masovnog formatiranja izvan vlastitog scopea.

## Pravilo ažuriranja statusa

Promjena statusa mora u istom redu ili pripadajućem izvještaju imati:

- vlasnika;
- write scope;
- acceptance kriterij;
- pokrenute provjere i njihov rezultat;
- poznate rizike ili rollback;
- commit/PR identifikator kada postoji.
