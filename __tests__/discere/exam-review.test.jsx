// @vitest-environment happy-dom
import React from 'react'
import { afterEach, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExamShell from '@/components/discere/common/ExamShell'
import { exam } from '@/content/discere/bio/exams/2026_ljeto.mjs'
import { atomicPractice } from '@/content/learning/kem/atomic-practice'
afterEach(cleanup)
const result = { manualPending: true, manualPossiblePoints: 1, autoPossiblePoints: 1, autoPercent: 100, earnedPoints: 1, maxPoints: 2, unansweredCount: 0 }
const sample = { ...exam, questions: [exam.questions.find(q => q.id === '39')] }
const responses = { '39.1': '40', '39.2': 'Kategorije nisu kontinuirane.' }
it('reviews confirmed grouped answers and literal official key without awarding manual points', async () => {
  render(<ExamShell exam={sample} session={{ result, responses, reviewAvailable: true }} />)
  expect(screen.getByRole('heading', { name: 'Pregled odgovora' })).toBeTruthy()
  await userEvent.click(screen.getByText('Zadatak 39', { exact: true }))
  expect((await screen.findByDisplayValue('Kategorije nisu kontinuirane.')).disabled).toBe(true)
  expect(screen.getByText('40 %', { exact: true })).toBeTruthy()
  expect(screen.getByText(/Čeka ručnu procjenu/)).toBeTruthy()
  expect(screen.getByText(/Krvne grupe su odvojene kategorije/)).toBeTruthy()
  expect(screen.queryByText(/Osvojeno/)).toBeNull()
})
it('does not reveal answers before submission or attach current content to an old result', () => {
  const { rerender } = render(<ExamShell exam={sample} />)
  expect(screen.queryByRole('heading', { name: 'Pregled odgovora' })).toBeNull()
  rerender(<ExamShell exam={sample} session={{ result, responses, reviewAvailable: false }} />)
  expect(screen.getByText(/Pregled nije dostupan za ovu verziju/)).toBeTruthy()
  expect(screen.queryByText('Zadatak 39', { exact: true })).toBeNull()
})
it('supports local submission and never labels an authored key or explanation as official', async () => {
  const authored = { ...atomicPractice, meta: { ...atomicPractice.meta, questionCount: 1, maxPoints: 1 }, questions: [atomicPractice.questions[0]] }
  render(<ExamShell exam={authored} />)
  await userEvent.click(screen.getByRole('radio', { name: '14', exact: true }))
  await userEvent.click(screen.getByRole('button', { name: 'Predaj ispit' }))
  await userEvent.click(screen.getByRole('button', { name: 'Potvrdi predaju' }))
  await userEvent.click(screen.getByText('Zadatak 1', { exact: true }))
  expect(await screen.findByRole('heading', { name: '1 · Ključ iz sadržaja' })).toBeTruthy()
  expect(screen.getByRole('heading', { name: 'Objašnjenje iz sadržaja' })).toBeTruthy()
  expect(screen.queryByText(/Službeni ključ/)).toBeNull()
  expect(screen.getByRole('radio', { name: '14', exact: true }).checked).toBe(true)
})
