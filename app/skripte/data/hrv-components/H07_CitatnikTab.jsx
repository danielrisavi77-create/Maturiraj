/**
 * H07_CitatnikTab.jsx
 * Maturiraj.hr — Hrvatski H07 · Tab 3: Citatnik — Zločin i kazna (Dostojevski)
 * 35 citata — v9.1 React implementacija
 */
'use client';

import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   CITATNIK H07 — Zločin i kazna (Dostojevski)
   35 citata — v9.1 identičan HTML implementaciji
   ══════════════════════════════════════════════════════ */

const LS_FAV  = "mt.hrv.h07.cit_favs";
const LS_COPY = "mt.hrv.h07.cit_copy";

const CAT_CFG = {
  raskolj:   { label:"RASKOLJNIKOV", stripe:"var(--red,#e05252)",   eye:{ color:"var(--red-l,#f87171)",   background:"var(--dim-r,rgba(224,82,82,.12))",    border:"1px solid var(--bd-r,rgba(224,82,82,.25))"    }},
  sonja:     { label:"SONJA",        stripe:"var(--gold,#e9b446)",  eye:{ color:"var(--gold,#e9b446)",    background:"var(--dim-go,rgba(232,201,122,.12))", border:"1px solid var(--bd-go,rgba(232,201,122,.3))" }},
  porfirije: { label:"PORFIRIJ",     stripe:"var(--teal,#4ecdc4)",  eye:{ color:"var(--teal,#4ecdc4)",    background:"var(--dim-t,rgba(78,205,196,.12))",   border:"1px solid var(--bd-t,rgba(78,205,196,.25))"  }},
  svidri:    { label:"SVIDRIGAJLOV", stripe:"#c5a1d9",              eye:{ color:"#c5a1d9",                background:"rgba(197,161,217,.12)",               border:"1px solid rgba(197,161,217,.25)"             }},
  dunja:     { label:"DUNJA",        stripe:"var(--green,#50c878)", eye:{ color:"var(--green-l,#6ee7a0)", background:"var(--dim-g,rgba(80,200,120,.12))",   border:"1px solid var(--bd-g,rgba(80,200,120,.25))"  }},
  marm:      { label:"MARMELADOV",   stripe:"#e0a077",              eye:{ color:"#e0a077",                background:"rgba(224,160,119,.12)",               border:"1px solid rgba(224,160,119,.25)"             }},
  katerina:  { label:"KATERINA",     stripe:"#a0c4ff",              eye:{ color:"#a0c4ff",                background:"rgba(160,196,255,.12)",               border:"1px solid rgba(160,196,255,.25)"             }},
  kontekst:  { label:"KONTEKST",     stripe:"var(--bronze,#8b4513)",eye:{ color:"var(--bronze-l,#cd853f)",background:"var(--dim-br,rgba(220,50,47,.08))",  border:"1px solid var(--bd-br,rgba(220,50,47,.2))"   }},
};

const CITATI = [
  /* ── RASKOLJNIKOV (15) ── */
  { id:"h07c01", cat:"raskolj", diff:"basic",    tez:[1,3], mustKnow:true,
    author:"Dostojevski", work:"Zločin i kazna, I dio — Raskoljnikovljeva teorija",
    txt:`„Običan čovjek je dužan biti poslušan — nema prava prekršiti zakon. A neobičan čovjek ima pravo… pravo prolaziti preko leša u ime svoje ideje."`,
    useHtml:`<b>temeljni citat za Tezu 1 i 3</b> — teorija nadčovjeka. Raskoljnikov u članku „O zločinu" dijeli ljude na obične i neobične. <em>Anticipira Nietzscheovog Übermensch-a.</em> Neizostavan za esej o teoriji.` },

  { id:"h07c02", cat:"raskolj", diff:"basic",    tez:[1,3], mustKnow:true,
    author:"Dostojevski", work:"Zločin i kazna, III dio — Porfirijev drugi susret",
    txt:`„Jesam li vaš ili Napoleon?"`,
    useHtml:`<b>formula Raskoljnikovljevog identitetskog eksperimenta</b>. Pita sam sebe. <em>Definirajući citat</em> — ubojstvo je bio test. Najpoznatiji citat iz djela. Za Tezu 1 i 3.` },

  { id:"h07c03", cat:"raskolj", diff:"basic",    tez:[1],   mustKnow:true,
    author:"Dostojevski", work:"Zločin i kazna, V dio — priznanje Sonji",
    txt:`„Želio sam biti Napoleon — to je sve. Nisam ubio zbog novca. Htio sam saznati mogu li se usuditi."`,
    useHtml:`Raskoljnikov <em>priznaje</em> Sonji pravi motiv. Nije novac, nije pomoć obitelji — <b>samodokazivanje</b>. Centralni citat za Tezu 1 (tragični junak) — trenutak samosvijesti. Must-know.` },

  { id:"h07c04", cat:"raskolj", diff:"basic",    tez:[4],   mustKnow:true,
    author:"Dostojevski", work:"Zločin i kazna, I dio — nakon ubojstva",
    txt:`„Jesam li ubio staricu? Sebe sam ubio, a ne staricu."`,
    useHtml:`Raskoljnikov odmah nakon ubojstva. <em>Psihološki centralni</em> — zločin nije samo protiv drugog, nego protiv sebe. <b>Dostojevski suština psihološkog realizma</b>: rana je iznutra. Za Tezu 4.` },

  { id:"h07c09", cat:"raskolj", diff:"basic",    tez:[7],   mustKnow:true,
    author:"Dostojevski", work:"Zločin i kazna, epilog — posljednja rečenica",
    txt:`„Ali tu počinje nova povijest, povijest o postupnom preporodu čovjeka… No to je već druga priča."`,
    useHtml:`<b>zadnja rečenica romana</b>. Za Tezu 7 (iskupljenje). Dostojevski ne piše nastavak — kraj je <em>obećanje, a ne zaključak</em>. Otvoren kraj = put, ne cilj. Must-know za svaki esej.` },

  { id:"h07c05", cat:"raskolj", diff:"advanced", tez:[1,3], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, VI dio — prije predaje",
    txt:`„Morao sam saznati, i saznati hitno, jesam li vaš kao svi ostali, ili sam čovjek."`,
    useHtml:`nakon Sonjine intervencije. <em>„Vaš"</em> = kao drugi obični ljudi. <em>„Čovjek"</em> = kao nadčovjek. Ironija: Raskoljnikov misli da je slabost biti „obični", ali Dostojevski pokazuje da je <b>to baš pravi humanitet</b>.` },

  { id:"h07c06", cat:"raskolj", diff:"advanced", tez:[4,5], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, I dio — Raskoljnikovljev stan",
    txt:`„Njegova je sobica bila tako mala da je ličila na lijes."`,
    useHtml:`<em>ambijent kao lik</em>. Za Tezu 5 (Peterburg kao lik). Dostojevski opisuje stan <b>žutim tapetama</b>, veličina lijesa — <em>prostor u kojem se misao o smrti rađa</em>. Realistički detalj s simboličkim učinkom.` },

  { id:"h07c07", cat:"raskolj", diff:"advanced", tez:[4],   mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, II dio — paranoja",
    txt:`„Ako čovjek može izdržati sve, dogodila mu se najgora stvar."`,
    useHtml:`Raskoljnikov o svojoj <em>izolaciji</em> nakon zločina. <b>Postubilačka paranoja</b> — centralna tema psihološkog realizma. Za Tezu 4.` },

  { id:"h07c08", cat:"raskolj", diff:"advanced", tez:[3,7], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, epilog — san o bakterijama",
    txt:`„Ljudi su se međusobno pobili u nekoj besmislenoj mržnji. Svatko je mislio da samo on zna istinu."`,
    useHtml:`Raskoljnikovljev proročanski san u Sibiru. <em>Dostojevski predviđa ideološki fanatizam 20. st.</em> (totalitarizmi). Za Tezu 3 (kritika nihilizma) i Tezu 7 (iskupljenje kroz patnju).` },

  { id:"h07c10", cat:"raskolj", diff:"advanced", tez:[3],   mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, III dio — drugi susret s Porfirijem",
    txt:`„Ali pravi nadljudi — oni bi rekli: ubij! I ubili bi bez grižnje."`,
    useHtml:`Raskoljnikov objašnjava teoriju Porfiriju. <em>Ironija</em>: on sam NE MOŽE ubiti bez grižnje — to je dokaz da NIJE nadčovjek. Porfirij to odmah vidi. Za Tezu 3.` },

  { id:"h07c11", cat:"raskolj", diff:"advanced", tez:[1],   mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, IV dio — Raskoljnikov Sonji",
    txt:`„Nisam ubio da pomognem majci — to je laž. Nisam ubio zbog novca — to je druga laž. Ubio sam za sebe, za sebe jedinog."`,
    useHtml:`Raskoljnikovljevo <em>razotkrivanje svih samoiluzija</em>. <b>Trenutak istine</b>. Citat pokazuje progresiju psihologije: od utilitarnog argumenta (pomoći siromasima) do intelektualnog (test) do golog egoizma. Teza 1.` },

  { id:"h07c12", cat:"raskolj", diff:"advanced", tez:[7,2], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, epilog — Sibir",
    txt:`„Pala mu je pred noge, plakao je i grlio je koljena. Prvog trenutka pomislila je da je lud od radosti."`,
    useHtml:`<em>trenutak buđenja</em>. Raskoljnikov nakon sna — prvi put osjeća ljubav umjesto teorije. <b>Početak iskupljenja</b>. Za Tezu 7. Sonjina reakcija — suzdržana radost — pokazuje da je ona <em>strpljivo čekala ovaj trenutak</em>.` },

  { id:"h07c33", cat:"raskolj", diff:"advanced", tez:[2,7], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, IV dio — Raskoljnikov Sonji",
    txt:`„Slušaj, Sonja, ja nisam pred tobom pao, pred cijelom ljudskom patnjom sam pao."`,
    useHtml:`prvi trenutak intimnosti R. i Sonje. <em>Sonja postaje simbol univerzalnog ljudskog trpljenja</em>. Za Tezu 2 i 7. Jedan od najljepših citata u romanu.` },

  { id:"h07c34", cat:"raskolj", diff:"advanced", tez:[1,3], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, I dio — misao o lihvarici",
    txt:`„Zašto bi trebala živjeti ova smrdljiva starica? Kad bi umrla, stotine bi mladih živjele normalno."`,
    useHtml:`<em>utilitarni argument</em>. Raskoljnikov racionalizira zločin. Dostojevski pokazuje kako <b>hladna logika</b> može opravdati ubojstvo — ali <em>psiha se buni</em>. Za Tezu 1 i 3.` },

  { id:"h07c35", cat:"raskolj", diff:"advanced", tez:[4],   mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, II dio — paranoja",
    txt:`„Bio sam svjestan svega — čak i svijetle točke na stropu — ali se uopće nisam mogao pomaknuti."`,
    useHtml:`<em>psihosomatska paraliza</em> nakon zločina. <b>Vrh psihološkog realizma</b> — tijelo reagira na moralnu krivnju. Anticipira psihoanalizu. Za Tezu 4.` },

  /* ── SONJA (6) ── */
  { id:"h07c13", cat:"sonja", diff:"basic",    tez:[2,7],   mustKnow:true,
    author:"Dostojevski", work:"Zločin i kazna, V dio — Sonjin savjet",
    txt:`„Idi smjesta, sad odmah. Stani na raskršću, pokloni se narodu do zemlje i poljubi zemlju. Prvu stvar, poljubi zemlju. Jer si i pred njom sagriješio."`,
    useHtml:`Sonjin <em>poziv na javnu ispovijed</em>. Za Tezu 2. <b>Zemlja kao majčinska, sveta</b> — ruski pravoslavni simbol. Sonja ga usmjerava na <em>tradicionalnu rusku pokoru</em>. Citat posebno voljen od ocjenjivača.` },

  { id:"h07c18", cat:"sonja", diff:"basic",    tez:[2,6,7], mustKnow:true,
    author:"Dostojevski", work:"Zločin i kazna, VI dio — Sonja Raskoljnikovu",
    txt:`„Otići ćemo zajedno u patnju."`,
    useHtml:`<b>formula Sonjine žrtve</b>. Obećanje da ide s njim u Sibir. Za Tezu 2, 6, 7. <em>Zajedno u patnju</em> je osnovna dostojevska ideja iskupljenja. Paralela s Raskoljnikovljevom rečenicom Sebe sam ubio.` },

  { id:"h07c14", cat:"sonja", diff:"basic",    tez:[2,7],   mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, IV dio — čitanje Lazara",
    txt:`„I vikne glasom velikim: Lazare, izađi van. I izađe mrtvac povezan po rukama i nogama pogrebnim zavojima."`,
    useHtml:`<em>uskrsnuće Lazara</em> (Ivanovo evanđelje, 11). Sonja čita Raskoljnikovu. <b>Paralela</b>: Raskoljnikov je duhovni mrtvac, Sonja ga poziva. Prekretnica romana. Za Tezu 2 i 7.` },

  { id:"h07c15", cat:"sonja", diff:"basic",    tez:[2],     mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, IV dio — Sonja odgovara Raskoljnikovu",
    txt:`„A što bih bila da nije bilo Boga?"`,
    useHtml:`Raskoljnikov pita Sonju kako preživljava. Ona odgovara jednostavno: Bog je sve. <em>Dostojevski kroz Sonju potvrđuje vjeru kao jedini odgovor na bijedu</em>. Za Tezu 2 (moralna vertikala) i pravoslavne vrijednosti.` },

  { id:"h07c16", cat:"sonja", diff:"advanced", tez:[2],     mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, V dio — Sonja Raskoljnikovu",
    txt:`„Ti si samoga sebe ubio. Ti si nevinoga čovjeka iznutra ubio. Idi priznati."`,
    useHtml:`Sonja <em>prvi put formalno osuđuje</em> Raskoljnikova, ali <em>sa ljubavlju</em>. Vidi ga kao bolesnog, ne zločinca. <b>Njena moralna jasnost</b>. Za Tezu 2 (vertikala) i Tezu 6 (Sonja kao kritika društva kroz svoju dobrotu).` },

  { id:"h07c17", cat:"sonja", diff:"basic",    tez:[2],     mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, V dio — Sonja prihvaća",
    txt:`„Ne, ne, nema nesretnije osobe na svijetu od tebe!"`,
    useHtml:`Sonjin prvi reaktion na Raskoljnikovljevo priznanje. <em>Ne osuda nego samilost</em>. <b>Dostojevski kroz Sonju pokazuje ideal kršćanske ljubavi</b> — suditi ali ne prezirati. Za Tezu 2.` },

  /* ── PORFIRIJ (3) ── */
  { id:"h07c19", cat:"porfirije", diff:"basic",    tez:[4], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, IV dio — treći susret",
    txt:`„Vi ste ubili, Rodion Romanoviču. Ali predajte se — dobit ćete blaže. Ja vam savjetujem."`,
    useHtml:`<b>Porfirijev najvažniji iskaz</b>. Zna sve, ali mu daje priliku. <em>Psihološki genij istrage</em>. Za Tezu 4 (psihološki realizam) — Porfirij <b>razumije</b> Raskoljnikova bolje nego on sebe.` },

  { id:"h07c20", cat:"porfirije", diff:"advanced", tez:[3], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, III dio — drugi susret",
    txt:`„Rečem vam, naš čovjek je mladi, bolestan, pročitao knjigu — pa sad je vjerovao da je Napoleon."`,
    useHtml:`Porfirij <em>ironično citira</em> Raskoljnikovljev članak. Dostojevski kroz Porfirija <b>dekonstruira teoriju iznutra</b> — smije se joj. Za Tezu 3 (kritika nihilizma).` },

  { id:"h07c21", cat:"porfirije", diff:"advanced", tez:[7], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, IV dio — savjet",
    txt:`„Patnja je velika stvar. U patnji leži ideja, ne bojte se."`,
    useHtml:`Porfirijev filozofski savjet. <em>Porfirij i Sonja govore istu poruku</em> — kroz patnju do istine. <b>Dostojevski pokazuje</b> da <em>razum</em> (Porfirij) i <em>vjera</em> (Sonja) dolaze do istog zaključka. Za Tezu 7.` },

  /* ── SVIDRIGAJLOV (2) ── */
  { id:"h07c22", cat:"svidri", diff:"advanced", tez:[3],   mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, IV dio — Svidrigajlov Raskoljnikovu",
    txt:`„Svi smo mi malo glupi. Samo neki to priznaju, drugi ne."`,
    useHtml:`Svidrigajlovljev cinizam. <em>Raskoljnikovljev dvojnik</em> — jednaka filozofija, <b>ali bez savjesti</b>. Za Tezu 3 (kritika nihilizma) — Svidrigajlov je <em>logička posljedica</em> teorije bez granica. Završava samoubojstvom.` },

  { id:"h07c23", cat:"svidri", diff:"advanced", tez:[3,7], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, VI dio — prije samoubojstva",
    txt:`„Vječnost je za nas kao malena sobica, znate, seoska — i u svakom kutku pauci."`,
    useHtml:`Svidrigajlovljev <em>nihilistička vizija zagrobja</em>. Zagrobje = ružan, siromašan prostor. Nema nade, nema Boga. <b>Suprotnost Sonjinom uskrsnuću</b>. Za Tezu 3 (što se dogodi bez vjere).` },

  /* ── DUNJA (2) ── */
  { id:"h07c24", cat:"dunja", diff:"basic",    tez:[6], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, III dio — pismo majke",
    txt:`„Ona se odlučila žrtvovati za tebe, brate. Za tvoje studije."`,
    useHtml:`<em>Dunjina žrtva</em> — brak s Lužinom da brat studira. Za Tezu 6 (paralela Sonjinoj žrtvi). <b>Dvije žene žrtvuju se za muškarce</b> — Dostojevski pokazuje strukturu društva.` },

  { id:"h07c25", cat:"dunja", diff:"advanced", tez:[6], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, VI dio — Dunja Svidrigajlovu",
    txt:`„Ne možete me primorati, makar me zaključali. Vičem, ljudi će doći!"`,
    useHtml:`Dunja gađa Svidrigajlova pištoljem. <em>Aktivna otpornost</em> (za razliku od Sonjine pasivne žrtve). Za Tezu 6 — <b>dvije modaliteta ženskog žrtvovanja</b>: Sonjina pokornost vs Dunjin ponos.` },

  /* ── MARMELADOV (2) ── */
  { id:"h07c27", cat:"marm", diff:"basic",    tez:[2,6], mustKnow:true,
    author:"Dostojevski", work:"Zločin i kazna, I dio — Marmeladov o Sonji",
    txt:`„Ona je ustala, bez riječi, uzela maramu svoju, pokrila glavu i tiho otišla. A vratila se u šest i pol donijevši nam srebrni rubalj."`,
    useHtml:`<em>prvi spomen Sonjine žrtve</em>. Marmeladov priča o danu kad je Sonja prvi put izišla na ulicu. <b>Tihost čina</b> — bez riječi, s maramom. Za Tezu 2 i 6. Dostojevski kroz oca otkriva kći.` },

  { id:"h07c26", cat:"marm", diff:"advanced", tez:[5,6], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, I dio — Marmeladov Raskoljnikovu",
    txt:`„Treba čovjeku mjesto kamo može otići. Inače je sam pred njim Gospodin."`,
    useHtml:`Marmeladov (Sonjin otac) u kafani — pijani monolog. <em>Bijeda izolira</em>. Društveni realizam. Dostojevski <b>otvara roman</b> ovim sudbinom da postavi temu: grad uništava obitelj.` },

  /* ── KATERINA (1) ── */
  { id:"h07c28", cat:"katerina", diff:"advanced", tez:[5,6], mustKnow:false,
    author:"Dostojevski", work:"Zločin i kazna, II dio — Katerina Ivanovna",
    txt:`„Umrijet ću kao pas! Kao pas pod ogradom!"`,
    useHtml:`Katerina u delirju pred smrt. <b>Vrh socijalne tragedije</b>. Tuberkuloza, siromaštvo, nerješivi pritisak. Za Tezu 5 i 6 — <em>Peterburg kao ubojica dostojanstva</em>.` },

  /* ── KONTEKST / META (4) ── */
  { id:"h07c29", cat:"kontekst", diff:"basic",    tez:[4],   mustKnow:false,
    author:"Honoré de Balzac", work:"Otac Goriot (1835.) — motto",
    txt:`„Sve je istina."`,
    useHtml:`<em>motto realizma</em>. Balzac, utemeljitelj realizma. <b>Dostojevski čita Balzaca</b> — prevodi njegov roman <em>Eugénie Grandet</em> (1844., prvi Dostojevskijev književni rad). Za povezivanje H07 s francuskim realizmom. Definicija poetike epohe.` },

  { id:"h07c30", cat:"kontekst", diff:"advanced", tez:[4],   mustKnow:false,
    author:"Mihail Bahtin", work:"Problemi poetike Dostojevskog (1929.)",
    txt:`„Dostojevski je tvorac polifonijskog romana. U njegovom romanu svaki glas ima vlastitu ideju."`,
    useHtml:`<b>ključna interpretacija</b>. Bahtin — ruski književni teoretičar. <em>Polifonija</em> = centralni pojam za razumijevanje Dostojevskog. Citat pokazuje teorijsku zrelost. Za Tezu 4. Za esejsku kompetenciju.` },

  { id:"h07c31", cat:"kontekst", diff:"advanced", tez:[3,4], mustKnow:false,
    author:"Friedrich Nietzsche", work:"O Dostojevskom (1887.)",
    txt:`„Dostojevski je jedini psiholog od kojeg sam nešto naučio."`,
    useHtml:`<em>Nietzsche o Dostojevskom</em>. Ironija: Dostojevski kritizira <b>nadčovjeka prije</b> nego Nietzsche ga formulira. Nietzsche priznaje njegov utjecaj. Za Tezu 3 i Tezu 4. <em>Most prema modernoj filozofiji</em>.` },

  { id:"h07c32", cat:"kontekst", diff:"advanced", tez:[3],   mustKnow:false,
    author:"Albert Camus", work:"Pobunjeni čovjek (1951.)",
    txt:`„Ivan Karamazov i Raskoljnikov — dva lica iste pobune. Ali Dostojevski zna da pobuna bez ljubavi postaje destrukcija."`,
    useHtml:`Camus <em>povezuje Dostojevskog s egzistencijalizmom 20. st</em>. <b>Stranac</b> (Camus, obvezatno 2026 za maturu) ima slične teme. Za Tezu 3 i 7 — Dostojevski kao proročanski pisac. Napredno za esejsku širinu.` },
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

      {/* tez */}
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
export default function CitatnikH07({onBack, onNext}){
  const [catFilter,  setCatFilter]  = useState("all");
  const [tezFilter,  setTezFilter]  = useState("all");
  const [diffFilter, setDiffFilter] = useState("all");
  const [favOnly,    setFavOnly]    = useState(false);
  const [q,          setQ]          = useState("");
  const [favs,       setFavs]       = useState({});
  const [copyCount,  setCopyCount]  = useState({});
  const [toast,      setToast]      = useState({on:false,msg:""});
  const toastTimer = useRef(null);

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

      {/* INTRO */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>💬 Citati — arsenal za esej o Dostojevskom</div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja.{" "}
          <b>35 probranih citata</b> iz <em>Zločina i kazne</em>: Raskoljnikov (15), Sonja (6), Porfirij (3), Svidrigajlov (2), Dunja (2), Marmeladov (2), Katerina (1), plus <b>4 meta-citata</b> (Balzac, Bahtin, Nietzsche, Camus).{" "}
          <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>.{" "}
          <b>8 must-know citata</b> označeno je <em>★ Napamet</em>.
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"18px 0 10px"}}>
        {[
          {key:"all",       label:"Svi (35)",             spec:false},
          {key:"must",      label:"★ Napamet (8)",        spec:true},
          {key:"raskolj",   label:"🔴 Raskoljnikov (15)", spec:false},
          {key:"sonja",     label:"✨ Sonja (6)",         spec:false},
          {key:"porfirije", label:"🔍 Porfirij (3)",      spec:false},
          {key:"svidri",    label:"🌑 Svidrigajlov (2)",  spec:false},
          {key:"dunja",     label:"💚 Dunja (2)",         spec:false},
          {key:"marm",      label:"🍶 Marmeladov (2)",    spec:false},
          {key:"katerina",  label:"🕯 Katerina (1)",      spec:false},
          {key:"kontekst",  label:"💭 Kontekst (4)",      spec:false},
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
          placeholder="Pretraži citate (npr. Raskoljnikov, Sonja, Napoleon, patnja)…"
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
