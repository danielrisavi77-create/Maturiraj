// Izvodi razinu ('osnovna' | 'visa' | 'mixed') virtualne sesije iz pitanja koja je čine.
// Koristi se za sesije koje pooluju pitanja iz više ispita (virtualni ispit, filter,
// greške, bookmarkovi) gdje ne postoji jedinstvena razina unaprijed.

function findRazina(q, examsMap) {
  const key = q._examKey || q.examKey
  if (key && examsMap && examsMap[key]) return examsMap[key].razina
  if (!examsMap) return undefined
  const owner = Object.values(examsMap).find(ex => (ex.qs || []).some(item => item.id === q.id))
  return owner?.razina
}

export function deriveRazina(qs, examsMap) {
  if (!qs || !qs.length) return 'osnovna'
  const found = new Set()
  qs.forEach(q => {
    found.add(findRazina(q, examsMap) || 'osnovna')
  })
  if (found.size === 1) return [...found][0]
  return 'mixed'
}
