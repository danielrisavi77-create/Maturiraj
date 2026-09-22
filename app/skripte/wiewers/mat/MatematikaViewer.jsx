'use client'
import { useState } from 'react'
import { MAT_VISA_RAZINA } from '../../data/mat/visa'
import { MAT_NIZA_RAZINA } from '../../data/mat/niza'
import MatChapterViewer from '@/components/MatChapterViewer'
import MaturaKalkulator from '@/components/skripte/MaturaKalkulator'

const RAZINE_DATA = { niza: MAT_NIZA_RAZINA, visa: MAT_VISA_RAZINA }

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  // A razina — indigo/violet blue
  visa: '#818cf8', visaDim: 'rgba(129,140,248,.10)', visaBorder: 'rgba(129,140,248,.22)', visaGlow: 'rgba(129,140,248,.06)',
  // B razina — sky blue
  niza: '#38BDF8', nizaDim: 'rgba(56,189,248,.10)', nizaBorder: 'rgba(56,189,248,.22)', nizaGlow: 'rgba(56,189,248,.06)',
  t1: '#E8EDF5', t2: '#8A95A8', t3: '#4A5568',
  bg: '#080B10', bgSurface: '#0D1117', bgCard: '#161D27', bgElevated: '#131820', bgHover: '#1C2535',
  bd: 'rgba(255,255,255,.06)', bdMid: 'rgba(255,255,255,.10)',
  mono: "'DM Mono','Fira Code',monospace",
}

function acc(razId) { return razId === 'visa' ? C.visa : C.niza }
function accDim(razId) { return razId === 'visa' ? C.visaDim : C.nizaDim }
function accBorder(razId) { return razId === 'visa' ? C.visaBorder : C.nizaBorder }
function accGlow(razId) { return razId === 'visa' ? C.visaGlow : C.nizaGlow }

// ─── Razina Select ────────────────────────────────────────────────────────────

function RazinaSelect({ onSelectRazina, onBack }) {
  const options = [
    {
      id: 'visa',
      label: 'A razina',
      sublabel: 'viša razina',
      opis: `${MAT_VISA_RAZINA.poglavlja.length} poglavlja · Algebra, analiza, geometrija, vjerojatnost`,
      dostupno: true,
    },
    {
      id: 'niza',
      label: 'B razina',
      sublabel: 'niža razina',
      opis: `${MAT_NIZA_RAZINA.poglavlja.length} poglavlja · Osnove, jednadžbe, funkcije, planimetrija`,
      dostupno: true,
    },
  ]

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>
      <button type="button" onClick={onBack}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: C.t2, fontSize: 13, fontWeight: 600, fontFamily: C.mono, marginBottom: 36, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
        ← Natrag na predmete
      </button>

      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.visa, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
          Matematika · državna matura
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: C.t1, letterSpacing: -0.8, marginBottom: 8 }}>
          Odaberi razinu
        </h1>
        <p style={{ fontSize: 14, color: C.t2, fontFamily: C.mono }}>
          Matura iz matematike polaže se na A ili B razini. Odaberi onu za kojom se pripremaš.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {options.map((r) => {
          const color = acc(r.id)
          const dim = accDim(r.id)
          const border = accBorder(r.id)
          const glow = accGlow(r.id)
          return (
            <button key={r.id} type="button" disabled={!r.dostupno}
              onClick={() => r.dostupno && onSelectRazina(r.id)}
              style={{
                display: 'flex', flexDirection: 'column', gap: 14,
                padding: '28px 26px',
                background: `linear-gradient(135deg, ${C.bgCard} 0%, rgba(13,17,23,0.8) 100%)`,
                border: `1px solid ${r.dostupno ? border : C.bd}`,
                borderRadius: 18,
                cursor: r.dostupno ? 'pointer' : 'default',
                textAlign: 'left',
                transition: 'all .2s',
                opacity: r.dostupno ? 1 : 0.5,
                boxShadow: r.dostupno ? `0 0 40px ${glow}` : 'none',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                if (!r.dostupno) return
                e.currentTarget.style.boxShadow = `0 0 60px ${dim}`
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                if (!r.dostupno) return
                e.currentTarget.style.boxShadow = `0 0 40px ${glow}`
                e.currentTarget.style.borderColor = border
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* top accent stripe */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${color}, transparent)`, borderRadius: '18px 18px 0 0' }} />

              {/* badge */}
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: dim, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, fontFamily: C.mono, color }}>
                  {r.id === 'visa' ? 'A' : 'B'}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.t1, lineHeight: 1.2 }}>{r.label}</div>
                  <div style={{ fontSize: 10, color, fontFamily: C.mono, letterSpacing: 1, textTransform: 'uppercase' }}>{r.sublabel}</div>
                </div>
              </div>

              {/* description */}
              <div style={{ fontSize: 13, color: C.t2, fontFamily: C.mono, lineHeight: 1.6 }}>{r.opis}</div>

              {/* CTA */}
              {r.dostupno && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                  <div style={{ fontFamily: C.mono, fontSize: 11, color, letterSpacing: 0.5 }}>Otvori skripte →</div>
                  <div style={{ fontFamily: C.mono, fontSize: 10, color: C.t3 }}>maturiraj.hr</div>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* ── Hero animacija ─────────────────────────────── */}
      <div style={{ marginTop: 48, borderRadius: 18, overflow: 'hidden', border: `1px solid ${C.bd}`, background: C.bgCard }}>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.t3, letterSpacing: 1.5, textTransform: 'uppercase', padding: '10px 18px 0' }}>
          pregled gradiva · animacija
        </div>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' /* 16:9 */ }}>
          <iframe
            src="/matematika-hero/index.html"
            title="Matematika matura — pregled gradiva"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
            loading="lazy"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Chapter List ─────────────────────────────────────────────────────────────

function ChapterList({ razina, onOpenChapter, onBack }) {
  const razId = razina.id
  const color = acc(razId)
  const dim = accDim(razId)
  const border = accBorder(razId)

  const kategorije = [...new Set(razina.poglavlja.map(p => p.kategorija))]
  const groups = kategorije
    .map((k) => ({ k, items: razina.poglavlja.filter((p) => p.kategorija === k) }))
    .filter((g) => g.items.length > 0)

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>
      <button type="button" onClick={onBack}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: C.t2, fontSize: 13, fontWeight: 600, fontFamily: C.mono, marginBottom: 32, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
        ← Odabir razine
      </button>

      <div style={{ marginBottom: 36 }}>
        {/* razina indicator pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 6, background: dim, border: `1px solid ${border}`, marginBottom: 14 }}>
          <span style={{ fontFamily: C.mono, fontSize: 11, fontWeight: 700, color, letterSpacing: 0.5 }}>
            Matematika · {razina.label}
          </span>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: C.t1, letterSpacing: -0.8, marginBottom: 8 }}>
          Skripte — {razina.poglavlja.length} poglavlja
        </h1>
        <p style={{ fontSize: 14, color: C.t2, fontFamily: C.mono }}>
          Kompletan pregled gradiva za državnu maturu {razina.label.toLowerCase()}.
        </p>
      </div>

      {groups.map(({ k, items }) => (
        <div key={k} style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: C.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.8, textTransform: 'uppercase', color: C.t3, marginBottom: 12, paddingBottom: 8, borderBottom: `1px solid ${C.bd}` }}>
            {'//'} {k.toLowerCase()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {items.map((p) => (
              <button key={p.id} type="button" disabled={!p.implemented}
                onClick={() => p.implemented && onOpenChapter(p.id)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 18px', background: C.bgCard, border: `1px solid ${p.implemented ? C.bdMid : C.bd}`, borderRadius: 12, cursor: p.implemented ? 'pointer' : 'default', transition: 'all .15s', textAlign: 'left', opacity: p.implemented ? 1 : 0.5 }}
                onMouseEnter={(e) => p.implemented && (e.currentTarget.style.borderColor = color)}
                onMouseLeave={(e) => p.implemented && (e.currentTarget.style.borderColor = C.bdMid)}
              >
                <div style={{ width: 36, height: 36, borderRadius: 8, background: p.implemented ? dim : C.bgElevated, border: `1px solid ${p.implemented ? border : C.bd}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: C.mono, fontSize: 11, fontWeight: 700, color: p.implemented ? color : C.t3, flexShrink: 0 }}>
                  {p.id}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: p.implemented ? C.t1 : C.t2, marginBottom: 3 }}>{p.naslov}</div>
                  <div style={{ fontSize: 12, color: C.t3, fontFamily: C.mono }}>{p.opis}</div>
                </div>
                <div style={{ flexShrink: 0, fontSize: 12, color: p.implemented ? color : C.t3, fontFamily: C.mono }}>
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

// ─── Main export ──────────────────────────────────────────────────────────────

export default function MatematikaViewer({ subject, onBack }) {
  const [selectedRazina, setSelectedRazina] = useState(null)
  const [selectedChapterId, setSelectedChapterId] = useState(null)

  const razina = selectedRazina ? RAZINE_DATA[selectedRazina] : null
  const poglavlje = selectedChapterId && razina ? razina.chapters?.[selectedChapterId] : null

  function goToList() {
    setSelectedChapterId(null)
  }

  function goToRazinaSelect() {
    setSelectedChapterId(null)
    setSelectedRazina(null)
  }

  if (poglavlje) {
    const currentMeta = razina.poglavlja.find(p => p.id === selectedChapterId)
    const idx = razina.poglavlja.indexOf(currentMeta)
    const prevMeta = idx > 0 ? razina.poglavlja[idx - 1] : null
    const nextMeta = idx < razina.poglavlja.length - 1 ? razina.poglavlja[idx + 1] : null
    const prevChapter = prevMeta ? razina.chapters?.[prevMeta.id] : null
    const nextChapter = nextMeta ? razina.chapters?.[nextMeta.id] : null
    const color = acc(selectedRazina)
    const border = accBorder(selectedRazina)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 58px)' }}>
        <MaturaKalkulator />
        {/* Back bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '7px 20px', background: 'rgba(8,11,16,0.97)', borderBottom: `1px solid ${border}`, flexShrink: 0, zIndex: 10 }}>
          <button type="button" onClick={goToList}
            style={{ background: 'none', border: 'none', color, cursor: 'pointer', fontSize: 12, fontFamily: C.mono, padding: '3px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
            ← lista poglavlja
          </button>
          <span style={{ color: `rgba(129,140,248,.2)`, fontSize: 11 }}>|</span>
          <span style={{ fontSize: 12, color, fontFamily: C.mono }}>
            {selectedChapterId} · {currentMeta?.naslov}
          </span>
          {prevMeta && prevChapter && (
            <>
              <span style={{ marginLeft: 'auto', color: `rgba(129,140,248,.2)`, fontSize: 11 }}>|</span>
              <button type="button" onClick={() => setSelectedChapterId(prevMeta.id)}
                style={{ background: 'none', border: 'none', color: C.t3, cursor: 'pointer', fontSize: 12, fontFamily: C.mono, padding: '3px 0' }}>
                ← {prevMeta.id}
              </button>
            </>
          )}
          {nextMeta && nextChapter && (
            <>
              {!(prevMeta && prevChapter) && <span style={{ marginLeft: 'auto' }} />}
              <button type="button" onClick={() => setSelectedChapterId(nextMeta.id)}
                style={{ background: 'none', border: 'none', color: C.t3, cursor: 'pointer', fontSize: 12, fontFamily: C.mono, padding: '3px 0' }}>
                {nextMeta.id} →
              </button>
            </>
          )}
        </div>
        <MatChapterViewer
          chapterId={selectedChapterId}
          htmlContent={poglavlje}
          onNavigate={(id) => razina.chapters?.[id] && setSelectedChapterId(id)}
          onBack={goToList}
        />
      </div>
    )
  }

  if (razina) {
    return (
      <>
        <MaturaKalkulator />
        <ChapterList
          razina={razina}
          onOpenChapter={setSelectedChapterId}
          onBack={goToRazinaSelect}
        />
      </>
    )
  }

  return (
    <>
      <MaturaKalkulator />
      <RazinaSelect
        onSelectRazina={setSelectedRazina}
        onBack={onBack}
      />
    </>
  )
}


