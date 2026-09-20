/**
 * pedagogy.js — Pedagogical engine for Discere simulator
 * Features: SM-2 Spaced Repetition, Adaptive Difficulty, Confidence Tracking,
 *           Exam Strategy Coach, Topic Mastery, Pre-exam Warmup
 */

// Uvoz ide iz qcore.js, a ne iz helpers.js: ovaj modul se preko lib/learning/hrv-engine.ts
// uvlaci u serverske route handlere, gdje React hookovi iz helpers.js ne postoje.
import { chk, qIdentity } from './qcore.js';

// ═══════════════════════════════════════════════════════════
// 1. SM-2 SPACED REPETITION
// ═══════════════════════════════════════════════════════════

/**
 * SM-2 algorithm: compute next interval + easiness factor
 * @param {object} entry - current errorTracker entry
 * @param {boolean} correct - was the answer correct?
 * @param {number} quality - 0-5 quality of response (5=perfect, 0=blackout)
 * @returns {object|null} updated entry, or null if mastered (remove it)
 */
export function sm2Update(entry, correct, quality) {
  let ef = entry.ef ?? 2.5;       // easiness factor (default 2.5)
  let interval = entry.interval ?? 0;
  let reps = entry.reps ?? 0;
  const today = new Date().toLocaleDateString("hr");

  if (!correct || quality < 3) {
    // Failed: reset to beginning
    reps = 0;
    interval = 0;
    ef = Math.max(1.3, ef - 0.2);
    return {
      ...entry,
      ef, interval, reps,
      nextReview: today,
      lastDate: today,
      count: (entry.count || 0) + 1
    };
  }

  // Correct: advance
  ef = Math.max(1.3, ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  reps++;

  if (reps === 1) interval = 1;
  else if (reps === 2) interval = 3;
  else if (reps === 3) interval = 7;
  else if (reps === 4) interval = 14;
  else interval = Math.round(interval * ef);

  // Mastered: after 5+ successful reps with high ef
  if (reps >= 5 && ef >= 2.3) return null;

  const nextDate = new Date(Date.now() + interval * 86400000).toLocaleDateString("hr");
  return {
    ...entry,
    ef, interval, reps,
    nextReview: nextDate,
    lastCorrect: today,
    count: Math.max(0, (entry.count || 1) - 1)
  };
}

/**
 * Get questions due for review today
 * @param {object} errorTracker - the full errorTracker object
 * @returns {Array} array of {key, entry} objects due for review
 */
export function getDueReviews(errorTracker) {
  if (!errorTracker) return [];
  const today = new Date().toLocaleDateString("hr");
  const todayMs = new Date().setHours(0, 0, 0, 0);
  return Object.entries(errorTracker)
    .filter(([, entry]) => {
      if (!entry.nextReview) return true; // no date = due now
      // Parse Croatian locale date (d. M. yyyy.)
      try {
        const parts = entry.nextReview.replace(/\./g, '').trim().split(/\s+/);
        const d = parseInt(parts[0]), m = parseInt(parts[1]) - 1, y = parseInt(parts[2]);
        const revDate = new Date(y, m, d).setHours(0, 0, 0, 0);
        return revDate <= todayMs;
      } catch {
        return entry.nextReview === today;
      }
    })
    .map(([key, entry]) => ({ key, ...entry }))
    .sort((a, b) => (a.interval || 0) - (b.interval || 0)); // newest errors first
}


/**
 * Izračunava novi errorTracker nakon završenog ispita/sesije: krivi odgovori
 * ulaze/se ažuriraju preko SM-2 (quality=1), točni odgovori na postojeći zapis
 * ažuriraju se preko SM-2 (quality=4) i brišu iz trackera kad postanu mastered.
 * Čista funkcija — ne mutira errorTracker, ovisnost o sm2Update je injektirana
 * (izbjegava ciklički import iz @/lib/learning/hrv-engine).
 * @param {Array} qs - pitanja ispita/sesije (koriste _examKey/_srcId za virtualne sesije)
 * @param {object} answers - result.answers, ključ je q.id
 * @param {object} errorTracker - trenutni prev.errorTracker
 * @param {string} examKey - result.examKey (fallback kad q nema _examKey)
 * @param {function} sm2UpdateFn - sm2Update
 * @returns {object} novi errorTracker
 */
export function buildTrackerUpdate(qs, answers, errorTracker, examKey, sm2UpdateFn) {
  const tracker = { ...(errorTracker || {}) };
  const ident = q => qIdentity(q, { key: examKey });
  (qs || []).forEach(q => {
    if (q.type !== "mc") return;
    const outcome = chk(q, answers?.[q.id]);
    const id = ident(q);
    const key = id.examKey + "_" + id.qid;
    if (outcome === false) {
      const ex = tracker[key] || { count: 0, q: (q.q || "").slice(0, 80), topic: q.topic || "ostalo", examKey: id.examKey, qid: id.qid, ef: 2.5, reps: 0 };
      const updated = sm2UpdateFn(ex, false, 1);
      if (updated) tracker[key] = updated;
    } else if (outcome === true && tracker[key]) {
      const updated = sm2UpdateFn(tracker[key], true, 4);
      if (updated === null) delete tracker[key]; // mastered
      else tracker[key] = updated;
    }
  });
  return tracker;
}


// ═══════════════════════════════════════════════════════════
// 2. ADAPTIVE DIFFICULTY
// ═══════════════════════════════════════════════════════════

/**
 * Calculate topic weights for adaptive question selection.
 * Weak topics get higher weight (more questions), strong topics get less.
 * @param {Array} history - userData.history array
 * @param {number} recentN - number of recent exams to consider
 * @returns {object} { [topic]: weight } where weight 0-1, sum = 1
 */
export function calcTopicWeights(history, recentN = 5) {
  const recent = (history || []).slice(-recentN);
  const stats = {};

  recent.forEach(h => {
    if (!h.topic_breakdown) return;
    Object.entries(h.topic_breakdown).forEach(([topic, { correct, total }]) => {
      if (!stats[topic]) stats[topic] = { correct: 0, total: 0 };
      stats[topic].correct += correct;
      stats[topic].total += total;
    });
  });

  const topics = Object.keys(stats);
  if (topics.length === 0) return {};

  // Accuracy per topic (0-1), invert so weak = high weight
  const raw = {};
  topics.forEach(t => {
    const acc = stats[t].total > 0 ? stats[t].correct / stats[t].total : 0.5;
    raw[t] = Math.max(0.1, 1 - acc); // weak topic = high value
  });

  // Normalize to sum = 1
  const sum = Object.values(raw).reduce((a, b) => a + b, 0);
  const weights = {};
  topics.forEach(t => { weights[t] = raw[t] / sum; });

  return weights;
}

/**
 * Select questions for adaptive daily mix based on topic weights.
 * @param {Array} allQuestions - all available MC questions
 * @param {object} weights - from calcTopicWeights
 * @param {number} count - how many questions to select
 * @returns {Array} selected questions
 */
export function selectAdaptiveMix(allQuestions, weights, count = 15) {
  const mcQs = allQuestions.filter(q => q.type === "mc" && q.topic);
  if (mcQs.length === 0) return [];

  const byTopic = {};
  mcQs.forEach(q => {
    if (!byTopic[q.topic]) byTopic[q.topic] = [];
    byTopic[q.topic].push(q);
  });

  const selected = [];
  const used = new Set();
  const topics = Object.keys(weights).filter(t => byTopic[t]?.length > 0);
  if (topics.length === 0) return mcQs.sort(() => Math.random() - 0.5).slice(0, count);

  // Teme iz povijesti kojih više nema u bazenu (npr. stari zapisi s temom koja je u
  // međuvremenu preimenovana) ovdje ispadaju, pa se preostale težine renormaliziraju —
  // inače bi zbroj bio manji od 1 i sesija bi dobila manje pitanja nego što je traženo.
  const weightSum = topics.reduce((sum, t) => sum + (weights[t] || 0), 0) || 1;

  // Allocate slots proportionally
  topics.forEach(t => {
    const slots = Math.max(1, Math.round(count * ((weights[t] || 0) / weightSum)));
    const pool = [...byTopic[t]].sort(() => Math.random() - 0.5);
    pool.slice(0, slots).forEach(q => { selected.push(q); used.add(q); });
  });

  // Zaokruživanje po temama i male teme mogu dati manje od count — dopuni iz ostatka bazena.
  if (selected.length < count) {
    const rest = mcQs.filter(q => !used.has(q)).sort(() => Math.random() - 0.5);
    selected.push(...rest.slice(0, count - selected.length));
  }

  // Shuffle and trim to count
  return selected.sort(() => Math.random() - 0.5).slice(0, count);
}


// ═══════════════════════════════════════════════════════════
// 3. CONFIDENCE TRACKING
// ═══════════════════════════════════════════════════════════

/**
 * Analyze confidence vs accuracy.
 * @param {object} confidenceLog - { "examKey_qid": { conf:1-3, correct:bool, topic:str } }
 * @returns {object} { overall: {overconfident,underconfident,...}, byTopic: {[topic]: {...}} }
 */
export function analyzeConfidence(confidenceLog) {
  if (!confidenceLog || Object.keys(confidenceLog).length === 0) return null;

  const entries = Object.values(confidenceLog);
  const overall = calcConfStats(entries);

  // By topic
  const byTopic = {};
  entries.forEach(e => {
    if (!e.topic) return;
    if (!byTopic[e.topic]) byTopic[e.topic] = [];
    byTopic[e.topic].push(e);
  });

  const topicStats = {};
  Object.entries(byTopic).forEach(([topic, items]) => {
    if (items.length >= 3) {
      topicStats[topic] = calcConfStats(items);
    }
  });

  return { overall, byTopic: topicStats };
}

function calcConfStats(entries) {
  const total = entries.length;
  const highConf = entries.filter(e => e.conf === 3);
  const lowConf = entries.filter(e => e.conf === 1);

  const highConfWrong = highConf.filter(e => !e.correct).length;
  const lowConfRight = lowConf.filter(e => e.correct).length;

  const accuracy = entries.filter(e => e.correct).length / total;
  const avgConf = entries.reduce((a, e) => a + e.conf, 0) / total;

  return {
    total,
    accuracy: Math.round(accuracy * 100),
    avgConf: Math.round(avgConf * 100) / 100,
    overconfident: highConf.length > 0 ? Math.round(highConfWrong / highConf.length * 100) : 0,
    underconfident: lowConf.length > 0 ? Math.round(lowConfRight / lowConf.length * 100) : 0,
    highConfWrong,
    lowConfRight
  };
}


// ═══════════════════════════════════════════════════════════
// 4. EXAM STRATEGY COACH
// ═══════════════════════════════════════════════════════════

/**
 * Generate strategy tips based on exam performance and timing data.
 * @param {object} params - { qTimes, answers, questions, pct, grade, examMode }
 * @returns {Array} array of {type, icon, title, detail} tip objects
 */
export function generateStrategyTips({ qTimes, answers, questions, pct, grade, examMode }) {
  const tips = [];
  const mcQs = (questions || []).filter(q => q.type === "mc");
  if (mcQs.length === 0) return tips;

  const times = mcQs.map(q => ({ q, time: qTimes?.[q.id] || 0 })).filter(t => t.time > 0);
  if (times.length === 0) return tips;

  const avgTime = times.reduce((a, t) => a + t.time, 0) / times.length;
  const totalTime = times.reduce((a, t) => a + t.time, 0);

  // Tip 1: Questions where student was too fast AND got wrong
  const rushErrors = times.filter(t => {
    const isWrong = answers[t.q.id] !== t.q.sol?.cl;
    return isWrong && t.time < avgTime * 0.5 && t.time < 20;
  });
  if (rushErrors.length > 0) {
    const worstRush = rushErrors.sort((a, b) => a.time - b.time)[0];
    tips.push({
      type: "rush",
      icon: "⚡",
      title: "Prebrzi odgovori",
      detail: `Pitanje ${mcQs.indexOf(worstRush.q) + 1} si riješio/la za samo ${worstRush.time}s — prosjek je ${Math.round(avgTime)}s. Čitaj pažljivije pitanja s analizom teksta.`
    });
  }

  // Tip 2: Questions where student spent too long AND still got wrong
  const slowErrors = times.filter(t => {
    const isWrong = answers[t.q.id] !== t.q.sol?.cl;
    return isWrong && t.time > avgTime * 2;
  });
  if (slowErrors.length > 0) {
    const longest = slowErrors.sort((a, b) => b.time - a.time)[0];
    tips.push({
      type: "stuck",
      icon: "🐌",
      title: "Previše vremena na krivom odgovoru",
      detail: `Na pitanju ${mcQs.indexOf(longest.q) + 1} si proveo/la ${longest.time}s (prosjek: ${Math.round(avgTime)}s) i odgovorio/la krivo. Kad nisi siguran/na, označi i idi dalje.`
    });
  }

  // Tip 3: Time distribution — first half vs second half
  const half = Math.floor(times.length / 2);
  if (half > 2) {
    const firstHalfAvg = times.slice(0, half).reduce((a, t) => a + t.time, 0) / half;
    const secondHalfAvg = times.slice(half).reduce((a, t) => a + t.time, 0) / (times.length - half);
    if (secondHalfAvg < firstHalfAvg * 0.6) {
      tips.push({
        type: "fatigue",
        icon: "🔋",
        title: "Ubrzaš prema kraju",
        detail: `Prva polovica: prosjek ${Math.round(firstHalfAvg)}s/pitanje. Druga: ${Math.round(secondHalfAvg)}s. Rasporedi vrijeme ravnomjernije — zadnja pitanja zaslužuju istu pažnju.`
      });
    }
  }

  // Tip 4: Topic-specific weakness
  const topicErrors = {};
  mcQs.forEach(q => {
    if (!q.topic) return;
    if (!topicErrors[q.topic]) topicErrors[q.topic] = { wrong: 0, total: 0 };
    topicErrors[q.topic].total++;
    if (answers[q.id] !== q.sol?.cl) topicErrors[q.topic].wrong++;
  });
  const weakestTopic = Object.entries(topicErrors)
    .filter(([, d]) => d.total >= 3 && d.wrong / d.total > 0.5)
    .sort((a, b) => b[1].wrong / b[1].total - a[1].wrong / a[1].total)[0];

  if (weakestTopic) {
    const [topic, data] = weakestTopic;
    tips.push({
      type: "topic",
      icon: "📚",
      title: `Slaba tema: ${topic}`,
      detail: `${data.wrong}/${data.total} netočnih u ovoj temi. Probaj filtrirano vježbanje po toj temi.`
    });
  }

  // Tip 5: Overall time management (exam mode only)
  if (examMode && totalTime > 0) {
    const examMinutes = Math.ceil(totalTime / 60);
    const idealMinPerQ = 100 / mcQs.length;
    const actualMinPerQ = totalTime / 60 / mcQs.length;
    if (actualMinPerQ > idealMinPerQ * 1.3) {
      tips.push({
        type: "time",
        icon: "⏱️",
        title: "Upravljanje vremenom",
        detail: `Prosjek ${Math.round(actualMinPerQ * 60)}s/pitanje — idealno je ~${Math.round(idealMinPerQ * 60)}s. Na pravom ispitu, to bi bio problem.`
      });
    }
  }

  // Tip 6: Great performance
  if (pct >= 90 && tips.length === 0) {
    tips.push({
      type: "excellent",
      icon: "🏆",
      title: "Odlična strategija!",
      detail: `${pct}% točnosti s prosječnim vremenom ${Math.round(avgTime)}s po pitanju. Nastavi tako!`
    });
  }

  return tips.slice(0, 3); // Max 3 tips
}


// ═══════════════════════════════════════════════════════════
// 5. TOPIC MASTERY PATH
// ═══════════════════════════════════════════════════════════

const MASTERY_LEVELS = [
  { key: "unlearned", label: "Nepoznato", icon: "○", min: 0 },
  { key: "learning", label: "Učenje", icon: "◔", min: 1 },
  { key: "practicing", label: "Vježbanje", icon: "◑", min: 20 },
  { key: "proficient", label: "Napredno", icon: "◕", min: 50 },
  { key: "mastered", label: "Savladano", icon: "●", min: 80 }
];

/**
 * Calculate mastery level for each topic based on accuracy trend.
 * Uses weighted average favoring recent exams.
 * @param {Array} history - userData.history
 * @returns {object} { [topic]: { level, label, icon, accuracy, trend, exams } }
 */
export function calcTopicMastery(history) {
  if (!history || history.length === 0) return {};

  const topicData = {};
  // Collect all topic data with time-weighting
  history.forEach((h, i) => {
    if (!h.topic_breakdown) return;
    const recency = (i + 1) / history.length; // 0..1 (recent = higher)
    Object.entries(h.topic_breakdown).forEach(([topic, { correct, total }]) => {
      if (total === 0) return;
      if (!topicData[topic]) topicData[topic] = { results: [], totalQ: 0 };
      topicData[topic].results.push({
        acc: correct / total,
        weight: 0.5 + recency * 0.5, // recent exams weight 1.0, oldest 0.5
        date: h.date
      });
      topicData[topic].totalQ += total;
    });
  });

  const mastery = {};
  Object.entries(topicData).forEach(([topic, data]) => {
    // Weighted average accuracy
    const totalW = data.results.reduce((a, r) => a + r.weight, 0);
    const wAvg = data.results.reduce((a, r) => a + r.acc * r.weight, 0) / totalW;
    const pct = Math.round(wAvg * 100);

    // Trend: last 2 vs previous 2
    let trend = 0;
    if (data.results.length >= 4) {
      const recent = data.results.slice(-2).reduce((a, r) => a + r.acc, 0) / 2;
      const older = data.results.slice(-4, -2).reduce((a, r) => a + r.acc, 0) / 2;
      trend = Math.round((recent - older) * 100);
    }

    // Determine level
    let level = MASTERY_LEVELS[0];
    for (const l of MASTERY_LEVELS) {
      if (pct >= l.min && data.totalQ >= (l.key === "unlearned" ? 0 : 3)) level = l;
    }

    mastery[topic] = {
      level: level.key,
      label: level.label,
      icon: level.icon,
      accuracy: pct,
      trend,
      exams: data.results.length
    };
  });

  return mastery;
}

export { MASTERY_LEVELS };


// ═══════════════════════════════════════════════════════════
// 6. PRE-EXAM WARMUP
// ═══════════════════════════════════════════════════════════

/**
 * Select warmup questions from weakest topics.
 * @param {Array} allQuestions - all MC questions across all exams
 * @param {Array} history - userData.history
 * @param {object} errorTracker - userData.errorTracker
 * @param {number} count - questions to select (default 5)
 * @returns {Array} selected warmup questions (easier ones from weak topics)
 */
export function selectWarmupQuestions(allQuestions, history, errorTracker, count = 5) {
  const weights = calcTopicWeights(history);
  const weakTopics = Object.entries(weights)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([t]) => t);

  if (weakTopics.length === 0) {
    // No history: pick random easy questions
    return allQuestions
      .filter(q => q.type === "mc")
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }

  // Prefer: questions from weak topics that were previously answered correctly
  // (easier warmup, builds confidence)
  const correctKeys = new Set();
  (history || []).forEach(h => {
    if (!h.answers) return;
    Object.entries(h.answers).forEach(([qid, ans]) => {
      if (typeof ans === "string") correctKeys.add(h.examKey + "_" + qid);
    });
  });

  const pool = allQuestions.filter(q => {
    if (q.type !== "mc") return false;
    if (!q.topic) return false;
    return weakTopics.includes(q.topic);
  });

  // Sort: previously correct (easier) first, then shuffle
  const sorted = pool.sort((a, b) => {
    const aEasy = correctKeys.has(a._examKey + "_" + a.id) ? 0 : 1;
    const bEasy = correctKeys.has(b._examKey + "_" + b.id) ? 0 : 1;
    return aEasy - bEasy || Math.random() - 0.5;
  });

  return sorted.slice(0, count);
}
