'use client'

import { useRouter } from 'next/navigation'
import { useParentContext } from '@/lib/roditelji/parentContext'
import { rizikStyle, tipColor, childScore } from '@/lib/roditelji/roditeljiUtils'
import { ProgressBar, StatCard, SectionTitle } from '@/components/roditelji/ui'

export default function PregledPage() {
  const router = useRouter()
  const { activeChild: child } = useParentContext()

  if (!child) return null

  const days   = ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned']
  const maxH   = Math.max(...child.aktivnost, 0.1)
  const totalH = child.aktivnost.reduce((a, b) => a + b, 0).toFixed(1)
  const activeDays = child.aktivnost.filter(h => h > 0).length
  const warns  = child.obavijesti.filter(o => o.tip === 'warn' && !o.read)
  const snage  = child.predmeti.filter(p => p.prog >= 80)
  const rizicni = child.predmeti.filter(p => p.rizik)
  const score  = childScore(child)

  return (
    <div className="r-fi">
      {/* Attention bar */}
      {warns.length > 0 && (
        <div className="r-notice" style={{ background: 'var(--red-d)', border: '1px solid rgba(248,113,113,.18)', color: 'var(--red)', marginBottom: 22 }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
          <div>
            <strong>{warns.length} {warns.length === 1 ? 'upozorenje' : 'upozorenja'} zahtijevaju pažnju</strong>
            <span style={{ color: 'var(--muted)', fontSize: 13, marginLeft: 8 }}>
              — <span style={{ cursor: 'pointer', color: 'var(--red)', textDecoration: 'underline', fontWeight: 600 }} onClick={() => router.push('/roditelji/obavijesti')}>pogledaj obavijesti</span>
            </span>
          </div>
        </div>
      )}

      {/* Stat cards */}
      <div className="r-sg">
        <StatCard label="Ukupna točnost"     value={`${child.ukupno}%`}  sub={`${child.tjedni} tjedana aktivno`}      color="var(--green)" glow="rgba(62,207,110,.26)"  delay={0} />
        <StatCard label="Učenje ovaj tjedan"  value={`${totalH}h`}       sub={`${activeDays}/7 aktivnih dana`}         color="var(--blue)"  glow="rgba(75,123,255,.26)"  delay={.07} />
        <StatCard label="Zadataka riješeno"   value={child.zadaci}       sub="svi predmeti"                            color="var(--teal)"  glow="rgba(45,207,190,.26)"  delay={.14} />
        <StatCard label="Pažnja"              value={warns.length === 0 ? '✓ OK' : warns.length} sub={warns.length === 0 ? 'Sve u redu' : 'aktualnih upozorenja'} color={warns.length > 0 ? 'var(--red)' : 'var(--green)'} glow={warns.length > 0 ? 'rgba(248,113,113,.26)' : 'rgba(62,207,110,.26)'} delay={.21} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 16 }} className="r-two-col">
        {/* LEFT — predmeti + upcoming */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Predmeti */}
          <div className="r-card" style={{ padding: '22px 22px 18px' }}>
            <SectionTitle right={`Prosjek: ${score}%`}>Napredak po predmetima</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {child.predmeti.map((p, i) => {
                const rs = rizikStyle(p.rizik)
                return (
                  <div key={i} style={{ padding: '12px 14px', borderRadius: 12, border: `1px solid ${rs ? rs.border : 'var(--bdr)'}`, background: rs ? rs.bg : 'var(--s2)', transition: 'background .2s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, boxShadow: `0 0 7px ${p.color}70`, flexShrink: 0 }} />
                        <span style={{ fontWeight: 600, fontSize: 13 }}>{p.name}</span>
                        {rs && <span style={{ fontSize: 10, fontWeight: 700, color: rs.color, background: rs.bg, border: `1px solid ${rs.border}`, padding: '1px 7px', borderRadius: 99 }}>{p.rizik}</span>}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.prog}%</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: p.trend > 0 ? 'var(--green)' : p.trend < 0 ? 'var(--red)' : 'var(--muted)' }}>
                          {p.trend > 0 ? `↑+${p.trend}%` : p.trend < 0 ? `↓${p.trend}%` : '—'}
                        </span>
                      </div>
                    </div>
                    <ProgressBar value={p.prog} color={p.color} />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Upcoming */}
          <div className="r-card" style={{ padding: '20px 22px' }}>
            <SectionTitle>📅 Uskoro</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {child.upcoming.slice(0, 4).map((u, i) => (
                <div key={i} className="r-irow">
                  <div className="r-tdot" style={{ background: tipColor(u.tip), boxShadow: `0 0 6px ${tipColor(u.tip)}50` }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{u.opis}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 1 }}>{u.datum}</div>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: tipColor(u.tip), flexShrink: 0, textTransform: 'uppercase', letterSpacing: '.06em' }}>{u.tip}</div>
                </div>
              ))}
              {child.upcoming.length === 0 && <div style={{ fontSize: 13, color: 'var(--muted)', padding: '8px 0' }}>Nema nadolazećih rokova.</div>}
            </div>
          </div>
        </div>

        {/* RIGHT — aktivnost + snage + trust */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Aktivnost */}
          <div className="r-card" style={{ padding: 20 }}>
            <SectionTitle right={`${totalH}h ukupno`}>Tjedna aktivnost</SectionTitle>
            <div className="r-abars" style={{ height: 90 }}>
              {child.aktivnost.map((h, i) => (
                <div key={i} className="r-abar">
                  <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 600, height: 13, display: 'flex', alignItems: 'center' }}>{h > 0 ? `${h}h` : ''}</div>
                  <div className="r-abar-fill" style={{ height: `${Math.max((h / maxH) * 68, 3)}px`, background: h > 0 ? 'linear-gradient(180deg,var(--blue),var(--violet))' : 'rgba(255,255,255,.04)', borderRadius: 5 }} />
                  <div style={{ fontSize: 10, color: 'var(--muted)' }}>{days[i]}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 16, paddingTop: 10, borderTop: '1px solid var(--bdr)' }}>
              {[
                { l: 'Aktivnih dana', v: `${activeDays}/7` },
                { l: 'Prosjek/dan',   v: `${(child.aktivnost.reduce((a, b) => a + b, 0) / 7).toFixed(1)}h` },
                { l: 'Najdulje',      v: `${Math.max(...child.aktivnost, 0)}h` },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 900, color: 'var(--blue)' }}>{s.v}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Snage */}
          {snage.length > 0 && (
            <div className="r-card" style={{ padding: '17px 18px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>✓ Snage</div>
              {snage.map((p, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: i < snage.length - 1 ? '1px solid var(--bdr)' : 'none', color: 'var(--muted)' }}>
                  <span>{p.name}</span>
                  <span style={{ fontWeight: 700, color: 'var(--green)' }}>{p.prog}%</span>
                </div>
              ))}
            </div>
          )}

          {/* Rizicni */}
          {rizicni.length > 0 && (
            <div className="r-card" style={{ padding: '17px 18px', borderColor: 'rgba(248,113,113,.16)', background: 'var(--red-d)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)', marginBottom: 10 }}>↓ Traže pažnju</div>
              {rizicni.map((p, i) => {
                const rs = rizikStyle(p.rizik)
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: i < rizicni.length - 1 ? '1px solid rgba(248,113,113,.12)' : 'none', color: 'var(--muted)' }}>
                    <span>{p.name}</span>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: rs.color, background: rs.bg, border: `1px solid ${rs.border}`, padding: '1px 7px', borderRadius: 99 }}>{p.rizik}</span>
                      <span style={{ fontWeight: 700, color: rs.color }}>{p.prog}%</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Trust */}
          <div style={{ padding: '16px 18px', background: 'rgba(62,207,110,.05)', border: '1px solid rgba(62,207,110,.12)', borderRadius: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', marginBottom: 5 }}>💚 Pratimo za vas</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.8 }}>
              Ne morate sami pratiti sve. Obavijest dobijate samo kad nešto zahtijeva vašu pažnju. Sve ostalo je u redu.
            </div>
          </div>

          {/* CTA to preporuke */}
          <button className="r-btn r-bp r-btn-md" style={{ width: '100%', gap: 8 }} onClick={() => router.push('/roditelji/preporuke')}>
            💡 Što mogu napraviti ovaj tjedan? →
          </button>
        </div>
      </div>
    </div>
  )
}
