"use client";

export default function CTA({ onSkripte, onPlan }) {
  return (
    <section className="sec" style={{position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:700,height:500,background:"radial-gradient(ellipse,rgba(75,123,255,.08) 0%,transparent 65%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:0,right:"10%",width:300,height:300,background:"radial-gradient(circle,rgba(124,92,252,.06),transparent 65%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:0,left:"10%",width:280,height:280,background:"radial-gradient(circle,rgba(233,180,70,.05),transparent 65%)",pointerEvents:"none"}}/>

      <div className="wrap">
        <div style={{borderRadius:28,padding:"72px 48px",background:"linear-gradient(160deg,#090f23 0%,#07091a 100%)",border:"1px solid rgba(75,123,255,.2)",position:"relative",overflow:"hidden",boxShadow:"0 0 80px rgba(75,123,255,.06),inset 0 1px 0 rgba(255,255,255,.04)"}}>

          {/* Dekoracija gore */}
          <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(75,123,255,.4) 40%,rgba(124,92,252,.4) 60%,transparent)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",top:-1,left:"50%",transform:"translateX(-50%)",width:280,height:80,background:"radial-gradient(ellipse,rgba(75,123,255,.18),transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(75,123,255,.06) 1px,transparent 1px)",backgroundSize:"32px 32px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)",WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)",pointerEvents:"none"}}/>

          <div className="cta-inner-grid" style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr auto",gap:48,alignItems:"center"}}>

            {/* Lijevo */}
            <div>
              <div style={{display:"inline-flex",alignItems:"center",gap:7,padding:"5px 12px",borderRadius:99,background:"rgba(62,207,110,.08)",border:"1px solid rgba(62,207,110,.18)",marginBottom:22}}>
                <span style={{width:6,height:6,borderRadius:"50%",background:"var(--green)",display:"inline-block",boxShadow:"0 0 8px var(--green)"}}/>
                <span style={{fontSize:12,color:"var(--green)",fontWeight:600}}>Besplatno za početak · bez kartice</span>
              </div>
              <h2 style={{fontFamily:"var(--fh)",fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,lineHeight:1.1,letterSpacing:"-.03em",marginBottom:18}}>
                Spremi se pametnije.<br/>
                <span style={{background:"linear-gradient(135deg,var(--blue),var(--violet))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                  Matura je u lipnju.
                </span>
              </h2>
              <p style={{color:"var(--muted)",fontSize:15,lineHeight:1.78,maxWidth:440,marginBottom:28}}>
                Skripte su besplatne za sve. Discere arhiva i AI profesor od <strong style={{color:"var(--text)"}}>9,99 €/mj</strong> — manje od jednog sata privatnih priprema.
              </p>
              <div style={{display:"flex",flexWrap:"wrap",gap:16}}>
                {[["✓","Otkaži kad hoćeš"],["✓","GDPR zaštita"],["✓","HR + BiH podrška"],["✓","Pristup odmah"]].map(([ic,t]) => (
                  <div key={t} style={{display:"flex",alignItems:"center",gap:5,fontSize:13,color:"var(--muted)"}}>
                    <span style={{color:"var(--green)",fontWeight:700}}>{ic}</span>{t}
                  </div>
                ))}
              </div>
            </div>

            {/* Desno — action card */}
            <div className="cta-card" style={{flexShrink:0,width:280,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:20,padding:"28px 24px",backdropFilter:"blur(12px)"}}>
              <div style={{fontFamily:"var(--fh)",fontSize:14,fontWeight:700,marginBottom:4,color:"var(--muted)",textTransform:"uppercase",letterSpacing:".06em"}}>Počni s</div>
              <div style={{fontFamily:"var(--fh)",fontSize:36,fontWeight:900,lineHeight:1,marginBottom:4}}>Besplatno</div>
              <div style={{fontSize:13,color:"var(--muted)",marginBottom:24,lineHeight:1.6}}>
                Skripte za sva 24 predmeta, odmah, bez registracije.
              </div>
              <button className="btn bg btn-lg" onClick={onSkripte} style={{width:"100%",justifyContent:"center",marginBottom:10}}>
                📖 Otvori skripte
              </button>
              <button className="btn bp btn-md" onClick={onPlan} style={{width:"100%",justifyContent:"center",marginBottom:16}}>
                Pogledaj planove →
              </button>
              <div style={{borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:16}}>
                <div style={{fontSize:11,color:"var(--muted)",textAlign:"center",lineHeight:1.7}}>
                  Standard od <strong style={{color:"var(--text)"}}>9,99 €/mj</strong> · Pro od <strong style={{color:"var(--text)"}}>19,99 €/mj</strong><br/>
                  <span style={{color:"var(--green)"}}>Uštedi 25% godišnjom pretplatom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom social proof */}
          <div style={{position:"relative",zIndex:1,marginTop:44,paddingTop:28,borderTop:"1px solid rgba(255,255,255,.05)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
            <div style={{display:"flex",alignItems:"center"}}>
              {[{c:"#818cf8",i:"L"},{c:"#3ecf6e",i:"M"},{c:"#f87171",i:"A"},{c:"#fbbf24",i:"L"},{c:"#2dcfbe",i:"S"}].map((av,i) => (
                <div key={i} style={{width:28,height:28,borderRadius:"50%",background:`${av.c}18`,border:`2px solid var(--bg)`,marginLeft:i?-8:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:av.c}}>{av.i}</div>
              ))}
              <div style={{marginLeft:10,fontSize:13,color:"var(--muted)"}}>
                <strong style={{color:"var(--text)"}}>2.400+</strong> učenika do sad
              </div>
            </div>
            <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
              {[["★ 4.9/5","ocjena"],["92%","upisalo željeni faks"],["2010–2026","Discere arhiva"]].map(([n,l]) => (
                <div key={l} style={{textAlign:"right"}}>
                  <div style={{fontFamily:"var(--fh)",fontSize:16,fontWeight:900}}>{n}</div>
                  <div style={{fontSize:10,color:"var(--muted)"}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}