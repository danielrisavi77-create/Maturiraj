#!/usr/bin/env node
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { StateStore, atomicWrite } from './store.mjs';
import { ensure, validateGoal, digest } from './core.mjs';
import { checkAuth, checkSandbox, invoke } from './providers.mjs';
import { GitHub } from './github.mjs';
import { Controller, retryPhase } from './runtime.mjs';
import { git } from './workspace.mjs';
import { releasePreflight } from './release.mjs';

const args = process.argv.slice(2); const command = args.shift() ?? 'help';
function option(name, fallback) { const i = args.indexOf('--' + name); return i < 0 ? fallback : args[i + 1]; }
const stateDir = resolve(option('state', join(process.env.LOCALAPPDATA ?? join(homedir(), '.local', 'state'), 'MaturirajOrchestrator')));
const store = new StateStore(stateDir); const configPath = join(stateDir, 'config.json');
async function config() { const c = JSON.parse(await readFile(configPath, 'utf8')); ensure(c.version === 1 && c.stateDir === stateDir, 'Invalid config'); return c; }
async function editState(fn) { await store.lock(); try { const s = await store.read(); await fn(s); await store.save(s); return s; } finally { await store.unlock(); } }
function out(value) { process.stdout.write(JSON.stringify(value, null, 2) + '\n'); }

async function main() {
  if (command === 'init') {
    await store.init();
    try { await access(configPath); throw new Error('Already initialized; edit existing config instead'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
    const repo = resolve(option('repo', fileURLToPath(new URL('../../', import.meta.url))));
    const c = { version: 1, stateDir, repo, appRepo: 'danielrisavi77-create/Maturiraj', opsRepo: 'danielrisavi77-create/Maturiraj-agent-ops', worktreeRoot: join(homedir(), 'worktrees', 'Maturiraj-autonomous'),
      codex: option('codex', join(stateDir, 'tools', 'codex-0.154.0', 'node_modules', '@openai', 'codex-win32-x64', 'vendor', 'x86_64-pc-windows-msvc', 'bin', 'codex.exe')),
      claude: option('claude', join(process.env.APPDATA ?? '', 'npm', 'node_modules', '@anthropic-ai', 'claude-code', 'bin', 'claude.exe')),
      gh: option('gh', 'C:/Program Files/GitHub CLI/gh.exe'), git: 'git.exe', npmCli: option('npm-cli', join(dirname(process.execPath), 'node_modules', 'npm', 'bin', 'npm-cli.js')),
      claudeModel: 'sonnet', claudeComplexModel: 'opus', codexModel: null,
      grokAuthors: ['danielrisavi77-create'], grokAssignee: null, gitName: 'Maturiraj automation', gitEmail: 'automation@users.noreply.github.com',
      agentTimeoutMs: 30 * 60000, pollMs: 30000, requireBridge: true, vercelCli: null, buildEnvFile: null,
      release: { enabled: false, projectId: null, orgId: null, productionUrl: null, smoke: [] } };
    ensure(!/dropbox/i.test(c.stateDir) && !/dropbox/i.test(c.worktreeRoot), 'Runtime state must be outside Dropbox');
    await atomicWrite(configPath, c); await editState(s => { s.mode = 'idle'; }); out({ configPath, status: 'initialized' }); return;
  }
  if (command === 'help') {
    console.log('agent-ops: init | doctor | bootstrap | bridge-probe | bridge-status | provider-probe --provider codex|claude | goal --file goal.json | plan --file brief.json | start [--once] | status | pause | resume | stop | recover-lock | retry --task id\nUse --state <directory> to select an isolated controller. Start stays foreground; install-task.ps1 runs it hidden at login.'); return;
  }
  if (command === 'recover-lock') { await store.recoverLock(); out({ recovered: true }); return; }
  if (['pause', 'resume', 'stop'].includes(command)) { await store.control(command); out({ requested: command }); return; }
  if (command === 'status' || command === 'bridge-status') {
    const s = await store.read(); out(command === 'bridge-status' ? { verified: s.bridgeVerified ?? false, probe: s.probe ?? null } : { mode: s.mode, goal: s.goal?.id, blocker: s.blocker, bridgeVerified: s.bridgeVerified ?? false, inFlight: s.inFlight, tasks: s.goal?.tasks.map(t => ({ id: t.id, owner: t.owner, status: t.status, feedback: t.feedback, issue: t.issue, release: t.release?.stage })), providerAttempts: s.usage.length, providerProbes: Object.fromEntries(Object.entries(s.providerProbes ?? {}).map(([p, r]) => [p, { status: r.status, summary: r.summary }])), updatedAt: s.updatedAt }); return;
  }
  const c = await config(); const github = new GitHub(c);
  if (command === 'provider-probe') {
    const provider = option('provider'); ensure(['codex', 'claude'].includes(provider), 'Choose --provider codex or claude');
    await editState(async s => {
      const task = { id: `${provider}-connection-probe`, attemptId: randomUUID(), description: 'Read README.md and identify the framework and development command. Do not edit files.', files: ['README.md'], acceptance: ['Name the framework and development command with file evidence'] };
      const runRecord = { provider, phase: 'probe', taskId: task.id, usage: null, outcome: 'started', at: new Date().toISOString() }; s.usage.push(runRecord); await store.save(s);
      try {
        const result = await invoke(c, { provider, task, cwd: c.repo, phase: 'research', prompt: 'Read-only connection test. Do not run commands or invoke tools other than reading README.md. Return structured pass/fail/blocked with evidence.' });
        Object.assign(runRecord, result.telemetry, { outcome: result.status }); s.providerProbes ??= {}; s.providerProbes[provider] = result;
        out({ provider, status: result.status, summary: result.summary, usage: result.telemetry.usage });
        if (result.status !== 'pass') process.exitCode = 1;
      } catch (e) { runRecord.outcome = 'failed'; runRecord.error = e.message; await store.save(s); throw e; }
    }); return;
  }
  if (command === 'doctor') {
    const report = {};
    for (const p of ['codex', 'claude']) { try { report[p] = await checkAuth(c, p); } catch (e) { report[p] = { error: e.message }; } }
    if (process.platform === 'win32') { try { report.codexSandbox = await checkSandbox(c); } catch (e) { report.codexSandbox = { error: e.message }; } }
    try { const r = await github.assertPrivate(); report.github = { private: r.private, repository: r.full_name }; } catch (e) { report.github = { error: e.message }; }
    try { report.head = await git(c, ['rev-parse', 'HEAD']); await access(c.npmCli); } catch (e) { report.workspace = { error: e.message }; }
    report.grok = { verified: (await store.read()).bridgeVerified ?? false };
    if (c.release.enabled) { try { await releasePreflight(c); report.release = 'verified'; } catch (e) { report.release = { error: e.message }; } } else report.release = 'disabled';
    out(report); return;
  }
  if (command === 'bootstrap') {
    await github.labels();
    const text = await readFile(fileURLToPath(new URL('../../docs/agent-workflow/GROK_SETUP.md', import.meta.url)), 'utf8');
    const endpoint = `repos/${c.opsRepo}/contents/GROK_SETUP.md`;
    let old; try { old = await github.api(endpoint); } catch (e) { if (!/404|Not Found/i.test(e.message)) throw e; }
    const content = Buffer.from(text).toString('base64');
    if (!old || Buffer.from(old.content, 'base64').toString('utf8') !== text) await github.api(endpoint, { message: 'Document Grok task protocol', content, ...(old ? { sha: old.sha } : {}) }, false, 'PUT');
    out({ setup: `https://github.com/${c.opsRepo}/blob/main/GROK_SETUP.md` }); return;
  }
  if (command === 'bridge-probe') {
    await editState(async s => {
      if (s.probe?.status === 'waiting') { out({ issue: `https://github.com/${c.opsRepo}/issues/${s.probe.issue}` }); return; }
      const t = { id: 'grok-connection-probe', attemptId: randomUUID(), expectedSha: await git(c, ['rev-parse', 'origin/main']), description: 'Read the public Maturiraj README at the exact commit and identify its framework and documented development command. Do not modify files.', files: ['README.md'], acceptance: ['Name the documented framework', 'Name the development command', 'Link to the exact README commit'], acceptedCommentIds: [] };
      t.issue = await github.send(t, 'connection-probe'); t.status = 'waiting'; s.probe = t;
      await github.heartbeat(true); out({ issue: `https://github.com/${c.opsRepo}/issues/${t.issue}`, next: 'Start the controller to keep the probe available and collect its response.' });
    }); return;
  }
  if (command === 'goal') {
    const goal = validateGoal(JSON.parse(await readFile(resolve(option('file', 'goal.json')), 'utf8')));
    // Runtime fields are never accepted from imported plans.
    const spec = { version: 1, id: goal.id, description: goal.description, acceptance: goal.acceptance, scope: goal.scope, tasks: goal.tasks.map(t => ({ id: t.id, owner: t.owner, kind: t.kind, description: t.description, acceptance: t.acceptance, files: t.files, dependsOn: t.dependsOn, complex: t.complex === true, ...(t.smokePaths ? { smokePaths: t.smokePaths } : {}) })) };
    await editState(async s => {
      ensure(!s.goal || s.mode === 'complete', 'Finish the active goal before replacing it');
      if (s.goal) {
        ensure(s.goal.id !== spec.id, 'Use a new unique goal id');
        const archive = join(stateDir, 'goals'); await mkdir(archive, { recursive: true });
        await atomicWrite(join(archive, `${s.goal.id}-${Date.now()}.json`), { goal: s.goal, spec: s.goalSpec, completedAt: s.updatedAt });
      }
      s.goalSpec = spec; s.goalDigest = digest(spec); s.goal = structuredClone(spec); s.goal.tasks.forEach(t => { t.status = 'pending'; }); s.mode = 'running'; delete s.blocker;
    });
    out({ goal: spec.id, tasks: spec.tasks.length }); return;
  }
  if (command === 'plan') {
    const brief = JSON.parse(await readFile(resolve(option('file', 'brief.json')), 'utf8'));
    ensure(brief.id && brief.description && brief.scope?.length && brief.acceptance?.length, 'Brief needs id, description, scope, acceptance');
    await store.lock();
    try {
      const template = JSON.parse(await readFile(fileURLToPath(new URL('./goal.example.json', import.meta.url)), 'utf8'));
      const task = { id: 'plan', attemptId: randomUUID(), description: brief.description, files: brief.scope, acceptance: brief.acceptance };
      const schema = JSON.parse(await readFile(fileURLToPath(new URL('./goal.schema.json', import.meta.url)), 'utf8'));
      const s = await store.read(); const record = { provider: 'codex', phase: 'plan', taskId: 'plan', outcome: 'started', usage: null }; s.usage.push(record); await store.save(s);
      const response = await invoke(c, { provider: 'codex', task, cwd: c.repo, phase: 'plan', schema, prompt: `Produce the smallest ordered task plan. Use only this approved scope and these criteria: ${JSON.stringify(brief)}. Shape example: ${JSON.stringify(template)}. Use Claude for implementation, Grok only for research; Codex may handle tiny edits. Do not execute the plan.` });
      Object.assign(record, response.telemetry, { outcome: 'returned' }); await store.save(s);
      delete response.telemetry; ensure(response.id === brief.id && digest(response.scope) === digest(brief.scope) && digest(response.acceptance) === digest(brief.acceptance), 'Planner changed approved id, scope or acceptance'); validateGoal(response);
      const path = join(stateDir, `${brief.id}.goal.json`); await atomicWrite(path, response); out({ plan: path, next: 'goal --file <plan>, then start' });
    } finally { await store.unlock(); } return;
  }
  if (command === 'retry') {
    await editState(s => {
      const t = s.goal?.tasks.find(x => x.id === option('task')); ensure(t?.status === 'blocked', 'Task is not blocked');
      ensure(!t.release, 'Release interruption requires deployment reconciliation, not task retry');
      ensure((t.repairs ?? 0) < 2, 'Repair limit exhausted'); t.repairs = (t.repairs ?? 0) + 1;
      t.status = retryPhase(t);
      t.attemptId = randomUUID(); delete t.review; delete t.visual; delete t.checks; s.mode = 'running'; delete s.blocker;
    }); out({ status: 'retry scheduled' }); return;
  }
  if (command === 'start') { const s = await new Controller(c, store).run({ once: args.includes('--once') }); out({ mode: s.mode, goal: s.goal?.id, bridgeVerified: s.bridgeVerified ?? false, blocker: s.blocker }); return; }
  throw new Error(`Unknown command: ${command}`);
}
main().catch(e => { process.stderr.write(e.message + '\n'); process.exitCode = 1; });
