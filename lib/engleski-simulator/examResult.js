// Zapis rezultata ispita — jedan izvor istine za oba puta do rezultata:
//   1. korisnik preda ispit u ExamPlayScreenu (finish),
//   2. nastavak sesije kojoj je rok istekao dok korisnika nije bilo
//      (EngleskiSimulator predaje spremljene odgovore bez ulaska u ispit).
// Prije je ovaj izračun živio samo u ExamPlayScreen.finish(), pa ga drugi put
// nije mogao ponoviti bez montiranja cijelog ekrana.

import { chk, grade } from './scoring'
import { sectionScores, weightedEstimate } from './examStructure'

/**
 * @param {{key: string, year: number|string, label: string, qs: Array}} exam
 * @param {Object} answers - mapa qid → odgovor
 * @param {Object} [qTimes] - mapa qid → sekunde
 * @param {boolean} [examMode] - je li riječ o simulaciji
 * @returns {Object} zapis koji očekuje onExamDone
 */
export function buildExamResult(exam, answers, qTimes = {}, examMode = false) {
  const qs = (exam && exam.qs) || []
  const ans = answers || {}
  // 'sa' i 'es' ocjenjuje ocjenjivač (chk vraća null) — ne ulaze u postotak.
  const autoQ = qs.filter(x => x.type !== 'sa' && x.type !== 'es')
  const cor = autoQ.filter(x => chk(x, ans[x.id]) === true).length
  const pct = autoQ.length ? Math.round((cor / autoQ.length) * 100) : 0
  const scores = sectionScores(exam, ans, chk)
  return {
    examKey: exam?.key,
    examLabel: `${exam?.year}. — ${exam?.label}`,
    pct,
    grade: grade(pct),
    cor,
    total: autoQ.length,
    answers: ans,
    qTimes: qTimes || {},
    examMode: !!examMode,
    sectionScores: scores,
    weighted: weightedEstimate(scores),
  }
}
