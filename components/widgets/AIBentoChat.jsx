"use client";
import { useState, useEffect } from "react";

export default function AIBentoChat() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase !== 0) return;
    const timers = [
      setTimeout(() => setPhase(1), 1800),
      setTimeout(() => setPhase(2), 2600),
      setTimeout(() => setPhase(3), 4200),
      setTimeout(() => setPhase(0), 8000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  return (
    <div style={{display:"flex",flexDirection:"column",gap:7,paddingBottom:0,minHeight:220}}>

      {/* AI pitanje 1 */}
      <div style={{alignSelf:"flex-end",background:"rgba(75,123,255,.15)",border:"1px solid rgba(75,123,255,.25)",borderRadius:"12px 12px 3px 12px",padding:"8px 12px",fontSize:12,maxWidth:"70%"}}>
        Zašto moramo derivirati složenu funkciju?
      </div>

      {/* AI odgovor 1 */}
      <div style={{alignSelf:"flex-start",background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",borderRadius:"12px 12px 12px 3px",padding:"8px 12px",fontSize:12,maxWidth:"85%",color:"var(--muted)",lineHeight:1.6}}>
        Zato što funkcija unutar funkcije mijenja &quot;brzinu promjene&quot; —{" "}
        <strong style={{color:"var(--text)"}}>pravilo lanca</strong> to ispravlja množenjem derivacija izvana × iznutra. Npr. sin(x²)′ = cos(x²) · 2x 🎯
      </div>

      {/* Korisnikovo pitanje 2 — faza 1+ */}
      {phase >= 1 && (
        <div style={{alignSelf:"flex-end",background:"rgba(75,123,255,.15)",border:"1px solid rgba(75,123,255,.25)",borderRadius:"12px 12px 3px 12px",padding:"8px 12px",fontSize:12,maxWidth:"70%",marginBottom:4,animation:"fadeIn .3s ease both"}}>
          Možeš mi dati još jedan primjer?
        </div>
      )}

      {/* Typing indicator — faza 2 */}
      {phase === 2 && (
        <div style={{alignSelf:"flex-start",background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",borderRadius:"12px 12px 12px 3px",padding:"10px 14px",display:"inline-flex",gap:5,animation:"fadeIn .2s ease both"}}>
          {[0,1,2].map(i => (
            <span key={i} style={{width:6,height:6,borderRadius:"50%",background:"var(--muted)",display:"inline-block",animation:"typing-dot 1.2s ease-in-out infinite",animationDelay:`${i * 0.2}s`}}/>
          ))}
        </div>
      )}

      {/* AI odgovor 2 — faza 3 */}
      {phase === 3 && (
        <div style={{alignSelf:"flex-start",background:"rgba(255,255,255,.04)",border:"1px solid var(--bdr)",borderRadius:"12px 12px 12px 3px",padding:"8px 12px",fontSize:12,maxWidth:"85%",color:"var(--muted)",lineHeight:1.6,marginBottom:24,animation:"fadeIn .4s ease both"}}>
          Naravno! Npr.{" "}
          <strong style={{color:"var(--text)"}}>e^(3x²)</strong> → derivacija je e^(3x²) · 6x. Vanjska funkcija × derivacija unutarnje 💡
        </div>
      )}

    </div>
  );
}