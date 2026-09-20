'use client'
// components/discere/paywall/LockedResultsBlock.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Zamjena za zaključani dio rezultata (pregled odgovora, obrazloženja, analiza
// po temama, savjeti). Pravi sadržaj se namjerno uopće ne renderira — free
// korisnik ne smije doći do točnih odgovora ni kopiranjem DOM-a — pa se
// prikazuju samo zamućeni placeholder redovi ispod overlaya s CTA-om.
// Placeholder je pozadinski sloj (position:absolute), a CTA je u normalnom toku
// i diktira visinu — obrnuto bi se, uz minHeight + overflow:hidden na
// spremniku, gumb odsjekao na užim ekranima.
// ─────────────────────────────────────────────────────────────────────────────

export default function LockedResultsBlock({
  label,
  note,
  rows = 4,
  minHeight = 150,
  upgradeHref = '/pro?from=discere-results&plan=standard',
  ctaLabel = 'Otključaj razradu → Standard',
}) {
  return (
    <div style={{
      position: 'relative',
      marginBottom: 22,
      borderRadius: 'var(--r)',
      border: '1px solid var(--bdr)',
      background: 'var(--s1)',
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        filter: 'blur(6px)',
        pointerEvents: 'none',
        userSelect: 'none',
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 13,
      }}>
        {Array.from({ length: rows }, (_, i) => (
          <div key={i} style={{
            height: 12,
            borderRadius: 6,
            background: 'var(--s3)',
            width: (52 + (i * 19) % 42) + '%',
          }} />
        ))}
      </div>
      <div role="region" aria-label={label} style={{
        position: 'relative',
        minHeight,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
        textAlign: 'center',
        padding: '18px 20px',
        // --lock-scrim definiraju svi simulatori (hrv/eng scoped CSS, mat-engine.css,
        // sociologija.html); fallback je neprozirni --s1 istog predmeta jer bi svijetla
        // fiksna boja u tamnoj temi dala svijetlu podlogu ispod svijetlog teksta.
        background: 'var(--lock-scrim, var(--s1))',
      }}>
        <div style={{ fontSize: 24 }}>🔒</div>
        <div style={{ fontFamily: 'var(--fh)', fontSize: 15, fontWeight: 800, color: 'var(--text)' }}>{label}</div>
        <div style={{ fontSize: 12.5, color: 'var(--text)', opacity: .8, maxWidth: 380, lineHeight: 1.6 }}>
          {note || 'Ocjena, postotak i bodovi ostaju besplatni. Detaljna razrada rezultata dolazi sa Standard planom.'}
        </div>
        <a href={upgradeHref} className="btn btn-gold" style={{ textDecoration: 'none' }}>{ctaLabel}</a>
      </div>
    </div>
  )
}
