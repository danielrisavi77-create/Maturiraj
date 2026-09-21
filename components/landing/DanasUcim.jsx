"use client";
import { useState } from "react";
import { useClientState } from "@/lib/hooks/useClientState";
import { POJMOVI } from "@/lib/data/pojmovi";

const SVI_PREDMETI = [
  {id:"hrv", label:"Hrvatski",    sym:"✍",  color:"#f87171"},
  {id:"mat", label:"Matematika",  sym:"π",   color:"#818cf8"},
  {id:"eng", label:"Engleski",    sym:"En",  color:"#c084fc"},
  {id:"fiz", label:"Fizika",      sym:"⚡",  color:"#fbbf24"},
  {id:"kem", label:"Kemija",      sym:"⚗",   color:"#34d399"},
  {id:"bio", label:"Biologija",   sym:"⊕",   color:"#2dd4bf"},
  {id:"geo", label:"Geografija",  sym:"◉",   color:"#38bdf8"},
  {id:"pov", label:"Povijest",    sym:"⚔",   color:"#fb923c"},
  {id:"psi", label:"Psihologija", sym:"🧠",  color:"#c084fc"},
  {id:"soc", label:"Sociologija", sym:"⚖",   color:"#e9b446"},
  {id:"fil", label:"Filozofija",  sym:"φ",   color:"#94a3b8"},
  {id:"inf", label:"Informatika", sym:"⌨",   color:"#818cf8"},
  {id:"log", label:"Logika",      sym:"∴",   color:"#7dd3fc"},
  {id:"eti", label:"Etika",       sym:"◈",   color:"#86efac"},
  {id:"pig", label:"Pol. i gosp.",sym:"🏛",  color:"#fda4af"},
  {id:"vje", label:"Vjeronauk",   sym:"✝",   color:"#d4b483"},
  {id:"gla", label:"Glazbena",    sym:"♪",   color:"#f9a8d4"},
  {id:"lik", label:"Likovna",     sym:"🎨",  color:"#fdba74"},
  {id:"lat", label:"Latinski",    sym:"Ⅼ",   color:"#a8a29e"},
  {id:"grk", label:"Grčki",       sym:"Ω",   color:"#9ca3af"},
];

const STORAGE_KEY_PRED  = "maturiraj_danas_predmeti";
const STORAGE_KEY_KNOWN = "maturiraj_danas_known";
const MAX_ODABIR = 3;

function getDailyThree(arr, predmetId) {
  const todayKey = new Date().toISOString().slice(0,10) + predmetId;
  const seed = todayKey.split("").reduce((a,c) => a + c.charCodeAt(0), 0);
  const indices = [];
  let s = seed;
  while (indices.length < Math.min(3, arr.length)) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    const idx = s % arr.length;
    if (!indices.includes(idx)) indices.push(idx);
  }
  return indices.map(i => arr[i]);
}

function readLS(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch(e) { return fallback; }
}

function writeLS(key, value) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {}
}

export default function DanasUcim() {
  const [odabraniPredmeti, setOdabraniPredmeti] = useClientState(() => readLS(STORAGE_KEY_PRED, ["hrv", "mat", "eng"]), ["hrv", "mat", "eng"]);
  const [aktivniOdabir, setAktivniPredmet] = useState(null);
  const aktivniPredmet = aktivniOdabir ?? odabraniPredmeti[0];
  const [openIdx, setOpenIdx] = useState(null);
  const [known, setKnown] = useClientState(() => readLS(STORAGE_KEY_KNOWN, {}), {});
  const [pokaziPicker, setPokaziPicker] = useState(false);

  function togglePredmet(id) {
    setOdabraniPredmeti(prev => {
      let next;
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev;
        next = prev.filter(x => x !== id);
        if (aktivniPredmet === id) setAktivniPredmet(next[0]);
      } else {
        if (prev.length >= MAX_ODABIR) return prev;
        next = [...prev, id];
      }
      writeLS(STORAGE_KEY_PRED, next);
      return next;
    });
  }

  function toggleKnown(pojam) {
    setKnown(prev => {
      const next = { ...prev, [pojam]: !prev[pojam] };
      writeLS(STORAGE_KEY_KNOWN, next);
      return next;
    });
  }

  const meta  = SVI_PREDMETI.find(p => p.id === aktivniPredmet) || SVI_PREDMETI[0];
  const pool  = POJMOVI[aktivniPredmet] || [];
  const daily = getDailyThree(pool, aktivniPredmet);
  const knownToday = daily.filter(p => known[p.pojam]).length;

  return (
    <section style={{padding:"72px 0",borderTop:"1px solid var(--bdr)",borderBottom:"1px solid var(--bdr)",background:"var(--s1)",overflow:"hidden"}}>
      <div className="wrap">

        {/* Header */}
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:16,marginBottom:24}}>
          <div className="reveal reveal-up">
            <div className="eye" style={{marginBottom:10}}>Navika učenja</div>
            <h2 className="d3" style={{marginBottom:8}}>Danas učim — 3 pojma</h2>
            <p style={{color:"var(--muted)",fontSize:14,lineHeight:1.7,maxWidth:400}}>
              Svaki dan 3 nova pojma. Odaberi predmete koje učiš i provjeri znaš li odgovor.
            </p>
          </div>
          <button
            onClick={() => setPokaziPicker(p => !p)}
            style={{padding:"8px 16px",borderRadius:10,border:`1px solid ${pokaziPicker ? "var(--blue)" : "var(--bdr-hi)"}`,background:pokaziPicker ? "rgba(75,123,255,.1)" : "var(--s2)",color:"var(--text)",fontFamily:"var(--fb)",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all .15s",display:"flex",alignItems:"center",gap:7,alignSelf:"flex-start"}}>
            ⚙ Predmeti
            <span style={{fontSize:11,color:"var(--muted)"}}>({odabraniPredmeti.length}/{MAX_ODABIR})</span>
          </button>
        </div>

        {/* Predmet picker */}
        {pokaziPicker && (
          <div style={{marginBottom:24,padding:"18px 20px",borderRadius:14,background:"var(--bg)",border:"1px solid var(--bdr)",animation:"fadeIn .2s ease"}}>
            <div style={{fontSize:12,fontWeight:700,color:"var(--muted)",textTransform:"uppercase",letterSpacing:".07em",marginBottom:12}}>
              Odaberi do {MAX_ODABIR} predmeta:
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
              {SVI_PREDMETI.map(p => {
                const sel = odabraniPredmeti.includes(p.id);
                const disabled = !sel && odabraniPredmeti.length >= MAX_ODABIR;
                return (
                  <button key={p.id} onClick={() => togglePredmet(p.id)} disabled={disabled}
                    style={{padding:"6px 13px",borderRadius:99,border:`1px solid ${sel ? p.color+"66" : "var(--bdr)"}`,background:sel ? p.color+"18" : "transparent",color:sel ? p.color : disabled ? "rgba(255,255,255,.2)" : "var(--muted)",fontFamily:"var(--fb)",fontSize:12,fontWeight:600,cursor:disabled ? "not-allowed" : "pointer",transition:"all .15s",opacity:disabled ? 0.4 : 1}}>
                    {p.sym} {p.label}
                  </button>
                );
              })}
            </div>
            <div style={{fontSize:11,color:"var(--muted)",marginTop:10}}>
              Odabrani predmeti se pamte · Pojmovi se mijenjaju svaki dan
            </div>
          </div>
        )}

        {/* Tab switcher */}
        <div style={{display:"flex",gap:7,marginBottom:20,flexWrap:"wrap"}}>
          {odabraniPredmeti.map(id => {
            const p = SVI_PREDMETI.find(x => x.id === id);
            if (!p) return null;
            const doneCount = getDailyThree(POJMOVI[id] || [], id).filter(d => known[d.pojam]).length;
            return (
              <button key={id} onClick={() => { setAktivniPredmet(id); setOpenIdx(null); }}
                style={{padding:"8px 16px",borderRadius:99,border:`1px solid ${aktivniPredmet===id ? p.color+"66" : "var(--bdr)"}`,background:aktivniPredmet===id ? p.color+"18" : "transparent",color:aktivniPredmet===id ? p.color : "var(--muted)",fontFamily:"var(--fb)",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all .18s",display:"flex",alignItems:"center",gap:6}}>
                {p.sym} {p.label}
                {doneCount === 3 && <span style={{fontSize:10,color:p.color}}>✓</span>}
              </button>
            );
          })}
        </div>

        {/* Progress strip */}
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24,padding:"12px 16px",borderRadius:12,background:meta.color+"0d",border:`1px solid ${meta.color}22`}}>
          <div style={{display:"flex",gap:6}}>
            {daily.map((p, i) => (
              <div key={i} style={{width:28,height:28,borderRadius:8,background:known[p.pojam] ? meta.color : `${meta.color}22`,border:`1px solid ${known[p.pojam] ? meta.color : meta.color+"44"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:known[p.pojam] ? "#fff" : meta.color,fontWeight:700,transition:"all .25s"}}>
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
            const isOpen  = openIdx === i;
            const isKnown = !!known[p.pojam];
            return (
              <div key={p.pojam} style={{background:"var(--bg)",border:`1px solid ${isKnown ? meta.color+"55" : isOpen ? meta.color+"33" : "var(--bdr)"}`,borderRadius:16,overflow:"hidden",transition:"all .22s",transform:isOpen ? "translateY(-2px)" : "none",boxShadow:isOpen ? `0 8px 32px ${meta.color}18` : "none"}}>

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
                      <span style={{fontSize:11,color:meta.color,fontWeight:700,background:meta.color+"18",border:`1px solid ${meta.color}33`,borderRadius:99,padding:"2px 8px"}}>Znam ✓</span>
                    )}
                    <span style={{color:"var(--muted)",fontSize:16,transition:"transform .2s",transform:isOpen ? "rotate(180deg)" : "none",display:"block"}}>↓</span>
                  </div>
                </div>

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

        {/* Footer */}
        <div style={{marginTop:24,textAlign:"center",fontSize:13,color:"var(--muted)"}}>
          Pojmovi se mijenjaju svaki dan · Napredak se pamti u browseru · Besplatno za sve
        </div>

      </div>
    </section>
  );
}
