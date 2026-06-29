'use client'
import { useABVariant } from './useABVariant'

/**
 * Feature A/B — za UI varijante.
 *
 * Usage:
 *   const isNewPaywall = useFeatureAB('paywall_layout_v2')
 *   return isNewPaywall ? <NewPaywall/> : <OldPaywall/>
 */
export function useFeatureAB(experimentId: string): boolean {
  const { getVariant } = useABVariant()
  return getVariant(experimentId) === 'b'
}

/**
 * Multi-variant feature AB.
 * Returns string variant for experiments with 3+ variants.
 */
export function useMultiAB(experimentId: string): string {
  const { getVariant } = useABVariant()
  return getVariant(experimentId)
}
