'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// Boje predmeta (sinkronizirano s app/skripte/data/subjects.js) — gumb „na vrh"
// estetski preuzima naglasak stranice na kojoj se nalazi.
const SUBJ_COLORS = {
  hrv: '#f87171', mat: '#818cf8', eng: '#c084fc', nje: '#a78bfa', fra: '#60a5fa',
  tal: '#34d399', spn: '#fb923c', fiz: '#fbbf24', kem: '#34d399', bio: '#2dd4bf',
  inf: '#818cf8', geo: '#38bdf8', pov: '#fb923c', psi: '#c084fc', soc: '#e9b446',
  fil: '#94a3b8', log: '#7dd3fc', pig: '#fda4af', vje: '#d4b483', eti: '#86efac',
  gla: '#f9a8d4', lik: '#fdba74', lat: '#a8a29e', grk: '#9ca3af',
}
const ACCENT_GOLD = '#e9b446'   // zadano (naslovnica i ostalo)
const ACCENT_DISCERE = '#5b8cff' // discere / simulator (plava)

// Vrati { accent, filled } prema trenutnoj ruti.
function themeFor(pathname) {
  const seg = (pathname || '').split('/').filter(Boolean) // npr. ['skripte','hrv','h08']
  if (seg[0] === 'skripte') {
    const accent = SUBJ_COLORS[seg[1]] || ACCENT_GOLD
    // Stranica poglavlja (/skripte/<id>/<chapter>) → ispunjena varijanta u boji predmeta
    return { accent, filled: seg.length >= 3 }
  }
  if (seg[0] === 'discere') return { accent: ACCENT_DISCERE, filled: false }
  return { accent: ACCENT_GOLD, filled: false }
}

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  // Na /skripte/hrv (popis poglavlja) — ta stranica ima vlastiti crveni FAB, sakrij globalni
  const isHrvList = pathname === '/skripte/hrv'
  const { accent, filled } = themeFor(pathname)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 420)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible || isHrvList) return null

  return (
    <button
      type="button"
      className={'global-scroll-top-btn' + (filled ? ' is-filled' : '')}
      style={{ '--btt-accent': accent }}
      onClick={scrollToTop}
      aria-label="Vrati na vrh"
      title="Vrati na vrh"
    >
      ↑
    </button>
  )
}
