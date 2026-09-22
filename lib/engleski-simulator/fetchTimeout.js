// Strop čekanja na mrežu — dijeli ga dohvat ispita (examsLoader.js) i predaja
// na ocjenjivanje (gradeClient.js).
//
// Bez njega `fetch` nad vezom koja nestane bez RST-a (tunel, gubitak signala)
// nikad ne razriješi promise: ni `catch` ni `finally` se ne izvrše, pa gumb
// ostaje na "Predajem…", odnosno ekran zauvijek na "Učitavamo...", bez ijednog
// puta prema ponovnom pokušaju.

/** AbortSignal.timeout uz fallback na ručni controller (stariji preglednici). */
export function timeoutSignal(ms) {
  try {
    if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
      return AbortSignal.timeout(ms)
    }
    if (typeof AbortController !== 'undefined') {
      const controller = new AbortController()
      setTimeout(() => controller.abort(), ms)
      return controller.signal
    }
  } catch {}
  return undefined
}

/** Prekid po isteku stropa nije "mreža ne radi" nego "predugo traje". */
export function isAbortError(err) {
  return err?.name === 'TimeoutError' || err?.name === 'AbortError'
}
