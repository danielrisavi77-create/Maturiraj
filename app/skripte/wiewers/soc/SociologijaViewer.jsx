'use client'
import { useState } from 'react'
import { SOC_RAZINA } from '../../data/sociologija/index'

const COLOR = '#e9b446'
const COLOR_DIM = 'rgba(233,180,70,.10)'
const COLOR_BORDER = 'rgba(233,180,70,.25)'

export default function SociologijaViewer({ subject, onBack }) {
  const [selectedChapterId, setSelectedChapterId] = useState(null)

  const razina = SOC_RAZINA
  const chapterHtml = selectedChapterId ? razina?.chapters?.[selectedChapterId] : null
  const chapterMeta = selectedChapterId
    ? razina?.poglavlja?.find((p) => p.id === selectedChapterId)
    : null

  // ─── Chapter view — full-height iframe ───────────────────────────────────
  if (chapterHtml) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 58px)' }}>
        {/* Thin back-bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '7px 20px',
            background: 'rgba(12,10,4,0.97)',
            borderBottom: `1px solid ${COLOR_BORDER}`,
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedChapterId(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#A89860',
              cursor: 'pointer',
              fontSize: 12,
              fontFamily: 'monospace',
              padding: '3px 0',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            ← lista poglavlja
          </button>
          <span style={{ color: 'rgba(218,165,32,.25)', fontSize: 11 }}>|</span>
          <span style={{ fontSize: 12, color: '#A89860', fontFamily: 'monospace' }}>
            S{String(chapterMeta?.broj).padStart(2, '0')} · {chapterMeta?.naslov}
          </span>
        </div>

        {/* Full-doc iframe — srcDoc renders complete HTML including its own CSS/JS/fonts */}
        <iframe
          srcDoc={chapterHtml}
          style={{ flex: 1, width: '100%', border: 'none', display: 'block' }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          title={`Sociologija · ${chapterMeta?.naslov}`}
        />
      </div>
    )
  }

  // ─── Chapter list view ────────────────────────────────────────────────────
  const poglavlja = razina?.poglavlja || []

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'var(--font-sans, sans-serif)',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Back */}
        <button
          type="button"
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--muted)',
            cursor: 'pointer',
            fontSize: 14,
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: 0,
          }}
        >
          ← Natrag na sve predmete
        </button>

        {/* Hero */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: COLOR_DIM,
              border: `1px solid ${COLOR_BORDER}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
            }}
          >
            ⚖
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: COLOR,
                marginBottom: 4,
              }}
            >
              Društvene znanosti
            </div>
            <h1
              style={{
                fontSize: 'clamp(28px,4vw,42px)',
                fontWeight: 800,
                letterSpacing: '-.03em',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Sociologija
            </h1>
          </div>
        </div>

        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 540, margin: '0 0 32px' }}>
          Kompletna priprema za maturu iz sociologije. Klasici, teorije, metode i koncepti — sve što treba znati.
        </p>

        {/* Chapter list */}
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 20,
          }}
        >
          Poglavlja
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {poglavlja.map((p) => {
            const available = !!(razina?.chapters?.[p.id])
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => available ? setSelectedChapterId(p.id) : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  background: 'var(--surface)',
                  border: `1px solid ${available ? COLOR + '44' : 'var(--border)'}`,
                  borderRadius: 12,
                  padding: '16px 20px',
                  opacity: available ? 1 : 0.55,
                  cursor: available ? 'pointer' : 'default',
                  textAlign: 'left',
                  color: 'var(--text)',
                  transition: 'border-color .15s',
                  position: 'relative',
                  width: '100%',
                }}
              >
                {/* Chapter number badge */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: COLOR_DIM,
                    border: `1px solid rgba(233,180,70,.20)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: COLOR,
                    flexShrink: 0,
                    fontFamily: 'monospace',
                  }}
                >
                  S{String(p.broj).padStart(2, '0')}
                </div>

                {/* Meta */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, color: COLOR, fontWeight: 700, marginBottom: 3 }}>
                    {p.kategorija}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{p.naslov}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{p.opis}</div>
                </div>

                {/* Status */}
                {available ? (
                  <span style={{ fontSize: 11, color: COLOR, fontFamily: 'monospace', flexShrink: 0 }}>
                    Čitaj →
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 99,
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--muted)',
                      letterSpacing: '.06em',
                      flexShrink: 0,
                    }}
                  >
                    USKORO
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
