// Jedinstveni izvor istine za "from" tok kroz checkout.

export const FROM_MAP = {
  kalkulator:    { path: '/kalkulator',   label: 'kalkulator',       backLabel: '← Natrag na kalkulator' },
  'plan-ucenja': { path: '/plan-ucenja',  label: 'plan učenja',      backLabel: '← Natrag na plan učenja' },
  discere:       { path: '/discere',      label: 'Discere',          backLabel: '← Natrag na Discere' },
  engleski:      { path: '/engleski-simulator', label: 'engleski simulator', backLabel: '← Natrag na simulator' },
  dashboard:     { path: '/dashboard',    label: 'dashboard',        backLabel: '← Natrag na dashboard' },
  pocetna:       { path: '/',             label: 'početnu stranicu', backLabel: '← Natrag' },
}

export const DEFAULT_FROM = { path: '/dashboard', label: 'dashboard', backLabel: '← Natrag na dashboard' }

export function isValidFromKey(key) {
  return typeof key === 'string' && Object.prototype.hasOwnProperty.call(FROM_MAP, key)
}

export function resolveFrom(key, fallback = DEFAULT_FROM) {
  return (isValidFromKey(key) && FROM_MAP[key]) || fallback
}
