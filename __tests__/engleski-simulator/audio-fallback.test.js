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
 *     snimka i 'extra'), da se nedostupnost vidi bez klika na Play.
 */
import { describe, it, expect, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { render, screen, cleanup } from '@testing-library/react'
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
    expect(blocks.length).toBeGreaterThanOrEqual(4)
    for (const b of blocks) {
      const head = b.slice(0, b.indexOf('})'))
      expect(head).toContain('onError')
    }
  })

  it('uvodna snimka ima vlastito stanje greške', () => {
    expect(UI_SRC).toMatch(/introError/)
  })
})
