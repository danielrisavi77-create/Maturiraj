'use client';
import { useState } from "react";

/* ══════════════════════════════════════════════════════
   POJMOVNIK H10 — Postmoderna · Eco · Pavličić
   55 pojmova — 4 kategorije: pojam · autor · djelo · kontekst
   ══════════════════════════════════════════════════════ */

const CAT_CFG = {
  pojam:   { label:"pojam",   color:"var(--gold,#e9b446)",      bg:"var(--dim-go,rgba(232,201,122,.12))", border:"var(--bd-go,rgba(232,201,122,.3))"  },
  autor:   { label:"autor",   color:"var(--teal,#4ecdc4)",      bg:"var(--dim-t,rgba(78,205,196,.12))",  border:"var(--bd-t,rgba(78,205,196,.25))"   },
  djelo:   { label:"djelo",   color:"var(--bronze-l,#cd853f)",  bg:"var(--dim-br,rgba(220,50,47,.08))",  border:"var(--bd-br,rgba(220,50,47,.2))"    },
  kontekst:{ label:"kontekst",color:"#c5a1d9",                  bg:"rgba(197,161,217,.12)",              border:"rgba(197,161,217,.25)"               },
};

const POJMOVI = [
  /* ══ POJMOVI (20) ══ */
  { id:"h10p01", cat:"pojam", kw:"metafikcija meta fikcija samosvjesna proza roman o romanu",
    word:"Metafikcija",
    def:`Proza <b>svjesna sebe kao proze</b>. Roman govori o pisanju romana; lik zna da je u tekstu; autor komentira konstrukciju. Primjeri: Eco <em>Ime ruže</em> (izmišljeni predgovor), Calvino <em>Ako jedne zimske noći putnik</em> (čitatelj kao lik), Ugrešić <em>Štefica Cvek</em> (roman kao šivaći uzorak). Pojam skovao <em>William Gass</em> 1970.` },

  { id:"h10p02", cat:"pojam", kw:"intertekstualnost referenca citat aluzija mreža tekstova kristeva",
    word:"Intertekstualnost",
    def:`Odnos jednog teksta prema drugim tekstovima — kroz <b>citate, aluzije, preuzimanja, parafraze</b>. Pojam skovala <em>Julia Kristeva</em> 1966., oslanjajući se na Bahtina. Postmoderna ne skriva intertekstualnost — slavi je. Ecov Vilim od Baskervillea = Sherlock Holmes + redovnik.` },

  { id:"h10p03", cat:"pojam", kw:"pastiš stil oponašanje hommage stil bez ismijavanja",
    word:"Pastiš",
    def:`<b>Ozbiljno oponašanje</b> tuđeg stila, bez ismijavanja. Hommage majstoru. Različito od parodije. Primjer: Eco piše <em>Ime ruže</em> u stilu srednjovjekovnih kronika — ne kako bi ih ismijao, nego kako bi čitatelj osjetio atmosferu. Krleža u <em>Baladama Petrice Kerempuha</em> koristi pastiš kajkavskog dijalekta.` },

  { id:"h10p04", cat:"pojam", kw:"parodija komična imitacija ismijavanje kritika brešan",
    word:"Parodija",
    def:`<b>Komična imitacija</b> s namjerom ismijavanja ili kritike izvornika. Primjer: Brešan <em>Predstava Hamleta u selu Mrduša Donja</em> parodira Shakespearea (amaterska trupa postavlja Hamleta). Linda Hutcheon: „parodija je imitacija s kritičkom distancom".` },

  { id:"h10p05", cat:"pojam", kw:"fragmentacija kolaž razbijanje narativ linearnost",
    word:"Fragmentacija",
    def:`Odbijanje linearnog pripovijedanja. Tekst se <b>lomi u kolaž</b> — kratke scene, skokovi u vremenu, različiti glasovi, prekinute rečenice. Odraz fragmentirane stvarnosti 20./21. st. Primjeri: Calvino, Ugrešić, Pynchon. U hrvatskoj književnosti anticipira je Šimić (kratki stih).` },

  { id:"h10p06", cat:"pojam", kw:"ironija postmoderna slojevita višeznačna hutcheon",
    word:"Postmoderna ironija",
    def:`Slojevita, <b>višeznačna ironija</b> koja ne razrješava — zadržava suprotnosti bez odluke. Tekst može biti istovremeno ozbiljan i ne-ozbiljan. Čitatelj ne zna „gdje autor stoji" — i to je namjera. Linda Hutcheon: „postmoderna ironija ne ruši — zadržava dvojnost bez razrješenja".` },

  { id:"h10p07", cat:"pojam", kw:"autoreferencijalnost tekst o sebi borges samokomentiranje",
    word:"Autoreferencijalnost",
    def:`Tekst <b>govori o sebi</b> — komentira svoj stil, strukturu, (ne)mogućnost. Uži pojam od metafikcije. Primjer: Borges u <em>Vrtu razgranatih staza</em> piše o knjizi koja je identična strukturi njegove vlastite proze. Ecova „smrtonosna knjiga" je metafora samog romana.` },

  { id:"h10p08", cat:"pojam", kw:"dekonstrukcija derrida tekst istina nestabilnost značenja",
    word:"Dekonstrukcija",
    def:`Filozofska metoda <em>Jacquesa Derride</em> (1930.–2004.). <b>Demontiranje „istine" teksta</b> pokazivanjem njegovih kontradikcija i nestabilnosti. Teza: svaki tekst ima protiv-tekst u sebi. „Nema ničega izvan teksta" (<em>O gramatologiji</em>, 1967.). Teorijska pozadina postmoderne književnosti.` },

  { id:"h10p09", cat:"pojam", kw:"simulakrum baudrillard kopija original disneyland",
    word:"Simulakrum",
    def:`Pojam <em>Jeana Baudrillarda</em>: <b>kopija koja više ne predstavlja original</b>, jer original ne postoji ili više nije važan. Disneyland = simulakrum Amerike. U književnosti: izmišljeni „povijesni izvori", fiktivne kronike. Borges u <em>Tlön, Uqbar</em> stvara enciklopediju izmišljenog svijeta koja utječe na stvarni svijet.` },

  { id:"h10p10", cat:"pojam", kw:"kraj velikih naracija lyotard metanaracija ideologija",
    word:"Kraj velikih naracija",
    def:`Pojam <em>Jean-Françoisa Lyotarda</em> iz knjige <em>Postmoderno stanje</em> (1979.). Teza: <b>20. st. više ne vjeruje u jedinstvene ideološke sustave</b> (marksizam, progres, religija kao Jedna Istina). Posljedica u književnosti: otvoreni krajevi, višestruke perspektive, nepouzdani pripovjedači.` },

  { id:"h10p11", cat:"pojam", kw:"smrt autora barthes čitatelj tekst značenje",
    word:"Smrt autora",
    def:`Esej <em>Rolanda Barthesa</em> iz 1967. Teza: <b>autor nije vrhovni autoritet značenja</b> teksta. Tekst je „pletivo citata"; značenje nastaje pri čitanju. „Rođenje čitatelja mora biti plaćeno smrću autora". Temeljna teza postmoderne književne teorije.` },

  { id:"h10p12", cat:"pojam", kw:"nepouzdan pripovjedač booth lažna perspektiva filter",
    word:"Nepouzdani pripovjedač",
    def:`Pripovjedač <b>kojemu ne možemo vjerovati</b> — zbog nehotičnog iskrivljavanja (ludilo, djetinjstvo, sužena perspektiva) ili svjesnog lažiranja. Pojam: <em>Wayne Booth</em>, <em>Retorika fikcije</em>, 1961. U postmoderni pojačano: Kafkin Gregor, Camusov Meursault, Ecov Adso.` },

  { id:"h10p13", cat:"pojam", kw:"otvoreni kraj nerazriješenost čitatelj nosi pitanje",
    word:"Otvoreni kraj",
    def:`Završetak <b>bez konačnog razrješenja</b>. Kod Eca: biblioteka izgara, istina je izgubljena. Kod Pavličića: tko je žena na slici, ostaje nepoznato. Odbijanje „zatvorene forme" klasičnog realizma — postmoderna kaže da stvarnost sama nema jasne krajeve.` },

  { id:"h10p14", cat:"pojam", kw:"miješanje visoko nisko kultura pop akademsko jameson",
    word:"Miješanje visokog i niskog",
    def:`Brisanje granica između „ozbiljne" i „pop" kulture. Eco citira Aristotela i krimi-romane ravnopravno. Ugrešić koristi oglase iz ženskih časopisa kao književni materijal. Jameson u knjizi <em>Postmoderna ili kulturna logika kasnog kapitalizma</em> (1991.) to definira kao središnju postmodernu crtu.` },

  { id:"h10p15", cat:"pojam", kw:"žanrovski hibrid mješavina krimić fantastika roman",
    word:"Žanrovski hibrid",
    def:`Djelo koje <b>istovremeno pripada više žanrova</b> — krimić + filozofski roman + gotika itd. Ecovo <em>Ime ruže</em> = krimić + povijesni roman + teološka rasprava. Pavličićev <em>Večernji akt</em> = krimić + fantastika + psihološki roman.` },

  { id:"h10p16", cat:"pojam", kw:"roman u romanu ugniježđenje meta okvir priča",
    word:"Roman u romanu",
    def:`Struktura <b>gdje jedan narativ sadrži drugi</b>. Eco: Adsovo pripovijedanje sadrži rasprave, dijelove kronike, tumačenja knjiga. Calvino: roman sadrži 10 romana. Varijanta metafikcije koja naglašava <b>ugniježđenje</b>.` },

  { id:"h10p17", cat:"pojam", kw:"palimpsest genette tekst tekst transtekstualnost",
    word:"Palimpsest",
    def:`Srednjovjekovni rukopis na kojem je <b>prethodni tekst izbrisan i preko njega napisan novi</b>, ali stari se nazire. Metafora za intertekstualnost. <em>Gérard Genette</em> u <em>Palimpsestima</em> (1982.) razvija teoriju transtekstualnosti — 5 tipova odnosa tekst-tekst.` },

  { id:"h10p18", cat:"pojam", kw:"hiperrealnost baudrillard stvarnost simulacija",
    word:"Hiperrealnost",
    def:`Baudrillardov pojam — <b>stanje u kojem simulacija postaje „stvarnija" od stvarnosti</b>. TV reklame, reality-show, virtualni svjetovi. U postmodernoj književnosti: Eco, DeLillo, Pavličić (slika koja mijenja stvarnost).` },

  { id:"h10p19", cat:"pojam", kw:"borgesovska fantastika nemoguće pravilo realistički",
    word:"Borgesovska fantastika",
    def:`Stil pisanja koji <b>ubacuje jedno nemoguće pravilo u inače realistički svijet</b> i tretira ga kao prirodno. Borges: beskrajne biblioteke, jezici koji mijenjaju stvarnost. U hrvatskoj književnosti: Pavličić (slika koja stari), Tribuson, Damir Miloš.` },

  { id:"h10p20", cat:"pojam", kw:"citatnost mreža citata barthes pletivo glasova",
    word:"Citatnost",
    def:`Srodan pojam intertekstualnosti: <b>tekst kao mreža citata</b> (Barthes: „pletivo glasova"). Postmoderna normalizira citiranje bez navodnika — aluzije, parafraze, stilska preuzimanja postaju dio tkiva teksta.` },

  /* ══ AUTORI (14) ══ */
  { id:"h10p21", cat:"autor", kw:"borges jorge luis argentina fikcije alef babilonska biblioteka",
    word:"Jorge Luis Borges",
    def:`Argentinski pisac (1899.–1986.), <b>prekursor postmoderne</b>. Glavna djela: <em>Fikcije</em> (1944.), <em>Alef</em> (1949.). Majstor kratke priče, labirinata, beskonačnih biblioteka. Bio slijep od 1955. Utjecaj na Eca (Jorge od Burgosa = hommage), Pavličića, Tribusona.` },

  { id:"h10p22", cat:"autor", kw:"eco umberto italija semiotika ime ruže foucaultovo njihalo",
    word:"Umberto Eco",
    def:`Talijanski semiotičar i romanopisac (1932.–2016.). Prof. u Bologni. Romani: <em>Ime ruže</em> (1980.), <em>Foucaultovo njihalo</em> (1988.), <em>Baudolino</em> (2000.). Teorijski radovi: <em>Otvoreno djelo</em> (1962.), <em>Postille uz Ime ruže</em> (1983.). <b>Sam teoretičar postmoderne</b> — roman piše da demonstrira teoriju.` },

  { id:"h10p23", cat:"autor", kw:"calvino italo italija nevidljivi gradovi oulipo metafikcija",
    word:"Italo Calvino",
    def:`Talijanski pisac (1923.–1985.). Glavna djela: <em>Nevidljivi gradovi</em> (1972.), <em>Ako jedne zimske noći putnik</em> (1979.), <em>Kozmikomike</em> (1965.). Majstor <b>fragmentarne forme i metafikcije</b>. Član pokreta <em>OuLiPo</em>.` },

  { id:"h10p24", cat:"autor", kw:"kundera milan češka französka lakoća postojanja esejirani",
    word:"Milan Kundera",
    def:`Češko-francuski pisac (1929.–2023.). Nakon 1968. emigrirao u Francusku. Glavna djela: <em>Nepodnošljiva lakoća postojanja</em> (1984.), <em>Šala</em> (1967.), teorijski <em>Umijeće romana</em> (1986.). <b>Eseistički roman</b> — narativ prošaran filozofskim digresijama.` },

  { id:"h10p25", cat:"autor", kw:"beckett samuel irska drama apsurd godot beckett",
    word:"Samuel Beckett",
    def:`Irsko-francuski pisac (1906.–1989.), Nobel 1969. <em>Čekajući Godota</em> (1953.), <em>Kraj igre</em> (1957.). Drama apsurda — <b>anticipira postmodernu</b>. U NCVVO izbornom popisu.` },

  { id:"h10p26", cat:"autor", kw:"pavličić pavao hrvatska večernji akt borgesovac",
    word:"Pavao Pavličić",
    def:`Hrvatski pisac i profesor komparativne književnosti (roð. 1946.). <b>Središnja figura hrvatske postmoderne</b>. Glavna djela: <em>Večernji akt</em> (1981.), <em>Koraljna vrata</em> (1990.), <em>Rukoljub</em> (eseji). Borgesovska linija hrvatske proze.` },

  { id:"h10p27", cat:"autor", kw:"ugrešić dubravka hrvatska feministička štefica cvek emigrirala",
    word:"Dubravka Ugrešić",
    def:`Hrvatska spisateljica (1949.–2023.). Glavna djela: <em>Štefica Cvek u raljama života</em> (1981.), <em>Forsiranje romana-reke</em> (1988.), <em>Muzej bezuvjetne predaje</em>. <b>Feministička postmoderna</b>, pop-kulturni kolaž. Emigrirala 1993.` },

  { id:"h10p28", cat:"autor", kw:"tribuson goran hrvatska krimić noir",
    word:"Goran Tribuson",
    def:`Hrvatski pisac (1948.–2017.). Jedan od „borgesovaca" hrvatske postmoderne. <em>Povijest pornografije</em> (1988.), <em>Polagana predaja</em>, autor krimi-serije o Nikoli Banica.` },

  { id:"h10p29", cat:"autor", kw:"šoljan antun kratki izlet most moderna postmoderna",
    word:"Antun Šoljan",
    def:`Hrvatski pisac (1932.–1993.). <em>Kratki izlet</em> (1965.) — rana anticipacija postmoderne. <em>Brod u boci</em>, <em>Drugi ljudi na Mjesecu</em> (1979.). Prevoditelj, urednik Krugova. Most između moderne i postmoderne u hrvatskoj prozi.` },

  { id:"h10p30", cat:"autor", kw:"novak slobodan mirisi zlato tamjan introspektivna proza",
    word:"Slobodan Novak",
    def:`Hrvatski pisac (1924.–2016.). <em>Mirisi, zlato i tamjan</em> (1968.) — u NCVVO izbornom popisu. <b>Majstor introspektivne proze</b>. Teme starenja, pamćenja, raspada.` },

  { id:"h10p31", cat:"autor", kw:"mihalić slavko poezija krugovaši refleksivna",
    word:"Slavko Mihalić",
    def:`Hrvatski pjesnik (1928.–2007.), član <b>krugovaša</b>. U NCVVO izbornom popisu. Intelektualna, refleksivna poezija — <b>anticipira postmoderni senzibilitet</b>.` },

  { id:"h10p32", cat:"autor", kw:"dragojević danijel poezija metafizička borgesovska",
    word:"Danijel Dragojević",
    def:`Hrvatski pjesnik (roð. 1934.). Majstor metafizičke poezije, <b>bliske borgesovskoj liniji</b>. U NCVVO izbornom popisu. Hermetičan, filozofski stil.` },

  { id:"h10p33", cat:"autor", kw:"brešan ivo hamlet mrduša parodija satira",
    word:"Ivo Brešan",
    def:`Hrvatski dramatičar (1936.–2017.). <em>Predstava Hamleta u selu Mrduša Donja</em> (1965.), <em>Nečastivi na Filozofskom fakultetu</em>. <b>Parodija kao glavna tehnika</b> — u NCVVO izbornom popisu.` },

  { id:"h10p34", cat:"autor", kw:"pynchon thomas amerika dražba gravity rainbow",
    word:"Thomas Pynchon",
    def:`Američki pisac (roð. 1937.). <em>Dražba br. 49</em> (1966.), <em>Gravity's Rainbow</em> (1973.). <b>Ikoničan postmodernist</b> — enciklopedijske, fragmentarne, paranoidne proze. Skriva se od javnosti (nema fotografija).` },

  /* ══ DJELA (11) ══ */
  { id:"h10p35", cat:"djelo", kw:"ime ruže eco 1980 krimić samostan vilim adso biblioteka",
    word:"Ime ruže (1980.)",
    def:`Roman Umberta Eca. <b>Paradigmatski postmoderni krimić</b>. Godina 1327., benediktinski samostan u sjevernoj Italiji. Vilim od Baskervillea istražuje niz ubojstava. U središtu: tajna knjiga — izgubljena Aristotelova <em>Poetika II</em> o komediji. Prodano 50 milijuna primjeraka. Film 1986. (Sean Connery). U NCVVO izbornom popisu.` },

  { id:"h10p36", cat:"djelo", kw:"večernji akt pavličić 1981 slika brodnjak stari",
    word:"Večernji akt (1981.)",
    def:`Roman Pavla Pavličića. Slikar Krsto Brodnjak otkrije <b>sliku akta koja stari iz godine u godinu</b>. Opsjedljiva potraga za istinom. <em>Žanrovski hibrid</em> — krimić + fantastika + psihološki roman. Otvoreni kraj. Jedno od ključnih djela hrvatske postmoderne.` },

  { id:"h10p37", cat:"djelo", kw:"štefica cvek ugrešić 1981 šivaći roman film",
    word:"Štefica Cvek u raljama života (1981.)",
    def:`Roman Dubravke Ugrešić. <b>Roman kao šivaći uzorak</b> — poglavlja su „uzorci". Kombinira oglase, recepte, citate iz sentimentalnih romana. Feministička postmoderna u hrvatskom izdanju. Film 1984. (Rajko Grlić).` },

  { id:"h10p38", cat:"djelo", kw:"fikcije borges 1944 kratke priče vrt labirint babilonska",
    word:"Fikcije (1944.)",
    def:`Zbirka kratkih priča Borgesa. Sadrži: <em>Vrt razgranatih staza</em>, <em>Babilonska biblioteka</em>, <em>Tlön, Uqbar, Orbis Tertius</em>. <b>Temelj moderne fantastike i prekursor postmoderne.</b> Svaka priča poigrava se s pojmom fikcije, knjige, beskraja.` },

  { id:"h10p39", cat:"djelo", kw:"ako jedne zimske noći putnik calvino 1979 čitatelj meta",
    word:"Ako jedne zimske noći putnik (1979.)",
    def:`Roman Itala Calvina. <b>Roman u kojem je čitatelj lik</b>. Sastoji se od 10 početaka različitih romana koji nikad ne budu dovršeni. <em>Paradigma metafikcije.</em> Poglavlja naizmjence: čitatelj traži nastavak + „sljedeći roman".` },

  { id:"h10p40", cat:"djelo", kw:"nepodnošljiva lakoća kundera 1984 esejirani praško proljeće",
    word:"Nepodnošljiva lakoća postojanja (1984.)",
    def:`Roman Milana Kundere. <b>Eseistički roman</b> — filozofski digresi o Nietzscheovoj „vječnoj povratnosti" prošivani narativom. Praško proljeće 1968. Likovi: Tomáš, Tereza, Sabina, Franz. Film 1988. (Philip Kaufman).` },

  { id:"h10p41", cat:"djelo", kw:"čekajući godota beckett 1953 drama apsurda godot",
    word:"Čekajući Godota (1953.)",
    def:`Drama Samuela Becketta. Vladimir i Estragon čekaju Godota koji nikad ne dolazi. <b>Drama apsurda, anticipira postmodernu</b>. „Ništa se ne događa, dvaput". Otvoreni kraj, cirkularna struktura. U NCVVO izbornom popisu.` },

  { id:"h10p42", cat:"djelo", kw:"kratki izlet šoljan 1965 freske anticipacija hr",
    word:"Kratki izlet (1965.)",
    def:`Roman Antuna Šoljana. Grupa arheoloških entuzijasta traži izgubljene srednjovjekovne freske. <b>Rana anticipacija postmoderne u Hrvatskoj.</b> Tema besmisla, opsesivne potrage, izgubljene istine. U NCVVO izbornom popisu.` },

  { id:"h10p43", cat:"djelo", kw:"mirisi zlato tamjan novak 1968 introspektivna starac",
    word:"Mirisi, zlato i tamjan (1968.)",
    def:`Roman Slobodana Novaka. Starac na otoku njeguje paraliziranu gospođu Mardiganu. <b>Introspektivna, fragmentarna proza</b> — predpostmoderna u hrvatskoj književnosti. U NCVVO izbornom popisu.` },

  { id:"h10p44", cat:"djelo", kw:"predstava hamleta mrduša brešan parodija shakespeare",
    word:"Predstava Hamleta u selu Mrduša Donja (1965.)",
    def:`Drama Ive Brešana. <b>Parodija Shakespearea</b> + politička satira. Seljačka trupa postavlja Hamleta s katastrofalnim i groteskno-komičnim rezultatima. U NCVVO izbornom popisu. Školski primjer parodije.` },

  { id:"h10p45", cat:"djelo", kw:"foucaultovo njihalo eco 1988 zavjera fikcija simulakrum",
    word:"Foucaultovo njihalo (1988.)",
    def:`Drugi roman Umberta Eca. Tri urednika izmišljaju teoriju zavjere — teorija počinje oblikovati stvarnost. <b>Simulakrum u djelovanju</b>. Eksplicitna meta-refleksija o fikciji i vjerovanju.` },

  /* ══ KONTEKST (10) ══ */
  { id:"h10p46", cat:"kontekst", kw:"quorum časopis 1984 zagreb postmoderna generacija",
    word:"Časopis Quorum",
    def:`Hrvatski književni časopis pokrenut <b>1984.</b> u Zagrebu. Urednici: Branko Čegec, Zvonko Maković. <b>Središnja platforma hrvatske postmoderne generacije</b> („kvorumaši"). Prekidao monopol starijih časopisa (<em>Forum</em>, <em>Republika</em>). Otvorio prostor za mlade postmoderne autore.` },

  { id:"h10p47", cat:"kontekst", kw:"barthes roland francuska teorija smrt autora mitologije",
    word:"Roland Barthes",
    def:`Francuski književni teoretičar (1915.–1980.). Glavna djela: <em>Mitologije</em> (1957.), <em>Smrt autora</em> (1967.), <em>S/Z</em> (1970.). <b>Jedan od temelja postmoderne teorije</b>. Razvio strukturalističko i poststrukturalističko čitanje.` },

  { id:"h10p48", cat:"kontekst", kw:"lyotard jean françois postmoderno stanje nevjerica naracije",
    word:"Jean-François Lyotard",
    def:`Francuski filozof (1924.–1998.). <em>Postmoderno stanje</em> (1979.) — <b>filozofska dijagnoza postmoderne</b>. Teza: „nepovjerenje u velike naracije". Knjiga naručena od quebečke vlade kao izvještaj o stanju znanja — postala manifest.` },

  { id:"h10p49", cat:"kontekst", kw:"kristeva julia bugarska intertekstualnost bahtin semiotiké",
    word:"Julia Kristeva",
    def:`Bugarsko-francuska teoretičarka (roð. 1941.). <b>Skovala pojam intertekstualnost</b> 1966. u eseju o Bahtinu. <em>Semiotiké</em> (1969.), <em>Revolucija poetskog jezika</em> (1974.). Veza strukturalizma, psihoanalize i feminizma.` },

  { id:"h10p50", cat:"kontekst", kw:"derrida jacques dekonstrukcija nema ničega izvan teksta",
    word:"Jacques Derrida",
    def:`Francusko-alžirski filozof (1930.–2004.). <b>Osnivač dekonstrukcije</b>. Glavna djela: <em>O gramatologiji</em> (1967.), <em>Pismo i razlika</em> (1967.). Teza: „nema ničega izvan teksta". Teorijska okosnica postmodernog pristupa književnosti.` },

  { id:"h10p51", cat:"kontekst", kw:"baudrillard jean simulakrum hiperrealnost matrix",
    word:"Jean Baudrillard",
    def:`Francuski filozof (1929.–2007.). <em>Simulakrum i simulacija</em> (1981.), <em>Amerika</em> (1986.). <b>Teoretičar hiperrealnosti</b>. Utjecaj na film (<em>Matrix</em>), književnost (DeLillo, Pavličić), umjetnost.` },

  { id:"h10p52", cat:"kontekst", kw:"foucault michel moć diskurz nadzor kazna",
    word:"Michel Foucault",
    def:`Francuski filozof i povjesničar (1926.–1984.). <em>Riječi i stvari</em> (1966.), <em>Arheologija znanja</em> (1969.), <em>Nadzor i kazna</em> (1975.). <b>Analiza odnosa moći i diskurza</b>. Eco mu posvećuje naziv drugog romana (Foucaultovo njihalo — fizičar, ne filozof, ali ironija je namjerna).` },

  { id:"h10p53", cat:"kontekst", kw:"jameson fredric marksistička analiza kapitalizam pastiš",
    word:"Fredric Jameson",
    def:`Američki teoretičar (roð. 1934.). <em>Postmoderna ili kulturna logika kasnog kapitalizma</em> (1984. esej, 1991. knjiga). <b>Marksistička analiza postmoderne</b>: postmoderna = estetika kasnog kapitalizma. Razlikuje pastiš i parodiju.` },

  { id:"h10p54", cat:"kontekst", kw:"hutcheon linda kanada parodija postmodernizam poetika",
    word:"Linda Hutcheon",
    def:`Kanadska teoretičarka (roð. 1947.). <em>A Theory of Parody</em> (1985.), <em>Poetics of Postmodernism</em> (1988.). <b>Razradila teoriju postmoderne ironije i parodije</b> kao kritičkih praksi, ne destruktivnih.` },

  { id:"h10p55", cat:"kontekst", kw:"poststrukturalizam teorija derrida foucault barthes kristeva",
    word:"Poststrukturalizam",
    def:`Filozofsko-teorijski pokret od kasnih 1960-ih. Reakcija na strukturalizam (de Saussure, Lévi-Strauss). Glavni predstavnici: <b>Derrida, Foucault, Barthes (kasni), Kristeva, Deleuze</b>. Teorijska podloga postmoderne književnosti. Ključne teze: nestabilnost značenja, moć kroz jezik, kraj subjekta.` },
];

/* ── helpers ── */
function normalize(s) {
  return (s || "").toLowerCase()
    .replace(/č|ć/g, "c").replace(/š/g, "s").replace(/ž/g, "z")
    .replace(/đ/g, "d").replace(/ð/g, "d")
    .replace(/[\u201e\u201c\u201d"'„]/g, "").trim();
}

/* ── CARD ── */
function PojmCard({ p }) {
  const cfg = CAT_CFG[p.cat];
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);

  const bStyle = `color:var(--t1,#f4ede5);font-weight:600;font-family:var(--serif,Georgia)`;
  const emStyle = `color:var(--t1,#f4ede5);font-style:italic`;
  const richDef = p.def
    .replace(/<b>/g, `<b style="${bStyle}">`)
    .replace(/<em>/g, `<em style="${emStyle}">`);

  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => setOpen(o => !o)}
      style={{
        background: "var(--card,#120808)",
        border: `1px solid ${hov || open ? "var(--bd-br,rgba(220,50,47,.3))" : "var(--bdm,#2c1f1f)"}`,
        borderRadius: 12,
        padding: "14px 16px 12px 18px",
        cursor: "pointer",
        transition: "all .2s cubic-bezier(.4,0,.2,1)",
        position: "relative",
        overflow: "hidden",
        transform: hov && !open ? "translateY(-1px)" : "none",
        boxShadow: open ? "0 8px 24px rgba(0,0,0,.3)" : (hov ? "0 4px 12px rgba(0,0,0,.2)" : "none"),
      }}>

      {/* stripe */}
      <div style={{
        position: "absolute", left: 0, top: 10, bottom: 10,
        width: open || hov ? 3 : 2,
        background: cfg.color,
        opacity: open ? .9 : .35,
        borderRadius: "0 2px 2px 0",
        transition: "all .2s",
        pointerEvents: "none",
      }} />

      {/* header row */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 24 }}>
        <span style={{
          fontFamily: "var(--mono,monospace)", fontSize: "8px", letterSpacing: "1.5px",
          textTransform: "uppercase", fontWeight: 700, padding: "2px 7px", borderRadius: 5,
          color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`,
          flexShrink: 0,
        }}>{cfg.label}</span>
        <span style={{
          fontFamily: "'EB Garamond',Georgia,serif", fontSize: 15, fontWeight: 600,
          color: "var(--t1,#f4ede5)",
          lineHeight: 1.3,
        }}>{p.word}</span>
        <span style={{
          marginLeft: "auto", fontSize: 10, color: "var(--t3,#8c7b72)",
          transform: open ? "rotate(180deg)" : "none", transition: "transform .2s",
          flexShrink: 0,
        }}>▼</span>
      </div>

      {/* definition */}
      {open && (
        <div style={{
          fontFamily: "var(--serif,Georgia)", fontSize: 13.5, color: "var(--t2,#c5b8aa)",
          lineHeight: 1.65, marginTop: 12, paddingTop: 10,
          borderTop: "1px solid var(--bdm,#2c1f1f)",
        }}
          dangerouslySetInnerHTML={{ __html: richDef }}
        />
      )}
    </div>
  );
}

/* ══ MAIN ══ */
export default function PojmovnikH10({ onBack, onNext }) {
  const [catFilter, setCatFilter] = useState("all");
  const [q, setQ] = useState("");

  const filtered = POJMOVI.filter(p => {
    const matchCat = catFilter === "all" || p.cat === catFilter;
    const hay = normalize(p.kw + " " + p.word + " " + p.def);
    const matchQ = !q || hay.includes(normalize(q));
    return matchCat && matchQ;
  });

  const hasActive = catFilter !== "all" || !!q;
  function clearAll() { setCatFilter("all"); setQ(""); }

  const catCounts = { pojam: 20, autor: 14, djelo: 11, kontekst: 10 };

  const catBtns = [
    { key: "all",      label: `Svi (${POJMOVI.length})` },
    { key: "pojam",    label: `🔑 Pojmovi (${catCounts.pojam})` },
    { key: "autor",    label: `✒ Autori (${catCounts.autor})` },
    { key: "djelo",    label: `📖 Djela (${catCounts.djelo})` },
    { key: "kontekst", label: `🧠 Kontekst (${catCounts.kontekst})` },
  ];

  const fbtn = (active) => ({
    padding: "6px 14px",
    fontFamily: "var(--mono,monospace)", fontSize: 10, fontWeight: 700, letterSpacing: "1px",
    textTransform: "uppercase",
    background: active ? "linear-gradient(135deg,rgba(232,201,122,.25),rgba(232,201,122,.1))" : "var(--card,#120808)",
    color: active ? "var(--gold,#e9b446)" : "var(--t2,#c5b8aa)",
    border: `1px solid ${active ? "var(--bd-go,rgba(232,201,122,.3))" : "var(--bdm,#2c1f1f)"}`,
    borderRadius: 8, cursor: "pointer", transition: "all .18s",
    display: "inline-flex", alignItems: "center", gap: 5, lineHeight: 1.4,
    boxShadow: active ? "0 2px 10px rgba(232,201,122,.12)" : "none",
  });

  return (
    <div style={{ padding: "0 0 32px" }}>

      {/* INTRO */}
      <div style={{ background: "var(--sur,#0F0605)", border: "1px solid var(--bdm,#2c1f1f)", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
        <div style={{ fontFamily: "var(--mono,monospace)", fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--gold,#e9b446)", marginBottom: 8 }}>
          📚 Pojmovnik H10 — Postmoderna · Eco · Pavličić
        </div>
        <div style={{ fontFamily: "var(--serif,Georgia)", fontSize: 13.5, color: "var(--t2,#c5b8aa)", lineHeight: 1.65 }}>
          <b>55 pojmova</b> u 4 kategorije: <em>pojmovi</em> (postmoderne tehnike · 20), <em>autori</em> (svjetski i HR pisci · 14), <em>djela</em> (ključna postmoderna · 11), <em>kontekst</em> (teoretičari, pokreti · 10).{" "}
          <strong>Pretraži</strong> tipkanjem ili filtriraj klikom. Klikni na pojam za definiciju.
        </div>
      </div>

      {/* CAT FILTERS */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "0 0 12px" }}>
        {catBtns.map(f => (
          <button key={f.key} onClick={() => setCatFilter(f.key)} style={fbtn(catFilter === f.key)}>{f.label}</button>
        ))}
      </div>

      {/* SEARCH */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", margin: "0 0 14px" }}>
        <span style={{ fontSize: 16, color: "var(--gold,#e9b446)" }}>🔍</span>
        <input
          type="search" value={q} onChange={e => setQ(e.target.value)}
          placeholder="Pretraži pojmove…"
          aria-label="Pretraži pojmove" autoComplete="off"
          style={{ flex: 1, padding: "9px 14px", background: "var(--inp,#0F0605)", border: "1px solid var(--bdl,#2c1f1f)", borderRadius: 10, color: "var(--t1,#f4ede5)", fontFamily: "var(--mono,monospace)", fontSize: 13, outline: "none" }}
        />
        {q && <button onClick={() => setQ("")} aria-label="Očisti" style={{ padding: "7px 11px", background: "var(--inp,#0F0605)", border: "1px solid var(--bdl,#2c1f1f)", borderRadius: 8, color: "var(--t2,#c5b8aa)", cursor: "pointer", fontSize: 13 }}>✕</button>}
      </div>

      {/* COUNT */}
      <div style={{ fontFamily: "var(--mono,monospace)", fontSize: 11, color: "var(--t3,#8c7b72)", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
        <span><b style={{ color: "var(--gold,#e9b446)", fontWeight: 700 }}>{filtered.length}</b> od {POJMOVI.length} pojmova prikazano</span>
        {hasActive && (
          <button onClick={clearAll} style={{ fontFamily: "var(--mono,monospace)", fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", color: "var(--t3,#8c7b72)", background: "transparent", border: "1px dashed var(--bdm,#2c1f1f)", borderRadius: 6, padding: "3px 9px", cursor: "pointer" }}>
            Resetiraj
          </button>
        )}
      </div>

      {/* GRID */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--t3,#8c7b72)", fontFamily: "var(--serif,Georgia)", fontSize: 14 }}>
          Nema pojmova za „{q}&quot; {catFilter !== "all" ? `u kategoriji ${catFilter}` : ""}
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 10 }}>
          {filtered.map(p => <PojmCard key={p.id} p={p} />)}
        </div>
      )}

      {/* NAV */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32, gap: 10, flexWrap: "wrap" }}>
        {onBack && (
          <button onClick={onBack} style={{ padding: "10px 20px", background: "var(--card,#120808)", border: "1px solid var(--bdm,#2c1f1f)", borderRadius: 10, color: "var(--t2,#c5b8aa)", fontFamily: "var(--mono,monospace)", fontSize: 11, letterSpacing: "1px", cursor: "pointer", textTransform: "uppercase" }}>
            ← 💬 Citatnik
          </button>
        )}
        {onNext && (
          <button onClick={onNext} style={{ padding: "10px 20px", background: "linear-gradient(135deg,rgba(232,201,122,.2),rgba(232,201,122,.08))", border: "1px solid var(--bd-go,rgba(232,201,122,.3))", borderRadius: 10, color: "var(--gold,#e9b446)", fontFamily: "var(--mono,monospace)", fontSize: 11, letterSpacing: "1px", cursor: "pointer", textTransform: "uppercase", marginLeft: "auto" }}>
            🃏 Flashcards →
          </button>
        )}
      </div>
    </div>
  );
}
