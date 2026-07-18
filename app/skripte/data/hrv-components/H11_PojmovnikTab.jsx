'use client';
import { useState } from "react";

/* ══════════════════════════════════════════════════════
   POJMOVNIK H11 — Stari hrv. pisci (Renesansa)
   63 pojma — React portal component
   ══════════════════════════════════════════════════════ */

const CAT_CFG = {
  knjiz:    { label:"Književnost", color:"var(--gold,#e9b446)",   bg:"rgba(232,201,122,.1)",  border:"rgba(232,201,122,.28)"  },
  stih:     { label:"Stihovi",     color:"#c5a1d9",               bg:"rgba(197,161,217,.1)",  border:"rgba(197,161,217,.28)"  },
  kontekst: { label:"Kontekst",    color:"#4ecdc4",               bg:"rgba(78,205,196,.1)",   border:"rgba(78,205,196,.25)"   },
  djelo:    { label:"Djela",       color:"#cd853f",               bg:"rgba(205,133,63,.12)",  border:"rgba(205,133,63,.28)"   },
  lik:      { label:"Likovi",      color:"#e05252",               bg:"rgba(224,82,82,.1)",    border:"rgba(224,82,82,.25)"    },
};

const POJMOVI = [
  /* ── KONTEKST (16) ── */
  { id:"h11p01", cat:"kontekst", kw:"humanizam renesansa čovjek antika bog fokus znanje",
    word:"Humanizam",
    def:`<b>Intelektualni pokret</b> — čovjek (ne Bog) u centru znanja. Interes za antiku, latinski i grčki. Pisci uče u Italiji, citiraju Vergilija i Petrarcu. Nije ateizam — čovjek je <em>Božje stvorenje</em> sposobno spoznati svijet.` },

  { id:"h11p02", cat:"kontekst", kw:"začinjavci hrv. medievalni svećenici pjesnici marulić tradicija judita posveta",
    word:"Začinjavci",
    def:`<b>Hrv. srednjovjekovni pjesnici-svećenici.</b> Marulić ih navodi u posveti Juditi — od njih preuzima <em>dvostruko rimovani dvanaesterac s prijenosnom rimom</em>. Veza između hrv. middleage i renesanse.` },

  { id:"h11p03", cat:"kontekst", kw:"rasuta bašćina zoranić planine domovina turci patriotski motiv",
    word:"Rasuta bašćina",
    def:`Motiv iz Zoranićevih <em>Planina</em>. Alegorija za <b>razdrobljenu hrv. domovinu</b> pod pritiskom Turaka. Patriotski apel — domovina koja ne može zaštititi samu sebe. ★ Ključan pojam za esej o Zoranićevoj tematici.` },

  { id:"h11p04", cat:"kontekst", kw:"alegorija skriveno preneseno značenje judita oloferno hrvatska turci metafora produžena",
    word:"Alegorija",
    def:`Tekst ima <b>doslovno i preneseno (skriveno) značenje.</b> <em>Judita</em>: Oloferno = Turci, Judita = Hrvatska. <em>Planine — Perivoj od Slave</em>: Hrvatica = hrv. književnost. Alegorija je <em>produžena metafora</em> — razlika je u trajanju.` },

  { id:"h11p05", cat:"kontekst", kw:"poklade karneval sloboda karnevalsko preokretanje uloga novela stanca kontekst",
    word:"Poklade / Karneval",
    def:`Karnevalsko razdoblje <b>slobode i preokretanja društvenih uloga</b> prije Korizme. Ključni kontekst Novele od Stanca: pokladne slobode legitimiraju prevaru mladića nad Stancem. <em>Bez poklada nema Novele</em> — karneval je dramski uvjet komike.` },

  { id:"h11p06", cat:"kontekst", kw:"dubrovačka republika slobodna grad-država vlastela mecenas kazalište književnost",
    word:"Dubrovačka Republika",
    def:`<b>Slobodna grad-država</b> (992.–1808.) s ekonomskim viškom koji financira književnost i kazalište. Vlastela kao mecene. Dubrovački idiom — književni jezik hrv. renesansne drame. Kontekst Novele od Stanca, Dunda Maroja, Skupa.` },

  { id:"h11p07", cat:"kontekst", kw:"kosmografska poslanica marin držić cosimo de medici revolucija prevrat dubrovnik oligarhija",
    word:"Kosmografska poslanica",
    def:`Tajna politička poslanica Marina Držića <b>Cosimu de' Mediciju</b> (1566.) — tražio vojnu pomoć za <em>rušenje dubrovačke oligarhije</em>. Otkriva Držića kao politički angažiranog intelektualca. Prevrat se nikad nije zbio; Držić umire 1567. u Veneciji.` },

  { id:"h11p08", cat:"kontekst", kw:"perivoj od slave zoranić planine vile jabuke hrvatska književnost manifest",
    word:"Perivoj od Slave",
    def:`Epizoda iz Zoranićevih <em>Planina</em>. Alegorijski vrt: 4 vile = 4 nac. književnosti. <b>Hrvatica</b> ima loše jabuke = loše stanje hrv. književnosti. <em>Prvi hrv. književni manifest</em> — 300 godina prije Ilirskog preporoda.` },

  { id:"h11p09", cat:"kontekst", kw:"čakavica čakavski marulić hektorović judita narječje splitska hvarska",
    word:"Čakavica",
    def:`Jedno od triju hrv. narječja. <b>Dominantno u hrv. renesansi</b> — Marulić piše Juditu u splitskoj čakavštini. Hektorović piše hvarski čakavski. Nije normiran — svaki grad govori svoju varijantu.` },

  { id:"h11p10", cat:"kontekst", kw:"reliquiae reliquiarum ostaci ostataka hrvatska mohač turci 1526 historigrafija",
    word:"Reliquiae reliquiarum",
    def:`Latinska sintagma: <b>„ostaci ostataka"</b> — opis položaja Hrvatske nakon Mohača (1526.) i turskih osvajanja. Hrvatska je izgubila veći dio teritorija — ostao je samo uski pojas. Koristi se u hrv. historiografiji i kulturi 16. st.` },

  { id:"h11p11", cat:"kontekst", kw:"curiositas znatiželja istraživački duh humanistički ideal hektorović marulić zoranić",
    word:"Curiositas",
    def:`Lat. — <b>znatiželja, istraživački duh</b>. Temeljni humanistički ideal: čovjek je slobodan i sposoban spoznati svijet vlastitim razumom. Odjek u Hektorovićevom putopisu (opisuje sve što vidi), Zoranićevom putovanju, Marulićevoj latinskoj prozi.` },

  { id:"h11p12", cat:"kontekst", kw:"tvrdalj hektorović hvar palača utvrda humanistički centar",
    word:"Tvrdalj (Hektorović)",
    def:`Utvrda-palača u Starom Gradu na Hvaru, sagradio <em>Petar Hektorović</em>. Danas UNESCO-va baština. <b>Kulturno središte hvarske renesanse</b> — Hektorović je u njemu primao posjetitelje, pisao i sakupljao knjige. Simbol humanističkog mecenatstva.` },

  { id:"h11p13", cat:"kontekst", kw:"ilirski preporod gaj 19. st. narodni preporod zoranić anticipira hrv. književnost",
    word:"Ilirski preporod",
    def:`Hrv. nacionalni kulturni pokret 19. st. (1835.–1850.) — standardizacija hrv. jezika, buđenje nacionalne svijesti. Vođa: Ljudevit Gaj. Zoranićeve <em>Planine</em> (1536.) anticipiraju Preporod za 300 godina — poziv na gradnju hrv. književne tradicije.` },

  { id:"h11p14", cat:"kontekst", kw:"otium slobodno vrijeme humanistički ideal hektorović ribanje kultura razgovor misao",
    word:"Otium",
    def:`Latinski humanistički ideal: <b>slobodno vrijeme</b> posvećeno razmišljanju, čitanju, razgovoru i kulturi. Suprotnost <em>negotiumu</em> (poslu). Hektorovićevo Ribanje je savršeni otium — bijeg od poslova u slobodan prostor mora i razgovora s ribarima.` },

  { id:"h11p15", cat:"kontekst", kw:"negotium posao obveze poslovni život suprotnost otitum hektorović ribanje",
    word:"Negotium",
    def:`Latinski: <b>posao, obveze, poslovni i javni život</b>. Suprotnost <em>otiumu</em>. U Hektorovićevom Ribanju: Hektorović napušta negotium (vlastelinski poslovi u Hvaru) i odlazi u otium (ribarska izlaska). To nije lijenost — to je humanistički program.` },

  { id:"h11p16", cat:"kontekst", kw:"mecenatstvo pokroviteljstvo vlastela dubrovnik mediciji talijanski uzor",
    word:"Mecenatstvo",
    def:`Pokroviteljstvo moćnih osoba nad književnicima i umjetnicima. Talijanski uzor: Mediciji u Firenci. U hrv. renesansi: <b>Dubrovačka vlastela</b> financira kazalište; Hektorović gradi Tvrdalj. Bez mecenatstva nema organizirane kulturne produkcije.` },

  /* ── KNJIZ (20) ── */
  { id:"h11p17", cat:"knjiz", kw:"petrarkizam petrarca lirika gospoja nesretna ljubav dvanaesterac sonet hrv.",
    word:"Petrarkizam",
    def:`Ljubavna lirika po uzoru na Petrarcu. Motivi: idealizirana „gospoja", nesretna ljubav. <b>Hrv. petrarkisti ne pišu sonete — pišu dvanaesterce.</b> I. gen.: Menčetić/Džore Držić + II. gen.: Lucić. Najčešća maturana zamka!` },

  { id:"h11p18", cat:"knjiz", kw:"pastorala pastiri idilično pejzaž ljubav džore držić radmio ljubmir drama",
    word:"Pastorala",
    def:`Književna vrsta s idilično-pastoralnim ambijentem — pastiri razgovaraju o ljubavi. <b>Prva hrv. pastoralna drama:</b> <em>Radmio i Ljubmir</em> (Džore Držić, kraj 15. st.). Tirena (mladi Marin Držić) je pastoralna igra.` },

  { id:"h11p19", cat:"knjiz", kw:"farsa kratka komična drama tipski likovi situacijska komika novela stanca",
    word:"Farsa",
    def:`Kratka komična dramska vrsta — preuveličani tipski likovi, situacijska komika, bez psihologizacije. Novela od Stanca: 1 čin, komika situacije, ne karaktera. <em>Farsa ne sudi — pokazuje.</em>` },

  { id:"h11p20", cat:"knjiz", kw:"bugarštica narodna epska pjesma dugi stih hektorović ribanje zapis usmena tradicija",
    word:"Bugarštica",
    def:`<b>Vrsta hrv. narodne epske pjesme</b> u dugom stihu (15–16 slogova), starija od deseteračkih. Hektorović bilježi: <em>Kraljević Marko i brat mu Andrijaš</em>. Najstariji sačuvani hrv. epski zapisi — dragocjen dokument usmene tradicije.` },

  { id:"h11p21", cat:"knjiz", kw:"plautovska komedija plaut aulularija skup dundo maroje tipski likovi arlecchino",
    word:"Plautovska komedija",
    def:`Komedija po uzoru na Plauta. <em>Skup</em> preuzima radnju iz <em>Aulularije</em>. Tipični likovi: škrtac, mladi zaljubljenac, stari otac, lukavi sluga. Hrv. adaptacija rimske komičke tradicije.` },

  { id:"h11p22", cat:"knjiz", kw:"pokladna igra karnevalska kratka drama novela stanca prigoda zabava",
    word:"Pokladna igra",
    def:`Kratka dramska vrsta za <b>karnevalske svečanosti.</b> Novela od Stanca je pokladna igra: kratka, komična, namijenjena konkretnoj prigodi. <em>Zabava je cilj</em> — nema moralne pouke, nema psihologizacije.` },

  { id:"h11p23", cat:"knjiz", kw:"ep epos narativni stih heroj invokacija homer vergilije judita vazetje sigeta",
    word:"Ep (epos)",
    def:`Dugi narativni stih s herojskom tematikom. Uzori: Homer, Vergilije. Hrv. renesansa: <b>Judita</b> (biblijsko-kršćanski ep, 1501.) i <b>Vazetje Sigeta</b> (povijesni ep, 1584.). Struktura: pjevanja, invokacija muze.` },

  { id:"h11p24", cat:"knjiz", kw:"ribarska ekloga pastoralna poezija idilični opis ribari hektorović ribanje",
    word:"Ribarska ekloga",
    def:`Podovrsta pastoralne poezije — idilični opis ribarskog/seoskog života. Hektorovićevo <em>Ribanje</em> je ribarska ekloga: trodnevni put s ribarima, razgovori i pjesme. Hektorović humanizira žanr — ribari su mudri, ne dekorativni.` },

  { id:"h11p25", cat:"knjiz", kw:"commedia dell arte talijanska improvizacijska komedija pantalone arlecchino tipski likovi držić",
    word:"Commedia dell'arte",
    def:`Talijanska improvizacijska komedija s <b>fiksnim tipskim likovima</b>: Pantalone (škrtac), Arlecchino (lukavi sluga). Utjecaj na Držića — Stanac i mladići odgovaraju ovim tipovima. Razlika od commedia erudite (pisana, ne improvizirana).` },

  { id:"h11p26", cat:"knjiz", kw:"commedia erudita učena komedija plaut terencije skup dundo maroje obrazovana publika",
    word:"Commedia erudita",
    def:`„Učena komedija" — renesansna komedija pisana po uzoru na antičke autore (Plaut, Terencije), namijenjena obrazovanoj publici. <em>Skup</em> i <em>Dundo Maroje</em> su primjeri hrv. commedia erudita.` },

  { id:"h11p27", cat:"knjiz", kw:"katarza aristotel pročišćenje tragedija suosjećanje strah poetika",
    word:"Katarza",
    def:`Aristotel: „<b>pročišćenje</b>" koje gledatelj doživljava kroz tragediju — suosjećanjem i strahom. Pojam Aristotelove <em>Poetike</em>. U hrv. renesansi: nema klasične tragedije — ali Robinja i Judita imaju elemente koji provociraju suosjećanje.` },

  { id:"h11p28", cat:"knjiz", kw:"poslanica epistola pismo hektorović jeronimu bartučeviću marulić papi humanistički žanr",
    word:"Poslanica (epistola)",
    def:`Književna forma — <b>pismo upućeno poznatoj osobi</b>, s književnim pretenzijama. Hektorovićevo <em>Ribanje</em> je poslanica Jeronimu Bartučeviću. Marulićeva <em>Poslanica papi Hadrijanu VI.</em> Humanistički žanr koji kombinira osobno i javno.` },

  { id:"h11p29", cat:"knjiz", kw:"didaskalija scenska uputa dramski tekst scenografija kretanje moderan",
    word:"Didaskalija",
    def:`<b>Scenska uputa u dramskom tekstu</b> — opis scenografije, kretnje likova, tona govora. U hrv. renesansnoj drami još nisu razvijene. <em>Dundo Maroje</em>: Negromant govori o sebi u prologu (monolog, ne didaskalija). Razlika od moderne drame.` },

  { id:"h11p30", cat:"knjiz", kw:"kanconijer petarca laura zbirka lirska ranjinin zbornik antologija",
    word:"Kanconijer",
    def:`Zbirka lirskih pjesama organizirana kao <b>narativ ljubavnog iskustva</b> — po uzoru na Petrarkin <em>Kanconijer</em> (posvećen Lauri). Hrv. analogija: <em>Ranjinin zbornik</em> (1507.) s 820 pjesama.` },

  { id:"h11p31", cat:"knjiz", kw:"dramska ironija publika zna lik ne zna jaz novela stanca komika empatija",
    word:"Dramska ironija",
    def:`Situacija kada <b>publika zna nešto što lik ne zna</b>. U Noveli od Stanca: publika zna da nema „vode od mladosti" — Stanec ne zna. Taj jaz pojačava komički efekt, ali i suosjećanje: <em>smijemo se, ali i žalimo</em>.` },

  { id:"h11p32", cat:"knjiz", kw:"dijalog dramski instrument karakterizacija radnja stanac govor",
    word:"Dijalog (kao dramski instrument)",
    def:`U drami: <b>jedino sredstvo karakterizacije i razvoja radnje</b> — nema pripovijedača. Stanec se karakterizira kroz ono što govori (čakavski, sporije, tužno); mladići kroz brzinu i lukavost dijaloga. <em>Lik jest onako kako govori</em>.` },

  { id:"h11p33", cat:"knjiz", kw:"pastoralna drama džore držić marin tirena arkadija sannazaro pastorale",
    word:"Pastoralna drama",
    def:`Drama s likovima pastira u idiličnom pejzažu — ljubavni razgovori, pjevanje, refleksije. Uzor: Sannazarova <em>L'Arcadia</em>. Hrv. primjeri: Džore Držić <em>Radmio i Ljubmir</em> (prva hrv. pastoralna drama) i Marinova <em>Tirena</em>.` },

  { id:"h11p34", cat:"knjiz", kw:"invokacija muze epska konvencija homer vergilije marulić bog judita zaziva",
    word:"Invokacija muze",
    def:`Epska konvencija: pjesnik na početku epa <b>zaziva muzu</b> ili Boga da mu pomogne pisati. Marulić u Juditi zaziva Boga: <em>„Tko mi da vrist razum..."</em> Nasljeđuje antičku epsku tradiciju (Homer, Vergilije) ali je kristijanizira.` },

  { id:"h11p35", cat:"knjiz", kw:"in medias res sredina radnje retrogradno ep latinski",
    word:"In medias res",
    def:`Latinski — <b>„u sredinu stvari"</b>. Epska tehnika: priča počinje u sredini radnje, prethodne događaje saznajemo retrogradno. Vergilije, Homer. Prisutno i u strukturi Judite (priča počinje Holofernovom vojnom, ne od početka biblijske priče).` },

  { id:"h11p36", cat:"knjiz", kw:"renesansni individualizam humanistički ideal individua čovjek razvoj hrv. ograničen kršćanski",
    word:"Renesansni individualizam",
    def:`Humanistički ideal: individua je vrijedna sama po sebi. U hrv. renesansi: <em>ograničen</em> — Marulić je individualan ali u kršćanskom okviru; Zoranić piše o Zoranu kao alter egu. <b>Individualizam nije sekularizam</b> — hrv. pisci ostaju duboko kršćanski.` },

  /* ── STIH (11) ── */
  { id:"h11p37", cat:"stih", kw:"dvostruko rimovani dvanaesterac standardni stih hrv. renesansa 12 slogova cesura marulić hektorović menčetić",
    word:"Dvostruko rim. dvanaesterac",
    def:`<b>Standardni stih hrv. renesanse.</b> 12 slogova, cesura po 6. slogu. Rimovanje AA BB ili AB AB (prijenosna rima). Koriste ga Marulić, Hektorović, Menčetić, Novela od Stanca. ★ Najvažniji pojam versifikacije — bez toga nema eseja!` },

  { id:"h11p38", cat:"stih", kw:"sonet 14 stihova dva katrena tercine petrarca talijanski hrv. petrarkisti ne pišu sonet",
    word:"Sonet",
    def:`14-stihna pjesma (2 katrena + 2 tercine). Petrarca ga idealizira. <b>Hrv. petrarkisti NE pišu sonete</b> — pišu dvanaesterce. <em>Najčešća maturana zamka!</em> Pazi: talijanski Petrarca = sonet; hrv. petrarkisti = dvanaesterac.` },

  { id:"h11p39", cat:"stih", kw:"neoplatonizam filozofija ljubav duhovna sila bog ljepota lucić II. gen. petrarkizam",
    word:"Neoplatonizam",
    def:`Filozofija: ljubav je <b>duhovna sila</b> koja uzdiže dušu prema Bogu (Ljepoti). U II. gen. petrarkista (Lucić): ljubav nije samo strast — put prema savršenstvu. Razlika od I. gen. (Menčetić) koji ljubav opisuje senzualno.` },

  { id:"h11p40", cat:"stih", kw:"prijenosna rima ab ab dvanaesterac hrv. marulić začinjavci razlika parna",
    word:"Prijenosna rima",
    def:`Vrsta rime u hrv. dvanaestercu — rim se prenosi AB AB. Marulić je preuzima od <em>začinjavaca.</em> Razlika od parne rime AA BB. Prijenosna rima je karakteristična hrv. renesansna tehnika.` },

  { id:"h11p41", cat:"stih", kw:"gospoja petrarkizam idealizirana žena nedostupna ljubavna lirika menčetić lucić",
    word:"Gospoja",
    def:`Ključni motiv petrarkizma — <b>idealizirana voljena žena</b> koja odbija pjesnika. Nije stvarna osoba — književna projekcija savršenstva. Menčetić: izvor ljubavne boli. Lucić: put prema duhovnom savršenstvu.` },

  { id:"h11p42", cat:"stih", kw:"cesura pauza stih hrv. dvanaesterac šesti slog polastih blažen čas i hip",
    word:"Cesura",
    def:`<b>Pauza u stihu</b> — u hrv. dvanaestercu cesura je po 6. slogu: stih se dijeli na dva polastica po 6 slogova. Npr. <em>„Blažen čas i hip | ki te rodi i mati"</em> — pauza između „hip" i „ki". Važan element ritma.` },

  { id:"h11p43", cat:"stih", kw:"anafora ponavljanje početak stih menčetić blažen stilsko sredstvo petrarkizam",
    word:"Anafora",
    def:`Stilsko sredstvo: <b>ponavljanje iste riječi/sintagme na početku stihova/rečenica</b>. Menčetić: <em>„Blažen čas... blažena kolipka... blažena ti ženska..."</em> — anafora pojačava euforiju. Česta u petrarkizmu i epskoj tradiciji.` },

  { id:"h11p44", cat:"stih", kw:"obgrljena rima abba shema lucić jur nijedna strofa petrarkizam",
    word:"Obgrljena rima",
    def:`Shema rime <b>ABBA</b> — prvi i četvrti stih rimuju, drugi i treći rimuju. Lucić u <em>Jur nijedna na svit vila</em> koristi obgrljenu rimu u drugoj četvorci svake strofe. Razlika od ukrštene rime (ABAB).` },

  { id:"h11p45", cat:"stih", kw:"parna rima aa bb shema hrv. dvanaesterac varijanta",
    word:"Parna rima",
    def:`Shema rime <b>AA BB CC...</b> — susjedni stihovi rimuju. Jedna od varijanti rime u hrv. dvanaestercu. Razlikuj: parna (AA BB), ukrštena (AB AB) i obgrljena (ABBA). U hrv. renesansi se koristi kombinacija, ali prijenosna rima je najkarakterističnija.` },

  { id:"h11p46", cat:"stih", kw:"heksametar šestostopni daktilski antički ep homer vergilije nema hrv. renesansi",
    word:"Heksametar",
    def:`Šestostopni daktilski stih antičkih epova (Homer, Vergilije). <b>Nije prisutan u hrv. renesansi</b> — Marulić piše dvanaesterce, ne heksametar. Pazi: antički ep = heksametar; hrv. ep = dvostruki dvanaesterac.` },

  { id:"h11p47", cat:"stih", kw:"apostrofa direktno obraćanje predmet apstraktan petrarkizam lirski monolog",
    word:"Apostrofa",
    def:`Stilsko sredstvo: <b>direktno obraćanje osobi, predmetu ili apstraktnoj ideji</b> koja nije prisutna ili nije živa. U petrarkizmu: pjesnik se obraća gospoji, Amoru, Bogu ili Sudbini. Apostrofa čini lirski monolog živim.` },

  /* ── DJELO (10) ── */
  { id:"h11p48", cat:"djelo", kw:"judita ep marulić 1501 1521 šest pjevanja 2126 dvanaesterac splitska čakavština alegorija",
    word:"Judita",
    def:`Ep Marka Marulića. Dovršena <b>1501.</b>, tiskana 1521. 6 pjevanja, 2126 dvanaesteraca, splitska čakavština. Alegorija: Judita = Hrvatska; Oloferno = Turci. <em>★ OBVEZATNO 2026.</em>` },

  { id:"h11p49", cat:"djelo", kw:"novela od stanca marin držić 1550 farsa pokladna igra čin prizori dvanaesterci",
    word:"Novela od Stanca",
    def:`Marin Držić, <b>1550.</b> Farsa / pokladna igra. 1 čin, 7 prizora, dvanaesterci. Mladi nasamare Stanca. Opreke: mlado–staro, vlastela–seljak. <em>★ OBVEZATNO 2026.</em>` },

  { id:"h11p50", cat:"djelo", kw:"planine zoranić roman mješavina proza stihovi 24 poglavlja perivoj od slave",
    word:"Planine (Zoranić)",
    def:`<b>Prvi hrv. roman.</b> Petar Zoranić, mješavina proze i stihova, 24 poglavlja. Zoran putuje Dalmacijom. <em>Perivoj od Slave</em>: 4 vile = 4 nac. književnosti; Hrvatica = loše stanje hrv. knj.` },

  { id:"h11p51", cat:"djelo", kw:"ribanje hektorović 1556 trodnevno putovanje hvar brač šolta ribari bugarštice poslanica",
    word:"Ribanje i ribarsko prigovaranje",
    def:`Petar Hektorović, <b>1556.</b> Ep/putopis/ekloga/poslanica. Trodnevno putovanje Hvar→Brač→Šolta s ribarima Nikolom Zetom i Paskojem Debelim. Bilježi bugarštice — <em>najstariji zapis.</em> Posvećeno Jeronimu Bartučeviću.` },

  { id:"h11p52", cat:"djelo", kw:"ranjinin zbornik rukopis 820 pjesama nikša ranjina 1507 menčetić džore držić vetranović",
    word:"Ranjinin zbornik",
    def:`Rukopisna zbirka 820 pjesama, prikupljao <b>Nikša Ranjina od 1507.</b> Autori: Menčetić, Džore Držić, Vetranović. Temeljni izvor za dubrovačku liriku 15.–16. st.` },

  { id:"h11p53", cat:"djelo", kw:"vazetje sigeta brne krnarutić 1584 prvi hrv. povijesni ep nikola šubić zrinski siget 1566",
    word:"Vazetje Sigeta grada",
    def:`Brne Krnarutić, tiskano <b>1584.</b> Dvostruki dvanaesterci. <b>Prvi hrv. povijesni ep</b> — opisuje opsadu Sigeta 1566. i junaštvo Nikole Šubića Zrinskog. Razlika od Judite: <em>nema alegorije — direktan opis stvarnog događaja.</em>` },

  { id:"h11p54", cat:"djelo", kw:"dundo maroje marin držić 1551 prozna drama prolog negromant pohlepa rim sin otac",
    word:"Dundo Maroje",
    def:`Marin Držić, praizvedena <b>1551.</b> 2 prologa + 5 činova, proza, dubrovački idiom. Radnja u Rimu. Dundo traži sina Mara koji troši novac s Laurom. <b>Najstarija hrv. prozna drama.</b> Kraj nedostaje — dopunio Mihovil Kombol.` },

  { id:"h11p55", cat:"djelo", kw:"skup marin držić 1556 aulularija plaut pohlepa škrtac kćer adriana kamilo",
    word:"Skup (Držić)",
    def:`Marin Držić, praizvedena <b>1556.</b> 5 činova, proza. Plautovska komedija po uzoru na <em>Aululariju</em>. Stari škrtac Skup želi udati kćer Adrianu za Zlatikuma, ali je ona zaručena za mladog Kamila. <b>Kritika pohlepe</b> kao dubrovačke vrijednosti.` },

  { id:"h11p56", cat:"djelo", kw:"robinja hanibal lucić 1530 1638 tursko ropstvo drama čini dvanaesterci prva s razrađenim zapletom",
    word:"Robinja (Lucić)",
    def:`Hanibal Lucić, praizvedena <b>1530.</b>, tiskana 1638. 3 čina, dvostruki dvanaesterci. <b>Prva hrv. drama s razrađenim zapletom i individualnim likovima</b>. Tema: tursko ropstvo — Derenčin otkupljuje Robinju od turskog vlasnika.` },

  { id:"h11p57", cat:"djelo", kw:"barok osman gundulić 17 st slijednik renesanse dubrovnik hrv. tradicija",
    word:"Barok (kao slijednik renesanse)",
    def:`Epoha koja slijedi renesansu (17. st.). U hrv. književnosti: <b>Gundulićev Osman</b> (1626.) nastavlja epsku tradiciju Judite i Vazetja. Hrv. renesansa nije završila — ona je pretvorena u barok. Gundulić = most između Držićeve tradicije i baroknog epa.` },

  /* ── LIK (6) ── */
  { id:"h11p58", cat:"lik", kw:"stanac tipski lik glupi seljak trebinje naivnost grad komika novela",
    word:"Stanac — tipski lik",
    def:`Lik „<b>glupog seljaka</b>" iz kazalištne tradicije. Nije individua — <em>tip.</em> Stanac = naivnost, starost, seoska neprilagođenost gradu. Žrtva komičnog zapleta u Noveli. Paralela s Pantaloneom iz commedia dell'arte.` },

  { id:"h11p59", cat:"lik", kw:"judita heroin lik kršćanski ideal hrabra pobožna plemenita alegorija hrvatska bog",
    word:"Judita — lik heroine",
    def:`Udovica iz Betulije. Marulić je oblikuje kao kršćanski ideal: <b>plemenita, hrabra, pobožna.</b> Alegorički: Hrvatska uz Božju pomoć. Njezina ljepota = sredstvo Božjeg plana. Pobjeđuje ne mačem, nego pameću i vjerom.` },

  { id:"h11p60", cat:"lik", kw:"holoferno alegorija turci sultan asirski vojvoda okrutan ohol pohotljiv žudnja propast",
    word:"Holoferno — alegorija",
    def:`Asirski vojvoda u <em>Juditi</em>. Alegorički = <b>turska vojska / sultan.</b> Karakterizacija: okrutan, ohol, pohotljiv. Žudnja prema Juditi postaje njegova propast — sila poražena pameti i vjeri.` },

  { id:"h11p61", cat:"lik", kw:"negromant lik prolog dundo maroje čarobnjak nazbilji nahvao filozofski okvir",
    word:"Negromant (lik u prologu)",
    def:`Lik u prologu <em>Dunda Maroja</em>. Čarobnjak koji uvodi filozofski okvir drame: razlika između <b>„nazbiljskih"</b> (razumnih, poštenih) i <b>„nahvao"</b> (pohlepnih, nerazumnih) ljudi. Negromant nije dio radnje — autorski glas koji uokviruje dramu.` },

  { id:"h11p62", cat:"lik", kw:"ozija lik judita marulić starješina kolebljiv volja predaja betulija kontrast juditi",
    word:"Ozija (lik)",
    def:`Židovski starješina u Marulićevoj <em>Juditi</em>. Predstavlja <b>kolebljivost vodstva</b> — spreman je predati grad Betuliju. Judita ga kritizira zbog gubitka vjere. Kontrast Juditi: dok je on neodlučan, ona djeluje. <em>Simbol slabog vodstva koje treba snažnu osobu.</em>` },

  { id:"h11p63", cat:"lik", kw:"pomet lik dundo maroje lukavi sluga arlecchino commedia inteligentni praktični razum",
    word:"Pomet (lik)",
    def:`Lukavi sluga u <em>Dundu Maroju</em> Marina Držića — <b>najinteligentniji lik drame</b>. Nasljeđuje tradiciju commedia dell'arte (Arlecchino). Pobjeđuje svakog lukavošću, živi od tuđe naivnosti. Simbol praktičnog razuma koji se snalazi u svim situacijama.` },
];

/* ── helpers ── */
function normalize(s){
  return (s||"").toLowerCase()
    .replace(/č|ć/g,"c").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/đ/g,"d").replace(/ð/g,"d")
    .replace(/[\u201e\u201c\u201d"'„<>]/g,"").trim();
}

/* ── CARD ── */
function PojmCard({p}){
  const cfg=CAT_CFG[p.cat];
  const [open,setOpen]=useState(false);
  const [hov,setHov]=useState(false);

  const bStyle=`color:var(--t1,#f4ede5);font-weight:600;font-family:var(--serif,Georgia)`;
  const emStyle=`color:var(--t1,#f4ede5);font-style:italic`;
  const richDef=(p.def||"")
    .replace(/<b>/g,`<b style="${bStyle}">`)
    .replace(/<em>/g,`<em style="${emStyle}">`);

  return(
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      onClick={()=>setOpen(o=>!o)}
      style={{background:"var(--card,#120808)",border:`1px solid ${hov||open?"rgba(205,133,63,.2)":"var(--bdm,#2c1f1f)"}`,borderRadius:12,padding:"14px 16px 12px 18px",cursor:"pointer",transition:"all .2s cubic-bezier(.4,0,.2,1)",position:"relative",overflow:"hidden",transform:hov&&!open?"translateY(-1px)":"none",boxShadow:open?"0 8px 24px rgba(0,0,0,.3)":(hov?"0 4px 12px rgba(0,0,0,.2)":"none")}}>

      {/* stripe */}
      <div style={{position:"absolute",left:0,top:10,bottom:10,width:open||hov?3:2,background:cfg.color,opacity:open?.9:.35,borderRadius:"0 2px 2px 0",transition:"all .2s",pointerEvents:"none"}}/>

      {/* header */}
      <div style={{display:"flex",alignItems:"center",gap:8,paddingRight:24}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:"8px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,padding:"2px 7px",borderRadius:5,color:cfg.color,background:cfg.bg,border:`1px solid ${cfg.border}`,flexShrink:0}}>
          {cfg.label}
        </span>
        <span style={{fontFamily:"'EB Garamond',Georgia,serif",fontSize:15,fontWeight:600,color:"var(--t1,#f4ede5)",lineHeight:1.3}}>
          {p.word}
        </span>
        <span style={{marginLeft:"auto",fontSize:10,color:"var(--t3,#8c7b72)",transform:open?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0}}>▼</span>
      </div>

      {/* definition */}
      {open&&(
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65,marginTop:12,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)"}}
          dangerouslySetInnerHTML={{__html:richDef}}
        />
      )}
    </div>
  );
}

/* ══ MAIN ══ */
export default function PojmovnikH11({onBack, onNext}){
  const [catFilter,setCatFilter]=useState("all");
  const [q,setQ]=useState("");

  const filtered=POJMOVI.filter(p=>{
    const matchCat=catFilter==="all"||p.cat===catFilter;
    const hay=normalize(p.kw+" "+p.word+" "+p.def);
    const matchQ=!q||hay.includes(normalize(q));
    return matchCat&&matchQ;
  });

  const hasActive=catFilter!=="all"||!!q;
  function clearAll(){setCatFilter("all");setQ("");}

  const catCounts={knjiz:20,stih:11,kontekst:16,djelo:10,lik:6};

  const fbtn=(active)=>({
    padding:"6px 14px",fontFamily:"var(--mono,monospace)",fontSize:10,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",
    background:active?"linear-gradient(135deg,rgba(232,201,122,.25),rgba(232,201,122,.1))":"var(--card,#120808)",
    color:active?"var(--gold,#e9b446)":"var(--t2,#c5b8aa)",
    border:`1px solid ${active?"rgba(232,201,122,.3)":"var(--bdm,#2c1f1f)"}`,
    borderRadius:8,cursor:"pointer",transition:"all .18s",display:"inline-flex",alignItems:"center",gap:5,lineHeight:1.4,
    boxShadow:active?"0 2px 10px rgba(232,201,122,.12)":"none",
  });

  return(
    <div style={{padding:"0 0 32px"}}>

      {/* INTRO */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--gold,#e9b446)",marginBottom:8}}>
          📚 Pojmovnik H11 — Stari hrv. pisci · Renesansa
        </div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <b>{POJMOVI.length} pojmova</b> u 5 kategorija: <em>Književnost</em> (20), <em>Stihovi/forma</em> (11), <em>Kontekst</em> (16), <em>Djela</em> (10), <em>Likovi</em> (6).{" "}
          <strong>Pretraži</strong> tipkanjem ili filtriraj klikom. Klikni na pojam za definiciju.
        </div>
      </div>

      {/* CAT FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"0 0 12px"}}>
        <button onClick={()=>setCatFilter("all")} style={fbtn(catFilter==="all")}>
          Svi ({POJMOVI.length})
        </button>
        {Object.entries(catCounts).map(([key,cnt])=>(
          <button key={key} onClick={()=>setCatFilter(key)} style={fbtn(catFilter===key)}>
            {CAT_CFG[key].label} ({cnt})
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <div style={{display:"flex",gap:8,alignItems:"center",margin:"0 0 14px"}}>
        <span style={{fontSize:16,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input
          type="search" value={q} onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži pojmove…"
          aria-label="Pretraži pojmove" autoComplete="off"
          style={{flex:1,padding:"9px 14px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:10,color:"var(--t1,#f4ede5)",fontFamily:"var(--mono,monospace)",fontSize:13,outline:"none"}}
        />
        {q&&<button onClick={()=>setQ("")} aria-label="Očisti" style={{padding:"7px 11px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:8,color:"var(--t2,#c5b8aa)",cursor:"pointer",fontSize:13}}>✕</button>}
      </div>

      {/* COUNT */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:11,color:"var(--t3,#8c7b72)",marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
        <span><b style={{color:"var(--gold,#e9b446)",fontWeight:700}}>{filtered.length}</b> od {POJMOVI.length} pojmova prikazano</span>
        {hasActive&&(
          <button onClick={clearAll} style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",background:"transparent",border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:6,padding:"3px 9px",cursor:"pointer"}}>
            Resetiraj
          </button>
        )}
      </div>

      {/* GRID */}
      {filtered.length===0?(
        <div style={{textAlign:"center",padding:"40px 20px",color:"var(--t3,#8c7b72)",fontFamily:"var(--serif,Georgia)",fontSize:14}}>
          Nema pojmova za „{q}" {catFilter!=="all"?`u kategoriji ${catFilter}`:""}
        </div>
      ):(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:10}}>
          {filtered.map(p=><PojmCard key={p.id} p={p}/>)}
        </div>
      )}

      {/* NAV */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:32,gap:10,flexWrap:"wrap"}}>
        {onBack&&(
          <button onClick={onBack} style={{padding:"10px 20px",background:"var(--card,#120808)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:10,color:"var(--t2,#c5b8aa)",fontFamily:"var(--mono,monospace)",fontSize:11,letterSpacing:"1px",cursor:"pointer",textTransform:"uppercase"}}>
            ← 💬 Citatnik
          </button>
        )}
        {onNext&&(
          <button onClick={onNext} style={{padding:"10px 20px",background:"linear-gradient(135deg,rgba(232,201,122,.2),rgba(232,201,122,.08))",border:"1px solid rgba(232,201,122,.3)",borderRadius:10,color:"var(--gold,#e9b446)",fontFamily:"var(--mono,monospace)",fontSize:11,letterSpacing:"1px",cursor:"pointer",textTransform:"uppercase",marginLeft:"auto"}}>
            ⚡ Drill →
          </button>
        )}
      </div>
    </div>
  );
}
