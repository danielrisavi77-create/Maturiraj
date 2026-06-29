"use client";
import { useState } from "react";

const BRZI_PREDMETI = [
  {id:"hrv", name:"Hrvatski",   sym:"✍",  color:"#f87171"},
  {id:"mat", name:"Matematika", sym:"π",   color:"#818cf8"},
  {id:"eng", name:"Engleski",   sym:"En",  color:"#c084fc"},
  {id:"bio", name:"Biologija",  sym:"⊕",   color:"#2dd4bf"},
  {id:"kem", name:"Kemija",     sym:"⚗",   color:"#34d399"},
  {id:"fiz", name:"Fizika",     sym:"⚡",  color:"#fbbf24"},
  {id:"pov", name:"Povijest",   sym:"📜",  color:"#fb923c"},
  {id:"geo", name:"Geografija", sym:"◉",   color:"#38bdf8"},
];

const PREVIEW_SADRZAJ = {
  hrv:["Moderna književnost — Matoš, Kranjčević","Avangarda — Ujević, Krleža","Stilske figure i esej"],
  mat:["Funkcije i derivacije","Integrali i primjene","Trigonometrija i geometrija"],
  eng:["Grammar review — tenses","Vocabulary + reading","Writing essays"],
  bio:["Stanična biologija i genetika","Ekologija i evolucija","Fiziologija čovjeka"],
  kem:["Stehiometrija i reakcije","Organska kemija","Kiseline, baze i pH"],
  fiz:["Mehanika i dinamika","Elektromagnetizam","Valovi i optika"],
  pov:["19. i 20. stoljeće","Hrvatska povijest","Suvremeni svijet"],
  geo:["Fizička geografija","Demografija i gospodar.","Regionalna geografija"],
};

export default function PlanUcenjaTeaser({ onPlanUcenja, onPlan }) {
  const [selPredmeti, setSelPredmeti] = useState(["hrv","mat"]);
  const MATURA_DATE = new Date("2026-06-01");
  const tjednaDoMature = Math.max(1, Math.ceil((MATURA_DATE - new Date()) / (1000*60*60*24*7)));

  const toggle = (id) => setSelPredmeti(p =>
    p.includes(id) ? (p.length > 1 ? p.filter(x => x !== id) : p) : [...p, id]
  );

  const preview = [];
  let tjedan = 1;
  selPredmeti.forEach(pid => {
    const pred = BRZI_PREDMETI.find(p => p.id === pid);
    const sadrzaj = PREVIEW_SADRZAJ[pid] || ["Osnove","Napredne teme","Ponavljanje"];
    sadrzaj.slice(0,2).forEach(tema => {
      if (tjedan <= 8) preview.push({tjedan: tjedan++, pred, tema});
    });
  });
  while (preview.length < 6) {
    preview.push({tjedan: tjedan++, pred:{name:"Ponavljanje",sym:"🔁",color:"var(--gold)"}, tema:"Simulacija ispita i ponavljanje"});
  }

  const visible = preview.slice(0,3);
  const blurred = preview.slice(3,6);

  return (
    <section style={{padding:"88px 0",borderTop:"1px solid var(--bdr)",background:"var(--bg)",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:"20%",right:"-5%",width:400,height:400,background:"radial-gradient(circle,rgba(124,92,252,.07),transparent 65%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"10%",left:"-3%",width:350,height:350,background:"radial-gradient(circle,rgba(75,123,255,.06),transparent 65%)",pointerEvents:"none"}}/>

      <div className="wrap" style={{position:"relative",zIndex:1}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:52,alignItems:"start"}}>

          {/* Lijevo — tekst */}
          <div className="reveal reveal-up">
            <div className="eye" style={{marginBottom:10}}>Pro feature</div>
            <h2 className="d3" style={{marginBottom:14}}>Tvoj osobni<br/><span className="g-blue">plan učenja</span></h2>
            <p style={{color:"var(--muted)",fontSize:15,lineHeight:1.82,marginBottom:24}}>
              Odaberi predmete, unesi koliko vremena imaš — i dobiješ konkretan tjedni raspored do mature. Uz Pro plan, AI prilagođava plan tvojim snagama i slabostima.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:28}}>
              {[
                {ic:"📅", t:"Tjedni raspored",       d:"Svaki tjedan znaš točno što učiš — bez stresa i improvizacije."},
                {ic:"✨", t:"AI personalizacija (Pro)",d:"Slabi u kemiji? AI raspoređuje više vremena tamo gdje trebaš."},
                {ic:"🔁", t:"Ponavljanje na kraju",   d:"Zadnja 2 tjedna automatski rezervirana za simulaciju ispita."},
              ].map((f, i) => (
                <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                  <div style={{width:36,height:36,borderRadius:9,background:"rgba(75,123,255,.1)",border:"1px solid rgba(75,123,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{f.ic}</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:13,marginBottom:2}}>{f.t}</div>
                    <div style={{fontSize:12,color:"var(--muted)",lineHeight:1.55}}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn bp btn-lg" onClick={onPlanUcenja}>
              Napravi svoj plan →
            </button>
          </div>

          {/* Desno — interaktivni demo */}
          <div className="reveal reveal-up" style={{animationDelay:".08s"}}>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:12,fontWeight:700,color:"var(--muted)",textTransform:"uppercase",letterSpacing:".07em",marginBottom:10}}>Odaberi predmete:</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {BRZI_PREDMETI.map(p => {
                  const sel = selPredmeti.includes(p.id);
                  return (
                    <button key={p.id} onClick={() => toggle(p.id)}
                      style={{padding:"5px 12px",borderRadius:99,border:`1px solid ${sel ? p.color+"66" : "var(--bdr)"}`,background:sel ? p.color+"18" : "var(--s1)",color:sel ? p.color : "var(--muted)",fontFamily:"var(--fb)",fontSize:12,fontWeight:600,cursor:"pointer",transition:"all .15s"}}>
                      {p.sym} {p.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,overflow:"hidden"}}>
              <div style={{padding:"12px 18px",borderBottom:"1px solid var(--bdr)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{fontSize:12,fontWeight:700,color:"var(--muted)",textTransform:"uppercase",letterSpacing:".07em"}}>📅 Tjedni plan — preview</div>
                <div style={{fontSize:11,color:"var(--muted)"}}>{tjednaDoMature} tjedana do mature</div>
              </div>

              <div style={{padding:"8px 0"}}>
                {visible.map((t, i) => (
                  <div key={i} style={{display:"flex",gap:12,alignItems:"center",padding:"10px 18px",borderBottom:"1px solid var(--bdr)"}}>
                    <div style={{width:36,height:36,borderRadius:9,background:t.pred.color+"18",border:`1px solid ${t.pred.color}33`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <span style={{fontFamily:"var(--fh)",fontSize:13,fontWeight:900,color:t.pred.color,lineHeight:1}}>{t.tjedan}</span>
                      <span style={{fontSize:8,color:"var(--muted)"}}>tjed</span>
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:12,fontWeight:700,color:t.pred.color,marginBottom:2}}>{t.pred.sym} {t.pred.name}</div>
                      <div style={{fontSize:12,color:"var(--muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{t.tema}</div>
                    </div>
                  </div>
                ))}

                {/* Zamagljeni tjedni */}
                <div style={{position:"relative"}}>
                  {blurred.map((t, i) => (
                    <div key={i} style={{display:"flex",gap:12,alignItems:"center",padding:"10px 18px",borderBottom:i<blurred.length-1?"1px solid var(--bdr)":"none",filter:"blur(4px)",userSelect:"none",pointerEvents:"none"}}>
                      <div style={{width:36,height:36,borderRadius:9,background:t.pred.color+"18",border:`1px solid ${t.pred.color}33`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <span style={{fontFamily:"var(--fh)",fontSize:13,fontWeight:900,color:t.pred.color,lineHeight:1}}>{t.tjedan}</span>
                        <span style={{fontSize:8,color:"var(--muted)"}}>tjed</span>
                      </div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:12,fontWeight:700,color:t.pred.color,marginBottom:2}}>{t.pred.sym} {t.pred.name}</div>
                        <div style={{fontSize:12,color:"var(--muted)"}}>{t.tema}</div>
                      </div>
                    </div>
                  ))}
                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(7,9,15,.1),rgba(7,9,15,.97))",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",paddingBottom:20}}>
                    <div style={{fontSize:22,marginBottom:8}}>🔒</div>
                    <div style={{fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:4}}>+ još {Math.max(0,tjednaDoMature-3)} tjedana</div>
                    <button onClick={onPlanUcenja} className="btn bp btn-sm">
                      Otključaj puni plan →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}