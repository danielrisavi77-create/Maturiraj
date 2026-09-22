// @vitest-environment happy-dom
/**
 * audio-fallback.test.js
 *
 * Nalaz 3.4 + odluka vlasnika o prometu:
 *  1) AudioPlayer je dobivao examKey sintetičke sesije ('virtual_…',
 *     'filter_session_…', 'exam_errors_session'), kojih nema u audio-map.json →
 *     pitanje slušanja bez playera i bez poruke. Popravak: examKey={q._examKey || exam.key}.
 *  2) Kad zapisa u mapi nema, za pitanje slušanja mora ostati tekstualni fallback
 *     s jasnom oznakom (ne tiho ništa).
 *  3) <audio> ostaje na preload='none' (bez prometa prije klika na Play), a
 *     dostupnost se provjerava jednim laganim HEAD zahtjevom pri montiranju
 *     playera: ne-OK / mrežna greška na istom podrijetlu → odmah tekstualni
 *     fallback; 405 (nema HEAD-a) i cross-origin bez CORS-a → tretiraj kao
 *     dostupno, onError na <audio> ostaje druga linija obrane.
 */
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { createElement as e } from 'react'
import { AudioPlayer, _resetAudioAvailabilityCache } from '@/components/engleski-simulator/components/SimSharedUI'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const SIM_SRC = readFileSync(path.join(ROOT, 'components/engleski-simulator/EngleskiSimulator.js'), 'utf8')
const UI_SRC = readFileSync(path.join(ROOT, 'components/engleski-simulator/components/SimSharedUI.js'), 'utf8')

// Snimke se hostaju na GitHub Release-u (vidi public/audio/eng/README.md), pa su
// iz perspektive stranice (happy-dom: http://localhost:3000/) cross-origin.
const AUDIO_ORIGIN = 'https://github.com'
const PAGE_URL = 'http://localhost:3000/discere/engleski/simulator'

const KNOWN = { key: 'vis_2023_ljeto_listening_match', examKey: 'vis_2023_ljeto', topic: 'listening_match', razina: 'visa' }

function res(status) {
  return { ok: status >= 200 && status < 300, status }
}

// Postavi podrijetlo stranice; vraća true ako happy-dom to podržava.
function setPageUrl(url) {
  const hd = typeof window !== 'undefined' && window.happyDOM
  if (hd && typeof hd.setURL === 'function') {
    hd.setURL(url)
    return window.location.origin === new URL(url).origin
  }
  return false
}

let fetchMock

beforeEach(() => {
  _resetAudioAvailabilityCache()
  setPageUrl(PAGE_URL)
  fetchMock = vi.fn(() => Promise.resolve(res(200)))
  vi.stubGlobal('fetch', fetchMock)
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  setPageUrl(PAGE_URL)
})

describe('AudioPlayer — nepoznat examKey (sintetička sesija)', () => {
  for (const key of ['virtual_1758000000000', 'filter_session_1758000000000', 'exam_errors_session']) {
    it(`'${key}' + tema slušanja daje tekstualni fallback, ne prazan render`, () => {
      const { container } = render(e(AudioPlayer, { examKey: key, topic: 'listening_a', razina: 'osnovna' }))
      expect(container.innerHTML).not.toBe('')
      expect(screen.getByText(/Audio nije dostupan/)).toBeTruthy()
      // Nema zapisa u mapi → nema ni URL-a za provjeru.
      expect(fetchMock).not.toHaveBeenCalled()
    })
  }

  it('tema koja nije slušanje ostaje bez playera i bez poruke', () => {
    const { container } = render(e(AudioPlayer, { examKey: 'filter_session_1758000000000', topic: 'reading_a', razina: 'osnovna' }))
    expect(container.innerHTML).toBe('')
  })

  it('poznat ispit i dalje renderira player', () => {
    render(e(AudioPlayer, KNOWN))
    expect(document.querySelector('.audio-native-wrap audio')).toBeTruthy()
    expect(screen.queryByText(/Audio nije dostupan/)).toBeNull()
  })
})

describe('EngleskiSimulator prosljeđuje ključ izvornog ispita', () => {
  it('AudioPlayer dobiva q._examKey s fallbackom na exam.key', () => {
    expect(SIM_SRC).toMatch(/<AudioPlayer[^>]*examKey=\{q\._examKey \|\| exam\.key\}/)
  })

  it('sesija grešaka označava pitanja ključem izvornog ispita', () => {
    expect(SIM_SRC).toMatch(/_examKey: srcExam\.key/)
  })
})

describe('AudioPlayer — preload je none, bez prometa prije klika', () => {
  it('nijedan <audio> nema preload=metadata', async () => {
    render(e(AudioPlayer, KNOWN))
    await waitFor(() => expect(fetchMock).toHaveBeenCalled())
    for (const el of document.querySelectorAll('audio')) {
      expect(el.getAttribute('preload')).toBe('none')
    }
  })

  it('izvor više ne postavlja preload: \'metadata\'', () => {
    expect(UI_SRC).not.toMatch(/preload:\s*'metadata'/)
  })

  it('svaki <audio> zadržava onError kao drugu liniju obrane', () => {
    const blocks = UI_SRC.split(/e\('audio',\s*\{/).slice(1)
    expect(blocks.length).toBeGreaterThanOrEqual(1)
    for (const b of blocks) {
      const head = b.slice(0, b.indexOf('})'))
      expect(head).toContain('onError')
    }
  })
})

describe('AudioPlayer — HEAD provjera dostupnosti', () => {
  it('šalje HEAD na URL snimke iz audio-map.json pri montiranju', async () => {
    render(e(AudioPlayer, KNOWN))
    await waitFor(() => expect(fetchMock).toHaveBeenCalled())
    const [url, init] = fetchMock.mock.calls[0]
    expect(init.method).toBe('HEAD')
    expect(init.signal).toBeTruthy()
    expect(url.startsWith(AUDIO_ORIGIN)).toBe(true)
    expect(url.endsWith('vis_2023_ljeto__task1-1.mp3')).toBe(true)
  })

  it('404 → odmah tekstualni fallback umjesto playera', async () => {
    setPageUrl(AUDIO_ORIGIN + '/app')
    fetchMock.mockResolvedValue(res(404))
    render(e(AudioPlayer, KNOWN))
    expect(await screen.findByText(/Audio nije dostupan/)).toBeTruthy()
    expect(document.querySelector('.audio-native-wrap audio')).toBeNull()
  })

  it('405 (server ne podržava HEAD) → player ostaje', async () => {
    setPageUrl(AUDIO_ORIGIN + '/app')
    fetchMock.mockResolvedValue(res(405))
    render(e(AudioPlayer, KNOWN))
    await waitFor(() => expect(fetchMock).toHaveBeenCalled())
    await Promise.resolve()
    expect(document.querySelector('.audio-native-wrap audio')).toBeTruthy()
    expect(screen.queryByText(/Audio nije dostupan/)).toBeNull()
  })

  it('mrežna greška na istom podrijetlu → tekstualni fallback', async () => {
    const sameOrigin = setPageUrl(AUDIO_ORIGIN + '/app')
    expect(sameOrigin).toBe(true)
    fetchMock.mockRejectedValue(new TypeError('Failed to fetch'))
    render(e(AudioPlayer, KNOWN))
    expect(await screen.findByText(/Audio nije dostupan/)).toBeTruthy()
  })

  it('cross-origin bez CORS-a (TypeError) → player ostaje, ne blokiramo ga', async () => {
    // Stranica je na localhostu, snimke na github.com → cross-origin.
    expect(window.location.origin).not.toBe(AUDIO_ORIGIN)
    fetchMock.mockRejectedValue(new TypeError('Failed to fetch'))
    render(e(AudioPlayer, KNOWN))
    await waitFor(() => expect(fetchMock).toHaveBeenCalled())
    await Promise.resolve()
    expect(document.querySelector('.audio-native-wrap audio')).toBeTruthy()
    expect(screen.queryByText(/Audio nije dostupan/)).toBeNull()
  })

  it('AbortError nakon unmounta ne ruši render ni ne truje cache', async () => {
    let signal
    fetchMock.mockImplementation((_u, init) => {
      signal = init.signal
      return new Promise((_r, reject) => {
        init.signal.addEventListener('abort', () => {
          const err = new Error('aborted')
          err.name = 'AbortError'
          reject(err)
        })
      })
    })
    const { unmount } = render(e(AudioPlayer, KNOWN))
    await waitFor(() => expect(fetchMock).toHaveBeenCalled())
    unmount()
    expect(signal.aborted).toBe(true)
    await Promise.resolve()

    // Cache nije zapamtio prekinuti zahtjev → sljedeći mount ponovo provjerava.
    fetchMock.mockResolvedValue(res(200))
    render(e(AudioPlayer, KNOWN))
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2))
    expect(document.querySelector('.audio-native-wrap audio')).toBeTruthy()
  })

  it('isti URL se ne provjerava dvaput unutar sesije (cache)', async () => {
    const { unmount } = render(e(AudioPlayer, KNOWN))
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
    unmount()
    render(e(AudioPlayer, KNOWN))
    await waitFor(() => expect(document.querySelector('.audio-native-wrap audio')).toBeTruthy())
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('cache pamti i nedostupnost: drugi mount odmah pokazuje fallback bez novog HEAD-a', async () => {
    setPageUrl(AUDIO_ORIGIN + '/app')
    fetchMock.mockResolvedValue(res(404))
    const { unmount } = render(e(AudioPlayer, KNOWN))
    expect(await screen.findByText(/Audio nije dostupan/)).toBeTruthy()
    unmount()
    render(e(AudioPlayer, KNOWN))
    expect(screen.getByText(/Audio nije dostupan/)).toBeTruthy()
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})

describe('Tekstualni fallback je najavljen čitaču ekrana', () => {
  it('okvir poruke ima role="status"', () => {
    render(e(AudioPlayer, { examKey: 'exam_errors_session', topic: 'listening_a', razina: 'osnovna' }))
    const box = document.querySelector('.audio-fallback')
    expect(box).toBeTruthy()
    expect(box.getAttribute('role')).toBe('status')
  })
})
