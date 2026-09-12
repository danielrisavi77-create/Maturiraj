const PREFIX = 'maturiraj:attempt-outbox:v1:'
const FIELDS = ['eventId', 'sessionId', 'questionId', 'questionVersion', 'response', 'helpUsed']
const STATES = new Set(['local', 'auth', 'error', 'saved'])

function identifier(value) {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= 200
}

// Canonical JSON makes retry comparison independent of object property order.
// Reject values that JSON would silently discard or coerce before storing them.
function canonical(value, depth = 0) {
  if (depth > 20) throw new Error('Invalid attempt payload depth')
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return value
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (Array.isArray(value)) return Array.from(value, item => canonical(item, depth + 1))
  if (value && Object.getPrototypeOf(value) === Object.prototype) {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key], depth + 1)]))
  }
  throw new Error('Invalid attempt JSON value')
}

function serialize(value) {
  const result = JSON.stringify(canonical(value))
  if (result.length > 65536) throw new Error('Attempt payload too large')
  return result
}

export function validateAttemptEvent(event) {
  if (!event || Object.getPrototypeOf(event) !== Object.prototype ||
      Object.keys(event).some(key => !FIELDS.includes(key)) ||
      !FIELDS.slice(0, 4).every(key => identifier(event[key])) ||
      !Object.hasOwn(event, 'response') || typeof event.helpUsed !== 'boolean') {
    throw new Error('Invalid attempt event')
  }
  return serialize(event)
}

/**
 * Durable browser queue, not an authority for scores or ownership.
 * getOwnerId must reflect the current authenticated account; guests are not
 * silently adopted. send(event) must use an authenticated, idempotent endpoint.
 * Separate tabs may retry the same event: server-side deduplication is mandatory.
 */
export function createAttemptOutbox({ storage, getOwnerId }) {
  const syncing = new Set()
  let inFlight = null
  const ownerNow = () => {
    const owner = getOwnerId()
    return identifier(owner) ? owner : null
  }
  const ownerPrefix = owner => `${PREFIX}${encodeURIComponent(owner)}:`
  const keyFor = (owner, eventId) => `${ownerPrefix(owner)}${encodeURIComponent(eventId)}`

  function read(key, owner) {
    const raw = storage.getItem(key)
    if (raw === null) return null
    try {
      const row = JSON.parse(raw)
      if (row.version !== 1 || row.ownerId !== owner || !STATES.has(row.status) ||
          keyFor(owner, row.event?.eventId) !== key) throw new Error('shape')
      validateAttemptEvent(row.event)
      if (row.status === 'saved' && (row.receipt?.saved !== true || row.receipt.eventId !== row.event.eventId)) {
        throw new Error('receipt')
      }
      return row
    } catch {
      throw new Error('Attempt outbox record is corrupt; original data preserved')
    }
  }

  function rowsFor(owner) {
    const prefix = ownerPrefix(owner)
    const keys = []
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i)
      if (key?.startsWith(prefix)) keys.push(key)
    }
    return keys.map(key => ({ key, row: read(key, owner) })).filter(item => item.row)
  }

  function write(key, row) {
    // Storage errors propagate. A failed local write must never look saved.
    storage.setItem(key, serialize(row))
  }

  function enqueue(event) {
    const owner = ownerNow()
    if (!owner) throw new Error('Authenticated owner required for attempt outbox')
    const payload = validateAttemptEvent(event)
    const key = keyFor(owner, event.eventId)
    const existing = read(key, owner)
    if (existing) {
      if (serialize(existing.event) !== payload) throw new Error('Attempt event ID conflict')
      return existing
    }
    const row = { version: 1, ownerId: owner, event: JSON.parse(payload), status: 'local' }
    write(key, row)
    return row
  }

  function list() {
    const owner = ownerNow()
    if (!owner) return []
    return rowsFor(owner).map(({ key, row }) => ({ ...row, status: syncing.has(key) ? 'syncing' : row.status }))
  }

  // Reconcile only a matching authenticated history receipt, never a locally
  // calculated score. The consumer validates the receipt's result contract.
  function confirm(event, receipt) {
    if (receipt?.saved !== true || receipt.eventId !== event?.eventId) throw new Error('Invalid outbox confirmation')
    const row = enqueue(event)
    const key = keyFor(row.ownerId, event.eventId)
    if (row.status === 'saved' && serialize(row.receipt) !== serialize(receipt)) throw new Error('Receipt conflict')
    write(key, { ...row, status: 'saved', receipt: JSON.parse(serialize(receipt)) })
  }

  async function run(send, eventIds) {
    const owner = ownerNow()
    if (!owner) return
    const positions = eventIds ? new Map(eventIds.map((id, index) => [id, index])) : null
    const pendingRows = rowsFor(owner).filter(({ row }) => !positions || positions.has(row.event.eventId))
    if (positions) pendingRows.sort((a, b) => positions.get(a.row.event.eventId) - positions.get(b.row.event.eventId))
    for (const { key, row } of pendingRows) {
      if (ownerNow() !== owner) return
      if (row.status === 'saved' || row.status === 'error') continue
      syncing.add(key)
      let response
      try {
        response = await send(row.event)
      } catch {
        // A transport failure leaves the durable event available for retry.
        response = { saved: false, status: 503 }
      } finally {
        syncing.delete(key)
      }
      if (ownerNow() !== owner) return
      // Another tab may have confirmed this event while this request was pending.
      const current = read(key, owner)
      if (current?.status === 'saved') continue
      if (!current || serialize(current.event) !== serialize(row.event)) throw new Error('Attempt event ID conflict')
      if (response?.saved === true && response.eventId === row.event.eventId) {
        write(key, { ...current, status: 'saved', receipt: JSON.parse(serialize(response)) })
      } else {
        const code = response?.status
        const status = code === 401 ? 'auth' : code === 429 || (code >= 500 && code <= 599) ? 'local' : 'error'
        write(key, { ...current, status })
        if (status === 'auth') return
      }
    }
  }

  function flush(send, { eventIds } = {}) {
    if (!inFlight) inFlight = run(send, eventIds).finally(() => { inFlight = null })
    return inFlight
  }

  return { enqueue, list, flush, confirm }
}
