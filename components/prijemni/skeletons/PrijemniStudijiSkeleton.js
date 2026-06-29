'use client'
import { Sk, SkGap } from '@/components/ui/Skeleton'

function StudijCardSkeleton() {
  return (
    <div style={{
      padding: '18px 20px', borderRadius: 14,
      background: 'linear-gradient(100deg,rgba(14,18,32,.85),rgba(14,18,32,.45))',
      border: '1px solid var(--bdr)',
      display: 'flex', alignItems: 'center', gap: 16,
    }}>
      <Sk variant="circle" w={40} h={40}/>
      <div style={{ flex: 1 }}>
        {/* Name + badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
          <Sk h={17} w="35%"/>
          <Sk variant="pill" w={80} h={18}/>
        </div>
        {/* Meta row */}
        <div style={{ display: 'flex', gap: 14 }}>
          <Sk h={11} w="25%"/>
          <Sk h={11} w="20%"/>
          <Sk h={11} w="22%"/>
        </div>
      </div>
      {/* Right: prag */}
      <div style={{ textAlign: 'right', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
        <Sk h={30} w={56}/>
        <Sk h={10} w={80}/>
        <Sk variant="circle" w={30} h={30}/>
      </div>
    </div>
  )
}

export default function PrijemniStudijiSkeleton() {
  return (
    <div style={{ maxWidth: 840, margin: '0 auto', padding: '92px 40px 60px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 28 }}>
        <Sk variant="pill" w={60} h={20}/>
        <Sk variant="circle" w={8} h={8}/>
        <Sk variant="pill" w={50} h={20}/>
      </div>

      {/* Fakultet hero */}
      <div style={{ paddingBottom: 28, marginBottom: 28, borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Sk variant="circle" w={64} h={64}/>
          <div style={{ flex: 1, minWidth: 220 }}>
            <Sk h={11} w="20%" style={{ marginBottom: 8 }}/>
            <Sk h={32} w="75%" style={{ marginBottom: 6 }}/>
            <Sk h={14} w="30%"/>
          </div>
        </div>
      </div>

      {/* Hint text */}
      <Sk h={13} w="50%" style={{ marginBottom: 18 }}/>

      {/* Studiji list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <StudijCardSkeleton key={i}/>
        ))}
      </div>
    </div>
  )
}
