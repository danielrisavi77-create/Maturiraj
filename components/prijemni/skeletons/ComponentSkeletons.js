'use client'
import { Sk, SkGap, SkText } from '@/components/ui/Skeleton'

/**
 * TrendChart skeleton — 300×120 SVG placeholder
 */
export function TrendChartSkeleton() {
  return (
    <div style={{
      padding: '18px 20px', borderRadius: 14,
      background: 'var(--s1)', border: '1px solid var(--bdr)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <Sk h={11} w={160} style={{ marginBottom: 6 }}/>
          <Sk h={13} w={100}/>
        </div>
        <Sk variant="pill" w={80} h={24}/>
      </div>
      {/* Fake SVG area */}
      <div style={{ height: 120, position: 'relative', overflow: 'hidden' }}>
        {/* Grid lines */}
        {[25, 50, 75].map(pct => (
          <div key={pct} style={{
            position: 'absolute', top: `${pct}%`, left: 0, right: 0,
            height: 1, background: 'rgba(255,255,255,.04)',
          }}/>
        ))}
        {/* Fake chart line — SVG path simulation with divs */}
        <Sk style={{
          position: 'absolute', left: 20, right: 20, bottom: 20,
          height: 4, borderRadius: 99,
          background: 'linear-gradient(90deg,rgba(255,255,255,.06),rgba(255,255,255,.09),rgba(255,255,255,.06))',
        }}/>
      </div>
    </div>
  )
}

/**
 * Story card skeleton
 */
export function StoryCardSkeleton() {
  return (
    <div style={{
      padding: '18px 20px', borderRadius: 14,
      background: 'linear-gradient(160deg,rgba(14,18,32,.85),rgba(14,18,32,.5))',
      border: '1px solid var(--bdr)',
      display: 'flex', flexDirection: 'column', gap: 0,
    }}>
      {/* Author row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <Sk variant="circle" w={36} h={36}/>
        <div style={{ flex: 1 }}>
          <Sk h={13} w="40%" style={{ marginBottom: 5 }}/>
          <Sk h={11} w="55%"/>
        </div>
      </div>
      {/* Quote */}
      <Sk h={4} w={40} style={{ marginBottom: 8, borderRadius: 99, background: 'rgba(255,255,255,.08)' }}/>
      <Sk h={14} w="90%" style={{ marginBottom: 5 }}/>
      <Sk h={14} w="75%" style={{ marginBottom: 5 }}/>
      <Sk h={14} w="60%" style={{ marginBottom: 16 }}/>
      {/* Tags */}
      <div style={{ display: 'flex', gap: 6 }}>
        <Sk variant="pill" w={90} h={22}/>
        <Sk variant="pill" w={80} h={22}/>
        <Sk variant="pill" w={70} h={22}/>
      </div>
    </div>
  )
}

/**
 * Stories section skeleton (3 cards grid)
 */
export function StoriesSectionSkeleton() {
  return (
    <div style={{ marginBottom: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <Sk h={11} w={100} style={{ marginBottom: 6 }}/>
          <Sk h={20} w={220} style={{ marginBottom: 5 }}/>
          <Sk h={12} w={160}/>
        </div>
        <Sk variant="pill" w={140} h={36}/>
      </div>
      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
        {[0, 1, 2].map(i => <StoryCardSkeleton key={i}/>)}
      </div>
    </div>
  )
}

/**
 * Leaderboard widget skeleton
 */
export function LeaderboardSkeleton() {
  return (
    <div style={{ padding: '18px 20px', borderRadius: 14, background: 'var(--s1)', border: '1px solid var(--bdr)' }}>
      <Sk h={11} w="45%" style={{ marginBottom: 14 }}/>
      {/* User rank card */}
      <div style={{ padding: '14px 16px', borderRadius: 12, marginBottom: 14, background: 'rgba(255,255,255,.03)', border: '1px solid var(--bdr)' }}>
        <Sk h={10} w="30%" style={{ marginBottom: 6 }}/>
        <Sk h={22} w="40%" style={{ marginBottom: 4 }}/>
        <Sk h={11} w="55%"/>
      </div>
      {/* Leaderboard bars */}
      {[0, 1, 2, 3].map(i => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 10px', marginBottom: 4 }}>
          <Sk variant="circle" w={7} h={7}/>
          <Sk h={12} style={{ flex: 1 }}/>
          <Sk h={14} w={40}/>
        </div>
      ))}
    </div>
  )
}

/**
 * AI Briefing card skeleton (Pro)
 */
export function AIBriefingSkeleton() {
  return (
    <div style={{
      padding: '24px 26px', borderRadius: 18,
      background: 'linear-gradient(160deg,rgba(75,123,255,.05),rgba(14,18,32,.3))',
      border: '1px solid rgba(75,123,255,.18)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <Sk variant="circle" w={40} h={40}/>
        <div style={{ flex: 1 }}>
          <Sk h={10} w="35%" style={{ marginBottom: 6 }}/>
          <Sk h={16} w="55%"/>
        </div>
      </div>
      {/* Summary */}
      <SkText lines={3} lastWidth="40%"/>
      <SkGap h={18}/>
      {/* Priority items */}
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          display: 'flex', gap: 12, padding: '12px 14px', borderRadius: 11, marginBottom: 8,
          background: 'rgba(0,0,0,.15)', border: '1px solid rgba(255,255,255,.04)',
        }}>
          <Sk variant="circle" w={24} h={24}/>
          <div style={{ flex: 1 }}>
            <Sk h={14} w="45%" style={{ marginBottom: 6 }}/>
            <Sk h={12} w="90%" style={{ marginBottom: 4 }}/>
            <Sk h={12} w="70%" style={{ marginBottom: 4 }}/>
            <Sk h={12} w="55%"/>
          </div>
        </div>
      ))}
      <SkGap h={10}/>
      {/* Encouragement */}
      <div style={{ padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,.02)', border: '1px solid var(--bdr)' }}>
        <Sk h={12} w="95%" style={{ marginBottom: 5 }}/>
        <Sk h={12} w="65%"/>
      </div>
    </div>
  )
}

/**
 * Predmet progress card skeleton
 */
export function PredmetProgressSkeleton() {
  return (
    <div style={{ padding: '16px 18px', borderRadius: 14, background: 'var(--s1)', border: '1px solid var(--bdr)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Sk variant="circle" w={36} h={36}/>
          <div>
            <Sk h={14} w={80} style={{ marginBottom: 5 }}/>
            <Sk h={11} w={55}/>
          </div>
        </div>
        <Sk h={22} w={44}/>
      </div>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <Sk h={11} w="35%"/>
            <Sk h={11} w="18%"/>
          </div>
          <Sk h={4} style={{ borderRadius: 99 }}/>
        </div>
      ))}
    </div>
  )
}

/**
 * Putting rate card skeleton (Pro)
 */
export function PuttingRateSkeleton() {
  return (
    <div style={{ padding: '20px 22px', borderRadius: 14, background: 'var(--s1)', border: '1px solid var(--bdr)' }}>
      <Sk h={11} w="50%" style={{ marginBottom: 16 }}/>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 10 }}>
        <Sk h={48} w={80}/>
        <Sk h={14} w={80}/>
      </div>
      <Sk h={8} style={{ borderRadius: 99, marginBottom: 10 }}/>
      <Sk h={11} w="90%" style={{ marginBottom: 5 }}/>
      <Sk h={11} w="70%"/>
    </div>
  )
}

/**
 * Platform stats badge skeleton
 */
export function PlatformStatsBadgeSkeleton() {
  return (
    <div style={{
      display: 'flex', gap: 24, padding: '14px 18px', borderRadius: 12,
      background: 'rgba(255,255,255,.02)', border: '1px solid var(--bdr)',
    }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Sk h={14} w={40}/>
          <Sk h={12} w={60}/>
        </div>
      ))}
    </div>
  )
}
