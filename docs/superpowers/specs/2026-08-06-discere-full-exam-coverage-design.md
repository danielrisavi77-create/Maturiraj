# Discere Full Exam Coverage — Design

**Date:** 2026-08-06  
**Branch:** `feat/discere-full-exam-coverage`  
**Status:** Approved direction, implementation pending  
**Product:** Maturiraj / Discere

## 1. Objective

Build a scalable Discere exam-content platform that can cover all relevant Croatian state-exam subjects and all publicly available NCVVO exam sessions without creating a separate bespoke simulator for every subject.

The system must optimize for four things:

1. **coverage** — add complete historical exam archives quickly,
2. **accuracy** — prevent incorrect answer keys and broken tasks from reaching users,
3. **reuse** — share rendering, progress, gating and QA infrastructure across subjects,
4. **maintainability** — make the 2027, 2028 and later exam updates routine rather than a new development project each year.

A subject is not considered complete merely because its card is clickable. It is complete only when its public exam archive passes the acceptance criteria in this document.

## 2. Current State

Discere already contains a registry of 24 subjects and routes for the currently active modules. The active production subjects are Hrvatski, Matematika, Engleski and Sociologija; the remaining subjects are marked as coming soon.

Matematika already demonstrates the most scalable existing architecture in the repository:

- exam metadata in `content/simulator/mat/index.json`,
- one module per exam session,
- explicit lazy loaders,
- a shared simulator engine,
- tier/access integration,
- persistent simulator state and result saving.

Existing audits also show that content correctness is a serious product risk. Previous repository work found dozens of incorrect keys/topic mappings in large exam archives. Therefore the new platform must treat validation as a first-class product capability, not an optional cleanup step.

## 3. Design Decision

### Recommended approach: canonical exam model + shared renderer family

All new exam content will be normalized into a common subject-independent metadata model plus a small set of supported question primitives. Subjects may extend the model only where objectively necessary.

The platform will not force every subject into one identical visual experience. Instead it will use a **shared renderer family**:

- a common exam shell,
- common navigation/timing/result/progress behavior,
- common question primitives,
- subject adapters for special media or interaction types.

This preserves subject fidelity without duplicating entire applications.

### Alternatives considered

#### A. One custom simulator per subject

**Pros:** maximum freedom, easy to mirror a unique source exam.  
**Cons:** 20+ codebases, duplicated bugs, slow coverage, inconsistent progress/analytics, expensive yearly maintenance.

Rejected as the default.

#### B. One fully generic renderer with no subject adapters

**Pros:** fastest engineering surface, lowest code count.  
**Cons:** becomes brittle for listening exams, long reading passages, mathematical notation, matching tasks, media-heavy art/music tasks and unusual scoring.

Rejected as too restrictive.

#### C. Canonical model + shared renderer family

**Pros:** scalable, testable, consistent, supports special cases without duplicating whole apps.  
**Cons:** requires up-front schema and validation work.

Selected.

## 4. Scope

### Included

- existing Discere active subjects,
- all additional relevant state-exam subjects represented by current NCVVO exam materials,
- historical sessions available from the source corpus,
- current 2026 sessions where publicly available,
- A/B levels where applicable,
- summer/autumn/winter or equivalent sessions where applicable,
- question text,
- answer choices,
- official answer/scoring data when available,
- reading passages,
- images, diagrams, tables and formulas,
- audio references where permitted and technically available,
- metadata and provenance,
- progress/result integration,
- automated structural validation,
- content QA status,
- publishing/activation workflow.

### Not included in the first platform implementation

These remain separate product layers and must not block archive coverage:

- AI-generated replacement questions,
- social/study-group features,
- redesign of the Discere landing page,
- deep adaptive-learning logic,
- parent dashboard integration,
- full migration of every legacy active simulator on day one,
- automated scraping that bypasses access restrictions or source terms.

## 5. Subject Registry

The current hard-coded subject list must become a single canonical registry used by the Discere hub and content tooling.

Each subject entry should contain at least:

```ts
{
  id: 'bio',
  slug: 'biologija',
  name: 'Biologija',
  group: 'Prirodoslovno',
  status: 'draft' | 'qa' | 'active' | 'archived',
  renderer: 'generic' | 'language' | 'math' | 'media',
  levels: ['single'] | ['A', 'B'],
  sourcePolicy: 'public-prep',
  route: '/discere/biologija'
}
```

The registry must be reconciled against the actual current NCVVO subject corpus rather than assuming the present 24-item hard-coded list is authoritative. In particular, subjects such as Logika that exist in the current official corpus must not be omitted because the old UI list lacks them.

## 6. Canonical Exam Model

Each published exam session has one metadata record and one question dataset.

### Exam metadata

```ts
{
  schemaVersion: 1,
  subject: 'bio',
  key: '2026_ljeto',
  year: 2026,
  season: 'ljeto',
  level: null,
  label: 'Ljetni rok 2026.',
  durationSec: 5400,
  questionCount: 40,
  maxPoints: 40,
  source: {
    provider: 'NCVVO',
    examUrl: '...',
    keyUrl: '...',
    retrievedAt: '2026-08-06'
  },
  qa: {
    status: 'draft' | 'structural-pass' | 'verified' | 'published',
    verifiedAt: null,
    notes: []
  }
}
```

### Base question fields

Every question must contain:

```ts
{
  id: '12',
  type: 'mc',
  prompt: '...',
  points: 1,
  topic: '...',
  sourceRef: { page: 8, task: '12' },
  answer: { ... },
  explanation: null,
  assets: []
}
```

`explanation` is optional because Discere must preserve a distinction between official exam content/answer data and Maturiraj-authored educational explanations.

## 7. Supported Question Primitives

The first schema version must support the task types already common across state exams:

- `mc` — one correct option,
- `multi` — multiple correct options,
- `short` — short text/numeric answer,
- `matching` — left/right matching,
- `ordering` — sequence ordering,
- `fill` — one or multiple gaps,
- `true_false` — binary/subitem decisions,
- `essay` — open response scored by rubric,
- `passage_group` — shared reading/source passage with child questions,
- `audio_group` — shared audio source with child questions,
- `media_response` — image/diagram/table/artifact-based question.

A subject-specific adapter may add renderer metadata, but it may not silently invent incompatible answer semantics. New task types require a schema-versioned extension and tests.

## 8. Assets

Assets are stored outside question source files and referenced by stable paths.

Recommended structure:

```text
content/discere/<subject>/
  index.json
  exams/
    2026_ljeto.mjs
  assets/
    2026_ljeto/
      q12-diagram.svg
      reading-01.webp
      listening-02.mp3
```

Each asset reference includes semantic metadata:

```ts
{
  type: 'image',
  src: '/discere/bio/2026_ljeto/q12-diagram.svg',
  alt: 'Shema stanice označena slovima A–D'
}
```

Broken or missing asset references are publication blockers.

## 9. Import Pipeline

The system uses explicit stages rather than directly editing production question files.

### Stage 1 — Source manifest

Record official source URLs/files for a subject and session.

### Stage 2 — Extraction

Extract text, tables, images and key/scoring information into an intermediate representation. Extraction may be automated, assisted or manual depending on the source format.

### Stage 3 — Normalization

Convert the intermediate representation into the canonical exam schema.

### Stage 4 — Structural validation

Run deterministic validators.

### Stage 5 — Content verification

Compare normalized content against the official exam and answer/scoring source. Ambiguous items are flagged for review rather than guessed.

### Stage 6 — Build/index generation

Generate subject index metadata and explicit loaders.

### Stage 7 — Simulator smoke test

Open the exam through the actual Discere route and verify rendering, answering, submission and result persistence.

### Stage 8 — Publish

Set the exam QA status to `published`; activate the subject card only after the subject-level release threshold is met.

## 10. Validator

A single command must be able to validate one exam, one subject or all Discere content.

Required checks:

### Structural

- valid schema version,
- unique exam key,
- unique question IDs,
- metadata `questionCount` equals actual questions,
- known question type,
- required fields present,
- valid level/season values,
- valid points,
- no duplicate options where duplicates are not meaningful.

### Answer semantics

- `mc` correct option exists,
- `multi` keys reference existing options,
- matching pairs reference existing items/options,
- rubric-based tasks contain scoring metadata when official scoring is available,
- answer keys are not empty for closed tasks.

### Asset integrity

- every referenced asset exists,
- no orphaned required asset,
- safe file type,
- image has alt text,
- audio-group reference resolves.

### Source/provenance

- source provider exists,
- exam source recorded,
- answer/key source recorded when separate,
- source reference available for each question wherever technically practical.

### Quality signals

Warnings, not automatic failures, should include:

- suspicious answer-letter imbalance,
- identical prompt text across unrelated questions,
- unusually repeated explanation/answer strings,
- topic labels not in the subject taxonomy,
- extracted text containing likely OCR artifacts,
- question count that differs from known official metadata.

These warnings support adversarial QA; they must not automatically rewrite official content.

## 11. QA Model

Every exam carries a visible internal QA state:

1. `draft`
2. `structural-pass`
3. `verified`
4. `published`

### Verification rule

Closed questions must be checked against official answer/scoring materials when those are available.

If an official key is unavailable, Maturiraj may store the question for archive purposes, but must not label a model-derived answer as official. Such answers require explicit provenance such as `answerSource: 'maturiraj-reviewed'`.

### Adversarial QA

For high-volume subjects, QA should use a two-step process:

- candidate-finding pass,
- independent verification pass.

The second pass must re-solve/re-check suspicious questions without trusting the first pass conclusion. This follows the successful pattern already used in repository content audits.

## 12. Rendering Architecture

### Common Exam Shell

Owns:

- header/exam metadata,
- timer,
- question navigation,
- unanswered/flagged state,
- submission confirmation,
- result calculation,
- accessibility controls,
- progress persistence,
- responsive/mobile behavior.

### GenericQuestionRenderer

Renders canonical primitives.

### Subject adapters

Examples:

- `MathAdapter` — math notation, diagrams, numeric forms,
- `LanguageAdapter` — reading/listening groups and language-specific layout,
- `MediaAdapter` — larger artwork/audio/media presentation.

An adapter extends presentation and input widgets; the common shell remains responsible for navigation/result/progress behavior.

## 13. Existing Simulator Migration

Do not rewrite all four working active subjects before adding new coverage.

Migration sequence:

1. build canonical model + validator,
2. prove it with one new subject,
3. reuse the platform for subsequent new subjects,
4. migrate active legacy simulators only when the migration reduces maintenance or enables missing platform features.

Matematika can remain on its current mature engine initially and act as a reference implementation. A compatibility adapter can later expose its metadata to the unified hub/analytics layer.

## 14. Progress and Results

The common shell must emit a normalized result payload independent of subject:

```ts
{
  subject: 'bio',
  examKey: '2026_ljeto',
  startedAt: '...',
  completedAt: '...',
  durationSec: 3120,
  earnedPoints: 31,
  maxPoints: 40,
  percent: 77.5,
  answers: {},
  topicBreakdown: {},
  unanswered: [],
  flagged: []
}
```

Subject-specific grading may add extra fields, but should not replace the common result contract.

## 15. Access and Monetization

Official/public exam tasks must not be made artificially inaccessible solely to monetize source content where source usage terms require free preparation use.

The monetizable layer should be Maturiraj-added value, for example:

- AI explanations,
- personalized error analysis,
- adaptive practice,
- SRS,
- advanced statistics,
- generated study plans,
- coaching/strategy,
- cross-exam weakness detection.

The archive and PRO capability model must therefore be separate concerns in the schema and UI.

## 16. Rollout Order

### Phase 0 — platform foundation

- canonical subject registry,
- canonical exam schema,
- validator,
- loader/index convention,
- shared shell minimum viable renderer,
- tests/fixtures.

### Phase 1 — prove with one new straightforward subject

Recommended: **Biologija**.

Reason: representative mixture of MC/text/image tasks without the additional complexity of A/B language listening flows or advanced math engine behavior.

### Phase 2 — high-demand science/social subjects

- Kemija,
- Fizika,
- Informatika,
- Povijest,
- Geografija,
- Politika i gospodarstvo,
- Psihologija,
- Filozofija,
- Logika.

### Phase 3 — remaining humanities/art/religion subjects

- Etika,
- Vjeronauk,
- Likovna umjetnost,
- Glazbena umjetnost.

### Phase 4 — additional languages

- Njemački,
- Francuski,
- Talijanski,
- Španjolski,
- Latinski,
- Grčki,
- other current official language/minority-language exams if included in the verified source corpus.

### Parallel maintenance track

Bring currently active Hrvatski, Matematika, Engleski and Sociologija up to the newest available sessions, including 2026, without blocking the new platform proof.

## 17. Definition of Done — Exam

An individual exam is `published` only when:

- source provenance is recorded,
- metadata is complete,
- all questions are represented,
- official closed-question keys are represented where available,
- assets resolve,
- validator passes with zero errors,
- warnings have been reviewed,
- simulator route opens,
- representative question types render correctly,
- answers can be entered/changed,
- submission works,
- result payload is valid,
- progress/result save does not throw,
- mobile smoke test passes.

## 18. Definition of Done — Subject

A subject is `active` only when:

- its agreed historical coverage window is complete,
- newest available public session is included,
- all published exams pass validation,
- subject-specific question types have test coverage,
- hub/index metadata is correct,
- at least one full end-to-end exam run passes,
- no known P0/P1 content correctness issues remain.

Partial subjects may exist internally in `draft` or `qa` but should not be advertised as fully available.

## 19. Testing Strategy

### Unit tests

- schema validator,
- each question primitive,
- scoring logic,
- subject registry,
- result normalization.

### Fixture tests

Create minimal fixture exams containing every supported question type. These are synthetic test data and are not source exam content.

### Content tests

Run validator against every checked-in exam dataset in CI.

### Integration tests

For at least one exam per renderer family:

- load route,
- answer representative tasks,
- navigate,
- submit,
- verify score/result payload.

### Regression tests

Every confirmed content bug should produce either:

- a validator rule,
- a fixture/test,
- or a documented reason why deterministic detection is impossible.

This converts past mistakes into future protection.

## 20. Failure Handling

The importer must fail closed.

- Unknown task type → do not publish.
- Missing required key → do not publish.
- Missing asset → do not publish.
- Ambiguous extraction → flag for review; never guess silently.
- Parser/OCR uncertainty → preserve source reference and mark review required.
- Official source changes → version source metadata and regenerate only the affected exam.

Production rendering must never crash the entire subject because one question is malformed. The question-level error boundary should present an internal error state and record the offending exam/question key.

## 21. File Layout

Target convention:

```text
content/discere/
  subjects.json
  <subject>/
    index.json
    taxonomy.json
    exam-loaders.ts
    exams/
      <exam-key>.mjs
    assets/
      <exam-key>/...

lib/discere-content/
  schema.ts
  validate.ts
  result.ts
  registry.ts

components/discere/shared/
  ExamShell.jsx
  QuestionRenderer.jsx
  renderers/...

scripts/discere/
  validate.mjs
  build-index.mjs
  import/...
```

Existing legacy content remains in place until explicitly migrated.

## 22. Success Metrics

The platform is successful when:

- adding a conventional new exam requires primarily content work rather than new app code,
- validator can scan all Discere exams with one command,
- one malformed exam cannot silently become `active`,
- a new annual exam can be added without modifying the core renderer unless NCVVO introduces a genuinely new interaction type,
- all relevant subjects can share progress/result analytics,
- the current hard-coded “coming soon” state can be replaced by data-driven availability.

## 23. First Implementation Slice

The first implementation plan must remain intentionally small and prove the architecture before mass content work.

It should deliver:

1. canonical subject registry,
2. schema v1,
3. deterministic validator + CLI,
4. fixture tests,
5. minimal common exam shell/question renderer for the task types needed by the pilot,
6. Biologija pilot with at least one complete verified exam session,
7. Discere route/hub integration for the pilot,
8. end-to-end verification.

Only after this slice passes should the project begin bulk subject ingestion.

## 24. Final Architecture Rule

**Content scales; simulator code should not scale linearly with content.**

If adding the tenth subject requires approximately the same engineering effort as adding the first, the architecture has failed. The expected steady-state workflow is source acquisition → normalization → validation → QA → publish, with core simulator changes only for genuinely new task primitives.
