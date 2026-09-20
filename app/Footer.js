'use client'

export default function Footer() {
  return (
    <footer style={{borderTop:"1px solid var(--bdr)", background:"var(--bg)", paddingTop:64}}>
      <div style={{maxWidth:1080, margin:"0 auto", padding:"0 44px"}}>

        {/* Top grid */}
        <div style={{display:"grid", gridTemplateColumns:"1.6fr 1fr 1fr 1fr", gap:40, marginBottom:44, alignItems:"start"}}>

          {/* Brand */}
          <div>
            <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:12}}>
              <div style={{width:7, height:7, borderRadius:"50%", background:"var(--blue)", boxShadow:"0 0 10px var(--blue)"}}/>
              <span style={{fontFamily:"var(--fh)", fontSize:20, fontWeight:900}}>Maturiraj.hr</span>
            </div>
            <p style={{color:"var(--muted)", fontSize:13, lineHeight:1.8, maxWidth:220, marginBottom:20}}>
              AI-powered priprema za državnu maturu i prijemne ispite. Hrvatska i BiH.
            </p>
            <div style={{display:"flex", gap:7, marginBottom:20}}>
              {[
                {ic:"📷", color:"#e1306c", url:"https://instagram.com/maturiraj.hr"},
                {ic:"🎵", color:"#fff",    url:"https://tiktok.com/@maturiraj.hr"},
                {ic:"👥", color:"#1877f2", url:"https://facebook.com/maturiraj.hr"},
              ].map(({ic, color, url}, i) => (
                <div key={i} onClick={() => window.open(url, '_blank')} style={{width:34, height:34, borderRadius:9, background:"var(--s2)", border:"1px solid var(--bdr)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, cursor:"pointer", transition:"all .15s"}}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color+"66"; e.currentTarget.style.background = color+"14" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.background = "var(--s2)" }}>
                  {ic}
                </div>
              ))}
            </div>
            <div style={{display:"flex", flexWrap:"wrap", gap:6}}>
              {["🇭🇷 Hrvatska", "🇧🇦 BiH", "🔒 GDPR"].map(b => (
                <div key={b} style={{padding:"3px 9px", borderRadius:99, background:"rgba(255,255,255,.04)", border:"1px solid var(--bdr)", fontSize:11, color:"var(--muted)"}}>{b}</div>
              ))}
            </div>
          </div>

          {/* Platforma */}
          <div>
            <div style={{fontSize:11, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", marginBottom:14}}>Platforma</div>
            {[
              {l:"📖 Skripte",     c:"var(--green)", url:"/skripte"},
              {l:"⭐ Discere",     c:"var(--gold)",  url:"/discere"},
              {l:"🤖 AI Profesor", c:"var(--blue)",  url:"/ai-profesor"},
              {l:"🏛 Prijemni",    c:"#fb923c",      url:"/prijemni"},
              {l:"🎯 Kalkulator",  c:"var(--teal)",  url:"/kalkulator"},
              {l:"📅 Termini",     c:"#a78bfa",      url:"/termini"},
              {l:"📐 Formule",     c:"var(--blue)",  url:"/formule"},
              {l:"✅ Checklist",   c:"var(--green)", url:"/checklist"},
              {l:"💎 Cijene",      c:"var(--gold)",  url:"/#cijene"},
            ].map(({l, c, url}) => (
              <div key={l} onClick={() => window.location.href=url} style={{fontSize:13, color:"var(--muted)", marginBottom:9, cursor:"pointer", transition:"color .14s", display:"flex", alignItems:"center", gap:6}}
                onMouseEnter={e => e.currentTarget.style.color = c}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>{l}</div>
            ))}
          </div>

          {/* Planovi */}
          <div>
            <div style={{fontSize:11, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", marginBottom:14}}>Planovi</div>
            {[
              {l:"Besplatno — Skripte",   sub:"uvijek besplatno",    c:"var(--green)"},
              {l:"Starter — 9,99 €/mj",  sub:"3 predmeta + Discere",c:"var(--blue)"},
              {l:"Pro — 19,99 €/mj",     sub:"sve + AI + roditelji", c:"var(--violet)"},
              {l:"Pro godišnje — ~120 €", sub:"pro_god · uštedi ~50% · naplata uskoro", c:"var(--gold)"},
            ].map(({l, sub, c}) => (
              <div key={l} onClick={() => window.location.href='/#cijene'} style={{marginBottom:10, cursor:"pointer", padding:"7px 10px", borderRadius:10, transition:"background .15s"}}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.03)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <div style={{fontSize:13, color:"var(--muted)", fontWeight:600, marginBottom:1, transition:"color .14s"}}
                  onMouseEnter={e => e.currentTarget.style.color = c}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>{l}</div>
                <div style={{fontSize:11, color:"var(--muted)", opacity:.55}}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Kompanija */}
          <div>
            <div style={{fontSize:11, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", marginBottom:14}}>Kompanija</div>
            {[
              {l:"O nama",             url:"/o-nama"},
              {l:"Blog",               url:"/blog"},
              {l:"Kontakt",            url:"mailto:kontakt@maturiraj.hr"},
              {l:"Uvjeti korištenja",  url:"/uvjeti"},
              {l:"Privatnost",         url:"/privatnost"},
              {l:"Kolačići",           url:"/kolacici"},
            ].map(({l, url}) => (
              <div key={l} onClick={() => window.location.href=url} style={{fontSize:13, color:"var(--muted)", marginBottom:9, cursor:"pointer", transition:"color .14s"}}
                onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>{l}</div>
            ))}
            <div style={{marginTop:16, padding:"10px 12px", borderRadius:10, background:"var(--s2)", border:"1px solid var(--bdr)"}}>
              <div style={{fontSize:10, color:"var(--muted)", fontWeight:600, textTransform:"uppercase", letterSpacing:".06em", marginBottom:4}}>Kontakt</div>
              <div style={{fontSize:12, color:"var(--text)", cursor:"pointer"}} onClick={() => window.location.href='mailto:kontakt@maturiraj.hr'}>kontakt@maturiraj.hr</div>
              <div style={{fontSize:11, color:"var(--muted)", marginTop:2}}>Odg. u roku 24h</div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{display:"flex", gap:0, marginBottom:28, borderRadius:14, background:"var(--s2)", border:"1px solid var(--bdr)", overflow:"hidden"}}>
          {[
            {ic:"📚", n:"24",       l:"predmeta"},
            {ic:"⭐", n:"2010–2026",l:"Discere arhiva"},
            {ic:"🎓", n:"92%",      l:"upisalo željeni faks"},
            {ic:"🤖", n:"24/7",     l:"AI Profesor"},
            {ic:"🇭🇷", n:"HR + BiH", l:"podrška"},
          ].map(({ic, n, l}, i, arr) => (
            <div key={l} style={{flex:1, padding:"14px 16px", textAlign:"center", borderRight:i<arr.length-1?"1px solid var(--bdr)":"none"}}>
              <div style={{fontSize:16, marginBottom:3}}>{ic}</div>
              <div style={{fontFamily:"var(--fh)", fontSize:14, fontWeight:800, marginBottom:1}}>{n}</div>
              <div style={{fontSize:10, color:"var(--muted)"}}>{l}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{height:1, background:"var(--bdr)", marginBottom:18}}/>

        {/* Bottom bar */}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12, paddingBottom:28}}>
          <div style={{display:"flex", alignItems:"center", gap:16, flexWrap:"wrap"}}>
            <div style={{fontSize:12, color:"var(--muted)"}}>© 2026 Maturiraj.hr · Made with ♥ in Croatia 🇭🇷</div>
            <div style={{display:"flex", alignItems:"center", gap:5, padding:"3px 9px", borderRadius:99, background:"rgba(75,123,255,.07)", border:"1px solid rgba(75,123,255,.15)"}}>
              <span style={{fontSize:11}}>🔒</span>
              <span style={{fontSize:11, color:"var(--blue)", fontWeight:600}}>GDPR · Stripe · Supabase</span>
            </div>
          </div>
          <div style={{display:"flex", gap:16, flexWrap:"wrap"}}>
            {[
              {l:"Uvjeti",      url:"/uvjeti"},
              {l:"Privatnost",  url:"/privatnost"},
              {l:"Kolačići",    url:"/kolacici"},
              {l:"kontakt@maturiraj.hr", url:"mailto:kontakt@maturiraj.hr"},
            ].map(({l, url}) => (
              <span key={l} onClick={() => window.location.href=url} style={{fontSize:12, color:"var(--muted)", cursor:"pointer", transition:"color .14s"}}
                onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>{l}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}