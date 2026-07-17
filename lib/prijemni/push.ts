import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export function isPushSupported(): boolean {
  return typeof window !== 'undefined'
    && 'serviceWorker' in navigator
    && 'PushManager' in window
    && 'Notification' in window
}

export async function getPushPermission(): Promise<NotificationPermission> {
  if (!isPushSupported()) return 'denied'
  return Notification.permission
}

/**
 * Zatražiti dozvolu + subscribe. Vraća true ako je subscription kreiran.
 */
export async function subscribeToPush(studijIds: string[] = []): Promise<boolean> {
  if (!isPushSupported()) return false

  try {
    // 1. Register SW ako nije već
    const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' })
    await navigator.serviceWorker.ready

    // 2. Request permission
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') return false

    // 3. Get or create PushSubscription
    let sub = await registration.pushManager.getSubscription()
    if (!sub) {
      sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY) as unknown as ArrayBuffer,
      })
    }

    // 4. Extract keys
    const subJson = sub.toJSON() as any
    const endpoint = subJson.endpoint
    const p256dh = subJson.keys?.p256dh
    const auth_key = subJson.keys?.auth

    if (!endpoint || !p256dh || !auth_key) {
      console.error('Invalid subscription')
      return false
    }

    // 5. Save to Supabase
    const { data: { session } } = await supabase.auth.getSession()
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    const platform = /Mobile/.test(ua)
      ? /iPhone|iPad/.test(ua) ? 'mobile-ios' : 'mobile-android'
      : 'desktop'

    const payload: any = {
      endpoint, p256dh, auth_key,
      user_agent: ua,
      platform,
      studij_ids: studijIds,
      active: true,
    }

    if (session?.user) {
      payload.user_id = session.user.id
      const { error } = await supabase
        .from('push_subscriptions')
        .upsert(payload, { onConflict: 'endpoint' })
      if (error) { console.error(error); return false }
    } else {
      // Gost: server veže session_id iz httpOnly cookieja (ne anon RLS)
      const res = await fetch('/api/prijemni/guest-push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) { console.error('[guest-push] subscribe failed', res.status); return false }
    }
    return true
  } catch (err) {
    console.error('Push subscribe failed:', err)
    return false
  }
}

export async function unsubscribeFromPush(): Promise<void> {
  if (!isPushSupported()) return
  const registration = await navigator.serviceWorker.ready
  const sub = await registration.pushManager.getSubscription()
  if (!sub) return
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user) {
    await supabase.from('push_subscriptions').delete().eq('endpoint', sub.endpoint)
  } else {
    await fetch('/api/prijemni/guest-push', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endpoint: sub.endpoint }),
    })
  }
  await sub.unsubscribe()
}

export async function updatePushStudiji(studijIds: string[]): Promise<void> {
  if (!isPushSupported()) return
  const registration = await navigator.serviceWorker.ready
  const sub = await registration.pushManager.getSubscription()
  if (!sub) return
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user) {
    await supabase
      .from('push_subscriptions')
      .update({ studij_ids: studijIds, updated_at: new Date().toISOString() })
      .eq('endpoint', sub.endpoint)
  } else {
    await fetch('/api/prijemni/guest-push', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endpoint: sub.endpoint, studij_ids: studijIds }),
    })
  }
}
