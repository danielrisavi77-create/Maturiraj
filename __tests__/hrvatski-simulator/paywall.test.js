import { describe, it, expect } from 'vitest';
import { canSeeHrvAnalysis, isHrvFreePracticeExam, HRV_FREE_PRACTICE_EXAMS } from '../../components/discere/paywall/paywallHelpers.js';

describe('canSeeHrvAnalysis', () => {
  it('free korisnik nema pristup razradi rezultata', () => {
    expect(canSeeHrvAnalysis({ subscriptionTier: 'free', isLoggedIn: true })).toBe(false);
  });
  it('standard korisnik ima pristup', () => {
    expect(canSeeHrvAnalysis({ subscriptionTier: 'standard', isLoggedIn: true })).toBe(true);
  });
  it('pro korisnik ima pristup', () => {
    expect(canSeeHrvAnalysis({ subscriptionTier: 'pro', isLoggedIn: true })).toBe(true);
  });
  it('nedostatak userAccess-a vraća false', () => {
    expect(canSeeHrvAnalysis(null)).toBe(false);
    expect(canSeeHrvAnalysis(undefined)).toBe(false);
  });
});

describe('isHrvFreePracticeExam', () => {
  it('2016_ljeto_B je besplatan u cijelosti u vježbanju', () => {
    expect(isHrvFreePracticeExam('2016_ljeto_B')).toBe(true);
  });
  it('ostali ispiti nisu na listi', () => {
    expect(isHrvFreePracticeExam('2016_ljeto_A')).toBe(false);
    expect(isHrvFreePracticeExam('2024_ljeto_B')).toBe(false);
  });
  it('nedostatak examKey-a ne baca grešku', () => {
    expect(isHrvFreePracticeExam(undefined)).toBe(false);
    expect(isHrvFreePracticeExam(null)).toBe(false);
  });
  it('HRV_FREE_PRACTICE_EXAMS sadrži samo dogovoreni ispit', () => {
    expect(HRV_FREE_PRACTICE_EXAMS).toEqual(['2016_ljeto_B']);
  });
});
