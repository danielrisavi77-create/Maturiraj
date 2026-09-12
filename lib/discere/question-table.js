const nonempty = value => typeof value === 'string' && value.trim().length > 0

// Tables are stimulus data, never response or scoring fields.
export function isQuestionTable(table) {
  return Boolean(table && typeof table === 'object' && !Array.isArray(table) &&
    nonempty(table.caption) && Array.isArray(table.columns) && table.columns.length >= 2 && table.columns.length <= 20 &&
    table.columns.every(nonempty) && Array.isArray(table.rows) && table.rows.length > 0 && table.rows.length <= 100 &&
    table.rows.every(row => Array.isArray(row) && row.length === table.columns.length && nonempty(row[0]) && row.every(cell => typeof cell === 'string')))
}
