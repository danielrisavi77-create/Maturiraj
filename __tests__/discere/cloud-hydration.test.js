// @vitest-environment happy-dom
/**
 * cloud-hydration.test.js
 *
 * Pokriva hidraciju cloud stanja canonical simulatora — dio koji je dosad bio
 * testiran samo kroz čiste funkcije (cloud-sync.test.js), nikad kao stvarni
 * React tok. Port __tests__/engleski-simulator/cloud-hydration.test.js,
 * parametriziran predmetom.
 *
 * Testira se hook useDiscereCloudSync preko renderHooka. Cijela komponenta se
 * namjerno ne renderira: ima lazy ekrane, fetch konteksta ispita i lijeno
 * učitavanje ispita, što bi test učinilo sporim i krhkim bez ičega dodatno
 * pokrivenog.
 *
 * Mockani su samo async omotači (loadDiscereCloudState / saveDiscereCloudState)
 * — čiste funkcije ostaju prave preko vi.importActual, pa testiramo stvarni
 * merge i stvarne blobove.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act, cleanup } from '@testing-library/react'
import { useState } from 'react'

vi.mock('@/lib/discere/cloud-sync', async () => {
  const actual = await vi.importActual('@/lib/discere/cloud-sync')
  return {
    ...actual,
    loadDiscereCloudState: vi.fn(),
    saveDiscereCloudState: vi.fn(),
  }
})

const {
  storageKeys, validateUserData, buildCloudBlob, parseCloudBlob,
  loadDiscereCloudState, saveDiscereCloudState,
} = await import('@/lib/discere/cloud-sync')
const { useDiscereCloudSync } = await import('@/hooks/useDiscereCloudSync')

const SUBJECT = 'bio'
const keys = storageKeys(SUBJECT)
const USER = { id: 'u1' }

function localUserData(examKey = '2026_ljeto', pct = 80) {
  return {
    xp: 120, streak: 2, lastDate: '1. 1. 2026.', totalExams: 1,
    history: [{ examKey, pct, grade: 4, cor: 8, total: 10, date: '1. 1. 2026.', at: 1000 }],
    errorTracker: {}, bookmarks: [],
  }
}

/** Minimalni harness koji zrcali GenericSubjectApp: userData u stateu + hook. */
function useHarness(user) {
  const [userData, setUserData] = useState(() => {
    try { return validateUserData(JSON.parse(localStorage.getItem(keys.userKey) || 'null')) } catch { return validateUserData(null) }
  })
  const { bumpBookmarkRev } = useDiscereCloudSync(SUBJECT, { user, userData, setUserData })
  return { userData, bumpBookmarkRev }
}

function renderSync(initialUser = null) {
  return renderHook(({ user }) => useHarness(user), { initialProps: { user: initialUser } })
}

/** Propusti microtaskove (await unutar hidracije) bez act-upozorenja. */
async function flush() {
  await act(async () => { await Promise.resolve(); await Promise.resolve() })
}

/** userData iz zadnjeg poziva saveDiscereCloudState. */
function lastSavedUserData() {
  const calls = saveDiscereCloudState.mock.calls
  return parseCloudBlob(SUBJECT, calls[calls.length - 1][1]).userData
}

describe('useDiscereCloudSync — hidracija', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    localStorage.clear()
    loadDiscereCloudState.mockReset()
    saveDiscereCloudState.mockReset()
    saveDiscereCloudState.mockResolvedValue(true)
  })
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('neprijavljen korisnik ne radi nijedan cloud poziv', async () => {
    loadDiscereCloudState.mockResolvedValue({ ok: true, blob: null, missingSchema: false })
    localStorage.setItem(keys.userKey, JSON.stringify(localUserData()))
    renderSync(null)
    await flush()
    act(() => { vi.advanceTimersByTime(5000) })
    await flush()
    expect(loadDiscereCloudState).not.toHaveBeenCalled()
    expect(saveDiscereCloudState).not.toHaveBeenCalled()
  })

  it('ne sprema u cloud prije nego hidracija pročita cloud stanje', async () => {
    let resolveLoad
    loadDiscereCloudState.mockReturnValue(new Promise(res => { resolveLoad = res }))
    localStorage.setItem(keys.userKey, JSON.stringify(localUserData()))

    const { rerender } = renderSync(null)
    rerender({ user: USER })
    await flush()
    expect(loadDiscereCloudState).toHaveBeenCalledTimes(1)
    // Čitanje je još u letu → vrata spremanja moraju biti zatvorena, makar je
    // debounce istekao (shouldCloudSave traži završenu hidraciju).
    act(() => { vi.advanceTimersByTime(10000) })
    await flush()
    expect(saveDiscereCloudState).not.toHaveBeenCalled()

    // Prazan cloud + lokalna povijest → migracija lokalnog stanja u cloud
    await act(async () => { resolveLoad({ ok: true, blob: null, missingSchema: false }) })
    await flush()
    expect(saveDiscereCloudState).toHaveBeenCalledTimes(1)
    expect(saveDiscereCloudState.mock.calls[0][0]).toBe(SUBJECT)
    expect(lastSavedUserData().history).toHaveLength(1)
    expect(lastSavedUserData().history[0].examKey).toBe('2026_ljeto')
    // synced_at se zapisuje jer je upload uspio
    expect(Number(localStorage.getItem(keys.syncedAtKey))).toBeGreaterThan(0)
    expect(localStorage.getItem(keys.cloudUidKey)).toBe('u1')
  })

  it('neuspjelo čitanje clouda (ok:false) ne sprema ništa i ne zapisuje synced_at', async () => {
    loadDiscereCloudState.mockResolvedValue({ ok: false, blob: null, missingSchema: false })
    localStorage.setItem(keys.userKey, JSON.stringify(localUserData()))

    const { rerender } = renderSync(null)
    rerender({ user: USER })
    await flush()
    // Debounce bi inače davno istekao; vrata ostaju zatvorena i nakon retryja.
    act(() => { vi.advanceTimersByTime(15000) })
    await flush()
    act(() => { vi.advanceTimersByTime(15000) })
    await flush()
    expect(saveDiscereCloudState).not.toHaveBeenCalled()
    expect(localStorage.getItem(keys.syncedAtKey)).toBeNull()
    expect(localStorage.getItem(keys.cloudUidKey)).toBeNull()
    // Prolazna greška → tihi retry
    expect(loadDiscereCloudState.mock.calls.length).toBeGreaterThan(1)
  })

  it('nemigrirana tablica (missingSchema) ostaje samo na localStorageu, bez retryja', async () => {
    loadDiscereCloudState.mockResolvedValue({ ok: false, blob: null, missingSchema: true })
    localStorage.setItem(keys.userKey, JSON.stringify(localUserData()))

    const { rerender } = renderSync(null)
    rerender({ user: USER })
    await flush()
    act(() => { vi.advanceTimersByTime(60000) })
    await flush()
    expect(saveDiscereCloudState).not.toHaveBeenCalled()
    expect(loadDiscereCloudState).toHaveBeenCalledTimes(1)
  })

  it('tuđe lokalno stanje (drugi cloud_uid) se ne šalje u cloud', async () => {
    loadDiscereCloudState.mockResolvedValue({ ok: true, blob: null, missingSchema: false })
    localStorage.setItem(keys.cloudUidKey, 'someone-else')
    localStorage.setItem(keys.userKey, JSON.stringify(localUserData('A_2025_jesen', 95)))
    localStorage.setItem(keys.bookmarksKey, JSON.stringify({
      'A_2025_jesen_q1': { qid: 'q1', examKey: 'A_2025_jesen', examLabel: 'x', q: 'y' },
    }))

    const { rerender, result } = renderSync(null)
    rerender({ user: USER })
    await flush()
    // Migracije nema: tuđa povijest ne smije završiti u cloudu novog računa
    expect(saveDiscereCloudState).not.toHaveBeenCalled()
    expect(result.current.userData.history).toEqual([])
    expect(localStorage.getItem(keys.bookmarksKey)).toBeNull()
    expect(localStorage.getItem(keys.syncedAtKey)).toBeNull()

    // Kad debounce nakon hidracije ipak spremi, sprema ČISTO stanje ovog računa
    await act(async () => { vi.advanceTimersByTime(1500) })
    await flush()
    expect(saveDiscereCloudState).toHaveBeenCalledTimes(1)
    expect(lastSavedUserData().history).toEqual([])
    expect(localStorage.getItem(keys.cloudUidKey)).toBe('u1')
  })

  it('cloud noviji od lokalnog → stanje se mergea, bez migracije', async () => {
    const cloud = localUserData('2023_ljeto', 60)
    loadDiscereCloudState.mockResolvedValue({
      ok: true,
      blob: buildCloudBlob(SUBJECT, { userData: cloud, bookmarks: {}, savedAt: 9_000_000 }),
      missingSchema: false,
    })
    localStorage.setItem(keys.cloudUidKey, 'u1')
    localStorage.setItem(keys.syncedAtKey, '1000')
    localStorage.setItem(keys.userKey, JSON.stringify(localUserData('2026_ljeto', 80)))

    const { rerender, result } = renderSync(null)
    rerender({ user: USER })
    await flush()
    const examKeys = result.current.userData.history.map(h => h.examKey).sort()
    expect(examKeys).toEqual(['2023_ljeto', '2026_ljeto'])
    expect(localStorage.getItem(keys.syncedAtKey)).toBe('9000000')
    // Hidracija sama ne uploada; upload ide tek kroz debounce
    expect(saveDiscereCloudState).not.toHaveBeenCalled()
  })

  it('dva predmeta ne dijele localStorage ključeve hidracije', async () => {
    loadDiscereCloudState.mockResolvedValue({ ok: true, blob: null, missingSchema: false })
    const fizKeys = storageKeys('fiz')
    localStorage.setItem(fizKeys.userKey, JSON.stringify(localUserData()))

    const { rerender } = renderSync(null)
    rerender({ user: USER }) // hook radi nad SUBJECT='bio'
    await flush()
    // Bio nema svoje povijesti → nema migracije tuđeg (fiz) stanja
    expect(saveDiscereCloudState).not.toHaveBeenCalled()
    expect(localStorage.getItem(keys.cloudUidKey)).toBe('u1')
    expect(localStorage.getItem(fizKeys.cloudUidKey)).toBeNull()
  })
})
