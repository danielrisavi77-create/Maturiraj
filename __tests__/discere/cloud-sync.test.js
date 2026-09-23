import { describe, it, expect } from 'vitest'
import {
  storageKeys,
  buildCloudBlob,
  parseCloudBlob,
  shouldHydrateFromCloud,
  shouldCloudSave,
  mergeUserData,
  mergeBookmarks,
  resolveLocalOwnership,
  isRealExamKey,
  validateUserData,
  validateBookmarks,
} from '@/lib/discere/cloud-sync'

const SUBJECT = 'bio'
const keys = storageKeys(SUBJECT)

const baseUser = {
  xp: 120,
  streak: 3,
  lastDate: '10. 9. 2026.',
  history: [{ examKey: '2026_ljeto', examLabel: '2026. — Ljeto', date: '10. 9. 2026.', pct: 80, grade: 4, cor: 8, total: 10 }],
  totalExams: 1,
  errorTracker: { '2026_ljeto_q1': { q: 'Pitanje', topic: 'genetika', examKey: '2026_ljeto', qid: 'q1', count: 2 } },
  bookmarks: [],
}

const bm = { '2026_ljeto_q1': { qid: 'q1', examKey: '2026_ljeto', examLabel: '2026. — Ljeto', q: 'Pitanje' } }

describe('storageKeys', () => {
  it('prefiksira sve ključeve predmetom', () => {
    expect(keys).toEqual({
      userKey: 'disc_bio_user',
      bookmarksKey: 'disc_bio_bookmarks',
      bookmarksDeletedKey: 'disc_bio_bookmarks_deleted',
      syncedAtKey: 'disc_bio_synced_at',
      cloudUidKey: 'disc_bio_cloud_uid',
    })
  })
})

describe('buildCloudBlob / parseCloudBlob', () => {
  it('serijalizira userData i bookmarke pod ključeve predmeta', () => {
    const blob = buildCloudBlob(SUBJECT, { userData: baseUser, bookmarks: bm, bookmarksDeleted: { k1: 999 }, savedAt: 1000 })
    expect(typeof blob[keys.userKey]).toBe('string')
    expect(blob._savedAt).toBe(1000)
    expect(JSON.parse(blob[keys.userKey]).xp).toBe(120)
    expect(JSON.parse(blob[keys.bookmarksDeletedKey])).toEqual({ k1: 999 })
  })

  it('podnosi prazan ulaz', () => {
    const blob = buildCloudBlob(SUBJECT)
    expect(blob[keys.userKey]).toBe('{}')
  })

  it('round-trip s buildCloudBlob', () => {
    const blob = buildCloudBlob(SUBJECT, { userData: baseUser, bookmarks: bm, savedAt: 2500 })
    const out = parseCloudBlob(SUBJECT, blob)
    expect(out.savedAt).toBe(2500)
    expect(out.userData.xp).toBe(120)
    expect(out.bookmarks['2026_ljeto_q1'].qid).toBe('q1')
  })

  it('vraća null userData za prazan/nevalidan blob', () => {
    expect(parseCloudBlob(SUBJECT, {})).toEqual({ userData: null, bookmarks: {}, bookmarksDeleted: {}, savedAt: 0 })
    expect(parseCloudBlob(SUBJECT, null).userData).toBeNull()
  })

  it('tolerira pokvaren JSON', () => {
    const out = parseCloudBlob(SUBJECT, { [keys.userKey]: '{broken', _savedAt: 42 })
    expect(out.userData).toBeNull()
    expect(out.savedAt).toBe(42)
  })

  it('dva predmeta ne dijele ključeve', () => {
    const blobBio = buildCloudBlob('bio', { userData: baseUser, savedAt: 1 })
    const blobFiz = buildCloudBlob('fiz', { userData: baseUser, savedAt: 1 })
    expect(Object.keys(blobBio)).not.toEqual(Object.keys(blobFiz))
    expect(parseCloudBlob('fiz', blobBio).userData).toBeNull()
  })
})

describe('shouldHydrateFromCloud', () => {
  it('cloud noviji → true, isti/stariji → false', () => {
    expect(shouldHydrateFromCloud(200, 100)).toBe(true)
    expect(shouldHydrateFromCloud(100, 100)).toBe(false)
    expect(shouldHydrateFromCloud(99, 100)).toBe(false)
  })
  it('nema cloud timestampa → false', () => {
    expect(shouldHydrateFromCloud(0, 0)).toBe(false)
    expect(shouldHydrateFromCloud(null, 0)).toBe(false)
  })
})

describe('mergeUserData', () => {
  it('prazan cloud → zadržava lokalno stanje', () => {
    const out = mergeUserData(baseUser, null)
    expect(out.xp).toBe(120)
    expect(out.history).toHaveLength(1)
  })

  it('history unija bez duplikata po (examKey, date, pct)', () => {
    const cloud = {
      ...baseUser,
      history: [baseUser.history[0], { examKey: 'x_2025_ljeto', examLabel: 'fiz', date: '11. 9. 2026.', pct: 65, grade: 3, cor: 6, total: 10 }],
    }
    const out = mergeUserData(baseUser, cloud)
    expect(out.history).toHaveLength(2)
    expect(out.totalExams).toBe(2)
  })

  it('xp je maksimum', () => {
    expect(mergeUserData({ ...baseUser, xp: 50 }, { ...baseUser, xp: 900 }).xp).toBe(900)
  })

  it('errorTracker unija s max count', () => {
    const cloud = { ...baseUser, errorTracker: { '2026_ljeto_q1': { ...baseUser.errorTracker['2026_ljeto_q1'], count: 5 } } }
    const out = mergeUserData(baseUser, cloud)
    expect(out.errorTracker['2026_ljeto_q1'].count).toBe(5)
  })

  it('oba prazna → čisto početno stanje', () => {
    expect(mergeUserData(null, null)).toEqual({ xp: 0, streak: 0, lastDate: null, history: [], totalExams: 0, errorTracker: {}, bookmarks: [] })
  })
})

describe('shouldCloudSave (zaštita od spremanja prije hidracije)', () => {
  it('bez korisnika nikad ne sprema', () => {
    expect(shouldCloudSave(null, true)).toBe(false)
  })
  it('s korisnikom sprema samo kad je hidracija završena', () => {
    expect(shouldCloudSave({ id: 'u1' }, false)).toBe(false)
    expect(shouldCloudSave({ id: 'u1' }, true)).toBe(true)
  })
  it('tretira samo pravi true kao spremno', () => {
    expect(shouldCloudSave({ id: 'u1' }, 1)).toBe(false)
  })
})

describe('resolveLocalOwnership', () => {
  it('bez zapisanog uid-a → unclaimed', () => {
    expect(resolveLocalOwnership(null, 'u1')).toBe('unclaimed')
  })
  it('isti uid → same, drugi uid → foreign', () => {
    expect(resolveLocalOwnership('u1', 'u1')).toBe('same')
    expect(resolveLocalOwnership('u1', 'u2')).toBe('foreign')
  })
  it('zapisan uid a nepoznat korisnik → foreign', () => {
    expect(resolveLocalOwnership('u1', null)).toBe('foreign')
  })
})

describe('mergeBookmarks (tombstone brisanja)', () => {
  const DAY = 24 * 60 * 60 * 1000
  const now = () => Date.now()

  it('dodano lokalno preživi merge', () => {
    const local = { k1: { qid: 'q1', examKey: 'e', addedAt: now() - 1000 } }
    const out = mergeBookmarks(local, {}, {}, {})
    expect(out.bookmarks).toEqual(local)
  })

  it('obrisano u cloudu (tombstone noviji od addedAt) briše i lokalnu kopiju', () => {
    const local = { k1: { qid: 'q1', examKey: 'e', addedAt: now() - 2000 } }
    const cloudDel = { k1: now() - 1000 }
    const out = mergeBookmarks(local, {}, {}, cloudDel)
    expect(out.bookmarks).toEqual({})
  })

  it('tombstone stariji od 90 dana se čisti', () => {
    const out = mergeBookmarks({}, { k1: now() - 91 * DAY }, {}, {})
    expect(out.deleted).toEqual({})
  })

  it('isti ključ u oba izvora: pobjeđuje noviji addedAt', () => {
    const local = { k1: { qid: 'q1', examKey: 'e', addedAt: now() - 5000, q: 'stari' } }
    const cloud = { k1: { qid: 'q1', examKey: 'e', addedAt: now() - 1000, q: 'noviji' } }
    const out = mergeBookmarks(local, {}, cloud, {})
    expect(out.bookmarks.k1.q).toBe('noviji')
  })
})

describe('isRealExamKey', () => {
  it('pravi ispiti (godina na početku, uz opcionalni prefiks razine)', () => {
    expect(isRealExamKey('2026_ljeto')).toBe(true)
    expect(isRealExamKey('A_2026_ljeto')).toBe(true)
  })
  it('virtualne sesije i smeće', () => {
    const keys2 = ['virtual_1700000000000', 'filter_session_1', 'daily_123', '', null, undefined, 42]
    keys2.forEach(k => expect(isRealExamKey(k)).toBe(false))
  })
})

describe('validateUserData / validateBookmarks', () => {
  it('odbacuje smeće i vraća čisti default', () => {
    expect(validateUserData(null)).toEqual({ xp: 0, streak: 0, lastDate: null, history: [], totalExams: 0, errorTracker: {}, bookmarks: [] })
  })
  it('propušta valjan errorTracker unos', () => {
    const out = validateUserData({ errorTracker: { k: { examKey: 'e', qid: 'q1', count: 3 } } })
    expect(out.errorTracker.k.count).toBe(3)
  })
  it('bookmark bez examKey se odbacuje', () => {
    expect(validateBookmarks({ k: { qid: 'q1' } })).toEqual({})
  })
})

describe('mergeUserData — limiti (validateUserData na kraju)', () => {
  it('errorTracker je ograničen na 2000 unosa', () => {
    const mk = (n, tag) => Object.fromEntries(Array.from({ length: n }, (_, i) => [
      tag + i, { q: 'Pitanje', topic: 't', examKey: '2026_ljeto', qid: 'q' + i, count: 1 },
    ]))
    const out = mergeUserData({ ...baseUser, errorTracker: mk(1500, 'a') }, { ...baseUser, errorTracker: mk(1500, 'b') })
    expect(Object.keys(out.errorTracker)).toHaveLength(2000)
  })
})
