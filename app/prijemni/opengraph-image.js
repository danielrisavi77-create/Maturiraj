// app/prijemni/opengraph-image.js
// Next.js automatski servira ovo kao OG sliku na /prijemni/opengraph-image
// Nema potrebe za statičnom slikom u /public

import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Prijemni ispiti 2026. — Maturiraj.hr'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const FAKULTETI = [
  { sym: '🩺', name: 'Medicinski fakultet ZG',   tip: 'Klasični prijemni',            prag: '654', color: '#f87171' },
  { sym: '🏛', name: 'Arhitektonski fakultet',    tip: 'Provjera prostornog mišljenja', prag: '643', color: '#fb923c' },
  { sym: '🦷', name: 'Stomatološki fakultet',     tip: 'Test psihomotorike',            prag: '—',   color: '#2dd4bf' },
  { sym: '🏃', name: 'Kineziološki fakultet',     tip: 'Motorički test',                prag: '468', color: '#3ecf6e' },
  { sym: '🎭', name: 'Akademija dramske umj.',    tip: 'Audicija i razgovor',           prag: '704', color: '#e879f9' },
  { sym: '🐾', name: 'Veterinarski fakultet',     tip: 'Test psihomotorike',            prag: '—',   color: '#f59e0b' },
  { sym: '🏥', name: 'Medicinski fakultet Ri',    tip: 'Matura + eliminirajući test',   prag: '622', color: '#fda4af' },
]

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200, height: 630,
          display: 'flex',
          background: '#07090f',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Orb 1 */}
        <div style={{
          position: 'absolute', top: -120, left: -80,
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(75,123,255,.3), transparent)',
          filter: 'blur(40px)', display: 'flex',
        }}/>
        {/* Orb 2 */}
        <div style={{
          position: 'absolute', bottom: -100, right: 200,
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,92,252,.22), transparent)',
          filter: 'blur(50px)', display: 'flex',
        }}/>
        {/* Orb 3 */}
        <div style={{
          position: 'absolute', top: 80, right: -60,
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,180,70,.15), transparent)',
          filter: 'blur(35px)', display: 'flex',
        }}/>

        {/* Bottom gradient bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
          background: 'linear-gradient(90deg, #4b7bff, #7c5cfc, #e9b446)',
          display: 'flex',
        }}/>

        {/* ── Left content ── */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          flex: 1, padding: '60px 0 60px 72px', gap: 0, position: 'relative', zIndex: 10,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: '#4b7bff',
              boxShadow: '0 0 16px #4b7bff',
            }}/>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#e4edff', letterSpacing: '-.02em' }}>
              Maturiraj.hr
            </span>
          </div>

          {/* Badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '6px 14px', borderRadius: 999, width: 'fit-content',
            background: 'rgba(233,180,70,.12)', border: '1px solid rgba(233,180,70,.28)',
            fontSize: 13, fontWeight: 700, color: '#e9b446',
            letterSpacing: '.06em', textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            🏛 Prijemni ispiti 2026.
          </div>

          {/* Headline */}
          <div style={{
            fontFamily: 'serif', fontSize: 58, fontWeight: 900,
            lineHeight: .97, letterSpacing: '-.035em',
            marginBottom: 20, maxWidth: 500,
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <span style={{ color: '#e4edff' }}>Pripremi se.</span>
            <span style={{
              background: 'linear-gradient(120deg, #6b9bff, #a78bfa)',
              backgroundClip: 'text',
              color: 'transparent',
            }}>Upiši faks.</span>
          </div>

          {/* Subtitle */}
          <div style={{
            fontSize: 17, color: '#6a82a8', lineHeight: 1.6,
            maxWidth: 440, marginBottom: 32,
          }}>
            Gradivo, bodovni pragovi, datumi prijava i kalkulator bodova — sve na jednom mjestu.
          </div>

          {/* Pills */}
          <div style={{ display: 'flex', gap: 8 }}>
            {['📅 Datumi prijemnih', '🧮 Kalkulator bodova', '📊 Pragovi 2025.'].map(p => (
              <div key={p} style={{
                padding: '5px 13px', borderRadius: 999,
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.1)',
                fontSize: 13, fontWeight: 600, color: '#8a9bb0',
                display: 'flex',
              }}>{p}</div>
            ))}
          </div>
        </div>

        {/* ── Right — faculty cards ── */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 8,
          width: 360, flexShrink: 0,
          padding: '48px 48px 48px 0',
          position: 'relative', zIndex: 10,
          justifyContent: 'center',
        }}>
          {FAKULTETI.map(f => (
            <div key={f.name} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '11px 14px', borderRadius: 12,
              background: 'rgba(14,18,32,.85)',
              border: '1px solid rgba(255,255,255,.07)',
            }}>
              <div style={{ fontSize: 20, width: 30, textAlign: 'center', display: 'flex' }}>
                {f.sym}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <span style={{
                  fontSize: 12, fontWeight: 700, color: '#e4edff',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>{f.name}</span>
                <span style={{ fontSize: 10, color: '#4a6080', marginTop: 1 }}>{f.tip}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: f.color, flexShrink: 0 }}>
                {f.prag}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}