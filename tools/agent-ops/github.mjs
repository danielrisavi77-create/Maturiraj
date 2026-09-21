import { run } from './process.mjs';
import { ensure, acceptResult } from './core.mjs';

export class GitHub {
  constructor(config, exec = run) { this.config = config; this.exec = exec; }
  async api(path, body, paginate = false, method = 'POST') {
    const args = ['api', path];
    if (body) args.push('--method', method, '--input', '-');
    if (paginate) args.push('--paginate', '--slurp');
    let r;
    try { r = await this.exec(this.config.gh, args, { input: body ? JSON.stringify(body) : undefined, env: { ...process.env, GH_PROMPT_DISABLED: '1' }, timeoutMs: 60000, signal: this.signal }); }
    catch (e) {
      // A terminated network request is retryable via the existing issue markers.
      // Explicit stop and an unconfirmed process termination remain interruptions.
      if (e.timedOut && !this.signal?.aborted) { e.message = 'GitHub request timed out (ETIMEDOUT)'; e.interrupted = false; }
      throw e;
    }
    const data = JSON.parse(r.stdout); return paginate ? data.flat() : data;
  }
  async assertPrivate() {
    const repo = await this.api(`repos/${this.config.opsRepo}`);
    ensure(repo.private === true, 'Ops repository must be private');
    return repo;
  }
  async labels() {
    await this.assertPrivate();
    const existing = await this.api(`repos/${this.config.opsRepo}/labels?per_page=100`);
    for (const [name, color] of [['agent:grok', '7057ff'], ['status:ready', '0e8a16'], ['agent:control', '1d76db']]) {
      if (!existing.some(x => x.name === name)) await this.api(`repos/${this.config.opsRepo}/labels`, { name, color });
    }
  }
  async send(task, goalId, extra = '') {
    const assignee = this.config.grokAssignee;
    ensure(!assignee || (typeof assignee === 'string' && this.config.grokAuthors?.some(author => author.toLowerCase() === assignee.toLowerCase())), 'Grok assignee must be a configured trusted result author');
    await this.assertPrivate();
    const marker = `<!-- agent-ops:${goalId}:${task.id}:${task.attemptId} -->`;
    const issues = await this.api(`repos/${this.config.opsRepo}/issues?state=all&labels=agent%3Agrok&per_page=100`, undefined, true);
    const found = issues.find(i => i.body?.includes(marker)); if (found) { await this.assign(found); return found.number; }
    const result = { version: 1, taskId: task.id, attemptId: task.attemptId, sha: task.expectedSha, status: 'pass', summary: 'Replace with your findings', evidence: ['Replace with source links or concrete observations'] };
    const body = `${marker}\n# Grok task\n\nSource repository: ${this.config.appRepo}\nGoal: ${goalId}\nCommit: ${task.expectedSha}\n\n${task.description}\n\nAllowed paths: ${task.files.join(', ')}\nAcceptance:\n${task.acceptance.map(x => '- ' + x).join('\n')}\n\n${extra}\n\nResearch/review only. Do not change code, merge, deploy or expand the goal. Reply on this issue with one fenced JSON result. Use fail or blocked when criteria are unmet. Include actual evidence. Do not claim checks you did not perform. Copy taskId, attemptId and sha exactly:\n\n\`\`\`agent-result\n${JSON.stringify(result, null, 2)}\n\`\`\`\n`;
    const issue = await this.api(`repos/${this.config.opsRepo}/issues`, { title: `[${goalId}/${task.id}] ${task.description.slice(0,110)}`, body, labels: ['agent:grok', 'status:ready'] });
    await this.assign(issue);
    return issue.number;
  }
  async assign(issue) {
    const assignee = this.config.grokAssignee;
    if (!assignee || issue.state === 'closed') return;
    const assigned = item => item.assignees?.some(user => user.login?.toLowerCase() === assignee.toLowerCase());
    if (assigned(issue)) return;
    // Labels and complete task data exist before the event fires. On retry, the
    // server's assignee list prevents reassigning an already delivered attempt.
    const updated = await this.api(`repos/${this.config.opsRepo}/issues/${issue.number}/assignees`, { assignees: [assignee] });
    ensure(assigned(updated), 'GitHub did not confirm the Grok event assignment');
  }
  async receive(task) {
    const comments = await this.api(`repos/${this.config.opsRepo}/issues/${task.issue}/comments?per_page=100`, undefined, true);
    for (const comment of comments) { const r = acceptResult(task, comment, this.config.grokAuthors); if (r) return r; }
    return null;
  }
  async close(number, summary) {
    await this.api(`repos/${this.config.opsRepo}/issues/${number}/comments`, { body: summary });
    await this.api(`repos/${this.config.opsRepo}/issues/${number}`, { state: 'closed', labels: ['agent:grok'] }, false, 'PATCH');
  }
  async heartbeat(active) {
    await this.assertPrivate();
    const marker = '<!-- agent-ops-controller -->';
    const issues = await this.api(`repos/${this.config.opsRepo}/issues?state=open&labels=agent%3Acontrol&per_page=100`);
    const body = `${marker}\n${JSON.stringify({ version: 1, active, expiresAt: new Date(Date.now() + 10 * 60000).toISOString() })}\nOnly take new Grok tasks while active=true and expiresAt is in the future. An already claimed read-only task may finish after the controller goes offline.`;
    const found = issues.find(i => i.body?.includes(marker));
    await this.api(`repos/${this.config.opsRepo}/issues${found ? '/' + found.number : ''}`, found ? { body } : { title: 'Controller availability', body, labels: ['agent:control'] }, false, found ? 'PATCH' : 'POST');
  }
}
