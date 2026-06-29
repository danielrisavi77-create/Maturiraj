'use client';
import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   CITATNIK H08 — Preobražaj (Kafka)
   40 citata — v9.1 identičan HTML implementaciji
   svi txt/useHtml → backtick template literals (Turbopack fix)
   ══════════════════════════════════════════════════════ */

const LS_FAV  = "mt.hrv.h08.cit_favs";
const LS_COPY = "mt.hrv.h08.cit_copy";

const CAT_CFG = {
  gregor:     { label:"GREGOR",      stripe:"var(--red,#e05252)",   eye:{ color:"var(--red-l,#f87171)",   background:"var(--dim-r,rgba(224,82,82,.12))",      border:"1px solid var(--bd-r,rgba(224,82,82,.25))"      }},
  greta:      { label:"GRETA",       stripe:"var(--gold,#e9b446)",  eye:{ color:"var(--gold,#e9b446)",    background:"var(--dim-go,rgba(232,201,122,.12))",   border:"1px solid var(--bd-go,rgba(232,201,122,.3))"    }},
  otac:       { label:"OTAC",        stripe:"#6b5555",              eye:{ color:"#a89090",                background:"rgba(107,85,85,.18)",                   border:"1px solid rgba(107,85,85,.32)"                  }},
  majka:      { label:"MAJKA",       stripe:"#c9a878",              eye:{ color:"#d6b890",                background:"rgba(201,168,120,.14)",                 border:"1px solid rgba(201,168,120,.28)"                }},
  prokurist:  { label:"PROKURIST",   stripe:"var(--teal,#4ecdc4)",  eye:{ color:"var(--teal,#4ecdc4)",    background:"var(--dim-t,rgba(78,205,196,.12))",     border:"1px solid var(--bd-t,rgba(78,205,196,.25))"     }},
  podstanari: { label:"PODSTANARI",  stripe:"#a08a8a",              eye:{ color:"#b8a8a8",                background:"rgba(160,138,138,.14)",                 border:"1px solid rgba(160,138,138,.28)"                }},
  dvorkinja:  { label:"DVORKINJA",   stripe:"#9b8068",              eye:{ color:"#b39880",                background:"rgba(155,128,104,.14)",                 border:"1px solid rgba(155,128,104,.28)"                }},
  kafka:      { label:"KAFKA",       stripe:"#e0a077",              eye:{ color:"#e0a077",                background:"rgba(224,160,119,.12)",                 border:"1px solid rgba(224,160,119,.25)"                }},
  kontekst:   { label:"KONTEKST",    stripe:"#c5a1d9",              eye:{ color:"#c5a1d9",                background:"rgba(197,161,217,.12)",                 border:"1px solid rgba(197,161,217,.25)"                }},
};

const CITATI = [
  /* ── GREGOR (13) ── */
  { id:"h08c01", cat:"gregor", diff:"basic",    tez:[1,5], mustKnow:true,
    author:"Kafka", work:"Preobražaj, I. dio — prva rečenica",
    txt:`„Kad se Gregor Samsa jednoga jutra probudio iz nemirnih snova, nađe se u svom krevetu preobražen u golemog kukca."`,
    useHtml:`<b>najpoznatiji početak modernističke proze</b>. <em>In medias res</em> — bez objašnjenja, bez uzročne predigre. Za <b>Tezu 5</b> (groteska, parabola, apsurd) i <b>Tezu 1</b> (alijenacija). MORA se znati napamet — neizostavan u svakom eseju o Preobražaju.` },

  { id:"h08c02", cat:"gregor", diff:"basic",    tez:[1,4], mustKnow:true,
    author:"Kafka", work:"Preobražaj, I. dio — Gregorova prva misao",
    txt:`„O, bože, kakvo li sam naporno zanimanje izabrao! Iz dana u dan na putu."`,
    useHtml:`Gregor neposredno nakon preobrazbe. <em>Prva misao nije šok — nego žalba na posao</em>. Za <b>Tezu 4</b> (birokratska dehumanizacija). <b>Apsurd</b>: čovjek-kukac brine o vlaku. Kafkina ironija u najčistijem obliku.` },

  { id:"h08c05", cat:"gregor", diff:"basic",    tez:[1,7], mustKnow:true,
    author:"Kafka", work:"Preobražaj, III. dio — slušanje violine",
    txt:`„Je li bio životinja, kad ga je glazba tako dirala?"`,
    useHtml:`<b>najvažnija unutarnja rečenica romana</b>. Glazba kao <em>posljednji znak ljudskosti</em>. Za <b>Tezu 7</b> (glazba kao posljednja ljudskost). Ironija — upravo dok dokazuje svoju dušu, obitelj ga odbacuje. MUST-KNOW.` },

  { id:"h08c06", cat:"gregor", diff:"basic",    tez:[2,7], mustKnow:true,
    author:"Kafka", work:"Preobražaj, III. dio — pomisao na obitelj",
    txt:`„Mislio je s nekom nježnošću i ljubavlju na svoju obitelj."`,
    useHtml:`<em>posljednje misli prije smrti</em>. Tragična ironija — <b>Gregor umire voleći one koji su ga uništili</b>. Za <b>Tezu 2</b> (krhkost veza) i <b>Tezu 7</b>. Kafkin patos u najčistijem obliku — bez sentimentalnosti, samo činjenica.` },

  { id:"h08c03", cat:"gregor", diff:"advanced", tez:[2,4], mustKnow:false,
    author:"Kafka", work:"Preobražaj, I. dio — financijska misao",
    txt:`„Kad jednom budem otplatio očev dug, dat ću otkaz. Tada ću moći živjeti za sebe."`,
    useHtml:`<em>tragična ironija</em> — Gregor planira slobodu nekad, ali nikad neće doživjeti taj trenutak. Za <b>Tezu 2</b> (krhkost obiteljskih veza) i <b>Tezu 4</b> (rad kao dug). <em>Modernost odgađa život za sutra koje ne dolazi.</em>` },

  { id:"h08c04", cat:"gregor", diff:"advanced", tez:[3,5], mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — pred kanapeom",
    txt:`„Najradije se skrivao pod kanape. Tu se osjećao zaštićenim, iako mu je bilo tijesno."`,
    useHtml:`Gregor traži <em>maternalnu zaštitu prostora</em>. Skrivanje pod kanape = <b>infantilna regresija</b>. Za <b>Tezu 3</b> (otac-anti-Edip, dijete-kukac). Psihoanalitička interpretacija (Freud).` },

  { id:"h08c07", cat:"gregor", diff:"advanced", tez:[1,5], mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — slika u krznu",
    txt:`„Prije će joj skočiti u lice nego dopustiti da je odnesu."`,
    useHtml:`Gregor brani <em>sliku dame u krznu</em> kad je Greta i majka žele odnijeti. Slika = <b>posljednja erotska, ljudska veza</b> sa svijetom. <em>Aluzija na Sacher-Masochovu Veneru u krznu</em>. Za <b>Tezu 1</b> (alijenacija — Gregor brani ostatke svog identiteta).` },

  { id:"h08c08", cat:"gregor", diff:"basic",    tez:[5],   mustKnow:false,
    author:"Kafka", work:"Preobražaj, I. dio — pokušaj ustajanja",
    txt:`„To rano ustajanje sasvim me oglupavljuje. Čovjek se mora ispavati."`,
    useHtml:`<em>banalnost u sredini fantastičnoga</em>. Gregor-kukac razmišlja o običnim stvarima. <b>Kafkin postupak</b>: fantastičan sadržaj + banalan ton = <em>kafkijanska atmosfera</em>. Za <b>Tezu 5</b> (groteska, parabola).` },

  { id:"h08c09", cat:"gregor", diff:"advanced", tez:[1],   mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — gubitak govora",
    txt:`„Nije li to bio glas neke životinje?"`,
    useHtml:`<em>trenutak kad Gregor shvati da je izgubio ljudski glas</em>. <b>Drugi stupanj preobrazbe</b> (gubitak komunikacije). Za <b>Tezu 1</b> (alijenacija) i <b>Tezu 5</b>. Kompozicijski važno — odjeljuje I. dio (fizičko) od II. dijela (komunikacijsko).` },

  { id:"h08c10", cat:"gregor", diff:"advanced", tez:[3,5], mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — povratak nakon jabuke",
    txt:`„Tada se ognojila jabuka, koja je ostala u njegovom mesu kao vidljivi spomenik."`,
    useHtml:`<em>jabuka kao stigma očeva prokletstva</em>. Za <b>Tezu 3</b> (otac kao autoritet, anti-Edip). <b>Biblijska aluzija</b> — jabuka grijeha. Otac ubija sina u Kafkinom obrtanju Edipove tragedije.` },

  { id:"h08c11", cat:"gregor", diff:"advanced", tez:[1,6,7], mustKnow:false,
    author:"Kafka", work:"Preobražaj, III. dio — odluka o smrti",
    txt:`„Mišljenje je njegovo bilo još odlučnije nego sestrino, da treba nestati."`,
    useHtml:`<em>Gregor pristaje na vlastitu smrt</em>. Posljednja samoidentifikacija — treba nestati. Za <b>Tezu 1</b> (alijenacija) i <b>Tezu 6</b> (Greta donosi presudu). Tragično: Gregor čak i prihvaća presudu obitelji.` },

  { id:"h08c12", cat:"gregor", diff:"advanced", tez:[5],   mustKnow:false,
    author:"Kafka", work:"Preobražaj, III. dio — posljednji sati",
    txt:`„U tom je stanju — praznome i mirnome razmišljanju — ostao sve dok zvonik nije udario tri sata ujutro."`,
    useHtml:`Gregorovi posljednji trenuci. <em>Smiraj nakon odluke</em>. Kafka opisuje smrt s <b>distancom i preciznošću</b> — bez sentimentalnosti. Za <b>Tezu 5</b> (kafkijanski stil — hladan, izvještajan).` },

  { id:"h08c36", cat:"gregor", diff:"advanced", tez:[3,5], mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — opis udarca",
    txt:`„Sljedeća jabuka udari ga doslovno u leđa; Gregor je htio da se odvuče dalje, kao da bi bol mogla minuti tom najednom uznemirenoj promjeni mjesta."`,
    useHtml:`<em>fizički opis sudbonosnog udarca</em>. Kafka koristi <b>banalni glagol udari</b> za scenu koja će dovesti do smrti — kafkijanska distanca. Za <b>Tezu 3</b> (otac kao anti-Edip) i <b>Tezu 5</b> (kafkijanski stil — ravnodušan ton uz tragičan sadržaj).` },

  /* ── GRETA (6) ── */
  { id:"h08c13", cat:"greta", diff:"basic",    tez:[2,6], mustKnow:true,
    author:"Kafka", work:"Preobražaj, III. dio — presuda",
    txt:`„Moramo se pokušati riješiti toga. To više nije Gregor."`,
    useHtml:`<b>središnji trenutak Gretine preobrazbe</b>. Lingvistički prijelaz: <em>od on u to</em> — oduzimanje ljudskosti. Za <b>Tezu 6</b> (Greta — paralelna preobrazba) i <b>Tezu 2</b> (krhkost obiteljskih veza). MUST-KNOW.` },

  { id:"h08c17", cat:"greta", diff:"basic",    tez:[2,6], mustKnow:true,
    author:"Kafka", work:"Preobražaj, III. dio — zaključak romana",
    txt:`„I učinilo im se kao potvrda njihovih novih snova i dobrih namjera kad je njihova kći prva ustala i protegnula svoje mlado tijelo."`,
    useHtml:`<b>posljednja rečenica pripovijetke</b>. Greta — odraslica, spremna za udaju. <em>Život se nastavlja preko Gregorove smrti</em>. Za <b>Tezu 6</b> (Greta paralelna preobrazba) i <b>Tezu 2</b> (obitelj funkcionira preko gubitka). MUST-KNOW.` },

  { id:"h08c14", cat:"greta", diff:"advanced", tez:[6],   mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — preuzimanje brige",
    txt:`„Smatrala je svojim posebnim pravom da se ona brine za Gregora."`,
    useHtml:`<em>rana faza Gretine angažiranosti</em>. Briga je <b>oblik moći</b>, ne samo ljubav. Za <b>Tezu 6</b> (preobrazba odnosa). Ovo je <em>sjeme buduće presude</em> — Greta postaje glavna autoritet o Gregoru.` },

  { id:"h08c15", cat:"greta", diff:"advanced", tez:[1,6], mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — uklanjanje namještaja",
    txt:`„Sav namještaj nećemo izvaditi — i drago mi je da to ti ne želiš."`,
    useHtml:`Greta predlaže majci da uklone namještaj iz Gregorove sobe. <em>Pretvara mu sobu u prostor za životinju</em>. Za <b>Tezu 6</b> i <b>Tezu 1</b>. <em>Ljubav postaje upravljanje.</em>` },

  { id:"h08c16", cat:"greta", diff:"basic",    tez:[7],   mustKnow:false,
    author:"Kafka", work:"Preobražaj, III. dio — sviranje violine",
    txt:`„Ona je svirala tako lijepo. Lice naslonjeno na violinu, oči slijedile je tužno i ispitujući po notama."`,
    useHtml:`Greta svira podstanarima. <em>Trenutak ljepote prije presude</em>. Glazba privlači Gregora iz sobe. Za <b>Tezu 7</b> (glazba). <em>Tragična ironija</em>: ista glazba koja Gregora dirne — bit će povod njegove osude.` },

  { id:"h08c37", cat:"greta", diff:"advanced", tez:[6,7], mustKnow:false,
    author:"Kafka", work:"Preobražaj, III. dio — Gretina argumentacija",
    txt:`„Mora otići, oče, to je jedino rješenje. Moraš se samo riješiti pomisli da je to Gregor."`,
    useHtml:`<em>Gretina formalna argumentacija pred ocem</em>. Greta racionalizira presudu: <b>Moraš se samo riješiti pomisli da je to Gregor</b> — <em>jezik distanciranja</em>. Za <b>Tezu 6</b> (paralelna preobrazba) i <b>Tezu 7</b> (oduzimanje identiteta).` },

  /* ── OTAC (3) ── */
  { id:"h08c18", cat:"otac", diff:"basic",    tez:[3],   mustKnow:true,
    author:"Kafka", work:"Preobražaj, II. dio — gađanje jabukama",
    txt:`„Iz vaze s voćem na bifeju počeo je puniti džepove i, ne ciljajući za sada točno, jabuku za jabukom bacao je."`,
    useHtml:`<b>središnja scena nasilja oca</b>. Jabuke kao <em>biblijska kazna</em>. Za <b>Tezu 3</b> (otac kao autoritet, anti-Edip). <em>Bezbrižno, mehanično bacanje</em> — još jedan slučaj kafkijanske banalnosti pred užasom.` },

  { id:"h08c19", cat:"otac", diff:"advanced", tez:[3,6], mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — opis oca u uniformi",
    txt:`„Sjedio je sav uspravan, u jednoj dotjeranoj plavoj uniformi sa zlatnim dugmadima."`,
    useHtml:`<em>očeva fizička transformacija</em>. Iz nesposobnog starca u uniformiranog autoriteta. Za <b>Tezu 3</b>. <b>Otac uskrsava dok sin odumire</b>. Uniforma = <em>znak društvene vlasti</em>.` },

  { id:"h08c20", cat:"otac", diff:"advanced", tez:[3],   mustKnow:false,
    author:"Kafka", work:"Preobražaj, III. dio — izbacivanje podstanara",
    txt:`„Ako sklope nogu — okrenut ću im leđima i tumarat ću im pod prozorom!"`,
    useHtml:`otac protjeruje podstanare nakon Gregorove smrti. <em>Otac napokon ima moć</em>. Za <b>Tezu 3</b> (otac napokon muški glava). Završna konfirmacija očinske obnove.` },

  /* ── MAJKA (2) ── */
  { id:"h08c21", cat:"majka", diff:"advanced", tez:[2], mustKnow:false,
    author:"Kafka", work:"Preobražaj, I. dio — prvi pogled na sina",
    txt:`„Najprije je tiho jauknula, a onda je raširila ruke, kao da želi sve obuhvatiti, i pala u krilo oca."`,
    useHtml:`<em>majčina reakcija na Gregora-kukca</em>. Pasivnost, kolaps, oslanjanje na oca. Za <b>Tezu 2</b> (krhkost obiteljskih veza). <em>Kafkina majka — autobiografska paralela</em>.` },

  { id:"h08c22", cat:"majka", diff:"advanced", tez:[2], mustKnow:false,
    author:"Kafka", work:"Preobražaj, II. dio — molba sestri",
    txt:`„Pustite Gregora kakav je. To mi je dijete!"`,
    useHtml:`<em>majka jednom intervenira</em> kad Greta želi ukloniti namještaj. <b>Jedini trenutak otpora</b>. Tragično — bezuspješan, ne mijenja ništa. Za <b>Tezu 2</b>. <em>Pasivna ljubav nije dovoljna.</em>` },

  /* ── PROKURIST (3) ── */
  { id:"h08c23", cat:"prokurist", diff:"advanced", tez:[4], mustKnow:false,
    author:"Kafka", work:"Preobražaj, I. dio — prokurist iza vrata",
    txt:`„Gospodine Samsa, što se to događa? Vi se barikadirate u svojoj sobi, odgovarate samo s da i ne, brige roditeljima činite teške."`,
    useHtml:`<em>birokratska retorika</em>. Prokurist govori Gregoru kroz vrata — formalno, ali prijeteći. Za <b>Tezu 4</b> (birokratska dehumanizacija). <em>Posao je važniji od čovjeka.</em>` },

  { id:"h08c24", cat:"prokurist", diff:"advanced", tez:[4], mustKnow:false,
    author:"Kafka", work:"Preobražaj, I. dio — prijetnja otkazom",
    txt:`„Vaš posao u zadnje vrijeme nije nimalo zadovoljavajući. Nije ovo godišnje doba za dobre poslove, slažemo se."`,
    useHtml:`<em>klasična birokratska retorika</em> — pretnja zamotana u uljudnost. Za <b>Tezu 4</b>. <em>Kafka iz osobnog iskustva</em> — 14 godina u osiguravajućoj kući.` },

  { id:"h08c38", cat:"prokurist", diff:"basic",    tez:[4], mustKnow:false,
    author:"Kafka", work:"Preobražaj, I. dio — birokratska prijetnja",
    txt:`„Vaš položaj nije nikako neuzdrman; zaista ne želim sumnjati u ono što sam osobno došao reći — privatno."`,
    useHtml:`<em>klasični kafkijanski govor moći</em>. Prokurist niže prijetnju u uljudni okvir (privatno, ne želim sumnjati). Za <b>Tezu 4</b> (birokratska dehumanizacija). <em>Forma je korektna — sadržaj je nasilje.</em>` },

  /* ── PODSTANARI (1) ── */
  { id:"h08c25", cat:"podstanari", diff:"advanced", tez:[5], mustKnow:false,
    author:"Kafka", work:"Preobražaj, III. dio — podstanari ugledaju Gregora",
    txt:`„Svi su istovremeno ustali, prišli vratima i tamo, lupkajući i mašući rukama, počeli su gledati."`,
    useHtml:`<em>tri podstanara — kafkijanski arhetip</em>. Reagiraju nepristrano, dramaturški, kao kor iz antičke tragedije. Za <b>Tezu 5</b> (groteska, apsurd). <em>Gregorovo otkriće postaje predstava za autsajdere</em>.` },

  /* ── DVORKINJA (1) ── */
  { id:"h08c26", cat:"dvorkinja", diff:"basic",    tez:[1,2], mustKnow:true,
    author:"Kafka", work:"Preobražaj, III. dio — otkriće smrti",
    txt:`„Da ga samo vidite, crk'o je; eno ga gdje leži crknut, baš crknut!"`,
    useHtml:`<b>najbrutalniji glas u pripovijetki</b>. Dvorkinja kratko, narodski, ravnodušno objavljuje Gregorovu smrt. Za <b>Tezu 1</b> (alijenacija — Gregor postaje stvar). Glagol <em>crknuti</em> = <em>smrt životinje, ne čovjeka</em>. MUST-KNOW.` },

  /* ── KAFKA biografski (5) ── */
  { id:"h08c27", cat:"kafka", diff:"basic",    tez:[3], mustKnow:false,
    author:"Franz Kafka", work:"Pismo ocu (1919.)",
    txt:`„Ti si oduvijek bio za mene mjera svih stvari."`,
    useHtml:`<em>autobiografski ključ</em>. Kafka u <em>Pismu ocu</em> izravno opisuje odnos s Hermannom. Za <b>Tezu 3</b> (otac kao autoritet). <em>Otac Gregora je fikcionalni otac Kafke.</em>` },

  { id:"h08c28", cat:"kafka", diff:"advanced", tez:[5], mustKnow:false,
    author:"Franz Kafka", work:"Dnevnik, 23. rujna 1912.",
    txt:`„Pripovijetka Osuda ispala je iz mene kao porod, prekrivena nečistoćom i sluzi."`,
    useHtml:`<em>Kafkin opis stvaranja</em>. Pisanje kao <b>tjelesni proces</b>, ne intelektualni. <em>Preobražaj napisan u 3 tjedna</em> u istoj noći nadahnuća. Za biografsku kontekstualizaciju.` },

  { id:"h08c29", cat:"kafka", diff:"advanced", tez:[5], mustKnow:false,
    author:"Franz Kafka", work:"Pismo Maxu Brodu, oporuka (1922.)",
    txt:`„Sve što ostaje od mene… spali bez čitanja."`,
    useHtml:`<em>oporuka koju je Brod odbio izvršiti</em>. Kontekstualno — bez Maxa Broda Kafka bi bio nepoznat. <em>Proces, Zamak, Amerika objavljeni posthumno.</em>` },

  { id:"h08c30", cat:"kafka", diff:"advanced", tez:[1,5], mustKnow:false,
    author:"Franz Kafka", work:"Razgovor s Brodom",
    txt:`„Postoji nada — ali ne za nas."`,
    useHtml:`<em>jedna od najdubljih Kafkinih izreka</em>. Apokaliptički ton. Za <b>Tezu 1</b> (alijenacija — moderna iskustva bezizlaza) i <b>Tezu 5</b> (kafkijanska atmosfera). <em>Bez nade, ali bez ogorčenosti.</em>` },

  { id:"h08c39", cat:"kafka", diff:"advanced", tez:[3], mustKnow:false,
    author:"Franz Kafka", work:"Pismo ocu (1919.), o vlastitom tijelu",
    txt:`„Sjećam se kako sam se često svlačio s Tobom u istoj kabini. Ja mršav, slab, uzak; Ti snažan, velik, širok."`,
    useHtml:`<em>Kafkin tjelesni doživljaj pred ocem</em>. <b>Direktna paralela s Gregorom</b> — slabost tijela pred očinskim autoritetom. Za <b>Tezu 3</b> (otac-anti-Edip) i biografski kontekst Preobražaja.` },

  /* ── KONTEKST (6) ── */
  { id:"h08c31", cat:"kontekst", diff:"advanced", tez:[6], mustKnow:false,
    author:"Vladimir Nabokov", work:"Predavanja o književnosti (1980.)",
    txt:`„Greta je prava negativka pripovijetke. Ona izdaje brata."`,
    useHtml:`<em>Nabokovljeva interpretacija</em>. Veliki ruski i američki pisac analizira Preobražaj. Tvrdi da je Greta <em>tragična figura izdaje</em>. Za <b>Tezu 6</b> (Greta — paralelna preobrazba). Stručna potpora.` },

  { id:"h08c32", cat:"kontekst", diff:"advanced", tez:[1,5], mustKnow:false,
    author:"Albert Camus", work:"Mit o Sizifu (1942.) — esej o nadi",
    txt:`„Cijeli Kafkin svijet je svijet u kojemu nada postaje teret."`,
    useHtml:`<em>Camusova interpretacija</em>. Egzistencijalist čita Kafku kao prethodnika. Za <b>Tezu 1</b> i <b>Tezu 5</b>. <em>Most prema Camusu (Stranac).</em>` },

  { id:"h08c33", cat:"kontekst", diff:"advanced", tez:[1,4], mustKnow:false,
    author:"Theodor W. Adorno", work:"Bilješke o Kafki (1953.)",
    txt:`„Kafka piše o čovjeku koji je zaboravio da je čovjek."`,
    useHtml:`<em>frankfurtska škola</em> — Adorno čita Kafku kao kritičara <b>otuđenja u kapitalizmu</b>. Za <b>Tezu 4</b> (birokratska dehumanizacija) i <b>Tezu 1</b>. Filozofska potpora.` },

  { id:"h08c34", cat:"kontekst", diff:"advanced", tez:[5], mustKnow:false,
    author:"Walter Benjamin", work:"Franz Kafka (1934.)",
    txt:`„Da bi razumio Kafku, treba zaboraviti razumjeti."`,
    useHtml:`<em>najpoznatija interpretacijska aporija</em>. Benjamin tvrdi: <b>Kafkin tekst se opire interpretaciji</b>. Za <b>Tezu 5</b> (parabola, otvorenost značenja). <em>Više interpretacija = sve točne.</em>` },

  { id:"h08c35", cat:"kontekst", diff:"advanced", tez:[5], mustKnow:false,
    author:"Max Brod", work:"Franz Kafka — Životopis (1937.)",
    txt:`„Nemam pravo izvršiti njegovu oporuku. Svijet bez Kafke bio bi siromašniji."`,
    useHtml:`<em>Brodovo opravdanje za neuništavanje rukopisa</em>. <b>Kontekstualno</b>: bez ove odluke, ne bismo imali <em>Proces, Zamak, Ameriku</em>. Za biografsku i recepcijsku kontekstualizaciju.` },

  { id:"h08c40", cat:"kontekst", diff:"advanced", tez:[1,5], mustKnow:false,
    author:"Albert Camus", work:"Mit o Sizifu — dodatak o Kafki (1942.)",
    txt:`„Kafkino umijeće prisiljava čitatelja da pročita dva puta. Njegovi raspleti — ili ne-raspleti — sugeriraju objašnjenja koja nisu izričita, ali pretpostavljaju ponovni pogled."`,
    useHtml:`<em>filozofska potpora za interpretacijsku otvorenost Preobražaja</em>. Camus tvrdi: Kafka je <b>autor koji zahtijeva ponovno čitanje</b>. Za <b>Tezu 1</b> i <b>Tezu 5</b> (otvorenost značenja).` },
];

/* ── helpers ── */
function normalize(s){
  return (s||"").toLowerCase()
    .replace(/č|ć/g,"c").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/đ/g,"d").replace(/[\u201e\u201c\u201d"'<>]/g,"").trim();
}

/* ── TOAST ── */
function Toast({msg,on}){
  return(
    <div style={{position:"fixed",bottom:24,left:"50%",transform:`translateX(-50%) translateY(${on?0:16}px)`,background:"var(--card,#120808)",color:"var(--t1,#f4ede5)",padding:"10px 18px",borderRadius:10,border:"1px solid var(--bd-go,rgba(232,201,122,.3))",fontFamily:"var(--serif,Georgia)",fontSize:13,fontStyle:"italic",boxShadow:"0 10px 32px rgba(0,0,0,.45)",opacity:on?1:0,visibility:on?"visible":"hidden",transition:"all .25s cubic-bezier(.4,0,.2,1)",zIndex:9999,pointerEvents:"none"}}>
      {msg}
    </div>
  );
}

/* ── CARD ── */
function CitCard({c, favs, copyCount, onFav, onCopy, onTezClick}){
  const cfg = CAT_CFG[c.cat];
  const isFav = !!favs[c.id];
  const copies = copyCount[c.id]||0;
  const [hov,setHov]=useState(false);

  function doCopy(){
    const text=c.txt+"  — "+c.author+(c.work?", "+c.work:"");
    if(navigator.clipboard?.writeText){
      navigator.clipboard.writeText(text).then(()=>onCopy(c.id)).catch(()=>onCopy(c.id));
    } else {
      try{const ta=document.createElement("textarea");ta.value=text;ta.setAttribute("readonly","");ta.style.cssText="position:absolute;left:-9999px";document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);}catch(e){}
      onCopy(c.id);
    }
  }

  const bStyle=`color:var(--t1,#f4ede5);font-weight:600;font-family:var(--serif,Georgia)`;
  const emStyle=`color:var(--t1,#f4ede5);font-style:italic`;
  const richHtml=c.useHtml.replace(/<b>/g,`<b style="${bStyle}">`).replace(/<em>/g,`<em style="${emStyle}">`);

  return(
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:"var(--card,#120808)",border:`1px solid ${hov?"var(--bd-br,rgba(220,50,47,.3))":"var(--bdm,#2c1f1f)"}`,borderRadius:14,padding:"18px 20px 16px 22px",transition:"all .22s cubic-bezier(.4,0,.2,1)",position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",transform:hov?"translateY(-2px)":"none",boxShadow:hov?"0 8px 24px rgba(220,50,47,.08)":"none",willChange:"transform"}}>

      <div style={{position:"absolute",left:0,top:14,bottom:14,width:hov?3:2,background:cfg.stripe,opacity:hov?.9:.4,borderRadius:"0 2px 2px 0",transition:"opacity .22s,width .22s",pointerEvents:"none"}}/>

      <div style={{position:"absolute",top:14,right:14,display:"flex",gap:3,zIndex:3,opacity:hov||isFav?1:0,transition:"opacity .22s"}}>
        <button onClick={()=>onFav(c.id)} aria-label={isFav?"Ukloni iz favorita":"Dodaj u favorite"}
          style={{width:26,height:26,borderRadius:"50%",padding:0,border:`1px solid ${isFav?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)"}`,background:isFav?"var(--dim-go,rgba(232,201,122,.12))":"var(--ele,#1e1010)",color:isFav?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,transition:"all .15s"}}>
          {isFav?"★":"☆"}
        </button>
        <div style={{position:"relative"}}>
          <button onClick={doCopy} aria-label="Kopiraj citat"
            style={{width:26,height:26,borderRadius:"50%",padding:0,border:"1px solid var(--bdm,#2c1f1f)",background:"var(--ele,#1e1010)",color:"var(--t3,#8c7b72)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,transition:"all .15s"}}>📋</button>
          {copies>0&&<span style={{position:"absolute",top:-5,right:-5,background:"var(--dim-br,rgba(220,50,47,.08))",color:"var(--bronze-l,#cd853f)",fontSize:7,fontWeight:700,padding:"1px 4px",borderRadius:7,border:"1px solid var(--bd-br,rgba(220,50,47,.2))",fontFamily:"var(--mono,monospace)",lineHeight:1,minWidth:12,textAlign:"center"}}>{copies}</span>}
        </div>
      </div>

      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingRight:68,flexWrap:"wrap"}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,padding:"2px 7px",borderRadius:6,...cfg.eye}}>{cfg.label}</span>
        {c.mustKnow&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,color:"var(--gold,#e9b446)",padding:"2px 7px",background:"var(--dim-go,rgba(232,201,122,.12))",border:"1px solid var(--bd-go,rgba(232,201,122,.3))",borderRadius:6,display:"inline-flex",alignItems:"center",gap:3,boxShadow:"0 0 10px rgba(232,201,122,.12)"}}>★ Napamet</span>}
        {c.diff==="advanced"&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,color:"var(--bronze-l,#cd853f)",border:"1px solid var(--bd-br,rgba(220,50,47,.2))",background:"var(--dim-br,rgba(220,50,47,.08))",padding:"2px 7px",borderRadius:6}}>NAPREDNI</span>}
      </div>

      <div style={{marginBottom:4}}>
        <span style={{fontFamily:"var(--display,'EB Garamond',Georgia,serif)",fontSize:13.5,fontWeight:700,color:"var(--bronze-l,#cd853f)",letterSpacing:.4,lineHeight:1.3,display:"block"}}>{c.author}</span>
        {c.work&&<span style={{display:"block",fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:600,letterSpacing:.7,color:"var(--t3,#8c7b72)",marginTop:3,lineHeight:1.5,textTransform:"uppercase",opacity:.85}}>{c.work}</span>}
      </div>

      <div style={{fontFamily:"'EB Garamond',Georgia,serif",fontSize:16,fontStyle:"italic",fontWeight:400,color:hov?"#fef3e2":"var(--t1,#f4ede5)",lineHeight:1.55,margin:"12px 0 14px",letterSpacing:.15,transition:"color .22s"}}>
        {c.txt}
      </div>

      {c.tez.length>0&&(
        <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:12}}>
          {c.tez.map(t=>(
            <button key={t} onClick={()=>onTezClick(t)}
              style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"var(--teal,#4ecdc4)",background:"var(--dim-t,rgba(78,205,196,.12))",border:"1px solid var(--bd-t,rgba(78,205,196,.25))",borderRadius:6,padding:"2px 8px",cursor:"pointer",transition:"all .15s"}}>
              T{t}
            </button>
          ))}
        </div>
      )}

      <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13,color:"var(--t2,#c5b8aa)",lineHeight:1.6,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)"}}>
        <b style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",display:"block",marginBottom:5}}>Kada koristiti</b>
        <span dangerouslySetInnerHTML={{__html:richHtml}}/>
      </div>
    </div>
  );
}

/* ══ MAIN ══ */
export default function CitatnikH08({onBack, onNext}){
  const [catFilter,  setCatFilter]  = useState("all");
  const [tezFilter,  setTezFilter]  = useState("all");
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
  function handleTezClick(t){setTezFilter(prev=>String(prev)===String(t)?"all":String(t));}

  const filtered=CITATI.filter(c=>{
    const matchCat  = catFilter==="all"||(catFilter==="must"?c.mustKnow:c.cat===catFilter);
    const matchTez  = tezFilter==="all"||c.tez.includes(Number(tezFilter));
    const matchDiff = diffFilter==="all"||c.diff===diffFilter;
    const matchFav  = !favOnly||!!favs[c.id];
    const hay       = normalize(c.author+" "+c.work+" "+c.txt+" "+c.useHtml);
    const matchQ    = !q||hay.includes(normalize(q));
    return matchCat&&matchTez&&matchDiff&&matchFav&&matchQ;
  });

  const hasActive=catFilter!=="all"||tezFilter!=="all"||diffFilter!=="all"||favOnly||!!q;
  const favCount=Object.keys(favs).length;
  function clearAll(){setCatFilter("all");setTezFilter("all");setDiffFilter("all");setFavOnly(false);setQ("");}
  function doRandom(){if(!filtered.length)return;const pick=filtered[Math.floor(Math.random()*filtered.length)];document.getElementById("cc-"+pick.id)?.scrollIntoView({behavior:"smooth",block:"center"});showToast("🎲 Slučajan citat");}

  const fbtn=(active,spec=false)=>({padding:"6px 14px",fontFamily:"var(--mono,monospace)",fontSize:10,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",background:active?(spec?"linear-gradient(135deg,var(--gold,#e9b446),#d4b980)":"linear-gradient(135deg,#8b2500,#cd3a1f)"):(spec?"var(--dim-go,rgba(232,201,122,.1))":"var(--card,#120808)"),color:active?(spec?"#0F0605":"#F5E6D3"):(spec?"var(--gold,#e9b446)":"var(--t2,#c5b8aa)"),border:`1px solid ${active?(spec?"var(--gold,#e9b446)":"var(--bronze,#8b4513)"):(spec?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)")}`,borderRadius:8,cursor:"pointer",transition:"all .18s",display:"inline-flex",alignItems:"center",gap:5,lineHeight:1.4,boxShadow:active&&!spec?"0 2px 10px rgba(220,50,47,.15)":"none"});
  const subBtn=(active)=>({padding:"4px 10px",fontFamily:"var(--mono,monospace)",fontSize:"9.5px",fontWeight:600,letterSpacing:".8px",textTransform:"uppercase",background:active?"var(--dim-br,rgba(220,50,47,.08))":"transparent",color:active?"var(--bronze-l,#cd853f)":"var(--t3,#8c7b72)",border:`1px solid ${active?"var(--bd-br,rgba(220,50,47,.2))":"var(--bdm,#2c1f1f)"}`,borderRadius:6,cursor:"pointer",transition:"all .15s"});

  return(
    <div style={{padding:"0 0 32px"}}>

      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>💬 Citati — arsenal za esej o Kafki / Preobražaju</div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja.{" "}
          <b>40 probranih citata</b>: <em>Gregor</em> (13), Greta (6), otac (3), majka (2), prokurist (3), podstanari (1), dvorkinja (1), plus <b>5 Kafkinih biografskih citata</b> (Pismo ocu, Dnevnik, oporuka) i <b>6 interpretatora</b> (Nabokov, Camus×2, Adorno, Benjamin, Brod).{" "}
          <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>.{" "}
          <b>8 must-know citata</b> označeno je <em>★ Napamet</em>.
        </div>
      </div>

      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"18px 0 10px"}}>
        {[
          {key:"all",        label:"Svi (40)",              spec:false},
          {key:"must",       label:"★ Napamet (8)",         spec:true},
          {key:"gregor",     label:"🪲 Gregor (13)",        spec:false},
          {key:"greta",      label:"🎻 Greta (6)",          spec:false},
          {key:"otac",       label:"🍎 Otac (3)",           spec:false},
          {key:"majka",      label:"💔 Majka (2)",          spec:false},
          {key:"prokurist",  label:"📋 Prokurist (3)",      spec:false},
          {key:"podstanari", label:"👥 Podstanari (1)",     spec:false},
          {key:"dvorkinja",  label:"🧹 Dvorkinja (1)",      spec:false},
          {key:"kafka",      label:"✒️ Kafka biograf. (5)", spec:false},
          {key:"kontekst",   label:"🧠 Kontekst (6)",       spec:false},
        ].map(f=>(
          <button key={f.key} onClick={()=>setCatFilter(f.key)} style={fbtn(catFilter===f.key,f.spec)}>{f.label}</button>
        ))}
      </div>

      <div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"0 0 14px",padding:"10px 14px",background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:10,alignItems:"center"}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginRight:4}}>Tez:</span>
        {["all",1,2,3,4,5,6,7].map(t=>{
          const active=String(tezFilter)===String(t);
          return <button key={t} onClick={()=>setTezFilter(active?"all":String(t))} style={subBtn(active)}>{t==="all"?"Sve":`T${t}`}</button>;
        })}
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginLeft:12,marginRight:4}}>Razina:</span>
        {[["all","Sve"],["basic","Osnovno"],["advanced","Napredno"]].map(([k,l])=>(
          <button key={k} onClick={()=>setDiffFilter(k)} style={subBtn(diffFilter===k)}>{l}</button>
        ))}
        <button onClick={()=>setFavOnly(p=>!p)} style={{...subBtn(favOnly),color:favOnly?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",border:`1px solid ${favOnly?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)"}`,background:favOnly?"var(--dim-go,rgba(232,201,122,.1))":"transparent"}}>
          {favOnly?"★":"☆"} Favoriti ({favCount})
        </button>
        <button onClick={doRandom} style={{padding:"4px 12px",fontFamily:"var(--mono,monospace)",fontSize:"9.5px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",background:"var(--dim-go,rgba(232,201,122,.1))",color:"var(--gold,#e9b446)",border:"1px solid var(--bd-go,rgba(232,201,122,.3))",borderRadius:6,cursor:"pointer",marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:5}}>🎲 Random</button>
      </div>

      <div style={{fontFamily:"var(--mono,monospace)",fontSize:11,color:"var(--t3,#8c7b72)",marginBottom:14,letterSpacing:.3,display:"flex",alignItems:"center",gap:10}}>
        <span><b style={{color:"var(--bronze-l,#cd853f)",fontWeight:700}}>{filtered.length}</b> od {CITATI.length} citata prikazano</span>
        {hasActive&&<button onClick={clearAll} style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",background:"transparent",border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:6,padding:"3px 9px",cursor:"pointer",display:"inline-flex"}}>Resetiraj filtere</button>}
      </div>

      <div style={{margin:"14px 0 16px",display:"flex",gap:8,alignItems:"center"}}>
        <span style={{fontSize:18,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input type="search" value={q} onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži citate (npr. Kafka, Gregor, preobražaj, otuđenje)…"
          aria-label="Pretraži citate" autoComplete="off"
          style={{flex:1,padding:"10px 14px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:10,color:"var(--t1,#f4ede5)",fontFamily:"var(--mono,monospace)",fontSize:13,outline:"none"}}
        />
        {q&&<button onClick={()=>setQ("")} aria-label="Očisti pretragu" style={{padding:"8px 12px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:8,color:"var(--t2,#c5b8aa)",cursor:"pointer",fontSize:14}}>✕</button>}
      </div>

      {filtered.length===0&&(
        <div style={{background:"var(--card,#120808)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:14,padding:"32px 20px",textAlign:"center",fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t3,#8c7b72)",fontStyle:"italic",margin:"16px 0"}}>
          <b style={{color:"var(--bronze-l,#cd853f)",fontStyle:"normal",fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,display:"block",marginBottom:8}}>Nema rezultata</b>
          Niti jedan citat ne zadovoljava trenutne filtere. Probaj drugu kombinaciju ili resetiraj filtere.
        </div>
      )}

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:14,marginTop:4}}>
        {filtered.map(c=>(
          <div key={c.id} id={"cc-"+c.id}>
            <CitCard c={c} favs={favs} copyCount={copyCount} onFav={handleFav} onCopy={handleCopy} onTezClick={handleTezClick}/>
          </div>
        ))}
      </div>

      <Toast msg={toast.msg} on={toast.on}/>

      <div style={{display:"flex",justifyContent:"space-between",marginTop:32}}>
        {onBack&&<button onClick={onBack} style={{background:"none",border:"none",color:"var(--t2,#c5b8aa)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer"}}>← ✍ Esej alat</button>}
        {onNext&&<button onClick={onNext} style={{background:"none",border:"none",color:"var(--bronze-l,#cd853f)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer",fontWeight:600}}>📚 Pojmovnik →</button>}
      </div>
    </div>
  );
}
