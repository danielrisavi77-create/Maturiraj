'use client';
import { useState, useRef } from "react";
import { useLocalStorageJson } from "@/lib/hooks/useLocalStorageJson";

/* ══════════════════════════════════════════════════════
   CITATNIK H06 — Onjegin · Byron · Faust · Engleski romantizam · Ruski kontekst
   35 citata — v9.1 identičan HTML implementaciji
   FIX: svi txt/useHtml s hrv. navodnicima koriste backtick template literals
   ══════════════════════════════════════════════════════ */

const LS_FAV  = "mt.hrv.h06.cit_favs";
const LS_COPY = "mt.hrv.h06.cit_copy";

const CAT_CFG = {
  onjegin: { label:"ONJEGIN",   stripe:"var(--red,#e05252)",   eye:{ color:"var(--red-l,#f87171)",   background:"var(--dim-r,rgba(224,82,82,.12))",    border:"1px solid var(--bd-r,rgba(224,82,82,.25))"    }},
  byron:   { label:"BYRON",     stripe:"var(--gold,#e9b446)",  eye:{ color:"var(--gold,#e9b446)",    background:"var(--dim-go,rgba(232,201,122,.12))", border:"1px solid var(--bd-go,rgba(232,201,122,.3))" }},
  faust:   { label:"FAUST",     stripe:"#e0a077",              eye:{ color:"#e0a077",                background:"rgba(224,160,119,.12)",               border:"1px solid rgba(224,160,119,.25)"             }},
  engl:    { label:"ENG. ROM.", stripe:"var(--green,#50c878)", eye:{ color:"var(--green-l,#6ee7a0)", background:"var(--dim-g,rgba(80,200,120,.12))",   border:"1px solid var(--bd-g,rgba(80,200,120,.25))"  }},
  ruski:   { label:"KONTEKST",  stripe:"#c5a1d9",              eye:{ color:"#c5a1d9",                background:"rgba(197,161,217,.12)",               border:"1px solid rgba(197,161,217,.25)"             }},
};

const CITATI = [
  /* ── ONJEGIN (14) ── */
  { id:"h06c01", cat:"onjegin", diff:"basic",    tez:[2],   mustKnow:true,
    author:"Puškin", work:"Evgenij Onjegin, III poglavlje — Tatjanino pismo",
    txt:`„Pišem Vam — što još reći? Što mogu više dodati? Sad znam — u vašoj je vlasti da me prezirom kaznite."`,
    useHtml:`početak Tatjaninog pisma Onjeginu. <em>Prva eksplicitna izjava ljubavi žene u ruskoj književnosti.</em> Za Tezu 2 (Tatjana kao moralna vertikala) — Tatjana riskira čast iz iskrenosti. Neizostavan citat za esej o djelu.` },

  { id:"h06c02", cat:"onjegin", diff:"basic",    tez:[2,7], mustKnow:true,
    author:"Puškin", work:"Evgenij Onjegin, VIII poglavlje — Tatjanin odgovor Onjeginu",
    txt:`„Ja vas ljubim (zašto bih lagala?), ali drugomu sam dana — i vjerna ću mu biti zauvijek."`,
    useHtml:`<b>ključ za Tezu 2.</b> Tatjanin finalni monolog — priznaje ljubav, odbija akciju. <em>Moralna dosljednost iznad emocije.</em> Citat je ušao u rusku kulturu kao formula ženskog integriteta. Absolutni must-know za esej.` },

  { id:"h06c03", cat:"onjegin", diff:"basic",    tez:[2],   mustKnow:true,
    author:"Puškin", work:"Evgenij Onjegin, o Tatjani",
    txt:`„Ruska dušom, iako nije znala zašto."`,
    useHtml:`za argument da je <em>Tatjana utjelovljenje ruske duše</em>. Iako je odgajana u francuskoj kulturi (pismo piše na francuskom), po osjećajima je autentično ruska. <b>Puškinov etnopsihološki iskaz</b>. Baza za Tezu 2.` },

  { id:"h06c04", cat:"onjegin", diff:"advanced", tez:[3,5], mustKnow:true,
    author:"Puškin", work:"Evgenij Onjegin, VII poglavlje — Tatjanin uvid",
    txt:`„Parodija, sjena, čovjek bez originalnosti."`,
    useHtml:`Tatjana u Onjeginovoj napuštenoj kući čita njegove knjige i shvaća da je on <em>knjiška imitacija</em> byronskog junaka. <b>Puškinova kritika byronizma kao poze.</b> Za Teze 3 i 5 — razotkrivanje romantičkih iluzija.` },

  { id:"h06c05", cat:"onjegin", diff:"basic",    tez:[1,6], mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin, I poglavlje — o Onjeginu",
    txt:`„Pobolestila ga je bolest kojoj je davno trebalo dati ime — ruska dosada."`,
    useHtml:`parafraza za Onjeginovu melankoliju. Puškin dijagnostuje suvremeno stanje <em>bolest</em> plemstva. <b>Temelj za Tezu 1 — suvišan čovjek.</b> Ruska dosada = kasniji pojam splin kod Baudelairea (H07/H08).` },

  { id:"h06c06", cat:"onjegin", diff:"advanced", tez:[1],   mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin, pripovjedačev komentar",
    txt:`„Onjegin je moj dobri prijatelj — ali je s njim ipak postoji mnoštvo razlika."`,
    useHtml:`<b>ključ za Grešku 4 (ne brkati Puškina i Onjegina).</b> Puškin se eksplicitno ograđuje. Za argument o <em>pripovjedaču kao liku</em> u romanu (Teza 4 — roman u stihovima kao forma).` },

  { id:"h06c07", cat:"onjegin", diff:"advanced", tez:[1,3], mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin, VI poglavlje — Puškinova digresija o Lenskom",
    txt:`„Možda bi postao veliki pjesnik — a možda, tko zna, samo debeli gospodin s podagrom."`,
    useHtml:`Puškinova ironijska digresija nakon Lenskove smrti. <em>Ironijski ruši romantički kult genija.</em> <b>Temelj za Grešku 5</b> (ne ignorirati Puškinovu ironiju). Citat pokazuje prijelaz iz romantizma u realizam.` },

  { id:"h06c08", cat:"onjegin", diff:"advanced", tez:[3],   mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin — pripovjedač o Tatjani",
    txt:`„Tatjana, voljena Tatjana! Nad tobom sam suzu prolio."`,
    useHtml:`eksplicitno ljubavno obraćanje pripovjedača svojoj junakinji. <em>Puškinov odnos prema Tatjani.</em> Za Tezu 2 i Tezu 4 — pripovjedač nije neutralan, ima emocionalni odnos prema likovima.` },

  { id:"h06c09", cat:"onjegin", diff:"advanced", tez:[4,5], mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin — opis Onjeginove dosade",
    txt:`„Sve je pogledao — i sve mu je dosadilo."`,
    useHtml:`sažetak Onjeginovog stanja. <em>Zasićenost, splin, dosada</em> — glavni simptom suvišnog čovjeka. Za Tezu 1 — veza s kasnijim Baudelaireovim <em>splinom</em> i egzistencijalističkim apsurdom (Camus — <b>obvezatno 2026</b>).` },

  { id:"h06c19", cat:"onjegin", diff:"advanced", tez:[],    mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin, I poglavlje — Onjeginova dosada",
    txt:`„Hladan um, ali vatreno srce — takav je moj junak."`,
    useHtml:`Puškinov sažetak Onjeginove dvostrukosti. <em>Romantička tenzija između razuma i strasti.</em> Za Tezu 1 i Tezu 3 — Onjegin je tipski byronski junak ali s puškinskom autorskom distancom. <b>Ne idealizacija, ne karikatura</b> — psihološka preciznost.` },

  { id:"h06c20", cat:"onjegin", diff:"basic",    tez:[],    mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin, VIII poglavlje — Onjeginovo priznanje",
    txt:`„Ljubav me zarobila — evo kazne za moju pomiješanost."`,
    useHtml:`Onjeginov pokajnički monolog u finalu (VIII. poglavlje). Priznaje da je <em>pogriješio odbacivši Tatjanu</em>. Ovo je okret — Onjegin prestaje biti cinik, postaje pravi tragični lik. <em>Ironija:</em> točno kad nauči voljeti, nauči i gubiti. Za Tezu 5 i Tezu 7.` },

  { id:"h06c21", cat:"onjegin", diff:"advanced", tez:[],    mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin, VI poglavlje — nakon duela",
    txt:`„Ubio si prijatelja — to je najveća krivica koja se može imati."`,
    useHtml:`Puškinov moralni komentar nakon Lenskove smrti. <em>Ne bijesni napad, nego tiha konstatacija</em>. Onjegin ne može pobjeći od ove krivice — ona ga progoni kroz ostatak romana. Za povezivanje s Dostojevskim (<b>Zločin i kazna</b> — obvezatno 2026), gdje je krivica centralna tema.` },

  { id:"h06c31", cat:"onjegin", diff:"advanced", tez:[3],   mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin, II poglavlje — o Lenskom",
    txt:`„Pjevao je ljubav, pjevao je poslušan ljubavi — glas njegov bijaše čist i mladenački kao san."`,
    useHtml:`za <b>Tezu 3</b> (dva lica romantizma) — Lenski kao <em>naivni idealistički romantičar</em>. Puškin ga prikazuje kroz ironijsku nježnost. Poginut će u duelu u VI. pogl. Kontrast Onjeginu.` },

  { id:"h06c32", cat:"onjegin", diff:"advanced", tez:[7],   mustKnow:false,
    author:"Puškin", work:"Evgenij Onjegin, VI poglavlje — Puškinov digresijski komentar",
    txt:`„Blago onomu tko je mladost upoznao, tko ju je na vrijeme ostavio…"`,
    useHtml:`najpoznatija Puškinova <em>digresija</em> u djelu. Meditacija o životnim fazama. <b>Teza 7 (antiklimaks finale)</b> — roman nije samo ljubavna priča nego i razmišljanje o prolaznosti. Citat pokazuje da je Puškin filozof, ne samo pripovjedač.` },

  /* ── BYRON (5) ── */
  { id:"h06c10", cat:"byron", diff:"basic",    tez:[5], mustKnow:false,
    author:"Byron", work:"Childe Haroldovo hodočašće, IV pjevanje (1818.)",
    txt:`„Ima zadovoljstvo u pustim šumama, / Ima zanos na obali samoćnoj."`,
    useHtml:`manifest romantičkog individualizma — <em>samoća kao duhovni put</em>. Za Tezu 3 (dva lica romantizma) — byronizam kao inspiracija za Onjegina. <b>Childe Harold</b> je djelo koje je Onjegin čitao; Tatjana ga pronalazi u njegovoj knjižnici.` },

  { id:"h06c11", cat:"byron", diff:"basic",    tez:[5], mustKnow:false,
    author:"Byron", work:"Don Juan (1819.–1824.)",
    txt:`„Spavaj, bratu moj; ne puni moj san mrkim slikama."`,
    useHtml:`<b>Don Juan</b> kao Byronova ironijsko-epska poema (nedovršena — Byron umire 1824.). <em>Parodija romantičkog junaka</em> — slično Puškinovoj ironiji prema Onjeginu. Za argument o <b>utjecaju Byrona na Puškina</b> (Teza 3).` },

  { id:"h06c12", cat:"byron", diff:"advanced", tez:[5], mustKnow:false,
    author:"Byron", work:"Manfred (1817.)",
    txt:`„Nisam tražio pravo samo za sebe, tražio sam istinu."`,
    useHtml:`<b>Manfred</b> je Byronova drama o demonskom junaku koji komunicira s nadnaravnim bićima. Prethodnik Goetheova Fausta u modernom smislu. <em>Arhetip demonskog junaka</em> — središnji pojam romantizma. Za Tezu 3.` },

  { id:"h06c22", cat:"byron", diff:"basic",    tez:[],  mustKnow:false,
    author:"Byron", work:"Childe Harold, III pjevanje (1816.) — o samoći",
    txt:`„Usamljen sam, sam, najsamljeniji od svih samih."`,
    useHtml:`<b>arhetipska formulacija byronskog heroja</b>. Izolacija kao moralna superiornost, ne patologija. Utjecaj na Puškinov prikaz Onjegina — ali Puškin dodaje ironiju koju Byron nema. <em>Paralela s Tatjanom u finalu</em> — ona odabire samoću vjernosti, ne sudbinu.` },

  { id:"h06c33", cat:"byron", diff:"advanced", tez:[5], mustKnow:false,
    author:"Byron", work:"Childe Harold, Canto III (1816.)",
    txt:`„Ja nisam voljen — ja volim. Ja nisam voljen — ali zato ja i živim."`,
    useHtml:`za <b>Tezu 5</b> (Puškin–Byron) — formula byronskog heroja: ljubav kao usamljeni čin, bez uzvrata. Ključno za razumijevanje <em>byronizma kao pozicije prema svijetu</em>. Utjecalo na Onjegina — ali Puškin okreće: Tatjana ga voli, on ne uzvraća.` },

  /* ── FAUST (3) ── */
  { id:"h06c13", cat:"faust", diff:"advanced", tez:[5], mustKnow:false,
    author:"Goethe", work:"Faust I (1808.)",
    txt:`„Dvije duše žive, ah, u mojim prsima — jedna od druge odvojena hoće biti."`,
    useHtml:`najpoznatiji citat Fausta. <em>Dvostruka priroda romantičkog junaka</em> — duh vs tijelo, ideal vs strast. Za povezivanje romantizma i psihologije. <b>Faust je najvažnije djelo Goetheove kasne faze</b> — dopuna H05 (Werther).` },

  { id:"h06c14", cat:"faust", diff:"basic",    tez:[],  mustKnow:false,
    author:"Goethe", work:"Faust I, Faustov ugovor s Mefistofelesom",
    txt:`„Zaustavi se, trenutku! Tako si lijep."`,
    useHtml:`<em>Faustov ugovor</em> — ako ikad kaže ove riječi pred ljepotom trenutka, Mefistofeles uzima njegovu dušu. <b>Metafora romantičke težnje za apsolutnim.</b> U Faustu II (1832.) Faust ih izgovori — ali ironično, pred viđenjem budućeg čovječanstva.` },

  { id:"h06c15", cat:"faust", diff:"advanced", tez:[],  mustKnow:false,
    author:"Goethe", work:"Faust II, finale (1832., posmrtno)",
    txt:`„Tko teži, neumorno tražeći — tog možemo izbaviti."`,
    useHtml:`Goetheov finalni stih Fausta — <em>spasenje kroz trud</em>, ne zasluge. Anđeli spašavaju Fausta jer nikad nije prestao tražiti. <b>Metafora modernog čovjeka</b> — beskonačna težnja kao smisao života. Ključ romantičke filozofije.` },

  /* ── ENGLESKI ROMANTIZAM (6) ── */
  { id:"h06c16", cat:"engl", diff:"advanced", tez:[], mustKnow:false,
    author:"Wordsworth", work:"I Wandered Lonely as a Cloud (1807.)",
    txt:`„Lutao sam usamljen kao oblak što lebdi visoko nad dolinama i brdima."`,
    useHtml:`manifest engleskog romantizma — <em>pojedinac u prirodi kao izvor umjetničkog nadahnuća</em>. Poznate Daffodils — žute sunovrate koje Wordsworth vidi u lugu. <b>Priroda kao ogledalo duše</b> — centralni romantički motiv.` },

  { id:"h06c17", cat:"engl", diff:"basic",    tez:[], mustKnow:false,
    author:"Keats", work:"Oda grčkoj vazi (1819.)",
    txt:`„Ljepota je istina, istina ljepota."`,
    useHtml:`Keatsova filozofska formula — <em>estetika kao najviši oblik spoznaje</em>. Romantizam prije svega <b>estetska revolucija</b>. Keats umire od tuberkuloze s 25 godina — <em>tragični romantički genij</em>. Citat ušao u kulturnu svijest Zapada.` },

  { id:"h06c18", cat:"engl", diff:"basic",    tez:[], mustKnow:false,
    author:"Coleridge", work:"The Rime of the Ancient Mariner (1798.)",
    txt:`„Voda, voda svuda — ni kapi za piti."`,
    useHtml:`iz Coleridgeove balade o pomorskom jadu i grijehu. <em>Natprirodno + morska avantura + moralna simbolika</em>. Iz <b>Lyrical Ballads (1798.)</b> — manifest engleskog romantizma zajedno s Wordsworthom. Citat ušao u engleski jezik kao formula za obilje bez mogućnosti korištenja.` },

  { id:"h06c23", cat:"engl", diff:"advanced", tez:[], mustKnow:false,
    author:"Shelley", work:"Oslobođeni Prometej (1820.)",
    txt:`„Ljubav je samo svjetlost duše."`,
    useHtml:`Shelley (1792.–1822.) — druga generacija engleskog romantizma, radikalni ateist, utopist. <em>Oslobođeni Prometej</em> — drama o mitskom titanu koji krade vatru za čovječanstvo. <b>Utopijski humanizam</b> kao romantička struja. Umro utapanjem s 29 godina.` },

  { id:"h06c24", cat:"engl", diff:"advanced", tez:[], mustKnow:false,
    author:"Blake", work:"Songs of Innocence and of Experience (1794.)",
    txt:`„Tigar, tigar, blještav plam — u tamnim šumama noći sja."`,
    useHtml:`William Blake (1757.–1827.) — mistik, pjesnik-slikar, prethodnik romantizma. <em>The Tyger</em> — metafora stvaralačke snage (umjetničke i destruktivne). Blake <b>stvara vlastiti mitološki sustav</b> — prethodi Jungovoj psihologiji. Ključan za razumijevanje romantičke mistike.` },

  { id:"h06c34", cat:"engl", diff:"advanced", tez:[], mustKnow:false,
    author:"Wordsworth", work:"Prelude, Knjiga I (1805.)",
    txt:`„Pjesničar je čovjek koji govori ljudima — jačim osjećajima, širom sviješću, dubljom ljubavlju prema čovjeku."`,
    useHtml:`<em>definicija romantičkog pjesnika</em>. Wordsworth definira novu koncepciju — pjesnik kao <b>privilegirana svijest</b>, ne samo majstor forme. Kontrast s klasicističkim učenim pjesnikom. Za esej o romantičkoj teoriji.` },

  /* ── RUSKI KONTEKST (7) ── */
  { id:"h06c25", cat:"ruski", diff:"basic",    tez:[4], mustKnow:true,
    author:"Visarion Belinski", work:"o Evgeniju Onjeginu (1844.)",
    txt:`„Evgenij Onjegin je enciklopedija ruskog života."`,
    useHtml:`Belinski (1811.–1848.) — najvažniji ruski književni kritičar 19. st. <em>Najpoznatija rečenica o Onjeginu</em> — postala je standardna formula. <b>Ključ za Tezu 4</b> (roman u stihovima kao forma). Citat se očekuje u svakom ozbiljnom eseju o Puškinu. Must-know za maturu.` },

  { id:"h06c26", cat:"ruski", diff:"advanced", tez:[2], mustKnow:false,
    author:"Fjodor Dostojevski", work:"Puškinova govor (1880.)",
    txt:`„Tatjana je apoteoza ruske žene, tipična je do savršenstva… Ona je savršenija od Onjegina."`,
    useHtml:`Dostojevski (autor <b>Zločina i kazne</b> — obvezatno 2026) eksplicitno komentira Puškinove likove u svom slavnom govoru u Moskvi. <em>Ključ za most H06 i Tezu 2.</em> Tatjanin moralni integritet antecedent je Sonji Marmeladove u Zločinu i kazni.` },

  { id:"h06c27", cat:"ruski", diff:"basic",    tez:[], mustKnow:false,
    author:"Apollon Grigorjev", work:"o Puškinu (1859.)",
    txt:`„Puškin je naše sve."`,
    useHtml:`Grigorjevljeva formula postala je najpoznatija fraza ruske kulture o Puškinu. <em>Kontekst: Puškin je za Ruse što je Shakespeare za Engleze, Goethe za Nijemce</em> — utemeljitelj nacionalne književnosti. Citat u eseju o kulturnom značaju Puškina.` },

  { id:"h06c28", cat:"ruski", diff:"advanced", tez:[], mustKnow:false,
    author:"Heinrich Heine", work:"Buch der Lieder (1827.)",
    txt:`„Romantizam nije ništa drugo nego buđenje srednjovjekovne poezije."`,
    useHtml:`Heine (1797.–1856.) — njemački romantičar koji <em>razotkriva</em> romantizam iznutra. Teorijska definicija — romantizam kao povratak srednjovjekovnim motivima, legendama, balade. Za teoriju epohe i esej o romantičkoj estetici.` },

  { id:"h06c29", cat:"ruski", diff:"advanced", tez:[], mustKnow:false,
    author:"Victor Hugo", work:"Predgovor Cromwellu (1827.)",
    txt:`„Sveto i grotesko, sublimo i apsurd — priroda ih spaja, i kazalište ih mora spajati."`,
    useHtml:`<b>Manifest francuskog romantizma.</b> Hugo (1802.–1885.) u predgovoru drami <em>Cromwell</em> definira estetiku romantizma protiv klasicizma: miješanje žanrova, sublime + grotesque. Za esej o romantičkoj estetici.` },

  { id:"h06c30", cat:"ruski", diff:"advanced", tez:[], mustKnow:false,
    author:"Alphonse de Lamartine", work:"Méditations poétiques (1820.)",
    txt:`„O vrijeme, zaustavi svoj let! A vi, sretni sati, prekinite svoj tok!"`,
    useHtml:`Lamartine (1790.–1869.) — francuski romantičar. <em>Le Lac</em> (Jezero) — arhetipska romantička pjesma o prolaznosti ljubavi i vremena. Usporedba s Goetheovim Zaustavi se, trenutku — romantički motiv zaustavljanja savršenog trenutka u prirodi.` },

  { id:"h06c35", cat:"ruski", diff:"advanced", tez:[5], mustKnow:false,
    author:"Nabokov", work:"Predgovor prijevoda Evgenija Onjegina (1964.)",
    txt:`„Onjegin je u biti prijevod iz Byrona — ali prijevod koji nadilazi original."`,
    useHtml:`Vladimir Nabokov — ruski i američki pisac, najvažniji Puškinov prevoditelj na engleski. <em>Ironijski iskaz</em> — i pohvala i kritika istodobno. Za <b>Tezu 5</b> o Puškinovom odnosu prema Byronu: ne samo imitacija, nego <em>transformacija i prijevazilaženje</em>.` },
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

  const bStyle = `color:var(--t1,#f4ede5);font-weight:600;font-family:var(--serif,Georgia)`;
  const emStyle = `color:var(--t1,#f4ede5);font-style:italic`;
  const richHtml = c.useHtml
    .replace(/<b>/g,`<b style="${bStyle}">`)
    .replace(/<em>/g,`<em style="${emStyle}">`);

  return(
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:"var(--card,#120808)",border:`1px solid ${hov?"var(--bd-br,rgba(220,50,47,.3))":"var(--bdm,#2c1f1f)"}`,borderRadius:14,padding:"18px 20px 16px 22px",transition:"all .22s cubic-bezier(.4,0,.2,1)",position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",transform:hov?"translateY(-2px)":"none",boxShadow:hov?"0 8px 24px rgba(220,50,47,.08)":"none",willChange:"transform"}}>

      {/* left stripe */}
      <div style={{position:"absolute",left:0,top:14,bottom:14,width:hov?3:2,background:cfg.stripe,opacity:hov?.9:.4,borderRadius:"0 2px 2px 0",transition:"opacity .22s,width .22s",pointerEvents:"none"}}/>

      {/* actions */}
      <div style={{position:"absolute",top:14,right:14,display:"flex",gap:3,zIndex:3,opacity:hov||isFav?1:0,transition:"opacity .22s"}}>
        <button onClick={()=>onFav(c.id)} aria-label={isFav?"Ukloni iz favorita":"Dodaj u favorite"}
          style={{width:26,height:26,borderRadius:"50%",padding:0,border:`1px solid ${isFav?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)"}`,background:isFav?"var(--dim-go,rgba(232,201,122,.12))":"var(--ele,#1e1010)",color:isFav?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,transition:"all .15s"}}>
          {isFav?"★":"☆"}
        </button>
        <div style={{position:"relative"}}>
          <button onClick={doCopy} aria-label="Kopiraj citat"
            style={{width:26,height:26,borderRadius:"50%",padding:0,border:"1px solid var(--bdm,#2c1f1f)",background:"var(--ele,#1e1010)",color:"var(--t3,#8c7b72)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,transition:"all .15s"}}>
            📋
          </button>
          {copies>0&&<span style={{position:"absolute",top:-5,right:-5,background:"var(--dim-br,rgba(220,50,47,.08))",color:"var(--bronze-l,#cd853f)",fontSize:7,fontWeight:700,padding:"1px 4px",borderRadius:7,border:"1px solid var(--bd-br,rgba(220,50,47,.2))",fontFamily:"var(--mono,monospace)",lineHeight:1,minWidth:12,textAlign:"center"}}>{copies}</span>}
        </div>
      </div>

      {/* meta */}
      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingRight:68,flexWrap:"wrap"}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,padding:"2px 7px",borderRadius:6,...cfg.eye}}>{cfg.label}</span>
        {c.mustKnow&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,color:"var(--gold,#e9b446)",padding:"2px 7px",background:"var(--dim-go,rgba(232,201,122,.12))",border:"1px solid var(--bd-go,rgba(232,201,122,.3))",borderRadius:6,display:"inline-flex",alignItems:"center",gap:3,boxShadow:"0 0 10px rgba(232,201,122,.12)"}}>★ Napamet</span>}
        {c.diff==="advanced"&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,color:"var(--bronze-l,#cd853f)",border:"1px solid var(--bd-br,rgba(220,50,47,.2))",background:"var(--dim-br,rgba(220,50,47,.08))",padding:"2px 7px",borderRadius:6}}>NAPREDNI</span>}
      </div>

      {/* source */}
      <div style={{marginBottom:4}}>
        <span style={{fontFamily:"var(--display,'EB Garamond',Georgia,serif)",fontSize:13.5,fontWeight:700,color:"var(--bronze-l,#cd853f)",letterSpacing:.4,lineHeight:1.3,display:"block"}}>{c.author}</span>
        {c.work&&<span style={{display:"block",fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:600,letterSpacing:.7,color:"var(--t3,#8c7b72)",marginTop:3,lineHeight:1.5,textTransform:"uppercase",opacity:.85}}>{c.work}</span>}
      </div>

      {/* quote */}
      <div style={{fontFamily:"'EB Garamond',Georgia,serif",fontSize:16,fontStyle:"italic",fontWeight:400,color:hov?"#fef3e2":"var(--t1,#f4ede5)",lineHeight:1.55,margin:"12px 0 14px",letterSpacing:.15,transition:"color .22s"}}>
        {c.txt}
      </div>

      {/* tez tags */}
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

      {/* use */}
      <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13,color:"var(--t2,#c5b8aa)",lineHeight:1.6,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)"}}>
        <b style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",display:"block",marginBottom:5}}>Kada koristiti</b>
        <span dangerouslySetInnerHTML={{__html:richHtml}}/>
      </div>
    </div>
  );
}

/* ══ MAIN ══ */
export default function CitatnikH06({onBack, onNext}){
  const [catFilter,  setCatFilter]  = useState("all");
  const [tezFilter,  setTezFilter]  = useState("all");
  const [diffFilter, setDiffFilter] = useState("all");
  const [favOnly,    setFavOnly]    = useState(false);
  const [q,          setQ]          = useState("");
  const [favs,       setFavs]       = useLocalStorageJson(LS_FAV, {});
  const [copyCount,  setCopyCount]  = useLocalStorageJson(LS_COPY, {});
  const [toast,      setToast]      = useState({on:false,msg:""});
  const toastTimer = useRef(null);

  function showToast(msg){clearTimeout(toastTimer.current);setToast({on:true,msg});toastTimer.current=setTimeout(()=>setToast(p=>({...p,on:false})),1800);}
  function handleFav(id){setFavs(prev=>{const n={...prev};if(n[id])delete n[id];else n[id]=true;return n;});}
  function handleCopy(id){setCopyCount(prev=>{const n={...prev,[id]:(prev[id]||0)+1};return n;});showToast("📋 Citat kopiran");}
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

      {/* INTRO */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>💬 Citati — arsenal za esej o romantizmu</div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja.{" "}
          <b>35 probranih citata</b> iz Puškinova <em>Evgenija Onjegina</em> (14), Byrona (5), Goethea <em>(Faust)</em> (3), engleskog romantizma (6) i ruskog konteksta (7).{" "}
          <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>.{" "}
          <b>5 must-know citata</b> označeno je <em>★ Napamet</em>.
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"18px 0 10px"}}>
        {[
          {key:"all",     label:"Svi (35)",             spec:false},
          {key:"must",    label:"★ Napamet (5)",        spec:true},
          {key:"onjegin", label:"🌹 Onjegin (14)",      spec:false},
          {key:"byron",   label:"⚔ Byron (5)",          spec:false},
          {key:"faust",   label:"🔥 Faust (3)",         spec:false},
          {key:"engl",    label:"🌿 Engleski rom. (6)",  spec:false},
          {key:"ruski",   label:"💭 Ruski kontekst (7)", spec:false},
        ].map(f=>(
          <button key={f.key} onClick={()=>setCatFilter(f.key)} style={fbtn(catFilter===f.key,f.spec)}>{f.label}</button>
        ))}
      </div>

      {/* SUB-FILTERS */}
      <div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"0 0 14px",padding:"10px 14px",background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:10,alignItems:"center"}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginRight:4}}>Tez:</span>
        {["all",1,2,3,4,5,7].map(t=>{
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
          placeholder="Pretraži citate (npr. Onjegin, Puškin, romantizam, suvišan)…"
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
