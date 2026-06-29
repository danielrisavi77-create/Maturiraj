'use client';
import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   CITATNIK H09 — Stranac (Camus) + Egzistencijalizam
   40 citata — v9.1 identičan HTML implementaciji
   NOVA STRUKTURA: cit-eye-cat + cit-src-author/loc
   svi txt/useHtml → backtick template literals (Turbopack fix)
   ══════════════════════════════════════════════════════ */

const LS_FAV  = "mt.hrv.h09.cit_favs";
const LS_COPY = "mt.hrv.h09.cit_copy";

/* H09 koristi novu .cit-eye-cat klasu — svaka kategorija ima svoju boju */
const CAT_CFG = {
  meursault:       { label:"MEURSAULT",    stripe:"var(--red,#e05252)",   eye:{ color:"var(--red-l,#f87171)",   background:"var(--dim-r,rgba(224,82,82,.12))",    border:"1px solid var(--bd-r,rgba(224,82,82,.25))"    }},
  marie:           { label:"MARIE",         stripe:"var(--gold,#e9b446)",  eye:{ color:"var(--gold,#e9b446)",    background:"var(--dim-go,rgba(232,201,122,.12))", border:"1px solid var(--bd-go,rgba(232,201,122,.3))" }},
  raymond:         { label:"RAYMOND",       stripe:"#c9a878",              eye:{ color:"#d6a890",                background:"rgba(201,168,120,.14)",               border:"1px solid rgba(201,168,120,.28)"              }},
  salamano:        { label:"SALAMANO",      stripe:"#a08a8a",              eye:{ color:"#b8a8a8",                background:"rgba(160,138,138,.14)",               border:"1px solid rgba(160,138,138,.28)"              }},
  tuzitelj:        { label:"TUŽITELJ",      stripe:"var(--teal,#4ecdc4)",  eye:{ color:"var(--teal,#4ecdc4)",    background:"var(--dim-t,rgba(78,205,196,.12))",   border:"1px solid var(--bd-t,rgba(78,205,196,.25))"  }},
  svecenik:        { label:"SVEĆENIK",      stripe:"#b8a8a8",              eye:{ color:"#b8a8a8",                background:"rgba(160,138,138,.14)",               border:"1px solid rgba(160,138,138,.28)"              }},
  "egzist-porodica":{ label:"MAJKA",        stripe:"#c9a878",              eye:{ color:"#d6b890",                background:"rgba(201,168,120,.14)",               border:"1px solid rgba(201,168,120,.28)"              }},
  camus:           { label:"CAMUS",         stripe:"#e0a077",              eye:{ color:"#e0a077",                background:"rgba(224,160,119,.12)",               border:"1px solid rgba(224,160,119,.25)"              }},
  kontekst:        { label:"KONTEKST",      stripe:"#c5a1d9",              eye:{ color:"#c5a1d9",                background:"rgba(197,161,217,.12)",               border:"1px solid rgba(197,161,217,.25)"              }},
};

const CITATI = [
  /* ── MEURSAULT (12) ── */
  { id:"h09c01", cat:"meursault", diff:"basic",    tez:[1,2,6],  mustKnow:true,
    author:"Camus", loc:"Stranac, I/1 — prva rečenica",
    txt:`„Danas mi je umrla majka. Možda i jučer, ne znam."`,
    useHtml:`<em>Najpoznatiji početak francuske književnosti 20. stoljeća</em>. Možda i jučer — datum nije važan. <b>Brisanje emocionalne hijerarhije</b>. Za <b>Tezu 1</b> (apsurd) i <b>Tezu 2</b> (Meursault — lik koji ne laže). MORA se znati napamet — neizostavan u svakom eseju.` },

  { id:"h09c02", cat:"meursault", diff:"basic",    tez:[1,7],    mustKnow:true,
    author:"Camus", loc:"Stranac, II/5 — posljednje rečenice",
    txt:`„Otvarao sam se prvi put nježnoj ravnodušnosti svijeta."`,
    useHtml:`<b>Filozofski vrhunac romana</b>. Meursault prihvaća apsurd — svijet je ravnodušan, ali to je <em>nježno (tendre)</em>. <b>Pobuna kao oslobođenje</b>. Za <b>Tezu 7</b> (pobuna) i <b>Tezu 1</b> (apsurd). MORA napamet — kraj svakog eseja koji govori o filozofiji apsurda.` },

  { id:"h09c03", cat:"meursault", diff:"basic",    tez:[3,6],    mustKnow:true,
    author:"Camus", loc:"Stranac, I/6 — ubojstvo",
    txt:`„I to su bila kao četiri kratka kucanja na vrata nesreće."`,
    useHtml:`Nakon prvog pucnja, Meursault puca <em>još četiri puta</em>. Četiri kucanja na vrata nesreće je metafora koja označava <b>ulazak u svijet kazne</b>. Za <b>Tezu 6</b> (granica I/II dijela) i <b>Tezu 3</b> (sunce kao akter — pucnjevi su odgovor suncu). MORA napamet.` },

  { id:"h09c04", cat:"meursault", diff:"basic",    tez:[2,4],    mustKnow:true,
    author:"Camus", loc:"Stranac, I/2 — razgovor s Marie",
    txt:`„Pitala me da li je volim. Rekoh joj da to ne znači ništa, ali mi se činilo da je ne volim."`,
    useHtml:`Meursaultov <em>radikalni odbijanje konvencionalnog jezika ljubavi</em>. Ne kaže volim jer ne osjeća. Za <b>Tezu 2</b> (Meursault — lik koji ne laže) i <b>Tezu 4</b> (kritika društvenog licemjerja). Pokazuje <em>iskrenost koja vrijeđa</em>.` },

  { id:"h09c05", cat:"meursault", diff:"basic",    tez:[3,5],    mustKnow:false,
    author:"Camus", loc:"Stranac, I/6 — plaža",
    txt:`„Cijelo je sunce udaralo na moje čelo. Bilo je sunce na pijesku, koji se valjao u valu."`,
    useHtml:`<b>Sunce kao akter</b> — fizički udar, ne metafora. Pokazuje Camusovu <em>mediteransku poetiku</em>. Za <b>Tezu 3</b> (sunce kao akter) i <b>Tezu 5</b> (bijela proza — konkretni glagoli, kratka rečenica).` },

  { id:"h09c06", cat:"meursault", diff:"advanced", tez:[2,4],    mustKnow:false,
    author:"Camus", loc:"Stranac, II/2 — razgovor s istražnim sucem",
    txt:`„Nije moj zločin za mene značio puno."`,
    useHtml:`Meursault <em>ne osjeća krivnju</em> — ne zato što je psihopat, nego zato što njegova kategorija ozbiljnog funkcionira drugačije. Za <b>Tezu 2</b> i <b>Tezu 4</b> (kritika društvenog očekivanja kajanja).` },

  { id:"h09c07", cat:"meursault", diff:"basic",    tez:[6],      mustKnow:false,
    author:"Camus", loc:"Stranac, I/1 — sahrana",
    txt:`„Nisam htio reći da nisam, ali mi se činilo da nisam imao razloga."`,
    useHtml:`Meursault na pitanje <em>je li tugovao za majkom</em>. Pokazuje <b>radikalnu iskrenost</b> — i naslučuje vlastiti zločin. Za <b>Tezu 6</b> (Meursaultova jezična iskrenost koja vrijeđa).` },

  { id:"h09c08", cat:"meursault", diff:"advanced", tez:[7],      mustKnow:true,
    author:"Camus", loc:"Stranac, II/5 — finale",
    txt:`„Da bih osjećao manje samotnim, ostao mi je samo da poželim da na dan moga pogubljenja bude mnogo gledatelja, da me dočekaju krikovima mržnje."`,
    useHtml:`<b>Posljednje rečenice romana</b>. Paradoks — krikovi mržnje kao potvrda iskrenosti. Za <b>Tezu 7</b> (pobuna kao oslobođenje). Iznimno snažan citat za zaključak eseja.` },

  { id:"h09c09", cat:"meursault", diff:"basic",    tez:[2],      mustKnow:false,
    author:"Camus", loc:"Stranac, I/5 — razgovor s Raymondom o braku",
    txt:`„Rekao sam mu da je svejedno — ako želi, možemo se vjenčati."`,
    useHtml:`Marie predlaže brak. Meursaultov odgovor je svejedno. Pokazuje <b>nehijerarhiju važnosti</b> u njegovom svijetu. Za <b>Tezu 2</b> — radikalna iskrenost koja vrijeđa konvencije.` },

  { id:"h09c10", cat:"meursault", diff:"advanced", tez:[5,7],    mustKnow:false,
    author:"Camus", loc:"Stranac, II/5 — finale, sukob sa svećenikom",
    txt:`„Iz dna svoje budućnosti, kroz cijeli ovaj život koji sam živio, dizao se neki tamni dah preko godina koje su tek dolazile…"`,
    useHtml:`<b>Stilski lom u finalu</b> — Meursault prelazi iz minimalističkog jezika u <em>retoričke periode</em>. Za <b>Tezu 5</b> (bijela proza i njena eksplozija) i <b>Tezu 7</b> (pobuna).` },

  { id:"h09c11", cat:"meursault", diff:"advanced", tez:[2,7],    mustKnow:false,
    author:"Camus", loc:"Stranac, II/5 — sukob sa svećenikom",
    txt:`„Sve me to nije ništa, jer ja znam zašto."`,
    useHtml:`Meursault svećeniku — <em>on zna zašto je živio kako je živio</em>. Apsurd je prihvaćen. Za <b>Tezu 7</b> (pobuna) — kratka, sjajna izjava radikalne autonomije.` },

  { id:"h09c12", cat:"meursault", diff:"basic",    tez:[3],      mustKnow:false,
    author:"Camus", loc:"Stranac, II/3 — pred sucem o ubojstvu",
    txt:`„Bilo je to zbog sunca."`,
    useHtml:`Meursaultovo objašnjenje ubojstva. Sud to odbija — zvuči apsurdno. Ali u Camusovom svijetu <b>sunce je realan akter</b>. Za <b>Tezu 3</b> (sunce kao aktivan akter).` },

  /* ── MARIE (4) ── */
  { id:"h09c13", cat:"marie", diff:"basic",    tez:[2,4], mustKnow:false,
    author:"Camus", loc:"Stranac, I/2 — bazen",
    txt:`„Vidjelo se da nije znala što da kaže."`,
    useHtml:`Marie nakon Meursaultovog to ne znači ništa. <em>Pokazuje da Marie pokušava razumjeti</em> ali ne uspijeva. Za <b>Tezu 2</b> i <b>Tezu 4</b> — Meursault je stranac čak i ljubavnici.` },

  { id:"h09c14", cat:"marie", diff:"advanced", tez:[2,7], mustKnow:false,
    author:"Camus", loc:"Stranac, II/2 — posjet zatvoru",
    txt:`„Sve će biti dobro… izaći ćeš pa ćemo se vjenčati."`,
    useHtml:`Marie u zatvorskom posjetu. <em>Optimizam koji Meursault ne može dijeliti</em>. Pokazuje <b>provaliju između normalnog života i Meursaultove svijesti</b>. Za <b>Tezu 2</b>.` },

  { id:"h09c15", cat:"marie", diff:"basic",    tez:[2,3], mustKnow:false,
    author:"Camus", loc:"Stranac, I/2 — bazen i sunce",
    txt:`„Marie je smijala kad sam joj rekao da svi imamo pravo na vlastite osjećaje."`,
    useHtml:`Marie reagira smijehom — <em>ona je suprotnost Meursaultu, ali ga ipak privlači</em>. <b>Vitalnost vs distanca</b>. Za <b>Tezu 2</b>.` },

  { id:"h09c16", cat:"marie", diff:"advanced", tez:[4],   mustKnow:false,
    author:"Camus", loc:"Stranac, II/3 — svjedočenje na suđenju",
    txt:`„Nisam imala dovoljno vremena ni mira za razmišljati."`,
    useHtml:`Marie pod tužiteljevim pritiskom o filmu na koji su išli sutradan nakon sahrane. <b>Tužitelj koristi i nju kao oružje</b>. Za <b>Tezu 4</b> (kritika sudskog procesa).` },

  /* ── RAYMOND (3) ── */
  { id:"h09c17", cat:"raymond", diff:"basic",    tez:[2,4], mustKnow:false,
    author:"Camus", loc:"Stranac, I/3 — kuhinja",
    txt:`„Pitao me hoću li mu biti prijatelj. Rekao sam mu da je svejedno."`,
    useHtml:`Raymond pita Meursaulta za prijateljstvo. <em>Svejedno je</em> — Meursault pristaje na sve odnose istom mjerom. Za <b>Tezu 2</b>. Ovo prijateljstvo postat će <em>otežavajuća okolnost</em> na suđenju.` },

  { id:"h09c18", cat:"raymond", diff:"advanced", tez:[4],   mustKnow:false,
    author:"Camus", loc:"Stranac, I/3 — pismo Mauretanki",
    txt:`„Trebao bi pisati joj pismo… koje će joj nanijeti veliku bol."`,
    useHtml:`Raymondov plan da napiše pismo svojoj djevojci da je rastavi od sebe. Meursault mu pomaže <em>bez moralnih rezervacija</em>. Za <b>Tezu 4</b> — Meursault stoji izvan moralnih konvencija društva.` },

  { id:"h09c19", cat:"raymond", diff:"basic",    tez:[3,6], mustKnow:false,
    author:"Camus", loc:"Stranac, I/6 — plaža prije ubojstva",
    txt:`„Daj mi pištolj. Ako se umiješa, smaknut ću ga."`,
    useHtml:`Raymondov govor na plaži — <em>nasilje već lebdi u zraku</em>. Meursault uzima pištolj što vodi do ubojstva. Za <b>Tezu 6</b> — granica I/II dijela.` },

  /* ── SALAMANO (2) ── */
  { id:"h09c20", cat:"salamano", diff:"advanced", tez:[2,4], mustKnow:false,
    author:"Camus", loc:"Stranac, I/4 — susjedov pas",
    txt:`„Dao sam ga psu, dao sam mu sve."`,
    useHtml:`Salamano nakon što mu je pas pobjegao. <em>Plač starca pokazuje da i naizgled okrutni ljudi imaju duboke veze</em>. <b>Paralela s Meursaultom</b> — distanca izvana, vezanost iznutra. Za <b>Tezu 2</b>.` },

  { id:"h09c21", cat:"salamano", diff:"advanced", tez:[2],   mustKnow:false,
    author:"Camus", loc:"Stranac, II/2 — svjedočenje",
    txt:`„On je dobar mladić. Volio je svoju majku."`,
    useHtml:`Salamano svjedoči u Meursaultovu korist na suđenju. <b>Jedini koji vidi normalnost</b> Meursaultove veze s majkom. Za <b>Tezu 2</b> — i osudi je nešto preveć tuđe da društvo prihvati.` },

  /* ── TUŽITELJ (3) ── */
  { id:"h09c22", cat:"tuzitelj", diff:"basic",    tez:[2,4], mustKnow:true,
    author:"Camus", loc:"Stranac, II/4 — završni govor",
    txt:`„Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem."`,
    useHtml:`<b>Vrhunac suđenja</b>. Tužitelj otvoreno priznaje — <em>sudi mu se za pogreb, ne za ubojstvo</em>. Za <b>Tezu 4</b> (kritika pravosuđa) i <b>Tezu 2</b>. MORA napamet — najpoznatija tužiteljeva rečenica.` },

  { id:"h09c23", cat:"tuzitelj", diff:"advanced", tez:[4],   mustKnow:false,
    author:"Camus", loc:"Stranac, II/4 — završna rečenica",
    txt:`„Tražim glavu ovoga čovjeka."`,
    useHtml:`Doslovan zahtjev za giljotinom. Pokazuje <em>brutalnost francuskog kaznenog sustava</em> i <b>nesrazmjer između zločina i kazne</b>. Za <b>Tezu 4</b>.` },

  { id:"h09c24", cat:"tuzitelj", diff:"advanced", tez:[4],   mustKnow:false,
    author:"Camus", loc:"Stranac, II/4 — psihološka analiza",
    txt:`„Njegova ravnodušnost otkriva mi prisustvo provalije u koju društvo može pasti."`,
    useHtml:`Tužitelj izričito formulira <em>strah društva pred onima koji ne dijele konvencije</em>. <b>Provalija = nedostatak ritualne emocije</b>. Za <b>Tezu 4</b> — eksplicitna tema nas vs njih.` },

  /* ── SVEĆENIK (3) ── */
  { id:"h09c25", cat:"svecenik", diff:"advanced", tez:[1,7], mustKnow:false,
    author:"Camus", loc:"Stranac, II/5 — ćelija",
    txt:`„Sve ovi kameni zidovi razlučuju se na lice koje pati."`,
    useHtml:`Svećenik pokušava nagovoriti Meursaulta da vidi <em>Krista u zidu ćelije</em>. <b>Religiozna utjeha vs apsurd</b>. Meursault odbija — vidi samo zidove. Za <b>Tezu 1</b> (apsurd) i <b>Tezu 7</b> (pobuna).` },

  { id:"h09c26", cat:"svecenik", diff:"advanced", tez:[7],   mustKnow:false,
    author:"Camus", loc:"Stranac, II/5 — ćelija",
    txt:`„Zar volite ovu zemlju toliko?"`,
    useHtml:`Svećenikovo pitanje — pokušava razumjeti zašto Meursault odbija nadu u onaj svijet. Meursault <em>voli ovu zemlju, sunce, more</em> — to je njegova nada. Za <b>Tezu 7</b>.` },

  { id:"h09c27", cat:"svecenik", diff:"basic",    tez:[1],   mustKnow:false,
    author:"Camus", loc:"Stranac, II/5 — ćelija",
    txt:`„Sigurni ste? Stvarno sigurni?"`,
    useHtml:`Svećenik ne može povjerovati u Meursaultovu sigurnost u ne-postojanje Boga. <em>Religioznost ne može pojmiti apsurd kao stabilnu poziciju</em>. Za <b>Tezu 1</b>.` },

  /* ── MAJKA (2) ── */
  { id:"h09c28", cat:"egzist-porodica", diff:"advanced", tez:[6,7], mustKnow:false,
    author:"Camus", loc:"Stranac, II/5 — Meursaultova refleksija",
    txt:`„Mama je tako blizu smrti morala je osjećati oslobođenje, spremna ponovno proživjeti sve."`,
    useHtml:`Meursault u finalu razumije <em>majku po prvi put</em>. Spremna proživjeti sve — i on je sad spreman. Za <b>Tezu 7</b> — paralelizam Meursault-majka u trenutku prosvjetljenja.` },

  { id:"h09c29", cat:"egzist-porodica", diff:"basic",    tez:[6],   mustKnow:false,
    author:"Camus", loc:"Stranac, I/1 — dom staraca u Marengu",
    txt:`„Doma majka je imala vremena da ne plače."`,
    useHtml:`Meursaultova retrospektivna refleksija o majci. <em>Ona je bila slična njemu</em> — bez ritualne tuge. Za <b>Tezu 6</b> — Meursault nije anomalija, on je <em>sin svoje majke</em>.` },

  /* ── CAMUS biografski / teorijski (5) ── */
  { id:"h09c30", cat:"camus", diff:"basic",    tez:[1,7], mustKnow:true,
    author:"Camus", loc:"Mit o Sizifu, 1942. — finalna rečenica",
    txt:`„Treba zamisliti Sizifa sretnim."`,
    useHtml:`<b>Camusova najpoznatija filozofska rečenica</b>. Pobuna nije junaštvo — ona je <em>sretno prihvaćanje besmisla</em>. Za <b>Tezu 7</b> i <b>Tezu 1</b>. MORA napamet — povezuje Stranca s teorijom.` },

  { id:"h09c31", cat:"camus", diff:"basic",    tez:[1],   mustKnow:true,
    author:"Camus", loc:"Mit o Sizifu, 1942. — uvod",
    txt:`„Postoji samo jedan ozbiljan filozofski problem — samoubojstvo."`,
    useHtml:`Otvaranje Mita o Sizifu. <em>Vrijedi li život živjeti?</em> Camus odbija samoubojstvo i bijeg u religiju — bira pobunu. Za <b>Tezu 1</b>. MORA napamet — kontekst Stranca.` },

  { id:"h09c32", cat:"camus", diff:"advanced", tez:[1,2], mustKnow:false,
    author:"Camus", loc:"Predgovor američkom izdanju Stranca, 1955.",
    txt:`„U našem društvu, svaki čovjek koji ne plače na pogrebu svoje majke izlaže se opasnosti da bude osuđen na smrt."`,
    useHtml:`<b>Camusov vlastiti komentar romana</b>. Eksplicitno povezuje Meursaultovu sudbinu s društvenim konvencijama. Za <b>Tezu 2</b> i <b>Tezu 4</b>. <em>Iznimno citirano u literaturi.</em>` },

  { id:"h09c33", cat:"camus", diff:"advanced", tez:[1,2], mustKnow:false,
    author:"Camus", loc:"Predgovor američkom izdanju Stranca, 1955.",
    txt:`„Meursault nije prazan, već nastanjen strašću dubokom, jer tvrdoglavom — strašću za apsolutnim i istinom."`,
    useHtml:`Camus brani Meursaulta od optužbe za prazninu. <em>Ne ravnodušnost, nego strast za istinom</em>. Za <b>Tezu 2</b> — Meursault nije bezosjećajan, on je <em>radikalno iskren</em>.` },

  { id:"h09c34", cat:"camus", diff:"advanced", tez:[1],   mustKnow:false,
    author:"Camus", loc:"Pobunjeni čovjek, 1951.",
    txt:`„Pobunjujem se, dakle jesmo."`,
    useHtml:`Camusova preformulacija Descartesovog cogito. <em>Pobuna utemeljuje zajedništvo</em> — solidarnost rodom apsurda. Za <b>Tezu 7</b> — pokazuje gdje Camus ide nakon Stranca (ciklus pobune).` },

  /* ── KONTEKST / INTERPRETATORI (6) ── */
  { id:"h09c35", cat:"kontekst", eyeLabel:"SARTRE O STRANCU",
    diff:"advanced", tez:[1,5], mustKnow:false,
    author:"Sartre", loc:"Esej o Strancu, 1943.",
    txt:`„Camusova rečenica je čista, jasna i lišena unutarnje povezanosti — ona je kao otok."`,
    useHtml:`Sartre opisuje Camusovu bijelu prozu. <em>Otok</em> = svaka rečenica samostalna. Za <b>Tezu 5</b> (stilska analiza). Sjajno za esej koji raspravlja o stilu.` },

  { id:"h09c36", cat:"kontekst", eyeLabel:"BARTHES O BIJELOJ PROZI",
    diff:"advanced", tez:[5],   mustKnow:false,
    author:"Roland Barthes", loc:"Stupanj nule pisanja, 1953.",
    txt:`„Stranac je inaugurirao novi tip pripovijedanja u francuskoj književnosti — pisanje stupnja nule."`,
    useHtml:`Barthesova teorijska kategorija pisanja stupnja nule formulirana je <em>kao opis Camusovog stila</em>. Za <b>Tezu 5</b> — visoka teorijska podloga.` },

  { id:"h09c37", cat:"kontekst", eyeLabel:"SAID — POSTKOLONIJALNA KRITIKA",
    diff:"advanced", tez:[4],   mustKnow:false,
    author:"Edward Said", loc:"Kultura i imperijalizam, 1993.",
    txt:`„Camusov Alžir je kolonijalni svijet — ali ga roman ne tematizira."`,
    useHtml:`Saidova postkolonijalna kritika — <em>Arapin nema imena, nema biografije</em>. Za maturski esej koji uključuje suvremenu kritiku.` },

  { id:"h09c38", cat:"kontekst", eyeLabel:"DAOUD — ARAPIN ODGOVARA",
    diff:"advanced", tez:[4],   mustKnow:false,
    author:"Kamel Daoud", loc:"Meursaultova istraga, 2013.",
    txt:`„Arapin se zvao Musa. Imao je obitelj. Imao je lice."`,
    useHtml:`Alžirsko-francuski autor Daoud daje glas ubijenom Arapinu. <em>Roman-odgovor 70 godina kasnije</em>. Za <b>Tezu 4</b> i postkolonijalnu interpretaciju. Suvremena recepcija Stranca.` },

  { id:"h09c39", cat:"kontekst", eyeLabel:"ADORNO — POSLIJE AUSCHWITZA",
    diff:"advanced", tez:[1],   mustKnow:false,
    author:"Theodor Adorno", loc:"Kulturna kritika i društvo, 1949.",
    txt:`„Pisati pjesmu nakon Auschwitza je barbarski."`,
    useHtml:`Adornova rečenica izriče <em>nemogućnost lirske utjehe nakon Holokausta</em>. <b>Stranac (1942.) anticipira ovo stanje</b> — u tijeku rata. Za kontekst egzistencijalizma.` },

  { id:"h09c40", cat:"kontekst", eyeLabel:"SARTRE O EGZISTENCIJALIZMU",
    diff:"advanced", tez:[1],   mustKnow:false,
    author:"Sartre", loc:"Egzistencijalizam je humanizam, 1946.",
    txt:`„Egzistencija prethodi esenciji."`,
    useHtml:`<b>Najslavnija formula egzistencijalizma</b>. Čovjek nema unaprijed određenu svrhu — sam sebe stvara izborima. Camus se ograđuje od egzistencijalizma, ali dijeli pretpostavku. Za <b>Tezu 1</b>.` },
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

  const eyeLabel = c.eyeLabel || cfg.label;

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
  const richHtml=c.useHtml.replace(/<b>/g,`<b style="${bStyle}">`).replace(/<em>/g,`<em style="${emStyle}">`);

  return(
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:"var(--card,#120808)",border:`1px solid ${hov?"var(--bd-br,rgba(220,50,47,.3))":"var(--bdm,#2c1f1f)"}`,borderRadius:14,padding:"18px 20px 16px 22px",transition:"all .22s cubic-bezier(.4,0,.2,1)",position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",transform:hov?"translateY(-2px)":"none",boxShadow:hov?"0 8px 24px rgba(220,50,47,.08)":"none",willChange:"transform"}}>

      {/* stripe */}
      <div style={{position:"absolute",left:0,top:14,bottom:14,width:hov?3:2,background:cfg.stripe,opacity:hov?.9:.4,borderRadius:"0 2px 2px 0",transition:"opacity .22s,width .22s",pointerEvents:"none"}}/>

      {/* actions */}
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

      {/* eyebrow */}
      <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:8,paddingRight:68}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.8px",textTransform:"uppercase",fontWeight:700,padding:"2px 8px",borderRadius:6,...cfg.eye}}>{eyeLabel}</span>
        {c.mustKnow&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--gold,#e9b446)",padding:"2px 8px",background:"var(--dim-go,rgba(232,201,122,.12))",border:"1px solid var(--bd-go,rgba(232,201,122,.3))",borderRadius:6,fontWeight:700}}>★ Napamet</span>}
        {c.diff==="advanced"&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",padding:"2px 8px",background:"var(--dim-br,rgba(220,50,47,.08))",border:"1px solid var(--bd-br,rgba(220,50,47,.2))",borderRadius:6,fontWeight:700}}>NAPREDNI</span>}
      </div>

      {/* cit-src */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:10,color:"var(--t3,#8c7b72)",letterSpacing:".5px",marginTop:10,display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",paddingTop:8,borderTop:"1px dashed var(--bdm,#2c1f1f)"}}>
        <b style={{color:"var(--bronze-l,#cd853f)",fontWeight:700,fontSize:"10.5px",letterSpacing:".3px"}}>{c.author}</b>
        <span style={{fontStyle:"italic",fontSize:10}}>{c.loc}</span>
      </div>

      {/* quote */}
      <div style={{fontFamily:"'EB Garamond',Georgia,serif",fontSize:16,fontStyle:"italic",fontWeight:400,color:hov?"#fef3e2":"var(--t1,#f4ede5)",lineHeight:1.55,margin:"12px 0 14px",letterSpacing:.15,transition:"color .22s"}}>
        {c.txt}
      </div>

      {/* tez tags */}
      {c.tez&&c.tez.length>0&&(
        <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:12}}>
          {c.tez.map(t=>(
            <button key={t} onClick={()=>onTezClick(t)}
              style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"var(--teal,#4ecdc4)",background:"var(--dim-t,rgba(78,205,196,.12))",border:"1px solid var(--bd-t,rgba(78,205,196,.25))",borderRadius:6,padding:"2px 8px",cursor:"pointer",transition:"all .15s"}}>
              T{t}
            </button>
          ))}
        </div>
      )}

      {/* use */}
      <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13,color:"var(--t2,#c5b8aa)",lineHeight:1.6,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)"}}>
        <b style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",display:"block",marginBottom:5}}>Kada koristiti</b>
        <span dangerouslySetInnerHTML={{__html:richHtml}}/>
      </div>
    </div>
  );
}

/* ══ MAIN ══ */
export default function CitatnikH09({onBack, onNext}){
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
    const matchTez  = tezFilter==="all"||(c.tez&&c.tez.includes(Number(tezFilter)));
    const matchDiff = diffFilter==="all"||c.diff===diffFilter;
    const matchFav  = !favOnly||!!favs[c.id];
    const hay       = normalize(c.author+" "+(c.loc||"")+" "+c.txt+" "+c.useHtml);
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

      {/* INTRO */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>💬 Citati — arsenal za esej o Camusu / Strancu</div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja.{" "}
          <b>40 probranih citata</b>: <em>Meursault</em> (12), Marie (4), Raymond (3), Salamano (2), Tužitelj (3), Svećenik (3), majka (2), plus <b>5 Camusovih biografskih/teorijskih</b> (Mit o Sizifu, Pobunjeni čovjek) i <b>6 interpretatora</b> (Sartre, Barthes, Said, Daoud, Adorno).{" "}
          <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>.{" "}
          <b>8 must-know citata</b> označeno je <em>★ Napamet</em>.
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"18px 0 10px"}}>
        {[
          {key:"all",              label:"Svi (40)",              spec:false},
          {key:"must",             label:"★ Napamet (8)",         spec:true},
          {key:"meursault",        label:"🔆 Meursault (12)",     spec:false},
          {key:"marie",            label:"💋 Marie (4)",          spec:false},
          {key:"raymond",          label:"👊 Raymond (3)",        spec:false},
          {key:"salamano",         label:"🐕 Salamano (2)",       spec:false},
          {key:"tuzitelj",         label:"⚖ Tužitelj (3)",       spec:false},
          {key:"svecenik",         label:"⛪ Svećenik (3)",       spec:false},
          {key:"egzist-porodica",  label:"⚰ Majka (2)",          spec:false},
          {key:"camus",            label:"✒ Camus biograf. (5)",  spec:false},
          {key:"kontekst",         label:"🧠 Kontekst (6)",       spec:false},
        ].map(f=>(
          <button key={f.key} onClick={()=>setCatFilter(f.key)} style={fbtn(catFilter===f.key,f.spec)}>{f.label}</button>
        ))}
      </div>

      {/* SUB-FILTERS */}
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

      {/* COUNT */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:11,color:"var(--t3,#8c7b72)",marginBottom:14,letterSpacing:.3,display:"flex",alignItems:"center",gap:10}}>
        <span><b style={{color:"var(--bronze-l,#cd853f)",fontWeight:700}}>{filtered.length}</b> od {CITATI.length} citata prikazano</span>
        {hasActive&&<button onClick={clearAll} style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",background:"transparent",border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:6,padding:"3px 9px",cursor:"pointer",display:"inline-flex"}}>Resetiraj filtere</button>}
      </div>

      {/* SEARCH */}
      <div style={{margin:"14px 0 16px",display:"flex",gap:8,alignItems:"center"}}>
        <span style={{fontSize:18,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input type="search" value={q} onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži citate (npr. Camus, Meursault, apsurd, stranac)…"
          aria-label="Pretraži citate" autoComplete="off"
          style={{flex:1,padding:"10px 14px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:10,color:"var(--t1,#f4ede5)",fontFamily:"var(--mono,monospace)",fontSize:13,outline:"none"}}
        />
        {q&&<button onClick={()=>setQ("")} aria-label="Očisti pretragu" style={{padding:"8px 12px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:8,color:"var(--t2,#c5b8aa)",cursor:"pointer",fontSize:14}}>✕</button>}
      </div>

      {/* EMPTY */}
      {filtered.length===0&&(
        <div style={{background:"var(--card,#120808)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:14,padding:"32px 20px",textAlign:"center",fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t3,#8c7b72)",fontStyle:"italic",margin:"16px 0"}}>
          <b style={{color:"var(--bronze-l,#cd853f)",fontStyle:"normal",fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,display:"block",marginBottom:8}}>Nema rezultata</b>
          Niti jedan citat ne zadovoljava trenutne filtere. Probaj drugu kombinaciju ili resetiraj filtere.
        </div>
      )}

      {/* GRID */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:14,marginTop:4}}>
        {filtered.map(c=>(
          <div key={c.id} id={"cc-"+c.id}>
            <CitCard c={c} favs={favs} copyCount={copyCount} onFav={handleFav} onCopy={handleCopy} onTezClick={handleTezClick}/>
          </div>
        ))}
      </div>

      <Toast msg={toast.msg} on={toast.on}/>

      {/* NAV */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:32}}>
        {onBack&&<button onClick={onBack} style={{background:"none",border:"none",color:"var(--t2,#c5b8aa)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer"}}>← ✍ Esej alat</button>}
        {onNext&&<button onClick={onNext} style={{background:"none",border:"none",color:"var(--bronze-l,#cd853f)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer",fontWeight:600}}>📚 Pojmovnik →</button>}
      </div>
    </div>
  );
}
