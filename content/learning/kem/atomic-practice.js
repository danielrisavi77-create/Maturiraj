// Authored pilot practice; not an official exam or a full-length simulation.
const choice = (id, prompt, texts, correct, explanation) => ({
  id, type: 'mc', topic: 'grada-atoma', points: 1, assets: [], prompt,
  sourceRef: { path: 'content/learning/kem/atomic-practice.js', task: id, version: '1' },
  options: texts.map((text, index) => ({ id: `o${index + 1}`, text })),
  answer: { kind: 'choice', correct: [`o${correct + 1}`], source: 'none' }, explanation,
})
export const atomicPractice = {
  meta: { schemaVersion: 1, subject: 'kem', key: 'atomic-practice-v1', kind: 'authored-thematic', version: '1', level: null,
    label: 'Građa atoma — tematska provjera', durationSec: 600, questionCount: 6, maxPoints: 6,
    source: { provider: 'Maturiraj — autorski nacrt', contentPath: 'content/learning/kem/atomic-practice.js', authoredAt: '2026-09-10' },
    qa: { status: 'draft', notes: ['Pilot tematske provjere; nije cjelovita simulacija mature.', 'Potrebna je neovisna sadržajna provjera i integracija spremanja.'] },
  },
  questions: [
    choice('kem-atom-1', 'Atom aluminija ima Z = 13 i A = 27. Koliko ima neutrona?', ['13', '14', '27', '40'], 1, 'Broj neutrona je A − Z = 27 − 13 = 14.'),
    choice('kem-atom-2', 'Ion Mg²⁺ ima atomski broj 12. Koliko elektrona ima taj ion?', ['10', '12', '14', '24'], 0, 'Neutralni Mg ima 12 elektrona. Nastankom iona Mg²⁺ gubi dva elektrona, pa ih ostaje 10.'),
    choice('kem-atom-3', 'Koji su podatci jednaki za neutralne atome dvaju izotopa istog elementa?', ['Broj neutrona i maseni broj', 'Maseni broj i broj elektrona', 'Broj protona i broj elektrona', 'Broj protona i broj neutrona'], 2, 'Izotopi imaju isti broj protona. Neutralni atomi imaju jednak broj protona i elektrona; broj neutrona razlikuje se.'),
    choice('kem-atom-4', 'Čestica ima 8 protona, 10 neutrona i 10 elektrona. Koji je njezin nabojni broj?', ['+2', '0', '−1', '−2'], 3, 'Nabojni broj je broj protona minus broj elektrona: 8 − 10 = −2. Neutroni nemaju električni naboj.'),
    choice('kem-atom-5', 'Koji se podatak mijenja kada neutralni atom klora primi jedan elektron?', ['Atomski broj', 'Broj elektrona', 'Broj neutrona', 'Maseni broj'], 1, 'Primanjem elektrona nastaje anion. Sastav jezgre ostaje isti, a broj elektrona povećava se za jedan.'),
    choice('kem-atom-6', 'Atom ima 16 protona i 18 neutrona. Koji je njegov maseni broj?', ['34', '2', '16', '18'], 0, 'Maseni broj zbroj je protona i neutrona: A = 16 + 18 = 34.'),
  ],
}
