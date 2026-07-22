/**
 * GET /api/exams/[razina]
 *
 * Serves exam JSON stripped of all answer fields (sol).
 * This is the secure replacement for directly fetching
 * /engleski-simulator/exams-{razina}.json from public/.
 *
 * Migration path:
 *   1. Move exams-osnovna.json + exams-visa.json from public/ to lib/data/
 *   2. Update _loadExamsRazina() in EngleskiSimulator.js to fetch
 *      /api/exams/osnovna and /api/exams/visa instead.
 *   3. Use /api/exams/check for server-side answer validation.
 *
 * Currently reads from public/ so both paths work during migration.
 */

import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const ALLOWED_RAZINE = new Set(["osnovna", "visa"]);

/** Recursively remove all `sol` keys from exam questions */
function stripAnswers(exams) {
  const out = {};
  for (const [key, exam] of Object.entries(exams)) {
    out[key] = {
      ...exam,
      qs: (exam.qs || []).map((q) => {
        // Strip both the answer key (`sol`) and the answer-revealing explanation (`exp`).
        const { sol, exp, ...rest } = q; // eslint-disable-line no-unused-vars
        return rest;
      }),
    };
  }
  return out;
}

export async function GET(request, { params }) {
  const { razina } = await params;

  if (!ALLOWED_RAZINE.has(razina)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    // Read from lib/data/ if available (secure), fall back to public/
    let filePath = path.join(
      process.cwd(),
      "lib",
      "data",
      "engleski-simulator",
      `exams-${razina}.json`
    );
    let data;
    try {
      data = await readFile(filePath, "utf8");
    } catch {
      // Fallback to public/ during migration
      filePath = path.join(
        process.cwd(),
        "public",
        "engleski-simulator",
        `exams-${razina}.json`
      );
      data = await readFile(filePath, "utf8");
    }

    const exams = JSON.parse(data);
    const stripped = stripAnswers(exams);

    return NextResponse.json(stripped, {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error(`[exams/${razina}] Failed to load:`, err);
    return NextResponse.json({ error: "Failed to load exams" }, { status: 500 });
  }
}
