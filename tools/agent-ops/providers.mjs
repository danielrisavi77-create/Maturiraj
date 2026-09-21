import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { run } from './process.mjs';
import { ensure, subscriptionEnv } from './core.mjs';

export const resultSchema = { type: 'object', additionalProperties: false, required: ['status', 'summary', 'evidence'], properties: { status: { type: 'string', enum: ['pass', 'fail', 'blocked'] }, summary: { type: 'string' }, evidence: { type: 'array', items: { type: 'string' } } } };
const rulesPath = fileURLToPath(new URL('../../docs/agent-workflow/RULES.md', import.meta.url));

function authCommand(executable, args, options) {
  // Native Windows CLIs can leave inherited pipe handles open with asynchronous spawn.
  // This read-only preflight has a separate strict deadline for cold Windows startup.
  const r = spawnSync(executable, args, { env: options.env, windowsHide: true, encoding: 'utf8', timeout: 60000, maxBuffer: 1024 * 1024 });
  if (r.error) throw new Error(`Authentication preflight failed: ${r.error.code}`);
  ensure(r.status === 0, `Authentication preflight exited ${r.status}`);
  return r;
}
export async function checkAuth(config, provider, exec = authCommand) {
  const env = subscriptionEnv();
  if (provider === 'codex') {
    const r = await exec(config.codex, ['login', 'status'], { env, timeoutMs: 60000 });
    ensure(/logged in using chatgpt/i.test(r.stdout + r.stderr), 'Codex is not using a ChatGPT subscription');
    return { provider, method: 'chatgpt' };
  }
  const r = await exec(config.claude, ['auth', 'status'], { env, timeoutMs: 60000 }); const s = JSON.parse(r.stdout);
  ensure(s.loggedIn && s.authMethod === 'claude.ai' && s.apiProvider === 'firstParty' && ['max', 'pro', 'team', 'enterprise'].includes(s.subscriptionType), 'Claude is not using a supported subscription');
  return { provider, method: 'claude.ai', subscription: s.subscriptionType };
}

export async function checkSandbox(config, exec = run, signal) {
  const shell = join(process.env.SystemRoot ?? 'C:/Windows', 'System32', 'WindowsPowerShell', 'v1.0', 'powershell.exe');
  const r = await exec(config.codex, ['sandbox', '-P', ':read-only', '-c', 'windows.sandbox="elevated"', '-C', config.repo, '--', shell, '-NoProfile', '-Command', 'Write-Output agent-ops-sandbox-ready'], { cwd: config.repo, env: subscriptionEnv(), timeoutMs: 60000, registryDir: config.stateDir, signal });
  ensure(r.stdout.trim() === 'agent-ops-sandbox-ready', 'Windows sandbox readiness failed');
  return { status: 'ready' };
}

export async function invoke(config, { provider, task, cwd, phase, prompt, signal, schema = resultSchema }, exec = run) {
  await checkAuth(config, provider, exec === run ? authCommand : exec);
  if (provider === 'codex' && process.platform === 'win32') await checkSandbox({ ...config, repo: cwd }, exec, signal);
  const started = Date.now(); const env = subscriptionEnv();
  const prefix = join(config.stateDir, 'runs', `${task.attemptId}-${phase}`); await mkdir(dirname(prefix), { recursive: true });
  const instructions = await readFile(rulesPath, 'utf8');
  const input = `${instructions}\n\nPHASE: ${phase}\nTASK: ${JSON.stringify({ id: task.id, description: task.description, files: task.files, acceptance: task.acceptance, feedback: task.feedback })}\n${prompt}\nReturn only the structured result requested. Do not launch other agents. Do not commit, push, merge or deploy. Never read .env or credentials.\n`;
  let result; let usage = null; let sessionId = null;
  const telemetry = () => ({ provider, phase, taskId: task.id, elapsedMs: Date.now() - started, usage, sessionId, billingMode: 'subscription', extraUsageCharge: null });
  const captureUsage = output => {
    if (typeof output !== 'string') return;
    if (provider === 'codex') {
      for (const line of output.split('\n')) { try { const event = JSON.parse(line); if (event.usage) usage = event.usage; if (event.thread_id) sessionId = event.thread_id; } catch {} }
    } else {
      try { const data = JSON.parse(output); usage = data.usage ?? usage; sessionId = data.session_id ?? sessionId; } catch {}
    }
  };
  try {
  if (provider === 'codex') {
    await writeFile(`${prefix}.schema.json`, JSON.stringify(schema));
    const args = ['exec', '--ignore-user-config', '-c', 'forced_login_method="chatgpt"', '-c', 'model_reasoning_effort="medium"', '-C', cwd, '-s', phase === 'implement' ? 'workspace-write' : 'read-only', '--ephemeral', '--json', '--output-schema', `${prefix}.schema.json`, '-o', `${prefix}.result.json`, '-'];
    // Workers need repository tools only, not the user's full plugin catalog or nested agents.
    args.splice(1, 0, '--disable', 'plugins', '--disable', 'apps', '--disable', 'multi_agent');
    if (process.platform === 'win32') args.splice(1, 0, '-c', 'windows.sandbox="elevated"');
    if (config.codexModel) args.splice(1, 0, '-m', config.codexModel);
    const r = await exec(config.codex, args, { cwd, env, input, signal, timeoutMs: config.agentTimeoutMs, log: `${prefix}.log`, registryDir: config.stateDir });
    captureUsage(r.stdout);
    result = JSON.parse(await readFile(`${prefix}.result.json`, 'utf8'));
  } else {
    const model = task.complex || task.repairs > 0 ? config.claudeComplexModel : config.claudeModel;
    ensure(model, 'No configured subscription model');
    const args = ['-p', '--model', model, '--output-format', 'json', '--json-schema', JSON.stringify(schema), '--max-turns', '20', '--setting-sources', '', '--strict-mcp-config', '--mcp-config', '{"mcpServers":{}}', '--tools', phase === 'implement' ? 'Read,Edit,Write,Glob,Grep' : 'Read,Glob,Grep', '--permission-mode', phase === 'implement' ? 'acceptEdits' : 'default'];
    const r = await exec(config.claude, args, { cwd, env, input, signal, timeoutMs: config.agentTimeoutMs, log: `${prefix}.log`, registryDir: config.stateDir });
    captureUsage(r.stdout);
    const data = JSON.parse(r.stdout); ensure(!data.is_error, data.result || 'Claude failed');
    ensure(!data.permission_denials?.length, 'Claude reported denied tools; result is incomplete');
    result = data.structured_output ?? JSON.parse(data.result); usage = data.usage ?? null; sessionId = data.session_id ?? null;
  }
  ensure(result && typeof result === 'object', 'Invalid model response');
  if (schema === resultSchema) ensure(['pass', 'fail', 'blocked'].includes(result.status) && typeof result.summary === 'string' && Array.isArray(result.evidence), 'Invalid result contract');
  return { ...result, telemetry: telemetry() };
  } catch (error) {
    captureUsage(error.stdout);
    error.telemetry = telemetry();
    throw error;
  }
}
