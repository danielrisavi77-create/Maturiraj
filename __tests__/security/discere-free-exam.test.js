// @vitest-environment happy-dom
/**
 * Sigurnosna sidra za free-exam politiku Discerea:
 *   - proxy /discere traži samo prijavu (tier se provodi u aplikaciji), a Pro
 *     rute ostaju pro-only
 *   - prijavljeni free korisnik rješava cijeli pravi ispit, ali ne i vježbanje
 *   - zaključani blok rezultata nema pravi sadržaj u DOM-u (blur nikad nije
 *     jedina zaštita)
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import { checkSimulatorAccess } from '../../components/discere/paywall/paywallHelpers.js';
import LockedResultsBlock from '../../components/discere/paywall/LockedResultsBlock.jsx';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const proxySrc = readFileSync(path.join(root, 'proxy.js'), 'utf8');

function arrayLiteral(name) {
  const match = proxySrc.match(new RegExp(`const ${name} = \\[([^\\]]*)\\]`));
  if (!match) throw new Error(`${name} nije pronađen u proxy.js`);
  return match[1]
    .split(',')
    .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

describe('proxy politika: Discere traži prijavu, ne plaćeni tier', () => {
  it('freePreviewRoutes pokriva cijeli /discere', () => {
    expect(arrayLiteral('freePreviewRoutes')).toContain('/discere');
  });

  it('/discere i dalje zahtijeva prijavu (gost → /prijava?redirect=)', () => {
    expect(arrayLiteral('paidRequired')).toContain('/discere');
    expect(proxySrc).toMatch(/isPaidRequired[\s\S]*?url\.pathname = '\/prijava'[\s\S]*?searchParams\.set\('redirect'/);
  });

  it('Pro rute ostaju pro-only', () => {
    const proRoutes = arrayLiteral('proRoutes');
    expect(proRoutes).toContain('/plan-ucenja/pro');
    expect(proRoutes).toContain('/simulacije');
    expect(proRoutes).toContain('/ai-profesor');
    expect(proxySrc).toMatch(/if \(isProRoute\)[\s\S]*?isProTier\(await readTier\(\)\)/);
  });
});

describe('checkSimulatorAccess — besplatan ispit, zaključano vježbanje', () => {
  it('prijavljeni free korisnik rješava cijeli pravi ispit', () => {
    const free = { subscriptionTier: 'free', isLoggedIn: true };
    expect(checkSimulatorAccess(free, 0, { freeExam: true })).toEqual({ canProceed: true, reason: 'ok' });
    expect(checkSimulatorAccess(free, 42, { freeExam: true })).toEqual({ canProceed: true, reason: 'ok' });
  });

  it('gost ne dobiva besplatan ispit bez prijave', () => {
    const guest = { subscriptionTier: 'free', isLoggedIn: false };
    expect(checkSimulatorAccess(guest, 0, { freeExam: true })).toEqual({ canProceed: false, reason: 'not-logged-in' });
  });

  it('vježbanje ostaje ograničeno i dalje od FREE_LIMIT-a', () => {
    const free = { subscriptionTier: 'free', isLoggedIn: true };
    expect(checkSimulatorAccess(free, 3, { freePractice: true })).toEqual({ canProceed: false, reason: 'limit-reached' });
  });
});

describe('LockedResultsBlock ne pušta sadržaj u DOM', () => {
  it('renderira samo prazan zamućeni placeholder i CTA', () => {
    const { container } = render(createElement(LockedResultsBlock, {
      label: 'Pregled pitanja',
      note: 'Razrada dolazi sa Standard planom.',
    }));

    const placeholder = container.querySelector('[aria-hidden="true"]');
    expect(placeholder).not.toBeNull();
    expect(placeholder.textContent).toBe('');

    expect(screen.getByRole('region', { name: 'Pregled pitanja' })).toBeTruthy();
    expect(screen.getByRole('link').getAttribute('href')).toBe('/pro?from=discere-results&plan=standard');
  });
});
