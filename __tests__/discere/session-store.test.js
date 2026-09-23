// @vitest-environment happy-dom
import { describe, it, expect, beforeEach } from 'vitest'
import {
  storageKey, ACTIVE_SESSION_TTL_MS, buildSnapshot, writeActiveSession,
  readActiveSession, clearActiveSession, clearActiveSessionFor, isResumableExamKey,
  answeredCount, remainingSeconds, formatRemaining, sanitizeAnswers,
} from '@/lib/discere/session-store'

const SUBJECT = 'bio'
const KEY = storageKey(SUBJECT)

function snap() {
  const raw = localStorage.getItem(KEY)
  return raw ? JSON.parse(raw) : null
}

describe('session-store — zapis u localStorageu (predmet: bio)', () => {
  beforeEach(() => { try { localStorage.clear() } catch {} })

  it('storageKey je prefiksiran predmetom', () => {
    expect(storageKey('bio')).toBe('disc_bio_active_session')
    expect(storageKey('fiz')).toBe('disc_fiz_active_session')
  })

  it('sintetičke sesije se ne spremaju i ne diraju tuđi snapshot', () => {
    expect(isResumableExamKey('2026_ljeto')).toBe(true)
    for (const k of ['virtual_123', 'filter_session_9', 'daily_20321', 'adaptive_1', 'exam_errors_session', '', null]) {
      expect(isResumableExamKey(k)).toBe(false)
    }
    writeActiveSession(SUBJECT, buildSnapshot({ subject: SUBJECT, examKey: '2026_ljeto', mode: 'practice', answers: { q1: 'a' } }))
    const before = snap()
    expect(writeActiveSession(SUBJECT, buildSnapshot({ subject: SUBJECT, examKey: 'virtual_1', mode: 'practice' }))).toBe(false)
    expect(snap()).toEqual(before)
  })

  it('snapshot stariji od TTL-a se ignorira i briše', () => {
    const now = 1_700_000_000_000
    writeActiveSession(SUBJECT, buildSnapshot({ subject: SUBJECT, examKey: '2026_ljeto', mode: 'practice', answers: { q1: 'a' }, now }))
    expect(readActiveSession(SUBJECT, now + ACTIVE_SESSION_TTL_MS - 1000)).not.toBeNull()
    expect(readActiveSession(SUBJECT, now + ACTIVE_SESSION_TTL_MS + 1000)).toBeNull()
    expect(localStorage.getItem(KEY)).toBeNull()
  })

  it('pokvaren ili tuđi zapis se briše umjesto da se koristi', () => {
    localStorage.setItem(KEY, '{nije json')
    expect(readActiveSession(SUBJECT)).toBeNull()
    localStorage.setItem(KEY, JSON.stringify({ v: 99, examKey: '2026_ljeto', mode: 'practice', savedAt: Date.now() }))
    expect(readActiveSession(SUBJECT)).toBeNull()
    expect(localStorage.getItem(KEY)).toBeNull()
  })

  it('zapis nosi samo korisnikove odgovore — nikad tekst pitanja (ADR-001)', () => {
    const dirty = {
      q1: 'a', // short/mc
      q2: { g1: 'val1', g2: 'val2' }, // fill/matching/true_false
      q3: ['a', 'c', 'b'], // multi/ordering
      q4: { q: 'Tekst pitanja koji ne smije u zapis', answer: { correct: ['a'] } },
    }
    writeActiveSession(SUBJECT, buildSnapshot({ subject: SUBJECT, examKey: '2026_ljeto', mode: 'exam', answers: dirty, endsAt: Date.now() + 1000 }))
    const raw = localStorage.getItem(KEY)
    expect(raw).not.toContain('Tekst pitanja')
    expect(JSON.parse(raw).answers).toEqual({ q1: 'a', q2: { g1: 'val1', g2: 'val2' }, q3: ['a', 'c', 'b'] })
    expect(sanitizeAnswers({ a: () => {} })).toEqual({})
  })

  it('true_false mapa (boolean vrijednosti) preživi sanitizaciju', () => {
    const ans = { q1: { s1: true, s2: false } }
    expect(sanitizeAnswers(ans)).toEqual(ans)
  })

  it('predugačka stavka mape/niza otpada, ne skraćuje se', () => {
    expect(sanitizeAnswers({ q1: { g1: 'x'.repeat(500) } })).toEqual({})
    expect(sanitizeAnswers({ q1: ['x'.repeat(500), 'ok'] })).toEqual({ q1: ['ok'] })
  })

  it('brisanje je vezano uz ispit — sintetička sesija i drugi predmet ne diraju tuđi zapis', () => {
    writeActiveSession(SUBJECT, buildSnapshot({ subject: SUBJECT, examKey: '2026_ljeto', mode: 'exam', answers: { q1: 'a' } }))
    const before = snap()
    for (const k of ['daily_20321', 'virtual_1', 'filter_session_9', 'exam_errors_session', '2025_ljeto', null]) {
      expect(clearActiveSessionFor(SUBJECT, k)).toBe(false)
    }
    expect(snap()).toEqual(before)
    expect(clearActiveSessionFor(SUBJECT, '2026_ljeto')).toBe(true)
    expect(snap()).toBeNull()
  })

  it('endsAt, remainingSeconds i formatRemaining', () => {
    const end = Date.now() + 60_000
    expect(buildSnapshot({ subject: SUBJECT, examKey: 'k', mode: 'practice' }).endsAt).toBeNull()
    expect(buildSnapshot({ subject: SUBJECT, examKey: 'k', mode: 'exam', endsAt: end }).endsAt).toBe(end)
    const s = { endsAt: end }
    expect(remainingSeconds(s, end - 90_000)).toBe(90)
    expect(remainingSeconds(s, end + 5_000)).toBe(0)
    expect(remainingSeconds({ endsAt: null }, 0)).toBeNull()
    expect(formatRemaining(3607)).toBe('60:07')
    expect(answeredCount({ a: 'A', b: '', c: null, d: { x: '' }, e: { x: 'B' }, f: [] })).toBe(2)
  })

  it('dva predmeta imaju neovisne snapshot zapise', () => {
    writeActiveSession('bio', buildSnapshot({ subject: 'bio', examKey: '2026_ljeto', mode: 'exam', answers: { q1: 'a' } }))
    writeActiveSession('fiz', buildSnapshot({ subject: 'fiz', examKey: '2025_ljeto', mode: 'practice', answers: { q1: 'b' } }))
    expect(readActiveSession('bio').examKey).toBe('2026_ljeto')
    expect(readActiveSession('fiz').examKey).toBe('2025_ljeto')
    clearActiveSession('bio')
    expect(readActiveSession('bio')).toBeNull()
    expect(readActiveSession('fiz')).not.toBeNull()
  })
})
