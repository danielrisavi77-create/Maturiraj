import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { requireStandardOrPro } from "@/lib/billing/requirePro";
import { isAiEndpointsEnabled } from "@/lib/config/featureFlags";
import { checkRateLimit } from "@/lib/rate-limit";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Server-side fixed system prompt — client cannot override this.
const SYSTEM_PROMPT =
  "Ti si profesor engleskog jezika. Učenik uči za državnu maturu. " +
  "Daj kratko obrazloženje na hrvatskom (2-4 rečenice) koje objašnjava ZAŠTO je odgovor točan. " +
  "Budi konkretan i educativan. Odgovaraj ISKLJUČIVO na pitanja vezana za engleski jezik i maturu.";

// Zajednički rate-limit helper (2.4) — Supabase tablica ai_rate_limit, fallback in-memory.
const AI_RATE_LIMIT_MS = 8_000;

export async function POST(req) {
  if (!isAiEndpointsEnabled()) {
    return NextResponse.json(
      { error: "AI je privremeno nedostupan.", code: "FEATURE_DISABLED" },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    // Entitlement gate — AI objašnjenja su Standard+ značajka (vidi /uspjeh pricing).
    // Prije je bilo dovoljno samo biti prijavljen (free korisnik je trošio Anthropic ključ).
    const deny = await requireStandardOrPro(req, { source: "ai" });
    if (deny) return deny;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { messages } = body ?? {};

    // Server-side rate limit check
    const { limited, retryAfterSec } = await checkRateLimit(user.id, "ai", AI_RATE_LIMIT_MS);
    if (limited) {
      return NextResponse.json(
        { error: "Pričekaj malo prije sljedeće AI poruke." },
        { status: 429, headers: { "Retry-After": String(retryAfterSec) } }
      );
    }

    // Strict validation: accept exactly one user message, max 2000 chars
    if (
      !Array.isArray(messages) ||
      messages.length !== 1 ||
      messages[0]?.role !== "user" ||
      typeof messages[0]?.content !== "string" ||
      messages[0].content.length > 2000
    ) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const stream = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta?.text) {
            const data = `data: ${JSON.stringify({ type: "content_block_delta", delta: { text: event.delta.text } })}\n\n`;
            controller.enqueue(encoder.encode(data));
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });

  } catch (err) {
    console.error("[ai] Error:", err);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
