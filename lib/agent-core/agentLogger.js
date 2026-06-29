// lib/agent-core/agentLogger.js

const logs = []
const maxLogs = 1000

export const agentLogger = {
  log(message, context = {}) {
    const entry = {
      timestamp: new Date().toISOString(),
      level: 'INFO',
      message,
      context,
    }
    this._addLog(entry)
    console.log(`[AGENT] ${message}`, context)
  },

  warn(message, context = {}) {
    const entry = {
      timestamp: new Date().toISOString(),
      level: 'WARN',
      message,
      context,
    }
    this._addLog(entry)
    console.warn(`[AGENT WARN] ${message}`, context)
  },

  error(message, error, context = {}) {
    const entry = {
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      message,
      error: error?.message,
      context,
    }
    this._addLog(entry)
    console.error(`[AGENT ERROR] ${message}`, error, context)
  },

  _addLog(entry) {
    logs.push(entry)
    if (logs.length > maxLogs) {
      logs.shift()
    }
  },

  getLogs(filter = {}) {
    let filtered = [...logs]

    if (filter.level) {
      filtered = filtered.filter(log => log.level === filter.level)
    }

    if (filter.since) {
      const sinceTime = new Date(filter.since).getTime()
      filtered = filtered.filter(
        log => new Date(log.timestamp).getTime() > sinceTime
      )
    }

    if (filter.limit) {
      filtered = filtered.slice(-filter.limit)
    }

    return filtered
  },

  clear() {
    logs.length = 0
  },
}
