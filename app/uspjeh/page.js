'use client'
import { useEffect, useState } from 'react'

export default function Uspjeh() {
  const [brojac, setBrojac] = useState(5)
  const [plan, setPlan] = useState(null)

  useEffect(() => {
    const params    = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id')
    if (!sessionId) return

    // Direct Stripe → Supabase sync — don't wait for webhook.
    // This ensures the subscription is active before the redirect fires.
    fetch('/api/billing/refresh', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ session_id: sessionId }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.tier) setPlan(data.tier)
      })
      .catch(() => {
        // Fallback: read plan from the lighter /api/session endpoint
        fetch(`/api/session?session_id=${sessionId}`)
          .then(r => r.json())
          .then(data => setPlan(data.plan))
          .catch(() => {})
      })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBrojac(b => {
        if (b <= 1) {
          clearInterval(interval)
          window.location.href = '/discere'
          return 0
        }
        return b - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const sadrzaj = {
    starter: {
      naslov: "Standard plan aktiviran!",
      opis: "Imaš pristup Discere arhivi za 3 predmeta po izboru.",
      boja: "var(--orange)",
      bojaSjena: "rgba(255,107,43,.08)",
      bojaBorder: "rgba(255,107,43,.2)",
      ikona: "⭐",
      stavke: [
        {ic:"⭐", t:"Discere arhiva — 3 predmeta po izboru"},
        {ic:"✅", t:"AI objašnjenja uz zadatke"},
        {ic:"📊", t:"Praćenje napretka"},
        {ic:"📖", t:"Sve besplatne skripte"},
      ],
      ctaTekst: "Odaberi predmete u Discere →",
      ctaBoja: "var(--orange)",
      ctaColor: "#1a0a00",
    },
    pro: {
      naslov: "Pro plan aktiviran!",
      opis: "Imaš pristup svim funkcijama — Discere, AI Profesor, Dashboard.",
      boja: "var(--blue)",
      bojaSjena: "rgba(75,123,255,.08)",
      bojaBorder: "rgba(75,123,255,.2)",
      ikona: "🚀",
      stavke: [
        {ic:"⭐", t:"Discere arhiva — svi predmeti + prijemni"},
        {ic:"🤖", t:"AI Profesor 24/7 na hrvatskom"},
        {ic:"📊", t:"Roditeljski dashboard"},
        {ic:"🎯", t:"Simulacija mature i statistike"},
        {ic:"📅", t:"Personalizirani plan učenja"},
        {ic:"⚡", t:"Prioritetna podrška"},
      ],
      ctaTekst: "Počni s Discereom →",
      ctaBoja: "var(--blue)",
      ctaColor: "#fff",
    },
    pro_god: {
      naslov: "Pro Godišnji aktiviran!",
      opis: "Imaš pristup svim funkcijama uz uštedu od 25%.",
      boja: "var(--blue)",
      bojaSjena: "rgba(75,123,255,.08)",
      bojaBorder: "rgba(75,123,255,.2)",
      ikona: "🏆",
      stavke: [
        {ic:"⭐", t:"Discere arhiva — svi predmeti + prijemni"},
        {ic:"🤖", t:"AI Profesor 24/7 na hrvatskom"},
        {ic:"📊", t:"Roditeljski dashboard"},
        {ic:"🎯", t:"Simulacija mature i statistike"},
        {ic:"📅", t:"Personalizirani plan učenja"},
        {ic:"💰", t:"Uštedio si 25% godišnjom pretplatom"},
      ],
      ctaTekst: "Počni s Discereom →",
      ctaBoja: "var(--blue)",
      ctaColor: "#fff",
    },
  }

  const aktivni = sadrzaj[plan] || sadrzaj.pro

  return (
    <div style={{minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"var(--bg)", padding:"24px"}}>

      {/* Pozadinski sjaj */}
      <div style={{position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, background:`radial-gradient(circle,${aktivni.bojaSjena},transparent 65%)`, pointerEvents:"none"}}/>

      <div style={{width:"100%", maxWidth:480, textAlign:"center", position:"relative", zIndex:1}}>

        {/* Ikona */}
        <div style={{width:80, height:80, borderRadius:"50%", background:aktivni.bojaSjena, border:`1px solid ${aktivni.bojaBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:36, margin:"0 auto 28px", boxShadow:`0 0 40px ${aktivni.bojaSjena}`}}>
          {aktivni.ikona}
        </div>

        {/* Naslov */}
        <h1 style={{fontFamily:"var(--fh)", fontSize:"clamp(28px,4vw,42px)", fontWeight:900, marginBottom:12, color:"var(--text)"}}>
          {aktivni.naslov}
        </h1>
        <p style={{color:"var(--muted)", fontSize:16, lineHeight:1.75, maxWidth:360, margin:"0 auto 32px"}}>
          {aktivni.opis}
        </p>

        {/* Što dobivaš */}
        <div style={{background:"var(--s1)", border:`1px solid ${aktivni.bojaBorder}`, borderRadius:16, padding:"24px 28px", marginBottom:32, textAlign:"left"}}>
          <div style={{fontSize:12, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:aktivni.boja, marginBottom:16}}>Što sada imaš</div>
          {aktivni.stavke.map(({ic, t}) => (
            <div key={t} style={{display:"flex", alignItems:"center", gap:12, marginBottom:12, fontSize:14, color:"var(--text)"}}>
              <span style={{fontSize:18}}>{ic}</span>{t}
            </div>
          ))}
        </div>

        {/* Gumbi */}
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          <button onClick={() => window.location.href = '/discere'} style={{
            width:"100%", padding:"13px", borderRadius:11, border:"none",
            background: aktivni.ctaBoja, color: aktivni.ctaColor,
            fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"var(--fb)"
          }}>
            {aktivni.ctaTekst}
          </button>
          <button onClick={() => window.location.href = '/'} style={{
            width:"100%", padding:"13px", borderRadius:11,
            border:"1px solid var(--bdr)", background:"transparent",
            color:"var(--text)", fontSize:14, fontWeight:600,
            cursor:"pointer", fontFamily:"var(--fb)"
          }}>
            Idi na početnu
          </button>
        </div>

        {/* Brojač */}
        <div style={{marginTop:20, fontSize:12, color:"var(--muted)"}}>
          Automatsko preusmjeravanje za <strong style={{color:"var(--text)"}}>{brojac}s</strong>
        </div>

      </div>
    </div>
  )
}