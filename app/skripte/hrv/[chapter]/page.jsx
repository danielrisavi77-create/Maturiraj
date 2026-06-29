/**
 * Dynamic chapter page: /skripte/hrv/[chapter]
 * e.g. /skripte/hrv/h01 → poglavlje01.jsx
 * Uses lazy imports so only the requested chapter is loaded per request.
 */
import { notFound } from 'next/navigation';
import { CHAPTERS } from '@/app/skripte/data/hrv-components/chapters';
import ChapterClient from './ChapterClient';

// Force static rendering — pages are pre-generated from generateStaticParams.
// Prevents Turbopack dev-mode streaming SSR from injecting a "\n" placeholder
// in <Next.MetadataOutlet> that causes a hydration mismatch with <Suspense>.
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return Object.keys(CHAPTERS).map((slug) => ({ chapter: slug }));
}

export async function generateMetadata({ params }) {
  // In current Next.js, params is a Promise and must be awaited before access.
  const { chapter } = await params;
  const slug = (chapter || '').toLowerCase();
  const ch = CHAPTERS[slug];
  if (!ch) return {};
  return {
    title: ch.title,
    description: ch.description,
    alternates: { canonical: ch.canonical },
    openGraph: {
      title: ch.title,
      description: ch.description,
      images: ch.ogImage ? [{ url: ch.ogImage }] : [],
    },
  };
}

export default async function HrvatskiChapterPage({ params }) {
  const { chapter } = await params;
  const slug = chapter?.toLowerCase();
  const ch = CHAPTERS[slug];

  if (!ch) notFound();

  // Lazy učitavanje samo traženog poglavlja (split-point u ChapterClient).
  return <ChapterClient slug={slug} />;
}
