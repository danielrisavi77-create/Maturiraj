'use client';
// WrappedCard — dijeljiva slika napretka (canvas → PNG). Download + Web Share (mobitel).
import React, { useRef, useEffect, useState } from 'react';
import { getLevel } from '../utils/helpers';
import { calcTopicMastery } from '../utils/pedagogy';
const e = React.createElement;

const LEVEL_NAMES = ['Početnik','Učenik','Marljivi','Napredni','Stručnjak','Maturant','Erudit','Magister','Profesor','Legenda'];

export default function WrappedCard({ userData, onClose }) {
  const canvasRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const d = userData || {};
  const history = d.history || [];
  const xp = d.xp || 0;
  const lvl = getLevel(xp);
  const streak = d.streak || 0;
  const totalExams = history.length;
  const avgPct = totalExams ? Math.round(history.reduce((s, h) => s + (h.pct || 0), 0) / totalExams) : 0;
  const mastery = calcTopicMastery(history);
  const topTopics = Object.entries(mastery)
    .filter(([, m]) => m.accuracy >= 60)
    .sort((a, b) => b[1].accuracy - a[1].accuracy).slice(0, 3);

  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext('2d');
    const W = 1080, H = 1080; c.width = W; c.height = H;
    // bg gradient
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#0e1a3a'); g.addColorStop(1, '#1c2c5c');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    // accent bar
    ctx.fillStyle = '#5b9fff'; ctx.fillRect(0, 0, W, 12);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#9ec5f0'; ctx.font = '600 34px system-ui, sans-serif';
    ctx.fillText('DISCERE · HRVATSKI', W / 2, 130);
    ctx.fillStyle = '#fff'; ctx.font = '800 76px Georgia, serif';
    ctx.fillText('Moj napredak', W / 2, 230);
    // big stat circle — avg %
    ctx.beginPath(); ctx.arc(W / 2, 410, 130, 0, Math.PI * 2);
    ctx.lineWidth = 16; ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.stroke();
    ctx.beginPath(); ctx.arc(W / 2, 410, 130, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (avgPct / 100));
    ctx.strokeStyle = avgPct >= 70 ? '#3ecf6e' : avgPct >= 50 ? '#e8a830' : '#5b9fff'; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = '800 96px system-ui, sans-serif';
    ctx.fillText(avgPct + '%', W / 2, 440);
    ctx.fillStyle = '#9ec5f0'; ctx.font = '500 30px system-ui, sans-serif';
    ctx.fillText('prosječna točnost', W / 2, 495);
    // stat row
    const stats = [['🔥 ' + streak, 'niz dana'], ['📝 ' + totalExams, 'ispita'], ['⭐ ' + xp, 'XP']];
    stats.forEach((s, i) => {
      const x = W / 2 + (i - 1) * 300;
      ctx.fillStyle = '#fff'; ctx.font = '800 54px system-ui, sans-serif'; ctx.fillText(s[0], x, 640);
      ctx.fillStyle = '#9ec5f0'; ctx.font = '500 28px system-ui, sans-serif'; ctx.fillText(s[1], x, 685);
    });
    // level badge
    ctx.fillStyle = 'rgba(91,159,255,.2)';
    const lname = LEVEL_NAMES[lvl] || ('Razina ' + (lvl + 1));
    ctx.font = '700 40px system-ui, sans-serif';
    const lw = ctx.measureText('🎓 ' + lname).width + 60;
    roundRect(ctx, W / 2 - lw / 2, 740, lw, 76, 38); ctx.fill();
    ctx.fillStyle = '#cfe0ff'; ctx.fillText('🎓 ' + lname, W / 2, 790);
    // top topics
    if (topTopics.length) {
      ctx.fillStyle = '#9ec5f0'; ctx.font = '600 28px system-ui, sans-serif';
      ctx.fillText('NAJJAČE TEME', W / 2, 890);
      ctx.fillStyle = '#fff'; ctx.font = '500 34px system-ui, sans-serif';
      topTopics.forEach((t, i) => ctx.fillText(t[0] + ' · ' + t[1].accuracy + '%', W / 2, 945 + i * 48));
    }
    ctx.fillStyle = '#6b8bc0'; ctx.font = '500 28px system-ui, sans-serif';
    ctx.fillText('maturiraj.hr', W / 2, 1030);
  }, [avgPct, streak, totalExams, xp, lvl, topTopics.length]);

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function download() {
    const c = canvasRef.current; if (!c) return;
    const a = document.createElement('a'); a.download = 'discere-hrvatski-napredak.png'; a.href = c.toDataURL('image/png'); a.click();
  }
  async function share() {
    const c = canvasRef.current; if (!c) return;
    try {
      setBusy(true);
      const blob = await new Promise(res => c.toBlob(res, 'image/png'));
      const file = new File([blob], 'discere-napredak.png', { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Moj napredak — Discere' });
      } else { download(); }
    } catch (e) { /* korisnik odustao */ } finally { setBusy(false); }
  }

  return e('div', { onClick: onClose, style: { position: 'fixed', inset: 0, zIndex: 220, background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, overflowY: 'auto' } },
    e('div', { onClick: ev => ev.stopPropagation(), style: { background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 18, padding: 16, maxWidth: 420, width: '100%' } },
      React.createElement('canvas', { ref: canvasRef, style: { width: '100%', borderRadius: 12, display: 'block' } }),
      e('div', { style: { display: 'flex', gap: 8, marginTop: 12 } },
        React.createElement('button', { onClick: share, disabled: busy, style: { flex: 1, background: 'var(--blue)', color: '#fff', border: 'none', borderRadius: 10, padding: '12px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' } }, busy ? 'Pripremam…' : '📤 Podijeli'),
        React.createElement('button', { onClick: download, style: { flex: 1, background: 'var(--s2)', color: 'var(--text)', border: '1px solid var(--bdr)', borderRadius: 10, padding: '12px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' } }, '⬇️ Spremi PNG'),
        e('button', { onClick: onClose, style: { background: 'var(--s2)', color: 'var(--muted)', border: '1px solid var(--bdr)', borderRadius: 10, padding: '12px 14px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' } }, '✕')
      )
    )
  );
}
