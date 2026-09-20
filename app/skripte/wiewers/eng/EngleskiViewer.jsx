'use client'
import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/hooks/useAuth'
import { ENG_NIZA_RAZINA } from '../../data/eng/niza'
import { ENG_VISA_RAZINA } from '../../data/eng/visa'

const RAZINE_DATA = { niza: ENG_NIZA_RAZINA, visa: ENG_VISA_RAZINA }

// ─── Design tokens (mirroring HTML source — scoped entirely to this viewer) ──
const C = {
  lime: '#9BF73A', limeDim: 'rgba(155,247,58,0.10)', limeBorder: 'rgba(155,247,58,0.22)', limeGlow: 'rgba(155,247,58,0.04)',
  sky: '#38BDF8', skyDim: 'rgba(56,189,248,0.10)', skyBorder: 'rgba(56,189,248,0.22)',
  violet: '#A78BFA', violetDim: 'rgba(167,139,250,0.10)', violetBorder: 'rgba(167,139,250,0.22)',
  amber: '#FBB724', amberDim: 'rgba(251,183,36,0.10)', amberBorder: 'rgba(251,183,36,0.22)',
  red: '#F87171', redDim: 'rgba(248,113,113,0.10)', redBorder: 'rgba(248,113,113,0.22)',
  green: '#4ADE80', greenDim: 'rgba(74,222,128,0.10)', greenBorder: 'rgba(74,222,128,0.22)',
  blue: '#3B82F6', blueDim: 'rgba(59,130,246,0.10)', blueBorder: 'rgba(59,130,246,0.22)', blueGlow: 'rgba(59,130,246,0.04)',
  t1: '#E8EDF5', t2: '#8A95A8', t3: '#4A5568',
  bg: '#080B10', bgSurface: '#0D1117', bgCard: '#161D27', bgInput: '#111620', bgHover: '#1C2535', bgElevated: '#131820',
  bd: 'rgba(255,255,255,0.06)', bdMid: 'rgba(255,255,255,0.10)', bdLight: 'rgba(255,255,255,0.16)',
  mono: "'DM Mono','Fira Code',monospace",
}

const BOJ = {
  lime: { bg: C.limeDim, color: C.lime, border: C.limeBorder },
  sky: { bg: C.skyDim, color: C.sky, border: C.skyBorder },
  violet: { bg: C.violetDim, color: C.violet, border: C.violetBorder },
  amber: { bg: C.amberDim, color: C.amber, border: C.amberBorder },
  red: { bg: C.redDim, color: C.red, border: C.redBorder },
  green: { bg: C.greenDim, color: C.green, border: C.greenBorder },
  c0: { bg: C.skyDim, color: C.sky, border: C.skyBorder },
  c1: { bg: C.limeDim, color: C.lime, border: C.limeBorder },
  c2: { bg: C.violetDim, color: C.violet, border: C.violetBorder },
  c3: { bg: C.redDim, color: C.red, border: C.redBorder },
  cond: { bg: C.amberDim, color: C.amber, border: C.amberBorder },
}

// ─── Shared style helpers ─────────────────────────────────────────────────────
const card = (extra = {}) => ({
  background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '18px 20px', ...extra,
})
const pill = (boja) => ({
  display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: 4,
  fontSize: 11.5, fontWeight: 600, fontFamily: C.mono, border: '1px solid', letterSpacing: 0.2,
  background: BOJ[boja]?.bg, color: BOJ[boja]?.color, borderColor: BOJ[boja]?.border,
})
const secLabel = { fontFamily: C.mono, fontSize: 9.5, fontWeight: 500, letterSpacing: 2, color: C.t3, textTransform: 'uppercase', marginBottom: 14, paddingBottom: 8, borderTop: `none`, borderBottom: `1px solid ${C.bd}` }
const prose = { fontSize: 14.5, lineHeight: 1.85, color: 'rgba(232,237,245,.82)', marginBottom: 16 }
const chip = (boja) => ({
  display: 'inline-flex', alignItems: 'center', padding: '3px 9px', borderRadius: 4,
  fontSize: 11.5, fontWeight: 600, fontFamily: C.mono, border: '1px solid', letterSpacing: 0.2,
  background: BOJ[boja]?.bg, color: BOJ[boja]?.color, borderColor: BOJ[boja]?.border,
  transition: 'all .12s', cursor: 'default',
})

function html(s) { return { __html: s || '' } }

function ScrollFab() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = document.getElementById('eng-main')
    if (!el) return
    const onScroll = () => setVisible(el.scrollTop > 400)
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      type="button"
      className="global-scroll-top-btn"
      onClick={() => document.getElementById('eng-main')?.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Na vrh"
      title="Na vrh"
    >
      ↑
    </button>
  )
}

function BackToTop() { return null }

// ─── Shared UI components ─────────────────────────────────────────────────────

function Pill({ boja, tekst }) {
  return <span style={pill(boja)}>{tekst}</span>
}

function RevealCard({ pitanje, odgovor }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(o => !o)}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = C.bdLight}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = C.bdMid}
      style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, overflow: 'hidden', marginBottom: 8, cursor: 'pointer', transition: 'border-color .15s' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', fontSize: 13.5, fontWeight: 600, color: C.t1, gap: 12, userSelect: 'none' }}>
        <span dangerouslySetInnerHTML={html(pitanje)} />
        <span style={{ fontSize: 11, color: C.t3, transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>▼</span>
      </div>
      {open && (
        <div style={{ padding: '12px 16px', fontSize: 13, color: C.t2, lineHeight: 1.7, background: C.bgSurface, fontFamily: C.mono, borderTop: `1px solid ${C.bd}` }}>
          <div dangerouslySetInnerHTML={html(odgovor)} />
        </div>
      )}
    </div>
  )
}

function PanicBox({ naslov, ikona, stavke }) {
  return (
    <div style={{ background: 'linear-gradient(135deg,rgba(248,113,113,.06),rgba(251,183,36,.06))', border: `1px solid ${C.amberBorder}`, borderRadius: 16, overflow: 'hidden', margin: '24px 0' }}>
      <div style={{ background: C.amber, padding: '10px 20px', fontFamily: C.mono, fontSize: 10, fontWeight: 700, letterSpacing: 2, color: C.bg, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
        {ikona && <span>{ikona}</span>}{naslov}
      </div>
      <div style={{ padding: '18px 20px' }}>
        {stavke.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '9px 0', borderBottom: i < stavke.length - 1 ? `1px solid rgba(251,183,36,.10)` : 'none' }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.amber, color: C.bg, fontFamily: C.mono, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {typeof s === 'object' ? s.n : i + 1}
            </div>
            <div style={{ fontSize: 13, color: 'rgba(232,237,245,.85)', lineHeight: 1.6 }} dangerouslySetInnerHTML={html(typeof s === 'object' ? s.tekst : s)} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── LAYER 0: Brzo uči ────────────────────────────────────────────────────────

function Layer0({ data, poglavlje }) {
  if (!data) return null
  return (
    <div>
      {/* Mapa skripte */}
      {data.mapaSkripte && (
        <div style={{ marginBottom: 20, padding: '18px 20px', background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 16 }}>
          <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: C.lime, marginBottom: 12 }}>// mapa skripte — gdje sam i kamo idem?</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
            {data.mapaSkripte.grupe.map((g) => (
              <div key={g.kod} style={{ background: C.bgElevated, border: `1px solid ${BOJ[g.boja]?.border}`, borderRadius: 12, padding: '11px 13px' }}>
                <div style={{ fontFamily: C.mono, fontSize: 9, color: BOJ[g.boja]?.color, fontWeight: 700, marginBottom: 6 }}>{g.kod}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.t1, marginBottom: 4 }}>{g.naziv}</div>
                <div style={{ fontSize: 11, color: C.t3, fontFamily: C.mono }}>{g.detalji}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${C.bd}`, paddingTop: 10 }}>
            <div style={{ fontFamily: C.mono, fontSize: 9.5, color: C.t3, fontWeight: 600, marginBottom: 6 }}>// koliko imaš vremena?</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
              {data.mapaSkripte.vremenski.map((v) => (
                <div key={v.trajanje} style={{ fontSize: 11.5, color: C.t2 }}>
                  <span style={{ color: BOJ[v.boja]?.color, fontWeight: 600 }}>{v.trajanje}: </span>{v.savjet}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <div style={{ marginBottom: 32, padding: '32px 36px', background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 16, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${C.lime},${C.sky},transparent)` }} />
        <div style={{ position: 'absolute', right: 32, top: '50%', transform: 'translateY(-50%)', fontSize: 96, fontWeight: 700, color: 'rgba(255,255,255,.02)', fontFamily: C.mono, letterSpacing: -4, pointerEvents: 'none', userSelect: 'none' }}>EN</div>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.lime, letterSpacing: 1.5, marginBottom: 12, textTransform: 'uppercase' }}>chapter 0{poglavlje.broj} of {poglavlje.ukupno} · {poglavlje.kategorija?.toLowerCase()}</div>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: C.t1, letterSpacing: -0.8, lineHeight: 1.15, marginBottom: 8 }}>{poglavlje.naslov}</h1>
        <p style={{ fontSize: 13, color: C.t2, fontFamily: C.mono, marginBottom: 20 }}>{poglavlje.podnaslov}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
          <span style={{ ...pill('sky'), fontSize: 10 }}>⏱ {poglavlje.trajanje}</span>
          <span style={{ ...pill('lime'), fontSize: 10 }}>{poglavlje.razina} razina</span>
          <span style={{ ...pill('amber'), fontSize: 10 }}>0{poglavlje.broj} / {poglavlje.ukupno}</span>
        </div>
        <div style={{ height: 2, background: C.bdMid, borderRadius: 1, overflow: 'hidden', maxWidth: 400 }}>
          <div style={{ height: '100%', width: `${poglavlje.progres}%`, background: C.lime, borderRadius: 1 }} />
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 28 }}>
        {poglavlje.tagovi.map((t) => <Pill key={t.tekst} boja={t.boja} tekst={t.tekst} />)}
      </div>

      {/* Stats */}
      <div style={{ fontFamily: C.mono, ...secLabel, marginBottom: 14 }}>// at a glance</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(168px,1fr))', gap: 10, marginBottom: 28 }}>
        {data.stats.map((s) => (
          <div key={s.kod}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.bdLight; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.bdMid; e.currentTarget.style.transform = 'none' }}
            style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '14px 16px', transition: 'border-color .15s, transform .15s', cursor: 'default' }}>
            <div style={{ fontFamily: C.mono, fontSize: 10, fontWeight: 500, padding: '3px 8px', borderRadius: 4, display: 'inline-flex', marginBottom: 10, background: BOJ[s.boja]?.bg, color: BOJ[s.boja]?.color }}>{s.kod}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.t1, marginBottom: 5, lineHeight: 1.3 }}>{s.naslov}</div>
            <div style={{ fontSize: 12, color: C.t2, lineHeight: 1.5, fontFamily: C.mono }} dangerouslySetInnerHTML={html(s.opis)} />
          </div>
        ))}
      </div>

      {/* Concepts */}
      {data.koncepti?.length > 0 && (
        <>
      <div style={{ fontFamily: C.mono, ...secLabel, marginBottom: 10 }}>// key concepts</div>
      <div style={{ border: `1px solid ${C.bdMid}`, borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
        {data.koncepti.map((k, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(170px,36%) 1fr', borderBottom: i < data.koncepti.length - 1 ? `1px solid ${C.bd}` : 'none', background: i % 2 === 1 ? 'rgba(255,255,255,.015)' : 'transparent' }}>
            <div style={{ padding: '11px 14px 11px 18px', fontFamily: C.mono, fontSize: 12, fontWeight: 500, borderRight: `1px solid ${C.bd}`, position: 'relative', color: BOJ[k.boja]?.color || C.t2 }}>
              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, borderRadius: '0 2px 2px 0', background: BOJ[k.boja]?.color || C.t3 }} />
              {k.kljuc}
            </div>
            <div style={{ padding: '11px 16px', fontSize: 13, color: C.t2, lineHeight: 1.6 }} dangerouslySetInnerHTML={html(k.vrijednost)} />
          </div>
        ))}
      </div>
        </>
      )}

      {/* Panic pravila */}
      <div style={{ fontFamily: C.mono, ...secLabel }}>// ako zapamtiš samo ovo — 3 pravila</div>
      <PanicBox naslov="panic-proof — 3 rules that cover 90% of exam questions" ikona="🧠" stavke={data.panicPravila} />

      {/* Recall kartice */}
      <div style={{ fontFamily: C.mono, ...secLabel }}>// 5-second recall — klikni i provjeri</div>
      {data.recallKartice.map((k, i) => (
        <RevealCard key={i} pitanje={k.pitanje} odgovor={k.odgovor.replace(/\n/g, '<br>')} />
      ))}

      {/* Panic protokol */}
      {data.panicProtokol?.length > 0 && (
        <>
          <div style={{ fontFamily: C.mono, ...secLabel, marginTop: 28 }}>// if you panic on the exam — do this</div>
          <PanicBox naslov="exam panic protocol — 5 koraka" ikona="🚨" stavke={data.panicProtokol} />
        </>
      )}
      <BackToTop />
    </div>
  )
}

// ─── LAYER 1: Ucenje — content block renderers ────────────────────────────────

function FormulaPart({ dio, varijanta }) {
  const vc = varijanta === 'pc' || varijanta === 'c2' ? C.violet : varijanta === 'c0' ? C.sky : C.lime
  if (dio.tip === 'val') return <span style={{ color: vc, fontWeight: 600 }}>{dio.t}</span>
  if (dio.tip === 'kw') return <span style={{ color: C.amber, fontWeight: 600 }}>{dio.t}</span>
  if (dio.tip === 'sub') return <span style={{ color: C.t3 }}>{dio.t}</span>
  return <span>{dio.t}</span>
}

function Callout({ varijanta, ikona, naslov, tekst }) {
  const map = {
    warn: { bg: C.redDim, border: C.redBorder, tc: C.red },
    tip: { bg: C.amberDim, border: C.amberBorder, tc: C.amber },
    info: { bg: C.skyDim, border: C.skyBorder, tc: C.sky },
    purple: { bg: C.violetDim, border: C.violetBorder, tc: C.violet },
    sky: { bg: C.skyDim, border: C.skyBorder, tc: C.sky },
    lime: { bg: C.limeDim, border: C.limeBorder, tc: C.lime },
    amber: { bg: C.amberDim, border: C.amberBorder, tc: C.amber },
    violet: { bg: C.violetDim, border: C.violetBorder, tc: C.violet },
    green: { bg: C.greenDim, border: C.greenBorder, tc: C.green },
  }
  const s = map[varijanta] || map.info
  return (
    <div style={{ display: 'flex', gap: 12, padding: '14px 16px', borderRadius: 12, margin: '14px 0', border: `1px solid ${s.border}`, background: s.bg }}>
      {ikona && <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>{ikona}</span>}
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: C.mono, fontSize: 10.5, fontWeight: 500, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 5, color: s.tc }}>{naslov}</div>
        <div style={{ fontSize: 13, lineHeight: 1.7, color: C.t2 }} dangerouslySetInnerHTML={html(tekst)} />
      </div>
    </div>
  )
}

function GramBlock({ blok }) {
  const badgeColor = blok.badgeVarijanta === 'pc' ? C.violet : blok.badgeVarijanta === 'cond' ? C.amber : blok.badgeVarijanta === 'sky' ? C.sky : C.lime
  const badgeBg = blok.badgeVarijanta === 'pc' ? C.violetDim : blok.badgeVarijanta === 'cond' ? C.amberDim : blok.badgeVarijanta === 'sky' ? C.skyDim : C.limeDim
  const badgeBorder = blok.badgeVarijanta === 'pc' ? C.violetBorder : blok.badgeVarijanta === 'cond' ? C.amberBorder : blok.badgeVarijanta === 'sky' ? C.skyBorder : C.limeBorder
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 16, overflow: 'hidden', margin: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderBottom: `1px solid ${C.bd}`, background: C.bgSurface }}>
        <span style={{ fontFamily: C.mono, fontSize: 11, fontWeight: 500, padding: '4px 10px', borderRadius: 4, border: '1px solid', background: badgeBg, color: badgeColor, borderColor: badgeBorder }}>{blok.badge}</span>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: C.t1 }}>{blok.naslov}</div>
          <div style={{ fontSize: 11, color: C.t3, fontFamily: C.mono, marginTop: 1 }}>{blok.podnaslov}</div>
        </div>
      </div>
      <div style={{ padding: '20px 22px' }}>
        {blok.formule.map((f, fi) => (
          <div key={fi} style={{ background: C.bgInput, border: `1px solid ${C.bdMid}`, borderLeft: `3px solid ${f.varijanta === 'pc' || f.varijanta === 'c2' ? C.violet : f.varijanta === 'c0' ? C.sky : C.lime}`, borderRadius: '0 8px 8px 0', padding: '12px 16px', margin: '12px 0', fontFamily: C.mono, fontSize: 13, lineHeight: 2 }}>
            <span style={{ color: C.t1, fontWeight: 500 }}>{f.label}</span>
            {f.retci.map((retci, ri) => (
              <div key={ri}>
                {retci.map((d, di) => <FormulaPart key={di} dio={d} varijanta={f.varijanta} />)}
              </div>
            ))}
          </div>
        ))}
        {blok.callout && <Callout {...blok.callout} />}
        {blok.primjeri && (
          <>
            <div style={{ fontFamily: C.mono, fontSize: 10, fontWeight: 500, letterSpacing: 1.5, color: C.sky, textTransform: 'uppercase', margin: '20px 0 10px' }}>→ Primjeri</div>
            <div style={{ marginBottom: 10 }}>
              {blok.primjeri.map((p, pi) => (
                <div key={pi} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 10, alignItems: 'start', padding: '9px 0', borderBottom: pi < blok.primjeri.length - 1 ? `1px solid ${C.bd}` : 'none' }}>
                  <div style={{ fontSize: 14, color: C.t1, lineHeight: 1.5 }} dangerouslySetInnerHTML={html(p.en.replace(/<b class="pc">/g, `<b style="color:${C.violet}">`))} />
                  <span style={{ color: C.t3, fontSize: 12 }}>→</span>
                  <div style={{ fontSize: 12.5, color: C.t2, lineHeight: 1.5, fontFamily: C.mono }}>{p.hr}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function StateVerbDrill({ zadaci, tip = 'stateVerb' }) {
  const [chosen, setChosen] = useState({})
  const score = Object.values(chosen).filter(Boolean).length
  const allDone = Object.keys(chosen).length === zadaci.length
  return (
    <div style={{ margin: '16px 0' }}>
      {zadaci.map((z) => {
        const picked = chosen[z.id]
        const done = picked !== undefined
        return (
          <div key={z.id} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '14px 18px', marginBottom: 8 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.t1, marginBottom: 12 }}>{z.recenica}</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {z.opcije.map((op, oi) => {
                const isCorrect = oi === z.tocnoIdx
                let s = { background: C.bgInput, border: `1px solid ${C.bdMid}`, color: C.t2, cursor: done ? 'default' : 'pointer' }
                if (done) {
                  if (isCorrect) s = { background: C.greenDim, border: `1px solid ${C.greenBorder}`, color: C.green, cursor: 'default' }
                  else if (picked === oi) s = { background: C.redDim, border: `1px solid ${C.redBorder}`, color: C.red, cursor: 'default' }
                }
                return (
                  <button key={oi} type="button" disabled={done}
                    onClick={() => !done && setChosen(c => ({ ...c, [z.id]: oi === z.tocnoIdx ? oi : oi }))}
                    style={{ padding: '8px 18px', borderRadius: 8, fontFamily: C.mono, fontSize: 12.5, fontWeight: 600, border: '1px solid', transition: 'all .12s', ...s }}
                  >
                    {op}
                  </button>
                )
              })}
            </div>
            {done && (
              <div style={{ marginTop: 8, fontFamily: C.mono, fontSize: 12, lineHeight: 1.6, padding: '8px 12px', borderRadius: 8, ...(chosen[z.id] === z.tocnoIdx ? { background: C.greenDim, color: C.green, border: `1px solid ${C.greenBorder}` } : { background: C.redDim, color: C.red, border: `1px solid ${C.redBorder}` }) }}>
                {chosen[z.id] === z.tocnoIdx
                  ? `✓ Točno! ${z.tocnaForma} — ${tip === 'irregular' ? 'irregular verb, Past Simple.' : 'state verb, uvijek PS.'}`
                  : `✗ Netočno. Točan odgovor: ${z.tocnaForma} — ${tip === 'irregular' ? 'irregular verb → nauči napamet!' : 'state verb → UVIJEK Present Simple!'}`}
              </div>
            )}
          </div>
        )
      })}
      {allDone && (
        <div style={{ textAlign: 'center', padding: '20px', background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, marginTop: 12 }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: C.lime, fontFamily: C.mono, letterSpacing: -2 }}>{score}/{zadaci.length}</div>
          <div style={{ fontSize: 12.5, color: C.t2, marginTop: 4 }}>
            {score === zadaci.length
              ? (tip === 'irregular' ? 'Savršen! Irregular verbs su ti jasni. 🎉' : 'Savršen rezultat! State verbs su ti jasni. 🎉')
              : score >= 4 ? (tip === 'irregular' ? 'Odlično! Još malo ponavljanja.' : 'Odlično! Još malo i automatiziraš to.')
              : score >= 3 ? (tip === 'irregular' ? 'Dobro — ali ponovi tablicu irregular verbs.' : 'Dobro — ali pazi na zamke! Ponovi DANGER ZONE sekciju.')
              : (tip === 'irregular' ? 'Vrati se na tablicu i nauči irregular verbe napamet.' : 'Vrati se na tablicu state verbs i ponovi.')}
          </div>
        </div>
      )}
    </div>
  )
}

function DecisionTreeNode({ node, depth = 0 }) {
  if (!node) return null
  const indent = depth > 0 ? { paddingLeft: 22, borderLeft: `2px solid ${C.bdMid}`, marginLeft: 6, marginBottom: 6 } : {}
  if (node.rezultatNote) {
    return (
      <div style={{ ...indent }}>
        <div style={{ borderRadius: 12, border: `1px solid ${C.skyBorder}`, padding: '13px 16px', marginBottom: 6, fontSize: 12, fontWeight: 500, fontFamily: C.mono, background: C.skyDim, color: C.sky }} dangerouslySetInnerHTML={html(node.rezultatNote)} />
      </div>
    )
  }
  const RES_MAP = { PS: 'Present Simple', PC: 'Present Continuous' }
  const daRez = node.da?.rezultat || ''
  const daLabel = node.da?.label || RES_MAP[daRez] || daRez
  const daIsPC = daRez === 'PC' || daLabel.includes('Continuous')
  const isQ = node.pitanje
  return (
    <div style={indent}>
      {isQ && <div style={{ borderRadius: 12, border: `1px solid ${C.bdMid}`, padding: '13px 16px', marginBottom: 6, fontSize: 13.5, fontWeight: 600, background: C.bgCard, color: C.t1 }} dangerouslySetInnerHTML={html(node.pitanje)} />}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 6, marginBottom: 6 }}>
        {node.da && (
          <div style={{ flex: 1, borderRadius: 12, border: `1px solid ${daIsPC ? C.violetBorder : C.limeBorder}`, padding: '13px 16px', background: daIsPC ? C.violetDim : C.limeDim, color: daIsPC ? C.violet : C.lime, fontSize: 13.5, fontWeight: 600 }}>
            ✅ DA → <strong>{daLabel}</strong><br />
            <small style={{ fontSize: 11, fontWeight: 500 }}>{node.da.napomena}</small>
          </div>
        )}
        {node.da && node.ne && <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, textAlign: 'center', padding: '5px 4px', whiteSpace: 'nowrap', alignSelf: 'center' }}>NE ↓</div>}
      </div>
      {node.ne && !node.ne.rezultat && (
        <DecisionTreeNode node={node.ne} depth={depth + 1} />
      )}
    </div>
  )
}

function VocabTopic({ blok }) {
  const [revealed, setRevealed] = useState({})
  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 22 }}>{blok.ikona}</span>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: C.t1 }}>{blok.naslov}</div>
          <div style={{ fontFamily: C.mono, fontSize: 10, color: C.t3, marginTop: 2 }}>{blok.count}</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))', gap: 8 }}>
        {blok.rijeci.map((r, i) => (
          <div key={i}
            onClick={() => setRevealed(rv => ({ ...rv, [i]: !rv[i] }))}
            role="button" tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setRevealed(rv => ({ ...rv, [i]: !rv[i] }))}
            style={{ background: C.bgCard, border: `1px solid ${revealed[i] ? C.limeBorder : C.bd}`, borderRadius: 10, padding: '10px 14px', cursor: 'pointer', transition: 'border-color .15s', userSelect: 'none' }}>
            <div style={{ fontFamily: C.mono, fontSize: 9, color: C.t3, marginBottom: 3, textTransform: 'uppercase', letterSpacing: .8 }}>{r.kategorija}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: revealed[i] ? C.lime : C.t1 }}>{r.rijec}</div>
            {revealed[i] && (
              <div style={{ marginTop: 7, paddingTop: 7, borderTop: `1px solid ${C.bd}` }}>
                <div style={{ fontSize: 12.5, color: C.sky, fontWeight: 600, marginBottom: 4 }}>{r.prijevod}</div>
                <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t2, fontStyle: 'italic', lineHeight: 1.5 }}>{r.primjer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Listening / Learn components ────────────────────────────────────────────

function StrategyCard({ blok }) {
  const b = BOJ[blok.brojBoja] || BOJ.lime
  return (
    <div
      onMouseEnter={e => e.currentTarget.style.borderColor = C.bdLight}
      onMouseLeave={e => e.currentTarget.style.borderColor = C.bdMid}
      style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '16px 18px', marginBottom: 10, transition: 'border-color .15s' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.mono, fontSize: 12, fontWeight: 700, flexShrink: 0, background: b.bg, color: b.color }}>{blok.broj}</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.t1 }}>{blok.naslov}</div>
      </div>
      <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.6, paddingLeft: 38 }} dangerouslySetInnerHTML={html(blok.tekst)} />
      {blok.savjet && <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, marginTop: 6, paddingLeft: 38 }}>→ {blok.savjet}</div>}
    </div>
  )
}

function SignalListenBlock({ blok }) {
  const b = BOJ[blok.boja] || BOJ.sky
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, marginBottom: 8, overflow: 'hidden' }}>
      <div style={{ padding: '10px 16px', fontFamily: C.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: b.color, background: b.bg, borderBottom: `1px solid ${C.bd}` }}>{blok.naslov}</div>
      <div>
        {blok.items.map((item, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 12, padding: '10px 16px', borderBottom: i < blok.items.length - 1 ? `1px solid ${C.bd}` : 'none', alignItems: 'start' }}>
            <div style={{ fontFamily: C.mono, fontSize: 12.5, fontWeight: 700, color: b.color }}>{item.rijec || item.riječ}</div>
            <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.5 }}>{item.opis}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TrapCard({ blok }) {
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.redBorder}`, borderRadius: 12, overflow: 'hidden', marginBottom: 10 }}>
      <div style={{ padding: '10px 16px', borderBottom: `1px solid ${C.bd}`, fontFamily: C.mono, fontSize: 11.5, fontWeight: 700, color: C.red }}>{blok.naslov}</div>
      <div style={{ padding: '12px 16px', fontSize: 13, color: C.t2, lineHeight: 1.6 }} dangerouslySetInnerHTML={html(blok.tekst)} />
    </div>
  )
}

function ListenTask({ blok }) {
  const tipMap = {
    'MCQ':      { bg: C.limeDim,   color: C.lime,   border: C.limeBorder,   label: 'TASK A · MCQ' },
    'Gap fill': { bg: C.violetDim, color: C.violet, border: C.violetBorder, label: 'TASK B · Gap fill' },
  }
  const badge = tipMap[blok.tip_zadatka] || { bg: C.skyDim, color: C.sky, border: C.skyBorder, label: blok.tip_zadatka }
  const calloutStyle = blok.tip_zadatka === 'MCQ'
    ? { bg: C.skyDim,   border: C.skyBorder,   icon: '💡' }
    : { bg: C.amberDim, border: C.amberBorder, icon: '⚠️' }
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, overflow: 'hidden', marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', background: C.bgSurface, borderBottom: `1px solid ${C.bd}` }}>
        <span style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, padding: '3px 9px', borderRadius: 4, background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}>{badge.label}</span>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.t1 }}>{blok.naslov}</div>
      </div>
      <div style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: C.bgInput, border: `1px solid ${C.bdMid}`, borderRadius: 10, marginBottom: 14 }}>
          <span style={{ fontSize: 22 }}>🎧</span>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: C.t1 }}>{blok.sudionici} · {blok.format}</div>
            <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, marginTop: 2 }}>{blok.trajanje}</div>
          </div>
        </div>
        {blok.script && (
          <div style={{ fontSize: 13.5, lineHeight: 1.8, color: C.t2, marginBottom: 14 }}>
            {blok.script.map((line, i) => (
              <div key={i} style={{ marginBottom: 5 }}>
                <span style={{ fontFamily: C.mono, fontSize: 11, fontWeight: 700, color: C.sky, marginRight: 8 }}>{line.spk}:</span>
                <span dangerouslySetInnerHTML={html(line.tekst)} />
              </div>
            ))}
          </div>
        )}
        {blok.script_mono && (
          <div style={{ fontSize: 13.5, lineHeight: 1.85, color: C.t2, marginBottom: 14 }} dangerouslySetInnerHTML={html(blok.script_mono)} />
        )}
        {blok.objasnjenje && (
          <div style={{ display: 'flex', gap: 10, padding: '12px 14px', borderRadius: 10, marginTop: 4, background: calloutStyle.bg, border: `1px solid ${calloutStyle.border}` }}>
            <span style={{ flexShrink: 0 }}>{calloutStyle.icon}</span>
            <div style={{ fontSize: 13, lineHeight: 1.65, color: C.t2 }} dangerouslySetInnerHTML={html(blok.objasnjenje)} />
          </div>
        )}
      </div>
    </div>
  )
}

function NoteCompletionTask({ blok }) {
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, overflow: 'hidden', marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', background: C.bgSurface, borderBottom: `1px solid ${C.bd}` }}>
        <span style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, padding: '3px 9px', borderRadius: 4, background: C.amberDim, color: C.amber, border: `1px solid ${C.amberBorder}` }}>TASK C · Note completion</span>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.t1 }}>{blok.naslov}</div>
      </div>
      <div style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: C.bgInput, border: `1px solid ${C.bdMid}`, borderRadius: 10, marginBottom: 14 }}>
          <span style={{ fontSize: 22 }}>🎧</span>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: C.t1 }}>{blok.sudionici} · {blok.format}</div>
            <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, marginTop: 2 }}>{blok.trajanje}</div>
          </div>
        </div>
        <div style={{ fontSize: 13.5, lineHeight: 1.85, color: C.t2, marginBottom: 16 }} dangerouslySetInnerHTML={html(blok.script_mono)} />
        <div style={{ fontFamily: C.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: C.t3, marginBottom: 10 }}>// popuni bilješke prema audio zapisu</div>
        <div style={{ background: C.bgSurface, border: `1px solid ${C.bdMid}`, borderRadius: 10, overflow: 'hidden', marginBottom: 14 }}>
          <div style={{ padding: '10px 16px', background: C.bgInput, borderBottom: `1px solid ${C.bd}`, fontFamily: C.mono, fontSize: 11, fontWeight: 700, color: C.lime }}>City Language Centre — Course Information</div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {blok.table.map((row, i) => (
                <tr key={i} style={{ borderBottom: i < blok.table.length - 1 ? `1px solid ${C.bd}` : 'none', background: i % 2 === 1 ? C.bgCard : 'transparent' }}>
                  <td style={{ padding: '10px 16px', fontFamily: C.mono, fontSize: 11, color: C.t3, width: 140 }}>{row.label}</td>
                  <td style={{ padding: '10px 16px', fontSize: 13, fontWeight: 600, color: C.lime }}>{row.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {blok.objasnjenje && (
          <div style={{ display: 'flex', gap: 10, padding: '12px 14px', borderRadius: 10, background: C.amberDim, border: `1px solid ${C.amberBorder}` }}>
            <span style={{ flexShrink: 0 }}>⚠️</span>
            <div style={{ fontSize: 13, lineHeight: 1.65, color: C.t2 }} dangerouslySetInnerHTML={html(blok.objasnjenje)} />
          </div>
        )}
      </div>
    </div>
  )
}

function StrategyDrill({ blok }) {
  const [chosen, setChosen] = useState({})
  const score = Object.entries(chosen).filter(([qi, oi]) => +oi === blok.pitanja[+qi].tocno).length
  const allDone = Object.keys(chosen).length === blok.pitanja.length
  return (
    <div style={{ margin: '16px 0' }}>
      {blok.pitanja.map((q, qi) => {
        const picked = chosen[qi]
        const done = picked !== undefined
        return (
          <div key={qi} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '14px 16px', marginBottom: 8 }}>
            <div style={{ fontSize: 13.5, color: C.t1, marginBottom: 10, lineHeight: 1.5 }}>{q.pitanje}</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {q.opcije.map((op, oi) => {
                const isCorrect = oi === q.tocno
                let s = { background: C.bgInput, border: `1px solid ${C.bdMid}`, color: C.t2, cursor: done ? 'default' : 'pointer' }
                if (done) {
                  if (isCorrect) s = { ...s, background: C.greenDim, border: `1px solid ${C.greenBorder}`, color: C.green, cursor: 'default' }
                  else if (+picked === oi) s = { ...s, background: C.redDim, border: `1px solid ${C.redBorder}`, color: C.red, cursor: 'default' }
                }
                return (
                  <button key={oi} type="button" disabled={done}
                    onClick={() => !done && setChosen(c => ({ ...c, [qi]: oi }))}
                    style={{ padding: '7px 16px', borderRadius: 8, fontFamily: C.mono, fontSize: 12, fontWeight: 600, transition: 'all .12s', ...s }}>
                    {op}
                  </button>
                )
              })}
            </div>
            {done && (
              <div style={{ marginTop: 8, fontFamily: C.mono, fontSize: 12, padding: '8px 12px', borderRadius: 8, lineHeight: 1.5, ...(+chosen[qi] === q.tocno ? { background: C.greenDim, color: C.green, border: `1px solid ${C.greenBorder}` } : { background: C.redDim, color: C.red, border: `1px solid ${C.redBorder}` }) }}>
                {+chosen[qi] === q.tocno ? '✓ Točno! ' : '✗ Netočno. '}{q.objasnjenje}
              </div>
            )}
          </div>
        )
      })}
      {allDone && (
        <div style={{ textAlign: 'center', padding: '14px', background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, marginTop: 4 }}>
          <div style={{ fontFamily: C.mono, fontSize: 22, fontWeight: 700, color: score === blok.pitanja.length ? C.green : score >= 3 ? C.amber : C.red }}>{score}/{blok.pitanja.length}</div>
          <div style={{ fontSize: 12, color: C.t2, marginTop: 4 }}>{score === blok.pitanja.length ? 'Savršeno! ✓' : score >= 3 ? 'Odlično! Još malo.' : 'Ponovi strategije.'}</div>
        </div>
      )}
    </div>
  )
}

// ─── MCQ Tactic components (ch12) ────────────────────────────────────────────

function TacticCard({ blok }) {
  const col = BOJ[blok.boja] || BOJ.lime
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderLeft: `3px solid ${col.color}`, borderRadius: 12, padding: '16px 20px', marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div style={{ width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.mono, fontSize: 11, fontWeight: 700, background: col.bg, color: col.color, flexShrink: 0 }}>{blok.korak}</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.t1 }}>{blok.naslov}</div>
      </div>
      <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.65, paddingLeft: 36 }} dangerouslySetInnerHTML={html(blok.tekst)} />
      {blok.savjet && <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, marginTop: 6, paddingLeft: 36 }}>{blok.savjet}</div>}
    </div>
  )
}

function DistractorGrid({ blok }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, margin: '16px 0' }}>
      {blok.stavke.map((s, i) => (
        <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '12px 16px' }}>
          <div style={{ fontFamily: C.mono, fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8, color: C.red }}>{s.broj}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.t1, marginBottom: 6 }}>{s.naslov}</div>
          <div style={{ fontSize: 12, color: C.t2, lineHeight: 1.6 }} dangerouslySetInnerHTML={html(s.primjer.replace(/\n/g, '<br>'))} />
        </div>
      ))}
    </div>
  )
}

function AnnotatedMCQ({ blok }) {
  const statusStyle = (s) => ({
    correct: { border: `1px solid ${C.greenBorder}`, background: C.greenDim, color: C.green },
    wrong: { border: `1px solid ${C.bdMid}`, background: `rgba(239,68,68,.04)`, color: C.t3 },
    trap: { border: `1px solid ${C.amberBorder}`, background: C.amberDim, color: C.amber },
  }[s] || {})
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 16, overflow: 'hidden', margin: '16px 0' }}>
      <div style={{ padding: '12px 18px', background: C.bgSurface, borderBottom: `1px solid ${C.bd}`, fontFamily: C.mono, fontSize: 10, fontWeight: 700, color: C.t3, letterSpacing: 1, textTransform: 'uppercase' }}>Pitanje: {blok.pitanje}</div>
      <div style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {blok.opcije.map((o, i) => (
            <div key={i} style={{ padding: '10px 14px', borderRadius: 8, display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.5, fontSize: 13, ...statusStyle(o.status) }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: C.bgInput, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.mono, fontSize: 10, fontWeight: 700, color: C.t3, flexShrink: 0, marginTop: 1 }}>{o.slovo}</div>
              <div style={{ flex: 1 }} dangerouslySetInnerHTML={html(o.tekst)} />
              <div style={{ fontFamily: C.mono, fontSize: 10, padding: '2px 7px', borderRadius: 4, flexShrink: 0 }}>{o.anotacija}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: '10px 14px', borderRadius: 8, background: C.skyDim, border: `1px solid ${C.skyBorder}`, fontSize: 12.5, color: C.t2, lineHeight: 1.7 }} dangerouslySetInnerHTML={html('💡 ' + blok.analiza)} />
      </div>
    </div>
  )
}

function SubjectGrid({ blok }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, margin: '16px 0' }}>
      {blok.stavke.map((s, i) => (
        <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '12px 14px' }}>
          <div style={{ fontFamily: C.mono, fontSize: 10, fontWeight: 700, color: C.t3, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{s.naslov}</div>
          <div style={{ fontSize: 12.5, color: C.t2, lineHeight: 1.6 }} dangerouslySetInnerHTML={html(s.zamke)} />
        </div>
      ))}
    </div>
  )
}

// Main block renderer for Layer 1
function ContentBlock({ blok }) {
  switch (blok.tip) {
    case 'sectionLabel':
      return <div style={{ fontFamily: C.mono, ...secLabel, marginTop: 28 }}>{blok.tekst}</div>
    case 'prose':
      return <p style={prose} dangerouslySetInnerHTML={html(blok.tekst)} />
    case 'divider':
      return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
    case 'gramBlock':
      return <GramBlock blok={blok} />
    case 'usporedba': {
      const varMap = { ps: { bg: C.limeDim, color: C.lime, border: C.limeBorder }, pc: { bg: C.violetDim, color: C.violet, border: C.violetBorder }, c0: { bg: C.skyDim, color: C.sky, border: C.skyBorder }, c1: { bg: C.limeDim, color: C.lime, border: C.limeBorder }, c2: { bg: C.violetDim, color: C.violet, border: C.violetBorder }, sky: { bg: C.skyDim, color: C.sky, border: C.skyBorder }, amber: { bg: C.amberDim, color: C.amber, border: C.amberBorder }, lime: { bg: C.limeDim, color: C.lime, border: C.limeBorder }, violet: { bg: C.violetDim, color: C.violet, border: C.violetBorder } }
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '16px 0 24px' }}>
          {[blok.lijevo, blok.desno].map((s) => {
            const sv = varMap[s.varijanta] || varMap.ps
            return (
              <div key={s.varijanta} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ padding: '10px 14px', fontFamily: C.mono, fontSize: 10.5, fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', borderBottom: `1px solid ${sv.border}`, background: sv.bg, color: sv.color }}>{s.naslov}</div>
                <div style={{ padding: '12px 14px' }}>
                  {s.retci.map((r, i) => (
                    <div key={i} style={{ fontSize: 12.5, color: C.t2, padding: '6px 0', borderBottom: i < s.retci.length - 1 ? `1px solid ${C.bd}` : 'none', lineHeight: 1.5 }}>
                      <b style={{ color: C.t1, display: 'block', fontSize: 12, marginBottom: 1 }}>{r.b}</b>{r.t}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )
    }
    case 'signalWords': {
      const swLabels = blok.labeli || { left: '// PS — signal words', right: '// PC — signal words' }
      const swPairs = blok.left
        ? [{ label: swLabels.left, color: C.lime, boja: blok.bojaLeft || 'lime', words: blok.left }, { label: swLabels.right, color: C.violet, boja: blok.bojaRight || 'violet', words: blok.right }]
        : [{ label: swLabels.left || '// PS — signal words', color: C.lime, boja: 'lime', words: blok.ps }, { label: swLabels.right || '// PC — signal words', color: C.violet, boja: 'violet', words: blok.pc }]
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '14px 0 22px' }}>
          {swPairs.map(({ label, color, boja, words }) => (
            <div key={label} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: 14 }}>
              <div style={{ fontFamily: C.mono, fontSize: 10, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12, paddingBottom: 8, borderBottom: `1px solid ${C.bd}`, color }}>{label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {words.map((w) => <span key={w} style={chip(boja)}>{w}</span>)}
              </div>
            </div>
          ))}
        </div>
      )
    }
    case 'maturaRadar':
      return (
        <div style={{ border: `1px solid ${C.skyBorder}`, borderRadius: 16, overflow: 'hidden', margin: '22px 0' }}>
          <div style={{ background: C.skyDim, borderBottom: `1px solid ${C.skyBorder}`, padding: '10px 18px', fontFamily: C.mono, fontSize: 10, fontWeight: 700, letterSpacing: 2, color: C.sky, textTransform: 'uppercase' }}>📡 matura radar — zamke i gdje se pojavljuju</div>
          <div style={{ padding: '6px 0' }}>
            {blok.stavke.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '11px 18px', borderBottom: i < blok.stavke.length - 1 ? `1px solid ${C.bd}` : 'none' }}>
                <span style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, padding: '3px 8px', borderRadius: 4, flexShrink: 0, marginTop: 1, letterSpacing: .5, textTransform: 'uppercase', ...(s.tip === 'trap' ? { background: C.redDim, color: C.red, border: `1px solid ${C.redBorder}` } : { background: C.skyDim, color: C.sky, border: `1px solid ${C.skyBorder}` }) }}>
                  {s.tip === 'trap' ? `ZAMKA ${i + 1}` : 'GDJE'}
                </span>
                <div className="radar-text-content" style={{ fontSize: 13, color: C.t2, lineHeight: 1.6 }}>
                  <b style={{ color: C.t1 }}>{s.naslov}</b>
                  {s.opis.split('\n').map((l, li) => <div key={li} style={{ marginTop: li === 0 ? 4 : 2 }} dangerouslySetInnerHTML={html(l)} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    case 'agreementTablica':
      return (
        <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: C.bgElevated }}>
                {['Rečenica', '❌ Zamka', '✓ Točno'].map((h, i) => (
                  <th key={i} style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: i === 1 ? C.red : i === 2 ? C.lime : C.t2, borderBottom: `1px solid ${C.bd}`, width: i === 0 ? '44%' : '28%' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blok.retci.map((r, i) => (
                <tr key={i} style={{ borderBottom: i < blok.retci.length - 1 ? `1px solid ${C.bd}` : 'none' }}>
                  <td style={{ padding: '8px 12px', color: C.t1 }} dangerouslySetInnerHTML={html(r.recenica)} />
                  <td style={{ padding: '8px 12px', color: C.red }}>{r.zamka}</td>
                  <td style={{ padding: '8px 12px', color: C.lime, fontWeight: 600 }}>{r.tocno}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {blok.napomena && (
            <div style={{ padding: '8px 14px', background: C.amberDim, borderTop: `1px solid ${C.amberBorder}` }}>
              <span style={{ fontSize: 12, color: C.amber }} dangerouslySetInnerHTML={html(blok.napomena)} />
            </div>
          )}
        </div>
      )
    case 'revealNiz':
      return (
        <div style={{ marginBottom: 16 }}>
          {blok.kartice.map((k, i) => <RevealCard key={i} pitanje={k.pitanje} odgovor={k.odgovor} />)}
        </div>
      )
    case 'callout':
      return <Callout varijanta={blok.varijanta} ikona={blok.ikona} naslov={blok.naslov} tekst={blok.tekst} />
    case 'tablica':
      return (
        <div style={{ overflowX: 'auto', margin: '14px 0 22px', border: `1px solid ${C.bdMid}`, borderRadius: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {blok.zaglavlja.map((h) => (
                  <th key={h} style={{ padding: '10px 14px', background: C.bgSurface, color: C.t3, fontFamily: C.mono, fontSize: 10, fontWeight: 500, letterSpacing: 1.2, textTransform: 'uppercase', textAlign: 'left', borderBottom: `1px solid ${C.bdMid}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blok.retci.map((r, ri) => (
                <tr key={ri} style={{ borderBottom: ri < blok.retci.length - 1 ? `1px solid ${C.bd}` : 'none', background: ri % 2 === 1 ? 'rgba(255,255,255,.015)' : 'transparent' }}>
                  {r.map((cell, ci) => (
                    <td key={ci} style={{ padding: '10px 14px', color: C.t2, lineHeight: 1.55, verticalAlign: 'top' }} dangerouslySetInnerHTML={html(cell.replace(/<code>/g, `<code style="font-family:${C.mono};font-size:11.5px;background:${C.bgInput};padding:1px 5px;border-radius:4px;color:${C.lime}">`).replace(/<b>/g, `<b style="color:${C.t1}">`))} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'stateVerbDrill':
      return <StateVerbDrill zadaci={blok.zadaci} tip={blok.drillTip} />
    case 'mikroProvedba':
      return (
        <div style={{ ...card({ borderColor: C.skyBorder, background: C.skyDim }), marginBottom: 16 }}>
          <div style={{ fontFamily: C.mono, fontSize: 10.5, fontWeight: 500, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8, color: C.sky }}>🔍 Mikro-provjera — klikni za odgovor</div>
          <RevealCard pitanje={blok.pitanje} odgovor={blok.odgovor} />
        </div>
      )
    case 'decisionTree':
      return <DecisionTreeNode node={blok} />
    case 'vocabTopic':
      return <VocabTopic blok={blok} />
    case 'strategyCard':
      return <StrategyCard blok={blok} />
    case 'signalListenBlock':
      return <SignalListenBlock blok={blok} />
    case 'trapCard':
      return <TrapCard blok={blok} />
    case 'listenTask':
      return <ListenTask blok={blok} />
    case 'noteCompletionTask':
      return <NoteCompletionTask blok={blok} />
    case 'strategyDrill':
      return <StrategyDrill blok={blok} />
    case 'tacticCard':
      return <TacticCard blok={blok} />
    case 'distractorGrid':
      return <DistractorGrid blok={blok} />
    case 'annotatedMCQ':
      return <AnnotatedMCQ blok={blok} />
    case 'subjectGrid':
      return <SubjectGrid blok={blok} />
    default:
      return null
  }
}

function Layer1({ blokovi }) {
  if (!blokovi) return null
  return (
    <div>
      {blokovi.map((b, i) => <ContentBlock key={i} blok={b} />)}
      <BackToTop />
    </div>
  )
}

// ─── LAYER 2: Vježba ──────────────────────────────────────────────────────────

function MultipleChoiceQuiz({ kviz }) {
  const [chosen, setChosen] = useState({})
  const [done, setDone] = useState(false)
  const total = kviz.length
  const score = kviz.filter((q, i) => chosen[i] === q.tocno).length

  const reset = () => { setChosen({}); setDone(false) }
  const scoreColor = score === total ? C.green : score >= total * 0.75 ? C.amber : C.red

  return (
    <div>
      <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '14px 18px', fontSize: 13, color: C.t2, marginBottom: 16, fontFamily: C.mono, lineHeight: 1.65 }}>
        <strong style={{ color: C.lime }}>// exam mode</strong> · Odaberi točan oblik. Svaki odgovor dolazi s objašnjenjem. Target: <strong style={{ color: C.lime }}>{Math.round(total * 0.8)}/{total}</strong> ili bolje.
      </div>

      {/* Keyboard hint */}
      <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span>⌨️ Keyboard: tipke</span>
        {['1','2','3','4'].map(k => (
          <span key={k} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 22, height: 20, padding: '0 5px', background: C.bgElevated, border: `1px solid ${C.bdMid}`, borderBottom: `2px solid ${C.bdLight}`, borderRadius: 3, fontSize: 10, fontWeight: 600, color: C.t2 }}>{k}</span>
        ))}
        <span>za odabir odgovora ·</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 22, height: 20, padding: '0 5px', background: C.bgElevated, border: `1px solid ${C.bdMid}`, borderBottom: `2px solid ${C.bdLight}`, borderRadius: 3, fontSize: 10, fontWeight: 600, color: C.t2 }}>Enter</span>
        <span>potvrđuje</span>
      </div>

      {kviz.map((q, qi) => {
        const picked = chosen[qi]
        const answered = picked !== undefined
        return (
          <div key={qi} style={{ background: C.bgCard, border: `1px solid ${answered ? (picked === q.tocno ? C.greenBorder : C.redBorder) : C.bdMid}`, borderRadius: 12, overflow: 'hidden', marginBottom: 12, transition: 'border-color .15s' }}>
            <div style={{ padding: '14px 18px', borderBottom: `1px solid ${C.bd}` }}>
              <div style={{ fontFamily: C.mono, fontSize: 9.5, color: C.t3, fontWeight: 500, letterSpacing: .5, marginBottom: 6, textTransform: 'uppercase' }}>{q.meta}</div>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: C.t1, lineHeight: 1.5, letterSpacing: -0.1 }}>{q.pitanje}</div>
            </div>
            <div style={{ padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {q.opcije.map((op, oi) => {
                let s = { background: C.bgInput, border: `1px solid ${C.bdMid}`, color: C.t2 }
                if (answered) {
                  if (oi === q.tocno) s = { background: C.greenDim, border: `1px solid ${C.greenBorder}`, color: C.green }
                  else if (oi === picked) s = { background: C.redDim, border: `1px solid ${C.redBorder}`, color: C.red }
                }
                const letterColor = answered ? (oi === q.tocno ? C.green : oi === picked ? C.red : C.t3) : C.t3
                return (
                  <button key={oi} type="button" disabled={answered}
                    onClick={() => !answered && setChosen(c => ({ ...c, [qi]: oi }))}
                    onMouseEnter={(e) => !answered && (e.currentTarget.style.background = C.bgHover, e.currentTarget.style.borderColor = C.bdLight, e.currentTarget.style.color = C.t1)}
                    onMouseLeave={(e) => !answered && (e.currentTarget.style.background = C.bgInput, e.currentTarget.style.borderColor = C.bdMid, e.currentTarget.style.color = C.t2)}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: '1px solid', fontSize: 13.5, textAlign: 'left', cursor: answered ? 'default' : 'pointer', transition: 'all .12s', fontFamily: C.mono, ...s }}
                  >
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 4, border: `1px solid ${C.bdMid}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: letterColor }}>
                      {answered && oi === q.tocno ? '✓' : answered && oi === picked && oi !== q.tocno ? '✗' : 'ABCD'[oi]}
                    </span>
                    {op}
                  </button>
                )
              })}
            </div>
            {answered && (
              <div style={{ padding: '12px 18px', fontSize: 12.5, lineHeight: 1.7, borderTop: `1px solid ${C.bd}`, fontFamily: C.mono, ...(picked === q.tocno ? { background: C.greenDim, color: C.green } : { background: C.redDim, color: C.red }) }}>
                <div style={{ padding: '10px 14px', borderRadius: 8, border: `1px solid ${picked === q.tocno ? C.greenBorder : C.redBorder}` }}>
                  {picked === q.tocno ? q.objasnjenje.c : q.objasnjenje.w}
                </div>
              </div>
            )}
          </div>
        )
      })}

      {Object.keys(chosen).length === total && (
        <div style={{ textAlign: 'center', padding: '36px 24px', background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 16, marginTop: 16 }}>
          <div style={{ fontSize: 56, fontWeight: 700, color: scoreColor, letterSpacing: -3, fontFamily: C.mono }}>{score}/{total}</div>
          <div style={{ fontSize: 13.5, color: C.t2, marginTop: 8 }}>
            {score === total ? 'Perfect score. This chapter is done. 🎉'
              : score / total >= 0.9 ? 'Excellent! Review the questions you missed.'
              : score / total >= 0.7 ? 'Good. Focus on the areas where you made mistakes.'
              : score / total >= 0.5 ? 'Go back to Learn and review the grammar rules.'
              : 'Return to Learn and go slowly through the grammar. You can do it!'}
          </div>
          <button type="button" onClick={reset} style={{ marginTop: 16, padding: '9px 22px', background: C.lime, color: C.bg, border: 'none', borderRadius: 8, fontFamily: C.mono, fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}>↺ Ponovi quiz</button>
        </div>
      )}
    </div>
  )
}

function SpeedDrill({ drill, labels = { ps: 'Present Simple', pc: 'Present Continuous' } }) {
  const [idx, setIdx] = useState(0)
  const [results, setResults] = useState([])
  const [feedback, setFeedback] = useState(null)
  const done = idx >= drill.length && results.length === drill.length

  const handleAns = useCallback((ans) => {
    if (feedback) return
    const ok = ans === drill[idx].ans
    setFeedback({ ok, exp: drill[idx].exp, chosen: ans })
    const newResults = [...results, ok]
    setTimeout(() => {
      setFeedback(null)
      setResults(newResults)
      setIdx(i => i + 1)
    }, 1600)
  }, [idx, drill, results, feedback])

  const reset = () => { setIdx(0); setResults([]); setFeedback(null) }
  const score = results.filter(Boolean).length

  return (
    <div>
      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 5, marginBottom: 16, flexWrap: 'wrap' }}>
        {drill.map((_, i) => {
          let bg = C.bgElevated, border = C.bdMid
          if (i < results.length) { bg = results[i] ? C.green : C.red; border = results[i] ? C.greenBorder : C.redBorder }
          else if (i === idx) { bg = C.limeDim; border = C.lime }
          return <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: bg, border: `1px solid ${border}`, transition: 'all .2s' }} />
        })}
      </div>

      {done ? (
        <div style={{ textAlign: 'center', padding: 28, background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12 }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: C.lime, fontFamily: C.mono, letterSpacing: -2 }}>{score}/{drill.length}</div>
          <div style={{ fontSize: 13, color: C.t2, marginTop: 6 }}>
            {score === drill.length ? 'Savršeno! Instinkt ti je odličan. 🎉'
              : score >= 8 ? 'Odlično! Još malo i bit ćeš automatski. 💪'
              : score >= 6 ? 'Dobro! Fokusiraj se na signal words i zamke.'
              : 'Ponovi Learn tab, pa pokušaj opet.'}
          </div>
          <button type="button" onClick={reset} style={{ marginTop: 14, padding: '9px 22px', background: C.lime, color: C.bg, border: 'none', borderRadius: 8, fontFamily: C.mono, fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}>↺ Ponovi drill</button>
        </div>
      ) : idx < drill.length ? (
        <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '18px 20px', marginBottom: 14 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: C.t1, marginBottom: 14, lineHeight: 1.4 }} dangerouslySetInnerHTML={html(drill[idx].recenica)} />
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {drill[idx].opts
              ? drill[idx].opts.map((opt, i) => {
                  const isCorrect = i === drill[idx].ans
                  let s = { background: C.bgInput, borderColor: C.bdMid, color: C.t2, cursor: feedback ? 'default' : 'pointer', opacity: 1 }
                  if (feedback) {
                    if (isCorrect) s = { background: C.greenDim, borderColor: C.greenBorder, color: C.green, cursor: 'default', opacity: 1 }
                    else if (i === feedback.chosen) s = { background: C.redDim, borderColor: C.redBorder, color: C.red, cursor: 'default', opacity: 1 }
                    else s = { ...s, opacity: 0.4 }
                  }
                  return (
                    <button key={i} type="button" disabled={!!feedback} onClick={() => handleAns(i)}
                      style={{ padding: '10px 22px', borderRadius: 8, fontFamily: C.mono, fontSize: 12.5, fontWeight: 700, border: '1px solid', transition: 'all .15s', ...s }}
                    >
                      {opt}
                    </button>
                  )
                })
              : [{ label: labels.ps, key: 'ps', c: C.lime, bg: C.limeDim, border: C.limeBorder }, { label: labels.pc, key: 'pc', c: C.violet, bg: C.violetDim, border: C.violetBorder }].map(({ label, key, c, bg, border }) => (
                <button key={key} type="button" disabled={!!feedback}
                  onClick={() => handleAns(key)}
                  style={{ padding: '10px 22px', borderRadius: 8, fontFamily: C.mono, fontSize: 12.5, fontWeight: 700, cursor: feedback ? 'default' : 'pointer', border: '1px solid', background: feedback ? (drill[idx].ans === key ? C.green : (key === feedback.chosen ? C.redDim : bg)) : bg, color: feedback ? (drill[idx].ans === key ? C.bg : (key === feedback.chosen ? C.red : c)) : c, borderColor: feedback ? (drill[idx].ans === key ? C.green : (key === feedback.chosen ? C.redBorder : border)) : border, transition: 'all .15s' }}
                >
                  {label}
                </button>
              ))}
          </div>
          {feedback && (
            <div style={{ marginTop: 10, fontFamily: C.mono, fontSize: 12, lineHeight: 1.6, padding: '9px 12px', borderRadius: 8, ...(feedback.ok ? { background: C.greenDim, color: C.green, border: `1px solid ${C.greenBorder}` } : { background: C.redDim, color: C.red, border: `1px solid ${C.redBorder}` }) }}>
              {feedback.ok ? '✓ ' : '✗ '}{feedback.exp}
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

function FillInBlank({ stavke }) {
  const [values, setValues] = useState({})
  const [checked, setChecked] = useState({})

  const check = (i) => {
    const val = (values[i] || '').trim().toLowerCase()
    const ok = val === stavke[i].tocno.toLowerCase()
    setChecked(c => ({ ...c, [i]: { ok, val } }))
  }

  return (
    <div>
      {stavke.map((s, i) => {
        const r = checked[i]
        const isDone = !!r
        return (
          <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, overflow: 'hidden', marginBottom: 10 }}>
            <div style={{ padding: '12px 18px', borderBottom: `1px solid ${C.bd}` }}>
              <div style={{ fontFamily: C.mono, fontSize: 9.5, color: C.t3, letterSpacing: .5, textTransform: 'uppercase', marginBottom: 5 }}>{s.meta}</div>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: C.t1, letterSpacing: -0.1 }}>{s.recenica}</div>
            </div>
            <div style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <input
                type="text" disabled={isDone} placeholder="type here..."
                value={values[i] || ''}
                onChange={(e) => !isDone && setValues(v => ({ ...v, [i]: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && !isDone && check(i)}
                style={{ fontFamily: C.mono, fontSize: 13, background: C.bgInput, border: `1px solid ${isDone ? (r.ok ? C.green : C.red) : C.bdMid}`, borderRadius: 8, color: isDone ? (r.ok ? C.green : C.red) : C.t1, padding: '8px 12px', outline: 'none', width: 190, background: isDone ? (r.ok ? C.greenDim : C.redDim) : C.bgInput }}
              />
              <button type="button" disabled={isDone} onClick={() => check(i)}
                style={{ padding: '8px 16px', background: isDone ? C.bgHover : C.lime, color: isDone ? C.t3 : C.bg, border: 'none', borderRadius: 8, fontFamily: C.mono, fontSize: 12, fontWeight: 700, cursor: isDone ? 'default' : 'pointer', transition: 'all .15s' }}>
                Check
              </button>
            </div>
            {isDone && (
              <div style={{ padding: '10px 18px', fontFamily: C.mono, fontSize: 12.5, lineHeight: 1.7, borderTop: `1px solid ${C.bd}`, ...(r.ok ? { color: C.green, background: C.greenDim } : { color: C.red, background: C.redDim }) }}>
                {r.ok ? `✓ Correct: ${s.tocno}` : `✗ Your answer: ${r.val || '—'} · Correct: ${s.tocno}`} — {s.exp}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function ErrorCorrectionDrill({ stavke }) {
  const [revealed, setReveal] = useState({})
  return (
    <div>
      {stavke.map((s, i) => (
        <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, overflow: 'hidden', marginBottom: 10 }}>
          <div style={{ padding: '14px 18px', fontSize: 15, fontWeight: 600, color: C.red, letterSpacing: -0.1, borderBottom: `1px solid ${C.bd}` }}>{s.pogresno}</div>
          {!revealed[i] ? (
            <button type="button" onClick={() => setReveal(r => ({ ...r, [i]: true }))}
              onMouseEnter={(e) => e.currentTarget.style.color = C.amber}
            onMouseLeave={(e) => e.currentTarget.style.color = C.t3}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '11px 18px', fontFamily: C.mono, fontSize: 12, fontWeight: 600, color: C.t3, background: 'transparent', border: 'none', cursor: 'pointer', transition: 'color .12s', letterSpacing: .3 }}>
              ▶ Otkrij grešku
            </button>
          ) : (
            <div style={{ padding: '12px 18px', fontFamily: C.mono, fontSize: 12.5, lineHeight: 1.7, borderTop: `1px solid ${C.bd}`, background: C.bgSurface }}>
              ✅ <span style={{ color: C.green, fontWeight: 600 }}>{s.tocno}</span>
              <span style={{ color: C.t2, fontSize: 12, display: 'block', marginTop: 4 }}>{s.exp}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Chapter progress tracker ─────────────────────────────────────────────────
const CH_NAMES = {
  ch01: 'Present Simple & Continuous', ch02: 'Past Simple & Continuous',
  ch03: 'Present Perfect', ch04: 'Future: will & going to',
  ch05: 'Modal glagoli', ch06: 'Conditionals 0, 1, 2', ch07: 'Pasiv',
  ch08: 'Vokabular', ch09: 'Čitanje', ch10: 'Pisanje',
  ch11: 'Listening', ch12: 'MCQ taktika',
}

function WeakTracker() {
  const [wa, setWa] = useState(null)
  useEffect(() => {
    try { setWa(JSON.parse(localStorage.getItem('maturix_weak') || '{}')) } catch { setWa({}) }
  }, [])
  const resetOne = (k) => {
    setWa(prev => {
      const next = { ...prev }; delete next[k]
      try { localStorage.setItem('maturix_weak', JSON.stringify(next)) } catch {}
      return next
    })
  }
  const clearAll = () => { try { localStorage.removeItem('maturix_weak') } catch {} setWa({}) }
  if (wa === null) return null
  const keys = Object.keys(wa).filter(k => wa[k]?.t > 0)
    .sort((a, b) => (wa[b].w / wa[b].t) - (wa[a].w / wa[a].t))
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 16, padding: '18px 20px', marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: C.lime }}>// moja slaba područja</div>
        {keys.length > 0 && (
          <button onClick={clearAll} style={{ fontFamily: C.mono, fontSize: 9, padding: '3px 8px', color: C.t3, cursor: 'pointer', borderRadius: 6, border: `1px solid ${C.bd}`, background: 'transparent' }}>↺ Reset sve</button>
        )}
      </div>
      {keys.length === 0 ? (
        <p style={{ fontSize: 13, color: C.t3, textAlign: 'center', margin: '8px 0' }}>Rješavaj quizove u poglavljima da vidiš svoja slaba područja.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {keys.map(k => {
            const d = wa[k], pct = d.t ? Math.round((d.w / d.t) * 100) : 0
            const col = pct >= 60 ? C.red : pct >= 30 ? C.amber : C.lime
            const bg = pct >= 60 ? C.redDim : pct >= 30 ? C.amberDim : C.limeDim
            return (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: bg, borderRadius: 8 }}>
                <div style={{ fontSize: 12, color: col, fontFamily: C.mono, fontWeight: 700, minWidth: 36 }}>{pct}%</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: C.t1, fontWeight: 500 }}>{CH_NAMES[k] || k}</div>
                  <div style={{ fontSize: 11, color: C.t3 }}>{d.w} pogrešaka od {d.t} pitanja</div>
                </div>
                <div style={{ height: 4, width: 50, background: C.bd, borderRadius: 2, overflow: 'hidden', marginRight: 4, flexShrink: 0 }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: col }} />
                </div>
                <button onClick={() => resetOne(k)} style={{ fontFamily: C.mono, fontSize: 9, padding: '2px 7px', color: C.t3, cursor: 'pointer', borderRadius: 6, border: `1px solid ${C.bd}`, background: 'transparent', flexShrink: 0 }}>↺</button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Layer2({ data, povezanoGradivo }) {
  if (!data) return null
  return (
    <div>
      <WeakTracker />

      {data.praksaUpute && (
        <div style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 16, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: C.t3, marginBottom: 14 }}>// kako koristiti practice tab</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.praksaUpute.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: BOJ[p.boja]?.bg, border: `1px solid ${BOJ[p.boja]?.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.mono, fontSize: 13, fontWeight: 700, color: BOJ[p.boja]?.color, flexShrink: 0 }}>{p.broj}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.t1 }}>{p.naslov} <span style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, fontWeight: 400 }}>— {p.meta}</span></div>
                  <div style={{ fontSize: 12, color: C.t2, marginTop: 2 }}>{p.opis}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <MultipleChoiceQuiz kviz={data.kviz} />

      {data.stoDalje && <>
        <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
        <div style={{ fontFamily: C.mono, ...secLabel }}>// {data.stoDalje.naslov}</div>
        <p style={{ fontSize: 13, color: C.t2, marginBottom: 14 }}>{data.stoDalje.uvod}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
          {data.stoDalje.poglavlja.map((p, i) => (
            <div key={i} style={{ background: C.bgElevated, border: `1px solid ${C.violetBorder}`, borderRadius: 10, padding: '11px 13px' }}>
              <div style={{ fontFamily: C.mono, fontSize: 9, color: C.violet, fontWeight: 700, marginBottom: 4 }}>{p.broj} — opcionalno</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.t1 }}>{p.naslov}</div>
              <div style={{ fontSize: 11, color: C.t3, marginTop: 3 }}>{p.meta}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 12px', background: C.amberDim, border: `1px solid ${C.amberBorder}`, borderRadius: 8, fontSize: 12.5, color: C.amber }}>⚠ {data.stoDalje.upozorenje}</div>
      </>}

      {data.speedDrill && <>
        <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
        <div style={{ fontFamily: C.mono, ...secLabel }}>// ⚡ speed recognition drill — PS ili PC?</div>
        <p style={prose}>10 rečenica. Odaberi što brže možeš.</p>
        <SpeedDrill drill={data.speedDrill} labels={data.speedDrillLabels} />
      </>}

      {data.ispravljanjeGresaka && <>
        <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
        <div style={{ fontFamily: C.mono, ...secLabel }}>// 🔴 error correction drill — pronađi grešku</div>
        <p style={prose}>Svaka rečenica sadrži grešku. Klikni &quot;Otkrij grešku&quot; pa pročitaj objašnjenje.</p>
        <ErrorCorrectionDrill stavke={data.ispravljanjeGresaka} />
      </>}

      {data.popuniPraznine && <>
        <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
        <div style={{ fontFamily: C.mono, ...secLabel }}>// bonus — fill in the blank</div>
        <p style={prose}>Upiši ispravni oblik glagola u zagradi. Pazi na pravopis!</p>
        <FillInBlank stavke={data.popuniPraznine} />
      </>}

      {data.integriraniKviz && <>
        <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
        <div style={{ fontFamily: C.mono, ...secLabel }}>// integrirani quiz — sve gramatike ch01–ch07</div>
        <p style={prose}>15 pitanja iz svih prethodnih poglavlja. Finale provjera.</p>
        <MultipleChoiceQuiz kviz={data.integriraniKviz} />
      </>}

      {data.checkpointKartice?.length > 0 && <>
        <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
        <div style={{ fontFamily: C.mono, ...secLabel }}>// checkpoint — znaš li stvarno razliku?</div>
        {data.checkpointKartice.map((k, i) => <RevealCard key={i} pitanje={k.pitanje} odgovor={k.odgovor} />)}
      </>}

      {data.finalChecklist && <>
        <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
        <div style={{ fontFamily: C.mono, ...secLabel }}>// ✅ dan ispita — finale checklist</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: C.bgCard, border: `1px solid ${C.greenBorder}`, borderRadius: 12, padding: '12px 18px', marginBottom: 12 }}>
          <span style={{ fontSize: 20 }}>🧠</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>Dan ispita — sve taktike u jednom popisu</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '18px 0' }}>
          {data.finalChecklist.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: C.bgCard, border: `1px solid ${C.greenBorder}`, borderRadius: 10, padding: '12px 16px' }}>
              <span style={{ width: 18, height: 18, borderRadius: 4, background: C.greenDim, border: `1px solid ${C.greenBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: C.green, flexShrink: 0, marginTop: 1 }}>✓</span>
              <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.6 }} dangerouslySetInnerHTML={html(item.tekst)} />
            </div>
          ))}
        </div>
      </>}

      {/* Quick exam pattern summary */}
      {data.quickExamSummary && (
        <>
          <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
          <div style={{ fontFamily: C.mono, ...secLabel }}>// quick exam pattern summary</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '18px 0' }}>
            {data.quickExamSummary.map((s, i) => {
              const boja = s.tip === 'gap' ? 'lime' : s.tip === 'mcq' ? 'violet' : 'red'
              return (
                <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 12, padding: '14px 18px' }}>
                  <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8, color: BOJ[boja]?.color }}>{s.naslov}</div>
                  <div style={{ fontSize: 13, color: C.t2, lineHeight: 2, fontFamily: C.mono }}>
                    {s.koraci.map((k, j) => <div key={j} dangerouslySetInnerHTML={html(k)} />)}
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      {/* For the exam */}
      <div style={{ border: `1px solid ${C.amberBorder}`, borderRadius: 16, overflow: 'hidden', margin: '24px 0' }}>
        <div style={{ background: C.amber, padding: '9px 18px', fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: 2, color: C.bg, textTransform: 'uppercase' }}>⭐ for the exam — key points</div>
        <ul style={{ listStyle: 'none', padding: '12px 18px', margin: 0 }}>
          {data.maturaFor.map((t, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(232,237,245,.8)', padding: '7px 0', borderBottom: i < data.maturaFor.length - 1 ? `1px solid rgba(251,183,36,.10)` : 'none', lineHeight: 1.6 }}>
              <span style={{ width: 5, height: 5, background: C.amber, borderRadius: 1, flexShrink: 0, marginTop: 6, transform: 'rotate(45deg)' }} />
              <span dangerouslySetInnerHTML={html(t)} />
            </li>
          ))}
        </ul>
      </div>

      {/* Discere CTA */}
      <div style={{ background: C.bgCard, border: `1px solid ${C.limeBorder}`, borderRadius: 16, padding: '24px 28px', margin: '28px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: C.limeGlow, pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: C.mono, fontSize: 9.5, color: C.lime, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 5 }}>discere archive</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: C.t1, marginBottom: 4, letterSpacing: -0.3 }}>Vježbaj sa stvarnim zadacima mature</div>
          <div style={{ fontSize: 12.5, color: C.t2 }}>Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div>
        </div>
        <button type="button" onClick={onDiscere} style={{ padding: '10px 20px', background: C.lime, color: C.bg, border: 'none', borderRadius: 8, fontFamily: C.mono, fontSize: 13, fontWeight: 700, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap', display: 'inline-flex', position: 'relative' }}>
          {isPaid ? 'Otvori Discere →' : 'Otključaj Discere →'}
        </button>
      </div>

      {data.ponoviPoglavlje && (
        <div style={{ margin: '28px 0' }}>
          <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 600, letterSpacing: 1.8, textTransform: 'uppercase', color: C.t3, marginBottom: 14, paddingBottom: 8, borderBottom: `1px solid ${C.bd}` }}>// ponovi poglavlje</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {data.ponoviPoglavlje.map((p, i) => (
              <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.bdMid}`, borderRadius: 10, padding: '12px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: C.mono, fontSize: 9, color: C.t3 }}>{p.kod}</div>
                <div style={{ fontSize: 12, fontWeight: 600, marginTop: 3, color: BOJ[p.boja]?.color }}>{p.naslov}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Povezano gradivo & sljedeći koraci */}
      {povezanoGradivo?.length > 0 && (
        <div style={{ margin: '28px 0' }}>
          <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 600, letterSpacing: 1.8, textTransform: 'uppercase', color: C.t3, marginBottom: 14, paddingBottom: 8, borderBottom: `1px solid ${C.bd}` }}>// povezano gradivo &amp; sljedeći koraci</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {povezanoGradivo.map((p, i) => (
              <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.skyBorder}`, borderRadius: 12, padding: '14px 16px' }}>
                <div style={{ fontFamily: C.mono, fontSize: 9.5, color: C.sky, marginBottom: 6 }}>{p.kod} →</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.sky, lineHeight: 1.4 }}>{p.naslov}</div>
                <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, marginTop: 4 }}>{p.opis}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <BackToTop />
    </div>
  )
}

// ─── Chapter Detail View ──────────────────────────────────────────────────────

const TABS = [
  { label: '⚡ 2 min', sub: 'Overview' },
  { label: '📖 Learn', sub: 'Learn grammar' },
  { label: '✍️ Practice', sub: 'Practice & quiz' },
]

function ChapterView({ poglavlje, razina, onSelectChapter, onBack, onDiscere, isPaid }) {
  const [tab, setTab] = useState(0)
  const mainRef = useCallback((node) => { if (node) node.scrollTo({ top: 0, behavior: 'smooth' }) }, [tab])
  const nextCh = razina?.poglavlja?.find(p => p.broj === poglavlje.broj + 1)
  const isVisa = poglavlje.razina === 'viša'
  const acc = isVisa ? C.blue : C.lime
  const accDim = isVisa ? C.blueDim : C.limeDim
  const accBorder = isVisa ? C.blueBorder : C.limeBorder
  const accGlow = isVisa ? C.blueGlow : C.limeGlow

  return (
    <div className="eng-viewer" style={{ display: 'flex', minHeight: '100vh', background: C.bg }}>
      {/* Sidebar */}
      <nav style={{ width: 240, flexShrink: 0, background: C.bgSurface, borderRight: `1px solid ${C.bd}`, position: 'sticky', top: 58, height: 'calc(100vh - 58px)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 16px 14px', borderBottom: `1px solid ${C.bd}`, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, background: acc, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg viewBox="0 0 14 14" fill="none" width={14} height={14}><path d="M2 3h10M2 7h7M2 11h5" stroke={C.bg} strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.t1 }}>Maturiraj.hr</div>
            <div style={{ fontSize: 10, color: C.t3, fontFamily: C.mono }}>EN · {poglavlje.razina} razina</div>
          </div>
        </div>
        <button type="button" onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', fontSize: 12, color: C.t2, background: 'transparent', border: 'none', cursor: 'pointer', borderBottom: `1px solid ${C.bd}`, fontFamily: C.mono, transition: 'color .12s' }}>
          ← Natrag na poglavlja
        </button>
        <div style={{ padding: '12px 16px 6px', fontFamily: C.mono, fontSize: 9, fontWeight: 500, letterSpacing: 1.8, color: C.t3, textTransform: 'uppercase' }}>// poglavlja</div>
        {(razina?.poglavlja || []).map((p) => {
          const isActive = p.id === poglavlje.id
          return (
            <button key={p.id} type="button"
              disabled={!p.implemented}
              onClick={() => p.implemented && onSelectChapter(p.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 16px', fontSize: 12.5, color: isActive ? acc : p.implemented ? C.t2 : C.t3, cursor: p.implemented ? 'pointer' : 'default', borderTop: 'none', borderRight: 'none', borderBottom: 'none', borderLeft: `2px solid ${isActive ? acc : 'transparent'}`, background: isActive ? accGlow : 'transparent', transition: 'all .12s', textAlign: 'left', width: '100%', opacity: p.implemented ? 1 : 0.45 }}>
              <span style={{ fontFamily: C.mono, fontSize: 10, fontWeight: 700, color: isActive ? acc : C.t3, flexShrink: 0, minWidth: 22 }}>{String(p.broj).padStart(2, '0')}</span>
              <span style={{ lineHeight: 1.35, fontSize: 11.5 }}>{p.naslov}</span>
            </button>
          )
        })}
        <div style={{ marginTop: 'auto', padding: '12px 16px', borderTop: `1px solid ${C.bd}`, fontSize: 10, color: C.t3, lineHeight: 1.6, fontFamily: C.mono }}>
          0{poglavlje.broj} / {poglavlje.ukupno} · {poglavlje.kategorija?.toLowerCase()}<br />maturiraj.hr
        </div>
      </nav>

      {/* Main content */}
      <main id="eng-main" ref={mainRef} style={{ flex: 1, minWidth: 0, overflowY: 'auto', height: 'calc(100vh - 58px)' }}>
        <ScrollFab />
        <div style={{ maxWidth: 800, width: '100%', margin: '0 auto', padding: '36px 44px 100px' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: C.t3, marginBottom: 28, fontFamily: C.mono }}>
            <button type="button" onClick={onBack} style={{ background: 'none', border: 'none', color: C.t3, cursor: 'pointer', fontFamily: C.mono, fontSize: 11.5, padding: 0 }}>← chapters</button>
            <span style={{ opacity: .3 }}>/</span><span>grammar</span><span style={{ opacity: .3 }}>/</span>
            <span style={{ color: C.lime }}>present-simple-&-continuous</span>
          </div>

          {/* Tab bar */}
          <div style={{ display: 'flex', gap: 0, marginBottom: 36, background: C.bgSurface, border: `1px solid ${C.bdMid}`, borderRadius: 8, padding: 4, width: 'fit-content' }}>
            {TABS.map((t, i) => (
              <button key={i} type="button" onClick={() => setTab(i)}
                style={{ padding: '8px 20px', fontSize: 12.5, fontWeight: i === tab ? 700 : 500, color: i === tab ? C.bg : C.t2, cursor: 'pointer', borderRadius: 4, transition: 'all .15s', whiteSpace: 'nowrap', fontFamily: C.mono, border: 'none', background: i === tab ? acc : 'transparent' }}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab progress row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '-20px 0 28px', flexWrap: 'wrap' }}>
            {TABS.map((t, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: C.mono, fontSize: 11, color: i === tab ? acc : i < tab ? C.green : C.t3, cursor: 'pointer' }} onClick={() => setTab(i)}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />
                  {t.sub}
                </span>
                {i < TABS.length - 1 && <span style={{ fontSize: 10, color: C.t3, opacity: .4 }}>→</span>}
              </span>
            ))}
          </div>

          {/* Layer content */}
          {tab === 0 && <Layer0 data={poglavlje.brzoUci} poglavlje={poglavlje} />}
          {tab === 1 && (
            <>
              <Layer1 blokovi={poglavlje.ucenje} />
              {poglavlje.povezanoGradivo?.length > 0 && (
                <>
                  <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
                  <div style={{ margin: '28px 0' }}>
                    <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 600, letterSpacing: 1.8, textTransform: 'uppercase', color: C.t3, marginBottom: 14, paddingBottom: 8, borderBottom: `1px solid ${C.bd}` }}>// povezano gradivo &amp; sljedeći koraci</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      {poglavlje.povezanoGradivo.map((p, i) => {
                        const linkedCh = razina?.poglavlja?.find(ch => ch.broj === parseInt(p.kod))
                        const clickable = linkedCh?.implemented
                        return (
                          <div key={i}
                            onClick={() => clickable && onSelectChapter(linkedCh.id)}
                            style={{ background: C.bgCard, border: `1px solid ${clickable ? C.skyBorder : C.bdMid}`, borderRadius: 12, padding: '14px 16px', cursor: clickable ? 'pointer' : 'default', transition: 'all .15s' }}>
                            <div style={{ fontFamily: C.mono, fontSize: 9.5, color: clickable ? C.sky : C.t3, marginBottom: 6 }}>{p.kod}{clickable ? ' →' : ''}</div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: clickable ? C.sky : C.t2, lineHeight: 1.4 }}>{p.naslov}</div>
                            <div style={{ fontFamily: C.mono, fontSize: 11, color: C.t3, marginTop: 4 }}>{p.opis}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
          {tab === 2 && <Layer2 data={poglavlje.vjezba} povezanoGradivo={poglavlje.povezanoGradivo} />}

          {/* Bottom nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 36, paddingTop: 20, borderTop: `1px solid ${C.bd}` }}>
            <button type="button" onClick={() => tab > 0 ? setTab(t => t - 1) : onBack()}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: C.mono, fontSize: 12.5, color: C.t2, cursor: 'pointer', padding: '8px 14px', border: `1px solid ${C.bdMid}`, borderRadius: 8, background: 'transparent', transition: 'all .15s' }}>
              ← {tab === 0 ? 'Natrag' : TABS[tab - 1].label}
            </button>
            {tab < TABS.length - 1 ? (
              <button type="button" onClick={() => setTab(t => t + 1)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: C.mono, fontSize: 12.5, color: C.bg, cursor: 'pointer', padding: '8px 14px', border: `1px solid ${acc}`, borderRadius: 8, background: acc, fontWeight: 700, transition: 'all .15s' }}>
                {TABS[tab + 1].label} →
              </button>
            ) : (
              <button type="button"
                onClick={() => nextCh?.implemented && onSelectChapter(nextCh.id)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: C.mono, fontSize: 12.5, color: nextCh?.implemented ? C.bg : C.t3, cursor: nextCh?.implemented ? 'pointer' : 'default', padding: '8px 14px', border: `1px solid ${nextCh?.implemented ? acc : C.bdMid}`, borderRadius: 8, background: nextCh?.implemented ? acc : C.bgCard, fontWeight: 700, transition: 'all .15s', opacity: nextCh ? 1 : 0.4 }}>
                Next chapter →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

// ─── Chapter List + Razina Selection ─────────────────────────────────────────

function ChapterList({ razina, onOpenChapter, onBack }) {
  const kategorije = [...new Set(razina.poglavlja.map(p => p.kategorija))]
  const groups = kategorije.map((k) => ({ k, items: razina.poglavlja.filter((p) => p.kategorija === k) })).filter((g) => g.items.length > 0)
  const isVisa = razina.id === 'visa'
  const acc = isVisa ? C.blue : C.lime
  const accDim = isVisa ? C.blueDim : C.limeDim
  const accBorder = isVisa ? C.blueBorder : C.limeBorder

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>
      <button type="button" onClick={onBack}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: C.t2, fontSize: 13, fontWeight: 600, fontFamily: C.mono, marginBottom: 32, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
        ← Natrag na predmete
      </button>

      <div style={{ marginBottom: 36 }}>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: acc, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>Engleski jezik · {razina.label}</div>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: C.t1, letterSpacing: -0.8, marginBottom: 8 }}>Skripte — {razina.poglavlja.length} poglavlja</h1>
        <p style={{ fontSize: 14, color: C.t2, fontFamily: C.mono }}>Kompletan pregled gradiva za državnu maturu {razina.label.toLowerCase()}.</p>
      </div>

      {groups.map(({ k, items }) => (
        <div key={k} style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.8, textTransform: 'uppercase', color: C.t3, marginBottom: 12, paddingBottom: 8, borderBottom: `1px solid ${C.bd}` }}>// {k.toLowerCase()}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {items.map((p) => (
              <button key={p.id} type="button" disabled={!p.implemented}
                onClick={() => p.implemented && onOpenChapter(p.id)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 18px', background: C.bgCard, border: `1px solid ${p.implemented ? C.bdMid : C.bd}`, borderRadius: 12, cursor: p.implemented ? 'pointer' : 'default', transition: 'all .15s', textAlign: 'left', opacity: p.implemented ? 1 : 0.5 }}
                onMouseEnter={(e) => p.implemented && (e.currentTarget.style.borderColor = acc)}
                onMouseLeave={(e) => p.implemented && (e.currentTarget.style.borderColor = C.bdMid)}
              >
                <div style={{ width: 36, height: 36, borderRadius: 8, background: p.implemented ? accDim : C.bgElevated, border: `1px solid ${p.implemented ? accBorder : C.bd}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.mono, fontSize: 11, fontWeight: 700, color: p.implemented ? acc : C.t3, flexShrink: 0 }}>
                  {String(p.broj).padStart(2, '0')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: p.implemented ? C.t1 : C.t2, marginBottom: 3 }}>{p.naslov}</div>
                  <div style={{ fontSize: 12, color: C.t3, fontFamily: C.mono }}>{p.opis}</div>
                </div>
                <div style={{ flexShrink: 0, fontSize: 12, color: p.implemented ? acc : C.t3, fontFamily: C.mono }}>
                  {p.implemented ? '→' : 'Uskoro'}
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function RazinaSelect({ subject, onSelectRazina, onBack }) {
  const razineInfo = [
    { id: 'niza', label: 'Niža razina', opis: '15 poglavlja · Gramatika, vještine, prošireno gradivo', boja: C.lime, borderColor: C.limeBorder, bg: C.limeDim, dostupno: true },
    { id: 'visa', label: 'Viša razina', opis: '20 poglavlja · Grammar Core, vještine, KWT, ispit', boja: C.violet, borderColor: C.violetBorder, bg: C.violetDim, dostupno: true },
  ]
  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>
      <button type="button" onClick={onBack}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: C.t2, fontSize: 13, fontWeight: 600, fontFamily: C.mono, marginBottom: 32, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
        ← Natrag na predmete
      </button>
      <div style={{ fontFamily: C.mono, fontSize: 10, color: C.lime, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>Engleski jezik</div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: C.t1, letterSpacing: -0.8, marginBottom: 8 }}>Odaberi razinu</h1>
      <p style={{ fontSize: 14, color: C.t2, fontFamily: C.mono, marginBottom: 36 }}>Državna matura nudi dvije razine. Odaberi onu za kojom se pripremaš.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {razineInfo.map((r) => (
          <button key={r.id} type="button" disabled={!r.dostupno}
            onClick={() => r.dostupno && onSelectRazina(r.id)}
            style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '24px 22px', background: C.bgCard, border: `1px solid ${r.dostupno ? r.borderColor : C.bd}`, borderRadius: 16, cursor: r.dostupno ? 'pointer' : 'default', textAlign: 'left', transition: 'all .18s', opacity: r.dostupno ? 1 : 0.5 }}>
            <div style={{ fontFamily: C.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', padding: '4px 10px', borderRadius: 4, background: r.bg, color: r.boja, border: `1px solid ${r.borderColor}`, display: 'inline-flex', alignSelf: 'flex-start' }}>{r.label}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: r.dostupno ? C.t1 : C.t2 }}>{r.label}</div>
            <div style={{ fontSize: 13, color: C.t2, fontFamily: C.mono, lineHeight: 1.5 }}>{r.opis}</div>
            {r.dostupno && <div style={{ fontFamily: C.mono, fontSize: 12, color: r.boja, marginTop: 4 }}>Otvori →</div>}
          </button>
        ))}
      </div>

      {/* ── Hero animacija ─────────────────────────────── */}
      <div style={{ marginTop: 48, borderRadius: 18, overflow: 'hidden', border: `1px solid ${C.bd}`, background: C.bgCard }}>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.t3, letterSpacing: 1.5, textTransform: 'uppercase', padding: '10px 18px 0' }}>
          pregled gradiva · animacija
        </div>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
          <iframe
            src="/engleski-hero/index.html"
            title="Engleski jezik matura — pregled gradiva"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
            loading="lazy"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function EngleskiViewer({ subject, onBack }) {
  const [selectedRazina, setSelectedRazina] = useState(null)
  const [selectedChapterId, setSelectedChapterId] = useState(null)
  const router = useRouter()
  const { isPaid } = useAuth()

  const handleDiscere = () => {
    router.push(isPaid ? '/discere' : '/pro')
  }

  // postMessage bridge: HTML iframe chapters post messages → parent handles routing
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'maturiraj:openDiscere') {
        router.push(isPaid ? '/discere' : '/pro')
      } else if (e.data?.type === 'maturiraj:navigateChapter') {
        const n = e.data.chapter
        if (typeof n === 'number' && n >= 1 && n <= 20) {
          setSelectedChapterId(`poglavlje-${String(n).padStart(2, '0')}`)
        }
      } else if (e.data?.type === 'maturiraj:backToList') {
        setSelectedChapterId(null)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [isPaid, router]) // eslint-disable-line

  const razina = selectedRazina ? RAZINE_DATA[selectedRazina] : null
  const poglavlje = selectedChapterId && razina ? razina.chapters?.[selectedChapterId] : null

  if (poglavlje) {
    // HTML string chapters (viša razina) — render in full-height iframe
    if (typeof poglavlje === 'string') {
      const currentMeta = razina.poglavlja.find(p => p.id === selectedChapterId)
      const broj = currentMeta?.broj
      const prevMeta = broj != null ? razina.poglavlja.find(p => p.broj === broj - 1 && razina.chapters?.[p.id]) : null
      const nextMeta = broj != null ? razina.poglavlja.find(p => p.broj === broj + 1 && razina.chapters?.[p.id]) : null

      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 58px)' }}>
          {/* Back bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '7px 20px', background: `rgba(8,11,16,0.97)`, borderBottom: `1px solid ${C.blueBorder}`, flexShrink: 0, zIndex: 10 }}>
            <button
              type="button"
              onClick={() => setSelectedChapterId(null)}
              style={{ background: 'none', border: 'none', color: C.sky, cursor: 'pointer', fontSize: 12, fontFamily: C.mono, padding: '3px 0', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              ← lista poglavlja
            </button>
            <span style={{ color: `rgba(56,189,248,.25)`, fontSize: 11 }}>|</span>
            <span style={{ fontSize: 12, color: C.sky, fontFamily: C.mono }}>
              P{String(broj).padStart(2, '0')} · {currentMeta?.naslov}
            </span>
            {prevMeta && (
              <>
                <span style={{ marginLeft: 'auto', color: `rgba(56,189,248,.25)`, fontSize: 11 }}>|</span>
                <button type="button" onClick={() => setSelectedChapterId(prevMeta.id)}
                  style={{ background: 'none', border: 'none', color: C.t3, cursor: 'pointer', fontSize: 12, fontFamily: C.mono, padding: '3px 0' }}>
                  ← P{String(prevMeta.broj).padStart(2,'0')}
                </button>
              </>
            )}
            {nextMeta && (
              <>
                {!prevMeta && <span style={{ marginLeft: 'auto' }} />}
                <button type="button" onClick={() => setSelectedChapterId(nextMeta.id)}
                  style={{ background: 'none', border: 'none', color: C.t3, cursor: 'pointer', fontSize: 12, fontFamily: C.mono, padding: '3px 0' }}>
                  P{String(nextMeta.broj).padStart(2,'0')} →
                </button>
              </>
            )}
          </div>
          <iframe
            srcDoc={poglavlje}
            style={{ flex: 1, width: '100%', border: 'none', display: 'block' }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            title={`Engleski viša · ${currentMeta?.naslov}`}
          />
        </div>
      )
    }

    // Viša razina chapters are standalone React components — render directly
    if (typeof poglavlje === 'function') {
      const PoglavljeComponent = poglavlje
      const currentMeta = razina.poglavlja.find(p => p.id === selectedChapterId)
      const currentBroj = currentMeta?.broj
      const nextMeta = currentBroj != null ? razina.poglavlja.find(p => p.broj === currentBroj + 1) : null
      const prevMeta = currentBroj != null ? razina.poglavlja.find(p => p.broj === currentBroj - 1) : null
      const nextChapter = nextMeta && razina.chapters?.[nextMeta.id]
      const prevChapter = prevMeta && razina.chapters?.[prevMeta.id]
      return (
        <PoglavljeComponent
          onBack={() => setSelectedChapterId(null)}
          onNext={nextChapter ? () => setSelectedChapterId(nextMeta.id) : undefined}
          onPrev={prevChapter ? () => setSelectedChapterId(prevMeta.id) : undefined}
          onDiscere={handleDiscere}
          onNavigate={(num) => {
            const targetMeta = razina.poglavlja.find(p => p.broj === num)
            if (targetMeta && razina.chapters?.[targetMeta.id]) {
              setSelectedChapterId(targetMeta.id)
            } else {
              setSelectedChapterId(null)
            }
          }}
        />
      )
    }
    return (
      <ChapterView
        poglavlje={poglavlje}
        razina={razina}
        onSelectChapter={setSelectedChapterId}
        onBack={() => setSelectedChapterId(null)}
        onDiscere={handleDiscere}
        isPaid={isPaid}
      />
    )
  }

  if (razina) {
    return (
      <ChapterList
        razina={razina}
        onOpenChapter={setSelectedChapterId}
        onBack={() => setSelectedRazina(null)}
      />
    )
  }

  return (
    <RazinaSelect
      subject={subject}
      onSelectRazina={setSelectedRazina}
      onBack={onBack}
    />
  )
}
