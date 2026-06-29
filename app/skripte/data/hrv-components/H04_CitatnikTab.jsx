'use client';
import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   CITATNIK H04 — Calderón · Molière · Racine/Corneille · Milton
   v9.1 — identičan HTML implementaciji
   ══════════════════════════════════════════════════════ */

const LS_FAV  = "mt.hrv.h04.cit_favs";
const LS_COPY = "mt.hrv.h04.cit_copy";

/* ══ CATEGORY CONFIG ══ */
const CAT_CFG = {
  "barok-drama": {
    label:"CALDERÓN",
    stripe:"var(--gold,#e9b446)",
    eye:{color:"var(--gold,#e9b446)",background:"var(--dim-go,rgba(232,201,122,.12))",border:"1px solid var(--bd-go,rgba(232,201,122,.3))"}
  },
  "moliere": {
    label:"MOLIÈRE",
    stripe:"var(--red,#e05252)",
    eye:{color:"var(--red-l,#f87171)",background:"var(--dim-r,rgba(224,82,82,.12))",border:"1px solid var(--bd-r,rgba(224,82,82,.25))"}
  },
  "klasika": {
    label:"KLASIKA",
    stripe:"var(--teal,#4ecdc4)",
    eye:{color:"var(--teal,#4ecdc4)",background:"var(--dim-t,rgba(78,205,196,.12))",border:"1px solid var(--bd-t,rgba(78,205,196,.25))"}
  },
  "barok": {
    label:"BAROK",
    stripe:"#c5a1d9",
    eye:{color:"#c5a1d9",background:"rgba(197,161,217,.12)",border:"1px solid rgba(197,161,217,.25)"}
  }
};

/* ══ DATA — 18 citata ══ */
const CITATI = [
  /* ── CALDERÓN — ŽIVOT JE SAN (9) ── */
  {
    id:"h04c01", cat:"barok-drama", diff:"basic", tez:[2], mustKnow:true,
    author:"Život je san",
    work:"II čin — Sigismundov monolog o snu",
    txt:`„O, malen je dar nam dan, jer sav život — to je san, a san su i sami snovi."`,
    use:{
      label:"Kada koristiti",
      bold:"najvažniji citat drame.",
      rest:" Za bilo koju tezu o vanitasu, prolaznosti, snu/javi. Obavezno ga naučiti napamet — na eseju je neizostavan."
    }
  },
  {
    id:"h04c02", cat:"barok-drama", diff:"basic", tez:[1,2], mustKnow:true,
    author:"Život je san",
    work:"II čin — Sigismundov monolog",
    txt:`„Tko je dakle željan vlasti kad zna da će jednom pasti — čim se prene — u snu smrti."`,
    use:{
      label:"Kada koristiti",
      rest:"esej o prolaznosti moći i ambicije. Centralna rečenica za kritiku svjetovnih vrijednosti. Povezivanje baroknog vanitasa s političkom tematikom."
    }
  },
  {
    id:"h04c03", cat:"barok-drama", diff:"basic", tez:[3], mustKnow:true,
    author:"Život je san",
    work:"II čin — Sigismundov zaključak",
    txt:`„U snu valja činiti dobro, jer i u snu zlo nije izgubljeno."`,
    use:{
      label:"Kada koristiti",
      bold:"ključ moralne interpretacije drame.",
      rest:" Za Tezu 1 (vanitas kao moralna agenda), Tezu 4 (epistemološka neizvjesnost). Pokazuje da Calderónova poruka NIJE nihilistička."
    }
  },
  {
    id:"h04c04", cat:"barok-drama", diff:"basic", tez:[2,3], mustKnow:true,
    author:"Život je san",
    work:"III čin — Sigismundov finalni monolog",
    txt:`„Moj učitelj bio je san."`,
    use:{
      label:"Kada koristiti",
      rest:"finale drame. Sumira Sigismundovu transformaciju. ",
      em:"San je pedagog",
      after:". Za Tezu 3 (odgoj formira čovjeka) i Tezu 5 (Calderónov filozofski program)."
    }
  },
  {
    id:"h04c07", cat:"barok-drama", diff:"advanced", tez:[3], mustKnow:true,
    author:"Život je san",
    work:"III čin — Sigismund oprašta Baziliju",
    txt:`„Moja osveta je oprost — jer tko oprosti, pobijedio je."`,
    use:{
      label:"Kada koristiti",
      rest:"centralna scena pobjede slobodne volje nad proročanstvom. Za Tezu 2. ",
      em:"Oprost kao najviši oblik moći",
      after:". Kršćansko-barokni motiv — milost iznad pravde."
    }
  },
  {
    id:"h04c09", cat:"barok-drama", diff:"basic", tez:[3], mustKnow:true,
    author:"Život je san",
    work:"I čin — Bazilije o proročanstvu",
    txt:`„Zvijezde nagovijestiše — ali čovjek odlučuje."`,
    use:{
      label:"Kada koristiti",
      em:"ironija.",
      after:" Bazilije to kaže, ali sam mu ne vjeruje. Drama pokazuje da je imao pravo — slobodna volja pobjeđuje. Za Tezu 2."
    }
  },
  {
    id:"h04c05", cat:"barok-drama", diff:"advanced", tez:[1], mustKnow:false,
    author:"Život je san",
    work:"I čin — Sigismundova prva jadikovka",
    txt:`„Što sam zgriješio protiv vas što me tako kažnjavate?"`,
    use:{
      label:"Kada koristiti",
      rest:"esej o čovjekovoj egzistencijalnoj situaciji. Sigismund se pita o pravednosti zatvora. Prvo filozofsko pitanje drame."
    }
  },
  {
    id:"h04c06", cat:"barok-drama", diff:"advanced", tez:[1,7], mustKnow:false,
    author:"Život je san",
    work:"I čin — Sigismundov monolog o slobodi",
    txt:`„Ptica ima gnijezdo, zvijer brlog, riba more — a ja, čovjek, imam samo lance."`,
    use:{
      label:"Kada koristiti",
      rest:"kontrast prirode i civilizacije. Sigismund zavidi divljim bićima njihovoj slobodi. ",
      em:"Obrnuti pastoralni motiv",
      after:" — priroda je idealna, društvo je tamnica."
    }
  },
  {
    id:"h04c08", cat:"barok-drama", diff:"advanced", tez:[3], mustKnow:false,
    author:"Život je san",
    work:"II čin — Klotaldo Sigismundu",
    txt:`„I u snu treba dostojanstva, jer i san otkriva tko smo."`,
    use:{
      label:"Kada koristiti",
      rest:"Klotaldova mudrost prenosi se Sigismundu. Pedagoška poruka. ",
      em:"Čovjek se ne otkriva u javi, nego u neizvjesnosti",
      after:". Za Tezu 3 i 4."
    }
  },

  /* ── MOLIÈRE (3) ── */
  {
    id:"h04c10", cat:"moliere", diff:"basic", tez:[6], mustKnow:false,
    author:"Molière",
    work:"Škrtac (1668.), IV čin — Harpagonov monolog o krađi",
    txt:`„Lopov! Zloćinac! Moja draga škrinja! Gdje je? Gdje sam ja? Tko sam? Što ću?"`,
    use:{
      label:"Kada koristiti",
      rest:"esej o Molièreu, komediji karaktera. Harpagon gubi orijentaciju kad gubi novac. ",
      em:"Novac postaje supstitucija identiteta",
      after:". Kontrastira Calderónovom vanitasu."
    }
  },
  {
    id:"h04c11", cat:"moliere", diff:"advanced", tez:[5], mustKnow:false,
    author:"Molière",
    work:"Tartuffe (1664.), III čin — Tartuffeov pokušaj zavođenja",
    txt:`„Nebeske stvari moraju se kriti od svijeta koji ih ne razumije."`,
    use:{
      label:"Kada koristiti",
      rest:"kontekst Molièrea. Tartuffe koristi religiozni jezik za svjetovne namjere. Klasicistička satira licemjerja."
    }
  },
  {
    id:"h04c12", cat:"moliere", diff:"advanced", tez:[5], mustKnow:false,
    author:"Molière",
    work:"Mizantrop (1666.), I čin — Alceste",
    txt:`„Prezirem sve što društvo hvaljuje, a volim ono čega se svi klone."`,
    use:{
      label:"Kada koristiti",
      rest:"esej o pojedincu i društvu. Alceste je klasicistički paradoks — iskrenost postaje mizantropija."
    }
  },

  /* ── KLASIKA — Racine · Corneille · Boileau (3) ── */
  {
    id:"h04c15", cat:"klasika", diff:"basic", tez:[4], mustKnow:true,
    author:"Boileau",
    work:"Pjesničko umijeće (1674.)",
    txt:`„Neka na jednom mjestu, jednoga dana, jedna radnja se ispuni — do kraja scene."`,
    use:{
      label:"Kada koristiti",
      bold:"definicija 3 jedinstava.",
      rest:" Nicolas Boileau formalizira klasicistička pravila. Kontekst za razumijevanje francuskog klasicizma. Važno za teoriju književnosti."
    }
  },
  {
    id:"h04c13", cat:"klasika", diff:"basic", tez:[5], mustKnow:false,
    author:"Corneille",
    work:"Cid (1636.) — Rodrigov monolog",
    txt:`„Srce mi se koleba između ljubavi i časti — ali čast mora pobijediti."`,
    use:{
      label:"Kada koristiti",
      rest:"definicija ",
      bold2:"cornellovskog sukoba",
      after:" (dužnost vs ljubav). Klasicistička tragedija — aleksandrinac, 3 jedinstva. Paralela s Rosaurom u Životu je san (čast kao apsolutni koncept)."
    }
  },
  {
    id:"h04c14", cat:"klasika", diff:"advanced", tez:[5], mustKnow:false,
    author:"Racine",
    work:"Fedra (1677.) — Fedrin monolog",
    txt:`„Ljubav i mržnja borile su se u mojoj duši — no ljubav je strast, a strast je smrt."`,
    use:{
      label:"Kada koristiti",
      rest:"psihološka klasicistička tragedija. Fedrina strast prema pastorku Hipolitu. ",
      em:"Strast kao destruktivna sila",
      after:". Racineova psihološka dubina nadilazi Corneilleovu moralnu jasnoću."
    }
  },

  /* ── BAROK — Milton · Góngora · Donne (3) ── */
  {
    id:"h04c16", cat:"barok", diff:"basic", tez:[7], mustKnow:true,
    author:"Milton",
    work:"Izgubljeni raj (1667.), I knjiga — Sotona",
    txt:`„Bolje vladati u paklu nego služiti u nebu."`,
    use:{
      label:"Kada koristiti",
      rest:"najpoznatiji stih engleskog baroka. Sotona kao tragički heroj. Romantičari će ga kasnije interpretirati kao pravog junaka."
    }
  },
  {
    id:"h04c18", cat:"barok", diff:"basic", tez:[7], mustKnow:true,
    author:"John Donne",
    work:"Meditacije (1624.)",
    txt:`„Nijedan čovjek nije otok — sam o sebi; svaki je komadić kopna, dio glavnoga."`,
    use:{
      label:"Kada koristiti",
      rest:"engleska metafizička poezija. Ljudska međusobna povezanost. Barokna poruka o zajednici. Kontrastira Calderónovom fokusu na pojedinca."
    }
  },
  {
    id:"h04c17", cat:"barok", diff:"advanced", tez:[6], mustKnow:false,
    author:"Góngora",
    work:"Soneti — najpoznatiji stih",
    txt:`„Prije nego što, zlatna kosa na suncem, prijeđe u srebro i ti u prah."`,
    use:{
      label:"Kada koristiti",
      em:"culteranismo",
      after:" na djelu. Barokna meditacija o prolaznosti ljepote. Povezati s Calderónovim vanitasom — ista epoha, iste teme, različite forme (lirika vs drama)."
    }
  }
];

/* ── helpers ── */
function normalize(s){
  return (s||"").toLowerCase()
    .replace(/č|ć/g,"c").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/đ/g,"d").replace(/[„""'''""„]/g,"")
    .trim();
}

function UseBlock({u}){
  return(
    <div style={{
      fontFamily:"var(--serif,Georgia)",fontSize:13,color:"var(--t2,#c5b8aa)",
      lineHeight:1.6,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)"
    }}>
      <b style={{
        fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,
        letterSpacing:"1.5px",textTransform:"uppercase",
        color:"var(--bronze-l,#cd853f)",display:"block",marginBottom:5
      }}>{u.label}</b>
      {u.em&&!u.rest&&<><em style={{color:"var(--t1,#f4ede5)",fontStyle:"italic"}}>{u.em}</em>{u.after}</>}
      {u.bold&&<><b style={{color:"var(--t1,#f4ede5)",fontWeight:600,fontFamily:"var(--serif,Georgia)"}}>{u.bold}</b>{u.rest}</>}
      {u.bold2&&<>{u.rest}<b style={{color:"var(--t1,#f4ede5)",fontWeight:600,fontFamily:"var(--serif,Georgia)"}}>{u.bold2}</b>{u.after}</>}
      {u.rest&&!u.bold&&!u.bold2&&(
        u.em
          ? <>{u.rest}<em style={{color:"var(--t1,#f4ede5)",fontStyle:"italic"}}>{u.em}</em>{u.after||""}</>
          : <>{u.rest}{u.after||""}</>
      )}
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
  const cfg = CAT_CFG[c.cat] || CAT_CFG["barok-drama"];
  const isFav = !!favs[c.id];
  const copies = copyCount[c.id] || 0;
  const [hov, setHov] = useState(false);

  function doCopy(){
    const text = c.txt + "  — " + c.author + ", " + c.work;
    if(navigator.clipboard?.writeText){
      navigator.clipboard.writeText(text).then(()=>onCopy(c.id)).catch(()=>onCopy(c.id));
    } else {
      try{
        const ta=document.createElement("textarea");
        ta.value=text; ta.setAttribute("readonly","");
        ta.style.position="absolute"; ta.style.left="-9999px";
        document.body.appendChild(ta); ta.select();
        document.execCommand("copy"); document.body.removeChild(ta);
      }catch(e){}
      onCopy(c.id);
    }
  }

  return(
    <div
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        background:"var(--card,#120808)",
        border:`1px solid ${hov?"var(--bd-br,rgba(220,50,47,.3))":"var(--bdm,#2c1f1f)"}`,
        borderRadius:14,padding:"18px 20px 16px 22px",
        transition:"all .22s cubic-bezier(.4,0,.2,1)",
        position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",
        transform:hov?"translateY(-2px)":"none",
        boxShadow:hov?"0 8px 24px rgba(220,50,47,.08)":"none",
        willChange:"transform"
      }}
    >
      {/* left stripe */}
      <div style={{
        position:"absolute",left:0,top:14,bottom:14,
        width:hov?3:2,background:cfg.stripe,
        opacity:hov?.9:.4,borderRadius:"0 2px 2px 0",
        transition:"opacity .22s,width .22s",pointerEvents:"none"
      }}/>

      {/* action buttons */}
      <div style={{
        position:"absolute",top:14,right:14,display:"flex",gap:3,zIndex:3,
        opacity:hov||isFav?1:0,transition:"opacity .22s"
      }}>
        <button onClick={()=>onFav(c.id)}
          aria-label={isFav?"Ukloni iz favorita":"Dodaj u favorite"}
          title={isFav?"Ukloni iz favorita":"Dodaj u favorite"}
          style={{
            width:26,height:26,borderRadius:"50%",padding:0,
            border:`1px solid ${isFav?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)"}`,
            background:isFav?"var(--dim-go,rgba(232,201,122,.12))":"var(--ele,#1e1010)",
            color:isFav?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",
            cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:11,transition:"all .15s"
          }}>{isFav?"★":"☆"}</button>

        <div style={{position:"relative"}}>
          <button onClick={doCopy} aria-label="Kopiraj citat" title="Kopiraj citat"
            style={{
              width:26,height:26,borderRadius:"50%",padding:0,
              border:"1px solid var(--bdm,#2c1f1f)",
              background:"var(--ele,#1e1010)",
              color:"var(--t3,#8c7b72)",
              cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:11,transition:"all .15s"
            }}>📋</button>
          {copies>0&&(
            <span style={{
              position:"absolute",top:-5,right:-5,
              background:"var(--dim-br,rgba(220,50,47,.08))",
              color:"var(--bronze-l,#cd853f)",
              fontSize:7,fontWeight:700,padding:"1px 4px",borderRadius:7,
              border:"1px solid var(--bd-br,rgba(220,50,47,.2))",
              fontFamily:"var(--mono,monospace)",lineHeight:1,
              minWidth:12,textAlign:"center",letterSpacing:0
            }}>{copies}</span>
          )}
        </div>
      </div>

      {/* meta row */}
      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingRight:68,flexWrap:"wrap"}}>
        <span style={{
          fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",
          textTransform:"uppercase",fontWeight:700,
          padding:"2px 7px",borderRadius:6,...cfg.eye
        }}>{cfg.label}</span>
        {c.mustKnow&&(
          <span style={{
            fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",
            textTransform:"uppercase",fontWeight:700,
            color:"var(--gold,#e9b446)",padding:"2px 7px",
            background:"var(--dim-go,rgba(232,201,122,.12))",
            border:"1px solid var(--bd-go,rgba(232,201,122,.3))",
            borderRadius:6,display:"inline-flex",alignItems:"center",gap:3,
            boxShadow:"0 0 10px rgba(232,201,122,.12)"
          }}>★ Napamet</span>
        )}
        {c.diff==="advanced"&&(
          <span style={{
            fontFamily:"var(--mono,monospace)",fontSize:8,letterSpacing:"1.5px",
            textTransform:"uppercase",fontWeight:700,
            color:"var(--bronze-l,#cd853f)",
            border:"1px solid var(--bd-br,rgba(220,50,47,.2))",
            background:"var(--dim-br,rgba(220,50,47,.08))",
            padding:"2px 7px",borderRadius:6
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
          letterSpacing:.7,color:"var(--t3,#8c7b72)",marginTop:3,
          lineHeight:1.5,textTransform:"uppercase",opacity:.85
        }}>{c.work}</span>
      </div>

      {/* quote */}
      <div style={{
        fontFamily:"'EB Garamond',Georgia,serif",fontSize:16,fontStyle:"italic",fontWeight:400,
        color:hov?"#fef3e2":"var(--t1,#f4ede5)",
        lineHeight:1.55,margin:"12px 0 14px",letterSpacing:.15,
        transition:"color .22s"
      }}>{c.txt}</div>

      {/* tez tags */}
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:12}}>
        {c.tez.map(t=>(
          <button key={t} onClick={()=>onTezClick(t)}
            style={{
              fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,
              letterSpacing:"1px",textTransform:"uppercase",
              color:"var(--teal,#4ecdc4)",background:"var(--dim-t,rgba(78,205,196,.12))",
              border:"1px solid var(--bd-t,rgba(78,205,196,.25))",
              borderRadius:6,padding:"2px 8px",cursor:"pointer",transition:"all .15s"
            }}>T{t}</button>
        ))}
      </div>

      {/* use */}
      <UseBlock u={c.use}/>
    </div>
  );
}

/* ══ MAIN ══ */
export default function CitatnikH04({onBack, onNext}){
  const [catFilter, setCatFilter] = useState("all");
  const [tezFilter, setTezFilter] = useState("all");
  const [diffFilter, setDiffFilter] = useState("all");
  const [favOnly, setFavOnly]       = useState(false);
  const [q, setQ]                   = useState("");
  const [favs, setFavs]             = useState({});
  const [copyCount, setCopyCount]   = useState({});
  const [toast, setToast]           = useState({on:false,msg:""});
  const toastTimer = useRef(null);

  useEffect(()=>{
    try{ const r=localStorage.getItem(LS_FAV);  if(r) setFavs(JSON.parse(r));      }catch(e){}
    try{ const r=localStorage.getItem(LS_COPY); if(r) setCopyCount(JSON.parse(r)); }catch(e){}
  },[]);

  function showToast(msg){
    clearTimeout(toastTimer.current);
    setToast({on:true,msg});
    toastTimer.current=setTimeout(()=>setToast(p=>({...p,on:false})),1800);
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
    setTezFilter(prev=>String(prev)===String(t)?"all":String(t));
  }

  /* filter */
  const filtered = CITATI.filter(c=>{
    const matchCat  = catFilter==="all"||(catFilter==="must"?c.mustKnow:c.cat===catFilter);
    const matchTez  = tezFilter==="all"||c.tez.includes(Number(tezFilter));
    const matchDiff = diffFilter==="all"||c.diff===diffFilter;
    const matchFav  = !favOnly||!!favs[c.id];
    const hay       = normalize([c.author,c.work,c.txt,
      c.use.rest||"",c.use.bold||"",c.use.bold2||"",c.use.em||"",c.use.after||""
    ].join(" "));
    const matchQ    = !q||hay.includes(normalize(q));
    return matchCat&&matchTez&&matchDiff&&matchFav&&matchQ;
  });

  const hasActive = catFilter!=="all"||tezFilter!=="all"||diffFilter!=="all"||favOnly||!!q;
  const favCount  = Object.keys(favs).length;

  function clearAll(){
    setCatFilter("all"); setTezFilter("all");
    setDiffFilter("all"); setFavOnly(false); setQ("");
  }

  /* random */
  function doRandom(){
    if(!filtered.length) return;
    const pick = filtered[Math.floor(Math.random()*filtered.length)];
    const el   = document.getElementById("cc-"+pick.id);
    if(el) el.scrollIntoView({behavior:"smooth",block:"center"});
    showToast("🎲 Slučajan citat");
  }

  /* shared button styles */
  const fbtn = (active, isSpec=false) => ({
    padding:"6px 14px",
    fontFamily:"var(--mono,monospace)",fontSize:10,fontWeight:700,
    letterSpacing:"1px",textTransform:"uppercase",
    background: active
      ? (isSpec ? "linear-gradient(135deg,var(--gold,#e9b446),#d4b980)" : "linear-gradient(135deg,#8b2500,#cd3a1f)")
      : (isSpec ? "var(--dim-go,rgba(232,201,122,.1))" : "var(--card,#120808)"),
    color: active
      ? (isSpec ? "#0F0605" : "#F5E6D3")
      : (isSpec ? "var(--gold,#e9b446)" : "var(--t2,#c5b8aa)"),
    border:`1px solid ${active
      ? (isSpec ? "var(--gold,#e9b446)" : "var(--bronze,#8b4513)")
      : (isSpec ? "var(--bd-go,rgba(232,201,122,.3))" : "var(--bdm,#2c1f1f)")}`,
    borderRadius:8,cursor:"pointer",transition:"all .18s",
    display:"inline-flex",alignItems:"center",gap:5,lineHeight:1.4,
    boxShadow:active&&!isSpec?"0 2px 10px rgba(220,50,47,.15)":"none"
  });

  const subBtn = (active) => ({
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
          💬 Citati — arsenal za esej o Calderónu i klasicizmu
        </div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja.{" "}
          <b>18 probranih citata</b>: <em>Život je san</em> (9 — Calderón, obvezatno 2026), Molière (3), Racine · Corneille · Boileau (3), Milton · Góngora · Donne (3).{" "}
          <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>.{" "}
          <b>9 must-know citata</b> označeno je <em>★ Napamet</em> — počni s njima.
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"18px 0 10px"}}>
        {[
          {key:"all",    label:"Svi (18)",                     spec:false},
          {key:"must",   label:"★ Napamet (9)",                spec:true},
          {key:"barok-drama", label:"🌙 Život je san (9)",     spec:false},
          {key:"moliere",label:"💰 Molière (3)",               spec:false},
          {key:"klasika",label:"🎭 Racine · Corneille (3)",    spec:false},
          {key:"barok",  label:"📜 Milton · Góngora · Donne (3)", spec:false}
        ].map(f=>(
          <button key={f.key} onClick={()=>setCatFilter(f.key)}
            style={fbtn(catFilter===f.key, f.spec)}>{f.label}</button>
        ))}
      </div>

      {/* SUB-FILTERS */}
      <div style={{
        display:"flex",gap:8,flexWrap:"wrap",margin:"0 0 14px",
        padding:"10px 14px",
        background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",
        borderRadius:10,alignItems:"center"
      }}>
        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginRight:4}}>Tez:</span>
        {["all",1,2,3,4,5,6,7].map(t=>{
          const active = String(tezFilter)===String(t);
          return(
            <button key={t} onClick={()=>setTezFilter(active?"all":String(t))}
              style={subBtn(active)}>{t==="all"?"Sve":`T${t}`}</button>
          );
        })}

        <span style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",fontWeight:700,marginLeft:12,marginRight:4}}>Razina:</span>
        {[["all","Sve"],["basic","Osnovno"],["advanced","Napredno"]].map(([k,l])=>(
          <button key={k} onClick={()=>setDiffFilter(diffFilter===k&&k!=="all"?"all":k)}
            style={subBtn(diffFilter===k)}>{l}</button>
        ))}

        <button onClick={()=>setFavOnly(p=>!p)}
          style={{
            ...subBtn(favOnly),
            color:favOnly?"var(--gold,#e9b446)":"var(--t3,#8c7b72)",
            border:`1px solid ${favOnly?"var(--bd-go,rgba(232,201,122,.3))":"var(--bdm,#2c1f1f)"}`,
            background:favOnly?"var(--dim-go,rgba(232,201,122,.1))":"transparent"
          }}>
          {favOnly?"★":"☆"} Favoriti ({favCount})
        </button>

        <button onClick={doRandom}
          style={{
            padding:"4px 12px",fontFamily:"var(--mono,monospace)",fontSize:"9.5px",fontWeight:700,
            letterSpacing:"1px",textTransform:"uppercase",
            background:"var(--dim-go,rgba(232,201,122,.1))",color:"var(--gold,#e9b446)",
            border:"1px solid var(--bd-go,rgba(232,201,122,.3))",
            borderRadius:6,cursor:"pointer",transition:"all .15s",
            marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:5
          }}>🎲 Random</button>
      </div>

      {/* COUNT ROW */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:11,color:"var(--t3,#8c7b72)",marginBottom:14,letterSpacing:.3,display:"flex",alignItems:"center",gap:10}}>
        <span>
          <b style={{color:"var(--bronze-l,#cd853f)",fontWeight:700}}>{filtered.length}</b>
          {" "}od <span>{CITATI.length}</span> citata prikazano
        </span>
        {hasActive&&(
          <button onClick={clearAll}
            style={{
              fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",
              color:"var(--t3,#8c7b72)",background:"transparent",
              border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:6,
              padding:"3px 9px",cursor:"pointer",transition:"all .15s",display:"inline-flex"
            }}>Resetiraj filtere</button>
        )}
      </div>

      {/* SEARCH */}
      <div style={{margin:"14px 0 16px",display:"flex",gap:8,alignItems:"center"}}>
        <span style={{fontSize:18,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input
          type="search" value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži citate (npr. Calderón, san, život, dvori)…"
          aria-label="Pretraži citate" autoComplete="off"
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
            style={{padding:"8px 12px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:8,color:"var(--t2,#c5b8aa)",cursor:"pointer",fontSize:14}}>✕</button>
        )}
      </div>

      {/* EMPTY */}
      {filtered.length===0&&(
        <div style={{
          background:"var(--card,#120808)",border:"1px solid var(--bdm,#2c1f1f)",
          borderRadius:14,padding:"32px 20px",textAlign:"center",
          fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t3,#8c7b72)",fontStyle:"italic",margin:"16px 0"
        }}>
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
