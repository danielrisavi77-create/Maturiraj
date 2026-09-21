import test from 'node:test';
import assert from 'node:assert/strict';
import * as providers from '../providers.mjs';
const { checkAuth } = providers;
import { repair } from '../core.mjs';
const runtime = await import('../runtime.mjs').catch(() => ({}));
const release = await import('../release.mjs').catch(() => ({}));

test('subscription preflight rejects API auth even when logged in', async () => {
  await assert.rejects(() => checkAuth({ claude: 'claude' }, 'claude', async () => ({ stdout: JSON.stringify({ loggedIn: true, authMethod: 'api_key', apiProvider: 'firstParty', subscriptionType: 'max' }) })), /subscription/);
  await assert.rejects(() => checkAuth({ codex: 'codex' }, 'codex', async () => ({ stdout: 'Logged in using an API key', stderr: '' })), /subscription/);
});

test('sandbox readiness fails before spending model tokens', async () => {
  assert.equal(typeof providers.checkSandbox, 'function');
  await assert.rejects(() => providers.checkSandbox({ codex: 'codex', repo: 'repo', stateDir: 'state' }, async () => ({ stdout: 'setup failed' })), /sandbox/i);
});
test('two repair rounds maximum', () => {
  const task = { status: 'review', review: {}, checks: {} };
  repair(task, 'first'); assert.equal(task.status, 'implement');
  repair(task, 'second'); assert.equal(task.status, 'implement');
  repair(task, 'third'); assert.equal(task.status, 'blocked');
  assert.equal(task.review, undefined);
});
test('restart blocks an interrupted write without repeating it', () => {
  assert.equal(typeof runtime.reconcileInterrupted, 'function');
  const state = { mode: 'running', inFlight: { taskId: 't', phase: 'implement' }, goal: { tasks: [{ id: 't', status: 'implement' }] } };
  runtime.reconcileInterrupted(state);
  assert.equal(state.mode, 'blocked'); assert.equal(state.goal.tasks[0].status, 'blocked');
  assert.match(state.goal.tasks[0].feedback, /interrupted/i);
});
test('release recovery continues monitoring without redeploying', () => {
  assert.equal(typeof runtime.reconcileInterrupted, 'function');
  const state = { mode: 'running', inFlight: { taskId: 't', phase: 'release' }, goal: { tasks: [{ id: 't', status: 'release', release: { stage: 'promoted', url: 'https://candidate.example', previous: 'prev' } }] } };
  runtime.reconcileInterrupted(state);
  assert.equal(state.goal.tasks[0].status, 'release');
  assert.equal(state.goal.tasks[0].release.stage, 'promoted');
});
test('promotion gate fails closed without verified production configuration', () => {
  assert.equal(typeof release.assertReleaseConfig, 'function');
  assert.throws(() => release.assertReleaseConfig({ release: { enabled: true } }), /release/i);
  assert.throws(() => release.assertReleaseConfig({ release: { enabled: false } }), /release/i);
});
test('completed research is handed to dependencies with bounded context', () => {
  assert.equal(typeof runtime.dependencyContext, 'function');
  const goal = { tasks: [{ id: 'r', status: 'done', expectedSha: 'abc', result: { summary: 'finding', evidence: ['source'] } }] };
  assert.match(runtime.dependencyContext(goal, { dependsOn: ['r'] }), /finding/);
  assert.match(runtime.dependencyContext(goal, { dependsOn: ['r'] }), /abc/);
});
test('retry cannot bypass preparation and baseline', () => {
  assert.equal(typeof runtime.retryPhase, 'function');
  assert.equal(runtime.retryPhase({ kind: 'code', cwd: 'incomplete' }), 'baseline');
  assert.equal(runtime.retryPhase({ kind: 'code', cwd: 'ready', baseline: { test: true, lint: true, build: true } }), 'implement');
});
test('recovered merge is rejected when reviewed head or tree changed', () => {
  assert.equal(typeof release.assertReviewedMerge, 'function');
  assert.throws(() => release.assertReviewedMerge({ commit: 'good' }, { head: { sha: 'bad' } }, 'tree', 'tree'), /review/i);
  assert.throws(() => release.assertReviewedMerge({ commit: 'good' }, { head: { sha: 'good' } }, 'tree', 'changed'), /tree/i);
});
test('production failure is checkpointed before rollback and blocks later work', async () => {
  assert.equal(typeof release.monitorRelease, 'function');
  const task = { status: 'release', release: { stage: 'promoted', previous: 'previous', monitorAfter: 0 } }; const states = [];
  await release.monitorRelease(task, async () => states.push(task.release.stage), {
    smoke: async () => { throw new Error('regression'); },
    rollback: async id => { assert.equal(id, 'previous'); assert.equal(states.at(-1), 'rollback'); }
  });
  assert.equal(task.status, 'blocked'); assert.equal(task.release.stage, 'rolled-back');
});
test('monitoring waits five minutes without redeployment', async () => {
  assert.equal(typeof release.monitorRelease, 'function');
  const task = { status: 'release', release: { stage: 'promoted', monitorAfter: Date.now() + 300000 } }; let rolls = 0;
  await release.monitorRelease(task, async () => {}, { smoke: async () => {}, rollback: async () => { rolls++; } });
  assert.equal(task.status, 'release'); assert.equal(rolls, 0);
  task.release.monitorAfter = 0;
  await release.monitorRelease(task, async () => {}, { smoke: async () => {}, rollback: async () => { rolls++; } });
  assert.equal(task.status, 'done'); assert.equal(rolls, 0);
});
