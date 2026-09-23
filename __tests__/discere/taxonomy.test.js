import { describe, it, expect } from 'vitest'
import { buildTopicIndex, normalizeTopic, topicLabel, chapterSlugFor, topicCodes } from '@/lib/discere/taxonomy'

const taxonomy = {
  modules: [{ slug: 'genetika', title: 'Genetika', chapters: [{ slug: 'nasljedivanje', title: 'Nasljeđivanje', outcomes: [] }] }],
  topics: {
    genetika: { label: 'Genetika', chapterSlug: 'nasljedivanje', aliases: ['genetics', 'nasljeđivanje'] },
    evolucija: { label: 'Evolucija', chapterSlug: 'evolucija-vrsta' },
    ekologija: { label: 'Ekologija' }, // bez chapterSlug
  },
}

describe('buildTopicIndex', () => {
  it('indeksira kodove i aliase (case-insensitive)', () => {
    const index = buildTopicIndex(taxonomy)
    expect(index.byCode.get('genetika').label).toBe('Genetika')
    expect(index.byAlias.get('genetics')).toBe('genetika')
    expect(index.byAlias.get('genetika')).toBe('genetika')
  })

  it('podnosi prazan/nedostajući ulaz', () => {
    const index = buildTopicIndex(null)
    expect(index.byCode.size).toBe(0)
    expect(index.byAlias.size).toBe(0)
  })
})

describe('normalizeTopic', () => {
  const index = buildTopicIndex(taxonomy)

  it('poznat kod vraća sam sebe', () => {
    expect(normalizeTopic(index, 'genetika')).toBe('genetika')
  })

  it('alias se preslikava na kanonski kod, case-insensitive', () => {
    expect(normalizeTopic(index, 'GENETICS')).toBe('genetika')
    expect(normalizeTopic(index, 'Nasljeđivanje')).toBe('genetika')
  })

  it('nepoznat topic vraća null', () => {
    expect(normalizeTopic(index, 'nepostojeca-tema')).toBeNull()
    expect(normalizeTopic(index, '')).toBeNull()
    expect(normalizeTopic(index, null)).toBeNull()
  })
})

describe('topicLabel', () => {
  const index = buildTopicIndex(taxonomy)

  it('vraća oznaku za poznat kod', () => {
    expect(topicLabel(index, 'evolucija')).toBe('Evolucija')
  })

  it('nepoznat kod vraća sam kod kao fallback', () => {
    expect(topicLabel(index, 'nepoznato')).toBe('nepoznato')
  })
})

describe('chapterSlugFor', () => {
  const index = buildTopicIndex(taxonomy)

  it('vraća slug poglavlja kad postoji', () => {
    expect(chapterSlugFor(index, 'genetika')).toBe('nasljedivanje')
  })

  it('vraća null kad tema nema poglavlje ili ne postoji', () => {
    expect(chapterSlugFor(index, 'ekologija')).toBeNull()
    expect(chapterSlugFor(index, 'nepoznato')).toBeNull()
  })
})

describe('topicCodes', () => {
  it('vraća sve kodove tema', () => {
    const index = buildTopicIndex(taxonomy)
    expect(topicCodes(index).sort()).toEqual(['ekologija', 'evolucija', 'genetika'])
  })

  it('prazna taksonomija → prazan niz', () => {
    expect(topicCodes(buildTopicIndex(null))).toEqual([])
  })
})
