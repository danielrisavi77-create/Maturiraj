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
