/**
 * Checklist data — odvojeno od komponente za lakše uređivanje.
 *
 * subjects: null    = prikazuje se svima
 *           [...]   = prikazuje se učenicima koji polažu BILO KOJI od navedenih predmeta (OR logika)
 *
 * pro: true         = PRO teaser stavka (zamagljena, zaključana za free korisnike)
 */

export const ALL_SUBJECTS = [
  { id:'hrv', label:'Hrvatski jezik', sym:'✍',  color:'#f87171', required:true,  group:'Obvezni' },
  { id:'mat', label:'Matematika',     sym:'π',   color:'#818cf8', required:false, group:'Obvezni' },
  { id:'kem', label:'Kemija',         sym:'⚗',  color:'#34d399', required:false, group:'Prirodoslovno' },
  { id:'fiz', label:'Fizika',         sym:'⚡',  color:'#fbbf24', required:false, group:'Prirodoslovno' },
  { id:'bio', label:'Biologija',      sym:'⊕',  color:'#2dd4bf', required:false, group:'Prirodoslovno' },
  { id:'inf', label:'Informatika',    sym:'⌨',  color:'#a5b4fc', required:false, group:'Prirodoslovno' },
  { id:'eng', label:'Engleski',       sym:'En', color:'#c084fc', required:false, group:'Strani jezici' },
  { id:'nje', label:'Njemački',       sym:'De', color:'#a78bfa', required:false, group:'Strani jezici' },
  { id:'fra', label:'Francuski',      sym:'Fr', color:'#60a5fa', required:false, group:'Strani jezici' },
  { id:'geo', label:'Geografija',     sym:'◉',  color:'#38bdf8', required:false, group:'Društveno' },
  { id:'pov', label:'Povijest',       sym:'📜', color:'#fb923c', required:false, group:'Društveno' },
  { id:'soc', label:'Sociologija',    sym:'⚖',  color:'#e9b446', required:false, group:'Društveno' },
  { id:'psi', label:'Psihologija',    sym:'🧠', color:'#c084fc', required:false, group:'Društveno' },
]

export const SUBJECT_GROUPS = ['Obvezni', 'Prirodoslovno', 'Strani jezici', 'Društveno']

// Pisani ispiti tipično kreću kraj svibnja/početak lipnja — datum je okvirni; provjeriti na ncvvo.hr
export const MATURA_DATE = new Date('2026-05-26')

export const CHECKLIST_DATA = [
  {
    id:'admin', label:'Administrativne obveze', color:'#f87171', sym:'📋',
    stavke:[
      { id:'c01',  tekst:'Prijaviti se za državnu maturu na e-Dnevnik',                                  vazno:true,  deadline:'2026-02-15', subjects:null, action:{label:'Otvori e-Dnevnik →', href:'https://www.e-dnevnik.hr'} },
      { id:'c02',  tekst:'Provjeriti potvrdu o prijavi ispita od razrednika',                             vazno:false, deadline:null,         subjects:null },
      { id:'c03',  tekst:'Prijaviti studijske programe na Postani student',                               vazno:true,  deadline:'2026-07-01', subjects:null, action:{label:'postani-student.hr →', href:'https://www.postani-student.hr'} },
      { id:'c04',  tekst:'Pripremiti osobne dokumente za ispit (osobna iskaznica)',                       vazno:false, deadline:null,         subjects:null },
      { id:'c05',  tekst:'Provjeriti datum, sat i dvoranu svakog ispita na e-Dnevniku',                   vazno:true,  deadline:null,         subjects:null, action:{label:'Otvori e-Dnevnik →', href:'https://www.e-dnevnik.hr'} },
      { id:'c06',  tekst:'Prijaviti se za prijemne ispite (MEF, FER, KIF...) — svaki ima vlastiti rok',  vazno:true,  deadline:null,         subjects:null },
    ]
  },
  {
    id:'ispiti', label:'Priprema ispita', color:'#818cf8', sym:'📚',
    stavke:[
      { id:'c10',  tekst:'Napraviti raspored učenja za svaki predmet (min. 4 tjedna unaprijed)',                          vazno:true,  deadline:null, subjects:null, action:{label:'Otvori Plan učenja →', href:'/plan-ucenja'} },
      { id:'c11',  tekst:'Proći skripte i materijale za svaki predmet koji polažeš',                                      vazno:true,  deadline:null, subjects:null, action:{label:'Otvori Skripte →',     href:'/skripte'} },
      { id:'c12',  tekst:'Riješiti stare ispitne zadatke iz arhive — min. 3 godine po predmetu',                          vazno:true,  deadline:null, subjects:null, action:{label:'Otvori Discere →',     href:'/discere'} },
      { id:'c16',  tekst:'Simulirati pravi ispit u vremenskim uvjetima — bez pomoći, bez prekida',                        vazno:true,  deadline:null, subjects:null, action:{label:'Otvori simulator →',   href:'/discere'} },
      { id:'c17',  tekst:'Pronaći svoje slabe točke i posvetiti im više vremena nego gradivu koje već znaš',              vazno:false, deadline:null, subjects:null },
      { id:'c15',  tekst:'Provjeriti imate li pravo na prilagodbu ispita (produženo vrijeme, čitač...) i podnijeti zahtjev', vazno:false, deadline:'2026-03-01', subjects:null },
      { id:'cP1',  tekst:'AI analizira tvoje greške iz Discere i kreira prilagođeni tjedni plan učenja',                  vazno:false, deadline:null, subjects:null, pro:true, action:{label:'Otključaj PRO →', href:'/cijene'} },
    ]
  },
  {
    id:'tjedan', label:'Tjedan prije mature', color:'#e9b446', sym:'⚡',
    stavke:[
      // ── 4 tjedna do mature ──
      { id:'t4a', tekst:'Tjedan 4: Napravi detaljni raspored do mature — koji predmet koji dan, koliko sati', vazno:true,  deadline:null, subjects:null,               action:{label:'Otvori Plan učenja →', href:'/plan-ucenja'} },
      { id:'t4b', tekst:'Tjedan 4: Završi pregled svih skripti — sada ponavljaj, ne uči novo',             vazno:false, deadline:null, subjects:null },
      { id:'t4c', tekst:'Tjedan 4: Riješi bar jednu probnu godinu po predmetu bez gledanja rješenja',      vazno:true,  deadline:null, subjects:null },
      // ── 2-3 tjedna do mature ──
      { id:'t3a', tekst:'Tjedan 3: Koncentriraj se isključivo na pogreške iz probnih ispita — to su tvoje slabe točke', vazno:true,  deadline:null, subjects:null },
      { id:'t3b', tekst:'Tjedan 3: Hrvatski — napiši 2 eseja bez pomoći i ocijeni ih prema NCVVO kriterijima', vazno:true, deadline:null, subjects:['hrv'] },
      { id:'t3c', tekst:'Tjedan 3: Matematika — ponovi sve formule napamet, riješi zadatke iz svakog poglavlja', vazno:true, deadline:null, subjects:['mat'] },
      { id:'t3d', tekst:'Tjedan 3: Kemija/Fizika — provjeri sve jednadžbe, konstante i SI jedinice',          vazno:false, deadline:null, subjects:['kem','fiz'] },
      // ── 1 tjedan do mature ──
      { id:'c20', tekst:'Tjedan 1: Ponoviti ključne formule i definicije — bez učenja novih tema',            vazno:true,  deadline:null, subjects:null },
      { id:'c24', tekst:'Tjedan 1: Prođi samo greške i slabe točke iz prakse — ne uči ništa novo',            vazno:false, deadline:null, subjects:null },
      { id:'c23', tekst:'Tjedan 1: Spavati dovoljno svaku noć — san konsolidira naučeno bolje od ponavljanja do ponoći', vazno:false, deadline:null, subjects:null },
      // ── Večer prije ──
      { id:'c21', tekst:'Večer prije: Pripremiti opremu — 2 kemijske, gumica, ravnalo, kalkulator, osobna iskaznica', vazno:true, deadline:null, subjects:null },
      { id:'c22', tekst:'Večer prije: Potvrditi točno mjesto, dvoranu i sat svakog ispita',                    vazno:true,  deadline:null, subjects:null },
    ]
  },
  {
    id:'dan', label:'Dan ispita', color:'#3ecf6e', sym:'🎯',
    stavke:[
      { id:'c30', tekst:'Doći 15 minuta ranije — smiri se i nađi mjesto, ne uči ispred dvorane',       vazno:true,  deadline:null, subjects:null },
      { id:'c31', tekst:'Prvim prolazom pregledaj cijeli ispit — tek onda počni pisati',                vazno:true,  deadline:null, subjects:null },
      { id:'c32', tekst:'Počni s lakim zadatcima, teže ostavi za kraj',                                 vazno:false, deadline:null, subjects:null },
      { id:'c36', tekst:'Zadnjih 10 minuta provjeri potpis, praznine i sve odgovore',                   vazno:true,  deadline:null, subjects:null },
    ]
  },
  {
    id:'nakons', label:'Nakon mature', color:'#2dcfbe', sym:'🏆',
    stavke:[
      { id:'c40', tekst:'Provjeriti privremene rezultate na NCVVO servisu (~8. srpnja 2026.)',     vazno:false, deadline:'2026-07-08', subjects:null, action:{label:'ncvvo.hr →',            href:'https://www.ncvvo.hr'} },
      { id:'c41', tekst:'Podnijeti prigovor na ocjenu u roku 2 dana od objave (ako imaš osnovu)', vazno:true,  deadline:'2026-07-10', subjects:null },
      { id:'c42', tekst:'Upisati preferencije studija na Postani student prema rezultatima',       vazno:true,  deadline:'2026-07-15', subjects:null, action:{label:'postani-student.hr →', href:'https://www.postani-student.hr'} },
      { id:'c43', tekst:'Pratiti privremene i konačne rang-liste za upis',                         vazno:false, deadline:null,         subjects:null },
      { id:'c44', tekst:'Prijaviti se na upis u roku koji odredi fakultet',                        vazno:true,  deadline:null,         subjects:null },
      { id:'c45', tekst:'Proslaviti — zaslužio/la si! 🎉',                                         vazno:false, deadline:null,         subjects:null },
    ]
  },
]
