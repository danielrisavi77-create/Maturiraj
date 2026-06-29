"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/lib/hooks/useAuth";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IcoDashboard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const IcoBell = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IcoTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IcoBot = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M12 2a3 3 0 0 0-3 3v6h6V5a3 3 0 0 0-3-3z"/>
    <line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
  </svg>
);
const IcoShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IcoTrend = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);
const IcoCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IcoX = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IcoArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    Icon: IcoDashboard,
    color: "#c084fc",
    bg: "rgba(192,132,252,0.10)",
    border: "rgba(192,132,252,0.22)",
    title: "Roditeljski dashboard",
    desc: "Pratite napredak djeteta u realnom vremenu — prepokrivenost gradiva, slabi predmeti, tjedni ritam.",
    cta: "dashboard",
  },
  {
    Icon: IcoBell,
    color: "#e9b446",
    bg: "rgba(233,180,70,0.10)",
    border: "rgba(233,180,70,0.22)",
    title: "Tjedna obavijest",
    desc: "Tjedno izvješće na email — napredak, rizici, preporuka roditelja. Bez zadiranja, samo bitno.",
    cta: null,
  },
  {
    Icon: IcoTarget,
    color: "#2dcfbe",
    bg: "rgba(45,207,190,0.10)",
    border: "rgba(45,207,190,0.22)",
    title: "Kalkulator bodova",
    desc: "Vidite koji su fakulteti realno dostižni s trenutnim znanjem — i što točno treba poboljšati.",
    cta: "/kalkulator",
  },
  {
    Icon: IcoBot,
    color: "#4b7bff",
    bg: "rgba(75,123,255,0.10)",
    border: "rgba(75,123,255,0.22)",
    title: "AI profesor 24/7",
    desc: "Dijete ne čeka privatnog učitelja. Točan, personaliziran odgovor u sekundi, na hrvatskom.",
    cta: null,
  },
  {
    Icon: IcoTrend,
    color: "#34d399",
    bg: "rgba(52,211,153,0.10)",
    border: "rgba(52,211,153,0.22)",
    title: "Trend napretka",
    desc: "Graf koji prikazuje napredak iz tjedna u tjedan — odmah vidite ide li dijete u pravom smjeru.",
    cta: "dashboard",
  },
  {
    Icon: IcoShield,
    color: "#fb923c",
    bg: "rgba(251,146,60,0.10)",
    border: "rgba(251,146,60,0.22)",
    title: "Rana upozorenja",
    desc: "Automatski alarm kad predmet padne ispod 50%. Više nikad: 'Nisam znao da mu je Matematika slaba.'",
    cta: "dashboard",
  },
];

const COMPARE = [
  {
    label: "Privatni učitelj",
    price: "40–80 €",
    per: "po satu",
    color: "var(--red)",
    items: ["1 predmet", "1–2 sata tjedno", "Putovanje / čekanje", "Raspored fiksan", "Bez roditeljskog uvida"],
    ok: [false, false, false, false, false],
    hi: false,
  },
  {
    label: "Maturiraj.hr Pro",
    price: "19,99 €",
    per: "mjesečno",
    color: "var(--blue)",
    items: ["Svih 24 predmeta", "Neograničeno, 24/7", "Online, odmah", "Uči kad mu odgovara", "Roditeljski dashboard"],
    ok: [true, true, true, true, true],
    hi: true,
    badge: "Najpametnije",
  },
  {
    label: "Pripremni tečaj",
    price: "200–500 €",
    per: "po tečaju",
    color: "var(--muted)",
    items: ["2–3 predmeta", "Fiksni termini", "Putovanje obavezno", "Grupni rad", "Bez personalizacije"],
    ok: [false, false, false, false, false],
    hi: false,
  },
];

export default function RoditeljiPage() {
  const router = useRouter();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.10 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const { isPro } = useAuth()
  const goRoditelji = () => router.push(isPro ? "/roditelji/pregled" : "/pro");
  const goPlan = () => router.push("/uspjeh");

  return (
    <>
      <main style={{ background: "var(--bg)", overflowX: "hidden" }}>

        {/* ═══════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          {/* Ambient orbs */}
          <div className="orb" style={{ width: 700, height: 700, top: "-10%", left: "-8%", background: "radial-gradient(circle,rgba(192,132,252,.12),transparent 65%)", animation: "orb-a 22s ease-in-out infinite" }} />
          <div className="orb" style={{ width: 560, height: 560, bottom: "-10%", right: "-4%", background: "radial-gradient(circle,rgba(233,180,70,.08),transparent 65%)", animation: "orb-b 28s ease-in-out infinite" }} />
          <div className="orb" style={{ width: 380, height: 380, top: "40%", right: "22%", background: "radial-gradient(circle,rgba(45,207,190,.06),transparent 65%)", animation: "orb-a 18s ease-in-out infinite 4s" }} />
          {/* Dot grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(192,132,252,.04) 1px,transparent 1px)", backgroundSize: "48px 48px", zIndex: 0 }} />

          <div className="wrap" style={{ paddingTop: 110, paddingBottom: 90, position: "relative", zIndex: 1, width: "100%" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

              {/* LEFT */}
              <div>
                {/* Eyebrow badge */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 26, flexWrap: "wrap" }}>
                  <div className="badge" style={{ background: "rgba(192,132,252,.1)", border: "1px solid rgba(192,132,252,.25)", color: "#c084fc", animation: "badge-pop .6s ease both" }}>
                    <span style={{ animation: "pulse 2s ease-in-out infinite" }}>●</span>
                    Za roditelje · Pro
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 11px", borderRadius: 99, background: "rgba(233,180,70,.08)", border: "1px solid rgba(233,180,70,.2)" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "var(--gold)" }}>267+ aktivnih obitelji</span>
                  </div>
                </div>

                {/* Headline */}
                <h1 className="d1 up" style={{ animationDelay: ".06s", marginBottom: 24, lineHeight: 1.0 }}>
                  {[
                    { t: "Uvijek znate.", grad: "linear-gradient(270deg,#c084fc,#e879f9,#a855f7,#c084fc)" },
                    { t: "Uvijek ste tu.", grad: "linear-gradient(270deg,#e9b446,#fcd34d,#f59e0b,#e9b446)" },
                  ].map(({ t, grad }) => (
                    <span key={t} style={{ display: "block", background: grad, backgroundSize: "300% 300%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "hero-text-shift 4s ease-in-out infinite" }}>
                      {t}
                    </span>
                  ))}
                </h1>

                <p className="up" style={{ animationDelay: ".12s", fontSize: 17, lineHeight: 1.85, color: "var(--muted)", marginBottom: 34, maxWidth: 460 }}>
                  Vaše dijete priprema maturu. Maturiraj.hr vam daje uvid bez zadiranja —
                  napredak, rizici, rokovi i tjedna preporuka. <strong style={{ color: "var(--text)" }}>Sve na jednom mjestu.</strong>
                </p>

                <div className="up" style={{ animationDelay: ".18s", display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
                  <button className="btn bo btn-lg" onClick={goRoditelji} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    Isprobaj sada
                    <IcoArrow />
                  </button>
                  <button className="btn bgh btn-lg" onClick={goPlan}>
                    Pogledaj Pro plan
                  </button>
                </div>

                <div className="trust-strip up" style={{ animationDelay: ".24s" }}>
                  {[
                    { ico: "✓", txt: "Bez zadiranja u privatnost" },
                    { ico: "✓", txt: "Real-time ažuriranje" },
                    { ico: "✓", txt: "GDPR · Hrvatska" },
                  ].map(({ ico, txt }) => (
                    <div key={txt} className="trust-item">
                      <span style={{ color: "var(--green)", fontWeight: 700, fontSize: 13 }}>{ico}</span>{txt}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — live dashboard preview card */}
              <div className="up" style={{ animationDelay: ".14s" }}>
                <div style={{
                  background: "var(--s1)", border: "1px solid rgba(192,132,252,.22)", borderRadius: 24,
                  padding: "28px 26px", position: "relative", overflow: "hidden",
                  boxShadow: "0 0 0 1px rgba(192,132,252,.1), 0 32px 80px rgba(192,132,252,.12)",
                }}>
                  {/* Gradient top bar */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#c084fc,#e9b446,transparent)" }} />

                  {/* Child header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#c084fc,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--fh)", fontSize: 18, fontWeight: 900, color: "#fff", flexShrink: 0 }}>A</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 15 }}>Ana Kovač</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>Maturantica · IV. razred</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 900, color: "#c084fc", lineHeight: 1 }}>72</div>
                      <div style={{ fontSize: 11, color: "var(--muted)" }}>/ 100 bodova</div>
                    </div>
                  </div>

                  {/* Mood pill */}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 12px", borderRadius: 999, background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.22)", fontSize: 12, fontWeight: 700, color: "#34d399", marginBottom: 20 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
                    Dobar tjedan · ↗ +5 od prošlog
                  </div>

                  {/* Progress bars */}
                  {[
                    { label: "Hrvatski jezik", val: 82, color: "#34d399", status: "Stabilno" },
                    { label: "Matematika B",   val: 49, color: "#fb7185", status: "Rizično" },
                    { label: "Engleski jezik", val: 74, color: "#60a5fa", status: "Stabilno" },
                    { label: "Biologija",      val: 61, color: "#fbbf24", status: "Pažnja" },
                  ].map(({ label, val, color, status }, i) => (
                    <div key={label} style={{ marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: 13, fontWeight: 600 }}>{label}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 12, color: "var(--muted)" }}>{val}%</span>
                          <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 99, background: `${color}18`, color, border: `1px solid ${color}33` }}>{status}</span>
                        </div>
                      </div>
                      <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 999, overflow: "hidden" }}>
                        <div style={{ width: `${val}%`, height: "100%", borderRadius: 999, background: `linear-gradient(90deg,${color}aa,${color})`, transition: "width 1.2s cubic-bezier(.16,1,.3,1)" }} />
                      </div>
                    </div>
                  ))}

                  {/* Bottom strip */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 18 }}>
                    {[
                      { n: "8", l: "sesija ovaj tjedan", c: "#c084fc" },
                      { n: "3", l: "dana zaredom", c: "var(--gold)" },
                      { n: "56", l: "dana do mature", c: "#fb7185" },
                    ].map(({ n, l, c }) => (
                      <div key={l} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--bdr)", borderRadius: 12, padding: "12px 10px", textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 900, color: c, lineHeight: 1 }}>{n}</div>
                        <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 3, lineHeight: 1.4 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            STATS STRIP
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)", padding: "32px 0", background: "var(--s1)" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
              {[
                { n: "267+", l: "aktivnih obitelji", c: "#c084fc" },
                { n: "Real‑time", l: "ažuriranje dashboarda", c: "var(--gold)" },
                { n: "Tjedno", l: "izvješće na email", c: "#34d399" },
                { n: "24/7", l: "dostupnost za dijete", c: "#4b7bff" },
              ].map(({ n, l, c }, i) => (
                <div key={l} style={{ textAlign: "center", padding: "8px 20px", borderRight: i < 3 ? "1px solid var(--bdr)" : "none" }}>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 28, fontWeight: 900, color: c, lineHeight: 1, marginBottom: 5 }}>{n}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FEATURES GRID
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "100px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "15%", right: "-5%", width: 500, height: 500, background: "radial-gradient(circle,rgba(233,180,70,.05),transparent 65%)", pointerEvents: "none" }} />
          <div className="wrap">
            <div className="reveal reveal-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="eye" style={{ marginBottom: 12 }}>Što dobivate</div>
              <h2 className="d2" style={{ marginBottom: 14 }}>
                Sve što roditelju treba.<br />
                <span className="g-gold">Ništa što ga ne treba.</span>
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
                Dizajnirano s jednim ciljem — dati vam pravu informaciju u pravo vrijeme, bez zatrpavanja i bez zadiranja u privatnost djeteta.
              </p>
            </div>

            <div className="reveal reveal-up" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
              {FEATURES.map(({ Icon, color, bg, border, title, desc, cta }) => (
                <div
                  key={title}
                  className="p-card"
                  onClick={cta ? () => router.push(cta === "dashboard" ? "/pro" : cta) : undefined}
                  style={{ cursor: cta ? "pointer" : "default", border: `1px solid ${border}` }}
                >
                  {/* Icon */}
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: bg, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", color, marginBottom: 18, flexShrink: 0 }}>
                    <Icon />
                  </div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 800, marginBottom: 10, lineHeight: 1.15 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>{desc}</p>
                  {cta && (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 18, fontSize: 12, fontWeight: 700, color, opacity: 0.9 }}>
                      Otvori <IcoArrow />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            TESTIMONIAL + HOW IT WORKS
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 0", background: "var(--s1)", borderTop: "1px solid var(--bdr)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", bottom: 0, left: "-5%", width: 500, height: 500, background: "radial-gradient(circle,rgba(192,132,252,.05),transparent 65%)", pointerEvents: "none" }} />
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

              {/* Testimonial */}
              <div className="reveal reveal-left">
                <div style={{ position: "relative", background: "var(--bg)", border: "1px solid rgba(233,180,70,.2)", borderRadius: 24, padding: "32px 30px", boxShadow: "0 0 0 1px rgba(233,180,70,.06), 0 24px 60px rgba(233,180,70,.06)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#e9b446,transparent)", borderRadius: "24px 24px 0 0" }} />
                  <div style={{ fontFamily: "var(--fh)", fontSize: 56, color: "var(--gold)", lineHeight: 0.7, marginBottom: 20, opacity: 0.5 }}>"</div>
                  <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text)", marginBottom: 24, fontStyle: "italic" }}>
                    Uložila sam u Maturiraj.hr umjesto u još jednog privatnog učitelja. Kći je imala pristup svim predmetima 24/7 — a ja sam pratila napredak bez da sam je stresirala s pitanjima.
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg,var(--gold),#f5d170)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--fh)", fontSize: 18, fontWeight: 900, color: "#160d00", flexShrink: 0 }}>M</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 14 }}>Maja P.</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>Mama maturantice · Zagreb → MEF</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--fh)", fontSize: 28, fontWeight: 900, color: "var(--green)", lineHeight: 1 }}>189</div>
                      <div style={{ fontSize: 11, color: "var(--muted)" }}>/ 200 bod.</div>
                    </div>
                  </div>
                </div>

                {/* Second testimonial */}
                <div className="reveal reveal-left" style={{ marginTop: 16 }}>
                  <div style={{ background: "var(--bg)", border: "1px solid rgba(192,132,252,.15)", borderRadius: 20, padding: "22px 24px" }}>
                    <div style={{ fontFamily: "var(--fh)", fontSize: 36, color: "#c084fc", lineHeight: 0.7, marginBottom: 14, opacity: 0.5 }}>"</div>
                    <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--text)", marginBottom: 16, fontStyle: "italic" }}>
                      Svaki ponedjeljak dobijem izvješće. Vidim odmah što je slabo bez da moram pitati. Napokon se osjećam kao da nešto mogu učiniti.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#c084fc,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--fh)", fontSize: 16, fontWeight: 900, color: "#fff", flexShrink: 0 }}>I</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13 }}>Ivan K.</div>
                        <div style={{ fontSize: 11, color: "var(--muted)" }}>Tata maturanta · Split → FESB</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How it works steps */}
              <div className="reveal reveal-right">
                <div className="eye" style={{ marginBottom: 14 }}>Kako funkcionira</div>
                <h2 className="d3" style={{ marginBottom: 32, lineHeight: 1.2 }}>
                  Postavljeno za <span className="g-gold">5 minuta.</span><br />
                  Aktivno zauvijek.
                </h2>

                {[
                  { n: "01", color: "#c084fc", title: "Povežeš dijete", desc: "Dijete prihvati poziv — vi odmah dobivate pristup roditeljskom pregledu." },
                  { n: "02", color: "var(--gold)", title: "Dashboard se puni", desc: "Čim dijete počne vježbati, vi vidite napredak po predmetima u realnom vremenu." },
                  { n: "03", color: "#34d399", title: "Tjedni report stigla", desc: "Ponedjeljkom dobivate kratko izvješće: što je dobro, što zabrinjava, što napraviti." },
                  { n: "04", color: "#4b7bff", title: "Mirno dišete", desc: "Mate uvid. Ne morate pitati. Ne morate stresirati. Znate." },
                ].map(({ n, color, title, desc }) => (
                  <div key={n} style={{ display: "flex", gap: 18, marginBottom: 26, alignItems: "flex-start" }}>
                    <div style={{ minWidth: 42, height: 42, borderRadius: 12, background: `${color}14`, border: `1px solid ${color}28`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--fh)", fontSize: 14, fontWeight: 900, color, flexShrink: 0 }}>{n}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 5 }}>{title}</div>
                      <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>{desc}</div>
                    </div>
                  </div>
                ))}

                <button className="btn bo btn-lg" onClick={goRoditelji} style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Počni danas
                  <IcoArrow />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            VALUE COMPARISON
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "100px 0", background: "var(--bg)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: "20%", left: "-5%", width: 600, height: 600, background: "radial-gradient(circle,rgba(75,123,255,.05),transparent 65%)", pointerEvents: "none" }} />
          <div className="wrap">
            <div className="reveal reveal-up" style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="eye" style={{ marginBottom: 12 }}>Prava vrijednost</div>
              <h2 className="d2" style={{ marginBottom: 14 }}>
                Koliko košta <span className="g-blue">priprema za maturu?</span>
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
                Usporedite sami. Jedna privatna instrukcija = <strong style={{ color: "var(--text)" }}>2 mjeseca Maturiraj.hr Pro</strong>.
              </p>
            </div>

            <div className="reveal reveal-up" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, maxWidth: 860, margin: "0 auto 40px" }}>
              {COMPARE.map(({ label, price, per, color, items, ok, hi, badge }) => (
                <div
                  key={label}
                  className={`price-card${hi ? " hi" : ""}`}
                  style={hi ? {} : {}}
                >
                  {hi && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,var(--blue),transparent)", borderRadius: "var(--r-lg) var(--r-lg) 0 0" }} />}
                  {badge && <div style={{ position: "absolute", top: 16, right: 16, fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 99, background: "linear-gradient(135deg,#4b7bff,#7c5cfc)", color: "#fff" }}>{badge}</div>}
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{label}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                    <span style={{ fontFamily: "var(--fh)", fontSize: 32, fontWeight: 900, color, lineHeight: 1 }}>{price}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 22 }}>{per}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {items.map((s, j) => (
                      <div key={j} style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 13 }}>
                        <span style={{ color: ok[j] ? "var(--green)" : "var(--red)", flexShrink: 0 }}>
                          {ok[j] ? <IcoCheck /> : <IcoX />}
                        </span>
                        <span style={{ color: ok[j] ? "var(--text)" : "var(--muted)" }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  {hi && (
                    <button className="btn bp btn-md" style={{ width: "100%", justifyContent: "center", marginTop: 24 }} onClick={goPlan}>
                      Počni danas →
                    </button>
                  )}
                </div>
              ))}
            </div>

            <p className="reveal reveal-up" style={{ textAlign: "center", fontSize: 14, color: "var(--muted)", maxWidth: 480, margin: "0 auto" }}>
              Za cijenu jedne kave tjedno imaš sve predmete, arhivu 15 godina zadataka i AI profesora.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            URGENCY CTA
        ═══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 0 110px", background: "var(--s1)", borderTop: "1px solid var(--bdr)" }}>
          <div className="wrap">
            <div className="reveal reveal-up" style={{ background: "linear-gradient(135deg,rgba(192,132,252,.07),rgba(233,180,70,.07))", border: "1px solid rgba(192,132,252,.2)", borderRadius: 28, padding: "52px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(192,132,252,.04) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#c084fc,transparent)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 14px", borderRadius: 99, background: "rgba(251,113,133,0.12)", border: "1px solid rgba(251,113,133,0.25)", marginBottom: 22 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fb7185", boxShadow: "0 0 8px #fb7185", animation: "pulse 2s ease-in-out infinite" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#fb7185", letterSpacing: ".08em", textTransform: "uppercase" }}>Matura počinje 1. lipnja 2026.</span>
                </div>

                <h2 className="d2" style={{ marginBottom: 16, maxWidth: 540, margin: "0 auto 16px" }}>
                  Svaki propušteni tjedan<br />
                  <span style={{ color: "#fb7185" }}>ne može se nadoknaditi.</span>
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 36px" }}>
                  Maturanti koji počnu <strong style={{ color: "var(--text)" }}>3+ mjeseca ranije</strong> ostvaruju prosječno 23% bolje rezultate. Dajte djetetu pravi alat — i sebi mir.
                </p>

                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 22 }}>
                  <button className="btn bo btn-lg" onClick={goRoditelji} style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                    Isprobaj sada
                    <IcoArrow />
                  </button>
                  <button className="btn bp btn-lg" onClick={goPlan}>
                    Pogledaj Pro plan
                  </button>
                </div>

                <div style={{ fontSize: 13, color: "var(--muted)" }}>
                  Sigurno plaćanje · Otkaži bilo kada · Bez obveza
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
