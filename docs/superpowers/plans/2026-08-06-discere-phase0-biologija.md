# Discere Phase 0 + Biologija Pilot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the reusable Discere exam foundation and ship the complete official Biologija first-session 2026 exam through it as the first new subject.

**Architecture:** Keep the four existing active simulators intact. Add a canonical Discere subject registry, a versioned exam schema/validator, a generic renderer family, and an explicit loader registry for new subjects. Biologija 2026 is normalized from the official NCVVO package into `content/discere/bio/**`, validated deterministically, independently checked against the official answer material, and only then marked active in the Discere hub.

**Tech Stack:** Next.js 16.1.7 App Router, React 19.2.3, Vitest 4.1.4, React Testing Library 16.3.2, happy-dom 20.8.9, existing Supabase progress helpers, plain JavaScript/ES modules unless the touched area is already TypeScript.

## Global Constraints

- Do not rewrite Hrvatski, Matematika, Engleski or Sociologija as part of this plan.
- Official NCVVO exam content remains distinguishable from Maturiraj-authored explanations and analytics.
- Do not guess an answer when the official key/rubric is ambiguous or unavailable; record a QA issue instead.
- Every published exam must pass the deterministic validator with zero errors.
- Every confirmed content defect found during QA must become either a validator/test regression or an explicit documented non-deterministic QA case.
- Use the existing Vitest setup; do not add Jest or a second test runner.
- No new production behavior is written before a failing test for that behavior.
- Do not commit downloaded NCVVO ZIP/PDF source packages unless source terms and repository policy explicitly require it; commit normalized content, permitted assets, source metadata and QA records.
- The current NCVVO page states that exam materials may be used only free of charge for student preparation; archive availability and paid Maturiraj-added features must remain separate concerns.

---

## File Structure Locked by This Plan

```text
lib/discere/
  subject-registry.js       # canonical Discere subject metadata
  exam-schema.js            # schema constants + deterministic validator
  scoring.js                # normalized answer scoring + result payload
  content-loader.js         # explicit subject/exam loader registry

components/discere/common/
  GenericSubjectApp.jsx     # subject hub -> exam runner state
  SubjectExamHub.jsx        # exam/session selector
  ExamShell.jsx             # timer, nav, flags, submit, result
  QuestionRenderer.jsx      # dispatch by canonical question type
  question-renderers/
    ChoiceQuestion.jsx
    TextQuestion.jsx
    MatchingQuestion.jsx
    OrderingQuestion.jsx
    TrueFalseQuestion.jsx
    EssayQuestion.jsx
    GroupQuestion.jsx
    MediaQuestion.jsx

content/discere/bio/
  index.json                # Biology exam metadata
  loaders.js                # explicit imports for Biology exam modules
  source-manifest.json      # official NCVVO provenance
  exams/
    2026_ljeto.mjs          # normalized 2026 first-session exam
  assets/
    2026_ljeto/             # only assets needed by normalized questions
  qa/
    2026_ljeto.json         # independent verification ledger

app/discere/[subject]/
  page.jsx                  # generic route for new canonical subjects

scripts/
  discere-validate.mjs      # CLI validation entry point

__tests__/discere/
  subject-registry.test.js
  exam-schema.test.js
  scoring.test.js
  question-renderer.test.jsx
  exam-shell.test.jsx
  content-loader.test.js
  biologija-2026.test.js
```

Existing static routes such as `/discere/matematika`, `/discere/hrvatski/simulator`, `/discere/engleski/simulator` and `/discere/sociologija` remain authoritative and take precedence over the generic dynamic route.

---

### Task 1: Canonical Discere Subject Registry

**Files:**
- Create: `lib/discere/subject-registry.js`
- Create: `__tests__/discere/subject-registry.test.js`
- Modify: `app/discere/page.js`

**Interfaces:**
- Produces: `DISCERE_SUBJECTS`, `getDiscereSubject(idOrSlug)`, `getDiscereGroups()`.
- `DISCERE_SUBJECTS` item shape: `{ id, slug, name, sym, color, group, status, renderer, levels, route }`.
- Status values: `active | qa | soon | archived`.
- Renderer values: `legacy | generic | language | math | media`.

- [ ] **Step 1: Write the failing registry tests**

```js
import { describe, expect, it } from 'vitest';
import {
  DISCERE_SUBJECTS,
  getDiscereSubject,
  getDiscereGroups,
} from '@/lib/discere/subject-registry';

describe('Discere subject registry', () => {
  it('contains Logika and does not contain obsolete Russian entry', () => {
    expect(getDiscereSubject('log')?.name).toBe('Logika');
    expect(DISCERE_SUBJECTS.some((s) => s.name === 'Ruski jezik')).toBe(false);
  });

  it('preserves current production routes', () => {
    expect(getDiscereSubject('hrv').route).toBe('/discere/hrvatski/simulator');
    expect(getDiscereSubject('mat').route).toBe('/discere/matematika');
    expect(getDiscereSubject('eng').route).toBe('/discere/engleski/simulator');
    expect(getDiscereSubject('soc').route).toBe('/discere/sociologija');
  });

  it('resolves by slug and groups deterministically', () => {
    expect(getDiscereSubject('biologija')?.id).toBe('bio');
    expect(getDiscereGroups()).toContain('Prirodoslovno');
  });
});
```

- [ ] **Step 2: Run the test and confirm RED**

Run:
```bash
npm test -- __tests__/discere/subject-registry.test.js
```
Expected: FAIL because `@/lib/discere/subject-registry` does not exist.

- [ ] **Step 3: Implement the registry**

Create all current official Discere subjects with stable ids. Use the ids already used by `lib/data/subjects.js` where possible: `hrv, mat, eng, nje, fra, tal, spn, fiz, kem, bio, inf, geo, pov, psi, soc, fil, log, pig, vje, eti, gla, lik, lat, grk`.

Current active legacy subjects:
```js
{ id:'hrv', slug:'hrvatski', name:'Hrvatski jezik', status:'active', renderer:'legacy', route:'/discere/hrvatski/simulator' }
{ id:'mat', slug:'matematika', name:'Matematika', status:'active', renderer:'math', route:'/discere/matematika' }
{ id:'eng', slug:'engleski', name:'Engleski jezik', status:'active', renderer:'language', route:'/discere/engleski/simulator' }
{ id:'soc', slug:'sociologija', name:'Sociologija', status:'active', renderer:'legacy', route:'/discere/sociologija' }
```

Biologija starts this task with `status:'qa'`, `renderer:'generic'`, `route:'/discere/biologija'`. All other not-yet-built subjects start as `soon`.

Helpers:
```js
export function getDiscereSubject(idOrSlug) {
  return DISCERE_SUBJECTS.find((s) => s.id === idOrSlug || s.slug === idOrSlug) ?? null;
}

export function getDiscereGroups() {
  return [...new Set(DISCERE_SUBJECTS.map((s) => s.group))];
}
```

- [ ] **Step 4: Refactor `app/discere/page.js` to consume the registry**

Remove the local `PREDMETI_REG`, `etaMap` and `predmetRoutes`. Import `DISCERE_SUBJECTS` and `getDiscereGroups`. Treat `status === 'active'` as clickable, `status === 'qa'` as non-public with badge `U PROVJERI`, and `status === 'soon'` as `USKORO`.

- [ ] **Step 5: Verify GREEN and regression**

Run:
```bash
npm test -- __tests__/discere/subject-registry.test.js
npm run lint -- app/discere/page.js lib/discere/subject-registry.js
```
Expected: PASS, and existing active routes unchanged.

- [ ] **Step 6: Commit**

```bash
git add lib/discere/subject-registry.js __tests__/discere/subject-registry.test.js app/discere/page.js
git commit -m "feat(discere): add canonical subject registry"
```

---

### Task 2: Canonical Exam Schema and Deterministic Validator

**Files:**
- Create: `lib/discere/exam-schema.js`
- Create: `__tests__/discere/exam-schema.test.js`

**Interfaces:**
- Produces: `SCHEMA_VERSION`, `QUESTION_TYPES`, `QA_STATUSES`, `validateExam(exam, options?)`.
- `validateExam()` returns `{ valid:boolean, errors:Array<{code,path,message}>, warnings:Array<{code,path,message}> }`.
- Canonical exam object shape: `{ meta, questions }`.

- [ ] **Step 1: Write failing validator tests**

Cover these behaviors as separate tests:

```js
import { describe, expect, it } from 'vitest';
import { validateExam } from '@/lib/discere/exam-schema';

const validExam = {
  meta: {
    schemaVersion: 1,
    subject: 'bio', key: '2026_ljeto', year: 2026, season: 'ljeto', level: null,
    label: 'Ljetni rok 2026.', durationSec: 9000, questionCount: 1, maxPoints: 1,
    source: { provider: 'NCVVO', examUrl: 'https://www.ncvvo.hr/example', keyUrl: 'https://www.ncvvo.hr/example', retrievedAt: '2026-08-06' },
    qa: { status: 'draft', verifiedAt: null, notes: [] },
  },
  questions: [{
    id: '1', type: 'mc', prompt: 'Koja tvrdnja vrijedi?', points: 1, topic: 'stanica',
    sourceRef: { page: 3, task: '1' }, assets: [],
    options: [{ id:'A', text:'A' }, { id:'B', text:'B' }],
    answer: { kind:'choice', correct:['A'], source:'official' }, explanation: null,
  }],
};

it('accepts a valid canonical exam', () => {
  expect(validateExam(validExam).valid).toBe(true);
});

it('rejects duplicate question ids', () => {
  const exam = structuredClone(validExam);
  exam.questions.push(structuredClone(exam.questions[0]));
  exam.meta.questionCount = 2;
  const result = validateExam(exam);
  expect(result.errors.some((e) => e.code === 'DUPLICATE_QUESTION_ID')).toBe(true);
});

it('rejects an mc key that references a missing option', () => {
  const exam = structuredClone(validExam);
  exam.questions[0].answer.correct = ['C'];
  const result = validateExam(exam);
  expect(result.errors.some((e) => e.code === 'INVALID_CHOICE_KEY')).toBe(true);
});

it('warns on duplicate option text', () => {
  const exam = structuredClone(validExam);
  exam.questions[0].options[1].text = 'A';
  const result = validateExam(exam);
  expect(result.warnings.some((e) => e.code === 'DUPLICATE_OPTION_TEXT')).toBe(true);
});
```

Add one focused test for each supported type: `mc`, `multi`, `short`, `matching`, `ordering`, `fill`, `true_false`, `essay`, `passage_group`, `audio_group`, `media_response`.

- [ ] **Step 2: Run RED**

```bash
npm test -- __tests__/discere/exam-schema.test.js
```
Expected: FAIL because validator module is absent.

- [ ] **Step 3: Implement schema constants and base validation**

Use exact constants:
```js
export const SCHEMA_VERSION = 1;
export const QUESTION_TYPES = new Set([
  'mc','multi','short','matching','ordering','fill','true_false','essay',
  'passage_group','audio_group','media_response',
]);
export const QA_STATUSES = new Set(['draft','structural-pass','verified','published']);
```

Implement deterministic checks for:
- top-level `meta` and `questions`,
- schema version,
- subject/key/year/season/label/duration/questionCount/maxPoints,
- source provider/examUrl/retrievedAt,
- QA status,
- unique ids,
- `questionCount === questions.length`,
- finite positive points for scorable leaf questions,
- known type,
- required prompt/sourceRef/assets,
- answer semantics per type,
- image asset alt text,
- duplicate option ids/text,
- unknown topic warning when `options.topics` is supplied,
- suspicious answer-letter imbalance warning only when at least 12 closed choice questions exist.

Do not mutate the exam object.

- [ ] **Step 4: Verify GREEN**

```bash
npm test -- __tests__/discere/exam-schema.test.js
```
Expected: all schema tests PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/discere/exam-schema.js __tests__/discere/exam-schema.test.js
git commit -m "feat(discere): add canonical exam validator"
```

---

### Task 3: Validation CLI and CI-Friendly Content Gate

**Files:**
- Create: `scripts/discere-validate.mjs`
- Create: `__tests__/discere/content-loader.test.js`
- Modify: `package.json`

**Interfaces:**
- Produces CLI commands:
  - `npm run discere:validate`
  - `npm run discere:validate -- bio`
- Exit code `0` only when every scanned exam has zero validator errors.

- [ ] **Step 1: Write failing loader/scan test**

Test an exported helper from the CLI module:
```js
import { describe, expect, it } from 'vitest';
import { examModulePathsForSubject } from '@/scripts/discere-validate.mjs';

it('builds deterministic exam module paths from an index', () => {
  const index = { subject:'bio', exams:[{ key:'2026_ljeto', file:'exams/2026_ljeto.mjs' }] };
  expect(examModulePathsForSubject('/repo/content/discere/bio', index))
    .toEqual(['/repo/content/discere/bio/exams/2026_ljeto.mjs']);
});
```

- [ ] **Step 2: Run RED**

```bash
npm test -- __tests__/discere/content-loader.test.js
```
Expected: FAIL because CLI module does not exist.

- [ ] **Step 3: Implement CLI**

Behavior:
1. Resolve `content/discere` from `process.cwd()`.
2. With no argument, scan each child directory containing `index.json`.
3. With a subject argument, scan only that subject.
4. Read `index.json`.
5. Dynamic-import every listed exam module using `pathToFileURL()`.
6. Expect each module to export `exam`.
7. Call `validateExam(exam)`.
8. Print one-line PASS/FAIL per exam plus warning counts.
9. Print all errors with `code`, `path`, `message`.
10. Set `process.exitCode = 1` if any error exists.

Add scripts:
```json
"discere:validate": "node scripts/discere-validate.mjs"
```

- [ ] **Step 4: Verify GREEN**

```bash
npm test -- __tests__/discere/content-loader.test.js
node scripts/discere-validate.mjs bio
```
The second command may report `No index for bio yet` with exit code `0` until Task 7 creates content; it must not crash.

- [ ] **Step 5: Commit**

```bash
git add scripts/discere-validate.mjs __tests__/discere/content-loader.test.js package.json
git commit -m "feat(discere): add content validation cli"
```

---

### Task 4: Normalized Scoring and Result Contract

**Files:**
- Create: `lib/discere/scoring.js`
- Create: `__tests__/discere/scoring.test.js`

**Interfaces:**
- Produces: `scoreQuestion(question, response)`, `scoreExam(exam, responses)`, `buildResult({ exam, responses, startedAt, completedAt, flagged })`.
- Result fields: `subject, examKey, startedAt, completedAt, durationSec, earnedPoints, maxPoints, percent, answers, topicBreakdown, unanswered, flagged`.

- [ ] **Step 1: Write failing scoring tests**

Required cases:
- exact MC match scores full points,
- incorrect MC scores zero,
- `multi` requires exact set unless a rubric explicitly defines partial credit,
- `short/fill` accepts one of explicit normalized official values only,
- matching scores according to explicit per-pair rubric,
- essay without machine-scorable rubric is `manual` and does not invent points,
- grouped questions sum child scores,
- result percent uses earned/max and never divides by zero,
- unanswered list contains unanswered scorable leaf ids,
- topic breakdown sums earned/possible by topic.

Example:
```js
it('scores exact multiple choice', () => {
  const q = { id:'1', type:'mc', points:1, options:[{id:'A'},{id:'B'}], answer:{kind:'choice', correct:['B']} };
  expect(scoreQuestion(q, 'B')).toEqual({ earned:1, possible:1, status:'scored' });
});
```

- [ ] **Step 2: Run RED**

```bash
npm test -- __tests__/discere/scoring.test.js
```

- [ ] **Step 3: Implement minimal scoring functions**

Text normalization for official accepted values is limited to:
```js
const normalizeText = (v) => String(v ?? '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('hr-HR');
```
Do not perform semantic/fuzzy grading in the deterministic scorer.

- [ ] **Step 4: Verify GREEN**

```bash
npm test -- __tests__/discere/scoring.test.js
```

- [ ] **Step 5: Commit**

```bash
git add lib/discere/scoring.js __tests__/discere/scoring.test.js
git commit -m "feat(discere): add normalized exam scoring"
```

---

### Task 5: Canonical Question Renderer Family

**Files:**
- Create: `components/discere/common/QuestionRenderer.jsx`
- Create: `components/discere/common/question-renderers/ChoiceQuestion.jsx`
- Create: `components/discere/common/question-renderers/TextQuestion.jsx`
- Create: `components/discere/common/question-renderers/MatchingQuestion.jsx`
- Create: `components/discere/common/question-renderers/OrderingQuestion.jsx`
- Create: `components/discere/common/question-renderers/TrueFalseQuestion.jsx`
- Create: `components/discere/common/question-renderers/EssayQuestion.jsx`
- Create: `components/discere/common/question-renderers/GroupQuestion.jsx`
- Create: `components/discere/common/question-renderers/MediaQuestion.jsx`
- Create: `__tests__/discere/question-renderer.test.jsx`

**Interfaces:**
- `QuestionRenderer({ question, value, onChange, disabled=false })`.
- Renderers are controlled components; state lives in `ExamShell`.

- [ ] **Step 1: Write failing rendering tests**

Add `// @vitest-environment happy-dom` at the top. Test at least one interaction per primitive family using Testing Library and `userEvent`:
- choose MC option -> `onChange('B')`,
- toggle multi choices -> sorted id array,
- type short/fill -> string/object response,
- set matching pair -> mapping object,
- reorder -> id array,
- true/false -> keyed boolean object,
- essay -> raw text,
- passage/audio group -> renders shared stimulus once and child questions,
- media response -> renders image with non-empty alt and its child/input.

- [ ] **Step 2: Run RED**

```bash
npm test -- __tests__/discere/question-renderer.test.jsx
```

- [ ] **Step 3: Implement renderer dispatch**

Exact dispatch:
```js
switch (question.type) {
  case 'mc':
  case 'multi': return <ChoiceQuestion ... />;
  case 'short':
  case 'fill': return <TextQuestion ... />;
  case 'matching': return <MatchingQuestion ... />;
  case 'ordering': return <OrderingQuestion ... />;
  case 'true_false': return <TrueFalseQuestion ... />;
  case 'essay': return <EssayQuestion ... />;
  case 'passage_group':
  case 'audio_group': return <GroupQuestion ... />;
  case 'media_response': return <MediaQuestion ... />;
  default: return <div role="alert">Nepodržana vrsta zadatka.</div>;
}
```

Use semantic HTML (`fieldset`, `legend`, `label`, buttons) and keyboard-operable controls. Do not add subject branding in these primitive components.

- [ ] **Step 4: Verify GREEN**

```bash
npm test -- __tests__/discere/question-renderer.test.jsx
npm run lint -- components/discere/common
```

- [ ] **Step 5: Commit**

```bash
git add components/discere/common __tests__/discere/question-renderer.test.jsx
git commit -m "feat(discere): add canonical question renderers"
```

---

### Task 6: Common Exam Shell and Generic Subject Runner

**Files:**
- Create: `components/discere/common/ExamShell.jsx`
- Create: `components/discere/common/SubjectExamHub.jsx`
- Create: `components/discere/common/GenericSubjectApp.jsx`
- Create: `lib/discere/content-loader.js`
- Create: `app/discere/[subject]/page.jsx`
- Create: `__tests__/discere/exam-shell.test.jsx`
- Extend: `__tests__/discere/content-loader.test.js`

**Interfaces:**
- `loadSubjectIndex(subjectId)` -> index object.
- `loadExam(subjectId, examKey)` -> canonical `{ meta, questions }`.
- `ExamShell({ exam, onExit, onComplete })`.
- `GenericSubjectApp({ subject })`.

- [ ] **Step 1: Write failing content loader tests**

Use a temporary test-only loader entry or mocked import table exported from `content-loader.js`; test that unknown subject/exam throws a clear error and known loader returns `{ meta, questions }`.

- [ ] **Step 2: Write failing ExamShell tests**

With happy-dom, verify:
- starts on question 1,
- next/back navigation preserves responses,
- unanswered counter changes after answer,
- flag toggle persists per question,
- submit requires explicit confirmation,
- `onComplete` receives `buildResult()` payload,
- timer renders from `meta.durationSec` and never becomes negative,
- `onExit` is explicit and does not submit.

Use fake timers only for the timer-specific test; keep interaction tests on real timers.

- [ ] **Step 3: Run RED**

```bash
npm test -- __tests__/discere/content-loader.test.js __tests__/discere/exam-shell.test.jsx
```

- [ ] **Step 4: Implement explicit loader registry**

Start with an empty/new-subject table that Task 7 will populate:
```js
const SUBJECT_LOADERS = {
  bio: async () => import('@/content/discere/bio/loaders.js'),
};
```
Static legacy routes are not loaded through this function.

- [ ] **Step 5: Implement ExamShell**

State:
```js
const [index, setIndex] = useState(0);
const [responses, setResponses] = useState({});
const [flagged, setFlagged] = useState([]);
const [confirming, setConfirming] = useState(false);
const startedAtRef = useRef(new Date().toISOString());
```
Use `QuestionRenderer`, `buildResult`, accessible nav buttons, sticky but mobile-safe controls, and existing CSS variables (`var(--bg)`, `var(--s1)`, `var(--bdr)`, `var(--text)`, `var(--muted)`).

- [ ] **Step 6: Implement subject hub and generic route**

`app/discere/[subject]/page.jsx` resolves with `getDiscereSubject(params.subject)`. Reject unknown, archived or legacy-only entries with `notFound()`. For `qa`, route can render internally but the main Discere hub must not link publicly until Task 8 changes status to active.

`SubjectExamHub` lists sessions from `index.exams`, newest first, with year/season/duration/question count/QA status.

- [ ] **Step 7: Verify GREEN**

```bash
npm test -- __tests__/discere/content-loader.test.js __tests__/discere/exam-shell.test.jsx
npm run lint -- components/discere/common lib/discere app/discere/[subject]/page.jsx
```

- [ ] **Step 8: Commit**

```bash
git add components/discere/common lib/discere/content-loader.js app/discere/[subject]/page.jsx __tests__/discere
git commit -m "feat(discere): add generic exam shell and subject runner"
```

---

### Task 7: Normalize and Verify Official Biologija 2026 First-Session Exam

**Files:**
- Create: `content/discere/bio/source-manifest.json`
- Create: `content/discere/bio/index.json`
- Create: `content/discere/bio/loaders.js`
- Create: `content/discere/bio/exams/2026_ljeto.mjs`
- Create as needed: `content/discere/bio/assets/2026_ljeto/*`
- Create: `content/discere/bio/qa/2026_ljeto.json`
- Create: `__tests__/discere/biologija-2026.test.js`

**Official sources fixed for this task:**
- NCVVO 2025./2026 first-session page: `https://www.ncvvo.hr/drzavna-matura-2025-2026-prvi-rok/`
- Official Biologija package linked from that page: `https://www.ncvvo.hr/wp-content/uploads/2026/06/BIOLOGIJA_1_ROK_2025_2026.zip`
- 2025./2026 Biologija exam catalog: `https://www.ncvvo.hr/wp-content/uploads/2025/09/BIO-2026.pdf`
- Official calendar: `https://www.ncvvo.hr/wp-content/uploads/2025/05/Kalendar-i-vremenik-provedbe-ispita-%E2%80%93-prvi-rok-2025_2026.pdf`

**Known official metadata used as hard checks:**
- Date: 3 June 2026.
- Duration: 150 minutes = `9000` seconds.
- Maximum score: `70` points.
- Structure from official catalog: 35 multiple-choice tasks plus 13 open-type tasks = 48 top-level tasks; the open section contributes 35 points.

**Interfaces:**
- `content/discere/bio/loaders.js` exports `bioExamLoaders` with key `2026_ljeto`.
- `2026_ljeto.mjs` exports `exam` only.

- [ ] **Step 1: Write the failing Biology integrity test before content exists**

```js
import { describe, expect, it } from 'vitest';
import { validateExam } from '@/lib/discere/exam-schema';

it('Biologija 2026 has the official structural totals and validates', async () => {
  const { exam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs');
  expect(exam.meta.subject).toBe('bio');
  expect(exam.meta.year).toBe(2026);
  expect(exam.meta.durationSec).toBe(9000);
  expect(exam.meta.questionCount).toBe(48);
  expect(exam.meta.maxPoints).toBe(70);
  expect(exam.questions.filter((q) => q.type === 'mc')).toHaveLength(35);
  const result = validateExam(exam);
  expect(result.errors).toEqual([]);
});
```

- [ ] **Step 2: Run RED**

```bash
npm test -- __tests__/discere/biologija-2026.test.js
```
Expected: FAIL because Biology content does not exist.

- [ ] **Step 3: Acquire and inventory official package locally**

Use a temporary ignored directory outside committed content:
```bash
mkdir -p .tmp/discere/bio-2026
curl -L "https://www.ncvvo.hr/wp-content/uploads/2026/06/BIOLOGIJA_1_ROK_2025_2026.zip" -o .tmp/discere/bio-2026/source.zip
unzip -o .tmp/discere/bio-2026/source.zip -d .tmp/discere/bio-2026/source
find .tmp/discere/bio-2026/source -maxdepth 2 -type f -print
```
If direct `curl` is rejected, download the ZIP through the NCVVO first-session page in a browser and place it at the same local path. Do not substitute a third-party copy.

- [ ] **Step 4: Create source manifest before normalization**

`source-manifest.json` records:
```json
{
  "subject": "bio",
  "session": "2026_ljeto",
  "provider": "NCVVO",
  "examPageUrl": "https://www.ncvvo.hr/drzavna-matura-2025-2026-prvi-rok/",
  "packageUrl": "https://www.ncvvo.hr/wp-content/uploads/2026/06/BIOLOGIJA_1_ROK_2025_2026.zip",
  "catalogUrl": "https://www.ncvvo.hr/wp-content/uploads/2025/09/BIO-2026.pdf",
  "examDate": "2026-06-03",
  "durationSec": 9000,
  "expectedTopLevelTasks": 48,
  "expectedMultipleChoiceTasks": 35,
  "expectedMaxPoints": 70,
  "usage": "free-student-preparation",
  "retrievedAt": "2026-08-06"
}
```

- [ ] **Step 5: Normalize every official task into the canonical model**

Rules:
- Preserve task numbering in `sourceRef.task` and stable ids.
- MC options use ids exactly `A`, `B`, `C`, `D` where the source does.
- Open tasks use `short` or `fill` according to source behavior; keep multi-subitem task structure as children when the official task shares one stimulus.
- `answer.source` is `official` only when checked against the official answer/scoring material from the package.
- Do not add AI explanations during normalization; set `explanation:null`.
- Preserve figures/tables as assets and give every image a factual alt description.
- Points must reproduce the official 70-point total.

Exam metadata:
```js
meta: {
  schemaVersion: 1,
  subject: 'bio',
  key: '2026_ljeto',
  year: 2026,
  season: 'ljeto',
  level: null,
  label: 'Ljetni rok 2026.',
  durationSec: 9000,
  questionCount: 48,
  maxPoints: 70,
  source: {
    provider: 'NCVVO',
    examUrl: 'https://www.ncvvo.hr/drzavna-matura-2025-2026-prvi-rok/',
    keyUrl: 'https://www.ncvvo.hr/wp-content/uploads/2026/06/BIOLOGIJA_1_ROK_2025_2026.zip',
    retrievedAt: '2026-08-06',
  },
  qa: { status:'structural-pass', verifiedAt:null, notes:[] },
}
```

- [ ] **Step 6: Build the independent QA ledger**

`qa/2026_ljeto.json` contains one entry for every top-level task:
```json
{
  "examKey": "2026_ljeto",
  "method": "official-source-independent-second-pass",
  "tasks": [
    { "id": "1", "sourceChecked": true, "answerChecked": true, "assetsChecked": true, "status": "verified", "notes": [] }
  ]
}
```
Repeat for ids `1` through the full official task set. A task with any unresolved discrepancy is `status:"blocked"`; the exam must not be published while any blocked item exists.

The verification pass must compare normalized text/answer/points against the official package without trusting the first normalization pass.

- [ ] **Step 7: Add Biology index and explicit loaders**

`index.json`:
```json
{
  "subject": "bio",
  "schemaVersion": 1,
  "exams": [
    {
      "key": "2026_ljeto",
      "year": 2026,
      "season": "ljeto",
      "level": null,
      "label": "Ljetni rok 2026.",
      "durationSec": 9000,
      "questionCount": 48,
      "maxPoints": 70,
      "qaStatus": "verified",
      "file": "exams/2026_ljeto.mjs"
    }
  ]
}
```

`loaders.js`:
```js
import index from './index.json';

export { index };
export const bioExamLoaders = {
  '2026_ljeto': () => import('./exams/2026_ljeto.mjs'),
};
```

- [ ] **Step 8: Run deterministic and integrity gates**

```bash
npm test -- __tests__/discere/biologija-2026.test.js
npm run discere:validate -- bio
```
Expected: zero validator errors; all structural totals match 48 / 35 MC / 70 points / 9000 seconds.

- [ ] **Step 9: Commit**

```bash
git add content/discere/bio __tests__/discere/biologija-2026.test.js
git commit -m "feat(discere): add verified Biologija 2026 exam"
```

---

### Task 8: Publish Biologija Through the Generic Discere Route

**Files:**
- Modify: `lib/discere/subject-registry.js`
- Extend: `__tests__/discere/subject-registry.test.js`
- Extend: `__tests__/discere/content-loader.test.js`
- Modify only if needed for result persistence compatibility: `lib/sim-progress.js` or its current repository equivalent after inspecting its exported API.

**Interfaces:**
- Biology status becomes `active` only after content/QA gates pass.
- `/discere/biologija` loads index -> session -> `ExamShell`.

- [ ] **Step 1: Add failing publication test**

```js
it('publishes Biologija only as an active generic subject', () => {
  const bio = getDiscereSubject('bio');
  expect(bio.status).toBe('active');
  expect(bio.renderer).toBe('generic');
  expect(bio.route).toBe('/discere/biologija');
});
```

Add content loader test:
```js
it('loads the verified Biologija 2026 exam', async () => {
  const exam = await loadExam('bio', '2026_ljeto');
  expect(exam.meta.qa.status).toBe('verified');
  expect(exam.questions).toHaveLength(48);
});
```

- [ ] **Step 2: Run RED**

```bash
npm test -- __tests__/discere/subject-registry.test.js __tests__/discere/content-loader.test.js
```
Expected: publication test fails while Biology is still `qa`.

- [ ] **Step 3: Promote Biology to active**

Change only the canonical registry entry from `qa` to `active`. Do not add a second route map to `app/discere/page.js`; the hub must derive the link from the registry.

- [ ] **Step 4: Wire result persistence through the existing simulator progress contract**

Inspect the existing `saveSimResult` helper used by Matematika. If it already accepts arbitrary `subject`, call it from `GenericSubjectApp`/`ExamShell` completion with `subject:'bio'`. If it is hard-coded to `mat`, add a backward-compatible optional subject parameter and a failing regression test before changing production code. Preserve current Matematika behavior exactly.

- [ ] **Step 5: Run full focused suite**

```bash
npm test -- __tests__/discere
npm run discere:validate
npm run lint
npm run build
```
Expected: all PASS. Build must successfully resolve `/discere/biologija` and all existing static Discere routes.

- [ ] **Step 6: Manual production smoke gate**

Run:
```bash
npm run dev
```
Verify in browser:
1. `/discere` shows Biologija as available.
2. Clicking it opens `/discere/biologija`.
3. The hub shows `Ljetni rok 2026.` with 48 tasks, 150 minutes and 70 max points.
4. Open the exam, answer at least one MC and one open task, navigate away/back inside the exam, and confirm responses remain.
5. Submit and verify the result screen uses the normalized result contract.
6. Reload or inspect Supabase according to the existing progress helper and confirm completion save does not error.
7. Check a narrow mobile viewport (~390 px) for horizontal overflow and unreachable controls.

Any failure blocks publication and returns to the corresponding task/test.

- [ ] **Step 7: Commit**

```bash
git add lib/discere/subject-registry.js __tests__/discere components/discere/common lib/sim-progress.js
git commit -m "feat(discere): publish Biologija exam archive pilot"
```
Only include `lib/sim-progress.js` in the commit if Task 8 Step 4 actually required a compatibility change.

---

### Task 9: Regression Gate and Rollout Template for the Next Subjects

**Files:**
- Create: `docs/discere/SUBJECT_ONBOARDING.md`
- Create: `__tests__/discere/all-content.test.js`
- Modify: `package.json` only if a combined script is useful.

**Interfaces:**
- One documented checklist becomes the exact template for Kemija, Fizika, Informatika, Povijest, Geografija, Politika i gospodarstvo, Psihologija, Filozofija and Logika.

- [ ] **Step 1: Write failing all-content test**

Test that every `active` generic subject has:
- an index,
- at least one exam,
- all index exams load,
- all loaded exams have `qa.status === 'verified' || 'published'`,
- every exam has zero validator errors.

- [ ] **Step 2: Run RED then implement only the helper needed to enumerate active generic content**

```bash
npm test -- __tests__/discere/all-content.test.js
```

- [ ] **Step 3: Write the onboarding document with the exact production sequence**

Document these fixed gates:
1. official source manifest,
2. failing structural test,
3. normalize content,
4. deterministic validator,
5. independent answer/source QA,
6. asset integrity,
7. index + explicit loader,
8. generic route smoke,
9. progress save,
10. change registry `qa -> active`,
11. `npm test -- __tests__/discere`,
12. `npm run discere:validate`,
13. `npm run lint`,
14. `npm run build`.

Include the exact file template:
```text
content/discere/<id>/source-manifest.json
content/discere/<id>/index.json
content/discere/<id>/loaders.js
content/discere/<id>/exams/<year>_<season>.mjs
content/discere/<id>/assets/<year>_<season>/...
content/discere/<id>/qa/<year>_<season>.json
```

- [ ] **Step 4: Verify final regression gate**

```bash
npm test -- __tests__/discere
npm run discere:validate
npm run lint
npm run build
```
Expected: PASS with Biology active and all legacy active subjects still routable.

- [ ] **Step 5: Commit**

```bash
git add docs/discere/SUBJECT_ONBOARDING.md __tests__/discere/all-content.test.js package.json
git commit -m "docs(discere): add repeatable subject onboarding gate"
```

---

## Final Acceptance for This Plan

Phase 0 + Biology pilot is complete only when all of the following are true:

- `app/discere/page.js` no longer owns a duplicate subject registry.
- Logika is represented in the canonical subject list; obsolete Ruski is not advertised as a current state-exam subject.
- Canonical schema supports all v1 question primitives from the design spec.
- Validator can scan one subject or all canonical content from CLI.
- Generic renderer can render and collect responses for all v1 primitives.
- Generic shell handles navigation, flags, timer, submit and normalized results.
- Existing four active simulators still use their existing static routes.
- Official Biologija 2026 first-session source/provenance is recorded.
- Biologija 2026 contains the complete official 48 top-level tasks, 35 MC tasks, 70 total points and 150-minute duration.
- Every closed answer and open scoring rule represented in the app has been independently checked against official NCVVO material.
- Biology validator has zero errors and no unresolved blocked QA items.
- `/discere/biologija` works end-to-end and is mobile-usable.
- Result persistence does not regress Matematika or other existing progress flows.
- `npm test -- __tests__/discere`, `npm run discere:validate`, `npm run lint`, and `npm run build` all pass.

After this plan passes, the next implementation plan should onboard **Kemija + Fizika** in parallel using the same pipeline, without changing the core schema unless a verified source task type cannot be represented.