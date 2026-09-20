'use client';
// ScratchPad — digitalni papir za skiciranje/bilješke tijekom ispita.
// Floating gumb + canvas overlay; crtež ostaje u sesiji (panel se samo skriva/prikazuje).
import React, { useRef, useState, useEffect, useCallback } from 'react';
const e = React.createElement;

const COLORS = ['#1a1a1a', '#c0392b', '#2d6ad4', '#1a7a4a', '#e8a830'];

export default function ScratchPad() {
  const [open, setOpen] = useState(false);
  const [tool, setTool] = useState('pen'); // pen | eraser
  const [color, setColor] = useState('#1a1a1a');
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const last = useRef(null);

  const fitCanvas = useCallback(() => {
    const c = canvasRef.current; if (!c) return;
    const rect = c.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    // preserve existing drawing
    const prev = document.createElement('canvas');
    prev.width = c.width; prev.height = c.height;
    if (c.width && c.height) prev.getContext('2d').drawImage(c, 0, 0);
    c.width = Math.round(rect.width * dpr);
    c.height = Math.round(rect.height * dpr);
    const ctx = c.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (prev.width) ctx.drawImage(prev, 0, 0, prev.width / dpr, prev.height / dpr);
  }, []);

  useEffect(() => {
    if (!open) return;
    fitCanvas();
    window.addEventListener('resize', fitCanvas);
    return () => window.removeEventListener('resize', fitCanvas);
  }, [open, fitCanvas]);

  function pos(ev) {
    const c = canvasRef.current; const rect = c.getBoundingClientRect();
    const p = ev.touches ? ev.touches[0] : ev;
    return { x: p.clientX - rect.left, y: p.clientY - rect.top };
  }
  function start(ev) {
    ev.preventDefault();
    drawing.current = true; last.current = pos(ev);
  }
  function move(ev) {
    if (!drawing.current) return;
    ev.preventDefault();
    const c = canvasRef.current; const ctx = c.getContext('2d');
    const p = pos(ev);
    ctx.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over';
    ctx.strokeStyle = color;
    ctx.lineWidth = tool === 'eraser' ? 18 : 2.4;
    ctx.beginPath(); ctx.moveTo(last.current.x, last.current.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    last.current = p;
  }
  function end() { drawing.current = false; last.current = null; }
  function clear() {
    const c = canvasRef.current; if (!c) return;
    c.getContext('2d').clearRect(0, 0, c.width, c.height);
  }

  const btn = (active) => ({
    background: active ? 'var(--blue-d)' : 'var(--s2)', color: active ? 'var(--blue)' : 'var(--muted)',
    border: '1px solid var(--bdr)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', fontSize: 14, fontFamily: 'var(--fb)',
  });

  return e(React.Fragment, null,
    e('button', {
      className: 'sp-fab',
      onClick: () => setOpen(o => !o), title: 'Skica / papir za račun',
      style: {
        position: 'fixed', right: 16, bottom: 'calc(16px + env(safe-area-inset-bottom))', zIndex: 180,
        width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--bdr)',
        background: open ? 'var(--blue)' : 'var(--s1)', color: open ? '#fff' : 'var(--text)',
        boxShadow: 'var(--shadow-lg)', cursor: 'pointer', fontSize: 20,
      },
    }, '✏️'),
    open && e('div', {
      className: 'sp-panel',
      style: {
        position: 'fixed', right: 16, bottom: 'calc(74px + env(safe-area-inset-bottom))', zIndex: 180,
        width: 'min(420px, calc(100vw - 32px))', background: 'var(--s1)', border: '1px solid var(--bdr)',
        borderRadius: 14, boxShadow: 'var(--shadow-lg)', padding: 10, display: 'flex', flexDirection: 'column', gap: 8,
      },
    },
      e('div', { style: { display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' } },
        e('button', { onClick: () => setTool('pen'), style: btn(tool === 'pen'), title: 'Olovka' }, '✏️'),
        e('button', { onClick: () => setTool('eraser'), style: btn(tool === 'eraser'), title: 'Gumica' }, '🧽'),
        ...COLORS.map(c => e('button', {
          key: c, onClick: () => { setColor(c); setTool('pen'); },
          title: 'Boja', style: { width: 22, height: 22, borderRadius: '50%', background: c, cursor: 'pointer', border: color === c ? '2px solid var(--text)' : '1px solid var(--bdr)' },
        })),
        e('span', { style: { marginLeft: 'auto', display: 'flex', gap: 6 } },
          e('button', { onClick: clear, style: btn(false), title: 'Obriši sve' }, 'Očisti'),
          e('button', { onClick: () => setOpen(false), style: btn(false), title: 'Zatvori' }, '✕'))
      ),
      e('canvas', {
        ref: canvasRef,
        onMouseDown: start, onMouseMove: move, onMouseUp: end, onMouseLeave: end,
        onTouchStart: start, onTouchMove: move, onTouchEnd: end,
        style: { width: '100%', height: 300, background: '#fdfdfb', borderRadius: 10, border: '1px solid var(--bdr)', touchAction: 'none', cursor: 'crosshair' },
      })
    )
  );
}
