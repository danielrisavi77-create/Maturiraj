'use client'

import { useParentContext } from '@/lib/roditelji/parentContext'
import { rizikStyle, childScore, childStatus, childNameGenitive } from '@/lib/roditelji/roditeljiUtils'
import { SectionTitle, InsightBlock, EmptyState, StatCard } from '@/components/roditelji/ui'

export default function UvidiPage() {
  const { activeChild: child } = useParentContext()
  if (!child) return null

  const score  = childScore(child)
  const status = childStatus(child)
  const gen    = childNameGenitive(child.firstName)

  const riskSubjects = child.predmeti.filter(p => p.rizik)
  const posSubjects  = child.predmeti.filter(p => p.trend > 0)
  const negSubjects  = child.predmeti.filter(p => p.trend < 0)

  const activeDays  = child.aktivnost.filter(h => h > 0).length
  const totalHours  = child.aktivnost.reduce((a, b) => a + b, 0)

  return (
    <div className="r-fi">
      {/* Overview stats */}
      <div className="r-sg">
        <StatCard label="Ukupni prosjek" value={`${score}%`} sub={status.label} color={status.color} glow={`${status.color}18`} delay={0} />
        <StatCard label="Aktivnih dana" value={`${activeDays}/7`} sub="ovaj tjedan" color="var(--blue)" glow="rgba(75,123,255,.12)" delay={0.1} />
        <StatCard label="Sati učenja" value={`${totalHours.toFixed(1)}h`} sub="ukupno ovaj tjedan" color="var(--gold)" glow="rgba(245,158,11,.12)" delay={0.2} />
        <StatCard label="Predmeta u riziku" value={riskSubjects.length} sub={riskSubjects.length === 0 ? 'sve OK' : 'traži pažnju'} color={riskSubjects.length > 0 ? 'var(--red)' : 'var(--green)'} glow={riskSubjects.length > 0 ? 'rgba(248,113,113,.12)' : 'rgba(62,207,110,.12)'} delay={0.3} />
      </div>

      {/* Risk flags */}
      {riskSubjects.length > 0 && (
        <div className="r-card" style={{ padding: '22px 24px', marginBottom: 16, borderColor: 'rgba(248,113,113,.2)', background: 'var(--red-d)' }}>
          <SectionTitle>⚠️ Predmeti u riziku</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {riskSubjects.map((p, i) => {
              const rs = rizikStyle(p.rizik)
              return (
                <div key={i} className="r-irow" style={{ background: 'rgba(0,0,0,.15)', borderRadius: 10, padding: '10px 14px' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: rs?.color || 'var(--amber)', flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{p.name}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: rs?.color || 'var(--amber)' }}>{p.prog}%</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: rs?.color, background: rs?.bg, border: `1px solid ${rs?.border}`, padding: '2px 8px', borderRadius: 99 }}>{p.rizik}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Trends */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }} className="r-two-col">
        <div className="r-card" style={{ padding: '22px 24px' }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--green)', marginBottom: 14 }}>📈 Pozitivni trendovi</div>
          {posSubjects.length === 0
            ? <div style={{ fontSize: 13, color: 'var(--muted)' }}>Nema pozitivnih trendova ovaj tjedan.</div>
            : posSubjects.map((p, i) => (
              <div key={i} className="r-irow">
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 13 }}>{p.name}</span>
                <span style={{ fontWeight: 700, color: 'var(--green)' }}>+{p.trend}%</span>
              </div>
            ))
          }
        </div>
        <div className="r-card" style={{ padding: '22px 24px' }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--red)', marginBottom: 14 }}>📉 Negativni trendovi</div>
          {negSubjects.length === 0
            ? <div style={{ fontSize: 13, color: 'var(--green)' }}>Nema padova — sve u redu! 🎉</div>
            : negSubjects.map((p, i) => (
              <div key={i} className="r-irow">
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 13 }}>{p.name}</span>
                <span style={{ fontWeight: 700, color: 'var(--red)' }}>{p.trend}%</span>
              </div>
            ))
          }
        </div>
      </div>

      {/* Interpretation */}
      <div className="r-card" style={{ padding: '22px 24px' }}>
        <SectionTitle>🧠 Tumačenje za roditelje</SectionTitle>
        <InsightBlock items={[
          { ico: '📊', txt: `${child.firstName} je na ${score}% prosjeka ukupno. ${score >= 75 ? 'To je solidna pozicija — konzistentnost je sada ključna.' : 'Postoji prostora za napredak — fokus na slabijim predmetima može donijeti brze rezultate.'}` },
          { ico: '📅', txt: `Aktivnost: ${activeDays} od 7 dana. ${activeDays >= 5 ? 'Odlična dosljednost — to je najvažnija navika za maturu.' : 'Svaki dodatni dan pravi razliku. Čak i 20 minuta dnevno gradi naviku.'}` },
          { ico: '⚡', txt: `Predmeti u rastu: ${posSubjects.map(p => p.name.split(' ')[0]).join(', ') || '—'}. ${posSubjects.length > 0 ? 'Pristup u tim predmetima funkcionira — isti pristup primijeniti na ostale.' : 'Nema trendova rasta ovaj tjedan — fokus na redovitoj vježbi.'}` },
          { ico: '💡', txt: `Vaša uloga: ${riskSubjects.length > 0 ? `${gen} treba podršku u ${riskSubjects.map(p => p.name.split(' ')[0]).join(', ')}. Kratki razgovori i ohrabrenje čine veliku razliku.` : 'Sve je na dobrom putu. Pohvalite trud — motivacija je ključna za konstantnost.'}` },
          { ico: '🎯', txt: child.cilj ? `Cilj "${child.cilj}" — pratite kako se ${child.firstName} približava tom cilju svaki tjedan.` : `Savjet: postavite konkretan cilj (npr. "+10% u matematici za mjesec") — djeca koja imaju jasne ciljeve napreduju brže.` },
        ]} />
      </div>
    </div>
  )
}
