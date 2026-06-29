'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ime, setIme] = useState('')
  const [loading, setLoading] = useState(false)
  const [poruka, setPoruka] = useState(null)
  const [greska, setGreska] = useState(null)

  const supabase = createClient()

  async function handleSubmit() {
    setLoading(true)
    setGreska(null)
    setPoruka(null)

    if (mode === 'register') {
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { data: { full_name: ime } }
      })
      if (error) setGreska(error.message)
      else setPoruka('Provjeri email i potvrdi registraciju!')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setGreska('Pogrešan email ili lozinka.')
      else window.location.href = '/dashboard'
    }
    setLoading(false)
  }

  async function handleOAuth(provider) {
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback?redirect=/dashboard` }
    })
  }

  const inputStyle = {
    width:"100%", padding:"12px 16px", borderRadius:11,
    border:"1px solid var(--bdr)", background:"rgba(255,255,255,.04)",
    color:"var(--text)", fontSize:14, fontFamily:"var(--fb)", outline:"none",
    transition:"border-color .2s"
  }

  const oauthProviders = [
    {
      id: "google",
      label: "Google",
      color: "#fff",
      bg: "rgba(255,255,255,.04)",
      border: "var(--bdr-hi)",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
          <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
          <path fill="#FBBC05" d="M4.5 10.48A4.8 4.8 0 0 1 4.5 7.5V5.43H1.83a8 8 0 0 0 0 7.14l2.67-2.09z"/>
          <path fill="#EA4335" d="M8.98 3.58c1.32 0 2.5.45 3.44 1.35l2.54-2.54A8 8 0 0 0 1.83 5.43L4.5 7.5a4.77 4.77 0 0 1 4.48-3.92z"/>
        </svg>
      )
    },
    {
      id: "github",
      label: "GitHub",
      color: "#fff",
      bg: "rgba(255,255,255,.04)",
      border: "var(--bdr-hi)",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z"/>
        </svg>
      )
    },
  ]

  return (
    <div style={{minHeight:"100vh", display:"flex", background:"var(--bg)", overflow:"hidden"}}>

      {/* Lijeva strana — dekoracija */}
      <div style={{flex:1, position:"relative", background:"linear-gradient(160deg,#090f23,#07091a)", borderRight:"1px solid var(--bdr)", display:"flex", flexDirection:"column"}}>
        <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:500, background:"radial-gradient(circle,rgba(75,123,255,.15),transparent 65%)", pointerEvents:"none"}}/>
        <div style={{position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(75,123,255,.06) 1px,transparent 1px)", backgroundSize:"32px 32px", pointerEvents:"none"}}/>

        <div style={{position:"relative", zIndex:1, padding:48, height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
          <div onClick={() => window.location.href='/'} style={{display:"flex", alignItems:"center", gap:8, cursor:"pointer"}}>
            <div style={{width:7, height:7, borderRadius:"50%", background:"var(--blue)", boxShadow:"0 0 10px var(--blue)"}}/>
            <span style={{fontFamily:"var(--fh)", fontSize:20, fontWeight:900}}>Maturiraj.hr</span>
          </div>

          <div>
            <h2 style={{fontFamily:"var(--fh)", fontSize:38, fontWeight:900, lineHeight:1.05, marginBottom:16, letterSpacing:"-.02em"}}>
              Tvoja matura.<br/>
              <span style={{background:"linear-gradient(135deg,var(--blue),var(--violet))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Tvoj uspjeh.</span>
            </h2>
            <p style={{color:"var(--muted)", fontSize:15, lineHeight:1.75, maxWidth:320, marginBottom:32}}>
              Pridruži se 2.400+ učenika koji se pripremaju s Maturiraj.hr.
            </p>
            <div style={{display:"flex", flexDirection:"column", gap:14}}>
              {[
                {ic:"📖", t:"Besplatne skripte za 24 predmeta"},
                {ic:"⭐", t:"Discere arhiva zadataka 2010–2026"},
                {ic:"🤖", t:"AI Profesor 24/7 na hrvatskom"},
                {ic:"🎯", t:"Kalkulator bodova i studija"},
              ].map(({ic, t}) => (
                <div key={t} style={{display:"flex", alignItems:"center", gap:12, fontSize:13, color:"var(--muted)"}}>
                  <div style={{width:32, height:32, borderRadius:9, background:"rgba(255,255,255,.04)", border:"1px solid var(--bdr)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, flexShrink:0}}>{ic}</div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div style={{fontSize:12, color:"var(--muted)"}}>© 2026 Maturiraj.hr · GDPR zaštita · Made in Croatia 🇭🇷</div>
        </div>
      </div>

      {/* Desna strana — forma */}
      <div style={{flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:"32px 24px", position:"relative"}}>
        <div style={{position:"fixed", top:"50%", left:"75%", transform:"translate(-50%,-50%)", width:500, height:500, background:"radial-gradient(circle,rgba(75,123,255,.05),transparent 65%)", pointerEvents:"none"}}/>

        <div style={{width:"100%", maxWidth:400, position:"relative", zIndex:1}}>

          {/* Logo */}
          <div onClick={() => window.location.href='/'} style={{display:"flex", alignItems:"center", gap:8, marginBottom:32, cursor:"pointer", justifyContent:"center"}}>
            <div style={{width:7, height:7, borderRadius:"50%", background:"var(--blue)", boxShadow:"0 0 10px var(--blue)"}}/>
            <span style={{fontFamily:"var(--fh)", fontSize:20, fontWeight:900, color:"var(--text)"}}>Maturiraj.hr</span>
          </div>

          {/* Toggle */}
          <div style={{display:"flex", background:"var(--s2)", border:"1px solid var(--bdr)", borderRadius:13, padding:4, marginBottom:28}}>
            {[{id:"login", l:"Prijava"}, {id:"register", l:"Registracija"}].map(b => (
              <button key={b.id} onClick={() => { setMode(b.id); setGreska(null); setPoruka(null) }} style={{
                flex:1, padding:"9px", borderRadius:10, fontSize:13, fontWeight:600,
                cursor:"pointer", fontFamily:"var(--fb)", transition:"all .17s",
                background: mode === b.id ? "var(--s1)" : "transparent",
                color: mode === b.id ? "var(--text)" : "var(--muted)",
                border: mode === b.id ? "1px solid var(--bdr-hi)" : "1px solid transparent",
                boxShadow: mode === b.id ? "0 2px 8px rgba(0,0,0,.3)" : "none",
              }}>{b.l}</button>
            ))}
          </div>

          {/* Naslov */}
          <div style={{marginBottom:24}}>
            <h1 style={{fontFamily:"var(--fh)", fontSize:26, fontWeight:900, marginBottom:6, color:"var(--text)"}}>
              {mode === 'login' ? 'Dobrodošao nazad 👋' : 'Stvori račun besplatno'}
            </h1>
            <p style={{fontSize:13, color:"var(--muted)", lineHeight:1.6}}>
              {mode === 'login' ? 'Prijavi se u svoj Maturiraj.hr račun.' : 'Bez kartice. Odmah pristupaš skriptama.'}
            </p>
          </div>

          {/* OAuth gumbi */}
          <div style={{display:"flex", flexDirection:"column", gap:10, marginBottom:20}}>
            {oauthProviders.map(p => (
              <button key={p.id} onClick={() => handleOAuth(p.id)} style={{
                width:"100%", padding:"12px 16px", borderRadius:11,
                border:`1px solid ${p.border}`, background:p.bg,
                color:p.color, fontSize:14, fontWeight:600, cursor:"pointer",
                fontFamily:"var(--fb)", display:"flex", alignItems:"center", justifyContent:"center", gap:10,
                transition:"all .2s"
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.1)"}
                onMouseLeave={e => e.currentTarget.style.background = p.bg}
              >
                {p.icon}
                Nastavi s {p.label}
              </button>
            ))}
          </div>

          {/* Separator */}
          <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:20}}>
            <div style={{flex:1, height:1, background:"var(--bdr)"}}/>
            <span style={{fontSize:11, color:"var(--muted)", fontWeight:600}}>ILI S EMAILOM</span>
            <div style={{flex:1, height:1, background:"var(--bdr)"}}/>
          </div>

          {/* Ime — samo registracija */}
          {mode === 'register' && (
            <div style={{marginBottom:14}}>
              <label style={{fontSize:12, fontWeight:600, color:"var(--muted)", display:"block", marginBottom:6}}>Ime i prezime</label>
              <input type="text" value={ime} onChange={e => setIme(e.target.value)} placeholder="Npr. Marko Horvat" style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--blue)"}
                onBlur={e => e.target.style.borderColor = "var(--bdr)"}
              />
            </div>
          )}

          {/* Email */}
          <div style={{marginBottom:14}}>
            <label style={{fontSize:12, fontWeight:600, color:"var(--muted)", display:"block", marginBottom:6}}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tvoj@email.com" style={inputStyle}
              onFocus={e => e.target.style.borderColor = "var(--blue)"}
              onBlur={e => e.target.style.borderColor = "var(--bdr)"}
            />
          </div>

          {/* Lozinka */}
          <div style={{marginBottom:8}}>
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:6}}>
              <label style={{fontSize:12, fontWeight:600, color:"var(--muted)"}}>Lozinka</label>
              {mode === 'login' && <span style={{fontSize:12, color:"var(--blue)", cursor:"pointer", fontWeight:600}}>Zaboravljena lozinka?</span>}
            </div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Minimalno 6 znakova" style={inputStyle}
              onFocus={e => e.target.style.borderColor = "var(--blue)"}
              onBlur={e => e.target.style.borderColor = "var(--bdr)"}
            />
          </div>

          {/* Greška */}
          {greska && (
            <div style={{padding:"10px 14px", borderRadius:10, background:"rgba(248,113,113,.08)", border:"1px solid rgba(248,113,113,.2)", fontSize:13, color:"var(--red)", marginBottom:16, marginTop:8}}>
              ⚠️ {greska}
            </div>
          )}

          {/* Poruka uspjeha */}
          {poruka && (
            <div style={{padding:"10px 14px", borderRadius:10, background:"rgba(62,207,110,.08)", border:"1px solid rgba(62,207,110,.2)", fontSize:13, color:"var(--green)", marginBottom:16, marginTop:8}}>
              ✓ {poruka}
            </div>
          )}

          {/* Submit */}
          <button onClick={handleSubmit} disabled={loading} style={{
            width:"100%", padding:"13px", borderRadius:11, border:"none", marginTop:16,
            background:"var(--blue)", color:"#fff", fontSize:15, fontWeight:700,
            cursor: loading ? "not-allowed" : "pointer", fontFamily:"var(--fb)",
            opacity: loading ? .7 : 1, transition:"all .2s",
            boxShadow:"0 8px 24px rgba(75,123,255,.25)"
          }}
            onMouseEnter={e => { if(!loading) e.currentTarget.style.background = "#3d6ef0" }}
            onMouseLeave={e => e.currentTarget.style.background = "var(--blue)"}
          >
            {loading ? "Učitavanje..." : mode === 'login' ? "Prijavi se →" : "Stvori račun →"}
          </button>

          {/* Trust badges */}
          <div style={{display:"flex", justifyContent:"center", gap:16, marginTop:20}}>
            {["🔒 GDPR", "⚡ Odmah", "✓ Besplatno"].map(b => (
              <span key={b} style={{fontSize:11, color:"var(--muted)", fontWeight:600}}>{b}</span>
            ))}
          </div>

          {/* Footer link */}
          <div style={{textAlign:"center", marginTop:20, fontSize:12, color:"var(--muted)"}}>
            {mode === 'login' ? "Nemaš račun? " : "Već imaš račun? "}
            <span onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setGreska(null); setPoruka(null) }} style={{color:"var(--blue)", cursor:"pointer", fontWeight:600}}>
              {mode === 'login' ? "Registriraj se" : "Prijavi se"}
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}