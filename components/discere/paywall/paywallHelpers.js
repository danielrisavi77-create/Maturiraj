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
 * @param {UserAccess} userAccess
 * @param {number} questionIndex  0-based index of the question being answered
 * @returns {{ canProceed: boolean, reason: 'ok'|'not-logged-in'|'limit-reached' }}
 */
export function checkSimulatorAccess(userAccess, questionIndex) {
  if (!userAccess?.isLoggedIn) {
    return { canProceed: false, reason: 'not-logged-in' }
  }
  if (userAccess.subscriptionTier !== 'free') {
    return { canProceed: true, reason: 'ok' }
  }
  return questionIndex < FREE_LIMIT
    ? { canProceed: true,  reason: 'ok' }
    : { canProceed: false, reason: 'limit-reached' }
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
