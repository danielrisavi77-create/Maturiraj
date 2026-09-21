# Grok Bot — Maturiraj workflow

Keep all existing Bot jobs unchanged. Add the following separate skill and routine.

## Routing

Operations repository: the private repository containing this setup document after the controller uploads it with `bootstrap`. Configure the routine for that repository only.
Source repository: the `Source repository` field supplied in each task issue. This public template becomes operational only after it has been uploaded to the configured private repository.

Only handle open issues in the operations repository with BOTH labels `agent:grok` and `status:ready`. Do not process ordinary application issues, old PRs, or tasks from other Bots.

Before claiming work, read the open `agent:control` issue. Proceed only when `active` is true and `expiresAt` is in the future. An already claimed read-only task may finish if the local controller goes offline.

Prefer a GitHub notification/event-triggered routine if the account supports it. Otherwise check every 30 minutes, Europe/Zagreb. If neither trigger is available, report that exact limitation and do not claim autonomous operation is configured. Do not change subscriptions, buy credits, or use AI APIs.

## Per-task procedure

1. Read the issue's taskId, attemptId, sha, allowed paths and acceptance criteria.
2. If you have already posted an `agent-result` for this attemptId, do nothing. If already working on it, do not launch another run.
3. Read the source at the exact SHA, not the latest main. For visual work, use the supplied preview URL and reproduce the specified flow.
4. Research/review only. Do not change application code, database records, deployment settings, billing, or merge PRs.
5. Post one issue comment using the exact `agent-result` fenced JSON template in the issue. Preserve version, taskId, attemptId and sha. Set status to pass, fail or blocked. Include real links, observations or reproduction steps in evidence. Never claim a check that was not performed.
6. Do not change labels or issue state. The local controller owns official task status.
7. No work means stop the run. Do not invent follow-up tasks. Never paste secrets or private user data into a response.

## Initial connection test

Process the open connection-probe issue according to the same protocol. Then report in the mobile conversation which trigger was configured and which GitHub account posts your results. The posting identity must appear in the controller's private `grokAuthors` configuration before its results can be accepted.

GitHub connector access alone does not prove that event-triggered routines are enabled. A successful automatic issue-to-result round trip is the acceptance criterion.
