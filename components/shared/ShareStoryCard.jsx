'use client'
import { useCallback, useRef, useState } from 'react'

/**
 * ShareStoryCard — generates an Instagram Story (1080×1920) PNG
 * and surfaces a Web Share API / download flow.
 *
 * Props
 *   score        number  0-100  (percentage)
 *   correct      number  correct count
 *   total        number  total questions
 *   percentile   number|null  0-100 (higher = better rank)
 *                e.g. 77 → "Top 23%"
 *   label        string  e.g. "Hrvatski jezik — Simulator 2025"
 *   facultyShort string  e.g. "MEF" | "PMF" | "Pravo" | null
 *   accentColor  string  hex boja #rrggbb (NE CSS varijabla), defaults to '#5b9fff'
 *   emoji        string  single emoji for faculty icon
 *   breakdown    array   [{ subject, correct, total }] optional per-subject rows
 */
export default function ShareStoryCard({
  score,
  correct,
  total,
  percentile = null,
  label = 'Simulator mature',
  facultyShort = null,
  accentColor = '#5b9fff',
  emoji = '🎓',
  breakdown = [],
}) {
  // Canvas 2D ne razumije CSS varijable: `ctx.fillStyle = 'var(--orange)'` se tiho
  // ignorira, parseInt nad njom daje NaN, a addColorStop BACA SyntaxError i sruši
  // generate() prije setImgSrc/setLoading(false) (gumb zauvijek ostane "Generira...").
  // Isto vrijedi za konkatenaciju s alfa sufiksom u inline stilovima ispod.
  // Zato se prihvaća samo #rrggbb; sve ostalo pada na zadanu boju.
  const accent = /^#[0-9a-fA-F]{6}$/.test(String(accentColor)) ? accentColor : '#5b9fff'
  const canvasRef = useRef(null)
  const [imgSrc, setImgSrc]     = useState(null)
  const [loading, setLoading]   = useState(false)
  const [copied, setCopied]     = useState(false)
  const [shared, setShared]     = useState(false)

  // ── Canvas drawing ──────────────────────────────────────────────────────────
  const generate = useCallback(async () => {
    setLoading(true)
    const canvas = canvasRef.current
    if (!canvas) { setLoading(false); return }
    const W = 1080, H = 1920
    canvas.width = W; canvas.height = H
    const ctx = canvas.getContext('2d')
    try { await document.fonts.ready } catch (_) {}

    // Resolve accent RGB for transparency layers
    const hex = accent.replace('#', '')
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    const ac = (a) => `rgba(${r},${g},${b},${a})`

    // ── 1. Background ────────────────────────────────────────────────────────
    const bg = ctx.createLinearGradient(0, 0, 0, H)
    bg.addColorStop(0, '#060810')
    bg.addColorStop(1, '#010204')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, W, H)

    // Ambient glow top-center
    const glow = ctx.createRadialGradient(W / 2, H * 0.22, 0, W / 2, H * 0.22, W * 0.72)
    glow.addColorStop(0, ac(0.18))
    glow.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, W, H)

    // Subtle grid texture lines
    ctx.strokeStyle = 'rgba(255,255,255,0.025)'
    ctx.lineWidth = 1
    for (let y = 0; y < H; y += 64) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
    }

    // ── 2. Top brand bar ────────────────────────────────────────────────────
    // Logo dot + wordmark
    ctx.fillStyle = accent
    ctx.beginPath(); ctx.arc(92, 82, 8, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,0.9)'
    ctx.font = '700 36px -apple-system,Arial,sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('maturiraj.hr', 114, 95)

    // Top-right: small badge
    ctx.fillStyle = ac(0.15)
    ctx.strokeStyle = ac(0.3)
    ctx.lineWidth = 1
    roundRect(ctx, W - 220, 56, 180, 48, 24)
    ctx.fill(); ctx.stroke()
    ctx.fillStyle = accent
    ctx.font = '600 22px -apple-system,Arial,sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('2026', W - 130, 86)

    // ── 3. Faculty section ───────────────────────────────────────────────────
    const fy = 200
    if (facultyShort) {
      // Glassy faculty pill
      ctx.fillStyle = ac(0.12)
      ctx.strokeStyle = ac(0.35)
      ctx.lineWidth = 2
      roundRect(ctx, W / 2 - 180, fy, 360, 96, 48)
      ctx.fill(); ctx.stroke()

      ctx.fillStyle = 'rgba(255,255,255,0.95)'
      ctx.font = `900 56px -apple-system,Arial,sans-serif`
      ctx.textAlign = 'center'
      ctx.fillText(facultyShort, W / 2, fy + 62)
    }

    // ── 4. Emoji icon ────────────────────────────────────────────────────────
    ctx.font = '120px serif'
    ctx.textAlign = 'center'
    ctx.fillText(emoji, W / 2, facultyShort ? fy + 200 : fy + 160)

    // ── 5. Score ring ────────────────────────────────────────────────────────
    const cx = W / 2, cy = H * 0.42
    const R = 220

    // Track ring
    ctx.beginPath()
    ctx.arc(cx, cy, R, -Math.PI / 2, Math.PI * 1.5)
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'
    ctx.lineWidth = 28
    ctx.lineCap = 'round'
    ctx.stroke()

    // Progress arc
    const sweep = (score / 100) * 2 * Math.PI
    ctx.beginPath()
    ctx.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + sweep)
    const arcGrad = ctx.createLinearGradient(cx - R, cy, cx + R, cy)
    arcGrad.addColorStop(0, accent)
    arcGrad.addColorStop(1, lightenHex(accent, 60))
    ctx.strokeStyle = arcGrad
    ctx.lineWidth = 28
    ctx.lineCap = 'round'
    ctx.stroke()

    // Glow on arc end-point
    const endAngle = -Math.PI / 2 + sweep
    const ex = cx + R * Math.cos(endAngle)
    const ey = cy + R * Math.sin(endAngle)
    const glowEnd = ctx.createRadialGradient(ex, ey, 0, ex, ey, 54)
    glowEnd.addColorStop(0, ac(0.5))
    glowEnd.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = glowEnd
    ctx.beginPath(); ctx.arc(ex, ey, 54, 0, Math.PI * 2); ctx.fill()

    // Score number
    ctx.fillStyle = 'rgba(255,255,255,1)'
    ctx.font = `900 148px -apple-system,Arial,sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(`${score}%`, cx, cy + 54)

    // Correct/total label
    ctx.fillStyle = 'rgba(255,255,255,0.45)'
    ctx.font = `500 42px -apple-system,Arial,sans-serif`
    ctx.fillText(`${correct} / ${total} točnih`, cx, cy + 116)

    // ── 6. Percentile hero badge ─────────────────────────────────────────────
    const topPct = percentile !== null ? Math.max(1, 100 - Math.round(percentile)) : null
    const py = H * 0.61

    if (topPct !== null) {
      // Badge background
      ctx.fillStyle = ac(0.14)
      ctx.strokeStyle = ac(0.5)
      ctx.lineWidth = 2
      roundRect(ctx, W / 2 - 300, py - 24, 600, 160, 28)
      ctx.fill(); ctx.stroke()

      // "TOP" label
      ctx.fillStyle = accent
      ctx.font = `700 40px -apple-system,Arial,sans-serif`
      ctx.textAlign = 'center'
      ctx.fillText('🏆  TOP', W / 2, py + 44)

      // Huge percentile number
      ctx.fillStyle = 'rgba(255,255,255,1)'
      ctx.font = `900 100px -apple-system,Arial,sans-serif`
      ctx.fillText(`${topPct}%`, W / 2 + 40, py + 136)

      // Sub-label
      ctx.fillStyle = 'rgba(255,255,255,0.45)'
      ctx.font = `400 32px -apple-system,Arial,sans-serif`
      ctx.fillText(`u ${facultyShort ? facultyShort + ' ' : ''}simulatoru`, W / 2, py + 190)
    } else {
      // No percentile yet — show score label
      ctx.fillStyle = ac(0.14)
      ctx.strokeStyle = ac(0.3)
      ctx.lineWidth = 1.5
      roundRect(ctx, W / 2 - 280, py, 560, 100, 24)
      ctx.fill(); ctx.stroke()
      ctx.fillStyle = accent
      ctx.font = `700 36px -apple-system,Arial,sans-serif`
      ctx.textAlign = 'center'
      ctx.fillText('📚  ' + label, W / 2, py + 64)
    }

    // ── 7. Per-subject breakdown ─────────────────────────────────────────────
    if (breakdown.length > 0) {
      const bpy = py + (topPct !== null ? 240 : 130)
      const BAR_W = 560, BAR_H = 14, GAP = 64
      const startX = (W - BAR_W) / 2

      breakdown.slice(0, 4).forEach((item, i) => {
        const y = bpy + i * GAP
        const pctB = item.total > 0 ? Math.round(item.correct / item.total * 100) : 0
        const col = pctB >= 80 ? '#3ecf6e' : pctB >= 60 ? accent : '#f87171'

        // Track
        ctx.fillStyle = 'rgba(255,255,255,0.08)'
        roundRect(ctx, startX, y, BAR_W, BAR_H, 7)
        ctx.fill()

        // Fill
        ctx.fillStyle = col
        roundRect(ctx, startX, y, BAR_W * pctB / 100, BAR_H, 7)
        ctx.fill()

        // Labels
        ctx.fillStyle = 'rgba(255,255,255,0.7)'
        ctx.font = `500 30px -apple-system,Arial,sans-serif`
        ctx.textAlign = 'left'
        ctx.fillText(item.subject, startX, y - 8)

        ctx.fillStyle = col
        ctx.font = `700 30px -apple-system,Arial,sans-serif`
        ctx.textAlign = 'right'
        ctx.fillText(`${pctB}%`, startX + BAR_W, y - 8)
      })
    }

    // ── 8. Horizontal divider ────────────────────────────────────────────────
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(W * 0.12, H - 220)
    ctx.lineTo(W * 0.88, H - 220)
    ctx.stroke()

    // ── 9. Footer ────────────────────────────────────────────────────────────
    ctx.fillStyle = 'rgba(255,255,255,0.22)'
    ctx.font = `700 38px -apple-system,Arial,sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText('maturiraj.hr', W / 2, H - 150)

    ctx.fillStyle = 'rgba(255,255,255,0.12)'
    ctx.font = `400 28px -apple-system,Arial,sans-serif`
    ctx.fillText('Tvoj put do fakulteta', W / 2, H - 104)

    // Small dots decoration
    for (let dx = -3; dx <= 3; dx++) {
      ctx.fillStyle = dx === 0 ? accent : 'rgba(255,255,255,0.12)'
      ctx.beginPath()
      ctx.arc(W / 2 + dx * 24, H - 62, dx === 0 ? 6 : 4, 0, Math.PI * 2)
      ctx.fill()
    }

    const url = canvas.toDataURL('image/png')
    setImgSrc(url)
    setLoading(false)
  }, [score, correct, total, percentile, label, facultyShort, accent, emoji, breakdown])

  // ── Share flow ──────────────────────────────────────────────────────────────
  async function handleShare() {
    if (!imgSrc) { await generate(); return }
    if (typeof navigator === 'undefined') return

    // Convert data URL to Blob for Web Share API
    try {
      const res  = await fetch(imgSrc)
      const blob = await res.blob()
      const file = new File([blob], 'maturiraj-rezultat.png', { type: 'image/png' })

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: buildShareTitle(),
          text: buildShareText(),
        })
        setShared(true)
        setTimeout(() => setShared(false), 3000)
        return
      }
    } catch (_) {}

    // Fallback: copy text
    try {
      await navigator.clipboard.writeText(buildShareText())
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (_) {}
  }

  function buildShareTitle() {
    const topPct = percentile !== null ? Math.max(1, 100 - Math.round(percentile)) : null
    if (topPct !== null && topPct <= 30) return `Top ${topPct}% u ${facultyShort || ''} simulatoru! 🏆`
    return `Riješio/la sam ${facultyShort ? facultyShort + ' ' : ''}simulator! 🎓`
  }

  function buildShareText() {
    const topPct = percentile !== null ? Math.max(1, 100 - Math.round(percentile)) : null
    let text = `📚 ${label}\n\n`
    text += `Rezultat: ${score}% (${correct}/${total} točnih)\n`
    if (topPct !== null) text += `🏆 Top ${topPct}% od svih koji su rješavali ovaj simulator!\n`
    text += `\n🎓 Vježbaj i ti → maturiraj.hr`
    return text
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  const topPct = percentile !== null ? Math.max(1, 100 - Math.round(percentile)) : null

  return (
    <div style={styles.wrap}>
      {/* Hidden canvas for generation */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Preview thumbnail */}
      {imgSrc ? (
        <div style={styles.previewWrap}>
          <img
            src={imgSrc}
            alt="Story kartica za dijeljenje"
            style={styles.previewImg}
          />
          <div style={styles.previewLabel}>
            📱 Spremi i podijeli na Instagram Story
          </div>
        </div>
      ) : (
        /* Pre-generate teaser card */
        <div style={{ ...styles.teaser, borderColor: accent + '44', background: accent + '10' }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>📸</div>
          <div style={{ fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
            {topPct !== null
              ? `Top ${topPct}% — podijeli na Instagram!`
              : 'Generiraj story karticu'}
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
            1080×1920 • Instagram Story format
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div style={styles.actions}>
        {!imgSrc ? (
          <button
            style={{ ...styles.btnPrimary, background: accent, opacity: loading ? 0.7 : 1 }}
            onClick={generate}
            disabled={loading}
          >
            {loading ? '⏳ Generira...' : '📸 Generiraj story karticu'}
          </button>
        ) : (
          <>
            <button
              style={{ ...styles.btnPrimary, background: shared ? '#3ecf6e' : accent }}
              onClick={handleShare}
            >
              {shared ? '✓ Podijeljeno!' : '📱 Podijeli'}
            </button>

            <a
              href={imgSrc}
              download={`maturiraj-${(facultyShort || 'rezultat').toLowerCase()}-top${topPct || score}pct.png`}
              style={styles.btnSecondary}
            >
              ⬇ Preuzmi PNG
            </a>

            <button
              style={{ ...styles.btnGhost, color: copied ? '#3ecf6e' : undefined }}
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(buildShareText())
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2500)
                } catch (_) {}
              }}
            >
              {copied ? '✓ Kopirano!' : '📋 Kopiraj tekst'}
            </button>

            <button
              style={styles.btnGhost}
              onClick={() => { setImgSrc(null); generate() }}
            >
              🔄 Regeneriraj
            </button>
          </>
        )}
      </div>

      {/* WhatsApp quick share */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(buildShareText())}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.waBtn}
      >
        <span style={{ fontSize: 16 }}>💬</span>
        WhatsApp
      </a>
    </div>
  )
}

// ── Canvas helpers ────────────────────────────────────────────────────────────
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function lightenHex(hex, amount) {
  const h = hex.replace('#', '')
  const r = Math.min(255, parseInt(h.slice(0, 2), 16) + amount)
  const g = Math.min(255, parseInt(h.slice(2, 4), 16) + amount)
  const b = Math.min(255, parseInt(h.slice(4, 6), 16) + amount)
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = {
  wrap: {
    borderRadius: 20,
    border: '1px solid var(--bdr)',
    background: 'linear-gradient(160deg,rgba(14,18,32,.92),rgba(20,24,40,.82))',
    overflow: 'hidden',
  },
  teaser: {
    padding: '28px 24px',
    textAlign: 'center',
    borderBottom: '1px solid var(--bdr)',
    borderRadius: '20px 20px 0 0',
    border: '1px solid transparent',
    margin: -1,
  },
  previewWrap: {
    padding: '16px',
    borderBottom: '1px solid var(--bdr)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(0,0,0,.3)',
  },
  previewImg: {
    width: '100%',
    maxWidth: 220,
    borderRadius: 12,
    boxShadow: '0 8px 32px rgba(0,0,0,.5)',
  },
  previewLabel: {
    fontSize: 11,
    color: 'var(--muted)',
    textAlign: 'center',
  },
  actions: {
    padding: '12px 16px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  btnPrimary: {
    flex: '1 1 180px',
    padding: '10px 18px',
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    border: 'none',
    color: '#fff',
    fontFamily: 'var(--fb)',
    transition: 'opacity .15s',
  },
  btnSecondary: {
    flex: '1 1 140px',
    padding: '10px 18px',
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    border: '1px solid var(--bdr2)',
    color: 'var(--text)',
    background: 'var(--s2)',
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'var(--fb)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  btnGhost: {
    flex: '1 1 120px',
    padding: '10px 14px',
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    border: '1px solid var(--bdr)',
    color: 'var(--muted)',
    background: 'transparent',
    fontFamily: 'var(--fb)',
    transition: 'color .15s',
  },
  waBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    margin: '0 16px 14px',
    padding: '8px 0',
    borderRadius: 9,
    fontSize: 13,
    fontWeight: 600,
    textDecoration: 'none',
    background: 'rgba(37,211,102,.08)',
    color: '#25d366',
    border: '1px solid rgba(37,211,102,.2)',
  },
}
