'use client'
import { useEffect } from 'react'
import { trackEvent } from './tracker'
import type { EventName } from './events'

export function usePageTracking(eventName: EventName, meta?: Record<string, unknown>) {
  useEffect(() => {
    trackEvent({ name: eventName, meta })
  }, [])  // intentionally empty — fire once on mount
}
