export const daysUntil = (iso) => {
  if (!iso) return null
  const t = new Date(iso).getTime() - Date.now()
  return Math.max(0, Math.ceil(t / 86400000))
}

export const formatDays = (n) => {
  if (n === null || n === undefined) return "\u2014"
  if (n === 0) return "danas"
  if (n === 1) return "1 dan"
  if (n < 7) return `${n} dana`
  if (n < 14) return `1 tjedan`
  if (n < 21) return `2 tjedna`
  if (n < 28) return `3 tjedna`
  return `${n} dana`
}

export const pragZona = (p) => {
  if (!p) return "var(--muted)"
  if (p >= 700) return "#f87171"
  if (p >= 580) return "#fb923c"
  return "#3ecf6e"
}

export const pragLabel = (p) => {
  if (!p) return "\u2014"
  if (p >= 700) return "te\u0161ko"
  if (p >= 580) return "srednje"
  return "pristupa\u010dno"
}