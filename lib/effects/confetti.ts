/**
 * Lightweight confetti engine.
 * 0 dependencies, SSR-safe, auto-cleanup.
 *
 * Usage:
 *   import { fireConfetti } from '@/lib/effects/confetti'
 *   fireConfetti({ origin: { x: 0.5, y: 0.6 }, colors: ['#4b7bff', '#7c5cfc', '#3ecf6e'] })
 */

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  angle: number
  angularVelocity: number
  color: string
  size: number
  shape: 'rect' | 'circle' | 'triangle'
  opacity: number
  decay: number
  gravity: number
  wobble: number
  wobbleSpeed: number
}

export interface ConfettiOptions {
  count?: number
  origin?: { x: number; y: number }  // 0-1 normalized
  colors?: string[]
  spread?: number      // degrees
  startVelocity?: number
  gravity?: number
  ticks?: number       // animation frames before fade-out starts
  scalar?: number      // size multiplier
  drift?: number       // horizontal drift
  zIndex?: number
}

// ─── Accessibility: reduced-motion ──────────────────────────────────────────
// Read once at module load; honours user OS/browser preference.
const reducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Inject the @keyframes only once into <head>
function ensureFadeKeyframe() {
  if (typeof document === 'undefined') return
  if (document.getElementById('ow-fade-style')) return
  const style = document.createElement('style')
  style.id = 'ow-fade-style'
  style.textContent = '@keyframes ow-fade { 0%{opacity:1} 100%{opacity:0} }'
  document.head.appendChild(style)
}

/**
 * Accessibility fallback for prefers-reduced-motion.
 * Shows a brief coloured flash overlay instead of particle animation.
 */
function fireFlashFallback(color: string): () => void {
  if (typeof document === 'undefined') return () => {}
  ensureFadeKeyframe()
  const flash = document.createElement('div')
  flash.style.cssText = [
    'position:fixed',
    'inset:0',
    'z-index:9999',
    `background:${color}18`,
    'pointer-events:none',
    'animation:ow-fade .5s ease forwards',
  ].join(';')
  document.body.appendChild(flash)
  const timer = setTimeout(() => flash.remove(), 600)
  return () => { clearTimeout(timer); flash.remove() }
}

const DEFAULTS: Required<ConfettiOptions> = {
  count: 120,
  origin: { x: 0.5, y: 0.7 },
  colors: ['#4b7bff', '#7c5cfc', '#3ecf6e', '#e9b446', '#f87171', '#2dd4bf'],
  spread: 65,
  startVelocity: 38,
  gravity: 1.2,
  ticks: 260,
  scalar: 1,
  drift: 0,
  zIndex: 9999,
}

function createParticle(opts: Required<ConfettiOptions>): Particle {
  const angle = (270 + (Math.random() - 0.5) * opts.spread) * (Math.PI / 180)
  const velocity = (opts.startVelocity * 0.6) + Math.random() * opts.startVelocity * 0.7

  return {
    x: opts.origin.x * window.innerWidth,
    y: opts.origin.y * window.innerHeight,
    vx: Math.cos(angle) * velocity + (Math.random() - 0.5) * opts.drift,
    vy: Math.sin(angle) * velocity,
    angle: Math.random() * Math.PI * 2,
    angularVelocity: (Math.random() - 0.5) * 0.4,
    color: opts.colors[Math.floor(Math.random() * opts.colors.length)],
    size: (8 + Math.random() * 6) * opts.scalar,
    shape: (['rect', 'rect', 'circle', 'triangle'] as const)[Math.floor(Math.random() * 4)],
    opacity: 1,
    decay: 0.94 + Math.random() * 0.04,
    gravity: opts.gravity * (0.7 + Math.random() * 0.6),
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.05 + Math.random() * 0.05,
  }
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle) {
  ctx.save()
  ctx.globalAlpha = p.opacity
  ctx.fillStyle = p.color
  ctx.translate(p.x, p.y)
  ctx.rotate(p.angle)

  if (p.shape === 'rect') {
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
  } else if (p.shape === 'circle') {
    ctx.beginPath()
    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
    ctx.fill()
  } else {
    // Triangle
    ctx.beginPath()
    ctx.moveTo(0, -p.size / 2)
    ctx.lineTo(p.size / 2, p.size / 2)
    ctx.lineTo(-p.size / 2, p.size / 2)
    ctx.closePath()
    ctx.fill()
  }

  ctx.restore()
}

/**
 * Fire confetti. Returns a cleanup function.
 * Automatically falls back to a brief flash overlay when the user has
 * requested reduced motion via their OS or browser settings.
 */
export function fireConfetti(options: ConfettiOptions = {}): () => void {
  if (typeof window === 'undefined') return () => {}

  const opts = { ...DEFAULTS, ...options }

  // Accessibility: skip particle animation, show a calm colour flash instead
  if (reducedMotion) {
    return fireFlashFallback(opts.colors[0])
  }
  const canvas = document.createElement('canvas')
  canvas.style.cssText = `
    position: fixed; inset: 0; z-index: ${opts.zIndex};
    pointer-events: none; width: 100%; height: 100%;
  `
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')!
  const particles: Particle[] = Array.from({ length: opts.count }, () => createParticle(opts))
  let tick = 0
  let raf: number
  let alive = true

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)

  const frame = () => {
    if (!alive) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tick++

    const fadeStart = opts.ticks * 0.7

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]

      p.x += p.vx
      p.y += p.vy
      p.vy += p.gravity * 0.5
      p.vx *= p.decay
      p.angle += p.angularVelocity
      p.wobble += p.wobbleSpeed
      p.x += Math.sin(p.wobble) * 0.5

      if (tick > fadeStart) {
        p.opacity -= 0.02
      }

      if (p.opacity <= 0 || p.y > canvas.height + p.size * 2) {
        particles.splice(i, 1)
        continue
      }

      drawParticle(ctx, p)
    }

    if (particles.length > 0 && tick < opts.ticks + 60) {
      raf = requestAnimationFrame(frame)
    } else {
      cleanup()
    }
  }

  raf = requestAnimationFrame(frame)

  const cleanup = () => {
    alive = false
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
    canvas.remove()
  }

  return cleanup
}

/**
 * Preset: Kalkulator prag prijeđen — zeleni/plavi burst iz centra-dna.
 */
export function firePragConfetti(color: string): () => void {
  return fireConfetti({
    count: 100,
    origin: { x: 0.5, y: 0.75 },
    colors: [color, '#3ecf6e', '#7cf5a8', '#e9b446', '#ffffff22'],
    spread: 70,
    startVelocity: 34,
    gravity: 1.0,
    ticks: 300,
    scalar: 0.95,
  })
}

/**
 * Preset: Sided burst (za confetti iz lijevog i desnog ugla istovremeno).
 */
export function fireDoubleConfetti(colors = DEFAULTS.colors): () => void {
  const c1 = fireConfetti({
    count: 60,
    origin: { x: 0.15, y: 0.6 },
    colors,
    spread: 55,
    startVelocity: 42,
    drift: 2,
  })
  const c2 = fireConfetti({
    count: 60,
    origin: { x: 0.85, y: 0.6 },
    colors,
    spread: 55,
    startVelocity: 42,
    drift: -2,
  })
  return () => { c1(); c2() }
}
