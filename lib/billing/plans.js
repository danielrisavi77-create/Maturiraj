// lib/billing/plans.js
// Naziv i cijena plana na jednom mjestu — koristi ih platforma (/pretplata,
// paywall komponente) i šalju se simulatoru kroz DISCERE_CONFIG.
//
// OGRANIČENJE: MatEngineCore iz DISCERE_CONFIG-a trenutno čita samo `isPro` i
// odbacuje planName/price, a cijenu ima hardkodiranu u paywall stringovima
// ("🔒 Otključaj uz Pro — 19,99 €/mj"). Dok se engine ne prebaci na vrijednosti
// iz poruke, izmjena priceLabel ovdje NEĆE promijeniti cijenu prikazanu u
// simulatoru — treba je ažurirati i u MatEngineCore.tsx.

export const PLANS = {
  starter: { tier: 'starter', name: 'Starter', priceEur: 9.99,  priceLabel: '9,99 €/mj'  },
  pro:     { tier: 'pro',     name: 'Pro',     priceEur: 19.99, priceLabel: '19,99 €/mj' },
}

export const UPGRADE_PLAN = PLANS.pro

/** Naziv + cijena plana koji simulator nudi kod paywalla. */
export function upgradeOffer() {
  return { planName: UPGRADE_PLAN.name, price: UPGRADE_PLAN.priceLabel }
}
