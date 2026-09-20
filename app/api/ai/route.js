import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { requirePro, requireStandardOrPro } from "@/lib/billing/requirePro";
import { isAiEndpointsEnabled } from "@/lib/config/featureFlags";
import { checkRateLimit } from "@/lib/rate-limit";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/** Short ENG/matura explain (engleski simulator, single-shot). */
const EXPLAIN_SYSTEM =
  "Ti si profesor engleskog jezika. Učenik uči za državnu maturu. " +
  "Daj kratko obrazloženje na hrvatskom (2-4 rečenice) koje objašnjava ZAŠTO je odgovor točan. " +
  "Budi konkretan i educativan. Odgovaraj ISKLJUČIVO na pitanja vezana za engleski jezik i maturu.";

/** Default HR matura tutor when client omits system (AI Profesor). */
const PROFESOR_SYSTEM =
  "Ti si AI Profesor za državnu maturu u Hrvatskoj. Odgovaraj ISKLJUČIVO na pitanja vezana uz " +
  "gradivo mature i prijemnih ispita. Uvijek odgovaraj na hrvatskom. Budi koncizan i precizan. " +
  "Za matematiku i fiziku koristi Unicode simbole. Strukturiraj odgovor: kratko objasni, daj " +
  "primjer, zaključi. Maksimalno 4–5 rečenica ili koraci za zadatke.";

const AI_RATE_LIMIT_MS = 8_000;
const MAX_EXPLAIN_CHARS = 2000;
const MAX_PROFESOR_MSG_CHARS = 4000;
const MAX_PROFESOR_MESSAGES = 20;
const MAX_PROFESOR_SYSTEM_CHARS = 8000;

/**
 * Resolve mode:
 * - explicit body.mode
 * - else multi-turn or client system → profesor (Pro chat / kalkulator)
 * - else → explain (single-shot ENG tutor)
 */
function resolveMode(body) {
  if (body?.mode === "profesor" || body?.mode === "explain") return body.mode;
  const msgs = body?.messages;
  if (typeof body?.system === "string" && body.system.trim().length > 0) return "profesor";
  if (Array.isArray(msgs) && msgs.length > 1) return "profesor";
  return "explain";
}

function isValidMessage(m, maxChars) {
  return (
    m &&
    (m.role === "user" || m.role === "assistant") &&
    typeof m.content === "string" &&
    m.content.length > 0 &&
    m.content.length <= maxChars
  );
}

export async function POST(req) {
  // Fail-closed: AI_ENDPOINTS_ENABLED must be exactly "true". Do not default on.
  if (!isAiEndpointsEnabled()) {
    return NextResponse.json(
      { error: "AI je privremeno nedostupan.", code: "FEATURE_DISABLED" },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const body = await req.json().catch(() => null);
    const mode = resolveMode(body ?? {});

    // Profesor / multi-turn chat → Pro only. Explain → Standard+.
    const deny =
      mode === "profesor"
        ? await requirePro(req, { source: "ai-profesor" })
        : await requireStandardOrPro(req, { source: "ai-explain" });
    if (deny) return deny;

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { limited, retryAfterSec } = await checkRateLimit(
      user.id,
      "ai",
      AI_RATE_LIMIT_MS
    );
    if (limited) {
      return NextResponse.json(
        { error: "Pričekaj malo prije sljedeće AI poruke." },
        { status: 429, headers: { "Retry-After": String(retryAfterSec) } }
      );
    }

    const messages = body?.messages;

    let system;
    let anthropicMessages;

    if (mode === "explain") {
      if (
        !Array.isArray(messages) ||
        messages.length !== 1 ||
        !isValidMessage(messages[0], MAX_EXPLAIN_CHARS) ||
        messages[0].role !== "user"
      ) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
      }
      system = EXPLAIN_SYSTEM;
      anthropicMessages = messages;
    } else {
      // profesor
      if (
        !Array.isArray(messages) ||
        messages.length < 1 ||
        messages.length > MAX_PROFESOR_MESSAGES ||
        !messages.every((m) => isValidMessage(m, MAX_PROFESOR_MSG_CHARS))
      ) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
      }
      if (messages[messages.length - 1]?.role !== "user") {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
      }
      const clientSystem =
        typeof body?.system === "string" ? body.system.trim() : "";
      system =
        clientSystem.length > 0 && clientSystem.length <= MAX_PROFESOR_SYSTEM_CHARS
          ? clientSystem
          : PROFESOR_SYSTEM;
      anthropicMessages = messages;
    }

    const stream = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: mode === "profesor" ? 1200 : 600,
      system,
      messages: anthropicMessages,
      stream: true,
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta?.text) {
            const data = `data: ${JSON.stringify({
              type: "content_block_delta",
              delta: { text: event.delta.text },
            })}\n\n`;
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
