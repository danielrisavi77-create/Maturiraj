// ADR-001: kanonski `exams/*.mjs` nosi answer/solution/explanation i NIKAD ne
// smije biti dohvatljiv odavde (usp. __tests__/discere/canonical-source-isolation.test.js).
// Zato ovaj modul više ne izvozi `examLoaders` — GenericSubjectApp/content-loader.js
// (grupa B1) treba prijeći na rutu GET /api/sim/bio/exam/<key> nad generiranim
// content/bio/exams/<key>.json, ne na uvoz kanonskog izvora.
import index from './index.json'
import topics from './topics.json'
import summary from './summary.json'

export { index, topics, summary }
