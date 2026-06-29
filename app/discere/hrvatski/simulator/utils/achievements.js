/**
 * achievements.js — Badge definitions and achievement checker
 */

export const ACHIEVEMENTS = [
  { id: 'first_exam',  emoji: '🎓', title: 'Prva matura!',        desc: 'Riješio/la si prvi ispit u simulatoru!' },
  { id: 'grade_5',     emoji: '⭐', title: 'Odličan!',             desc: 'Postigao/la si ocjenu 5 na ispitu!' },
  { id: 'perfect',     emoji: '💎', title: 'Perfekcionist!',       desc: '100% točnih odgovora — savršeno!' },
  { id: 'five_exams',  emoji: '📚', title: 'Marljivi student',     desc: 'Riješio/la si 5 ispita!' },
  { id: 'ten_exams',   emoji: '🏆', title: 'Iskusni maturant',     desc: 'Riješio/la si 10 ispita!' },
  { id: 'streak_3',    emoji: '🔥', title: 'Tri dana zaredom!',    desc: 'Učiš 3 dana uzastopno — odlično!' },
  { id: 'streak_7',    emoji: '💪', title: 'Tjedan dana!',         desc: 'Učiš 7 dana uzastopno — bravo!' },
  { id: 'grammar_ace', emoji: '✍️', title: 'Gramatičar!',          desc: '100% točnih odgovora iz Gramatike!' },
  { id: 'improvement', emoji: '📈', title: 'Veliki napredak!',     desc: 'Poboljšao/la si rezultat za +20%!' },
  { id: 'speed_ace',   emoji: '⚡', title: 'Munjeviti odgovori!',  desc: 'Prosjek ispod 30s po pitanju!' },
  { id: 'comeback',    emoji: '🔄', title: 'Comeback!',            desc: 'Popravak od ocjene 1 na 3 ili više!' },
];

/**
 * Check which achievements are newly earned after an exam.
 * @param {object} userData - current userData (before update)
 * @param {object} result - { pct, grade, qTimes, examKey, answers }
 * @param {object} topicBreakdown - { [topic]: { correct, total } }
 * @returns {{ newAchievements: string[], newBadges: object[] }}
 */
export function checkNewAchievements(userData, result, topicBreakdown) {
  const alreadyEarned = new Set(userData?.achievements || []);
  const toAdd = [];
  const totalExams = (userData?.totalExams || 0) + 1;

  function tryEarn(id) {
    if (!alreadyEarned.has(id)) {
      alreadyEarned.add(id);
      const badge = ACHIEVEMENTS.find(a => a.id === id);
      if (badge) toAdd.push(badge);
    }
  }

  // Milestone badges
  if (totalExams >= 1)  tryEarn('first_exam');
  if (totalExams >= 5)  tryEarn('five_exams');
  if (totalExams >= 10) tryEarn('ten_exams');

  // Grade-based
  if (result.grade === 5)   tryEarn('grade_5');
  if (result.pct === 100)   tryEarn('perfect');

  // Streak
  const streak = userData?.streak || 0;
  if (streak >= 3) tryEarn('streak_3');
  if (streak >= 7) tryEarn('streak_7');

  // Grammar mastery: 100% correct in grammar (min 3 questions)
  const gram = topicBreakdown?.jez_gram;
  if (gram && gram.total >= 3 && gram.correct === gram.total) {
    tryEarn('grammar_ace');
  }

  // Improvement: +20pp vs best previous attempt on same exam
  const prevAttempts = (userData?.history || []).filter(h => h.examKey === result.examKey);
  if (prevAttempts.length > 0) {
    const bestPrev = Math.max(...prevAttempts.map(h => h.pct));
    if (result.pct >= bestPrev + 20) tryEarn('improvement');
  }

  // Comeback: previous was grade 1, now 3+
  if (prevAttempts.length > 0) {
    const lastAttempt = prevAttempts[prevAttempts.length - 1];
    if (lastAttempt?.grade === 1 && result.grade >= 3) tryEarn('comeback');
  }

  // Speed mastery: avg time < 30s per MC question  (min 10 questions timed)
  const timeVals = Object.values(result.qTimes || {}).filter(t => t > 0 && t < 600);
  if (timeVals.length >= 10) {
    const avg = timeVals.reduce((a, b) => a + b, 0) / timeVals.length;
    if (avg < 30) tryEarn('speed_ace');
  }

  return {
    newAchievements: [...alreadyEarned],
    newBadges: toAdd,
  };
}
