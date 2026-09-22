import { mkdirSync, readFileSync, realpathSync, writeFileSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { pathToFileURL } from 'node:url'
import { TOOLS, safeRelativePath, validateTask } from './schema.mjs'

export function importResult({ task, tool, resultPath, worktree }) {
  validateTask(task)
  if (!TOOLS.includes(tool)) throw new Error('Invalid tool')
  const root = realpathSync(worktree)
  const inputPath = realpathSync(resultPath)
  if (relative(root, inputPath).startsWith(`..${sep}`) || relative(root, inputPath) === '..') throw new Error('Result outside worktree')
  const data = JSON.parse(readFileSync(inputPath, 'utf8'))
  if (data.taskId !== task.id || data.tool !== tool || data.baseCommit !== task.baseCommit) throw new Error('Result task, tool or baseCommit mismatch')
  if (!Number.isFinite(data.elapsedSeconds) || data.elapsedSeconds < 0) throw new Error('Invalid elapsedSeconds')
  if (!Array.isArray(data.checks) || !Array.isArray(data.artifactPaths) || !Array.isArray(data.reviewFindings)) throw new Error('Invalid result arrays')
  if (data.tokens != null && (!Number.isSafeInteger(data.tokens) || data.tokens < 0 || !['provider_report', 'cli_report'].includes(data.tokenSource))) throw new Error('Invalid token measurement')
  const artifactPaths = data.artifactPaths.map(p => {
    safeRelativePath(p)
    const actual = realpathSync(resolve(root, p))
    if (isAbsolute(p) || actual === root || relative(root, actual) === '..' || relative(root, actual).startsWith(`..${sep}`)) throw new Error('Invalid artifact path')
    return p
  })
  return {
    taskId: data.taskId, kind: task.kind, tool, model: String(data.model || 'unknown').slice(0, 80),
    baseCommit: data.baseCommit, branch: String(data.branch || '').slice(0, 120), worktree: root,
    elapsedSeconds: data.elapsedSeconds, tokens: data.tokens ?? null,
    tokenSource: data.tokens == null ? 'unknown' : data.tokenSource,
    checks: data.checks.map(c => ({ name: String(c.name || '').slice(0, 100), passed: c.passed === true })),
    sourceReview: data.sourceReview && { reviewer: String(data.sourceReview.reviewer || '').slice(0, 80), passed: data.sourceReview.passed === true },
    artifactPaths, reviewFindings: data.reviewFindings.map(f => ({ severity: String(f.severity || '').slice(0, 30), summary: String(f.summary || '').slice(0, 300) })),
    reviewer: data.reviewer ? String(data.reviewer).slice(0, 80) : null,
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [taskFile, tool, resultPath, worktree] = process.argv.slice(2)
  if (!worktree) throw new Error('Usage: node import-result.mjs <task.json> <tool> <result.json> <worktree>')
  const task = JSON.parse(readFileSync(resolve(taskFile), 'utf8'))
  const result = importResult({ task, tool, resultPath, worktree })
  const out = join(process.cwd(), 'scripts/agent-benchmark/runs', task.id)
  mkdirSync(out, { recursive: true })
  const target = join(out, `${tool}.json`)
  writeFileSync(target, JSON.stringify(result, null, 2))
  console.log(target)
}
