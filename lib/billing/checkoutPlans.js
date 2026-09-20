/**
 * Canonical checkout allowlist — must stay in sync with
 * `PLANOVI` keys in app/api/checkout/route.js.
 *
 * Purchasable today: starter (monthly), pro (monthly), pro_god (Pro yearly).
 * Not purchasable: 3mj, 6mj, starter yearly (no Stripe price IDs).
 */

export const CHECKOUT_PLANS = Object.freeze(['starter', 'pro', 'pro_god'])

/**
 * UI-only hint that online checkout looks "live".
 * Keep `false` while server BILLING_CHECKOUT_ENABLED / BILLING_V2_ENABLED
 * stay fail-closed (OFF). Setting this true does NOT enable payment —
 * `isBillingCheckoutEnabled()` on the server remains the real gate.
 */
export const CHECKOUT_UI_LIVE = false

export function isCheckoutPlan(plan) {
  return CHECKOUT_PLANS.includes(plan)
}

export const CHECKOUT_UNAVAILABLE_COPY =
  'Online naplata je privremeno ugašena. Planovi i cijene su informativni — uskoro dostupno.'
