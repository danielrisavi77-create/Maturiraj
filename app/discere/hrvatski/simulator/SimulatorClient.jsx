"use client";
import dynamic from "next/dynamic";

const HrvatskiSimulator = dynamic(() => import("./HrvatskiSimulator"), {
  loading: () => (
    <div className="hrv-sim" style={{ padding: "32px 20px", maxWidth: 900, margin: "0 auto" }}>
      {/* Nav skeleton */}
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 28 }}>
        <div style={{ width: 120, height: 32, borderRadius: 8, background: "var(--s3)", animation: "sk-pulse 1.4s ease-in-out infinite" }} />
        <div style={{ flex: 1, height: 20, borderRadius: 8, background: "var(--s3)", animation: "sk-pulse 1.4s ease-in-out infinite" }} />
        <div style={{ width: 80, height: 32, borderRadius: 8, background: "var(--s3)", animation: "sk-pulse 1.4s ease-in-out infinite" }} />
      </div>
      {/* Mode cards skeleton */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 24 }}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{ height: 96, borderRadius: 12, background: "var(--s2)", animation: "sk-pulse 1.4s ease-in-out infinite", animationDelay: (i*0.08)+"s" }} />
        ))}
      </div>
      {/* Exam list skeleton */}
      {[1,2,3].map(i => (
        <div key={i} style={{ height: 52, borderRadius: 10, background: "var(--s2)", marginBottom: 8, animation: "sk-pulse 1.4s ease-in-out infinite", animationDelay: (i*0.12)+"s" }} />
      ))}
      <style>{`
        @keyframes sk-pulse {
          0%,100%{ opacity:.5 }
          50%{ opacity:1 }
        }
      `}</style>
    </div>
  ),
  ssr: false,
});

export default HrvatskiSimulator;
