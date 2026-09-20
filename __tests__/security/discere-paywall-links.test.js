/**
 * Regresijska sidra za paywall linkove i fail-closed gateove u Discereu:
 *   - svaki "from" ključ kojim simulatori šalju korisnika na /pro postoji u
 *     FROM_MAP (inače /pro obeća povratak na početnu i gumb Natrag vodi na "/")
 *   - sociologijin socAllowed je fail-CLOSED kao i lockResults
 *   - engleski ima --lock-scrim i .btn-gold, inače je zaključani blok nečitljiv
 *     a CTA se crta kao goli link
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isValidFromKey } from '../../lib/billing/fromMap.js';

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
