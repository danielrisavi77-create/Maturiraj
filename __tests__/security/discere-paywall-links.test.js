// @vitest-environment happy-dom
/**
 * Regresijska sidra za paywall linkove i fail-closed gateove u Discereu:
 *   - svaki "from" ključ kojim simulatori šalju korisnika na /pro postoji u
 *     FROM_MAP (inače /pro obeća povratak na početnu i gumb Natrag vodi na "/")
 *   - sociologijin socAllowed je fail-CLOSED kao i lockResults
 *   - engleski ima --lock-scrim i .btn-gold, inače je zaključani blok nečitljiv
 *     a CTA se crta kao goli link
 *   - plaćeni Standard korisnik iz buildUserAccess stvarno prolazi kroz
 *     SubscriptionGate i dobiva oznaku plana na kartici rezultata
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import { isValidFromKey } from '../../lib/billing/fromMap.js';
import { buildUserAccess } from '../../components/discere/paywall/paywallHelpers.js';
import SubscriptionGate from '../../components/discere/paywall/SubscriptionGate.jsx';
import ResultsSummary from '../../components/discere/paywall/ResultsSummary.jsx';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = rel => readFileSync(path.join(root, rel), 'utf8');

const PAYWALL_SOURCES = [
  'components/discere/paywall/LockedResultsBlock.jsx',
  'components/discere/paywall/LockedAnalysisSection.jsx',
  'components/engleski-simulator/screens/ResultsScreen.js',
  'components/engleski-simulator/EngleskiSimulator.js',
  'components/simulator/MatEngineCore.tsx',
  'app/discere/hrvatski/simulator/components/Sim.jsx',
  'public/sim/sociologija.html',
];

describe('from-ključevi paywalla postoje u FROM_MAP', () => {
  it('nijedan /pro?from=… iz simulatora ne pada na DEFAULT_FROM', () => {
    const keys = new Set();
    for (const rel of PAYWALL_SOURCES) {
      for (const m of read(rel).matchAll(/\/pro\?from=([a-z0-9-]+)/g)) keys.add(m[1]);
    }
    // socUpgrade/askUpgrade šalju ključ parentu, ne u URL-u
    for (const m of read('public/sim/sociologija.html').matchAll(/socUpgrade\("([a-z0-9-]+)"/g)) keys.add(m[1]);
    for (const m of read('components/simulator/MatEngineCore.tsx').matchAll(/askUpgrade\("([a-z0-9-]+)"/g)) keys.add(m[1]);

    expect(keys.size).toBeGreaterThan(0);
    for (const key of keys) expect([key, isValidFromKey(key)]).toEqual([key, true]);
  });
});

describe('sociologija: vježbanje je fail-closed dok config ne stigne', () => {
  const soc = read('public/sim/sociologija.html');

  it('socAllowed bez allowed liste gleda lockResults, ne vraća true', () => {
    expect(soc).toMatch(/function socAllowed\(k\)\{[^}]*!b\.lockResults\}/);
    expect(soc).not.toMatch(/function socAllowed\(k\)\{const a=socBridge\(\)\.allowed;return a\?a\.has\(k\):true\}/);
  });

  it('početni bridge u iframeu zaključava razradu', () => {
    expect(soc).toMatch(/__SOC_BRIDGE__=\{tier:"free",allowed:null,freeExam:false,lockResults:embedded\}/);
  });
});

describe('engleski: zaključani blok je čitljiv i CTA izgleda kao gumb', () => {
  const css = read('app/discere/engleski/simulator/simulator.css');

  it('--lock-scrim je definiran i za svijetlu i za tamnu temu', () => {
    expect(css).toMatch(/\.eng-sim\{[\s\S]*?--lock-scrim:/);
    expect(css).toMatch(/body\.dark-mode \.eng-sim\{[\s\S]*?--lock-scrim:/);
  });

  it('.btn-gold je scopean na .eng-sim', () => {
    expect(css).toMatch(/\.eng-sim \.btn-gold\{/);
  });
});

describe('plaćeni korisnik prolazi kroz potrošače buildUserAccess-a', () => {
  const PAID     = buildUserAccess({ user: { id: 'u1' }, isPro: false, isPaid: true });
  const PRO      = buildUserAccess({ user: { id: 'u2' }, isPro: true,  isPaid: true });
  const FREE     = buildUserAccess({ user: { id: 'u3' }, isPro: false, isPaid: false });
  const STATE    = { score: 9, totalQuestions: 10, correctCount: 9, incorrectCount: 1 };

  function gate(userAccess, requiredTier) {
    return render(createElement(
      SubscriptionGate,
      { userAccess, requiredTier, fallback: createElement('div', null, 'ZAKLJUČANO') },
      createElement('div', null, 'SADRŽAJ'),
    ));
  }

  it('SubscriptionGate pušta plaćenog korisnika na standard sadržaj', () => {
    const { container } = gate(PAID, 'standard');
    expect(container.textContent).toContain('SADRŽAJ');
    expect(container.textContent).not.toContain('ZAKLJUČANO');
  });

  it('SubscriptionGate i dalje zaključava free i standard pred Pro sadržajem', () => {
    expect(gate(FREE, 'standard').container.textContent).toContain('ZAKLJUČANO');
    expect(gate(PAID, 'pro').container.textContent).toContain('ZAKLJUČANO');
    expect(gate(PRO, 'pro').container.textContent).toContain('SADRŽAJ');
  });

  it('kartica rezultata prikazuje oznaku plana plaćenom korisniku', () => {
    const { container, unmount } = render(createElement(ResultsSummary, {
      simulatorState: STATE,
      subjectLabel:   'Matematika',
      userAccess:     PAID,
    }));
    expect(container.textContent).toContain('STANDARD');
    unmount();

    render(createElement(ResultsSummary, {
      simulatorState: STATE,
      subjectLabel:   'Matematika',
      userAccess:     PRO,
    }));
    expect(screen.getByText('PRO')).toBeTruthy();
  });
});
