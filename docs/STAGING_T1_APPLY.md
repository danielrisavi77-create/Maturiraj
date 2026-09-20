# Staging T1 apply checklist

**Svrha:** redoslijed primjene SQL migracija za Tjedan 1 (naplata / RLS / entitlement) na **staging** Supabase projektu.  
**Agent / CI ne primjenjuje ovo na živi DB.** Ovaj dokument ne tvrdi da je išta applied na prod/staging.

**Checkout ostaje OFF:** ne postavljaj `BILLING_CHECKOUT_ENABLED=true` ni `BILLING_V2_ENABLED=true` dok verifikacija ne prođe. UI hint `CHECKOUT_UI_LIVE` u `lib/billing/checkoutPlans.js` također ostaje `false`.

---

## Preduvjeti

1. Supabase SQL Editor (ili `supabase db push`) na **staging** projektu.
2. Service role key postavljen u staging app env (`SUPABASE_SERVICE_ROLE_KEY`) — potreban za guest prijemni path.
3. Migracije već u repou (ne mijenjaj sadržaj ovdje — samo primijeni):

| Red | Datoteka | Što radi |
|-----|----------|----------|
| 1 | `supabase/migrations/20260715010000_profile_entitlement_guard.sql` | **SEC-P0-01** — profiles entitlement/role guard (RLS + trigger) |
| 2 | `supabase/migrations/20260718000000_fix_scores_rls.sql` | user_prijemni_scores — ukloni guest IDOR RLS |
| 3 | `supabase/migrations/20260718000001_fix_push_rls.sql` | push_subscriptions — ukloni guest IDOR RLS |
| 4 | `supabase/migrations/20260718000002_active_user_plan_invoker.sql` | `active_user_plan` → `security_invoker` |
| 5 | `supabase/migrations/20260718000003_subscriptions_full_unique.sql` | UNIQUE(`stripe_subscription_id`) za Stripe upsert |

Primijeni **točno tim redoslijedom**. Ako je neka već primijenjena, većina je idempotentna (DROP IF EXISTS / CREATE OR REPLACE); ipak pokreni verifikacijske SELECT-ove.

---

## Korak A — Apply

U staging SQL Editoru, redom:

```sql
-- A1 SEC-P0-01
\i supabase/migrations/20260715010000_profile_entitlement_guard.sql
-- (ili zalijepi sadržaj datoteke)

-- A2 scores RLS
\i supabase/migrations/20260718000000_fix_scores_rls.sql

-- A3 push RLS
\i supabase/migrations/20260718000001_fix_push_rls.sql

-- A4 active_user_plan
\i supabase/migrations/20260718000002_active_user_plan_invoker.sql

-- A5 subscriptions unique
\i supabase/migrations/20260718000003_subscriptions_full_unique.sql
```

U web SQL Editoru nema `\i` — otvori svaku datoteku i zalijepi sadržaj, jednu po jednu.

---

## Korak B — Verifikacijski SELECT-ovi

### B1 — SEC-P0-01 entitlement guard

```sql
-- Trigger postoji
select tgname, tgenabled
from pg_trigger
where tgrelid = 'public.profiles'::regclass
  and tgname = 'guard_profile_entitlement_fields';

-- Funkcija postoji
select proname, prosecdef
from pg_proc
where proname = 'guard_profile_entitlement_fields';

-- Očekivano: tgname = guard_profile_entitlement_fields, prosecdef = false (SECURITY INVOKER)
```

Ručni smoke (kao authenticated, ne service_role): pokušaj `update profiles set plan_type = 'pro' where id = auth.uid()` — mora pasti s porukom tipa `profiles.plan_type is maintained by a trusted server context`.

### B2 — scores RLS (20260718…000)

```sql
select polname, cmd, qual::text, with_check::text
from pg_policies
where tablename = 'user_prijemni_scores'
order by polname;

-- Očekivano: scores_select_auth / scores_insert_auth / scores_update_auth
-- NE smije ostati politika s granom (auth.uid() is null and session_id is not null)
```

### B3 — push RLS

```sql
select polname, cmd, qual::text
from pg_policies
where tablename = 'push_subscriptions'
order by polname;

-- Očekivano: push_auth_rw (auth.uid() = user_id)
```

### B4 — active_user_plan invoker

```sql
select c.relname, c.reloptions
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname = 'active_user_plan';

-- Očekivano: reloptions sadrži security_invoker=true (ili 'true')
```

### B5 — subscriptions unique

```sql
select conname, contype
from pg_constraint
where conrelid = 'public.subscriptions'::regclass
  and conname = 'subscriptions_stripe_subscription_id_key';

-- Očekivano: jedan red, contype = 'u'
```

---

## Korak C — Guest prijemni smoke (nakon SQL)

App path već koristi httpOnly cookie `mat_guest_sid` + service-role API (ne direktan anon RLS):

| Dio | Lokacija |
|-----|----------|
| Cookie | `lib/prijemni/guestSessionServer.js` → `GUEST_COOKIE = 'mat_guest_sid'` |
| API | `app/api/prijemni/guest-scores/route.js` |
| Client | `lib/prijemni/scores.js` → `fetch('/api/prijemni/guest-scores')` |
| Push | `app/api/prijemni/guest-push` + `lib/prijemni/push.ts` |

### Smoke checklist (staging app + staging DB)

1. **Incognito / clear cookies**, otvori staging `/prijemni` (ili flow koji sprema bodove).
2. Unesi/spremi guest bodove **bez prijave**.
3. DevTools → Application → Cookies: postoji `mat_guest_sid` (HttpOnly).
4. Network: `POST /api/prijemni/guest-scores` → 200; body **ne** smije slati tuđi `session_id` (sid dolazi samo iz cookieja).
5. Refresh stranice → bodovi se vrate (`GET /api/prijemni/guest-scores`).
6. Drugi incognito profil **ne** vidi tuđe bodove.
7. (Opcionalno) prijavi se → migrate endpoint (`/api/prijemni/guest-scores/migrate`) prenese podatke na `user_id`.
8. Direktni Supabase anon `select * from user_prijemni_scores` **ne** smije vratiti guest redove drugih sessiona (RLS zatvoren).

Ako korak 4/8 padne, **ne** uključuj billing flagove; popravi RLS / service role env.

---

## Korak D — Što NEraditi

- Ne tvrdi u PR-u da je SQL “applied on live”.
- Ne pali `BILLING_CHECKOUT_ENABLED` / `BILLING_V2_ENABLED` / `CHECKOUT_UI_LIVE` u sklopu ovog checklista.
- Ne primjenjuj na produkciju dok staging smoke (B + C) ne prođe.

---

## Checkout allowlist (referenca UI)

Kupivi planovi u `app/api/checkout`: `starter` | `pro` | `pro_god`.  
UI ne smije nuditi 3mj / 6mj / Starter-god kao kupive opcije.
