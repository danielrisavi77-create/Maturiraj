/**
 * Next.js Suspense loading UI for /skripte/hrv/[chapter]
 * Shown immediately during navigation while the chapter bundle loads.
 */
export default function ChapterLoading() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#0F0605',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Top progress bar */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 2,
        background: '#0F0605',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          height: '100%',
          background: 'linear-gradient(90deg,#E8C97A,#DC322F,#E8C97A)',
          animation: '__nav-bar 1.1s cubic-bezier(.4,0,.2,1) infinite',
        }} />
      </div>

      {/* Spinner */}
      <div style={{
        width: 28,
        height: 28,
        border: '2px solid rgba(232,201,122,0.15)',
        borderTopColor: '#E8C97A',
        borderRadius: '50%',
        animation: '__nav-spin 0.75s linear infinite',
      }} />

      <style>{`
        @keyframes __nav-bar {
          0%   { left: -60%; width: 55% }
          100% { left: 110%; width: 55% }
        }
        @keyframes __nav-spin {
          to { transform: rotate(360deg) }
        }
      `}</style>
    </div>
  )
}
