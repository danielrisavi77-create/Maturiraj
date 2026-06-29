/* ─────────────────────────────────────────────
   MOCK DATA LAYER
   Clean typed demo data — ready for Supabase adapter
───────────────────────────────────────────── */

export const PARENT = {
  id: 'p1',
  name: 'Marko Horvat',
  firstName: 'Marko',
  email: 'marko.horvat@gmail.com',
  plan: 'PRO',
}

export const DJECA = [
  {
    id: 'luka',
    name: 'Luka Horvat',
    firstName: 'Luka',
    razred: '4.b',
    skola: 'SŠ Trnje, Zagreb',
    dob: 18,
    avatar: 'LH',
    color: '#4b7bff',
    colorBg: 'rgba(75,123,255,.14)',
    ukupno: 74,
    tjedni: 6,
    zadaci: 222,
    satiUkupno: 47,
    cilj: 'FER',
    aktivnost: [1.5, 2.5, 0, 3.0, 1.0, 2.0, 0],
    predmeti: [
      { name: 'Matematika A', prog: 72, trend: +4,  color: '#818cf8', zadaci: 48, sati: 12, rizik: null },
      { name: 'Fizika (V)',   prog: 61, trend: -2,  color: '#fbbf24', zadaci: 34, sati: 8,  rizik: 'pazi' },
      { name: 'Kemija (V)',   prog: 55, trend: -5,  color: '#34d399', zadaci: 27, sati: 7,  rizik: 'kritično' },
      { name: 'Hrvatski (V)', prog: 80, trend: +3,  color: '#f87171', zadaci: 52, sati: 11, rizik: null },
      { name: 'Engleski (V)', prog: 88, trend: +1,  color: '#c084fc', zadaci: 61, sati: 9,  rizik: null },
    ],
    obavijesti: [
      { id: 'a1', tip: 'warn',  read: false, ico: '⚠️', naslov: 'Kemija — 5 dana bez aktivnosti',     opis: 'Ispit iz kemije je za 3 tjedna. Bez redovite vježbe, pad je neizbježan.',                  datum: 'danas',     akcija: 'Pogledaj plan učenja' },
      { id: 'a2', tip: 'warn',  read: false, ico: '🔔', naslov: 'Matematika — integrali (60%)',        opis: 'Najslabija tema ovaj tjedan. 15 minuta vježbe dnevno može dignuti prosjek za 8–10%.',     datum: '3 dana',    akcija: null },
      { id: 'a3', tip: 'info',  read: false, ico: '📅', naslov: 'Rok za prijavu ispita — 15. travnja', opis: 'Luka mora prijaviti ispite za ljetni rok. Provjeri s njim koje prijavljuje.',              datum: 'za 9 dana', akcija: 'Otvori termini' },
      { id: 'a4', tip: 'good',  read: true,  ico: '✅', naslov: 'Engleski — 3 tjedna iznad 85%',       opis: 'Konzistentan napredak. Ovo je pravi momentum — pohvalite ga bez vezivanja uz kemiju.',     datum: 'jučer',     akcija: null },
      { id: 'a5', tip: 'info',  read: true,  ico: '🎓', naslov: 'FER — realan cilj na temelju bodova', opis: 'Trenutnih 724 boda daje mu realne šanse. Kemija je ključna varijabla.',                   datum: '5 dana',    akcija: 'Otvori kalkulator' },
    ],
    preporuke: [
      { id: 'r1', ico: '💬', naslov: 'Razgovor bez ispitivanja',    opis: 'Pitajte: \'Što ti je danas bilo zanimljivo u učenju?\' — ne \'Jesi li učio kemiju?\'. Razlika je ogromna.',     tag: 'komunikacija', tagC: 'var(--blue)' },
      { id: 'r2', ico: '⏱️', naslov: '20 min kemije svaki dan',     opis: 'Kratke svakodnevne sesije puno su učinkovitije od 3 sata vikendima. Pomozite mu postaviti tu rutinu.',       tag: 'rutina',       tagC: 'var(--gold)' },
      { id: 'r3', ico: '🎯', naslov: 'Pohvalite engleski posebno',  opis: 'Pohvala bez uspoređivanja s kemijom gradi povjerenje i motivaciju. \'Engleski ti stvarno ide!\' — to je sve.', tag: 'motivacija',   tagC: 'var(--green)' },
      { id: 'r4', ico: '📅', naslov: 'Pregledajte prijave zajedno', opis: 'Rok za prijavu ispita je za 9 dana. Pregledajte to zajedno — kao tim koji rješava zadatak, ne kao pritisak.', tag: 'organizacija', tagC: 'var(--teal)' },
    ],
    upcoming: [
      { datum: '15. travnja', opis: 'Rok za prijavu ispita — ljetni rok', tip: 'rok' },
      { datum: '2. lipnja',   opis: 'Kemija (V) — pisani ispit',          tip: 'ispit' },
      { datum: '5. lipnja',   opis: 'Matematika A — pisani ispit',         tip: 'ispit' },
      { datum: '9. lipnja',   opis: 'Hrvatski (V) — esej',                 tip: 'ispit' },
      { datum: '12. lipnja',  opis: 'Engleski (V) — pisani ispit',         tip: 'ispit' },
    ],
  },
  {
    id: 'ana',
    name: 'Ana Horvat',
    firstName: 'Ana',
    razred: '3.a',
    skola: 'SŠ Trnje, Zagreb',
    dob: 17,
    avatar: 'AH',
    color: '#7c5cfc',
    colorBg: 'rgba(124,92,252,.14)',
    ukupno: 82,
    tjedni: 8,
    zadaci: 263,
    satiUkupno: 58,
    cilj: 'Pravo',
    aktivnost: [2.0, 1.5, 2.5, 0, 3.0, 2.0, 1.0],
    predmeti: [
      { name: 'Hrvatski (V)',   prog: 86, trend: +5, color: '#f87171', zadaci: 60, sati: 14, rizik: null },
      { name: 'Engleski (V)',   prog: 91, trend: +2, color: '#c084fc', zadaci: 70, sati: 12, rizik: null },
      { name: 'Geografija (V)', prog: 73, trend: -1, color: '#34d399', zadaci: 40, sati: 9,  rizik: 'pazi' },
      { name: 'Povijest (V)',   prog: 79, trend: +3, color: '#fbbf24', zadaci: 55, sati: 11, rizik: null },
      { name: 'Matematika B',   prog: 68, trend: -3, color: '#818cf8', zadaci: 38, sati: 8,  rizik: 'pazi' },
    ],
    obavijesti: [
      { id: 'b1', tip: 'good', read: false, ico: '✅', naslov: 'Engleski — 91% točnost ovaj tjedan',  opis: 'Ana ima izuzetan tjedan. Konzistentno napreduje već 8 tjedana.',           datum: 'jučer',      akcija: null },
      { id: 'b2', tip: 'warn', read: false, ico: '⚠️', naslov: 'Matematika B — 3 dana bez vježbe',    opis: 'Kratka pauza može postati navika. Podsjetite Anu da nastavi s planom.',    datum: 'danas',      akcija: null },
      { id: 'b3', tip: 'info', read: true,  ico: '📅', naslov: 'Prijemni ispiti — termini dostupni',  opis: 'Preporuka: provjeri prijemne ispite za pravo na pravnim fakultetima.',      datum: 'za 14 dana', akcija: 'Otvori termini' },
    ],
    preporuke: [
      { id: 'r5', ico: '📖', naslov: 'Dnevnik učenja — nastavi',    opis: 'Ana vodi dnevnik učenja i to joj jako pomaže. Podržite je da nastavi — ta navika je zlatna.',             tag: 'navika',  tagC: 'var(--green)' },
      { id: 'r6', ico: '🗺️', naslov: 'Geografija — vizualne karte', opis: 'Za geografiju vizualno učenje funkcionira bolje od čitanja. Predložite joj skiciranje karata.',           tag: 'metoda',  tagC: 'var(--teal)' },
      { id: 'r7', ico: '➕', naslov: 'Matematika B — svaki dan',    opis: '3 dana bez vježbe. Samo 15 minuta dnevno — bez stresa, samo kontinuitet.',                               tag: 'rutina',  tagC: 'var(--gold)' },
    ],
    upcoming: [
      { datum: 'Travanj–lipanj', opis: 'Prijemni ispiti — provjeri termine',  tip: 'rok' },
      { datum: '2026./2027.',    opis: 'Priprema za državnu maturu',           tip: 'info' },
    ],
  },
]
