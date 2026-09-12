// @vitest-environment happy-dom
import React from 'react'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import ListeningPlayer from '../../components/discere/common/ListeningPlayer'
const policy={title:'Trip message',language:'en',synthetic:true,durationSec:64,maxPlays:2,transcript:[{id:'s1',text:'Meet at eight fifteen.'}]}
afterEach(()=>{cleanup();vi.restoreAllMocks()})
it('hides transcript in assessment mode, counts full plays and preserves the count across pauses',async()=>{
  vi.spyOn(HTMLMediaElement.prototype,'play').mockResolvedValue()
  vi.spyOn(HTMLMediaElement.prototype,'pause').mockImplementation(()=>{})
  const view=render(<ListeningPlayer src="/clip.wav" policy={policy} mode="assessment"/> )
  const audio=view.container.querySelector('audio')
  fireEvent.canPlay(audio)
  await waitFor(()=>expect(screen.getByRole('button',{name:'Pokreni slušanje'}).disabled).toBe(false))
  expect(screen.queryByText('Meet at eight fifteen.')).toBeNull()
  expect(screen.queryByRole('slider')).toBeNull()
  fireEvent.click(screen.getByRole('button',{name:'Pokreni slušanje'}))
  await screen.findByRole('button',{name:'Pauziraj'})
  fireEvent.pause(audio)
  fireEvent.click(screen.getByRole('button',{name:'Nastavi slušanje'}))
  await screen.findByRole('button',{name:'Pauziraj'})
  expect(screen.getByText(/Započeto: 1\/2/)).toBeTruthy()
  fireEvent.ended(audio)
  await screen.findByRole('button',{name:'Ponovi snimku'})
  fireEvent.click(screen.getByRole('button',{name:'Ponovi snimku'}))
  await screen.findByRole('button',{name:'Pauziraj'})
  fireEvent.ended(audio)
  await waitFor(()=>expect(screen.getByRole('button',{name:'Ponovi snimku'}).disabled).toBe(true))
  expect(screen.getByText(/Dovršeno: 2/)).toBeTruthy()
})
it('reports audio failure and only exposes the transcript in practice/review',async()=>{
  vi.spyOn(HTMLMediaElement.prototype,'pause').mockImplementation(()=>{})
  const availability=vi.fn()
  const view=render(<ListeningPlayer src="/clip.wav" policy={policy} mode="assessment" onAvailability={availability}/> )
  fireEvent.error(view.container.querySelector('audio'))
  await screen.findByText(/To nije netočan odgovor/)
  expect(availability).toHaveBeenCalledWith(false)
  expect(screen.getByRole('button',{name:'Pokreni slušanje'}).disabled).toBe(true)
  view.rerender(<ListeningPlayer src="/clip.wav" policy={policy} mode="review"/> )
  expect(screen.getByText('Meet at eight fifteen.')).toBeTruthy()
  expect(screen.getByRole('slider',{name:'Premotaj snimku'})).toBeTruthy()
})
