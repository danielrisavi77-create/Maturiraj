// components/discere/paywall/index.js
// ─────────────────────────────────────────────────────────────────────────────
// Barrel export — import everything from one place:
//   import { SimulatorPreviewGate, ResultsSummary, buildUserAccess } from '@/components/discere/paywall'
// ─────────────────────────────────────────────────────────────────────────────

// Components
export { default as PaywallModal }         from './PaywallModal'
export { default as UpgradeCTA }           from './UpgradeCTA'
export { default as LockedFeatureCard }    from './LockedFeatureCard'
export { default as SimulatorPreviewGate } from './SimulatorPreviewGate'
export { default as ResultsSummary }       from './ResultsSummary'
export { default as LockedAnalysisSection } from './LockedAnalysisSection'
export { default as SubscriptionGate }     from './SubscriptionGate'
export { default as PremiumBadge }         from './PremiumBadge'
export { default as BlurLockOverlay }      from './BlurLockOverlay'

// Helpers + constants
export * from './paywallCopy'
export * from './paywallHelpers'
