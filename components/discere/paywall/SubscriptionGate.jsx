'use client'
// components/discere/paywall/SubscriptionGate.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Declarative access wrapper — renders children or fallback based on tier rank.
//
// Tier rank: free(0) < standard(1) < pro(2)
//
// Usage:
//   <SubscriptionGate userAccess={userAccess} requiredTier="pro" fallback={<LockedFeatureCard ... />}>
//     <RealProContent />
//   </SubscriptionGate>
// ─────────────────────────────────────────────────────────────────────────────

const TIER_RANK = { free: 0, standard: 1, pro: 2 }

export default function SubscriptionGate({
  userAccess,
  requiredTier = 'pro',
  fallback     = null,
  children,
}) {
  const currentRank  = TIER_RANK[userAccess?.subscriptionTier] ?? 0
  const requiredRank = TIER_RANK[requiredTier] ?? 2
  const hasAccess    = currentRank >= requiredRank

  if (!userAccess?.isLoggedIn) return fallback ?? null
  return hasAccess ? children : (fallback ?? null)
}
