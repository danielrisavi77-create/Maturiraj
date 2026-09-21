// app/pro/page.js
'use client'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/lib/hooks/useAuth'
import { FROM_MAP, DEFAULT_FROM } from '@/lib/billing/fromMap'
import { initialBillingFromSearch } from '@/lib/billing/initialBilling'
import {
  CHECKOUT_UI_LIVE,
  CHECKOUT_UNAVAILABLE_COPY,
} from '@/lib/billing/checkoutPlans'

const PLANS = [
  {
    id:          'starter',
    name:        'Standard',
    emoji:       '⭐',
    price:       { monthly: '9,99', yearly: '6,99' },
    checkoutPlan: {
      monthly: 'starter',
      yearly:  null,
    },
    color:       'var(--orange)',
    colorRgb:    '255,107,43',
    gradient:    'linear-gradient(135deg,#ff6b2b,#f5c842)',
    btnColor:    '#1a0a00',
    description: 'Pravi Discere iskustvo — arhiva zadataka, plan učenja i praćenje napretka.',
    features: [
      { text: 'Discere — pregled odgovora, obrazloženja i analiza', included: true },
      { text: 'Plan učenja do mature',               included: true },
      { text: 'Kalkulator — puni pregled studija',   included: true },
      { text: 'Praćenje napretka',                   included: true },
      { text: '24 besplatne skripte',                 included: true },
      { text: 'AI Profesor razgovorni chat',          included: false },
      { text: 'Adaptivni plan učenja (AI)',          included: false },
    ],
  },
  {
    id:          'pro',
    name:        'Pro',
    emoji:       '✨',
    price:       { monthly: '19,99', yearly: '9,99' },
    checkoutPlan: {
      monthly: 'pro',
      yearly:  'pro_god',
    },
    color:       'var(--blue)',
    colorRgb:    '75,123,255',
    gradient:    'linear-gradient(135deg,#2a4aff,#6b9bff)',
    btnColor:    '#fff',
    highlighted: true,
    description: 'Kompletna priprema — AI profesor, adaptivni plan, napredna analitika.',
    features: [
      { text: 'Sve iz Standarda',                       included: true },
      { text: 'AI Profesor 24/7',                       included: true },
      { text: 'Adaptivni plan učenja (AI)',             included: true },
      { text: 'Kalkulator — preporuke + analitika',    included: true },
      { text: 'Simulacije ispita',                      included: true },
      { text: 'Personalizirane preporuke',              included: true },
      { text: 'Prioritetna podrška',                   included: true },
    ],
  },
]

// FROM_MAP / DEFAULT_FROM sada dolaze iz @/lib/billing/fromMap (dijeljeno s checkoutom
// i /uspjeh) da se "from" odredište ne gubi kroz Stripe tok.

function ProContent() {
  const router      = useRouter()
  const params      = useSearchParams()
  const { user, isPro } = useAuth()

  // Čitaj "from" param — odakle je korisnik došao
  const fromKey     = params.get('from') || ''
  const fromInfo    = FROM_MAP[fromKey] || DEFAULT_FROM
  const canceled    = params.get('canceled') === '1'

  const [billing,  setBilling]  = useState(() => initialBillingFromSearch(params))
  const [loading,  setLoading]  = useState(null)
  const [error,    setError]    = useState(null)
  const [notice,   setNotice]   = useState(null)

  // Ako je kupnja cancelirana, vrati ga na izvornu stranicu (ne na /pro)
  useEffect(() => {
    if (canceled && fromKey) {
      // Kratka pauza da korisnik vidi poruku, onda redirect
      // (ili možemo ostaviti da ostane i sam klikne natrag)
    }
  }, [canceled, fromKey])

  const handleBack = () => {
    router.push(fromInfo.path)
  }

  const handleCheckout = async (plan) => {
    setError(null)
    setNotice(null)

    if (!CHECKOUT_UI_LIVE) {
      setNotice(CHECKOUT_UNAVAILABLE_COPY)
      return
    }

    if (!user) {
      // Pamti i "from" kroz login flow
      router.push(`/prijava?redirect=/pro${fromKey ? `?from=${fromKey}` : ''}`)
      return
    }

    const checkoutPlan = plan.checkoutPlan[billing]
    if (!checkoutPlan) {
      setNotice(`Godišnji ${plan.name} plan trenutačno nije dostupan. Odaberi mjesečnu naplatu.`)
      return
    }

    setLoading(plan.id)
    try {
      const res  = await fetch('/api/checkout', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          plan: checkoutPlan,
          from: fromKey || 'pro',
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.status === 401 || data.error === 'Nisi prijavljen') {
        router.push(`/prijava?redirect=/pro${fromKey ? `?from=${fromKey}` : ''}`)
        return
      }

      if (res.status === 503 || data.code === 'FEATURE_DISABLED') {
        setNotice('Naplata je privremeno nedostupna. Tvoj račun i postojeći pristup nisu promijenjeni.')
        return
      }

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout trenutačno nije dostupan.')
      }

      window.location.assign(data.url)

    } catch (e) {
      setError(e.message || 'Greška pri otvaranju checkout-a.')
    } finally {
      setLoading(null)
    }
  }

  const handlePortal = async () => {
    setLoading('portal')
    try {
      const res  = await fetch('/api/stripe/portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      setError('Greška pri otvaranju portala.')
    } finally {
      setLoading(null)
    }
  }

  // Tekst CTA gumba ovisno o kontekstu
  const getCtaLabel = (plan) => {
    if (loading === plan.id)           return 'Učitavam...'
    if (isPro && plan.id === 'pro')    return 'Upravljaj planom →'
    if (!CHECKOUT_UI_LIVE)             return 'Naplata uskoro'
    if (!plan.checkoutPlan[billing] && plan.id === 'starter') return 'Standard samo mjesečno'
    if (!plan.checkoutPlan[billing])   return `Godišnji ${plan.name} uskoro`
    if (fromKey === 'kalkulator' && plan.id === 'pro') return '🔑 Otključaj kalkulator →'
    return `Uzmi ${plan.name} →`
  }

  const isPlanActionAvailable = (plan) => {
    if (isPro && plan.id === 'pro') return true
    if (!CHECKOUT_UI_LIVE) return false
    return Boolean(plan.checkoutPlan[billing])
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 20% 0%, rgba(75,123,255,.12), transparent 32%), radial-gradient(ellipse at 80% 10%, rgba(255,107,43,.08), transparent 28%), var(--bg)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 24px 80px' }}>

        {/* Context banner — prikazuje se samo ako dolazi s neke stranice */}
        {fromKey && !canceled && !isPro && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32,
            padding: '14px 20px', borderRadius: 14,
            background: 'rgba(75,123,255,.08)', border: '1px solid rgba(75,123,255,.2)',
          }}>
            <span style={{ fontSize: 22 }}>
              {fromKey === 'kalkulator' ? '📊' : '✨'}
            </span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--txt)', marginBottom: 2 }}>
                {fromKey === 'kalkulator'
                  ? 'Otključaj kalkulator bodova'
                  : `Nadogradi s ${fromInfo.label}`}
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
                {fromKey === 'kalkulator'
                  ? 'Tvoji uneseni bodovi su sačuvani. Nakon kupnje automatski se vraćaš na kalkulator s punim pristupom.'
                  : `Kupiš li plan, vraćamo te natrag na ${fromInfo.label}.`}
              </div>
            </div>
          </div>
        )}

        {/* Canceled banner */}
        {canceled && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32,
            padding: '14px 20px', borderRadius: 14,
            background: 'rgba(255,107,43,.08)', border: '1px solid rgba(255,107,43,.2)',
          }}>
            <span style={{ fontSize: 22 }}>ℹ️</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--orange)', marginBottom: 2 }}>
                Odustao si od kupnje
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
                Možeš pokušati opet kad budeš spreman.{' '}
                {fromKey && (
                  <span
                    onClick={handleBack}
                    style={{ color: 'var(--blue)', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Vrati se na {fromInfo.label} →
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Pro active banner */}
        {isPro && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32,
            padding: '14px 20px', borderRadius: 14,
            background: 'rgba(62,207,110,.08)', border: '1px solid rgba(62,207,110,.2)',
          }}>
            <span style={{ fontSize: 22 }}>✓</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', marginBottom: 2 }}>
                Imaš aktivan PRO plan
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                <span onClick={handlePortal} style={{ cursor: 'pointer', color: 'var(--green)', fontWeight: 600, textDecoration: 'underline' }}>
                  Upravljaj pretplatom →
                </span>
                {fromKey && (
                  <span
                    onClick={handleBack}
                    style={{ marginLeft: 12, color: 'var(--blue)', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Vrati se na {fromInfo.label} →
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 18,
            padding: '5px 14px', borderRadius: 999,
            background: 'rgba(75,123,255,.1)', border: '1px solid rgba(75,123,255,.22)',
            fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
            color: 'var(--blue)',
          }}>
            ✨ Planovi i cijene
          </div>

          <div style={{
            fontFamily: 'var(--fh)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.03em',
            marginBottom: 14,
          }}>
            Počni besplatno.<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--blue), var(--violet))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Nadogradi kad si spreman.</span>
          </div>

          <div style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 28px' }}>
            Skripte i Discere ispiti s timerom su besplatni. Razrada rezultata, kalkulator, AI profesor i adaptivni plan uz pretplatu.
          </div>

          {!CHECKOUT_UI_LIVE && (
            <div role="status" style={{
              maxWidth: 520, margin: '0 auto 20px', padding: '12px 16px', borderRadius: 14,
              background: 'rgba(255,107,43,.08)', border: '1px solid rgba(255,107,43,.22)',
              fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, textAlign: 'center',
            }}>
              ⏳ {CHECKOUT_UNAVAILABLE_COPY}
            </div>
          )}

          {/* Billing toggle */}
          <div className="bill-toggle">
            {[
              { key: 'monthly', label: 'Mjesečno' },
              { key: 'yearly',  label: 'Godišnje', badge: '−50%' },
            ].map(b => (
              <button key={b.key} onClick={() => {
                setBilling(b.key)
                setNotice(null)
                setError(null)
              }}
                className={`bill-opt${billing === b.key ? ' on' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                {b.label}
                {b.badge && (
                  <span style={{
                    fontSize: 10, fontWeight: 800, padding: '2px 6px', borderRadius: 6,
                    background: billing === b.key ? 'rgba(62,207,110,.2)' : 'rgba(255,255,255,.06)',
                    color: billing === b.key ? 'var(--green)' : 'var(--muted)',
                  }}>{b.badge}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Neutral billing containment notice */}
        {notice && (
          <div role="status" style={{
            marginBottom: 24, padding: '12px 16px', borderRadius: 14,
            background: 'rgba(75,123,255,.07)', border: '1px solid rgba(75,123,255,.18)',
            fontSize: 13, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6,
          }}>ℹ️ {notice}</div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            marginBottom: 24, padding: '12px 16px', borderRadius: 14,
            background: 'rgba(248,113,113,.08)', border: '1px solid rgba(248,113,113,.2)',
            fontSize: 13, color: '#f87171', textAlign: 'center',
          }}>⚠️ {error}</div>
        )}

        {/* Plan cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
          {PLANS.map(plan => (
            <div key={plan.id} className={`price-card${plan.highlighted ? ' hi' : ' std'}`}
              style={{
                padding: '32px 28px',
                borderRadius: 28,
                ...(plan.highlighted ? {} : {}),
              }}>
              <div style={{
                position: 'absolute', top: -40, right: -40, width: 140, height: 140,
                borderRadius: '50%',
                background: `rgba(${plan.colorRgb},.12)`,
                filter: 'blur(30px)', pointerEvents: 'none',
              }} />

              {plan.highlighted && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  padding: '4px 10px', borderRadius: 999, fontSize: 10, fontWeight: 800,
                  background: 'rgba(75,123,255,.2)', border: '1px solid rgba(75,123,255,.35)',
                  color: 'var(--blue)', letterSpacing: '.06em', textTransform: 'uppercase',
                }}>
                  {fromKey === 'kalkulator' ? '🔑 Otključava kalkulator' : 'Najpopularnije'}
                </div>
              )}

              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{plan.emoji}</div>
                <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 900, marginBottom: 4 }}>
                  {plan.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.55 }}>
                  {plan.description}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontFamily: 'var(--fh)', fontSize: 42, fontWeight: 900, color: plan.color, lineHeight: 1 }}>
                    {plan.price[billing]}€
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600 }}>/mj</span>
                </div>
                {billing === 'yearly' && plan.id === 'pro' && (
                  <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 700, marginTop: 4 }}>
                    Godišnja pretplata (pro_god) · uštedi ~50%
                  </div>
                )}
                {billing === 'yearly' && plan.id === 'starter' && (
                  <div style={{ fontSize: 11, color: 'var(--orange)', fontWeight: 700, marginTop: 4 }}>
                    Standard godišnje nije u checkoutu — odaberi mjesečno
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 28 }}>
                {plan.features.map((f, i) => (
                  <div key={i} className={`feat-check ${f.included ? 'ok' : 'off'}`}>
                    <span className="feat-check-icon" style={{
                      borderRadius: '50%',
                      background: f.included ? `rgba(${plan.colorRgb},.18)` : 'rgba(255,255,255,.05)',
                      border: f.included ? `1px solid rgba(${plan.colorRgb},.3)` : '1px solid rgba(255,255,255,.08)',
                      color: f.included ? plan.color : 'rgba(255,255,255,.2)',
                    }}>
                      {f.included ? '✓' : '—'}
                    </span>
                    {f.text}
                  </div>
                ))}
              </div>

              <button
                onClick={() => isPro && plan.id === 'pro' ? handlePortal() : handleCheckout(plan)}
                disabled={!!loading || !isPlanActionAvailable(plan)}
                style={{
                  width: '100%', padding: '14px', borderRadius: 16,
                  background: plan.gradient ?? `linear-gradient(135deg, rgba(${plan.colorRgb},1), rgba(${plan.colorRgb},.82))`,
                  color: plan.btnColor ?? '#fff',
                  fontSize: 14, fontWeight: 900, cursor: loading || !isPlanActionAvailable(plan) ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--fb)',
                  boxShadow: `0 8px 32px rgba(${plan.colorRgb},.3)`,
                  transition: 'all .2s cubic-bezier(.16,1,.3,1)',
                  border: 'none',
                  opacity: !isPlanActionAvailable(plan) || (loading && loading !== plan.id) ? 0.6 : 1,
                }}
                onMouseEnter={e => { if (!loading && isPlanActionAvailable(plan)) e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
              >
                {getCtaLabel(plan)}
              </button>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap',
          fontSize: 12, color: 'var(--muted)', fontWeight: 600,
        }}>
          {[
            CHECKOUT_UI_LIVE ? '🔒 Sigurno plaćanje · Stripe' : '⏳ Naplata uskoro · Stripe spreman',
            '↩ Otkaži bilo kada',
            '⚡ Pristup odmah',
            fromKey ? `↩ Vraća te na ${fromInfo.label}` : '🇭🇷 HR + BiH podrška',
          ].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProPage() {
  return (<Suspense><ProContent /></Suspense>)
}
