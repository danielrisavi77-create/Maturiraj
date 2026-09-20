// lib/billing/plans.js
// Naziv i cijena plana na jednom mjestu — koristi ih platforma (/pretplata,
// paywall komponente) i šalju se simulatoru kroz DISCERE_CONFIG.
//
// MatEngineCore čita planName/price (Pro-only AI značajke) i standardPlanName/
// standardPrice (vježbanje i razrada rezultata) iz DISCERE_CONFIG-a, pa je izmjena
// ovdje dovoljna; hardkodirane vrijednosti u engineu su samo fallback dok poruka ne stigne.

export const PLANS = {
  starter: { tier: 'starter', name: 'Standard', priceEur: 9.99,  priceLabel: '9,99 €/mj', checkoutPlan: 'starter' },
  pro:     { tier: 'pro',     name: 'Pro',      priceEur: 19.99, priceLabel: '19,99 €/mj', checkoutPlan: 'pro' },
  // Yearly Pro is a separate checkout key (not a display tier):
  // pro_god → NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID
}

export const UPGRADE_PLAN = PLANS.pro

/** Naziv + cijena plana koji simulator nudi kod paywalla. */
export function upgradeOffer() {
  return { planName: UPGRADE_PLAN.name, price: UPGRADE_PLAN.priceLabel }
}
