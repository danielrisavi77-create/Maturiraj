// app/auth/confirm/page.js
'use client'
import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function AuthConfirmContent() {
  const router = useRouter()
  const params = useSearchParams()
  const email  = params.get('email') || ''

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
      background: 'radial-gradient(ellipse at 50% 20%, rgba(75,123,255,.12), transparent 40%), var(--bg)',
    }}>
      <div style={{
        width: '100%', maxWidth: 440, textAlign: 'center',
        background: 'linear-gradient(160deg, rgba(255,255,255,.04), rgba(255,255,255,.012))',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 28, padding: '48px 36px',
        boxShadow: '0 32px 96px rgba(0,0,0,.3)',
        backdropFilter: 'blur(24px)',
        animation: 'up .5s cubic-bezier(.16,1,.3,1)',
      }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>📬</div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20,
          padding: '5px 14px', borderRadius: 999,
          background: 'rgba(75,123,255,.1)', border: '1px solid rgba(75,123,255,.22)',
          fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
          color: 'var(--blue)',
        }}>
          Potvrdi email
        </div>

        <div style={{ fontFamily: 'var(--fh)', fontSize: 26, fontWeight: 900, letterSpacing: '-.025em', marginBottom: 12 }}>
          Provjeri inbox
        </div>

        <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 28 }}>
          Poslali smo ti link za potvrdu na{' '}
          {email && <strong style={{ color: 'var(--text)' }}>{email}</strong>}.
          {!email && 'tvoju email adresu.'}
          {' '}Klikni na link u emailu da aktiviraš račun.
        </div>

        {/* Steps */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28,
          padding: '16px', borderRadius: 16, textAlign: 'left',
          background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)',
        }}>
          {[
            { num: '1', text: 'Otvori email od Maturiraj.hr' },
            { num: '2', text: 'Klikni na "Potvrdi email adresu"' },
            { num: '3', text: 'Automatski ćeš biti prijavljen' },
          ].map(s => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                background: 'rgba(75,123,255,.15)', border: '1px solid rgba(75,123,255,.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 900, color: 'var(--blue)',
              }}>{s.num}</div>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>{s.text}</span>
            </div>
          ))}
        </div>

        <div style={{
          padding: '12px 14px', borderRadius: 12, marginBottom: 24,
          background: 'rgba(233,180,70,.06)', border: '1px solid rgba(233,180,70,.14)',
          fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, textAlign: 'left',
        }}>
          💡 Nema emaila? Provjeri <strong>Spam</strong> ili <strong>Promotions</strong> folder.
          Email ponekad stigne s malim zakašnjenjem.
        </div>

        <button onClick={() => router.push('/prijava')} style={{
          width: '100%', padding: '13px', borderRadius: 14, border: 'none',
          background: 'linear-gradient(135deg, var(--blue), var(--violet))',
          color: '#fff', fontSize: 14, fontWeight: 800,
          cursor: 'pointer', fontFamily: 'var(--fb)',
          boxShadow: '0 6px 20px rgba(75,123,255,.28)',
        }}>
          Već sam potvrdio → Prijavi se
        </button>
      </div>
    </div>
  )
}

export default function AuthConfirmPage() {
  return (
    <Suspense>
      <AuthConfirmContent />
    </Suspense>
  )
}