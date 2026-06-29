'use client'
import { useCallback } from 'react'
import { getCopy, CopyVariant } from './copy'
import { useABVariant } from '@/lib/ab/useABVariant'

/**
 * Hook koji kombinira copy + AB variant.
 * Automatski injektira AB variant za sve getCopy call-ove.
 *
 * Usage:
 *   const { c } = useCopy()
 *   c('paywall.guest_cta')  → string s automatskim AB variant-om
 */
export function useCopy() {
  const { getVariant } = useABVariant()

  const c = useCallback((
    key: string,
    replacements: Record<string, string> = {}
  ): string => {
    // A/B variant po sekciji (svaka sekcija je jedan experiment)
    const section = key.split('.')[0]
    const variant = getVariant(`copy_${section}`) as CopyVariant
    return getCopy(key, variant, replacements)
  }, [getVariant])

  return { c }
}
