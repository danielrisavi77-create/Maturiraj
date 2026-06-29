'use client';

import { useMemo, useState } from "react";
import Image from "next/image";

/*
  Koordinate su u postocima (%) od širine/visine slike.
  Slika: ChatGPT_Image_Mar_28__2026__06_40_48_PM.png
  Hrvatska je smještena u desnoj polovici slike.

  Gledajući sliku:
  - Varaždin: gore, sredina-desno od centra HR
  - Zagreb: ispod Varaždina, lijevo-sredina HR
  - Osijek: gore-desno, krajnji istok
  - Rijeka: lijevo, gdje Istra prelazi u kopno
  - Pula: krajnji JZ, vrh Istre
  - Split: sredina dalmatinske obale
  - Dubrovnik: krajnji jug, kraj "repa"
*/
const GRAD_COORDS = {
  "Varaždin":       { x: 60.1, y: 26.7 },
  "Zagreb":         { x: 60.4, y: 35.2 },
  "Osijek":         { x: 81.9, y: 38.6 },
  "Rijeka":         { x: 48.6, y: 39.0 },
  "Pula":           { x: 44.5, y: 47.0 },
  "Split":          { x: 66.0, y: 70.3 },
  "Dubrovnik":      { x: 77.2, y: 80.7 },
  "Zadar":          { x: 58.0, y: 60.0 },
  "Šibenik":        { x: 62.0, y: 63.5 },
  "Opatija":        { x: 47.5, y: 41.5 },
  "Slavonski Brod": { x: 74.0, y: 44.0 },
  "Požega":         { x: 71.0, y: 46.5 },
  "Čakovec":        { x: 58.5, y: 21.5 },
  "Sisak":          { x: 62.5, y: 42.5 },
  "Karlovac":       { x: 54.5, y: 42.0 },
  "Đakovo":         { x: 78.0, y: 46.0 },
  "Gospić":         { x: 58.5, y: 52.0 },
  "Vinkovci":       { x: 82.0, y: 42.0 },
};

export default function KartaHrvatske({ studiji, onGradClick, selectedGrad }) {
  const [hoveredGrad, setHoveredGrad] = useState(null);

  const gradData = useMemo(() => {
    const m = {};
    studiji.forEach(s => {
      if (!m[s.grad]) m[s.grad] = { high:0, mid:0, low:0, none:0, total:0 };
      m[s.grad][s.chance]++;
      m[s.grad].total++;
    });
    return m;
  }, [studiji]);

  const getColor = (grad) => {
    const c = gradData[grad];
    if (!c || c.total === 0) return "#7b82a0";
    if (c.high > 0) return "#3ecf6e";
    if (c.mid  > 0) return "#e9b446";
    if (c.low  > 0) return "#f05c5c";
    return "#7b82a0";
  };

  const displayGrad = hoveredGrad || selectedGrad;

  return (
    <div style={{
      background: "var(--s2)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      overflow: "hidden",
    }}>
      {/* Karta s markerima */}
      <div style={{ position:"relative", width:"100%", aspectRatio:"3/2" }}>

        {/* Pozadinska slika */}
        <Image
          src="/hrvatska-karta.png"
          alt="Karta Hrvatske"
          fill
          style={{ objectFit:"cover", objectPosition:"center" }}
          priority
        />

        {/* Tamni overlay da markeri budu čitljiviji */}
        <div style={{
          position:"absolute", inset:0,
          background:"rgba(7,9,15,0.25)",
        }}/>

        {/* Grad markeri */}
        {Object.entries(GRAD_COORDS).map(([grad, { x, y }]) => {
          const c = gradData[grad];
          const color = getColor(grad);
          const isSelected = selectedGrad === grad;
          const isHovered  = hoveredGrad  === grad;
          const hasData    = c && c.total > 0;
          const active     = isSelected || isHovered;
          const size       = hasData ? Math.min(36, 22 + c.total * 1.2) : 18;

          return (
            <div
              key={grad}
              style={{
                position: "absolute",
                left: `${x}%`,
                top:  `${y}%`,
                transform: "translate(-50%, -50%)",
                cursor: hasData ? "pointer" : "default",
                zIndex: active ? 20 : 10,
              }}
              onClick={() => hasData && onGradClick(grad)}
              onMouseEnter={() => hasData && setHoveredGrad(grad)}
              onMouseLeave={() => setHoveredGrad(null)}
            >
              {/* Pulse rings */}
              {active && hasData && (
                <>
                  <div style={{
                    position:"absolute", inset:`-${size/2}px`,
                    borderRadius:"50%", border:`1.5px solid ${color}`,
                    opacity:0.3, animation:"pulse-ring 1.5s infinite",
                  }}/>
                  <div style={{
                    position:"absolute", inset:`-${size/3}px`,
                    borderRadius:"50%", border:`1.5px solid ${color}`,
                    opacity:0.5,
                  }}/>
                </>
              )}

              {/* Glow */}
              {hasData && (
                <div style={{
                  position:"absolute", inset:`-${size/3}px`,
                  borderRadius:"50%",
                  background: color,
                  opacity: active ? 0.25 : 0.12,
                  filter:"blur(6px)",
                  transition:"opacity .2s",
                }}/>
              )}

              {/* Krug markera */}
              <div style={{
                width: size,
                height: size,
                borderRadius: "50%",
                background: hasData ? color : "rgba(123,130,160,0.4)",
                border: `${active ? 2.5 : 1.5}px solid ${active ? "#fff" : color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: hasData ? `0 0 12px ${color}88` : "none",
                transition: "all .2s",
                transform: active ? "scale(1.15)" : "scale(1)",
                position: "relative",
              }}>
                {hasData && (
                  <span style={{
                    fontSize: size > 28 ? 12 : 10,
                    fontWeight: 700,
                    color: "#07090f",
                    fontFamily: "DM Sans,sans-serif",
                    lineHeight: 1,
                  }}>
                    {c.total}
                  </span>
                )}
              </div>

              {/* Label */}
              <div style={{
                position: "absolute",
                top: size + 4,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 10,
                fontWeight: active ? 700 : 500,
                color: active ? "#e8ecf8" : "rgba(232,236,248,0.8)",
                fontFamily: "DM Sans,sans-serif",
                whiteSpace: "nowrap",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                pointerEvents: "none",
              }}>
                {grad}
              </div>

              {/* Tooltip */}
              {(isHovered || (isSelected && !hoveredGrad)) && hasData && (
                <div style={{
                  position: "absolute",
                  bottom: size + 36,
                  left: "50%",
                  transform: x > 65 ? "translateX(-90%)" : x < 45 ? "translateX(-10%)" : "translateX(-50%)",
                  background: "rgba(10,15,30,0.97)",
                  border: `1px solid ${color}`,
                  borderRadius: 10,
                  padding: "10px 14px",
                  minWidth: 140,
                  zIndex: 30,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
                  pointerEvents: "none",
                }}>
                  <div style={{ fontSize:13, fontWeight:700, color:"#e8ecf8", marginBottom:8, fontFamily:"DM Sans,sans-serif" }}>
                    📍 {grad}
                  </div>
                  {[
                    { k:"high", label:"Dobra šansa", col:"#3ecf6e" },
                    { k:"mid",  label:"Granično",    col:"#e9b446" },
                    { k:"low",  label:"Rizično",     col:"#f05c5c" },
                  ].map(({ k, label, col }) => c[k] > 0 && (
                    <div key={k} style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
                      <div style={{ width:7, height:7, borderRadius:"50%", background:col, flexShrink:0 }}/>
                      <span style={{ fontSize:11, color:col, fontWeight:600, fontFamily:"DM Sans,sans-serif" }}>{c[k]}×</span>
                      <span style={{ fontSize:11, color:"#9ba8c0", fontFamily:"DM Sans,sans-serif" }}>{label}</span>
                    </div>
                  ))}
                  <div style={{ fontSize:10, color:"#4a5568", marginTop:6, borderTop:"1px solid #1e2440", paddingTop:6, fontFamily:"DM Sans,sans-serif" }}>
                    Ukupno {c.total} studija
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* CSS animacija */}
        <style>{`
          @keyframes pulse-ring {
            0%   { transform: scale(1);   opacity: 0.4; }
            50%  { transform: scale(1.3); opacity: 0.1; }
            100% { transform: scale(1);   opacity: 0.4; }
          }
        `}</style>
      </div>

      {/* Info panel ispod karte */}
      <div style={{ padding:"12px 16px", borderTop:"1px solid var(--border)" }}>
        {displayGrad && gradData[displayGrad] ? (
          <div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
              <div style={{ fontSize:14, fontWeight:700, color:"var(--txt)" }}>📍 {displayGrad}</div>
              {selectedGrad && (
                <button onClick={()=>onGradClick(selectedGrad)}
                  style={{ fontSize:11, color:"var(--muted)", background:"none", border:"1px solid var(--border)", borderRadius:6, padding:"2px 8px", cursor:"pointer" }}>
                  Poništi ×
                </button>
              )}
            </div>
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              {[
                { k:"high", label:"Dobra šansa", c:"var(--green)"  },
                { k:"mid",  label:"Granično",    c:"var(--gold)"   },
                { k:"low",  label:"Rizično",     c:"var(--red)"    },
              ].map(({ k, label, c }) => gradData[displayGrad][k] > 0 && (
                <div key={k} style={{ display:"flex", alignItems:"center", gap:5 }}>
                  <div style={{ width:8, height:8, borderRadius:"50%", background:c }}/>
                  <span style={{ fontSize:13, color:c, fontWeight:700 }}>{gradData[displayGrad][k]}</span>
                  <span style={{ fontSize:12, color:"var(--muted)" }}>{label}</span>
                </div>
              ))}
              <span style={{ fontSize:12, color:"var(--muted)", marginLeft:"auto" }}>
                Ukupno {gradData[displayGrad].total} studija
              </span>
            </div>
          </div>
        ) : (
          <div style={{ display:"flex", gap:16, flexWrap:"wrap", alignItems:"center" }}>
            <span style={{ fontSize:12, color:"var(--muted)" }}>Klikni na grad za detalje</span>
            {[
              { color:"#3ecf6e", label:"Dobra šansa" },
              { color:"#e9b446", label:"Granično"    },
              { color:"#f05c5c", label:"Rizično"     },
            ].map(({ color, label }) => (
              <div key={label} style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:color }}/>
                <span style={{ fontSize:11, color:"var(--muted)" }}>{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}