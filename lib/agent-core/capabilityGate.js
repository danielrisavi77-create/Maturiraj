// lib/agent-core/capabilityGate.js

const capabilityCache = new Map()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

export const capabilityGate = {
  async checkCapability(userId, agentType, supabase) {
    const cacheKey = `${userId}-${agentType}`
    const cached = capabilityCache.get(cacheKey)
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.result
    }

    // Provjeri profil korisnika za dozvole
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan_type, agent_access')
      .eq('id', userId)
      .single()

    if (!profile) {
      capabilityCache.set(cacheKey, { result: false, timestamp: Date.now() })
      return false
    }

    let result = false

    // Free korisnici imaju pristup osnovnim agentima
    if (profile.plan_type === 'free') {
      result = ['educational', 'motivational'].includes(agentType)
    }

    // Starter+ korisnici imaju pristup većini agenata
    if (profile.plan_type === 'starter') {
      result = !['operations'].includes(agentType)
    }

    // Pro korisnici imaju pristup svim agentima
    if (profile.plan_type === 'pro') {
      result = !['operations'].includes(agentType)
    }

    // Samo admini mogu pristupiti operacijskim agentima
    if (agentType === 'operations') {
      const { data } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single()
      result = data?.role === 'admin'
    }

    capabilityCache.set(cacheKey, { result, timestamp: Date.now() })
    return result
  },

  getAccessLevel(planType) {
    const levels = {
      free: 1,
      starter: 2,
      pro: 3,
      admin: 4,
    }
    return levels[planType] || 0
  },
}
