import { describe, it, expect } from 'vitest';
import {
  canSeeDiscereAnalysis,
  canSeeHrvAnalysis,
  checkSimulatorAccess,
  isFreePracticeExam,
  isHrvFreePracticeExam,
  FREE_PRACTICE_EXAMS,
  FREE_LIMIT,
  HRV_FREE_PRACTICE_EXAMS,
} from '../../components/discere/paywall/paywallHelpers.js';

describe('canSeeDiscereAnalysis', () => {
  it('free korisnik nema pristup razradi rezultata', () => {
    expect(canSeeDiscereAnalysis({ subscriptionTier: 'free', isLoggedIn: true })).toBe(false);
  });
  it('standard korisnik ima pristup', () => {
    expect(canSeeDiscereAnalysis({ subscriptionTier: 'standard', isLoggedIn: true })).toBe(true);
  });
  it('pro korisnik ima pristup', () => {
    expect(canSeeDiscereAnalysis({ subscriptionTier: 'pro', isLoggedIn: true })).toBe(true);
  });
  it('nedostatak userAccess-a vraća false', () => {
    expect(canSeeDiscereAnalysis(null)).toBe(false);
    expect(canSeeDiscereAnalysis(undefined)).toBe(false);
  });
  it('canSeeHrvAnalysis je alias iste funkcije', () => {
    expect(canSeeHrvAnalysis).toBe(canSeeDiscereAnalysis);
  });
});

describe('checkSimulatorAccess', () => {
  const guest = { subscriptionTier: 'free', isLoggedIn: false };
  const free = { subscriptionTier: 'free', isLoggedIn: true };
  const standard = { subscriptionTier: 'standard', isLoggedIn: true };

  it('gost je uvijek zaustavljen na prijavi, i u ispitnom modu', () => {
    expect(checkSimulatorAccess(guest, 0, { freeExam: true })).toEqual({ canProceed: false, reason: 'not-logged-in' });
    expect(checkSimulatorAccess(undefined, 0, { freeExam: true }).reason).toBe('not-logged-in');
  });

  it('prijavljeni free korisnik prolazi cijeli ispit kad je freeExam', () => {
    expect(checkSimulatorAccess(free, 0, { freeExam: true })).toEqual({ canProceed: true, reason: 'ok' });
    expect(checkSimulatorAccess(free, 99, { freeExam: true })).toEqual({ canProceed: true, reason: 'ok' });
  });

  it('u vježbanju free korisnik dobiva FREE_LIMIT pitanja', () => {
    expect(checkSimulatorAccess(free, FREE_LIMIT - 1, { freePractice: true }).canProceed).toBe(true);
    expect(checkSimulatorAccess(free, FREE_LIMIT, { freePractice: true })).toEqual({ canProceed: false, reason: 'limit-reached' });
  });

  it('bez zastavica free korisnik je zaključan već na prvom pitanju', () => {
    expect(checkSimulatorAccess(free, 0)).toEqual({ canProceed: false, reason: 'limit-reached' });
  });

  it('plaćeni korisnik prolazi bez obzira na zastavice', () => {
    expect(checkSimulatorAccess(standard, 0)).toEqual({ canProceed: true, reason: 'ok' });
    expect(checkSimulatorAccess(standard, 99)).toEqual({ canProceed: true, reason: 'ok' });
  });
});

describe('isFreePracticeExam', () => {
  it('2016_ljeto_B je besplatan u cijelosti u vježbanju iz hrvatskog', () => {
    expect(isFreePracticeExam('hrv', '2016_ljeto_B')).toBe(true);
    expect(isHrvFreePracticeExam('2016_ljeto_B')).toBe(true);
  });
  it('ostali ispiti nisu na listi', () => {
    expect(isFreePracticeExam('hrv', '2016_ljeto_A')).toBe(false);
    expect(isHrvFreePracticeExam('2024_ljeto_B')).toBe(false);
  });
  it('nepoznat predmet ili examKey ne baca grešku', () => {
    expect(isFreePracticeExam('eng', '2016_ljeto_B')).toBe(false);
    expect(isFreePracticeExam('hrv', undefined)).toBe(false);
    expect(isHrvFreePracticeExam(null)).toBe(false);
  });
  it('FREE_PRACTICE_EXAMS.hrv sadrži samo dogovoreni ispit', () => {
    expect(FREE_PRACTICE_EXAMS.hrv).toEqual(['2016_ljeto_B']);
    expect(HRV_FREE_PRACTICE_EXAMS).toEqual(['2016_ljeto_B']);
  });
});
