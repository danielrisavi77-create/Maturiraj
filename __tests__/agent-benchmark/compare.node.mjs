import { test } from 'node:test'
import assert from 'node:assert/strict'
import { compareResults } from '../../scripts/agent-benchmark/compare.mjs'

const base = { taskId: 'small-fix', baseCommit: 'abc123', tool: 'codex', kind: 'code', elapsedSeconds: 12, tokens: 100, tokenSource: 'cli_report', checks: [{ name: 'test', passed: true }], reviewer: 'Claude', sourceReview: null, reviewFindings: [] }

test('rejects comparisons of different base commits', () => {
  assert.throws(() => compareResults([base, { ...base, tool: 'claude', baseCommit: 'other' }]), /baseCommit/)
})

test('rejects duplicate tool results as comparison evidence', () => {
  assert.throws(() => compareResults([base, { ...base }]), /Duplicate tool/i)
})

test('does not assign a cost winner when one token count is unknown', () => {
  const result = compareResults([base, { ...base, tool: 'claude', tokens: null, tokenSource: 'unknown', reviewer: 'Codex' }])
  assert.equal(result.tokenComparison, 'unknown')
  assert.equal(result.eligible.length, 2)
})

test('rejects failed checks and a missing independent source review', () => {
  const result = compareResults([
    { ...base, checks: [{ name: 'test', passed: false }] },
    { ...base, tool: 'claude', kind: 'content', sourceReview: null },
  ])
  assert.equal(result.eligible.length, 0)
  assert.equal(result.ineligible.length, 2)
})

test('rejects security author approving their own work', () => {
  const result = compareResults([{ ...base, kind: 'security', reviewer: 'codex' }])
  assert.equal(result.eligible.length, 0)
  assert.match(result.ineligible[0].reason, /independent/i)
})
