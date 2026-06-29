// app/plan-ucenja/lib/planGenerator.js
// Svih 24 predmeta državne mature s pravim maturalnim gradivom

/* ─── Svi predmeti ─────────────────────────────── */
export const PREDMETI_PLAN = [
  // ── OBVEZNI ───────────────────────────────────────────────────
  { id:'hrv',   name:'Hrvatski jezik',           sym:'HR', color:'#f87171', group:'Obvezni',        tezina:1.25 },
  { id:'mat',   name:'Matematika A (viša)',       sym:'π',  color:'#818cf8', group:'Obvezni',        tezina:1.35, mutexGroup:'mat_razina' },
  { id:'matb',  name:'Matematika B (niža)',       sym:'π',  color:'#a5b4fc', group:'Obvezni',        tezina:1.15, mutexGroup:'mat_razina' },
  { id:'eng_a', name:'Engleski jezik A (viša)',   sym:'En', color:'#c084fc', group:'Strani jezici',  tezina:1.10, mutexGroup:'strani_jezik' },
  { id:'eng_b', name:'Engleski jezik B (niža)',   sym:'En', color:'#b496f5', group:'Strani jezici',  tezina:1.05, mutexGroup:'strani_jezik' },
  { id:'nje',   name:'Njemački jezik',            sym:'De', color:'#a78bfa', group:'Strani jezici',  tezina:1.10, mutexGroup:'strani_jezik' },
  { id:'fra',   name:'Francuski jezik',           sym:'Fr', color:'#60a5fa', group:'Strani jezici',  tezina:1.10, mutexGroup:'strani_jezik' },
  { id:'tal',   name:'Talijanski jezik',          sym:'It', color:'#34d399', group:'Strani jezici',  tezina:1.10, mutexGroup:'strani_jezik' },
  { id:'spn',   name:'Španjolski jezik',          sym:'Es', color:'#fb923c', group:'Strani jezici',  tezina:1.10, mutexGroup:'strani_jezik' },

  // ── PRIRODOSLOVNO-MATEMATIČKI ──────────────────────────────────
  { id:'fiz',  name:'Fizika',               sym:'⚡', color:'#fbbf24', group:'Prirodoslovno',  tezina:1.25 },
  { id:'kem',  name:'Kemija',               sym:'⚗', color:'#34d399', group:'Prirodoslovno',  tezina:1.20 },
  { id:'bio',  name:'Biologija',            sym:'⊕', color:'#2dd4bf', group:'Prirodoslovno',  tezina:1.15 },
  { id:'inf',  name:'Informatika',          sym:'⌨', color:'#818cf8', group:'Prirodoslovno',  tezina:1.10 },

  // ── DRUŠTVENO-HUMANISTIČKI ─────────────────────────────────────
  { id:'geo',  name:'Geografija',           sym:'◉', color:'#38bdf8', group:'Društveno',      tezina:1.05 },
  { id:'pov',  name:'Povijest',             sym:'⚔', color:'#fb923c', group:'Društveno',      tezina:1.10 },
  { id:'psi',  name:'Psihologija',          sym:'🧠', color:'#c084fc', group:'Društveno',      tezina:1.05 },
  { id:'soc',  name:'Sociologija',          sym:'⚖', color:'#e9b446', group:'Društveno',      tezina:1.00 },
  { id:'fil',  name:'Filozofija',           sym:'φ',  color:'#94a3b8', group:'Društveno',      tezina:1.05 },
  { id:'log',  name:'Logika',               sym:'∴', color:'#7dd3fc', group:'Društveno',      tezina:1.05 },
  { id:'pig',  name:'Politika i gospodarstvo', sym:'🏛', color:'#fda4af', group:'Društveno',   tezina:1.00 },
  { id:'vje',  name:'Vjeronauk',            sym:'✝', color:'#d4b483', group:'Društveno',      tezina:1.00 },
  { id:'eti',  name:'Etika',                sym:'◈', color:'#86efac', group:'Društveno',      tezina:1.00 },

  // ── UMJETNIČKI ─────────────────────────────────────────────────
  { id:'gla',  name:'Glazbena umjetnost',   sym:'♪', color:'#f9a8d4', group:'Umjetnički',     tezina:1.05 },
  { id:'lik',  name:'Likovna umjetnost',    sym:'🎨', color:'#fdba74', group:'Umjetnički',     tezina:1.05 },

  // ── KLASIČNI JEZICI ────────────────────────────────────────────
  { id:'lat',  name:'Latinski jezik',       sym:'Ⅼ', color:'#a8a29e', group:'Klasični jezici', tezina:1.15 },
  { id:'grk',  name:'Grčki jezik',          sym:'Ω', color:'#9ca3af', group:'Klasični jezici', tezina:1.15 },
]

/* ─── Tjedni sadržaj — izveden iz SKRIPTE ─────── */
// Svaka tema je oblikovana kao "Poglavlje — Tema" za jasnoću u planu
export const TJEDNI_SADRZAJ = {

  hrv: [
    'Književnost — Moderna: Matoš, Kranjčević, Nazor',
    'Književnost — Avangarda: Krleža, Ujević, Šimić',
    'Suvremena hr. proza: Marinković, Parun, Slamnig',
    'Svjetska književnost: Realizam i Modernizam',
    'Svjetska književnost: Egzistencijalizam',
    'Jezikoslovlje — Fonetika i morfologija',
    'Jezikoslovlje — Sintaksa i leksikologija',
    'Pisanje eseja: Analiza teksta i argumentacija',
    'Ponavljanje književnosti + simulacija eseja',
  ],

  mat: [
    'Skupovi i logika — skupovi, veznici, kvantifikatori',
    'Realni brojevi — apsolutna vrijednost, intervali, nejednakosti',
    'Funkcije — definicija, kompozicija, inverzna funkcija',
    'Trigonometrija — funkcije, adicijske formule, jednadžbe',
    'Derivacije — pravila deriviranja, složene funkcije',
    'Primjena derivacija — monotnost, ekstremi, asimptote',
    'Integrali — neodređeni integral, metode integracije',
    'Određeni integral i primjena (površine, volumeni)',
    'Kompleksni brojevi — algebarski i trigonometrijski oblik',
    'Nizovi i redovi — aritmetički, geometrijski, limesi',
    'Kombinatorika i vjerojatnost',
    'Ponavljanje i simulacija ispita',
  ],

  matb: [
    'Realni brojevi i skupovi — operacije, intervali',
    'Algebarski izrazi — polinomi, rastav, jednadžbe',
    'Funkcije i grafovi — linearna, kvadratna',
    'Eksponencijalna i logaritamska funkcija',
    'Trigonometrija — kutovi, funkcije, pravokutni trokut',
    'Geometrija — trokuti i četverokuti',
    'Geometrija — kružnica i tijela',
    'Statistika — deskriptivna statistika i vjerojatnost',
    'Kombinatorika',
    'Ponavljanje i simulacija ispita',
  ],

  eng_a: [
    'Grammar — Complex tenses, Conditionals & Inversion',
    'Grammar — Passive Voice, Reported Speech, Subjunctive',
    'Vocabulary — Academic English (AWL) & Collocations',
    'Vocabulary — Phrasal verbs & Idiomatic expressions',
    'Writing — Argumentative essay (viša razina)',
    'Writing — Formal letter, Report & Review',
    'Reading & Listening — Inference, Note-taking & Gapped text',
    'Exam strategies + simulacija ispita (A razina)',
  ],

  eng_b: [
    'Grammar — Tenses (Present, Past, Future) & Conditionals',
    'Grammar — Passive Voice & Reported Speech',
    'Vocabulary — Everyday & thematic vocabulary',
    'Vocabulary — Phrasal verbs & Common collocations',
    'Writing — Informal letter, Email & Short story',
    'Reading & Listening — Main idea & Detail tasks',
    'Ponavljanje + simulacija ispita (B razina)',
  ],

  eng: [
    'Grammar — Complex tenses & Conditionals',
    'Grammar — Passive Voice, Reported Speech, Inversion',
    'Vocabulary — Academic English (AWL)',
    'Vocabulary — Phrasal verbs & Collocations',
    'Writing — Argumentative essay',
    'Writing — Formal letter & Report',
    'Reading & Listening — Inference & Note-taking',
    'Exam strategies + simulacija ispita',
  ],

  nje: [
    'Gramatika — Konjunktiv I i II',
    'Gramatika — Pasiv i infinitivne konstrukcije',
    'Vokabular — akademski i feste Wendungen',
    'Pisanje — Erörterung i Formeller Brief',
    'Čitanje i slušanje — strategije razumijevanja',
    'Ponavljanje + simulacija ispita',
  ],

  fra: [
    'Grammaire — Subjonctif i Conditionnel',
    'Grammaire — Participe i Gérondif',
    'Expression écrite — Dissertation',
    'Expression écrite — Lettre formelle i Résumé',
    'Compréhension — strategije čitanja i slušanja',
    'Ponavljanje + simulacija ispita',
  ],

  tal: [
    'Grammatica — Congiuntivo i Condizionale',
    'Grammatica — Participio i Gerundio',
    'Scrittura — Saggio i Lettera formale',
    'Comprensione — strategije čitanja i slušanja',
    'Ponavljanje + simulacija ispita',
  ],

  spn: [
    'Gramática — Subjuntivo i Condicional',
    'Gramática — Pasiva i Estilo indirecto',
    'Escritura — Ensayo argumentativo',
    'Escritura — Carta formal i Resumen',
    'Comprensión — strategije čitanja i slušanja',
    'Ponavljanje + simulacija ispita',
  ],

  fiz: [
    'Mehanika — Kinematika i Newtonovi zakoni',
    'Mehanika — Rad, energija i zakoni očuvanja',
    'Termodinamika — Toplina, idealni plin, zakoni',
    'Valovi i optika — mehanički valovi i zvuk',
    'Elektromagnetski valovi i optika',
    'Elektromagnetizam — Elektrostatika i struja',
    'Elektromagnetizam — Magnetsko polje',
    'Moderna fizika — Fotoefekt, atomi, nuklearna',
    'Ponavljanje + simulacija ispita',
  ],

  kem: [
    'Građa tvari — Atomska struktura i periodni sustav',
    'Kemijska veza — ionska, kovalentna, VSEPR',
    'Stehiometrija — mol, reakcije, otopine',
    'Oksido-redukcija i redoks reakcije',
    'Anorganska kemija — kiseline, baze, soli',
    'Organska kemija — ugljikovodici',
    'Organska kemija — funkcionalne skupine i biomolekule',
    'Fizikalna kemija — ravnoteža i kinetika',
    'Elektrokemija',
    'Ponavljanje + simulacija ispita',
  ],

  bio: [
    'Stanična biologija — prokarioti, eukarioti, organeli',
    'Stanični ciklus — dioba i rast',
    'Genetika — Mendelovi zakoni i DNK replikacija',
    'Genetika — transkripcija, translacija, mutacije',
    'Evolucija — Darwinova teorija i mehanizmi',
    'Evolucija — Specijacija i bioraznolikost',
    'Ekologija — ekosustavi i biogeokemijski ciklusi',
    'Anatomija čovjeka — krvožilni i dišni sustav',
    'Anatomija čovjeka — živčani i imunološki sustav',
    'Ponavljanje + simulacija ispita',
  ],

  inf: [
    'Algoritmi — pseudokod, dijagrami toka, složenost',
    'Python — varijable, tipovi, uvjeti i petlje',
    'Python — funkcije, liste i rječnici',
    'Baze podataka — relacijski model i SQL osnove',
    'Baze podataka — normalizacija i upiti',
    'Računalne mreže — protokoli i TCP/IP',
    'Sigurnost na internetu i zaštita podataka',
    'Digitalni sustavi — brojevni sustavi i logička vrata',
    'Ponavljanje + simulacija ispita',
  ],

  geo: [
    'Fizička geografija — kartografija i litosfera',
    'Fizička geografija — atmosfera, klima i hidrosfera',
    'Demografija — demografski procesi i migracije',
    'Naselja i urbanizacija',
    'Gospodarska geografija — poljoprivreda i industrija',
    'Gospodarska geografija — promet i turizam',
    'Hrvatska — geografski pregled',
    'Europa i kontinenti — regionalna geografija',
    'Ponavljanje + simulacija ispita',
  ],

  pov: [
    'Novi vijek — Humanizam, renesansa, otkrića',
    'Novi vijek — Reformacija i apsolutizam',
    'Dugotrajno 19. st. — Francuska revolucija i Bečki kongres',
    'Dugotrajno 19. st. — Nacionalizam i industrijalizacija',
    'Kratko 20. st. — I. svjetski rat i međuratje',
    'Kratko 20. st. — II. svjetski rat',
    'Hladni rat i suvremeni svijet',
    'Hrvatska povijest — Habsburška monarhija i preporod',
    'Hrvatska povijest — Domovinski rat i neovisnost',
    'Ponavljanje + simulacija ispita',
  ],

  psi: [
    'Uvod u psihologiju — predmet, metode, grane',
    'Biološke osnove ponašanja — živčani sustav i mozak',
    'Kognitivni procesi — percepcija i pamćenje',
    'Kognitivni procesi — mišljenje, jezik i inteligencija',
    'Motivacija i emocije — teorije i stres',
    'Socijalna psihologija — stavovi i konformizam',
    'Socijalna psihologija — predrasude i grupna dinamika',
    'Ponavljanje + simulacija ispita',
  ],

  soc: [
    'Uvod u sociologiju — predmet, metode, teorije',
    'Socijalizacija i kultura',
    'Društvena struktura — slojevi, mobilnost, nejednakost',
    'Institucije — obitelj i obrazovanje',
    'Institucije — religija i politika',
    'Socijalne promjene — globalizacija i modernizacija',
    'Urbano i ruralno — suvremene promjene',
    'Ponavljanje + simulacija ispita',
  ],

  fil: [
    'Uvod u filozofiju — antička filozofija, Sokrat, Platon',
    'Antička filozofija — Aristotel i helenizam',
    'Spoznajna teorija — racionalizam vs empirizam',
    'Spoznajna teorija — Kant i suvremena epistemologija',
    'Etika — metaetika i normativna etika',
    'Etika — primijenjena etika',
    'Filozofija uma — tijelo, um, slobodna volja',
    'Ponavljanje + simulacija ispita',
  ],

  log: [
    'Klasična logika — izjave, veznici, istinitosne tablice',
    'Klasična logika — tautologije i kontradikcije',
    'Argumentacija — deduktivni argumenti i indukcija',
    'Pogreške u zaključivanju i sofizmi',
    'Simbolička logika — predikatna logika',
    'Simbolička logika — kvantifikatori i formalizacija',
    'Ponavljanje + simulacija ispita',
  ],

  pig: [
    'Politički sustavi — demokracija i parlamentarizam',
    'Politički sustavi — predsjednički sustav i autoritarizam',
    'Institucije RH — Sabor, Vlada, Predsjednik',
    'EU institucije i lokalna samouprava',
    'Osnove ekonomije — tržišni mehanizmi i inflacija',
    'Osnove ekonomije — BDP i fiskalna politika',
    'Međunarodni odnosi — UN, NATO i geopolitika',
    'Globalizacija i suvremeni izazovi',
    'Ponavljanje + simulacija ispita',
  ],

  vje: [
    'Biblija — Stari zavjet: pregled i ključni tekstovi',
    'Biblija — Novi zavjet i kristologija',
    'Ekleziologija — nauk o Crkvi',
    'Crkvena povijest — rani kršćani i raskolni',
    'Crkvena povijest — reformacija i Crkva danas',
    'Etika — temeljne vrijednosti i dostojanstvo osobe',
    'Bioetika i socijalni nauk Crkve',
    'Ponavljanje + simulacija ispita',
  ],

  eti: [
    'Temelji etike — što je etika, norme, savjest',
    'Etički sustavi — virtue ethics i deontologija',
    'Etički sustavi — utilitarizam i diskursna etika',
    'Primijenjena etika — bioetika',
    'Primijenjena etika — ekološka i medijska etika',
    'Poslovna etika i profesionalna odgovornost',
    'Ponavljanje + simulacija ispita',
  ],

  gla: [
    'Glazbena teorija — note, ritam, ljestvice, tonalitet',
    'Glazbena teorija — harmonija i kontrapunkt',
    'Glazbena povijest — Barok i Klasicizam',
    'Glazbena povijest — Romantizam i 20. stoljeće',
    'Oblici i žanrovi — sonata i simfonija',
    'Oblici i žanrovi — opera, jazz i pop',
    'Analiza glazbenog djela + slušanje',
    'Ponavljanje + simulacija ispita',
  ],

  lik: [
    'Likovna teorija — likovni elementi i kompozicija',
    'Likovna teorija — boja, kontrast i prostor',
    'Povijest umjetnosti — antika i srednji vijek',
    'Povijest umjetnosti — renesansa i barok',
    'Povijest umjetnosti — modernizam',
    'Suvremena umjetnost i mediji',
    'Hrvatska likovna baština — romanika do danas',
    'Analiza likovnog djela + ponavljanje',
  ],

  lat: [
    'Gramatika — I. i II. deklinacija',
    'Gramatika — III., IV. i V. deklinacija',
    'Gramatika — konjugacije i glagolska vremena',
    'Gramatika — sintaksa i particip',
    'Gramatika — infinitiv i neizravni govor',
    'Tekstovi — Ciceron: odabrani odlomci',
    'Tekstovi — Vergilije i Cezar',
    'Rimska kultura i povijest + prijevod',
    'Ponavljanje + simulacija ispita',
  ],

  grk: [
    'Grčka pisma, fonologija i izgovor',
    'Gramatika — I. i II. deklinacija',
    'Gramatika — III. deklinacija',
    'Gramatika — konjugacije i prezent',
    'Gramatika — aorist i ostala vremena',
    'Gramatika — particip i neizravni govor',
    'Tekstovi — Homer: odabrani odlomci',
    'Tekstovi — Platon i Herodot',
    'Grčka filozofija i kultura + prijevod',
    'Ponavljanje + simulacija ispita',
  ],
}

/* ─── Generatori plana ─────────────────────────── */

export function buildFreePlan(selectedSubjects, satiTjedno, weeks) {
  if (!selectedSubjects.length) return []

  const baseHours = Math.max(1, Math.round(satiTjedno / Math.min(selectedSubjects.length, 3)))

  return Array.from({ length: weeks }, (_, index) => {
    const predmet     = selectedSubjects[index % selectedSubjects.length]
    const teme        = TJEDNI_SADRZAJ[predmet.id] || ['Osnove', 'Napredne teme', 'Ponavljanje i vježba']
    const tema        = teme[index % teme.length]
    const repeatWeek  = (index + 1) % 4 === 0
    const examWeek    = (index + 1) % 8 === 0

    return {
      tjedan:  index + 1,
      predmet: repeatWeek ? 'Svi predmeti' : predmet.name,
      sym:     repeatWeek ? '🔁' : predmet.sym,
      color:   repeatWeek ? '#e9b446' : predmet.color,
      tema: examWeek
        ? 'Simulacija ispita + analiza pogrešaka'
        : repeatWeek
        ? 'Ponavljanje prethodnih cjelina i kratka samoprovjera'
        : tema,
      sati: repeatWeek ? Math.max(baseHours, Math.round(satiTjedno * 0.8)) : baseHours,
      note: examWeek
        ? 'Riješi zadatke pod vremenom i zapiši 3 najveće slabe točke.'
        : repeatWeek
        ? 'Lagano konsolidiraj gradivo prije prelaska na nove teme.'
        : 'Fokus na razumijevanje gradiva, zatim kratko aktivno ponavljanje.',
    }
  })
}

export function buildProPlan(selectedSubjects, satiTjedno, weeks) {
  if (!selectedSubjects.length) return []

  const weighted  = [...selectedSubjects].sort((a, b) => (b.tezina || 1) - (a.tezina || 1))
  const hardest   = weighted[0]
  const second    = weighted[1] || weighted[0]
  const easiest   = weighted[weighted.length - 1]

  // Težinski queue — teži predmeti se pojavljuju više puta
  const queue = []
  weighted.forEach(s => {
    const repeats = Math.max(1, Math.round((s.tezina || 1) * 2))
    for (let i = 0; i < repeats; i++) queue.push(s)
  })

  const baseHours = Math.max(1, Math.round(satiTjedno / Math.min(selectedSubjects.length, 3)))

  return Array.from({ length: weeks }, (_, index) => {
    const week              = index + 1
    const isAdjustmentWeek  = week % 4 === 0
    const isExamWeek        = week % 6 === 0

    const predmet = isExamWeek
      ? hardest
      : isAdjustmentWeek
      ? second
      : queue[index % queue.length]

    const teme      = TJEDNI_SADRZAJ[predmet.id] || ['Osnove', 'Napredne teme', 'Vježba']
    const temaIndex = Math.min(index % teme.length, teme.length - 1)
    const baseTema  = teme[temaIndex]
    const hoursBoost = predmet.id === hardest.id ? 2 : predmet.id === second.id ? 1 : 0

    return {
      tjedan:  week,
      predmet: isAdjustmentWeek ? `${predmet.name} + korekcija` : predmet.name,
      sym:     predmet.sym,
      color:   predmet.color,
      tema: isExamWeek
        ? `${baseTema} — mini simulacija ispita`
        : isAdjustmentWeek
        ? `${baseTema} — analiza slabih točaka`
        : `${baseTema} — prioritetni fokus`,
      sati: Math.min(satiTjedno, baseHours + hoursBoost),
      note: isExamWeek
        ? `PRO ubacuje ranu provjeru za ${hardest.name.toLowerCase()} i prilagodbu daljnjeg rasporeda.`
        : isAdjustmentWeek
        ? 'PRO vraća temu ranije nego u klasičnom planu kako bi učvrstio slabije točke.'
        : predmet.id === easiest.id
        ? 'Lakši blok ostavlja prostor da energiju sačuvaš za teže cjeline.'
        : 'PRO daje više fokusa težim cjelinama i češće aktivno testiranje.',
    }
  })
}