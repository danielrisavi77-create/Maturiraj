// app/plan/components/SavePlanModal.js
'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

/**
 * Modal koji se prikazuje kad neprijavljeni korisnik klikne "Koristi ovaj plan".
 * Nakon prijave/registracije automatski se poziva onSuccess() koji sprema plan.
 */
export default function SavePlanModal({ onSuccess, onClose, planType = 'free', pendingDraft = null }) {
  const supabase = createClient()
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  const [mode,     setMode]     = useState('choice')   // 'choice' | 'email'
  const [authMode, setAuthMode] = useState('register') // 'register' | 'login'
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [name,     setName]     = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState(null)

  const isPro = planType === 'pro'

  const handleGoogle = async () => {
    setLoading(true); setError(null)
    // Google OAuth — page.js restores maturiraj_pending_save + draft after redirect.
    try {
      localStorage.setItem('maturiraj_pending_save', '1')
      if (pendingDraft) {
        localStorage.setItem('maturiraj_pending_plan', JSON.stringify(pendingDraft))
      }
    } catch { /* ignore quota */ }
    const { error: e } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${appUrl}/auth/callback?redirect=/plan-ucenja` },
    })
    if (e) { setError('Google prijava nije uspjela.'); setLoading(false) }
  }

  const handleEmail = async () => {
    if (!email || !password) { setError('Upiši email i lozinku.'); return }
    setLoading(true); setError(null)
    try {
      if (authMode === 'register') {
        const { error: e } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: name } },
        })
        if (e) throw e
        // Nakon registracije — auto-login i spremi plan
        const { error: loginErr } = await supabase.auth.signInWithPassword({ email, password })
        if (loginErr) throw loginErr
      } else {
        const { error: e } = await supabase.auth.signInWithPassword({ email, password })
        if (e) throw e
      }
      await onSuccess()
    } catch (e) {
      const msg = e?.message || 'Greška.'
      setError(
        msg.includes('Invalid login')      ? 'Pogrešan email ili lozinka.' :
        msg.includes('already registered') ? 'Email već postoji — prijavi se.' :
        msg.includes('Password should be') ? 'Lozinka mora imati barem 6 znakova.' :
        msg
      )
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: 12,
    border: '1px solid rgba(255,255,255,.09)',
    background: 'rgba(255,255,255,.04)',
    color: 'var(--text)', fontSize: 13,
    fontFamily: 'var(--fb)', outline: 'none',
    transition: 'border-color .15s', boxSizing: 'border-box',
  }

  return (
    /* Backdrop */
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(7,9,15,.82)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn .2s ease',
      }}
    >
      <div style={{
        width: '100%', maxWidth: 420,
        background: 'linear-gradient(160deg, rgba(255,255,255,.05), rgba(255,255,255,.015))',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 28,
        boxShadow: '0 40px 100px rgba(0,0,0,.5)',
        backdropFilter: 'blur(24px)',
        overflow: 'hidden',
        animation: 'up .3s cubic-bezier(.16,1,.3,1)',
      }}>
        {/* Top accent bar */}
        <div style={{
          height: 3,
          background: isPro
            ? 'linear-gradient(90deg, var(--blue), var(--violet))'
            : 'linear-gradient(90deg, var(--gold), #f5d170)',
        }} />

        <div style={{ padding: '28px 28px 32px' }}>
          {/* Header */}
          <div style={{ marginBottom: 22 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '5px 12px', borderRadius: 999, marginBottom: 14,
              background: isPro ? 'rgba(75,123,255,.12)' : 'rgba(233,180,70,.1)',
              border: isPro ? '1px solid rgba(75,123,255,.24)' : '1px solid rgba(233,180,70,.22)',
              fontSize: 10, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
              color: isPro ? 'var(--blue)' : 'var(--gold)',
            }}>
              {isPro ? '✨ PRO plan' : '⭐ Besplatni plan'}
            </div>

            <div style={{ fontFamily: 'var(--fh)', fontSize: 24, fontWeight: 900, letterSpacing: '-.025em', marginBottom: 8, lineHeight: 1.1 }}>
              Spremi plan učenja
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>
              Prijavi se da spremiš plan. Spremanje zahtijeva Standard ili Pro plan.
            </div>
          </div>

          {/* Benefits */}
          <div style={{
            padding: '14px 16px', borderRadius: 16, marginBottom: 22,
            background: 'rgba(255,255,255,.025)',
            border: '1px solid rgba(255,255,255,.06)',
            display: 'flex', flexDirection: 'column', gap: 9,
          }}>
            {[
              '📅 Plan se sprema i čeka te kad se vratiš',
              '✅ Možeš označavati tjedne kao završene',
              isPro ? '✨ PRO adaptivni raspored aktivan' : '📊 Pratiti napredak prema maturi',
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 12, color: 'var(--muted)' }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{b.split(' ')[0]}</span>
                <span>{b.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>

          {/* ── Choice view ── */}
          {mode === 'choice' && (
            <>
              <button
                onClick={handleGoogle}
                disabled={loading}
                style={{
                  width: '100%', padding: '13px', borderRadius: 14, marginBottom: 10,
                  border: '1px solid rgba(255,255,255,.1)',
                  background: 'rgba(255,255,255,.05)',
                  color: 'var(--text)', fontSize: 14, fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--fb)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  transition: 'all .15s',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l6-6C34.5 6.2 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c3 0 5.8 1.1 7.9 3l6-6C34.5 6.2 29.5 4 24 4 16.3 4 9.7 8.5 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 44c5.2 0 10-1.9 13.7-5l-6.3-5.4C29.5 35.3 26.9 36 24 36c-5.2 0-9.6-3.4-11.2-8l-6.9 5.3C9.5 39.4 16.3 44 24 44z"/>
                  <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.6l6.3 5.4C41.2 35.3 44 30 44 24c0-1.3-.1-2.7-.4-4z"/>
                </svg>
                Nastavi s Googleom
              </button>

              <button
                onClick={() => setMode('email')}
                style={{
                  width: '100%', padding: '13px', borderRadius: 14,
                  border: '1px solid rgba(255,255,255,.08)',
                  background: 'transparent',
                  color: 'var(--muted)', fontSize: 13, fontWeight: 700,
                  cursor: 'pointer', fontFamily: 'var(--fb)',
                  transition: 'all .15s',
                }}
              >
                Nastavi s emailom
              </button>
            </>
          )}

          {/* ── Email view ── */}
          {mode === 'email' && (
            <>
              {/* Auth mode toggle */}
              <div style={{
                display: 'flex', gap: 3, padding: '4px',
                background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)',
                borderRadius: 12, marginBottom: 14,
              }}>
                {[['register','Novi račun'], ['login','Imam račun']].map(([m, lbl]) => (
                  <button key={m} onClick={() => { setAuthMode(m); setError(null) }}
                    style={{
                      flex: 1, padding: '8px', borderRadius: 9, border: 'none',
                      fontFamily: 'var(--fb)', fontSize: 12, fontWeight: 700, cursor: 'pointer',
                      transition: 'all .15s',
                      background: authMode === m ? 'rgba(75,123,255,.18)' : 'transparent',
                      color: authMode === m ? 'var(--text)' : 'var(--muted)',
                    }}
                  >{lbl}</button>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
                {authMode === 'register' && (
                  <input type="text" placeholder="Ime" value={name}
                    onChange={e => setName(e.target.value)} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
                  />
                )}
                <input type="email" placeholder="Email" value={email}
                  onChange={e => setEmail(e.target.value)} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
                />
                <input type="password" placeholder="Lozinka" value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleEmail()}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
                />
              </div>

              {error && (
                <div style={{
                  marginBottom: 10, padding: '9px 12px', borderRadius: 10,
                  background: 'rgba(248,113,113,.08)', border: '1px solid rgba(248,113,113,.18)',
                  fontSize: 12, color: '#f87171', lineHeight: 1.5,
                }}>{error}</div>
              )}

              <button onClick={handleEmail} disabled={loading} style={{
                width: '100%', padding: '13px', borderRadius: 14, border: 'none',
                background: loading ? 'rgba(75,123,255,.4)' : 'linear-gradient(135deg, var(--blue), var(--violet))',
                color: '#fff', fontSize: 13, fontWeight: 800,
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--fb)',
                boxShadow: loading ? 'none' : '0 6px 20px rgba(75,123,255,.28)',
                transition: 'all .15s', marginBottom: 10,
              }}>
                {loading
                  ? 'Sprema se...'
                  : authMode === 'register' ? 'Kreiraj račun i spremi plan →' : 'Prijavi se i spremi plan →'
                }
              </button>

              <button onClick={() => { setMode('choice'); setError(null) }}
                style={{
                  width: '100%', padding: '9px', borderRadius: 10, border: 'none',
                  background: 'transparent', color: 'var(--muted)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--fb)',
                }}
              >← Natrag</button>
            </>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 18, right: 18,
              width: 30, height: 30, borderRadius: 8,
              border: '1px solid rgba(255,255,255,.08)',
              background: 'rgba(255,255,255,.04)',
              color: 'var(--muted)', fontSize: 14, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'var(--fb)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >×</button>
        </div>
      </div>
    </div>
  )
}