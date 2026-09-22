// @vitest-environment happy-dom
/**
 * browse-essay-gating.test.jsx
 *
 * Dva "živa" curenja rješenja izvan ekrana rezultata:
 *   1) BrowseScreen ("🔎 Pregled ispita") — prikazivao je točnu opciju s ✓,
 *      tekst točnog odgovora i obrazloženje za svako pitanje svakog ispita, bez
 *      ijedne tier provjere.
 *   2) SamoprocjenaPanel u EssayScreens — prikazivao je ESEJI[*].ocjenaKljuc
 *      (puni model-odgovor) svima.
 *
 * Politika: free korisnik smije vidjeti pitanja, opcije i pretragu, ali NE i
 * točne odgovore / obrazloženja / model-ključ. Zaključani sadržaj se ne
 * renderira — zamjenjuje ga LockedResultsBlock s CTA-om na Standard.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

const TOCAN_ODGOVOR = 'Tajni točan odgovor na prvo pitanje';
const OBRAZLOZENJE = 'Tajno obrazloženje prvog pitanja';
const MODEL_KLJUC = 'Tajni model-ključ: Gregor Samsa = alijenacija.';

// Sintetički podaci umjesto pravih 4815 pitanja — mock pokriva oba ekrana jer
// i BrowseScreen i EssayScreens uvoze isti modul (kao i utils/helpers zbog XP_LEVELS).
vi.mock('@/app/discere/hrvatski/simulator/hrvatskiSimulatorData', () => ({
  XP_LEVELS: [0, 100, 300, 600, 1000],
  LEVEL_NAMES: ['Početnik', 'Napredni'],
  TLBL: { mc: 'Višestruki izbor', sa: 'Kratki odgovor', es: 'Esej', saz: 'Sažetak', mat: 'Povezivanje' },
  TOPIC_LABELS: { jezik: 'Hrvatski jezik' },
  TOPIC_GROUPS: {},
  EXAMS: {
    '2019_ljeto_A': {
      key: '2019_ljeto_A', year: 2019, season: 'ljeto', razina: 'A', pravi: true,
      qs: [
        {
          id: 1, type: 'mc', topic: 'jezik',
          q: 'Prvo pitanje o Kafkinu Preobražaju?',
          opts: ['Prva opcija', 'Druga opcija', 'Treća opcija', 'Četvrta opcija'],
          sol: { cl: 'B', ans: TOCAN_ODGOVOR },
          exp: OBRAZLOZENJE,
        },
        {
          id: 2, type: 'sa', topic: 'jezik',
          q: 'Drugo pitanje o Šenoinu Prijanu Lovri?',
          sol: { ex: 'Tajni referentni odgovor na drugo pitanje' },
        },
      ],
    },
  },
  SAZECI: {},
  ESEJI: {
    '2019_ljeto_esej_A': {
      key: '2019_ljeto_esej_A', year: 2019, season: 'ljeto', razina: 'A',
      naslov: 'Preobražaj i otuđenje',
      trajanje: 160, minRijeci: 350, maxRijeci: 500,
      tekstovi: [{ naslov: 'Franz Kafka, Preobražaj', tekst: 'Prvi odlomak.\n\nDrugi odlomak.' }],
      smjernice: ['Odredi književnu vrstu.', 'Objasni odnos Gregora i obitelji.'],
      ocjenaKljuc: MODEL_KLJUC,
    },
  },
}));

const { BrowseScreen } = await import('@/app/discere/hrvatski/simulator/components/BrowseScreen.jsx');
const { EssayMode } = await import('@/app/discere/hrvatski/simulator/components/essay/EssayScreens.jsx');

const FREE_ACCESS = { subscriptionTier: 'free', isLoggedIn: true };
const STANDARD_ACCESS = { subscriptionTier: 'standard', isLoggedIn: true };

beforeEach(() => { localStorage.clear(); });
afterEach(() => { cleanup(); vi.useRealTimers(); });

describe('BrowseScreen — pregled ispita ne smije curiti rješenja', () => {
  it('free: pitanja i opcije vidljivi, točan odgovor/obrazloženje/✓ nisu, CTA na Standard postoji', () => {
    const { container } = render(
      <BrowseScreen onBack={() => {}} initialGlobal={true} userAccess={FREE_ACCESS} />
    );

    // Ne smije biti prazan ekran: pitanja i opcije se i dalje vide.
    expect(screen.getByText('Prvo pitanje o Kafkinu Preobražaju?')).toBeTruthy();
    expect(screen.getByText('B. Druga opcija')).toBeTruthy();

    // Rješenja se ne renderiraju uopće.
    expect(container.textContent).not.toContain(TOCAN_ODGOVOR);
    expect(container.textContent).not.toContain(OBRAZLOZENJE);
    expect(container.textContent).not.toContain('Tajni referentni odgovor na drugo pitanje');
    expect(container.textContent).not.toContain('✓');

    const cta = container.querySelector('a[href^="/pro?from=hrv-browse"]');
    expect(cta).toBeTruthy();
  });

  it('free: pretraga po tekstu točnog odgovora ne smije otkriti koje pitanje ga sadrži', () => {
    render(
      <BrowseScreen onBack={() => {}} initialGlobal={true} initialSearch={TOCAN_ODGOVOR} userAccess={FREE_ACCESS} />
    );
    expect(screen.queryByText('Prvo pitanje o Kafkinu Preobražaju?')).toBeNull();
    expect(screen.getByText(/^0 pitanja/)).toBeTruthy();
  });

  it('standard: točan odgovor, obrazloženje i ✓ oznaka su u DOM-u, bez zaključanog bloka', () => {
    const { container } = render(
      <BrowseScreen onBack={() => {}} initialGlobal={true} userAccess={STANDARD_ACCESS} />
    );

    expect(screen.getByText(TOCAN_ODGOVOR)).toBeTruthy();
    expect(screen.getByText('💡 ' + OBRAZLOZENJE)).toBeTruthy();
    expect(container.textContent).toContain('✓');
    expect(container.querySelector('a[href^="/pro?from=hrv-browse"]')).toBeNull();
  });

  it('standard: pretraga po tekstu točnog odgovora pronalazi pitanje', () => {
    render(
      <BrowseScreen onBack={() => {}} initialGlobal={true} initialSearch={TOCAN_ODGOVOR} userAccess={STANDARD_ACCESS} />
    );
    expect(screen.getByText('Prvo pitanje o Kafkinu Preobražaju?')).toBeTruthy();
  });
});

function otvoriEsej(userAccess) {
  const res = render(
    <EssayMode esejKey="2019_ljeto_esej_A" onBack={() => {}} userData={{}} isPro={false} onPaywall={() => {}} userAccess={userAccess} />
  );
  fireEvent.click(screen.getByText(/Počni pisati esej/));
  return res;
}

describe('EssayScreens — model-ključ eseja je Standard sadržaj', () => {
  it('free: ocjenaKljuc se ne renderira, nema gumba za otkrivanje, CTA na Standard postoji', () => {
    const { container } = otvoriEsej(FREE_ACCESS);

    // Samoprovjera po smjernicama ostaje besplatna (smjernice se pojavljuju i u
    // sklopivom bloku iznad, pa getAllByText).
    expect(screen.getAllByText('Odredi književnu vrstu.').length).toBeGreaterThan(0);
    expect(screen.getByText(/Samoprovjera i model-ključ/)).toBeTruthy();

    expect(container.textContent).not.toContain(MODEL_KLJUC);
    expect(screen.queryByText(/Pokaži što se očekivalo/)).toBeNull();
    expect(container.querySelector('a[href^="/pro?from=hrv-esej"]')).toBeTruthy();
  });

  it('standard: ključ se otkriva klikom na "Pokaži što se očekivalo"', () => {
    const { container } = otvoriEsej(STANDARD_ACCESS);

    expect(container.querySelector('a[href^="/pro?from=hrv-esej"]')).toBeNull();
    // Ključ je iza gumba (da ga se ne pročita slučajno), ali je dostupan.
    expect(container.textContent).not.toContain(MODEL_KLJUC);
    fireEvent.click(screen.getByText(/Pokaži što se očekivalo/));
    expect(screen.getByText(MODEL_KLJUC)).toBeTruthy();
  });
});
