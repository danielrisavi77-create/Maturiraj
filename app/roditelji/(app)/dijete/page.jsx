'use client'

import { useState } from 'react'
import { useParentContext } from '@/lib/roditelji/parentContext'
import { rizikStyle, childScore, childStatus } from '@/lib/roditelji/roditeljiUtils'
import { ProgressBar, SectionTitle, InsightBlock } from '@/components/roditelji/ui'

export default function DijetePage() {
  const { activeChild: child } = useParentContext()
  const [subtab, setSubtab] = useState('predmeti')

  if (!child) return null

  const days   = ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned']
  const maxH   = Math.max(...child.aktivnost, 0.1)
  const status = childStatus(child)
  const score  = childScore(child)

  return (
    <div className="r-fi">
      {/* Profile card */}
      <div className="r-card" style={{ padding: '26px 28px', marginBottom: 22, background: 'linear-gradient(135deg,var(--s1),var(--s2))', position: 'relative', overflow: 'hidden' }}>
        <div className="r-orb" style={{ width: 300, height: 300, top: '-40%', right: '-5%', background: `radial-gradient(circle,${child.colorBg},transparent 65%)`, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', position: 'relative' }}>
          <div className="r-cav" style={{ width: 68, height: 68, fontSize: 22, background: child.colorBg, color: child.color, border: `2px solid ${child.color}28`, boxShadow: `0 0 24px ${child.color}18` }}>
            {child.avatar}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5, flexWrap: 'wrap' }}>
              <h2 className="r-d3">{child.name}</h2>
              <span className={`r-badge ${status.badge}`}>{status.label}</span>
              {child.cilj && <span style={{ fontSize: 12, color: 'var(--muted)' }}>🎯 Cilj: <strong style={{ color: 'var(--text)' }}>{child.cilj}</strong></span>}
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: 'var(--muted)' }}>
              <span>📚 {child.razred}</span>
              <span>🏫 {child.skola}</span>
              <span>📅 Aktivan {child.tjedni} tjedana zaredom</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { v: `${child.ukupno}%`, l: 'točnost',  c: 'var(--green)' },
              { v: child.zadaci,       l: 'zadataka', c: 'var(--blue)' },
              { v: `${child.satiUkupno}h`, l: 'učenja', c: 'var(--gold)' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '12px 18px', background: 'var(--s1)', borderRadius: 13, border: '1px solid var(--bdr)' }}>
                <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 900, color: s.c }}>{s.v}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtabs */}
      <div className="r-tabs" style={{ marginBottom: 20 }}>
        {[{ k: 'predmeti', l: '📚 Predmeti' }, { k: 'aktivnost', l: '📈 Aktivnost' }, { k: 'analiza', l: '🔍 Analiza' }, { k: 'uskoro', l: '📅 Uskoro' }].map(t => (
          <button key={t.k} className={`r-tab${subtab === t.k ? ' on' : ''}`} onClick={() => setSubtab(t.k)}>{t.l}</button>
        ))}
      </div>

      {/* Predmeti */}
      {subtab === 'predmeti' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 10 }} className="r-subj-g">
          {child.predmeti.map((p, i) => {
            const rs = rizikStyle(p.rizik)
            return (
              <div key={i} className="r-scard r-card-lift" style={{ borderColor: rs ? rs.border : 'var(--bdr)', background: rs ? rs.bg : 'var(--s1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 13 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: `${p.color}14`, border: `1px solid ${p.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontSize: 15, fontWeight: 900, color: p.color, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{p.zadaci} zad · {p.sati}h</div>
                  </div>
                  {rs && <span style={{ fontSize: 10, fontWeight: 700, color: rs.color, background: rs.bg, border: `1px solid ${rs.border}`, padding: '2px 8px', borderRadius: 99 }}>{p.rizik}</span>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 9 }}>
                  <span style={{ fontFamily: 'var(--fh)', fontSize: 26, fontWeight: 900, color: p.color }}>{p.prog}%</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: p.trend > 0 ? 'var(--green)' : 'var(--red)' }}>
                    {p.trend > 0 ? `↑ +${p.trend}%` : `↓ ${p.trend}%`} ovaj tjedan
                  </span>
                </div>
                <ProgressBar value={p.prog} color={p.color} />
              </div>
            )
          })}
        </div>
      )}

      {/* Aktivnost */}
      {subtab === 'aktivnost' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="r-two-col">
          <div className="r-card" style={{ padding: 24 }}>
            <SectionTitle right="ovaj tjedan">Dnevna aktivnost</SectionTitle>
            <div className="r-abars" style={{ height: 120 }}>
              {child.aktivnost.map((h, i) => (
                <div key={i} className="r-abar">
                  <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, height: 16, display: 'flex', alignItems: 'center' }}>{h > 0 ? `${h}h` : ''}</div>
                  <div style={{ width: '100%', borderRadius: 6, height: `${Math.max((h / maxH) * 90, 3)}px`, background: h > 0 ? 'linear-gradient(180deg,var(--blue),var(--violet))' : 'rgba(255,255,255,.04)', transition: 'height .8s cubic-bezier(.16,1,.3,1)' }} />
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{days[i]}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { l: 'Ukupno sati',     v: `${child.aktivnost.reduce((a, b) => a + b, 0).toFixed(1)}h`, c: 'var(--blue)' },
              { l: 'Aktivnih dana',    v: `${child.aktivnost.filter(h => h > 0).length}/7`,            c: 'var(--green)' },
              { l: 'Najdulje',         v: `${Math.max(...child.aktivnost)}h`,                           c: 'var(--gold)' },
              { l: 'Prosjek/dan',      v: `${(child.aktivnost.reduce((a, b) => a + b, 0) / 7).toFixed(1)}h`, c: 'var(--teal)' },
              { l: 'Aktivnih tjedana', v: child.tjedni,                                                  c: 'var(--violet)' },
            ].map((s, i) => (
              <div key={i} className="r-card" style={{ padding: '13px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{s.l}</span>
                <span style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 900, color: s.c }}>{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analiza */}
      {subtab === 'analiza' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="r-two-col">
            <div className="r-card" style={{ padding: '22px 24px' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--green)', marginBottom: 14 }}>✓ Snage</div>
              {child.predmeti.filter(p => p.prog >= 75).map((p, i) => (
                <div key={i} className="r-irow">
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: 13 }}>{p.name}</span>
                  <span style={{ fontWeight: 700, color: 'var(--green)' }}>{p.prog}%</span>
                  <span style={{ fontSize: 12, color: 'var(--green)' }}>{p.trend > 0 ? `+${p.trend}%` : ''}</span>
                </div>
              ))}
              {child.predmeti.filter(p => p.prog >= 75).length === 0 && <div style={{ fontSize: 13, color: 'var(--muted)' }}>Nema predmeta iznad 75%.</div>}
            </div>
            <div className="r-card" style={{ padding: '22px 24px' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--red)', marginBottom: 14 }}>↓ Traže pažnju</div>
              {child.predmeti.filter(p => p.prog < 75).map((p, i) => {
                const rs = rizikStyle(p.rizik)
                return (
                  <div key={i} className="r-irow">
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                    <span style={{ flex: 1, fontSize: 13 }}>{p.name}</span>
                    <span style={{ fontWeight: 700, color: rs ? rs.color : 'var(--amber)' }}>{p.prog}%</span>
                    <span style={{ fontSize: 12, color: 'var(--red)' }}>{p.trend}%</span>
                  </div>
                )
              })}
              {child.predmeti.filter(p => p.prog < 75).length === 0 && <div style={{ fontSize: 13, color: 'var(--green)' }}>Svi predmeti iznad 75%! 🎉</div>}
            </div>
          </div>
          <div className="r-card" style={{ padding: '22px 24px' }}>
            <SectionTitle>🧠 Što to znači za vas</SectionTitle>
            <InsightBlock items={[
              { ico: '📊', txt: `${child.firstName} je na ${score}% prosjeka — ${score >= 75 ? 'solidna osnova za pripremu. Konzistentnost je ključna.' : 'ima prostora za napredak. Fokus na slabijim predmetima donosi brze rezultate.'}` },
              { ico: '⚡', txt: `${child.aktivnost.filter(h => h > 0).length} od 7 dana je bio aktivan. ${child.aktivnost.filter(h => h > 0).length >= 5 ? 'Odlična konzistentnost — to je najvažnija navika za maturu.' : 'Svaki dodatni dan vježbe stvara momentum. I 20 minuta broji.'}` },
              { ico: '🎯', txt: `Predmeti koji napreduju: ${child.predmeti.filter(p => p.trend > 0).map(p => p.name.split(' ')[0]).join(', ') || '—'}. Pristup tamo funkcionira — primijeniti na slabijima.` },
              { ico: '💡', txt: 'Slabiji predmeti ne trebaju više sati — trebaju pametniju strukturu i malo ohrabrenja od roditelja.' },
            ]} />
          </div>
        </div>
      )}

      {/* Uskoro */}
      {subtab === 'uskoro' && (
        <div className="r-card" style={{ padding: 24 }}>
          <SectionTitle>Nadolazeći rokovi i ispiti</SectionTitle>
          {child.upcoming.length === 0
            ? (
              <div className="r-empty">
                <div className="r-empty-ico">📅</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>Nema rokova</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', maxWidth: 280, lineHeight: 1.75 }}>Nema nadolazećih rokova ili ispita.</div>
              </div>
            )
            : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {child.upcoming.map((u, i) => {
                  const tc = u.tip === 'rok' ? 'var(--red)' : u.tip === 'ispit' ? 'var(--blue)' : 'var(--muted)'
                  return (
                    <div key={i} className="r-irow">
                      <div className="r-tdot" style={{ background: tc, boxShadow: `0 0 8px ${tc}50` }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 500 }}>{u.opis}</div>
                        <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{u.datum}</div>
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: tc, textTransform: 'uppercase', letterSpacing: '.07em', flexShrink: 0 }}>{u.tip}</div>
                    </div>
                  )
                })}
              </div>
            )
          }
        </div>
      )}
    </div>
  )
}
