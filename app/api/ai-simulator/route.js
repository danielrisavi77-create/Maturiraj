import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { requireStandardOrPro } from "@/lib/billing/requirePro";
import { isAiEndpointsEnabled } from "@/lib/config/featureFlags";
import { checkRateLimit } from "@/lib/rate-limit";

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
    const safeMaxTokens = Math.min(Number(max_tokens) || 600, 2000);

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: safeMaxTokens,
      messages,
    });

    return NextResponse.json(response);
  } catch (err) {
    console.error("[ai-simulator] Error:", err);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
