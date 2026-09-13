// Bazni URL za audio snimke slušanja (Engleski simulator).
// Datoteke se hostaju kao GitHub Release asset (vidi public/audio/eng/README.md),
// s mogućnošću override-a preko env varijable (npr. za CDN ili lokalno posluživanje).
export const ENG_AUDIO_BASE = process.env.NEXT_PUBLIC_ENG_AUDIO_BASE
  || 'https://github.com/danielrisavi77-create/maturiraj-eng-audio/releases/download/eng-audio-v1/'

// Spaja bazu i ime datoteke u puni URL. Ime datoteke se URL-enkodira (imena su
// oblika `<examKey>__task<N>-1.mp3` / `__intro.mp3`, pa enkodiranje uglavnom
// nema vidljivog efekta, ali čuva ispravnost ako se pojavi poseban znak).
export function audioUrl(file) {
  if (!file) return null
  const base = ENG_AUDIO_BASE.endsWith('/') ? ENG_AUDIO_BASE : ENG_AUDIO_BASE + '/'
  return base + encodeURIComponent(file)
}
