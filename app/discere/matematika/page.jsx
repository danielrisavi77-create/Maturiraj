'use client';
// app/discere/matematika/page.jsx
// Route the subject picker already links to (predmetRoutes.mat = '/discere/matematika').
// App Router equivalent of the SPA `{page==="discere-app" && <DiscereApp .../>}` placeholder.
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import DiscereApp from '@/components/discere/mat/DiscereApp';

export default function DiscereMatematika() {
  const router = useRouter();
  const { userTier } = useAuth();
  return <DiscereApp tier={userTier} onBack={() => router.push('/discere')} />;
}
