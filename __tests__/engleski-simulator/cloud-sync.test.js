import { describe, it, expect } from 'vitest'
import {
  ENG_USER_KEY,
  ENG_BOOKMARKS_KEY,
  buildCloudBlob,
  parseCloudBlob,
  shouldHydrateFromCloud,
  shouldCloudSave,
  mergeUserData,
  toSimProgressPayload,
} from '../../lib/engleski-simulator/cloudSync.js'

const baseUser = {
  xp: 120,
  streak: 3,
  lastDate: '10. 9. 2026.',
  history: [{ examKey: '2024_ljeto', examLabel: '2024. — Ljeto', date: '10. 9. 2026.', pct: 80, grade: 4, cor: 8, total: 10 }],
  totalExams: 1,
  errorTracker: { '2024_ljeto_mc1': { q: 'Pitanje', topic: 'reading', examKey: '2024_ljeto', qid: 'mc1', count: 2 } },
  bookmarks: [],
}

const bm = { '2024_ljeto_mc1': { qid: 'mc1', examKey: '2024_ljeto', examLabel: '2024. — Ljeto', q: 'Pitanje' } }

// ─── buildCloudBlob / parseCloudBlob ──────────────────────────────────────────
describe('buildCloudBlob', () => {
  it('serijalizira userData i bookmarke pod očekivane ključeve', () => {
    const blob = buildCloudBlob({ userData: baseUser, bookmarks: bm, savedAt: 1000 })
    expect(typeof blob[ENG_USER_KEY]).toBe('string')
    expect(typeof blob[ENG_BOOKMARKS_KEY]).toBe('string')
    expect(blob._savedAt).toBe(1000)
    expect(JSON.parse(blob[ENG_USER_KEY]).xp).toBe(120)
  })

  it('bez savedAt koristi trenutno vrijeme', () => {
    const before = Date.now()
    const blob = buildCloudBlob({ userData: baseUser, bookmarks: {} })
    expect(blob._savedAt).toBeGreaterThanOrEqual(before)
  })

  it('podnosi prazan ulaz', () => {
    const blob = buildCloudBlob()
    expect(blob[ENG_USER_KEY]).toBe('{}')
    expect(blob[ENG_BOOKMARKS_KEY]).toBe('{}')
  })
})

describe('parseCloudBlob', () => {
  it('round-trip s buildCloudBlob', () => {
    const blob = buildCloudBlob({ userData: baseUser, bookmarks: bm, savedAt: 2500 })
    const out = parseCloudBlob(blob)
    expect(out.savedAt).toBe(2500)
    expect(out.userData.xp).toBe(120)
    expect(out.userData.history).toHaveLength(1)
    expect(out.bookmarks['2024_ljeto_mc1'].qid).toBe('mc1')
  })

  it('vraća null userData za prazan blob', () => {
    expect(parseCloudBlob({})).toEqual({ userData: null, bookmarks: {}, savedAt: 0 })
  })

  it('vraća null userData za null/nevalidan blob', () => {
    expect(parseCloudBlob(null).userData).toBeNull()
    expect(parseCloudBlob([]).userData).toBeNull()
    expect(parseCloudBlob('nesto').userData).toBeNull()
  })

  it('tolerira pokvaren JSON u oba ključa', () => {
    const out = parseCloudBlob({ [ENG_USER_KEY]: '{broken', [ENG_BOOKMARKS_KEY]: '][', _savedAt: 42 })
    expect(out.userData).toBeNull()
    expect(out.bookmarks).toEqual({})
    expect(out.savedAt).toBe(42)
  })

  it('ignorira nevalidan _savedAt', () => {
    expect(parseCloudBlob({ _savedAt: 'x' }).savedAt).toBe(0)
    expect(parseCloudBlob({ _savedAt: -5 }).savedAt).toBe(0)
  })

  it('propušta userData kroz validaciju (odbacuje smeće)', () => {
    const out = parseCloudBlob(buildCloudBlob({ userData: { xp: -7, history: 'nope' }, bookmarks: {}, savedAt: 1 }))
    expect(out.userData.xp).toBe(0)
    expect(out.userData.history).toEqual([])
  })
})

// ─── shouldHydrateFromCloud ───────────────────────────────────────────────────
describe('shouldHydrateFromCloud', () => {
  it('cloud noviji → true', () => expect(shouldHydrateFromCloud(200, 100)).toBe(true))
  it('isti timestamp → false', () => expect(shouldHydrateFromCloud(100, 100)).toBe(false))
  it('cloud stariji → false', () => expect(shouldHydrateFromCloud(99, 100)).toBe(false))
  it('nema lokalnog sync-a → true', () => expect(shouldHydrateFromCloud(5, 0)).toBe(true))
  it('nema cloud timestampa → false', () => {
    expect(shouldHydrateFromCloud(0, 0)).toBe(false)
    expect(shouldHydrateFromCloud(null, 0)).toBe(false)
    expect(shouldHydrateFromCloud('x', 0)).toBe(false)
  })
  it('nevalidan lokalni timestamp se tretira kao 0', () => {
    expect(shouldHydrateFromCloud(10, 'abc')).toBe(true)
  })
})

// ─── mergeUserData ────────────────────────────────────────────────────────────
describe('mergeUserData', () => {
  it('prazan cloud → zadržava lokalno stanje', () => {
    const out = mergeUserData(baseUser, null)
    expect(out.xp).toBe(120)
    expect(out.history).toHaveLength(1)
    expect(out.totalExams).toBe(1)
  })

  it('prazno lokalno → preuzima cloud stanje', () => {
    const out = mergeUserData(null, baseUser)
    expect(out.xp).toBe(120)
    expect(out.history).toHaveLength(1)
    expect(out.streak).toBe(3)
  })

  it('history unija bez duplikata po (examKey, date, pct)', () => {
    const cloud = {
      ...baseUser,
      history: [
        baseUser.history[0], // isti zapis → duplikat
        { examKey: 'vis_2024_prvi', examLabel: 'viša', date: '11. 9. 2026.', pct: 65, grade: 3, cor: 6, total: 10 },
      ],
    }
    const out = mergeUserData(baseUser, cloud)
    expect(out.history).toHaveLength(2)
    expect(out.history.map(h => h.examKey)).toEqual(['2024_ljeto', 'vis_2024_prvi'])
    expect(out.totalExams).toBe(2)
  })

  it('isti ispit drugog datuma nije duplikat', () => {
    const cloud = { ...baseUser, history: [{ ...baseUser.history[0], date: '12. 9. 2026.' }] }
    expect(mergeUserData(baseUser, cloud).history).toHaveLength(2)
  })

  it('xp je maksimum', () => {
    expect(mergeUserData({ ...baseUser, xp: 50 }, { ...baseUser, xp: 900 }).xp).toBe(900)
    expect(mergeUserData({ ...baseUser, xp: 900 }, { ...baseUser, xp: 50 }).xp).toBe(900)
  })

  it('streak dolazi od strane s novijim lastDate', () => {
    const local = { ...baseUser, streak: 2, lastDate: '10. 9. 2026.' }
    const cloud = { ...baseUser, streak: 9, lastDate: '12. 9. 2026.' }
    const out = mergeUserData(local, cloud)
    expect(out.streak).toBe(9)
    expect(out.lastDate).toBe('12. 9. 2026.')
    const out2 = mergeUserData(cloud, local)
    expect(out2.streak).toBe(9)
  })

  it('kod jednakog lastDate uzima veći streak', () => {
    const out = mergeUserData({ ...baseUser, streak: 4 }, { ...baseUser, streak: 7 })
    expect(out.streak).toBe(7)
  })

  it('errorTracker unija s max count', () => {
    const cloud = {
      ...baseUser,
      errorTracker: {
        '2024_ljeto_mc1': { q: 'Pitanje', topic: 'reading', examKey: '2024_ljeto', qid: 'mc1', count: 5 },
        'vis_2024_prvi_mc2': { q: 'Drugo', topic: 'grammar', examKey: 'vis_2024_prvi', qid: 'mc2', count: 1 },
      },
    }
    const out = mergeUserData(baseUser, cloud)
    expect(out.errorTracker['2024_ljeto_mc1'].count).toBe(5)
    expect(out.errorTracker['vis_2024_prvi_mc2'].count).toBe(1)
    const out2 = mergeUserData(cloud, baseUser)
    expect(out2.errorTracker['2024_ljeto_mc1'].count).toBe(5)
  })

  it('totalExams je duljina unije povijesti, ne zbroj brojača', () => {
    const local = { ...baseUser, totalExams: 99 }
    const out = mergeUserData(local, baseUser)
    expect(out.totalExams).toBe(1)
  })

  it('oba prazna → čisto početno stanje', () => {
    const out = mergeUserData(null, null)
    expect(out).toEqual({ xp: 0, streak: 0, lastDate: null, history: [], totalExams: 0, errorTracker: {}, bookmarks: [] })
  })
})

// ─── toSimProgressPayload ─────────────────────────────────────────────────────
const result = {
  examKey: '2024_ljeto',
  examLabel: '2024. — Ljeto',
  pct: 80,
  grade: 4,
  cor: 8,
  total: 10,
  answers: { mc1: 'a' },
  qTimes: { mc1: 12 },
  examMode: true,
}
const tb = { reading: { correct: 4, total: 5 } }

describe('toSimProgressPayload', () => {
  it('osnovna → razina B', () => {
    expect(toSimProgressPayload(result, tb, 'osnovna').razina).toBe('B')
  })

  it('visa → razina A', () => {
    expect(toSimProgressPayload({ ...result, examKey: 'vis_2015_jesen' }, tb, 'visa').razina).toBe('A')
  })

  it('mixed → razina null', () => {
    expect(toSimProgressPayload(result, tb, 'mixed').razina).toBeNull()
  })

  it('nepoznata/odsutna razina → null', () => {
    expect(toSimProgressPayload(result, tb, undefined).razina).toBeNull()
  })

  it('grade je string', () => {
    const p = toSimProgressPayload(result, tb, 'osnovna')
    expect(p.grade).toBe('4')
    expect(typeof p.grade).toBe('string')
  })

  it('prenosi ostatak rezultata i prazne errorTags', () => {
    const p = toSimProgressPayload(result, tb, 'osnovna')
    expect(p).toMatchObject({
      examKey: '2024_ljeto',
      examLabel: '2024. — Ljeto',
      pct: 80,
      cor: 8,
      total: 10,
      examMode: true,
      answers: { mc1: 'a' },
      qTimes: { mc1: 12 },
      topic_breakdown: tb,
      errorTags: [],
    })
  })

  it('prihvaća sve oblike pravih ispita', () => {
    expect(toSimProgressPayload({ ...result, examKey: '2024_ljeto' }, tb, 'osnovna')).not.toBeNull()
    expect(toSimProgressPayload({ ...result, examKey: 'vis_2015_jesen' }, tb, 'visa')).not.toBeNull()
    expect(toSimProgressPayload({ ...result, examKey: 'vis_2024_prvi' }, tb, 'visa')).not.toBeNull()
  })

  it('virtualne sesije vraćaju null', () => {
    const keys = ['virtual_1700000000000', 'filter_session_1700000000000', 'errors_session', 'bookmarks_session', 'exam_errors_session', 'daily_123abc']
    keys.forEach(k => expect(toSimProgressPayload({ ...result, examKey: k }, tb, 'osnovna')).toBeNull())
  })

  it('nevalidan rezultat vraća null', () => {
    expect(toSimProgressPayload(null, tb, 'osnovna')).toBeNull()
    expect(toSimProgressPayload({}, tb, 'osnovna')).toBeNull()
  })

  it('bez topic_breakdown koristi prazan objekt', () => {
    expect(toSimProgressPayload(result, null, 'osnovna').topic_breakdown).toEqual({})
  })
})

describe('shouldCloudSave (zaštita od spremanja prije hidracije)', () => {
  it('bez korisnika nikad ne sprema', () => {
    expect(shouldCloudSave(null, true)).toBe(false)
    expect(shouldCloudSave(undefined, true)).toBe(false)
    expect(shouldCloudSave(null, false)).toBe(false)
  })

  it('s korisnikom sprema samo kad je hidracija završena', () => {
    expect(shouldCloudSave({ id: 'u1' }, false)).toBe(false)
    expect(shouldCloudSave({ id: 'u1' }, true)).toBe(true)
  })

  it('tretira samo pravi true kao spremno', () => {
    expect(shouldCloudSave({ id: 'u1' }, undefined)).toBe(false)
    expect(shouldCloudSave({ id: 'u1' }, 1)).toBe(false)
  })

  it('race scenarij: useAuth vraća user tek naknadno', () => {
    // 1. render: user=null (useAuth starta s null) → hidracija ostaje zatvorena
    let user = null
    let hydrated = false
    expect(shouldCloudSave(user, hydrated)).toBe(false)
    // 2. user postane pravi → efekt hidracije sinkrono drži vrata zatvorena
    user = { id: 'u1' }
    hydrated = false
    // efekt spremanja se ponovno pokreće zbog promjene usera, ali ne smije spremati
    expect(shouldCloudSave(user, hydrated)).toBe(false)
    // 3. tek nakon što async load/merge završi
    hydrated = true
    expect(shouldCloudSave(user, hydrated)).toBe(true)
    // 4. odjava/promjena korisnika opet zatvara vrata
    user = { id: 'u2' }
    hydrated = false
    expect(shouldCloudSave(user, hydrated)).toBe(false)
  })
})
