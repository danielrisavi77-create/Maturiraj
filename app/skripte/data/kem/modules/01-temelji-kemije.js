/**
 * DISCERE — Kemija
 * Modul 01: Temelji kemije
 * Sva poglavlja s kompletnim premium sadržajem za državnu maturu.
 * @implements {import('../../types').DiscereChapter[]}
 */

// ─── Poglavlje 1: Građa atoma ────────────────────────────────────────────────
const gradaAtoma = {
  slug: 'grada-atoma',
  title: 'Građa atoma',
  subtitle: 'Subatomske čestice, jezgra i elektronski omotač',
  duration: '15 min',
  difficulty: 'lako',
  maturaRelevance: 'ključna',
  order: 1,

  mustKnow: [
    'Atom = jezgra (protoni + neutroni) + elektronski omotač (elektroni)',
    'Proton (p⁺): naboj +1, masa ≈ 1 u, nalazi se u jezgri',
    'Neutron (n⁰): naboj 0, masa ≈ 1 u, nalazi se u jezgri',
    'Elektron (e⁻): naboj −1, masa ≈ 0, nalazi se u elektronskom omotaču',
    'Neutralan atom: broj protona = broj elektrona = Z',
    'Atomski broj Z = broj protona = identitet elementa u Periodnom sustavu',
  ],

  quickConcept:
    'Atom je električki neutralna čestica: koliko pozitivnih protona u jezgri, toliko negativnih elektrona okolo. Atomski broj Z jedinstven je za svaki element — svi atomi s Z=17 su klor, bez obzira na sve ostalo. Elektroni određuju kemijsko ponašanje; jezgra određuje koji je element.',

  theory: [
    {
      heading: 'Subatomske čestice i njihova svojstva',
      content:
        'Atom se sastoji od jezgre i elektronskog omotača. U jezgri se nalaze protoni i neutroni (zajedno nazvani nukleoni). Elektroni orbitiraju oko jezgre u elektronskom omotaču. Masa atoma gotovo u cijelosti je skoncentrirana u jezgri.',
      table: {
        headers: ['Čestica', 'Simbol', 'Relativni naboj', 'Relativna masa', 'Lokacija'],
        rows: [
          ['Proton', 'p⁺', '+1', '1.007 u', 'Jezgra'],
          ['Neutron', 'n⁰', '0', '1.008 u', 'Jezgra'],
          ['Elektron', 'e⁻', '−1', '0.00055 u', 'Elektronski omotač'],
        ],
      },
    },
    {
      heading: 'Električna neutralnost atoma',
      content:
        'Neutralan atom ima jednak broj protona i elektrona, pa je ukupan naboj nula. Kad atom primi ili izgubi elektrone, nastaje ion. Kation (pozitivan ion) nastaje gubitkom elektrona (manje e⁻ nego p⁺). Anion (negativan ion) nastaje primanjem elektrona (više e⁻ nego p⁺).',
      table: null,
    },
  ],

  maturaPattern:
    'Na maturi se pojavljuje kao uvod u gotovo svaki tematski blok. Tipični zadaci: popunjavanje tablice čestica za zadani atom/ion, prepoznavanje elementa iz Z, ili izračun broja čestica. Dolazi u obliku kratkih zadataka u prvom dijelu ispita. Uvijek je baza za teže teme (izotopi, elektronska konfiguracija, veze).',

  taskPatterns: [
    {
      pattern: 'Zadana je oznaka elementa: ₁₁²³Na — što je što?',
      howToSolve: 'Gornji broj je maseni broj A. Donji broj (ili redni broj u PS) je Z. Ovdje: Z=11 (protoni=11), A=23, neutroni = A−Z = 12.',
    },
    {
      pattern: 'Zadana je oznaka iona, npr. Ca²⁺ (Z=20, A=40)',
      howToSolve: 'Neutralan Ca ima 20 elektrona. Ca²⁺ je izgubio 2 elektrona → elektrona = 20−2 = 18. Protoni i neutroni ostaju isti (kemija ih ne mijenja).',
    },
    {
      pattern: 'Zadana je oznaka aniona, npr. Cl⁻ (Z=17)',
      howToSolve: 'Cl je primio 1 elektron → elektrona = 17+1 = 18. Z i A se ne mijenjaju.',
    },
  ],

  shortcuts: [
    '🔵 Z čuva identitet — Z mijenjamo samo u nuklearnim reakcijama, ne u kemijskim',
    '⚡ Neutralan atom: e⁻ = Z (uvijek, bez iznimke)',
    '➕ Kation: izgubio elektrone → e⁻ < Z (manji broj elektrona od protona)',
    '➖ Anion: primio elektrone → e⁻ > Z (veći broj elektrona od protona)',
  ],

  formulas: [
    {
      label: 'Maseni broj',
      formula: 'A = Z + N',
      desc: 'A = maseni broj (ukupni nukleoni), Z = atomski broj (protoni), N = broj neutrona',
    },
    {
      label: 'Broj neutrona',
      formula: 'N = A − Z',
      desc: 'Iz poznatih A i Z lako dobivamo N',
    },
    {
      label: 'Neutralan atom',
      formula: 'broj elektrona = Z',
      desc: 'Za električki neutralan atom: br. e⁻ = br. p⁺ = Z',
    },
    {
      label: 'Ion',
      formula: 'broj elektrona = Z − naboj iona',
      desc: 'Kation X^n+: e⁻ = Z − n; Anion X^n−: e⁻ = Z + n',
    },
  ],

  tasks: [
    {
      q: 'Odredi broj protona, neutrona i elektrona atoma ₂₆⁵⁶Fe.',
      steps: [
        'Iz oznake: Z = 26, A = 56',
        'Protoni = Z = 26',
        'Neutroni = A − Z = 56 − 26 = 30',
        'Atom je neutralan → elektroni = Z = 26',
      ],
      answer: 'p⁺ = 26, n⁰ = 30, e⁻ = 26',
    },
    {
      q: 'Koliko elektrona ima ion Cu²⁺ (Z=29, A=64)?',
      steps: [
        'Neutralan Cu bi imao 29 elektrona (jer Z=29)',
        'Cu²⁺ je izgubio 2 elektrona (pozitivan ion s nabojem +2)',
        'Elektroni = 29 − 2 = 27',
        'Protoni i neutroni se ne mijenjaju: p⁺=29, n⁰=64−29=35',
      ],
      answer: 'e⁻ = 27 (p⁺ = 29, n⁰ = 35)',
    },
    {
      q: 'Navedi koji je element atom koji ima 17 protona i 18 neutrona. Koji je to ion ako ima 18 elektrona?',
      steps: [
        'Z = 17 → element je Klor (Cl) — gledamo Periodni sustav',
        'A = Z + N = 17 + 18 = 35, dakle oznaka ₁₇³⁵Cl',
        'Elektroni = 18, protoni = 17 → ion ima 1 elektron više od neutralnog atoma',
        'Anion s nabojem −1: Cl⁻',
      ],
      answer: 'Klor Cl; ion Cl⁻',
    },
  ],

  mistakes: [
    '❌ Zamjenu Z i A — Z je atomski (protonski) broj (manji), A je maseni broj (veći)',
    '❌ Pisanje da se u neutralnom atomu "elektroni i neutroni izjednačavaju" — izjednačavaju se elektroni i PROTONI',
    '❌ Mijenjanje broja protona pri ionizaciji — kemijska reakcija NIKAD ne mijenja jezgru (Z ostaje isti)',
    '❌ Za ione: koristiti Z kao broj elektrona bez korekcije za naboj',
  ],

  quiz: [
    {
      q: 'Koliko neutrona ima atom ₁₇³⁵Cl?',
      opts: ['17', '18', '35', '52'],
      answer: 1,
      exp: 'N = A − Z = 35 − 17 = 18 neutrona.',
    },
    {
      q: 'Ion Na⁺ (Z=11) ima koliko elektrona?',
      opts: ['12', '11', '10', '22'],
      answer: 2,
      exp: 'Na⁺ je izgubio 1 elektron: elektrona = 11 − 1 = 10.',
    },
    {
      q: 'Koji od ovih podataka identificira koji je element?',
      opts: ['Maseni broj A', 'Broj neutrona N', 'Atomski broj Z', 'Broj elektrona iona'],
      answer: 2,
      exp: 'Atomski broj Z = broj protona = jedinstven za svaki element. Svi atomi s Z=6 su ugljik.',
    },
  ],

  ultraSummary: [
    'Atom = jezgra (p⁺ + n⁰) + elektronski omotač (e⁻)',
    'Z = broj protona = identitet elementa',
    'A = Z + N → N = A − Z',
    'Neutralan atom: e⁻ = Z',
    'Ion: e⁻ = Z − (naboj) za katione; Z + (naboj) za anione',
  ],

  connections: [
    { topic: 'Atomski i maseni broj i izotopi', why: 'A i Z su izravno iz ovog poglavlja — izotopi dijele Z, razlikuju se po N' },
    { topic: 'Elektronska konfiguracija', why: 'Broj elektrona (= Z za neutralan atom) određuje konfiguraciju' },
    { topic: 'Periodni sustav', why: 'Z je redni broj u PS — element nalazimo direktno' },
    { topic: 'Ionska veza', why: 'Razumijevanje kationa i aniona temelj je ionske veze' },
  ],

  nextStep: { slug: 'atomski-i-maseni-broj', title: 'Atomski i maseni broj i izotopi' },
}

// ─── Poglavlje 2: Atomski i maseni broj, izotopi ────────────────────────────
const atomskiIMaseni = {
  slug: 'atomski-i-maseni-broj',
  title: 'Atomski i maseni broj i izotopi',
  subtitle: 'Izotopi, relativna atomska masa i masena jedinica',
  duration: '18 min',
  difficulty: 'srednje',
  maturaRelevance: 'ključna',
  order: 2,

  mustKnow: [
    'Atomski (protonski) broj Z = broj protona = redni broj u PS',
    'Maseni broj A = Z + N (ukupan broj nukleona)',
    'Izotopi = atomi istog elementa (isti Z), različit broj neutrona (različit A)',
    'Relativna atomska masa Ar = ponderirani prosjek masa svih prirodnih izotopa',
    'Masena jedinica: 1 u = 1/12 mase atoma ¹²C ≈ 1.66 × 10⁻²⁷ kg',
    'Izobari = atomi različitih elemenata s istim A (ali različitim Z)',
  ],

  quickConcept:
    'Klor uvijek ima Z=17 (to ga definira kao klor), ali u prirodi postoje ³⁵Cl (75.77%) i ³⁷Cl (24.23%) — oba su klor, ali s različitim brojem neutrona. Zbog toga je relativna atomska masa klora 35.45, a ne okrugli broj. Izotopi su kemijski gotovo identični (isti elektroni → isti kemijski reaktivitet), ali se razlikuju po masi.',

  theory: [
    {
      heading: 'Izotopi i njihova svojstva',
      content:
        'Izotopi istog elementa imaju: isti Z, isti broj elektrona, isto kemijsko ponašanje, različit N, različit A, malo različitu masu. Zapisuju se kao ₁₇³⁵Cl i ₁₇³⁷Cl. U prirodi se elementi javljaju kao mješavine izotopa u gotovo konstantnom omjeru (prirodna zastupljenost).',
      table: {
        headers: ['Izotop klora', 'Z', 'A', 'N', 'Prirodna zastupljenost'],
        rows: [
          ['³⁵Cl', '17', '35', '18', '75.77%'],
          ['³⁷Cl', '17', '37', '20', '24.23%'],
        ],
      },
    },
    {
      heading: 'Relativna atomska masa',
      content:
        'Budući da elementi postoje kao mješavina izotopa, u tablicama se navodi relativna atomska masa Ar — ponderirani prosjek masa svih izotopa uzimajući u obzir njihovu zastupljenost. Ar klora: 0.7577 × 35 + 0.2423 × 37 = 26.52 + 8.97 ≈ 35.5',
      table: null,
    },
    {
      heading: 'Izobari vs. izotopi',
      content:
        'Izotopi: isti Z, različiti A (npr. ¹²C i ¹⁴C). Izobari: isti A, različiti Z (npr. ⁴⁰Ca i ⁴⁰Ar — oba imaju A=40, ali različit broj protona i to su različiti elementi).',
      table: null,
    },
  ],

  maturaPattern:
    'Izotopi dolaze najčešće u zadacima izračuna relativne atomske mase (dani su postoci izotopa, treba izračunati Ar) ili obratno — dan je Ar i jedan izotop, treba naći drugi. Ponekad kao teorijsko pitanje: "Što su izotopi?" ili "Razlikuju li se izotopi kemijskim ponašanjem?"',

  taskPatterns: [
    {
      pattern: 'Napiši oznaku atoma X s nabojem +2, Z=20, N=20.',
      howToSolve: 'A = Z+N = 20+20 = 40. Oznaka: ₂₀⁴⁰Ca²⁺. Elektroni = 20−2=18.',
    },
    {
      pattern: 'Izračunaj Ar elementa koji ima izotope: ᵃX (p₁%) i ᵇX (p₂%).',
      howToSolve: 'Ar = (p₁/100)×a + (p₂/100)×b. Uvijek provjerite: p₁ + p₂ = 100%.',
    },
    {
      pattern: 'Dan je Ar i jedan izotop — nađi zastupljenost.',
      howToSolve: 'Neka je x zastupljenost prvog izotopa (kao decimala). Drugi ima zastupljenost (1−x). Postavi jednadžbu: Ar = x·m₁ + (1−x)·m₂, riješite za x.',
    },
  ],

  shortcuts: [
    '🔵 Izotopi = "ista obitelj, različita težina" — isti element, različit A',
    '⚡ Ar NIKAD nije cijeli broj (osim u aproksimaciji) — jer je prosjek mješavine',
    '🧮 Za Ar: Ar ≈ Σ(udio₍ᵢ₎ × Aᵢ), udjeli su uvijek u postocima (podijeli s 100!)',
    '⚠️ Izobari ≠ Izotopi! Izobari = isti A, različiti Z (različiti elementi!)',
  ],

  formulas: [
    {
      label: 'Maseni broj',
      formula: 'A = Z + N',
      desc: 'Protoni plus neutroni daju maseni broj',
    },
    {
      label: 'Relativna atomska masa (dva izotopa)',
      formula: 'Ar = x₁·A₁ + x₂·A₂',
      desc: 'xᵢ = frakcija zastupljenosti (0 do 1), Aᵢ = maseni broj izotopa. Vrijedi Σxᵢ = 1.',
    },
    {
      label: 'Masena jedinica',
      formula: '1 u = 1.660 × 10⁻²⁷ kg',
      desc: 'Definirana kao 1/12 mase atoma ¹²C',
    },
  ],

  tasks: [
    {
      q: 'Klor ima dva stabilna izotopa: ³⁵Cl (75.77%) i ³⁷Cl (24.23%). Izračunaj relativnu atomsku masu klora.',
      steps: [
        'Pretvori postotke u decimale: x(³⁵Cl) = 0.7577, x(³⁷Cl) = 0.2423',
        'Provjera: 0.7577 + 0.2423 = 1.0000 ✓',
        'Ar = 0.7577 × 35 + 0.2423 × 37',
        'Ar = 26.52 + 8.97 = 35.45',
      ],
      answer: 'Ar(Cl) = 35.45 ≈ 35.5',
    },
    {
      q: 'Bor ima dva izotopa: ¹⁰B i ¹¹B. Ar(B) = 10.81. Odredi udio (%) oba izotopa.',
      steps: [
        'Neka je x = udio ¹⁰B (kao frakcija), tada je udio ¹¹B = (1 − x)',
        'Jednadžba: 10.81 = x · 10 + (1−x) · 11',
        '10.81 = 10x + 11 − 11x',
        '10.81 − 11 = −x → x = 0.19',
        'Udio ¹⁰B = 19%, udio ¹¹B = 81%',
      ],
      answer: 'Udio ¹⁰B ≈ 19%, udio ¹¹B ≈ 81%',
    },
  ],

  mistakes: [
    '❌ Uzimati udio u postotku bez dijeljenja s 100 (Ar = 75.77×35 + ... umjesto 0.7577×35 + ...)',
    '❌ Miješati izotope i izobre — izotopi = isti element (isti Z), izobari = različiti elementi (isti A)',
    '❌ Zaokruživanje Ar na cijeli broj u međukoraku — Ar zadržati na 2 decimale',
    '❌ Za izotope pisati da imaju različit kemijski reaktivitet — kemijske razlike su zanemarive',
  ],

  quiz: [
    {
      q: 'Koji par atoma predstavlja izotope?',
      opts: ['₆¹²C i ₇¹⁴N', '₆¹²C i ₆¹⁴C', '₁₈⁴⁰Ar i ₂₀⁴⁰Ca', '₁₇³⁵Cl i ₁₇³⁵Cl'],
      answer: 1,
      exp: '₆¹²C i ₆¹⁴C: isti Z=6 (oba su ugljik), ali A=12 i A=14 — to su izotopi.',
    },
    {
      q: 'Element ima izotope: ⁶³X (69.2%) i ⁶⁵X (30.8%). Koliki je Ar?',
      opts: ['63', '64', '63.6', '65'],
      answer: 2,
      exp: 'Ar = 0.692×63 + 0.308×65 = 43.60 + 20.02 = 63.6.',
    },
    {
      q: 'Zašto relativna atomska masa klora iznosi 35.5 (a ne 35 ili 37)?',
      opts: [
        'Jer klor ima posebnu građu atoma',
        'Jer je masa elektrona uključena u izračun',
        'Jer je Ar ponderirani prosjek masa prirodnih izotopa',
        'Jer su maseni brojevi izotopa uvijek decimalni',
      ],
      answer: 2,
      exp: 'Ar je ponderirani prosjek. Klor je prirodna mješavina ³⁵Cl (75.77%) i ³⁷Cl (24.23%), pa Ar ≈ 35.5.',
    },
  ],

  ultraSummary: [
    'Izotopi: isti Z, različiti N i A — kemijski gotovo identični',
    'A = Z + N; N = A − Z',
    'Ar = Σ(xᵢ · Aᵢ), gdje su xᵢ frakcije zastupljenosti (zbroj = 1)',
    'Izobari: isti A, različiti Z — sasvim različiti elementi!',
    '1 u ≈ 1.66 × 10⁻²⁷ kg (referentna masa atoma ¹²C)',
  ],

  connections: [
    { topic: 'Građa atoma', why: 'Definicija Z, A i N je preduvjet za razumijevanje izotopa' },
    { topic: 'Elektronska konfiguracija', why: 'Izotopi imaju isti Z → isti elektroni → ista konfiguracija' },
    { topic: 'Količina tvari (mol)', why: 'Ar se koristi za izračun molarnih masa M = Ar g/mol' },
    { topic: 'Nuklearne reakcije', why: 'Radioaktivni izotopi (npr. ¹⁴C, ²³⁵U) — primjena u datiranju i energetici' },
  ],

  nextStep: { slug: 'elektronska-konfiguracija', title: 'Elektronska konfiguracija' },
}

// ─── Poglavlje 3: Elektronska konfiguracija ─────────────────────────────────
const elektronskiKonfiguracija = {
  slug: 'elektronska-konfiguracija',
  title: 'Elektronska konfiguracija',
  subtitle: 'Ljuske, podljuske i raspoređivanje elektrona',
  duration: '22 min',
  difficulty: 'srednje',
  maturaRelevance: 'ključna',
  order: 3,

  mustKnow: [
    'Elektroni se nalaze u ljuskama (K,L,M,N...) i podljuskama (s,p,d,f)',
    'Aufbauov princip: elektroni popunjavaju orbitale od najniže energije naviše',
    'Paulijev princip isključenja: u jednoj orbitali max 2 elektrona, suprotnih spinova',
    'Hundovo pravilo: elektroni što više orbitala zauzimaju po jedan elektron (paralelnih spinova) prije sparivanja',
    'Redoslijed punjenja: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p...',
    'Valencijski elektroni = elektroni u zadnjoj (najvišoj) ljusci → određuju kemijsko ponašanje',
  ],

  quickConcept:
    'Elektroni u atomu nisu nasumično raspoređeni — organizirani su u strogo definiranim razinama energije. Kao stepenice: uvijek se sjeda na najnižu slobodnu. Konfiguracija ₁₁Na: 1s²2s²2p⁶3s¹ — taj zadnji elektron u 3s je valencijski i jedini "kemijski aktivan". Natrium lako daje taj elektron (postaje Na⁺ s konfiguracijom plemenitog plina Ne).',

  theory: [
    {
      heading: 'Ljuske i podljuske',
      content:
        'Svaka ljuska n sadrži podljuske: s (1 orbitala), p (3 orbitale), d (5 orbitala), f (7 orbitala). Svaka orbitala prima maks. 2 elektrona (Pauli). Kapaciteti: s=2e, p=6e, d=10e, f=14e. Maksimalni kapacitet ljuske n: 2n².',
      table: {
        headers: ['Ljuska', 'n', 'Podljuske', 'Max elektrona', '2n²'],
        rows: [
          ['K', '1', '1s', '2', '2'],
          ['L', '2', '2s, 2p', '8', '8'],
          ['M', '3', '3s, 3p, 3d', '18', '18'],
          ['N', '4', '4s, 4p, 4d, 4f', '32', '32'],
        ],
      },
    },
    {
      heading: 'Redoslijed punjenja orbitala (Aufbau)',
      content:
        'Važan detalj: 4s se puni PRIJE 3d (4s ima nižu energiju od 3d)! Ovo je izvor česte greške. Redoslijed: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p...',
      table: null,
    },
    {
      heading: 'Valentni elektroni i kemijsko ponašanje',
      content:
        'Valencijski elektroni = elektroni u zadnjoj popunjenoj ljusci (za glavne grupe). Oni određuju: koliko veza element može tvoriti, hoće li dati ili primiti elektrone, položaj u Periodnom sustavu (grupe 1-18). Primjer: O (Z=8) = 1s²2s²2p⁴ → u 2. ljusci ima 6 valencijskih elektrona (2+4).',
      table: null,
    },
  ],

  maturaPattern:
    'Na maturi se traži: (1) Pisanje el. konfiguracije za zadani element ili ion, (2) Prepoznavanje valencijskih elektrona, (3) Objašnjenje zašto element stoji u određenoj grupi/periodi PS, (4) Uspoređivanje konfiguracija neutralnog atoma i iona. Prijelazni metali (d-blok) rjeđe dolaze, ali 3d elementi (Fe, Cu, Cr) imaju iznimke u konfiguraciji.',

  taskPatterns: [
    {
      pattern: 'Zapiši konfiguraciju za element Z=n (neutralan atom)',
      howToSolve: 'Upiši Z elektrona redom po Aufbau principu: 1s²2s²2p⁶3s²3p⁶4s²3d¹⁰... dok ne iskoristiš sve elektrone.',
    },
    {
      pattern: 'Zapiši konfiguraciju za ion X^(n+) ili X^(n-)',
      howToSolve: 'Najprije zapiši konfiguraciju neutralnog atoma. Za kation: ukloni n elektrona iz ZADNJE ljuske (za d-metale: ukloni iz 4s, ne 3d!). Za anion: dodaj n elektrona.',
    },
    {
      pattern: 'Iz konfiguracije odredi grupu i periodu u PS',
      howToSolve: 'Perioda = broj zadnje popunjene ljuske. Grupa (za s i p blok) = broj valencijskih elektrona. Npr. [Ne]3s²3p⁴ → 3. perioda, 6 val. el. → 16. grupa (VI A).',
    },
  ],

  shortcuts: [
    '🎯 Najčešće konfiguracije na maturi: H(1), He(2), Li(3), C(6), N(7), O(8), Na(11), Mg(12), Al(13), Si(14), P(15), S(16), Cl(17), Ar(18), K(19), Ca(20)',
    '⚡ Za s i p-blok: valencijski elektroni = redni broj grupe (stara notacija) ili zadnja cifra u rimskim brojevima',
    '🔵 Kratki zapis konfiguracije: [plemeniti plin] − ostatak. Ca: [Ar]4s²',
    '⚠️ 4s se puni PRIJE 3d (ali kod ionizacije d-metala: PRVO se skida 4s!)',
  ],

  formulas: [
    {
      label: 'Max elektrona u ljusci n',
      formula: 'nₘₐₓ = 2n²',
      desc: 'K(n=1): 2, L(n=2): 8, M(n=3): 18, N(n=4): 32',
    },
    {
      label: 'Kapaciteti podljuski',
      formula: 's:2e / p:6e / d:10e / f:14e',
      desc: 'Svaka orbitala max 2 elektrona: s ima 1, p ima 3, d ima 5, f ima 7 orbitala',
    },
  ],

  tasks: [
    {
      q: 'Zapiši elektronsku konfiguraciju atoma klora (Z=17).',
      steps: [
        'Trebamo rasporediti 17 elektrona',
        '1s² → 2 elektrona razigrana, ostaje 15',
        '2s² → ukupno 4, ostaje 13',
        '2p⁶ → ukupno 10, ostaje 7',
        '3s² → ukupno 12, ostaje 5',
        '3p⁵ → ukupno 17 ✓',
      ],
      answer: '1s²2s²2p⁶3s²3p⁵ ili [Ne]3s²3p⁵ — 7 valencijskih elektrona (VII.A grupa)',
    },
    {
      q: 'Zapiši konfiguraciju iona Fe³⁺ (Z=26).',
      steps: [
        'Neutralni Fe (Z=26): 1s²2s²2p⁶3s²3p⁶4s²3d⁶',
        'Fe³⁺ gubi 3 elektrona. Kod d-metala, PRVO se skida iz 4s!',
        'Ukloni 4s² (2 elektrona), pa još 1 iz 3d',
        'Fe³⁺: 1s²2s²2p⁶3s²3p⁶3d⁵ ili [Ar]3d⁵',
      ],
      answer: '[Ar]3d⁵ — pola-popunjena 3d podljuska (posebna stabilnost)',
    },
    {
      q: 'Koji element ima konfiguraciju [Ne]3s²3p⁶? U kojoj je grupi i periodi?',
      steps: [
        '[Ne] = 1s²2s²2p⁶ (10 elektrona)',
        '3s²3p⁶ = još 8 elektrona → ukupno 18 elektrona → Z=18',
        'Z=18 → Argon (Ar) — plemeniti plin',
        'Zadnja ljuska: 3 → 3. perioda',
        'Valencijski elektroni: 3s²3p⁶ = 8 → 18. grupa (VIII A, plemeniti plinovi)',
      ],
      answer: 'Argon (Ar), 3. perioda, 18. grupa — potpuno popunjena ljuska',
    },
  ],

  mistakes: [
    '❌ Punjenje 3d PRIJE 4s (greška: ...3s²3p⁶3d²4s² umjesto ...3s²3p⁶4s²3d²)',
    '❌ Kod ionizacije d-metala: skidanje elektrona iz 3d umjesto iz 4s',
    '❌ Pisanje 2p⁸ — p-podljuska prima maks. 6 elektrona!',
    '❌ Zanemarivanje Hundovog pravila u orbitalnim dijagramima (elektroni moraju biti paralelnih spinova i zauzeti maksimalan broj slobodnih orbitala)',
    '❌ Miješanje broja valentnih elektrona s brojem ljuski',
  ],

  quiz: [
    {
      q: 'Koja je elektronska konfiguracija atoma sumpora (Z=16)?',
      opts: [
        '1s²2s²2p⁶3s²3p⁴',
        '1s²2s²2p⁶3s²3p⁶',
        '1s²2s²2p⁶3s⁴3p²',
        '1s²2s²2p⁴3s²3p⁴',
      ],
      answer: 0,
      exp: '16 elektrona: 1s²(2)+2s²(4)+2p⁶(10)+3s²(12)+3p⁴(16). 4 valentna elektrona u 3p.',
    },
    {
      q: 'Koliko valencijskih elektrona ima fosfor (Z=15)?',
      opts: ['3', '5', '6', '15'],
      answer: 1,
      exp: 'P: 1s²2s²2p⁶3s²3p³. Valentni elektroni = 3s²+3p³ = 2+3 = 5. Stoga P je u 15. grupi (V.A).',
    },
    {
      q: 'Koji plemeniti plin ima konfiguraciju 1s²2s²2p⁶3s²3p⁶?',
      opts: ['Ne', 'He', 'Ar', 'Kr'],
      answer: 2,
      exp: 'Brojimo elektrone: 2+2+6+2+6 = 18. Z=18 je Argon (Ar).',
    },
  ],

  ultraSummary: [
    'Redoslijed punjenja: 1s→2s→2p→3s→3p→4s→3d→4p...',
    'Max u ljusci n: 2n² | Max u podljuski: s=2, p=6, d=10, f=14',
    'Valencijski elektroni = elektroni zadnje ljuske = kemijsko ponašanje',
    'Za ione: kation gubi iz zadnje ljuske, anion prima u zadnju ljusku',
    '⚠️ d-metali: 4s se puni prije 3d, ali 4s se skida pri ionizaciji!',
  ],

  connections: [
    { topic: 'Periodni sustav', why: 'Broj valencijskih elektrona = broj grupe; broj ljuska = period' },
    { topic: 'Kemijske veze', why: 'Valentni elektroni sudjeluju u tvorbi svih vrsta kemijskih veza' },
    { topic: 'Ionizacijska energija', why: 'Energija potrebna za odvajanje elektrona ovisi o konfiguraciji' },
    { topic: 'Oksidacijski broj', why: 'Tipični oksidacijski brojevi elementa su određeni valentnim elektronima' },
  ],

  nextStep: { slug: 'periodni-sustav', title: 'Periodni sustav' },
}

// ─── Poglavlje 4: Periodni sustav ───────────────────────────────────────────
const periodniSustav = {
  slug: 'periodni-sustav',
  title: 'Periodni sustav elemenata',
  subtitle: 'Periode, grupe, blokovi i periodičnost svojstava',
  duration: '20 min',
  difficulty: 'srednje',
  maturaRelevance: 'ključna',
  order: 4,

  mustKnow: [
    'PS: elementi poredani po rastućem atomskom broju Z',
    'Perioda = horizontalni red; broj periode = broj ljuski valentnih elektrona',
    'Grupa = vertikalni stupac; elementi grupe imaju sličan kemijski reaktivitet',
    'Blok s (gr.1-2), blok p (gr.13-18), blok d (gr.3-12, prijelazni metali), blok f (lantanidi/aktinidi)',
    'Atomski radijus: raste prema dolje u grupi (više ljuski), pada s lijeva na desno u periodi (više p+ privlači e⁻)',
    'Elektronegativnost i ionizacijska energija: raste s lijeva na desno i odozdo prema gore u PS',
  ],

  quickConcept:
    'Periodni sustav nije samo tablica — on je mapa kemijskog ponašanja. Znati gdje je element u PS znači znati kako se ponaša: metali su lijevo (daju elektrone), nemetali su desno (primaju elektrone), plemeniti plinovi su krajnje desno (ne reagiraju). Perioda govori koliko ima ljuski, a grupa govori koliko ima valencijskih elektrona.',

  theory: [
    {
      heading: 'Grupe i periode',
      content:
        'PS ima 7 perioda i 18 grupa. Stara notacija grupe: IA-VIII A = glavne grupe (s i p blok); IB-VIII B = sporedne grupe (d blok). Nova IUPAC notacija: grupe 1-18. Elementi iste grupe imaju isti broj valencijskih elektrona i slična kemijska svojstva.',
      table: {
        headers: ['Blok', 'Grupe (IUPAC)', 'Primjeri', 'Tip'],
        rows: [
          ['s-blok', '1, 2', 'Li, Na, K, Be, Mg, Ca', 'Alkalni i zemnoalkalni metali'],
          ['p-blok', '13–18', 'B, C, N, O, F, Ne', 'Nemetali, polumetali, plemeniti plinovi'],
          ['d-blok', '3–12', 'Fe, Cu, Zn, Cr, Mn', 'Prijelazni metali'],
          ['f-blok', '—', 'La-Lu, Ac-Lr', 'Lantanidi i aktinidi'],
        ],
      },
    },
    {
      heading: 'Periodičnost svojstava',
      content:
        'Atomski radijus: smanjuje se u periodi (lijevo→desno) jer više protona jače privlači elektrone; raste u grupi (gore→dolje) jer se dodaju ljuske. Ionizacijska energija (energija za skidanje prvog elektrona): povećava se u periodi (lijevo→desno), smanjuje u grupi (gore→dolje). Elektronegativnost: slično kao ionizacijska energija — fluor je najelektronegativniji element.',
      table: null,
    },
  ],

  maturaPattern:
    'Na maturi: (1) Iz elektronske konfiguracije odrediti grupu i periodu, (2) Objasniti trend atomskog radijusa ili ionizacijske energije, (3) Usporediti reaktivnost elemenata (koji je reaktivniji metal: Li ili K?), (4) Identificirati element iz opisa (element 3. periode, VI. grupe = S).',

  taskPatterns: [
    {
      pattern: 'Iz konfiguracije [Ar]4s²3d⁵ odredi grupu i periodu.',
      howToSolve: 'Zadnja ljuska je 4 → 4. perioda. Valentni elektroni za d-metale = 3d+4s = 5+2=7 → 7. grupa (VII B).',
    },
    {
      pattern: 'Koji je reaktivniji metal: Na ili K?',
      howToSolve: 'K je ispod Na u grupi 1. Veće atome → vanjski e⁻ dalje od jezgre → lakše se skida → K je reaktivniji.',
    },
  ],

  shortcuts: [
    '📍 Period = zadnja ljuska valentnih elektrona',
    '📍 Grupa 1-2 = valencijski e⁻ u s podljusci; Grupa 13-18 = u p podljusci',
    '⬆️ Reaktivnost metala raste prema dolje u grupi (alkalni metali: Li < Na < K < Rb < Cs)',
    '⬆️ Reaktivnost nemetala raste prema gore i desno (halogeni: I < Br < Cl < F)',
  ],

  formulas: [
    {
      label: 'Period iz konfiguracije',
      formula: 'perioda = n (broj zadnje popunjene ljuske)',
      desc: 'Primjer: 1s²2s²2p⁶3s²3p⁴ → zadnja ljuska je 3 → 3. perioda',
    },
    {
      label: 'Grupa iz konfiguracije',
      formula: 'grupa (s,p) = ukupan br. val. elektrona',
      desc: 'Za blok s i p: zbroji elektrone u zadnjoj ljusci i periodu. Za d-blok: 3d + 4s elektroni',
    },
  ],

  tasks: [
    {
      q: 'Element ima konfiguraciju 1s²2s²2p⁶3s²3p⁴. Koji je element? Koja je perioda i koja je grupa?',
      steps: [
        'Ukupno elektrona: 2+2+6+2+4 = 16 → Z=16 → Sumpor (S)',
        'Zadnja ljuska = 3 → 3. perioda',
        'Valencijski elektroni: 3s²+3p⁴ = 2+4 = 6 → 16. grupa (VI A, stara notacija)',
      ],
      answer: 'Sumpor (S), 3. perioda, 16. (VI A) grupa',
    },
    {
      q: 'Poredaj po rastućem atomskom radijusu: O, S, Se.',
      steps: [
        'Svi su u 16. grupi (VI A)',
        'Idu prema dolje u grupi: O (period 2) < S (period 3) < Se (period 4)',
        'Što niže u grupi, više ljuski, manji utjecaj jezgre na valentne elektrone → veći atom',
      ],
      answer: 'O < S < Se (atomski radijus raste prema dolje u grupi)',
    },
  ],

  mistakes: [
    '❌ Miješanje periode i grupe (period = red, grupa = stupac)',
    '❌ Smatrati da reaktivniji metal uvijek ima veću elektronegativnost — obratno je!',
    '❌ Za d-metale: valencijske elektrone računati samo iz 4s (zanemariti 3d)',
    '❌ Reći da plemeniti plinovi nemaju valentnih elektrona — imaju 8 (osim He koji ima 2)',
  ],

  quiz: [
    {
      q: 'Element s konfiguracijom [Ne]3s¹ je u kojoj grupi i periodi?',
      opts: ['1. grupa, 2. perioda', '1. grupa, 3. perioda', '2. grupa, 3. perioda', '11. grupa, 3. perioda'],
      answer: 1,
      exp: '[Ne]3s¹: zadnja ljuska = 3 → 3. perioda. Valencijiski e⁻ = 3s¹ = 1 → 1. grupa. Radi se o Natriju (Na).',
    },
    {
      q: 'Koji trend atomskog radijusa je točan?',
      opts: [
        'Raste s lijeva na desno u periodi',
        'Smanjuje se prema dolje u grupi',
        'Raste prema dolje u grupi',
        'Ne mijenja se unutar iste periode',
      ],
      answer: 2,
      exp: 'Prema dolje u grupi se dodaju ljuske koje su sve dalje od jezgre → radijus raste.',
    },
    {
      q: 'Koji halogeni element ima najveću elektronegativnost?',
      opts: ['I (jod)', 'Br (brom)', 'Cl (klor)', 'F (fluor)'],
      answer: 3,
      exp: 'Fluor je najelektronegativniji element u cijelom PS — najviše u grupi i periodi, s najvećom silom privlačenja elektrona.',
    },
  ],

  ultraSummary: [
    'Perioda = redak = broj ljuski; Grupa = stupac = broji valencijh e⁻',
    'PS blokovi: s (gr.1,2), p (gr.13-18), d (gr.3-12), f (lantanidi/aktinidi)',
    'Atomski radijus: ↓ grupi raste, → periodi pada',
    'Reaktivnost metala raste prema dolje; nemetala prema gore/desno',
    'Elektronegativnost i ionizacijska energija: rastuće → i ↑',
  ],

  connections: [
    { topic: 'Elektronska konfiguracija', why: 'Iz konfiguracije direktno čitamo grupu i periodu' },
    { topic: 'Kemijske veze', why: 'Razlika elektronegativnosti određuje vrstu veze (ionska/kovalentna)' },
    { topic: 'Oksidacijski broj', why: 'Tipični oksidacijski brojevi su vezani za grupu elementa' },
    { topic: 'Reaktivnost metala', why: 'Niz aktivnosti metala prati trend elektronegativnosti u PS' },
  ],

  nextStep: { slug: 'kemijske-veze', title: 'Kemijske veze' },
}

// ─── Poglavlje 5: Kemijske veze ─────────────────────────────────────────────
const kemijskeVeze = {
  slug: 'kemijske-veze',
  title: 'Kemijske veze',
  subtitle: 'Ionska, kovalentna i metalna veza — teorija i prepoznavanje',
  duration: '25 min',
  difficulty: 'srednje',
  maturaRelevance: 'ključna',
  order: 5,

  mustKnow: [
    'Ionska veza: metal + nemetal, prijenos elektrona, nastaju ioni, tvar je sol ili oksid',
    'Kovalentna veza: nemetal + nemetal, dijeljenje elektrona, nastaju molekule',
    'Metalna veza: umreženi kationi metala + slobodni elektroni (elektronski oblak)',
    'Elektronegativnost razlika > 1.7 → ionska; 0.4–1.7 → polarna kovalentna; < 0.4 → nepolarna kovalentna',
    'Vodikova veza: posebna međumolekulska sila (N–H, O–H, F–H s elektronegativnim atomom susjedne molekule)',
    'Lewisova struktura: prikazuje sve valentne elektrone i veze u molekuli',
  ],

  quickConcept:
    'Kemija je u svojoj srži dijeljenje ili preskok elektrona. Metal + nemetal → elektronegativniji nemetal "krade" elektrone od metala → nastaju ioni → ionska veza. Dva nemetala → nitko ne želi dati elektron → dijele ih → kovalentna veza. Metali međusobno → elektroni slobodno putuju cijelim kristalom → metalna veza.',

  theory: [
    {
      heading: 'Ionska veza',
      content:
        'Nastaje između metala i nemetala (ili između jona s suprotnim nabojem). Metal gubi elektrone (postaje kation, npr. Na⁺, Ca²⁺), nemetal prima elektrone (postaje anion, npr. Cl⁻, O²⁻). Ionski spoj formira kristalnu rešetku. Primjeri: NaCl, MgO, CaCl₂, Al₂O₃. Svojstva: visoko talište i vrelište, krhki, provode struju otopljeni ili u rastalini.',
      table: null,
    },
    {
      heading: 'Kovalentna veza',
      content:
        'Nastaje između nemetala. Elektroni se dijele u zajednički par koji privlači oba atoma jezgrama. Jednostruka veza (σ): 1 par; dvostruka veza: 1 σ + 1 π; trostruka veza: 1 σ + 2 π. Polarnost ovisi o razlici elektronegativnosti: (a) nepolarna kovalentna (ΔEN < 0.4): H₂, Cl₂, O₂; (b) polarna kovalentna (0.4 < ΔEN < 1.7): HCl, H₂O, NH₃; (c) ionska (ΔEN > 1.7): NaCl, NaF.',
      table: {
        headers: ['Vrsta veze', 'ΔEN', 'Primjer', 'Tip tvari'],
        rows: [
          ['Nepolarna kovalentna', '< 0.4', 'H₂, Cl₂, CH₄', 'Molekula (ista elektronegativnost)'],
          ['Polarna kovalentna', '0.4 – 1.7', 'HCl, H₂O, NH₃', 'Molekula s dipolnim momentom'],
          ['Ionska', '> 1.7', 'NaCl, MgO, KBr', 'Ionski kristal (sol)'],
        ],
      },
    },
    {
      heading: 'Metalna veza i vanderwaalske sile',
      content:
        'Metalna veza: metalni kationi u kristalnoj rešetki okupani morem slobodnih elektrona (elektronski oblak). Objašnjava vodljivost, savitljivost i sjaj metala. Vanderwaalske sile: slabe međumolekulske sile između neutralnih molekula — jača u većim, polarizabilnijim molekulama. Vodikova veza (N–H, O–H, F–H) mnogo jača od van der Waalsovih — objašnjava anomalno visoko vrelište H₂O.',
      table: null,
    },
  ],

  maturaPattern:
    'Na maturi najčešće: (1) Odredi vrstu veze između zadanih elemenata (koristeći ΔEN ili položaj u PS), (2) Nacrtaj Lewisovu strukturu molekule (H₂O, CO₂, NH₃, N₂...), (3) Razloži zašto su svojstva tvari takva kakva jesu (visoko vrelište vode → vodikova veza), (4) Usporedi energije i duljine veza (trostruka veza: kraća i jača od dvostruke).',

  taskPatterns: [
    {
      pattern: 'Zadane su formule tvari — odredi vrstu kemijske veze.',
      howToSolve: 'Korak 1: metal + nemetal → ionska. Korak 2: nemetal + nemetal → kovalentna (polarna ili nepolarna). Korak 3: isti metali ili legure → metalna.',
    },
    {
      pattern: 'Nacrtaj Lewisovu strukturu vodene molekule.',
      howToSolve: 'O ima 6 val. e⁻. Svaki H ima 1 val. e⁻. Ukupno 8 e⁻. O tvori 2 veze s H (2×2=4 e⁻ u vezama). Preostaje 4 e⁻ → 2 slobodna para na O. Kut H-O-H ≈ 104.5°.',
    },
    {
      pattern: 'Zašto H₂O ima neobično visoko vrelište?',
      howToSolve: 'Između molekula H₂O postoje vodikove veze (O–H...O). One su znatno jače od van der Waalsovih sila, pa treba puno energije za prekidanje → visoko talište i vrelište.',
    },
  ],

  shortcuts: [
    '⚡ Metal + nemetal = ionska (gotovo uvijek!)',
    '🔵 Nemetal + nemetal = kovalentna (dijelje elektrona)',
    '🔴 ΔEN > 1.7 = ionska; ΔEN 0.4-1.7 = polarna kovalentna; ΔEN < 0.4 = nepolarna kovalentna',
    '💧 Vodikova veza moguća SAMO za N–H, O–H, F–H (samo ove tri!)',
  ],

  formulas: [
    {
      label: 'Razlika elektronegativnosti i vrsta veze',
      formula: 'ΔEN = |EN(A) − EN(B)|',
      desc: 'ΔEN > 1.7: ionska; 0.4 < ΔEN ≤ 1.7: polarna kovalentna; ΔEN ≤ 0.4: nepolarna kovalentna',
    },
    {
      label: 'Broj kovalentnih veza atoma',
      formula: 'br. veza = (8 − valentnih e⁻) za nemetale; H: 1 veza',
      desc: 'C: 4 veze, N: 3 veze, O: 2 veze, F/Cl: 1 veza (H: 1 veza)',
    },
  ],

  tasks: [
    {
      q: 'Odredi vrstu kemijske veze u sljedećim spojevima: NaCl, Cl₂, HCl, MgO.',
      steps: [
        'NaCl: Na je metal (gr.1), Cl je nemetal → ionska veza. ΔEN = |0.9−3.0| = 2.1 > 1.7 ✓',
        'Cl₂: Cl + Cl, isti element → ΔEN = 0 → nepolarna kovalentna veza',
        'HCl: H (EN=2.1) + Cl (EN=3.0) → ΔEN = 0.9 → polarna kovalentna veza',
        'MgO: Mg je metal, O je nemetal → ionska veza. ΔEN = |1.2−3.5| = 2.3 > 1.7 ✓',
      ],
      answer: 'NaCl: ionska; Cl₂: nepolarna kovalentna; HCl: polarna kovalentna; MgO: ionska',
    },
    {
      q: 'Nacrtaj Lewisovu strukturu NH₃ i odredi polarnost.',
      steps: [
        'N ima 5 val. e⁻, svaki H ima 1 val. e⁻, ukupno 5+3=8 val. e⁻',
        'N tvori 3 kovalentne veze s 3 atoma H → 6 e⁻ u vezama',
        'Preostaju 2 e⁻ → 1 slobodni par na N',
        'N–H veze su polarne (EN(N)=3.0, EN(H)=2.1), i nisu simetrične → molekula NH₃ je polarna (dipolni moment ≠ 0)',
      ],
      answer: 'NH₃ je polarna molekula s jednim slobodnim parom na N; trorub trigonalna piramida',
    },
  ],

  mistakes: [
    '❌ Svrstati HCl kao ionsku vezu jer "Cl je nemetal koji uzima elektrone" — ΔEN=0.9, dakle polarna kovalentna!',
    '❌ Reći da su sve veze metal-nemetal ionske bez provjere — ΔEN mora biti > 1.7',
    '❌ Vodikova veza moguća između bilo kojih molekula s H — samo N–H, O–H, F–H!',
    '❌ Zaboraviti slobodne parove elektrona pri crtanju Lewisove strukture',
    '❌ Miješati polarnost veze s polarnosti molekule (CO₂ ima polarne C=O veze, ali je nepolarna molekula zbog simetrije)',
  ],

  quiz: [
    {
      q: 'Koja vrsta veze postoji u molekuli N₂?',
      opts: ['Ionska', 'Nepolarna kovalentna', 'Polarna kovalentna', 'Metalna'],
      answer: 1,
      exp: 'N₂: ista dva atoma nemetala → ΔEN = 0 → nepolarna kovalentna veza (trostruka: N≡N).',
    },
    {
      q: 'Zašto voda (H₂O) ima neobično visoko vrelište za malu molekulu?',
      opts: [
        'Zbog kovalentnih O–H veza unutar molekule',
        'Zbog ionske naravi molekule',
        'Zbog vodikovih veza između molekula',
        'Zbog metalnih elektrona u vodi',
      ],
      answer: 2,
      exp: 'Između susjednih molekula H₂O postoje vodikove veze (O–H...O). One su jake međumolekulske sile → treba više energije za isparavanje → visoko vrelište.',
    },
    {
      q: 'ΔEN između Na (0.9) i Cl (3.0) je 2.1. Kakva je veza?',
      opts: ['Nepolarna kovalentna', 'Polarna kovalentna', 'Ionska', 'Metalna'],
      answer: 2,
      exp: 'ΔEN = 2.1 > 1.7 → veza je ionska. NaCl je tipična sol s ionskom vezom.',
    },
  ],

  ultraSummary: [
    'Metal+nemetal → ionska (prijenos e⁻, nastaju ioni, sol/oksid)',
    'Nemetal+nemetal → kovalentna (dijeljenje e⁻, nastaju molekule)',
    'ΔEN > 1.7: ionska; 0.4-1.7: polarna kovalentna; < 0.4: nepolarna kovalentna',
    'Vodikova veza: samo N–H, O–H, F–H (jaka međumolekulska sila)',
    'Metalna veza: slobodni elektroni + kationi u rešetki',
  ],

  connections: [
    { topic: 'Periodni sustav', why: 'ΔEN ovisi o položaju u PS; elektronegativnost raste → i ↑' },
    { topic: 'Molekularna geometrija (VSEPR)', why: 'Slobodni parovi i veze određuju oblik molekule' },
    { topic: 'Kiseline i baze', why: 'Ionske veze u solima objašnjavaju disocijaciju u vodi' },
    { topic: 'Redoks reakcije', why: 'Ionske veze nastaju redoks procesima (prijenos elektrona)' },
    { topic: 'Organska kemija', why: 'Kovalentne veze C–C, C–H, C=O temelj su organskih molekula' },
  ],

  nextStep: null, // kraj modula
}

// ─── Export modula ───────────────────────────────────────────────────────────
export const module01TeneljiKemije = {
  slug: 'temelji-kemije',
  title: 'Temelji kemije',
  subtitle: 'Građa atoma, periodni sustav i kemijske veze',
  icon: '⚛️',
  color: '#34d399',
  colorDim: 'rgba(52,211,153,.08)',
  order: 1,
  chapters: [gradaAtoma, atomskiIMaseni, elektronskiKonfiguracija, periodniSustav, kemijskeVeze],
}
