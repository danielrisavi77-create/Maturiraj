/**
 * Matrica prava za Discere: značajka × tier kao snapshot.
 *
 * Snapshot je namjerno doslovan — svaka promjena politike tiera mora biti
 * vidljiva u diffu, a ne skrivena u ponašanju ekrana.
 */
import { describe, it, expect } from 'vitest';
import {
  FEATURES,
  SCREEN_FEATURE,
  FREE_PRACTICE_LIMIT,
  TIER_RANK,
  canUse,
  minTier,
  upgradeTargetFor,
  featureForScreen,
} from '../../lib/discere/entitlements.js';
import { MODES, MODE_IDS, getMode, featureForMode, isRealExamKey } from '../../lib/discere/modes.js';
import { grade, gradeStatus, pctOf, GRADE_THRESHOLDS } from '../../lib/discere/grade-scale.js';
import {
  buildUserAccess,
  getUpgradeTarget,
  getScoreStatus,
  checkSimulatorAccess,
  canSeeDiscereAnalysis,
  FREE_LIMIT,
} from '../../components/discere/paywall/paywallHelpers.js';

const TIERS = ['free', 'starter', 'pro'];

describe('matrica značajka × tier', () => {
  it('snapshot cijele matrice', () => {
    const matrix = {};
    for (const feature of Object.keys(FEATURES).sort()) {
      matrix[feature] = {
        min: minTier(feature),
        ...Object.fromEntries(TIERS.map(t => [t, canUse(feature, t)])),
        upgradeFromFree: upgradeTargetFor(feature, 'free'),
      };
    }
    expect(matrix).toMatchSnapshot();
  });

  it('rang tiera je free < starter < pro', () => {
    expect(TIER_RANK).toEqual({ free: 0, starter: 1, pro: 2 });
  });

  it('povijesni "standard" je isto što i "starter"', () => {
    for (const feature of Object.keys(FEATURES)) {
      expect([feature, canUse(feature, 'standard')]).toEqual([feature, canUse(feature, 'starter')]);
    }
  });

  it('nepoznat tier pada na free (fail closed)', () => {
    expect(canUse('practice', 'zlatni')).toBe(false);
    expect(canUse('practice', undefined)).toBe(false);
    expect(canUse('exam', null)).toBe(true);
  });

  it('nepoznata značajka je pro-only (fail closed)', () => {
    expect(minTier('teleportacija')).toBe('pro');
    expect(canUse('teleportacija', 'starter')).toBe(false);
  });

  it('ispit i ocjena su besplatni, razrada je Standard, AI je Pro', () => {
    expect(canUse('exam', 'free')).toBe(true);
    expect(canUse('grade', 'free')).toBe(true);
    expect(canUse('practice_preview', 'free')).toBe(true);
    expect(canUse('review', 'free')).toBe(false);
    expect(canUse('review', 'starter')).toBe(true);
    expect(canUse('ai_explain', 'starter')).toBe(false);
    expect(canUse('ai_explain', 'pro')).toBe(true);
  });
});

describe('upgradeTargetFor', () => {
  it('razrada vodi na Standard, AI na Pro', () => {
    expect(upgradeTargetFor('review', 'free')).toBe('starter');
    expect(upgradeTargetFor('ai_analysis', 'free')).toBe('pro');
    expect(upgradeTargetFor('ai_analysis', 'starter')).toBe('pro');
  });

  it('null kad korisnik već ima pristup', () => {
    expect(upgradeTargetFor('review', 'starter')).toBeNull();
    expect(upgradeTargetFor('ai_analysis', 'pro')).toBeNull();
    expect(upgradeTargetFor('exam', 'free')).toBeNull();
  });
});

describe('SCREEN_FEATURE', () => {
  it('svaki ekran pokazuje na postojeću značajku', () => {
    for (const [screen, feature] of Object.entries(SCREEN_FEATURE)) {
      expect([screen, feature in FEATURES]).toEqual([screen, true]);
    }
  });

  it('snapshot mape ekrana', () => {
    expect(SCREEN_FEATURE).toMatchSnapshot();
  });

  it('nepoznat ekran vraća null', () => {
    expect(featureForScreen('nepostojeci')).toBeNull();
  });
});

describe('MODES', () => {
  it('snapshot tablice modova', () => {
    expect(MODES).toMatchSnapshot();
  });

  it('svaki mod ima značajku iz matrice', () => {
    for (const id of MODE_IDS) {
      expect([id, MODES[id].feature in FEATURES]).toEqual([id, true]);
    }
  });

  it('ispitni mod ne nosi nijedan ključ free korisniku', () => {
    expect(MODES.exam.keysForFree).toBe(0);
    expect(MODES.exam.timer).toBe(true);
    expect(MODES.exam.writesProgress).toBe(true);
  });

  it('vježbanje free korisniku daje točno FREE_PRACTICE_LIMIT ključeva', () => {
    expect(MODES.practice.keysForFree).toBe(FREE_PRACTICE_LIMIT);
    expect(MODES.practice_timed.keysForFree).toBe(FREE_PRACTICE_LIMIT);
  });

  it('samo pravi ispit upisuje napredak', () => {
    for (const id of MODE_IDS) {
      if (id === 'exam') continue;
      expect([id, MODES[id].writesProgress]).toEqual([id, false]);
    }
  });

  it('nepoznat mod je null, ne izmišljena definicija', () => {
    expect(getMode('nepostojeci')).toBeNull();
    expect(featureForMode('nepostojeci')).toBeNull();
  });
});

describe('isRealExamKey', () => {
  it('prihvaća prave ključeve ispita', () => {
    for (const key of ['2024_ljeto', '2016_ljeto_B', 'vis_2015_jesen', '2010_zimski']) {
      expect([key, isRealExamKey(key)]).toEqual([key, true]);
    }
  });

  it('odbija sintetičke sesije', () => {
    for (const key of ['filter_session_1', 'errors_session', 'srs_session', 'daily_2024-01-01', 'virtual_x', '', undefined, null]) {
      expect([key, isRealExamKey(key)]).toEqual([key, false]);
    }
  });

  it('sintetički prefiksi modova nisu pravi ispiti', () => {
    for (const id of MODE_IDS) {
      const prefix = MODES[id].syntheticKeyPrefix;
      if (prefix) expect([id, isRealExamKey(`${prefix}abc`)]).toEqual([id, false]);
    }
  });
});

describe('grade-scale', () => {
  it('granice 85/70/55/40', () => {
    expect(GRADE_THRESHOLDS.map(t => t.min)).toEqual([85, 70, 55, 40]);
    expect([100, 85, 84, 70, 69, 55, 54, 40, 39, 0].map(grade)).toEqual([5, 5, 4, 4, 3, 3, 2, 2, 1, 1]);
  });

  it('neispravan ulaz daje najnižu ocjenu', () => {
    expect(grade(NaN)).toBe(1);
    expect(grade(undefined)).toBe(1);
  });

  it('pctOf ne dijeli s nulom', () => {
    expect(pctOf(5, 0)).toBe(0);
    expect(pctOf(5, 10)).toBe(50);
  });

  it('gradeStatus i getScoreStatus dijele istu ljestvicu', () => {
    expect(getScoreStatus({ score: 9, totalQuestions: 10 })).toEqual(gradeStatus(90));
    expect(getScoreStatus({ score: 0, totalQuestions: 10 })).toEqual(gradeStatus(0));
    expect(getScoreStatus({ score: 9, totalQuestions: 10 }).label).toBe('Odlično');
  });
});

describe('paywallHelpers na novoj matrici', () => {
  it('buildUserAccess vraća kanonski starter', () => {
    expect(buildUserAccess({ user: {}, isPro: false, isPaid: true }))
      .toEqual({ subscriptionTier: 'starter', isLoggedIn: true });
    expect(buildUserAccess({ user: {}, isPro: true, isPaid: true }))
      .toEqual({ subscriptionTier: 'pro', isLoggedIn: true });
    expect(buildUserAccess({ user: null, isPro: false, isPaid: false }))
      .toEqual({ subscriptionTier: 'free', isLoggedIn: false });
  });

  it('starter i standard imaju identična prava u helperima', () => {
    const starter = { subscriptionTier: 'starter', isLoggedIn: true };
    const standard = { subscriptionTier: 'standard', isLoggedIn: true };
    expect(canSeeDiscereAnalysis(starter)).toBe(true);
    expect(canSeeDiscereAnalysis(standard)).toBe(true);
    expect(checkSimulatorAccess(starter, 99)).toEqual(checkSimulatorAccess(standard, 99));
    expect(checkSimulatorAccess(starter, 99)).toEqual({ canProceed: true, reason: 'ok' });
  });

  it('getUpgradeTarget više ne nudi Pro za razradu', () => {
    expect(getUpgradeTarget('free', 'review')).toBe('starter');
    expect(getUpgradeTarget('free', 'ai_analysis')).toBe('pro');
    expect(getUpgradeTarget('starter', 'review')).toBeNull();
    expect(getUpgradeTarget('standard', 'review')).toBeNull();
    expect(getUpgradeTarget('pro')).toBeNull();
  });

  it('bez značajke zadržava staro pro-only ponašanje', () => {
    expect(getUpgradeTarget('free')).toBe('pro');
    expect(getUpgradeTarget('starter')).toBe('pro');
  });

  it('FREE_LIMIT je re-export jedne konstante', () => {
    expect(FREE_LIMIT).toBe(FREE_PRACTICE_LIMIT);
    expect(FREE_PRACTICE_LIMIT).toBe(3);
  });
});
