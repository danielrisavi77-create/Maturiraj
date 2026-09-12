// lib/billing/plans.js
// Naziv i cijena plana na jednom mjestu. Simulator (MatEngineCore) je cijenu
// imao hardkodiranu na tri mjesta; sada je dobiva kroz DISCERE_CONFIG.

export const PLANS = {
  starter: { tier: 'starter', name: 'Starter', priceEur: 9.99,  priceLabel: '9,99 €/mj'  },
  pro:     { tier: 'pro',     name: 'Pro',     priceEur: 19.99, priceLabel: '19,99 €/mj' },
}

export const UPGRADE_PLAN = PLANS.pro

/** Naziv + cijena plana koji simulator nudi kod paywalla. */
export function upgradeOffer() {
  return { planName: UPGRADE_PLAN.name, price: UPGRADE_PLAN.priceLabel }
}
