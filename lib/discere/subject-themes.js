import { DISCERE_SUBJECTS, getDiscereSubject } from './subject-registry.js'

// Presentation intent only. Motifs are permitted visual vocabulary, not a claim
// that a diagram, audio asset or specialist tool has been implemented.
const profiles = {
  hrv: ['reading', 'serif', ['text', 'annotation']],
  mat: ['problem', 'sans', ['coordinate-grid', 'equation']],
  eng: ['language', 'sans', ['dialogue', 'annotation']],
  nje: ['language', 'sans', ['sentence', 'dialogue']],
  fra: ['language', 'sans', ['dialogue', 'text']],
  tal: ['language', 'sans', ['text', 'dialogue']],
  spn: ['language', 'sans', ['dialogue', 'sentence']],
  lat: ['reading', 'serif', ['parallel-text', 'inflection']],
  grk: ['reading', 'serif', ['parallel-text', 'alphabet']],
  bio: ['laboratory', 'sans', ['organism', 'process']],
  kem: ['laboratory', 'sans', ['molecule', 'reaction']],
  fiz: ['problem', 'sans', ['vector', 'graph']],
  inf: ['problem', 'mono', ['code', 'flowchart']],
  pov: ['sources', 'serif', ['timeline', 'document']],
  geo: ['spatial', 'sans', ['map', 'climate-chart']],
  soc: ['concepts', 'sans', ['network', 'evidence']],
  psi: ['concepts', 'sans', ['experiment', 'process']],
  pig: ['sources', 'sans', ['institution', 'economic-chart']],
  fil: ['reading', 'serif', ['argument', 'text']],
  log: ['problem', 'sans', ['truth-table', 'argument']],
  lik: ['gallery', 'sans', ['artwork', 'composition']],
  gla: ['listening', 'sans', ['score', 'listening-timeline']],
  eti: ['reading', 'serif', ['dilemma', 'argument']],
  vje: ['sources', 'serif', ['source-text', 'context']],
}

const fonts = {
  sans: 'var(--fb, system-ui, sans-serif)',
  serif: 'Georgia, "Times New Roman", serif',
  mono: 'ui-monospace, SFMono-Regular, Consolas, monospace',
}

export const SUBJECT_THEMES = Object.freeze(Object.fromEntries(DISCERE_SUBJECTS.map(subject => {
  const profile = profiles[subject.id]
  if (!profile) throw new Error(`Missing subject theme: ${subject.id}`)
  const [workspace, font, motifs] = profile
  return [subject.id, Object.freeze({
    id: subject.id, accent: subject.color, symbol: subject.sym,
    contentFont: fonts[font], workspace, motifs: Object.freeze(motifs),
  })]
})))

export function getSubjectTheme(idOrSlug) {
  const subject = getDiscereSubject(idOrSlug)
  return subject ? SUBJECT_THEMES[subject.id] : null
}

export function subjectThemeStyle(idOrSlug) {
  const theme = getSubjectTheme(idOrSlug)
  const accent = theme?.accent ?? '#b8720a'
  return {
    '--subject-accent': accent,
    '--subject-accent-soft': `${accent}14`,
    '--subject-accent-border': `${accent}44`,
    '--subject-content-font': theme?.contentFont ?? fonts.sans,
  }
}
