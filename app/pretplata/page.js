// app/pretplata/page.js
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/hooks/useAuth'
import {
  CHECKOUT_UI_LIVE,
  CHECKOUT_UNAVAILABLE_COPY,
} from '@/lib/billing/checkoutPlans'

const PRICING_CSS = `
  .pricing-nav {
    padding: 14px 24px;
    background: rgba(15, 6, 5, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--bd);
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  .pricing-nav-brand {
    font-family: var(--display);
    font-size: 18px;
    font-weight: 800;
    color: var(--t1);
    text-decoration: none;
    letter-spacing: -0.01em;
  }
  .pricing-nav-brand span { color: var(--gold); }
  .pricing-nav-links { display: flex; gap: 14px; align-items: center; }
  .pricing-nav-link {
    color: var(--t2);
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    transition: color 0.15s ease;
  }
  .pricing-nav-link:hover { color: var(--gold); }

  .pricing-hero {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 24px 40px;
    text-align: center;
  }
  .pricing-hero-pill {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(233, 180, 70, 0.1);
    border: 1px solid rgba(233, 180, 70, 0.3);
    border-radius: 20px;
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .pricing-hero-title {
    font-family: var(--display);
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 800;
    color: var(--t1);
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0 0 16px;
  }
  .pricing-hero-title em { color: var(--gold); font-style: normal; }
  .pricing-hero-subtitle {
    font-size: 17px;
    color: var(--t2);
    max-width: 640px;
    margin: 0 auto 24px;
    line-height: 1.6;
  }
  .pricing-hero-features {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 24px;
  }
  .pricing-hero-feature {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 1px;
    color: var(--t3);
    text-transform: uppercase;
  }

  .pricing-tiers {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 24px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 18px;
  }
  .pricing-tier {
    position: relative;
    padding: 28px 24px;
    background: var(--ele);
    border: 2px solid var(--bd);
    border-radius: var(--r2);
    transition: all 0.2s ease;
  }
  .pricing-tier:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3);
  }
  @keyframes glow-or {
    0%, 100% { box-shadow: 0 0 18px rgba(255, 107, 43, .22), 0 0 0 1px rgba(255, 107, 43, .18); }
    50%       { box-shadow: 0 0 34px rgba(255, 107, 43, .40), 0 0 0 1px rgba(255, 107, 43, .30); }
  }
  @keyframes glow-bl {
    0%, 100% { box-shadow: 0 0 18px rgba(75, 123, 255, .24), 0 0 0 1px rgba(75, 123, 255, .20); }
    50%       { box-shadow: 0 0 34px rgba(75, 123, 255, .44), 0 0 0 1px rgba(75, 123, 255, .34); }
  }
  .pricing-tier-standard {
    border-color: rgba(255, 107, 43, .36);
    background: linear-gradient(160deg, rgba(255, 107, 43, .10) 0%, var(--ele) 55%);
    animation: glow-or 3s ease-in-out infinite;
    overflow: hidden;
  }
  .pricing-tier-standard::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ff6b2b, transparent);
    border-radius: var(--r2) var(--r2) 0 0;
  }
  .pricing-tier-pro {
    border-color: rgba(75, 123, 255, .38);
    background: linear-gradient(160deg, rgba(75, 123, 255, .12) 0%, var(--ele) 55%);
    animation: glow-bl 3s ease-in-out infinite;
    overflow: hidden;
  }
  .pricing-tier-pro::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #4b7bff, transparent);
    border-radius: var(--r2) var(--r2) 0 0;
  }
  .pricing-tier-recommended-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #4b7bff;
    color: #fff;
    padding: 5px 14px;
    border-radius: 14px;
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .pricing-tier-current-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    background: rgba(107, 148, 100, .14);
    border: 1px solid rgba(107, 148, 100, .32);
    border-radius: 10px;
    font-family: var(--mono);
    font-size: 9px;
    font-weight: 800;
    color: #6B9464;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .pricing-tier-name {
    font-family: var(--display);
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 4px;
    color: var(--t1);
  }
  .pricing-tier-free .pricing-tier-name { color: var(--t1); }
  .pricing-tier-standard .pricing-tier-name { color: #ff6b2b; }
  .pricing-tier-pro .pricing-tier-name { color: #4b7bff; }
  .pricing-tier-tagline {
    font-size: 13px;
    color: var(--t3);
    font-style: italic;
    margin-bottom: 20px;
  }
  .pricing-tier-price {
    font-family: var(--mono);
    font-size: 42px;
    font-weight: 800;
    color: var(--t1);
    margin-bottom: 22px;
    line-height: 1;
  }
  .pricing-tier-price span {
    font-size: 16px;
    color: var(--t3);
    font-weight: 400;
    margin-left: 6px;
  }
  .pricing-tier-cta {
    width: 100%;
    padding: 14px 20px;
    background: var(--bd);
    color: #fff;
    border: none;
    border-radius: var(--r1);
    font-family: var(--display);
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 22px;
    letter-spacing: 0.2px;
  }
  .pricing-tier-free .pricing-tier-cta {
    background: transparent;
    color: var(--t1);
    border: 2px solid var(--bd);
  }
  .pricing-tier-free .pricing-tier-cta:hover {
    background: var(--ele);
    border-color: var(--t2);
    transform: translateY(-1px);
  }
  .pricing-tier-standard .pricing-tier-cta {
    background: #ff6b2b;
    color: #fff;
    box-shadow: 0 4px 16px rgba(255, 107, 43, .30);
  }
  .pricing-tier-standard .pricing-tier-cta:hover {
    background: #ff824a;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 107, 43, .48);
  }
  .pricing-tier-pro .pricing-tier-cta {
    background: #4b7bff;
    color: #fff;
    box-shadow: 0 4px 16px rgba(75, 123, 255, .32);
  }
  .pricing-tier-pro .pricing-tier-cta:hover {
    background: #6290ff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(75, 123, 255, .50);
  }
  .pricing-tier-features {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 13.5px;
    line-height: 1.7;
    color: var(--t2);
  }
  .pricing-tier-features li {
    padding: 6px 0;
    padding-left: 26px;
    position: relative;
    border-bottom: 1px solid rgba(44, 31, 31, 0.5);
  }
  .pricing-tier-features li:last-child { border-bottom: none; }
  .pricing-tier-features li::before {
    position: absolute;
    left: 0;
    top: 6px;
    font-size: 14px;
  }
  .pricing-tier-features li.f-yes::before { content: "✅"; }
  .pricing-tier-features li.f-no { color: var(--t3); opacity: 0.6; }
  .pricing-tier-features li.f-no::before { content: "❌"; }
  .pricing-tier-features li.f-star::before { content: "⭐"; }
  .pricing-tier-features li.f-ai::before { content: "🤖"; }
  .pricing-tier-features li strong { color: var(--t1); font-weight: 700; }

  .pricing-comparison {
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 24px;
  }
  .pricing-section-title {
    font-family: var(--display);
    font-size: 32px;
    font-weight: 800;
    color: var(--t1);
    text-align: center;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .pricing-section-subtitle {
    font-size: 15px;
    color: var(--t2);
    text-align: center;
    margin-bottom: 36px;
  }
  .pricing-comparison-wrap {
    overflow-x: auto;
    border: 1px solid var(--bd);
    border-radius: var(--r2);
    background: var(--ele);
  }
  .pricing-comparison-table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--body);
    font-size: 13.5px;
    min-width: 720px;
  }
  .pricing-comparison-table thead {
    background: var(--bg2);
    border-bottom: 2px solid var(--bd);
  }
  .pricing-comparison-table th {
    padding: 16px 18px;
    text-align: left;
    font-family: var(--display);
    font-weight: 700;
    color: var(--t1);
    font-size: 14px;
    letter-spacing: -0.01em;
  }
  .pricing-comparison-table th:first-child { width: 40%; }
  .pricing-comparison-table th.tier-col { text-align: center; width: 20%; }
  .pricing-comparison-table th.tier-col-free { color: var(--t1); }
  .pricing-comparison-table th.tier-col-standard { color: #ff6b2b; }
  .pricing-comparison-table th.tier-col-pro { color: #4b7bff; }
  .pricing-comparison-table td {
    padding: 12px 18px;
    border-bottom: 1px solid rgba(44, 31, 31, 0.6);
    color: var(--t2);
  }
  .pricing-comparison-table td.cell-feature { color: var(--t1); font-weight: 500; }
  .pricing-comparison-table td.cell-tier { text-align: center; }
  .pricing-comparison-table tr.row-section td {
    background: var(--bg2);
    font-family: var(--mono);
    font-size: 11px;
    color: var(--gold);
    letter-spacing: 1.2px;
    text-transform: uppercase;
    padding: 10px 18px;
    font-weight: 700;
  }
  .pricing-comparison-table .check { color: var(--green); font-weight: 800; }
  .pricing-comparison-table .cross { color: var(--t3); opacity: 0.5; }
  .pricing-comparison-table .partial { color: var(--gold); font-size: 12px; font-weight: 600; }

  .pricing-faq {
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 24px;
  }
  .pricing-faq-list { display: flex; flex-direction: column; gap: 12px; }
  .pricing-faq-item {
    background: var(--ele);
    border: 1px solid var(--bd);
    border-radius: var(--r2);
    overflow: hidden;
  }
  .pricing-faq-question {
    padding: 16px 22px;
    cursor: pointer;
    font-family: var(--display);
    font-size: 16px;
    font-weight: 700;
    color: var(--t1);
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.15s ease;
  }
  .pricing-faq-question::-webkit-details-marker { display: none; }
  .pricing-faq-question::after {
    content: "+";
    font-size: 22px;
    color: var(--gold);
    font-weight: 300;
    transition: transform 0.2s ease;
  }
  details[open] .pricing-faq-question::after { transform: rotate(45deg); }
  .pricing-faq-question:hover { color: var(--gold); }
  .pricing-faq-answer {
    padding: 0 22px 18px;
    color: var(--t2);
    font-size: 14px;
    line-height: 1.7;
  }

  .pricing-cta-section {
    max-width: 800px;
    margin: 40px auto;
    padding: 40px 24px;
    text-align: center;
    background: linear-gradient(135deg, rgba(255, 107, 43, 0.07), rgba(75, 123, 255, 0.05));
    border: 1px solid var(--bd);
    border-radius: var(--r2);
  }
  .pricing-cta-title {
    font-family: var(--display);
    font-size: 28px;
    font-weight: 800;
    color: var(--t1);
    margin-bottom: 8px;
  }
  .pricing-cta-text { color: var(--t2); font-size: 15px; margin-bottom: 22px; }
  .pricing-cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .pricing-cta-btn {
    padding: 12px 24px;
    background: #ff6b2b;
    color: #fff;
    border: none;
    border-radius: var(--r1);
    font-family: var(--display);
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px rgba(255, 107, 43, .28);
  }
  .pricing-cta-btn:hover {
    background: #ff824a;
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(255, 107, 43, .44);
  }
  .pricing-cta-btn-secondary {
    background: #4b7bff;
    color: #fff;
    border: none;
    box-shadow: 0 4px 14px rgba(75, 123, 255, .28);
  }
  .pricing-cta-btn-secondary:hover {
    background: #6290ff;
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(75, 123, 255, .44);
  }

  .pricing-footer {
    padding: 40px 24px;
    text-align: center;
    border-top: 1px solid var(--bd);
    color: var(--t3);
    font-size: 12px;
    margin-top: auto;
  }
  .pricing-footer-brand {
    font-family: var(--display);
    font-size: 16px;
    color: var(--t1);
    margin-bottom: 8px;
  }

  /* design tokens za standalone pricing page */
  .pricing-page-wrap {
    --bg: #0F0605;
    --bg2: #1a1010;
    --ele: #1f1414;
    --bd: #2c1f1f;
    --t1: #f4ede5;
    --t2: #c5b8aa;
    --t3: #8a7a6e;
    --gold: #e9b446;
    --gold-hover: #d4a13e;
    --blue: #4a90d9;
    --blue-hover: #3578bf;
    --green: #50c878;
    --red: #e05252;
    --r1: 8px;
    --r2: 14px;
    --display: 'Fraunces', Georgia, serif;
    --body: 'DM Sans', -apple-system, sans-serif;
    --mono: 'JetBrains Mono', 'SF Mono', monospace;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--bg);
    color: var(--t1);
    font-family: var(--body);
    font-size: 15px;
    line-height: 1.6;
  }

  @media (max-width: 720px) {
    .pricing-hero { padding: 40px 18px 30px; }
    .pricing-tiers { padding: 18px; grid-template-columns: 1fr; }
    .pricing-tier { padding: 24px 22px; }
    .pricing-comparison { padding: 40px 18px; }
    .pricing-section-title { font-size: 26px; }
    .pricing-hero-features { gap: 8px; }
    .pricing-hero-feature { font-size: 10px; }
    .pricing-faq { padding: 40px 18px; }
    .pricing-cta-section { padding: 30px 20px; }
    .pricing-cta-title { font-size: 22px; }
  }
`

function BackButton() {
  const router = useRouter()
  const [href, setHref] = useState('/skripte')

  useEffect(() => {
    // If user came from a chapter page, go back there; otherwise fallback to /skripte
    const ref = document.referrer
    if (ref && new URL(ref).hostname === window.location.hostname && ref !== window.location.href) {
      setHref(ref)
    }
  }, [])

  return (
    <a href={href} className="pricing-nav-link" onClick={(e) => {
      if (window.history.length > 1) { e.preventDefault(); router.back() }
    }}>← Vrati se na sadržaj</a>
  )
}

export default function PretplataPage() {
  // Trenutni plan iz kanonskog izvora entitlementa (profiles.plan_type preko useAuth) —
  // fail-closed + validacija isteka (pro_expires_at). Prije se čitao user_metadata.tier
  // koji se NIGDJE u aplikaciji ne upisuje, uz fallback na localStorage 'mt.tier', pa su
  // se stvarni pretplatnici prikazivali kao 'free' (i mogli ponovno kupovati isti plan).
  // planType je null | 'starter' | 'pro'; ova stranica koristi 'standard' za 'starter'.
  const { planType } = useAuth()
  const tier = planType === 'pro' ? 'pro' : planType === 'starter' ? 'standard' : 'free'

  async function handleSubscribe(targetTier) {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'pretplata_cta_click', targetTier, currentTier: tier })
    }
    if (targetTier === 'free') {
      window.location.href = '/skripte'
      return
    }
    if (targetTier === tier) return
    if (!CHECKOUT_UI_LIVE) {
      alert(CHECKOUT_UNAVAILABLE_COPY)
      return
    }
    const planId = targetTier === 'standard' ? 'starter' : 'pro'
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan: planId }),
    })
    const data = await response.json()
    if (data.url) {
      window.location.href = data.url
    } else if (response.status === 503 || data.code === 'FEATURE_DISABLED') {
      alert(CHECKOUT_UNAVAILABLE_COPY)
    } else if (data.error === 'Nisi prijavljen') {
      window.location.href = '/auth'
    } else {
      alert('Greška: ' + data.error)
    }
  }

  return (
    <div className="pricing-page-wrap">
      <style>{PRICING_CSS}</style>

      {/* ═════════════ NAV ═════════════ */}
      <nav className="pricing-nav">
        <a href="/skripte" className="pricing-nav-brand">Maturiraj<span>.hr</span></a>
        <div className="pricing-nav-links">
          <BackButton />
        </div>
      </nav>

      {/* ═════════════ HERO ═════════════ */}
      <section className="pricing-hero">
        <div className="pricing-hero-pill">💎 Pretplata · Tier opcije</div>
        <h1 className="pricing-hero-title">Sve što ti treba za <em>maturu</em></h1>
        <p className="pricing-hero-subtitle">
          Od besplatne teorije do AI personalizacije. Odaberi tier koji ti odgovara — možeš nadograditi ili otkazati u bilo koje vrijeme.
        </p>
        <div className="pricing-hero-features">
          <span className="pricing-hero-feature">✓ Bez ugovora</span>
          <span className="pricing-hero-feature">✓ Otkaži kad god</span>
          <span className="pricing-hero-feature">✓ Pravi nastavnici</span>
          <span className="pricing-hero-feature">✓ AI Profesor 24/7</span>
        </div>
        {!CHECKOUT_UI_LIVE && (
          <div style={{marginTop:20,maxWidth:520,marginLeft:'auto',marginRight:'auto',padding:'12px 16px',borderRadius:14,background:'rgba(255,107,43,.08)',border:'1px solid rgba(255,107,43,.22)',fontSize:13,color:'var(--muted)',lineHeight:1.6}}>
            ⏳ {CHECKOUT_UNAVAILABLE_COPY}
          </div>
        )}
        {tier !== 'free' && (
          <div style={{marginTop:20,display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',background:'rgba(107,148,100,.12)',border:'1px solid rgba(107,148,100,.3)',borderRadius:20,fontFamily:'var(--mono)',fontSize:10,fontWeight:700,color:'#6B9464',letterSpacing:1.5,textTransform:'uppercase'}}>
            ✓ Prijavljeni ste kao {tier === 'standard' ? '⭐ Standard' : '💎 Pro'} korisnik
          </div>
        )}
      </section>

      {/* ═════════════ TIER KARTICE ═════════════ */}
      <section className="pricing-tiers">

        {/* FREE */}
        <div className="pricing-tier pricing-tier-free">
          <div className="pricing-tier-name">🆓 Free</div>
          {tier === 'free' && <div className="pricing-tier-current-badge">✓ Tvoj plan</div>}
          <div className="pricing-tier-tagline">Učenje teorije + osnovni alati</div>
          <div className="pricing-tier-price">0€<span>/mj</span></div>
          <button type="button" className="pricing-tier-cta" onClick={() => handleSubscribe('free')} disabled={tier === 'free'} style={tier === 'free' ? {opacity:.65,cursor:'default'} : {}}>
            {tier === 'free' ? 'Tvoj plan — nastavi besplatno' : 'Krenuti besplatno'}
          </button>
          <ul className="pricing-tier-features">
            <li className="f-yes"><strong>Cijela teorija</strong> — sve skripte i kvizovi</li>
            <li className="f-yes">NCVVO greške + cheat-sheet</li>
            <li className="f-yes">Pojmovnici i mnemotehnike</li>
            <li className="f-yes">Kalkulator bodova</li>
            <li className="f-yes">Speed Drill (200 pravopisnih pitanja)</li>
            <li className="f-yes">Proofreading game (interpunkcija)</li>
            <li className="f-yes">Plagijat detektor (sažetak)</li>
            <li className="f-yes">Objektivnost detektor (sažetak)</li>
            <li className="f-star"><strong>1 esej + 1 sažetak Workspace</strong></li>
            <li className="f-yes">Discere ispiti s timerom (svih 70)</li>
            <li className="f-no">Discere pregled odgovora i analiza</li>
            <li className="f-no">Sve modelne eseje + sažetke</li>
            <li className="f-no">Parent dashboard</li>
            <li className="f-no">AI features</li>
          </ul>
        </div>

        {/* STANDARD */}
        <div className="pricing-tier pricing-tier-standard">
          <div className="pricing-tier-name">⭐ Standard</div>
          {tier === 'standard' && <div className="pricing-tier-current-badge">✓ Tvoj plan</div>}
          <div className="pricing-tier-tagline">Vježbanje · simulatori · statistika</div>
          <div className="pricing-tier-price">9,99€<span>/mj</span></div>
          <button type="button" className="pricing-tier-cta" onClick={() => handleSubscribe('standard')} disabled={tier === 'standard'} style={tier === 'standard' ? {opacity:.65,cursor:'default'} : {}}>
            {tier === 'standard' ? '✓ Tvoj plan — Standard' : 'Pretplati se na Standard'}
          </button>
          <ul className="pricing-tier-features">
            <li className="f-yes"><strong>Sve iz Free</strong></li>
            <li className="f-star"><strong>70 Discere simulatora</strong></li>
            <li className="f-star"><strong>Neograničeno u Workspace</strong></li>
            <li className="f-yes">Svih 9 modelnih eseja (H27)</li>
            <li className="f-yes">Svih 10 modelnih sažetaka (H28)</li>
            <li className="f-yes">Export u clipboard / .txt</li>
            <li className="f-yes">Streak + heatmap</li>
            <li className="f-yes">Statistika napretka</li>
            <li className="f-yes">Plan učenja (full)</li>
            <li className="f-no">Parent dashboard</li>
            <li className="f-no">AI features</li>
          </ul>
        </div>

        {/* PRO */}
        <div className="pricing-tier pricing-tier-pro">
          <div className="pricing-tier-recommended-badge">{tier === 'pro' ? '✓ Tvoj plan' : 'Najpopularniji'}</div>
          <div className="pricing-tier-name">💎 Pro</div>
          <div className="pricing-tier-tagline">AI personalizacija — kao osobni tutor</div>
          <div className="pricing-tier-price">19,99€<span>/mj</span></div>
          <button type="button" className="pricing-tier-cta" onClick={() => handleSubscribe('pro')} disabled={tier === 'pro'} style={tier === 'pro' ? {opacity:.65,cursor:'default'} : {}}>
            {tier === 'pro' ? '✓ Tvoj plan — Pro' : 'Pretplati se na Pro'}
          </button>
          <ul className="pricing-tier-features">
            <li className="f-yes"><strong>Sve iz Standard</strong></li>
            <li className="f-ai"><strong>AI Profesor (chat) — 30 poruka/dan</strong></li>
            <li className="f-ai"><strong>AI Feedback za eseje (H27)</strong></li>
            <li className="f-ai"><strong>AI Feedback za sažetke (H28)</strong></li>
            <li className="f-ai"><strong>20 AI feedbackova / dan</strong></li>
            <li className="f-star"><strong>Personalizirani plan učenja</strong></li>
            <li className="f-star"><strong>Prijemni priprema</strong></li>
            <li className="f-star"><strong>Parent dashboard</strong></li>
            <li className="f-yes">Priority AI queue</li>
            <li className="f-yes">Email support</li>
          </ul>
        </div>

      </section>

      {/* ═════════════ COMPARISON TABLE ═════════════ */}
      <section className="pricing-comparison">
        <h2 className="pricing-section-title">Detaljna usporedba</h2>
        <p className="pricing-section-subtitle">Pogledaj sve što dobiješ u svakoj pretplati</p>

        <div className="pricing-comparison-wrap">
          <table className="pricing-comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="tier-col tier-col-free">🆓 Free</th>
                <th className="tier-col tier-col-standard">⭐ Standard<br /><span style={{fontSize:'11px',color:'var(--t3)',fontWeight:400}}>9,99€/mj</span></th>
                <th className="tier-col tier-col-pro">💎 Pro<br /><span style={{fontSize:'11px',color:'var(--t3)',fontWeight:400}}>19,99€/mj</span></th>
              </tr>
            </thead>
            <tbody>

              <tr className="row-section"><td colSpan="4">📚 Teorija</td></tr>
              <tr><td className="cell-feature">Cijela teorija (skripte)</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Inline kvizovi</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">NCVVO greške + cheat-sheet</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Pojmovnici + mnemotehnike</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Dijagnostika</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>

              <tr className="row-section"><td colSpan="4">🛠 Alati</td></tr>
              <tr><td className="cell-feature">Kalkulator bodova</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Plagijat detektor (H28)</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Objektivnost detektor (H28)</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Speed Drill (H25)</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Proofreading game (H26)</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>

              <tr className="row-section"><td colSpan="4">📝 Workspace (Esej + Sažetak)</td></tr>
              <tr><td className="cell-feature">Workspace pristup</td><td className="cell-tier partial">1 esej + 1 sažetak</td><td className="cell-tier check">∞</td><td className="cell-tier check">∞</td></tr>
              <tr><td className="cell-feature">Modelne eseje (9)</td><td className="cell-tier partial">1 vidljiv</td><td className="cell-tier check">Sve 9</td><td className="cell-tier check">Sve 9</td></tr>
              <tr><td className="cell-feature">Modelne sažetke (10)</td><td className="cell-tier partial">1 vidljiv</td><td className="cell-tier check">Sve 10</td><td className="cell-tier check">Sve 10</td></tr>
              <tr><td className="cell-feature">Auto-save</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Export (clipboard / .txt)</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>

              <tr className="row-section"><td colSpan="4">🎯 Discere Simulatori</td></tr>
              <tr><td className="cell-feature">Ispiti s timerom</td><td className="cell-tier check">70 ispita</td><td className="cell-tier check">70 ispita</td><td className="cell-tier check">70 ispita</td></tr>
              <tr><td className="cell-feature">Ocjena, postotak i bodovi</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Pregled odgovora i obrazloženja</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Vježbanje bez ograničenja</td><td className="cell-tier partial">3 pitanja</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Statistika rezultata</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>

              <tr className="row-section"><td colSpan="4">📊 Plan učenja</td></tr>
              <tr><td className="cell-feature">Statični raspored</td><td className="cell-tier partial">Pregled (blur)</td><td className="cell-tier check">Puni</td><td className="cell-tier check">Puni</td></tr>
              <tr><td className="cell-feature">Streak tracking</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Heatmap</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Analiza napretka po predmetima</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td><td className="cell-tier check">✓</td></tr>

              <tr className="row-section"><td colSpan="4">👨‍👩‍👦 Parent Dashboard (samo Pro)</td></tr>
              <tr><td className="cell-feature">Praćenje napretka djeteta</td><td className="cell-tier cross">✗</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Tjedni izvještaji</td><td className="cell-tier cross">✗</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td></tr>

              <tr className="row-section"><td colSpan="4">🤖 AI Features (samo Pro)</td></tr>
              <tr><td className="cell-feature">AI Profesor (chat)</td><td className="cell-tier cross">✗</td><td className="cell-tier cross">✗</td><td className="cell-tier check">30 / dan</td></tr>
              <tr><td className="cell-feature">AI Feedback za eseje</td><td className="cell-tier cross">✗</td><td className="cell-tier cross">✗</td><td className="cell-tier check">20 / dan</td></tr>
              <tr><td className="cell-feature">AI Feedback za sažetke</td><td className="cell-tier cross">✗</td><td className="cell-tier cross">✗</td><td className="cell-tier check">20 / dan</td></tr>
              <tr><td className="cell-feature">Personalizirani plan učenja</td><td className="cell-tier cross">✗</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td></tr>
              <tr><td className="cell-feature">Priority AI queue</td><td className="cell-tier cross">✗</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td></tr>

              <tr className="row-section"><td colSpan="4">🎓 Prijemni</td></tr>
              <tr><td className="cell-feature">Priprema za fakultetske prijemne</td><td className="cell-tier cross">✗</td><td className="cell-tier cross">✗</td><td className="cell-tier check">✓</td></tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* ═════════════ FAQ ═════════════ */}
      <section className="pricing-faq">
        <h2 className="pricing-section-title">Često pitana pitanja</h2>
        <p className="pricing-section-subtitle">Sve što trebaš znati o pretplati</p>

        <div className="pricing-faq-list">

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Mogu li otkazati pretplatu kad god?</summary>
            <div className="pricing-faq-answer">
              Da, pretplatu možeš otkazati u bilo koje vrijeme kroz svoj profil. Nakon otkazivanja zadržavaš pristup do kraja platnog razdoblja, a zatim se vraćaš na Free tier. Bez kazni, bez skrivenih troškova.
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Što ako želim probati Pro samo na kratko?</summary>
            <div className="pricing-faq-answer">
              Pretplata je <strong>mjesečna</strong> — možeš se pretplatiti za 1 mjesec, isprobati AI Profesor i AI Feedback, pa otkazati ako ne želiš nastaviti. Bez ugovora i bez minimalnog razdoblja.
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Koliko poruka mogu poslati AI Profesoru u Pro?</summary>
            <div className="pricing-faq-answer">
              Pro tier ima <strong>30 poruka dnevno</strong> za AI Profesora i <strong>20 AI Feedbackova dnevno</strong> (za eseje + sažetke). Ovi limiti su više nego dovoljni za intenzivno učenje (prosjek aktivnih studenata je 5–10 poruka/dan).
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Što ako moja škola ima cijelu pretplatu?</summary>
            <div className="pricing-faq-answer">
              Ako tvoja škola ili razred ima Maturiraj.hr Edu pretplatu, dobit ćeš pristupne podatke od profesora. Edu pretplate uključuju Pro tier za sve učenike + dashboard za nastavnike. Kontaktiraj nas za više informacija.
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Mogu li promijeniti tier nakon pretplate?</summary>
            <div className="pricing-faq-answer">
              Da, u bilo koje vrijeme. Ako prelaziš sa Standard na Pro, razlika u cijeni se obračunava proporcionalno. Ako se vraćaš na niži tier, promjena vrijedi od sljedećeg mjeseca.
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Što je razlika između AI Profesora i AI Feedbacka?</summary>
            <div className="pricing-faq-answer">
              <strong>AI Profesor (chat)</strong> je interaktivni asistent kojem možeš postavljati pitanja iz hrvatskog jezika 24/7. <strong>AI Feedback</strong> analizira tvoj esej ili sažetak po 4–5 kriterija (struktura, argumentacija, stil, pismenost) i daje konkretne preporuke za poboljšanje + procjenu ocjene.
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Je li Workspace ograničen u Free verziji?</summary>
            <div className="pricing-faq-answer">
              Free tier ti dopušta da kreiraš <strong>1 esej i 1 sažetak</strong> u Workspace-u (idealno za testiranje). Standard i Pro tier su neograničeni — možeš raditi na onoliko eseja i sažetaka koliko ti treba.
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Plagijat detektor je u Free? Stvarno?</summary>
            <div className="pricing-faq-answer">
              Da! Naš plagijat detektor (5+ uzastopnih riječi iz polaznog teksta) i objektivnost detektor su <strong>besplatni za sve</strong>. Vjerujemo da bi svaki student trebao imati pristup ovim alatima neovisno o pretplati.
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Kako radi Parent Dashboard?</summary>
            <div className="pricing-faq-answer">
              Roditelji mogu kreirati svoj račun i povezati se s djetetovim profilom (uz djetetovo dopuštenje). U dashboardu vide vrijeme učenja, napredak po predmetima, rezultate dijagnostika i tjedne sažetke. Dostupno u Pro tieru.
            </div>
          </details>

          <details className="pricing-faq-item">
            <summary className="pricing-faq-question">Što je „Prijemni" u Pro tieru?</summary>
            <div className="pricing-faq-answer">
              Pored mature, Pro tier uključuje pripremu za <strong>fakultetske prijemne ispite</strong> (medicina, pravo, FER, FSB, Filozofski, Ekonomski, ...). Sadržaj se temelji na arhivi prijemnih ispita iz prošlih godina + AI personalizirani plan vježbanja.
            </div>
          </details>

        </div>
      </section>

      {/* ═════════════ CTA ═════════════ */}
      <section className="pricing-cta-section">
        <h2 className="pricing-cta-title">Spreman za maturu? 💪</h2>
        <p className="pricing-cta-text">Krenuti je besplatno. Bez kreditne kartice.</p>
        <div className="pricing-cta-buttons">
          <a href="/skripte" className="pricing-cta-btn">🚀 Krenuti besplatno</a>
          <a
            href="#"
            className="pricing-cta-btn pricing-cta-btn-secondary"
            onClick={(e) => { e.preventDefault(); handleSubscribe('pro') }}
          >💎 Direktno na Pro</a>
        </div>
      </section>

      {/* ═════════════ FOOTER ═════════════ */}
      <footer className="pricing-footer">
        <div className="pricing-footer-brand">Maturiraj.hr</div>
        <div>Edukacijska platforma za pripremu državne mature.</div>
        <div style={{marginTop:12,fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.8px'}}>
          🚧 Pretplata u izradi — Stripe Checkout uskoro.
        </div>
      </footer>

    </div>
  )
}
