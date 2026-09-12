// @vitest-environment happy-dom
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { createElement as e } from 'react'
import { EXAMS } from '../../lib/engleski-simulator/exams.js'
import { LL } from '../../lib/engleski-simulator/constants.js'
import { chk } from '../../lib/engleski-simulator/scoring.js'
import { MCQ } from '../../components/engleski-simulator/components/SimSharedUI.js'

function allMcQuestions() {
  const out = []
  for (const examKey of Object.keys(EXAMS)) {
    const exam = EXAMS[examKey]
    for (const q of exam.qs || []) {
      if (q.type === 'mc') out.push(q)
    }
  }
  return out
}

describe('MC slova A-O (LL)', () => {
  it('svako mc pitanje ima sol.cl slovo iz LL', () => {
    const bad = allMcQuestions().filter(q => !LL.includes(q.sol.cl))
    expect(bad.length).toBe(0)
  })

  it('svako mc pitanje ima indeks sol.cl unutar duljine opts', () => {
    for (const q of allMcQuestions()) {
      expect(LL.indexOf(q.sol.cl)).toBeGreaterThanOrEqual(0)
      expect(LL.indexOf(q.sol.cl)).toBeLessThan(q.opts.length)
    }
  })

  it('r28 iz 2024_ljeto ima točan odgovor H', () => {
    const q = EXAMS['2024_ljeto'].qs.find(q => q.id === 'r28')
    expect(q).toBeTruthy()
    expect(q.sol.cl).toBe('H')
    expect(chk(q, 'H')).toBe(true)
    expect(chk(q, 'A')).toBe(false)
  })

  it('MCQ renderira slovo H za 8. opciju i klik na nju sprema H', () => {
    const q = EXAMS['2024_ljeto'].qs.find(q => q.id === 'r28')
    const setA = vi.fn()
    render(e(MCQ, { q, a: null, setA, rev: false }))
    expect(screen.getByText('H')).toBeTruthy()
    fireEvent.click(screen.getByText('H'))
    expect(setA).toHaveBeenCalledWith('H')
  })
})
