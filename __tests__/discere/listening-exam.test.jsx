// @vitest-environment happy-dom
import React from 'react'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import ExamShell from '../../components/discere/common/ExamShell'
const exam={meta:{label:'Listening pilot',subject:'eng',level:'B',key:'audio',maxPoints:1,durationSec:600},questions:[{id:'g',type:'audio_group',points:1,prompt:'Listen and choose.',assets:[{type:'audio',src:'/clip.wav'}],stimulus:{listening:{title:'Trip',language:'en',synthetic:true,durationSec:64,maxPlays:2,transcript:[{id:'line',text:'Meet at eight fifteen.'}]}},children:[{id:'q',type:'mc',points:1,prompt:'When should you arrive?',options:[{id:'a',text:'8:15'},{id:'b',text:'8:30'}],answer:{kind:'choice',source:'none',correct:['a']},explanation:'The meeting time is eight fifteen.'}]}]}
afterEach(()=>{cleanup();vi.restoreAllMocks()})
it('blocks unheard/failed audio, then exposes transcript only in submitted review',async()=>{
  vi.spyOn(HTMLMediaElement.prototype,'play').mockResolvedValue()
  vi.spyOn(HTMLMediaElement.prototype,'pause').mockImplementation(()=>{})
  const view=render(<ExamShell exam={exam} onExit={()=>{}}/> )
  const audio=view.container.querySelector('audio')
  fireEvent.click(screen.getByRole('radio',{name:'8:15'}))
  expect(screen.getByRole('button',{name:'Predaj ispit'}).disabled).toBe(true)
  expect(screen.queryByText('Meet at eight fifteen.')).toBeNull()
  fireEvent.canPlay(audio)
  await waitFor(()=>expect(screen.getByRole('button',{name:'Pokreni slušanje'}).disabled).toBe(false))
  fireEvent.click(screen.getByRole('button',{name:'Pokreni slušanje'}))
  await screen.findByRole('button',{name:'Pauziraj'})
  fireEvent.ended(audio)
  await waitFor(()=>expect(screen.getByRole('button',{name:'Predaj ispit'}).disabled).toBe(false))
  fireEvent.error(audio)
  await screen.findByText(/To nije netočan odgovor/)
  expect(screen.getByRole('button',{name:'Predaj ispit'}).disabled).toBe(true)
  fireEvent.canPlay(audio)
  await waitFor(()=>expect(screen.getByRole('button',{name:'Predaj ispit'}).disabled).toBe(false))
  fireEvent.click(screen.getByRole('button',{name:'Predaj ispit'}))
  fireEvent.click(screen.getByRole('button',{name:'Potvrdi predaju'}))
  await screen.findByRole('heading',{name:'100%'})
  const details=screen.getByText('Zadatak 1').closest('details')
  details.open=true;fireEvent(details,new Event('toggle'))
  await screen.findByText('Meet at eight fifteen.')
  expect(screen.getByRole('slider',{name:'Premotaj snimku'})).toBeTruthy()
})
