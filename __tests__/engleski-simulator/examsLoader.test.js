import { describe, it, expect, vi } from 'vitest'
import { createExamsLoader, getExamsIndex, razinaForKey, RAZINE } from '../../lib/engleski-simulator/examsLoader.js'

// Kontrolirani promise za testiranje istovremenih poziva
function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => { resolve = res; reject = rej })
  return { promise, resolve, reject }
}

const OSNOVNA = { '2024_ljeto': { key: '2024_ljeto', razina: 'osnovna', qs: [] } }
const VISA = { vis_2024_ljeto: { key: 'vis_2024_ljeto', razina: 'visa', qs: [] } }

// Simulira dinamički import JSON-a (modul s default exportom)
function fakeImporter() {
  return vi.fn(razina => Promise.resolve({ default: razina === 'visa' ? VISA : OSNOVNA }))
}

describe('createExamsLoader', () => {
  it('učita razinu i vrati mapu ispita', async () => {
    const importer = fakeImporter()
    const loader = createExamsLoader(importer)

    expect(loader.isRazinaLoaded('osnovna')).toBe(false)
    const map = await loader.loadRazina('osnovna')
    expect(map).toEqual(OSNOVNA)
    expect(loader.isRazinaLoaded('osnovna')).toBe(true)
    expect(importer).toHaveBeenCalledWith('osnovna')
  })

  it('deduplicira istovremene pozive — importer se zove jednom', async () => {
    const { promise, resolve } = deferred()
    const importer = vi.fn(() => promise)
    const loader = createExamsLoader(importer)

    const p1 = loader.loadRazina('osnovna')
    const p2 = loader.loadRazina('osnovna')
    const p3 = loader.loadRazina('osnovna')
    expect(importer).toHaveBeenCalledTimes(1)

    resolve({ default: OSNOVNA })
    const [m1, m2, m3] = await Promise.all([p1, p2, p3])
    expect(m1).toBe(m2)
    expect(m2).toBe(m3)
    expect(m1).toEqual(OSNOVNA)
  })

  it('kešira razinu — drugi poziv ne radi novi import', async () => {
    const importer = fakeImporter()
    const loader = createExamsLoader(importer)

    await loader.loadRazina('visa')
    await loader.loadRazina('visa')
    expect(importer).toHaveBeenCalledTimes(1)
  })

  it('učita razine neovisno i spoji ih u getLoadedSync', async () => {
    const importer = fakeImporter()
    const loader = createExamsLoader(importer)

    expect(loader.getLoadedSync()).toEqual({})
    await loader.loadRazina('osnovna')
    expect(Object.keys(loader.getLoadedSync())).toEqual(['2024_ljeto'])

    const all = await loader.loadAllRazine()
    expect(Object.keys(all).sort()).toEqual(['2024_ljeto', 'vis_2024_ljeto'])
    expect(importer).toHaveBeenCalledTimes(2)
    // Identitet spojene mape je stabilan dok se ne učita nova razina
    expect(loader.getLoadedSync()).toBe(loader.getLoadedSync())
  })

  it('loadExamByKey izvodi razinu iz ključa', async () => {
    const importer = fakeImporter()
    const loader = createExamsLoader(importer)

    const visaExam = await loader.loadExamByKey('vis_2024_ljeto')
    expect(visaExam.razina).toBe('visa')
    expect(importer).toHaveBeenCalledWith('visa')
    expect(importer).toHaveBeenCalledTimes(1)

    const osnExam = await loader.loadExamByKey('2024_ljeto')
    expect(osnExam.razina).toBe('osnovna')
    expect(importer).toHaveBeenCalledWith('osnovna')
  })

  it('greška se propagira i dopušta retry', async () => {
    const err = new Error('chunk load failed')
    const importer = vi.fn()
      .mockRejectedValueOnce(err)
      .mockResolvedValueOnce({ default: OSNOVNA })
    const loader = createExamsLoader(importer)

    await expect(loader.loadRazina('osnovna')).rejects.toThrow('chunk load failed')
    expect(loader.isRazinaLoaded('osnovna')).toBe(false)

    const map = await loader.loadRazina('osnovna')
    expect(map).toEqual(OSNOVNA)
    expect(importer).toHaveBeenCalledTimes(2)
  })

  it('svi istovremeni pozivi dobiju istu grešku', async () => {
    const err = new Error('boom')
    const { promise, reject } = deferred()
    const importer = vi.fn(() => promise)
    const loader = createExamsLoader(importer)

    const p1 = loader.loadRazina('visa').catch(e => e)
    const p2 = loader.loadRazina('visa').catch(e => e)
    reject(err)
    expect(await p1).toBe(err)
    expect(await p2).toBe(err)
    expect(importer).toHaveBeenCalledTimes(1)
  })

  it('reset čisti keš', async () => {
    const importer = fakeImporter()
    const loader = createExamsLoader(importer)
    await loader.loadRazina('osnovna')
    loader.reset()
    expect(loader.isRazinaLoaded('osnovna')).toBe(false)
    expect(loader.getLoadedSync()).toEqual({})
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
})
