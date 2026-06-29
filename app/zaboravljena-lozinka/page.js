// app/zaboravljena-lozinka/page.js
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function ZaboravljenaLozinkaPage() {
  const router   = useRouter()
  const supabase = createClient()

  const [email,   setEmail]   = useState('')
  const [loading, setLoading] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [error,   setError]   = useState(null)

  const handleReset = async () => {
    if (!email) { setError('Upiši email adresu.'); return }
    setLoading(true); setError(null)

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin

    const { error: e } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${appUrl}/nova-lozinka`,
    })

    if (e) {
      setError('Greška. Provjeri email adresu i pokušaj ponovno.')
    } else {
      setSent(true)
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
        {/* Logo */}
        <div onClick={() => router.push('/')} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          cursor: 'pointer', marginBottom: 28,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)', boxShadow: '0 0 12px var(--blue)' }} />
          <span style={{ fontFamily: 'var(--fh)', fontSize: 17, fontWeight: 900, letterSpacing: '-.03em' }}>
            Maturiraj.hr
          </span>
        </div>

        {sent ? (
          /* ── Success state ── */
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📬</div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 900, marginBottom: 10 }}>
              Email je poslan!
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28 }}>
              Provjeri inbox za <strong style={{ color: 'var(--text)' }}>{email}</strong>.
              Link za reset lozinke vrijedi 60 minuta.
            </div>
            <div style={{
              padding: '12px 14px', borderRadius: 12, marginBottom: 24,
              background: 'rgba(75,123,255,.06)', border: '1px solid rgba(75,123,255,.14)',
              fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, textAlign: 'left',
            }}>
              💡 Ako ne vidiš email, provjeri <strong>Spam</strong> ili <strong>Promotions</strong> folder.
            </div>
            <button onClick={() => router.push('/prijava')} style={{
              width: '100%', padding: '12px', borderRadius: 14, border: 'none',
              background: 'linear-gradient(135deg, var(--blue), var(--violet))',
              color: '#fff', fontSize: 13, fontWeight: 800,
              cursor: 'pointer', fontFamily: 'var(--fb)',
            }}>
              ← Natrag na prijavu
            </button>
          </div>
        ) : (
          /* ── Form state ── */
          <>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 24, fontWeight: 900, marginBottom: 8 }}>
              Zaboravljena lozinka
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 24 }}>
              Upiši svoju email adresu i poslat ćemo ti link za reset lozinke.
            </div>

            <input
              type="email"
              placeholder="tvoj@email.hr"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleReset()}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(75,123,255,.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
            />

            {error && (
              <div style={{
                marginTop: 10, padding: '9px 12px', borderRadius: 10,
                background: 'rgba(248,113,113,.08)', border: '1px solid rgba(248,113,113,.18)',
                fontSize: 12, color: '#f87171',
              }}>{error}</div>
            )}

            <button
              onClick={handleReset}
              disabled={loading}
              style={{
                width: '100%', marginTop: 14, padding: '13px', borderRadius: 14, border: 'none',
                background: loading ? 'rgba(75,123,255,.4)' : 'linear-gradient(135deg, var(--blue), var(--violet))',
                color: '#fff', fontSize: 14, fontWeight: 800,
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--fb)',
                boxShadow: loading ? 'none' : '0 6px 20px rgba(75,123,255,.28)',
                transition: 'all .15s',
              }}
            >
              {loading ? 'Šaljem...' : 'Pošalji link za reset →'}
            </button>

            <button onClick={() => router.push('/prijava')} style={{
              width: '100%', marginTop: 10, padding: '10px', borderRadius: 12, border: 'none',
              background: 'transparent', color: 'var(--muted)',
              fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--fb)',
            }}>
              ← Natrag na prijavu
            </button>
          </>
        )}
      </div>
    </div>
  )
}