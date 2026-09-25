# Phase 1 P0 runtime acceptance

Datum usklađivanja: **2026-09-25**  
Baseline source: main @ 0d2bb0d3be7b37f99e18130b8d4906dbda3b8e5f

Ovaj dokument ne mijenja frozen Phase 0 snapshot. Svrha mu je dokazati aktualne Phase 1 popravke protiv stvarnog non-production Postgresa i Stripe test moda.

## Status prije runtime provjere

| Paket | Source status | Preostali dokaz |
|---|---|---|
| SEC-P0-01 | review | stvarni RLS/column/trigger acceptance |
| SEC-P0-02 | review | stvarni parent/child cross-account, consent, replay i revoke |
| BIL-P0-01 | review | Stripe test-mode/staging lifecycle |

Ni jedan paket ne postaje done samo zato što source testovi prolaze.

## 1. Lokalni Supabase

Pokreni:

    npm run supabase:start
    npm run supabase:reset
    npx supabase status -o env

Vrijednosti iz zadnje naredbe mapiraj u privremeni PowerShell:

    $env:P0_ACCEPTANCE_TARGET = "local"
    $env:P0_ACCEPTANCE_CONFIRM = "I_UNDERSTAND_NONPROD_ONLY"
    $env:P0_SUPABASE_URL = "http://127.0.0.1:54321"
    $env:P0_SUPABASE_ANON_KEY = "<anon key iz supabase status>"
    $env:P0_SUPABASE_SERVICE_ROLE_KEY = "<service role key iz supabase status>"
    npm run security:p0:runtime

Harness:
- stvara samo privremene testne korisnike;
- potvrđuje email kroz admin API;
- koristi stvarne authenticated JWT sesije;
- provjerava RLS, column privileges i trigger;
- provjerava Parent Consent V2;
- briše privremene auth korisnike u finally bloku;
- odbija production target.

### SEC-P0-01 acceptance

Mora dokazati:
- owner može promijeniti obični full_name;
- owner NE može promijeniti tier, plan_type, pro_expires_at, role ni email;
- owner ne može mijenjati tuđi profil;
- service-role može promijeniti entitlement.

### SEC-P0-02 acceptance

Mora dokazati:
- parent može stvoriti samo detached pending invitation;
- parent ne može UPDATE-om sam sebe prebaciti u linked;
- parent ne može izravno INSERT-ati linked odnos;
- treći korisnik ne vidi pending invitation;
- samo korisnik s potvrđenim ciljanim emailom može prihvatiti;
- replay prihvaćanja pada;
- parent nakon validnog V2 consent-a dobiva child-read pravo;
- nepovezani korisnik ga ne dobiva;
- revoke briše odnos i read pravo nestaje.

## 2. Staging Supabase

Isti harness smije se pokrenuti samo na eksplicitno non-production projektu:

    $env:P0_ACCEPTANCE_TARGET = "staging"
    $env:P0_ACCEPTANCE_CONFIRM = "I_UNDERSTAND_NONPROD_ONLY"
    $env:P0_SUPABASE_URL = "<staging project URL>"
    $env:P0_SUPABASE_ANON_KEY = "<staging anon>"
    $env:P0_SUPABASE_SERVICE_ROLE_KEY = "<staging service role>"
    npm run security:p0:runtime

Ne stavljati service-role vrijednost u log, PR body ili artefakte.

## 3. BIL-P0-01 — Stripe test-mode / staging

Source contract prvo mora proći:

    npx vitest run __tests__/security/billing-webhook-v2.test.js

Zatim na stagingu i Stripe test modu:

1. potvrdi da /api/stripe/webhook uvijek vraća HTTP 410;
2. Stripe webhook target mora biti samo canonical /api/webhook;
3. pošalji valjani test event za poznati Starter monthly price;
4. potvrdi profiles/subscriptions = Starter;
5. pošalji valjani test event za Pro monthly;
6. potvrdi = Pro;
7. ponovi za Pro yearly;
8. pošalji unknown price;
9. potvrdi retryable failure i nula entitlement writea;
10. pošalji metadata/price mismatch;
11. potvrdi nula entitlement writea;
12. replayaj isti event ID;
13. potvrdi idempotentno ponašanje — nema drugog provisioning writea;
14. simuliraj customer.subscription.deleted;
15. potvrdi deaktivaciju prava;
16. provjeri da postojeći aktivni pretplatnik kroz normalni UI ne otvara paralelni checkout za isti plan.

### Minimalni dokaz za PR

Zabilježi samo:
- datum;
- staging project identifier bez tajni;
- Git head SHA;
- test event ID-eve;
- očekivani i dobiveni plan status;
- rezultat replaya;
- rezultat delete/cancel lifecyclea.

Nikad ne spremati:
- webhook secret;
- Stripe secret key;
- Supabase service-role key;
- puni webhook payload s PII.

## 4. Standardne offline provjere

Prije promjene statusa u done:

    npx vitest run __tests__/security/entitlement-rls.test.js __tests__/security/parent-consent-v2.test.js __tests__/security/billing-webhook-v2.test.js
    npm run security:secrets
    npx tsc --noEmit
    npm run lint
    npm test
    npm run build

Ako puni lint/test/build nije izvediv zbog potvrđenog nepovezanog problema, status ostaje review i PR mora navesti točan blokator.

## 5. Status transition

Tek nakon dokaza:

- SEC-P0-01: review -> done
- SEC-P0-02: review -> done
- BIL-P0-01: review -> done

Feature flagovi se ne pale automatski ovom promjenom statusa. Produkcijski release ostaje zaseban REL-01 gate.
