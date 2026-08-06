// @vitest-environment happy-dom
import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QuestionRenderer from '@/components/discere/common/QuestionRenderer'

const base = { id: 'q1', prompt: 'Pitanje?', points: 1, topic: 'test', assets: [] }

describe('QuestionRenderer', () => {
  it('returns the selected MC option id', async () => {
    const onChange = vi.fn()
    render(<QuestionRenderer question={{ ...base, type:'mc', options:[{id:'A',text:'A'},{id:'B',text:'B'}] }} value={null} onChange={onChange} />)
    await userEvent.click(screen.getByLabelText('B'))
    expect(onChange).toHaveBeenLastCalledWith('B')
  })

  it('returns multi selections in source option order', async () => {
    const onChange = vi.fn()
    const q = { ...base, type:'multi', options:[{id:'A',text:'A'},{id:'B',text:'B'},{id:'C',text:'C'}] }
    const { rerender } = render(<QuestionRenderer question={q} value={['C']} onChange={onChange} />)
    await userEvent.click(screen.getByLabelText('A'))
    expect(onChange).toHaveBeenLastCalledWith(['A','C'])
    rerender(<QuestionRenderer question={q} value={['A','C']} onChange={onChange} />)
    await userEvent.click(screen.getByLabelText('C'))
    expect(onChange).toHaveBeenLastCalledWith(['A'])
  })

  it('returns short text', async () => {
    const onChange = vi.fn()
    render(<QuestionRenderer question={{ ...base, type:'short' }} value="" onChange={onChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'mitoza')
    expect(onChange).toHaveBeenCalled()
  })

  it('returns fill values by gap id', async () => {
    const onChange = vi.fn()
    render(<QuestionRenderer question={{ ...base, type:'fill', gaps:[{id:'g1',label:'Prvo'}] }} value={{}} onChange={onChange} />)
    await userEvent.type(screen.getByLabelText('Prvo'), 'DNA')
    expect(onChange).toHaveBeenLastCalledWith({ g1: 'A' })
  })

  it('returns matching selections as a mapping', async () => {
    const onChange = vi.fn()
    render(<QuestionRenderer question={{ ...base, type:'matching', left:[{id:'l1',text:'Lijevo'}], right:[{id:'r1',text:'Desno'}] }} value={{}} onChange={onChange} />)
    await userEvent.selectOptions(screen.getByLabelText('Lijevo'), 'r1')
    expect(onChange).toHaveBeenLastCalledWith({ l1:'r1' })
  })

  it('moves ordering items with keyboard-operable buttons', async () => {
    const onChange = vi.fn()
    render(<QuestionRenderer question={{ ...base, type:'ordering', items:[{id:'a',text:'A'},{id:'b',text:'B'}] }} value={['a','b']} onChange={onChange} />)
    await userEvent.click(screen.getByRole('button', { name:'Pomakni A dolje' }))
    expect(onChange).toHaveBeenLastCalledWith(['b','a'])
  })

  it('returns true false values by statement id', async () => {
    const onChange = vi.fn()
    render(<QuestionRenderer question={{ ...base, type:'true_false', statements:[{id:'s1',text:'Tvrdnja'}] }} value={{}} onChange={onChange} />)
    await userEvent.click(screen.getByLabelText('Točno'))
    expect(onChange).toHaveBeenLastCalledWith({ s1:true })
  })

  it('returns essay text', async () => {
    const onChange = vi.fn()
    render(<QuestionRenderer question={{ ...base, type:'essay' }} value="" onChange={onChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'Objašnjenje')
    expect(onChange).toHaveBeenCalled()
  })

  it('renders a passage stimulus once and child questions', () => {
    const q = {
      ...base, type:'passage_group', stimulus:{text:'Izvorni tekst'},
      children:[{ ...base, id:'c1', type:'mc', prompt:'Dijete?', options:[{id:'A',text:'Odgovor A'},{id:'B',text:'Odgovor B'}] }],
    }
    render(<QuestionRenderer question={q} value={{}} onChange={() => {}} />)
    expect(screen.getAllByText('Izvorni tekst')).toHaveLength(1)
    expect(screen.getByText('Dijete?')).toBeTruthy()
  })

  it('renders audio and media assets accessibly', () => {
    const audio = {
      ...base, type:'audio_group', assets:[{type:'audio',src:'/audio.mp3'}],
      children:[{ ...base, id:'c1', type:'short', prompt:'Što čuješ?' }],
    }
    const { unmount } = render(<QuestionRenderer question={audio} value={{}} onChange={() => {}} />)
    expect(document.querySelector('audio')).toBeTruthy()
    unmount()

    const media = {
      ...base, type:'media_response', assets:[{type:'image',src:'/cell.webp',alt:'Shema stanice'}],
      children:[{ ...base, id:'c2', type:'short', prompt:'Što vidiš?' }],
    }
    render(<QuestionRenderer question={media} value={{}} onChange={() => {}} />)
    expect(screen.getByAltText('Shema stanice')).toBeTruthy()
  })
})
