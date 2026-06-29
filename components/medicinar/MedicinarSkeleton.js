'use client'
import { Sk, SkGap } from '@/components/ui/Skeleton'
import { AIBriefingSkeleton, PredmetProgressSkeleton, LeaderboardSkeleton, PuttingRateSkeleton } from '@/components/prijemni/skeletons/ComponentSkeletons'

function SimulatorLauncherSkeleton() {
  return (
    <div style={{
      padding: '24px 26px', borderRadius: 18,
      background: 'rgba(255,255,255,.02)', border: '1px solid var(--bdr)',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
        <Sk variant="circle" w={52} h={52}/>
        <div style={{ flex: 1 }}>
          <Sk h={18} w="55%" style={{ marginBottom: 8 }}/>
          <Sk h={13} w="80%" style={{ marginBottom: 4 }}/>
          <Sk h={13} w="65%"/>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 18 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ padding: '10px 12px', borderRadius: 10, background: 'rgba(255,255,255,.03)', border: '1px solid var(--bdr)', textAlign: 'center' }}>
            <Sk h={18} w="50%" style={{ margin: '0 auto 4px' }}/>
            <Sk h={10} w="65%" style={{ margin: '0 auto' }}/>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Sk h={48} style={{ flex: 1, borderRadius: 12 }}/>
        <Sk h={48} w={120} style={{ borderRadius: 12 }}/>
      </div>
    </div>
  )
}

function WeaknessHeatmapSkeleton() {
  return (
    <div style={{
      padding: '20px 22px', borderRadius: 16,
      background: 'rgba(248,113,113,.04)', border: '1px solid rgba(248,113,113,.12)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <Sk h={18} w={220} style={{ marginBottom: 5 }}/>
          <Sk h={12} w={280}/>
        </div>
      </div>
      {[0,1,2].map(i => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px',
          borderRadius: 11, marginBottom: 8,
          background: 'rgba(0,0,0,.12)', border: '1px solid rgba(255,255,255,.04)',
        }}>
          <Sk variant="circle" w={28} h={28}/>
          <div style={{ flex: 1 }}>
            <Sk h={14} w="40%" style={{ marginBottom: 5 }}/>
            <Sk h={11} w="55%"/>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Sk h={18} w={44} style={{ marginBottom: 4 }}/>
            <Sk h={10} w={36}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MedicinarSkeleton() {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '90px 32px 60px', position: 'relative', zIndex: 1 }}>
      {/* Hero */}
      <div style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
        <Sk variant="circle" w={72} h={72}/>
        <div style={{ flex: 1 }}>
          <Sk h={11} w="25%" style={{ marginBottom: 8 }}/>
          <Sk h={36} w="55%" style={{ marginBottom: 6 }}/>
          <Sk h={14} w="70%"/>
        </div>
      </div>

      {/* 2-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 24 }}>
        {/* Main column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <AIBriefingSkeleton/>

          {/* Predmeti section */}
          <div>
            <Sk h={18} w={200} style={{ marginBottom: 5 }}/>
            <Sk h={12} w={280} style={{ marginBottom: 16 }}/>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
              {[0,1,2].map(i => <PredmetProgressSkeleton key={i}/>)}
            </div>
          </div>

          <WeaknessHeatmapSkeleton/>
          <SimulatorLauncherSkeleton/>
        </div>

        {/* Aside column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PuttingRateSkeleton/>
          <LeaderboardSkeleton/>
          {/* Quick links widget */}
          <div style={{ padding: '18px 20px', borderRadius: 14, background: 'var(--s1)', border: '1px solid var(--bdr)' }}>
            <Sk h={11} w="40%" style={{ marginBottom: 14 }}/>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ padding: '8px 10px', marginBottom: 3 }}>
                <Sk h={13} w={`${55 + i * 10}%`}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
