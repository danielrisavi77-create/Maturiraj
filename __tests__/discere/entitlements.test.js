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
import {
  MODES,
  MODE_IDS,
  getMode,
  featureForMode,
  keysForTier,
  canOpenMode,
  isRealExamKey,
} from '../../lib/discere/modes.js';
import { grade, gradeStatus, pctOf, GRADE_THRESHOLDS } from '../../lib/discere/grade-scale.js';
import { grade as matGrade } from '../../components/simulator/mat/core/progress';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
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

describe('modovi: pregled i puni pristup su dva različita prava', () => {
  it('keysForFree postoji točno uz previewFeature koji je besplatan', () => {
    for (const id of MODE_IDS) {
      const def = MODES[id];
      expect([id, def.keysForFree > 0]).toEqual([id, def.previewFeature !== null]);
      if (def.previewFeature) {
        expect([id, def.previewFeature in FEATURES]).toEqual([id, true]);
        expect([id, minTier(def.previewFeature)]).toEqual([id, 'free']);
      }
    }
  });

  it('featureForMode razlikuje puni mod od pregleda', () => {
    expect(featureForMode('practice')).toBe('practice');
    expect(featureForMode('practice', { preview: true })).toBe('practice_preview');
    expect(featureForMode('practice_timed', { preview: true })).toBe('practice_preview');
    // mod bez pregleda ne smije se "otvoriti" samim traženjem pregleda
    expect(featureForMode('srs', { preview: true })).toBe('srs');
    expect(featureForMode('nepostojeci', { preview: true })).toBeNull();
  });

  it('free korisnik dobiva točno FREE_PRACTICE_LIMIT pitanja vježbanja, ni 0 ni sva', () => {
    expect(keysForTier('practice', 'free')).toBe(FREE_PRACTICE_LIMIT);
    expect(keysForTier('practice_timed', 'free')).toBe(FREE_PRACTICE_LIMIT);
    expect(keysForTier('practice', 'starter')).toBe(Infinity);
    expect(keysForTier('practice', 'standard')).toBe(Infinity);
    expect(keysForTier('practice', 'pro')).toBe(Infinity);
    expect(canOpenMode('practice', 'free')).toBe(true);
  });

  it('modovi bez pregleda su za free zaključani, ispit je besplatan', () => {
    expect(keysForTier('srs', 'free')).toBe(0);
    expect(keysForTier('filter', 'free')).toBe(0);
    expect(keysForTier('daily', 'starter')).toBe(0);
    expect(canOpenMode('adaptive', 'free')).toBe(false);
    expect(keysForTier('exam', 'free')).toBe(Infinity);
  });

  it('nepoznat mod ne nosi nijedan ključ (fail closed)', () => {
    expect(keysForTier('nepostojeci', 'pro')).toBe(0);
    expect(canOpenMode('nepostojeci', 'pro')).toBe(false);
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

/**
 * Ljestvica 85/70/55/40 još živi i kao ručno prepisan ternarni lanac u mat i
 * engleskom. Dok se ti pozivatelji ne prebace na lib/discere/grade-scale (drugi
 * val, izvan ove grane), ovi testovi drže kopije vezane uz jedan izvor: promjena
 * granice u grade-scale.js obara suite umjesto da tiho razdvoji ocjenu na
 * kartici rezultata od ocjene u analitici.
 */
describe('grade-scale: duplikati ljestvice ne smiju odlutati', () => {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
  const read = rel => readFileSync(path.join(root, rel), 'utf8');

  // npr. /\w+\s*>=\s*85\s*\?\s*5\s*:\s*…\s*1/ — isti lanac u oba pisanja (s razmacima i bez).
  const ladder = new RegExp(
    GRADE_THRESHOLDS.map(t => `\\w+\\s*>=\\s*${t.min}\\s*\\?\\s*${t.grade}\\s*:\\s*`).join('') + '1',
    'g',
  );

  it('mat core/progress.ts daje istu ocjenu kao grade-scale', () => {
    for (let pct = 0; pct <= 100; pct++) {
      expect([pct, matGrade(pct)]).toEqual([pct, grade(pct)]);
    }
  });

  it('engleska analitika i mat statistika prepisuju iste granice', () => {
    const sites = [
      ['components/engleski-simulator/screens/AnalyticsPanelFull.js', 1],
      ['components/simulator/mat/screens/stats.tsx', 2],
    ];
    for (const [rel, count] of sites) {
      expect([rel, read(rel).match(ladder)?.length ?? 0]).toEqual([rel, count]);
    }
  });
});

describe('paywallHelpers na novoj matrici', () => {
  it('buildUserAccess vraća UI tier koji potrošači uspoređuju', () => {
    // 'standard' je doslovni niz koji čitaju SubscriptionGate, ResultsSummary i
    // PaywallModal; kanonski 'starter' bi im pao na free (vidi paywallHelpers).
    expect(buildUserAccess({ user: {}, isPro: false, isPaid: true }))
      .toEqual({ subscriptionTier: 'standard', isLoggedIn: true });
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

  it('plaćeni Standard korisnik prolazi kroz rang-tablicu potrošača', () => {
    // Sidro za potrošače koji rangiraju doslovni niz (SubscriptionGate ima
    // vlastiti TIER_RANK bez 'starter'): tier iz buildUserAccess mora imati
    // rang >= 1 i u toj tablici, inače plaćeni korisnik vidi paywall.
    const CONSUMER_TIER_RANK = { free: 0, standard: 1, pro: 2 };
    const paid = buildUserAccess({ user: {}, isPro: false, isPaid: true });
    expect(CONSUMER_TIER_RANK[paid.subscriptionTier] ?? 0)
      .toBeGreaterThanOrEqual(CONSUMER_TIER_RANK.standard);
    // a entitlementi ga i dalje vide kao kanonski starter
    expect(canUse('practice', paid.subscriptionTier)).toBe(true);
    expect(canUse('ai_analysis', paid.subscriptionTier)).toBe(false);
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
