/**
 * Centralni copy file.
 * Sve što se može A/B testirati ili lokalizirati ide ovdje.
 * Nikad hardkodirati HR UI tekst direktno u komponente.
 *
 * Konvencija:
 *   - Objekt = feature area
 *   - Svaka entry = { a: string } ili { a: string, b: string } za A/B
 *   - Koristiti getCopy(key, variant) helper
 */

export type CopyVariant = 'a' | 'b'

/**
 * Bump this whenever copy strings change.
 * Injected into every analytics event's meta as `copy_version`
 * so retroactive analysis knows which copy was active.
 */
export const COPY_VERSION = 'v1.0.0'

export const COPY = {
  // ─── Auth / Paywall ────────────────────────────────
  paywall: {
    guest_title: {
      a: 'Prijavi se za pristup',
      b: 'Ovo je za tebe — ali trebaš račun',
    },
    guest_sub: {
      a: 'Detalji studija, gradivo i kalkulator bodova dostupni su uz Pro pretplatu.',
      b: 'Jedno klikni, vidi sve: gradivo, kalkulator bodova i plan za upis na tvoj fakultet.',
    },
    guest_cta: {
      a: 'Vidi planove i cijene →',
      b: 'Besplatno probaj — vidi planove →',
    },
    no_pro_title: {
      a: 'Otključaj ovaj studij',
      b: 'Pro korisnici vide puno više ovdje',
    },
    no_pro_sub: {
      a: 'Nadogradi na Pro i otključaj kalkulator bodova, gradivo i povijest pragova za sve studije.',
      b: 'Kalkulator bodova, heatmap slabosti i AI tjedni plan — sve za ciljani upis na jedan faks.',
    },
    no_pro_cta: {
      a: 'Nadogradi na Pro →',
      b: 'Otključaj za 19,99€/mj →',
    },
    login_cta: {
      a: 'Već imam račun — prijavi se',
      b: 'Imam račun →',
    },
  },

  // ─── Prijemni — list view ────────────────────────────────
  list: {
    hero_title_end: {
      a: 'Upiši faks.',
      b: 'Znaj točno koji faks možeš upisati.',
    },
    hero_sub: {
      a: 'Unesi bodove jednom — vidi koje fakultete možeš upisati. Kalkulator, datumi i gradivo za svaki studij.',
      b: 'Ne gatajte — izračunajte. Tvoj profil uspoređujemo s pragovima 2025. u realnom vremenu.',
    },
    matcher_cta_empty: {
      a: 'Izračunaj →',
      b: 'Vidi koji te fakulteti primaju →',
    },
    matcher_banner_title: {
      a: 'Izračunaj bodove jednom — vidi sve fakultete koji te primaju',
      b: 'Koji faks ti realno možeš upisati? Saznaj za 2 minute.',
    },
    matcher_banner_sub: {
      a: 'Unesi prosjeke i rezultate mature. Svaki studij odmah dobija oznaku: siguran upis, granica ili riskantno.',
      b: 'Uneseš jednom — radi za sve fakultete. Prilagodi se kad dobiješ prave rezultate.',
    },
  },

  // ─── Prijemni — detail view ────────────────────────────────
  detail: {
    target_cta_add: {
      a: '⭐ Postavi kao cilj',
      b: '🎯 Ciljaš ovaj studij?',
    },
    target_set_label: {
      a: 'Ovaj studij je tvoj cilj',
      b: 'Pratime tvoj napredak za ovaj studij',
    },
    target_sub_hard: {
      a: '🩺 Medicinar Mode je aktivan — pratit ćemo ti napredak po predmetima.',
      b: '🩺 Sve za {FAK} upis je na jednom mjestu. Otvori Medicinar Mode.',
    },
    target_sub_regular: {
      a: 'Pratit ćemo ti progress i deadline-ove za ovaj studij.',
      b: 'Pratimo rokove i bodove za tvoj ciljani studij.',
    },
    discere_cta: {
      a: 'Pogledaj →',
      b: 'Zapiši se na Discere →',
    },
  },

  // ─── Kalkulator ────────────────────────────────
  kalkulator: {
    above_prag: {
      a: 'Iznad praga za {X} bodova!',
      b: 'Vrijednost upisa — {X} bod. iznad praga.',
    },
    below_prag: {
      a: '✗ {X} ispod praga',
      b: '− {X} bod. do praga. Pogledaj što popraviti.',
    },
    gap_cta: {
      a: '📚 Napravi mi plan učenja za {STUDIJ} →',
      b: '🎯 Popuni jaz — generiraj plan učenja →',
    },
    no_kalk: {
      a: 'Automatski kalkulator ne postoji za {STUDIJ} jer upis uključuje audiciju, motorički test ili psihomotoriku koji se ne mogu predvidjeti formulom.',
      b: 'Za {STUDIJ}, bodovi ovise o audiciji ili motoričkim testovima — ne možemo ih izračunati formulom. Prati njihov web za kriterije.',
    },
  },

  // ─── Medicinar Mode ────────────────────────────────
  medicinar: {
    putting_rate_above70: {
      a: 'Jako dobro',
      b: 'Na pravom putu',
    },
    putting_rate_above45: {
      a: 'Na dobrom putu',
      b: 'Nastavi ovako',
    },
    putting_rate_below45: {
      a: 'Moraš ubrzati',
      b: 'Vrijedi pojačati tempo',
    },
    briefing_cta: {
      a: '✨ Generiraj briefing',
      b: '🤖 Što trebam raditi ovaj tjedan?',
    },
  },

  // ─── Urgency ────────────────────────────────
  urgency: {
    banner_critical: {
      a: '🔥 Kritično',
      b: '⏰ Zadnji trenutak',
    },
    banner_urgent: {
      a: '⚠️ Uskoro',
      b: '⏳ Ostaje malo vremena',
    },
    banner_soon: {
      a: '📅 Bliži se',
      b: '📌 Priseti se',
    },
  },

  // ─── Compare ────────────────────────────────
  compare: {
    dock_hint_one: {
      a: 'Dodaj još jedan studij',
      b: 'Odaberi još jedan za usporedbu',
    },
    share_cta: {
      a: '📤 Podijeli',
      b: '📤 Podijeli usporedbu',
    },
  },

  // ─── Stories ────────────────────────────────
  stories: {
    empty_title: {
      a: 'Još nemamo priče za {FAK}',
      b: 'Budi među prvima — napiši priču za {FAK}',
    },
    empty_sub: {
      a: 'Maturiraj.hr je nova platforma. Priče stvarnih studenata koji su upisali {STUDIJ} dolaze čim ih prikupimo.',
      b: 'Još smo mlada platforma. Nema priča za ovaj studij — ali ako si upisao/la, tvoje iskustvo vrijedi drugima.',
    },
    write_cta: {
      a: 'Već si upisao/la {FAK}? Napiši svoju priču →',
      b: '✍ Podijeli kako je bilo — pomaži budućim kandidatima',
    },
    write_cta_header: {
      a: '✍ Napiši svoju priču',
      b: '✍ Tvoje iskustvo vrijedi',
    },
    disclaimer: {
      a: 'Sve priče su submittirane od stvarnih korisnika i moderirane prije objavljivanja. Verificirane priče su one gdje smo dodatno potvrdili upis.',
      b: 'Svaka priča je ručno provjerena. Verificirano = potvrđen upis. Nikad izmišljeno.',
    },
  },

  // ─── General ────────────────────────────────
  general: {
    loading: {
      a: 'Učitavam...',
      b: 'Tren...',
    },
    error_retry: {
      a: 'Pokušaj ponovno',
      b: 'Osvježi →',
    },
    back_to_list: {
      a: '← Lista',
      b: '← Sve',
    },
  },
} as const

export type CopyKey = {
  [K in keyof typeof COPY]: `${K}.${string & keyof typeof COPY[K]}`
}[keyof typeof COPY]

/**
 * Get copy string. If variant='b' and 'b' exists, returns 'b'; otherwise 'a'.
 * Supports template interpolation via replacements map.
 *
 * @example
 *   getCopy('kalkulator.above_prag', variant, { X: '23' })
 *   → 'Iznad praga za 23 bodova!'
 */
export function getCopy(
  key: string,
  variant: CopyVariant = 'a',
  replacements: Record<string, string> = {}
): string {
  const parts = key.split('.')
  const section = parts[0] as keyof typeof COPY
  const field = parts[1]

  const entry = (COPY as any)[section]?.[field]
  if (!entry) return `[${key}]`

  let text: string = variant === 'b' && entry.b ? entry.b : entry.a

  // Template interpolation
  for (const [k, v] of Object.entries(replacements)) {
    text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v)
  }

  return text
}
