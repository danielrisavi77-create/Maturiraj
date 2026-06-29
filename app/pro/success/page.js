// app/pro/success/page.js
'use client'
import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const FROM_MAP = {
  kalkulator:    '/kalkulator?restored=1',
  'plan-ucenja': '/plan-ucenja',
  discere:       '/discere',
  pocetna:       '/',
}

function ProSuccessContent() {
  const router   = useRouter()
  const params   = useSearchParams()

  const fromKey    = params.get('from') || ''
  const returnPath = FROM_MAP[fromKey] || '/'
  const returnLabel = fromKey === 'kalkulator' ? 'kalkulator' : fromKey || 'početna'

  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          clearInterval(interval)
          router.push(returnPath)
          return 0
        }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [returnPath])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 30%, rgba(75,123,255,.14), transparent 50%), var(--bg)',
      padding: '24px',
    }}>
      <div style={{
        width: '100%', maxWidth: 480, textAlign: 'center',
        background: 'linear-gradient(160deg, rgba(255,255,255,.05), rgba(255,255,255,.015))',
        border: '1px solid rgba(75,123,255,.25)',
        borderRadius: 32,
        boxShadow: '0 40px 100px rgba(0,0,0,.4)',
        padding: '48px 40px',
      }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20,
          padding: '5px 14px', borderRadius: 999,
          background: 'rgba(62,207,110,.1)', border: '1px solid rgba(62,207,110,.25)',
          fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
          color: 'var(--green)',
        }}>
          ✓ Plaćanje uspješno
        </div>

        <div style={{
          fontFamily: 'var(--fh)', fontSize: 32, fontWeight: 900,
          letterSpacing: '-.025em', lineHeight: 1.1, marginBottom: 12,
        }}>
          Dobrodošao u{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--blue), var(--violet))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Pro!</span>
        </div>

        <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 32 }}>
          Pristup je aktiviran. Odmah te vraćamo na <strong style={{ color: 'var(--txt)' }}>{returnLabel}</strong>{fromKey === 'kalkulator' ? ' s punim pristupom kalkulatoru.' : '.'}
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32,
          padding: '16px', borderRadius: 16,
          background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)',
          textAlign: 'left',
        }}>
          {[
            fromKey === 'kalkulator' && '📊 Kalkulator — puni pristup otključan',
            '✨ AI Profesor 24/7 aktiviran',
            '📅 Adaptivni plan učenja',
            '⭐ Discere arhiva — svi predmeti',
            '🎯 Simulacije ispita',
          ].filter(Boolean).map(f => (
            <div key={f} style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
              {f}
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push(returnPath)}
          style={{
            width: '100%', padding: '14px', borderRadius: 16, border: 'none',
            background: 'linear-gradient(135deg, var(--blue), var(--violet))',
            color: '#fff', fontSize: 15, fontWeight: 900,
            cursor: 'pointer', fontFamily: 'var(--fb)',
            boxShadow: '0 8px 28px rgba(75,123,255,.35)',
            marginBottom: 12,
          }}
        >
          {fromKey === 'kalkulator' ? '📊 Idi na kalkulator →' : 'Idi na dashboard →'}
        </button>

        <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>
          Automatski redirect za {countdown}s
        </div>
      </div>
    </div>
  )
}

export default function ProSuccessPage() {
  return (<Suspense><ProSuccessContent /></Suspense>)
}