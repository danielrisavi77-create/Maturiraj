import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ensure, canRelease } from './core.mjs';
import { run } from './process.mjs';
import { git, checks } from './workspace.mjs';

export function assertReleaseConfig(config) {
  const r = config.release;
  ensure(r?.enabled && config.vercelCli && r.projectId && r.orgId && /^https:\/\//.test(r.productionUrl ?? ''), 'Production release disabled or missing verified release configuration');
  ensure(Array.isArray(r.smoke) && r.smoke.length && r.smoke.every(x => typeof x.path === 'string' && x.path.startsWith('/') && !x.path.startsWith('//') && typeof x.contains === 'string' && x.contains.length > 0), 'Production release needs explicit smoke assertions');
}
export function assertReviewedMerge(task, pr, reviewedTree, mergedTree) {
  ensure(pr.head.sha === task.commit, 'Merged PR differs from reviewed head');
  ensure(reviewedTree === mergedTree, 'Merged tree differs from reviewed tree; independent review required');
}
export async function vercel(config, args, cwd = config.repo, signal) {
  ensure(config.vercelCli, 'Vercel CLI not configured');
  return run(process.execPath, [config.vercelCli, ...args], { cwd, env: { ...process.env, VERCEL_ORG_ID: config.release.orgId, VERCEL_PROJECT_ID: config.release.projectId, NO_COLOR: '1' }, signal, timeoutMs: 30 * 60000 });
}
export async function releasePreflight(config) {
  assertReleaseConfig(config);
  const response = await vercel(config, ['api', `/v9/projects/${config.release.projectId}?teamId=${config.release.orgId}`]);
  const p = JSON.parse(response.stdout);
  ensure(p.id === config.release.projectId && p.accountId === config.release.orgId, 'Vercel release project mismatch');
  ensure(p.autoAssignCustomDomains === false, 'Vercel auto-assign production domains must be disabled before autonomous merging');
  return p;
}
export async function smoke(base, assertions, fetcher = fetch) {
  for (const a of assertions) {
    const url = new URL(a.path, base); ensure(url.origin === new URL(base).origin, 'Smoke URL must stay on deployment origin');
    const r = await fetcher(url, { redirect: 'manual', signal: AbortSignal.timeout(30000) });
    ensure(r.status === (a.status ?? 200), `Smoke ${url.pathname}: HTTP ${r.status}`);
    const body = await r.text(); ensure(body.includes(a.contains), `Smoke ${url.pathname}: expected content missing`);
  }
}
export async function monitorRelease(task, save, adapters) {
  const r = task.release;
  if (r.stage === 'promoted') {
    try { await adapters.smoke(); }
    catch (e) { r.stage = 'rollback'; r.failure = e.message; await save(); }
    if (r.stage === 'promoted' && Date.now() >= r.monitorAfter) { r.stage = 'complete'; task.status = 'done'; await save(); }
  }
  if (r.stage === 'rollback') {
    await adapters.rollback(r.previous);
    r.stage = 'rolled-back'; task.status = 'blocked'; task.feedback = `Production regression; rolled back: ${r.failure}`; await save();
  }
}
async function productionAlias(config) {
  return JSON.parse((await vercel(config, ['api', `/v4/aliases/${new URL(config.release.productionUrl).hostname}?teamId=${config.release.orgId}`])).stdout);
}
export async function releaseStep(config, task, github, save, signal) {
  await releasePreflight(config);
  ensure((task.smokePaths ?? []).every(path => config.release.smoke.some(s => s.path === path)), 'Release smoke checks must cover every changed UI path');
  const r = task.release ??= { stage: 'initial' };
  if (r.stage === 'initial') {
    ensure(canRelease(task, task.commit), 'Unverified task cannot be merged');
    await git(config, ['fetch', 'origin', 'main']);
    ensure(await git(config, ['rev-parse', 'origin/main']) === task.baseSha, 'Main changed since implementation: rebase and re-review required');
    await git(config, ['push', '-u', 'origin', task.branch], task.cwd);
    const prs = await github.api(`repos/${config.appRepo}/pulls?state=all&head=${encodeURIComponent(config.appRepo.split('/')[0] + ':' + task.branch)}`);
    const pr = prs[0] ?? await github.api(`repos/${config.appRepo}/pulls`, { title: `Verified change: ${task.id}`, head: task.branch, base: 'main', body: 'Automated change from an approved goal. Tests, lint, build and independent review are recorded for this commit. Private task details remain in the operations repository.' });
    ensure(pr.head.sha === task.commit, 'PR head changed after review');
    r.pr = pr.number; r.stage = 'merging'; await save();
  }
  if (r.stage === 'merging') {
    let pr = await github.api(`repos/${config.appRepo}/pulls/${r.pr}`);
    ensure(pr.head.sha === task.commit, 'PR changed after review');
    if (!pr.merged) {
      ensure(pr.head.sha === task.commit && pr.base.sha === task.baseSha, 'PR changed before merge');
      await github.api(`repos/${config.appRepo}/pulls/${r.pr}/merge`, { sha: task.commit, merge_method: 'squash' }, false, 'PUT');
      pr = await github.api(`repos/${config.appRepo}/pulls/${r.pr}`);
    }
    ensure(pr.merged && pr.merge_commit_sha, 'Merge was not confirmed');
    await git(config, ['fetch', 'origin', 'main']);
    assertReviewedMerge(task, pr, await git(config, ['rev-parse', `${task.commit}^{tree}`]), await git(config, ['rev-parse', `${pr.merge_commit_sha}^{tree}`]));
    r.sha = pr.merge_commit_sha; r.stage = 'merged'; await save();
  }
  if (r.stage === 'merged') {
    await git(config, ['fetch', 'origin', 'main']);
    ensure(await git(config, ['rev-parse', 'origin/main']) === r.sha, 'Main changed before release');
    // Dedicated immutable release worktree. Existing directory after crash is inspected, not reset.
    r.cwd ??= join(config.worktreeRoot, 'releases', r.sha);
    try { await git(config, ['rev-parse', 'HEAD'], r.cwd); }
    catch { await mkdir(join(config.worktreeRoot, 'releases'), { recursive: true }); await git(config, ['worktree', 'add', '--detach', r.cwd, r.sha]); }
    ensure(await git(config, ['rev-parse', 'HEAD'], r.cwd) === r.sha, 'Release checkout mismatch');
    const report = await checks(config, { ...task, cwd: r.cwd, baseSha: r.sha }, signal);
    ensure(['test', 'lint', 'build'].every(k => report[k]), 'Merged version failed checks');
    r.checks = report;
    const alias = await productionAlias(config);
    ensure(alias.deployment?.id, 'Cannot identify current deployment for rollback');
    r.previous = alias.deployment.id;
    await mkdir(join(r.cwd, '.vercel'), { recursive: true });
    await writeFile(join(r.cwd, '.vercel', 'project.json'), JSON.stringify({ projectId: config.release.projectId, orgId: config.release.orgId }));
    r.stage = 'deploying'; await save();
    const deployed = await vercel(config, ['deploy', '--prod', '--skip-domain', '--yes', '--meta', `agentCommit=${r.sha}`], r.cwd, signal);
    const url = deployed.stdout.trim(); ensure(/^https:\/\/[^\s]+$/.test(url), 'Invalid deployment URL');
    r.url = url; r.stage = 'candidate'; await save();
  }
  if (r.stage === 'deploying') throw new Error('Interrupted deployment: locate candidate and reconcile before retrying');
  if (r.stage === 'candidate') {
    const deployment = JSON.parse((await vercel(config, ['api', `/v13/deployments/${new URL(r.url).hostname}?teamId=${config.release.orgId}`])).stdout);
    ensure(deployment.projectId === config.release.projectId && deployment.meta?.agentCommit === r.sha && deployment.readyState === 'READY', 'Candidate identity or build status mismatch');
    r.deploymentId = deployment.id;
    await smoke(r.url, config.release.smoke);
    r.stage = 'promoting'; await save();
  }
  if (r.stage === 'promoting') {
    await git(config, ['fetch', 'origin', 'main']);
    ensure(await git(config, ['rev-parse', 'origin/main']) === r.sha, 'Main changed before promotion');
    const alias = await productionAlias(config);
    ensure([r.previous, r.deploymentId].includes(alias.deployment?.id), 'Another release changed production; refusing to replace it');
    // Promoting the same known deployment is idempotent; never create another deployment here.
    await vercel(config, ['promote', r.url, '--yes'], r.cwd, signal);
    r.stage = 'promoted'; r.monitorAfter = Date.now() + 300000; await save();
  }
  await monitorRelease(task, save, {
    smoke: async () => { ensure((await productionAlias(config)).deployment?.id === r.deploymentId, 'Production changed during monitoring'); await smoke(config.release.productionUrl, config.release.smoke); },
    rollback: async previous => {
      const current = (await productionAlias(config)).deployment?.id;
      ensure(current === r.deploymentId || current === previous, 'Production belongs to another release; automatic rollback blocked');
      if (current !== previous) await vercel(config, ['rollback', previous, '--yes'], r.cwd, signal);
    }
  });
}
