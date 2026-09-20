import { describe, it, expect } from 'vitest'
import audioMap from '../../lib/data/engleski-simulator/audio-map.json'
import osnovna from '../../lib/data/engleski-simulator/exams-osnovna.json'
import visa from '../../lib/data/engleski-simulator/exams-visa.json'
import examsIndex from '../../lib/data/engleski-simulator/exams-index.json'

// Poznat popis ispita bez audio zapisa u audio-map.json (vidi audio-map.json._missing).
// Kad build-audio-B.py (scripts/eng-audio/) ponovno objavi audio-map.json, ovaj popis
// treba ažurirati na stvaran sadržaj _missing — test namjerno ne prolazi tiho ako se
// popis promijeni bez svjesne odluke.
const KNOWN_MISSING = []

const FILENAME_RE = /^[a-z0-9_]+__(task\d+-[12]|extra\d+-[12]|intro)\.mp3$/

// Ispiti kojima je build-audio-C-extra.py (scripts/eng-audio/) dodao 'extra' zapise
// (sirovi zapisi iz NCVVO zipa koje naši podaci ne razlikuju kao zasebnu temu —
// vidi napomenu u audio-map.json[key].extra[].note).
const EXAMS_WITH_EXTRA = [
  '2014_jesen', '2015_jesen', '2016_jesen', '2016_ljeto',
  '2017_jesen', '2017_ljeto', '2024_jesen', 'vis_2024_drugi',
]

const listeningKeys = examsIndex.filter(e => e.hasListening).map(e => e.key)
const examsByKey = { ...osnovna, ...visa }

// Contiguous run-ovi jednakog 'topic' polja medju pitanjima section === 'listening',
// istim algoritmom kao build-audio-B.py (jedan run = jedan task).
function listeningTaskTopics(exam) {
  const topics = []
  let prev = null
  for (const q of exam.qs) {
    if (q.section !== 'listening') continue
    if (q.topic !== prev) topics.push(q.topic)
    prev = q.topic
  }
  return topics
}

describe('audio-map.json — pokrivenost ispita', () => {
  const missing = audioMap._missing || []

  it('_missing je prazan ILI identičan poznatom (svjesno prihvaćenom) popisu', () => {
    if (missing.length > 0) {
      // eslint-disable-next-line no-console
      console.warn('audio-map.json._missing nije prazan: ' + JSON.stringify(missing))
    }
    expect([...missing].sort()).toEqual([...KNOWN_MISSING].sort())
  })

  it('svaki ispit sa slušanjem koji nije u _missing ima zapis u audio-map.json', () => {
    const missingSet = new Set(missing)
    for (const key of listeningKeys) {
      if (missingSet.has(key)) continue
      expect(audioMap[key], key).toBeDefined()
      expect(audioMap[key].tasks, key).toBeDefined()
    }
  })

  it('svaki zapis u audio-map.json (osim _missing) odgovara stvarnom ispitu sa slušanjem', () => {
    const listeningSet = new Set(listeningKeys)
    for (const key of Object.keys(audioMap)) {
      if (key === '_missing') continue
      expect(listeningSet.has(key), key).toBe(true)
    }
  })
})

describe('audio-map.json — pokrivenost taskova po temi (topic)', () => {
  const missing = new Set(audioMap._missing || [])

  listeningKeys.filter(k => !missing.has(k)).forEach(key => {
    it(`${key}: svaka listening tema iz podataka ispita ima task (first/repeat null samo uz confidence 'low')`, () => {
      const exam = examsByKey[key]
      expect(exam, key).toBeDefined()
      const topics = listeningTaskTopics(exam)
      const entry = audioMap[key]

      topics.forEach((topic, i) => {
        const taskNum = String(i + 1)
        const task = entry.tasks[taskNum]
        expect(task, `${key} task ${taskNum} (${topic})`).toBeDefined()
        expect(task.topic, `${key} task ${taskNum}`).toBe(topic)
        // first/repeat smiju biti null samo kod confidence 'low' (stariji ispiti s
        // jednom kombiniranom snimkom ili fallback pozicijskim popunjavanjem);
        // 'high' i 'medium' uvijek moraju imati oboje popunjeno.
        if (!task.first || !task.repeat) {
          expect(task.confidence, `${key} task ${taskNum} (${topic}) bez first/repeat mora biti confidence 'low'`).toBe('low')
          expect(task.note, `${key} task ${taskNum} (${topic}) bez first/repeat mora imati objašnjenje u 'note'`).toBeTruthy()
        }
      })
    })
  })
})

// Sva imena datoteka jednog zapisa ispita (intro + tasks + extra), bez null-ova.
function entryNames(entry) {
  return [
    entry.intro,
    ...Object.values(entry.tasks).flatMap(t => [t.first, t.repeat]),
    ...(entry.extra || []).flatMap(x => [x.first, x.repeat]),
  ].filter(Boolean)
}

describe('audio-map.json — nazivi datoteka', () => {
  const allNames = []
  for (const [key, entry] of Object.entries(audioMap)) {
    if (key === '_missing') continue
    allNames.push(...entryNames(entry))
  }

  it('svi nazivi datoteka odgovaraju obrascu <examKey>__(task<N>-[12]|extra<M>-[12]|intro).mp3', () => {
    allNames.forEach(name => {
      expect(name, name).toMatch(FILENAME_RE)
    })
  })

  it('nazivi datoteka su jedinstveni medju ispitima (unutar ispita se zajednička snimka smije ponoviti)', () => {
    // Stari NCVVO format (2010–2013) ima jednu zajedničku snimku koja se
    // namjerno koristi za sve zadatke istog ispita — to nije kolizija.
    const owner = new Map()
    const dupes = []
    for (const [key, entry] of Object.entries(audioMap)) {
      if (key === '_missing') continue
      const names = new Set(entryNames(entry))
      names.forEach(name => {
        if (owner.has(name) && owner.get(name) !== key) dupes.push(name)
        owner.set(name, key)
      })
    }
    expect(dupes).toEqual([])
  })

  it('naziv datoteke počinje ključem ispita kojem pripada', () => {
    for (const [key, entry] of Object.entries(audioMap)) {
      if (key === '_missing') continue
      const names = entryNames(entry)
      names.forEach(name => expect(name.startsWith(key + '__'), `${key}: ${name}`).toBe(true))
    }
  })
})

describe('audio-map.json — "extra" zapisi (neiskorišteni sirovi zapisi iz zipa)', () => {
  it.each(EXAMS_WITH_EXTRA)('%s ima neprazno polje extra s jedinstvenim first zapisima', key => {
    const entry = audioMap[key]
    expect(entry, key).toBeDefined()
    expect(Array.isArray(entry.extra), key).toBe(true)
    expect(entry.extra.length, key).toBeGreaterThan(0)
    entry.extra.forEach(x => {
      expect(x.first, key).toMatch(FILENAME_RE)
      expect(x.note, key).toBeTruthy()
    })
    const firsts = entry.extra.map(x => x.first)
    expect(new Set(firsts).size, key).toBe(firsts.length)
  })
})
