'use client';
// SkriptaModal — prikazuje poglavlje skripte u embed načinu (čisto: samo tabovi + sadržaj djela)
// unutar simulatora, bez napuštanja konteksta. iframe je same-origin (CSP frame-ancestors 'self').
import React from 'react';
import { e, useModalTrap } from '../utils/helpers';

export default function SkriptaModal({ url, fullUrl, title, chapter, onClose }) {
  const panelRef = useModalTrap(onClose); // Esc + focus-trap + povrat fokusa
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Sakrij gumb „na vrh" RODITELJSKE (simulator) stranice dok je modal otvoren —
    // inače viri preko modala (unutar modala koristimo poglavljev .btt iz iframea).
    const hideBtn = document.createElement('style');
    hideBtn.textContent = '.global-scroll-top-btn,.hrv-chapter-btt{display:none!important}';
    document.head.appendChild(hideBtn);
    return () => {
      document.body.style.overflow = prev;
      if (hideBtn.parentNode) hideBtn.parentNode.removeChild(hideBtn);
    };
  }, []);

  if (!url) return null;

  return e('div', {
    onClick: onClose,
    role: 'dialog', 'aria-modal': 'true', 'aria-label': title || 'Skripta',
    style: {
      position: 'fixed', inset: 0, zIndex: 9000, background: 'rgba(8,6,12,.72)',
      backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: 16,
    },
  },
    e('div', {
      ref: panelRef, tabIndex: -1,
      onClick: (ev) => ev.stopPropagation(),
      style: {
        background: 'var(--s1,#14121c)', border: '1px solid var(--bdr,rgba(255,255,255,.12))',
        borderRadius: 16, width: 'min(980px,100%)', height: 'min(88vh,920px)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(0,0,0,.5)', outline: 'none',
      },
    },
      // ── Header ──
      e('div', {
        style: {
          display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px',
          borderBottom: '1px solid var(--bdr,rgba(255,255,255,.1))', flexShrink: 0,
        },
      },
        e('span', { style: { fontSize: 18 } }, '📖'),
        e('div', { style: { flex: 1, minWidth: 0 } },
          e('div', {
            style: {
              fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap',
              overflow: 'hidden', textOverflow: 'ellipsis',
            },
          }, title || 'Skripta'),
          chapter && e('div', { style: { fontSize: 11, color: 'var(--muted,#9a93b0)' } }, chapter)
        ),
        fullUrl && e('a', {
          href: fullUrl, target: '_blank', rel: 'noopener noreferrer',
          style: { fontSize: 11, color: 'var(--blue,#6ea8ff)', textDecoration: 'none', whiteSpace: 'nowrap' },
        }, 'Cijela skripta ↗'),
        e('button', {
          onClick: onClose, 'aria-label': 'Zatvori',
          style: {
            border: 'none', background: 'transparent', color: 'var(--text,#eee)',
            fontSize: 20, cursor: 'pointer', lineHeight: 1, padding: '2px 6px',
          },
        }, '✕')
      ),
      // ── Sadržaj (iframe) ──
      e('iframe', {
        src: url, title: title || 'Skripta', loading: 'eager',
        style: { flex: 1, width: '100%', border: 0, background: '#0F0605' },
      })
    )
  );
}
