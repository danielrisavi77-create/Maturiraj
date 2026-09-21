import { createHash } from 'node:crypto';

export const VERSION = 1;
export function ensure(value, message) { if (!value) throw new Error(message); }
export function safePath(value) {
  return typeof value === 'string' && value.length > 0 && !value.startsWith('/') && !/[\\:\x00-\x1f]/.test(value)
    && !value.split('/').some(p => p === '..' || p === '.') && !/(^|\/)\.env(?:\.|$)/i.test(value)
    && !/(^|\/)(\.git|node_modules)(\/|$)/.test(value);
}
export function within(file, scopes) { return scopes.some(s => file === s || (s.endsWith('/') && file.startsWith(s))); }
export function validateGoal(goal) {
  ensure(goal?.version === VERSION, 'Unsupported goal version');
  ensure(/^[a-z0-9][a-z0-9-]{0,63}$/.test(goal.id), 'Invalid goal id');
  ensure(typeof goal.description === 'string' && goal.description.trim(), 'Goal needs description');
  ensure(Array.isArray(goal.acceptance) && goal.acceptance.length && goal.acceptance.every(x => typeof x === 'string' && x.trim()), 'Goal needs acceptance criteria');
  ensure(Array.isArray(goal.scope) && goal.scope.length && goal.scope.every(safePath), 'Invalid scope');
  ensure(Array.isArray(goal.tasks) && goal.tasks.length > 0 && goal.tasks.length <= 50, 'Goal needs 1–50 tasks');
  const ids = new Set();
  for (const t of goal.tasks) {
    ensure(/^[a-z0-9][a-z0-9-]{0,63}$/.test(t.id) && !ids.has(t.id), 'Invalid or duplicate task id'); ids.add(t.id);
    ensure(['codex', 'claude', 'grok'].includes(t.owner), 'Invalid task owner');
    ensure(['code', 'ui', 'research'].includes(t.kind), 'Invalid task kind');
    ensure(t.owner !== 'grok' || t.kind === 'research', 'Grok cannot write application code');
    ensure(typeof t.description === 'string' && t.description.trim(), 'Task needs description');
    ensure(Array.isArray(t.acceptance) && t.acceptance.length && t.acceptance.every(x => typeof x === 'string' && x.trim()), 'Task needs acceptance');
    ensure(Array.isArray(t.files) && t.files.length && t.files.every(p => safePath(p) && within(p, goal.scope)), 'Task files outside approved scope');
    ensure(Array.isArray(t.dependsOn), 'Task needs dependsOn');
    if (t.kind === 'ui') ensure(Array.isArray(t.smokePaths) && t.smokePaths.length > 0, 'UI task needs smokePaths');
    for (const p of t.smokePaths ?? []) ensure(typeof p === 'string' && p.startsWith('/') && !p.startsWith('//') && !/[\r\n\\]/.test(p), 'Invalid smoke path');
  }
  const visiting = new Set(); const done = new Set();
  function visit(id) {
    ensure(ids.has(id), 'Unknown dependency'); ensure(!visiting.has(id), 'Dependency cycle');
    if (done.has(id)) return;
    visiting.add(id); goal.tasks.find(t => t.id === id).dependsOn.forEach(visit); visiting.delete(id); done.add(id);
  }
  ids.forEach(visit);
  return goal;
}
export function nextTask(goal) {
  return goal.tasks.find(t => (t.status ?? 'pending') === 'pending' && t.dependsOn.every(id => goal.tasks.find(x => x.id === id)?.status === 'done')) ?? null;
}
export function acceptResult(task, comment, authors) {
  if (!authors.includes(comment.user?.login) || task.acceptedCommentIds?.includes(comment.id)) return null;
  const match = comment.body?.match(/```agent-result\s*\n([\s\S]*?)\n```/);
  if (!match) return null;
  let r; try { r = JSON.parse(match[1]); } catch { return null; }
  if (r.version !== VERSION || r.taskId !== task.id || r.attemptId !== task.attemptId || r.sha !== task.expectedSha) return null;
  if (!['pass', 'fail', 'blocked'].includes(r.status) || typeof r.summary !== 'string' || !r.summary.trim() || r.summary.length > 12000) return null;
  if (!Array.isArray(r.evidence) || !r.evidence.length || !r.evidence.every(x => typeof x === 'string' && x.length <= 4000)) return null;
  return { version: VERSION, taskId: r.taskId, attemptId: r.attemptId, sha: r.sha, status: r.status, summary: r.summary, evidence: r.evidence, commentId: comment.id };
}
export function subscriptionEnv(source = process.env) {
  const env = { ...source };
  for (const key of Object.keys(env)) if (/^(OPENAI_|ANTHROPIC_|CODEX_API_KEY$|CODEX_ACCESS_TOKEN$|CLAUDE_CODE_USE_|CLAUDE_CODE_OAUTH_TOKEN$|CLAUDECODE$)/i.test(key)) delete env[key];
  // Independent CLI workers must not inherit this IDE session's runtime roots or identity.
  // In particular, stale NODE_REPL paths can make Windows sandbox setup fail before any tool runs.
  for (const key of Object.keys(env)) if (/^(NODE_REPL_|ELECTRON_RUN_AS_NODE$|CODEX_(THREAD_ID|SESSION_ID|INTERNAL_ORIGINATOR_OVERRIDE|PERMISSION_PROFILE|VERSION)$)/i.test(key)) delete env[key];
  env.GH_PROMPT_DISABLED = '1'; env.CI = '1';
  return env;
}
export function canRelease(t, sha) {
  return Boolean(t.commit === sha && t.checks?.sha === sha && ['test', 'lint', 'build'].every(k => t.checks[k] === true)
    && t.review?.sha === sha && t.review.status === 'pass' && t.review.owner !== t.owner
    && (t.kind !== 'ui' || (t.visual?.sha === sha && t.visual.status === 'pass')));
}
export function digest(value) { return createHash('sha256').update(JSON.stringify(value)).digest('hex'); }
export function repair(task, reason) {
  task.repairs = (task.repairs ?? 0) + 1; task.feedback = reason;
  delete task.review; delete task.visual; delete task.checks;
  task.status = task.repairs > 2 ? 'blocked' : 'implement';
}
export function classifyFailure(error) {
  const text = `${error.message ?? ''}\n${error.output ?? ''}`;
  if (/usage limit|rate.?limit|quota|limit reached|out of.*usage|hit your limit|too many requests|429/i.test(text)) return 'quota';
  if (/not logged|authentication|unauthorized|login required|401/i.test(text)) return 'authentication';
  if (/TLS handshake timeout|ETIMEDOUT|ECONNRESET|ENOTFOUND|network is unreachable|connection reset|502|503|504/i.test(text)) return 'network';
  return 'error';
}
