'use client'

const TESTIMONIALS = [
  {init:"L", color:"#818cf8"},
  {init:"M", color:"#3ecf6e"},
  {init:"A", color:"#f87171"},
  {init:"L", color:"#fbbf24"},
  {init:"S", color:"#2dcfbe"},
  {init:"I", color:"#4b7bff"},
]

export default function Hero({ onPlan, onChat, onPrijemni, onKalkulator, onTermini }) {
  return (
    <section style={{position:"relative", overflow:"hidden", minHeight:"100vh", display:"flex", alignItems:"center"}}>

      {/* Orbs */}
      <div style={{position:"absolute", width:700, height:700, borderRadius:"50%", top:"-15%", left:"-8%", background:"radial-gradient(circle,rgba(75,123,255,.13),transparent 65%)", animation:"orb-a 22s ease-in-out infinite", pointerEvents:"none"}}/>
      <div style={{position:"absolute", width:600, height:600, borderRadius:"50%", bottom:"-12%", right:"-4%", background:"radial-gradient(circle,rgba(124,92,252,.09),transparent 65%)", animation:"orb-b 26s ease-in-out infinite", pointerEvents:"none"}}/>
      <div style={{position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(75,123,255,.06) 1px,transparent 1px)", backgroundSize:"48px 48px", zIndex:0}}/>

      <div style={{maxWidth:1080, margin:"0 auto", padding:"100px 44px 80px", position:"relative", zIndex:1, width:"100%"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center"}}>

          {/* Lijevo — tekst */}
          <div>
            {/* Badge */}
            <div style={{marginBottom:22, display:"flex", alignItems:"center", gap:8, flexWrap:"wrap"}}>
              <div style={{display:"inline-flex", alignItems:"center", gap:5, padding:"4px 10px", borderRadius:20, fontSize:11, fontWeight:600, letterSpacing:".04em", background:"rgba(233,180,70,.12)", color:"var(--gold)", border:"1px solid rgba(233,180,70,.25)"}}>
                <span style={{animation:"pulse 2s ease-in-out infinite"}}>●</span>
                Maturiraj.hr · AI-powered priprema
              </div>
              <div style={{display:"flex", alignItems:"center", gap:5, padding:"3px 10px", borderRadius:99, background:"rgba(62,207,110,.08)", border:"1px solid rgba(62,207,110,.2)"}}>
                <div style={{width:5, height:5, borderRadius:"50%", background:"var(--green)", animation:"pulse 2s ease-in-out infinite"}}/>
                <span style={{fontSize:11, fontWeight:600, color:"var(--green)"}}>aktivno danas</span>
              </div>
            </div>

            {/* Naslov */}
            <h1 style={{fontFamily:"var(--fh)", fontSize:"clamp(46px,6.2vw,86px)", fontWeight:900, lineHeight:.97, letterSpacing:"-.03em", marginBottom:22}}>
              {[
                {t:"Bez straha.",  grad:"linear-gradient(270deg,#4b7bff,#818cf8,#2dcfbe,#4b7bff)"},
                {t:"Bez brige.",   grad:"linear-gradient(270deg,#7c5cfc,#c084fc,#f87171,#7c5cfc)"},
                {t:"Maturiraj.hr", grad:"linear-gradient(270deg,#e9b446,#2dcfbe,#3ecf6e,#e9b446)"},
              ].map(({t, grad}) => (
                <span key={t} style={{display:"block", background:grad, backgroundSize:"300% 300%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", animation:"hero-text-shift 4s ease-in-out infinite"}}>{t}</span>
              ))}
            </h1>

            {/* Opis */}
            <p style={{fontSize:17, lineHeight:1.82, color:"var(--muted)", marginBottom:32, maxWidth:480}}>
              Besplatne skripte za sve predmete mature. Uz pretplatu — <strong style={{color:"var(--gold)"}}>Discere</strong> arhiva maturalnih zadataka, AI profesor i roditeljski uvid.
            </p>

            {/* Gumbi */}
            <div style={{display:"flex", gap:10, flexWrap:"wrap", marginBottom:14}}>
              <button onClick={() => window.location.href = '/skripte'} style={{padding:"13px 26px", fontSize:15, fontWeight:600, borderRadius:11, border:"none", background:"var(--gold)", color:"#160d00", cursor:"pointer", fontFamily:"var(--fb)"}}>
                📖 Besplatne skripte
              </button>
              <button onClick={onPlan} style={{padding:"13px 26px", fontSize:15, fontWeight:600, borderRadius:11, border:"none", background:"var(--blue)", color:"#fff", cursor:"pointer", fontFamily:"var(--fb)"}}>
                Pogledaj planove →
              </button>
            </div>

            {/* Trust strip */}
            <div style={{display:"flex", gap:16, flexWrap:"wrap", marginBottom:16}}>
              {["✓ Bez kartice za početak", "✓ Otkaži kad hoćeš", "✓ GDPR · Hrvatska"].map(t => (
                <div key={t} style={{fontSize:12, color:"var(--muted)", display:"flex", alignItems:"center", gap:4}}>{t}</div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{display:"flex", alignItems:"center", gap:12}}>
              <div style={{display:"flex"}}>
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} style={{width:28, height:28, borderRadius:"50%", background:`${t.color}20`, color:t.color, border:`1.5px solid ${t.color}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:900, marginLeft: i > 0 ? -8 : 0}}>{t.init}</div>
                ))}
                <div style={{width:28, height:28, borderRadius:"50%", background:"rgba(75,123,255,.15)", color:"var(--blue)", border:"1.5px solid rgba(75,123,255,.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:900, marginLeft:-8}}>+</div>
              </div>
              <div style={{fontSize:12, color:"var(--muted)"}}>
                <strong style={{color:"var(--text)"}}>247 učenika</strong> aktivno danas<br/>
                <span style={{fontSize:11}}>★★★★★ prosječna ocjena 4.9/5</span>
              </div>
            </div>

            {/* Quick links */}
            <div style={{display:"flex", gap:6, marginTop:18, flexWrap:"wrap"}}>
              {[
                {l:"🤖 AI Profesor",    a:() => window.location.href = '/ai-profesor'},
                {l:"🏛 Prijemni",       a:() => window.location.href = '/prijemni'},
                {l:"🎯 Kalkulator",     a:() => window.location.href = '/kalkulator'},
                {l:"📅 Termini 2026.",  a:() => window.location.href = '/termini'},
              ].map(({l, a}) => (
                <button key={l} onClick={a} style={{padding:"6px 14px", fontSize:12, borderRadius:99, border:"1px solid var(--bdr)", background:"rgba(255,255,255,.06)", color:"var(--text)", cursor:"pointer", fontFamily:"var(--fb)", fontWeight:600}}>{l}</button>
              ))}
            </div>
          </div>

          {/* Desno — preview kartice */}
          <div style={{position:"relative", height:420, display:"flex", alignItems:"center", justifyContent:"center"}}>

            {/* Kalkulator kartica */}
            <div style={{position:"absolute", top:0, left:0, right:40, background:"var(--s2)", border:"1px solid var(--bdr)", borderRadius:16, padding:"18px 20px", animation:"card-float 6s ease-in-out infinite"}}>
              <div style={{fontSize:11, color:"var(--muted)", marginBottom:10, fontWeight:600}}>🎯 Kalkulator bodova · live preview</div>
              <div style={{display:"flex", alignItems:"flex-end", gap:8, marginBottom:8}}>
                <div style={{fontFamily:"var(--fh)", fontSize:36, fontWeight:900, color:"var(--text)"}}>724</div>
                <div style={{fontSize:12, color:"var(--muted)", marginBottom:6}}> / 1000 bod</div>
              </div>
              {[
                {l:"Hrvatski jezik", v:78, c:"#f87171"},
                {l:"Matematika A",   v:65, c:"#818cf8"},
                {l:"Engleski jezik", v:82, c:"#c084fc"},
                {l:"Biologija",      v:71, c:"#34d399"},
              ].map(({l, v, c}) => (
                <div key={l} style={{display:"flex", alignItems:"center", gap:8, marginBottom:6}}>
                  <span style={{color:"var(--muted)", minWidth:90, fontSize:11}}>{l}</span>
                  <div style={{flex:1, height:4, borderRadius:99, background:"rgba(255,255,255,.06)"}}>
                    <div style={{width:`${v}%`, height:"100%", borderRadius:99, background:c, opacity:.8}}/>
                  </div>
                  <span style={{color:"var(--text)", fontWeight:700, fontSize:11, minWidth:28, textAlign:"right"}}>{v}%</span>
                </div>
              ))}
            </div>

            {/* AI Profesor kartica */}
            <div style={{position:"absolute", bottom:0, right:0, left:40, background:"var(--s2)", border:"1px solid var(--bdr)", borderRadius:16, padding:"18px 20px", animation:"card-float2 7s ease-in-out infinite"}}>
              <div style={{fontSize:11, color:"var(--muted)", marginBottom:10, fontWeight:600}}>🤖 AI Profesor · odgovor za 2s</div>
              <div style={{display:"flex", flexDirection:"column", gap:6}}>
                <div style={{alignSelf:"flex-end", background:"rgba(75,123,255,.15)", border:"1px solid rgba(75,123,255,.22)", borderRadius:"10px 10px 2px 10px", padding:"7px 10px", fontSize:12, maxWidth:"80%"}}>
                  Objasni mi derivaciju složene funkcije
                </div>
                <div style={{alignSelf:"flex-start", background:"var(--s1)", border:"1px solid var(--bdr)", borderRadius:"10px 10px 10px 2px", padding:"7px 10px", fontSize:12, maxWidth:"90%", color:"var(--muted)", lineHeight:1.5}}>
                  Koristimo <strong style={{color:"var(--text)"}}>pravilo lanca</strong>: (f∘g)′ = f′(g(x)) · g′(x). Na primjeru sin(x²)...
                </div>
              </div>
            </div>

            {/* Notify */}
            <div style={{position:"absolute", top:"42%", right:-10, background:"var(--s1)", border:"1px solid rgba(62,207,110,.25)", borderRadius:12, padding:"10px 14px", display:"flex", alignItems:"center", gap:10, boxShadow:"0 8px 32px rgba(0,0,0,.4)"}}>
              <span style={{fontSize:16}}>🎓</span>
              <div>
                <div style={{fontSize:11, fontWeight:700, color:"var(--green)"}}>Lucija M. upravo upisala FER</div>
                <div style={{fontSize:10, color:"var(--muted)"}}>Nakon 3 tjedna uz Maturiraj.hr · Split → Zagreb</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats traka */}
        <div style={{display:"flex", justifyContent:"center", paddingTop:48, marginTop:48, borderTop:"1px solid var(--bdr)"}}>
          {[
            {n:"24",        l:"predmeta mature",        ico:"📚"},
            {n:"100+",      l:"studija u kalkulatoru",  ico:"🎯"},
            {n:"2010–2026", l:"arhiva zadataka",        ico:"⭐"},
            {n:"100%",      l:"besplatne skripte",      ico:"✓"},
          ].map(({n, l, ico}, i) => (
            <div key={i} style={{padding:"0 36px", textAlign:"center", borderRight: i < 3 ? "1px solid var(--bdr)" : "none"}}>
              <div style={{fontSize:13, marginBottom:4, opacity:.6}}>{ico}</div>
              <div style={{fontFamily:"var(--fh)", fontSize:"clamp(22px,3vw,32px)", fontWeight:900, letterSpacing:"-.02em", marginBottom:3}}>{n}</div>
              <div style={{fontSize:12, color:"var(--muted)"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}