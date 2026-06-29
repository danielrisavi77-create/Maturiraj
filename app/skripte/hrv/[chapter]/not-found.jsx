/**
 * 404 page for /skripte/hrv/[chapter] route.
 */
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 32, color: 'var(--gold)' }}>
        Poglavlje nije pronađeno
      </h1>
      <p style={{ color: 'var(--t2)', marginTop: 16 }}>
        Provjeri URL — koristimo H01, H02, ..., H28.
      </p>
      <Link href="/skripte/hrv" style={{
        marginTop: 24,
        padding: '10px 22px',
        background: 'var(--gold)',
        color: '#0F0605',
        fontFamily: 'Fraunces, serif',
        fontWeight: 700,
        borderRadius: 14,
        textDecoration: 'none',
      }}>
        ← Povratak na popis poglavlja
      </Link>
    </div>
  );
}
