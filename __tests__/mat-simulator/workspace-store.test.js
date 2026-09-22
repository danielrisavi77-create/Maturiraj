import { expect, it, vi } from 'vitest'
import { createWorkspaceStore, hasWorkspaceWork } from '@/components/simulator/mat/sim/workspace-store'

it('merges calculator and viewport patches without changing older snapshots or incoming stroke arrays', () => {
  const initial = Object.freeze({ calcExpr: '1+1', viewS: 1 })
  const store = createWorkspaceStore({ A: initial })
  store.patch('A', { viewS: 2, viewOx: 10 })
  const viewportSnapshot = store.get('A')
  const strokes = [{ pts: [{ x: 1, y: 2 }] }]
  store.patch('A', { calcExpr: '2+2', strokes })
  strokes.push({ pts: [] })
  expect(initial).toEqual({ calcExpr: '1+1', viewS: 1 })
  expect(viewportSnapshot).toEqual({ calcExpr: '1+1', viewS: 2, viewOx: 10 })
  expect(store.get('A')).toMatchObject({ calcExpr: '2+2', viewS: 2, viewOx: 10 })
  expect(store.get('A').strokes).toHaveLength(1)
  expect(store.get('B')).toBeNull()
})

it('notifies only subscribed question readers after committing, and stops after unsubscribe', () => {
  const store = createWorkspaceStore()
  const seen = []
  const unsubscribe = store.subscribe('A', () => seen.push(store.get('A').calcExpr))
  const other = vi.fn()
  store.subscribe('B', other)
  store.patch('A', { calcExpr: 'a' })
  expect(seen).toEqual(['a'])
  expect(other).not.toHaveBeenCalled()
  unsubscribe()
  store.patch('A', { calcExpr: 'b' })
  expect(seen).toEqual(['a'])
})

it('accepts numeric question zero and ignores missing identities', () => {
  const store = createWorkspaceStore()
  store.patch(0, { calcExpr: 'zero' })
  store.patch(null, { calcExpr: 'missing' })
  store.patch(undefined, { calcExpr: 'missing' })
  expect(store.get('0')).toEqual({ calcExpr: 'zero' })
  expect(store.get(null)).toBeNull()
  expect(store.get(undefined)).toBeNull()
})

it('reports work using the existing launcher criteria', () => {
  expect(hasWorkspaceWork(null)).toBe(false)
  expect(hasWorkspaceWork({ strokes: [], calcHist: [], funcs: [], solveInput: ' ', viewS: 2, calcExpr: '1+1' })).toBe(false)
  for (const work of [{ strokes: [{}] }, { calcHist: [{}] }, { funcs: [{}] }, { solveInput: 'x=1' }, { figOn: true }]) {
    expect(hasWorkspaceWork(work)).toBe(true)
  }
})
