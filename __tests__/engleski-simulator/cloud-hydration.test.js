// @vitest-environment happy-dom
/**
 * cloud-hydration.test.js
 *
 * Pokriva hidraciju cloud stanja — dio koji je dosad bio testiran samo kroz
 * čiste funkcije (cloud-sync.test.js), nikad kao stvarni React tok.
 *
 * Testira se hook useEngCloudSync (izvučen iz EngleskiSimulator.js bez promjene
 * ponašanja) preko renderHooka. Cijela komponenta se ne renderira namjerno: ima
 * lazy ekrane u Suspenseu, fetch konteksta ispita i lijeno učitavanje ispita,
 * što bi test učinilo sporim i krhkim bez ičega dodatno pokrivenog.
 *
 * Mockani su samo async omotači cloudSynca (loadEngCloudState /
 * saveEngCloudState / saveEngSimResult) — čiste funkcije ostaju prave preko
 * vi.importActual, pa testiramo stvarni merge i stvarne blobove.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act, cleanup } from '@testing-library/react'
import { useState } from 'react'

vi.mock('@/lib/engleski-simulator/cloudSync', async () => {
  const actual = await vi.importActual('@/lib/engleski-simulator/cloudSync')
  return {
    ...actual,
    loadEngCloudState: vi.fn(),
    saveEngCloudState: vi.fn(),
    saveEngSimResult: vi.fn(),
  }
})

const {
  ENG_USER_KEY, ENG_BOOKMARKS_KEY, ENG_SYNCED_AT_KEY, ENG_CLOUD_UID_KEY,
  buildCloudBlob, parseCloudBlob, loadEngCloudState, saveEngCloudState,
} = await import('@/lib/engleski-simulator/cloudSync')
const { useEngCloudSync } = await import('@/lib/engleski-simulator/useEngCloudSync')
const { validateUserData } = await import('@/lib/engleski-simulator/scoring')

const USER = { id: 'u1' }

function localUserData(examKey = '2024_ljeto', pct = 80) {
  return {
    xp: 120, streak: 2, lastDate: '1. 1. 2026.', totalExams: 1,
    history: [{ examKey, pct, grade: 4, cor: 8, total: 10, date: '1. 1. 2026.', at: 1000 }],
    errorTracker: {}, bookmarks: [],
  }
}

/** Minimalni harness koji zrcali EngleskiSimulator: userData u stateu + hook. */
function useHarness(user) {
  const [userData, setUserData] = useState(() => {
    try { return validateUserData(JSON.parse(localStorage.getItem(ENG_USER_KEY) || 'null')) } catch { return validateUserData(null) }
  })
  const { bumpBookmarkRev } = useEngCloudSync({ user, userData, setUserData })
  return { userData, bumpBookmarkRev }
}

function renderSync(initialUser = null) {
  return renderHook(({ user }) => useHarness(user), { initialProps: { user: initialUser } })
}

/** Propusti microtaskove (await unutar hidracije) bez act-upozorenja. */
async function flush() {
  await act(async () => { await Promise.resolve(); await Promise.resolve() })
}

/** userData iz zadnjeg poziva saveEngCloudState. */
function lastSavedUserData() {
  const blob = saveEngCloudState.mock.calls[saveEngCloudState.mock.calls.length - 1][0]
  return parseCloudBlob(blob).userData
}

describe('useEngCloudSync — hidracija', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    localStorage.clear()
    loadEngCloudState.mockReset()
    saveEngCloudState.mockReset()
    saveEngCloudState.mockResolvedValue(true)
  })
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('neprijavljen korisnik ne radi nijedan cloud poziv', async () => {
    loadEngCloudState.mockResolvedValue({ ok: true, blob: null, missingSchema: false })
    localStorage.setItem(ENG_USER_KEY, JSON.stringify(localUserData()))
    renderSync(null)
    await flush()
    act(() => { vi.advanceTimersByTime(5000) })
    await flush()
    expect(loadEngCloudState).not.toHaveBeenCalled()
    expect(saveEngCloudState).not.toHaveBeenCalled()
  })

  it('ne sprema u cloud prije nego hidracija pročita cloud stanje', async () => {
    let resolveLoad
    loadEngCloudState.mockReturnValue(new Promise(res => { resolveLoad = res }))
    localStorage.setItem(ENG_USER_KEY, JSON.stringify(localUserData()))

    const { rerender } = renderSync(null)
    rerender({ user: USER })
    await flush()
    expect(loadEngCloudState).toHaveBeenCalledTimes(1)
    // Čitanje je još u letu → vrata spremanja moraju biti zatvorena, makar
    // debounce istekao (shouldCloudSave traži završenu hidraciju).
    act(() => { vi.advanceTimersByTime(10000) })
    await flush()
    expect(saveEngCloudState).not.toHaveBeenCalled()

    // Prazan cloud + lokalna povijest → migracija lokalnog stanja u cloud
    await act(async () => { resolveLoad({ ok: true, blob: null, missingSchema: false }) })
    await flush()
    expect(saveEngCloudState).toHaveBeenCalledTimes(1)
    expect(lastSavedUserData().history).toHaveLength(1)
    expect(lastSavedUserData().history[0].examKey).toBe('2024_ljeto')
    // eng_synced_at se zapisuje jer je upload uspio
    expect(Number(localStorage.getItem(ENG_SYNCED_AT_KEY))).toBeGreaterThan(0)
    expect(localStorage.getItem(ENG_CLOUD_UID_KEY)).toBe('u1')
  })

  it('neuspjelo čitanje clouda (ok:false) ne sprema ništa i ne zapisuje eng_synced_at', async () => {
    loadEngCloudState.mockResolvedValue({ ok: false, blob: null, missingSchema: false })
    localStorage.setItem(ENG_USER_KEY, JSON.stringify(localUserData()))

    const { rerender } = renderSync(null)
    rerender({ user: USER })
    await flush()
    // Debounce bi inače davno istekao; vrata ostaju zatvorena i nakon retryja.
    act(() => { vi.advanceTimersByTime(15000) })
    await flush()
    act(() => { vi.advanceTimersByTime(15000) })
    await flush()
    expect(saveEngCloudState).not.toHaveBeenCalled()
    expect(localStorage.getItem(ENG_SYNCED_AT_KEY)).toBeNull()
    expect(localStorage.getItem(ENG_CLOUD_UID_KEY)).toBeNull()
    // Prolazna greška → tihi retry
    expect(loadEngCloudState.mock.calls.length).toBeGreaterThan(1)
  })

  it('nemigrirana tablica (missingSchema) ostaje samo na localStorageu, bez retryja', async () => {
    loadEngCloudState.mockResolvedValue({ ok: false, blob: null, missingSchema: true })
    localStorage.setItem(ENG_USER_KEY, JSON.stringify(localUserData()))

    const { rerender } = renderSync(null)
    rerender({ user: USER })
    await flush()
    act(() => { vi.advanceTimersByTime(60000) })
    await flush()
    expect(saveEngCloudState).not.toHaveBeenCalled()
    expect(loadEngCloudState).toHaveBeenCalledTimes(1)
  })

  it('tuđe lokalno stanje (drugi eng_cloud_uid) se ne šalje u cloud', async () => {
    loadEngCloudState.mockResolvedValue({ ok: true, blob: null, missingSchema: false })
    localStorage.setItem(ENG_CLOUD_UID_KEY, 'someone-else')
    localStorage.setItem(ENG_USER_KEY, JSON.stringify(localUserData('vis_2015_jesen', 95)))
    localStorage.setItem(ENG_BOOKMARKS_KEY, JSON.stringify({
      'vis_2015_jesen_q1': { qid: 'q1', examKey: 'vis_2015_jesen', examLabel: 'x', q: 'y' },
    }))

    const { rerender, result } = renderSync(null)
    rerender({ user: USER })
    await flush()
    // Migracije nema: tuđa povijest ne smije završiti u cloudu novog računa
    expect(saveEngCloudState).not.toHaveBeenCalled()
    expect(result.current.userData.history).toEqual([])
    expect(localStorage.getItem(ENG_BOOKMARKS_KEY)).toBeNull()

    // Kad debounce nakon hidracije ipak spremi, sprema ČISTO stanje ovog računa
    await act(async () => { vi.advanceTimersByTime(1500) })
    await flush()
    expect(saveEngCloudState).toHaveBeenCalledTimes(1)
    expect(lastSavedUserData().history).toEqual([])
    expect(localStorage.getItem(ENG_CLOUD_UID_KEY)).toBe('u1')
  })

  it('cloud noviji od lokalnog → stanje se mergea, bez migracije', async () => {
    const cloud = localUserData('2023_ljeto', 60)
    loadEngCloudState.mockResolvedValue({
      ok: true,
      blob: buildCloudBlob({ userData: cloud, bookmarks: {}, savedAt: 9_000_000 }),
      missingSchema: false,
    })
    localStorage.setItem(ENG_CLOUD_UID_KEY, 'u1')
    localStorage.setItem(ENG_SYNCED_AT_KEY, '1000')
    localStorage.setItem(ENG_USER_KEY, JSON.stringify(localUserData('2024_ljeto', 80)))

    const { rerender, result } = renderSync(null)
    rerender({ user: USER })
    await flush()
    const keys = result.current.userData.history.map(h => h.examKey).sort()
    expect(keys).toEqual(['2023_ljeto', '2024_ljeto'])
    expect(localStorage.getItem(ENG_SYNCED_AT_KEY)).toBe('9000000')
    // Hidracija sama ne uploada; upload ide tek kroz debounce
    expect(saveEngCloudState).not.toHaveBeenCalled()
  })
})
