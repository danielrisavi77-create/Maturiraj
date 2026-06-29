'use client';
import React, { useState, useMemo } from 'react';
import { TOPIC_LABELS } from '../../hrvatskiSimulatorData';
import { e } from '../../utils/helpers';
import { calcTopicMastery, getDueReviews, MASTERY_LEVELS } from '../../utils/pedagogy';

// ── Boje ──────────────────────────────────────────────────────────
const GC = { 1: "var(--red)", 2: "var(--gold)", 3: "var(--gold)", 4: "var(--teal)", 5: "var(--green)" };
function gColor(g) { return GC[g] || "var(--blue)"; }
function pColor(p) { return p >= 70 ? "var(--green)" : p >= 50 ? "var(--gold)" : "var(--red)"; }

function fmtMins(m) {
  if (!m) return "0 min";
  if (m < 60) return m + " min";
  return Math.floor(m / 60) + "h" + (m % 60 > 0 ? " " + (m % 60) + "min" : "");
}
function estimateTime(h) {
  if (h.qTimes) {
    const totalSec = Object.values(h.qTimes).reduce((s, t) => s + (t || 0), 0);
    if (totalSec > 60) return Math.round(totalSec / 60);
  }
  return h.mode === "simulacija" ? 90 : 35;
}

// ── Trend graf ────────────────────────────────────────────────────
function TrendGraph({ history }) {
  if (!history || history.length < 2)
    return e("div", { style: { color: "var(--muted)", fontSize: 13, textAlign: "center", padding: "24px 0" } },
      "📈 Riješi barem 2 ispita za prikaz trenda.");

  const W = 560, H = 180, PAD = { t: 20, r: 20, b: 36, l: 36 };
  const iW = W - PAD.l - PAD.r, iH = H - PAD.t - PAD.b;
  const data = history.slice(-10);
  const n = data.length;
  const xStep = n > 1 ? iW / (n - 1) : 0;
  const xPos = i => PAD.l + (n > 1 ? i * xStep : iW / 2);
  const yPos = pct => PAD.t + iH - (pct / 100) * iH;
  const linePath = data.map((h, i) => xPos(i) + "," + yPos(h.pct)).join(" ");
  const avgPct = Math.round(data.reduce((a, h) => a + h.pct, 0) / n);

  return e("div", { style: { width: "100%", overflowX: "auto" } },
    e("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet", style: { width: "100%", minWidth: 360 } },
      [40, 55, 70, 85].map(pct => e("g", { key: pct },
        e("line", { x1: PAD.l, y1: yPos(pct), x2: W - PAD.r, y2: yPos(pct), stroke: "var(--bdr)", strokeWidth: 1, strokeDasharray: "4 4" }),
        e("text", { x: PAD.l - 4, y: yPos(pct) + 4, textAnchor: "end", fontSize: 9, fill: "var(--muted)" }, pct + "%")
      )),
      n > 1 && e("polyline", { points: linePath, fill: "none", stroke: "var(--blue)", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }),
      n >= 3 && e("line", { x1: PAD.l, y1: yPos(avgPct), x2: W - PAD.r, y2: yPos(avgPct), stroke: "rgba(255,255,255,.2)", strokeWidth: 1, strokeDasharray: "6 3" }),
      data.map((h, i) => e("circle", { key: i, cx: xPos(i), cy: yPos(h.pct), r: 5, fill: gColor(h.grade), stroke: "var(--bg)", strokeWidth: 2 })),
      data.map((h, i) => e("text", { key: "t" + i, x: xPos(i), y: H - 6, textAnchor: "middle", fontSize: 9, fill: "var(--muted)" }, (h.examLabel || "").slice(0, 8)))
    ),
    n >= 3 && e("div", { style: { fontSize: 11, color: "var(--muted)", textAlign: "center", marginTop: 4 } }, "Prosjek: " + avgPct + "%")
  );
}

// ── Dnevni sažetak ────────────────────────────────────────────────
function DailySummary({ userData }) {
  const history = userData?.history || [];
  const today = new Date().toLocaleDateString("hr");
  const todayExams = history.filter(h => h.date === today);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Dobro jutro" : hour < 18 ? "Dobar dan" : "Dobra večer";
  const todayMinutes = todayExams.reduce((s, h) => s + estimateTime(h), 0);

  const last7 = Array.from({ length: 7 }, (_, i) => {
    const ms = Date.now() - (6 - i) * 86400000;
    const d = new Date(ms).toLocaleDateString("hr");
    const dayExams = history.filter(h => h.date === d);
    const mins = dayExams.reduce((s, h) => s + estimateTime(h), 0);
    const label = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"][new Date(ms).getDay()];
    return { d, hasExam: dayExams.length > 0, isToday: d === today, mins, label };
  });
  const weekMinutes = last7.reduce((s, d) => s + d.mins, 0);
  const maxMins = Math.max(...last7.map(d => d.mins), 1);

  return e("div", { style: { background: "var(--s1)", border: "1px solid var(--bdr)", borderRadius: "var(--rr)", padding: "20px" } },
    e("div", { style: { fontFamily: "var(--fh)", fontSize: 18, marginBottom: 4 } }, greeting + " 👋"),
    e("div", { style: { fontSize: 13, color: "var(--muted)", marginBottom: 16 } },
      todayExams.length === 0
        ? "Nisi još danas vježbao/la. Hoćeš li riješiti ispit?"
        : "Danas si riješio/la " + todayExams.length + " ispit" + (todayExams.length > 1 ? "a" : "") +
          (todayMinutes > 0 ? " · " + fmtMins(todayMinutes) + " učenja" : "") + "."),
    e("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 18 } },
      [
        { val: userData?.xp || 0, lbl: "Ukupni XP", col: "var(--gold)" },
        { val: history.length, lbl: "Ispita", col: "var(--green)" },
        { val: userData?.streak || 0, lbl: "Dan streak 🔥", col: "#f97316" },
        { val: fmtMins(weekMinutes), lbl: "Ovaj tjedan ⏱", col: "var(--teal)" },
      ].map(({ val, lbl, col }) => e("div", { key: lbl, style: { background: "var(--s2)", borderRadius: "var(--r)", padding: "10px", textAlign: "center" } },
        e("div", { style: { fontSize: 18, fontWeight: 800, color: col, fontFamily: "var(--fh)" } }, val),
        e("div", { style: { fontSize: 10, color: "var(--muted)", marginTop: 2 } }, lbl)
      ))
    ),
    e("div", { style: { fontSize: 11, color: "var(--muted)", marginBottom: 8 } }, "Aktivnost — zadnjih 7 dana"),
    e("div", { style: { display: "flex", alignItems: "flex-end", gap: 4, height: 48 } },
      last7.map((d, i) => e("div", { key: i, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 } },
        e("div", {
          title: d.label + ": " + fmtMins(d.mins),
          style: {
            width: "100%",
            height: d.mins > 0 ? Math.max(4, Math.round(d.mins / maxMins * 36)) + "px" : "4px",
            background: d.isToday ? "var(--gold)" : d.hasExam ? "var(--teal)" : "var(--s3)",
            borderRadius: 4, transition: "height .4s ease",
          }
        }),
        e("div", { style: { fontSize: 9, color: d.isToday ? "var(--gold)" : "var(--muted)", fontWeight: d.isToday ? 700 : 400 } }, d.label)
      ))
    )
  );
}

// ── Glavni panel ──────────────────────────────────────────────────
export function AnalyticsPanel({ userData, defaultTab = "danas", isPro, onPaywall }) {
  const [tab, setTab] = useState(defaultTab);
  const history = userData?.history || [];

  const topicStats = useMemo(() => {
    const s = {};
    history.forEach(h => {
      if (!h.topic_breakdown) return;
      Object.entries(h.topic_breakdown).forEach(([topic, d]) => {
        if (!s[topic]) s[topic] = { correct: 0, total: 0 };
        s[topic].correct += d.correct || 0;
        s[topic].total += d.total || 0;
      });
    });
    return s;
  }, [history]);

  const mastery = useMemo(() => calcTopicMastery(history), [history]);
  const dueReviews = useMemo(() => getDueReviews(userData?.errorTracker), [userData?.errorTracker]);

  const simHistory = history.filter(h => h.mode === "simulacija");
  const vjezbaHistory = history.filter(h => h.mode !== "simulacija");
  const simAvg = simHistory.length ? Math.round(simHistory.reduce((a, h) => a + h.pct, 0) / simHistory.length) : null;
  const vjezbaAvg = vjezbaHistory.length ? Math.round(vjezbaHistory.reduce((a, h) => a + h.pct, 0) / vjezbaHistory.length) : null;

  const recommendations = useMemo(() => {
    const recs = [];
    const weak = Object.entries(topicStats)
      .map(([k, v]) => ({ k, pct: v.total ? Math.round(v.correct / v.total * 100) : null }))
      .filter(t => t.pct !== null && t.pct < 60)
      .sort((a, b) => a.pct - b.pct);
    weak.slice(0, 2).forEach(t => recs.push({
      icon: "🎯", badge: "urgent", title: "Uvježbaj: " + (TOPIC_LABELS[t.k] || t.k),
      desc: "Trenutni rezultat " + t.pct + "% — ispod prolazne granice."
    }));
    if (dueReviews.length > 0) recs.push({
      icon: "🔁", badge: "urgent", title: dueReviews.length + " pitanja za ponavljanje",
      desc: "Imaš pitanja koja čekaju ponavljanje (spaced repetition)."
    });
    const strong = Object.entries(topicStats)
      .map(([k, v]) => ({ k, pct: v.total ? Math.round(v.correct / v.total * 100) : null }))
      .filter(t => t.pct !== null && t.pct >= 80)
      .sort((a, b) => b.pct - a.pct)[0];
    if (strong) recs.push({ icon: "💪", badge: "good", title: "Snaga: " + (TOPIC_LABELS[strong.k] || strong.k), desc: strong.pct + "% — izvrsno!" });
    if (history.length < 3) recs.push({ icon: "📄", badge: "tip", title: "Riješi više ispita", desc: "Cilj: barem 5 ispita za personalizirane preporuke." });
    const best = history.length ? Math.max(...history.map(h => h.pct)) : 0;
    if (best >= 85) recs.push({ icon: "🏆", badge: "good", title: "Odličan rezultat!", desc: "Postigao/la si " + best + "% — to odgovara ocjeni 5." });
    return recs.length ? recs : [{ icon: "📊", badge: "tip", title: "Nastavi vježbati", desc: "Riješi još ispita za personalizirane preporuke." }];
  }, [topicStats, dueReviews, history]);

  const tabs = [
    { id: "danas", label: "📅 Danas" },
    { id: "napredak", label: "📈 Napredak" },
    { id: "teme", label: "🗺 Teme" },
    { id: "greske", label: "🔁 Ponavljanje" },
    { id: "savjeti", label: "💡 Savjeti" },
  ];

  const noData = e("div", { style: { color: "var(--muted)", fontSize: 13, textAlign: "center", padding: "32px 0" } },
    "📊 Nema dovoljno podataka. Riješi barem jedan ispit.");

  return e("div", { style: { background: "var(--s1)", border: "1px solid var(--bdr)", borderRadius: "var(--rr)", overflow: "hidden" } },
    e("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "16px 18px", borderBottom: "1px solid var(--bdr)" } },
      e("span", { style: { fontSize: 18 } }, "📊"),
      e("span", { style: { fontFamily: "var(--fh)", fontSize: 16, fontWeight: 700 } }, "Moja statistika"),
      history.length > 0 && e("span", { style: { marginLeft: "auto", fontSize: 12, color: "var(--muted)" } }, history.length + " ispita riješeno")
    ),
    e("div", { style: { padding: "16px 18px" } },
      e("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 } },
        tabs.map(t => e("button", {
          key: t.id,
          onClick: () => setTab(t.id),
          style: {
            padding: "6px 13px", borderRadius: 99, fontSize: 12.5, fontWeight: 600, cursor: "pointer",
            fontFamily: "var(--fb)", transition: "all .15s",
            border: "1px solid " + (tab === t.id ? "var(--blue)" : "var(--bdr)"),
            background: tab === t.id ? "var(--blue-d)" : "transparent",
            color: tab === t.id ? "var(--blue)" : "var(--muted)",
          }
        }, t.label))
      ),

      // ── Danas ──
      tab === "danas" && e(DailySummary, { userData }),

      // ── Napredak ──
      tab === "napredak" && (history.length === 0 ? noData : e("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
        e("div", { style: { background: "var(--s2)", borderRadius: "var(--r)", padding: "16px" } },
          e("div", { style: { fontWeight: 700, fontSize: 14, marginBottom: 12 } }, "Trend rezultata"),
          e(TrendGraph, { history })
        ),
        (simHistory.length > 0 || vjezbaHistory.length > 0) && e("div", { style: { background: "var(--s2)", borderRadius: "var(--r)", padding: "16px" } },
          e("div", { style: { fontWeight: 700, fontSize: 14, marginBottom: 12 } }, "Simulacija vs Vježbanje"),
          e("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 } },
            [
              { label: "🎓 Simulacija", hist: simHistory, avg: simAvg, color: "var(--blue)" },
              { label: "🎯 Vježbanje", hist: vjezbaHistory, avg: vjezbaAvg, color: "var(--teal)" },
            ].map(({ label, hist, avg, color }) => e("div", { key: label, style: { background: "var(--s1)", border: "1px solid var(--bdr)", borderRadius: "var(--r)", padding: "12px" } },
              e("div", { style: { fontSize: 12, fontWeight: 600, marginBottom: 8 } }, label),
              hist.length === 0
                ? e("div", { style: { fontSize: 12, color: "var(--muted)" } }, "Još nema podataka")
                : e("div", null,
                    e("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 } },
                      e("span", { style: { color: "var(--muted)" } }, "Prosjek"),
                      e("strong", { style: { color: pColor(avg) } }, avg + "%")),
                    e("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 8 } },
                      e("span", { style: { color: "var(--muted)" } }, "Ispita"),
                      e("strong", null, hist.length)),
                    e("div", { style: { height: 6, background: "var(--s3)", borderRadius: 99, overflow: "hidden" } },
                      e("div", { style: { width: Math.min(100, avg) + "%", height: "100%", background: color, borderRadius: 99, transition: "width .8s ease" } }))
                  )
            ))
          )
        ),
        e("div", { style: { background: "var(--s2)", borderRadius: "var(--r)", padding: "16px" } },
          e("div", { style: { fontWeight: 700, fontSize: 14, marginBottom: 12 } }, "Zadnjih " + Math.min(8, history.length) + " ispita"),
          e("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
            [...history].reverse().slice(0, 8).map((h, i) => {
              const gc = gColor(h.grade);
              return e("div", { key: i, style: { display: "flex", alignItems: "center", gap: 12 } },
                e("div", { style: { minWidth: 30, height: 30, borderRadius: "var(--r)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: gc, border: "1px solid " + gc, flexShrink: 0 } }, h.grade),
                e("div", { style: { flex: 1, minWidth: 0 } },
                  e("div", { style: { fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, h.examLabel || h.examKey),
                  e("div", { style: { fontSize: 11, color: "var(--muted)" } }, h.date + " · " + (h.mode || "vježbanje"))),
                e("div", { style: { fontFamily: "var(--fh)", fontWeight: 800, fontSize: 15, color: gc, flexShrink: 0 } }, h.pct + "%")
              );
            })
          )
        )
      )),

      // ── Teme ──
      tab === "teme" && (Object.keys(topicStats).length === 0 ? noData : e("div", null,
        e("div", { style: { fontSize: 12, color: "var(--muted)", marginBottom: 14 } }, "🟢 ≥70%   🟡 50–70%   🔴 <50%   ⬜ Nema podataka"),
        e("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 10 } },
          Object.keys(TOPIC_LABELS).map(key => {
            const t = topicStats[key];
            const pct = t && t.total ? Math.round(t.correct / t.total * 100) : null;
            const m = mastery[key];
            const col = pct === null ? "var(--bdr)" : pColor(pct);
            return e("div", { key, style: { background: "var(--s2)", border: "1px solid var(--bdr)", borderLeft: "3px solid " + col, borderRadius: "var(--r)", padding: "12px 14px" } },
              e("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4 } },
                m && e("span", { style: { fontSize: 14, color: col } }, m.icon),
                e("div", { style: { fontSize: 12.5, fontWeight: 600 } }, TOPIC_LABELS[key])),
              e("div", { style: { fontFamily: "var(--fh)", fontSize: 20, fontWeight: 800, color: pct === null ? "var(--muted)" : col } }, pct === null ? "—" : pct + "%"),
              e("div", { style: { fontSize: 10, color: "var(--muted)" } }, t ? t.correct + "/" + t.total + " točnih" + (m ? " · " + m.label : "") : "Nije rješavano")
            );
          })
        )
      )),

      // ── Ponavljanje (greške / spaced repetition) ──
      tab === "greske" && (dueReviews.length === 0
        ? e("div", { style: { textAlign: "center", padding: "32px 0" } },
            e("div", { style: { fontSize: 44, marginBottom: 12 } }, "🎉"),
            e("div", { style: { fontFamily: "var(--fh)", fontSize: 18, marginBottom: 6 } }, "Nema pitanja za ponavljanje!"),
            e("div", { style: { fontSize: 13, color: "var(--muted)" } },
              history.length === 0 ? "Riješi barem jedan ispit da bi pratio greške." : "Sve si savladao/la — odličan rad!"))
        : e("div", null,
            e("div", { style: { fontSize: 13, color: "var(--muted)", marginBottom: 14 } },
              e("strong", { style: { color: "var(--gold)", fontSize: 22, fontFamily: "var(--fh)" } }, dueReviews.length),
              " pitanja čeka ponavljanje danas"),
            e("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
              dueReviews.slice(0, 15).map((r, i) => e("div", { key: r.key || i, style: { background: "var(--s2)", border: "1px solid var(--bdr)", borderRadius: "var(--r)", padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start" } },
                e("div", { style: { minWidth: 38, height: 38, borderRadius: "var(--r)", background: "var(--red-d)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(196,48,48,.2)" } },
                  e("div", { style: { fontSize: 14, fontWeight: 800, color: "var(--red)", lineHeight: 1 } }, (r.count || 1) + "×"),
                  e("div", { style: { fontSize: 9, color: "var(--muted)" } }, "grešaka")),
                e("div", { style: { flex: 1, minWidth: 0 } },
                  r.topic && e("span", { style: { fontSize: 10, color: "var(--muted)" } }, TOPIC_LABELS[r.topic] || r.topic),
                  e("div", { style: { fontSize: 13, lineHeight: 1.5 } }, r.q ? (r.q.length > 110 ? r.q.slice(0, 108) + "…" : r.q) : "Pitanje za ponavljanje"))
              )),
              dueReviews.length > 15 && e("div", { style: { textAlign: "center", fontSize: 12, color: "var(--muted)", paddingTop: 10 } }, "Prikazano 15 od " + dueReviews.length)
            )
          )
      ),

      // ── Savjeti ──
      tab === "savjeti" && e("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
        e("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 } },
          e("div", { style: { fontWeight: 700, fontSize: 14 } }, "Personalizirane preporuke"),
          e("span", { style: { fontSize: 11, color: "var(--muted)" } }, recommendations.length + " savjeta")),
        recommendations.map((r, i) => {
          const badgeColor = r.badge === "urgent" ? "var(--red)" : r.badge === "good" ? "var(--green)" : "var(--blue)";
          const badgeLabel = r.badge === "urgent" ? "Prioritet" : r.badge === "good" ? "Odlično" : "Savjet";
          return e("div", { key: i, style: { display: "flex", gap: 12, background: "var(--s2)", border: "1px solid var(--bdr)", borderRadius: "var(--r)", padding: "14px 16px" } },
            e("div", { style: { width: 38, height: 38, borderRadius: "var(--r)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18, background: badgeColor + "18", border: "1px solid " + badgeColor + "30" } }, r.icon),
            e("div", { style: { flex: 1, minWidth: 0 } },
              e("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 2 } },
                e("div", { style: { fontWeight: 700, fontSize: 13.5 } }, r.title),
                e("span", { style: { fontSize: 10, fontWeight: 600, color: badgeColor, background: badgeColor + "15", border: "1px solid " + badgeColor + "30", borderRadius: 99, padding: "1px 8px" } }, badgeLabel)),
              e("div", { style: { fontSize: 12.5, color: "var(--muted)", lineHeight: 1.5 } }, r.desc))
          );
        })
      )
    )
  );
}

export default AnalyticsPanel;
