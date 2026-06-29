import { ENG_NIZA_RAZINA } from './niza'
import { ENG_VISA_RAZINA } from './visa'

const eng = {
  id: 'eng',
  name: 'Engleski jezik',
  sym: 'En',
  color: '#c084fc',
  obvezno: true,

  // razine structure — used by SubjectCard for level/chapter counts
  razine: [
    {
      id: ENG_NIZA_RAZINA.id,
      label: ENG_NIZA_RAZINA.label,
      poglavlja: ENG_NIZA_RAZINA.poglavlja.map((p) => ({
        id: p.id,
        naziv: p.naslov,
        teme: [p.opis],
      })),
    },
    {
      id: ENG_VISA_RAZINA.id,
      label: ENG_VISA_RAZINA.label,
      poglavlja: ENG_VISA_RAZINA.poglavlja.map((p) => ({
        id: p.id,
        naziv: p.naslov,
        teme: [p.opis],
      })),
    },
  ],

  // full data for EngleskiViewer
  razineData: {
    niza: ENG_NIZA_RAZINA,
    visa: ENG_VISA_RAZINA,
  },
}

export default eng
export { ENG_NIZA_RAZINA, ENG_VISA_RAZINA }
