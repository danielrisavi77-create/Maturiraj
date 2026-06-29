// components/discere/paywall/paywallCopy.js
// ─────────────────────────────────────────────────────────────────────────────
// Central copy + constants config for the paywall system.
// A/B test: swap values here without touching any component.
// ─────────────────────────────────────────────────────────────────────────────

/** Number of free questions before the gate kicks in. */
export const FREE_LIMIT = 3

// ── Simulator paywall ─────────────────────────────────────────────────────────

export const SIMULATOR_COPY = {
  headline:     'Koliko bi dobio na maturi?',
  subline:      'Odgovorio si na prva 3 pitanja — sad ide pravi test.',
  bullets: [
    { icon: '▶', text: 'Saznaj svoj realni rezultat na maturi' },
    { icon: '📊', text: 'Otkrij gdje gubiš najviše bodova' },
    { icon: '🎯', text: 'Vidi koja pitanja te ruše ispod praga' },
    { icon: '📈', text: 'Spremi napredak i prati kroz ispite' },
  ],
  cta:          'Nastavi simulator → Standard',
  ctaSecondary: 'Već si počeo — šteta stati na pola.',
}

// ── Results paywall ───────────────────────────────────────────────────────────

export const RESULTS_COPY = {
  headline:     'Rezultat vidiš. Razlog grešaka još ne.',
  subline:      'Otključaj AI analizu i saznaj što ti konkretno ruši bodove prije prave mature.',
  cta:          'Shvati svaku grešku — otključaj Pro',
  ctaSecondary: 'Pogledaj planove i cijene',
  lockedCards: [
    {
      id:     'why-wrong',
      icon:   '🔍',
      title:  'Zašto si pogriješio?',
      teaser: 'AI prolazi svaku grešku i objašnjava točno što je pošlo krivo.',
      // hex values so they work in template literals (e.g. ${accent}33)
      accent: '#4b7bff',
    },
    {
      id:     'weak-areas',
      icon:   '📊',
      title:  'Tvoja slaba područja',
      teaser: 'Vizualni prikaz kategorija gdje gubiš najviše bodova.',
      accent: '#7c5cfc',
    },
    {
      id:     'plan',
      icon:   '🎯',
      title:  'Personalizirani plan popravka',
      teaser: 'Konkretni koraci za svako slabo područje do mature.',
      accent: '#2dcfbe',
    },
    {
      id:     'ask-ai',
      icon:   '🤖',
      title:  'Pitaj AI o svakom zadatku',
      teaser: 'Postavi pitanje o bilo kom zadatku i dobij objašnjenje na hrvatskom.',
      accent: '#e9b446',
    },
  ],
}

// ── Not-logged-in copy ────────────────────────────────────────────────────────

export const NOT_LOGGED_IN_COPY = {
  headline:     'Prijavi se da nastaviš trening.',
  subline:      'Treba ti račun da bi koristio simulator. Besplatna registracija traje manje od minute.',
  cta:          'Prijavi se ili registriraj',
  ctaSecondary: 'Nastavi bez računa (besplatni pregled)',
}
