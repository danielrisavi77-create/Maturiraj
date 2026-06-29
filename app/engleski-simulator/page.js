'use client'
import './simulator.css'
import dynamic from 'next/dynamic'

const EngleskiSimulator = dynamic(
  () => import('@/components/engleski-simulator/EngleskiSimulator'),
  { 
    ssr: false,
    loading: () => (
      <div style={{ 
        padding: '40px 20px', 
        textAlign: 'center', 
        color: 'var(--muted)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Učitavanje simulatora...
      </div>
    )
  }
)

export default function EngleskiSimulatorPage() {
  return (
    <div style={{ paddingTop: 58, minHeight: '100vh' }}>
      <EngleskiSimulator />
    </div>
  )
}
