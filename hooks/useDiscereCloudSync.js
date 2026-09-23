'use client'
// hooks/useDiscereCloudSync.js
// Hidracija i debounce-spremanje napretka canonical simulatora u cloud — port
// lib/engleski-simulator/useEngCloudSync.js, parametriziran predmetom.

import { useState, useRef, useEffect, useCallback } from 'react'
import {
  storageKeys, validateUserData,
  buildCloudBlob, parseCloudBlob, shouldHydrateFromCloud, shouldCloudSave, mergeUserData, mergeBookmarks,
  resolveLocalOwnership, loadDiscereCloudState, saveDiscereCloudState,
} from '@/lib/discere/cloud-sync'

/**
 * @param {string} subjectId
 * @param {Object} args
 * @param {{id: string}|null} args.user - prijavljeni korisnik iz useAuth()
 * @param {Object|null} args.userData - lokalno stanje napretka
 * @param {Function} args.setUserData - setter stanja napretka
 * @returns {{bumpBookmarkRev: () => void}} okidač koji javlja promjenu bookmarka
 */
export function useDiscereCloudSync(subjectId, { user, userData, setUserData }) {
  const keys = storageKeys(subjectId)

  // Brojač promjena bookmarka — samo okidač za cloud debounce (bookmarki žive u localStorageu).
  const [bookmarkRev, setBookmarkRev] = useState(0)

  // ── Cross-device cloud sync (Supabase discere_sim_state, subject = subjectId) ──
  const _hydrated = useRef(false)
  const [hydrateRev, setHydrateRev] = useState(0)
  const _saveTimer = useRef(null)
  const _pendingSave = useRef(null)

  useEffect(() => {
    let cancelled = false
    let retryTimer = null
    _hydrated.current = false
    clearTimeout(_saveTimer.current)
    if (!user) return
    const hydrate = async () => {
      const { ok, blob, missingSchema } = await loadDiscereCloudState(subjectId)
      if (cancelled) return
      if (!ok) {
        if (missingSchema) return
        retryTimer = setTimeout(() => { void hydrate() }, 15000)
        return
      }
      const { userData: cloudUser, bookmarks: cloudBm, bookmarksDeleted: cloudDel, savedAt: cloudAt } = parseCloudBlob(subjectId, blob)
      let storedUid = null
      try { storedUid = localStorage.getItem(keys.cloudUidKey) } catch {}
      const ownership = resolveLocalOwnership(storedUid, user.id)
      let localAt = 0
      try { localAt = Number(localStorage.getItem(keys.syncedAtKey) || 0) } catch {}

      if (ownership === 'foreign') {
        try { localStorage.removeItem(keys.bookmarksKey) } catch {}
        try { localStorage.removeItem(keys.bookmarksDeletedKey) } catch {}
        try { localStorage.removeItem(keys.syncedAtKey) } catch {}
        if (cloudUser) {
          try { localStorage.setItem(keys.bookmarksKey, JSON.stringify(cloudBm)) } catch {}
          try { localStorage.setItem(keys.bookmarksDeletedKey, JSON.stringify(cloudDel)) } catch {}
          if (cloudAt > 0) { try { localStorage.setItem(keys.syncedAtKey, String(cloudAt)) } catch {} }
          setUserData(cloudUser)
        } else {
          setUserData(validateUserData(null))
        }
        setBookmarkRev(r => r + 1)
      } else if (cloudUser && (shouldHydrateFromCloud(cloudAt, localAt) || cloudAt === 0)) {
        let localBm = {}
        try { localBm = JSON.parse(localStorage.getItem(keys.bookmarksKey) || '{}') } catch {}
        let localDel = {}
        try { localDel = JSON.parse(localStorage.getItem(keys.bookmarksDeletedKey) || '{}') } catch {}
        const { bookmarks: mergedBm, deleted: mergedDel } = mergeBookmarks(localBm, localDel, cloudBm, cloudDel)
        try { localStorage.setItem(keys.bookmarksKey, JSON.stringify(mergedBm)) } catch {}
        try { localStorage.setItem(keys.bookmarksDeletedKey, JSON.stringify(mergedDel)) } catch {}
        if (cloudAt > 0) { try { localStorage.setItem(keys.syncedAtKey, String(cloudAt)) } catch {} }
        setUserData(prev => mergeUserData(prev, cloudUser))
        setBookmarkRev(r => r + 1)
      } else if (!cloudUser) {
        let localUser = null
        try { localUser = JSON.parse(localStorage.getItem(keys.userKey) || 'null') } catch {}
        if (localUser && Array.isArray(localUser.history) && localUser.history.length) {
          let localBm = {}
          try { localBm = JSON.parse(localStorage.getItem(keys.bookmarksKey) || '{}') } catch {}
          let localDel = {}
          try { localDel = JSON.parse(localStorage.getItem(keys.bookmarksDeletedKey) || '{}') } catch {}
          const at = Date.now()
          const saved = await saveDiscereCloudState(subjectId, buildCloudBlob(subjectId, { userData: localUser, bookmarks: localBm, bookmarksDeleted: localDel, savedAt: at }))
          if (cancelled) return
          if (saved) { try { localStorage.setItem(keys.syncedAtKey, String(at)) } catch {} }
        }
      }
      try { localStorage.setItem(keys.cloudUidKey, String(user.id)) } catch {}
      _hydrated.current = true
      setHydrateRev(r => r + 1)
    }
    void hydrate()
    return () => { cancelled = true; clearTimeout(retryTimer) }
    // setUserData je stabilan useState setter — namjerno nije u ovisnostima da
    // hidracija ostane vezana isključivo na promjenu korisnika/predmeta.
  }, [user, subjectId]) // eslint-disable-line react-hooks/exhaustive-deps

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
      try { bm = JSON.parse(localStorage.getItem(keys.bookmarksKey) || '{}') } catch {}
      let del = {}
      try { del = JSON.parse(localStorage.getItem(keys.bookmarksDeletedKey) || '{}') } catch {}
      const at = Date.now()
      const saved = await saveDiscereCloudState(subjectId, buildCloudBlob(subjectId, { userData: userData || {}, bookmarks: bm, bookmarksDeleted: del, savedAt: at }))
      if (saved) { try { localStorage.setItem(keys.syncedAtKey, String(at)) } catch {} }
    }
    clearTimeout(_saveTimer.current)
    _pendingSave.current = doSave
    _saveTimer.current = setTimeout(() => {
      _saveTimer.current = null
      _pendingSave.current = null
      void doSave()
    }, 1500)
    return () => {
      clearTimeout(_saveTimer.current)
      _saveTimer.current = null
      _pendingSave.current = null
    }
  }, [userData, bookmarkRev, user, hydrateRev, subjectId]) // eslint-disable-line react-hooks/exhaustive-deps

  const bumpBookmarkRev = useCallback(() => setBookmarkRev(r => r + 1), [])
  return { bumpBookmarkRev }
}
