import { cookies } from 'next/headers'

// Server-upravljan guest session id (httpOnly cookie). Za razliku od klijentskog
// localStorage session_id-a (koji je forgeable → IDOR), ovaj cookie klijent ne može
// čitati ni mijenjati, pa service-role endpointi mogu sigurno vezati guest podatke.
export const GUEST_COOKIE = 'mat_guest_sid'
const ONE_YEAR = 60 * 60 * 24 * 365

/**
 * Vrati guest sid iz httpOnly cookieja. Ako ga nema i create=true, generira novi
 * i postavi cookie (radi samo u route handleru / server actionu).
 * @returns {Promise<string|null>}
 */
export async function getGuestSid({ create = false } = {}) {
  const store = await cookies()
  let sid = store.get(GUEST_COOKIE)?.value
  if (!sid && create) {
    sid = crypto.randomUUID()
    store.set(GUEST_COOKIE, sid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: ONE_YEAR,
    })
  }
  return sid || null
}
