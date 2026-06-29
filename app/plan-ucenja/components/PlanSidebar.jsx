

import React from 'react';

const CMP = [
  { feat: 'Raspored',        freeVal: '✓', proVal: '✓ Adaptivni', hasFree: true,  hasPro: true  },
  { feat: 'Ponavljanje',     freeVal: '✓', proVal: '✓ Pojačano',  hasFree: true,  hasPro: true  },
  { feat: 'Mini simulacije', freeVal: '—', proVal: '✓',           hasFree: false, hasPro: true  },
  { feat: 'Korekcije',       freeVal: '—', proVal: '✓',           hasFree: false, hasPro: true  },
];

export default function PlanSidebar({
  hasPro,
  satiTjedno = 0,
  ukupnoSati = 0,
  selectedSubjects = [],
}) {
  const n = selectedSubjects.length;
  const accentColor = hasPro ? 'var(--blue)' : 'var(--gold)';
  const accentBg    = hasPro ? 'var(--blue-d)' : 'var(--gold-d)';

  return (
    <aside style={{
      width: 276,
      background: 'linear-gradient(160deg, rgba(255,255,255,.038), rgba(255,255,255,.012))',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: 24,
      boxShadow: '0 16px 48px rgba(0,0,0,.22)',
      backdropFilter: 'blur(20px)',
      overflow: 'hidden',
      flexShrink: 0,
    }}>

      {/* ── Hero ── */}
      <div style={{
        padding: '22px 20px 16px',
        borderBottom: '1px solid var(--bdr)',
        background: `linear-gradient(135deg, ${hasPro ? 'rgba(75,123,255,.10)' : 'rgba(233,180,70,.08)'} 0%, transparent 70%)`,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '3px 10px', borderRadius: 999,
          fontSize: 11, fontWeight: 600, letterSpacing: '.04em',
          marginBottom: 14,
          background: accentBg,
          color: accentColor,
          border: `1px solid ${hasPro ? 'rgba(75,123,255,.25)' : 'rgba(233,180,70,.25)'}`,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: accentColor,
            animation: 'blink 2s ease-in-out infinite',
            display: 'inline-block',
          }} />
          {hasPro ? '✦ PRO' : '◆ Free'}
        </div>

        <div style={{
          fontFamily: 'var(--fh)',
          fontSize: 52, fontWeight: 900, lineHeight: 1,
          letterSpacing: '-.03em',
          color: 'var(--text)',
          marginBottom: 4,
        }}>
          {ukupnoSati}
          <span style={{ fontSize: 20, fontWeight: 400, opacity: .4, marginLeft: 3 }}>h</span>
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>
          {satiTjedno}h tjedno · {n} predmeta
        </div>
      </div>

      {/* ── Metrics ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderBottom: '1px solid var(--bdr)' }}>
        {[
          { val: n,                             lbl: 'Predmeti', color: 'var(--blue)'  },
          { val: `${satiTjedno}h`,              lbl: 'Sati/tj.', color: 'var(--gold)'  },
          { val: hasPro ? 'PRO' : 'Free',       lbl: 'Status',   color: accentColor    },
        ].map((m, i) => (
          <div key={i} style={{
            padding: '12px 8px', textAlign: 'center',
            borderRight: i < 2 ? '1px solid var(--bdr)' : 'none',
          }}>
            <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1, marginBottom: 4, color: m.color }}>{m.val}</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{m.lbl}</div>
          </div>
        ))}
      </div>

      {/* ── Odabrani predmeti ── */}
      <div style={{ borderBottom: '1px solid var(--bdr)' }}>
        <div style={{
          padding: '13px 18px 7px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontSize: 10, fontWeight: 600, letterSpacing: '.10em',
          textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          Odabrani predmeti
          <span style={{
            fontSize: 11, fontWeight: 700,
            padding: '2px 8px', borderRadius: 999,
            background: 'var(--s3)', color: 'var(--text)',
          }}>{n}</span>
        </div>

        <div style={{ padding: '0 8px 10px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          {n > 0 ? selectedSubjects.map(p => (
            <div key={p.id} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 10px',
              borderRadius: 'var(--r-sm)',
              background: 'var(--s3)',
              border: '1px solid var(--bdr)',
              transition: 'border-color .15s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--bdr-hi)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bdr)'}
            >
              <div style={{
                width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                display: 'grid', placeItems: 'center',
                fontSize: 14,
                background: `${p.color}22`,
                border: `1px solid ${p.color}44`,
                color: p.color,
                fontWeight: 600,
              }}>{p.sym}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 13, fontWeight: 600, color: 'var(--text)',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{p.name}</div>
                {p.tag && <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>{p.tag}</div>}
              </div>
              <div style={{ width: 3, height: 20, borderRadius: 2, background: p.color, opacity: .7, flexShrink: 0 }} />
            </div>
          )) : (
            <div style={{
              padding: '20px 10px', textAlign: 'center',
              fontSize: 12, color: 'var(--muted)', lineHeight: 1.7,
            }}>
              👈 Odaberi predmete<br />u koraku 1
            </div>
          )}
        </div>
      </div>

      {/* ── Free vs PRO ── */}
      <div style={{ padding: '14px 16px 16px', borderTop: '1px solid rgba(255,255,255,.07)' }}>

        {/* Label + stupci */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 40px 66px', alignItems: 'center',
          marginBottom: 8, columnGap: 6,
        }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Free vs PRO
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)' }}>Free</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--blue)', background: 'rgba(75,123,255,.14)', border: '1px solid rgba(75,123,255,.3)', borderRadius: 999, padding: '2px 7px', whiteSpace: 'nowrap' }}>✨ PRO</span>
          </div>
        </div>

        {/* Reci */}
        {CMP.map((r, i) => {
          const first = i === 0
          const last = i === CMP.length - 1
          const proLabel = r.proVal.replace('✓', '').trim()
          return (
            <div key={r.feat} style={{
              display: 'grid', gridTemplateColumns: '1fr 40px 66px', alignItems: 'stretch',
              columnGap: 6,
              borderBottom: last ? 'none' : '1px solid rgba(255,255,255,.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '9px 4px 9px 0', fontSize: 12, color: 'var(--text)', opacity: .82 }}>{r.feat}</div>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '9px 2px', fontSize: 13, fontWeight: 700,
                color: r.hasFree ? 'var(--gold)' : 'rgba(106,130,168,.35)',
              }}>{r.freeVal}</div>
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1,
                padding: '8px 6px', textAlign: 'center', lineHeight: 1.05,
                color: r.hasPro ? 'var(--blue)' : 'rgba(106,130,168,.35)',
                background: 'rgba(75,123,255,.07)',
                borderLeft: '1px solid rgba(75,123,255,.16)',
                borderRight: '1px solid rgba(75,123,255,.16)',
                borderTop: first ? '1px solid rgba(75,123,255,.16)' : 'none',
                borderBottom: last ? '1px solid rgba(75,123,255,.16)' : 'none',
                borderTopLeftRadius: first ? 10 : 0, borderTopRightRadius: first ? 10 : 0,
                borderBottomLeftRadius: last ? 10 : 0, borderBottomRightRadius: last ? 10 : 0,
              }}>
                {r.hasPro ? (
                  <>
                    <span style={{ fontSize: 13, fontWeight: 800 }}>✓</span>
                    {proLabel && <span style={{ fontSize: 9, fontWeight: 600, opacity: .9 }}>{proLabel}</span>}
                  </>
                ) : (
                  <span style={{ fontSize: 13, fontWeight: 700 }}>—</span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Footer ── */}
      <div style={{
        padding: '11px 18px',
        fontSize: 11, color: 'var(--muted)', lineHeight: 1.6,
        borderTop: '1px solid rgba(255,255,255,.07)',
      }}>
        {n} predmeta · {satiTjedno}h/tj. ·{' '}
        <span style={{ color: 'var(--blue)', fontWeight: 600 }}>PRO</span> = adaptivni plan + simulacije
      </div>
    </aside>
  );
}