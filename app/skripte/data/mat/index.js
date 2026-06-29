import { MAT_VISA_RAZINA } from './visa'
import { MAT_NIZA_RAZINA } from './niza'

const mat = {
  id: 'mat',
  name: 'Matematika',
  sym: 'π',
  color: '#818cf8',
  obvezno: true,

  razine: [
    {
      id: MAT_NIZA_RAZINA.id,
      label: MAT_NIZA_RAZINA.label,
      poglavlja: MAT_NIZA_RAZINA.poglavlja.map((p) => ({
        id: p.id,
        naziv: p.naslov,
        teme: [p.opis],
      })),
    },
    {
      id: MAT_VISA_RAZINA.id,
      label: MAT_VISA_RAZINA.label,
      poglavlja: MAT_VISA_RAZINA.poglavlja.map((p) => ({
        id: p.id,
        naziv: p.naslov,
        teme: [p.opis],
      })),
    },
  ],

  // full data for MatematikaViewer
  razineData: {
    niza: MAT_NIZA_RAZINA,
    visa: MAT_VISA_RAZINA,
  },
}

export default mat
export { MAT_NIZA_RAZINA, MAT_VISA_RAZINA }
