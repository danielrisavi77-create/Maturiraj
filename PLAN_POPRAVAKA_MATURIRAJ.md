# Plan i program popravaka — Maturiraj

**Projekt:** maturiraj.hr + Discere  
**Datum:** 20. rujna 2026.  
**Faza:** pre-launch hardening (ne širenje proizvoda)  
**Pravilo:** nula novih featurea dok se ovaj program ne zatvori.

Cilj programa nije “više aplikacije”. Cilj je:

> Korisnik se može prijaviti, platiti točno ono što vidi, dobiti ono što je platio, riješiti jedan ispit i znati što dalje — bez curenja podataka i bez slijepih ulica.

---

## 0. Pravila izvođenja

1. Jedan tok rada u trenutku. Ne paralelno Game Mode + roditelji + novi predmeti.
2. Svaki task ima **kriterij gotovosti**. Nije gotovo dok se to ne može pokazati.
3. Svaka izmjena entitlements / baze / Stripe ide prvo na **test** (Stripe test mode + staging baza).
4. Ne dirati `HrvatskiSimulator.jsx` (~20k linija) osim ako task to izričito zahtijeva zbog crasha.
5. Nakon svakog većeg bloka: login, logout, free / starter / pro, jedan simulator, mobitel.
6. Dokumentacija (`agents/FIX_SESSION.md`, `agents/bugs.md`) se ažurira istog dana, inače sljedeća sesija opet krene krivo.

### Što je izvan ovog programa

- Novi predmeti (24/24)
- Game Mode proširenje
- Roditeljski portal u produkciji
- Novi AI agenti
- Rebrand / veliki UI redesign
- Referral, offline, push u produkciji
- Medicinar / atlas kao prioritet

---

## Program u 4 tjedna

| Tjedan | Ime | Ishod |
|---|---|---|
| T1 | Novac i podaci | Baza ne curi. Checkout se smije uključiti. Cijena na ekranu = cijena na Stripeu. |
| T2 | Pristup i API | Free ne vidi paid. API ne zaobilazi paywall. Rute su usklađene. |
| T3 | Jedan korisnički krug | Prijava → dashboard → jedan simulator → rezultat → sljedeći korak. Radi na mobitelu. |
| T4 | AI Pro + čišćenje | Pro chat radi. Nema retired modela. Nema mrtvog koda na ulazu. Launch checklist prođen. |

Ako T1 nije zatvoren, T2–T4 se ne počinju “usput”.

---

# TJEDAN 1 — Novac i podaci

Osnova: `docs/AUDIT_P0_FIXES.md`  
Status danas: frontend dijelovi (compare `searchParams`, mat `_META` filter) su već u kodu. **SQL/billing dio nije primijenjen na živu bazu.**

Naplata je trenutno iza `isBillingCheckoutEnabled()`. Ne paliti zastavicu prije kraja T1.

## T1.1 View `active_user_plan` — curenje Stripe ID-eva

**Prioritet:** P0  
**Datoteke:** nova migracija u `supabase/migrations/`  
**Problem:** view bez `security_invoker` zaobilazi RLS; prijavljeni korisnik može vidjeti plan i Stripe ID svih korisnika.

**Posao:**
- `ALTER VIEW public.active_user_plan SET (security_invoker = true);`
- `REVOKE ALL` od `anon`; `GRANT SELECT` samo `authenticated`
- Provjera da backend koji namjerno čita sve koristi service-role

**Gotovo kad:**
- Korisnik A: `select * from active_user_plan` vraća samo svoj red (ili 0)
- Anon: 0 redova
- Webhook/sync i dalje radi sa service-role

## T1.2 RLS — `user_prijemni_scores`

**Prioritet:** P0  
**Datoteke:** nova migracija + `lib/prijemni/api.js` i povezani klijentski pozivi  
**Problem:** anon politika `(auth.uid() is null and session_id is not null)` otvara SVE gostujuće redove.

**Posao:**
- Ukloniti anon grane s RLS-a
- Gost piše/čita samo preko server endpointa (service-role + `session_id` iz httpOnly cookieja)
- Prijavljeni vidi samo `user_id = auth.uid()`

**Gotovo kad:**
- Anon `select * from user_prijemni_scores` = 0 redova
- Gost i dalje može spremiti svoj rezultat kroz API
- Korisnik ne vidi tuđi rezultat

## T1.3 RLS — `push_subscriptions`

**Prioritet:** P0  
**Datoteke:** nova migracija + `lib/prijemni/push.ts`  
**Problem:** isti IDOR obrazac; curenje endpoint/p256dh/auth_key.

**Posao:** isto kao T1.2 — RLS samo za auth user; gost preko servera.

**Gotovo kad:**
- Anon ne može select/delete tuđe pretplate
- Registracija push-a za gosta ide kroz API, ne direktno na tablicu

## T1.4 Unique constraint na `subscriptions.stripe_subscription_id`

**Prioritet:** P0 (blocker za uključivanje naplate)  
**Datoteke:** nova migracija + `lib/billing/subscriptions.js`  
**Problem:** parcijalni unique indeks + `upsert(..., { onConflict: 'stripe_subscription_id' })` → Postgres 42P10. Korisnik plati, plan se ne upiše.

**Posao:**
- Vratiti puni `UNIQUE(stripe_subscription_id)`
- Dva puta pozvati `syncSubscriptionToSupabase` s istim Stripe sub ID

**Gotovo kad:**
- Drugi sync je UPDATE, ne exception
- `profiles.plan_type` se postavi
- Postojeći testovi u `__tests__/security/billing-*.test.js` prolaze i protiv test baze

## T1.5 Cijene = checkout

**Prioritet:** P0  
**Datoteke:** `components/landing/Cijene.jsx`, `app/Cijene.js`, `app/pro/page.js`, `app/api/checkout/route.js`

**Odluka A:** maknuti 3 mj / 6 mj / Starter-god s UI-ja dok nema Stripe price ID-eva. Default billing = mjesečno. Vidljivo: Starter mj, Pro mj, Pro god. Klik prenosi `/pro?billing=god`. Već pretplaćen vidi portal, ne novi checkout.

**Gotovo kad:** svaki “Odaberi” otvara Checkout za istu cijenu.

## T1.6 Test naplate u test-modu

Webhook samo `/api/stripe/webhook`. Zastavica na produkciji ostaje OFF do reviewa.

### T1 izlazna vrata

- [ ] T1.1–T1.4 migracije na staging
- [ ] T1.5 UI usklađen
- [ ] `isBillingCheckoutEnabled` off na produkciji

---

# TJEDAN 2 — Pristup, rute, API

T2.1 `proxy.js`: `/dashboard` login; `/engleski-simulator` paid; post-login → `/dashboard`.
T2.2 `requirePro` na `/api/ai`; paid/pro na study-plan i ai-simulator.
T2.3 Exam API stripa `sol` i `exp`.
T2.4 Cron fail-closed bez `CRON_SECRET`.
T2.5 Nema `profile` iz `useAuth`.

---

# TJEDAN 3 — Jedan korisnički krug

Gold path: matematika ili hrvatski. Dashboard → simulator → rezultat → plan. Mobitel 390px.

---

# TJEDAN 4 — AI Pro + čišćenje

Važeći Claude model, pravi promptovi, capabilityGate + supabase, obrisati `app/components copy`, launch checklist, tek tad paliti naplatu.

---

# Dnevni ritam

Jedan task dnevno. Commit `fix(t1): ...`. Ažurirati `agents/FIX_SESSION.md`.

# Ne sada

Novi predmeti, Game Mode, roditelji, rebrand, referral.
