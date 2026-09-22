'use client'
import { useClientState } from '@/lib/hooks/useClientState'

export function useCompareDeepLink(track) {
  return useClientState(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('openCompare') !== '1') return false
    params.delete('openCompare')
    const search = params.toString()
    window.history.replaceState({}, '', window.location.pathname + (search ? `?${search}` : '') + window.location.hash)
    track?.('compare_deeplink_open')
    return true
  }, false)
}
