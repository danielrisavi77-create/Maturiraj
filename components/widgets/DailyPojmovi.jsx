"use client";
import { useState, useEffect } from "react";
import { POJMOVI } from "@/lib/data/pojmovi";

const PRED_META = {
  hrv: { label:"Hrvatski", sym:"Hr", color:"#4b7bff" },
  mat: { label:"Matematika", sym:"Ma", color:"#e9b446" },
};

function getDailyThree(arr) {
  const day = Math.floor(Date.now() / 86400000);
  const start = day % Math.max(1, arr.length - 2);
  return arr.slice(start, start + 3);
}

export default function DailyPojmovi() {
  const [predmet, setPredmet] = useState("hrv");
  const [openIdx, setOpenIdx] = useState(null);
  const [known, setKnown] = useState({});

  const meta = PRED_META[predmet];
  const daily = getDailyThree(POJMOVI[predmet] || []);
  const knownToday = daily.filter(p => known[p.pojam]).length;

  function changePred(k) {
    setPredmet(k);
    setOpenIdx(null);
  }

  function toggleKnown(pojam) {
    setKnown(prev => ({ ...prev, [pojam]: !prev[pojam] }));
  }

  return (
    <section style={{padding:"80px 0",background:"var(--bg)"}}>
      <div style={{maxWidth:900,margin:"0 auto",padding:"0 24px"}}>

        {/* Header */}
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:16,marginBottom:24}}>
          <div>
            <h2 className="d3" style={{marginBottom:8}}>Danas učim — 3 pojma</h2>
            <p style={{color:"var(--muted)",fontSize:14,lineHeight:1.7,maxWidth:400}}>
              Svaki dan 3 nova pojma. Klikni na pojam, pročitaj definiciju, provjeri znaš li odgovor.
            </p>
          </div>
          {/* Predmet switcher */}
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {Object.entries(PRED_META).map(([k, m]) => (
              <button key={k} onClick={() => changePred(k)}
                style={{padding:"8px 16px",borderRadius:99,border:`1px solid ${predmet===k ? m.color+"66" : "var(--bdr)"}`,background:predmet===k ? m.color+"18" : "transparent",color:predmet===k ? m.color : "var(--muted)",fontFamily:"var(--fb)",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all .18s"}}>
                {m.sym} {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Progress strip */}
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24,padding:"12px 16px",borderRadius:12,background:meta.color+"0d",border:`1px solid ${meta.color}22`}}>
          <div style={{display:"flex",gap:6}}>
            {daily.map((p, i) => (
              <div key={i} style={{width:28,height:28,borderRadius:8,background:known[p.pojam] ? meta.color : `${meta.color}22`,border:`1px solid ${known[p.pojam] ? meta.color : meta.color+"44"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,transition:"all .25s"}}>
                {known[p.pojam] ? "✓" : i + 1}
              </div>
            ))}
          </div>
          <div style={{fontSize:13,color:"var(--muted)"}}>
            {knownToday === 3
              ? <span style={{color:meta.color,fontWeight:700}}>🎉 Sve 3 pojma za danas — odlično!</span>
              : <span><strong style={{color:meta.color}}>{knownToday}/3</strong> pojma označena kao naučena</span>
            }
          </div>
          <div style={{marginLeft:"auto",fontSize:11,color:"var(--muted)"}}>
            {new Date().toLocaleDateString("hr", {day:"numeric",month:"long"})}
          </div>
        </div>

        {/* Cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))",gap:14}}>
          {daily.map((p, i) => {
            const isOpen = openIdx === i;
            const isKnown = !!known[p.pojam];
            return (
              <div key={p.pojam} style={{background:"var(--bg)",border:`1px solid ${isKnown ? meta.color+"55" : isOpen ? meta.color+"33" : "var(--bdr)"}`,borderRadius:16,overflow:"hidden",transition:"all .22s",transform:isOpen ? "translateY(-2px)" : "none",boxShadow:isOpen ? `0 8px 32px ${meta.color}18` : "none"}}>

                {/* Card header */}
                <div onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{padding:"20px 22px",cursor:"pointer",display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:38,height:38,borderRadius:10,background:meta.color+"18",border:`1px solid ${meta.color}33`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fh)",fontSize:16,fontWeight:900,color:meta.color,flexShrink:0}}>
                    {i + 1}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:15,marginBottom:2,color:isKnown ? "var(--muted)" : "var(--text)",textDecoration:isKnown ? "line-through" : "none"}}>
                      {p.pojam}
                    </div>
                    <div style={{fontSize:12,color:"var(--muted)"}}>Klikni za definiciju i pitanje</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
                    {isKnown && (
                      <span style={{fontSize:11,color:meta.color,fontWeight:700,background:meta.color+"18",border:`1px solid ${meta.color}33`,borderRadius:99,padding:"2px 8px"}}>
                        Znam ✓
                      </span>
                    )}
                    <span style={{color:"var(--muted)",fontSize:16,transition:"transform .2s",transform:isOpen ? "rotate(180deg)" : "none",display:"block"}}>↓</span>
                  </div>
                </div>

                {/* Expanded */}
                {isOpen && (
                  <div style={{borderTop:`1px solid ${meta.color}22`,padding:"18px 22px"}}>
                    <div style={{marginBottom:14}}>
                      <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".07em",color:meta.color,marginBottom:7}}>Definicija</div>
                      <div style={{fontSize:14,lineHeight:1.75,color:"var(--text)"}}>{p.def}</div>
                    </div>
                    <div style={{padding:"14px 16px",borderRadius:11,background:meta.color+"0d",border:`1px solid ${meta.color}22`,marginBottom:14}}>
                      <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".07em",color:meta.color,marginBottom:7}}>❓ Pitanje</div>
                      <div style={{fontSize:14,fontWeight:600,marginBottom:10,color:"var(--text)"}}>{p.pit}</div>
                      <details style={{cursor:"pointer"}}>
                        <summary style={{fontSize:13,color:meta.color,fontWeight:600,listStyle:"none",userSelect:"none"}}>▶ Prikaži odgovor</summary>
                        <div style={{marginTop:9,fontSize:13,lineHeight:1.7,color:"var(--muted)",borderTop:`1px solid ${meta.color}22`,paddingTop:9}}>{p.odg}</div>
                      </details>
                    </div>
                    <button onClick={() => toggleKnown(p.pojam)}
                      style={{width:"100%",padding:"10px",borderRadius:10,border:`1px solid ${isKnown ? "var(--bdr)" : meta.color}`,background:isKnown ? "transparent" : meta.color,color:isKnown ? "var(--muted)" : "#fff",fontFamily:"var(--fb)",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all .18s"}}>
                      {isKnown ? "↩ Označi kao ne znam" : "✓ Znam ovaj pojam!"}
                    </button>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Footer tip */}
        <div style={{marginTop:24,textAlign:"center",fontSize:13,color:"var(--muted)"}}>
          Pojmovi se mijenjaju svaki dan · Napredak se pamti · Dostupno za sve korisnike besplatno
        </div>

      </div>
    </section>
  );
}