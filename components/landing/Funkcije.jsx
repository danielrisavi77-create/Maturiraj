"use client";
import AIBentoChat from "@/components/widgets/AIBentoChat";

export default function Funkcije() {
  return (
    <section id="funkcije" className="sec" style={{background:"var(--s1)",borderTop:"1px solid var(--bdr)",borderBottom:"1px solid var(--bdr)",overflow:"hidden"}}>
      <div className="wrap">

        <div style={{textAlign:"center",marginBottom:56}} className="reveal reveal-up">
          <div className="eye" style={{marginBottom:11}}>Funkcije</div>
          <h2 className="d2">Pet alata. Jedna pretplata.</h2>
          <p style={{color:"var(--muted)",fontSize:15,marginTop:14,maxWidth:480,margin:"14px auto 0",lineHeight:1.75}}>
            Skripte i Discere ispiti s timerom besplatni za sve prijavljene. Razrada rezultata, AI profesor i prijemni uz pretplatu — od <strong style={{color:"var(--text)"}}>9,99 €/mj</strong>.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="bento-grid" style={{display:"grid",gridTemplateColumns:"repeat(12,1fr)",gridTemplateRows:"auto",gap:12}}>

          {/* 1 — Skripte */}
          <div className="reveal reveal-up"
            style={{gridColumn:"span 5",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:20,padding:"28px 28px 0",overflow:"hidden",position:"relative",transition:"border-color .2s",cursor:"default"}}
            onMouseEnter={e => e.currentTarget.style.borderColor="rgba(62,207,110,.35)"}
            onMouseLeave={e => e.currentTarget.style.borderColor="var(--bdr)"}>
            <div style={{position:"absolute",top:0,right:0,width:180,height:180,background:"radial-gradient(circle,rgba(62,207,110,.1),transparent 70%)",pointerEvents:"none"}}/>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
              <div style={{width:40,height:40,borderRadius:11,background:"rgba(62,207,110,.12)",border:"1px solid rgba(62,207,110,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>📖</div>
              <span className="badge b-green" style={{fontSize:10}}>Besplatno</span>
            </div>
            <div style={{fontWeight:700,fontSize:17,marginBottom:8}}>Skripte za sve predmete</div>
            <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.75,marginBottom:22}}>
              24 predmeta, po razinama. Matematika A/B, Hrvatski, Engleski, Fizika, Kemija, Biologija... Bez registracije, odmah.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:5,paddingBottom:24}}>
              {["📐 Mat A","📐 Mat B","📝 Hrvatski","🌍 Engleski","⚗️ Kemija","🔬 Biologija","🌏 Geografija","📜 Povijest"].map(s => (
                <div key={s} style={{padding:"4px 10px",borderRadius:99,background:"rgba(62,207,110,.07)",border:"1px solid rgba(62,207,110,.15)",fontSize:11,color:"var(--green)",fontWeight:600}}>{s}</div>
              ))}
              <div style={{padding:"4px 10px",borderRadius:99,background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",fontSize:11,color:"var(--muted)"}}>+16 više →</div>
            </div>
          </div>

          {/* 2 — Discere */}
          <div className="reveal reveal-up"
            style={{gridColumn:"span 4",background:"linear-gradient(160deg,#1a0d04,#1c1208)",border:"1px solid rgba(255,107,43,.18)",borderRadius:20,padding:28,position:"relative",overflow:"hidden",transition:"border-color .2s",cursor:"default"}}
            onMouseEnter={e => e.currentTarget.style.borderColor="rgba(255,107,43,.4)"}
            onMouseLeave={e => e.currentTarget.style.borderColor="rgba(255,107,43,.18)"}>
            <div style={{position:"absolute",top:-40,right:-40,width:200,height:200,background:"radial-gradient(circle,rgba(255,107,43,.12),transparent 65%)",pointerEvents:"none"}}/>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
              <div style={{width:40,height:40,borderRadius:11,background:"rgba(255,107,43,.12)",border:"1px solid rgba(255,107,43,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>⭐</div>
              <span className="badge b-gold" style={{fontSize:10}}>Ispiti besplatni · razrada uz Standard</span>
            </div>
            <div style={{fontWeight:700,fontSize:17,marginBottom:8}}>Discere — arhiva matura</div>
            <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.75,marginBottom:20}}>
              Svi zadaci s državnih matura od 2010. do danas. Ispiti s timerom besplatni su za prijavljene, a riješeni odgovori i filtri dolaze uz Standard.
            </p>
            <div style={{display:"flex",gap:16}}>
              {[["24","predmeta"],["2010","–2026"],["100%","odgovora"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{fontFamily:"var(--fh)",fontSize:20,fontWeight:900,color:"var(--orange)",lineHeight:1}}>{n}</div>
                  <div style={{fontSize:10,color:"var(--muted)",marginTop:3}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 — Kalkulator */}
          <div className="reveal reveal-up"
            style={{gridColumn:"span 3",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:20,padding:28,position:"relative",overflow:"hidden",transition:"border-color .2s",cursor:"default"}}
            onMouseEnter={e => e.currentTarget.style.borderColor="rgba(75,123,255,.35)"}
            onMouseLeave={e => e.currentTarget.style.borderColor="var(--bdr)"}>
            <div style={{position:"absolute",bottom:-30,right:-30,width:160,height:160,background:"radial-gradient(circle,rgba(75,123,255,.1),transparent 65%)",pointerEvents:"none"}}/>
            <div style={{width:40,height:40,borderRadius:11,background:"rgba(75,123,255,.12)",border:"1px solid rgba(75,123,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,marginBottom:14}}>🎯</div>
            <div style={{fontWeight:700,fontSize:16,marginBottom:8}}>Kalkulator bodova</div>
            <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.75,marginBottom:20}}>
              Unesi rezultate mature i vidi šanse za sva hrvatska sveučilišta.
            </p>
            <div style={{background:"var(--bg)",borderRadius:12,padding:"12px 14px",border:"1px solid var(--bdr)"}}>
              <div style={{fontSize:10,color:"var(--muted)",marginBottom:8,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em"}}>Tvoji bodovi</div>
              {[["Mat A",72,"#818cf8"],["Hrvatski",85,"var(--green)"],["Engleski",91,"var(--teal)"]].map(([l,v,c]) => (
                <div key={l} style={{display:"flex",alignItems:"center",gap:6,marginBottom:5}}>
                  <span style={{fontSize:10,color:"var(--muted)",width:54,flexShrink:0}}>{l}</span>
                  <div style={{flex:1,height:3,borderRadius:99,background:"rgba(255,255,255,.06)"}}>
                    <div style={{width:`${v}%`,height:"100%",borderRadius:99,background:c}}/>
                  </div>
                  <span style={{fontSize:10,fontWeight:700,color:"var(--text)",minWidth:24,textAlign:"right"}}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 — AI Profesor */}
          <div className="reveal reveal-up"
            style={{gridColumn:"span 7",background:"linear-gradient(160deg,#080d1f,#0a0e1c)",border:"1px solid rgba(75,123,255,.18)",borderRadius:20,padding:"28px 28px 0",overflow:"hidden",position:"relative",transition:"border-color .2s",cursor:"default"}}
            onMouseEnter={e => e.currentTarget.style.borderColor="rgba(75,123,255,.4)"}
            onMouseLeave={e => e.currentTarget.style.borderColor="rgba(75,123,255,.18)"}>
            <div style={{position:"absolute",top:-60,right:-20,width:300,height:300,background:"radial-gradient(circle,rgba(124,92,252,.1),transparent 65%)",pointerEvents:"none"}}/>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
              <div style={{width:40,height:40,borderRadius:11,background:"rgba(75,123,255,.12)",border:"1px solid rgba(75,123,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>🤖</div>
              <span className="badge b-blue" style={{fontSize:10}}>Pro plan</span>
            </div>
            <div style={{fontWeight:700,fontSize:17,marginBottom:8}}>AI Profesor 24/7</div>
            <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.75,marginBottom:22,maxWidth:360}}>
              Objašnjava gradivo na hrvatskom, odmah. Bez čekanja, bez rasporeda — u 23:00 pred ispit ili ujutro na kavi.
            </p>
            <div style={{height:220,overflow:"hidden",position:"relative"}}>
              <AIBentoChat/>
            </div>
          </div>

          {/* 5 — Prijemni ispiti */}
          <div className="reveal reveal-up"
            style={{gridColumn:"span 5",background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:20,padding:28,position:"relative",overflow:"hidden",transition:"border-color .2s",cursor:"default"}}
            onMouseEnter={e => e.currentTarget.style.borderColor="rgba(251,146,60,.35)"}
            onMouseLeave={e => e.currentTarget.style.borderColor="var(--bdr)"}>
            <div style={{position:"absolute",top:-30,right:-30,width:180,height:180,background:"radial-gradient(circle,rgba(251,146,60,.09),transparent 65%)",pointerEvents:"none"}}/>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
              <div style={{width:40,height:40,borderRadius:11,background:"rgba(251,146,60,.1)",border:"1px solid rgba(251,146,60,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>🏛</div>
              <span className="badge b-gold" style={{fontSize:10}}>Uz pretplatu</span>
            </div>
            <div style={{fontWeight:700,fontSize:17,marginBottom:8}}>Prijemni ispiti</div>
            <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.75,marginBottom:20}}>
              Posebne stranice za svaki prijemni — gradivo, format, bodovanje, Discere arhiva zadataka.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {[["🏥","MEF"],["⚡","FER"],["⚖️","Pravni"],["🏗","AFZ"],["📈","EFZG"],["🦷","SFZG"]].map(([ic,n]) => (
                <div key={n} style={{display:"flex",alignItems:"center",gap:5,padding:"5px 10px",borderRadius:99,background:"rgba(251,146,60,.06)",border:"1px solid rgba(251,146,60,.15)",fontSize:11,fontWeight:600,color:"#fb923c"}}>
                  {ic} {n}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}