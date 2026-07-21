# Phase 0 feature flags

Snapshot: 2026-07-15

Svih šest flagova je fail-closed. Samo točna vrijednost stringa `true` uključuje poznati flag; nedostajuća, pogrešno napisana ili drukčije kapitalizirana vrijednost znači `false`.

| Flag | Default | Područje | Dodatna ovisnost za aktivaciju |
|---|---:|---|---|
| `BILLING_CHECKOUT_ENABLED` | `false` | Kanonski checkout | Mora istodobno biti `BILLING_V2_ENABLED=true` |
| `BILLING_V2_ENABLED` | `false` | Novi billing contract | Mora istodobno biti `BILLING_CHECKOUT_ENABLED=true` za checkout |
| `PARENT_PORTAL_ENABLED` | `false` | Samo GET/DELETE `/api/parent/children` | Ne može aktivirati linking POST ni child dashboard |
| `PARENT_LINKING_V2_ENABLED` | `false` | Rezerviran za budući consent-based Parent V2 | Trenutačno ne može aktivirati nijednu hard-disabled rutu |
| `AI_ENDPOINTS_ENABLED` | `false` | Pet izravnih/provider AI ruta i preduvjet za osam agent ruta | Agent API dodatno zahtijeva `AGENT_API_ENABLED=true` |
| `AGENT_API_ENABLED` | `false` | Agent API | Mora istodobno biti `AI_ENDPOINTS_ENABLED=true` |
| `GAME_MODE_ENABLED` | `false` | Prijavljeni korisnici Hrvatskog i `/api/game/*` | Uključiti nakon DB migracije i content QA gatea |

Efektivna pravila:

```text
checkout         = BILLING_CHECKOUT_ENABLED && BILLING_V2_ENABLED
billing refresh  = BILLING_CHECKOUT_ENABLED && BILLING_V2_ENABLED
parent list/read = PARENT_PORTAL_ENABLED
parent unlink    = PARENT_PORTAL_ENABLED
parent linking   = HARD DISABLED, env flagovi ga ne mogu uključiti
child dashboard  = HARD DISABLED, env flagovi ga ne mogu uključiti
direct/provider AI routes = AI_ENDPOINTS_ENABLED
eight agent routes        = AI_ENDPOINTS_ENABLED && AGENT_API_ENABLED
Croatian Game Mode        = GAME_MODE_ENABLED
```

`AI_ENDPOINTS_ENABLED` trenutačno izravno štiti ovih pet ruta:

- `/api/ai`;
- `/api/ai-simulator`;
- `/api/generate-study-plan`;
- `/api/prijemni/compare-insight`;
- `/api/medicinar/briefing/generate`.

Sljedećih osam ruta zahtijeva oba AI/agent flaga:

- `/api/agents/content-ops`;
- `/api/agents/diagnostic`;
- `/api/agents/essay`;
- `/api/agents/mentor`;
- `/api/agents/orchestrator`;
- `/api/agents/planner`;
- `/api/agents/support`;
- `/api/agents/tutor`.

`PARENT_PORTAL_ENABLED` može otvoriti samo autentificirani popis postojećih linkova i njihovo brisanje kroz GET/DELETE `/api/parent/children`. POST `/api/parent/children` i GET `/api/parent/child-dashboard/[childId]` uvijek vraćaju 503 `PARENT_LINKING_V2_NOT_IMPLEMENTED`; postavljanje oba parent env flaga ne može ih aktivirati.

## Release zabrane

- Billing flagovi ne smiju se uključiti prije prolaska `BIL-P0-01` Phase 1 acceptance gatea.
- Parent portal flag ne smije se uključiti prije pregleda sigurnosti postojećih GET/DELETE operacija. Linking i dashboard ostaju hard-disabled sve do prolaska `SEC-P0-02` RLS i consent acceptance gatea.
- Agent flagovi ne smiju se uključiti prije `AI-01` i `AGENT-01` auth, input, quota i capability testova.
- Flag nije zamjena za RLS, ownership provjeru ili server-side entitlement kontrolu.
- Produkcijske vrijednosti flagova nisu potvrđene ovim dokumentom.

Canonical `/api/checkout` i `/api/billing/refresh` zahtijevaju oba billing flaga. Canonical plan/price derivation odbija nepoznat ili konfliktan mapping prije prvog DB writea. To je containment, ne produkcijsko odobrenje.

Legacy `/api/stripe/checkout` ostaje hard-disabled i vraća HTTP 410 neovisno o flagovima. Legacy `/api/stripe/webhook` i dalje sadrži unknown-price-to-Pro contract te ostaje otvoren `BIL-P0-01` za Phase 1. Billing i produkcija ostaju **NO-GO** dok se legacy webhook ne ukloni ili trajno onemogući i cijeli billing acceptance gate ne prođe.
