// @ts-nocheck
// Smoke test ekrana (faza 5.3, korak "screens"): svaki ekran izdvojen u
// components/simulator/mat/screens/* mora se iscrtati, pa se odmah vidi ako je pri
// premjestanju neki simbol ostao undefined (@ts-nocheck to inace sakriva).
// @vitest-environment happy-dom
import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { __addExams } from '@/components/simulator/mat/core/exams';
import { TodayHero, DailyChallengeScreen, DailySummary } from '@/components/simulator/mat/screens/today';
import { ModeSelect, GuideScreen } from '@/components/simulator/mat/screens/modes';
import { PDFReportScreen, ScoreForecast, StatsScreen, AnalyticsPanel, GradePrediction } from '@/components/simulator/mat/screens/stats';
import { AIPractice, TopicFilterScreen, ErrorsScreen, AdaptiveTrening } from '@/components/simulator/mat/screens/practice';
import { BookmarksScreen, BrowseScreen } from '@/components/simulator/mat/screens/browse';
import { srsLoad, getSrsDueCards, SpacedRepetitionScreen, FlashcardScreen } from '@/components/simulator/mat/screens/srs';

afterEach(() => cleanup());

// Ekrani citaju banku zadataka iz mat/core/exams, pa je treba napuniti prije iscrtavanja.
beforeAll(() => {
  __addExams({
    '2019_ljeto_A': {
      key: '2019_ljeto_A', year: 2019, season: 'ljeto', razina: 'A', label: 'Ljeto A',
      duration: 180, questionCount: 3, locked: false,
      qs: [
        { id: 1, type: 'mc', topic: 'kv', q: 'Koliko je 2+2?', opts: ['3', '4', '5', '6'], sol: { cl: 'B', ex: 'Zbroj.' }, exp: 'Zbroj.' },
        { id: 2, type: 'num', topic: 'lin', q: 'Koliko je sin(0)?', sol: { ans: 0 }, exp: 'sin 0 = 0' },
        { id: '3,1', type: 'sa', topic: 'trig', q: 'Napisi nulu.', sol: { ans: '0' }, exp: 'Nula.' },
      ],
    },
  });
});

const mkHistory = () => [1, 2, 3].map((i) => ({
  pct: 50 + i * 5, grade: 3, cor: 10 + i, total: 20, mode: 'simulacija', examMode: true,
  examKey: '2019_ljeto_A', examLabel: 'Ispit ' + i, date: i + '.1.2025.', hour: 12,
  qTimes: { 1: 40, 2: 55 }, topic_breakdown: { kv: { correct: 3, total: 5 }, lin: { correct: 4, total: 5 } },
}));

const userData = () => ({
  xp: 320, streak: 4, freezes: 1, lastLogin: null, history: mkHistory(),
  errorTracker: { '2019_ljeto_A__1': { count: 2, topic: 'kv' } }, bookmarks: [],
});

const noop = () => {};
const props = (extra) => ({
  userData: userData(), history: mkHistory(), examKey: '2019_ljeto_A', razina: 'A',
  onBack: noop, onExit: noop, onHome: noop, onStart: noop, onStartSession: noop,
  onStartErrorSession: noop, onUpdateUserData: noop, onPDFReport: noop, onFilter: noop,
  onSRS: noop, onDailyChallenge: noop, onEditRazina: noop, onPrepareExams: noop,
  onWrapped: noop, onSetGoal: noop, onExamMode: noop, onPractice: noop,
  onPracticeTimer: noop, onVirtual: noop, ...extra,
});

const SCREENS = {
  TodayHero, DailyChallengeScreen, DailySummary, ModeSelect, GuideScreen,
  PDFReportScreen, StatsScreen, AnalyticsPanel, GradePrediction, ScoreForecast,
  AIPractice, TopicFilterScreen, ErrorsScreen, AdaptiveTrening,
  BookmarksScreen, BrowseScreen, SpacedRepetitionScreen, FlashcardScreen,
};

describe('mat/screens: svaki ekran je izvezen i iscrtava se', () => {
  it('svi ekrani su funkcije', () => {
    Object.keys(SCREENS).forEach((k) => expect(typeof SCREENS[k], k).toBe('function'));
  });

  it('svaki se ekran iscrta bez nedefiniranog simbola', () => {
    Object.keys(SCREENS).forEach((k) => {
      const { container } = render(React.createElement(SCREENS[k], props()));
      expect(container.textContent.length, k).toBeGreaterThan(0);
      cleanup();
    });
  });

  it('AnalyticsPanel otvara svaku karticu', () => {
    ['pregled', 'teme', 'pogreske', 'vrijeme'].forEach((tab) => {
      const { container } = render(React.createElement(AnalyticsPanel, props({ defaultTab: tab })));
      expect(container.textContent.length, tab).toBeGreaterThan(0);
      cleanup();
    });
  });
});

describe('mat/screens: SRS pomocnici koje koristi TodayHero', () => {
  it('srsLoad vraca objekt, getSrsDueCards niz', () => {
    expect(typeof srsLoad()).toBe('object');
    expect(Array.isArray(getSrsDueCards(srsLoad()))).toBe(true);
  });
});
