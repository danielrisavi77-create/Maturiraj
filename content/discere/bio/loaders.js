import index from './index.json'

export { index }

export const examLoaders = {
  '2026_ljeto': () => import('./exams/2026_ljeto.mjs'),
}
