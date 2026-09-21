import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { invoke } from '../providers.mjs';
import { Controller } from '../runtime.mjs';
import { StateStore } from '../store.mjs';
import { run } from '../process.mjs';

for (const nonzero of [false, true]) {
  test(`failed Claude ${nonzero ? 'process' : 'result'} retains reported usage in durable telemetry`, async () => {
    const stateDir = await mkdtemp(join(tmpdir(), 'agent-usage-'));
    const usage = { input_tokens: 17, output_tokens: 29, cache_read_input_tokens: 101 };
    const config = { stateDir, claude: 'fixture', claudeModel: 'sonnet', claudeComplexModel: 'opus' };
    const task = { id: 'fixture', attemptId: 'usage', files: ['README.md'], acceptance: ['Report'], dependsOn: [] };
    const exec = async (_command, args) => {
      if (args[0] === 'auth') return { stdout: JSON.stringify({ loggedIn: true, authMethod: 'claude.ai', apiProvider: 'firstParty', subscriptionType: 'max' }) };
      const stdout = JSON.stringify({ is_error: true, result: 'maximum turns reached', usage, session_id: 'fixture-session' });
      if (nonzero) { const error = new Error('process failed'); error.stdout = stdout; error.stderr = 'failure'; throw error; }
      return { stdout };
    };
    const store = new StateStore(stateDir);
    const state = { version: 1, mode: 'running', goal: { tasks: [task] }, usage: [] };
    const controller = new Controller(config, store, { github: {}, invoke: (c, request) => invoke(c, request, exec) });
    await assert.rejects(controller.model(state, task, 'claude', 'research', 'Read only'));
    await store.save(state);
    const record = (await store.read()).usage[0];
    assert.equal(record.outcome, 'failed');
    assert.deepEqual(record.usage, usage);
    assert.equal(record.sessionId, 'fixture-session');
    assert.equal(record.billingMode, 'subscription');
    assert.equal(typeof record.elapsedMs, 'number');
  });
}

test('Codex usage survives a missing structured result file', async () => {
  const stateDir = await mkdtemp(join(tmpdir(), 'agent-codex-usage-'));
  const usage = { input_tokens: 13, output_tokens: 21 };
  const exec = async (_command, args) => {
    if (args[0] === 'login') return { stdout: 'Logged in using ChatGPT', stderr: '' };
    if (args[0] === 'sandbox') return { stdout: 'agent-ops-sandbox-ready' };
    return { stdout: JSON.stringify({ thread_id: 'fixture-thread' }) + '\n' + JSON.stringify({ usage }) };
  };
  await assert.rejects(invoke({ codex: 'fixture', stateDir }, { provider: 'codex', task: { id: 'fixture', attemptId: 'missing' }, cwd: stateDir, phase: 'research', prompt: 'Read only' }, exec), error => {
    assert.deepEqual(error.telemetry.usage, usage);
    assert.equal(error.telemetry.sessionId, 'fixture-thread');
    return true;
  });
});

test('nonzero subprocess keeps stdout separate from diagnostic stderr', async () => {
  await assert.rejects(run(process.execPath, ['-e', 'process.stdout.write(JSON.stringify({usage:{input_tokens:7}}));process.stderr.write("diagnostic");process.exitCode=1;']), error => {
    assert.equal(JSON.parse(error.stdout).usage.input_tokens, 7);
    assert.equal(error.stderr, 'diagnostic');
    return true;
  });
});
