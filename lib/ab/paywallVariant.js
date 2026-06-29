// lib/ab/paywallVariant.js
// ─────────────────────────────────────────────────────────────────────────────
// A/B test: ROI-framed paywall copy vs generic "Pro feature".
//
// Variant assignment is sticky per browser (localStorage key "pw_ab").
// Force a variant by setting ?pw_ab=control or ?pw_ab=roi in the URL.
// Track conversions by checking which variant was shown before /pro click.
//
// Variants:
//   control  — current "Pro feature" + "Nadogradi →"
//   roi      — direct value prop: price anchor + concrete save framing
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'pw_ab'

/**
 * Returns 'control' or 'roi'.
 * Safe to call client-side only (returns 'control' on server / SSR).
 */
export function getPaywallVariant() {
  if (typeof window === 'undefined') return 'control'

  // URL override (for manual QA or forced analytics segments)
  const urlParam = new URLSearchParams(window.location.search).get('pw_ab')
  if (urlParam === 'control' || urlParam === 'roi') {
    try { localStorage.setItem(STORAGE_KEY, urlParam) } catch {}
    return urlParam
  }

  // Sticky assignment
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'control' || stored === 'roi') return stored
  } catch {}

  // 50/50 random assignment
  const variant = Math.random() < 0.5 ? 'control' : 'roi'
  try { localStorage.setItem(STORAGE_KEY, variant) } catch {}
  return variant
}

// ── Copy per feature × variant ────────────────────────────────────────────────

export const PAYWALL_COPY = {
  // PuttingRateCard — vjerojatnost upisa
  puttingRate: {
    control: {
      badge:   'Pro feature',
      title:   'Vjerojatnost upisa',
      desc:    'Statistička procjena vjerojatnosti upisa bazirana na tvom napretku i historical data.',
      cta:     'Nadogradi →',
    },
    roi: {
      badge:   '500€ ili 20€/mj?',
      title:   'Vidi koliko stvarno imaš šanse',
      desc:    'Instruktor košta 500€+ godišnje i ne zna tvoj progress. Ova procjena zna sve.',
      cta:     'Otključaj za MEF upis →',
    },
  },

  // AIBriefingCard — tjedni AI briefing
  aiBriefing: {
    control: {
      badge:   'Pro feature',
      title:   'AI tjedni briefing',
      desc:    'Svaki ponedjeljak Claude analizira tvoj progress i generira personalizirani plan za tjedan.',
      cta:     'Nadogradi →',
    },
    roi: {
      badge:   '19,99 €/mj',
      title:   'Tvoj osobni MEF trener, svaki tjedan',
      desc:    'Privatni instruktor = 500€/mj. Ovo je isti savjet, baziran na tvojem stvarnom napretku.',
      cta:     'Aktiviraj za 19,99 €/mj →',
    },
  },

  // WeaknessHeatmap — locked topics
  weaknessLock: {
    control: {
      text: (n) => `🔒 Još ${n} slabih tema otključano je uz Pro.`,
      cta:  'Nadogradi →',
    },
    roi: {
      text: (n) => `🔒 ${n} skrivenih slabosti — pronađi ih prije prijemnog.`,
      cta:  'Otključaj sve teme →',
    },
  },

  // SimulatorLauncher — free limit notice
  simulatorFree: {
    control: {
      label: 'Free plan:',
      desc:  '1 simulator tjedno. Standard i Pro imaju unlimited.',
      cta:   'Nadogradi',
    },
    roi: {
      label: 'Tipičan MEF kandidat odradi 15+ simulatora:',
      desc:  '19,99 €/mj vs. 500€ instruktor — i uvijek znaš gdje stojiš.',
      cta:   'Otključaj neograničene →',
    },
  },
}
