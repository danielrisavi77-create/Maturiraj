import { questions as p1 } from './2026_ljeto/part01.mjs';
import { questions as p2 } from './2026_ljeto/part02.mjs';
import { questions as p3 } from './2026_ljeto/part03.mjs';
import { questions as p4 } from './2026_ljeto/part04.mjs';
import { questions as p5 } from './2026_ljeto/part05.mjs';

export const exam = {
  meta: {
    schemaVersion: 1,
    subject: 'bio',
    key: '2026_ljeto',
    year: 2026,
    season: 'ljeto',
    level: null,
    label: 'Biologija - 1. rok 2026.',
    durationSec: 9000,
    questionCount: 48,
    maxPoints: 70,
    source: {
      provider: 'NCVVO',
      examUrl: 'https://www.ncvvo.hr/wp-content/uploads/2026/06/BIOLOGIJA_1_ROK_2025_2026.zip',
      keyUrl: 'https://www.ncvvo.hr/wp-content/uploads/2026/06/BIOLOGIJA_1_ROK_2025_2026.zip',
      retrievedAt: '2026-08-06',
      examFile: 'BIO D-S068.pdf',
      keyFile: 'Ključ za odgovore Biologija.pdf',
    },
    qa: {
      status: 'verified',
      verifiedAt: '2026-08-06',
      notes: [
        'Sadržaj ekstrahiran iz službenog NCVVO paketa za 1. rok 2025./2026.',
        '35 ključeva višestrukog izbora uspoređeno sa službenim ključem.',
        'Otvoreni zadatci 36.1-48.3 kodirani prema službenim rješenjima; složeni odgovori ostaju rubric/manual radi izbjegavanja lažno preciznog automatskog bodovanja.',
      ],
    },
  },
  questions: [...p1, ...p2, ...p3, ...p4, ...p5],
};
