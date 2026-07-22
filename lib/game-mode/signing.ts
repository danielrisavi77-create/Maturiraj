import { createHmac, timingSafeEqual } from 'node:crypto'
import type { GameManifest } from './types'

function secret() {
  const configured = process.env.GAME_SESSION_SECRET
  if (configured) return configured
  if (process.env.NODE_ENV !== 'production') return 'maturiraj-local-game-session-secret'
  throw new Error('GAME_SESSION_SECRET nije postavljen.')
}

function signature(payload: string) {
  return createHmac('sha256', secret()).update(payload).digest('base64url')
}

export function signGameManifest(manifest: GameManifest) {
  const payload = Buffer.from(JSON.stringify(manifest)).toString('base64url')
  return `${payload}.${signature(payload)}`
}

export function verifyGameManifest(token: string): GameManifest {
  const [payload, suppliedSignature] = token.split('.')
  if (!payload || !suppliedSignature) throw new Error('Neispravan token sesije.')
  const expected = Buffer.from(signature(payload))
  const supplied = Buffer.from(suppliedSignature)
  if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) {
    throw new Error('Potpis sesije nije valjan.')
  }
  const manifest = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as GameManifest
  if (new Date(manifest.expiresAt).getTime() < Date.now()) throw new Error('Sesija je istekla.')
  return manifest
}
