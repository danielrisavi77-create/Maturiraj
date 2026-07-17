# P0 popravci — za pregled (billing / RLS / naplata)

> Ovi diffovi **NISU primijenjeni** — diraju bazu (RLS/migracije) i naplatu, pa ih treba pregledati i testirati protiv žive baze / Stripe test-moda prije mergea. Verificirano čitanjem stvarnog koda 2026-07-17.
>
> Već primijenjeno (working tree, sigurno): compare `await searchParams`, mat-simulator `_META` filter, uklonjen `public/engleski-simulator/exams.json`.

---

## 1. IDOR — `user_prijemni_scores`: anon čita i mijenja SVE gostujuće rezultate

**Datoteka:** `supabase/migrations/20260419000003_user_prijemni_scores.sql:58-77`
**Problem:** Sve tri politike imaju granu `(auth.uid() is null and session_id is not null)`. Za bilo koji anoniman zahtjev `auth.uid()` je NULL, pa je uvjet istinit za **svaki** gostujući red — RLS ne veže `session_id` uz pozivatelja. Anon korisnik s javnim `anon` ključem može `SELECT`/`UPDATE` sve tuđe rezultate (prosjeci, postoci, GPA).
**Rizik:** dump svih gostujućih akademskih podataka + prepisivanje tuđih redova.

**Popravak (nova migracija):** gostujuću perzistenciju maknuti iz anon RLS-a i voditi je kroz `SECURITY DEFINER` RPC ili poslužiteljski endpoint (service-role) koji veže `session_id` na serveru.

```sql
-- supabase/migrations/20260718000000_fix_scores_rls.sql
alter table public.user_prijemni_scores enable row level security;

-- Ukloni anon "svi gostujući redovi" grane
drop policy if exists "scores_read_own"   on public.user_prijemni_scores;
drop policy if exists "scores_insert_own" on public.user_prijemni_scores;
drop policy if exists "scores_update_own" on public.user_prijemni_scores;

-- Samo prijavljeni vlasnik preko RLS-a
create policy "scores_select_auth" on public.user_prijemni_scores
  for select using (auth.uid() is not null and auth.uid() = user_id);
create policy "scores_insert_auth" on public.user_prijemni_scores
  for insert with check (auth.uid() is not null and auth.uid() = user_id);
create policy "scores_update_auth" on public.user_prijemni_scores
  for update using (auth.uid() is not null and auth.uid() = user_id);
-- (gost NEMA direktan RLS pristup; ide preko RPC/servera koji postavlja session_id)
```

**App-strana (nužno prije mergea):** gdje klijent piše/čita guest score bez logina (npr. `lib/prijemni/api.js`, `components/prijemni/*`), preusmjeriti na server-endpoint koji koristi service-role i validira `session_id` iz httpOnly cookieja — inače se guest-flow lomi.
**Test:** anon `select * from user_prijemni_scores` mora vratiti 0 redova; prijavljeni vidi samo svoje.

---

## 2. IDOR — `push_subscriptions`: anon čita/briše SVE gostujuće pretplate (PII)

**Datoteka:** `supabase/migrations/20260420000007_push_subscriptions.sql:29-38`
**Problem:** Politika `for all using ((auth.uid() is null and session_id is not null))` — isti obrazac; anon dobiva pun `SELECT`/`UPDATE`/`DELETE` nad svim gostujućim redovima koji sadrže `endpoint`, `p256dh`, `auth_key`, `user_agent`.
**Rizik:** curenje PII, masovno brisanje pretplata, hijack push-targetiranja.

```sql
-- supabase/migrations/20260718000001_fix_push_rls.sql
alter table public.push_subscriptions enable row level security;
drop policy if exists "push_own_rw" on public.push_subscriptions;

create policy "push_auth_rw" on public.push_subscriptions for all
  using      (auth.uid() is not null and user_id = auth.uid())
  with check (auth.uid() is not null and user_id = auth.uid());
-- gostujuće pretplate: samo preko servera (service-role) koji upisuje session_id
```

**App-strana:** `lib/prijemni/push.ts` / registracija push-a za goste mora ići kroz poslužiteljski endpoint (service-role), ne direktno anon klijentom.
**Test:** anon `select`/`delete` nad `push_subscriptions` = 0 redova / odbijeno.

---

## 3. View `active_user_plan` zaobilazi RLS (curenje Stripe ID-eva svih korisnika)

**Datoteka:** `supabase/migrations/20260418000000_discere_paywall.sql:155-172`
**Problem:** View bez `security_invoker=true` izvršava se s pravima **vlasnika** viewa (PG ≥15 default), pa zaobilazi RLS baznih tablica. Komentar u migraciji („RLS handled by underlying table RLS") je netočan za ne-invoker viewove. Bilo koji prijavljeni korisnik preko `supabase.from('active_user_plan').select('*')` dobije `stripe_customer_id`, `stripe_subscription_id`, `plan`, `status` **svih** korisnika.

```sql
-- supabase/migrations/20260718000002_active_user_plan_invoker.sql
alter view public.active_user_plan set (security_invoker = true);
revoke all on public.active_user_plan from anon, authenticated;
grant select on public.active_user_plan to authenticated;  -- sad poštuje RLS subscriptions
```

**Test:** korisnik A prijavljen → `select * from active_user_plan` vraća samo redak korisnika A (ili 0 ako subscriptions RLS tako kaže), ne sve.
**Napomena:** provjeri da backend helperi koji ovaj view čitaju koriste service-role (oni namjerno zaobilaze RLS i nastavljaju raditi).

---

## 4. Billing provisioning puca (42P10) čim se naplata uključi

**Datoteka:** `lib/billing/subscriptions.js:132-142` + `supabase/migrations/20260418000000_discere_paywall.sql:43-62`
**Problem:** Migracija (DO-blok, L43-58) dropa puni `UNIQUE(stripe_subscription_id)` i ostavlja samo **parcijalni** unique indeks (`... WHERE stripe_subscription_id IS NOT NULL`, L61-62). `db.from('subscriptions').upsert({...}, { onConflict: 'stripe_subscription_id' })` generira `ON CONFLICT (stripe_subscription_id)` **bez** predikata → Postgres 42P10 („no unique or exclusion constraint matching the ON CONFLICT specification").
**Rizik:** svaki webhook/refresh `syncSubscriptionToSupabase` baca → korisnik plati, ali nikad ne dobije Pro (profiles se ne ažurira). Sada skriveno jer je naplata iza `isBillingCheckoutEnabled()` zastavice.

**Popravak (vrati puni UNIQUE — dopušta više NULL-ova, pa je bezopasno):**
```sql
-- supabase/migrations/20260718000003_subscriptions_full_unique.sql
drop index if exists subscriptions_stripe_sub_idx;
alter table public.subscriptions
  add constraint subscriptions_stripe_subscription_id_key unique (stripe_subscription_id);
```
**Test:** integracijski test protiv žive baze — dvaput pozovi `syncSubscriptionToSupabase` s istim `stripeSub.id` → drugi mora UPDATE-ati, ne baciti; `profiles.plan_type` postaje `plan`.

---

## 5. Dvostruka Stripe naplata — checkout nema guard za aktivnu pretplatu

**Datoteka:** `app/api/checkout/route.js:50-83` (+ `app/pro/page.js`)
**Problem:** Ruta stvara novu checkout-session za svakog prijavljenog korisnika bez provjere ima li već aktivnu/trialing pretplatu. `app/pro/page.js` k tome prikazuje aktivan Pro CTA i standard-pretplatnicima, pa oni pokrenu **paralelnu** drugu pretplatu.
**Rizik:** korisnik plaća dvaput, dobiva jedan entitlement; povrati/sporovi.

**Popravak (server-side guard u checkout ruti, nakon auth bloka ~L54):**
```js
// nakon: if (!user) { ... 401 }
const { data: existing } = await supabase
  .from('subscriptions')
  .select('status')
  .eq('user_id', user.id)
  .in('status', ['active', 'trialing'])
  .maybeSingle()
if (existing) {
  return NextResponse.json(
    { error: 'Već imaš aktivnu pretplatu. Upravljaj njome kroz portal.', code: 'ALREADY_SUBSCRIBED' },
    { status: 409 }
  )
}
```
**Uz to (UI):** u `app/pro/page.js` tretiraj svaki `userTier !== 'free'` kao pretplatnika → prikaži „Upravljaj pretplatom" (Stripe portal), ne checkout CTA.
**Test:** korisnik s aktivnom pretplatom → `POST /api/checkout` vraća 409; UI vodi na portal.

---

## 6. Landing cijene ↔ checkout: slijepa ulica (nekupljive ponude)

**Datoteke:** `components/landing/Cijene.jsx:5-10,68` + `app/api/checkout/route.js:10-14` + `app/pro/page.js:13-16,164`
**Problem:** Cijene nude mj/3mj/6mj/god i po defaultu prikazuju **Godišnje** (prva viđena cijena Starter 6,99€/god, Pro 10€/god), ali checkout poznaje samo `starter` (mj), `pro` (mj), `pro_god` (god). Nema price ID-eva za 3mj, 6mj ni Starter-god. Klik ne prenosi razdoblje; na `/pro` je godišnji Standard onemogućen („uskoro").
**Rizik:** najistaknutija oglašena cijena i cijele 3mj/6mj ponude nekupljive; dojam bait-and-switcha (EU/HR potrošački rizik).

**Popravak — odaberi jedno:**
- **(a) brzo/sigurno:** ukloni 3mj/6mj i Starter-god iz `Cijene.jsx` i `/pro`; postavi default `billing='mj'` (`Cijene.jsx:68`); prenesi razdoblje kroz `onPlan` → `/pro?billing=god`.
- **(b) potpuno:** dodaj Stripe price ID-eve (`..._3M`, `..._6M`, `STARTER_YEARLY`) u env + `PLANOVI` mapu i omogući godišnji Standard.

**Test:** svaki vidljivi „Odaberi" gumb vodi na uspješan Stripe checkout za točno prikazanu cijenu; nema onemogućenih/nestalih ponuda.

---

### Redoslijed primjene (preporuka)
1. **#3 view** (jedan `ALTER`, najmanji rizik, veliki leak) →
2. **#1/#2 RLS** (uz app-endpoint za goste) →
3. **#4 unique** (prije uključivanja naplate) →
4. **#5 double-charge guard** →
5. **#6 pricing** (proizvodna odluka).
