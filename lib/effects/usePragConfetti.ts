import { useRef, useCallback } from 'react'
import { firePragConfetti } from './confetti'

const SESSION_KEY = 'mh_prag_confetti_fired'

/**
 * Fires confetti ONCE per session per studij when threshold is crossed.
 * Prevents spamming on every recalculation.
 */
export function usePragConfetti(studijId: string | null, color: string) {
  const firedRef = useRef<Set<string>>(new Set())

  const tryFire = useCallback((bodovi: number, prag: number | null) => {
    if (!prag || !studijId) return
    if (bodovi < prag) return

    const key = `${studijId}`
    if (firedRef.current.has(key)) return

    // Session storage check — don't refire on tab switch
    const sessionKey = `${SESSION_KEY}_${key}`
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(sessionKey)) return

    firedRef.current.add(key)
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(sessionKey, '1')
    }

    // Short delay za efect AFTER count-up animation
    setTimeout(() => firePragConfetti(color), 350)
  }, [studijId, color])

  return { tryFire }
}
