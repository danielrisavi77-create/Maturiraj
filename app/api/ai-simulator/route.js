import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { requireStandardOrPro } from "@/lib/billing/requirePro";
import { isAiEndpointsEnabled } from "@/lib/config/featureFlags";
import { checkRateLimit } from "@/lib/rate-limit";
import { getUserTier } from "@/lib/billing/subscriptions";
import { reserveUsage, completeUsage, markUsageUncertain, releaseUsage } from "@/lib/ai-usage/ledger";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Zajednički rate-limit helper (2.4) — Supabase tablica ai_rate_limit, fallback in-memory.
const AI_RATE_LIMIT_MS = 10_000;

export async function POST(req) {
  if (!isAiEndpointsEnabled()) {
    return NextResponse.json(
      { error: "AI je privremeno nedostupan.", code: "FEATURE_DISABLED" },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    // Entitlement gate — Discere AI simulator je Standard+ značajka (vidi /uspjeh pricing).
    // Prije je bilo dovoljno samo biti prijavljen (free korisnik je trošio Anthropic ključ).
    const deny = await requireStandardOrPro(req, { source: "ai-simulator" });
    if (deny) return deny;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Server-side rate limit
    const { limited, retryAfterSec } = await checkRateLimit(user.id, "ai-simulator", AI_RATE_LIMIT_MS);
    if (limited) {
      return NextResponse.json(
        { error: "Pričekaj malo prije sljedeće AI poruke." },
        { status: 429, headers: { "Retry-After": String(retryAfterSec) } }
      );
    }

    const body = await req.json();
    const { messages, max_tokens = 600 } = body ?? {};

    // Validate messages: must be a non-empty array, max 20 turns, each turn bounded
    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.length > 20
    ) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    for (const msg of messages) {
      if (
        !msg ||
        (msg.role !== "user" && msg.role !== "assistant") ||
        typeof msg.content !== "string" ||
        msg.content.length > 16000
      ) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
      }
    }

    // Limit max_tokens to prevent abuse
    if (!Number.isSafeInteger(Number(max_tokens)) || Number(max_tokens) < 1) {
      return NextResponse.json({ error: 'Invalid max_tokens' }, { status: 400 });
    }
    const safeMaxTokens = Math.min(Number(max_tokens), 2000);

    const model = 'claude-sonnet-4-6';
    const tier = await getUserTier(user.id);
    const { requestId } = await reserveUsage({
      userId: user.id, feature: 'ai-simulator', tier, model,
      estimatedInputTokens: new TextEncoder().encode(JSON.stringify(messages)).length + 2048,
      maxOutputTokens: safeMaxTokens,
    });
    let response;
    try {
      response = await anthropic.messages.create({
      model,
      max_tokens: safeMaxTokens,
      messages,
      });
      await completeUsage({ requestId, model, usage: response.usage });
    } catch (error) {
      if ([400, 401, 403, 429].includes(error?.status)) await releaseUsage({ requestId }).catch(() => {});
      else await markUsageUncertain({ requestId }).catch(() => {});
      throw error;
    }

    return NextResponse.json(response);
  } catch (err) {
    console.error("[ai-simulator] Error:", err);
    if (err?.code === 'AI_BUDGET_EXCEEDED') return NextResponse.json({ error: 'AI budget exceeded', code: err.code }, { status: 429 });
    return NextResponse.json({ error: "AI request unavailable" }, { status: 503 });
  }
}
