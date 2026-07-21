export const FEATURE_FLAGS = Object.freeze({
  BILLING_CHECKOUT: 'BILLING_CHECKOUT_ENABLED',
  BILLING_V2: 'BILLING_V2_ENABLED',
  PARENT_PORTAL: 'PARENT_PORTAL_ENABLED',
  PARENT_LINKING_V2: 'PARENT_LINKING_V2_ENABLED',
  AI_ENDPOINTS: 'AI_ENDPOINTS_ENABLED',
  AGENT_API: 'AGENT_API_ENABLED',
  GAME_MODE: 'GAME_MODE_ENABLED',
})

const KNOWN_FLAGS = new Set(Object.values(FEATURE_FLAGS))

// Code capability marker, not an environment flag. Parent V2 now requires a
// pending/null-child invitation, child-JWT consent RPC, V2 RLS, and a linked
// consent proof before any admin-backed dashboard read. Environment flags stay
// fail-closed and are still required independently.
const PARENT_LINKING_V2_IMPLEMENTED = true

/**
 * Feature flags are fail-closed: only the exact string "true" enables a
 * known flag. Missing, misspelled, differently-cased, or truthy values stay
 * disabled.
 */
export function isFeatureEnabled(flag, env = process.env) {
  return KNOWN_FLAGS.has(flag) && env?.[flag] === 'true'
}

export function areFeaturesEnabled(flags, env = process.env) {
  return (
    Array.isArray(flags) &&
    flags.length > 0 &&
    flags.every((flag) => isFeatureEnabled(flag, env))
  )
}

export function isBillingCheckoutEnabled(env = process.env) {
  return areFeaturesEnabled(
    [FEATURE_FLAGS.BILLING_CHECKOUT, FEATURE_FLAGS.BILLING_V2],
    env
  )
}

export function isParentPortalEnabled(env = process.env) {
  return isFeatureEnabled(FEATURE_FLAGS.PARENT_PORTAL, env)
}

export function isParentLinkingV2Enabled(env = process.env) {
  return (
    PARENT_LINKING_V2_IMPLEMENTED &&
    areFeaturesEnabled(
      [FEATURE_FLAGS.PARENT_PORTAL, FEATURE_FLAGS.PARENT_LINKING_V2],
      env
    )
  )
}

export function isAiEndpointsEnabled(env = process.env) {
  return isFeatureEnabled(FEATURE_FLAGS.AI_ENDPOINTS, env)
}

export function isAgentApiEnabled(env = process.env) {
  return areFeaturesEnabled(
    [FEATURE_FLAGS.AI_ENDPOINTS, FEATURE_FLAGS.AGENT_API],
    env
  )
}

export function isGameModeEnabled(env = process.env) {
  return isFeatureEnabled(FEATURE_FLAGS.GAME_MODE, env)
}
