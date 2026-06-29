export const SKRIPTE = [
  // ── OBVEZNI ────────────────────────────────────────────
  {
    id: "hrv",
    name: "Hrvatski jezik",
    sym: "✍",
    color: "#f87171",
    obvezno: true,
    route: "/skripte/hrv",
    razine: [
      {
        id: "SKR",
        label: "Skripta za maturu",
        poglavlja: [
          // KNJIŽEVNOST
          { id: "poglavlje-01", naziv: "Temelji civilizacije i antika", teme: ["Homer", "Sofoklo", "Vergilije", "Aristotel", "Bašćanska ploča"] },
          { id: "poglavlje-02", naziv: "Srednji vijek — hrvatska književnost", teme: ["Muka sv. Margarite", "Šibenska molitva", "Lucidár", "glagoljica", "latinica", "ćirilica"] },
          { id: "poglavlje-03", naziv: "Srednji vijek — svjetska književnost", teme: ["Dante", "Pjesma o Rolandu", "Beowulf", "Boccaccio"] },
          { id: "poglavlje-04", naziv: "Humanizam i renesansa — hrvatska književnost", teme: ["Marulić", "Hektorović", "Zoranić", "Lucić", "Držić"] },
          { id: "poglavlje-05", naziv: "Humanizam i renesansa — svjetska književnost", teme: ["Petrarca", "Shakespeare", "Cervantes"] },
          { id: "poglavlje-06", naziv: "Barok — hrvatska književnost", teme: ["Gundulić", "Bunić Vučić"] },
          { id: "poglavlje-07", naziv: "Klasicizam i prosvjetiteljstvo", teme: ["Molière", "Voltaire", "Racine", "Goldoni", "Kačić Miošić", "Relković"] },
          { id: "poglavlje-08", naziv: "Romantizam i ilirizam — hrvatska književnost", teme: ["Mažuranić", "Preradović", "Vraz", "ilirizam"] },
          { id: "poglavlje-09", naziv: "Romantizam — svjetska književnost", teme: ["Goethe", "Byron", "Puškin", "Ljermontov", "Poe"] },
          { id: "poglavlje-10", naziv: "Realizam i naturalizam — hrvatska književnost", teme: ["Šenoa", "Kovačić", "Novak", "Kranjčević"] },
          { id: "poglavlje-11", naziv: "Realizam i naturalizam — svjetska književnost", teme: ["Dostojevski", "Tolstoj", "Flaubert", "Zola"] },
          { id: "poglavlje-12", naziv: "Moderna — hrvatska književnost", teme: ["A. G. Matoš", "Leskovar", "Nehajev", "Nazor"] },
          { id: "poglavlje-13", naziv: "Avangarda i ekspresionizam — hrvatska književnost", teme: ["A. B. Šimić", "Tin Ujević", "Krleža", "Cesarić", "Tadijanović"] },
          { id: "poglavlje-14", naziv: "Avangarda — svjetska književnost", teme: ["Kafka", "Camus", "Andrić"] },
          { id: "poglavlje-15", naziv: "Druga moderna — hrvatska književnost", teme: ["Marinković", "Kaštelan", "Parun", "Nazor"] },
          { id: "poglavlje-16", naziv: "Postmodernizam i suvremena književnost", teme: ["Aralica", "Pavličić", "Brešan"] },

          // STILSKA IZRAŽAJNA SREDSTVA
          { id: "poglavlje-17", naziv: "Figure riječi — tropi", teme: ["metafora", "usporedba", "personifikacija", "alegorija", "metonimija", "ironija"] },
          { id: "poglavlje-18", naziv: "Figure govora i konstrukcije", teme: ["anafora", "epifora", "apostrofa", "gradacija", "antiteza", "inverzija"] },

          // JEZIKOSLOVLJE
          { id: "poglavlje-19", naziv: "Fonologija", teme: ["glasovni sustav", "glasovne promjene", "naglasci", "enklitike", "proklitike"] },
          { id: "poglavlje-20", naziv: "Morfologija I — imenice, zamjenice, pridjevi, brojevi", teme: ["rod", "broj", "padež", "zamjenice", "brojevi"] },
          { id: "poglavlje-21", naziv: "Morfologija II — glagoli i nepromjenjive vrste riječi", teme: ["glagolski oblici", "vid", "prilozi", "prijedlozi", "veznici"] },
          { id: "poglavlje-22", naziv: "Sintaksa I — rečenični članovi", teme: ["subjekt", "predikat", "objekt", "atribut", "priložna oznaka", "apozicija"] },
          { id: "poglavlje-23", naziv: "Sintaksa II — složene rečenice", teme: ["nezavisnosložene", "zavisnosložene", "izrične", "pridjevne", "priložne"] },
          { id: "poglavlje-24", naziv: "Leksikologija i semantika", teme: ["sinonimi", "antonimi", "homonimi", "polisemija", "frazeologizmi", "posuđenice"] },

          // PRAVOPIS
          { id: "poglavlje-25", naziv: "Pravopis I", teme: ["veliko i malo slovo", "sastavljeno i rastavljeno pisanje", "crtica"] },
          { id: "poglavlje-26", naziv: "Pravopis II", teme: ["interpunkcija", "citiranje", "kratice"] },

          // PISANJE
          { id: "poglavlje-27", naziv: "Školski esej", teme: ["interpretacijski esej", "usporedni esej", "teza", "argumentacija", "struktura"] },
          { id: "poglavlje-28", naziv: "Sažetak", teme: ["sažimanje", "tema teksta", "autorov stav", "duljina", "jasnoća"] },
        ],
      },
    ],
  },

  {
    id: "mat",
    name: "Matematika",
    sym: "π",
    color: "#818cf8",
    obvezno: true,
    razine: [
      {
        id: "A",
        label: "Viša razina (A)",
        poglavlja: [
          { naziv: "Skupovi i logika", teme: ["Skupovi i operacije", "Logički veznici", "Kvantifikatori", "Matematička indukcija"] },
          { naziv: "Realni brojevi", teme: ["Skup realnih brojeva", "Apsolutna vrijednost", "Intervali", "Nejednakosti"] },
          { naziv: "Funkcije", teme: ["Definicija i svojstva", "Kompozicija", "Inverzna funkcija", "Elementarne funkcije"] },
          { naziv: "Trigonometrija", teme: ["Trigonometrijske funkcije", "Adicijske formule", "Jednadžbe", "Poučci"] },
          { naziv: "Derivacije", teme: ["Definicija derivacije", "Pravila deriviranja", "Složene funkcije", "Primjena"] },
          { naziv: "Integrali", teme: ["Neodređeni integral", "Metode integracije", "Određeni integral", "Primjena"] },
          { naziv: "Kompleksni brojevi", teme: ["Algebarski oblik", "Trigonometrijski oblik", "Potenciranje"] },
          { naziv: "Nizovi i redovi", teme: ["Aritmetički i geometrijski niz", "Limesi", "Konvergencija"] },
        ],
      },
      {
        id: "B",
        label: "Osnovna razina (B)",
        poglavlja: [
          { naziv: "Realni brojevi i skupovi", teme: ["Operacije", "Skupovi", "Intervali"] },
          { naziv: "Algebarski izrazi", teme: ["Polinomi", "Rastav na faktore", "Jednadžbe"] },
          { naziv: "Funkcije i grafovi", teme: ["Linearna", "Kvadratna", "Eksponencijalna", "Logaritamska"] },
          { naziv: "Trigonometrija (osnove)", teme: ["Kutovi i mjere", "Funkcije", "Pravokutni trokut"] },
          { naziv: "Geometrija", teme: ["Trokuti", "Četverokuti", "Kružnica", "Tijela"] },
          { naziv: "Statistika", teme: ["Deskriptivna statistika", "Kombinatorika", "Vjerojatnost"] },
        ],
      },
    ],
  },

  {
    id: "eng",
    name: "Engleski jezik",
    sym: "En",
    color: "#c084fc",
    obvezno: true,
    razine: [
      {
        id: "V",
        label: "Viša razina (C1)",
        poglavlja: [
          { naziv: "Grammar — Advanced", teme: ["Complex tenses", "Conditionals (Mixed)", "Passive Voice", "Reported Speech", "Inversion"] },
          { naziv: "Vocabulary", teme: ["Academic vocabulary (AWL)", "Phrasal verbs", "Collocations", "Idioms"] },
          { naziv: "Writing", teme: ["Argumentative essay", "Formal letter", "Report", "Review"] },
          { naziv: "Reading & Listening", teme: ["Inference", "Listening for detail", "Note-taking"] },
        ],
      },
      {
        id: "O",
        label: "Osnovna razina (B2)",
        poglavlja: [
          { naziv: "Grammar — Core", teme: ["Sva vremena", "Modal verbs", "Conditionals", "Relative clauses"] },
          { naziv: "Vocabulary — Topics", teme: ["Environment", "Health", "Technology", "Work"] },
          { naziv: "Writing basics", teme: ["Informal email", "Short essay", "Opinion paragraph"] },
        ],
      },
    ],
  },

  {
    id: "nje",
    name: "Njemački jezik",
    sym: "De",
    color: "#a78bfa",
    obvezno: true,
    razine: [
      {
        id: "V",
        label: "Viša razina (C1)",
        poglavlja: [
          { naziv: "Gramatika — napredna", teme: ["Konjunktiv I i II", "Pasiv", "Infinitivne konstrukcije", "Modalverben"] },
          { naziv: "Vokabular", teme: ["Akademski vokabular", "Feste Wendungen", "Präpositionen"] },
          { naziv: "Pisanje", teme: ["Erörterung", "Formeller Brief", "Zusammenfassung"] },
        ],
      },
      {
        id: "O",
        label: "Osnovna razina (B2)",
        poglavlja: [
          { naziv: "Gramatika — osnove", teme: ["Sva vremena", "Modalni glagoli", "Subordinate clauses"] },
          { naziv: "Teme", teme: ["Okolis", "Zdravlje", "Mediji", "Posao"] },
        ],
      },
    ],
  },

  {
    id: "fra",
    name: "Francuski jezik",
    sym: "Fr",
    color: "#60a5fa",
    obvezno: true,
    razine: [
      {
        id: "V",
        label: "Viša razina (C1)",
        poglavlja: [
          { naziv: "Grammaire avancée", teme: ["Subjonctif", "Conditionnel", "Participe", "Gérondif"] },
          { naziv: "Expression écrite", teme: ["Dissertation", "Lettre formelle", "Résumé"] },
        ],
      },
      {
        id: "O",
        label: "Osnovna razina (B2)",
        poglavlja: [
          { naziv: "Grammaire — base", teme: ["Temps verbaux", "Pronoms", "Négation"] },
          { naziv: "Vocabulaire", teme: ["Environnement", "Travail", "Société"] },
        ],
      },
    ],
  },

  {
    id: "tal",
    name: "Talijanski jezik",
    sym: "It",
    color: "#34d399",
    obvezno: true,
    razine: [
      {
        id: "V",
        label: "Viša razina (C1)",
        poglavlja: [
          { naziv: "Grammatica avanzata", teme: ["Congiuntivo", "Condizionale", "Participio", "Gerundio"] },
          { naziv: "Scrittura", teme: ["Saggio", "Lettera formale", "Riassunto"] },
        ],
      },
      {
        id: "O",
        label: "Osnovna razina (B2)",
        poglavlja: [
          { naziv: "Grammatica — base", teme: ["Tempi verbali", "Pronomi", "Preposizioni"] },
          { naziv: "Vocabolario", teme: ["Ambiente", "Lavoro", "Società"] },
        ],
      },
    ],
  },

  {
    id: "spn",
    name: "Španjolski jezik",
    sym: "Es",
    color: "#fb923c",
    obvezno: true,
    razine: [
      {
        id: "V",
        label: "Viša razina (C1)",
        poglavlja: [
          { naziv: "Gramática avanzada", teme: ["Subjuntivo", "Condicional", "Pasiva", "Estilo indirecto"] },
          { naziv: "Escritura", teme: ["Ensayo argumentativo", "Carta formal", "Resumen"] },
        ],
      },
      {
        id: "O",
        label: "Osnovna razina (B2)",
        poglavlja: [
          { naziv: "Gramática — base", teme: ["Tiempos verbales", "Pronombres", "Preposiciones"] },
          { naziv: "Vocabulario", teme: ["Medio ambiente", "Trabajo", "Sociedad"] },
        ],
      },
    ],
  },

  // ── IZBORNI — PRIRODOSLOVNO-MATEMATIČKI ────────────────
  {
    id: "fiz",
    name: "Fizika",
    sym: "⚡",
    color: "#fbbf24",
    razine: [
      {
        id: "V",
        label: "Viša razina",
        poglavlja: [
          { naziv: "Mehanika", teme: ["Kinematika", "Newtonovi zakoni", "Rad i energija", "Zakoni očuvanja"] },
          { naziv: "Termodinamika", teme: ["Toplina i temperatura", "Idealni plin", "Zakoni termodinamike"] },
          { naziv: "Valovi i optika", teme: ["Mehanički valovi", "Zvuk", "Elektromagnetski valovi", "Optika"] },
          { naziv: "Elektromagnetizam", teme: ["Elektrostatika", "Struja i otpor", "Magnetsko polje"] },
          { naziv: "Moderna fizika", teme: ["Fotoelektrični efekt", "Atomski modeli", "Nuklearna fizika"] },
        ],
      },
      {
        id: "O",
        label: "Osnovna razina",
        poglavlja: [
          { naziv: "Mehanika (osnove)", teme: ["Gibanje", "Sile i Newton", "Energija"] },
          { naziv: "Elektricitet", teme: ["Električna struja", "Električni krug", "Ohmov zakon"] },
          { naziv: "Valovi (osnove)", teme: ["Valni fenomeni", "Lom i odbijanje"] },
        ],
      },
    ],
  },

  {
    id: "kem",
    name: "Kemija",
    sym: "⚗",
    color: "#34d399",
    razine: [
      {
        id: "V",
        label: "Viša razina",
        poglavlja: [
          { naziv: "Građa tvari", teme: ["Atomska struktura", "Periodni sustav", "Kemijska veza", "VSEPR"] },
          { naziv: "Stehiometrija", teme: ["Mol i molarna masa", "Stehiometrija reakcija", "Otopine", "Oksido-redukcija"] },
          { naziv: "Anorganska kemija", teme: ["Kiseline i baze", "Soli", "Metali i nemetali"] },
          { naziv: "Organska kemija", teme: ["Ugljikovodici", "Funkcionalne skupine", "Biomolekule"] },
          { naziv: "Fizikalna kemija", teme: ["Kemijska ravnoteža", "Kinetika", "Elektrokemija"] },
        ],
      },
      {
        id: "O",
        label: "Osnovna razina",
        poglavlja: [
          { naziv: "Osnove kemije", teme: ["Atomi i molekule", "Kemijske formule", "Jednadžbe"] },
          { naziv: "Anorganska (osnove)", teme: ["Kiseline, baze, soli", "Oksidi"] },
          { naziv: "Organska (uvod)", teme: ["Ugljikovodici", "Alkoholi i kiseline"] },
        ],
      },
    ],
  },

  {
    id: "bio",
    name: "Biologija",
    sym: "⊕",
    color: "#2dd4bf",
    razine: [
      {
        id: "V",
        label: "Viša razina",
        poglavlja: [
          { naziv: "Stanična biologija", teme: ["Prokarioti i eukarioti", "Stanični organeli", "Stanični ciklus"] },
          { naziv: "Genetika", teme: ["Mendelovi zakoni", "DNK replikacija", "Transkripcija", "Mutacije"] },
          { naziv: "Evolucija", teme: ["Darwinova teorija", "Mehanizmi evolucije", "Specijacija"] },
          { naziv: "Ekologija", teme: ["Biotički i abiotički čimbenici", "Ekosustavi", "Biogeokemijski ciklusi"] },
          { naziv: "Anatomija čovjeka", teme: ["Krvožilni sustav", "Dišni sustav", "Živčani sustav", "Imunološki sustav"] },
        ],
      },
    ],
  },

  {
    id: "inf",
    name: "Informatika",
    sym: "⌨",
    color: "#818cf8",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Algoritmi i programiranje", teme: ["Pseudokod", "Algoritamsko razmišljanje", "Složenost"] },
          { naziv: "Python / programski jezik", teme: ["Varijable i tipovi", "Uvjeti i petlje", "Funkcije", "Liste i rječnici"] },
          { naziv: "Baze podataka", teme: ["Relacijski model", "SQL osnove", "Normalizacija"] },
          { naziv: "Računalne mreže", teme: ["Protokoli", "TCP/IP", "Sigurnost na internetu"] },
          { naziv: "Digitalni sustavi", teme: ["Brojevni sustavi", "Logička vrata", "Kodiranje podataka"] },
        ],
      },
    ],
  },

  // ── IZBORNI — DRUŠTVENO-HUMANISTIČKI ───────────────────
  {
    id: "geo",
    name: "Geografija",
    sym: "◉",
    color: "#38bdf8",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Fizička geografija", teme: ["Kartografija", "Litosfera", "Atmosfera i klima", "Hidrosfera"] },
          { naziv: "Demografija i naselja", teme: ["Demografski procesi", "Migracije", "Urbanizacija"] },
          { naziv: "Gospodarska geografija", teme: ["Poljoprivreda", "Industrija", "Promet i turizam"] },
          { naziv: "Hrvatska i regije", teme: ["RH — pregled", "Europa", "Kontinenti"] },
        ],
      },
    ],
  },

  {
    id: "pov",
    name: "Povijest",
    sym: "⚔",
    color: "#fb923c",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Novi vijek (15.–18. st.)", teme: ["Humanizam i renesansa", "Velika geografska otkrića", "Reformacija", "Apsolutizam"] },
          { naziv: "Dugotrajno 19. st.", teme: ["Francuska revolucija", "Bečki kongres", "Nacionalizam", "Industrijalizacija"] },
          { naziv: "Kratko 20. st.", teme: ["I. svjetski rat", "Međuratje", "II. svjetski rat", "Hladni rat"] },
          { naziv: "Hrvatska povijest", teme: ["Hrvatska u Habsburškoj monarhiji", "Narodni preporod", "Domovinski rat"] },
        ],
      },
    ],
  },

  {
    id: "psi",
    name: "Psihologija",
    sym: "🧠",
    color: "#c084fc",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Uvod u psihologiju", teme: ["Predmet i metode", "Povijesni pregled", "Grane psihologije"] },
          { naziv: "Biološke osnove ponašanja", teme: ["Živčani sustav", "Hormoni", "Mozak i ponašanje"] },
          { naziv: "Kognitivni procesi", teme: ["Percepcija", "Pamćenje", "Mišljenje i jezik", "Inteligencija"] },
          { naziv: "Motivacija i emocije", teme: ["Teorije motivacije", "Emocije", "Stres i suočavanje"] },
          { naziv: "Socijalna psihologija", teme: ["Stavovi", "Konformizam", "Predrasude", "Grupna dinamika"] },
        ],
      },
    ],
  },

  {
    id: "soc",
    name: "Sociologija",
    sym: "⚖",
    color: "#e9b446",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Uvod u sociologiju", teme: ["Predmet i metode", "Teorijski pristupi", "Socijalizacija"] },
          { naziv: "Društvena struktura", teme: ["Socijalni slojevi", "Mobilnost", "Nejednakost"] },
          { naziv: "Institucije", teme: ["Obitelj", "Obrazovanje", "Religija", "Politika"] },
          { naziv: "Socijalne promjene", teme: ["Globalizacija", "Modernizacija", "Urbano i ruralno"] },
        ],
      },
    ],
  },

  {
    id: "fil",
    name: "Filozofija",
    sym: "φ",
    color: "#94a3b8",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Uvod u filozofiju", teme: ["Što je filozofija", "Antička filozofija", "Sokrat i Platon", "Aristotel"] },
          { naziv: "Spoznajna teorija", teme: ["Racionalizam vs empirizam", "Kant", "Suvremena epistemologija"] },
          { naziv: "Etika", teme: ["Metaetika", "Normativna etika", "Primijenjena etika"] },
          { naziv: "Filozofija uma", teme: ["Tijelo i um", "Slobodna volja", "Osobni identitet"] },
        ],
      },
    ],
  },

  {
    id: "log",
    name: "Logika",
    sym: "∴",
    color: "#7dd3fc",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Klasična logika", teme: ["Izjave i veznici", "Istinitosne tablice", "Tautologije"] },
          { naziv: "Argumentacija", teme: ["Deduktivni argumenti", "Indukcija", "Pogreške u zaključivanju"] },
          { naziv: "Simbolička logika", teme: ["Predikatna logika", "Kvantifikatori", "Formalizacija"] },
        ],
      },
    ],
  },

  {
    id: "pig",
    name: "Politika i gospodarstvo",
    sym: "🏛",
    color: "#fda4af",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Politički sustavi", teme: ["Demokracija", "Parlamentarizam", "Predsjednički sustav", "Autoritarizam"] },
          { naziv: "Institucije RH i EU", teme: ["Sabor i Vlada", "EU institucije", "Lokalna samouprava"] },
          { naziv: "Osnove ekonomije", teme: ["Tržišni mehanizmi", "Inflacija", "BDP", "Fiskalna politika"] },
          { naziv: "Međunarodni odnosi", teme: ["UN", "NATO", "Globalizacija", "Geopolitika"] },
        ],
      },
    ],
  },

  {
    id: "vje",
    name: "Vjeronauk",
    sym: "✝",
    color: "#d4b483",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Biblija i teologija", teme: ["Stari zavjet", "Novi zavjet", "Kristologija", "Ekleziologija"] },
          { naziv: "Crkvena povijest", teme: ["Rani kršćani", "Crkveni raskoli", "Reformacija", "Crkva danas"] },
          { naziv: "Etika i moral", teme: ["Temeljne vrijednosti", "Dostojanstvo osobe", "Bioetika", "Socijalni nauk Crkve"] },
        ],
      },
    ],
  },

  {
    id: "eti",
    name: "Etika",
    sym: "◈",
    color: "#86efac",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Temelji etike", teme: ["Što je etika", "Moralne norme", "Savjest"] },
          { naziv: "Etički sustavi", teme: ["Etika vrline", "Deontologija", "Utilitarizam", "Diskursna etika"] },
          { naziv: "Primijenjena etika", teme: ["Bioetika", "Ekološka etika", "Medijska etika", "Poslovna etika"] },
        ],
      },
    ],
  },

  // ── IZBORNI — UMJETNIČKI ────────────────────────────────
  {
    id: "gla",
    name: "Glazbena umjetnost",
    sym: "♪",
    color: "#f9a8d4",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Glazbena teorija", teme: ["Note i ritam", "Ljestvice i tonalitet", "Harmonija", "Kontrapunkt"] },
          { naziv: "Glazbena povijest", teme: ["Barok", "Klasicizam", "Romantizam", "20. stoljeće"] },
          { naziv: "Oblici i žanrovi", teme: ["Sonata", "Simfonija", "Opera", "Jazz i pop"] },
        ],
      },
    ],
  },

  {
    id: "lik",
    name: "Likovna umjetnost",
    sym: "🎨",
    color: "#fdba74",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Likovna teorija", teme: ["Likovni elementi", "Kompozicija", "Boja i kontrast"] },
          { naziv: "Povijest umjetnosti", teme: ["Antika i srednji vijek", "Renesansa i barok", "Modernizam", "Suvremena umjetnost"] },
          { naziv: "Hrvatska likovna baština", teme: ["Romanika i gotika", "Renesansa na Jadranu", "Suvremeni hrvatski autori"] },
        ],
      },
    ],
  },

  // ── IZBORNI — KLASIČNI JEZICI ───────────────────────────
  {
    id: "lat",
    name: "Latinski jezik",
    sym: "Ⅼ",
    color: "#a8a29e",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Gramatika", teme: ["Deklinacije", "Konjugacije", "Sintaksa", "Particip i infinitiv"] },
          { naziv: "Tekstovi i kultura", teme: ["Ciceron", "Vergilije", "Cezar", "Rimska kultura i povijest"] },
        ],
      },
    ],
  },

  {
    id: "grk",
    name: "Grčki jezik",
    sym: "Ω",
    color: "#9ca3af",
    razine: [
      {
        id: "V",
        label: "Jedinstvenoj razini",
        poglavlja: [
          { naziv: "Gramatika", teme: ["Grčka pisma i fonologija", "Deklinacije", "Konjugacije", "Particip"] },
          { naziv: "Tekstovi i kultura", teme: ["Homer", "Platon", "Herodot", "Grčka filozofija i kultura"] },
        ],
      },
    ],
  },
]
export const SUBJECTS_OBVEZNI = SKRIPTE.filter((s) => s.obvezno)
export const SUBJECTS_PRIRODO = SKRIPTE.filter((s) =>
  ["fiz", "kem", "bio", "inf"].includes(s.id)
)
export const SUBJECTS_DRUSTVO = SKRIPTE.filter((s) =>
  ["geo", "pov", "psi", "soc", "fil", "log", "pig", "vje", "eti"].includes(s.id)
)
export const SUBJECTS_UMJETNOST = SKRIPTE.filter((s) =>
  ["gla", "lik"].includes(s.id)
)
export const SUBJECTS_KLASICNI = SKRIPTE.filter((s) =>
  ["lat", "grk"].includes(s.id)
)

export default SKRIPTE