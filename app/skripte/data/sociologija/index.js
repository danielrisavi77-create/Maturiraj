import { sociologijaS01Html } from './poglavlje01'

export const SOC_POGLAVLJA_META = [
  {
    id: 'poglavlje-01',
    broj: 1,
    kategorija: 'Temelji sociologije',
    naslov: 'Sociološka imaginacija',
    opis: 'Mills · Durkheim · Weber · Marx · metode istraživanja',
    implemented: true,
  },
]

export const SOC_RAZINA = {
  id: 'soc',
  label: 'Sociologija',
  poglavlja: SOC_POGLAVLJA_META,
  chapters: {
    'poglavlje-01': sociologijaS01Html,
  },
}

export { sociologijaS01Html as SOC_CH01_HTML }
