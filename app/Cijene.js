'use client'
import { useState } from 'react'

async function handleCheckout(plan) {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan })
  })

  const data = await response.json()

  if (data.url) {
    window.location.href = data.url
  } else if (data.error === 'Nisi prijavljen') {
    window.location.href = '/auth'
  } else {
    alert('Greška: ' + data.error)
  }
}

const planovi = [
  {
    id: "besplatno",
    name: "Besplatno",
    tag: null,
    mj: "0",
    god: "0",
    per: "/uvijek",
    accent: "var(--green)",
    accentD: "rgba(62,207,110,.08)",
    accentBdr: "rgba(62,207,110,.22)",
    cta: "Počni besplatno",
    tagline: "Za svakoga.",
    feats: [
      {ok:true,  t:"Skripte za sve predmete"},
      {ok:true,  t:"Viša i osnovna razina"},
      {ok:true,  t:"Dostupno odmah, bez prijave"},
      {ok:false, t:"Discere arhiva zadataka"},
      {ok:false, t:"AI Profesor"},
      {ok:false, t:"Roditeljski uvid"},
    ],
  },
  {
    id: "starter",
    name: "Starter",
    tag: null,
    mj: "9,99",
    god: "9,99", // monthly-only; no starter-god in checkout
    per: "/mj",
    accent: "var(--orange)",
    accentD: "rgba(255,107,43,.08)",
    accentBdr: "rgba(255,107,43,.28)",
    cta: "Počni sa Starterom",
    tagline: "Za jedan predmet.",
    feats: [
      {ok:true,  t:"Sve iz Besplatnog"},
      {ok:true,  t:"Discere — 3 predmeta po izboru"},
      {ok:true,  t:"AI objašnjenja uz zadatke"},
      {ok:true,  t:"Praćenje napretka"},
      {ok:false, t:"AI Profesor razgovorni chat"},
      {ok:false, t:"Roditeljski uvid"},
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tag: "Najpopularnije",
    mj: "19,99",
    god: "9,99", // pro_god ~9,99€/mj effective
    per: "/mj",
    accent: "var(--blue)",
    accentD: "var(--blue-d)",
    accentBdr: "rgba(75,123,255,.35)",
    hi: true,
    cta: "Odaberi Pro",
    tagline: "Kompletna priprema.",
    feats: [
      {ok:true, t:"Sve iz Startera"},
      {ok:true, t:"Discere — svi predmeti + prijemni"},
      {ok:true, t:"AI Profesor 24/7 — razgovorni chat"},
      {ok:true, t:"Roditeljski uvid"},
      {ok:true, t:"Personalizirani plan učenja"},
      {ok:true, t:"Prioritetna podrška"},
    ],
  },
]

export default function Cijene() {
  const [billing, setBilling] = useState("mj")

  return (
    <section id="cijene" style={{padding:"96px 24px", background:"var(--s1)", borderTop:"1px solid var(--bdr)"}}>
      <div style={{maxWidth:1000, margin:"0 auto"}}>

        {/* Naslov */}
        <div style={{textAlign:"center", marginBottom:48}}>
          <div style={{fontSize:12, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", marginBottom:12}}>
            Cijene
          </div>
          <h2 style={{fontFamily:"var(--fh)", fontSize:"clamp(28px,4vw,42px)", fontWeight:900, color:"var(--text)", marginBottom:12}}>
            Počni besplatno.<br/>
            <span style={{color:"var(--blue)"}}>Nadogradi kad si spreman.</span>
          </h2>
          <p style={{color:"var(--muted)", fontSize:15, maxWidth:440, margin:"0 auto 28px", lineHeight:1.78}}>
            Skripte su <strong style={{color:"var(--green)"}}>uvijek besplatne</strong> za sve. Discere i AI dolaze uz pretplatu — otkaži bilo kada.
          </p>

          {/* Toggle */}
          <div style={{display:"inline-flex", background:"var(--s2)", border:"1px solid var(--bdr)", borderRadius:12, padding:4}}>
            {[{id:"mj", l:"Mjesečno"}, {id:"god", l:"Godišnje · −50% · samo Pro"}].map(b => (
              <button key={b.id} onClick={() => setBilling(b.id)} style={{
                padding:"7px 18px", borderRadius:9, fontSize:13, fontWeight:600,
                cursor:"pointer", fontFamily:"var(--fb)", transition:"all .17s",
                background: billing === b.id ? "var(--s1)" : "transparent",
                color: billing === b.id ? "var(--text)" : "var(--muted)",
                border: billing === b.id ? "1px solid var(--bdr-hi)" : "1px solid transparent",
                boxShadow: billing === b.id ? "0 2px 8px rgba(0,0,0,.3)" : "none",
              }}>{b.l}</button>
            ))}
          </div>
          <div style={{marginTop:16,maxWidth:480,marginLeft:'auto',marginRight:'auto',padding:'10px 14px',borderRadius:12,background:'rgba(255,107,43,.08)',border:'1px solid rgba(255,107,43,.22)',fontSize:12,color:'var(--muted)',lineHeight:1.55}}>
            ⏳ Online naplata je privremeno ugašena. Cijene su informativne — uskoro dostupno.
          </div>
        </div>

        {/* Kartice */}
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:16}}>
          {planovi.map((p) => (
            <div key={p.id} style={{
              padding:"32px 28px", borderRadius:16,
              background: p.hi ? "linear-gradient(160deg,#0f1630,var(--bg))" : p.id === "starter" ? "linear-gradient(160deg,#1a0d04,var(--bg))" : "var(--s2)",
              border: `1px solid ${p.hi ? p.accentBdr : p.id === "starter" ? p.accentBdr : "var(--bdr)"}`,
              boxShadow: p.hi ? "0 0 0 1px rgba(75,123,255,.15), 0 28px 70px rgba(75,123,255,.12)" : p.id === "starter" ? "0 0 0 1px rgba(255,107,43,.12), 0 28px 70px rgba(255,107,43,.1)" : "none",
              position:"relative", display:"flex", flexDirection:"column", gap:20
            }}>

              {/* Najpopularnije badge */}
              {p.tag && (
                <div style={{
                  position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)",
                  background:"var(--blue)", color:"#fff", fontSize:11, fontWeight:700,
                  padding:"4px 14px", borderRadius:20, whiteSpace:"nowrap"
                }}>{p.tag}</div>
              )}

              {/* Naziv */}
              <div>
                <div style={{fontWeight:700, fontSize:16, color:"var(--text)", marginBottom:4}}>{p.name}</div>
                <div style={{fontSize:12, color:"var(--muted)"}}>{p.tagline}</div>
              </div>

              {/* Cijena */}
              <div>
                <span style={{fontFamily:"var(--fh)", fontSize:36, fontWeight:900, color:"var(--text)"}}>
                  {p.mj === "0" ? "Besplatno" : `${billing === "mj" ? p.mj : p.god} €`}
                </span>
                {p.mj !== "0" && (
                  <span style={{fontSize:13, color:"var(--muted)"}}>{p.per}</span>
                )}
              </div>

              {/* Features */}
              <div style={{display:"flex", flexDirection:"column", gap:10, flex:1}}>
                {p.feats.map(({ok, t}, i) => (
                  <div key={i} style={{display:"flex", alignItems:"center", gap:10, fontSize:13}}>
                    <span style={{color: ok ? p.accent : "var(--subtle)", fontSize:14, flexShrink:0}}>
                      {ok ? "✓" : "✕"}
                    </span>
                    <span style={{color: ok ? "var(--text)" : "var(--muted)"}}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Gumb */}
              <button
                onClick={() => {
                  if (p.id === 'besplatno') {
                    window.location.href = '/skripte'
                    return
                  }
                  if (billing === 'god' && p.id === 'starter') {
                    alert('Standard je samo mjesečno. Godišnji plan dostupan je za Pro (pro_god).')
                    return
                  }
                  // Fail-closed UI: send users to /pro (uskoro) instead of calling checkout.
                  window.location.href = `/pro?billing=${billing === 'god' ? 'god' : 'mj'}`
                }}
                style={{
                  width:"100%", padding:"12px", borderRadius:10, fontSize:14,
                  fontWeight:700, cursor:"pointer", fontFamily:"var(--fb)",
                  background: p.hi ? "linear-gradient(135deg,#4b7bff,#7c5cfc)" : p.id === "starter" ? "linear-gradient(135deg,#ff6b2b,#f5c842)" : "transparent",
                  color: p.hi ? "#fff" : p.id === "starter" ? "#1a0a00" : "var(--text)",
                  border: p.hi || p.id === "starter" ? "none" : "1px solid var(--bdr-hi)",
                  boxShadow: p.hi ? "0 0 0 1px rgba(75,123,255,.28), 0 8px 32px rgba(75,123,255,.3)" : p.id === "starter" ? "0 0 0 1px rgba(255,107,43,.28), 0 8px 32px rgba(255,107,43,.25)" : "none",
                  transition:"transform .15s, box-shadow .15s"
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow = p.hi ? '0 0 0 1px rgba(75,123,255,.45), 0 22px 64px rgba(75,123,255,.45)' : p.id === 'starter' ? '0 0 0 1px rgba(255,107,43,.5), 0 22px 64px rgba(255,107,43,.5)' : '0 4px 12px rgba(0,0,0,.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow = p.hi ? '0 0 0 1px rgba(75,123,255,.28), 0 8px 32px rgba(75,123,255,.3)' : p.id === 'starter' ? '0 0 0 1px rgba(255,107,43,.28), 0 8px 32px rgba(255,107,43,.25)' : 'none' }}
              >{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}