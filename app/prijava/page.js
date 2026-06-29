// app/prijava/page.js
'use client'
import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'


function PrijavaContent() {
  const router      = useRouter()
  const params      = useSearchParams()
  const redirect    = params.get('redirect') || '/'
  const supabase    = createClient()

  const [mode,     setMode]     = useState('login')   // 'login' | 'register'
  const [role,     setRole]     = useState('student') // 'student' | 'parent'
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [name,     setName]     = useState('')
  const [childEmail, setChildEmail] = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState(null)
  const [success,  setSuccess]  = useState(null)

  const handleEmailAuth = async () => {
    if (!email || !password) { setError('Upiši email i lozinku.'); return }
    if (role === 'parent' && mode === 'register' && !childEmail) { setError('Upiši email djeteta.'); return }
    setLoading(true); setError(null)
    try {
      if (mode === 'register') {
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin
        const { error: e } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name, role, ...(role === 'parent' ? { childEmail } : {}) },
            emailRedirectTo: `${appUrl}/auth/callback?redirect=${role === 'parent' ? '/roditelji' : '/'}`,
          },
        })
        if (e) throw e
        router.push(`/auth/confirm?email=${encodeURIComponent(email)}`)
      } else {
        const { data, error: e } = await supabase.auth.signInWithPassword({ email, password })
        if (e) throw e
        // Provjeri ulogu korisnika nakon login-a
        const userRole = data?.user?.user_metadata?.role
        if (userRole === 'parent') {
          router.push('/roditelji')
        } else {
          router.push(redirect)
        }
      }
    } catch (e) {
      const msg = e?.message || 'Greška. Pokušaj ponovno.'
      setError(
        msg.includes('Invalid login') ? 'Pogrešan email ili lozinka.' :
        msg.includes('already registered') ? 'Email je već registriran.' :
        msg.includes('Password should be') ? 'Lozinka mora imati barem 6 znakova.' :
        msg
      )
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setLoading(true); setError(null)
    const { error: e } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirect)}` },
    })
    if (e) { setError('Google prijava nije uspjela.'); setLoading(false) }
    // Redirect se dešava automatski kroz OAuth flow
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,.09)',
    background: 'rgba(255,255,255,.04)',
    color: 'var(--text)',
    fontSize: 14,
    fontFamily: 'var(--fb)',
    outline: 'none',
    transition: 'border-color .15s',
    boxSizing: 'border-box',
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 20px',
      background: 'radial-gradient(ellipse at 20% 0%, rgba(75,123,255,.14), transparent 30%), radial-gradient(ellipse at 80% 10%, rgba(124,92,252,.10), transparent 26%), var(--bg)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 420,
        background: 'linear-gradient(160deg, rgba(255,255,255,.04), rgba(255,255,255,.012))',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 28,
        boxShadow: '0 32px 96px rgba(0,0,0,.3)',
        backdropFilter: 'blur(24px)',
        padding: '36px 32px',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div onClick={() => router.push('/')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginBottom: 20,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)', boxShadow: '0 0 14px var(--blue)' }} />
            <span style={{ fontFamily: 'var(--fh)', fontSize: 18, fontWeight: 900, letterSpacing: '-.03em' }}>
              Maturiraj.hr
            </span>
          </div>
          <div style={{ fontFamily: 'var(--fh)', fontSize: 26, fontWeight: 900, letterSpacing: '-.025em', marginBottom: 6 }}>
            {mode === 'login' ? 'Dobrodošao nazad' : 'Kreiraj račun'}
          </div>
          <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
            {mode === 'login'
              ? 'Prijavi se da pristupiš svom planu učenja.'
              : 'Besplatan račun — plan kreiraš odmah.'}
          </div>
        </div>

        {/* Uloga toggle */}
        <div style={{
          display: 'flex', gap: 3, padding: '4px',
          background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)',
          borderRadius: 14, marginBottom: 14,
        }}>
          {[['student','Maturant'], ['parent','Roditelj']].map(([r, lbl]) => (
            <button key={r} onClick={() => setRole(r)}
              style={{
                flex: 1, padding: '9px', borderRadius: 10, border: 'none',
                fontFamily: 'var(--fb)', fontSize: 13, fontWeight: 700, cursor: 'pointer',
                transition: 'all .18s',
                background: role === r ? 'linear-gradient(135deg, rgba(75,123,255,.22), rgba(124,92,252,.16))' : 'transparent',
                color: role === r ? 'var(--text)' : 'var(--muted)',
              }}
            >{lbl}</button>
          ))}
        </div>

        {/* Mode toggle */}
        <div style={{
          display: 'flex', gap: 3, padding: '4px',
          background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)',
          borderRadius: 14, marginBottom: 24,
        }}>
          {[['login','Prijava'], ['register','Registracija']].map(([m, lbl]) => (
            <button key={m} onClick={() => { setMode(m); setError(null); setSuccess(null) }}
              style={{
                flex: 1, padding: '9px', borderRadius: 10, border: 'none',
                fontFamily: 'var(--fb)', fontSize: 13, fontWeight: 700, cursor: 'pointer',
                transition: 'all .18s',
                background: mode === m ? 'linear-gradient(135deg, rgba(75,123,255,.22), rgba(124,92,252,.16))' : 'transparent',
                color: mode === m ? 'var(--text)' : 'var(--muted)',
              }}
            >{lbl}</button>
          ))}
        </div>

        {/* Google button */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          style={{
            width: '100%', padding: '12px', borderRadius: 14,
            border: '1px solid rgba(255,255,255,.1)',
            background: 'rgba(255,255,255,.05)',
            color: 'var(--text)', fontSize: 14, fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--fb)', marginBottom: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            transition: 'all .15s',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l6-6C34.5 6.2 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4z"/>
            <path fill="#FF3D00" d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c3 0 5.8 1.1 7.9 3l6-6C34.5 6.2 29.5 4 24 4 16.3 4 9.7 8.5 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 10-1.9 13.7-5l-6.3-5.4C29.5 35.3 26.9 36 24 36c-5.2 0-9.6-3.4-11.2-8l-6.9 5.3C9.5 39.4 16.3 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.6l6.3 5.4C41.2 35.3 44 30 44 24c0-1.3-.1-2.7-.4-4z"/>
          </svg>
          Nastavi s Googleom
        </button>

        {/* Separator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.07)' }} />
          <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700 }}>ILI</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.07)' }} />
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {mode === 'register' && (
            <input
              type="text"
              placeholder="Ime i prezime"
              value={name}
              onChange={e => setName(e.target.value)}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
            />
          )}
          {mode === 'register' && role === 'parent' && (
            <input
              type="email"
              placeholder="Email djeteta za povezivanje"
              value={childEmail}
              onChange={e => setChildEmail(e.target.value)}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
            />
          )}
          <input
            type="email"
            placeholder="Email adresa"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
          />
          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleEmailAuth()}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
          />
        </div>

        {/* Error / Success */}
        {error && (
          <div style={{
            marginTop: 12, padding: '10px 14px', borderRadius: 12,
            background: 'rgba(248,113,113,.08)', border: '1px solid rgba(248,113,113,.2)',
            fontSize: 12, color: '#f87171', lineHeight: 1.5,
          }}>{error}</div>
        )}
        {success && (
          <div style={{
            marginTop: 12, padding: '10px 14px', borderRadius: 12,
            background: 'rgba(62,207,110,.08)', border: '1px solid rgba(62,207,110,.2)',
            fontSize: 12, color: 'var(--green)', lineHeight: 1.5,
          }}>{success}</div>
        )}

        {/* Submit */}
        <button
          onClick={handleEmailAuth}
          disabled={loading}
          style={{
            width: '100%', marginTop: 16, padding: '13px',
            borderRadius: 14, border: 'none',
            background: loading ? 'rgba(75,123,255,.4)' : 'linear-gradient(135deg, var(--blue), var(--violet))',
            color: '#fff', fontSize: 14, fontWeight: 800,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--fb)',
            boxShadow: loading ? 'none' : '0 8px 24px rgba(75,123,255,.3)',
            transition: 'all .15s',
          }}
        >
          {loading ? 'Učitavanje...' : mode === 'login' ? 'Prijavi se →' : 'Kreiraj račun →'}
        </button>

        <div style={{ marginTop: 18, textAlign: 'center', fontSize: 11, color: 'var(--muted)' }}>
          Registracijom prihvaćaš uvjete korištenja.
          {mode === 'login' && (
            <span> · <span
              onClick={() => setMode('register')}
              style={{ color: 'var(--blue)', cursor: 'pointer', fontWeight: 700 }}
            >Nemam račun</span></span>
          )}
        </div>

        {mode === 'login' && (
          <div style={{ marginTop: 12, textAlign: 'center' }}>
            <span
              onClick={() => router.push('/zaboravljena-lozinka')}
              style={{ fontSize: 12, color: 'var(--muted)', cursor: 'pointer', fontWeight: 600, transition: 'color .15s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              Zaboravljena lozinka?
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PrijavaPage() {
  return (<Suspense><PrijavaContent /></Suspense>)
}