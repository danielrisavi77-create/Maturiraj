'use client';
/**
 * ChapterClient — lazy učitavanje SAMO traženog poglavlja.
 *
 * Zašto: ranije je page.jsx imao mapu `() => import('poglavljeNN')`, ali App
 * Router/Turbopack je SVE 28 client-komponenti svejedno spojio u zajednički
 * bundle rute → svaka chapter-stranica je skidala ~3.3 MB gzip (kod svih 28).
 * next/dynamic stvara stvarni split-point po poglavlju, pa se učita samo jedno.
 *
 * ssr ostaje uključen (default) → sadržaj se i dalje server-renderira (brz prvi
 * paint + SEO), a klijent lijeno dohvaća samo chunk tog poglavlja.
 */
import dynamic from 'next/dynamic';

const LOADERS = {
  h01: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje01.jsx')),
  h02: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje02.jsx')),
  h03: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje03.jsx')),
  h04: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje04.jsx')),
  h05: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje05.jsx')),
  h06: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje06.jsx')),
  h07: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje07.jsx')),
  h08: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje08.jsx')),
  h09: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje09.jsx')),
  h10: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje10.jsx')),
  h11: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje11.jsx')),
  h12: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje12.jsx')),
  h13: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje13.jsx')),
  h14: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje14.jsx')),
  h15: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje15.jsx')),
  h16: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje16.jsx')),
  h17: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje17.jsx')),
  h18: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje18.jsx')),
  h19: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje19.jsx')),
  h20: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje20.jsx')),
  h21: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje21.jsx')),
  h22: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje22.jsx')),
  h23: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje23.jsx')),
  h24: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje24.jsx')),
  h25: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje25.jsx')),
  h26: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje26.jsx')),
  h27: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje27.jsx')),
  h28: dynamic(() => import('@/app/skripte/data/hrv-components/poglavlje28.jsx')),
};

export default function ChapterClient({ slug }) {
  const Chapter = LOADERS[slug];
  return Chapter ? <Chapter /> : null;
}
