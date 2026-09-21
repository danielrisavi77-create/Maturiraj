import { mkdir, readFile, access, writeFile, lstat } from 'node:fs/promises';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { run } from './process.mjs';
import { ensure, safePath, within } from './core.mjs';
import { createHash } from 'node:crypto';
import { parseEnv } from 'node:util';

export async function git(config, args, cwd = config.repo, options = {}) { return (await run(config.git, args, { cwd, timeoutMs: 120000, ...options })).stdout.trim(); }
export async function prepare(config, goal, task) {
  await git(config, ['fetch', 'origin', 'main']);
  task.baseSha = await git(config, ['rev-parse', 'origin/main']);
  task.branch = `agent/${goal.id}/${task.id}`;
  task.cwd = resolve(config.worktreeRoot, goal.id, task.id);
  ensure(!relative(resolve(config.worktreeRoot), task.cwd).startsWith('..'), 'Invalid worktree path');
  await mkdir(resolve(task.cwd, '..'), { recursive: true });
  await git(config, ['worktree', 'add', '-b', task.branch, task.cwd, task.baseSha]);
}
const forbidden = /(^|\/)(\.env[^/]*|\.git|node_modules|\.claude|\.codex|\.github|supabase|migrations|agent-ops)(\/|$)|(^|\/)(AGENTS\.md|CLAUDE\.md|vercel\.json)$/i;
export async function assertScope(config, task) {
  const tracked = await git(config, ['diff', '--name-only', '--no-renames', task.baseSha], task.cwd);
  const untracked = await git(config, ['ls-files', '--others', '--exclude-standard'], task.cwd);
  const files = [...new Set((tracked + '\n' + untracked).split('\n').filter(Boolean))];
  for (const path of files) {
    ensure(safePath(path) && within(path, task.files) && !forbidden.test(path), `Unapproved file change: ${path}`);
    try { ensure(!(await lstat(join(task.cwd, path))).isSymbolicLink(), `Symlink not allowed: ${path}`); } catch (e) { if (e.code !== 'ENOENT') throw e; }
  }
  const modes = await git(config, ['diff', '--raw', task.baseSha], task.cwd);
  ensure(!/120000/.test(modes), 'Symlink changes are not allowed');
  return files;
}
export async function commit(config, task) {
  const files = await assertScope(config, task);
  ensure(files.length, 'No implementation changes');
  await git(config, ['add', '--', ...files], task.cwd);
  await git(config, ['-c', `user.name=${config.gitName}`, '-c', `user.email=${config.gitEmail}`, 'commit', '-m', `agent: ${task.id}`], task.cwd);
  task.commit = await git(config, ['rev-parse', 'HEAD'], task.cwd);
}
export async function npm(config, args, cwd, options = {}) {
  ensure(config.npmCli && isAbsolute(config.npmCli), 'Configure the absolute npm-cli.js path');
  return run(process.execPath, [config.npmCli, ...args], { cwd, timeoutMs: 30 * 60000, registryDir: config.stateDir, ...options });
}
export async function checks(config, task, signal) {
  await assertScope(config, task);
  const hash = createHash('sha256').update(await readFile(join(task.cwd, 'package-lock.json'))).digest('hex');
  const installDir = join(config.stateDir, 'installs'); await mkdir(installDir, { recursive: true });
  const stamp = join(installDir, createHash('sha256').update(task.cwd).digest('hex') + '.txt');
  let installed = false;
  try { installed = await readFile(stamp, 'utf8') === hash; await access(join(task.cwd, 'node_modules', '.package-lock.json')); } catch { installed = false; }
  if (!installed) {
    await npm(config, ['ci', '--no-audit', '--no-fund'], task.cwd, { signal, log: join(config.stateDir, 'runs', `${task.attemptId}-install.log`) });
    await writeFile(stamp, hash);
  }
  // Build credentials go only to deterministic checks, never to model workers or Git.
  const buildEnv = config.buildEnvFile ? { ...process.env, ...parseEnv(await readFile(config.buildEnvFile, 'utf8')) } : process.env;
  const sha = await git(config, ['rev-parse', 'HEAD'], task.cwd);
  const report = { sha, test: false, lint: false, build: false };
  for (const name of ['test', 'lint', 'build']) {
    try { await npm(config, ['run', name], task.cwd, { signal, env: buildEnv, log: join(config.stateDir, 'runs', `${task.attemptId}-${name}.log`) }); report[name] = true; }
    catch (e) { if (e.interrupted) throw e; report[`${name}Error`] = e.message; }
  }
  ensure(sha === await git(config, ['rev-parse', 'HEAD'], task.cwd), 'Commit changed during checks');
  ensure(!(await git(config, ['status', '--porcelain'], task.cwd)), 'Checks changed worktree');
  return report;
}
export async function previewFor(config, task, github) {
  await git(config, ['push', '-u', 'origin', task.branch], task.cwd);
  const deployments = await github.api(`repos/${config.appRepo}/deployments?sha=${task.commit}&per_page=100`);
  for (const d of deployments.filter(x => /preview/i.test(x.environment))) {
    const statuses = await github.api(`repos/${config.appRepo}/deployments/${d.id}/statuses`);
    const s = statuses[0]; if (s?.state === 'success' && s.environment_url) return s.environment_url;
  }
  return null;
}
export async function packageScripts(config) { return JSON.parse(await readFile(join(config.repo, 'package.json'), 'utf8')).scripts; }
