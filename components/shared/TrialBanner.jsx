"use client";

export default function TrialBanner({ onStart, onDismiss }) {
  return (
    <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:200,background:"linear-gradient(135deg,rgba(14,18,32,.98),rgba(10,14,28,.98))",borderTop:"1px solid rgba(62,207,110,.2)",padding:"14px 24px",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",backdropFilter:"blur(16px)",boxShadow:"0 -8px 40px rgba(0,0,0,.4)"}}>
      <div style={{width:36,height:36,borderRadius:10,background:"rgba(62,207,110,.15)",border:"1px solid rgba(62,207,110,.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>
        🎁
      </div>

      <div style={{flex:1,minWidth:200}}>
        <div style={{fontWeight:700,fontSize:14,color:"var(--text)"}}>
          3 dana Pro plana besplatno — bez kartice
        </div>
        <div style={{fontSize:12,color:"var(--muted)",marginTop:2}}>
          Discere, AI Profesor, Lektira vodič i sve ostalo. Otkaži kad hoćeš.
        </div>
      </div>

      <div style={{display:"flex",gap:8,flexShrink:0,alignItems:"center"}}>
        <button onClick={onStart} style={{padding:"9px 20px",borderRadius:10,background:"linear-gradient(135deg,var(--green),#2dbb60)",color:"#fff",border:"none",fontFamily:"var(--fb)",fontSize:13,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>
          Počni besplatno →
        </button>
        <button aria-label="Zatvori" onClick={onDismiss} style={{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:20,lineHeight:1,fontFamily:"var(--fb)",padding:"4px 8px"}}>
          ×
        </button>
      </div>
    </div>
  );
}