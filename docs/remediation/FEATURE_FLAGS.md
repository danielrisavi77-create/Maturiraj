# Phase 0 feature flags

Phase 0 snapshot: 2026-07-15  
Aktualno source usklađivanje: **2026-09-25** (`main` @ `0d2bb0d3be7b37f99e18130b8d4906dbda3b8e5f`).

Napomena: izvorni Phase 0 dizajn imao je Parent V2 hard-disabled. Aktualni source sada sadrži consent-based V2 implementaciju, ali produkcijska aktivacija i dalje ostaje fail-closed dok runtime acceptance ne prođe.

Svih sedam dokumentiranih flagova je fail-closed. Samo točna vrijednost stringa `true` uključuje poznati flag; nedostajuća, pogrešno napisana ili drukčije kapitalizirana vrijednost znači `false`.

| Flag | Default | Područje | Dodatna ovisnost za aktivaciju |
|---|---:|---|---|
| `BILLING_CHECKOUT_ENABLED` | `false` | Kanonski checkout | Mora istodobno biti `BILLING_V2_ENABLED=true` |
| `BILLING_V2_ENABLED` | `false` | Novi billing contract | Mora istodobno biti `BILLING_CHECKOUT_ENABLED=true` za checkout |
| `PARENT_PORTAL_ENABLED` | `false` | Parent portal i prvi dio Parent V2 gatea | Za linking/dashboard mora istodobno biti `PARENT_LINKING_V2_ENABLED=true` |
| `PARENT_LINKING_V2_ENABLED` | `false` | Consent-based Parent V2 invitation/consent/dashboard | Zahtijeva i `PARENT_PORTAL_ENABLED=true`; ne uključivati prije `SEC-P0-02` runtime acceptancea |
| `AI_ENDPOINTS_ENABLED` | `false` | Pet izravnih/provider AI ruta i preduvjet za osam agent ruta | Agent API dodatno zahtijeva `AGENT_API_ENABLED=true` |
| `AGENT_API_ENABLED` | `false` | Agent API | Mora istodobno biti `AI_ENDPOINTS_ENABLED=true` |
| `GAME_MODE_ENABLED` | `false` | Prijavljeni korisnici Hrvatskog i `/api/game/*` | Uključiti nakon DB migracije i content QA gatea |

Efektivna pravila:

```text
checkout         = BILLING_CHECKOUT_ENABLED && BILLING_V2_ENABLED
billing refresh  = BILLING_CHECKOUT_ENABLED && BILLING_V2_ENABLED
parent list/read = PARENT_PORTAL_ENABLED && PARENT_LINKING_V2_ENABLED
parent unlink    = PARENT_PORTAL_ENABLED && PARENT_LINKING_V2_ENABLED
parent linking   = PARENT_PORTAL_ENABLED && PARENT_LINKING_V2_ENABLED
child dashboard  = PARENT_PORTAL_ENABLED && PARENT_LINKING_V2_ENABLED
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

`PARENT_PORTAL_ENABLED` i `PARENT_LINKING_V2_ENABLED` zajedno mogu aktivirati Parent Consent V2 source put: detached pending invitation, child-authenticated consent RPC i child dashboard koji prije admin čitanja zahtijeva linked V2 consent dokaz. Oba su flaga default-false; ovaj dokument ne odobrava njihovo uključivanje u produkciji prije runtime RLS/IDOR/consent acceptancea.

## Release zabrane

- Billing flagovi ne smiju se uključiti prije prolaska `BIL-P0-01` Phase 1 acceptance gatea.
- Parent flagovi ne smiju se uključiti u produkciji prije prolaska `SEC-P0-02` runtime RLS/IDOR/consent/revoke acceptance gatea.
- Agent flagovi ne smiju se uključiti prije `AI-01` i `AGENT-01` auth, input, quota i capability testova.
- Flag nije zamjena za RLS, ownership provjeru ili server-side entitlement kontrolu.
- Produkcijske vrijednosti flagova nisu potvrđene ovim dokumentom.

Canonical `/api/checkout` i `/api/billing/refresh` zahtijevaju oba billing flaga. Canonical plan/price derivation odbija nepoznat ili konfliktan mapping prije prvog DB writea. To je containment, ne produkcijsko odobrenje.

Legacy `/api/stripe/checkout` ostaje hard-disabled. Legacy `/api/stripe/webhook` je sada trajno fail-closed i vraća HTTP 410 bez Stripe/admin pristupa. Canonical `/api/webhook` odbija unknown/missing/mismatched cijene prije entitlement writea i ima idempotency ledger. `BIL-P0-01` ipak ostaje u `review` statusu dok Stripe test-mode/staging acceptance cijelog lifecyclea ne prođe.
