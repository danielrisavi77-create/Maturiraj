/**
 * Pure scoring and utility functions for the Engleski Simulator.
 * Exported for unit testing and shared use.
 */

/**
 * Normalises a string for case-insensitive, punctuation-tolerant comparison.
 * Used when grading fill-blank (fb) questions.
 */
export function nrm(s) {
  return (s || "").toLowerCase().trim().replace(/[.,!?;:]/g, "");
}

/**
 * Checks a single answer against the question's solution.
 * Returns true (correct), false (wrong), or null (manual grading — sa/es types).
 */
export function chk(q, a) {
  if (q.type === "mc" || q.type === "ins") return a === q.sol.cl;
  if (q.type === "mat") {
    if (!a) return false;
    const nA = Object.fromEntries(Object.entries(a).map(([k, v]) => [k.trim(), (v || '').trim()]));
    return q.sol.pairs.every(p => nA[p.l.trim()] === p.r.trim());
  }
  if (q.type === "fb") {
    const ac = q.sol.alt || (Array.isArray(q.sol.ans) ? q.sol.ans : [q.sol.ans]);
    return ac.some(x => nrm(x) === nrm(a));
  }
  return null;
}

/**
 * NCVVO grade thresholds for the English matura (both levels).
 * Single source of truth shared by client and server-side grading.
 * [minPct, grade1-5]
 */
export const GRADE_THRESHOLDS = [
  [85, 5],
  [70, 4],
  [55, 3],
  [40, 2],
  [0,  1],
];

/**
 * Maps a percentage score to a Croatian matura grade (1–5).
 */
export function grade(p) {
  for (const [min, g] of GRADE_THRESHOLDS) {
    if (p >= min) return g;
  }
  return 1;
}

/**
 * Calculates XP gained from completing an exam at the given percentage.
 */
export function calcXpGain(pct) {
  let xp = Math.round(pct * 0.8);
  if (pct >= 85) xp += 30;
  else if (pct >= 70) xp += 15;
  if (pct === 100) xp += 50;
  return Math.max(5, xp);
}

/**
 * Updates daily streak based on the current date.
 * - Same day  → unchanged
 * - Yesterday → increment streak
 * - Gap       → reset to 1
 */
export function updateStreak(data) {
  const today = new Date().toDateString();
  if (data.lastDate === today) return data;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const newStreak = data.lastDate === yesterday ? data.streak + 1 : 1;
  return { ...data, streak: newStreak, lastDate: today };
}

/**
 * Validates and sanitises a raw parsed userData object from localStorage.
 * Prevents tampered local state from corrupting app logic.
 */
export function validateUserData(p) {
  if (!p || typeof p !== "object") {
    return { xp: 0, streak: 0, lastDate: null, history: [], totalExams: 0, errorTracker: {}, bookmarks: [] };
  }
  // Sanitize errorTracker: keys are question IDs (strings), values are non-negative error counts
  const rawEt = p.errorTracker
  const validatedEt = {}
  if (rawEt && typeof rawEt === "object" && !Array.isArray(rawEt)) {
    for (const [k, v] of Object.entries(rawEt)) {
      if (typeof k !== "string" || k.length > 200) continue
      if (typeof v === "number" && Number.isFinite(v) && v >= 0) {
        validatedEt[k] = Math.min(Math.floor(v), 9999)
      }
    }
  }
  return {
    xp: (typeof p.xp === "number" && p.xp >= 0 && p.xp <= 10000000) ? Math.floor(p.xp) : 0,
    streak: (typeof p.streak === "number" && p.streak >= 0 && p.streak <= 3650) ? Math.floor(p.streak) : 0,
    lastDate: (typeof p.lastDate === "string" && p.lastDate.length < 40) ? p.lastDate : null,
    history: Array.isArray(p.history)
      ? p.history
          .filter(h => h && typeof h.examKey === "string" && typeof h.pct === "number" && h.pct >= 0 && h.pct <= 100)
          .slice(0, 1000)
      : [],
    totalExams: (typeof p.totalExams === "number" && p.totalExams >= 0) ? Math.floor(p.totalExams) : 0,
    errorTracker: validatedEt,
    bookmarks: Array.isArray(p.bookmarks)
      ? p.bookmarks.filter(b => b !== null && typeof b === "object" && !Array.isArray(b)).slice(0, 500)
      : [],
  };
}

/**
 * Validates and sanitises raw bookmark data from localStorage.
 * Drops any entry whose key or value shape is unexpected.
 */
export function validateBookmarks(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const out = {};
  for (const [key, val] of Object.entries(raw)) {
    if (typeof key !== "string" || key.length > 300) continue;
    if (!val || typeof val !== "object") continue;
    if (typeof val.qid === "undefined") continue;
    if (typeof val.examKey !== "string") continue;
    out[key] = {
      qid: val.qid,
      examKey: String(val.examKey).slice(0, 100),
      examLabel: typeof val.examLabel === "string" ? val.examLabel.slice(0, 200) : "",
      q: typeof val.q === "string" ? val.q.slice(0, 200) : "",
    };
  }
  return out;
}

/**
 * Pure tick extracted from useTimer's setInterval callback.
 * Makes the countdown logic unit-testable without React.
 *
 * @param {number}   s       - Current remaining seconds
 * @param {boolean}  expired - Whether the timer has already fired onExpire
 * @param {Set}      warned  - Set of threshold values already warned
 * @param {number[]} warnAt  - Warning thresholds in seconds (e.g. [600, 300])
 * @returns {{ s, expired, warned, didExpire, didWarn }}
 */
export function timerTick(s, expired, warned, warnAt = []) {
  const ns = Math.max(0, s - 1);
  const didExpire = ns === 0 && !expired;
  const didWarn = warnAt.includes(ns) && !warned.has(ns) ? ns : null;
  return {
    s: ns,
    expired: expired || didExpire,
    warned: didWarn !== null ? new Set([...warned, didWarn]) : warned,
    didExpire,
    didWarn,
  };
}

/**
 * Formats seconds as a "MM:SS" timer string.
 */
export function formatTimer(s) {
  return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

/**
 * Returns the CSS urgency class for the timer display.
 */
export function timerCls(s) {
  return s < 300 ? "danger" : s < 600 ? "warn" : "";
}
