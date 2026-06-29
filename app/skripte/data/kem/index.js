import { chemistryModules } from './modules.js'

/**
 * Kemija — podaci za Skripte
 * Struktura kompatibilna sa SkripteCard (razine/poglavlja za prikaz broja)
 * + puni moduli za KemijaViewer.
 */
const kem = {
  id: 'kem',
  name: 'Kemija',
  sym: '⚗',
  color: '#34d399',
  obvezno: false,

  // Koristi se za SubjectCard prikaz (levelCount / chapterCount)
  razine: chemistryModules.map(mod => ({
    id: mod.slug,
    label: mod.title,
    poglavlja: mod.chapterMetas.map(ch => ({
      id: ch.slug,
      naziv: ch.title,
      teme: [ch.subtitle],
    })),
  })),

  // Puni podaci za KemijaViewer
  modules: chemistryModules,
}

export default kem
