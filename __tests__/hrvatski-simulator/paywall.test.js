import { describe, it, expect } from 'vitest';
import { canSeeHrvAnalysis } from '../../components/discere/paywall/paywallHelpers.js';

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
