/**
 * DISCERE — Shared Type Definitions (JSDoc)
 * These are the generic subject-engine types shared across all DISCERE subjects.
 * Chemistry, Mathematics, Biology etc. all implement these contracts.
 */

/**
 * @typedef {Object} DiscereSubjectMeta
 * @property {string} id           - Unique subject id (e.g. "kem")
 * @property {string} slug         - URL slug (e.g. "kemija")
 * @property {string} title        - Display name (e.g. "Kemija")
 * @property {string} shortTitle   - Short label (e.g. "Kem")
 * @property {string} sym          - Emoji/symbol (e.g. "⚗")
 * @property {string} color        - Hex color token (e.g. "#34d399")
 * @property {string} group        - Category group (e.g. "Prirodoslovno")
 * @property {string} description  - Subject description
 * @property {string} examType     - Exam type (e.g. "drzavna-matura")
 * @property {number} order        - Display order within group
 * @property {'active'|'soon'|'beta'} maturity - Availability status
 * @property {number} totalModules
 * @property {number} totalChapters
 */

/**
 * @typedef {Object} DiscereModuleMeta
 * @property {string} slug         - URL slug (e.g. "temelji-kemije")
 * @property {string} title        - Module title
 * @property {string} subtitle     - Short description
 * @property {string} icon         - Emoji icon
 * @property {string} color        - Accent color hex
 * @property {number} order        - Order within subject
 * @property {number} totalChapters
 * @property {DiscereChapterMeta[]} chapters
 */

/**
 * @typedef {Object} DiscereChapterMeta
 * @property {string} slug         - URL slug (e.g. "grada-atoma")
 * @property {string} title        - Chapter title
 * @property {string} subtitle     - Short description
 * @property {string} duration     - Estimated read time (e.g. "15 min")
 * @property {'lako'|'srednje'|'teško'} difficulty
 * @property {'osnova'|'visoka'|'ključna'} maturaRelevance
 * @property {number} order        - Order within module
 */

/**
 * @typedef {Object} DiscereFormulaBlock
 * @property {string} label        - Formula name
 * @property {string} formula      - The formula (text/LaTeX-like)
 * @property {string} desc         - Explanation
 */

/**
 * @typedef {Object} DiscereQuizQuestion
 * @property {string} q            - Question text
 * @property {string[]} opts       - Answer options (A,B,C,D)
 * @property {number} answer       - Correct option index (0-3)
 * @property {string} exp          - Explanation for the correct answer
 */

/**
 * @typedef {Object} DiscereTask
 * @property {string} q            - Task question/problem
 * @property {string[]} steps      - Solution steps
 * @property {string} answer       - Final answer
 */

/**
 * @typedef {Object} DiscereTheoryBlock
 * @property {string} heading
 * @property {string} content
 * @property {{headers: string[], rows: string[][]}|null} table
 */

/**
 * @typedef {Object} DiscereChapter
 * @property {string} slug
 * @property {string} title
 * @property {string} subtitle
 * @property {string} duration
 * @property {'lako'|'srednje'|'teško'} difficulty
 * @property {'osnova'|'visoka'|'ključna'} maturaRelevance
 * @property {number} order
 * @property {string[]} mustKnow
 * @property {string} quickConcept
 * @property {DiscereTheoryBlock[]} theory
 * @property {string} maturaPattern
 * @property {{pattern: string, howToSolve: string}[]} taskPatterns
 * @property {string[]} shortcuts
 * @property {DiscereFormulaBlock[]} formulas
 * @property {DiscereTask[]} tasks
 * @property {string[]} mistakes
 * @property {DiscereQuizQuestion[]} quiz
 * @property {string[]} ultraSummary
 * @property {{topic: string, why: string}[]} connections
 * @property {{slug: string, title: string}|null} nextStep
 */

/* ────────────────────────────────────────────────────────────────────────────
 * Kanonski ispitni model (exam-schema.js), schemaVersion 2.
 * Dokumentacija polja i pravila: docs/discere-schema-v2.md
 * ──────────────────────────────────────────────────────────────────────────── */

/**
 * @typedef {Object} DiscereSolutionStep
 * @property {string} txt   - Tekst koraka (isti oblik kao mat `q.steps`)
 * @property {'postupak'|'diagnostika'|'odgovor'|'verifikacija'|'intuicija'} [note]
 * @property {boolean} [final] - Zadnji korak = doslovni službeni odgovor
 */

/**
 * @typedef {Object} DiscereSolution
 * @property {DiscereSolutionStep[]} steps
 * @property {string[]} why               - Zašto je odgovor točan
 * @property {string[]} commonMistakes
 * @property {string} [warn]              - Upozorenje uz zadatak
 * @property {string} [modelAnswer]       - Model odgovora za ručne zadatke
 * @property {string} [summary]           - Sažetak; ovdje sjeda v1 `explanation.text`
 * @property {'maturiraj'|'official'|'ai-draft'|'ai-opus-reviewed'} source
 * @property {string} [reviewedBy]
 * @property {string} [reviewedAt]        - ISO datum ili timestamp
 */

/**
 * @typedef {Object} DiscereAsset
 * @property {string} type                - image, audio, video…
 * @property {string} src
 * @property {string} [alt]               - Obvezno za image
 * @property {'official'|'maturiraj'|'tts'} [source] - Obvezno za audio u schemaVersion 2
 * @property {{holder: string, basis: string}} [rights]
 */

/**
 * @typedef {Object} DiscereStimulus
 * @property {string} [text]
 * @property {string} [afterText]
 * @property {Object} [table]
 * @property {Object} [reading]
 * @property {Object} [listening]         - Transkript je tajno polje (ADR-001)
 * @property {{language: string, text: string}} [code]
 * @property {{title: string, author?: string, year?: number, citation?: string}} [source]
 * @property {{reason: string, officialRef: string}} [mediaUnavailable]
 */

/**
 * @typedef {Object} DiscereQuestion
 * @property {string} id
 * @property {'mc'|'multi'|'short'|'matching'|'ordering'|'fill'|'true_false'|'essay'|'passage_group'|'audio_group'|'media_response'} type
 * @property {string} prompt
 * @property {number} [points]            - Obvezno za zadatke koji se boduju
 * @property {string} [topic]             - Gruba tema iz taxonomy.json
 * @property {string} [chapterSlug]       - Fini slug poglavlja iz taxonomy.json
 * @property {string[]} [catalogOutcomes] - Ishodi iz ispitnoga kataloga
 * @property {Object} sourceRef
 * @property {DiscereAsset[]} assets
 * @property {DiscereStimulus} [stimulus]
 * @property {Object} [answer]            - Tajno polje (ADR-001); numerički ključ podnosi samo
 *                                          absoluteTolerance, domain i unit (relativeTolerance
 *                                          shema odbija dok ga ocjenjivanje ne primjenjuje)
 * @property {DiscereSolution} [solution] - Tajno polje (ADR-001)
 * @property {{text: string, source: string}|null} [explanation] - v1, čita se kao solution.summary
 * @property {string[]} [wordBank]        - Samo fill
 * @property {'letter'} [mode]            - Samo fill; traži wordBank
 * @property {'translation'|'drawing'} [responseMode] - Samo essay
 * @property {{status: string, verifiedBy?: string, verifiedAt?: string|null}} [qa]
 * @property {DiscereQuestion[]} [children] - Samo grupni zadaci
 */

/**
 * @typedef {Object} DiscereExamBlock
 * @property {string} id
 * @property {string} label
 * @property {number} minutes
 * @property {string[]} questionIds - Pokrivaju sve top-level zadatke bez preklapanja
 */

/**
 * @typedef {Object} DiscereExamMeta
 * @property {1|2} schemaVersion
 * @property {string} subject
 * @property {string} key
 * @property {number} [year]
 * @property {string} [season]
 * @property {'A'|'B'|null} level
 * @property {string} label
 * @property {number} durationSec
 * @property {number} questionCount
 * @property {number} maxPoints
 * @property {Object} source
 * @property {DiscereExamBlock[]} [blocks]
 * @property {{status: string, verifiedAt: string|null, notes: string[], refuter?: {verdict: 'pass'|'fail', at: string, model: string, notes: string[]}}} qa
 */

/**
 * @typedef {Object} DiscereExam
 * @property {DiscereExamMeta} meta
 * @property {DiscereQuestion[]} questions
 */
