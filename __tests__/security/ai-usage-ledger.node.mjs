import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { PGlite } from '@electric-sql/pglite'

const file = new URL('../../supabase/migrations/20260922000000_ai_usage_ledger.sql', import.meta.url)
const user = '11111111-1111-4111-8111-111111111111'

async function db() {
  const pg = new PGlite()
  await pg.exec('create schema auth; create table auth.users(id uuid primary key); insert into auth.users values (\'11111111-1111-4111-8111-111111111111\');')
  await pg.exec("create role anon; create role authenticated; create role service_role;")
  await pg.exec(readFileSync(file, 'utf8'))
  return pg
}

const reserve = (id, cents) => `select public.ai_usage_reserve('${user}', '${id}', 'ai-profesor', 'claude-sonnet-4-6', date '2026-09-01', 100, ${cents}, now() + interval '5 minutes') as allowed`

test('reserve denies a second request when the budget is exhausted', async () => {
  const pg = await db()
  try {
    const a = await pg.query(reserve('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 80))
    const b = await pg.query(reserve('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', 80))
    assert.equal(a.rows[0].allowed, true)
    assert.equal(b.rows[0].allowed, false)
  } finally { await pg.close() }
})

test('completion is idempotent and settles actual usage, including overage', async () => {
  const pg = await db()
  try {
    const id = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa'
    await pg.query(reserve(id, 80))
    const finish = `select public.ai_usage_complete('${id}', 100, 20, 0, 0, 110, 'v1') as completed`
    assert.equal((await pg.query(finish)).rows[0].completed, true)
    assert.equal((await pg.query(finish)).rows[0].completed, true)
    assert.equal((await pg.query(reserve('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', 1))).rows[0].allowed, false)
    assert.equal((await pg.query('select count(*)::int as n from public.ai_usage_events')).rows[0].n, 1)
  } finally { await pg.close() }
})

test('stats report micro-USD with matching field names', async () => {
  const pg = await db()
  try {
    const id = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa'
    await pg.query(reserve(id, 80))
    await pg.query(`select public.ai_usage_complete('${id}', 10, 10, 0, 0, 60, 'v1')`)
    const { rows } = await pg.query(`select public.ai_usage_stats('${user}', date '2026-09-01') as stats`)
    assert.equal(rows[0].stats.usedMicroUsd, 60)
    assert.equal(rows[0].stats.reservedMicroUsd, 0)
    assert.equal(rows[0].stats.usedCents, undefined)
  } finally { await pg.close() }
})

test('uncertain usage remains reserved; stale events are pruned', async () => {
  const pg = await db()
  try {
    const id = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa'
    await pg.query(reserve(id, 80))
    await pg.query(`select public.ai_usage_mark_uncertain('${id}')`)
    assert.equal((await pg.query(reserve('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', 80))).rows[0].allowed, false)
    await pg.query(`select public.ai_usage_complete('${id}', 10, 10, 0, 0, 60, 'v1')`)
    await pg.query('update public.ai_usage_events set created_at = now() - interval \'91 days\'')
    await pg.query('select public.ai_usage_prune()')
    assert.equal((await pg.query('select count(*)::int as n from public.ai_usage_events')).rows[0].n, 0)
  } finally { await pg.close() }
})

test('browser roles cannot execute privileged usage functions', async () => {
  const pg = await db()
  try {
    const grants = await pg.query(`select has_function_privilege('authenticated', 'public.ai_usage_reserve(uuid,uuid,text,text,date,bigint,bigint,timestamptz,integer)', 'EXECUTE') as auth,
      has_function_privilege('anon', 'public.ai_usage_stats(uuid,date)', 'EXECUTE') as anon`)
    assert.equal(grants.rows[0].auth, false)
    assert.equal(grants.rows[0].anon, false)
  } finally { await pg.close() }
})

test('monthly professor message cap counts reservations before provider calls', async () => {
  const pg = await db()
  try {
    const first = `${reserve('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 10).slice(0, -12)}, 1) as allowed`
    const second = `${reserve('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', 10).slice(0, -12)}, 1) as allowed`
    assert.equal((await pg.query(first)).rows[0].allowed, true)
    assert.equal((await pg.query(second)).rows[0].allowed, false)
  } finally { await pg.close() }
})

test('account deletion removes all attributable usage', async () => {
  const pg = await db()
  try {
    await pg.query(reserve('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 80))
    await pg.query(`select public.ai_usage_complete('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 10, 10, 0, 0, 60, 'v1')`)
    await pg.query(`delete from auth.users where id = '${user}'`)
    for (const table of ['ai_usage_monthly', 'ai_usage_reservations', 'ai_usage_events']) {
      assert.equal((await pg.query(`select count(*)::int as n from public.${table}`)).rows[0].n, 0)
    }
  } finally { await pg.close() }
})
