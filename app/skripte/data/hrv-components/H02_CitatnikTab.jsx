'use client';
import { useState, useEffect, useRef } from "react";

/* ══ DATA ══ */
const CITATI = [
  /* HRVATSKI SREDNJI VIJEK */
  {
    id:"h02c01", cat:"hrv", diff:"basic", tez:[1,2], mustKnow:true,
    author:"(anonim / tradicija)",
    work:"Bašćanska ploča, 3. redak · transliteracija Fučić",
    txt:"„Az opat Držiha pisah se o ledine, juže da Zvonimir kralj hrvatski v dni svoje v Svetuju Luciju…”",
    txtHighlight:["Zvonimir kralj hrvatski"],
    use:"Teza o hrvatskom identitetu, prvo pisano spominjanje „kralj hrvatski” — ovo je citat bez kojeg ne možeš pisati esej o Bašćanskoj ploči."
  },
  {
    id:"h02c05", cat:"hrv", diff:"basic", tez:[1,2], mustKnow:true,
    author:"(anonim / tradicija)",
    work:"Tradicionalna sintagma hrvatske književne povijesti",
    txt:"„Od Bašćanske ploče do danas…”",
    txtHighlight:["Od Bašćanske ploče do danas"],
    use:"Kad pišeš o kontinuitetu hrvatske književnosti. Ovo je standardna formulacija koja otvara ili zatvara esej o hrvatskoj pismenosti."
  },
  {
    id:"h02c02", cat:"hrv", diff:"advanced", tez:[2], mustKnow:false,
    author:"(anonim / tradicija)",
    work:"Bašćanska ploča, klevetna formula",
    txt:"„Da iže to poreče, klni j Bog i dvanadeste apostola i četiri evanjelisti i svetaja Lucija, amen.”",
    txtHighlight:["klni j Bog"],
    use:"Pokazati kako srednjovjekovni pravni zapis spaja zakon i vjeru — prokletstvo kao pravna sankcija. Tipičan element srednjovjekovne darovnice."
  },
  {
    id:"h02c03", cat:"hrv", diff:"advanced", tez:[2], mustKnow:false,
    author:"Stjepan Damjanović",
    work:"o Bašćanskoj ploči",
    txt:"„Bašćanska ploča je krsni list hrvatske kulture.”",
    txtHighlight:["krsni list hrvatske kulture"],
    use:"Uvod ili zaključak eseja — autoritativna fraza koju studenti tajno traže. Uvijek radi."
  },
  {
    id:"h02c04", cat:"hrv", diff:"advanced", tez:[2], mustKnow:false,
    author:"Eduard Hercigonja",
    work:"o značaju ploče",
    txt:"„Bašćanskom pločom smo izronili iz mraka svoje nedokumentirane povijesti i sjeli za stol pismenih europskih naroda.”",
    txtHighlight:["izronili iz mraka svoje nedokumentirane povijesti i sjeli za stol pismenih europskih naroda"],
    use:"Povezivanje hrvatske pismenosti s europskim kontekstom. Moćno za razradu 2 — zašto Ploča nije samo „naša”, nego dio šire europske priče."
  },
  /* DANTE */
  {
    id:"h02c06", cat:"dante", diff:"basic", tez:[3], mustKnow:true,
    author:"Dante",
    work:"Božanstvena komedija, Inferno, I. pjevanje, 1–3",
    txt:"„Na sredini svojega života nađoh se u tamnoj šumi, jer bijah s pravog puta zalutao.”",
    txtHighlight:["sredini svojega života"],
    use:"Otvaranje eseja o Danteu ili o srednjovjekovnoj alegoriji — ovo je najpoznatiji početak u svjetskoj književnosti. „Tamna šuma” = duhovno zalutalo stanje, start puta."
  },
  {
    id:"h02c07", cat:"dante", diff:"basic", tez:[3,6], mustKnow:true,
    author:"Dante",
    work:"Inferno, III. pjevanje — natpis iznad vrata Pakla",
    txt:"„Lasciate ogne speranza, voi ch'intrate” — „Napustite svaku nadu, vi koji ulazite.”",
    txtHighlight:["Lasciate ogne speranza, voi ch'intrate"],
    use:"Opis pakla, srednjovjekovna slika vječnog prokletstva, simbolička moć pisanja u kamenu. Talijanska forma ovoga citata ušla je u svjetsku kulturu."
  },
  {
    id:"h02c08", cat:"dante", diff:"advanced", tez:[3,4], mustKnow:false,
    author:"Dante",
    work:"Inferno, V. pjevanje — Francesca da Rimini",
    txt:"„Ljubav, koja ne oprašta ljubljenom da ne ljubi, zahvati me za njega tako snažno…”",
    txtHighlight:["Ljubav, koja ne oprašta ljubljenom da ne ljubi"],
    use:"Esej o Paolu i Francesci, tragediji kurtoazne ljubavi, sukobu osjećaja i morala. Pokazuje kako Dante ne osuđuje — on razumije."
  },
  {
    id:"h02c09", cat:"dante", diff:"advanced", tez:[3], mustKnow:false,
    author:"Dante",
    work:"Paradiso, XXXIII. pjevanje — vrhunac",
    txt:"„Ljubav koja miče sunce i druge zvijezde.” (L'amor che move il sole e l'altre stelle)",
    txtHighlight:["Ljubav koja miče sunce i druge zvijezde"],
    use:"Zaključak eseja o Danteu. Posljednja rečenica cijele Komedije. Božja ljubav kao kozmička sila. Izvrstan citat za zatvaranje rasprave o duhovnom putu."
  },
  /* VITEŠKA */
  {
    id:"h02c10", cat:"viteski", diff:"basic", tez:[4], mustKnow:true,
    author:"(anonim / tradicija)",
    work:"Pjesma o Rolandu · ~1100. Francuska",
    txt:"„Roland je hrabar, a Olivier je mudar.” (Rollant est proz e Oliver est sage)",
    txtHighlight:["Roland je hrabar, a Olivier je mudar"],
    use:"Karakterizacija viteških vrlina — dva ideala: hrabrost (Roland) vs mudrost (Olivier). Jedna od najpoznatijih rečenica viteške književnosti."
  },
  {
    id:"h02c11", cat:"viteski", diff:"advanced", tez:[4], mustKnow:false,
    author:"(anonim / tradicija)",
    work:"Trubadurska lirika · tipska formula",
    txt:"„Moja dama je moj gospodar.” (Ma dama es mon seignor)",
    txtHighlight:["Moja dama je moj gospodar"],
    use:"Opis kurtoazne ljubavi — feudalni odnos vazala prema gospodaru prebačen na odnos pjesnika prema dami. Muški pjevač je ponizni sluga, dama je nedostupna."
  },
  {
    id:"h02c12", cat:"viteski", diff:"basic", tez:[4], mustKnow:false,
    author:"(anonim / tradicija)",
    work:"Pjesma o Cidu · ~1140. Španjolska",
    txt:"„Bože, kako dobrog vazala, ali kako bijednog gospodara!” — plaču stanovnici Bivara",
    txtHighlight:["Bože, kako dobrog vazala, ali kako bijednog gospodara!"],
    use:"Tema nepravednog progonstva junaka. Cid je vjeran kralju koji ga je nepravedno protjerao — tema časti i dužnosti usprkos nepravdi."
  },
  {
    id:"h02c13", cat:"viteski", diff:"advanced", tez:[4], mustKnow:false,
    author:"Walther von der Vogelweide",
    work:"minnesinger, ~1200.",
    txt:"„Pod lipom na vresu, gdje je bilo naše ležaj za dvoje…”",
    txtHighlight:["Pod lipom na vresu"],
    use:"Razlika od trubadura — Walther piše o stvarnoj, uzvraćenoj ljubavi (a ne o idealiziranoj dami). Najslavniji njemački minnesinger."
  },
  /* LATINSKA */
  {
    id:"h02c14", cat:"latinski", diff:"basic", tez:[6], mustKnow:true,
    author:"(anonim / tradicija)",
    work:"Srednjovjekovni studentski latinski · Gaudeamus igitur",
    txt:"„Vita nostra brevis est, brevi finietur.” — „Život je naš kratak, brzo će završiti.”",
    txtHighlight:["Vita nostra brevis est"],
    use:"Razmišljanje o srednjovjekovnoj svijesti o prolaznosti. Svi srednjovjekovni djela pretpostavljaju ovu istinu — ovozemaljski život kao priprema za vječni."
  },
  {
    id:"h02c16", cat:"latinski", diff:"basic", tez:[6], mustKnow:true,
    author:"(anonim / tradicija)",
    work:"Srednjovjekovna sentencija · memento mori tradicija",
    txt:"„Memento mori” — „Sjeti se da ćeš umrijeti.”",
    txtHighlight:["Memento mori"],
    use:"Opis srednjovjekovne svijesti o smrti i kraju. Redovnici su ovu frazu imali pred sobom stalno — podsjetnik da sav ovozemaljski život vodi prema sudu."
  },
  {
    id:"h02c18", cat:"latinski", diff:"basic", tez:[2,7], mustKnow:true,
    author:"Dante Alighieri",
    work:"De vulgari eloquentia, ~1304.",
    txt:"„Narodni jezik je plemenitiji od latinskoga, jer ga usvajamo prirodno, bez ikakvih pravila.”",
    txtHighlight:["Narodni jezik je plemenitiji"],
    use:"Objašnjenje zašto Dante piše Božanstvenu komediju na talijanskom, ne latinskom. Revolucionaran stav — otvara put nacionalnim književnostima u Europi."
  },
  {
    id:"h02c15", cat:"latinski", diff:"advanced", tez:[5], mustKnow:false,
    author:"Sv. Anselmo Canterburyjski",
    work:"Proslogion (oko 1078.)",
    txt:"„Vjera traži razumijevanje.” (Fides quaerens intellectum)",
    txtHighlight:["Vjera traži razumijevanje"],
    use:"Pokazati duh srednjovjekovne teologije — vjera i razum nisu neprijatelji, nego se nadopunjuju. Temelj skolastike. Dobra referenca za opis Danteovog svijeta."
  },
  {
    id:"h02c17", cat:"latinski", diff:"advanced", tez:[7], mustKnow:false,
    author:"Francesco Petrarca",
    work:"pismo o antičkim piscima",
    txt:"„Život nam je kratak, ali svjetlost knjige čini ga dužim i dubljim.”",
    txtHighlight:["kratak, ali svjetlost knjige"],
    use:"Prijelaz iz srednjeg vijeka u renesansu — Petrarca vraća antičke autore u središte pažnje. Njegova ljubav prema rukopisima pokreće europski humanizam."
  }
];

const LS_FAV  = "mt.hrv.h02.cit_favs";
const LS_COPY = "mt.hrv.h02.cit_copy";

function normalize(s){
  return (s||"").toLowerCase()
    .replace(/č|ć/g,"c").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/đ/g,"d").replace(/[„"\"''""„]/g,"")
    .trim();
}

/* ══ TOAST ══ */
function Toast({msg,on}){
  return(
    <div style={{
      position:"fixed",bottom:24,left:"50%",transform:`translateX(-50%) translateY(${on?0:16}px)`,
      background:"var(--card,#1a0d0d)",color:"var(--t1,#f4ede5)",
      padding:"10px 18px",borderRadius:10,border:"1px solid var(--bd-go,#4a3800)",
      fontFamily:"var(--serif,Georgia)",fontSize:13,fontStyle:"italic",
      boxShadow:"0 10px 32px rgba(0,0,0,.45)",
      opacity:on?1:0,visibility:on?"visible":"hidden",
      transition:"all .25s cubic-bezier(.4,0,.2,1)",zIndex:9999,pointerEvents:"none"
    }}>{msg}</div>
  );
}

/* ══ CARD ══ */
function CitCard({c, favs, copyCount, onFav, onCopy, onTezClick}){
  const CAT_STRIPE={hrv:"var(--red,#e05252)",dante:"var(--gold,#e9b446)",viteski:"var(--teal,#4ecdc4)",latinski:"#c5a1d9"};
  const CAT_EYE_STYLE={
    hrv:{color:"var(--red-l,#f87171)",background:"var(--dim-r,rgba(224,82,82,.12))",border:"1px solid var(--bd-r,rgba(224,82,82,.25))"},
    dante:{color:"var(--gold,#e9b446)",background:"var(--dim-go,rgba(232,201,122,.12))",border:"1px solid var(--bd-go,rgba(232,201,122,.3))"},
    viteski:{color:"var(--teal,#4ecdc4)",background:"var(--dim-t,rgba(78,205,196,.12))",border:"1px solid var(--bd-t,rgba(78,205,196,.25))"},
    latinski:{color:"#c5a1d9",background:"rgba(197,161,217,.12)",border:"1px solid rgba(197,161,217,.25)"}
  };
  const CAT_LABEL={hrv:"HRVATSKI",dante:"DANTE",viteski:"VITEŠKA",latinski:"LATINSKA"};
  const isFav=!!favs[c.id];
  const copies=copyCount[c.id]||0;
  const [hovered,setHovered]=useState(false);

  function doCopy(){
    const full=c.txt+"  — "+c.author+", "+c.work;
    if(navigator.clipboard?.writeText){
      navigator.clipboard.writeText(full).then(()=>onCopy(c.id)).catch(()=>onCopy(c.id));
    } else {
      try{
        const ta=document.createElement("textarea");
        ta.value=full;ta.setAttribute("readonly","");
        ta.style.position="absolute";ta.style.left="-9999px";
        document.body.appendChild(ta);ta.select();document.execCommand("copy");
        document.body.removeChild(ta);
      }catch(e){}
      onCopy(c.id);
    }
  }

  return(
    <div
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      style={{
        background:"var(--card,#120808)",
        border:`1px solid ${hovered?"var(--bd-br,rgba(220,50,47,.3))":"var(--bdm,#2c1f1f)"}`,
        borderRadius:14,padding:"18px 20px 16px 22px",
        transition:"all .22s cubic-bezier(.4,0,.2,1)",
        position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",
        transform:hovered?"translateY(-2px)":"none",
        boxShadow:hovered?"0 8px 24px rgba(220,50,47,.08)":"none"
      }}
    >
      {/* left stripe */}
      <div style={{
        position:"absolute",left:0,top:14,bottom:14,
        width:hovered?3:2,
        background:CAT_STRIPE[c.cat]||"var(--bronze,#8b4513)",
        opacity:hovered?.9:.4,
        borderRadius:"0 2px 2px 0",
        transition:"all .22s"
      }}/>

      {/* action buttons */}
      <div style={{
        position:"absolute",top:14,right:14,display:"flex",gap:3,zIndex:3,
        opacity:hovered||isFav?1:0,transition:"opacity .22s"
      }}>
        <button onClick={()=>onFav(c.id)} aria-label={isFav?"Ukloni iz favorita":"Dodaj u favorite"}
          style={{
            width:26,height:26,borderRadius:"50%",
            border:`1px solid ${isFav?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)"}`,
            background:isFav?"var(--dim-go,rgba(232,201,122,.12))":"var(--ele,#1e1010)",
            color:isFav?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",
            cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:11,padding:0,transition:"all .15s"
          }}>{isFav?"★":"☆"}</button>

        <div style={{position:"relative"}}>
          <button onClick={doCopy} aria-label="Kopiraj citat"
            style={{
              width:26,height:26,borderRadius:"50%",
              border:"1px solid var(--bdm,#2c1f1f)",
              background:"var(--ele,#1e1010)",
              color:"var(--t3,#8c7b72)",
              cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:11,padding:0,transition:"all .15s"
            }}>📋</button>
          {copies>0&&(
            <span style={{
              position:"absolute",top:-5,right:-5,
              background:"var(--dim-br,rgba(220,50,47,.12))",
              color:"var(--bronze-l,#cd853f)",
              fontSize:7,fontWeight:700,padding:"1px 4px",borderRadius:7,
              border:"1px solid var(--bd-br,rgba(220,50,47,.2))",
              fontFamily:"var(--mono,monospace)",lineHeight:1,minWidth:12,
              textAlign:"center",letterSpacing:0
            }}>{copies}</span>
          )}
        </div>
      </div>

      {/* meta */}
      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingRight:68,flexWrap:"wrap"}}>
        <span style={{
          fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",
          padding:"2px 7px",borderRadius:6,fontWeight:700,
          ...CAT_EYE_STYLE[c.cat]
        }}>{CAT_LABEL[c.cat]}</span>

        {c.mustKnow&&(
          <span style={{
            fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",
            color:"var(--gold,#e9b446)",padding:"2px 7px",
            background:"var(--dim-go,rgba(232,201,122,.12))",
            border:"1px solid var(--bd-go,rgba(232,201,122,.3))",
            borderRadius:6,fontWeight:700,display:"inline-flex",alignItems:"center",gap:3,
            boxShadow:"0 0 10px rgba(232,201,122,.12)"
          }}>★ Napamet</span>
        )}

        {c.diff==="advanced"&&(
          <span style={{
            fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",
            padding:"2px 7px",borderRadius:6,fontWeight:700,
            color:"var(--bronze-l,#cd853f)",
            border:"1px solid var(--bd-br,rgba(220,50,47,.2))",
            background:"var(--dim-br,rgba(220,50,47,.08))"
          }}>NAPREDNI</span>
        )}
      </div>

      {/* source */}
      <div style={{marginBottom:4}}>
        <span style={{
          fontFamily:"var(--display,'EB Garamond',Georgia,serif)",fontSize:13.5,fontWeight:700,
          color:"var(--bronze-l,#cd853f)",letterSpacing:.4,lineHeight:1.3,display:"block"
        }}>{c.author}</span>
        <span style={{
          display:"block",fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:600,
          letterSpacing:.7,color:"var(--t3,#8c7b72)",marginTop:3,lineHeight:1.5,
          textTransform:"uppercase",opacity:.85
        }}>{c.work}</span>
      </div>

      {/* quote */}
      <div style={{
        fontFamily:"'EB Garamond',Georgia,serif",fontSize:16,fontWeight:400,fontStyle:"italic",
        color:hovered?"#fef3e2":"var(--t1,#f4ede5)",lineHeight:1.55,
        margin:"12px 0 14px",letterSpacing:.15
      }}>{c.txt}</div>

      {/* tez tags */}
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:12}}>
        {c.tez.map(t=>(
          <button key={t} onClick={()=>onTezClick(t)}
            style={{
              fontFamily:"var(--mono,monospace)",fontSize:8.5,fontWeight:700,
              letterSpacing:"1px",textTransform:"uppercase",
              color:"var(--teal,#4ecdc4)",background:"var(--dim-t,rgba(78,205,196,.12))",
              border:"1px solid var(--bd-t,rgba(78,205,196,.25))",
              borderRadius:6,padding:"2px 8px",cursor:"pointer",transition:"all .15s"
            }}>T{t}</button>
        ))}
      </div>

      {/* use */}
      <div style={{
        fontFamily:"var(--serif,Georgia)",fontSize:13,color:"var(--t2,#c5b8aa)",
        lineHeight:1.6,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)",margin:0
      }}>
        <b style={{
          fontFamily:"var(--mono,monospace)",fontSize:8.5,fontWeight:700,
          letterSpacing:"1.5px",textTransform:"uppercase",
          color:"var(--bronze-l,#cd853f)",display:"block",marginBottom:5
        }}>⚡ Kada:</b>
        {c.use}
      </div>
    </div>
  );
}

/* ══ MAIN COMPONENT ══ */
export default function Citatnik({onBack, onNext}){
  const [q,setQ]=useState("");
  const [catFilter,setCatFilter]=useState("all");
  const [tezFilter,setTezFilter]=useState("all");
  const [diffFilter,setDiffFilter]=useState("all");
  const [favOnly,setFavOnly]=useState(false);
  const [favs,setFavs]=useState({});
  const [copyCount,setCopyCount]=useState({});
  const [toast,setToast]=useState({on:false,msg:""});
  const toastTimer=useRef(null);

  /* Load from localStorage */
  useEffect(()=>{
    try{ const r=localStorage.getItem(LS_FAV); if(r) setFavs(JSON.parse(r)); }catch(e){}
    try{ const r=localStorage.getItem(LS_COPY); if(r) setCopyCount(JSON.parse(r)); }catch(e){}
  },[]);

  function showToast(msg){
    clearTimeout(toastTimer.current);
    setToast({on:true,msg});
    toastTimer.current=setTimeout(()=>setToast({on:false,msg}),1800);
  }

  function handleFav(id){
    setFavs(prev=>{
      const next={...prev};
      if(next[id]) delete next[id]; else next[id]=true;
      try{ localStorage.setItem(LS_FAV,JSON.stringify(next)); }catch(e){}
      return next;
    });
  }

  function handleCopy(id){
    setCopyCount(prev=>{
      const next={...prev,[id]:(prev[id]||0)+1};
      try{ localStorage.setItem(LS_COPY,JSON.stringify(next)); }catch(e){}
      return next;
    });
    showToast("📋 Citat kopiran");
  }

  function handleTezClick(t){
    setTezFilter(prev=>prev===t?"all":t);
  }

  /* Filter logic */
  const filtered=CITATI.filter(c=>{
    const matchCat=catFilter==="all"||(catFilter==="must"?c.mustKnow:c.cat===catFilter);
    const matchTez=tezFilter==="all"||c.tez.includes(Number(tezFilter));
    const matchDiff=diffFilter==="all"||c.diff===diffFilter;
    const matchFav=!favOnly||!!favs[c.id];
    const matchQ=!q||normalize(c.author+" "+c.work+" "+c.txt+" "+c.use).includes(normalize(q));
    return matchCat&&matchTez&&matchDiff&&matchFav&&matchQ;
  });

  const hasActiveFilters=catFilter!=="all"||tezFilter!=="all"||diffFilter!=="all"||favOnly||q;

  function clearFilters(){setCatFilter("all");setTezFilter("all");setDiffFilter("all");setFavOnly(false);setQ("");}

  function handleRandom(){
    if(!filtered.length) return;
    const pick=filtered[Math.floor(Math.random()*filtered.length)];
    const el=document.getElementById("cc-"+pick.id);
    if(el){ el.scrollIntoView({behavior:"smooth",block:"center"}); }
    showToast("🎲 Slučajan citat");
  }

  const favCount=Object.keys(favs).length;

  /* Shared pill style */
  const pill=(active)=>({
    padding:"6px 14px",fontFamily:"var(--mono,monospace)",fontSize:10,fontWeight:700,
    letterSpacing:"1px",textTransform:"uppercase",
    background:active?"linear-gradient(135deg,#8b2500,#cd3a1f)":"var(--card,#120808)",
    color:active?"#F5E6D3":"var(--t2,#c5b8aa)",
    border:`1px solid ${active?"var(--bronze,#8b4513)":"var(--bdm,#2c1f1f)"}`,
    borderRadius:8,cursor:"pointer",transition:"all .18s",
    display:"inline-flex",alignItems:"center",gap:5,lineHeight:1.4
  });

  const diffPill=(key,label)=>{
    const active=diffFilter===key;
    return(
      <button key={key} onClick={()=>setDiffFilter(active?"all":key)}
        style={{
          padding:"4px 10px",fontFamily:"var(--mono,monospace)",fontSize:9.5,fontWeight:600,
          letterSpacing:.8,textTransform:"uppercase",
          background:active?"var(--dim-br,rgba(220,50,47,.08))":"transparent",
          color:active?"var(--bronze-l,#cd853f)":"var(--t3,#8c7b72)",
          border:`1px solid ${active?"var(--bd-br,rgba(220,50,47,.2))":"var(--bdm,#2c1f1f)"}`,
          borderRadius:6,cursor:"pointer",transition:"all .15s"
        }}>{label}</button>
    );
  };

  return(
    <div style={{padding:"0 0 32px"}}>

      {/* INTRO BOX */}
      <div style={{
        background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",
        borderRadius:12,padding:"16px 20px",marginBottom:20
      }}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>💬 Citati — arsenal za esej o srednjem vijeku</div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja.{" "}
          <b>18 probranih citata</b>: <em>Bašćanska ploča + hrvatski srednji vijek</em> (5),{" "}
          <em>Dante</em> — Božanstvena komedija (4), <em>viteška i trubadurska književnost</em> — Roland, Cid, Walther (4),{" "}
          <em>latinska tradicija</em> — Gaudeamus, Toma Akvinski, memento mori, Petrarca, Dante <em>De vulgari</em> (5).{" "}
          <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>.{" "}
          <b>8 must-know citata</b> označeno je <em>★ Napamet</em>.
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"18px 0 10px"}}>
        {[
          ["all","Svi (18)"],
          ["must","★ Napamet (8)",true],
          ["hrv","🪨 Hrvatski srednji vijek (5)"],
          ["dante","📜 Dante (4)"],
          ["viteski","⚔️ Viteška književnost (4)"],
          ["latinski","🕯 Latinska tradicija (5)"]
        ].map(([key,label,isSpec])=>(
          <button key={key} onClick={()=>setCatFilter(key)}
            style={{
              ...pill(catFilter===key),
              ...(isSpec&&catFilter!==key?{background:"var(--dim-go,rgba(232,201,122,.1))",color:"var(--gold,#e9b446)",border:"1px solid var(--bd-go,rgba(232,201,122,.3))"}:{}),
              ...(isSpec&&catFilter===key?{background:"linear-gradient(135deg,var(--gold,#e9b446),#d4b980)",color:"#0F0605",border:"1px solid var(--gold,#e9b446)"}:{})
            }}>{label}</button>
        ))}
      </div>

      {/* SUB-FILTERS ROW */}
      <div style={{
        display:"flex",gap:8,flexWrap:"wrap",
        margin:"0 0 14px",padding:"10px 14px",
        background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:10,
        alignItems:"center"
      }}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginRight:4}}>Tez:</span>
        {["all",1,2,3,4,5,6,7].map(t=>(
          <button key={t} onClick={()=>setTezFilter(tezFilter===String(t)?"all":String(t))}
            style={{
              padding:"4px 10px",fontFamily:"var(--mono,monospace)",fontSize:9.5,fontWeight:600,
              letterSpacing:.8,textTransform:"uppercase",
              background:String(tezFilter)===String(t)?"var(--dim-br,rgba(220,50,47,.08))":"transparent",
              color:String(tezFilter)===String(t)?"var(--bronze-l,#cd853f)":"var(--t3,#8c7b72)",
              border:`1px solid ${String(tezFilter)===String(t)?"var(--bd-br,rgba(220,50,47,.2))":"var(--bdm,#2c1f1f)"}`,
              borderRadius:6,cursor:"pointer",transition:"all .15s"
            }}>{t==="all"?"Sve":`T${t}`}</button>
        ))}

        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginLeft:12,marginRight:4}}>Razina:</span>
        {diffPill("all","Sve")}
        {diffPill("basic","Osnovno")}
        {diffPill("advanced","Napredno")}

        <button onClick={()=>setFavOnly(p=>!p)}
          style={{
            padding:"4px 10px",fontFamily:"var(--mono,monospace)",fontSize:9.5,fontWeight:600,
            letterSpacing:.8,textTransform:"uppercase",
            background:favOnly?"var(--dim-go,rgba(232,201,122,.1))":"transparent",
            color:favOnly?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",
            border:`1px solid ${favOnly?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)"}`,
            borderRadius:6,cursor:"pointer",transition:"all .15s"
          }}>{favOnly?"★":"☆"} Favoriti ({favCount})</button>

        <button onClick={handleRandom}
          style={{
            padding:"4px 12px",fontFamily:"var(--mono,monospace)",fontSize:9.5,fontWeight:700,
            letterSpacing:"1px",textTransform:"uppercase",
            background:"var(--dim-go,rgba(232,201,122,.1))",color:"var(--gold,#e9b446)",
            border:"1px solid var(--bd-go,rgba(232,201,122,.3))",
            borderRadius:6,cursor:"pointer",transition:"all .15s",
            marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:5
          }}>🎲 Random</button>
      </div>

      {/* COUNT ROW */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:11,color:"var(--t3,#8c7b72)",marginBottom:14,letterSpacing:.3,display:"flex",alignItems:"center",gap:10}}>
        <span><b style={{color:"var(--bronze-l,#cd853f)",fontWeight:700}}>{filtered.length}</b> od <span>{CITATI.length}</span> citata prikazano</span>
        {hasActiveFilters&&(
          <button onClick={clearFilters}
            style={{
              fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",
              color:"var(--t3,#8c7b72)",background:"transparent",
              border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:6,padding:"3px 9px",
              cursor:"pointer",transition:"all .15s",display:"inline-flex"
            }}>Resetiraj filtere</button>
        )}
      </div>

      {/* SEARCH */}
      <div style={{margin:"14px 0 16px",display:"flex",gap:8,alignItems:"center"}}>
        <span style={{fontSize:18,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input
          type="search"
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži citate (npr. glagoljica, ćirilica, Bašćanska, Dijaški)…"
          aria-label="Pretraži citate"
          autoComplete="off"
          style={{
            flex:1,padding:"10px 14px",
            background:"var(--inp,#0F0605)",
            border:"1px solid var(--bdl,#2c1f1f)",
            borderRadius:10,color:"var(--t1,#f4ede5)",
            fontFamily:"var(--mono,monospace)",fontSize:13,outline:"none"
          }}
        />
        {q&&(
          <button onClick={()=>setQ("")} aria-label="Očisti pretragu"
            style={{
              padding:"8px 12px",background:"var(--inp,#0F0605)",
              border:"1px solid var(--bdl,#2c1f1f)",borderRadius:8,
              color:"var(--t2,#c5b8aa)",cursor:"pointer",fontSize:14
            }}>✕</button>
        )}
      </div>

      {/* EMPTY STATE */}
      {filtered.length===0&&(
        <div style={{
          background:"var(--card,#120808)",border:"1px solid var(--bdm,#2c1f1f)",
          borderRadius:14,padding:"32px 20px",textAlign:"center",
          fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t3,#8c7b72)",fontStyle:"italic",
          margin:"16px 0"
        }}>
          <b style={{color:"var(--bronze-l,#cd853f)",fontStyle:"normal",fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,display:"block",marginBottom:8}}>Nema rezultata</b>
          Niti jedan citat ne zadovoljava trenutne filtere. Probaj drugu kombinaciju ili resetiraj filtere.
        </div>
      )}

      {/* GRID */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",
        gap:14,marginTop:4
      }}>
        {filtered.map(c=>(
          <div key={c.id} id={"cc-"+c.id}>
            <CitCard
              c={c}
              favs={favs}
              copyCount={copyCount}
              onFav={handleFav}
              onCopy={handleCopy}
              onTezClick={handleTezClick}
            />
          </div>
        ))}
      </div>

      {/* TOAST */}
      <Toast msg={toast.msg} on={toast.on}/>

      {/* NAV ROW */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:32}}>
        {onBack&&<button onClick={onBack} style={{background:"none",border:"none",color:"var(--t2,#c5b8aa)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer"}}>← ✍ Esej alat</button>}
        {onNext&&<button onClick={onNext} style={{background:"none",border:"none",color:"var(--bronze-l,#cd853f)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer",fontWeight:600}}>📚 Pojmovnik →</button>}
      </div>
    </div>
  );
}
