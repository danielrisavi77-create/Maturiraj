'use client'

import { useParentContext } from '@/lib/roditelji/parentContext'
import { childNameGenitive } from '@/lib/roditelji/roditeljiUtils'
import { SectionTitle, InsightBlock } from '@/components/roditelji/ui'

const GENERAL_TIPS = [
  { ico: '🕐', txt: 'Redovitost je važnija od dužine učenja. 30 minuta dnevno > 3 sata jednom tjedno.' },
  { ico: '💬', txt: 'Pitajte dijete "Što si danas naučio?" umjesto "Jesi li učio?"' },
  { ico: '🎯', txt: 'Pomozite djetetu postaviti mikrociljeve — npr. "+5% u matematici do petka".' },
  { ico: '📵', txt: 'Dogovorite "focus vrijeme" — telefon u drugu sobu, 25 min fokus, 5 min pauza.' },
  { ico: '🏆', txt: 'Nagradite trud, ne rezultat. "Vidim da si se potrudio" gradi mentalnu snagu.' },
]

export default function PreporukePage() {
  const { activeChild: child } = useParentContext()
  if (!child) return null

  const gen  = childNameGenitive(child.firstName)
  const recs = child.preporuke || []

  return (
    <div className="r-fi">
      {/* Intro */}
      <div className="r-card" style={{ padding: '22px 24px', marginBottom: 16, background: 'linear-gradient(135deg,var(--s1),var(--s2))' }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>💡 Preporuke za {gen}</div>
        <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>
          Na temelju aktivnosti i rezultata, sustav generira personalizirane savjete kako poboljšati pripremu za maturu.
        </div>
      </div>

      {/* Personalized recommendations */}
      {recs.length > 0 && (
        <>
          <SectionTitle right={`${recs.length} preporuka`}>🎯 Personalizirano</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 10, marginBottom: 22 }}>
            {recs.map(r => (
              <div key={r.id} className="r-rec r-card-lift">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{r.ico}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, flex: 1 }}>{r.naslov}</span>
                  {r.tag && (
                    <span style={{ fontSize: 10, fontWeight: 700, color: r.tagC, background: `${r.tagC}14`, border: `1px solid ${r.tagC}28`, padding: '2px 8px', borderRadius: 99 }}>
                      {r.tag}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{r.opis}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* General tips */}
      <SectionTitle>📚 Opći savjeti za roditelje</SectionTitle>
      <div className="r-card" style={{ padding: '22px 24px', marginBottom: 22 }}>
        <InsightBlock items={GENERAL_TIPS} />
      </div>

      {/* Crisis support */}
      <div className="r-card" style={{ padding: '22px 24px', borderColor: 'rgba(75,123,255,.2)', background: 'var(--blue-d)' }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>🆘 Hitna podrška</div>
        <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 14 }}>
          Ako primjećujete znakove stresa, anksioznosti ili pretjeranog pritiska kod djeteta:
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href="tel:116111" className="r-btn r-bp" style={{ textDecoration: 'none' }}>📞 Hrabri telefon 116-111</a>
          <button className="r-btn r-bs">📧 Kontaktiraj stručnjaka</button>
        </div>
      </div>
    </div>
  )
}
