import { describe, it, expect, vi } from 'vitest'
import {
  createExamsLoader,
  examKeysForRazina,
  getExamsIndex,
  razinaForKey,
  toExam,
  RAZINE,
} from '../../lib/engleski-simulator/examsLoader.js'

/**
 * Ispit više ne dolazi dinamičkim uvozom cijele razine, nego s
 * `GET /api/sim/eng/exam/<key>?mode=…` — po ispitu (ADR-001). Loader se i dalje
 * testira injektiranim dohvatom, pa ovi testovi ne diraju mrežu.
 */

// Kontrolirani promise za testiranje istovremenih poziva
function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => { resolve = res; reject = rej })
  return { promise, resolve, reject }
}

const makeExam = (key, mode) => ({ key, razina: razinaForKey(key), mode, qs: [] })

function fakeFetcher() {
  return vi.fn((key, mode) => Promise.resolve(makeExam(key, mode)))
}

describe('createExamsLoader — dohvat po ispitu', () => {
  it('učita jedan ispit i zabilježi ga u getLoadedSync', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader(fetchExam)

    expect(loader.isExamLoaded('2024_ljeto')).toBe(false)
    const exam = await loader.loadExamByKey('2024_ljeto', 'exam')
    expect(exam.key).toBe('2024_ljeto')
    expect(fetchExam).toHaveBeenCalledWith('2024_ljeto', 'exam')
    expect(loader.isExamLoaded('2024_ljeto')).toBe(true)
    expect(Object.keys(loader.getLoadedSync())).toEqual(['2024_ljeto'])
  })

  it('ulazak u ispit NE povlači ostale ispite razine', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader(fetchExam)

    await loader.loadExamByKey('vis_2024_prvi', 'exam')
    expect(fetchExam).toHaveBeenCalledTimes(1)
    expect(Object.keys(loader.getLoadedSync())).toHaveLength(1)
  })

  it('deduplicira istovremene pozive — dohvat se izvrši jednom', async () => {
    const { promise, resolve } = deferred()
    const fetchExam = vi.fn(() => promise)
    const loader = createExamsLoader(fetchExam)

    const p1 = loader.loadExamByKey('2024_ljeto', 'exam')
    const p2 = loader.loadExamByKey('2024_ljeto', 'exam')
    const p3 = loader.loadExamByKey('2024_ljeto', 'exam')
    expect(fetchExam).toHaveBeenCalledTimes(1)

    resolve(makeExam('2024_ljeto', 'exam'))
    const [m1, m2, m3] = await Promise.all([p1, p2, p3])
    expect(m1).toBe(m2)
    expect(m2).toBe(m3)
  })

  it('kešira ispit — drugi poziv u istom modu ne radi novi dohvat', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader(fetchExam)

    await loader.loadExamByKey('2024_ljeto', 'practice')
    await loader.loadExamByKey('2024_ljeto', 'practice')
    expect(fetchExam).toHaveBeenCalledTimes(1)
  })

  it('promjena moda traži novi dohvat — payload vježbanja ne smije u ispitni mod', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader(fetchExam)

    await loader.loadExamByKey('2024_ljeto', 'practice')
    expect(loader.isExamLoaded('2024_ljeto', 'exam')).toBe(false)

    const exam = await loader.loadExamByKey('2024_ljeto', 'exam')
    expect(exam.mode).toBe('exam')
    expect(fetchExam).toHaveBeenCalledTimes(2)
    expect(fetchExam).toHaveBeenLastCalledWith('2024_ljeto', 'exam')
    // Keš drži samo najnoviju inačicu tog ispita.
    expect(loader.getLoadedSync()['2024_ljeto'].mode).toBe('exam')
  })

  it('greška se propagira i dopušta retry', async () => {
    const err = new Error('mreža je pukla')
    const fetchExam = vi.fn()
      .mockRejectedValueOnce(err)
      .mockResolvedValueOnce(makeExam('2024_ljeto', 'exam'))
    const loader = createExamsLoader(fetchExam)

    await expect(loader.loadExamByKey('2024_ljeto', 'exam')).rejects.toThrow('mreža je pukla')
    expect(loader.isExamLoaded('2024_ljeto')).toBe(false)

    const exam = await loader.loadExamByKey('2024_ljeto', 'exam')
    expect(exam.key).toBe('2024_ljeto')
    expect(fetchExam).toHaveBeenCalledTimes(2)
  })

  it('svi istovremeni pozivi dobiju istu grešku', async () => {
    const err = new Error('boom')
    const { promise, reject } = deferred()
    const fetchExam = vi.fn(() => promise)
    const loader = createExamsLoader(fetchExam)

    const p1 = loader.loadExamByKey('vis_2024_prvi', 'exam').catch(e => e)
    const p2 = loader.loadExamByKey('vis_2024_prvi', 'exam').catch(e => e)
    reject(err)
    expect(await p1).toBe(err)
    expect(await p2).toBe(err)
    expect(fetchExam).toHaveBeenCalledTimes(1)
  })

  it('reset čisti keš', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader(fetchExam)
    await loader.loadExamByKey('2024_ljeto', 'exam')
    loader.reset()
    expect(loader.isExamLoaded('2024_ljeto')).toBe(false)
    expect(loader.getLoadedSync()).toEqual({})
  })
})

describe('createExamsLoader — skupni dohvat za ekrane nad cijelom bankom', () => {
  it('loadRazina dohvati sve ispite te razine i ništa više', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader(fetchExam)

    expect(loader.isRazinaLoaded('osnovna')).toBe(false)
    const map = await loader.loadRazina('osnovna')
    const osnovnaKeys = examKeysForRazina('osnovna')

    expect(osnovnaKeys).toHaveLength(35)
    expect(fetchExam).toHaveBeenCalledTimes(35)
    expect(Object.keys(map).sort()).toEqual([...osnovnaKeys].sort())
    expect(loader.isRazinaLoaded('osnovna')).toBe(true)
    expect(loader.isRazinaLoaded('visa')).toBe(false)
  })

  it('loadAllRazine spoji obje razine, a identitet mape je stabilan', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader(fetchExam)

    const all = await loader.loadAllRazine()
    expect(Object.keys(all)).toHaveLength(70)
    expect(fetchExam).toHaveBeenCalledTimes(70)
    expect(loader.getLoadedSync()).toBe(loader.getLoadedSync())
  })
})

describe('toExam — envelope rute → oblik ispita', () => {
  it('meta se raspakira na vrh, qs i texts ostaju', () => {
    const exam = toExam('2024_ljeto', {
      key: '2024_ljeto',
      meta: { year: 2024, label: 'Ljetni rok', razina: 'osnovna' },
      texts: { t1: 'Ulomak.' },
      qs: [{ id: 'r1', type: 'mc' }],
    })
    expect(exam.year).toBe(2024)
    expect(exam.label).toBe('Ljetni rok')
    expect(exam.razina).toBe('osnovna')
    expect(exam.qs).toHaveLength(1)
    expect(exam.texts).toEqual({ t1: 'Ulomak.' })
  })

  it('pokvaren odgovor daje prazan ispit umjesto iznimke', () => {
    expect(toExam('2024_ljeto', null).qs).toEqual([])
    expect(toExam('2024_ljeto', {}).key).toBe('2024_ljeto')
  })
})

describe('indeks i razinaForKey', () => {
  it('RAZINE pokriva obje razine', () => {
    expect(RAZINE).toEqual(['osnovna', 'visa'])
  })

  it('getExamsIndex vraća 70 zapisa bez pitanja', () => {
    const index = getExamsIndex()
    expect(index).toHaveLength(70)
    index.forEach(rec => {
      expect(rec.qs).toBeUndefined()
      expect(typeof rec.qCount).toBe('number')
    })
  })

  it('razinaForKey prepoznaje vis_ prefiks i indeks', () => {
    expect(razinaForKey('vis_2024_ljeto')).toBe('visa')
    expect(razinaForKey('2024_ljeto')).toBe('osnovna')
    // Nepoznat ključ (virtualna sesija) → osnovna kao siguran fallback
    expect(razinaForKey('virtual_12345')).toBe('osnovna')
  })

  it('examKeysForRazina dijeli 70 ispita na dvije razine bez preklapanja', () => {
    const osnovna = examKeysForRazina('osnovna')
    const visa = examKeysForRazina('visa')
    expect(osnovna).toHaveLength(35)
    expect(visa).toHaveLength(35)
    expect(osnovna.filter(k => visa.includes(k))).toEqual([])
  })
})
