// __tests__/mat-simulator/blank-templates.test.tsx
// Pravilo: slika UZ PITANJE mora biti identična izvornom PDF-u. Kad PDF nudi PRAZAN
// predložak (mreža/tablica/graf koji učenik popunjava), simulator uz pitanje NE smije
// prikazati popunjenu verziju — ona ide isključivo u rješenje (q.sol.svgFn).
//
// 2020_ljeto_B 23.1 ("U zadanome koordinatnom sustavu nacrtajte graf linearne funkcije
// za koju vrijedi f(0) = −2 i f(3) = 4."): PDF, str. 18, prikazuje prazan koordinatni
// sustav s osima x i y, ishodištem 0 i jediničnim oznakama 1 — bez ijednog nacrtanog
// pravca. Prije popravka je qImages crtao pravac y = 2x − 2 s točkama (0, −2) i (3, 4),
// tj. davao odgovor u samom pitanju.
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const examUrl = (key: string) =>
  pathToFileURL(resolve(here, '../../content/simulator/mat/exams', `${key}.mjs`)).href;

describe('mat-simulator: prazan predložak u pitanju, popunjen samo u rješenju', () => {
  it('2020_ljeto_B 23.1: slika pitanja je prazna mreža, rješenje ima pravac y = 2x − 2', async () => {
    const mod: any = await import(examUrl('2020_ljeto_B'));
    const q = mod.qs.find((x: any) => x && String(x.id) === '23.1');
    expect(q, 'zadatak 23.1 postoji').toBeTruthy();

    const thunk = mod.qImages['2020_ljeto_B__23.1'];
    expect(typeof thunk, 'qImages ima unos za 23.1').toBe('function');
    const qMarkup = renderToStaticMarkup(thunk());

    // Prazan predložak: osi, ishodište i jedinične oznake iz PDF-a moraju ostati.
    for (const label of ['>x<', '>y<', '>0<', '>1<']) {
      expect(qMarkup, `oznaka ${label} iz PDF-a nedostaje u slici pitanja`).toContain(label);
    }
    // ...ali ništa od rješenja: ni jednadžba, ni istaknute točke, ni boja pravca.
    expect(qMarkup, 'slika pitanja ne smije sadržavati jednadžbu rješenja').not.toContain('2x');
    expect(qMarkup, 'slika pitanja ne smije sadržavati oznaku točke (3, 4)').not.toContain('(3, 4)');
    expect(qMarkup, 'slika pitanja ne smije sadržavati oznaku točke (0, −2)').not.toContain('(0, −2)');
    expect(qMarkup, 'slika pitanja ne smije crtati pravac rješenja').not.toContain('--green');

    // Popunjena verzija mora postojati — u rješenju.
    expect(typeof q.sol?.svgFn, '23.1 mora imati sol.svgFn s točnim grafom').toBe('function');
    const solMarkup = renderToStaticMarkup(q.sol.svgFn());
    expect(solMarkup).toContain('2x');
    expect(solMarkup).toContain('(3, 4)');
    expect(solMarkup).toContain('(0, −2)');
    expect(solMarkup).toContain('--green');
    // Rješenje je ista mreža + pravac, pa mora biti strogo bogatije od praznog predloška.
    expect(solMarkup.length).toBeGreaterThan(qMarkup.length);
  });

  it('2018_jesen_B 28.1–28.3: izvornik nema sliku, pa je nema ni simulator', async () => {
    // PDF 2018_jesen_B, str. 18: zadatak 28 je u cijelosti tekstualan — 28.1 "Riješite
    // jednadžbu (2x+1)/2 = (x²−1)/x", 28.2 sustav jednadžba, 28.3 "0,1^x : 0,01^x = 1000",
    // svaki samo s crtom "Odgovor: x = ______". Nikakav predložak/mreža ne postoji.
    const mod: any = await import(examUrl('2018_jesen_B'));
    for (const id of ['28.1', '28.2', '28.3']) {
      const q = mod.qs.find((x: any) => x && String(x.id) === id);
      expect(q, `zadatak ${id} postoji`).toBeTruthy();
      expect(q.img, `${id} ne smije biti označen img:true`).toBeFalsy();
      expect(mod.qImages[`2018_jesen_B__${id}`], `${id} ne smije imati SVG`).toBeUndefined();
    }
  });
});
