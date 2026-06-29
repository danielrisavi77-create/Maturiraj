export const FAKULTETI = [
  // ── KLASIČNI PRIJEMNI (vlastiti ispit) ─────────────────
  {
    id:"med", short:"MEF", name:"Medicinski fakultet", sym:"🩺", color:"#f87171",
    tip:"Klasični prijemni",
    predmeti:["Biologija","Kemija","Fizika"],
    opis:"Najtrajniji prijemni u RH — 60 pitanja (20 biologija, 20 kemija, 20 fizika). Boduju se samo točni odgovori, negativni bodovi ne postoje. Ispit traje 90 minuta.",
    gradivo:["Stanična biologija i genetika","Anatomija i fiziologija","Evolucija i ekologija","Anorganska kemija","Organska kemija","Stehiometrija","Mehanika i termodinamika"],
  },
  {
    id:"stom", short:"SFZG", name:"Stomatološki fakultet", sym:"🦷", color:"#2dd4bf",
    tip:"Test psihomotorike + znanje",
    predmeti:["Kemija","Biologija","Psihomotorika"],
    opis:"Uz test znanja (kemija i biologija), SFZG provodi provjeru psihomotornih sposobnosti — preciznost pokreta šake ključna za stomatologiju.",
    gradivo:["Organska kemija","Biokemija","Stanična biologija","Fiziologija čovjeka"],
  },
  {
    id:"fer", short:"FER", name:"Fak. elektrotehnike i računarstva", sym:"⚡", color:"#818cf8",
    tip:"Bodovanje mature (nema posebnog prijemnog)",
    predmeti:["Matematika A","Fizika"],
    opis:"FER nema klasičan prijemni — boduje Matematiku (viša razina, A) i Fiziku s mature. Obje treba pisati na višoj razini. Isplati se maksimalno se pripremiti za maturalne ispite.",
    gradivo:["Funkcije i derivacije","Integrali","Kompleksni brojevi","Mehanika i elektromagnetizam","Valovi i optika","Termodinamika"],
  },
  {
    id:"arh", short:"AFZ", name:"Arhitektonski fakultet", sym:"🏛", color:"#fb923c",
    tip:"Provjera prostornog mišljenja",
    predmeti:["Prostorno mišljenje","Matematika"],
    opis:"Arhitektonski provodi vlastitu provjeru — kombinacija crtačkog zadatka i testa prostorne percepcije. Matematika s mature (viša razina) boduje se zasebno.",
    gradivo:["Prostorna geometrija","Analitička geometrija","Zlatni rez i proporcije","Perspektiva i crtanje","Arhitektonski stilovi"],
  },
  {
    id:"kif", short:"KIF", name:"Kineziološki fakultet", sym:"🏃", color:"#3ecf6e",
    tip:"Motorički test + znanje",
    predmeti:["Motoričke sposobnosti","Tjelesna kultura"],
    opis:"KIF ima dvostupanjsku provjeru: motorički test (brzina, snaga, koordinacija, fleksibilnost) i test znanja iz kineziologije. Bez prolaska motoričkog testa nema upisa.",
    gradivo:["Osnove kineziologije","Sportska medicina","Biomehanika","Fiziologija sporta","Metodika sportskog treninga"],
  },

  // ── BODOVANJE MATURE (bez posebnog prijemnog) ───────────
  {
    id:"pravo", short:"Pravni", name:"Pravni fakultet", sym:"⚖", color:"#e9b446",
    tip:"Bodovanje mature",
    predmeti:["Hrvatski","Matematika ili strani jezik","Izborni predmet"],
    opis:"Pravni nema prijemni ispit — boduju se maturalni rezultati + srednja škola. Matematika (B) ili strani jezik biraju se kao izborni. Konkurencija je visoka — prosječni prag oko 700+ bodova.",
    gradivo:["Logičko zaključivanje","Hrvatska povijest i politika","Institucije RH i EU","Aktualnost i opća kultura"],
  },
  {
    id:"ekon", short:"EFZG", name:"Ekonomski fakultet", sym:"📈", color:"#c084fc",
    tip:"Bodovanje mature",
    predmeti:["Matematika","Hrvatski","Strani jezik"],
    opis:"EFZG boduje maturalne ispite bez posebnog prijemnog. Matematika (A ili B) + strani jezik + hrvatski. Matematika na višoj razini donosi 60% više bodova.",
    gradivo:["Linearne i kvadratne funkcije","Financijska matematika","Statistika i vjerojatnost","Kombinatorika"],
  },
  {
    id:"pmf", short:"PMF-Mat", name:"PMF — Matematika", sym:"∑", color:"#a78bfa",
    tip:"Bodovanje mature + razgovor",
    predmeti:["Matematika A","Fizika (preporučeno)"],
    opis:"PMF-Matematika boduje isključivo Matematiku više razine (A) — to je i jedini uvjet. Za upis je dovoljan prolaz, ali za proračunsko mjesto potrebna je visoka ocjena.",
    gradivo:["Skupovi i logika","Funkcije i limesi","Derivacije","Integrali","Kompleksni brojevi","Linearna algebra (uvod)"],
  },
  {
    id:"pmf-fi", short:"PMF-Fiz", name:"PMF — Fizika", sym:"⚛", color:"#fbbf24",
    tip:"Bodovanje mature",
    predmeti:["Fizika","Matematika A"],
    opis:"Fizika na PMF-u boduje ispit Fizike s mature + Matematiku (A razina). Nema posebnog prijemnog — manji broj upisnih mjesta znači da prolazni bodovni prag bude nizak.",
    gradivo:["Mehanika","Elektromagnetizam","Termodinamika","Valovi i optika","Moderna fizika"],
  },
  {
    id:"fer-comp", short:"FESB", name:"FESB Split — Elektrotehnički", sym:"💡", color:"#60a5fa",
    tip:"Bodovanje mature",
    predmeti:["Matematika A","Fizika"],
    opis:"FESB Split — alternativa FER-u s nešto nižim pragovima. Ista kombinacija predmeta (Mat A + Fizika), ali manji upisi daju realniju šansu za proračunsko mjesto.",
    gradivo:["Matematika — sve teme više razine","Fizika — sve teme","Programiranje (osnove za pripremu)"],
  },
  {
    id:"grfo", short:"GF", name:"Građevinski fakultet", sym:"🏗", color:"#94a3b8",
    tip:"Bodovanje mature",
    predmeti:["Matematika A","Fizika (preporučeno)"],
    opis:"Matematika više razine je ključna — boduje se s 400 bodova. Fizika se boduje kao izborni predmet. Konkurencija je niža od FER-a, ali matematička osnova mora biti čvrsta.",
    gradivo:["Analitička geometrija","Funkcije i derivacije","Integrali","Statika i mehanika (uvod)"],
  },
  {
    id:"fmf", short:"MedRi", name:"Medicinski fakultet Rijeka", sym:"🏥", color:"#fda4af",
    tip:"Klasični prijemni",
    predmeti:["Biologija","Kemija"],
    opis:"MEF Rijeka provodi vlastiti prijemni ispit sličnog formata kao Zagreb — biologija i kemija, 40 pitanja. Manji grad, nešto drugačiji atmosfera ispita, ali iste teme.",
    gradivo:["Stanična biologija","Genetika","Imunološki sustav","Anorganska i organska kemija","Biokemija"],
  },
];