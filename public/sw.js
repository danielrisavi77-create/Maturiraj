/* Service Worker — handles push notifications for deadline reminders */

self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('push', (event) => {
  if (!event.data) return

  let payload
  try {
    payload = event.data.json()
  } catch {
    payload = { title: 'Maturiraj.hr', body: event.data.text() }
  }

  // #6 — vibration pattern by urgency level
  const vibrate = payload.level === 'critical'
    ? [300, 100, 300, 100, 300]
    : payload.level === 'urgent'
      ? [200, 100, 200]
      : [100]

  const options = {
    body: payload.body || 'Imaš novi podsjetnik',
    icon: '/icons/push-icon-192.png',
    badge: '/icons/push-badge-72.png',
    image: payload.image,
    vibrate,
    tag: payload.tag || 'maturiraj-reminder',
    renotify: true,
    requireInteraction: payload.level === 'critical',
    data: {
      url: payload.url || '/prijemni',
      studij_id: payload.studij_id,
    },
    actions: payload.actions || [
      { action: 'open', title: 'Otvori' },
      { action: 'dismiss', title: 'Sakrij' },
    ],
  }

  event.waitUntil(
    self.registration.showNotification(payload.title || 'Maturiraj.hr', options)
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'dismiss') return

  const url = event.notification.data?.url || '/prijemni'

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      // Ako je tab već otvoren, focus-aj ga i navigiraj na URL
      // (client.navigate umjesto postMessage — nema app-side listenera za 'navigate')
      for (const client of clients) {
        if ('focus' in client) {
          if ('navigate' in client) client.navigate(url).catch(() => {})
          return client.focus()
        }
      }
      // Otvori novi
      if (self.clients.openWindow) {
        return self.clients.openWindow(url)
      }
    })
  )
})
