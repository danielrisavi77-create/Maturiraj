import test from 'node:test';
import assert from 'node:assert/strict';
import { GitHub } from '../github.mjs';

const task = { id: 'probe', attemptId: 'attempt', expectedSha: 'abc', description: 'Read README', files: ['README.md'], acceptance: ['Report evidence'] };
function fixture({ loseAssignmentResponse = false, rejectAssignment = false } = {}) {
  const config = { opsRepo: 'owner/ops', appRepo: 'owner/app', grokAuthors: ['owner'], grokAssignee: 'owner' };
  const github = new GitHub(config); let issue; let creates = 0; let assignments = 0;
  github.assertPrivate = async () => {};
  github.api = async (path, body) => {
    if (!body) return issue ? [structuredClone(issue)] : [];
    if (path.endsWith('/assignees')) {
      assignments++;
      assert.equal(issue.state, 'open');
      assert.deepEqual(issue.labels, ['agent:grok', 'status:ready']);
      if (!rejectAssignment) issue.assignees = body.assignees.map(login => ({ login }));
      if (loseAssignmentResponse) { loseAssignmentResponse = false; throw new Error('ETIMEDOUT'); }
      return structuredClone(issue);
    }
    creates++;
    issue = { number: 5, state: 'open', assignees: [], ...body };
    return structuredClone(issue);
  };
  return { github, config, counts: () => ({ creates, assignments }), issue: () => issue };
}

test('event delivery assigns a fully formed ready issue and reconciles a lost assignment response', async () => {
  const x = fixture({ loseAssignmentResponse: true });
  await assert.rejects(() => x.github.send(task, 'goal'), /ETIMEDOUT/);
  assert.equal(await x.github.send(task, 'goal'), 5);
  assert.deepEqual(x.counts(), { creates: 1, assignments: 1 });
  assert.equal(x.issue().assignees[0].login, 'owner');
});

test('unconfigured event delivery preserves existing polling behavior', async () => {
  const x = fixture(); delete x.config.grokAssignee;
  assert.equal(await x.github.send(task, 'goal'), 5);
  assert.deepEqual(x.counts(), { creates: 1, assignments: 0 });
});

test('event delivery rejects an untrusted recipient before creating work', async () => {
  const x = fixture(); x.config.grokAssignee = 'unrelated-user';
  await assert.rejects(() => x.github.send(task, 'goal'), /assignee/i);
  assert.deepEqual(x.counts(), { creates: 0, assignments: 0 });
});

test('silently ignored assignment does not count as event dispatch', async () => {
  const x = fixture({ rejectAssignment: true });
  await assert.rejects(() => x.github.send(task, 'goal'), /assignment/i);
  assert.deepEqual(x.counts(), { creates: 1, assignments: 1 });
});
