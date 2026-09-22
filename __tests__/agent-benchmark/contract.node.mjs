import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'
import { validateTask } from '../../scripts/agent-benchmark/schema.mjs'
import { prepareTask } from '../../scripts/agent-benchmark/prepare.mjs'
import { importResult } from '../../scripts/agent-benchmark/import-result.mjs'

const task = { id: 'bounded-fix', kind: 'code', baseCommit: 'HEAD', goal: 'Fix one issue', allowedPaths: ['lib/rate-limit.ts'], checks: ['node --test'], risk: 'low' }

test('rejects paths escaping the repository and empty checks', () => {
  assert.throws(() => validateTask({ ...task, allowedPaths: ['../../.env'] }), /path/i)
  assert.throws(() => validateTask({ ...task, checks: [] }), /checks/i)
})

test('prepares two independent worktrees from one pinned commit without Grok', () => {
  const root = mkdtempSync(join(tmpdir(), 'benchmark-'))
  try {
    execFileSync('git', ['init', '-q', root])
    execFileSync('git', ['-C', root, 'config', 'user.email', 'test@example.org'])
    execFileSync('git', ['-C', root, 'config', 'user.name', 'Test'])
    writeFileSync(join(root, 'README'), 'fixture')
    execFileSync('git', ['-C', root, 'add', 'README'])
    execFileSync('git', ['-C', root, 'commit', '-qm', 'fixture'])
    const commit = execFileSync('git', ['-C', root, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
    const paths = prepareTask({ ...task, baseCommit: commit, allowedPaths: ['README'] }, { repoRoot: root, workspaceRoot: join(root, '.worktrees'), tools: ['codex', 'claude'] })
    assert.deepEqual(Object.keys(paths).sort(), ['claude', 'codex'])
    for (const path of Object.values(paths)) {
      assert.equal(execFileSync('git', ['-C', path, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(), commit)
    }
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('result importer rejects outside artifacts and keeps missing tokens unknown', () => {
  const root = mkdtempSync(join(tmpdir(), 'benchmark-result-'))
  try {
    const worktree = join(root, 'run')
    mkdirSync(worktree)
    writeFileSync(join(worktree, 'result.json'), JSON.stringify({ taskId: task.id, tool: 'codex', model: 'unknown', baseCommit: task.baseCommit, branch: 'benchmark/bounded-fix/codex', elapsedSeconds: 2, checks: [], sourceReview: null, artifactPaths: ['../outside'], reviewFindings: [] }))
    assert.throws(() => importResult({ task, tool: 'codex', resultPath: join(worktree, 'result.json'), worktree }), /path/i)
    writeFileSync(join(worktree, 'result.json'), JSON.stringify({ taskId: task.id, tool: 'codex', model: 'unknown', baseCommit: task.baseCommit, branch: 'benchmark/bounded-fix/codex', elapsedSeconds: 2, checks: [], sourceReview: null, artifactPaths: [], reviewFindings: [] }))
    assert.equal(importResult({ task, tool: 'codex', resultPath: join(worktree, 'result.json'), worktree }).tokens, null)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
