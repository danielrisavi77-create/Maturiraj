import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { TOOLS, validateTask } from './schema.mjs'

export function prepareTask(task, { repoRoot, workspaceRoot, tools = TOOLS }) {
  validateTask(task)
  if (!Array.isArray(tools) || !tools.length || new Set(tools).size !== tools.length || tools.some(x => !TOOLS.includes(x))) throw new Error('Invalid tools')
  const repo = resolve(repoRoot)
  const workspace = resolve(workspaceRoot)
  const git = (...args) => execFileSync('git', ['-C', repo, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
  const commit = git('rev-parse', '--verify', `${task.baseCommit}^{commit}`)
  if (git('status', '--porcelain')) throw new Error('Base checkout must be clean')
  mkdirSync(workspace, { recursive: true })
  const out = {}
  for (const tool of tools) {
    const branch = `benchmark/${task.id}/${tool}`
    const path = join(workspace, task.id, tool)
    mkdirSync(join(workspace, task.id), { recursive: true })
    execFileSync('git', ['-C', repo, 'worktree', 'add', '-b', branch, path, commit], { stdio: 'pipe' })
    out[tool] = path
  }
  return out
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [taskFile, ...tools] = process.argv.slice(2)
  if (!taskFile || !tools.length) throw new Error('Usage: node prepare.mjs <task.json> <codex|claude|grok>...')
  const root = process.cwd()
  const task = JSON.parse(readFileSync(resolve(taskFile), 'utf8'))
  task.baseCommit = execFileSync('git', ['-C', root, 'rev-parse', '--verify', `${task.baseCommit}^{commit}`], { encoding: 'utf8' }).trim()
  const paths = prepareTask(task, { repoRoot: root, workspaceRoot: join(root, '.worktrees'), tools })
  const dir = join(root, 'scripts/agent-benchmark/runs', task.id)
  mkdirSync(dir, { recursive: true })
  const manifest = join(dir, 'task.json')
  writeFileSync(manifest, JSON.stringify(task, null, 2))
  console.log(JSON.stringify({ manifest, paths }, null, 2))
}
