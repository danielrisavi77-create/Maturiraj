"use client";
import { useState } from "react";

export default function NewsletterInput() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div style={{padding:"10px 12px",borderRadius:10,background:"rgba(62,207,110,.08)",border:"1px solid rgba(62,207,110,.2)",fontSize:12,color:"var(--green)",fontWeight:600}}>
        ✓ Hvala! Javit ćemo se uskoro.
      </div>
    );
  }

  return (
    <div style={{background:"var(--s2)",border:"1px solid var(--bdr)",borderRadius:12,padding:"14px 14px",marginBottom:16}}>
      <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".07em",color:"var(--muted)",marginBottom:8}}>
        Novosti & savjeti
      </div>
      <div style={{display:"flex",gap:6}}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="tvoj@email.hr"
          style={{flex:1,background:"var(--bg)",border:"1px solid var(--bdr)",borderRadius:8,padding:"7px 10px",fontSize:12,color:"var(--text)",outline:"none",minWidth:0}}
        />
        <button
          onClick={() => { if (email.includes("@")) setSent(true); }}
          style={{flexShrink:0,padding:"6px 14px",fontSize:13,fontFamily:"var(--fb)",fontWeight:600,borderRadius:9,border:"none",cursor:"pointer",background:"linear-gradient(135deg,#4b7bff,#7c5cfc)",color:"#fff"}}>
          →
        </button>
      </div>
      <div style={{fontSize:10,color:"var(--muted)",marginTop:6,opacity:.7}}>
        Bez spama. Otkaži kad hoćeš.
      </div>
    </div>
  );
}