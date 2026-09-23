import { describe, it, expect, vi } from 'vitest'
import { createExamsLoader, toCanonicalExam, mapWithLimit, ExamLoadError, BULK_MODE } from '@/lib/discere/exam-client'

function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => { resolve = res; reject = rej })
  return { promise, resolve, reject }
}

const makeExam = (key, mode) => ({ meta: { key }, questions: [], keys: mode === 'exam' ? 'none' : 'partial' })

function fakeFetcher() {
  return vi.fn((key, mode) => Promise.resolve(makeExam(key, mode)))
}

describe('createExamsLoader — dohvat po ispitu (bio)', () => {
  it('učita jedan ispit i zabilježi ga u getLoadedSync', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader('bio', fetchExam)

    expect(loader.isExamLoaded('2026_ljeto')).toBe(false)
    const exam = await loader.loadExamByKey('2026_ljeto', 'exam')
    expect(exam.meta.key).toBe('2026_ljeto')
    expect(fetchExam).toHaveBeenCalledWith('2026_ljeto', 'exam')
    expect(loader.isExamLoaded('2026_ljeto')).toBe(true)
    expect(Object.keys(loader.getLoadedSync())).toEqual(['2026_ljeto'])
  })

  it('deduplicira istovremene pozive — dohvat se izvrši jednom', async () => {
    const { promise, resolve } = deferred()
    const fetchExam = vi.fn(() => promise)
    const loader = createExamsLoader('bio', fetchExam)

    const p1 = loader.loadExamByKey('2026_ljeto', 'exam')
    const p2 = loader.loadExamByKey('2026_ljeto', 'exam')
    expect(fetchExam).toHaveBeenCalledTimes(1)

    resolve(makeExam('2026_ljeto', 'exam'))
    const [m1, m2] = await Promise.all([p1, p2])
    expect(m1).toBe(m2)
  })

  it('kešira ispit — drugi poziv u istom modu ne radi novi dohvat', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader('bio', fetchExam)

    await loader.loadExamByKey('2026_ljeto', 'practice')
    await loader.loadExamByKey('2026_ljeto', 'practice')
    expect(fetchExam).toHaveBeenCalledTimes(1)
  })

  it('promjena moda traži novi dohvat — payload vježbanja ne smije u ispitni mod', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader('bio', fetchExam)

    await loader.loadExamByKey('2026_ljeto', 'practice')
    expect(loader.isExamLoaded('2026_ljeto', 'exam')).toBe(false)

    const exam = await loader.loadExamByKey('2026_ljeto', 'exam')
    expect(exam.keys).toBe('none')
    expect(fetchExam).toHaveBeenCalledTimes(2)
    expect(fetchExam).toHaveBeenLastCalledWith('2026_ljeto', 'exam')
  })

  it('greška se propagira i dopušta retry', async () => {
    const err = new Error('mreža je pukla')
    const fetchExam = vi.fn()
      .mockRejectedValueOnce(err)
      .mockResolvedValueOnce(makeExam('2026_ljeto', 'exam'))
    const loader = createExamsLoader('bio', fetchExam)

    await expect(loader.loadExamByKey('2026_ljeto', 'exam')).rejects.toThrow('mreža je pukla')
    expect(loader.isExamLoaded('2026_ljeto')).toBe(false)

    const exam = await loader.loadExamByKey('2026_ljeto', 'exam')
    expect(exam.meta.key).toBe('2026_ljeto')
    expect(fetchExam).toHaveBeenCalledTimes(2)
  })

  it('svi istovremeni pozivi dobiju istu grešku', async () => {
    const err = new Error('boom')
    const { promise, reject } = deferred()
    const fetchExam = vi.fn(() => promise)
    const loader = createExamsLoader('bio', fetchExam)

    const p1 = loader.loadExamByKey('2026_ljeto', 'exam').catch(e => e)
    const p2 = loader.loadExamByKey('2026_ljeto', 'exam').catch(e => e)
    reject(err)
    expect(await p1).toBe(err)
    expect(await p2).toBe(err)
    expect(fetchExam).toHaveBeenCalledTimes(1)
  })

  it('reset čisti keš', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader('bio', fetchExam)
    await loader.loadExamByKey('2026_ljeto', 'exam')
    loader.reset()
    expect(loader.isExamLoaded('2026_ljeto')).toBe(false)
    expect(loader.getLoadedSync()).toEqual({})
  })
})

describe('createExamsLoader — loadMany (skupni dohvat)', () => {
  it('loadMany dohvati sve tražene ključeve', async () => {
    const fetchExam = fakeFetcher()
    const loader = createExamsLoader('bio', fetchExam)

    const keys = ['2024_ljeto', '2025_ljeto', '2026_ljeto']
    const map = await loader.loadMany(keys)
    expect(fetchExam).toHaveBeenCalledTimes(3)
    expect(fetchExam.mock.calls.every(([, mode]) => mode === BULK_MODE)).toBe(true)
    expect(Object.keys(map).sort()).toEqual([...keys].sort())
  })

  it('jedan pali dohvat ne ruši ostale (allSettled, ne Promise.all)', async () => {
    const fetchExam = vi.fn((key, mode) =>
      key === 'bad' ? Promise.reject(new Error('500')) : Promise.resolve(makeExam(key, mode)))
    const loader = createExamsLoader('bio', fetchExam)

    const map = await loader.loadMany(['a', 'bad', 'b'])
    expect(Object.keys(map)).toHaveLength(2)
    expect(map.bad).toBeUndefined()
  })

  it('kad ne stigne nijedan ključ, loadMany odbija', async () => {
    const err = new Error('sesija je istekla')
    const fetchExam = vi.fn(() => Promise.reject(err))
    const loader = createExamsLoader('bio', fetchExam)

    await expect(loader.loadMany(['a', 'b'])).rejects.toThrow('sesija je istekla')
  })
})

describe('toCanonicalExam — envelope rute → { meta, questions, keys }', () => {
  it('qs postaje questions, meta.key se popuni fallbackom', () => {
    const exam = toCanonicalExam('2026_ljeto', {
      key: '2026_ljeto',
      meta: { subject: 'bio', label: 'Biologija' },
      texts: {},
      qs: [{ id: 'q1', type: 'mc' }],
      keys: 'partial',
    })
    expect(exam.meta.key).toBe('2026_ljeto')
    expect(exam.meta.subject).toBe('bio')
    expect(exam.questions).toHaveLength(1)
    expect(exam.keys).toBe('partial')
    expect(exam.texts).toBeUndefined()
  })

  it('pokvaren odgovor daje prazan questions niz i keys none umjesto iznimke', () => {
    expect(toCanonicalExam('k', null).questions).toEqual([])
    expect(toCanonicalExam('k', null).keys).toBe('none')
    expect(toCanonicalExam('k', {}).meta.key).toBe('k')
  })
})

describe('mapWithLimit', () => {
  it('vraća greške umjesto da baci na prvom promašaju', async () => {
    const errors = await mapWithLimit([1, 2, 3], 2, async n => {
      if (n === 2) throw new Error('boom')
    })
    expect(errors).toHaveLength(1)
    expect(errors[0].message).toBe('boom')
  })
})

describe('ExamLoadError', () => {
  it('nosi status', () => {
    const err = new ExamLoadError('nope', 404)
    expect(err.status).toBe(404)
    expect(err.name).toBe('ExamLoadError')
  })
})
