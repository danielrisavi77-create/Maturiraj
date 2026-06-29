'use client'
import { Sk, SkGap } from '@/components/ui/Skeleton'

function FacultyCardSkeleton() {
  return (
    <div style={{
      padding: '20px', borderRadius: 16,
      background: 'linear-gradient(160deg,rgba(14,18,32,.85),rgba(14,18,32,.55))',
      border: '1px solid var(--bdr)',
      minHeight: 240, display: 'flex', flexDirection: 'column', gap: 0,
    }}>
      {/* Top row — glyph + tags */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <Sk variant="circle" w={44} h={44}/>
        <div style={{ display: 'flex', gap: 5 }}>
          <Sk variant="pill" w={50} h={20}/>
          <Sk variant="pill" w={24} h={20}/>
        </div>
      </div>

      {/* Name */}
      <Sk h={18} w="45%" style={{ marginBottom: 6 }}/>
      <Sk h={12} w="70%" style={{ marginBottom: 16 }}/>

      {/* Prag section */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <Sk h={10} w="50%"/>
          <Sk h={10} w="20%"/>
        </div>
        <Sk h={4} variant="pill" style={{ borderRadius: 99 }}/>
        <SkGap h={4}/>
        <Sk h={10} w="35%"/>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,.05)', display: 'flex', justifyContent: 'space-between' }}>
        <Sk h={12} w="45%"/>
        <Sk variant="circle" w={24} h={24}/>
      </div>
    </div>
  )
}

function CategorySkeleton() {
  return (
    <div style={{ marginBottom: 44 }}>
      {/* Category header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18,
        padding: '14px 18px', borderRadius: 14,
        background: 'linear-gradient(100deg,rgba(14,18,32,.6),rgba(14,18,32,.25))',
        border: '1px solid var(--bdr)',
      }}>
        <Sk variant="circle" w={40} h={40}/>
        <div style={{ flex: 1 }}>
          <Sk h={14} w="40%" style={{ marginBottom: 6 }}/>
          <Sk h={11} w="65%"/>
        </div>
        <Sk variant="pill" w={28} h={22}/>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
        gap: 12,
      }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <FacultyCardSkeleton key={i}/>
        ))}
      </div>
    </div>
  )
}

export default function PrijemniListSkeleton() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero skeleton */}
      <section style={{ padding: '92px 0 36px' }}>
        {/* Eye badge */}
        <Sk variant="pill" w={180} h={28} style={{ marginBottom: 18 }}/>
        <SkGap h={18}/>

        {/* Title */}
        <Sk h={52} w="80%" style={{ marginBottom: 6 }}/>
        <Sk h={52} w="55%" style={{ marginBottom: 18 }}/>

        {/* Subtitle */}
        <Sk h={16} w="70%" style={{ marginBottom: 6 }}/>
        <Sk h={16} w="55%" style={{ marginBottom: 28 }}/>

        {/* Stats bar */}
        <div style={{
          display: 'flex', gap: 24, padding: '18px 22px', borderRadius: 16,
          background: 'linear-gradient(160deg,rgba(14,18,32,.7),rgba(14,18,32,.3))',
          border: '1px solid var(--bdr)', maxWidth: 720,
        }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ minWidth: 90, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Sk h={24} w="60%"/>
              <Sk h={11} w="80%"/>
            </div>
          ))}
        </div>
      </section>

      {/* Matcher banner skeleton */}
      <div style={{
        padding: '20px 22px', borderRadius: 18, marginBottom: 28,
        background: 'rgba(255,255,255,.02)', border: '1px solid var(--bdr)',
        display: 'flex', alignItems: 'center', gap: 18,
      }}>
        <Sk variant="circle" w={52} h={52}/>
        <div style={{ flex: 1 }}>
          <Sk h={15} w="55%" style={{ marginBottom: 8 }}/>
          <Sk h={12} w="75%"/>
        </div>
        <Sk variant="pill" w={140} h={42}/>
      </div>

      {/* Search bar skeleton */}
      <div style={{
        borderRadius: 14, border: '1px solid var(--bdr)', marginBottom: 18,
        padding: '10px 12px', background: 'rgba(7,9,15,.95)',
        display: 'flex', gap: 8, alignItems: 'center',
      }}>
        <Sk h={38} style={{ flex: 1, borderRadius: 10 }}/>
        <Sk variant="pill" w={100} h={38}/>
        <Sk h={38} w={60}/>
      </div>

      {/* 2 categories */}
      <CategorySkeleton/>
      <CategorySkeleton/>
    </div>
  )
}
