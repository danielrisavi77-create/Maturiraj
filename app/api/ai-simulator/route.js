import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Server-side per-user rate limit (10 s cooldown).
const AI_RATE_LIMIT_MS = 10_000;
const _lastAiRequest = new Map(); // userId → timestamp (ms)

function checkRateLimit(userId) {
  const now = Date.now();
  const last = _lastAiRequest.get(userId) ?? 0;
  const elapsed = now - last;
  if (elapsed < AI_RATE_LIMIT_MS) {
    return Math.ceil((AI_RATE_LIMIT_MS - elapsed) / 1000);
  }
  _lastAiRequest.set(userId, now);
  return 0;
}

export async function POST(req) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Server-side rate limit
    const retryAfter = checkRateLimit(user.id);
    if (retryAfter > 0) {
      return NextResponse.json(
        { error: "Pričekaj malo prije sljedeće AI poruke." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
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
