import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const core = await import('../core.mjs').catch(() => ({}));
const store = await import('../store.mjs').catch(() => ({}));
const goal = () => ({ version: 1, id: 'pilot', description: 'Check workflow', acceptance: ['Evidence'], scope: ['tools/'], tasks: [{ id: 'research', owner: 'grok', kind: 'research', description: 'Inspect', acceptance: ['Sources'], files: ['tools/'], dependsOn: [] }] });

test('goal validation rejects traversal, cycles and undeclared scope', () => {
  assert.equal(typeof core.validateGoal, 'function');
  assert.doesNotThrow(() => core.validateGoal(goal()));
  const bad = goal(); bad.tasks[0].files = ['../secret'];
  assert.throws(() => core.validateGoal(bad));
  const cycle = goal(); cycle.tasks[0].dependsOn = ['research'];
  assert.throws(() => core.validateGoal(cycle));
  const outside = goal(); outside.tasks[0].files = ['app/'];
  assert.throws(() => core.validateGoal(outside));
});

test('completed and blocked work never schedules another model call', () => {
  assert.equal(typeof core.nextTask, 'function');
  const g = goal(); g.tasks[0].status = 'done';
  assert.equal(core.nextTask(g), null);
  g.tasks[0].status = 'blocked';
  assert.equal(core.nextTask(g), null);
});

test('result acceptance checks author, attempt, commit and duplicate identity', () => {
  assert.equal(typeof core.acceptResult, 'function');
  const task = { id: 'research', attemptId: 'a1', expectedSha: 'a'.repeat(40), acceptedCommentIds: [] };
  const result = { version: 1, taskId: task.id, attemptId: 'a1', sha: task.expectedSha, status: 'pass', summary: 'Checked', evidence: ['source'] };
  const comment = { id: 12, user: { login: 'owner' }, body: '```agent-result\n' + JSON.stringify(result) + '\n```' };
  assert.equal(core.acceptResult(task, comment, ['owner']).status, 'pass');
  assert.equal(core.acceptResult(task, comment, ['stranger']), null);
  assert.equal(core.acceptResult({ ...task, attemptId: 'a2' }, comment, ['owner']), null);
  assert.equal(core.acceptResult({ ...task, expectedSha: 'b'.repeat(40) }, comment, ['owner']), null);
  assert.equal(core.acceptResult({ ...task, acceptedCommentIds: [12] }, comment, ['owner']), null);
});

test('subscription-only environment removes every provider billing override', () => {
  assert.equal(typeof core.subscriptionEnv, 'function');
  const env = core.subscriptionEnv({ PATH: 'bin', ANTHROPIC_API_KEY: 'secret', OPENAI_API_KEY: 'secret', CODEX_API_KEY: 'secret', ANTHROPIC_BASE_URL: 'proxy', CLAUDE_CODE_USE_BEDROCK: '1', NODE_REPL_TRUSTED_CODE_PATHS: 'parent-runtime', CODEX_THREAD_ID: 'parent', CODEX_HOME: 'auth-home' });
  assert.equal(env.PATH, 'bin');
  assert.equal(env.ANTHROPIC_API_KEY, undefined);
  assert.equal(env.OPENAI_API_KEY, undefined);
  assert.equal(env.ANTHROPIC_BASE_URL, undefined);
  assert.equal(env.CLAUDE_CODE_USE_BEDROCK, undefined);
  assert.equal(env.NODE_REPL_TRUSTED_CODE_PATHS, undefined);
  assert.equal(env.CODEX_THREAD_ID, undefined);
  assert.equal(env.CODEX_HOME, 'auth-home');
});

test('release requires current commit, independent review and all checks', () => {
  assert.equal(typeof core.canRelease, 'function');
  const t = { owner: 'claude', commit: 'abc', checks: { sha: 'abc', test: true, lint: true, build: true }, review: { sha: 'abc', owner: 'codex', status: 'pass' } };
  assert.equal(core.canRelease(t, 'abc'), true);
  assert.equal(core.canRelease(t, 'def'), false);
  assert.equal(core.canRelease({ ...t, review: { ...t.review, owner: 'claude' } }, 'abc'), false);
  assert.equal(core.canRelease({ ...t, checks: { ...t.checks, lint: false } }, 'abc'), false);
});

test('atomic store survives reload and prevents a second controller', async () => {
  assert.equal(typeof store.StateStore, 'function');
  const dir = await mkdtemp(join(tmpdir(), 'agent-ops-check-'));
  try {
    const a = new store.StateStore(dir); const b = new store.StateStore(dir);
    await a.lock();
    await assert.rejects(() => b.lock(), /locked/);
    await a.save({ version: 1, goal: goal() });
    assert.equal((await b.read()).goal.id, 'pilot');
    await a.unlock(); await b.lock(); await b.unlock();
  } finally { await rm(dir, { recursive: true, force: true }); }
});

test('lock recovery refuses orphan worker records even after controller exit', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'agent-ops-orphan-'));
  try {
    const s = new store.StateStore(dir); await mkdir(join(dir, 'children'), { recursive: true });
    await writeFile(join(dir, 'controller.lock'), JSON.stringify({ pid: 2147483647, token: 'old' }));
    await writeFile(join(dir, 'children', 'worker.json'), JSON.stringify({ pid: process.pid, status: 'running' }));
    await assert.rejects(() => s.recoverLock(), /worker|child/i);
  } finally { await rm(dir, { recursive: true, force: true }); }
});
