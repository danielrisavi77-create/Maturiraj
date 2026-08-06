// @vitest-environment happy-dom
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import ExamShell from '@/components/discere/common/ExamShell'

const exam = {
  meta:{ subject:'bio', key:'manual', label:'Ispit s rubrikom', durationSec:600, questionCount:1, maxPoints:1 },
  questions:[{
    id:'1', type:'essay', prompt:'Objasnite odgovor.', points:1, topic:'test', sourceRef:{task:'1'}, assets:[], explanation:null,
    answer:{kind:'rubric',source:'official',rubric:[{id:'r',text:'Službeni kriterij',points:1}]},
  }],
}

describe('ExamShell manual result presentation', () => {
  it('does not present manual rubric points as a false final percentage', async () => {
    render(<ExamShell exam={exam} onComplete={() => {}} onExit={() => {}} />)
    await userEvent.type(screen.getByRole('textbox'), 'Moj odgovor')
    await userEvent.click(screen.getByRole('button', { name:'Predaj ispit' }))
    await userEvent.click(screen.getByRole('button', { name:'Potvrdi predaju' }))

    expect(screen.queryByText('0%')).toBeNull()
    expect(screen.getByText(/za ručnu provjeru: 1 bod/i)).toBeTruthy()
    expect(screen.getByText(/automatski provjereno/i)).toBeTruthy()
  })
})
