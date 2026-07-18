// kalkulatorData.js — AZVO 2025 KOMPLETNI podaci
// Izvor: srednja.hr/app/uploads/2025/09/bodovni-prag-za-upis-fakulteta-2025.pdf
// Uključuje: sve redovite studije (sveučilišni + stručni), svi gradovi
// Isključuje: izvanredni studiji, "Hrvati izvan RH" kvote, duplikate

export const STUDIJI_2025 = [

  /* ══════════════════════════════════════════════════════════
     ZAGREB — javna sveučilišta
  ══════════════════════════════════════════════════════════ */

  // Agronomski fakultet
  { studij:"Krajobrazna arhitektura",             fakultet:"Agronomski",      grad:"Zagreb",  prag:756, polje:"Prirodne znanosti" },
  { studij:"Biljne znanosti",                     fakultet:"Agronomski",      grad:"Zagreb",  prag:454, polje:"Prirodne znanosti" },
  { studij:"Agroekologija",                       fakultet:"Agronomski",      grad:"Zagreb",  prag:412, polje:"Prirodne znanosti" },
  { studij:"Poljoprivredna tehnika",              fakultet:"Agronomski",      grad:"Zagreb",  prag:377, polje:"Prirodne znanosti" },
  { studij:"Agrarna ekonomika",                   fakultet:"Agronomski",      grad:"Zagreb",  prag:376, polje:"Ekonomija i pravo" },
  { studij:"Ekološka poljoprivreda",              fakultet:"Agronomski",      grad:"Zagreb",  prag:372, polje:"Prirodne znanosti" },
  { studij:"Hortikultura",                        fakultet:"Agronomski",      grad:"Zagreb",  prag:367, polje:"Prirodne znanosti" },
  { studij:"Animalne znanosti",                   fakultet:"Agronomski",      grad:"Zagreb",  prag:346, polje:"Prirodne znanosti" },
  { studij:"Fitomedicina",                        fakultet:"Agronomski",      grad:"Zagreb",  prag:325, polje:"Prirodne znanosti" },

  // Akademija dramske umjetnosti (ADU)
  { studij:"Filmska i TV režija",                 fakultet:"ADU",             grad:"Zagreb",  prag:858, polje:"Umjetnost i mediji" },
  { studij:"Baletna pedagogija",                  fakultet:"ADU",             grad:"Zagreb",  prag:736, polje:"Umjetnost i mediji" },
  { studij:"Dramaturgija",                        fakultet:"ADU",             grad:"Zagreb",  prag:717, polje:"Umjetnost i mediji" },
  { studij:"Gluma",                               fakultet:"ADU",             grad:"Zagreb",  prag:704, polje:"Umjetnost i mediji" },
  { studij:"Produkcija",                          fakultet:"ADU",             grad:"Zagreb",  prag:696, polje:"Umjetnost i mediji" },
  { studij:"Montaža",                             fakultet:"ADU",             grad:"Zagreb",  prag:646, polje:"Umjetnost i mediji" },
  { studij:"Snimanje",                            fakultet:"ADU",             grad:"Zagreb",  prag:613, polje:"Umjetnost i mediji" },
  { studij:"Kazališna režija",                    fakultet:"ADU",             grad:"Zagreb",  prag:533, polje:"Umjetnost i mediji" },

  // Akademija likovnih umjetnosti (ALU)
  { studij:"Konzerviranje i restauriranje (Kiparstvo)", fakultet:"ALU",       grad:"Zagreb",  prag:749, polje:"Umjetnost i mediji" },
  { studij:"Konzerviranje i restauriranje (Slikarstvo)",fakultet:"ALU",       grad:"Zagreb",  prag:726, polje:"Umjetnost i mediji" },
  { studij:"Grafika",                             fakultet:"ALU",             grad:"Zagreb",  prag:667, polje:"Umjetnost i mediji" },
  { studij:"Kiparstvo",                           fakultet:"ALU",             grad:"Zagreb",  prag:641, polje:"Umjetnost i mediji" },
  { studij:"Animirani film",                      fakultet:"ALU",             grad:"Zagreb",  prag:623, polje:"Umjetnost i mediji" },
  { studij:"Likovna kultura",                     fakultet:"ALU",             grad:"Zagreb",  prag:618, polje:"Umjetnost i mediji" },
  { studij:"Novi mediji",                         fakultet:"ALU",             grad:"Zagreb",  prag:613, polje:"Umjetnost i mediji" },
  { studij:"Slikarstvo",                          fakultet:"ALU",             grad:"Zagreb",  prag:608, polje:"Umjetnost i mediji" },

  // Arhitektonski fakultet (AF)
  { studij:"Arhitektura i urbanizam",             fakultet:"AF",              grad:"Zagreb",  prag:643, polje:"Graditeljstvo i arhitektura" },
  { studij:"Dizajn",                              fakultet:"AF",              grad:"Zagreb",  prag:684, polje:"Graditeljstvo i arhitektura" },

  // Edukacijsko-rehabilitacijski fakultet (ERF)
  { studij:"Logopedija",                          fakultet:"ERF",             grad:"Zagreb",  prag:831, polje:"Medicina i zdravstvo" },
  { studij:"Rehabilitacija",                      fakultet:"ERF",             grad:"Zagreb",  prag:779, polje:"Medicina i zdravstvo" },
  { studij:"Socijalna pedagogija",                fakultet:"ERF",             grad:"Zagreb",  prag:761, polje:"Medicina i zdravstvo" },

  // Ekonomski fakultet Zagreb (EFZG)
  { studij:"Poslovna ekonomija",                  fakultet:"EFZG",            grad:"Zagreb",  prag:486, polje:"Ekonomija i pravo" },
  { studij:"Ekonomija",                           fakultet:"EFZG",            grad:"Zagreb",  prag:466, polje:"Ekonomija i pravo" },
  { studij:"Bachelor in Economics",               fakultet:"EFZG",            grad:"Zagreb",  prag:529, polje:"Ekonomija i pravo" },
  { studij:"Bachelor in Business",                fakultet:"EFZG",            grad:"Zagreb",  prag:361, polje:"Ekonomija i pravo" },

  // Farmaceutsko-biokemijski fakultet
  { studij:"Farmacija",                           fakultet:"Farmaceutski",    grad:"Zagreb",  prag:674, polje:"Medicina i zdravstvo" },
  { studij:"Medicinska biokemija",                fakultet:"Farmaceutski",    grad:"Zagreb",  prag:717, polje:"Medicina i zdravstvo" },
  { studij:"Pharmacy (engleski)",                 fakultet:"Farmaceutski",    grad:"Zagreb",  prag:833, polje:"Medicina i zdravstvo" },

  // FER
  { studij:"Elektrotehnika i IT i Računarstvo",   fakultet:"FER",             grad:"Zagreb",  prag:739, polje:"Tehnika i IT" },
  { studij:"Elektrotehnika i IT (engleski)",      fakultet:"FER",             grad:"Zagreb",  prag:599, polje:"Tehnika i IT" },

  // Fakultet filozofije i religijskih znanosti
  { studij:"Filozofija (FFRZG)",                  fakultet:"FFRZG",           grad:"Zagreb",  prag:342, polje:"Društvene i humanističke" },

  // Filozofski fakultet (FFZG)
  { studij:"Psihologija",                         fakultet:"FFZG",            grad:"Zagreb",  prag:761, polje:"Društvene i humanističke" },
  { studij:"Indologija",                          fakultet:"FFZG",            grad:"Zagreb",  prag:776, polje:"Društvene i humanističke" },
  { studij:"Pedagogija",                          fakultet:"FFZG",            grad:"Zagreb",  prag:708, polje:"Društvene i humanističke" },
  { studij:"Anglistika",                          fakultet:"FFZG",            grad:"Zagreb",  prag:693, polje:"Društvene i humanističke" },
  { studij:"Informacijske znanosti",              fakultet:"FFZG",            grad:"Zagreb",  prag:602, polje:"Tehnika i IT" },
  { studij:"Španjolski jezik i književnost",      fakultet:"FFZG",            grad:"Zagreb",  prag:668, polje:"Društvene i humanističke" },
  { studij:"Japanologija",                        fakultet:"FFZG",            grad:"Zagreb",  prag:656, polje:"Društvene i humanističke" },
  { studij:"Komparativna književnost",            fakultet:"FFZG",            grad:"Zagreb",  prag:645, polje:"Društvene i humanističke" },
  { studij:"Povijest umjetnosti",                 fakultet:"FFZG",            grad:"Zagreb",  prag:648, polje:"Društvene i humanističke" },
  { studij:"Arheologija",                         fakultet:"FFZG",            grad:"Zagreb",  prag:641, polje:"Društvene i humanističke" },
  { studij:"Latinski jezik i književnost",        fakultet:"FFZG",            grad:"Zagreb",  prag:630, polje:"Društvene i humanističke" },
  { studij:"Antropologija",                       fakultet:"FFZG",            grad:"Zagreb",  prag:625, polje:"Društvene i humanističke" },
  { studij:"Kroatistika",                         fakultet:"FFZG",            grad:"Zagreb",  prag:538, polje:"Društvene i humanističke" },
  { studij:"Sociologija",                         fakultet:"FFZG",            grad:"Zagreb",  prag:584, polje:"Društvene i humanističke" },
  { studij:"Etnologija i kulturna antropologija", fakultet:"FFZG",            grad:"Zagreb",  prag:580, polje:"Društvene i humanističke" },
  { studij:"Turkologija",                         fakultet:"FFZG",            grad:"Zagreb",  prag:579, polje:"Društvene i humanističke" },
  { studij:"Talijanistika",                       fakultet:"FFZG",            grad:"Zagreb",  prag:571, polje:"Društvene i humanističke" },
  { studij:"Južnoslavenski studiji",              fakultet:"FFZG",            grad:"Zagreb",  prag:594, polje:"Društvene i humanističke" },
  { studij:"Poljski jezik i književnost",         fakultet:"FFZG",            grad:"Zagreb",  prag:584, polje:"Društvene i humanističke" },
  { studij:"Slovački jezik i književnost",        fakultet:"FFZG",            grad:"Zagreb",  prag:550, polje:"Društvene i humanističke" },
  { studij:"Sinologija",                          fakultet:"FFZG",            grad:"Zagreb",  prag:525, polje:"Društvene i humanističke" },
  { studij:"Povijest",                            fakultet:"FFZG",            grad:"Zagreb",  prag:556, polje:"Društvene i humanističke" },
  { studij:"Filozofija",                          fakultet:"FFZG",            grad:"Zagreb",  prag:511, polje:"Društvene i humanističke" },
  { studij:"Nederlandistika",                     fakultet:"FFZG",            grad:"Zagreb",  prag:497, polje:"Društvene i humanističke" },
  { studij:"Germanistika",                        fakultet:"FFZG",            grad:"Zagreb",  prag:377, polje:"Društvene i humanističke" },
  { studij:"Portugalski jezik i književnost",     fakultet:"FFZG",            grad:"Zagreb",  prag:377, polje:"Društvene i humanističke" },
  { studij:"Lingvistika",                         fakultet:"FFZG",            grad:"Zagreb",  prag:271, polje:"Društvene i humanističke" },
  { studij:"Češki jezik i književnost",           fakultet:"FFZG",            grad:"Zagreb",  prag:271, polje:"Društvene i humanističke" },
  { studij:"Francuski jezik i književnost",       fakultet:"FFZG",            grad:"Zagreb",  prag:245, polje:"Društvene i humanističke" },
  { studij:"Fonetika",                            fakultet:"FFZG",            grad:"Zagreb",  prag:245, polje:"Društvene i humanističke" },
  { studij:"Ruski jezik i književnost",           fakultet:"FFZG",            grad:"Zagreb",  prag:191, polje:"Društvene i humanističke" },
  { studij:"Švedski jezik i kultura",             fakultet:"FFZG",            grad:"Zagreb",  prag:191, polje:"Društvene i humanističke" },

  // Fakultet hrvatskih studija
  { studij:"Psihologija (Hrv. studiji)",          fakultet:"Hrv. studiji",    grad:"Zagreb",  prag:715, polje:"Društvene i humanističke" },
  { studij:"Komunikologija",                      fakultet:"Hrv. studiji",    grad:"Zagreb",  prag:592, polje:"Društvene i humanističke" },
  { studij:"Sociologija (Hrv. studiji)",          fakultet:"Hrv. studiji",    grad:"Zagreb",  prag:624, polje:"Društvene i humanističke" },
  { studij:"Kroatologija",                        fakultet:"Hrv. studiji",    grad:"Zagreb",  prag:612, polje:"Društvene i humanističke" },

  // FKIT
  { studij:"Kemijsko inženjerstvo",               fakultet:"FKIT",            grad:"Zagreb",  prag:470, polje:"Tehnika i IT" },
  { studij:"Kemija i inženjerstvo materijala",    fakultet:"FKIT",            grad:"Zagreb",  prag:328, polje:"Prirodne znanosti" },
  { studij:"Primijenjena kemija",                 fakultet:"FKIT",            grad:"Zagreb",  prag:302, polje:"Prirodne znanosti" },
  { studij:"Ekoinženjerstvo",                     fakultet:"FKIT",            grad:"Zagreb",  prag:252, polje:"Prirodne znanosti" },

  // FOI — Varaždin
  { studij:"Informacijski i poslovni sustavi",    fakultet:"FOI",             grad:"Varaždin", prag:298, polje:"Tehnika i IT" },
  { studij:"IT i digitalizacija poslovanja",      fakultet:"FOI",             grad:"Varaždin", prag:478, polje:"Tehnika i IT" },
  { studij:"Ekonomika poduzetništva",             fakultet:"FOI",             grad:"Varaždin", prag:318, polje:"Ekonomija i pravo" },

  // FPZG
  { studij:"Novinarstvo",                         fakultet:"FPZG",            grad:"Zagreb",  prag:623, polje:"Društvene i humanističke" },
  { studij:"Politologija",                        fakultet:"FPZG",            grad:"Zagreb",  prag:616, polje:"Društvene i humanističke" },

  // FPZ
  { studij:"Aeronautika (civilni pilot)",         fakultet:"FPZ",             grad:"Zagreb",  prag:516, polje:"Tehnika i IT" },
  { studij:"Aeronautika (vojni pilot)",           fakultet:"FPZ",             grad:"Zagreb",  prag:545, polje:"Tehnika i IT" },
  { studij:"Aeronautika (kontrola prometa)",      fakultet:"FPZ",             grad:"Zagreb",  prag:430, polje:"Tehnika i IT" },
  { studij:"Logistika",                           fakultet:"FPZ",             grad:"Zagreb",  prag:354, polje:"Tehnika i IT" },
  { studij:"Promet",                              fakultet:"FPZ",             grad:"Zagreb",  prag:278, polje:"Tehnika i IT" },

  // FSB
  { studij:"Zrakoplovno inženjerstvo",            fakultet:"FSB",             grad:"Zagreb",  prag:712, polje:"Tehnika i IT" },
  { studij:"Mehatronika i robotika",              fakultet:"FSB",             grad:"Zagreb",  prag:686, polje:"Tehnika i IT" },
  { studij:"Strojarstvo",                         fakultet:"FSB",             grad:"Zagreb",  prag:518, polje:"Tehnika i IT" },
  { studij:"Brodogradnja",                        fakultet:"FSB",             grad:"Zagreb",  prag:423, polje:"Tehnika i IT" },

  // Fakultet šumarstva i drvne tehnologije
  { studij:"Drvna tehnologija",                   fakultet:"Šumarski",        grad:"Zagreb",  prag:477, polje:"Prirodne znanosti" },
  { studij:"Urbano šumarstvo",                    fakultet:"Šumarski",        grad:"Zagreb",  prag:433, polje:"Prirodne znanosti" },
  { studij:"Šumarstvo",                           fakultet:"Šumarski",        grad:"Zagreb",  prag:277, polje:"Prirodne znanosti" },
  { studij:"Drvna tehnologija (stručni)",         fakultet:"Šumarski",        grad:"Vinkovci", prag:270, polje:"Prirodne znanosti" },

  // Geodetski fakultet
  { studij:"Geodezija i geoinformatika",          fakultet:"Geodetski",       grad:"Zagreb",  prag:540, polje:"Tehnika i IT" },

  // Geotehnički fakultet — Varaždin
  { studij:"Inženjerstvo okoliša",                fakultet:"Geotehnički",     grad:"Varaždin", prag:400, polje:"Prirodne znanosti" },

  // Grafički fakultet
  { studij:"Grafička tehnologija (Dizajn)",       fakultet:"Grafički",        grad:"Zagreb",  prag:598, polje:"Umjetnost i mediji" },
  { studij:"Grafička tehnologija (Tehničko-teh.)",fakultet:"Grafički",        grad:"Zagreb",  prag:249, polje:"Tehnika i IT" },

  // Građevinski fakultet Zagreb
  { studij:"Građevinarstvo",                      fakultet:"Građevinski Zg",  grad:"Zagreb",  prag:619, polje:"Graditeljstvo i arhitektura" },

  // KIF Zagreb
  { studij:"Kineziologija (Izobrazba trenera)",   fakultet:"KIF",             grad:"Zagreb",  prag:905, polje:"Kineziologija i sport" },
  { studij:"Kineziologija (Kineziološka edukacija)",fakultet:"KIF",           grad:"Zagreb",  prag:875, polje:"Kineziologija i sport" },
  { studij:"Kineziologija",                       fakultet:"KIF",             grad:"Zagreb",  prag:468, polje:"Kineziologija i sport" },

  // Katolički bogoslovni fakultet Zagreb
  { studij:"Teološko-religijske znanosti",        fakultet:"KBF Zagreb",      grad:"Zagreb",  prag:557, polje:"Društvene i humanističke" },
  { studij:"Filozofsko-teološki studij",          fakultet:"KBF Zagreb",      grad:"Zagreb",  prag:503, polje:"Društvene i humanističke" },
  { studij:"Crkvena glazba",                      fakultet:"KBF Zagreb",      grad:"Zagreb",  prag:583, polje:"Umjetnost i mediji" },

  // Medicinski fakultet Zagreb (MEF)
  { studij:"Medicina",                            fakultet:"MEF",             grad:"Zagreb",  prag:654, polje:"Medicina i zdravstvo" },
  { studij:"Medicina (engleski)",                 fakultet:"MEF",             grad:"Zagreb",  prag:508, polje:"Medicina i zdravstvo" },

  // Metalurški fakultet — Sisak
  { studij:"Metalurgija",                         fakultet:"Metalurški",      grad:"Sisak",   prag:489, polje:"Tehnika i IT" },
  { studij:"Sigurnost i zdravlje na radu",        fakultet:"Metalurški",      grad:"Sisak",   prag:435, polje:"Tehnika i IT" },

  // Muzička akademija Zagreb
  { studij:"Glazbena pedagogija (MA)",            fakultet:"Muzička akademija",grad:"Zagreb", prag:718, polje:"Umjetnost i mediji" },
  { studij:"Pjevanje (MA)",                       fakultet:"Muzička akademija",grad:"Zagreb", prag:710, polje:"Umjetnost i mediji" },
  { studij:"Teorija glazbe",                      fakultet:"Muzička akademija",grad:"Zagreb", prag:708, polje:"Umjetnost i mediji" },
  { studij:"Muzikologija",                        fakultet:"Muzička akademija",grad:"Zagreb", prag:623, polje:"Umjetnost i mediji" },
  { studij:"Kompozicija",                         fakultet:"Muzička akademija",grad:"Zagreb", prag:691, polje:"Umjetnost i mediji" },
  { studij:"Dirigiranje",                         fakultet:"Muzička akademija",grad:"Zagreb", prag:880, polje:"Umjetnost i mediji" },
  { studij:"Studij za instrumentaliste (Klavir)", fakultet:"Muzička akademija",grad:"Zagreb", prag:730, polje:"Umjetnost i mediji" },
  { studij:"Studij za instrumentaliste (Violina)",fakultet:"Muzička akademija",grad:"Zagreb", prag:783, polje:"Umjetnost i mediji" },
  { studij:"Studij za instrumentaliste (Gitara)", fakultet:"Muzička akademija",grad:"Zagreb", prag:707, polje:"Umjetnost i mediji" },

  // PMF Zagreb
  { studij:"Matematika",                          fakultet:"PMF",             grad:"Zagreb",  prag:800, polje:"Prirodne znanosti" },
  { studij:"Fizika",                              fakultet:"PMF",             grad:"Zagreb",  prag:740, polje:"Prirodne znanosti" },
  { studij:"Kemija",                              fakultet:"PMF",             grad:"Zagreb",  prag:660, polje:"Prirodne znanosti" },
  { studij:"Biologija",                           fakultet:"PMF",             grad:"Zagreb",  prag:705, polje:"Prirodne znanosti" },
  { studij:"Molekularna biologija",               fakultet:"PMF",             grad:"Zagreb",  prag:745, polje:"Prirodne znanosti" },
  { studij:"Geografija",                          fakultet:"PMF",             grad:"Zagreb",  prag:580, polje:"Prirodne znanosti" },

  // Pravni fakultet Zagreb
  { studij:"Pravo",                               fakultet:"Pravni Zg",       grad:"Zagreb",  prag:625, polje:"Ekonomija i pravo" },
  { studij:"Socijalni rad",                       fakultet:"Pravni Zg",       grad:"Zagreb",  prag:715, polje:"Ekonomija i pravo" },

  // Veterinarski fakultet
  { studij:"Veterinarska medicina",               fakultet:"Veterinarski",    grad:"Zagreb",  prag:780, polje:"Medicina i zdravstvo" },

  // Vojni studiji
  { studij:"Vojno inženjerstvo",                  fakultet:"SSNO",            grad:"Zagreb",  prag:549, polje:"Tehnika i IT" },
  { studij:"Vojno vođenje i upravljanje",         fakultet:"SSNO",            grad:"Zagreb",  prag:462, polje:"Tehnika i IT" },

  /* ══════════════════════════════════════════════════════════
     ZAGREB — privatna sveučilišta i veleučilišta
  ══════════════════════════════════════════════════════════ */

  // Hrvatsko katoličko sveučilište (HKS)
  { studij:"Psihologija (HKS)",                   fakultet:"HKS",             grad:"Zagreb",  prag:728, polje:"Društvene i humanističke" },
  { studij:"Komunikologija (HKS)",                fakultet:"HKS",             grad:"Zagreb",  prag:637, polje:"Društvene i humanističke" },
  { studij:"Medicina (HKS)",                      fakultet:"HKS",             grad:"Zagreb",  prag:604, polje:"Medicina i zdravstvo" },
  { studij:"Pravo (HKS)",                         fakultet:"HKS",             grad:"Zagreb",  prag:595, polje:"Ekonomija i pravo" },
  { studij:"Sestrinstvo (HKS)",                   fakultet:"HKS",             grad:"Zagreb",  prag:533, polje:"Medicina i zdravstvo" },
  { studij:"Računarstvo za društvene primjene",   fakultet:"HKS",             grad:"Zagreb",  prag:474, polje:"Tehnika i IT" },
  { studij:"Sociologija (HKS)",                   fakultet:"HKS",             grad:"Zagreb",  prag:355, polje:"Društvene i humanističke" },
  { studij:"Povijest (HKS)",                      fakultet:"HKS",             grad:"Zagreb",  prag:440, polje:"Društvene i humanističke" },

  // Libertas međunarodno sveučilište
  { studij:"Međunarodni odnosi",                  fakultet:"Libertas",        grad:"Zagreb",  prag:479, polje:"Društvene i humanističke" },
  { studij:"Međunarodno poslovanje",              fakultet:"Libertas",        grad:"Zagreb",  prag:374, polje:"Ekonomija i pravo" },
  { studij:"Fizioterapija (Libertas)",            fakultet:"Libertas",        grad:"Zagreb",  prag:451, polje:"Medicina i zdravstvo" },

  // EFFECTUS veleučilište
  { studij:"Poduzetništvo",                       fakultet:"EFFECTUS",        grad:"Zagreb",  prag:498, polje:"Ekonomija i pravo" },
  { studij:"Financije i poslovno pravo",          fakultet:"EFFECTUS",        grad:"Zagreb",  prag:449, polje:"Ekonomija i pravo" },

  // Kriminalistika (MUP/Veleučilište)
  { studij:"Kriminalistika",                      fakultet:"Veleučilište krim.",grad:"Zagreb", prag:649, polje:"Društvene i humanističke" },

  /* ══════════════════════════════════════════════════════════
     RIJEKA
  ══════════════════════════════════════════════════════════ */

  // APU Rijeka
  { studij:"Likovna pedagogija",                  fakultet:"APU Ri",          grad:"Rijeka",  prag:847, polje:"Umjetnost i mediji" },
  { studij:"Grafički dizajn",                     fakultet:"APU Ri",          grad:"Rijeka",  prag:658, polje:"Umjetnost i mediji" },
  { studij:"Gluma i mediji",                      fakultet:"APU Ri",          grad:"Rijeka",  prag:632, polje:"Umjetnost i mediji" },
  { studij:"Primijenjena umjetnost",              fakultet:"APU Ri",          grad:"Rijeka",  prag:564, polje:"Umjetnost i mediji" },

  // Dentalna medicina Rijeka
  { studij:"Dentalna medicina",                   fakultet:"Dentalni Ri",     grad:"Rijeka",  prag:652, polje:"Medicina i zdravstvo" },

  // EFRI
  { studij:"Ekonomija",                           fakultet:"EFRI",            grad:"Rijeka",  prag:489, polje:"Ekonomija i pravo" },
  { studij:"Poslovna ekonomija (engleski)",        fakultet:"EFRI",            grad:"Rijeka",  prag:554, polje:"Ekonomija i pravo" },

  // FBRL
  { studij:"Biotehnologija i istraživanje lijekova",fakultet:"FBRL",          grad:"Rijeka",  prag:565, polje:"Medicina i zdravstvo" },

  // Filozofski fakultet Rijeka (FFRI)
  { studij:"Psihologija",                         fakultet:"FFRI",            grad:"Rijeka",  prag:745, polje:"Društvene i humanističke" },
  { studij:"Pedagogija",                          fakultet:"FFRI",            grad:"Rijeka",  prag:699, polje:"Društvene i humanističke" },
  { studij:"Engleski jezik i književnost",        fakultet:"FFRI",            grad:"Rijeka",  prag:684, polje:"Društvene i humanističke" },
  { studij:"Njemački jezik i književnost",        fakultet:"FFRI",            grad:"Rijeka",  prag:658, polje:"Društvene i humanističke" },
  { studij:"Talijanski jezik i književnost",      fakultet:"FFRI",            grad:"Rijeka",  prag:597, polje:"Društvene i humanističke" },
  { studij:"Hrvatski jezik i književnost",        fakultet:"FFRI",            grad:"Rijeka",  prag:488, polje:"Društvene i humanističke" },
  { studij:"Povijest",                            fakultet:"FFRI",            grad:"Rijeka",  prag:457, polje:"Društvene i humanističke" },
  { studij:"Kulturologija",                       fakultet:"FFRI",            grad:"Rijeka",  prag:374, polje:"Društvene i humanističke" },
  { studij:"Povijest umjetnosti",                 fakultet:"FFRI",            grad:"Rijeka",  prag:379, polje:"Društvene i humanističke" },
  { studij:"Filozofija",                          fakultet:"FFRI",            grad:"Rijeka",  prag:379, polje:"Društvene i humanističke" },

  // Fizika Rijeka
  { studij:"Fizika",                              fakultet:"Fizički Ri",      grad:"Rijeka",  prag:588, polje:"Prirodne znanosti" },

  // FIDIT
  { studij:"Informatika",                         fakultet:"FIDIT",           grad:"Rijeka",  prag:219, polje:"Tehnika i IT" },

  // Građevinski fakultet Rijeka
  { studij:"Građevinarstvo",                      fakultet:"Građevinski Ri",  grad:"Rijeka",  prag:493, polje:"Graditeljstvo i arhitektura" },

  // Matematika Rijeka
  { studij:"Matematika",                          fakultet:"Matematički Ri",  grad:"Rijeka",  prag:543, polje:"Prirodne znanosti" },

  // Medicinski fakultet Rijeka
  { studij:"Medicina",                            fakultet:"Medicinski Ri",   grad:"Rijeka",  prag:622, polje:"Medicina i zdravstvo" },
  { studij:"Medicinsko laboratorijska dijagnostika",fakultet:"Medicinski Ri", grad:"Rijeka",  prag:673, polje:"Medicina i zdravstvo" },
  { studij:"Sanitarno inženjerstvo",              fakultet:"Medicinski Ri",   grad:"Rijeka",  prag:415, polje:"Medicina i zdravstvo" },
  { studij:"Farmacija",                           fakultet:"Medicinski Ri",   grad:"Rijeka",  prag:618, polje:"Medicina i zdravstvo" },

  // Pomorski fakultet Rijeka
  { studij:"Nautika i tehnologija pomorskog prometa",fakultet:"Pomorski Ri",  grad:"Rijeka",  prag:458, polje:"Tehnika i IT" },
  { studij:"Logistika i menadžment u pomorstvu",  fakultet:"Pomorski Ri",     grad:"Rijeka",  prag:492, polje:"Ekonomija i pravo" },
  { studij:"Promet i mobilnost",                  fakultet:"Pomorski Ri",     grad:"Rijeka",  prag:467, polje:"Tehnika i IT" },
  { studij:"Elektroničke i IT tehnologije u pomorstvu",fakultet:"Pomorski Ri",grad:"Rijeka",  prag:460, polje:"Tehnika i IT" },

  // FZS Rijeka
  { studij:"Sestrinstvo",                         fakultet:"FZS Ri",          grad:"Rijeka",  prag:514, polje:"Medicina i zdravstvo" },
  { studij:"Fizioterapija",                       fakultet:"FZS Ri",          grad:"Rijeka",  prag:525, polje:"Medicina i zdravstvo" },
  { studij:"Radiološka tehnologija",              fakultet:"FZS Ri",          grad:"Rijeka",  prag:572, polje:"Medicina i zdravstvo" },
  { studij:"Primaljstvo",                         fakultet:"FZS Ri",          grad:"Rijeka",  prag:543, polje:"Medicina i zdravstvo" },

  // Opatija (FMTU)
  { studij:"Menadžment održivog razvoja",         fakultet:"FMTU",            grad:"Opatija", prag:527, polje:"Ekonomija i pravo" },
  { studij:"Poslovna ekonomija u turizmu",        fakultet:"FMTU",            grad:"Opatija", prag:469, polje:"Ekonomija i pravo" },

  // Karlovac (FZS Rijeka)
  { studij:"Sestrinstvo",                         fakultet:"FZS Ri (Karlovac)",grad:"Karlovac",prag:578,polje:"Medicina i zdravstvo" },

  /* ══════════════════════════════════════════════════════════
     SPLIT
  ══════════════════════════════════════════════════════════ */

  // EFST
  { studij:"Poslovna ekonomija",                  fakultet:"EFST",            grad:"Split",   prag:377, polje:"Ekonomija i pravo" },
  { studij:"Ekonomija",                           fakultet:"EFST",            grad:"Split",   prag:365, polje:"Ekonomija i pravo" },
  { studij:"Turizam",                             fakultet:"EFST",            grad:"Split",   prag:388, polje:"Ekonomija i pravo" },

  // FESB
  { studij:"Industrijsko inženjerstvo",           fakultet:"FESB",            grad:"Split",   prag:441, polje:"Tehnika i IT" },
  { studij:"Strojarstvo",                         fakultet:"FESB",            grad:"Split",   prag:376, polje:"Tehnika i IT" },
  { studij:"Računarstvo",                         fakultet:"FESB",            grad:"Split",   prag:368, polje:"Tehnika i IT" },
  { studij:"Elektrotehnika i IT",                 fakultet:"FESB",            grad:"Split",   prag:335, polje:"Tehnika i IT" },
  { studij:"Brodogradnja",                        fakultet:"FESB",            grad:"Split",   prag:290, polje:"Tehnika i IT" },

  // FGAG Split
  { studij:"Građevinarstvo",                      fakultet:"FGAG",            grad:"Split",   prag:568, polje:"Graditeljstvo i arhitektura" },
  { studij:"Geodezija i geoinformatika",          fakultet:"FGAG",            grad:"Split",   prag:519, polje:"Tehnika i IT" },
  { studij:"Arhitektura i urbanizam",             fakultet:"FGAG",            grad:"Split",   prag:508, polje:"Graditeljstvo i arhitektura" },

  // Filozofski fakultet Split (FFST)
  { studij:"Psihologija",                         fakultet:"FFST",            grad:"Split",   prag:725, polje:"Društvene i humanističke" },
  { studij:"Engleski jezik i književnost",        fakultet:"FFST",            grad:"Split",   prag:724, polje:"Društvene i humanističke" },
  { studij:"Pedagogija",                          fakultet:"FFST",            grad:"Split",   prag:678, polje:"Društvene i humanističke" },
  { studij:"Rani i predškolski odgoj",            fakultet:"FFST",            grad:"Split",   prag:605, polje:"Društvene i humanističke" },
  { studij:"Hrvatski jezik i književnost",        fakultet:"FFST",            grad:"Split",   prag:570, polje:"Društvene i humanističke" },
  { studij:"Njemački jezik i književnost",        fakultet:"FFST",            grad:"Split",   prag:473, polje:"Društvene i humanističke" },
  { studij:"Talijanski jezik i književnost",      fakultet:"FFST",            grad:"Split",   prag:448, polje:"Društvene i humanističke" },
  { studij:"Sociologija",                         fakultet:"FFST",            grad:"Split",   prag:429, polje:"Društvene i humanističke" },
  { studij:"Filozofija",                          fakultet:"FFST",            grad:"Split",   prag:434, polje:"Društvene i humanističke" },
  { studij:"Učiteljski studij",                   fakultet:"FFST",            grad:"Split",   prag:403, polje:"Društvene i humanističke" },
  { studij:"Povijest",                            fakultet:"FFST",            grad:"Split",   prag:406, polje:"Društvene i humanističke" },
  { studij:"Povijest umjetnosti",                 fakultet:"FFST",            grad:"Split",   prag:400, polje:"Društvene i humanističke" },

  // KBF Split
  { studij:"Filozofsko-teološki studij",          fakultet:"KBF Split",       grad:"Split",   prag:602, polje:"Društvene i humanističke" },
  { studij:"Teološko-katehetski studij",          fakultet:"KBF Split",       grad:"Split",   prag:554, polje:"Društvene i humanističke" },

  // KIF Split
  { studij:"Kineziologija",                       fakultet:"KIF Split",       grad:"Split",   prag:387, polje:"Kineziologija i sport" },

  // KTF Split
  { studij:"Kemijska tehnologija (Kem. inž.)",    fakultet:"KTF",             grad:"Split",   prag:421, polje:"Prirodne znanosti" },
  { studij:"Kemijska tehnologija (Zaš. okoliša)", fakultet:"KTF",             grad:"Split",   prag:368, polje:"Prirodne znanosti" },
  { studij:"Kemija",                              fakultet:"KTF",             grad:"Split",   prag:342, polje:"Prirodne znanosti" },
  { studij:"Prehrambena tehnologija",             fakultet:"KTF",             grad:"Split",   prag:318, polje:"Prirodne znanosti" },

  // Medicinski fakultet Split
  { studij:"Medicina",                            fakultet:"Medicinski St",   grad:"Split",   prag:642, polje:"Medicina i zdravstvo" },
  { studij:"Dentalna medicina",                   fakultet:"Medicinski St",   grad:"Split",   prag:673, polje:"Medicina i zdravstvo" },
  { studij:"Farmacija",                           fakultet:"Medicinski St",   grad:"Split",   prag:661, polje:"Medicina i zdravstvo" },

  // Pravni fakultet Split
  { studij:"Pravo",                               fakultet:"Pravni St",       grad:"Split",   prag:580, polje:"Ekonomija i pravo" },

  // FZZ Split
  { studij:"Fizioterapija",                       fakultet:"FZZ Split",       grad:"Split",   prag:596, polje:"Medicina i zdravstvo" },
  { studij:"Radiološka tehnologija",              fakultet:"FZZ Split",       grad:"Split",   prag:588, polje:"Medicina i zdravstvo" },
  { studij:"Medicinsko laboratorijska dijagnostika",fakultet:"FZZ Split",     grad:"Split",   prag:567, polje:"Medicina i zdravstvo" },
  { studij:"Sestrinstvo",                         fakultet:"FZZ Split",       grad:"Split",   prag:400, polje:"Medicina i zdravstvo" },
  { studij:"Primaljstvo",                         fakultet:"FZZ Split",       grad:"Split",   prag:430, polje:"Medicina i zdravstvo" },

  /* ══════════════════════════════════════════════════════════
     OSIJEK
  ══════════════════════════════════════════════════════════ */

  // AUK Osijek
  { studij:"Pjevanje",                            fakultet:"AUK Osijek",      grad:"Osijek",  prag:856, polje:"Umjetnost i mediji" },
  { studij:"Gluma i lutkarstvo",                  fakultet:"AUK Osijek",      grad:"Osijek",  prag:725, polje:"Umjetnost i mediji" },
  { studij:"Dizajn za kazalište, film i TV",      fakultet:"AUK Osijek",      grad:"Osijek",  prag:619, polje:"Umjetnost i mediji" },
  { studij:"Glazbena pedagogija (Osijek)",        fakultet:"AUK Osijek",      grad:"Osijek",  prag:595, polje:"Umjetnost i mediji" },
  { studij:"Kultura, mediji i menadžment",        fakultet:"AUK Osijek",      grad:"Osijek",  prag:608, polje:"Umjetnost i mediji" },
  { studij:"Likovna kultura (Osijek)",            fakultet:"AUK Osijek",      grad:"Osijek",  prag:511, polje:"Umjetnost i mediji" },

  // EFOS
  { studij:"Ekonomija i poslovna ekonomija",      fakultet:"EFOS",            grad:"Osijek",  prag:386, polje:"Ekonomija i pravo" },

  // FAZOS
  { studij:"Poljoprivreda (Hortikultura)",        fakultet:"FAZOS",           grad:"Osijek",  prag:516, polje:"Prirodne znanosti" },
  { studij:"Poljoprivreda (Zootehnika)",          fakultet:"FAZOS",           grad:"Osijek",  prag:503, polje:"Prirodne znanosti" },
  { studij:"Poljoprivreda (Bilinogojstvo)",       fakultet:"FAZOS",           grad:"Osijek",  prag:465, polje:"Prirodne znanosti" },
  { studij:"Poljoprivreda (Agroekonomika)",       fakultet:"FAZOS",           grad:"Osijek",  prag:412, polje:"Ekonomija i pravo" },
  { studij:"Poljoprivreda (Mehanizacija)",        fakultet:"FAZOS",           grad:"Osijek",  prag:364, polje:"Tehnika i IT" },

  // FDMZ Osijek
  { studij:"Sestrinstvo",                         fakultet:"FDMZ Os",         grad:"Osijek",  prag:699, polje:"Medicina i zdravstvo" },

  // FERIT
  { studij:"Elektrotehnika i IT",                 fakultet:"FERIT",           grad:"Osijek",  prag:444, polje:"Tehnika i IT" },
  { studij:"Računarstvo",                         fakultet:"FERIT",           grad:"Osijek",  prag:374, polje:"Tehnika i IT" },

  // FFOS
  { studij:"Psihologija",                         fakultet:"FFOS",            grad:"Osijek",  prag:718, polje:"Društvene i humanističke" },
  { studij:"Njemački jezik i književnost (Os.)",  fakultet:"FFOS",            grad:"Osijek",  prag:585, polje:"Društvene i humanističke" },
  { studij:"Engleski jezik i književnost",        fakultet:"FFOS",            grad:"Osijek",  prag:554, polje:"Društvene i humanističke" },
  { studij:"Sociologija",                         fakultet:"FFOS",            grad:"Osijek",  prag:534, polje:"Društvene i humanističke" },
  { studij:"Hrvatski jezik i književnost",        fakultet:"FFOS",            grad:"Osijek",  prag:484, polje:"Društvene i humanističke" },
  { studij:"Informatologija",                     fakultet:"FFOS",            grad:"Osijek",  prag:428, polje:"Tehnika i IT" },
  { studij:"Pedagogija",                          fakultet:"FFOS",            grad:"Osijek",  prag:313, polje:"Društvene i humanističke" },

  // FOOZ Osijek
  { studij:"Logopedija",                          fakultet:"FOOZ Os",         grad:"Osijek",  prag:668, polje:"Medicina i zdravstvo" },
  { studij:"Edukacijska rehabilitacija",          fakultet:"FOOZ Os",         grad:"Osijek",  prag:655, polje:"Medicina i zdravstvo" },
  { studij:"Rani i predškolski odgoj",            fakultet:"FOOZ Os",         grad:"Osijek",  prag:626, polje:"Društvene i humanističke" },
  { studij:"Učiteljski studij",                   fakultet:"FOOZ Os",         grad:"Osijek",  prag:547, polje:"Društvene i humanističke" },

  // GAFOS
  { studij:"Arhitektura i urbanizam",             fakultet:"GAFOS",           grad:"Osijek",  prag:586, polje:"Graditeljstvo i arhitektura" },
  { studij:"Građevinarstvo",                      fakultet:"GAFOS",           grad:"Osijek",  prag:448, polje:"Graditeljstvo i arhitektura" },

  // KBF Đakovo
  { studij:"Filozofsko-teološki studij",          fakultet:"KBF Đakovo",      grad:"Đakovo",  prag:541, polje:"Društvene i humanističke" },

  // KIF Osijek
  { studij:"Kineziologija",                       fakultet:"KIF Os",          grad:"Osijek",  prag:577, polje:"Kineziologija i sport" },

  // Medicinski fakultet Osijek
  { studij:"Medicina",                            fakultet:"Medicinski Os",   grad:"Osijek",  prag:680, polje:"Medicina i zdravstvo" },
  { studij:"Medicinsko laboratorijska dijagnostika",fakultet:"Medicinski Os", grad:"Osijek",  prag:689, polje:"Medicina i zdravstvo" },
  { studij:"Farmacija",                           fakultet:"Medicinski Os",   grad:"Osijek",  prag:666, polje:"Medicina i zdravstvo" },

  // MATHOS
  { studij:"Matematika i računarstvo",            fakultet:"MATHOS",          grad:"Osijek",  prag:339, polje:"Prirodne znanosti" },
  { studij:"Matematika (Os.)",                    fakultet:"MATHOS",          grad:"Osijek",  prag:200, polje:"Prirodne znanosti" },
  { studij:"Kemija (Os.)",                        fakultet:"Odjel za kemiju Os.",grad:"Osijek",prag:436, polje:"Prirodne znanosti" },
  { studij:"Biologija (Os.)",                     fakultet:"Odjel za biologiju Os.",grad:"Osijek",prag:472,polje:"Prirodne znanosti"},
  { studij:"Fizika (Os.)",                        fakultet:"Odjel za fiziku Os.",grad:"Osijek",prag:334, polje:"Prirodne znanosti" },

  // Pravni fakultet Osijek
  { studij:"Pravo",                               fakultet:"Pravni Os",       grad:"Osijek",  prag:550, polje:"Ekonomija i pravo" },

  /* ══════════════════════════════════════════════════════════
     PULA
  ══════════════════════════════════════════════════════════ */
  { studij:"Kultura i turizam",                   fakultet:"FET Pula",        grad:"Pula",    prag:401, polje:"Ekonomija i pravo" },
  { studij:"Poslovna ekonomija",                  fakultet:"FET Pula",        grad:"Pula",    prag:378, polje:"Ekonomija i pravo" },
  { studij:"Primijenjena ekonomija",              fakultet:"FET Pula",        grad:"Pula",    prag:369, polje:"Ekonomija i pravo" },
  { studij:"Informatika",                         fakultet:"FIPU",            grad:"Pula",    prag:378, polje:"Tehnika i IT" },
  { studij:"Jezična i interkulturalna medijacija",fakultet:"FFPU",            grad:"Pula",    prag:675, polje:"Društvene i humanističke" },
  { studij:"Talijanski jezik i književnost",      fakultet:"FFPU",            grad:"Pula",    prag:493, polje:"Društvene i humanističke" },
  { studij:"Japanski jezik i kultura",            fakultet:"FFPU",            grad:"Pula",    prag:441, polje:"Društvene i humanističke" },
  { studij:"Hrvatski jezik i književnost",        fakultet:"FFPU",            grad:"Pula",    prag:596, polje:"Društvene i humanističke" },
  { studij:"Engleski jezik i književnost",        fakultet:"FFPU",            grad:"Pula",    prag:371, polje:"Društvene i humanističke" },
  { studij:"Povijest",                            fakultet:"FFPU",            grad:"Pula",    prag:407, polje:"Društvene i humanističke" },
  { studij:"Arheologija",                         fakultet:"FFPU",            grad:"Pula",    prag:248, polje:"Društvene i humanističke" },
  { studij:"Učiteljski studij",                   fakultet:"FOOZU Pu",        grad:"Pula",    prag:438, polje:"Društvene i humanističke" },
  { studij:"Rani i predškolski odgoj (talijanski)",fakultet:"FOOZU Pu",       grad:"Pula",    prag:443, polje:"Društvene i humanističke" },
  { studij:"Mehatronika",                         fakultet:"Istarsko veleučilište",grad:"Pula",prag:503, polje:"Tehnika i IT" },
  { studij:"Sestrinstvo",                         fakultet:"Medicinski Pu",   grad:"Pula",    prag:374, polje:"Medicina i zdravstvo" },
  { studij:"Znanost o moru",                      fakultet:"FPZ Pu",          grad:"Pula",    prag:269, polje:"Prirodne znanosti" },
  { studij:"Glazbena pedagogija (Pula)",          fakultet:"Muzička akademija Pu",grad:"Pula", prag:738, polje:"Umjetnost i mediji" },
  { studij:"Klavir (Pula)",                       fakultet:"Muzička akademija Pu",grad:"Pula", prag:858, polje:"Umjetnost i mediji" },
  { studij:"Solo pjevanje (Pula)",                fakultet:"Muzička akademija Pu",grad:"Pula", prag:606, polje:"Umjetnost i mediji" },

  /* ══════════════════════════════════════════════════════════
     DUBROVNIK
  ══════════════════════════════════════════════════════════ */
  { studij:"Poslovna ekonomija (IT menadžment)",  fakultet:"EFDU",            grad:"Dubrovnik",prag:490, polje:"Ekonomija i pravo" },
  { studij:"Poslovna ekonomija (Marketing)",      fakultet:"EFDU",            grad:"Dubrovnik",prag:373, polje:"Ekonomija i pravo" },
  { studij:"Poslovna ekonomija (Turizam)",        fakultet:"EFDU",            grad:"Dubrovnik",prag:400, polje:"Ekonomija i pravo" },
  { studij:"Primijenjeno računarstvo",            fakultet:"FEPR Du",         grad:"Dubrovnik",prag:362, polje:"Tehnika i IT" },
  { studij:"Elektrotehnika i pomorstvo",          fakultet:"FEPR Du",         grad:"Dubrovnik",prag:332, polje:"Tehnika i IT" },
  { studij:"Mediji i kultura društva",            fakultet:"FMOJ Du",         grad:"Dubrovnik",prag:425, polje:"Društvene i humanističke" },
  { studij:"Povijest Jadrana i Mediterana",       fakultet:"Humanistički Du", grad:"Dubrovnik",prag:615, polje:"Društvene i humanističke" },
  { studij:"Konzervacija-restauracija",           fakultet:"Odjel za um. Du", grad:"Dubrovnik",prag:645, polje:"Umjetnost i mediji" },
  { studij:"Nautika",                             fakultet:"Pomorski Du",     grad:"Dubrovnik",prag:296, polje:"Tehnika i IT" },
  { studij:"Brodostrojarstvo",                    fakultet:"Pomorski Du",     grad:"Dubrovnik",prag:324, polje:"Tehnika i IT" },

  /* ══════════════════════════════════════════════════════════
     ZADAR
  ══════════════════════════════════════════════════════════ */
  { studij:"Psihologija",                         fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:699, polje:"Društvene i humanističke" },
  { studij:"Menadžment",                          fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:556, polje:"Ekonomija i pravo" },
  { studij:"Anglistika",                          fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:516, polje:"Društvene i humanističke" },
  { studij:"Arheologija",                         fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:495, polje:"Društvene i humanističke" },
  { studij:"Primijenjena ekologija u poljoprivredi",fakultet:"Sveučilište Zadar",grad:"Zadar",prag:480, polje:"Prirodne znanosti" },
  { studij:"Podvodne znanosti i tehnologije",     fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:493, polje:"Prirodne znanosti" },
  { studij:"Talijanski jezik i književnost",      fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:522, polje:"Društvene i humanističke" },
  { studij:"Etnologija i antropologija",          fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:444, polje:"Društvene i humanističke" },
  { studij:"Filozofija",                          fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:496, polje:"Društvene i humanističke" },
  { studij:"Francuski jezik i književnost",       fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:547, polje:"Društvene i humanističke" },
  { studij:"Geografija",                          fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:506, polje:"Prirodne znanosti" },
  { studij:"Njemački jezik i književnost",        fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:515, polje:"Društvene i humanističke" },
  { studij:"Španjolski jezik i književnost",      fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:534, polje:"Društvene i humanističke" },
  { studij:"Informacijske znanosti",              fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:364, polje:"Tehnika i IT" },
  { studij:"Rani i predškolski odgoj",            fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:535, polje:"Društvene i humanističke" },
  { studij:"Učiteljski studij",                   fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:277, polje:"Društvene i humanističke" },
  { studij:"Latinski jezik i rimska književnost", fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:628, polje:"Društvene i humanističke" },
  { studij:"Grčki jezik i književnost",           fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:604, polje:"Društvene i humanističke" },
  { studij:"Hrvatski jezik i književnost",        fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:585, polje:"Društvene i humanističke" },
  { studij:"Jezik i komunikacija u višejezičnom društvu",fakultet:"Sveučilište Zadar",grad:"Zadar",prag:540,polje:"Društvene i humanističke" },
  { studij:"Pedagogija",                          fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:523, polje:"Društvene i humanističke" },
  { studij:"Povijest",                            fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:464, polje:"Društvene i humanističke" },
  { studij:"Povijest umjetnosti",                 fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:648, polje:"Društvene i humanističke" },
  { studij:"Kultura i turizam",                   fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:384, polje:"Ekonomija i pravo" },
  { studij:"Ruski jezik i književnost",           fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:585, polje:"Društvene i humanističke" },
  { studij:"Sociologija",                         fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:492, polje:"Društvene i humanističke" },
  { studij:"Sestrinstvo",                         fakultet:"Sveučilište Zadar",grad:"Zadar",  prag:445, polje:"Medicina i zdravstvo" },

  // Zadar — Gospić
  { studij:"Rani i predškolski odgoj",            fakultet:"Sveučilište Zadar",grad:"Gospić", prag:392, polje:"Društvene i humanističke" },
  { studij:"Učiteljski studij (Gospić)",          fakultet:"Sveučilište Zadar",grad:"Gospić", prag:490, polje:"Društvene i humanističke" },

  /* ══════════════════════════════════════════════════════════
     ŠIBENIK
  ══════════════════════════════════════════════════════════ */
  { studij:"Energetska učinkovitost i obnovljivi izvori",fakultet:"FER/FSB",  grad:"Šibenik", prag:385, polje:"Tehnika i IT" },

  /* ══════════════════════════════════════════════════════════
     SLAVONSKI BROD
  ══════════════════════════════════════════════════════════ */
  { studij:"Ekoinženjerstvo i zaštita prirode",   fakultet:"Biotehnički Sb",  grad:"Slavonski Brod",prag:399,polje:"Prirodne znanosti" },
  { studij:"Ekonomija",                           fakultet:"ODHS Sb",         grad:"Slavonski Brod",prag:423,polje:"Ekonomija i pravo" },
  { studij:"Učiteljski studij",                   fakultet:"ODHS Sb",         grad:"Slavonski Brod",prag:296,polje:"Društvene i humanističke" },

  /* ══════════════════════════════════════════════════════════
     POŽEGA
  ══════════════════════════════════════════════════════════ */
  { studij:"Turizam",                             fakultet:"FTR Požega",      grad:"Požega",  prag:484, polje:"Ekonomija i pravo" },
  { studij:"Enogastronomija",                     fakultet:"FTR Požega",      grad:"Požega",  prag:569, polje:"Ekonomija i pravo" },
  { studij:"Elektroničko poslovanje",             fakultet:"FTR Požega",      grad:"Požega",  prag:512, polje:"Tehnika i IT" },
  { studij:"Računovodstvo",                       fakultet:"FTR Požega",      grad:"Požega",  prag:493, polje:"Ekonomija i pravo" },

  /* ══════════════════════════════════════════════════════════
     ČAKOVEC
  ══════════════════════════════════════════════════════════ */
  { studij:"Menadžment turizma i sporta",         fakultet:"MeV Čakovec",     grad:"Čakovec", prag:435, polje:"Ekonomija i pravo" },
  { studij:"Održivi razvoj",                      fakultet:"MeV Čakovec",     grad:"Čakovec", prag:462, polje:"Prirodne znanosti" },

  /* ══════════════════════════════════════════════════════════
     SISAK
  ══════════════════════════════════════════════════════════ */
  { studij:"Metalurgija",                         fakultet:"Metalurški",      grad:"Sisak",   prag:489, polje:"Tehnika i IT" },
  { studij:"Sigurnost i zdravlje na radu",        fakultet:"Metalurški",      grad:"Sisak",   prag:435, polje:"Tehnika i IT" },

  /* ══════════════════════════════════════════════════════════
     VINKOVCI
  ══════════════════════════════════════════════════════════ */
  { studij:"Drvna tehnologija",                   fakultet:"Šumarski",        grad:"Vinkovci", prag:270, polje:"Prirodne znanosti" },

];

/* ─── POSEBNE FORMULE ──────────────────────────────────────────────────── */
export const POSEBNE_FORMULE = {
  "Medicina_Zagreb": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*1.0 + sc.strani*0.5 + sc.izb1*0.8 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.4 + sc.prijemni*6*0.6)*10)/10;
  },
  "Medicina (engleski)_Zagreb": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.3 + sc.mat*1.0 + sc.strani*1.5 + sc.izb1*0.8 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.4 + sc.prijemni*6*0.6)*10)/10;
  },
  "Medicina (HKS)_Zagreb": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*1.0 + sc.strani*0.5 + sc.izb1*0.8 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.4 + sc.prijemni*6*0.6)*10)/10;
  },
  "Medicina_Rijeka": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*1.0 + sc.strani*0.5 + sc.izb1*0.8 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.4 + sc.prijemni*6*0.6)*10)/10;
  },
  "Medicina_Split": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*1.0 + sc.strani*0.5 + sc.izb1*0.8 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.4 + sc.prijemni*6*0.6)*10)/10;
  },
  "Medicina_Osijek": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*1.0 + sc.strani*0.5 + sc.izb1*0.8 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.4 + sc.prijemni*6*0.6)*10)/10;
  },
  "Elektrotehnika i IT i Računarstvo_Zagreb": (sc) => Math.round(Math.min(1000,
    sc.prosjek*60 + sc.hr*0.3 + sc.mat*2.0 + sc.strani*0.5 + sc.izb1*1.0 + sc.izb2*0.5 + sc.natjecanja + sc.sport)*10)/10,
  "Elektrotehnika i IT (engleski)_Zagreb": (sc) => Math.round(Math.min(1000,
    sc.prosjek*60 + sc.hr*0.3 + sc.mat*2.0 + sc.strani*1.0 + sc.izb1*1.0 + sc.izb2*0.5 + sc.natjecanja + sc.sport)*10)/10,
  "Arhitektura i urbanizam_Zagreb": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*1.0 + sc.strani*0.5 + sc.izb1*0.8 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.4 + sc.prijemni*6*0.6)*10)/10;
  },
  "Dizajn_Zagreb": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*0.5 + sc.strani*0.5 + sc.izb1*0.8 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.4 + sc.prijemni*6*0.6)*10)/10;
  },
  "Zrakoplovno inženjerstvo_Zagreb": (sc) => Math.round(Math.min(1000,
    sc.prosjek*60 + sc.hr*0.3 + sc.mat*1.8 + sc.strani*0.5 + sc.izb1*1.0 + sc.izb2*0.5 + sc.natjecanja + sc.sport)*10)/10,
  "Mehatronika i robotika_Zagreb": (sc) => Math.round(Math.min(1000,
    sc.prosjek*60 + sc.hr*0.3 + sc.mat*1.8 + sc.strani*0.5 + sc.izb1*1.0 + sc.izb2*0.5 + sc.natjecanja + sc.sport)*10)/10,
  "Strojarstvo_Zagreb": (sc) => Math.round(Math.min(1000,
    sc.prosjek*60 + sc.hr*0.3 + sc.mat*1.8 + sc.strani*0.5 + sc.izb1*1.0 + sc.izb2*0.5 + sc.natjecanja + sc.sport)*10)/10,
  "Matematika_Zagreb": (sc) => Math.round(Math.min(1000,
    sc.prosjek*60 + sc.hr*0.3 + sc.mat*2.0 + sc.strani*0.5 + sc.izb1*1.0 + sc.izb2*0.5 + sc.natjecanja + sc.sport)*10)/10,
  "Kineziologija (Izobrazba trenera)_Zagreb": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*0.5 + sc.strani*0.5 + sc.izb1*0.5 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.5 + sc.prijemni*5*0.5)*10)/10;
  },
  "Kineziologija (Kineziološka edukacija)_Zagreb": (sc) => {
    const mat = sc.prosjek*60 + sc.hr*0.5 + sc.mat*0.5 + sc.strani*0.5 + sc.izb1*0.5 + sc.izb2*0.5 + sc.natjecanja + sc.sport;
    return Math.round(Math.min(1000, mat*0.5 + sc.prijemni*5*0.5)*10)/10;
  },
  "Veterinarska medicina_Zagreb": (sc) => Math.round(Math.min(1000,
    sc.prosjek*60 + sc.hr*0.5 + sc.mat*1.0 + sc.strani*0.5 + sc.izb1*1.2 + sc.izb2*0.8 + sc.natjecanja + sc.sport)*10)/10,
};

/* ─── STANDARDNA FORMULA ─────────────────────────────────────────────── */
function standardCalc(sc) {
  return Math.round(Math.min(1000,
    sc.prosjek * 60 + sc.hr * 0.5 + sc.mat * 1.0 + sc.strani * 0.5 +
    sc.izb1 * 1.0 + sc.izb2 * 0.8 + sc.natjecanja + sc.sport
  ) * 10) / 10;
}

export function calcTotal(sc, studijKey) {
  if (studijKey && POSEBNE_FORMULE[studijKey]) return POSEBNE_FORMULE[studijKey](sc);
  return standardCalc(sc);
}

/* ─── ŠANSA ──────────────────────────────────────────────────────────── */
export function getChance(bodovi, prag) {
  const d = bodovi - prag;
  if (d >= 30)  return "high";
  if (d >= -30) return "mid";
  if (d >= -80) return "low";
  return "none";
}

export function chanceLabel(c) {
  if (c === "high") return "Dobra šansa";
  if (c === "mid")  return "Granično";
  if (c === "low")  return "Rizično";
  return "Premalo bodova";
}

/* ─── PRAGOVI 2023 (za trend) ─────────────────────────────────────────── */
export const PRAG_2023 = {
  "Medicina_Zagreb":                              962.4,
  "Farmacija_Zagreb":                             878.5,
  "Logopedija_Zagreb":                            870.8,
  "Rehabilitacija_Zagreb":                        811.1,
  "Socijalna pedagogija_Zagreb":                  781.9,
  "Dentalna medicina_Rijeka":                     627.2,
  "Elektrotehnika i IT i Računarstvo_Zagreb":     775.3,
  "Mehatronika i robotika_Zagreb":                680.0,
  "Strojarstvo_Zagreb":                           490.0,
  "Brodogradnja_Zagreb":                          462.0,
  "Arhitektura i urbanizam_Zagreb":               675.8,
  "Dizajn_Zagreb":                                692.4,
  "Građevinarstvo_Zagreb":                        535.0,
  "Matematika_Zagreb":                            812.0,
  "Fizika_Zagreb":                                748.0,
  "Biologija_Zagreb":                             710.0,
  "Kemija_Zagreb":                                680.0,
  "Molekularna biologija_Zagreb":                 756.0,
  "Poslovna ekonomija_Zagreb":                    508.8,
  "Ekonomija_Zagreb":                             472.4,
  "Pravo_Zagreb":                                 630.0,
  "Socijalni rad_Zagreb":                         720.0,
  "Politologija_Zagreb":                          694.0,
  "Novinarstvo_Zagreb":                           742.0,
  "Psihologija_Zagreb":                           820.0,
  "Kineziologija (Izobrazba trenera)_Zagreb":     910.0,
  "Veterinarska medicina_Zagreb":                 780.0,
  "Promet_Zagreb":                                480.0,
  "Aeronautika (civilni pilot)_Zagreb":           545.0,
  "Informacijski i poslovni sustavi_Varaždin":    477.5,
  "Medicina_Rijeka":                              880.0,
  "Medicina_Split":                               855.0,
  "Medicina_Osijek":                              835.0,
  "Pravo_Osijek":                                 545.0,
  "Psihologija_Osijek":                           665.0,
  "Psihologija_Split":                            675.0,
  "Pravo_Split":                                  570.0,
  "Filmska i TV režija_Zagreb":                   842.0,
  "Gluma_Zagreb":                                 685.0,
  "Psihologija_Rijeka":                           735.0,
  "Ekonomija_Rijeka":                             500.0,
  "Građevinarstvo_Split":                         545.0,
  "Arhitektura i urbanizam_Split":                495.0,
  "Ekonomija i poslovna ekonomija_Osijek":        395.0,
  "Psihologija_Zadar":                            710.0,
  "Menadžment_Zadar":                             545.0,
};

/* ─── POLJA I GRADOVI ──────────────────────────────────────────────────── */
export const POLJA = [
  "Sva polja",
  "Medicina i zdravstvo",
  "Tehnika i IT",
  "Prirodne znanosti",
  "Ekonomija i pravo",
  "Društvene i humanističke",
  "Graditeljstvo i arhitektura",
  "Kineziologija i sport",
  "Umjetnost i mediji",
];

export const GRADOVI = [
  "Svi gradovi",
  "Zagreb",
  "Split",
  "Rijeka",
  "Osijek",
  "Varaždin",
  "Pula",
  "Dubrovnik",
  "Zadar",
  "Šibenik",
  "Opatija",
  "Slavonski Brod",
  "Požega",
  "Čakovec",
  "Sisak",
  "Karlovac",
  "Đakovo",
  "Gospić",
  "Vinkovci",
];

/* ─── PERCENTIL DISTRIBUCIJA ─────────────────────────────────────────────
   Aproksimacija na temelju:
   - 32.394 kandidata prijavljenih na studije 2025. (AZVO)
   - Poznatih bodovnih pragova 350+ studija
   - Bimodalna distribucija: gimnazijalci (~41%) + strukovne škole (~59%)
   Napomena: orijentacijska procjena, nije službena statistika NCVVO/AZVO
────────────────────────────────────────────────────────────────────────── */
export const PERCENTIL_DISTRIBUCIJA = [
  [0,   150,  0,    2   ],
  [150, 200,  2,    5   ],
  [200, 250,  5,    10  ],
  [250, 300,  10,   17  ],
  [300, 350,  17,   25  ],
  [350, 400,  25,   35  ],
  [400, 450,  35,   45  ],
  [450, 500,  45,   54  ],
  [500, 550,  54,   62  ],
  [550, 600,  62,   70  ],
  [600, 650,  70,   78  ],
  [650, 700,  78,   85  ],
  [700, 750,  85,   90  ],
  [750, 800,  90,   94  ],
  [800, 850,  94,   97  ],
  [850, 900,  97,   98.5],
  [900, 950,  98.5, 99.5],
  [950, 1000, 99.5, 100 ],
];

export function getPercentil(bodovi) {
  for (const [lo, hi, plo, phi] of PERCENTIL_DISTRIBUCIJA) {
    if (bodovi >= lo && bodovi < hi) {
      const t = (bodovi - lo) / (hi - lo);
      return Math.round((plo + t * (phi - plo)) * 10) / 10;
    }
  }
  if (bodovi >= 950) return 99.9;
  return 0;
}

export function percentilLabel(p) {
  if (p >= 99) return { txt: "Iznimni rezultat", color: "#a78bfa", emoji: "🏆" };
  if (p >= 95) return { txt: "Odličan rezultat", color: "#3ecf6e", emoji: "🌟" };
  if (p >= 85) return { txt: "Iznad prosjeka",   color: "#4b7bff", emoji: "📈" };
  if (p >= 60) return { txt: "Prosječan rezultat",color: "#e9b446", emoji: "📊" };
  if (p >= 40) return { txt: "Ispod prosjeka",   color: "#f05c5c", emoji: "📉" };
  return         { txt: "Nisko",                 color: "#7b82a0", emoji: "💪" };
}