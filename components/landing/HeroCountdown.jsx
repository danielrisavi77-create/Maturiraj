"use client";
import { useState, useEffect } from "react";
import { MATURA_DATE } from "@/lib/dashboard/helpers";

export default function HeroCountdown() {
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    function calc() {
      const diff = Math.ceil((MATURA_DATE - new Date()) / 864e5);
      setDaysLeft(Math.max(0, diff));
    }
    calc();
    const t = setInterval(calc, 60000);
    return () => clearInterval(t);
  }, []);

  if (daysLeft === null) return null;

  const color = daysLeft > 90 ? "var(--teal)" : daysLeft > 30 ? "var(--gold)" : "#f87171";

  return (
    <div className="hero-countdown" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"8px 16px",borderRadius:99,background:`${color}12`,border:`1px solid ${color}33`,marginBottom:16}}>
      <span style={{fontFamily:"var(--fh)",fontSize:22,fontWeight:900,color,lineHeight:1}}>
        {daysLeft}
      </span>
      <span style={{fontSize:12,color:"var(--muted)"}}>
        dana do mature &middot; ljetni rok {MATURA_DATE.getFullYear()}.
      </span>
    </div>
  );
}