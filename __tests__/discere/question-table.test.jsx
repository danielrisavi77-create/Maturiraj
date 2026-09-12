// @vitest-environment happy-dom
import React from 'react'
import { afterEach, expect, it } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import QuestionRenderer from '@/components/discere/common/QuestionRenderer'
import { validateExam } from '@/lib/discere/exam-schema'
import { exam } from '@/content/discere/bio/exams/2026_ljeto.mjs'
afterEach(cleanup)
const table = { caption: 'Podatci', columns: ['Vrsta', 'Vrijednost'], rows: [['Prva', '12'], ['Druga', '24']] }
it('renders a table with accessible caption, row/column headers and following question text', () => {
  const q = { ...exam.questions[0], stimulus: { table, afterText: 'Usporedi vrijednosti.' } }
  render(<QuestionRenderer question={q} />)
  const rendered = screen.getByRole('table', { name: 'Podatci' })
  expect(within(rendered).getAllByRole('columnheader')).toHaveLength(2)
  expect(within(rendered).getAllByRole('rowheader')).toHaveLength(2)
  expect(within(rendered).getByRole('cell', { name: '24' })).toBeTruthy()
  expect(screen.getByRole('region', { name: 'Tablica: Podatci' }).tabIndex).toBe(0)
  expect(screen.getByText('Usporedi vrijednosti.')).toBeTruthy()
})
it('rejects malformed table stimuli on leaf and grouped questions', () => {
  for (const target of ['1', '39']) for (const invalid of [null, { ...table, rows: [['Missing']] }, { ...table, columns: [''] }, { ...table, rows: [[{}, '24']] }, { ...table, rows: [] }]) {
    const copy = structuredClone(exam)
    copy.questions.find(q => q.id === target).stimulus = { table: invalid }
    expect(validateExam(copy).errors.some(error => error.code === 'INVALID_STIMULUS_TABLE')).toBe(true)
  }
})
it('preserves all corrected source values in the Biology tables', () => {
  const byId = Object.fromEntries(exam.questions.map(q => [q.id, q]))
  expect(byId['3'].stimulus?.table.rows).toHaveLength(7)
  expect(byId['6'].stimulus?.table.rows[1]).toEqual(['skelet', 'vapnenasti egzoskelet', 'hidroskelet', 'hidroskelet', 'polisaharidni egzoskelet'])
  expect(byId['39'].stimulus?.table.rows).toEqual([['A','100','60'],['B','20','40'],['AB','18','22'],['0','60','80']])
  expect(validateExam(exam).errors).toEqual([])
})
