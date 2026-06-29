/**
 * Skripte — Kemija
 * Kompletan popis modula. Modul 01 ima puni sadržaj poglavlja;
 * moduli 02–08 su registrirani kao stubovi (sadržaj uskoro).
 */
import { module01TeneljiKemije } from './modules/01-temelji-kemije.js'

export const chemistryModules = [
  // ── Modul 01: puni sadržaj ─────────────────────────────────────────────────
  {
    slug: module01TeneljiKemije.slug,
    title: module01TeneljiKemije.title,
    subtitle: module01TeneljiKemije.subtitle,
    icon: module01TeneljiKemije.icon,
    color: module01TeneljiKemije.color,
    colorDim: module01TeneljiKemije.colorDim,
    order: 1,
    chapterMetas: module01TeneljiKemije.chapters.map(c => ({
      slug: c.slug,
      title: c.title,
      subtitle: c.subtitle,
      duration: c.duration,
      difficulty: c.difficulty,
      maturaRelevance: c.maturaRelevance,
      order: c.order,
    })),
    _chapters: module01TeneljiKemije.chapters,
  },

  // ── Modul 02: stub ─────────────────────────────────────────────────────────
  {
    slug: 'kemijsko-racunanje',
    title: 'Kemijsko računanje',
    subtitle: 'Mol, molarna masa, stehiometrija i plinovi',
    icon: '🧮',
    color: '#60a5fa',
    colorDim: 'rgba(96,165,250,.08)',
    order: 2,
    chapterMetas: [
      { slug: 'mol-i-molarna-masa', title: 'Mol i molarna masa', subtitle: 'Avogadrova konstanta, n = m/M', duration: '20 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 1 },
      { slug: 'stehiometrija', title: 'Stehiometrija', subtitle: 'Jednadžbe reakcija i molni omjeri', duration: '25 min', difficulty: 'teško', maturaRelevance: 'ključna', order: 2 },
      { slug: 'plinovi', title: 'Idealni plinovi', subtitle: 'PV=nRT i Daltonov zakon', duration: '22 min', difficulty: 'srednje', maturaRelevance: 'visoka', order: 3 },
      { slug: 'otopine', title: 'Otopine i koncentracije', subtitle: 'c = n/V, maseni udio, razrjeđivanje', duration: '20 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 4 },
      { slug: 'limitirajuci-reaktant', title: 'Limitirajući reaktant', subtitle: 'Koji reaktant ograničuje prinos?', duration: '18 min', difficulty: 'teško', maturaRelevance: 'visoka', order: 5 },
      { slug: 'prinos-i-cistoca', title: 'Prinos i čistoća', subtitle: 'Teorijski i eksperimentalni prinos', duration: '15 min', difficulty: 'srednje', maturaRelevance: 'visoka', order: 6 },
    ],
    _chapters: null,
  },

  // ── Modul 03: stub ─────────────────────────────────────────────────────────
  {
    slug: 'anorganska-kemija',
    title: 'Anorganska kemija',
    subtitle: 'Oksidi, kiseline, baze, soli i nomenklatura',
    icon: '🔬',
    color: '#f59e0b',
    colorDim: 'rgba(245,158,11,.08)',
    order: 3,
    chapterMetas: [
      { slug: 'oksidi', title: 'Oksidi', subtitle: 'Kiseli, bazni i amfoterní oksidi', duration: '18 min', difficulty: 'lako', maturaRelevance: 'visoka', order: 1 },
      { slug: 'kiseline', title: 'Kiseline', subtitle: 'Brønsted-Lowry, jake i slabe kiseline', duration: '22 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 2 },
      { slug: 'baze', title: 'Baze i amfoteri', subtitle: 'Reakcije neutralizacije', duration: '20 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 3 },
      { slug: 'soli', title: 'Soli', subtitle: 'Nomenklatura, hidroliza i topljivost', duration: '25 min', difficulty: 'teško', maturaRelevance: 'visoka', order: 4 },
      { slug: 'nomenklatura', title: 'Nomenklatura anorganskih spojeva', subtitle: 'Sustavno imenovanje', duration: '20 min', difficulty: 'srednje', maturaRelevance: 'visoka', order: 5 },
    ],
    _chapters: null,
  },

  // ── Modul 04: stub ─────────────────────────────────────────────────────────
  {
    slug: 'kemijska-ravnoteza',
    title: 'Kemijska ravnoteža',
    subtitle: 'Le Chatelier, Ka, Kb, pH i puferi',
    icon: '⚖️',
    color: '#a78bfa',
    colorDim: 'rgba(167,139,250,.08)',
    order: 4,
    chapterMetas: [
      { slug: 'ravnoteza-uvod', title: 'Pojam kemijske ravnoteže', subtitle: 'Ravnotežna konstanta K', duration: '20 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 1 },
      { slug: 'le-chatelier', title: 'Le Chatelierov princip', subtitle: 'Pomak ravnoteže promjenom uvjeta', duration: '22 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 2 },
      { slug: 'ph-skala', title: 'pH skala i vodeni ioni', subtitle: 'pH = −log[H₃O⁺]', duration: '18 min', difficulty: 'lako', maturaRelevance: 'ključna', order: 3 },
      { slug: 'kiseline-baze-ravnoteza', title: 'Ka i Kb ravnoteže', subtitle: 'Konstante kiselosti i bazičnosti', duration: '25 min', difficulty: 'teško', maturaRelevance: 'visoka', order: 4 },
      { slug: 'puferi', title: 'Puferi', subtitle: 'Henderson-Hasselbalchova jednadžba', duration: '22 min', difficulty: 'teško', maturaRelevance: 'visoka', order: 5 },
    ],
    _chapters: null,
  },

  // ── Modul 05: stub ─────────────────────────────────────────────────────────
  {
    slug: 'redoks-elektrokemija',
    title: 'Redoks i elektrokemija',
    subtitle: 'Oksidacija, redukcija, elektroliza i galvanski članci',
    icon: '⚡',
    color: '#fbbf24',
    colorDim: 'rgba(251,191,36,.08)',
    order: 5,
    chapterMetas: [
      { slug: 'oksidacijski-broj', title: 'Oksidacijski broj', subtitle: 'Pravila za određivanje oksidacijskog broja', duration: '18 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 1 },
      { slug: 'redoks-reakcije', title: 'Redoks reakcije', subtitle: 'Izjednačavanje redoks jednadžbi', duration: '25 min', difficulty: 'teško', maturaRelevance: 'ključna', order: 2 },
      { slug: 'elektrokemijski-niz', title: 'Elektrokemijski niz napona', subtitle: 'Standardni redoks potencijali', duration: '22 min', difficulty: 'srednje', maturaRelevance: 'visoka', order: 3 },
      { slug: 'galvanski-clanak', title: 'Galvanski članak', subtitle: 'Daniellov članak i EMF', duration: '22 min', difficulty: 'teško', maturaRelevance: 'visoka', order: 4 },
      { slug: 'elektroliza', title: 'Elektroliza', subtitle: 'Faradayevi zakoni elektrolize', duration: '25 min', difficulty: 'teško', maturaRelevance: 'visoka', order: 5 },
    ],
    _chapters: null,
  },

  // ── Modul 06: stub ─────────────────────────────────────────────────────────
  {
    slug: 'organska-kemija-temelji',
    title: 'Organska kemija — temelji',
    subtitle: 'Ugljikovodici, funkcionalne grupe i izomerija',
    icon: '🌿',
    color: '#34d399',
    colorDim: 'rgba(52,211,153,.08)',
    order: 6,
    chapterMetas: [
      { slug: 'ugljikovodici', title: 'Ugljikovodici', subtitle: 'Alkani, alkeni, alkini i areni', duration: '28 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 1 },
      { slug: 'supstitucija-adicija', title: 'Supstitucija i adicija', subtitle: 'Tipovi organskih reakcija', duration: '25 min', difficulty: 'teško', maturaRelevance: 'ključna', order: 2 },
      { slug: 'izomerija', title: 'Izomerija', subtitle: 'Strukturna i stereoizomerija', duration: '22 min', difficulty: 'teško', maturaRelevance: 'visoka', order: 3 },
      { slug: 'alkoholi-eteri', title: 'Alkoholi i eteri', subtitle: 'OH skupina, reakcije alkohola', duration: '22 min', difficulty: 'srednje', maturaRelevance: 'visoka', order: 4 },
      { slug: 'karboksilne-kiseline', title: 'Karboksilne kiseline i esteri', subtitle: 'COOH skupina, esterifikacija', duration: '25 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 5 },
    ],
    _chapters: null,
  },

  // ── Modul 07: stub ─────────────────────────────────────────────────────────
  {
    slug: 'organska-kemija-napredna',
    title: 'Organska kemija — napredna',
    subtitle: 'Amini, amidi, ugljikohidrati, lipidi i proteini',
    icon: '🧬',
    color: '#f472b6',
    colorDim: 'rgba(244,114,182,.08)',
    order: 7,
    chapterMetas: [
      { slug: 'amini-amidi', title: 'Amini i amidi', subtitle: 'Dušikovi organski spojevi', duration: '22 min', difficulty: 'srednje', maturaRelevance: 'visoka', order: 1 },
      { slug: 'ugljikohidrati', title: 'Ugljikohidrati', subtitle: 'Monosaharidi, disaharidi, polisaharidi', duration: '25 min', difficulty: 'srednje', maturaRelevance: 'ključna', order: 2 },
      { slug: 'lipidi', title: 'Lipidi', subtitle: 'Masti, ulja i fosfolipidi', duration: '20 min', difficulty: 'lako', maturaRelevance: 'visoka', order: 3 },
      { slug: 'proteini', title: 'Proteini i aminokiseline', subtitle: 'Peptidna veza, denaturacija', duration: '22 min', difficulty: 'srednje', maturaRelevance: 'visoka', order: 4 },
      { slug: 'polimeri', title: 'Polimeri', subtitle: 'Adicijska i kondenzacijska polimerizacija', duration: '18 min', difficulty: 'srednje', maturaRelevance: 'osnova', order: 5 },
    ],
    _chapters: null,
  },

  // ── Modul 08: stub ─────────────────────────────────────────────────────────
  {
    slug: 'kemija-okolisa',
    title: 'Kemija okoliša i primjena',
    subtitle: 'Atmosfera, voda, tlo i industrijska kemija',
    icon: '🌍',
    color: '#38bdf8',
    colorDim: 'rgba(56,189,248,.08)',
    order: 8,
    chapterMetas: [
      { slug: 'atmosfera', title: 'Atmosfera i onečišćenje zraka', subtitle: 'Efekt staklenika, ozon, kiselé kiše', duration: '20 min', difficulty: 'lako', maturaRelevance: 'visoka', order: 1 },
      { slug: 'voda-kemija', title: 'Kemija vode', subtitle: 'Tvrda voda, pročišćavanje, morska voda', duration: '18 min', difficulty: 'lako', maturaRelevance: 'visoka', order: 2 },
      { slug: 'haber-process', title: 'Haber-Boschov postupak', subtitle: 'Sinteza amonijaka — industrijska kemija', duration: '18 min', difficulty: 'srednje', maturaRelevance: 'visoka', order: 3 },
      { slug: 'nuklearna-kemija', title: 'Nuklearna kemija', subtitle: 'Radioaktivnost, poluvrijeme raspada', duration: '20 min', difficulty: 'srednje', maturaRelevance: 'osnova', order: 4 },
    ],
    _chapters: null,
  },
]
