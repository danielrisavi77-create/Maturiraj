'use client';
import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   CITATNIK H11 — Stari hrv. pisci (Renesansa)
   45 citata — React portal component
   ══════════════════════════════════════════════════════ */

const LS_FAV  = "mt.hrv.h11.cit_favs";
const LS_COPY = "mt.hrv.h11.cit_copy";

const CAT_CFG = {
  marulić:    { label:"MARULIĆ",     stripe:"#cd853f",             eye:{ color:"#cd853f",             background:"rgba(205,133,63,.14)",  border:"1px solid rgba(205,133,63,.3)"   }},
  judita:     { label:"JUDITA",      stripe:"#e05252",             eye:{ color:"#f87171",             background:"rgba(224,82,82,.12)",   border:"1px solid rgba(224,82,82,.25)"   }},
  novela:     { label:"NOVELA",      stripe:"var(--gold,#e9b446)", eye:{ color:"var(--gold,#e9b446)", background:"rgba(232,201,122,.12)", border:"1px solid rgba(232,201,122,.3)"  }},
  petrark:    { label:"PETRARKISTI", stripe:"#c5a1d9",             eye:{ color:"#c5a1d9",             background:"rgba(197,161,217,.14)", border:"1px solid rgba(197,161,217,.28)" }},
  zoranić:    { label:"ZORANIĆ",     stripe:"#4ecdc4",             eye:{ color:"#4ecdc4",             background:"rgba(78,205,196,.12)",  border:"1px solid rgba(78,205,196,.25)"  }},
  hektorović: { label:"HEKTOROVIĆ",  stripe:"#6aaa6a",             eye:{ color:"#6aaa6a",             background:"rgba(106,170,106,.14)", border:"1px solid rgba(106,170,106,.28)" }},
  kontekst:   { label:"KONTEKST",    stripe:"#a0a0c0",             eye:{ color:"#b0b0d0",             background:"rgba(160,160,192,.14)", border:"1px solid rgba(160,160,192,.28)" }},
  držić:      { label:"DRŽIĆ",       stripe:"#d4793a",             eye:{ color:"#d4793a",             background:"rgba(212,121,58,.14)",  border:"1px solid rgba(212,121,58,.28)"  }},
};

const CITATI = [
  /* ── MARULIĆ (4) ── */
  { id:"h11c01", cat:"marulić", diff:"basic",    mustKnow:true,
    author:"Marko Marulić", loc:"Judita (posveta), 1501.",
    txt:`„Historiju tuj svedoh na versih, po običaju naših začinjavac i jošće po zakonu onih starih poet."`,
    useHtml:`<em>Ključna rečenica Marulićeve poetike.</em> Navodi <b>dvije tradicije</b>: začinjavce (hrv. medievalni stih) i antičke pjesnike (Vergilije, Ovidije). Za argument o Marulićevoj dvojnoj tradiciji — spaja hrv. i antičku baštinu. ★ MORA napamet.` },

  { id:"h11c02", cat:"marulić", diff:"basic",    mustKnow:false,
    author:"interpretacijska tvrdnja", loc:"bilingvalnost Marulića",
    txt:`„Marulić piše dvama jezicima za dvije publike — latinskim za europske humaniste, hrvatskim za sunarodnjake. Oba pisca su jednako Marulić: jedan govori Europi, drugi govori domovini."`,
    useHtml:`Za argument o <b>europskom dosegu hrv. renesanse</b>. Marulić kao most između Hrvatske i Europe — jedini hrv. pisac 16. st. poznat u Europi za svog života.` },

  { id:"h11c03", cat:"marulić", diff:"advanced", mustKnow:true,
    author:"sintetska tvrdnja", loc:"za usporedni argument o europskom dosegu",
    txt:`„Marulić je paradoks hrv. renesanse: poznatiji je u Europi po latinskim djelima nego po Juditi, a u hrv. književnopovijesnoj tradiciji — poznat isključivo po Juditi. Isti čovjek, dva književna identiteta, dvije publike, dva jezika."`,
    useHtml:`<b>Za napredni argument o Maruliću.</b> Bilingvalnost kao paradoks — europski humanist i hrv. patriot u jednoj osobi. ★ Napamet.` },

  { id:"h11c04", cat:"marulić", diff:"advanced", mustKnow:false,
    author:"interpretacijska tvrdnja", loc:"Marko Marulić, Judita",
    txt:`„Judita nije pobožna priča — to je politički traktat u biblijskom ogrtaču: Bog je na strani Hrvata, i to je jedini argument koji oslabljenu naciju može mobilizirati."`,
    useHtml:`<b>Za napredni argument o Marulićevoj političkoj teologiji.</b> Biblijska priča kao politički manifest. Za A ocjenu na ispitu.` },

  /* ── JUDITA (5) ── */
  { id:"h11c05", cat:"judita", diff:"basic",    mustKnow:true,
    author:"interpretacijska parafraza", loc:"Marko Marulić, Judita (1501./1521.)",
    txt:`„Judita nije samo biblijska heroina — ona je alegorija hrvatskog naroda koji uz Božju pomoć može pobijediti i najvećeg neprijatelja."`,
    useHtml:`<b>Temeljna interpretacijska tvrdnja o Juditi.</b> Judita = Hrvatska, Oloferno = Turci. Alegorija kao poetičko i domoljubno oruđe. ★ Napamet.` },

  { id:"h11c06", cat:"judita", diff:"basic",    mustKnow:false,
    author:"sintetska tvrdnja", loc:"forma Judite kao dokaz humanizma",
    txt:`„2126 dvostruko rimovanih dvanaesteraca — Marulić u Juditi spaja začinjavačku rimu, antičku epsku formu i biblijsku tematiku u jedinstveni hrv. humanistički sintez."`,
    useHtml:`Za argument o <b>Marulićevom stilu i formi</b>. Judita nije samo sadržaj — forma sama dokazuje humanizam. Savršena rečenica za uvod eseja o Juditi.` },

  { id:"h11c07", cat:"judita", diff:"basic",    mustKnow:false,
    author:"interpretacija lika", loc:"Marko Marulić, Judita",
    txt:`„Holofernova slabost — žudnja — postaje oruđem Božje pravednosti; Judita koristi ljepotu ne za pohotnost, nego za spasenje naroda."`,
    useHtml:`Za argument o <b>liku Holofernu i alegoriji moći</b>. Žudnja kao zlodjelo koje se pretvara u instrument dobra — Marulićeva teološka logika.` },

  { id:"h11c08", cat:"judita", diff:"basic",    mustKnow:true,
    author:"originalni naslov iz posvete", loc:"1501.",
    txt:`„Libar Marka Marula Splićanina u kom se uzdarži istorija svete udovice Judit u versih harvacki složena, kako ona ubi vojvodu Oloferna posridu vojske njegove i oslobodi puk israelski od velike pogibili."`,
    useHtml:`<b>Originalni naslov Judite</b> — sam naslov sadrži: autora, žanr (versi = stihovi), jezik (harvacki), radnju i alegorijsku poruku. ★ Napamet — najčešće tražen na ispitu.` },

  { id:"h11c09", cat:"judita", diff:"basic",    mustKnow:true,
    author:"sintetska interpretacija", loc:"Marko Marulić, Judita (1501./1521.)",
    txt:`„Judita pobjeđuje Holoferna ne mačem nego pameću i vjerom — to je Marulićeva poruka: slabiji može pobijediti jačeg uz Božju pomoć. I upravo ta poruka čini Juditu prvim hrv. književnim manifestom nade."`,
    useHtml:`Za argument o <b>teološko-humanističkoj dimenziji Judite</b>. Judita kao dokaz da Hrvatska ima budućnost — ako ima vjere. ★ Napamet.` },

  /* ── NOVELA (6) ── */
  { id:"h11c10", cat:"novela", diff:"basic",    mustKnow:true,
    author:"sintetska tvrdnja", loc:"Marin Držić, Novela od Stanca (1550.)",
    txt:`„Bez poklada nema Novele od Stanca — karnevalske slobode su dramski uvjet koji prevaru čini mogućom, legitimnom i komičnom."`,
    useHtml:`<b>Teza 1 — pokladni kontekst.</b> Za uvod svakog eseja o Noveli od Stanca. ★ Napamet.` },

  { id:"h11c11", cat:"novela", diff:"basic",    mustKnow:true,
    author:"interpretacija lika", loc:"Marin Držić, Novela od Stanca (1550.)",
    txt:`„Stanac gubi jer je star i naivan — mladost u Noveli od Stanca pobjeđuje ne snagom, nego lukavošću i poznavanjem gradskog koda."`,
    useHtml:`<b>Teza 2 — mlado vs. staro.</b> Stanac kao tip naivnog seljaka; mladost kao vrednota renesanse. ★ Napamet.` },

  { id:"h11c12", cat:"novela", diff:"basic",    mustKnow:false,
    author:"sintetska tvrdnja", loc:"Marin Držić, Novela od Stanca",
    txt:`„Farsa ne pita za moral — pita za smijeh. Držić ne sudi tko je u pravu; prikazuje što se događa kad naivnost sretne lukavost u pokladnoj noći Dubrovnika."`,
    useHtml:`Za argument o <b>farsi kao žanru</b>. Farsa = bez moralne osude, bez psihologizacije, bez socijalnog suda. Samo mehanizam komike.` },

  { id:"h11c13", cat:"novela", diff:"basic",    mustKnow:false,
    author:"interpretacija društvenih odnosa", loc:"Marin Držić, Novela od Stanca",
    txt:`„Dubrovački mladići — vlastela. Stanac — seljak iz Trebinja. Klasna nadmoć se iskazuje intelektualnom prijevarom. Dubrovnik 16. st. nagrađuje pamet i poznanstvo."`,
    useHtml:`<b>Teza 3 — komentar dubrovačkog društva.</b> Za argument o klasnoj dimenziji Novele. Farsa kao ogledalo društvenih odnosa.` },

  { id:"h11c14", cat:"novela", diff:"advanced", mustKnow:true,
    author:"interpretacijska tvrdnja", loc:"Marin Držić, Novela od Stanca",
    txt:`„Stanec ne gubi jer je loš čovjek — gubi jer je naivan u gradu koji ne prašta naivnost. I upravo ta rečenica — bez moralne osude, bez sućuti — pokazuje Držićevu dramatičarsku zrelost: prikazati zakone društva bez komentara."`,
    useHtml:`<b>Za napredni esejski argument.</b> Naivnost kao krivica vs. Dubrovnikovi zakoni društva. ★ Napamet.` },

  { id:"h11c15", cat:"novela", diff:"advanced", mustKnow:true,
    author:"interpretacijska tvrdnja", loc:"Marin Držić, Novela od Stanca",
    txt:`„Dramska ironija Novele od Stanca nije slučajna — publika zna da nema vode od mladosti; Stanec ne zna. Taj jaz između publicinog i Stančeva znanja jest mehanizam komike, ali i mehanizam empatije: smijemo se, ali i žalimo."`,
    useHtml:`<b>Za argument o dramskoj ironiji kao etičkom instrumentu farse.</b> Ide dalje od „Novela je komična" — pokazuje suosjećanje unutar smijeha. ★ Napamet.` },

  /* ── DRŽIĆ (3) ── */
  { id:"h11c16", cat:"držić", diff:"basic",    mustKnow:false,
    author:"sintetska karakterizacija", loc:"Marin Držić, Dundo Maroje (1551.)",
    txt:`„Dundo Maroje — najstarija je poznata hrvatska prozna drama, kronika dubrovačke pohlepe i obiteljskog rasapa smještena u Rim."`,
    useHtml:`Za esej o <b>Držićevom opusu</b> šire od Novele. Dundo Maroje = pohlepa, Rim = univerzalna scena, obiteljski rasap = moralna kritika.` },

  { id:"h11c17", cat:"držić", diff:"basic",    mustKnow:false,
    author:"interpretacijska tvrdnja", loc:"Marin Držić, Skup (1556.)",
    txt:`„Skup pohlepi posvećuje sve — blago, zdravlje, kćerinu sreću. Držić nam pokazuje kako novac postaje bog kada nestanu svi ostali bogovi."`,
    useHtml:`Za argument o <b>kritici dubrovačke merkantilne kulture</b>. Skup = Plautova Aulularija u dubrovačkom kontekstu. Pohlepa kao tema Držićevog opusa.` },

  { id:"h11c18", cat:"držić", diff:"advanced", mustKnow:true,
    author:"interpretacijska tvrdnja", loc:"Marin Držić, Kosmografska poslanica (1566.)",
    txt:`„Marin Držić je pisac koji je znao previše — previše o Dubrovniku, o društvu, o moći. I upravo zbog toga je napisao Kosmografsku poslanicu: tko vidi previše jasno, ne može šutjeti."`,
    useHtml:`<b>Za argument o Držiću kao politički angažiranom intelektualcu.</b> Kosmografska poslanica = revolucionarni zahtjev upućen Medicijima. ★ Napamet.` },

  /* ── PETRARKISTI (5) ── */
  { id:"h11c19", cat:"petrark", diff:"basic",    mustKnow:true,
    author:"Šiško Menčetić", loc:"Blažen čas i hip",
    txt:`„Blažen čas i hip ki te rodi i mati, blažena kolipka ka te povi u sviti..."`,
    useHtml:`Tipičan <b>petrarkistički početak</b> — anafora (<em>blažen... blažena...</em>), veličanje gospoje. ★ Napamet — najpoznatiji hrv. petrarkistički stih. Menčetić = I. generacija petrarkizma.` },

  { id:"h11c20", cat:"petrark", diff:"basic",    mustKnow:false,
    author:"Hanibal Lucić", loc:"Jur nijedna na svit vila",
    txt:`„Jur nijedna na svit vila, ljuvenim me ognjem gori, ka bi meni povoljna bila, da mi srce sav dan gori."`,
    useHtml:`<b>II. generacija petrarkizma</b> — osmerce, neoplatonizacija. Lucić: gospoja kao nedostižni ideal, ne konkretna žena. Za usporedbu I. i II. generacije.` },

  { id:"h11c21", cat:"petrark", diff:"basic",    mustKnow:false,
    author:"sintetska tvrdnja", loc:"razlika između Menčetića i Džore Držića",
    txt:`„Dok Menčetić opisuje sve stadije ljubavne strasti — od prvog pogleda do razočaranja — Džore Držić idealizira ljubav kao apstraktni fenomen bez senzualnosti."`,
    useHtml:`Za argument o <b>razlici unutar I. generacije petrarkizma</b>. Menčetić = senzualan, zemaljski; Džore Držić = idealiziran, apstraktan.` },

  { id:"h11c22", cat:"petrark", diff:"basic",    mustKnow:false,
    author:"interpretacijska tvrdnja", loc:"Hanibal Lucić, Jur nijedna na svit vila",
    txt:`„Lucić ne traži gospoju od krvi i mesa — traži savršenu dušu kakvu zemlja ne može ponuditi. To je neoplatonizam u praksi: ljubav kao put prema Bogu, ne prema ženi."`,
    useHtml:`<b>Razlika II. generacije petrarkizma od I.</b> Neoplatonizacija gospoje u Lucića — ljubav više nije strast, nego duhovna uzlaznost.` },

  { id:"h11c23", cat:"petrark", diff:"basic",    mustKnow:false,
    author:"interpretacijska tvrdnja", loc:"hrv. petrarkizam općenito",
    txt:`„Gospoja hrv. petrarkizma je paradoks: žuđena i nedostupna, opisivana i neznana, veličana i ravnodušna. Ona nije osoba — ona je funkcija lirske subjectivnosti. I upravo ta apstrakcija čini je neumoljivim simbolom."`,
    useHtml:`Za argument o <b>ulozi gospoje u hrv. lirici</b>. Tipično ispitno pitanje — gospoja kao književna, ne biografska realnost.` },

  /* ── ZORANIĆ (5) ── */
  { id:"h11c24", cat:"zoranić", diff:"basic",    mustKnow:true,
    author:"Petar Zoranić", loc:"Planine (~1543./1569.)",
    txt:`„Rasuta bašćina — rascjepkana domovina kojoj prijete Turci, koja plače za svojom slobodom i cjelovitošću."`,
    useHtml:`<b>Temeljni patriotski motiv hrv. renesanse.</b> Rasuta bašćina = razdrobljena Hrvatska pod Turcima. ★ Napamet — Teza 5.` },

  { id:"h11c25", cat:"zoranić", diff:"basic",    mustKnow:true,
    author:"parafrazirano iz Perivoja od Slave", loc:"Petar Zoranić, Planine",
    txt:`„Hrvatska vila stoji sramežljiva i tužna, gledajući jabuke svojih sestara — Latinke, Grkinju, Kaldejku — koje su bujnije i ljepše."`,
    useHtml:`<b>Perivoj od Slave — alegorija stanja hrv. književnosti.</b> Jabuke = književna produkcija. Hrvatska = zaostaje. ★ Napamet.` },

  { id:"h11c26", cat:"zoranić", diff:"basic",    mustKnow:false,
    author:"sintetska interpretacijska tvrdnja", loc:"Petar Zoranić, Planine",
    txt:`„Zoranić je u Perivoju od Slave napisao prvi eksplicitni književni manifest na hrvatskom — 300 godina prije Preporoda poziva na gradnju vlastite nacionalne književnosti."`,
    useHtml:`Za argument o <b>značaju Planina</b> za hrv. književnu povijest. Zoranić anticipira Ilirski preporod za 300 godina.` },

  { id:"h11c27", cat:"zoranić", diff:"basic",    mustKnow:false,
    author:"interpretacijska tvrdnja", loc:"Petar Zoranić, Planine",
    txt:`„U Planinama ljubav i domoljublje nisu odvojene teme — Zoranova tuga za Jagom i tuga za rasutom bašćinom su ista tuga: nešto vrijedno se izgubilo, i ne znaš kako vratiti."`,
    useHtml:`Za argument o <b>spajanju ljubavne i patriotske tematike</b> u Planinama. Unikatnost Zoranića — nije ni petrarkist ni epičar, nego sinteza.` },

  { id:"h11c28", cat:"zoranić", diff:"advanced", mustKnow:true,
    author:"interpretacijska tvrdnja", loc:"Petar Zoranić, Planine",
    txt:`„Perivoj od Slave nije tužna slika — to je hrabra rečenica. Zoranić kaže što nitko drugi nije rekao: naša književnost zaostaje i to se mora promijeniti. Da je Perivoj od Slave bio pisan na latinskom, nitko bi ga danas znao."`,
    useHtml:`<b>Za argument o Zoranićevoj ulozi u hrv. književnoj svijesti.</b> Paradoks: piše na hrvatskom o zaostajanju hrv. književnosti — i to je samo po sebi dokaz napretka. ★ Napamet.` },

  /* ── HEKTOROVIĆ (5) ── */
  { id:"h11c29", cat:"hektorović", diff:"basic",    mustKnow:true,
    author:"sintetska karakterizacija", loc:"Petar Hektorović, Ribanje (1556.)",
    txt:`„Hektorović ne alegorijizira — bilježi. U Ribanju je more stvarno, ribari stvarni, bugarštice stvarne. To je renesansna novost: stvarnost kao dovoljan književni predmet."`,
    useHtml:`<b>Ključna razlika Hektorovića od Marulića i Zoranića.</b> Realizam nasuprot alegoriji. ★ Napamet — Teza 6.` },

  { id:"h11c30", cat:"hektorović", diff:"basic",    mustKnow:false,
    author:"sintetska tvrdnja", loc:"Petar Hektorović, Ribanje (1556.)",
    txt:`„Bilježenjem bugarštica i narodnih pjesama ribarâ, Hektorović je sačuvao segment hrv. usmene tradicije koji bi inače bio izgubljen — književnost kao arhiv pamćenja."`,
    useHtml:`Za argument o <b>kulturnoj vrijednosti Ribanja</b>. Hektorović = arhivar usmene tradicije. Teza 6 — realizam kao kulturna služba.` },

  { id:"h11c31", cat:"hektorović", diff:"basic",    mustKnow:false,
    author:"sintetska tvrdnja", loc:"Petar Hektorović, Ribanje",
    txt:`„Hektorović u Ribanju pokazuje što humanizam znači u praksi: nije samo imitacija antičkih uzora — to je i zapisivanje živoga, i razgovor s ribarima kao jednakima, i ljubav prema svakodnevici."`,
    useHtml:`Za argument o <b>Hektorovićevom humanizmu kao životnom programu</b>. Usporedni argument: Marulić (učeni humanizam) vs. Hektorović (praktični humanizam).` },

  { id:"h11c32", cat:"hektorović", diff:"advanced", mustKnow:false,
    author:"sintetska tvrdnja", loc:"Petar Hektorović, Ribanje",
    txt:`„Hektorovićevo Ribanje je jedini hrv. renesansni tekst koji se ne pita što zemlja znači za naciju — koji jednostavno prikazuje kako zemlja izgleda, miriše i zvuči. Ta neumornost prema stvarnom je Hektorovićeva veličina."`,
    useHtml:`<b>Za napredni argument</b> o Hektorovićevom dokumentarnom realizmu. Razlika od svakog drugog pisca — bez alegorije, bez patriotizma, samo opis.` },

  { id:"h11c33", cat:"hektorović", diff:"advanced", mustKnow:false,
    author:"interpretacijska tvrdnja", loc:"Petar Hektorović, Tvrdalj i Ribanje",
    txt:`„Tvrdalj nije samo kuća — to je filozofija pretvorena u kamen: da ljepota, mir i razgovor imaju pravo na trajanje. Dok Dubrovnik trguje, Hektorović gradi. I to je humanistički izbor."`,
    useHtml:`Za argument o <b>humanizmu kao životnom, ne samo literarnom programu</b>. Tvrdalj kao materijalni dokaz Hektorovićeve humanističke filozofije.` },

  /* ── KONTEKST (12) ── */
  { id:"h11c34", cat:"kontekst", diff:"basic",    mustKnow:true,
    author:"sintetska tvrdnja za uvod eseja", loc:"hrv. renesansa kao epoha 'prvoga'",
    txt:`„Renesansa na hrvatskim područjima je doba 'prvoga' — prvog epa (Judita), prvog romana (Planine), prve svjetovne drame (Robinja), prvog hrv. pisca poznatog u Europi (Marulić)."`,
    useHtml:`<b>Idealna za uvod eseja o hrv. renesansi.</b> Pokazuje kumulativnost i jedinstvenost hrv. renesanse. ★ Napamet.` },

  { id:"h11c35", cat:"kontekst", diff:"basic",    mustKnow:false,
    author:"sintetska tvrdnja", loc:"lokalna specifičnost hrv. renesanse",
    txt:`„Turska opasnost nije dekor hrv. renesanse — ona je njena jezgra. Svaki pisac od Marulića do Zoranića piše s tim pritiskom, pa tako i Robinja Lucića koja govori o ropstvu i trgovini ljudima."`,
    useHtml:`Za esej o <b>kontekstu hrv. renesanse</b>. Turska opasnost = specifičnost koja razlikuje hrv. od talijanske renesanse.` },

  { id:"h11c36", cat:"kontekst", diff:"basic",    mustKnow:true,
    author:"sintetska tvrdnja", loc:"razlika hrv. i tal. renesanse",
    txt:`„Dok talijanski petrarkisti pišu sonete, hrv. petrarkisti pišu dvostruko rimovane dvanaesterce — manje formalne strogosti, više melodioznosti i lokalne specifičnosti."`,
    useHtml:`<b>Ključna razlika hrv. i tal. renesanse.</b> ★ Napamet — najčešća matuirana tema usporedbe.` },

  { id:"h11c37", cat:"kontekst", diff:"basic",    mustKnow:false,
    author:"sintetska definicija humanizma", loc:"za teorijsko pitanje",
    txt:`„Humanizam nije odbacivanje Boga — on je premještanje fokusa s Boga na čovjeka kao Božje stvorenje, sposobno razumom i voljom ostvariti svoju svrhu."`,
    useHtml:`Za teorijsko pitanje o <b>humanizmu</b>. Ispravlja pogrešno tumačenje humanizma kao ateizma — najčešća maturana greška.` },

  { id:"h11c38", cat:"kontekst", diff:"basic",    mustKnow:true,
    author:"sintetska tvrdnja o stihu", loc:"za teorijsko pitanje o versifikaciji",
    txt:`„Dvostruko rimovani dvanaesterac nije samo stih — on je identitet hrv. renesanse, veza s tradicijom začinjavaca i signal da hrv. književnost može nositi visoke forme."`,
    useHtml:`<b>Za teorijsko pitanje o versifikaciji.</b> Dvanaesterac = identitet hrv. renesanse. ★ Napamet.` },

  { id:"h11c39", cat:"kontekst", diff:"basic",    mustKnow:false,
    author:"sintetska karakterizacija", loc:"Marin Držić — kompleksnost pisca",
    txt:`„Marin Držić nije samo komediograf — on je i politički mislilac koji tajno piše Medicijima tražeći prevrat, i moralni kritičar koji u prolozima Dunda Maroja razlikuje 'nazbiljske' od 'nahvao' ljudi."`,
    useHtml:`Za esej koji zahtijeva <b>višedimenzionalni portret Držića</b>. Kosmografska poslanica + Dundo Maroje = kompleksnost pisca.` },

  { id:"h11c40", cat:"kontekst", diff:"advanced", mustKnow:true,
    author:"sintetska tvrdnja", loc:"turska opasnost kao zajednički kontekst hrv. renesanse",
    txt:`„Hrvatska je krajem 16. st. bila 'reliquiae reliquiarum' — ostaci ostataka. Tu tugu nosi svaki hrv. renesansni pisac: Marulić alegorijom, Zoranić elegijom, Hektorović šutnjom opustjelih otoka."`,
    useHtml:`<b>Najsnažniji usporedni citat za hrv. renesansu.</b> <em>Reliquiae reliquiarum</em> = ostaci ostataka. ★ Napamet — latinizmi na ispitu uvijek daju dojam.` },

  { id:"h11c41", cat:"kontekst", diff:"basic",    mustKnow:false,
    author:"usporedna tvrdnja", loc:"Robinja vs. Judita",
    txt:`„Robinja Hanibala Lucića jedina je hrv. renesansna drama koja tematizira tursko ropstvo direktno, bez alegorije — time je politički angažiranija od Judite, ali manje poetski ambiciozna."`,
    useHtml:`Za <b>usporedni esej</b> o hrv. renesansnoj književnosti. Direktna (Robinja) vs. alegorijska (Judita) reakcija na tursku opasnost.` },

  { id:"h11c42", cat:"kontekst", diff:"basic",    mustKnow:false,
    author:"interpretacijska tvrdnja", loc:"Petar Hektorović, Ribanje",
    txt:`„Otium nije lijenost — to je humanistički ideal slobodnog vremena posvećenog kulturi, razgovoru i misli. Hektorovićevo Ribanje je otium u čistoj formi: bijeg od vlastelinske svakodnevice prema slobodnom moru i ribarcima koji znaju stvari koje knjige ne mogu naučiti."`,
    useHtml:`Za argument o <b>humanističkom idealu otiuma</b>. Ribanje kao otium u praksi — humanizam koji ne bježi od stvarnosti.` },

  { id:"h11c43", cat:"kontekst", diff:"advanced", mustKnow:true,
    author:"sintetska tvrdnja o hrv. renesansi", loc:"za uvod ili zaključak eseja",
    txt:`„83 godine hrv. renesansne književnosti — od Judite (1501.) do Vazetja Sigeta (1584.) — je putovanje od nade do komemoracije: od alegorije koja poziva na otpor do epa koji slavi žrtvovanu borbu."`,
    useHtml:`<b>Za uvod ili zaključak eseja o hrv. renesansi.</b> Vremenski okvir + interpretacijska os (nada → komemoracija). ★ Napamet.` },

  { id:"h11c44", cat:"kontekst", diff:"advanced", mustKnow:true,
    author:"sintetska tvrdnja", loc:"ključna razlika hrv. i tal. renesanse",
    txt:`„Hrv. renesansa nema renesansnog optimizma — dok Italija slavi čovjeka kao mjeru svih stvari, Hrvatska ga oplakuje pod turskim mačem. Ta razlika od europskog prosjeka jest hrv. renesansna specifičnost."`,
    useHtml:`<b>Za usporedni esej ili uvod koji smješta hrv. renesansu u europski kontekst.</b> ★ Napamet — razlikuje dobrog kandidata od izvrsnog.` },

  { id:"h11c45", cat:"kontekst", diff:"advanced", mustKnow:false,
    author:"sintetska tvrdnja", loc:"za usporedbu s talijanskim mecenatstvom",
    txt:`„Hrv. renesansa nije imala Medície ni stabilne mecene — imala je Dubrovačku Republiku, hvarske plemiće i zadarsku vlastelu koji su iz osobne ljubavi prema kulturi financirali književnost. To je manje stabilno, ali autentičnije od dvorske kulture."`,
    useHtml:`Za usporedbu s <b>talijanskim mecenatstvom</b>. Argument o originalnosti hrv. renesanse bez institucionalnih potpora.` },
];

/* ── helpers ── */
function normalize(s){
  return (s||"").toLowerCase()
    .replace(/č|ć/g,"c").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/đ/g,"d").replace(/ð/g,"d")
    .replace(/[\u201e\u201c\u201d"'„<>]/g,"").trim();
}

/* ── TOAST ── */
function Toast({msg,on}){
  return(
    <div style={{position:"fixed",bottom:24,left:"50%",transform:`translateX(-50%) translateY(${on?0:16}px)`,background:"var(--card,#120808)",color:"var(--t1,#f4ede5)",padding:"10px 18px",borderRadius:10,border:"1px solid rgba(232,201,122,.3)",fontFamily:"var(--serif,Georgia)",fontSize:13,fontStyle:"italic",boxShadow:"0 10px 32px rgba(0,0,0,.45)",opacity:on?1:0,visibility:on?"visible":"hidden",transition:"all .25s cubic-bezier(.4,0,.2,1)",zIndex:9999,pointerEvents:"none"}}>
      {msg}
    </div>
  );
}

/* ── CARD ── */
function CitCard({c, favs, copyCount, onFav, onCopy}){
  const cfg = CAT_CFG[c.cat];
  const isFav = !!favs[c.id];
  const copies = copyCount[c.id]||0;
  const [hov,setHov]=useState(false);

  function doCopy(){
    const text=c.txt+"  — "+c.author+(c.loc?", "+c.loc:"");
    if(navigator.clipboard?.writeText){
      navigator.clipboard.writeText(text).then(()=>onCopy(c.id)).catch(()=>onCopy(c.id));
    } else {
      try{const ta=document.createElement("textarea");ta.value=text;ta.setAttribute("readonly","");ta.style.cssText="position:absolute;left:-9999px";document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);}catch(e){}
      onCopy(c.id);
    }
  }

  const bStyle=`color:var(--t1,#f4ede5);font-weight:600;font-family:var(--serif,Georgia)`;
  const emStyle=`color:var(--t1,#f4ede5);font-style:italic`;
  const richHtml=(c.useHtml||"").replace(/<b>/g,`<b style="${bStyle}">`).replace(/<em>/g,`<em style="${emStyle}">`);

  return(
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:"var(--card,#120808)",border:`1px solid ${hov?"rgba(220,180,80,.25)":"var(--bdm,#2c1f1f)"}`,borderRadius:14,padding:"18px 20px 16px 22px",transition:"all .22s cubic-bezier(.4,0,.2,1)",position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",transform:hov?"translateY(-2px)":"none",boxShadow:hov?"0 8px 24px rgba(0,0,0,.15)":"none",willChange:"transform"}}>

      {/* stripe */}
      <div style={{position:"absolute",left:0,top:14,bottom:14,width:hov?3:2,background:cfg.stripe,opacity:hov?.9:.4,borderRadius:"0 2px 2px 0",transition:"opacity .22s,width .22s",pointerEvents:"none"}}/>

      {/* actions */}
      <div style={{position:"absolute",top:14,right:14,display:"flex",gap:3,zIndex:3,opacity:hov||isFav?1:0,transition:"opacity .22s"}}>
        <button onClick={()=>onFav(c.id)} aria-label={isFav?"Ukloni iz favorita":"Dodaj u favorite"}
          style={{width:26,height:26,borderRadius:"50%",padding:0,border:`1px solid ${isFav?"rgba(232,201,122,.3)":"var(--bdm,#2c1f1f)"}`,background:isFav?"rgba(232,201,122,.12)":"var(--ele,#1e1010)",color:isFav?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,transition:"all .15s"}}>
          {isFav?"★":"☆"}
        </button>
        <div style={{position:"relative"}}>
          <button onClick={doCopy} aria-label="Kopiraj citat"
            style={{width:26,height:26,borderRadius:"50%",padding:0,border:"1px solid var(--bdm,#2c1f1f)",background:"var(--ele,#1e1010)",color:"var(--t3,#8c7b72)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,transition:"all .15s"}}>📋</button>
          {copies>0&&<span style={{position:"absolute",top:-5,right:-5,background:"rgba(205,133,63,.12)",color:"#cd853f",fontSize:7,fontWeight:700,padding:"1px 4px",borderRadius:7,border:"1px solid rgba(205,133,63,.28)",fontFamily:"var(--mono,monospace)",lineHeight:1,minWidth:12,textAlign:"center"}}>{copies}</span>}
        </div>
      </div>

      {/* eyebrow */}
      <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:8,paddingRight:68}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.8px",textTransform:"uppercase",fontWeight:700,padding:"2px 8px",borderRadius:6,...cfg.eye}}>{cfg.label}</span>
        {c.mustKnow&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--gold,#e9b446)",padding:"2px 8px",background:"rgba(232,201,122,.12)",border:"1px solid rgba(232,201,122,.3)",borderRadius:6,fontWeight:700}}>★ Napamet</span>}
        {c.diff==="advanced"&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.5px",textTransform:"uppercase",color:"#cd853f",padding:"2px 8px",background:"rgba(205,133,63,.1)",border:"1px solid rgba(205,133,63,.25)",borderRadius:6,fontWeight:700}}>NAPREDNI</span>}
      </div>

      {/* source */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:10,color:"var(--t3,#8c7b72)",letterSpacing:".5px",marginTop:10,display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",paddingTop:8,borderTop:"1px dashed var(--bdm,#2c1f1f)"}}>
        <b style={{color:"#cd853f",fontWeight:700,fontSize:"10.5px",letterSpacing:".3px"}}>{c.author}</b>
        <span style={{fontStyle:"italic",fontSize:10}}>{c.loc}</span>
      </div>

      {/* quote */}
      <div style={{fontFamily:"'EB Garamond',Georgia,serif",fontSize:16,fontStyle:"italic",fontWeight:400,color:hov?"#fef3e2":"var(--t1,#f4ede5)",lineHeight:1.55,margin:"12px 0 14px",letterSpacing:.15,transition:"color .22s"}}>
        {c.txt}
      </div>

      {/* how to use */}
      <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13,color:"var(--t2,#c5b8aa)",lineHeight:1.6,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)"}}>
        <b style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"#cd853f",display:"block",marginBottom:5}}>Kada koristiti</b>
        <span dangerouslySetInnerHTML={{__html:richHtml}}/>
      </div>
    </div>
  );
}

/* ══ MAIN ══ */
export default function CitatnikH11({onBack, onNext}){
  const [catFilter,  setCatFilter]  = useState("all");
  const [diffFilter, setDiffFilter] = useState("all");
  const [favOnly,    setFavOnly]    = useState(false);
  const [q,          setQ]          = useState("");
  const [favs,       setFavs]       = useState({});
  const [copyCount,  setCopyCount]  = useState({});
  const [toast,      setToast]      = useState({on:false,msg:""});
  const toastTimer=useRef(null);

  useEffect(()=>{
    try{const r=localStorage.getItem(LS_FAV);  if(r)setFavs(JSON.parse(r));      }catch(e){}
    try{const r=localStorage.getItem(LS_COPY); if(r)setCopyCount(JSON.parse(r)); }catch(e){}
  },[]);

  function showToast(msg){clearTimeout(toastTimer.current);setToast({on:true,msg});toastTimer.current=setTimeout(()=>setToast(p=>({...p,on:false})),1800);}
  function handleFav(id){setFavs(prev=>{const n={...prev};if(n[id])delete n[id];else n[id]=true;try{localStorage.setItem(LS_FAV,JSON.stringify(n));}catch(e){}return n;});}
  function handleCopy(id){setCopyCount(prev=>{const n={...prev,[id]:(prev[id]||0)+1};try{localStorage.setItem(LS_COPY,JSON.stringify(n));}catch(e){}return n;});showToast("📋 Citat kopiran");}

  const filtered=CITATI.filter(c=>{
    const matchCat  = catFilter==="all"||(catFilter==="must"?c.mustKnow:c.cat===catFilter);
    const matchDiff = diffFilter==="all"||c.diff===diffFilter;
    const matchFav  = !favOnly||!!favs[c.id];
    const hay       = normalize(c.author+" "+(c.loc||"")+" "+c.txt+" "+c.useHtml);
    const matchQ    = !q||hay.includes(normalize(q));
    return matchCat&&matchDiff&&matchFav&&matchQ;
  });

  const hasActive=catFilter!=="all"||diffFilter!=="all"||favOnly||!!q;
  const favCount=Object.keys(favs).length;
  function clearAll(){setCatFilter("all");setDiffFilter("all");setFavOnly(false);setQ("");}
  function doRandom(){if(!filtered.length)return;const pick=filtered[Math.floor(Math.random()*filtered.length)];document.getElementById("cc-"+pick.id)?.scrollIntoView({behavior:"smooth",block:"center"});showToast("🎲 Slučajan citat");}

  const catCounts={marulić:4,judita:5,novela:6,petrark:5,zoranić:5,hektorović:5,kontekst:12,držić:3};
  const mustCount=CITATI.filter(c=>c.mustKnow).length;

  const fbtn=(active,gold=false)=>({
    padding:"6px 14px",fontFamily:"var(--mono,monospace)",fontSize:10,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",
    background:active?(gold?"linear-gradient(135deg,rgba(232,201,122,.25),rgba(232,201,122,.1))":"linear-gradient(135deg,rgba(205,133,63,.2),rgba(205,133,63,.08))"):"var(--card,#120808)",
    color:active?(gold?"var(--gold,#e9b446)":"#cd853f"):"var(--t2,#c5b8aa)",
    border:`1px solid ${active?(gold?"rgba(232,201,122,.3)":"rgba(205,133,63,.3)"):"var(--bdm,#2c1f1f)"}`,
    borderRadius:8,cursor:"pointer",transition:"all .18s",display:"inline-flex",alignItems:"center",gap:5,lineHeight:1.4,
  });
  const subBtn=(active)=>({
    padding:"4px 10px",fontFamily:"var(--mono,monospace)",fontSize:"9.5px",fontWeight:600,letterSpacing:".8px",textTransform:"uppercase",
    background:active?"rgba(205,133,63,.08)":"transparent",color:active?"#cd853f":"var(--t3,#8c7b72)",
    border:`1px solid ${active?"rgba(205,133,63,.25)":"var(--bdm,#2c1f1f)"}`,borderRadius:6,cursor:"pointer",transition:"all .15s",
  });

  return(
    <div style={{padding:"0 0 32px"}}>

      {/* INTRO */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"#cd853f",marginBottom:8}}>
          💬 Citati — arsenal za esej o hrv. renesansi
        </div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <b>45 citata</b> u 8 kategorija: <em>Marulić</em> (4), <em>Judita</em> (5), <em>Novela od Stanca</em> (6), <em>Petrarkisti</em> (5), <em>Zoranić</em> (5), <em>Hektorović</em> (5), <em>Kontekst</em> (12), <em>Držić</em> (3).{" "}
          Filtriraj po kategoriji ili razini, pokreni <em>🎲 Random</em>.{" "}
          <b>{mustCount} citata</b> označeno je <em>★ Napamet</em>.
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"0 0 10px"}}>
        <button onClick={()=>setCatFilter("all")}  style={fbtn(catFilter==="all")}>Svi ({CITATI.length})</button>
        <button onClick={()=>setCatFilter("must")} style={fbtn(catFilter==="must",true)}>★ Napamet ({mustCount})</button>
        {Object.entries(catCounts).map(([key,cnt])=>(
          <button key={key} onClick={()=>setCatFilter(key)} style={fbtn(catFilter===key)}>
            {CAT_CFG[key].label} ({cnt})
          </button>
        ))}
      </div>

      {/* SUB-FILTERS */}
      <div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"0 0 14px",padding:"10px 14px",background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:10,alignItems:"center"}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginRight:4}}>Razina:</span>
        {[["all","Sve"],["basic","Osnovno"],["advanced","Napredno"]].map(([k,l])=>(
          <button key={k} onClick={()=>setDiffFilter(k)} style={subBtn(diffFilter===k)}>{l}</button>
        ))}
        <button onClick={()=>setFavOnly(p=>!p)} style={{...subBtn(favOnly),color:favOnly?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",border:`1px solid ${favOnly?"rgba(232,201,122,.3)":"var(--bdm,#2c1f1f)"}`,background:favOnly?"rgba(232,201,122,.1)":"transparent"}}>
          {favOnly?"★":"☆"} Favoriti ({favCount})
        </button>
        <button onClick={doRandom} style={{padding:"4px 12px",fontFamily:"var(--mono,monospace)",fontSize:"9.5px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",background:"rgba(232,201,122,.1)",color:"var(--gold,#e9b446)",border:"1px solid rgba(232,201,122,.3)",borderRadius:6,cursor:"pointer",marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:5}}>
          🎲 Random
        </button>
      </div>

      {/* COUNT + RESET */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:11,color:"var(--t3,#8c7b72)",marginBottom:14,letterSpacing:.3,display:"flex",alignItems:"center",gap:10}}>
        <span><b style={{color:"#cd853f",fontWeight:700}}>{filtered.length}</b> od {CITATI.length} citata prikazano</span>
        {hasActive&&<button onClick={clearAll} style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",background:"transparent",border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:6,padding:"3px 9px",cursor:"pointer"}}>Resetiraj</button>}
      </div>

      {/* SEARCH */}
      <div style={{margin:"0 0 16px",display:"flex",gap:8,alignItems:"center"}}>
        <span style={{fontSize:18,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input type="search" value={q} onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži citate (npr. Marulić, Držić, petrarkizam, renesansa, Judita)…"
          aria-label="Pretraži citate" autoComplete="off"
          style={{flex:1,padding:"10px 14px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:10,color:"var(--t1,#f4ede5)",fontFamily:"var(--mono,monospace)",fontSize:13,outline:"none"}}
        />
        {q&&<button onClick={()=>setQ("")} aria-label="Očisti pretragu" style={{padding:"8px 12px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:8,color:"var(--t2,#c5b8aa)",cursor:"pointer",fontSize:14}}>✕</button>}
      </div>

      {/* EMPTY STATE */}
      {filtered.length===0&&(
        <div style={{background:"var(--card,#120808)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:14,padding:"32px 20px",textAlign:"center",fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t3,#8c7b72)",fontStyle:"italic",margin:"16px 0"}}>
          <b style={{color:"#cd853f",fontStyle:"normal",fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,display:"block",marginBottom:8}}>Nema rezultata</b>
          Niti jedan citat ne zadovoljava trenutne filtere. Probaj drugu kombinaciju ili resetiraj.
        </div>
      )}

      {/* GRID */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:14,marginTop:4}}>
        {filtered.map(c=>(
          <div key={c.id} id={"cc-"+c.id}>
            <CitCard c={c} favs={favs} copyCount={copyCount} onFav={handleFav} onCopy={handleCopy}/>
          </div>
        ))}
      </div>

      <Toast msg={toast.msg} on={toast.on}/>

      {/* NAV */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:32}}>
        {onBack&&<button onClick={onBack} style={{background:"none",border:"none",color:"var(--t2,#c5b8aa)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer"}}>← ✍ Esej alat</button>}
        {onNext&&<button onClick={onNext} style={{background:"none",border:"none",color:"#cd853f",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer",fontWeight:600}}>📚 Pojmovnik →</button>}
      </div>
    </div>
  );
}
