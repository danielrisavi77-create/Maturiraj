const text = value => typeof value === 'string' && value.trim().length > 0
const positive = value => Number.isFinite(value) && value > 0
const unique = values => new Set(values).size === values.length
const webUrl = value => {
  try { return text(value) && ['https:', 'http:'].includes(new URL(value).protocol) } catch { return false }
}

export function isReadingStimulus(value) {
  return Boolean(value && text(value.id) && text(value.title) && text(value.author) && webUrl(value.sourceUrl) &&
    Array.isArray(value.lines) && value.lines.length > 0 && value.lines.length <= 50 &&
    value.lines.every(line => text(line?.id) && text(line.text) && Number.isInteger(line.stanza) && line.stanza > 0) &&
    unique(value.lines.map(line => line.id)))
}

export function isDetailedWritingRubric(value, rows, points) {
  if (!value || value.assessmentMode !== 'manual' || !text(value.basisYear) || !text(value.targetYear) ||
      !webUrl(value.source?.url) || !positive(value.source.table) ||
      !positive(value.rawMaxPoints) || !positive(value.weightMultiplier) ||
      value.weightedMaxPoints !== value.rawMaxPoints * value.weightMultiplier || value.rawMaxPoints !== points ||
      !Number.isInteger(value.wordCount?.requiredMinimum) || value.wordCount.requiredMinimum < 1 ||
      !Number.isFinite(value.wordCount.lowerTolerancePercent) || value.wordCount.lowerTolerancePercent < 0 || value.wordCount.lowerTolerancePercent > 100 ||
      !(value.wordCount.maximum === null || Number.isInteger(value.wordCount.maximum) && value.wordCount.maximum >= value.wordCount.requiredMinimum) ||
      value.wordCount.automaticallyReject !== false || !Array.isArray(value.criteria) || !Array.isArray(rows) ||
      value.criteria.length === 0 || value.criteria.length !== rows.length) return false
  if (!value.criteria.every(criterion => text(criterion?.id) && text(criterion.title) && positive(criterion.maxPoints) &&
      Array.isArray(criterion.levels) && criterion.levels.length > 1 &&
      criterion.levels.every(level => Number.isFinite(level?.points) && level.points >= 0 && level.points <= criterion.maxPoints && text(level.description)) &&
      unique(criterion.levels.map(level => level.points)) && criterion.levels.some(level => level.points === 0) &&
      criterion.levels.some(level => level.points === criterion.maxPoints) &&
      rows.some(row => row.id === criterion.id && row.points === criterion.maxPoints))) return false
  return unique(value.criteria.map(criterion => criterion.id)) &&
    value.criteria.reduce((sum, criterion) => sum + criterion.maxPoints, 0) === value.rawMaxPoints
}
