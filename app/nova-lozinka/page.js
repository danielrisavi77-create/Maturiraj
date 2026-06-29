// app/nova-lozinka/page.js
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function NovaLozinkaPage() {
  const router   = useRouter()
  const supabase = createClient()

  const [password,  setPassword]  = useState('')
  const [password2, setPassword2] = useState('')
  const [loading,   setLoading]   = useState(false)
  const [success,   setSuccess]   = useState(false)
  const [error,     setError]     = useState(null)
  const [ready,     setReady]     = useState(false)

  // Supabase automatski parsira token iz URL hash fragmenta
  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') setReady(true)
    })
  }, [])

  const handleUpdate = async () => {
    if (!password)              { setError('Upiši novu lozinku.'); return }
    if (password.length < 6)    { setError('Lozinka mora imati barem 6 znakova.'); return }
    if (password !== password2) { setError('Lozinke se ne podudaraju.'); return }

    setLoading(true); setError(null)

    const { error: e } = await supabase.auth.updateUser({ password })

    if (e) {
      setError(e.message || 'Greška. Pokušaj ponovno ili zatraži novi link.')
    } else {
      setSuccess(true)
      setTimeout(() => router.push('/'), 2500)
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', padding: '12px 14px', borderRadius: 12,
    border: '1px solid rgba(255,255,255,.09)',
    background: 'rgba(255,255,255,.04)',
    color: 'var(--text)', fontSize: 14,
    fontFamily: 'var(--fb)', outline: 'none',
    transition: 'border-color .15s', boxSizing: 'border-box',
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
      background: 'radial-gradient(ellipse at 30% 0%, rgba(75,123,255,.12), transparent 30%), var(--bg)',
    }}>
      <div style={{
        width: '100%', maxWidth: 400,
        background: 'linear-gradient(160deg, rgba(255,255,255,.04), rgba(255,255,255,.012))',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 28, padding: '36px 32px',
        boxShadow: '0 32px 96px rgba(0,0,0,.3)',
        backdropFilter: 'blur(24px)',
      }}>
        <div onClick={() => router.push('/')} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          cursor: 'pointer', marginBottom: 28,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)', boxShadow: '0 0 12px var(--blue)' }} />
          <span style={{ fontFamily: 'var(--fh)', fontSize: 17, fontWeight: 900, letterSpacing: '-.03em' }}>
            Maturiraj.hr
          </span>
        </div>

        {success ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 900, marginBottom: 10 }}>
              Lozinka promijenjena!
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>
              Preusmjeravamo te na dashboard...
            </div>
          </div>
        ) : (
          <>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 24, fontWeight: 900, marginBottom: 8 }}>
              Nova lozinka
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 24 }}>
              Upiši novu lozinku za svoj račun.
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input
                type="password"
                placeholder="Nova lozinka (min. 6 znakova)"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
              />
              <input
                type="password"
                placeholder="Ponovi lozinku"
                value={password2}
                onChange={e => setPassword2(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleUpdate()}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
              />
            </div>

            {/* Password strength indicator */}
            {password.length > 0 && (
              <div style={{ marginTop: 8 }}>
                <div style={{ height: 3, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 99, transition: 'all .3s',
                    width: password.length < 6 ? '25%' : password.length < 10 ? '60%' : '100%',
                    background: password.length < 6 ? '#f87171' : password.length < 10 ? 'var(--gold)' : 'var(--green)',
                  }} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, marginTop: 4, color: 'var(--muted)' }}>
                  {password.length < 6 ? 'Preslaba' : password.length < 10 ? 'Solidna' : 'Jaka lozinka ✓'}
                </div>
              </div>
            )}

            {error && (
              <div style={{
                marginTop: 10, padding: '9px 12px', borderRadius: 10,
                background: 'rgba(248,113,113,.08)', border: '1px solid rgba(248,113,113,.18)',
                fontSize: 12, color: '#f87171',
              }}>{error}</div>
            )}

            <button
              onClick={handleUpdate}
              disabled={loading}
              style={{
                width: '100%', marginTop: 16, padding: '13px', borderRadius: 14, border: 'none',
                background: loading ? 'rgba(75,123,255,.4)' : 'linear-gradient(135deg, var(--blue), var(--violet))',
                color: '#fff', fontSize: 14, fontWeight: 800,
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--fb)',
                boxShadow: loading ? 'none' : '0 6px 20px rgba(75,123,255,.28)',
                transition: 'all .15s',
              }}
            >
              {loading ? 'Spremam...' : 'Postavi novu lozinku →'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}