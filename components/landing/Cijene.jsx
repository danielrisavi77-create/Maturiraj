"use client";
import { useState } from "react";
import { SUBJECTS } from "@/lib/data/subjects";
import {
  CHECKOUT_UI_LIVE,
  CHECKOUT_UNAVAILABLE_COPY,
} from "@/lib/billing/checkoutPlans";

// Align with /api/checkout allowlist: starter | pro | pro_god.
// 3mj / 6mj / Starter-god are NOT purchasable — do not offer them.
const BILLING_OPTIONS = [
  { id:"mj",  label:"Mjesečno", badge:null,   desc:"naplata svaki mjesec" },
  { id:"god", label:"Godišnje", badge:"−50%", desc:"godišnja pretplata · samo Pro (pro_god)" },
];

const PLANS = [
  {
    id:"free", name:"Besplatno", tag:null,
    prices:{ mj:"0", god:"0" },
    totals:{ mj:null, god:null },
    per:"zauvijek",
    accent:"var(--green)", accentD:"var(--green-d)", accentBdr:"rgba(62,207,110,.22)",
    cta:"Otvori skripte →", ctaCls:"bg",
    tagline:"Nema registracije.",
    feats:[
      {ok:true,  t:`Skripte za svih ${SUBJECTS.length} predmeta`},
      {ok:true,  t:"Viša i osnovna razina"},
      {ok:true,  t:"Dostupno odmah, bez prijave"},
      {ok:true,  t:"Discere ispiti s timerom (uz prijavu)"},
      {ok:false, t:"Pregled odgovora i obrazloženja"},
      {ok:false, t:"AI Profesor"},
      {ok:false, t:"Roditeljski uvid"},
    ],
  },
  {
    id:"starter", name:"Standard", tag:null,
    prices:{ mj:"9,99", god:"9,99" },
    totals:{ mj:null, god:null },
    per:"/mj",
    accent:"var(--orange)", accentD:"rgba(255,107,43,.08)", accentBdr:"rgba(255,107,43,.22)",
    ctaLive:"Počni sa Standardom",
    ctaSoon:"Standard · uskoro",
    ctaCls:"bs",
    tagline:"Za jedan predmet.",
    monthlyOnly:true,
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
    prices:{ mj:"19,99", god:"9,99" },
    totals:{ mj:null, god:"119,88" },
    per:"/mj",
    hi:true,
    accent:"var(--blue)", accentD:"var(--blue-d)", accentBdr:"rgba(75,123,255,.35)",
    ctaLive:"Odaberi Pro",
    ctaSoon:"Pro · uskoro",
    ctaCls:"bp",
    tagline:"Kompletna priprema.",
    feats:[
      {ok:true, t:"Sve iz Standarda"},
      {ok:true, t:"Discere — svi predmeti + prijemni"},
      {ok:true, t:"AI Profesor 24/7 — razgovorni chat"},
      {ok:true, t:"Roditeljski uvid"},
      {ok:true, t:"Personalizirani plan učenja (AI + adaptivni)"},
      {ok:true, t:"Prioritetna podrška"},
    ],
  },
];

export default function Cijene({ onSkripte, onPlan }) {
  const [billing, setBilling] = useState("mj");
  const currentOption = BILLING_OPTIONS.find(o => o.id === billing);

  return (
    <section id="cijene" className="sec" style={{background:"var(--s1)",borderTop:"1px solid var(--bdr)",borderBottom:"1px solid var(--bdr)",overflow:"hidden"}}>
      <div className="wrap">

        <div style={{textAlign:"center",marginBottom:48}}>
          <div className="eye" style={{marginBottom:12}}>Cijene</div>
          <h2 className="d2" style={{marginBottom:12}}>
            Počni besplatno.<br/>
            <span className="g-blue">Nadogradi kad si spreman.</span>
          </h2>
          <p style={{color:"var(--muted)",fontSize:15,maxWidth:440,margin:"0 auto 28px",lineHeight:1.78}}>
            Skripte su <strong style={{color:"var(--green)"}}>uvijek besplatne</strong> za sve, a Discere ispiti s timerom besplatni su uz prijavu. Razrada odgovora i AI dolaze uz Standard — otkaži bilo kada.
          </p>

          {!CHECKOUT_UI_LIVE && (
            <div role="status" style={{
              maxWidth:520,margin:"0 auto 20px",padding:"12px 16px",borderRadius:14,
              background:"rgba(255,107,43,.08)",border:"1px solid rgba(255,107,43,.22)",
              fontSize:13,color:"var(--muted)",lineHeight:1.6,
            }}>
              ⏳ {CHECKOUT_UNAVAILABLE_COPY}
            </div>
          )}

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

          {billing !== "mj" && (
            <div style={{marginTop:10,fontSize:12,color:"var(--muted)"}}>
              {currentOption.desc}
            </div>
          )}
        </div>

        <div className="pgrid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,maxWidth:900,margin:"0 auto 48px"}}>
          {PLANS.map(p => {
            const price = p.prices[billing];
            const total = p.totals[billing];
            const ctaLabel = p.id === "free"
              ? p.cta
              : (CHECKOUT_UI_LIVE ? p.ctaLive : p.ctaSoon);
            const click = p.id === "free"
              ? onSkripte
              : () => onPlan?.(p.monthlyOnly ? "mj" : billing);

            return (
              <div key={p.id} className={`price-card${p.hi ? " hi" : ""}${p.id === "starter" ? " std" : ""}`}
                style={p.hi || p.id === "starter" ? undefined : {
                  "--card-accent": p.accent,
                  "--card-accent-bdr": p.accentBdr,
                }}>

                {p.tag && (
                  <div style={{position:"absolute",top:20,right:20,padding:"4px 10px",borderRadius:99,background:"linear-gradient(135deg,#4b7bff,#7c5cfc)",fontSize:10,fontWeight:700,letterSpacing:".04em",color:"#fff",zIndex:1}}>
                    {p.tag}
                  </div>
                )}

                <div style={{position:"relative",zIndex:1,flex:1,display:"flex",flexDirection:"column"}}>
                  <div style={{marginBottom:20}}>
                    <div style={{fontFamily:"var(--fh)",fontSize:20,fontWeight:900,marginBottom:3}}>{p.name}</div>
                    <div style={{fontSize:12,color:"var(--muted)"}}>{p.tagline}</div>
                  </div>

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

                    {p.id !== "free" && (
                      <div style={{marginTop:6,display:"flex",flexDirection:"column",gap:3}}>
                        {p.monthlyOnly && billing === "god" && (
                          <div style={{fontSize:12,color:"var(--orange)"}}>
                            Standard je samo mjesečno (nema starter-god u checkoutu)
                          </div>
                        )}
                        {total && (
                          <div style={{fontSize:12,color:"var(--muted)"}}>
                            Ukupno: <strong style={{color:"var(--text)"}}>{total}€</strong>
                            {billing === "god" && p.id === "pro" && (
                              <span style={{marginLeft:6,color:"var(--green)",fontWeight:700}}>← Pro godišnje</span>
                            )}
                          </div>
                        )}
                        <div style={{fontSize:11,color:"var(--muted)",opacity:.7}}>
                          {p.monthlyOnly ? "naplata svaki mjesec" : currentOption.desc}
                        </div>
                      </div>
                    )}
                  </div>

                  <button className={`btn btn-md ${p.ctaCls}`} onClick={click}
                    style={{width:"100%",justifyContent:"center",marginBottom:22,fontSize:14,
                      opacity: p.id !== "free" && !CHECKOUT_UI_LIVE ? 0.85 : 1}}>
                    {ctaLabel}
                  </button>

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

        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:11,marginBottom:28}}>
            {[
              {ic:"🔒", t:"Sigurno plaćanje",  d: CHECKOUT_UI_LIVE ? "Stripe · SSL enkripcija · GDPR" : "Stripe spreman · naplata uskoro"},
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

          <div className="upgrade-banner" style={{background:"var(--orange-d)",borderColor:"rgba(255,107,43,.22)"}}>
            <span style={{fontSize:22}}>⭐</span>
            <div style={{flex:1,minWidth:200}}>
              <div style={{fontWeight:700,fontSize:14,color:"var(--orange)",marginBottom:2}}>
                Discere ispiti s timerom besplatni su za sve prijavljene
              </div>
              <div style={{fontSize:12,color:"var(--muted)"}}>
                Pregled odgovora, obrazloženja i analiza po temama dolaze uz Standard · arhiva svih zadataka s državnih matura 2010.–2026. · zasebna aplikacija na discere.app
              </div>
            </div>
            <button className="btn bo btn-sm" onClick={() => onPlan?.(billing)} style={{flexShrink:0}}>
              Pogledaj planove →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
