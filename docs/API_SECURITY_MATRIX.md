# API security matrix

Snapshot: 2026-07-15  
Scope: svih 42 pronađenih `app/api/**/route.{js,jsx,ts,tsx}` datoteka.

Ovo je statički Phase 0 pregled trenutnog source contracta. Ne potvrđuje produkcijske env vrijednosti, aktivne Stripe webhookove, primijenjene Supabase politike ni ponašanje vanjskih servisa.

## Legenda

Service-role:

- `da` — ruta izravno stvara admin/service-role klijent ili šalje service-role vrijednost;
- `posredno` — privilegirani pristup može se dogoditi u pozvanom helperu i mora se zasebno potvrditi;
- `ne` — u samoj ruti nije pronađena uporaba service-rolea.

Review status:

- `P0` — kritični contract ili dio kritičnog exploit lanca;
- `P0-contained` — postoji lokalni containment, ali temeljni contract ili završni acceptance još nije riješen;
- `P1` — potreban prioritetni sigurnosni/hardening follow-up;
- `R0` — početno pregledano; nije pronađen P0, ali nije produkcijski odobreno.

Rate limit prikazuje ono što je pronađeno u samoj ruti. Stripe potpis ili CDN cache nisu aplikacijski rate limiter.

## Matrica

| # | Ruta | Metode | Očekivani auth contract | Service-role | Rate limit u ruti | Review status |
|---:|---|---|---|---|---|---|
| 1 | `/api/admin/ab/conclude` | POST | Verificirani admin korisnik | ne | nema | `P1` — koristi session umjesto verified usera i runtime source write |
| 2 | `/api/admin/scrape` | POST | Verificirani admin JWT | da; DB i outbound bearer | nema | `P1` — ukloniti service-role bearer i centralizirati admin guard |
| 3 | `/api/agents/content-ops` | POST | Verificirani admin + agent capability | ne | nema | `P1` — iza oba AI/agent flaga; `AGENT-01`, input/budget limit |
| 4 | `/api/agents/diagnostic` | POST | Verificirani korisnik + capability | ne | nema | `P1` — iza oba AI/agent flaga; nema distribuiranog limita |
| 5 | `/api/agents/essay` | POST | Verificirani korisnik + capability | ne | nema | `P1` — iza oba AI/agent flaga; body limit i privatnost eseja |
| 6 | `/api/agents/mentor` | POST | Verificirani korisnik + capability | ne | nema | `P1` — iza oba AI/agent flaga; `AGENT-01` |
| 7 | `/api/agents/orchestrator` | POST | Verificirani korisnik; server mora biti autoritet za user ID | ne | nema | `P1` — iza oba AI/agent flaga; context/input contract |
| 8 | `/api/agents/planner` | POST | Verificirani korisnik + capability | ne | nema | `P1` — iza oba AI/agent flaga; `AGENT-01` |
| 9 | `/api/agents/support` | POST | Verificirani korisnik + capability | ne | nema | `P1` — iza oba AI/agent flaga; `AGENT-01` |
| 10 | `/api/agents/tutor` | POST | Verificirani korisnik + capability | ne | nema | `P1` — iza oba AI/agent flaga; `AGENT-01` |
| 11 | `/api/analytics/paywall-event` | POST | Javno/optional user, ali strogo validiran anti-abuse contract | da; admin insert | nema | `P1` — javni admin write path, metadata/volume limit |
| 12 | `/api/ai` | POST | Verificirani korisnik + entitlement + quota | ne | in-memory 8 s po useru | `P1` — iza AI flaga; distribuirani limit i cost budget nisu potvrđeni |
| 13 | `/api/ai-simulator` | POST | Verificirani korisnik + entitlement + quota | ne | in-memory 10 s po useru | `P1` — iza AI flaga; visoki payload/token limiti i distribuirani limit |
| 14 | `/api/billing/refresh` | POST | Verificirani korisnik; Stripe session mora pripadati njemu | da; subscription sync | nema | `P0-contained` — iza oba billing flaga; ownership postoji i canonical unknown mapping fail-closed |
| 15 | `/api/checkout` | POST | Verificirani korisnik + server allowlist planova | posredno kroz billing helper | nema | `P0-contained` — iza oba billing flaga; canonical plan i price mapping fail-closed |
| 16 | `/api/cron/medicinar/archive-expired-targets` | GET | Poseban fail-closed job identitet | da | nema | `P1` — `CRON-01`; missing-secret contract mora biti testiran |
| 17 | `/api/cron/medicinar/weekly-briefings` | GET | Poseban fail-closed job identitet | da; također outbound bearer | ručni 1,5 s throttle prema AI-u | `P1` — service-role se ne smije slati kao interni bearer |
| 18 | `/api/cron/notify-admin` | GET | Poseban fail-closed job identitet | da | nema | `P1` — `CRON-01`, env fail-closed i mail volume |
| 19 | `/api/cron/scrape-azvo` | GET | Poseban fail-closed job identitet | da; outbound bearer | nema | `P1` — prosljeđuje service-role mrežom |
| 20 | `/api/cron/scraper` | GET | Poseban fail-closed job identitet | posredno kroz scraper | nema | `R0` — eksplicitno provjerava da secret postoji; source allowlist provjeriti |
| 21 | `/api/discere/ai-analysis` | POST | Verificirani Pro korisnik + ownership sessiona | posredno kroz billing helper | nema | `P1` — placeholder i nema AI quota |
| 22 | `/api/discere/ask-ai` | POST | Verificirani Pro korisnik + AI quota | posredno kroz billing helper | nema | `P1` — placeholder; input i cost limit |
| 23 | `/api/discere/check-access` | POST | Verificirani korisnik + server-side entitlement | posredno kroz billing helper | nema | `R0` — auth postoji; entitlement source ovisi o `SEC-P0-01` |
| 24 | `/api/email/unsubscribe` | GET | Potpisan, vremenski ograničen i po mogućnosti jednokratan token | da | nema | `P1` — sadašnji Base64 token nije autentikacija |
| 25 | `/api/exams/[razina]` | GET | Javno, samo answer-stripped sadržaj | ne | nema; public cache | `R0` — provjeriti da fallback nikada ne izloži rješenja |
| 26 | `/api/exams/check` | POST | Verificirani korisnik | ne | nema | `P1` — dodati user/IP volume limit i body size cap |
| 27 | `/api/generate-study-plan` | POST | Verificirani korisnik + entitlement + quota | ne | nema | `P1` — iza AI flaga; AI cost, prompt limit i provider error leakage |
| 28 | `/api/medicinar/briefing/generate` | POST | Verificirani korisnik ili zasebni potpisani job identitet | da; service-role klijent i bearer usporedba | tjedna idempotencija, nije rate limit | `P1` — iza AI flaga; ne koristiti service-role ključ kao bearer |
| 29 | `/api/og/compare` | GET | Javno, ograničen broj validiranih ID-eva | ne; anon client | nema | `R0` — 2–4 ID-a ograničena; dodati cache/abuse monitoring |
| 30 | `/api/parent/child-dashboard/[childId]` | GET | Budući verificirani parent + server-potvrđen consent link | ne; handler odmah vraća 503 | nije primjenjivo | `P0-contained` — hard-disabled neovisno o env flagovima; RLS consent contract ostaje otvoren |
| 31 | `/api/parent/children` | GET, POST, DELETE | GET/DELETE: verificirani parent; POST: nedostupan do consent-based V2 | ne | nema za GET/DELETE; POST odmah 503 | `P0-contained` — POST hard-disabled; portal flag kontrolira samo GET/DELETE; broad UPDATE RLS ostaje |
| 32 | `/api/prijemni/compare-insight` | POST | Verificirani Pro korisnik + AI quota | posredno kroz billing helper | nema | `P1` — iza AI flaga; AI cost limit i aktualnost modela |
| 33 | `/api/prijemni/compare-suggestions` | GET | Javno samo ako je agregat anonimiziran i k-thresholdan | da | samo query limit 500 redaka | `P1` — javni service-role aggregation i privacy threshold |
| 34 | `/api/push/send-deadline-reminders` | GET | Poseban fail-closed job identitet | da | idempotency window, nije request limiter | `P1` — `CRON-01`; secret i notification volume |
| 35 | `/api/quick-message` | POST | Verificirani parent + ownership/relationship provjera | ne | nema | `P1` — trenutačno javni placeholder koji lažno vraća uspjeh |
| 36 | `/api/session` | GET | Verificirani korisnik; session mora pripadati njemu | ne | nema | `P1` — javni Stripe session lookup bez ownership provjere |
| 37 | `/api/stripe/checkout` | POST | Trajno onemogućen; samo canonical `/api/checkout` smije biti aktivan | ne | nije primjenjivo | `P0-contained` — lokalni hard 410, ukloniti nakon konsolidacije |
| 38 | `/api/stripe/portal` | POST | Verificirani korisnik koji posjeduje Stripe customer | ne | nema | `R0` — auth postoji; dodati rate limit i kanonski customer mapping test |
| 39 | `/api/stripe/webhook` | POST | Ukloniti ili, do uklanjanja, valjani Stripe potpis | da | samo Stripe signature | `P0` — unknown price pada na Pro; drugi webhook contract |
| 40 | `/api/subscribe-digest` | POST | Javno uz double opt-in i anti-abuse zaštitu | ne | nema | `P1` — placeholder koji vraća uspjeh bez provider zapisa |
| 41 | `/api/webhook` | POST | Valjani Stripe webhook potpis i idempotentna obrada | da | samo Stripe signature | `P0-contained` — canonical unknown mapping fail-closed; legacy provisioning još mora biti uklonjen |
| 42 | `/api/webhooks/slack` | POST | Verificirani admin ili zasebni fail-closed job secret | da | nema | `P1` — centralizirati admin/job auth i testirati missing secret |

## P0 veze

### `SEC-P0-01` — entitlement source

Rute koje čitaju tier ili entitlement ne mogu se smatrati sigurnima dok korisnik može promijeniti izvorne profile entitlement stupce. To uključuje barem billing guardove, Discere access i sve Pro-only API-je.

### `SEC-P0-02` — parent consent

POST `/api/parent/children` i child dashboard hard-disabled su u handlerima te ih env flagovi ne mogu uključiti. Portal flag kontrolira samo GET/DELETE popisa linkova. To je containment, ne popravak RLS-a; V2 se ne smije implementirati ili uključiti dok negativni test ne potvrdi da parent ne može postaviti vlastiti link na `linked`.

### `BIL-P0-01` — billing provisioning

`/api/stripe/checkout` hard-disabled je s HTTP 410. Canonical `/api/checkout` i `/api/billing/refresh` iza su oba billing flaga, a canonical unknown/conflicting plan-price mapping fail-closed je prije prvog DB writea. `/api/stripe/webhook` još sadrži legacy unknown-price-to-Pro contract. Produkcija i billing zato ostaju **NO-GO**; Phase 1 zahtijeva jedan checkout, jedan webhook, server allowlist, idempotentan entitlement sync i negativne acceptance testove.

## Obvezni nastavak matrice

Za svaki red prije statusa `done` treba dopuniti:

- konkretan auth guard;
- input schema i maksimalnu veličinu bodyja;
- rate-limit ključ i politiku;
- podatkovne tablice i RLS ovisnosti;
- vanjske servise;
- negativne testove;
- ownera i acceptance dokaz.
