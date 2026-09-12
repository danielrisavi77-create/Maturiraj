// @vitest-environment happy-dom
import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import TextQuestion from '../../components/discere/common/question-renderers/TextQuestion'
afterEach(cleanup)
it('describes supported algebra input and preserves the raw factored expression',()=>{
  const onChange=vi.fn()
  render(<TextQuestion question={{type:'short',answer:{algebra:{kind:'polynomial',variable:'x'}}}} value="" onChange={onChange}/> )
  const input=screen.getByRole('textbox',{name:'Odgovor'})
  const description=document.getElementById(input.getAttribute('aria-describedby'))
  expect(description.textContent).toContain('Dijeli samo konstantom')
  fireEvent.change(input,{target:{value:'(x-1)^2'}})
  expect(onChange).toHaveBeenCalledWith('(x-1)^2')
})
it('explains numeric input and required unit while preserving the typed fraction',()=>{
  const onChange=vi.fn()
  const question={type:'short',answer:{numeric:{unit:{label:'cm',aliases:['cm'],required:true}}}}
  render(<TextQuestion question={question} value="" onChange={onChange}/>)
  const input=screen.getByRole('textbox',{name:'Odgovor'})
  expect(input.getAttribute('aria-describedby')).toBeTruthy()
  expect(screen.getByText(/Broj ili razlomak/)).toBeTruthy()
  expect(screen.getByText(/Obvezna jedinica: cm/)).toBeTruthy()
  fireEvent.change(input,{target:{value:'1/2 cm'}})
  expect(onChange).toHaveBeenCalledWith('1/2 cm')
})
