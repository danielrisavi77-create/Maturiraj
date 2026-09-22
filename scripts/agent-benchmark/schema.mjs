import { isAbsolute, normalize, sep } from 'node:path'

export const TOOLS = Object.freeze(['codex', 'claude', 'grok'])
const KINDS = new Set(['code', 'content', 'security'])

export function safeRelativePath(value) {
  if (typeof value !== 'string' || !value || isAbsolute(value) || value.includes('\\')) throw new Error('Invalid path')
  const normalized = normalize(value)
  if (normalized === '.' || normalized === '..' || normalized.startsWith(`..${sep}`) || normalized !== value) throw new Error('Invalid path')
  return value
}

export function validateTask(task) {
  if (!task || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(task.id || '')) throw new Error('Invalid task id')
  if (!KINDS.has(task.kind)) throw new Error('Invalid task kind')
  if (typeof task.baseCommit !== 'string' || !task.baseCommit.trim()) throw new Error('Invalid baseCommit')
  if (typeof task.goal !== 'string' || !task.goal.trim() || task.goal.length > 1000) throw new Error('Invalid goal')
  if (!Array.isArray(task.allowedPaths) || !task.allowedPaths.length) throw new Error('Invalid allowedPaths')
  task.allowedPaths.forEach(safeRelativePath)
  if (!Array.isArray(task.checks) || !task.checks.length || task.checks.some(x => typeof x !== 'string' || !x.trim())) throw new Error('Invalid checks')
  if (!['low', 'medium', 'high'].includes(task.risk)) throw new Error('Invalid risk')
  return task
}
