// @vitest-environment happy-dom
/**
 * audio-fallback.test.js
 *
 * Nalaz 3.4:
 *  1) AudioPlayer je dobivao examKey sintetičke sesije ('virtual_…',
 *     'filter_session_…', 'exam_errors_session'), kojih nema u audio-map.json →
 *     pitanje slušanja bez playera i bez poruke. Popravak: examKey={q._examKey || exam.key}.
 *  2) Kad zapisa u mapi nema, za pitanje slušanja mora ostati tekstualni fallback
 *     s jasnom oznakom (ne tiho ništa).
 *  3) <audio> mora imati preload='metadata' i onError na svim zapisima (uvodna
 *     snimka i 'extra'), da se nedostupnost vidi bez klika na Play. Provjera
 *     fetchom (HEAD) nije alternativa: CSP connect-src ne pokriva bazu snimaka,
 *     a GitHub Release nema CORS — vidi NativeAudio u SimSharedUI.js.
 *  4) Okvir tekstualnog fallbacka ima role="status" da ga čitač ekrana najavi.
 */
import { describe, it, expect, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { createElement as e } from 'react'
import { AudioPlayer } from '@/components/engleski-simulator/components/SimSharedUI'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const SIM_SRC = readFileSync(path.join(ROOT, 'components/engleski-simulator/EngleskiSimulator.js'), 'utf8')
const UI_SRC = readFileSync(path.join(ROOT, 'components/engleski-simulator/components/SimSharedUI.js'), 'utf8')

afterEach(cleanup)

describe('AudioPlayer — nepoznat examKey (sintetička sesija)', () => {
  for (const key of ['virtual_1758000000000', 'filter_session_1758000000000', 'exam_errors_session']) {
    it(`'${key}' + tema slušanja daje tekstualni fallback, ne prazan render`, () => {
      const { container } = render(e(AudioPlayer, { examKey: key, topic: 'listening_a', razina: 'osnovna' }))
      expect(container.innerHTML).not.toBe('')
      expect(screen.getByText(/Audio nije dostupan/)).toBeTruthy()
    })
  }

  it('tema koja nije slušanje ostaje bez playera i bez poruke', () => {
    const { container } = render(e(AudioPlayer, { examKey: 'filter_session_1758000000000', topic: 'reading_a', razina: 'osnovna' }))
    expect(container.innerHTML).toBe('')
  })

  it('poznat ispit i dalje renderira player', () => {
    render(e(AudioPlayer, { examKey: 'vis_2023_ljeto', topic: 'listening_match', razina: 'visa' }))
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

describe('AudioPlayer — svi <audio> imaju preload=metadata i onError', () => {
  it('nema preostalog preload: \'none\'', () => {
    expect(UI_SRC).not.toMatch(/preload:\s*'none'/)
  })

  it('svaki e(\'audio\', …) ima onError rukovatelj', () => {
    const blocks = UI_SRC.split(/e\('audio',\s*\{/).slice(1)
    expect(blocks.length).toBeGreaterThanOrEqual(1)
    for (const b of blocks) {
      const head = b.slice(0, b.indexOf('})'))
      expect(head).toContain('onError')
    }
  })

  it('renderirani zapisi (glavni, uvodna snimka, extra) imaju preload=metadata', () => {
    render(e(AudioPlayer, { examKey: '2016_ljeto', topic: 'listening_b', razina: 'osnovna' }))
    fireEvent.click(screen.getByRole('button', { name: /Upute/ }))
    const els = document.querySelectorAll('audio')
    expect(els.length).toBeGreaterThanOrEqual(3)
    for (const el of els) expect(el.getAttribute('preload')).toBe('metadata')
  })

  it('svaki zapis ima vlastito stanje greške: greška na uvodnoj snimci ne ruši glavni player', () => {
    render(e(AudioPlayer, { examKey: 'vis_2023_ljeto', topic: 'listening_match', razina: 'visa' }))
    fireEvent.click(screen.getByRole('button', { name: /Upute/ }))
    const intro = document.querySelector('.audio-intro-wrap audio')
    expect(intro).toBeTruthy()
    fireEvent.error(intro)
    expect(screen.getByText(/Uvodna snimka nije dostupna/)).toBeTruthy()
    expect(document.querySelector('.audio-native-wrap audio')).toBeTruthy()
  })

  it('greška na glavnom zapisu daje tekstualni fallback umjesto playera', () => {
    render(e(AudioPlayer, { examKey: 'vis_2023_ljeto', topic: 'listening_match', razina: 'visa' }))
    fireEvent.error(document.querySelector('.audio-native-wrap audio'))
    expect(screen.getByText(/Audio nije dostupan/)).toBeTruthy()
    expect(document.querySelector('.audio-native-wrap audio')).toBeNull()
  })
})

describe('AudioPlayer — dostupnost se ne provjerava fetchom', () => {
  // connect-src u next.config.mjs ne uključuje bazu snimaka, a produkcijski
  // GitHub Release odgovara 302 bez Access-Control-Allow-Origin — fetch(HEAD)
  // bi samo proizveo CSP/CORS grešku u konzoli i uvijek završio kao 'dostupno'.
  it('montiranje playera ne šalje nijedan zahtjev', () => {
    const fetchSpy = vi.fn(() => Promise.reject(new TypeError('Failed to fetch')))
    vi.stubGlobal('fetch', fetchSpy)
    try {
      render(e(AudioPlayer, { examKey: 'vis_2023_ljeto', topic: 'listening_match', razina: 'visa' }))
      expect(fetchSpy).not.toHaveBeenCalled()
    } finally {
      vi.unstubAllGlobals()
    }
  })

  it('izvor ne sadrži HEAD provjeru ni cache dostupnosti', () => {
    expect(UI_SRC).not.toMatch(/method:\s*'HEAD'/)
    expect(UI_SRC).not.toMatch(/_audioAvailability/)
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
