'use client'
import { useState } from 'react'

const LJETNI_2026 = [
  {datum:"1. lipnja",   dan:"pon", ispiti:["Češki, Mađarski, Srpski, Talijanski j. i k. — TEST"], tip:"manjinski"},
  {datum:"2. lipnja",   dan:"uto", ispiti:["Češki, Mađarski, Srpski, Talijanski j. i k. — ESEJ"], tip:"manjinski"},
  {datum:"3. lipnja",   dan:"sri", ispiti:["Biologija","Geografija"], tip:"izborni"},
  {datum:"8. lipnja",   dan:"pon", ispiti:["Španjolski jezik (V/N)","Latinski jezik (V/N)"], tip:"izborni"},
  {datum:"9. lipnja",   dan:"uto", ispiti:["Njemački jezik (V/N)","Filozofija"], tip:"izborni"},
  {datum:"10. lipnja",  dan:"sri", ispiti:["Talijanski jezik (V/N)","Likovna umjetnost"], tip:"izborni"},
  {datum:"11. lipnja",  dan:"čet", ispiti:["Francuski jezik (V/N)","Povijest"], tip:"izborni"},
  {datum:"12. lipnja",  dan:"pet", ispiti:["Glazbena umjetnost","Vjeronauk / Etika"], tip:"izborni"},
  {datum:"15. lipnja",  dan:"pon", ispiti:["🇭🇷 Hrvatski jezik — TEST i sažetak"], tip:"obvezni", hot:true},
  {datum:"16. lipnja",  dan:"uto", ispiti:["🇭🇷 Hrvatski jezik — ESEJ"], tip:"obvezni", hot:true},
  {datum:"17. lipnja",  dan:"sri", ispiti:["Politika i gospodarstvo","Informatika"], tip:"izborni"},
  {datum:"18. lipnja",  dan:"čet", ispiti:["Fizika","Logika"], tip:"izborni"},
  {datum:"19. lipnja",  dan:"pet", ispiti:["🌍 Engleski jezik (V/N)"], tip:"obvezni", hot:true},
  {datum:"23. lipnja",  dan:"uto", ispiti:["Psihologija","Informatika (2. termin)"], tip:"izborni"},
  {datum:"24. lipnja",  dan:"sri", ispiti:["Kemija","Sociologija"], tip:"izborni"},
  {datum:"25. lipnja",  dan:"čet", ispiti:["📐 Matematika — viša i osnovna razina"], tip:"obvezni", hot:true},
  {datum:"26. lipnja",  dan:"pet", ispiti:["Glazbena umjetnost (2. termin)","Vjeronauk / Etika (2. termin)"], tip:"izborni"},
]

const JESENSKI_2026 = [
  {datum:"19. kolovoza", dan:"sri", ispiti:["Informatika","Politika i gospodarstvo"], tip:"izborni"},
  {datum:"20. kolovoza", dan:"čet", ispiti:["🇭🇷 Hrvatski jezik — TEST i sažetak","Filozofija"], tip:"obvezni", hot:true},
  {datum:"21. kolovoza", dan:"pet", ispiti:["🇭🇷 Hrvatski jezik — ESEJ","Glazbena umjetnost"], tip:"obvezni", hot:true},
  {datum:"24. kolovoza", dan:"pon", ispiti:["Fizika","Geografija"], tip:"izborni"},
  {datum:"25. kolovoza", dan:"uto", ispiti:["Biologija","Povijest"], tip:"izborni"},
  {datum:"26. kolovoza", dan:"sri", ispiti:["📐 Matematika — viša i osnovna razina","Sociologija"], tip:"obvezni", hot:true},
  {datum:"27. kolovoza", dan:"čet", ispiti:["Kemija","Psihologija"], tip:"izborni"},
  {datum:"28. kolovoza", dan:"pet", ispiti:["🌍 Engleski jezik (V/N)","Logika"], tip:"obvezni", hot:true},
  {datum:"31. kolovoza", dan:"pon", ispiti:["Njemački jezik (V/N)","Vjeronauk / Etika"], tip:"izborni"},
  {datum:"1. rujna",     dan:"uto", ispiti:["Španjolski jezik (V/N)","Likovna umjetnost"], tip:"izborni"},
  {datum:"2. rujna",     dan:"sri", ispiti:["Talijanski jezik (V/N)","Grčki jezik"], tip:"izborni"},
  {datum:"3. rujna",     dan:"čet", ispiti:["Češki, Mađarski, Srpski — TEST","Francuski jezik (V/N)"], tip:"manjinski"},
  {datum:"4. rujna",     dan:"pet", ispiti:["Češki, Mađarski, Srpski — ESEJ","Latinski jezik (V/N)"], tip:"manjinski"},
]

const KLJUCNI_ROKOVI = [
  {datum:"1. prosinca 2025.",    opis:"Prijave ispita otvorene (ljetni rok)",                        ikona:"📝", tip:"prijava"},
  {datum:"15. veljače 2026.",    opis:"Zadnji dan prijave ispita za ljetni rok",                     ikona:"⚠️", tip:"rok"},
  {datum:"27. travnja 2026.",    opis:"Objava orijentacijskih lista studija (Postani student)",      ikona:"📊", tip:"rezultati"},
  {datum:"1. lipnja 2026.",      opis:"Početak ljetnog roka državne mature",                        ikona:"🚀", tip:"ispit"},
  {datum:"26. lipnja 2026.",     opis:"Kraj ljetnog roka državne mature",                           ikona:"✅", tip:"ispit"},
  {datum:"1. srpnja 2026.",      opis:"Zadnji dan registracije u Postani student (ljetni upis)",    ikona:"⚠️", tip:"rok"},
  {datum:"8. srpnja 2026.",      opis:"Objava privremenih rezultata ljetnog roka",                  ikona:"📊", tip:"rezultati"},
  {datum:"10. srpnja 2026.",     opis:"Rok za prigovore (ljetni rok)",                              ikona:"📩", tip:"prigovor"},
  {datum:"15. srpnja 2026.",     opis:"Objava konačnih rezultata ljetnog roka + rang-lista",        ikona:"🏆", tip:"rezultati"},
  {datum:"16. srpnja 2026.",     opis:"Visoka učilišta započinju s upisima (ljetni rok)",           ikona:"🎓", tip:"upis"},
  {datum:"17. srpnja 2026.",     opis:"Podjela svjedodžbi i potvrda — ljetni rok",                 ikona:"📜", tip:"svjedodzba"},
  {datum:"18.–29. srpnja 2026.", opis:"Prijave ispita za jesenski rok",                             ikona:"📝", tip:"prijava"},
  {datum:"19. kolovoza 2026.",   opis:"Početak jesenskog roka državne mature",                      ikona:"🚀", tip:"ispit"},
  {datum:"4. rujna 2026.",       opis:"Kraj jesenskog roka državne mature",                         ikona:"✅", tip:"ispit"},
  {datum:"9. rujna 2026.",       opis:"Objava privremenih rezultata jesenskog roka",                ikona:"📊", tip:"rezultati"},
  {datum:"16. rujna 2026.",      opis:"Objava konačnih rezultata jesenskog roka + rang-lista",      ikona:"🏆", tip:"rezultati"},
  {datum:"17. rujna 2026.",      opis:"Podjela svjedodžbi i potvrda — jesenski rok",               ikona:"📜", tip:"svjedodzba"},
]

export default function Termini() {
  const [tab, setTab] = useState("rokovi")
  const [filter, setFilter] = useState("sve")

  const tipColor = t => t === "obvezni" ? "var(--blue)" : t === "manjinski" ? "var(--violet)" : "var(--muted)"
  const rokColor = t => ({
    prijava:"var(--blue)", rok:"var(--red)", rezultati:"var(--gold)",
    upis:"var(--green)", ispit:"var(--teal)", prigovor:"var(--violet)", svjedodzba:"var(--gold)"
  })[t] || "var(--muted)"

  const today = new Date()
  const events = [
    {label:"Do ljetnog roka",   date:new Date("2026-06-01"), color:"var(--teal)"},
    {label:"Kraj prijave",      date:new Date("2026-02-15"), color:"var(--red)"},
    {label:"Do jesenskog roka", date:new Date("2026-08-19"), color:"#a78bfa"},
  ]

  return (
    <div style={{minHeight:"100vh", background:"var(--bg)"}}>

      <div style={{maxWidth:860, margin:"0 auto", padding:"100px 20px 80px"}}>

        {/* Header */}
        <div style={{textAlign:"center", marginBottom:48}}>
          <span style={{display:"inline-flex", alignItems:"center", gap:5, padding:"4px 10px", borderRadius:20, fontSize:11, fontWeight:600, background:"rgba(167,139,250,.12)", color:"#a78bfa", border:"1px solid rgba(167,139,250,.25)", marginBottom:16}}>
            📅 Državna matura 2025./2026.
          </span>
          <h1 style={{fontFamily:"var(--fh)", fontSize:"clamp(28px,4vw,48px)", fontWeight:900, marginBottom:14}}>
            Kalendar mature{" "}
            <span style={{background:"linear-gradient(120deg,#a78bfa,#c4b5fd)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>2026.</span>
          </h1>
          <p style={{color:"var(--muted)", fontSize:16, maxWidth:540, margin:"0 auto", lineHeight:1.78}}>
            Svi ispitni rokovi, ključni datumi prijava i objava rezultata na jednom mjestu. Izvor: NCVVO, AZVO.
          </p>
        </div>

        {/* Countdown kartice */}
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:40}}>
          {events.map(({label, date, color}) => {
            const diff = Math.ceil((date - today) / (1000*60*60*24))
            return (
              <div key={label} style={{background:"var(--s1)", border:"1px solid var(--bdr-hi)", borderRadius:14, padding:"18px 16px", textAlign:"center"}}>
                <div style={{fontFamily:"var(--fh)", fontSize:32, fontWeight:900, color, lineHeight:1}}>{diff > 0 ? diff : "✓"}</div>
                <div style={{fontSize:10, textTransform:"uppercase", letterSpacing:".1em", color:"var(--muted)", marginTop:5}}>{diff > 0 ? "dana" : "prošlo"}</div>
                <div style={{fontSize:12, fontWeight:600, color:"var(--text)", marginTop:4, lineHeight:1.3}}>{label}</div>
              </div>
            )
          })}
        </div>

        {/* Tabovi */}
        <div style={{display:"flex", gap:6, marginBottom:28, background:"var(--s1)", padding:4, borderRadius:12, border:"1px solid var(--bdr)"}}>
          {[
            {k:"rokovi",   l:"📋 Ključni rokovi"},
            {k:"ljetni",   l:"☀️ Ljetni rok (lipanj)"},
            {k:"jesenski", l:"🍂 Jesenski rok (kolovoz)"},
          ].map(({k, l}) => (
            <button key={k} onClick={() => { setTab(k); setFilter("sve") }} style={{
              flex:1, padding:"9px 12px", borderRadius:9, border:"none", cursor:"pointer",
              fontSize:13, fontWeight:600, transition:"all .15s", fontFamily:"var(--fb)",
              background: tab === k ? "var(--s2)" : "transparent",
              color: tab === k ? "var(--text)" : "var(--muted)",
              boxShadow: tab === k ? "0 1px 6px rgba(0,0,0,.25)" : "none"
            }}>{l}</button>
          ))}
        </div>

        {/* Ključni rokovi */}
        {tab === "rokovi" && (
          <div>
            <div style={{display:"flex", gap:6, flexWrap:"wrap", marginBottom:20}}>
              {[
                {k:"sve",      l:"Sve"},
                {k:"prijava",  l:"📝 Prijave"},
                {k:"ispit",    l:"✏️ Ispiti"},
                {k:"rezultati",l:"📊 Rezultati"},
                {k:"rok",      l:"⚠️ Rokovi"},
                {k:"upis",     l:"🎓 Upis"},
              ].map(({k, l}) => (
                <button key={k} onClick={() => setFilter(k)} style={{
                  padding:"5px 12px", borderRadius:99, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"var(--fb)", transition:"all .15s",
                  border:`1px solid ${filter === k ? rokColor(k) : "var(--bdr)"}`,
                  background: filter === k ? `${rokColor(k)}15` : "transparent",
                  color: filter === k ? rokColor(k) : "var(--muted)"
                }}>{l}</button>
              ))}
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:8}}>
              {KLJUCNI_ROKOVI.filter(r => filter === "sve" || r.tip === filter).map((r, i) => (
                <div key={i} style={{
                  display:"flex", alignItems:"center", gap:14, padding:"13px 16px",
                  background:"var(--s1)", border:"1px solid var(--bdr)",
                  borderLeft:`3px solid ${rokColor(r.tip)}`, borderRadius:"0 12px 12px 0",
                  transition:"background .15s"
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--s2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--s1)"}
                >
                  <span style={{fontSize:20, flexShrink:0}}>{r.ikona}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13, fontWeight:600, lineHeight:1.3}}>{r.opis}</div>
                  </div>
                  <div style={{fontSize:12, fontWeight:700, color:rokColor(r.tip), textAlign:"right", flexShrink:0, whiteSpace:"nowrap"}}>{r.datum}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ljetni / Jesenski rok */}
        {(tab === "ljetni" || tab === "jesenski") && (() => {
          const list = tab === "ljetni" ? LJETNI_2026 : JESENSKI_2026
          const display = filter === "sve" ? list : list.filter(i => i.tip === filter)
          return (
            <div>
              <div style={{display:"flex", gap:6, flexWrap:"wrap", marginBottom:20}}>
                {[
                  {k:"sve",      l:"Svi ispiti"},
                  {k:"obvezni",  l:"Obvezni"},
                  {k:"izborni",  l:"Izborni"},
                  {k:"manjinski",l:"Manjinski jezici"},
                ].map(({k, l}) => (
                  <button key={k} onClick={() => setFilter(k)} style={{
                    padding:"5px 14px", borderRadius:99, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"var(--fb)", transition:"all .15s",
                    border:`1px solid ${filter === k ? tipColor(k) : "var(--bdr)"}`,
                    background: filter === k ? `${tipColor(k)}15` : "transparent",
                    color: filter === k ? tipColor(k) : "var(--muted)"
                  }}>{l}</button>
                ))}
              </div>
              <div style={{display:"flex", flexDirection:"column", gap:6}}>
                {display.map((dan, i) => (
                  <div key={i} style={{
                    display:"grid", gridTemplateColumns:"120px 40px 1fr", gap:0,
                    alignItems:"stretch", borderRadius:12, overflow:"hidden",
                    border:"1px solid var(--bdr)", transition:"border-color .15s"
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = dan.hot ? "rgba(75,123,255,.4)" : "rgba(255,255,255,.12)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "var(--bdr)"}
                  >
                    <div style={{background: dan.hot ? "rgba(75,123,255,.08)" : "var(--s1)", padding:"13px 14px", borderRight:"1px solid var(--bdr)"}}>
                      <div style={{fontSize:13, fontWeight:700, color: dan.hot ? "var(--blue)" : "var(--text)"}}>{dan.datum}</div>
                      <div style={{fontSize:10, textTransform:"uppercase", letterSpacing:".08em", color:"var(--muted)", marginTop:2}}>{dan.dan}</div>
                    </div>
                    <div style={{background: dan.tip === "obvezni" ? "rgba(75,123,255,.18)" : dan.tip === "manjinski" ? "rgba(124,92,252,.12)" : "rgba(255,255,255,.03)", borderRight:"1px solid var(--bdr)", display:"flex", alignItems:"center", justifyContent:"center"}}>
                      <span style={{fontSize:8, textTransform:"uppercase", letterSpacing:".1em", color:tipColor(dan.tip), writingMode:"vertical-rl", transform:"rotate(180deg)", fontWeight:700}}>{dan.tip}</span>
                    </div>
                    <div style={{background:"var(--s1)", padding:"11px 16px", display:"flex", flexDirection:"column", justifyContent:"center", gap:4}}>
                      {dan.ispiti.map((isp, j) => (
                        <div key={j} style={{fontSize:13, fontWeight: dan.hot ? 600 : 400, color: dan.hot ? "var(--text)" : "var(--muted)"}}>{isp}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}

        {/* CTA */}
        <div style={{marginTop:48, padding:"28px", background:"var(--s1)", border:"1px solid rgba(167,139,250,.2)", borderRadius:16, display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexWrap:"wrap"}}>
          <div>
            <div style={{fontFamily:"var(--fh)", fontSize:17, fontWeight:700, marginBottom:5}}>Spremi se na vrijeme</div>
            <div style={{fontSize:13, color:"var(--muted)"}}>Provjeri koliko bodova imaš i koje studije možeš upisati.</div>
          </div>
          <button onClick={() => window.location.href = '/kalkulator'} style={{padding:"9px 19px", borderRadius:10, border:"none", background:"var(--blue)", color:"#fff", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"var(--fb)"}}>
            🎯 Otvori kalkulator →
          </button>
        </div>

        {/* Footer */}
        <div style={{marginTop:20, fontSize:11, color:"var(--muted)", textAlign:"center", lineHeight:1.7}}>
          Izvor: NCVVO — Kalendar i vremenik provedbe ispita 2025./2026. · AZVO / Postani student · srednja.hr<br/>
          Datumi su informativne prirode. Uvijek provjeri službeni NCVVO raspored.
        </div>
      </div>
    </div>
  )
}