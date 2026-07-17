// Jedinstveni izvor istine za "from" tok kroz checkout: paywall → /pro → Stripe → /uspjeh.
// Prije je FROM_MAP postojao samo u app/pro/page.js, a checkout success_url ga nije nosio,
// pa se odredište gubilo — korisnik je uvijek završavao na /discere unatoč obećanju s /pro
// ("Kupiš li plan, vraćamo te natrag na kalkulator"). Sada iste vrijednosti dijele /pro,
// /api/checkout (sanitizacija + success/cancel URL) i /uspjeh (redirect nakon kupnje).

export const FROM_MAP = {
  kalkulator:    { path: '/kalkulator',   label: 'kalkulator',       backLabel: '← Natrag na kalkulator' },
  'plan-ucenja': { path: '/plan-ucenja',  label: 'plan učenja',      backLabel: '← Natrag na plan učenja' },
  discere:       { path: '/discere',      label: 'Discere',          backLabel: '← Natrag na Discere' },
  pocetna:       { path: '/',             label: 'početnu stranicu', backLabel: '← Natrag' },
}

export const DEFAULT_FROM = { path: '/', label: 'početnu stranicu', backLabel: '← Natrag' }

// Whitelist provjera — siguran ključ za ugrađivanje u URL (success_url) i za lookup.
export function isValidFromKey(key) {
  return typeof key === 'string' && Object.prototype.hasOwnProperty.call(FROM_MAP, key)
}

// Puni info objekt za "from" ključ (path/label/backLabel), s fallbackom.
export function resolveFrom(key, fallback = DEFAULT_FROM) {
  return (isValidFromKey(key) && FROM_MAP[key]) || fallback
}
