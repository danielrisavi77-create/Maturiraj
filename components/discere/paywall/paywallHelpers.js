// components/discere/paywall/paywallHelpers.js
// ─────────────────────────────────────────────────────────────────────────────
// Pure helper functions — no React, no side effects.
// ─────────────────────────────────────────────────────────────────────────────

import { FREE_LIMIT } from './paywallCopy'
import { normalizeTier, upgradeTargetFor } from '@/lib/discere/entitlements'
import { gradeStatus, pctOf } from '@/lib/discere/grade-scale'

export { FREE_LIMIT }

/**
 * `userAccess.subscriptionTier` je UI oblik tiera i povijesno nosi 'standard' za
 * plan koji billing zove 'starter'. Kanonsko nazivlje živi u lib/billing i
 * lib/discere; ovdje sve provjere idu kroz normalizeTier, pa oba oblika znače
 * isto, a nepoznato pada na 'free' (fail closed).
 *
 * @typedef {'free'|'starter'|'standard'|'pro'} SubscriptionTier
 *
 * @typedef {{ subscriptionTier: SubscriptionTier, isLoggedIn: boolean }} UserAccess
 *
 * @typedef {{
 *   currentQuestionIndex: number,
 *   totalQuestions: number,
 *   hasFinished: boolean,
 *   score: number,
 *   correctCount: number,
 *   incorrectCount: number,
 * }} SimulatorState
 */

/**
 * Maps useAuth hook output → UserAccess tier string.
 * Call this once at the page level.
 *
 * Plaćeni ne-Pro plan ovdje namjerno ostaje 'standard', a ne kanonski 'starter':
 * potrošači ovog objekta (SubscriptionGate, ResultsSummary, PaywallModal, hrv i
 * eng ekrani) uspoređuju doslovni niz 'standard'. Kad bi ova funkcija vratila
 * 'starter', SubscriptionGate bi plaćenog Standard korisnika rangirao kao free i
 * zaključao mu sadržaj, a kartica rezultata bi mu izgubila oznaku plana.
 * Preslikavanje na kanonsko nazivlje radi normalizeTier na ulazu u svaku
 * provjeru prava, pa 'standard' i 'starter' ovdje imaju identična prava.
 *
 * @param {{ user: any, isPro: boolean, isPaid: boolean }} authState
 * @returns {UserAccess}
 */
export function buildUserAccess(authState) {
  const isLoggedIn = !!authState.user
  let subscriptionTier = 'free'
  if (authState.isPro)       subscriptionTier = 'pro'
  else if (authState.isPaid) subscriptionTier = 'standard'
  return { subscriptionTier, isLoggedIn }
}

/**
 * Returns whether the user can proceed at the given question index.
 *
 * Politika: pravi ispit s timerom (freeExam) je besplatan za svakog prijavljenog
 * korisnika — zaključana je tek razrada rezultata. Vježbanje ostaje ograničeno:
 * bez zastavica free tier ne prolazi uopće, a uz freePractice dobiva FREE_LIMIT
 * pitanja. Pozivi bez trećeg argumenta zadržavaju staro paid-only ponašanje.
 *
 * @param {UserAccess} userAccess
 * @param {number} questionIndex  0-based index of the question being answered
 * @param {{ freeExam?: boolean, freePractice?: boolean }} [opts]
 * @returns {{ canProceed: boolean, reason: 'ok'|'not-logged-in'|'limit-reached' }}
 */
export function checkSimulatorAccess(userAccess, questionIndex, { freeExam = false, freePractice = false } = {}) {
  if (!userAccess?.isLoggedIn) {
    return { canProceed: false, reason: 'not-logged-in' }
  }
  if (normalizeTier(userAccess.subscriptionTier) !== 'free') {
    return { canProceed: true, reason: 'ok' }
  }
  if (freeExam) {
    return { canProceed: true, reason: 'ok' }
  }
  if (freePractice && questionIndex < FREE_LIMIT) {
    return { canProceed: true, reason: 'ok' }
  }
  return { canProceed: false, reason: 'limit-reached' }
}

/**
 * Returns per-feature access for the results page.
 * Add more flags here as you introduce new Pro features.
 *
 * @param {UserAccess} userAccess
 * @returns {{ canSeeAnalysis: boolean, canSeeWeakAreas: boolean, canSeePlan: boolean, canAskAI: boolean }}
 */
export function checkResultsAccess(userAccess) {
  const isPro = normalizeTier(userAccess?.subscriptionTier) === 'pro'
  return {
    canSeeAnalysis:  isPro,
    canSeeWeakAreas: isPro,
    canSeePlan:      isPro,
    canAskAI:        isPro,
  }
}

/**
 * Discere (svi predmeti): rješavanje i ocjena ispita su besplatni, ali razrada
 * rezultata (pregled pitanja, točni odgovori, obrazloženja, analiza po temama,
 * savjeti, vježbanje grešaka) ide od Standard plana naviše. Zaseban helper jer
 * checkResultsAccess pokriva pro-only AI analizu.
 *
 * @param {UserAccess} userAccess
 * @returns {boolean}
 */
export function canSeeDiscereAnalysis(userAccess) {
  return !!userAccess && normalizeTier(userAccess.subscriptionTier) !== 'free'
}

export const canSeeHrvAnalysis = canSeeDiscereAnalysis

/**
 * Ispiti koji su u cijelosti besplatni u vježbanju (bez FREE_LIMIT gatea), po
 * predmetu. Ispitni mod je već besplatan za sve ispite — ovo dodatno oslobađa
 * vježbanje na dogovorenom demo skupu.
 *
 * PRIVREMENO: popis ostaje ovdje samo dok registar predmeta ne dobije polje
 * `freePracticeExams`; tada je ovo fallback za predmete koji ga nemaju.
 */
export const FREE_PRACTICE_EXAMS = {
  hrv: ['2016_ljeto_B'],
}

/**
 * @param {string} subject  — ključ predmeta, npr. 'hrv'
 * @param {string} examKey
 * @returns {boolean}
 */
export function isFreePracticeExam(subject, examKey) {
  const keys = FREE_PRACTICE_EXAMS[subject]
  return Array.isArray(keys) && keys.includes(examKey)
}

export const HRV_FREE_PRACTICE_EXAMS = FREE_PRACTICE_EXAMS.hrv

export function isHrvFreePracticeExam(examKey) {
  return isFreePracticeExam('hrv', examKey)
}

/**
 * Najniži plan koji korisniku otključava traženu značajku.
 *
 * Prije je ova funkcija uvijek vraćala 'pro', pa je i razrada rezultata (koja
 * ide od Standarda) nudila Pro. Sada odlučuje matrica iz lib/discere/entitlements.
 * Bez značajke zadržava staro ponašanje (Pro-only AI analiza).
 *
 * @param {SubscriptionTier} currentTier
 * @param {string} [feature] ključ iz FEATURES
 * @returns {'starter'|'pro'|null}  null = korisnik već ima pristup
 */
export function getUpgradeTarget(currentTier, feature = 'ai_analysis') {
  return upgradeTargetFor(feature, currentTier)
}

/**
 * Computes score display badge: label, color, emoji.
 *
 * @param {{ score: number, totalQuestions: number }} stats
 * @returns {{ label: string, color: string, emoji: string }}
 */
export function getScoreStatus({ score, totalQuestions }) {
  // Ljestvica 85/70/55/40 dolazi iz lib/discere/grade-scale (jedna za sve predmete).
  return gradeStatus(pctOf(score, Math.max(1, totalQuestions)))
}

/**
 * Builds a fully-qualified upgrade URL.
 *
 * @param {string} from  — tracking origin, e.g. "simulator-mat"
 * @param {string} tier  — 'pro' | 'standard'
 * @returns {string}
 */
export function upgradeUrl(from = '', tier = 'pro') {
  return `/pro?from=${encodeURIComponent(from)}&plan=${tier}`
}
