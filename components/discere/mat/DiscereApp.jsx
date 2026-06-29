'use client';
// components/discere/mat/DiscereApp.jsx
// /discere/matematika → the FULL native math simulator (home + every mode), tier-gated,
// with Supabase progress. Renders the engine's <App/> in-process (see MatFullSimulator).
// Client-only + ~heavy chunk → dynamic import with ssr:false; loads only on this route.
import dynamic from 'next/dynamic';

const MatFullSimulator = dynamic(() => import('@/components/discere/mat/MatFullSimulator'), {
  ssr: false,
  loading: () => (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1220', color: '#9fb2d4', fontFamily: 'system-ui, sans-serif', fontSize: 14 }}>
      Učitavam simulator…
    </div>
  ),
});

export default function DiscereApp({ tier /* , onBack */ }) {
  return <MatFullSimulator tier={tier} />;
}
