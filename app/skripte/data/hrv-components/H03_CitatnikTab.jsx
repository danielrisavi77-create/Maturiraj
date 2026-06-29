'use client';
import { useState, useEffect } from "react";

/* ══ DATA — 18 citata ══ */
const CITATI = [
  /* HAMLET — 9 */
  {
    id:"h03c01", cat:"hamlet",
    src:"🧠 Hamlet, III čin, 1. prizor — Hamletov monolog",
    txt:`„Biti ili ne biti — to je pitanje."`,
    use:[
      {bold:true, text:"najpoznatiji stih svjetske književnosti."},{type:"text",text:" Za bilo koju tezu o egzistencijalnoj dilemi, oklijevanju, smrti, razumu vs djelovanju. Apsolutno neizostavan — naučiti napamet i engleski original ("},
      {type:"em", text:"To be, or not to be — that is the question"},{type:"text",text:")."}
    ]
  },
  {
    id:"h03c02", cat:"hamlet",
    src:"🧠 Hamlet, I čin, 4. prizor — Marcello",
    txt:`„Nešto je trulo u državi Danskoj."`,
    use:[
      {type:"text",text:"esej o korumpiranom svijetu, Elsinoru kao metafori (Teza 4). "},
      {type:"em",text:"Elsinor kao slika cijelog društva u raspadu."},{type:"text",text:" Citat je ušao u kulturu kao formula za sustavnu korupciju."}
    ]
  },
  {
    id:"h03c03", cat:"hamlet",
    src:"🧠 Hamlet, V čin, 1. prizor — groblje, Hamlet Horaciju",
    txt:`„Jao, jadni Yorick! Poznavao sam ga, Horacije."`,
    use:[
      {type:"text",text:"esej o smrti, prolaznosti, memento mori (Teza 3). "},
      {type:"em",text:"Scena s lubanjom"},{type:"text",text:` je vizualna ikona drame. Idealno za argumentaciju o demokratizaciji smrti. Original: „`},
      {type:"em",text:"Alas, poor Yorick! I knew him, Horatio"},{type:"text",text:'".'}
    ]
  },
  {
    id:"h03c04", cat:"hamlet",
    src:"🧠 Hamlet, V čin, 2. prizor — Hamletove posljednje riječi",
    txt:`„Ostalo je tišina."`,
    use:[
      {type:"text",text:"finale drame. Za esej o smrti, tragici konačnosti. "},
      {type:"em",text:"Hamlet umire na Horacijevim rukama."},{type:"text",text:` Original: „`},
      {type:"em",text:"The rest is silence"},{type:"text",text:'". Kratko, zvučno, savršeno za zaključak eseja.'}
    ]
  },
  {
    id:"h03c05", cat:"hamlet",
    src:`🧠 Hamlet, III čin, 1. prizor — završetak monologa „Biti ili ne biti"`,
    txt:`„Tako savjest čini kukavice od svih nas."`,
    use:[
      {bold:true,text:"ključ za Tezu 2"},{type:"text",text:" (Hamletova dilema). Hamlet sam objašnjava svoje oklijevanje — "},
      {type:"em",text:"ne kukavičluk, nego moralna savjest"},{type:"text",text:`. Original: „`},
      {type:"em",text:"Thus conscience does make cowards of us all"},{type:"text",text:'".'}
    ]
  },
  {
    id:"h03c06", cat:"hamlet",
    src:"🧠 Hamlet, II čin, 2. prizor — Hamlet o Mišolovci",
    txt:`„Predstava je ono čime ću uhvatiti savjest kralja."`,
    use:[
      {type:"text",text:"esej o kazalištu u kazalištu, metateatru, istini koja izlazi kroz umjetnost. "},
      {type:"em",text:"Mišolovka kao dokaz Klaudijeve krivnje."},{type:"text",text:` Original: „`},
      {type:"em",text:"The play's the thing wherein I'll catch the conscience of the king"},{type:"text",text:'".'}
    ]
  },
  {
    id:"h03c07", cat:"hamlet",
    src:"🧠 Hamlet, V čin, 2. prizor — Horacijeve riječi nad mrtvim Hamletom",
    txt:`„Laku noć, slatki prinče."`,
    use:[
      {type:"text",text:"elegijski završetak, moment katarze. "},
      {type:"em",text:"Horacijeva odanost"},{type:"text",text:` — jedini nekompromitirani lik. Original: „`},
      {type:"em",text:"Goodnight, sweet prince; and flights of angels sing thee to thy rest"},{type:"text",text:'".'}
    ]
  },
  {
    id:"h03c08", cat:"hamlet",
    src:"🧠 Hamlet, I čin, 3. prizor — Polonije Laertu",
    txt:`„Iznad svega — budi vjeran sebi."`,
    use:[
      {type:"text",text:"ironija drame — "},
      {type:"em",text:"Polonije daje moralni savjet sinu, a sam je špijun i manipulator."},{type:"text",text:` Shakespeare pokazuje koliko dvorske riječi mogu biti isprazne. Original: „`},
      {type:"em",text:"This above all: to thine own self be true"},{type:"text",text:'".'}
    ]
  },
  {
    id:"h03c09", cat:"hamlet",
    src:"🧠 Hamlet, II čin, 2. prizor — Hamletova apologija čovjeka",
    txt:`„Kakvo je čudo čovjek! Razumom sličan anđelu, sposobnostima bogu."`,
    use:[
      {type:"text",text:"za Tezu 5 (renesansni humanizam). "},
      {type:"em",text:"Vrhunac renesansne slave čovjeka."},{type:"text",text:` Hamlet završava: „a ipak mi prah ne znači ništa". `},
      {bold:true,text:"Humanizam i njegova sumnja"},{type:"text",text:` u jednoj misli. Original: „`},
      {type:"em",text:"What a piece of work is a man"},{type:"text",text:'".'}
    ]
  },

  /* ROMEO I JULIJA — 3 */
  {
    id:"h03c10", cat:"rj",
    src:"💔 Romeo i Julija, II čin, 2. prizor — Julija na balkonu",
    txt:`„O Romeo, Romeo! Zašto si ti Romeo?"`,
    use:[
      {type:"text",text:"esej o ljubavi koja ne priznaje obiteljsku pripadnost. "},
      {type:"em",text:"Ime kao barijera."},{type:"text",text:" Ranija Shakespeareova tragedija (~1595.) — ljubavna, ne egzistencijalna. Dobar kontrapunkt Hamletu."}
    ]
  },
  {
    id:"h03c11", cat:"rj",
    src:"💔 Romeo i Julija, II čin, 2. prizor — Julija o imenu",
    txt:`„Što znači ime? Ono što zovemo ružom, pod bilo kojim drugim imenom mirisalo bi jednako slatko."`,
    use:[
      {type:"text",text:"renesansni humanizam — "},
      {type:"em",text:"bit čovjeka iznad konvencije."},{type:"text",text:" Za esej o individualizmu vs društvenim normama."}
    ]
  },
  {
    id:"h03c12", cat:"rj",
    src:"💔 Romeo i Julija, V čin, 3. prizor — finale",
    txt:`„Nikad nije postojala priča veće boli nego ova o Juliji i njenu Romeu."`,
    use:[
      {type:"text",text:"esej o tragičnoj ljubavi kao književnom motivu. "},
      {type:"em",text:"Shakespeare stvara arhetip"},{type:"text",text:` — „Romeo i Julija" postaje sinonim za zabranjenu ljubav.`}
    ]
  },

  /* CERVANTES — 3 */
  {
    id:"h03c13", cat:"cervantes",
    src:"📖 Cervantes · Don Quijote (1605./1615.), I dio — poznata scena s vjetrenjačama",
    txt:`„To su divovi — i ne boj se, iako bi se moglo zaklinjati u njih da su vjetrenjače."`,
    use:[
      {type:"em",text:'„boriti se s vjetrenjačama"'},{type:"text",text:" = univerzalna fraza za borbu protiv iluzornih neprijatelja. Metafora zabluda, idealizma, pogrešne percepcije. Scena je ušla u kulturu više nego sam lik."}
    ]
  },
  {
    id:"h03c14", cat:"cervantes",
    src:"📖 Cervantes · Don Quijote, I dio — Don Quijote",
    txt:`„Ne znam što govoriš — ali čujem zvuk časti."`,
    use:[
      {type:"text",text:"Don Quijote kao "},
      {bold:true,text:"prvi moderni roman"},{type:"text",text:". "},
      {type:"em",text:"Komični vitez kojega Cervantes istovremeno ismijava i veliča."},{type:"text",text:" Za esej o renesansnom pojedincu koji se bori protiv stvarnosti. Utjecaj: Flaubert, Dostojevski, Kafka."}
    ]
  },
  {
    id:"h03c15", cat:"cervantes",
    src:"📖 Cervantes · Don Quijote, II dio — Sancho Panza",
    txt:`„Gospodaru, nema zdravijega lijeka nego smijeh — ni bolje hrane od sna."`,
    use:[
      {type:"em",text:"Sanchova zemaljska mudrost"},{type:"text",text:" kao kontrapunkt Quijoteovu idealizmu. Dvojni protagonisti — ideal vs stvarnost, gospodar vs sluga."}
    ]
  },

  /* PETRARCA · BOCCACCIO — 3 */
  {
    id:"h03c16", cat:"lirika",
    src:"📜 Petrarca · Kanconijer, Sonet 132",
    txt:`„Ako nije ljubav, što je onda to što osjećam? Ako jest — Bože, kakva je ona?"`,
    use:[
      {bold:true,text:"Petrarkistička ljubavna lirika"},{type:"text",text:" — paradoksi, oksimoroni. Ljubav kao patnja i radost istovremeno. Za esej o renesansnoj lirici i formi soneta. Laura kao muza svjetske poezije."}
    ]
  },
  {
    id:"h03c17", cat:"lirika",
    src:"📜 Petrarca · Kanconijer — Sonet 61",
    txt:`„Blažen dan, mjesec, godina — i trenutak kad se oči njene u moje sukobiše."`,
    use:[
      {type:"text",text:"esej o ljubavnoj lirici, posvećivanju trenutka. "},
      {type:"em",text:"Laura kao vječna muza"},{type:"text",text:". Petrarkistički model dominira europskom lirikom 300 godina."}
    ]
  },
  {
    id:"h03c18", cat:"lirika",
    src:"📜 Boccaccio · Decameron (1353.), uvod u Prvi dan",
    txt:`„Ljudska je narav da ne poznaje mjeru — niti u radosti, niti u boli."`,
    use:[
      {type:"em",text:"Decameron"},{type:"text",text:" kao prvi veliki zbornik novela. 10 mladih ljudi bježi od kuge, pričaju 100 priča u 10 dana. "},
      {bold:true,text:"Humanizam nagnut na zemaljsko"},{type:"text",text:" — kontrastira srednjovjekovnoj askezi."}
    ]
  }
];

const FILTERS = [
  {key:"all",      label:"Svi (18)"},
  {key:"hamlet",   label:"🧠 Hamlet (9)"},
  {key:"rj",       label:"💔 Romeo i Julija (3)"},
  {key:"cervantes",label:"📖 Cervantes (3)"},
  {key:"lirika",   label:"📜 Petrarca · Boccaccio (3)"}
];

function normalize(s){
  return (s||"").toLowerCase()
    .replace(/č|ć/g,"c").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/đ/g,"d").replace(/[„"\"''""]/g,"")
    .trim();
}

/* Render use-field tokens as JSX (bold / em / text) */
function UseText({tokens}){
  return(
    <>
      <b style={{fontFamily:"var(--mono,monospace)",fontSize:"8.5px",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",display:"block",marginBottom:5}}>Kada koristiti:</b>
      {tokens.map((t,i)=>{
        if(t.bold) return <b key={i} style={{color:"var(--t1,#f4ede5)",fontWeight:600,fontFamily:"var(--serif,Georgia)"}}>{t.text}</b>;
        if(t.type==="em") return <em key={i} style={{color:"var(--t1,#f4ede5)",fontStyle:"italic"}}>{t.text}</em>;
        return <span key={i}>{t.text}</span>;
      })}
    </>
  );
}

/* ══ CARD ══ */
function CitCard({c}){
  const [hovered,setHovered]=useState(false);
  return(
    <div
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      style={{
        background:"var(--card,#120808)",
        border:"1px solid var(--bdm,#2c1f1f)",
        borderRadius:14,
        padding:"15px 16px",
        transition:"all .22s cubic-bezier(.4,0,.2,1)",
        position:"relative",
        overflow:"hidden",
        transform:hovered?"translateY(-2px)":"none",
        boxShadow:hovered?"0 10px 28px rgba(232,201,122,.08)":"none"
      }}
    >
      {/* gold shimmer line — top, scrolls across on hover */}
      <div style={{
        position:"absolute",top:0,left:hovered?"100%":"-100%",width:"100%",height:2,
        background:"linear-gradient(90deg,transparent,var(--gold,#e9b446),transparent)",
        transition:"left .6s ease",pointerEvents:"none"
      }}/>

      {/* source */}
      <div style={{
        fontFamily:"var(--mono,monospace)",fontSize:"10.5px",fontWeight:600,
        color:"var(--t3,#8c7b72)",letterSpacing:".3px",marginBottom:8,lineHeight:1.4
      }}>{c.src}</div>

      {/* quote */}
      <div style={{
        fontFamily:"'EB Garamond',Georgia,serif",fontSize:16,fontWeight:400,fontStyle:"italic",
        color:hovered?"#fef3e2":"var(--t1,#f4ede5)",
        lineHeight:1.55,margin:"12px 0 14px",letterSpacing:".15px",
        transition:"color .22s"
      }}>{c.txt}</div>

      {/* use */}
      <div style={{
        fontFamily:"var(--serif,Georgia)",fontSize:13,color:"var(--t2,#c5b8aa)",
        lineHeight:1.6,paddingTop:10,borderTop:"1px solid var(--bdm,#2c1f1f)"
      }}>
        <UseText tokens={c.use}/>
      </div>
    </div>
  );
}

/* ══ MAIN ══ */
export default function CitatnikH03({onBack, onNext}){
  const [cat,setCat]=useState("all");
  const [q,setQ]=useState("");

  const filtered=CITATI.filter(c=>{
    const matchCat=cat==="all"||c.cat===cat;
    const matchQ=!q||normalize(c.src+" "+c.txt+" "+c.use.map(t=>t.text||"").join(" ")).includes(normalize(q));
    return matchCat&&matchQ;
  });

  const hasFilters=cat!=="all"||!!q;
  const count=filtered.length;

  /* filter button style */
  function fbtn(active){
    return{
      padding:"6px 12px",
      background:active?"var(--dim-br,rgba(220,50,47,.08))":"transparent",
      border:`1px solid ${active?"var(--bd-br,rgba(220,50,47,.2))":"var(--bdm,#2c1f1f)"}`,
      color:active?"var(--bronze-l,#cd853f)":"var(--t2,#c5b8aa)",
      borderRadius:8,fontFamily:"var(--mono,monospace)",fontSize:"10.5px",fontWeight:600,
      cursor:"pointer",transition:"all .15s",letterSpacing:".3px"
    };
  }

  return(
    <div style={{padding:"0 0 32px"}}>

      {/* INTRO BOX */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>💬 Citati koje morate imati u glavi</div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          Ocjenjivači eseja <strong>vole citate</strong>. Točan citat u eseju = <em>+1–2 boda u argumentaciji</em>. Ovdje imaš <b>18 citata</b> organiziranih po filterima: Hamlet (9), Romeo i Julija (3), Cervantes (3), Petrarca i Boccaccio (3). <strong>Nauči 3–5 Hamletovih citata napamet</strong> — Hamlet je obvezatno čitanje 2026.
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
        {FILTERS.map(f=>(
          <button key={f.key} onClick={()=>setCat(f.key)} style={fbtn(cat===f.key)}>{f.label}</button>
        ))}
      </div>

      {/* SEARCH ROW */}
      <div style={{margin:"14px 0 16px",display:"flex",gap:8,alignItems:"center"}}>
        <span style={{fontSize:18,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input
          type="search"
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži citate (npr. Petrarca, sonet, kanconijer, ljubav)…"
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
            style={{padding:"8px 12px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:8,color:"var(--t2,#c5b8aa)",cursor:"pointer",fontSize:14}}>✕</button>
        )}
      </div>

      {/* STATS */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:10,color:"var(--t3,#8c7b72)",letterSpacing:".5px",marginBottom:14}}>
        {hasFilters ? `${count} ${count===1?"citat":count<5?"citata":"citata"} pronađeno` : `${CITATI.length} citata ukupno`}
      </div>

      {/* NO RESULTS */}
      {filtered.length===0&&(
        <div style={{
          padding:"40px 20px",textAlign:"center",
          fontFamily:"var(--serif,Georgia)",fontSize:15,color:"var(--t3,#8c7b72)",fontStyle:"italic",
          border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:14,margin:"16px 0"
        }}>
          <b style={{color:"var(--bronze-l,#cd853f)",fontStyle:"normal",display:"block",marginBottom:6}}>Nema rezultata</b>
          Probaj drugi pojam ili resetiraj filtere.
        </div>
      )}

      {/* GRID */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",
        gap:14,marginTop:4
      }}>
        {filtered.map(c=><CitCard key={c.id} c={c}/>)}
      </div>

      {/* NAV ROW */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:32}}>
        {onBack&&<button onClick={onBack} style={{background:"none",border:"none",color:"var(--t2,#c5b8aa)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer"}}>← ✍ Esej alat</button>}
        {onNext&&<button onClick={onNext} style={{background:"none",border:"none",color:"var(--bronze-l,#cd853f)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer",fontWeight:600}}>📚 Pojmovnik →</button>}
      </div>
    </div>
  );
}
