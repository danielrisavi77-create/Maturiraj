/**
 * Shared HTTP helpers for scrapers.
 * User-Agent pool + polite rate limiting to avoid IP bans.
 */

// Realistic desktop browser pool — rotate per request
const UA_POOL = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
]

let uaIndex = 0

export function nextUserAgent(): string {
  const ua = UA_POOL[uaIndex % UA_POOL.length]
  uaIndex++
  return ua
}

/**
 * Delay (ms) between requests — default 10s as recommended.
 * Scrapers should call this between every fetch to be polite.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const RATE_LIMIT_MS = 10_000 // 10 seconds between requests

/**
 * fetch() wrapper with automatic User-Agent rotation and error handling.
 * Adds Accept, Accept-Language, and Referer headers to look like a real browser.
 */
export async function scrapeFetch(
  url: string,
  options: RequestInit = {},
  referer?: string
): Promise<Response> {
  const ua = nextUserAgent()
  const headers: Record<string, string> = {
    'User-Agent': ua,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'hr-HR,hr;q=0.9,en-US;q=0.8,en;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cache-Control': 'no-cache',
    ...(referer ? { 'Referer': referer } : {}),
    ...(options.headers as Record<string, string> ?? {}),
  }

  const res = await fetch(url, { ...options, headers })

  if (res.status === 429) {
    // Too Many Requests — wait and retry once
    const retryAfter = parseInt(res.headers.get('retry-after') ?? '30', 10)
    await sleep(retryAfter * 1000)
    return fetch(url, { ...options, headers: { ...headers, 'User-Agent': nextUserAgent() } })
  }

  return res
}
