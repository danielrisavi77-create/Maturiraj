# FIX SESSION — Maturiraj

Aktivni program: `PLAN_POPRAVAKA_MATURIRAJ.md`
Faza: T1 Novac i podaci
Zadatak na redu: **T1.1** `active_user_plan` security_invoker
Zastavica naplate: **OFF** (`isBillingCheckoutEnabled`) dok T1 nije zatvoren

## Token pravila

1. Ne čitaj `vision.md`, `project_brain.md`, `project_status.md`, `roadmap.md`, `QA_AUDIT_*`, stari audit od 542 nalaza.
2. Ne dumpaj cijeli tree. Otvori samo datoteke navedene u tasku.
3. Ne predlaži nove featuree. Ne diraj Game Mode, roditelje, nove predmete, `HrvatskiSimulator.jsx`.
4. Jedan task po sesiji. Ako task nije zatvoren, sljedeća sesija nastavlja isti.
5. Odgovor: što si promijenio, kako testirati, što je sljedeće — max kratko.

## Što smiješ čitati

- ovaj file
- `PLAN_POPRAVAKA_MATURIRAJ.md` samo sekciju aktivnog taska
- `docs/AUDIT_P0_FIXES.md` za T1 SQL
- konkretne datoteke taska

## Entitlement (ne izmišljaj)

- `useAuth()` = `{ user, planType, isPaid, isPro, loading }` — nema `profile`
- Discere / simulator = `isPaid`
- AI = `isPro`
- Route guard = `proxy.js` (nije `middleware.js`)
- Checkout zna samo: `starter` mj, `pro` mj, `pro_god`

## Definition of done

Kriterij iz plana za taj task. Nije done “jer izgleda ok”.
