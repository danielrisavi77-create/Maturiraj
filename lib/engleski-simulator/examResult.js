// Zapis rezultata ispita — jedan izvor istine za oba puta do rezultata:
//   1. korisnik preda ispit u ExamPlayScreenu (finish),
//   2. nastavak sesije kojoj je rok istekao dok korisnika nije bilo
//      (EngleskiSimulator predaje spremljene odgovore bez ulaska u ispit).
// Prije je ovaj izračun živio samo u ExamPlayScreen.finish(), pa ga drugi put
// nije mogao ponoviti bez montiranja cijelog ekrana.
//
// OCJENJUJE POSLUŽITELJ (ADR-001, odjeljak 5a). Oba puta do rezultata šalju
// `POST /api/sim/eng/grade` (lib/engleski-simulator/gradeClient.js) i ovamo
// donose njegov odgovor kao `server`; klijent ga samo preslaguje u zapis koji
// očekuje onExamDone. Uz poslužiteljski odgovor `chkFn` gleda njegovu mapu
// točno/netočno umjesto ključa, pa rezultat po cjelinama izlazi isti i kad u
// pregledniku nema nijednog `sol` (ADR-001, točka 10).
//
// `server === null` je LOKALNI put i vrijedi samo u dva slučaja: virtualne
// sesije (greške, bookmarci, filter, dnevni izazov — na poslužitelju ne postoje)
// i pokušaj kojem je ocjenjivanje palo, a klijent ima ključeve za sva
// auto-ocjenjiva pitanja (hasFullKeys, plaćeni tier). Bez ključeva lokalni put
// ne postoji: dao bi 0 % umjesto rezultata.

import { chk, grade, scoreLookup } from './scoring'
import { sectionScores, weightedEstimate } from './examStructure'

/**
 * Ima li klijent ključ na SVAKOM auto-ocjenjivom pitanju. Ijedan ključ nije
 * dovoljan za lokalni izračun cijele ocjene: s tri ključa od 43 pitanja ispao
 * bi rezultat od 7 %.
 *
 * @param {{qs?: Array}|null} exam
 * @returns {boolean}
 */
export function hasFullKeys(exam) {
  const auto = ((exam && exam.qs) || []).filter(x => x && x.type !== 'sa' && x.type !== 'es')
  return auto.length > 0 && auto.every(x => x.sol)
}

/**
 * @param {{key: string, year: number|string, label: string, qs: Array}} exam
 * @param {Object} answers - mapa qid → odgovor
 * @param {Object} [qTimes] - mapa qid → sekunde
 * @param {boolean} [examMode] - je li riječ o simulaciji
 * @param {Object|null} [server] - odgovor ocjenjivačke rute { pct, grade, cor, total, xpGain, scores }
 * @param {string|null} [attemptId] - otisak pokušaja (null za virtualne sesije)
 * @returns {Object} zapis koji očekuje onExamDone
 */
export function buildExamResult(exam, answers, qTimes = {}, examMode = false, server = null, attemptId = null) {
  const qs = (exam && exam.qs) || []
  const ans = answers || {}
  const chkFn = server ? scoreLookup(server.scores) : chk
  // 'sa' i 'es' ocjenjuje ocjenjivač (chk vraća null) — ne ulaze u postotak.
  const autoQ = qs.filter(x => x.type !== 'sa' && x.type !== 'es')
  const localCor = autoQ.filter(x => chkFn(x, ans[x.id]) === true).length
  const cor = server ? server.cor : localCor
  const total = server ? server.total : autoQ.length
  // 'pct' ostaje udio točnih auto-ocjenjivih pitanja radi kompatibilnosti s
  // povijesti i statistikama; poslužitelj računa istom formulom.
  const pct = server ? server.pct : (autoQ.length ? Math.round((localCor / autoQ.length) * 100) : 0)
  const scores = sectionScores(exam, ans, chkFn)
  return {
    examKey: exam?.key,
    examLabel: `${exam?.year}. — ${exam?.label}`,
    pct,
    grade: server ? server.grade : grade(pct),
    cor,
    total,
    answers: ans,
    qTimes: qTimes || {},
    examMode: !!examMode,
    sectionScores: scores,
    weighted: weightedEstimate(scores),
    // Mapa qid → true|false|null s poslužitelja; virtualne sesije je nemaju.
    scores: server ? server.scores : null,
    xpGain: server ? server.xpGain : null,
    // Je li redak u sim_progress već upisala ocjenjivačka ruta. Kad nije (pad
    // predaje, a rezultat izračunat lokalno iz ključeva), upisuje ga klijent —
    // inače bi pokušaj koji korisnik vidi na ekranu nestao iz oblaka.
    serverSaved: !!server,
    // Otisak pokušaja putuje s rezultatom do onExamDone → toSimProgressPayload:
    // rezervni upis bez njega jedinstveni indeks (user_id, attempt_id) ne vidi,
    // pa bi pokušaj koji je ruta ipak upisala dobio drugi redak. Virtualne
    // sesije ne idu na ocjenjivanje, pa otiska ni nemaju (null).
    attemptId: typeof attemptId === 'string' && attemptId ? attemptId : null,
  }
}
