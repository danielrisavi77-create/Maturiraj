'use client';
import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   CITATNIK H10 — Postmoderna (Eco, Pavličić, Borges, teoretičari)
   36 citata — v9.1 identičan HTML implementaciji
   DIZAJN: uniformna bronze cit-eye-cat (bez per-cat boja),
           stripe var(--bronze) za sve osim kontekst (#c5a1d9)
   svi txt/useHtml → backtick template literals (Turbopack fix)
   ══════════════════════════════════════════════════════ */

const LS_FAV  = "mt.hrv.h10.cit_favs";
const LS_COPY = "mt.hrv.h10.cit_copy";

/* Stripe boja po kategoriji */
const STRIPE = {
  teoreticari: "var(--bronze,#8b4513)",
  eco:         "var(--bronze,#8b4513)",
  pavlicic:    "var(--bronze,#8b4513)",
  borges:      "var(--bronze,#8b4513)",
  ostali:      "var(--bronze,#8b4513)",
  pojmovi:     "#c5a1d9",
};

/* H10 uniform eye-cat — sve bronze, kao u CSS-u */
const EYE_STYLE = {
  color:"var(--bronze-l,#cd853f)",
  background:"var(--dim-br,rgba(220,50,47,.08))",
  border:"1px solid var(--bd-br,rgba(220,50,47,.2))"
};

const CITATI = [
  /* ── TEORETIČARI (8) ── */
  { id:"h10c01", cat:"teoreticari", diff:"basic",    tez:[1,2], mustKnow:true,
    eyeLabel:"BARTHES", author:"Roland Barthes", loc:"Smrt autora, 1967.",
    txt:`„Pisac više nije onaj koji nosi poruke, nego onaj koji upravlja mrežom citata."`,
    useHtml:`Temeljna teza postmoderne — autor nije vlasnik smisla, to je čitatelj. Za eseje o <b>metafikciji</b> i <b>intertekstualnosti</b>. Barthes 1967. proglašava smrt autora — smisao nastaje u činu čitanja.` },

  { id:"h10c02", cat:"teoreticari", diff:"basic",    tez:[7],   mustKnow:true,
    eyeLabel:"LYOTARD", author:"Jean-François Lyotard", loc:"Postmoderno stanje, 1979.",
    txt:`„Postmoderno stanje karakterizira nepovjerenje u velike naracije."`,
    useHtml:`Definicija postmoderne u jednoj rečenici. Za uvod eseja koji tematizira <b>kraj ideologija</b> ili <b>fragmentarnost</b>. Lyotard 1979. — ključni filozofski tekst postmoderne.` },

  { id:"h10c03", cat:"teoreticari", diff:"basic",    tez:[1],   mustKnow:false,
    eyeLabel:"KRISTEVA", author:"Julia Kristeva", loc:"Semiotiké, 1969.",
    txt:`„Svaki tekst je ugradnja drugog teksta; svaki tekst je upijanje i preoblikovanje drugog teksta."`,
    useHtml:`Definicija <b>intertekstualnosti</b> — pojam koji je Kristeva skovala 1966. (oslonjena na Bahtina). Za eseje gdje analiziraš aluzije i reference u tekstu.` },

  { id:"h10c04", cat:"teoreticari", diff:"basic",    tez:[2],   mustKnow:false,
    eyeLabel:"DERRIDA", author:"Jacques Derrida", loc:"O gramatologiji, 1967.",
    txt:`„Nema ničega izvan teksta."`,
    useHtml:`Dekonstrukcija — značenje nikad nije stabilno, uvijek se odgađa. Za eseje o <b>nepouzdanom pripovjedaču</b> i <b>otvorenom kraju</b>. Najkraći i najradikalniji postmoderni citat.` },

  { id:"h10c05", cat:"teoreticari", diff:"napredni", tez:[5],   mustKnow:false,
    eyeLabel:"BAUDRILLARD", author:"Jean Baudrillard", loc:"Simulakrum i simulacija, 1981.",
    txt:`„Simulakrum nikad ne skriva istinu — on je istina koja skriva da je nema."`,
    useHtml:`Za analizu <b>simulakruma</b> — slike koje su izgubile vezu s originalom. Napredni esej: Matrix eksplicitno citira ovaj tekst. Za analizu Ecovog povijesnog simulakruma u Imenu ruže.` },

  { id:"h10c06", cat:"teoreticari", diff:"basic",    tez:[1,2,3], mustKnow:true,
    eyeLabel:"ECO · TEORIJA", author:"Umberto Eco", loc:"Postille uz Ime ruže, 1983.",
    txt:`„Postmoderna se rađa u trenutku kad shvatiš da nevinost više nije moguća."`,
    useHtml:`Ecova vlastita definicija postmoderne — iz eseja koji je napisao <em>nakon</em> Imena ruže, objašnjavajući što je napravio. Savršeno za uvod ili zaključak eseja o postmoderni.` },

  { id:"h10c07", cat:"teoreticari", diff:"napredni", tez:[1],   mustKnow:false,
    eyeLabel:"BARTHES", author:"Roland Barthes", loc:"S/Z, 1970.",
    txt:`„Tekst je pletivo glasova koji dolaze iz tisuću izvora kulture."`,
    useHtml:`Dopunjuje Kristevinu definiciju intertekstualnosti. Tisuću izvora kulture — za eseje gdje analiziraš kulturne i književne slojeve u tekstu.` },

  { id:"h10c08", cat:"teoreticari", diff:"napredni", tez:[2],   mustKnow:false,
    eyeLabel:"BARTHES", author:"Roland Barthes", loc:"Smrt autora, 1967.",
    txt:`„Autor — taj moderni lik — vjerojatno je proizvod našeg društva koje otkriva prestiž osobnog."`,
    useHtml:`Drugi Barthesov citat iz istog eseja — za dublje analize metafikcije. Autor nije božanski genij nego kulturni konstrukt.` },

  /* ── ECO (6) ── */
  { id:"h10c09", cat:"eco", diff:"basic",    tez:[1], mustKnow:true,
    eyeLabel:"ECO · IME RUŽE", author:"Umberto Eco", loc:"Postille uz Ime ruže, 1983.",
    txt:`„Knjige uvijek govore o drugim knjigama, i svaka priča priča već ispričanu priču."`,
    useHtml:`Najjači Ecov citat za <b>intertekstualnost</b>. Eco sam opisuje što je napravio u Imenu ruže — i što radi svaka postmoderna proza. Za uvod ili razradu eseja o intertekstualnosti.` },

  { id:"h10c10", cat:"eco", diff:"basic",    tez:[7], mustKnow:true,
    eyeLabel:"ECO · IME RUŽE", author:"Vilim od Baskervillea", loc:"Ime ruže, kraj romana, 1980.",
    txt:`„Nema reda. Ja sam vidio lažni red i trčao za njim."`,
    useHtml:`Ključni citat za <b>kraj velikih naracija</b> i <b>otvoreni kraj</b>. Vilim — detektiv koji ne uspijeva — izgovara temeljnu postmodernu tezu: nema jedne istine, samo izmišljamo uzorke. Za zaključak eseja.` },

  { id:"h10c11", cat:"eco", diff:"basic",    tez:[3], mustKnow:false,
    eyeLabel:"ECO · IME RUŽE", author:"Umberto Eco", loc:"Ime ruže, 1980.",
    txt:`„Biblioteka je djelo ljudske ruke, labirint ispisan u čast tajne."`,
    useHtml:`Biblioteka kao simbol <b>fragmentarnosti znanja</b> i labirinta istine. Za eseje o postmodernoj epistemologiji — znanje je labirint, ne piramida.` },

  { id:"h10c12", cat:"eco", diff:"basic",    tez:[2], mustKnow:false,
    eyeLabel:"ECO · NASLOV", author:"Umberto Eco", loc:"Ime ruže, završne riječi, 1980.",
    txt:`„Prijašnja ruža ostaje samo u imenu; praznih imena se držimo."`,
    useHtml:`Autoreferencijalni naslov — ime nadživljava stvar. Za eseje o <b>autoreferencijalnosti</b> i postmodernom znaku. Naslov romana je ujedno njegova temeljna teza.` },

  { id:"h10c13", cat:"eco", diff:"napredni", tez:[5], mustKnow:false,
    eyeLabel:"ECO · IME RUŽE", author:"Umberto Eco", loc:"Ime ruže, 1980.",
    txt:`„Istina je smijeh; smijeh je sloboda od straha pred istinom."`,
    useHtml:`Središnja filozofska teza romana — Aristotelova izgubljena knjiga o komediji. Za napredne eseje o <b>ironiji</b> i postmodernom humoru kao strategiji otpora.` },

  { id:"h10c14", cat:"eco", diff:"napredni", tez:[1], mustKnow:false,
    eyeLabel:"ECO · SEMIOTIKA", author:"Umberto Eco", loc:"Ime ruže, 1980.",
    txt:`„Znakovi su jedino što imamo; stvari nestaju, znakovi ostaju."`,
    useHtml:`Semiotička teza — za napredne eseje o jeziku, znaku i intertekstualnosti. Eco kao semiotičar: tekst je sustav znakova, ne zrcalo stvarnosti.` },

  /* ── PAVLIČIĆ + UGREŠIĆ (5) ── */
  { id:"h10c15", cat:"pavlicic", diff:"basic",    tez:[2,6], mustKnow:false,
    eyeLabel:"PAVLIČIĆ · VEČERNJI AKT", author:"Tematski motiv", loc:"Pavao Pavličić, Večernji akt, 1981.",
    txt:`„Slika ne prikazuje stvarnost — ona je stvara."`,
    useHtml:`Temeljna teza <em>Večernjeg akta</em> — slika koja stari je nemoguć predmet koji mijenja stvarnost. Za eseje o <b>metafikciji</b> i <b>granici između umjetnosti i stvarnosti</b>.` },

  { id:"h10c16", cat:"pavlicic", diff:"napredni", tez:[2],   mustKnow:false,
    eyeLabel:"PAVLIČIĆ · ESEJ", author:"Pavao Pavličić", loc:"Rukoljub, esej o čitateljstvu.",
    txt:`„Roman je stroj za proizvodnju čitatelja, a ne obratno."`,
    useHtml:`Pavličić o čitatelju kao suautoru — korespondira s Barthesovom smrću autora. Za eseje o <b>čitateljevoj ulozi</b> u postmodernom tekstu.` },

  { id:"h10c17", cat:"pavlicic", diff:"basic",    tez:[6],   mustKnow:false,
    eyeLabel:"PAVLIČIĆ · ŽANR", author:"Pavao Pavličić", loc:"Sve što znam o krimiću.",
    txt:`„Žanrovski roman nije niska književnost — on je prostor u kojem se postmoderna igra s konvencijama."`,
    useHtml:`Za eseje o <b>miješanju žanrova</b> i rehabilitaciji popularne književnosti. Pavličić brani krimić kao legitiman postmoderni oblik.` },

  { id:"h10c18", cat:"pavlicic", diff:"basic",    tez:[3,6], mustKnow:false,
    eyeLabel:"UGREŠIĆ · ŠTEFICA CVEK", author:"Tematski motiv", loc:"Dubravka Ugrešić, Štefica Cvek u raljama života, 1981.",
    txt:`„Štefica Cvek nije lik — ona je proizvod recikliranja pop-kulture."`,
    useHtml:`Za eseje o <b>fragmentarnosti</b> i <b>miješanju visokog i niskog</b>. Ugrešić koristi ženski časopis, recepte i šivaće upute kao književni materijal — pop-kultura kao tekst.` },

  { id:"h10c19", cat:"pavlicic", diff:"napredni", tez:[6],   mustKnow:false,
    eyeLabel:"QUORUM", author:"Kritičarska sinteza", loc:"O časopisu Quorum, 1984.",
    txt:`„Quorum je generacija koja nije htjela biti generacija — nego pluralizam glasova."`,
    useHtml:`Za eseje o <b>hrvatskoj postmoderni</b> i časopisu Quorum (1984.) — quorumaši kao generacija bez manifesta, s pluralizmom poetika.` },

  /* ── BORGES (4) ── */
  { id:"h10c20", cat:"borges", diff:"basic",    tez:[3],   mustKnow:true,
    eyeLabel:"BORGES", author:"Jorge Luis Borges", loc:"Pjesma o darovima, 1958.",
    txt:`„Uvijek sam zamišljao raj kao neku vrstu biblioteke."`,
    useHtml:`Za eseje o biblioteci kao simbolu <b>beskonačnog znanja i labirinta</b>. Borges — slijep na kraju života, okružen knjigama — ova slika je autoreferencijalna. Odjekuje u Ecovoj biblioteci u Imenu ruže.` },

  { id:"h10c21", cat:"borges", diff:"basic",    tez:[1],   mustKnow:false,
    eyeLabel:"BORGES", author:"Jorge Luis Borges", loc:"ponavljajući motiv u esejima.",
    txt:`„Sve je već napisano. Ostaje nam samo kombinirati."`,
    useHtml:`Radikalna teza o <b>intertekstualnosti</b> — nema originalne ideje, samo rekombinacije. Savršeno za eseje gdje analiziraš kako postmoderna proza preuzima i transformira tradiciju.` },

  { id:"h10c22", cat:"borges", diff:"napredni", tez:[4],   mustKnow:false,
    eyeLabel:"BORGES", author:"Jorge Luis Borges", loc:"tematski motiv.",
    txt:`„Svaki čovjek je dvojnik svakog drugog — i sebe sama."`,
    useHtml:`Za napredne eseje o <b>identitetu i nepouzdanom pripovjedaču</b>. Borgesov motiv dvojnika — preuzima ga Pavličić u Večernjem aktu (slika kao dvojnik žene).` },

  { id:"h10c23", cat:"borges", diff:"basic",    tez:[2,7], mustKnow:true,
    eyeLabel:"BORGES", author:"Jorge Luis Borges", loc:"Vrt razgranatih staza, 1941.",
    txt:`„Zamišljao sam labirint labirinata, vijugavi i rastuće labirint koji obuhvaća prošlost i budućnost."`,
    useHtml:`<em>Vrt razgranatih staza</em> — roman unutar romana, svaka odluka otvara alternativnu priču. Za eseje o <b>autoreferencijalnosti</b> i <b>otvorenom kraju</b>. Direktan prototip Ecove biblioteke.` },

  /* ── OSTALI (5) ── */
  { id:"h10c24", cat:"ostali", diff:"basic",    tez:[2],   mustKnow:false,
    eyeLabel:"CALVINO · METAFIKCIJA", author:"Italo Calvino", loc:"Ako jedne zimske noći putnik, 1979., prva rečenica.",
    txt:`„Spremaš se čitati novi roman Itala Calvina Ako jedne zimske noći putnik."`,
    useHtml:`Vrhunac metafikcije — roman se obraća čitatelju u drugom licu od prve rečenice. Čitatelj je protagonist. Za eseje o <b>metafikciji i granici teksta</b>.` },

  { id:"h10c25", cat:"ostali", diff:"napredni", tez:[3,7], mustKnow:false,
    eyeLabel:"KUNDERA", author:"Milan Kundera", loc:"Nepodnošljiva lakoća postojanja, 1984.",
    txt:`„Jednom je uvijek jednom. Ni jednom ne može biti dvaput."`,
    useHtml:`Kunderin motiv jedinstvenosti trenutka — suprotnost Nietzscheovom vječnom vraćanju. Za eseje o <b>fragmentarnosti vremena</b> i nemogućnosti ponovnog početka.` },

  { id:"h10c26", cat:"ostali", diff:"basic",    tez:[7],   mustKnow:false,
    eyeLabel:"BECKETT", author:"Samuel Beckett", loc:"Čekajući Godota, 1953.",
    txt:`„Čekamo. Više ne možemo. To je istina. Što da radimo s tim saznanjem?"`,
    useHtml:`Beckett kao preteča postmoderne — <b>otvoreni kraj</b>, apsurd čekanja, odsustvo razrješenja. Za paralele s Kafkom i Camusom u esejima o apsurdu i otvorenom kraju.` },

  { id:"h10c27", cat:"ostali", diff:"napredni", tez:[2,6], mustKnow:false,
    eyeLabel:"KUNDERA", author:"Milan Kundera", loc:"Umijeće romana, 1986.",
    txt:`„Roman nije priča o životu — roman je istraživanje mogućnosti života."`,
    useHtml:`Za eseje o <b>metafikciji i žanru</b> — roman nije mimesis (zrcalo), nego istraživanje. Kundera u romanesknoj teoriji blizak postmoderni.` },

  { id:"h10c28", cat:"ostali", diff:"napredni", tez:[3],   mustKnow:false,
    eyeLabel:"CALVINO", author:"Italo Calvino", loc:"Nevidljivi gradovi, 1972.",
    txt:`„Nevidljivi gradovi postoje samo u opisu — a opis je jedina stvarnost koja ih drži živima."`,
    useHtml:`Za napredne eseje o jeziku kao jedinom mediju stvarnosti — poststrukturalistička teza. Calvino: jezik ne opisuje svijet, nego ga konstruira.` },

  /* ── POJMOVI (8) ── */
  { id:"h10c29", cat:"pojmovi", diff:"basic",    tez:[2], mustKnow:true,
    eyeLabel:"DEFINICIJA · METAFIKCIJA", author:"Patricia Waugh", loc:"Metafiction, 1984.",
    txt:`„Metafikcija je proza koja sistematično privlači pažnju na vlastiti artificijelni karakter."`,
    useHtml:`Standardna definicija metafikcije za ispit i esej. Waugh 1984. — naučiti napamet. Koristi kao teorijsku podlogu za analizu Eca ili Ugrešić.` },

  { id:"h10c30", cat:"pojmovi", diff:"basic",    tez:[6], mustKnow:true,
    eyeLabel:"DEFINICIJA · PASTIŠ", author:"Fredric Jameson", loc:"Postmoderna, kulturna logika kasnog kapitalizma, 1991.",
    txt:`„Pastiš je, za razliku od parodije, neutralna praksa oponašanja bez skrivene motivacije."`,
    useHtml:`Jamesonova definicija pastiša — idealna za razlikovanje pastiša i parodije na ispitu. Ključni citat za razlikovanje pojmova.` },

  { id:"h10c31", cat:"pojmovi", diff:"basic",    tez:[1], mustKnow:false,
    eyeLabel:"DEFINICIJA · INTERTEKSTUALNOST", author:"Gérard Genette", loc:"Palimpsesti, 1982.",
    txt:`„Intertekstualnost je svojstvo teksta koje ga čini ovisnim o relaciji prema drugim tekstovima."`,
    useHtml:`Genetteova definicija — tehnički preciznija od Kristevine. Koristi kao alternativnu definiciju u eseju ili ako trebaš naglasiti <b>sustavnost</b> intertekstualnih odnosa.` },

  { id:"h10c32", cat:"pojmovi", diff:"basic",    tez:[5], mustKnow:false,
    eyeLabel:"DEFINICIJA · PARODIJA", author:"Linda Hutcheon", loc:"A Theory of Parody, 1985.",
    txt:`„Parodija je imitacija s kritičkom distancom, koja naglašava razlike, a ne sličnosti."`,
    useHtml:`Hutcheonova definicija parodije — uz Jamesonov pastiš, idealan par za razlikovanje pojmova na ispitu. Naglasak na <b>kritičkoj distanci</b>.` },

  { id:"h10c33", cat:"pojmovi", diff:"napredni", tez:[3], mustKnow:false,
    eyeLabel:"DEFINICIJA · FRAGMENTACIJA", author:"Fredric Jameson", loc:"Postmoderna, 1991.",
    txt:`„Fragmentacija nije samo formalna tehnika — ona je dijagnoza suvremenog iskustva."`,
    useHtml:`Za napredne eseje — fragmentacija nije slabost, nego <b>namjerna strategija</b> koja odražava fragmentirano iskustvo modernoga čovjeka. Kafka, Šimić, Ugrešić.` },

  { id:"h10c34", cat:"pojmovi", diff:"napredni", tez:[5], mustKnow:false,
    eyeLabel:"DEFINICIJA · IRONIJA", author:"Linda Hutcheon", loc:"Poetics of Postmodernism, 1988.",
    txt:`„Postmoderna ironija ne ruši — ona zadržava dvojnost bez razrješenja."`,
    useHtml:`Za eseje o ironiji — postmoderna ironija nije ciničan sarkazam nego <b>dvostruko kodiranje</b>. Eco: istovremeno ozbiljan i ne-ozbiljan. Za paralele s Marinkovićem i Krležom.` },

  { id:"h10c35", cat:"pojmovi", diff:"basic",    tez:[6], mustKnow:false,
    eyeLabel:"HRVATSKA POSTMODERNA", author:"Kritičarska sinteza", loc:"O časopisu Quorum, 1984.",
    txt:`„Hrvatska postmoderna nastaje u trenu kad Quorum prekida monopol jedne poetike i otvara prostor za pluralizam."`,
    useHtml:`Za eseje o <b>kontekstu hrvatske postmoderne</b>. Quorum 1984. — generacija bez manifesta, s pluralizmom poetika.` },

  { id:"h10c36", cat:"pojmovi", diff:"napredni", tez:[6], mustKnow:false,
    eyeLabel:"ŽANR · POSTMODERNA", author:"Kritičarska sinteza", loc:"O Pavličiću i hrvatskoj postmoderni.",
    txt:`„Žanrovski roman postaje ozbiljan onog trenutka kad prestane biti samo žanr."`,
    useHtml:`Za eseje o rehabilitaciji žanrovske proze u postmoderni. Pavličić — krimić nije niska književnost nego postmoderni laboratorij.` },
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
  const isFav=!!favs[c.id];
  const copies=copyCount[c.id]||0;
  const [hov,setHov]=useState(false);
  const stripe=STRIPE[c.cat]||"var(--bronze,#8b4513)";

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
      <div style={{position:"absolute",left:0,top:14,bottom:14,width:hov?3:2,background:stripe,opacity:hov?.9:.4,borderRadius:"0 2px 2px 0",transition:"opacity .22s,width .22s",pointerEvents:"none"}}/>

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
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.8px",textTransform:"uppercase",fontWeight:700,padding:"2px 8px",borderRadius:6,...EYE_STYLE}}>
          {c.eyeLabel}
        </span>
        {c.mustKnow&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--gold,#e9b446)",padding:"2px 8px",background:"var(--dim-go,rgba(232,201,122,.12))",border:"1px solid var(--bd-go,rgba(232,201,122,.3))",borderRadius:6,fontWeight:700}}>★ Napamet</span>}
        {c.diff==="napredni"&&<span style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",padding:"2px 8px",background:"var(--dim-br,rgba(220,50,47,.08))",border:"1px solid var(--bd-br,rgba(220,50,47,.2))",borderRadius:6,fontWeight:700}}>NAPREDNI</span>}
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

      {/* tez */}
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
export default function CitatnikH10({onBack, onNext}){
  const [catFilter,  setCatFilter]  = useState("all");
  const [tezFilter,  setTezFilter]  = useState("all");
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
    const matchFav  = !favOnly||!!favs[c.id];
    const hay       = normalize(c.eyeLabel+" "+c.author+" "+(c.loc||"")+" "+c.txt+" "+c.useHtml);
    const matchQ    = !q||hay.includes(normalize(q));
    return matchCat&&matchTez&&matchFav&&matchQ;
  });

  const hasActive=catFilter!=="all"||tezFilter!=="all"||favOnly||!!q;
  const favCount=Object.keys(favs).length;
  function clearAll(){setCatFilter("all");setTezFilter("all");setFavOnly(false);setQ("");}
  function doRandom(){if(!filtered.length)return;const pick=filtered[Math.floor(Math.random()*filtered.length)];document.getElementById("cc-"+pick.id)?.scrollIntoView({behavior:"smooth",block:"center"});showToast("🎲 Slučajan citat");}

  const pfbtn=(active)=>({
    padding:"6px 14px",fontFamily:"var(--mono,monospace)",fontSize:10,fontWeight:700,
    letterSpacing:"1px",textTransform:"uppercase",
    background:active?"linear-gradient(135deg,#8b2500,#cd3a1f)":"var(--card,#120808)",
    color:active?"#F5E6D3":"var(--t2,#c5b8aa)",
    border:`1px solid ${active?"var(--bronze,#8b4513)":"var(--bdm,#2c1f1f)"}`,
    borderRadius:8,cursor:"pointer",transition:"all .18s",
    display:"inline-flex",alignItems:"center",gap:5,lineHeight:1.4,
    boxShadow:active?"0 2px 10px rgba(220,50,47,.15)":"none"
  });
  const subBtn=(active)=>({padding:"4px 10px",fontFamily:"var(--mono,monospace)",fontSize:"9.5px",fontWeight:600,letterSpacing:".8px",textTransform:"uppercase",background:active?"var(--dim-br,rgba(220,50,47,.08))":"transparent",color:active?"var(--bronze-l,#cd853f)":"var(--t3,#8c7b72)",border:`1px solid ${active?"var(--bd-br,rgba(220,50,47,.2))":"var(--bdm,#2c1f1f)"}`,borderRadius:6,cursor:"pointer",transition:"all .15s"});

  return(
    <div style={{padding:"0 0 32px"}}>

      {/* INTRO */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>💬 Citatnik — kako koristiti</div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <b>★ Napamet</b> — citati koje vrijedi znati naizust za ispit i esej. Ostali su vrijedni za esejsku argumentaciju.{" "}
          Svaka kartica ima: <em>tko/kada</em>, <em>tekst citata</em> i <em>kada koristiti u eseju</em>.{" "}
          <b>36 citata</b>: Teoretičari (8), Eco (6), Pavličić + Ugrešić (5), Borges (4), Ostali (5), Pojmovi (8).
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"18px 0 10px"}}>
        {[
          {key:"all",         label:"Svi (36)"},
          {key:"must",        label:"★ Napamet"},
          {key:"teoreticari", label:"🧠 Teoretičari (8)"},
          {key:"eco",         label:"🌹 Eco (6)"},
          {key:"pavlicic",    label:"🎭 Pavličić + Ugrešić (5)"},
          {key:"borges",      label:"📚 Borges (4)"},
          {key:"ostali",      label:"🌍 Ostali (5)"},
          {key:"pojmovi",     label:"🔑 Pojmovi (8)"},
        ].map(f=>(
          <button key={f.key} onClick={()=>setCatFilter(f.key)} style={pfbtn(catFilter===f.key)}>{f.label}</button>
        ))}
      </div>

      {/* TEZ + FAV + RANDOM */}
      <div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"0 0 14px",padding:"10px 14px",background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:10,alignItems:"center"}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginRight:4}}>Tez:</span>
        {["all",1,2,3,4,5,6,7].map(t=>{
          const active=String(tezFilter)===String(t);
          return <button key={t} onClick={()=>setTezFilter(active?"all":String(t))} style={subBtn(active)}>{t==="all"?"Sve":`T${t}`}</button>;
        })}
        <button onClick={()=>setFavOnly(p=>!p)} style={{...subBtn(favOnly),color:favOnly?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",border:`1px solid ${favOnly?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)"}`,background:favOnly?"var(--dim-go,rgba(232,201,122,.1))":"transparent",marginLeft:12}}>
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
          placeholder="Pretraži citate (npr. Eco, Pavličić, metafikcija, intertekstualnost)…"
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
