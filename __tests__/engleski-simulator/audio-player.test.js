// @vitest-environment happy-dom
/**
 * audio-player.test.js
 *
 * Pokriva AudioPlayer (components/engleski-simulator/components/SimSharedUI.js):
 *   - <audio> src pokazuje na GitHub Release bazu i ispravnu datoteku 1. slušanja
 *   - klik na 'Ponavljanje' mijenja src na datoteku ponavljanja
 *   - blok 'Dodatni zapisi slušanja' se prikazuje uz zadnju temu ispita koji ima
 *     polje 'extra' u audio-map.json (2016_ljeto — obje teme su confidence 'low')
 *
 * SimSharedUI.js piše plain createElement (nema JSX), pa import ne treba
 * '?lang.jsx' sufiks (za razliku od EngleskiSimulator.js — vidi napomenu u
 * simulator-smoke.test.js).
 */
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { createElement as e } from 'react'
import { AudioPlayer, _resetAudioAvailabilityCache } from '@/components/engleski-simulator/components/SimSharedUI'

const AUDIO_BASE = 'https://github.com/danielrisavi77-create/maturiraj-eng-audio/releases/download/eng-audio-v1/'

// AudioPlayer pri montiranju šalje HEAD provjeru dostupnosti snimke (vidi
// audio-fallback.test.js); ovdje je mockamo da testovi ne idu na mrežu.
beforeEach(() => {
  _resetAudioAvailabilityCache()
  vi.stubGlobal('fetch', vi.fn(() => Promise.resolve({ ok: true, status: 200 })))
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('AudioPlayer — src i baza', () => {
  it('src glavnog <audio> počinje s ENG_AUDIO_BASE i završava datotekom 1. slušanja', () => {
    render(e(AudioPlayer, { key: 'vis_2023_ljeto_listening_match', examKey: 'vis_2023_ljeto', topic: 'listening_match', razina: 'visa' }))
    const audioEl = document.querySelector('.audio-native-wrap audio')
    expect(audioEl).toBeTruthy()
    expect(audioEl.src.startsWith(AUDIO_BASE)).toBe(true)
    expect(audioEl.src.endsWith('vis_2023_ljeto__task1-1.mp3')).toBe(true)
  })

  it('klik na "Ponavljanje" mijenja src na datoteku ponavljanja (task1-2)', () => {
    render(e(AudioPlayer, { key: 'vis_2023_ljeto_listening_match', examKey: 'vis_2023_ljeto', topic: 'listening_match', razina: 'visa' }))
    fireEvent.click(screen.getByRole('button', { name: /Ponavljanje/ }))
    const audioEl = document.querySelector('.audio-native-wrap audio')
    expect(audioEl.src.endsWith('vis_2023_ljeto__task1-2.mp3')).toBe(true)
  })
})

describe('AudioPlayer — dodatni zapisi slušanja (extra)', () => {
  it('"2016_ljeto" zadnja tema (listening_b) prikazuje blok "Dodatni zapisi slušanja"', () => {
    render(e(AudioPlayer, { key: '2016_ljeto_listening_b', examKey: '2016_ljeto', topic: 'listening_b', razina: 'osnovna' }))
    expect(screen.getByText(/Dodatni zapisi slušanja/)).toBeTruthy()
  })

  it('ispit bez polja "extra" (vis_2023_ljeto) ne prikazuje blok "Dodatni zapisi slušanja"', () => {
    render(e(AudioPlayer, { key: 'vis_2023_ljeto_listening_match', examKey: 'vis_2023_ljeto', topic: 'listening_match', razina: 'visa' }))
    expect(screen.queryByText(/Dodatni zapisi slušanja/)).toBeNull()
  })
})
