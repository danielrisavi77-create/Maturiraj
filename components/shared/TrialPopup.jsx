"use client";

export default function TrialPopup({ onStart, onDismiss }) {
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(6px)",animation:"fadeIn .25s ease"}}>
      <div style={{background:"var(--s1)",border:"1px solid rgba(62,207,110,.25)",borderRadius:24,padding:"40px 36px",maxWidth:440,width:"100%",position:"relative",boxShadow:"0 40px 100px rgba(0,0,0,.6),0 0 0 1px rgba(62,207,110,.1)"}}>
        <button aria-label="Zatvori" onClick={onDismiss} style={{position:"absolute",top:16,right:16,background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:20,lineHeight:1,fontFamily:"var(--fb)"}}>×</button>
        <div style={{position:"absolute",top:-1,left:0,right:0,height:2,background:"linear-gradient(90deg,transparent,var(--green),transparent)",borderRadius:"24px 24px 0 0"}}/>

        <div style={{textAlign:"center",marginBottom:28}}>
          <div style={{width:64,height:64,borderRadius:18,background:"linear-gradient(135deg,var(--green),#2dbb60)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,margin:"0 auto 18px",boxShadow:"0 12px 32px rgba(62,207,110,.3)"}}>🎁</div>
          <h2 style={{fontFamily:"var(--fh)",fontSize:26,fontWeight:900,marginBottom:8}}>
            3 dana <span style={{color:"var(--green)"}}>Pro plana</span> besplatno
          </h2>
          <p style={{color:"var(--muted)",fontSize:14,lineHeight:1.75}}>
            Isprobaj sve što Maturiraj Pro nudi — bez kartice, bez obveza. Otkaži kada hoćeš.
          </p>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:24}}>
          {[
            "✓ Discere — svi predmeti i arhiva 2010–2026",
            "✓ AI Profesor 24/7 na hrvatskom",
            "✓ Kalkulator bodova s formulama fakulteta",
            "✓ Roditeljski dashboard i statistike",
            "✓ Lektira vodič s citatima i pitanjima",
          ].map(f => (
            <div key={f} style={{fontSize:13,color:"var(--text)",display:"flex",alignItems:"center",gap:8}}>
              <span style={{color:"var(--green)",fontWeight:700,flexShrink:0}}>{f.slice(0,1)}</span>
              <span>{f.slice(2)}</span>
            </div>
          ))}
        </div>

        <button onClick={onStart} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"13px 26px",fontSize:15,fontFamily:"var(--fb)",fontWeight:600,borderRadius:11,border:"none",cursor:"pointer",background:"linear-gradient(135deg,var(--green),#2dbb60)",color:"#fff",marginBottom:12}}>
          Počni 3 dana besplatno →
        </button>

        <div style={{textAlign:"center",fontSize:12,color:"var(--muted)"}}>
          Bez kartice · Otkaži bilo kada · Automatski prelazi na Besplatni plan
        </div>
        <button onClick={onDismiss} style={{display:"block",margin:"12px auto 0",background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontFamily:"var(--fb)",fontSize:12,textDecoration:"underline",textUnderlineOffset:3}}>
          Ne, hvala — ostat ću na besplatnom
        </button>
      </div>
    </div>
  );
}