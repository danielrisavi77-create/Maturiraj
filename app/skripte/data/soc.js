import { SOC_RAZINA } from './sociologija/index'

const soc = {
  id: 'soc',
  name: 'Sociologija',
  sym: '⚖',
  color: '#e9b446',
  obvezno: false,

  // Za SubjectCard prikaz (levelCount / chapterCount)
  razine: [
    {
      id: SOC_RAZINA.id,
      label: SOC_RAZINA.label,
      poglavlja: SOC_RAZINA.poglavlja.map((p) => ({
        id: p.id,
        naziv: p.naslov,
        teme: [p.opis],
      })),
    },
  ],

  // Puni podaci za SociologijaViewer
  razineData: {
    soc: SOC_RAZINA,
  },
}

export default soc
