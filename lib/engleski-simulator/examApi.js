/** Klijent: pitanja bez sol/exp. Ocjena i ključevi samo nakon predaje. */

export async function loadExamsRazina(razina) {
  const res = await fetch(`/api/exams/${razina}`, { cache: 'force-cache' })
  if (!res.ok) throw new Error(`exams/${razina} ${res.status}`)
  return res.json()
}

export async function checkExam(examKey, answers) {
  const res = await fetch('/api/exams/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ examKey, answers }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `exams/check ${res.status}`)
  return data
}
