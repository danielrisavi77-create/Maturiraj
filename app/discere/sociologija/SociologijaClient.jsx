"use client";
// app/discere/sociologija/SociologijaClient.jsx
// Full-screen host for the self-contained sociology simulator (public/sim/sociologija.html),
// brought to MAT/HRV parity via a postMessage bridge (same protocol family as the math engine):
//
//   iframe → parent : DISCERE_READY (handshake), DISCERE_SAVE {key,value} (synced DS keys),
//                     DISCERE_RESULT {result} (completed real exam), DISCERE_UPGRADE (locked exam)
//   parent → iframe : DISCERE_HYDRATE {state} (restore from cloud, newest-wins), DISCERE_CONFIG
//                     {tier,isPro,allowed} (tier-gate), DISCERE_BOOT (render after hydrate)
//
// Persistence (no new migration — same tables as math, new subject):
//   • discere_sim_state  (subject='soc')  ← debounced blob of the engine's localStorage
//   • sim_progress       (subject='soc')  ← one row per finished real exam
// Tier gate: free → demo exams only; standard/pro → all (allowed=null ⇒ unlocked).
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";
import { loadSimState, saveSimState } from "@/lib/discere-sim-state";
import { saveSimResult } from "@/lib/sim-progress";

// Free demo: newest year, both rokovi. Everything else is PRO/standard.
const SOC_FREE_DEMO = ["2025_ljeto", "2025_jesen"];
const REAL_EXAM = /^\d{4}_(ljeto|jesen)$/;

export default function SociologijaClient() {
  const router = useRouter();
  const { user, isPro, isPaid } = useAuth();
  const iframeRef = useRef(null);
  const bufferRef = useRef(null); // accumulated DS blob for cloud upsert
  const saveTimer = useRef(null);

  useEffect(() => {
    const tier = isPro ? "pro" : isPaid ? "standard" : "free";
    const allowed = tier === "free" ? SOC_FREE_DEMO : null; // null ⇒ all unlocked

    function post(msg) {
      const win = iframeRef.current && iframeRef.current.contentWindow;
      if (win) win.postMessage(msg, window.location.origin);
    }

    async function handshake() {
      let state = {};
      try { state = (await loadSimState("soc")) || {}; } catch { state = {}; }
      bufferRef.current = { ...state };
      post({ type: "DISCERE_HYDRATE", state });
      post({ type: "DISCERE_CONFIG", tier, isPro: tier === "pro", allowed });
      post({ type: "DISCERE_BOOT" });
    }

    function onMsg(ev) {
      const frame = iframeRef.current && iframeRef.current.contentWindow;
      if (!frame || ev.source !== frame) return;
      const d = ev.data || {};
      if (!d || !d.type) return;

      if (d.type === "DISCERE_READY") { handshake(); return; }

      if (d.type === "DISCERE_UPGRADE") {
        try { router.push("/pro?from=discere"); } catch {}
        return;
      }

      if (d.type === "DISCERE_SAVE") {
        if (!bufferRef.current) bufferRef.current = {};
        if (d.value == null) delete bufferRef.current[d.key];
        else bufferRef.current[d.key] = d.value;
        bufferRef.current._savedAt = String(Date.now());
        clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(() => {
          saveSimState({ ...bufferRef.current }, "soc");
        }, 1200);
        return;
      }

      if (d.type === "DISCERE_RESULT" && d.result && REAL_EXAM.test(d.result.examKey)) {
        try { saveSimResult(d.result, undefined, "soc"); } catch {}
        return;
      }
    }

    window.addEventListener("message", onMsg);
    return () => {
      window.removeEventListener("message", onMsg);
      clearTimeout(saveTimer.current);
    };
  }, [isPro, isPaid, user, router]);

  return (
    <iframe
      ref={iframeRef}
      src="/sim/sociologija.html"
      title="Sociologija — Simulator mature"
      style={{ width: "100%", height: "calc(100vh - 58px)", border: 0, display: "block" }}
    />
  );
}
