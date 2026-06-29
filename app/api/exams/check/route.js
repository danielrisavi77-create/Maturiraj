/**
 * POST /api/exams/check
 *
 * Server-side answer validation for submitted exams.
 * Accepts user answers, reads the authoritative exam file
 * (never exposed to the client), and returns score data.
 *
 * Body: { examKey: string, answers: { [questionId]: string | string[] } }
 * Returns: { scores: { [questionId]: boolean | null }, pct, grade, cor, total }
 *
 * null score = manually-graded question (type "sa" / "es")
 */

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { readFile } from "fs/promises";
import path from "path";
import { grade, nrm as nrmScoring } from "@/lib/engleski-simulator/scoring";

function checkQ(q, answer) {
  if (!q || answer == null) return false;
  if (q.type === "mc" || q.type === "ins") {
    return answer === q.sol?.cl;
  }
  if (q.type === "ms") {
    if (!Array.isArray(answer) || !Array.isArray(q.sol?.cls)) return false;
    const a = [...answer].sort().join(",");
    const s = [...q.sol.cls].sort().join(",");
    return a === s;
  }
  if (q.type === "mat") {
    if (typeof answer !== "object" || !Array.isArray(q.sol?.pairs)) return false;
    return q.sol.pairs.every((p) => answer[p.l] === p.r);
  }
  if (q.type === "fb") {
    const accepted =
      q.sol?.alt ?? (Array.isArray(q.sol?.ans) ? q.sol.ans : [q.sol?.ans]);
    return accepted.some((x) => nrmScoring(x) === nrmScoring(answer));
  }
  // sa / es — manual grading, return null
  return null;
}

async function loadExam(examKey) {
  // Determine razina from key prefix or try both files
  const candidates = ["osnovna", "visa"];
  for (const razina of candidates) {
    // Prefer lib/data/ (secure), fall back to public/
    let filePath = path.join(
      process.cwd(),
      "lib",
      "data",
      "engleski-simulator",
      `exams-${razina}.json`
    );
    try {
      const data = await readFile(filePath, "utf8");
      const exams = JSON.parse(data);
      if (exams[examKey]) return exams[examKey];
    } catch {
      // Try public fallback
      try {
        filePath = path.join(
          process.cwd(),
          "public",
          "engleski-simulator",
          `exams-${razina}.json`
        );
        const data = await readFile(filePath, "utf8");
        const exams = JSON.parse(data);
        if (exams[examKey]) return exams[examKey];
      } catch {}
    }
  }
  return null;
}

export async function POST(req) {
  try {
    // Require authentication — prevent anonymous bulk grading
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { examKey, answers } = body ?? {};

    if (
      typeof examKey !== "string" ||
      examKey.length > 200 ||
      typeof answers !== "object" ||
      answers === null
    ) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const exam = await loadExam(examKey);
    if (!exam) {
      return NextResponse.json({ error: "Exam not found" }, { status: 404 });
    }

    const scores = {};
    let cor = 0;
    let total = 0;

    for (const q of exam.qs ?? []) {
      if (q.type === "sa" || q.type === "es") {
        scores[q.id] = null; // manual grading
        continue;
      }
      const result = checkQ(q, answers[q.id]);
      scores[q.id] = result;
      total++;
      if (result === true) cor++;
    }

    const pct = total ? Math.round((cor / total) * 100) : 0;

    return NextResponse.json({
      scores,
      pct,
      grade: grade(pct),
      cor,
      total,
    });
  } catch (err) {
    console.error("[exams/check] Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
