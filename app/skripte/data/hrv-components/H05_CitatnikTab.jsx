'use client';

import { useState, useRef } from "react";
import { useLocalStorageJson } from "@/lib/hooks/useLocalStorageJson";

/* ══════════════════════════════════════════════════════
   CITATNIK H05 — Werther · Goethe · Voltaire · Rousseau/Kant/Diderot
   v9.1 — identičan HTML implementaciji
   ══════════════════════════════════════════════════════ */

const LS_FAV  = "mt.hrv.h05.cit_favs";
const LS_COPY = "mt.hrv.h05.cit_copy";

const CAT_CFG = {
  werther:  { label:"WERTHER",  stripe:"var(--red,#e05252)",    eye:{ color:"var(--red-l,#f87171)",  background:"var(--dim-r,rgba(224,82,82,.12))",    border:"1px solid var(--bd-r,rgba(224,82,82,.25))"    }},
  goethe:   { label:"GOETHE",   stripe:"var(--gold,#e9b446)",   eye:{ color:"var(--gold,#e9b446)",   background:"var(--dim-go,rgba(232,201,122,.12))", border:"1px solid var(--bd-go,rgba(232,201,122,.3))" }},
  voltaire: { label:"VOLTAIRE", stripe:"var(--teal,#4ecdc4)",   eye:{ color:"var(--teal,#4ecdc4)",   background:"var(--dim-t,rgba(78,205,196,.12))",   border:"1px solid var(--bd-t,rgba(78,205,196,.25))"  }},
  ostali:   { label:"FILOZOFI", stripe:"#c5a1d9",               eye:{ color:"#c5a1d9",               background:"rgba(197,161,217,.12)",               border:"1px solid rgba(197,161,217,.25)"             }},
};

/* ══ DATA — 18 citata ══ */
const CITATI = [
  /* ── WERTHER (8) ── */
  {
    id:"h05c01", cat:"werther", diff:"basic", tez:[2,4,5], mustKnow:true,
    author:"Werther", work:"Knjiga I (16.6.1771.)",
    txt:"„Mlada je djevojka za mene kao glazba — ne mogu živjeti bez te melodije.”",
    useLabel:"Kada koristiti",
    useEm:null, useBold:null,
    useText:"esej o Wertherovoj idealizaciji Lotte. Prvi susret. Pokazuje da je od početka Lotte za njega ",
    useEm2:"simbol", useAfter:", ne osoba."
  },
  {
    id:"h05c03", cat:"werther", diff:"basic", tez:[2], mustKnow:true,
    author:"Werther", work:"Knjiga I (kraj kolovoza 1771.) — rasprava s Albertom",
    txt:"„Ljudska priroda ima svoje granice; može podnijeti radost, bol, patnju do stanovite mjere — i nestaje čim se ta granica prijeđe.”",
    useLabel:"Kada koristiti",
    useText:"Wertherova obrana samoubojstva. Centralna za Tezu 2 (Sturm und Drang heroj) — argumentira da osjećaj ima svoju fizičku logiku poput groznice."
  },
  {
    id:"h05c04", cat:"werther", diff:"basic", tez:[1,2], mustKnow:true,
    author:"Werther", work:"Knjiga II (20.1.1772.)",
    txt:"„Jedinstven sam; usred svijeta, a ipak sam potpuno sam.”",
    useLabel:"Kada koristiti",
    useText:"esej o otuđenju i pojedincu. Werther se osjeća ",
    useEm2:"jedinstvenim", useAfter:", pa i usamljenim. Rana slika moderne alienacije."
  },
  {
    id:"h05c06", cat:"werther", diff:"basic", tez:[2], mustKnow:true,
    author:"Werther", work:"Knjiga II (22.12.1772.) — posljednje pismo Lotti",
    txt:"„Odlazim na put, Lotte. Put bez povratka. Ali ne zauvijek — mi ćemo se opet vidjeti.”",
    useLabel:"Kada koristiti",
    useText:"esej o smrti i nadi u zagrobnom životu. Werther racionalizira samoubojstvo kao putovanje. Paradoks — osjećaj maskiran kao razumska odluka."
  },
  {
    id:"h05c07", cat:"werther", diff:"basic", tez:[2], mustKnow:true,
    author:"Werther", work:"Knjiga II — Izdavačeva bilješka",
    txt:"„U dvanaest sati odjeknuo je pucanj.”",
    useLabel:"Kada koristiti",
    useText:"kraj romana — prijelaz s Wertherovog prvog lica na objektivnu priču izdavača. Goethe namjerno čini scenu ",
    useEm2:"klinički hladnom", useAfter:". Pokazuje strukturalnu namjeru — Werther više ne može pisati."
  },
  {
    id:"h05c08", cat:"werther", diff:"advanced", tez:[1,2], mustKnow:true,
    author:"Werther", work:"Goethe u predgovoru 2. izdanja (1787.)",
    txt:"„I ti budi čovjek i ne slijedi njegov primjer.”",
    useLabel:"Kada koristiti",
    useBold:"kritično za argumentaciju",
    useText:" da Goethe NE slavi samoubojstvo. Eksplicitno upozorenje autora koje diskvalificira tezu da je Werther „glorifikacija samoubojstva”."
  },
  {
    id:"h05c02", cat:"werther", diff:"basic", tez:[2,5], mustKnow:false,
    author:"Werther", work:"Knjiga I (svibanj 1771.)",
    txt:"„Živim tako sretne dane kao što ih Bog čuva za svoje svece.”",
    useLabel:"Kada koristiti",
    useText:"kontrast prvog i drugog dijela romana. Početni zanos — prije Albertova povratka. Za tezu o ciklusu radosti i očaja."
  },
  {
    id:"h05c05", cat:"werther", diff:"advanced", tez:[5], mustKnow:false,
    author:"Werther", work:"Knjiga II (studeni 1772.) — Ossian vs Homer",
    txt:"„Ossian je istisnuo Homera iz mog srca.”",
    useLabel:"Kada koristiti",
    useBold:"kritična rečenica.",
    useText:" Znakom ove rečenice Werther prestaje biti prosvjetiteljski (Homer = svjetlo, razum) i postaje predromantičarski (Ossian = magla, osjećaj). Prijelaz epoha u jednoj rečenici."
  },

  /* ── GOETHE ostali (3) ── */
  {
    id:"h05c11", cat:"goethe", diff:"advanced", tez:[1], mustKnow:true,
    author:"Goethe o Wertheru (u autobiografiji Pjesništvo i istina)", work:"",
    txt:"„Pisao sam Wertherom da se spasim samoubojstva.”",
    useLabel:"Kada koristiti",
    useText:"esej o autobiografskoj pozadini romana. Goethe je Wertherove osjećaje preusmjerio u pisanje — ",
    useEm2:"umjetnost kao oslobađanje od patnje", useAfter:"."
  },
  {
    id:"h05c09", cat:"goethe", diff:"basic", tez:[3], mustKnow:false,
    author:"Goethe", work:"Faust I (1808.) — Faustov monolog",
    txt:"„Sada stojim, jadan luđak, i nisam mudriji nego prije.”",
    useLabel:"Kada koristiti",
    useText:"povezivanje Werthera s Faustom kao Goetheove dvije centralne figure. Oba junaka traže ",
    useEm2:"apsolutno", useAfter:" — Werther u ljubavi, Faust u spoznaji. H06 povezivanje."
  },
  {
    id:"h05c10", cat:"goethe", diff:"advanced", tez:[5], mustKnow:false,
    author:"Goethe", work:"Naukovanje Wilhelma Meistera (1796.)",
    txt:"„Znaš li zemlju gdje cvjetaju limunovi?” (Mignon)",
    useLabel:"Kada koristiti",
    useText:"kontrastiranje Wertherove Sturm und Drang faze s kasnijom weimarskom klasikom. Pokazuje Goetheovu evoluciju kao autora."
  },

  /* ── VOLTAIRE (3) ── */
  {
    id:"h05c12", cat:"voltaire", diff:"basic", tez:[3,6], mustKnow:true,
    author:"Voltaire", work:"Candide (1759.) — kraj romana",
    txt:"„Il faut cultiver notre jardin.” („Moramo obrađivati svoj vrt.”)",
    useLabel:"Kada koristiti",
    useText:"usporedba s Wertherom. Voltaire predlaže ",
    useEm2:"pragmatični povratak radu", useAfter:", Werther odabire bijeg u smrt. Dvije suprotne strategije 18. stoljeća."
  },
  {
    id:"h05c13", cat:"voltaire", diff:"advanced", tez:[6], mustKnow:false,
    author:"Voltaire — pismo prijatelju", work:"",
    txt:"„Écrasez l'infâme!” („Zatrite tog nitkova!” — fanatizam, inkviziciju)",
    useLabel:"Kada koristiti",
    useText:"kontekst prosvjetiteljstva. Voltaireov borbeni stav protiv vjerskog fanatizma. ",
    useEm2:"Suprotnost Wertherovoj pasivnoj patnji.", useAfter:""
  },
  {
    id:"h05c14", cat:"voltaire", diff:"advanced", tez:[6,7], mustKnow:false,
    author:"Voltaire", work:"Traktat o toleranciji (1763.)",
    txt:"„Neslaganje je temelj slobode; bez prava na drugačije mišljenje nema civilizacije.”",
    useLabel:"Kada koristiti",
    useText:"prosvjetiteljski ideal tolerancije. ",
    useEm2:"Kontekstualni citat", useAfter:" za esej o prosvjetiteljstvu kao epohi."
  },

  /* ── ROUSSEAU · KANT · DIDEROT (4) ── */
  {
    id:"h05c15", cat:"ostali", diff:"basic", tez:[7], mustKnow:true,
    author:"Rousseau", work:"Društveni ugovor (1762.) — prva rečenica",
    txt:"„Čovjek je rođen slobodan, a posvuda je u okovima.”",
    useLabel:"Kada koristiti",
    useText:"povezivanje s Wertherom kao junakom koji ",
    useEm2:"ne može podnijeti okove društva",
    useAfter:". Rousseau je direktni preteča Sturm und Drang — svaki student Werthera mora znati ovaj citat."
  },
  {
    id:"h05c17", cat:"ostali", diff:"basic", tez:[3,7], mustKnow:true,
    author:"Kant", work:"Što je prosvjetiteljstvo? (1784.)",
    txt:"„Sapere aude! Imaj hrabrosti koristiti vlastiti razum!”",
    useLabel:"Kada koristiti",
    useBold:"kanonska definicija prosvjetiteljstva.",
    useText:" Kontrast Wertheru: Kant hvali razum, Werther odbacuje razum za osjećaj. Dva pola epohe u dvije rečenice."
  },
  {
    id:"h05c16", cat:"ostali", diff:"advanced", tez:[5,7], mustKnow:false,
    author:"Rousseau", work:"Emil ili o odgoju (1762.)",
    txt:"„Sve je dobro kad izlazi iz ruku tvorca svih stvari; sve se kvari pod ljudskim rukama.”",
    useLabel:"Kada koristiti",
    useText:"Rousseauova teza o prirodi kao dobroj i civilizaciji kao kvarljivcu. ",
    useEm2:"Direktni intelektualni temelj Wertherove idealizacije prirode.", useAfter:""
  },
  {
    id:"h05c18", cat:"ostali", diff:"advanced", tez:[3,6], mustKnow:false,
    author:"Diderot", work:"Enciklopedija (članak „Prosvjetiteljstvo”)",
    txt:"„Cilj enciklopedije je okupiti sve znanje rasuto po zemaljskoj kugli.”",
    useLabel:"Kada koristiti",
    useText:"prosvjetiteljska ambicija — sustavno ljudsko znanje. Pokazuje povijesni kontekst u kojem se Werther pojavljuje ",
    useEm2:"kao suprotstavljajući glas", useAfter:"."
  },
];

/* ── helpers ── */
function normalize(s){
  return (s||"").toLowerCase()
    .replace(/č|ć/g,"c").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/đ/g,"d").replace(/[„”“"']/g,"").trim();
}

/* renders the cit-use block identically to HTML */
function UseBlock({c}){
  const monoLabel = {
    fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,
    letterSpacing:"1.5px",textTransform:"uppercase",
    color:"var(--bronze-l,#cd853f)",display:"block",marginBottom:5
  };
  const boldInline = {color:"var(--t1,#f4ede5)",fontWeight:600,fontFamily:"var(--serif,Georgia)"};
  const emInline   = {color:"var(--t1,#f4ede5)",fontStyle:"italic"};

  return(
    <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13,color:"var(--t2,#c5b8aa)",lineHeight:1.6,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)"}}>
      <b style={monoLabel}>{c.useLabel}</b>
      {/* pattern: bold? → text → em2? → after? */}
      {c.useBold && <b style={boldInline}>{c.useBold}</b>}
      {c.useText && <span>{c.useText}</span>}
      {c.useEm2  && <em style={emInline}>{c.useEm2}</em>}
      {c.useAfter && <span>{c.useAfter}</span>}
    </div>
  );
}

/* ── TOAST ── */
function Toast({msg,on}){
  return(
    <div style={{
      position:"fixed",bottom:24,left:"50%",
      transform:`translateX(-50%) translateY(${on?0:16}px)`,
      background:"var(--card,#120808)",color:"var(--t1,#f4ede5)",
      padding:"10px 18px",borderRadius:10,
      border:"1px solid var(--bd-go,rgba(232,201,122,.3))",
      fontFamily:"var(--serif,Georgia)",fontSize:13,fontStyle:"italic",
      boxShadow:"0 10px 32px rgba(0,0,0,.45)",
      opacity:on?1:0,visibility:on?"visible":"hidden",
      transition:"all .25s cubic-bezier(.4,0,.2,1)",
      zIndex:9999,pointerEvents:"none"
    }}>{msg}</div>
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
      try{const ta=document.createElement("textarea");ta.value=text;ta.setAttribute("readonly","");ta.style.position="absolute";ta.style.left="-9999px";document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);}catch(e){}
      onCopy(c.id);
    }
  }

  return(
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        background:"var(--card,#120808)",
        border:`1px solid ${hov?"var(--bd-br,rgba(220,50,47,.3))":"var(--bdm,#2c1f1f)"}`,
        borderRadius:14,padding:"18px 20px 16px 22px",
        transition:"all .22s cubic-bezier(.4,0,.2,1)",
        position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",
        transform:hov?"translateY(-2px)":"none",
        boxShadow:hov?"0 8px 24px rgba(220,50,47,.08)":"none",willChange:"transform"
      }}
    >
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
          {copies>0&&(
            <span style={{position:"absolute",top:-5,right:-5,background:"var(--dim-br,rgba(220,50,47,.08))",color:"var(--bronze-l,#cd853f)",fontSize:7,fontWeight:700,padding:"1px 4px",borderRadius:7,border:"1px solid var(--bd-br,rgba(220,50,47,.2))",fontFamily:"var(--mono,monospace)",lineHeight:1,minWidth:12,textAlign:"center"}}>
              {copies}
            </span>
          )}
        </div>
      </div>

      {/* meta */}
      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingRight:68,flexWrap:"wrap"}}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,padding:"2px 7px",borderRadius:6,...cfg.eye}}>{cfg.label}</span>
        {c.mustKnow&&(
          <span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,color:"var(--gold,#e9b446)",padding:"2px 7px",background:"var(--dim-go,rgba(232,201,122,.12))",border:"1px solid var(--bd-go,rgba(232,201,122,.3))",borderRadius:6,display:"inline-flex",alignItems:"center",gap:3,boxShadow:"0 0 10px rgba(232,201,122,.12)"}}>
            ★ Napamet
          </span>
        )}
        {c.diff==="advanced"&&(
          <span style={{fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,color:"var(--bronze-l,#cd853f)",border:"1px solid var(--bd-br,rgba(220,50,47,.2))",background:"var(--dim-br,rgba(220,50,47,.08))",padding:"2px 7px",borderRadius:6}}>
            NAPREDNI
          </span>
        )}
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
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:12}}>
        {c.tez.map(t=>(
          <button key={t} onClick={()=>onTezClick(t)}
            style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"var(--teal,#4ecdc4)",background:"var(--dim-t,rgba(78,205,196,.12))",border:"1px solid var(--bd-t,rgba(78,205,196,.25))",borderRadius:6,padding:"2px 8px",cursor:"pointer",transition:"all .15s"}}>
            T{t}
          </button>
        ))}
      </div>

      <UseBlock c={c}/>
    </div>
  );
}

/* ══ MAIN ══ */
export default function CitatnikH05({onBack, onNext}){
  const [catFilter,  setCatFilter]  = useState("all");
  const [tezFilter,  setTezFilter]  = useState("all");
  const [diffFilter, setDiffFilter] = useState("all");
  const [favOnly,    setFavOnly]    = useState(false);
  const [q,          setQ]          = useState("");
  const [favs,       setFavs]       = useLocalStorageJson(LS_FAV, {});
  const [copyCount,  setCopyCount]  = useLocalStorageJson(LS_COPY, {});
  const [toast,      setToast]      = useState({on:false,msg:""});
  const toastTimer = useRef(null);

  function showToast(msg){
    clearTimeout(toastTimer.current);
    setToast({on:true,msg});
    toastTimer.current=setTimeout(()=>setToast(p=>({...p,on:false})),1800);
  }
  function handleFav(id){
    setFavs(prev=>{const n={...prev};if(n[id])delete n[id];else n[id]=true;return n;});
  }
  function handleCopy(id){
    setCopyCount(prev=>{const n={...prev,[id]:(prev[id]||0)+1};return n;});
    showToast("📋 Citat kopiran");
  }
  function handleTezClick(t){setTezFilter(prev=>String(prev)===String(t)?"all":String(t));}

  const filtered = CITATI.filter(c=>{
    const matchCat  = catFilter==="all"||(catFilter==="must"?c.mustKnow:c.cat===catFilter);
    const matchTez  = tezFilter==="all"||c.tez.includes(Number(tezFilter));
    const matchDiff = diffFilter==="all"||c.diff===diffFilter;
    const matchFav  = !favOnly||!!favs[c.id];
    const hay       = normalize([c.author,c.work,c.txt,c.useText||"",c.useBold||"",c.useEm2||"",c.useAfter||""].join(" "));
    const matchQ    = !q||hay.includes(normalize(q));
    return matchCat&&matchTez&&matchDiff&&matchFav&&matchQ;
  });

  const hasActive = catFilter!=="all"||tezFilter!=="all"||diffFilter!=="all"||favOnly||!!q;
  const favCount  = Object.keys(favs).length;
  function clearAll(){setCatFilter("all");setTezFilter("all");setDiffFilter("all");setFavOnly(false);setQ("");}
  function doRandom(){
    if(!filtered.length) return;
    const pick=filtered[Math.floor(Math.random()*filtered.length)];
    document.getElementById("cc-"+pick.id)?.scrollIntoView({behavior:"smooth",block:"center"});
    showToast("🎲 Slučajan citat");
  }

  /* button styles */
  const fbtn=(active,spec=false)=>({
    padding:"6px 14px",fontFamily:"var(--mono,monospace)",fontSize:10,fontWeight:700,
    letterSpacing:"1px",textTransform:"uppercase",
    background:active?(spec?"linear-gradient(135deg,var(--gold,#e9b446),#d4b980)":"linear-gradient(135deg,#8b2500,#cd3a1f)"):(spec?"var(--dim-go,rgba(232,201,122,.1))":"var(--card,#120808)"),
    color:active?(spec?"#0F0605":"#F5E6D3"):(spec?"var(--gold,#e9b446)":"var(--t2,#c5b8aa)"),
    border:`1px solid ${active?(spec?"var(--gold,#e9b446)":"var(--bronze,#8b4513)"):(spec?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)")}`,
    borderRadius:8,cursor:"pointer",transition:"all .18s",
    display:"inline-flex",alignItems:"center",gap:5,lineHeight:1.4,
    boxShadow:active&&!spec?"0 2px 10px rgba(220,50,47,.15)":"none"
  });
  const subBtn=(active)=>({
    padding:"4px 10px",fontFamily:"var(--mono,monospace)",fontSize:"9.5px",fontWeight:600,
    letterSpacing:".8px",textTransform:"uppercase",
    background:active?"var(--dim-br,rgba(220,50,47,.08))":"transparent",
    color:active?"var(--bronze-l,#cd853f)":"var(--t3,#8c7b72)",
    border:`1px solid ${active?"var(--bd-br,rgba(220,50,47,.2))":"var(--bdm,#2c1f1f)"}`,
    borderRadius:6,cursor:"pointer",transition:"all .15s"
  });

  return(
    <div style={{padding:"0 0 32px"}}>

      {/* INTRO BOX */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>
          💬 Citati — arsenal za esej o Wertheru i prosvjetiteljstvu
        </div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja.{" "}
          <b>18 probranih citata</b>: <em>Patnje mladog Werthera</em> (8 — Goethe), Goethe ostali Faust/Mignon (3), Voltaire (3), Rousseau · Kant · Diderot (4).{" "}
          <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>.{" "}
          <b>10 must-know citata</b> označeno je <em>★ Napamet</em> — počni s njima.
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"18px 0 10px"}}>
        {[
          {key:"all",     label:"Svi (18)",                      spec:false},
          {key:"must",    label:"★ Napamet (10)",                spec:true},
          {key:"werther", label:"💔 Werther (8)",                spec:false},
          {key:"goethe",  label:"📜 Goethe ostali (3)",          spec:false},
          {key:"voltaire",label:"🌅 Voltaire (3)",               spec:false},
          {key:"ostali",  label:"🎓 Rousseau · Kant · Diderot (4)", spec:false},
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
        <button onClick={doRandom} style={{padding:"4px 12px",fontFamily:"var(--mono,monospace)",fontSize:"9.5px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",background:"var(--dim-go,rgba(232,201,122,.1))",color:"var(--gold,#e9b446)",border:"1px solid var(--bd-go,rgba(232,201,122,.3))",borderRadius:6,cursor:"pointer",transition:"all .15s",marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:5}}>
          🎲 Random
        </button>
      </div>

      {/* COUNT */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:11,color:"var(--t3,#8c7b72)",marginBottom:14,letterSpacing:.3,display:"flex",alignItems:"center",gap:10}}>
        <span><b style={{color:"var(--bronze-l,#cd853f)",fontWeight:700}}>{filtered.length}</b> od <span>{CITATI.length}</span> citata prikazano</span>
        {hasActive&&(
          <button onClick={clearAll} style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",background:"transparent",border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:6,padding:"3px 9px",cursor:"pointer",display:"inline-flex"}}>
            Resetiraj filtere
          </button>
        )}
      </div>

      {/* SEARCH */}
      <div style={{margin:"14px 0 16px",display:"flex",gap:8,alignItems:"center"}}>
        <span style={{fontSize:18,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input type="search" value={q} onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži citate (npr. Werther, Goethe, ljubav, samoubojstvo)…"
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
