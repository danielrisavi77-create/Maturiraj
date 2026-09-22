// app/api/sim/[subject]/exam/[examKey]/route.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001: JEDNA ruta za isporuku ispita svim predmetima.
//
//   GET /api/sim/<predmet>/exam/<examKey>?mode=exam|practice
//   → { key, meta, texts, qs, keys: 'none' | 'partial' | 'full' }
//
// `keys` je opis onoga što je u payloadu, ne zahtjev klijenta:
//   'full'    — svako pitanje nosi ključ (plaćeni tier, i to samo za ispite iz
//               allowedExamKeys tog tiera)
//   'partial' — dio pitanja nosi ključ (danas ne nastaje: free izuzetak je 0)
//   'none'    — nijedno pitanje nema ključ (svaki free korisnik, oba načina)
// Klijentski prekidač ostaje `const hasKeys = qs.some(q => q && q.sol)`, pa mu
// 'partial' ne treba posebno rukovanje.
//
// ODLUKA VLASNIKA: free korisnik NIKAD ne dobiva sol/exp/why/steps. Zato je
// `freeKeyAllowance` nula i zato ovaj odgovor nema tier-ovisnog izuzetka koji bi
// se dao pokupiti skupnim dohvatom svih ispita.
//
// Tier se čita ISKLJUČIVO iz baze. Ni query string, ni tijelo, ni bridge.
// Zaglavlja su `private, no-store` + `Vary: Cookie` jer je odgovor tier-ovisan:
// s javnim kešom bi CDN plaćeni payload posluživao free korisniku.
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getUserTier } from '@/lib/billing/subscriptions'
import { normalizeTier, isPaidTier } from '@/lib/billing/getEffectiveTier'
import { asKeySet, getAdapter } from '@/lib/exam-secrets/registry'
import { mergeSecrets, stripQuestions } from '@/lib/exam-secrets'
import { freeKeyAllowance } from '@/lib/exam-secrets/free-policy'

export const dynamic = 'force-dynamic'

const SUBJECT_PATTERN = /^[a-z]{2,16}$/
const EXAM_KEY_PATTERN = /^[A-Za-z0-9_-]{1,64}$/

const HEADERS = Object.freeze({
  'Cache-Control': 'private, no-store',
  Vary: 'Cookie',
})

function fail(message, status) {
  return NextResponse.json({ error: message }, { status, headers: HEADERS })
}

/* ── keš tiera ─────────────────────────────────────────────────────────────
   Ekrani koji analiziraju cijelu banku dohvaćaju ispite POJEDINAČNO (70
   zahtjeva, 6 usporedno). Bez keša svaki od njih radi i vlastiti upit nad
   `subscriptions`, dakle 70 nepotrebnih round-tripova po ulasku u ekran.
   Prijava (auth.getUser) se ne kešira — ona je provjera identiteta i mora
   ostati po zahtjevu; kešira se samo tier, i to kratko: promjena plana vidi se
   najkasnije za TIER_TTL_MS, a keš živi po instanci funkcije. */
const TIER_TTL_MS = 60 * 1000
const TIER_CACHE_MAX = 500
const tierCache = new Map()

async function cachedTier(userId) {
  const hit = tierCache.get(userId)
  if (hit && Date.now() - hit.at < TIER_TTL_MS) return hit.tier
  const tier = normalizeTier(await getUserTier(userId))
  if (tierCache.size >= TIER_CACHE_MAX) tierCache.delete(tierCache.keys().next().value)
  tierCache.set(userId, { tier, at: Date.now() })
  return tier
}

export async function GET(request, { params } = {}) {
  const resolved = await params
  const subject = resolved?.subject ?? ''
  const examKey = resolved?.examKey ?? ''
  if (!SUBJECT_PATTERN.test(subject) || !EXAM_KEY_PATTERN.test(examKey)) {
    return fail('Neispravni parametri.', 400)
  }

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  const user = auth?.user
  if (!user) return fail('Prijava je obavezna.', 401)

  const adapter = getAdapter(subject)
  if (!adapter) return fail('Predmet nije dostupan.', 404)

  const mode = new URL(request.url).searchParams.get('mode') === 'practice' ? 'practice' : 'exam'

  const exam = await adapter.loadPublic(examKey)
  if (!exam) return fail('Ispit ne postoji.', 404)

  const tier = await cachedTier(user.id)

  // Javni payload se čisti UVIJEK, pa i kad ga adapter već isporučuje čistog.
  // Dok traje migracija predmeta to je jedina stvar koja stoji između
  // poluprebačenog adaptera i free korisnika s ključevima u pregledniku.
  const publicQs = stripQuestions(exam.qs, adapter.publicFields)

  const allowed = asKeySet(adapter.allowedExamKeys(tier))
  const paidMayHaveKeys = isPaidTier(tier) && (allowed === null || allowed.has(examKey))
  const allowance = paidMayHaveKeys ? publicQs.length : freeKeyAllowance(subject, examKey, mode)

  let qs = publicQs
  let merged = 0
  if (allowance > 0) {
    const secrets = await adapter.loadSecrets(examKey)
    if (secrets) {
      qs = publicQs.map((question, index) => {
        if (index >= allowance) return question
        const withSecrets = mergeSecrets(question, secrets)
        if (withSecrets !== question) merged += 1
        return withSecrets
      })
    }
  }

  const keys = merged === 0 ? 'none' : merged >= publicQs.length ? 'full' : 'partial'

  return NextResponse.json(
    { key: exam.key ?? examKey, meta: exam.meta ?? {}, texts: exam.texts ?? {}, qs, keys },
    { headers: HEADERS },
  )
}
