// components/discere/paywall/paywallHelpers.js
// ─────────────────────────────────────────────────────────────────────────────
// Pure helper functions — no React, no side effects.
// ─────────────────────────────────────────────────────────────────────────────

import { FREE_LIMIT } from './paywallCopy'

export { FREE_LIMIT }

/**
 * @typedef {'free'|'standard'|'pro'} SubscriptionTier
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
  if (userAccess.subscriptionTier !== 'free') {
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
  const isPro = userAccess?.subscriptionTier === 'pro'
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
  return !!userAccess && userAccess.subscriptionTier !== 'free'
}

export const canSeeHrvAnalysis = canSeeDiscereAnalysis

/**
 * Ispiti koji su u cijelosti besplatni u vježbanju (bez FREE_LIMIT gatea), po
 * predmetu. Ispitni mod je već besplatan za sve ispite — ovo dodatno oslobađa
 * vježbanje na dogovorenom demo skupu.
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
 * Returns the minimum plan the user needs to upgrade to.
 * Simulator + AI analysis = Pro only.
 *
 * @param {SubscriptionTier} currentTier
 * @returns {'pro'|'standard'|null}
 */
export function getUpgradeTarget(currentTier) {
  if (currentTier === 'pro') return null
  return 'pro'
}

/**
 * Computes score display badge: label, color, emoji.
 *
 * @param {{ score: number, totalQuestions: number }} stats
 * @returns {{ label: string, color: string, emoji: string }}
 */
export function getScoreStatus({ score, totalQuestions }) {
  const pct = (score / Math.max(1, totalQuestions)) * 100
  if (pct >= 85) return { label: 'Odlično',        color: '#3ecf6e', emoji: '🏆' }
  if (pct >= 70) return { label: 'Vrlo dobro',      color: '#2dcfbe', emoji: '✨' }
  if (pct >= 55) return { label: 'Dobro',           color: '#4b7bff', emoji: '👍' }
  if (pct >= 40) return { label: 'Dovoljno',        color: '#e9b446', emoji: '📘' }
  return             { label: 'Potrebna vježba', color: '#f87171', emoji: '💪' }
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
