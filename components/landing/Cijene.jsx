"use client";
import { useState } from "react";
import { SUBJECTS } from "@/lib/data/subjects";

const BILLING_OPTIONS = [
  { id:"mj",  label:"Mjesečno",   badge:null,   desc:"naplata svaki mjesec" },
  { id:"3mj", label:"3 mjeseca",  badge:"−10%", desc:"jednokratna naplata" },
  { id:"6mj", label:"6 mjeseci",  badge:"−20%", desc:"jednokratna naplata" },
  { id:"god", label:"Godišnje",   badge:"−50%", desc:"jednokratna naplata" },
];

const PLANS = [
  {
    id:"free", name:"Besplatno", tag:null,
    prices:{ mj:"0", "3mj":"0", "6mj":"0", god:"0" },
    totals:{ mj:null, "3mj":null, "6mj":null, god:null },
    per:"zauvijek",
    accent:"var(--green)", accentD:"var(--green-d)", accentBdr:"rgba(62,207,110,.22)",
    cta:"Otvori skripte →", ctaCls:"bg",
    tagline:"Nema registracije.",
    feats:[
      {ok:true,  t:`Skripte za svih ${SUBJECTS.length} predmeta`},
      {ok:true,  t:"Viša i osnovna razina"},
      {ok:true,  t:"Dostupno odmah, bez prijave"},
      {ok:false, t:"Discere arhiva zadataka"},
      {ok:false, t:"AI Profesor"},
      {ok:false, t:"Roditeljski uvid"},
    ],
  },
  {
    id:"starter", name:"Starter", tag:null,
    prices:{ mj:"9,99", "3mj":"8,99", "6mj":"7,99", god:"6,99" },
    totals:{ mj:null, "3mj":"26,97", "6mj":"47,94", god:"83,88" },
    per:"/mj",
    accent:"var(--orange)", accentD:"rgba(255,107,43,.08)", accentBdr:"rgba(255,107,43,.22)",
    cta:"Počni s Starterom", ctaCls:"bs",
    tagline:"Za jedan predmet.",
    feats:[
      {ok:true,  t:"Sve iz Besplatnog"},
      {ok:true,  t:"Discere — 3 predmeta po izboru"},
      {ok:true,  t:"AI objašnjenja uz zadatke"},
      {ok:true,  t:"Praćenje napretka"},
      {ok:false, t:"AI Profesor razgovorni chat"},
      {ok:false, t:"Roditeljski uvid"},
    ],
  },
  {
    id:"pro", name:"Pro", tag:"Najpopularnije",
    prices:{ mj:"19,99", "3mj":"17,99", "6mj":"15,99", god:"10,00" },
    totals:{ mj:null, "3mj":"53,97", "6mj":"95,94", god:"120,00" },
    per:"/mj",
    hi:true,
    accent:"var(--blue)", accentD:"var(--blue-d)", accentBdr:"rgba(75,123,255,.35)",
    cta:"Odaberi Pro", ctaCls:"bp",
    tagline:"Kompletna priprema.",
    feats:[
      {ok:true, t:"Sve iz Startera"},
      {ok:true, t:"Discere — svi predmeti + prijemni"},
      {ok:true, t:"AI Profesor 24/7 — razgovorni chat"},
      {ok:true, t:"Roditeljski uvid"},
      {ok:true, t:"Personalizirani plan učenja (AI + adaptivni)"},
      {ok:true, t:"Prioritetna podrška"},
    ],
  },
];

export default function Cijene({ onSkripte, onPlan }) {
  // Default "mj": mjesečne cijene imaju checkout (starter+pro). Godišnja/3mj/6mj
  // Starter nema Stripe price ID → ne defaultati na necupljivu cijenu.
  // TODO(billing #6): dodaj price ID-eve za 3mj/6mj/starter-god ili ih ukloni iz UI-a.
  const [billing, setBilling] = useState("mj");

  const currentOption = BILLING_OPTIONS.find(o => o.id === billing);

  return (
    <section id="cijene" className="sec" style={{background:"var(--s1)",borderTop:"1px solid var(--bdr)",borderBottom:"1px solid var(--bdr)",overflow:"hidden"}}>
      <div className="wrap">

        {/* Header */}
        <div style={{textAlign:"center",marginBottom:48}}>
          <div className="eye" style={{marginBottom:12}}>Cijene</div>
          <h2 className="d2" style={{marginBottom:12}}>
            Počni besplatno.<br/>
            <span className="g-blue">Nadogradi kad si spreman.</span>
          </h2>
          <p style={{color:"var(--muted)",fontSize:15,maxWidth:440,margin:"0 auto 28px",lineHeight:1.78}}>
            Skripte su <strong style={{color:"var(--green)"}}>uvijek besplatne</strong> za sve. Discere i AI dolaze uz pretplatu — otkaži bilo kada.
          </p>

          {/* Billing toggle */}
          <div className="bill-toggle">
            {BILLING_OPTIONS.map(opt => (
              <button key={opt.id} onClick={() => setBilling(opt.id)}
                className={`bill-opt${billing===opt.id ? " on" : ""}`}>
                {opt.label}
                {opt.badge && (
                  <span style={{padding:"2px 6px",borderRadius:99,background:"linear-gradient(135deg,var(--orange),#f5c842)",color:"#1a0a00",fontSize:9,fontWeight:800,letterSpacing:".03em",boxShadow:"0 0 10px rgba(255,107,43,.3)"}}>
                    {opt.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Billing opis */}
          {billing !== "mj" && (
            <div style={{marginTop:10,fontSize:12,color:"var(--muted)"}}>
              💡 {currentOption.desc} — bez automatskog obnavljanja
            </div>
          )}
        </div>

        {/* Cards */}
        <div className="pgrid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,maxWidth:900,margin:"0 auto 48px"}}>
          {PLANS.map(p => {
            const price = p.prices[billing];
            const total = p.totals[billing];
            const fn = p.id === "free" ? onSkripte : onPlan;

            return (
              <div key={p.id} className={`price-card${p.hi ? " hi" : ""}${p.id === "starter" ? " std" : ""}`}
                style={p.hi || p.id === "starter" ? undefined : {
                  "--card-accent": p.accent,
                  "--card-accent-bdr": p.accentBdr,
                }}>

                {/* Tag */}
                {p.tag && (
                  <div style={{position:"absolute",top:20,right:20,padding:"4px 10px",borderRadius:99,background:"linear-gradient(135deg,#4b7bff,#7c5cfc)",fontSize:10,fontWeight:700,letterSpacing:".04em",color:"#fff",zIndex:1}}>
                    {p.tag}
                  </div>
                )}

                <div style={{position:"relative",zIndex:1,flex:1,display:"flex",flexDirection:"column"}}>

                  {/* Naziv */}
                  <div style={{marginBottom:20}}>
                    <div style={{fontFamily:"var(--fh)",fontSize:20,fontWeight:900,marginBottom:3}}>{p.name}</div>
                    <div style={{fontSize:12,color:"var(--muted)"}}>{p.tagline}</div>
                  </div>

                  {/* Cijena */}
                  <div style={{marginBottom:24,paddingBottom:24,borderBottom:"1px solid var(--bdr)"}}>
                    <div style={{display:"flex",alignItems:"baseline",gap:4}}>
                      <span style={{fontFamily:"var(--fh)",fontSize:44,fontWeight:900,lineHeight:1,
                        color:p.id==="free" ? "var(--green)" : p.hi ? "var(--blue)" : p.id==="starter" ? "var(--orange)" : "var(--text)"}}>
                        {price}€
                      </span>
                      {p.id !== "free" && (
                        <span style={{fontSize:13,color:"var(--muted)"}}>{p.per}</span>
                      )}
                    </div>

                    {/* Ukupno i opis naplate */}
                    {p.id !== "free" && (
                      <div style={{marginTop:6,display:"flex",flexDirection:"column",gap:3}}>
                        {total && (
                          <div style={{fontSize:12,color:"var(--muted)"}}>
                            Ukupno: <strong style={{color:"var(--text)"}}>{total}€</strong>
                            {billing === "god" && p.id === "pro" && (
                              <span style={{marginLeft:6,color:"var(--green)",fontWeight:700}}>← 120€ godišnje</span>
                            )}
                          </div>
                        )}
                        <div style={{fontSize:11,color:"var(--muted)",opacity:.7}}>
                          {currentOption.desc}
                          {billing !== "mj" && " · bez automatskog obnavljanja"}
                        </div>
                        {billing !== "mj" && (
                          <div style={{fontSize:11,color:"var(--muted)",opacity:.6}}>
                            Umjesto{" "}
                            <span style={{textDecoration:"line-through"}}>
                              {(parseFloat(p.prices.mj.replace(",",".")) * (billing==="3mj" ? 3 : billing==="6mj" ? 6 : 12)).toFixed(2).replace(".",",")}€
                            </span>
                            {" "}po punoj cijeni
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <button className={`btn btn-md ${p.ctaCls}`} onClick={fn}
                    style={{width:"100%",justifyContent:"center",marginBottom:22,fontSize:14}}>
                    {p.cta}
                  </button>

                  {/* Features */}
                  <div style={{display:"flex",flexDirection:"column",gap:9,flex:1}}>
                    {p.feats.map((f, j) => (
                      <div key={j} className={`feat-check ${f.ok ? "ok" : "off"}`}>
                        <span className="feat-check-icon" style={{
                          background:f.ok ? `${p.accent}20` : "rgba(255,255,255,.04)",
                          border:`1px solid ${f.ok ? p.accent+"40" : "rgba(255,255,255,.06)"}`,
                          color:f.ok ? p.accent : "rgba(255,255,255,.2)"}}>
                          {f.ok ? "✓" : "—"}
                        </span>
                        <span>{f.t}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee strip */}
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:11,marginBottom:28}}>
            {[
              {ic:"🔒", t:"Sigurno plaćanje",  d:"Stripe · SSL enkripcija · GDPR"},
              {ic:"↩",  t:"Otkaži bilo kada",  d:"Bez ugovora, bez skrivenih naknada"},
              {ic:"⚡", t:"Pristup odmah",      d:"Od prvog trenutka, 24/7"},
            ].map((g, i) => (
              <div key={i} className="guarantee-item">
                <span style={{fontSize:20,flexShrink:0}}>{g.ic}</span>
                <div>
                  <div style={{fontWeight:700,fontSize:13}}>{g.t}</div>
                  <div style={{fontSize:12,color:"var(--muted)",marginTop:2}}>{g.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Discere callout */}
          <div className="upgrade-banner" style={{background:"var(--orange-d)",borderColor:"rgba(255,107,43,.22)"}}>
            <span style={{fontSize:22}}>⭐</span>
            <div style={{flex:1,minWidth:200}}>
              <div style={{fontWeight:700,fontSize:14,color:"var(--orange)",marginBottom:2}}>
                Discere uključen u svim plaćenim planovima
              </div>
              <div style={{fontSize:12,color:"var(--muted)"}}>
                Arhiva svih zadataka s državnih matura 2010.–2026. · svi predmeti · sve razine · riješeni odgovori + zasebna aplikacija na discere.app
              </div>
            </div>
            <button className="btn bo btn-sm" onClick={onPlan} style={{flexShrink:0}}>
              Pogledaj planove →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}