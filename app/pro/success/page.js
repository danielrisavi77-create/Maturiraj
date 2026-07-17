// Legacy checkout return page. Phase 0 intentionally does not claim success:
// this route cannot verify the old Stripe flow against the authenticated user.
'use client'

import { useRouter } from 'next/navigation'

export default function ProSuccessPage() {
  const router = useRouter()

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 30%, rgba(75,123,255,.1), transparent 50%), var(--bg)',
      padding: 24,
    }}>
      <div style={{
        width: '100%', maxWidth: 480, textAlign: 'center',
        background: 'linear-gradient(160deg, rgba(255,255,255,.05), rgba(255,255,255,.015))',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 32,
        boxShadow: '0 40px 100px rgba(0,0,0,.4)',
        padding: '48px 40px',
      }}>
        <div style={{ fontSize: 56, marginBottom: 16 }} aria-hidden="true">ℹ️</div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20,
          padding: '5px 14px', borderRadius: 999,
          background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)',
          fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          Nepotvrđen stari povratni tok
        </div>

        <h1 style={{
          fontFamily: 'var(--fh)', fontSize: 32, fontWeight: 900,
          letterSpacing: '-.025em', lineHeight: 1.1, marginBottom: 12,
        }}>
          Plaćanje nije potvrđeno
        </h1>

        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 32 }}>
          Ova stara povratna stranica ne može sigurno potvrditi Stripe transakciju ni tvoj pristup.
          Vrati se na planove ili početnu stranicu; ovdje se ništa ne mijenja automatski.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            onClick={() => router.push('/pro')}
            style={{
              width: '100%', padding: 14, borderRadius: 16, border: 'none',
              background: 'linear-gradient(135deg, var(--blue), var(--violet))',
              color: '#fff', fontSize: 15, fontWeight: 900,
              cursor: 'pointer', fontFamily: 'var(--fb)',
            }}
          >
            Pogledaj planove
          </button>
          <button
            onClick={() => router.push('/')}
            style={{
              width: '100%', padding: 14, borderRadius: 16,
              border: '1px solid var(--bdr)', background: 'transparent',
              color: 'var(--text)', fontSize: 14, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'var(--fb)',
            }}
          >
            Idi na početnu
          </button>
        </div>
      </div>
    </div>
  )
}
