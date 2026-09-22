'use client'
import { Sk, SkGap } from '@/components/ui/Skeleton'

export default function PrijemniDetailSkeleton({ fakColor = 'var(--blue)' }) {
  return (
    <div style={{ paddingTop: 58, display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar skeleton */}
      <div style={{
        width: 250, flexShrink: 0,
        borderRight: '1px solid var(--bdr)', padding: '26px 18px',
        background: 'var(--s1)', display: 'flex', flexDirection: 'column', gap: 0,
      }}>
        <Sk h={11} w="60%" style={{ marginBottom: 16 }}/>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', marginBottom: 3 }}>
            <Sk variant="circle" w={8} h={8}/>
            <Sk h={13} w={`${55 + (i * 11 + 5) % 30}%`}/>
          </div>
        ))}
        <SkGap h={18}/>
        <div style={{ height: 1, background: 'var(--bdr)', marginBottom: 18 }}/>
        {/* CTA skeleton */}
        <div style={{ padding: '16px', borderRadius: 14, background: 'rgba(255,255,255,.02)', border: '1px solid var(--bdr)' }}>
          <Sk h={13} w="55%" style={{ marginBottom: 6 }}/>
          <Sk h={11} w="90%" style={{ marginBottom: 4 }}/>
          <Sk h={11} w="70%" style={{ marginBottom: 12 }}/>
          <Sk h={30} variant="pill" w="100%"/>
        </div>
      </div>

      {/* Body skeleton */}
      <div style={{ flex: 1, padding: '32px 44px', maxWidth: 820 }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 18 }}>
          <Sk variant="pill" w={60} h={20}/>
          <Sk variant="circle" w={8} h={8}/>
          <Sk variant="pill" w={40} h={20}/>
          <Sk variant="circle" w={8} h={8}/>
          <Sk variant="pill" w={80} h={20}/>
        </div>

        {/* Hero */}
        <div style={{ paddingBottom: 28, marginBottom: 24, borderBottom: '1px solid var(--bdr)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Sk variant="circle" w={64} h={64}/>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <Sk variant="pill" w={100} h={18}/>
                <Sk variant="pill" w={120} h={18}/>
              </div>
              <Sk h={32} w="80%" style={{ marginBottom: 6 }}/>
              <Sk h={14} w="50%"/>
            </div>
          </div>
        </div>

        {/* Target card skeleton */}
        <div style={{
          padding: '14px 18px', borderRadius: 14, marginBottom: 20,
          background: 'var(--s1)', border: '1px solid var(--bdr)',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <Sk variant="circle" w={40} h={40}/>
          <div style={{ flex: 1 }}>
            <Sk h={13} w="35%" style={{ marginBottom: 6 }}/>
            <Sk h={12} w="70%"/>
          </div>
          <Sk variant="pill" w={120} h={36}/>
        </div>

        {/* Prag cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 22 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ padding: '16px 18px', borderRadius: 14, background: 'var(--s1)', border: '1px solid var(--bdr)' }}>
              <Sk h={11} w="60%" style={{ marginBottom: 8 }}/>
              <Sk h={26} w="50%" style={{ marginBottom: 5 }}/>
              <Sk h={10} w="40%"/>
            </div>
          ))}
        </div>

        {/* Tabs skeleton */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '1px solid var(--bdr)', paddingBottom: 1 }}>
          {[120, 140, 160].map((w, i) => (
            <Sk key={i} h={38} w={w} style={{ borderRadius: '10px 10px 0 0' }}/>
          ))}
        </div>

        {/* Tab content skeleton — datumi (default) */}
        <DatumiTabSkeleton/>
      </div>
    </div>
  )
}

function DatumiTabSkeleton() {
  return (
    <div>
      {/* Countdown banner */}
      <div style={{
        padding: '16px 20px', borderRadius: 14, marginBottom: 14,
        background: 'var(--s1)', border: '1px solid var(--bdr)',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <Sk variant="circle" w={32} h={32}/>
        <div style={{ flex: 1 }}>
          <Sk h={11} w="30%" style={{ marginBottom: 6 }}/>
          <Sk h={20} w="25%"/>
        </div>
        <Sk variant="pill" w={120} h={34}/>
      </div>

      {/* Datumi 2x2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{ padding: '16px', borderRadius: 12, background: 'var(--s1)', border: '1px solid var(--bdr)' }}>
            <Sk variant="circle" w={22} h={22} style={{ marginBottom: 8 }}/>
            <Sk h={11} w="55%" style={{ marginBottom: 5 }}/>
            <Sk h={14} w="75%"/>
          </div>
        ))}
      </div>

      {/* Link button */}
      <Sk variant="pill" w={200} h={36}/>
    </div>
  )
}
