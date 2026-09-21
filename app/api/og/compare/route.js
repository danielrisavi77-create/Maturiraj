import { ImageResponse } from 'next/og'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'edge'
// NAPOMENA: `size` / `contentType` / `alt` dopušteni su izvozi samo za konvenciju
// opengraph-image.* (metadata datoteke), ne i za route handler. Next za svaki
// route.js generira tip koji dopušta samo poznate izvoze, pa je `export const
// contentType` rušio type-check (Property 'contentType' is incompatible with index
// signature). ImageResponse ionako sam šalje zaglavlje content-type: image/png.

let cachedSupabase = null

function getSupabaseClient() {
  if (cachedSupabase) return cachedSupabase

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !anonKey) {
    throw new Error('Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }

  cachedSupabase = createClient(supabaseUrl, anonKey)
  return cachedSupabase
}

export async function GET(req) {
  let supabase
  try {
    supabase = getSupabaseClient()
  } catch {
    return new Response('Supabase is not configured', { status: 500 })
  }

  const { searchParams } = new URL(req.url)
  const ids = searchParams.get('ids')?.split(',').filter(Boolean) || []
  if (ids.length < 2 || ids.length > 4) {
    return new Response('Bad request', { status: 400 })
  }

  // Fetch studiji data
  const { data: studiji } = await supabase
    .from('studiji_view')
    .select('id, naziv, short, fak_short, sym, color, prag_2025, upisnih_mjesta, tip_upisa_label')
    .in('id', ids)

  if (!studiji || studiji.length < 2) {
    return new Response('Not found', { status: 404 })
  }

  // Sort by prag desc za konzistentnost
  studiji.sort((a, b) => (b.prag_2025 || 0) - (a.prag_2025 || 0))

  return new ImageResponse(
    (
      <div style={{
        width: 1200, height: 630, display: 'flex', flexDirection: 'column',
        background: '#07090f', position: 'relative', overflow: 'hidden',
        fontFamily: 'sans-serif', padding: '60px 64px',
      }}>
        {/* Orb decorations */}
        <div style={{
          position: 'absolute', top: -120, left: -80, width: 480, height: 480,
          borderRadius: '50%', display: 'flex',
          background: 'radial-gradient(circle,rgba(75,123,255,.3),transparent)',
          filter: 'blur(40px)',
        }}/>
        <div style={{
          position: 'absolute', bottom: -100, right: 100, width: 380, height: 380,
          borderRadius: '50%', display: 'flex',
          background: 'radial-gradient(circle,rgba(124,92,252,.25),transparent)',
          filter: 'blur(50px)',
        }}/>

        {/* Gradient bottom bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, display: 'flex',
          background: 'linear-gradient(90deg,#4b7bff,#7c5cfc,#e9b446)',
        }}/>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, zIndex: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4b7bff', boxShadow: '0 0 16px #4b7bff' }}/>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#e4edff', letterSpacing: '-.02em' }}>
            Maturiraj.hr
          </span>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 48, fontWeight: 900, color: '#e4edff', letterSpacing: '-.03em',
          lineHeight: 1.05, marginBottom: 40, display: 'flex', flexDirection: 'column', zIndex: 10,
        }}>
          <span>Usporedio/la sam</span>
          <span style={{
            background: 'linear-gradient(120deg,#6b9bff,#a78bfa)',
            backgroundClip: 'text', color: 'transparent',
          }}>
            {studiji.length} studija za upis
          </span>
        </div>

        {/* Comparison cards */}
        <div style={{
          display: 'flex', gap: 14, flex: 1, alignItems: 'stretch', zIndex: 10,
        }}>
          {studiji.map(s => (
            <div key={s.id} style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              padding: '22px 18px', borderRadius: 16,
              background: 'rgba(14,18,32,.85)',
              border: `1px solid ${s.color}44`,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: s.color, borderRadius: '16px 16px 0 0', display: 'flex',
              }}/>
              <div style={{ fontSize: 36, marginBottom: 10, display: 'flex' }}>{s.sym}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: s.color, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                {s.fak_short}
              </div>
              <div style={{
                fontSize: 16, fontWeight: 700, color: '#e4edff', lineHeight: 1.2,
                marginBottom: 14, letterSpacing: '-.01em', display: 'flex',
              }}>
                {s.naziv}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6a82a8' }}>
                  <span>Prag 2025.</span>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: s.color, letterSpacing: '-.02em', display: 'flex' }}>
                  {s.prag_2025 ?? '—'}
                </div>
                {s.upisnih_mjesta && (
                  <div style={{ fontSize: 11, color: '#6a82a8', marginTop: 4, display: 'flex' }}>
                    {s.upisnih_mjesta} mjesta
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div style={{
          marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.08)', zIndex: 10,
        }}>
          <span style={{ fontSize: 14, color: '#6a82a8', display: 'flex' }}>
            Pripremi se. Upiši faks.
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#4b7bff', display: 'flex' }}>
            maturiraj.hr/prijemni →
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
