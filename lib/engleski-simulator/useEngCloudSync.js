'use client'
// lib/engleski-simulator/useEngCloudSync.js
// Hidracija i debounce-spremanje napretka engleskog simulatora u cloud.
//
// Izvučeno iz components/engleski-simulator/EngleskiSimulator.js bez promjene
// ponašanja — komponenta je prevelika da se u testu renderira (lazy ekrani,
// Suspense, fetch konteksta), a ovo je njezin najrizičniji dio.

import { useState, useRef, useEffect, useCallback } from 'react'
import { validateUserData } from './scoring'
import {
  ENG_USER_KEY, ENG_BOOKMARKS_KEY, ENG_SYNCED_AT_KEY, ENG_CLOUD_UID_KEY,
  buildCloudBlob, parseCloudBlob, shouldHydrateFromCloud, shouldCloudSave, mergeUserData,
  resolveLocalOwnership, loadEngCloudState, saveEngCloudState,
} from './cloudSync'

/**
 * @param {Object} args
 * @param {{id: string}|null} args.user - prijavljeni korisnik iz useAuth()
 * @param {Object|null} args.userData - lokalno stanje napretka
 * @param {Function} args.setUserData - setter stanja napretka
 * @returns {{bumpBookmarkRev: () => void}} okidač koji javlja promjenu bookmarka
 */
export function useEngCloudSync({ user, userData, setUserData }) {
  // Brojač promjena bookmarka — samo okidač za cloud debounce (bookmarki žive u localStorageu).
  const [bookmarkRev, setBookmarkRev] = useState(0)

  // ── Cross-device cloud sync (Supabase discere_sim_state, subject 'eng') ──
  // Na mountu s prijavljenim korisnikom: hidriraj ako je cloud noviji, a ako je
  // cloud prazan a lokalno ima povijest — migriraj lokalno stanje u cloud.
  // Neprijavljeni korisnik ne radi nijedan Supabase poziv.
  // _hydrated je ref jer se mora zatvoriti sinkrono (useAuth() prvo vrati null,
  // pa user tek naknadno postane pravi), a hydrateRev je samo okidač koji efekt
  // spremanja ponovno pokreće kad hidracija završi.
  const _hydrated = useRef(false)
  const [hydrateRev, setHydrateRev] = useState(0)
  const _saveTimer = useRef(null)
  // Zadnje zakazano spremanje — flushamo ga pri unmountu i na 'pagehide'.
  const _pendingSave = useRef(null)

  useEffect(() => {
    let cancelled = false
    let retryTimer = null
    // Svaka promjena korisnika (npr. null → prijavljen) zatvara vrata spremanju
    // i otkazuje već zakazani upload dok se cloud stanje ne pročita i spoji.
    _hydrated.current = false
    clearTimeout(_saveTimer.current)
    if (!user) return
    const hydrate = async () => {
      const { ok, blob, missingSchema } = await loadEngCloudState()
      if (cancelled) return
      if (!ok) {
        // Tablica još nije migrirana → ponašaj se kao neprijavljen (samo
        // localStorage), bez retryja. Inače je greška prolazna: ne migriraj i ne
        // otvaraj spremanje (lokalno bi pregazilo cloud), nego pokušaj opet.
        if (missingSchema) return
        retryTimer = setTimeout(() => { void hydrate() }, 15000)
        return
      }
      const { userData: cloudUser, bookmarks: cloudBm, savedAt: cloudAt } = parseCloudBlob(blob)
      let storedUid = null
      try { storedUid = localStorage.getItem(ENG_CLOUD_UID_KEY) } catch {}
      const ownership = resolveLocalOwnership(storedUid, user.id)
      let localAt = 0
      try { localAt = Number(localStorage.getItem(ENG_SYNCED_AT_KEY) || 0) } catch {}

      if (ownership === 'foreign') {
        // Lokalno stanje pripada drugom računu (prebacivanje računa u istom
        // tabu) — ne migriraj ga i ne mergeaj; kreni isključivo iz clouda.
        try { localStorage.removeItem(ENG_BOOKMARKS_KEY) } catch {}
        try { localStorage.removeItem(ENG_SYNCED_AT_KEY) } catch {}
        if (cloudUser) {
          try { localStorage.setItem(ENG_BOOKMARKS_KEY, JSON.stringify(cloudBm)) } catch {}
          if (cloudAt > 0) { try { localStorage.setItem(ENG_SYNCED_AT_KEY, String(cloudAt)) } catch {} }
          setUserData(cloudUser)
        } else {
          setUserData(validateUserData(null))
        }
        setBookmarkRev(r => r + 1)
      } else if (cloudUser && (shouldHydrateFromCloud(cloudAt, localAt) || cloudAt === 0)) {
        // cloudAt === 0 (cloud stanje bez valjanog _savedAt) tretiramo kao
        // novije da ga lokalno stanje ne pregazi.
        let localBm = {}
        try { localBm = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_KEY) || '{}') } catch {}
        try { localStorage.setItem(ENG_BOOKMARKS_KEY, JSON.stringify({ ...localBm, ...cloudBm })) } catch {}
        if (cloudAt > 0) { try { localStorage.setItem(ENG_SYNCED_AT_KEY, String(cloudAt)) } catch {} }
        setUserData(prev => mergeUserData(prev, cloudUser))
        setBookmarkRev(r => r + 1)
      } else if (!cloudUser) {
        // Prva prijava: pošalji postojeće lokalno stanje u cloud.
        let localUser = null
        try { localUser = JSON.parse(localStorage.getItem(ENG_USER_KEY) || 'null') } catch {}
        if (localUser && Array.isArray(localUser.history) && localUser.history.length) {
          let localBm = {}
          try { localBm = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_KEY) || '{}') } catch {}
          const at = Date.now()
          const saved = await saveEngCloudState(buildCloudBlob({ userData: localUser, bookmarks: localBm, savedAt: at }))
          if (cancelled) return
          // eng_synced_at tek nakon uspjelog uploada — inače bi neuspjeli upload
          // izgledao kao sinkronizirano stanje.
          if (saved) { try { localStorage.setItem(ENG_SYNCED_AT_KEY, String(at)) } catch {} }
        }
      }
      // Lokalno stanje je od sada vezano na ovog korisnika.
      try { localStorage.setItem(ENG_CLOUD_UID_KEY, String(user.id)) } catch {}
      _hydrated.current = true
      setHydrateRev(r => r + 1)
    }
    void hydrate()
    return () => { cancelled = true; clearTimeout(retryTimer) }
    // setUserData je stabilan useState setter — namjerno nije u ovisnostima da
    // hidracija ostane vezana isključivo na promjenu korisnika.
  }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

  // Flush zakazanog spremanja: pri unmountu (cleanup efekta s praznim
  // ovisnostima ide SAMO na unmountu, pa debounce ostaje netaknut) i na
  // 'pagehide'. Deklarirano PRIJE efekta spremanja da na unmountu ovaj cleanup
  // ide prvi — dok je _saveTimer još postavljen.
  useEffect(() => {
    const flush = () => {
      if (!_saveTimer.current) return
      clearTimeout(_saveTimer.current)
      _saveTimer.current = null
      const pending = _pendingSave.current
      _pendingSave.current = null
      if (pending) void pending()
    }
    window.addEventListener('pagehide', flush)
    return () => {
      window.removeEventListener('pagehide', flush)
      flush()
    }
  }, [])

  // Debounce-spremanje cijelog stanja (userData + bookmarki) u cloud.
  useEffect(() => {
    void hydrateRev // ovisnost-okidač: efekt se ponovno vrti nakon hidracije
    if (!shouldCloudSave(user, _hydrated.current)) return
    const doSave = async () => {
      let bm = {}
      try { bm = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_KEY) || '{}') } catch {}
      const at = Date.now()
      const saved = await saveEngCloudState(buildCloudBlob({ userData: userData || {}, bookmarks: bm, savedAt: at }))
      // eng_synced_at samo uz uspjeh; pri neuspjehu ostaje stara vrijednost pa
      // sljedeća hidracija još uvijek vidi cloud kao noviji.
      if (saved) { try { localStorage.setItem(ENG_SYNCED_AT_KEY, String(at)) } catch {} }
    }
    clearTimeout(_saveTimer.current)
    _pendingSave.current = doSave
    _saveTimer.current = setTimeout(() => {
      _saveTimer.current = null
      _pendingSave.current = null
      void doSave()
    }, 1500)
    // Cleanup pri promjeni ovisnosti samo otkazuje debounce (flush ide kroz
    // efekt iznad, čiji cleanup na unmountu ide prvi — timer je tada još živ).
    return () => {
      clearTimeout(_saveTimer.current)
      _saveTimer.current = null
      _pendingSave.current = null
    }
  }, [userData, bookmarkRev, user, hydrateRev])

  const bumpBookmarkRev = useCallback(() => setBookmarkRev(r => r + 1), [])
  return { bumpBookmarkRev }
}
