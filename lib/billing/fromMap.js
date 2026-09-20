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

  // Discere paywall (besplatan ispitni mod → zaključana razrada). Bez ovih ključeva
  // /pro pada na DEFAULT_FROM i obećava povratak na početnu, a gumb "Natrag" i
  // redirect nakon kupnje vode na "/" umjesto natrag u simulator.
  'discere-results': { path: '/discere',                    label: 'Discere',               backLabel: '← Natrag na Discere' },
  'hrv-simulator':   { path: '/discere/hrvatski/simulator', label: 'hrvatski simulator',    backLabel: '← Natrag na simulator' },
  'hrv-results':     { path: '/discere/hrvatski/simulator', label: 'hrvatski simulator',    backLabel: '← Natrag na simulator' },
  'eng-results':     { path: '/discere/engleski/simulator', label: 'engleski simulator',    backLabel: '← Natrag na simulator' },
  'eng-feature':     { path: '/discere/engleski/simulator', label: 'engleski simulator',    backLabel: '← Natrag na simulator' },
  'mat-results':     { path: '/discere/matematika',         label: 'simulator matematike',  backLabel: '← Natrag na simulator' },
  'mat-practice':    { path: '/discere/matematika',         label: 'simulator matematike',  backLabel: '← Natrag na simulator' },
  'soc-results':     { path: '/discere/sociologija',        label: 'simulator sociologije', backLabel: '← Natrag na simulator' },
  'soc-practice':    { path: '/discere/sociologija',        label: 'simulator sociologije', backLabel: '← Natrag na simulator' },
  'soc-feature':     { path: '/discere/sociologija',        label: 'simulator sociologije', backLabel: '← Natrag na simulator' },
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
