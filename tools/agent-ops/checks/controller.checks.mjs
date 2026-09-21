import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { StateStore } from '../store.mjs';
import { Controller } from '../runtime.mjs';
import { digest, classifyFailure } from '../core.mjs';
import { GitHub } from '../github.mjs';
import { smoke } from '../release.mjs';

async function setup(t) {
  const dir = await mkdtemp(join(tmpdir(), 'ops-controller-')); t.after(() => rm(dir, { recursive: true, force: true }));
  const store = new StateStore(dir);
  const spec = { version: 1, id: 'pilot', tasks: [{ id: 'research', owner: 'grok', dependsOn: [], kind: 'research' }] };
  const state = { version: 1, mode: 'running', bridgeVerified: true, goalSpec: spec, goalDigest: digest(spec), goal: structuredClone(spec), usage: [] };
  let calls = 0;
  const github = { heartbeat: async () => {}, receive: async () => null, close: async () => {} };
  const controller = new Controller({ requireBridge: true }, store, { github, invoke: async () => { calls++; throw new Error('Unexpected model invocation'); } });
  return { state, controller, store, github, calls: () => calls };
}
test('idle completion is durable and invokes no model on repeated ticks', async t => {
  const x = await setup(t); x.state.goal.tasks[0].status = 'done';
  await x.controller.tick(x.state); await x.controller.tick(x.state);
  assert.equal(x.state.mode, 'complete'); assert.equal((await x.store.read()).mode, 'complete'); assert.equal(x.calls(), 0);
});
test('quota waiting and pause never dispatch work', async t => {
  const x = await setup(t); x.state.mode = 'quota'; x.state.retryAt = Date.now() + 60000;
  await x.controller.tick(x.state); assert.equal(x.calls(), 0);
  await x.store.control('pause'); await x.controller.tick(x.state); assert.equal(x.state.mode, 'paused');
});
test('a valid Grok response completes only the matching task and is persisted', async t => {
  const x = await setup(t); const task = x.state.goal.tasks[0];
  Object.assign(task, { status: 'grok-wait', issue: 1, sentAt: Date.now(), acceptedCommentIds: [] });
  x.github.receive = async () => ({ commentId: 4, status: 'pass', summary: 'Verified', evidence: ['link'] });
  await x.controller.tick(x.state); assert.equal(task.status, 'done');
  assert.deepEqual((await x.store.read()).goal.tasks[0].acceptedCommentIds, [4]);
  await x.controller.tick(x.state); assert.equal(x.state.mode, 'complete'); assert.equal(x.calls(), 0);
});
test('Grok issue creation reconciles existing attempt after a crash', async () => {
  let posts = 0; const github = new GitHub({}); github.assertPrivate = async () => {};
  github.api = async (_path, body) => { if (body) { posts++; return { number: 8 }; } return [{ number: 7, body: '<!-- agent-ops:goal:task:attempt -->' }]; };
  assert.equal(await github.send({ id: 'task', attemptId: 'attempt' }, 'goal'), 7); assert.equal(posts, 0);
});

test('GitHub transport timeout waits for network recovery instead of blocking the queue', async () => {
  const github = new GitHub({ gh: 'gh' }, async () => {
    const error = new Error('Process interrupted or timed out'); error.interrupted = true; error.timedOut = true; throw error;
  });
  await assert.rejects(() => github.receive({ issue: 3 }), error => classifyFailure(error) === 'network' && error.interrupted === false);
  github.signal = AbortSignal.abort();
  await assert.rejects(() => github.receive({ issue: 3 }), error => error.interrupted === true);
});
test('a healthy HTTP status without expected content fails the smoke gate', async () => {
  await assert.rejects(() => smoke('https://example.com', [{ path: '/', contains: 'Application ready' }], async () => ({ status: 200, text: async () => 'An error occurred' })), /expected content/);
  await assert.rejects(() => smoke('https://example.com', [{ path: '//attacker.invalid', contains: 'x' }], async () => { throw new Error('Should not fetch'); }), /origin/);
});
test('stop survives restart until explicit resume', async t => {
  const x = await setup(t); await x.store.control('stop'); await x.controller.tick(x.state);
  assert.equal(x.state.mode, 'stopped'); await x.controller.tick(x.state); assert.equal(x.calls(), 0);
});

test('explicit resume clears a recovered network blocker without dispatching models', async t => {
  const x = await setup(t); x.state.goal = null; x.state.mode = 'network-wait';
  x.state.blocker = 'TLS handshake timeout'; x.state.retryAt = Date.now() + 60000;
  await x.store.control('resume'); await x.controller.tick(x.state);
  assert.equal(x.state.mode, 'idle'); assert.equal(x.state.blocker, undefined);
  assert.equal(x.state.retryAt, undefined); assert.equal(x.calls(), 0);
});
test('the manually requested probe does not establish recurring autonomy', async t => {
  const x = await setup(t); x.state.mode = 'idle'; x.state.bridgeVerified = false;
  x.state.probe = { id: 'grok-connection-probe', status: 'waiting', expectedSha: 'abc', issue: 1, acceptedCommentIds: [] };
  x.github.receive = async () => ({ commentId: 5, status: 'pass', summary: 'checked', evidence: ['source'] });
  await x.controller.tick(x.state);
  assert.equal(x.state.bridgeVerified, false);
  assert.equal(x.state.probe.id, 'grok-routine-probe');
  assert.equal(x.state.probe.status, 'dispatch');
});
