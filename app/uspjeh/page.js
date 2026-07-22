'use client'

import { useEffect, useState } from 'react'
import { resolveFrom } from '@/lib/billing/fromMap'

const ACTIVE_SUBSCRIPTION_STATUSES = new Set(['active', 'trialing'])
const CONFIRMED_PLANS = new Set(['starter', 'pro'])

const PLAN_CONTENT = {
  starter: {
    title: 'Standard plan je aktiviran!',
    description: 'Pretplata i pristup Standard funkcijama sigurno su potvrđeni.',
    color: 'var(--orange)',
    glow: 'rgba(255,107,43,.08)',
    border: 'rgba(255,107,43,.2)',
    icon: '⭐',
    items: [
      'Discere arhiva — 3 predmeta po izboru',
      'AI objašnjenja uz zadatke',
      'Praćenje napretka',
      'Sve besplatne skripte',
    ],
  },
  pro: {
    title: 'Pro plan je aktiviran!',
    description: 'Pretplata i pristup Pro funkcijama sigurno su potvrđeni.',
    color: 'var(--blue)',
    glow: 'rgba(75,123,255,.08)',
    border: 'rgba(75,123,255,.2)',
    icon: '🚀',
    items: [
      'Discere arhiva — svi predmeti i prijemni',
      'AI Profesor 24/7 na hrvatskom',
      'Roditeljski dashboard',
      'Simulacije mature i statistike',
      'Personalizirani plan učenja',
    ],
  },
}

const NEUTRAL_CONTENT = {
  checking: {
    title: 'Provjeravamo plaćanje',
    description: 'Pričekaj trenutak dok sigurno provjerimo Stripe transakciju i tvoj pristup.',
    icon: '…',
  },
  missing: {
    title: 'Nema potvrde plaćanja',
    description: 'Ova stranica nema Stripe session ID pa plan nije aktiviran niti potvrđen.',
    icon: 'ℹ️',
  },
  pending: {
    title: 'Plaćanje još nije potvrđeno',
    description: 'Transakcija postoji, ali pretplata još nema aktivan status. Pristup nije promijenjen.',
    icon: '⏳',
  },
  error: {
    title: 'Potvrda trenutačno nije uspjela',
    description: 'Nismo mogli sigurno potvrditi transakciju. Pristup nije promijenjen; pokušaj ponovno.',
    icon: '⚠️',
  },
}

export default function Uspjeh() {
  const [verification, setVerification] = useState({ state: 'checking', plan: null })
  const [attempt, setAttempt] = useState(0)
  const [countdown, setCountdown] = useState(5)

  // Odredište nakon kupnje: "from" prenesen kroz checkout (npr. kalkulator) ili /discere
  // kao default. Prije se uvijek išlo hardkodirano na /discere pa je /pro obećanje
  // "automatski se vraćaš natrag na {from}" bilo lažno. Lazy init (bez efekta) — čita se
  // jednom iz URL-a; ne renderira se prije async verifikacije pa nema hydration mismatcha.
  const [nextDest] = useState(() => {
    if (typeof window === 'undefined') return { path: '/discere', label: 'Discere' }
    const from = new URLSearchParams(window.location.search).get('from')
    const info = resolveFrom(from, { path: '/discere', label: 'Discere' })
    return { path: info.path, label: info.label }
  })

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id')
    const controller = new AbortController()

    async function verifyCheckout() {
      if (!sessionId) {
        setVerification({ state: 'missing', plan: null })
        return
      }

      try {
        const response = await fetch('/api/billing/refresh', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_id: sessionId }),
          signal: controller.signal,
        })
        const data = await response.json().catch(() => ({}))

        if (!response.ok) {
          throw new Error(data.error || 'Checkout verification failed')
        }

        if (!ACTIVE_SUBSCRIPTION_STATUSES.has(data.status) || !CONFIRMED_PLANS.has(data.tier)) {
          setVerification({ state: 'pending', plan: null })
          return
        }

        setVerification({ state: 'verified', plan: data.tier })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setVerification({ state: 'error', plan: null })
        }
      }
    }

    verifyCheckout()
    return () => controller.abort()
  }, [attempt])

  const isVerified = verification.state === 'verified'

  useEffect(() => {
    if (!isVerified) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setCountdown(current => {
        if (current <= 1) {
          window.clearInterval(interval)
          window.location.href = nextDest.path
          return 0
        }
        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(interval)
  }, [isVerified, nextDest.path])

  const content = isVerified
    ? PLAN_CONTENT[verification.plan]
    : (NEUTRAL_CONTENT[verification.state] || NEUTRAL_CONTENT.error)

  const color = isVerified ? content.color : 'var(--muted)'
  const glow = isVerified ? content.glow : 'rgba(255,255,255,.035)'
  const border = isVerified ? content.border : 'var(--bdr)'

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: 24 }}>
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: `radial-gradient(circle,${glow},transparent 65%)`, pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: 480, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: glow, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto 28px', boxShadow: `0 0 40px ${glow}` }}>
          {content.icon}
        </div>

        <h1 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, marginBottom: 12, color: 'var(--text)' }}>
          {content.title}
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.75, maxWidth: 390, margin: '0 auto 32px' }}>
          {content.description}
        </p>

        {isVerified && (
          <div style={{ background: 'var(--s1)', border: `1px solid ${border}`, borderRadius: 16, padding: '24px 28px', marginBottom: 32, textAlign: 'left' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color, marginBottom: 16 }}>
              Potvrđeni pristup
            </div>
            {content.items.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, fontSize: 14, color: 'var(--text)' }}>
                <span aria-hidden="true">✓</span>{item}
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {isVerified ? (
            <button onClick={() => { window.location.href = nextDest.path }} style={{ width: '100%', padding: 13, borderRadius: 11, border: 'none', background: content.color, color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' }}>
              Nastavi na {nextDest.label}
            </button>
          ) : verification.state === 'error' || verification.state === 'pending' ? (
            <button onClick={() => {
              setVerification({ state: 'checking', plan: null })
              setAttempt(current => current + 1)
            }} style={{ width: '100%', padding: 13, borderRadius: 11, border: '1px solid var(--bdr)', background: 'var(--s1)', color: 'var(--text)', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' }}>
              Pokušaj ponovno
            </button>
          ) : verification.state === 'missing' ? (
            <button onClick={() => { window.location.href = '/pro' }} style={{ width: '100%', padding: 13, borderRadius: 11, border: 'none', background: 'var(--blue)', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' }}>
              Pogledaj planove
            </button>
          ) : null}

          <button onClick={() => { window.location.href = '/' }} style={{ width: '100%', padding: 13, borderRadius: 11, border: '1px solid var(--bdr)', background: 'transparent', color: 'var(--text)', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--fb)' }}>
            Idi na početnu
          </button>
        </div>

        {isVerified && (
          <div style={{ marginTop: 20, fontSize: 12, color: 'var(--muted)' }}>
            Automatsko preusmjeravanje za <strong style={{ color: 'var(--text)' }}>{countdown}s</strong>
          </div>
        )}
      </div>
    </div>
  )
}
