# FIX SESSION — Maturiraj

Aktivni program: `PLAN_POPRAVAKA_MATURIRAJ.md`
Faza: T3 Gold path
Zadatak na redu: **T3.1 ostatak** — `/pro` treba importati `initialBillingFromSearch`; `/prijava` default redirect `/dashboard`
Zastavica naplate: **OFF**

## Gotovo na `fix/t1-billing-rls` (PR #4)

- T1 + T2 u gitu
- T3.1 dashboard već ima PrimaryCard "Što dalje danas"
- `fromMap`: dashboard, engleski; DEFAULT_FROM = /dashboard
- `lib/billing/initialBilling.js` spreman za `/pro`

## Još zalijepiti u istoj fazi

1. `app/pro/page.js`: `useState(initialBillingFromSearch(params))` + `isPaid` → portal + 409
2. `app/prijava/page.js`: `redirect || '/dashboard'` i signup student → `/dashboard`

Ne diraj HrvatskiSimulator / Game Mode / roditelje.
