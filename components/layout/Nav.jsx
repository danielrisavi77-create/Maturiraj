"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import HeroCountdown from "@/components/landing/HeroCountdown";
import { useAuth } from "@/lib/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";

export default function Nav({ onHome, onPlan, noCountdown = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const go = (path) => { router.push(path); };
  const sc = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {!noCountdown && <HeroCountdown />}

      {/* Mobile overlay */}
      <div className={`nav-overlay${menuOpen ? " open" : ""}`} onClick={closeMenu} />

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? " open" : ""}`}>
        {!authLoading && user && (
          <button className="nl" style={{ color: "var(--text)", fontWeight: 700 }} onClick={() => { go("/dashboard"); closeMenu(); }}>🏠 Dashboard</button>
        )}
        <button className="nl" style={{ color: "var(--green)", fontWeight: 600 }} onClick={() => { go("/skripte"); closeMenu(); }}>📖 Skripte</button>
        <button className="nl" style={{ color: "var(--gold)", fontWeight: 600 }} onClick={() => { go("/discere"); closeMenu(); }}>⭐ Discere</button>
        <button className="nl" style={{ color: "var(--blue)", fontWeight: 600 }} onClick={() => { go("/plan-ucenja"); closeMenu(); }}>📅 Plan učenja</button>
        <button className="nl" style={{ color: "#fb923c", fontWeight: 600 }} onClick={() => { go("/prijemni"); closeMenu(); }}>🏛 Prijemni</button>
        <button className="nl" style={{ color: "var(--teal)", fontWeight: 600 }} onClick={() => { go("/kalkulator"); closeMenu(); }}>🎯 Kalkulator</button>
        <button className="nl" style={{ color: "#a78bfa", fontWeight: 600 }} onClick={() => { go("/termini"); closeMenu(); }}>📅 Termini</button>
        <button className="nl" style={{ color: "var(--blue)", fontWeight: 600 }} onClick={() => { go("/formule"); closeMenu(); }}>📐 Formule</button>
        <button className="nl" style={{ color: "var(--green)", fontWeight: 600 }} onClick={() => { go("/checklist"); closeMenu(); }}>✅ Checklist</button>
        <button className="nl" style={{ color: "#c084fc", fontWeight: 600 }} onClick={() => { go("/roditelji"); closeMenu(); }}>📊 Za roditelje</button>
        <div className="nav-drawer-cta">
          <button className="btn bp btn-md" style={{ width: "100%" }} onClick={() => { sc("cijene"); closeMenu(); }}>💎 Cijene</button>
          {!authLoading && !user && (
            <button className="btn bs btn-md" style={{ width: "100%" }} onClick={() => { go("/auth"); closeMenu(); }}>Prijava</button>
          )}
          {!authLoading && user && (
            <button className="btn bs btn-md" style={{ width: "100%" }} onClick={() => { (onPlan || (() => go("/dashboard")))(); closeMenu(); }}>Moj plan →</button>
          )}
        </div>
      </div>

      {/* Desktop nav */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div
          className="nav-logo"
          onClick={onHome || (() => {
            if (window.location.pathname === '/') {
              window.location.href = '/?intro=1'; // intentional full reload to reset intro state
            } else {
              router.push('/');
            }
          })}
        >
          <div className="nav-logo-dot" />
          maturiraj
        </div>

        <div className="nav-links">
          {!authLoading && user && (
            <button className="nl" style={{ color: "var(--text)", fontWeight: 700 }} onClick={() => go("/dashboard")}>🏠 Dashboard</button>
          )}
          <button className="nl" style={{ color: "var(--green)", fontWeight: 600 }} onClick={() => go("/skripte")}>📖 Skripte</button>
          <button className="nl" style={{ color: "var(--gold)", fontWeight: 600 }} onClick={() => go("/discere")}>⭐ Discere</button>
          <button className="nl" style={{ color: "var(--blue)", fontWeight: 600 }} onClick={() => go("/plan-ucenja")}>📅 Plan učenja</button>
          <button className="nl" style={{ color: "#fb923c", fontWeight: 600 }} onClick={() => go("/prijemni")}>🏛 Prijemni</button>
          <button className="nl" style={{ color: "var(--teal)", fontWeight: 600 }} onClick={() => go("/kalkulator")}>🎯 Kalkulator</button>
          <button className="nl" style={{ color: "#a78bfa", fontWeight: 600 }} onClick={() => go("/termini")}>📅 Termini</button>
          <button className="nl" style={{ color: "var(--blue)", fontWeight: 600 }} onClick={() => go("/formule")}>📐 Formule</button>
          <button className="nl" style={{ color: "var(--green)", fontWeight: 600 }} onClick={() => go("/checklist")}>✅ Checklist</button>
          <button className="nl" style={{ color: "#c084fc", fontWeight: 600 }} onClick={() => go("/roditelji")}>📊 Za roditelje</button>
          <button className="nl" style={{ color: "var(--gold)", fontWeight: 600 }} onClick={() => sc("cijene")}>💎 Cijene</button>
        </div>

        <div className="nav-cta">
          {user ? (
            <UserPill user={user} go={go} />
          ) : !authLoading ? (
            <>
              <button className="btn bs btn-sm" onClick={() => go("/auth")}>Prijava</button>
              <button className="btn bp btn-sm" onClick={() => sc("cijene")}>Isprobaj →</button>
            </>
          ) : (
            <div style={{ width: 130, height: 32 }} />
          )}
        </div>

        <button
          className={`nav-burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Izbornik"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </>
  );
}

// ── UserPill — prikazuje se kada je korisnik prijavljen ──────────────────────
function UserPill({ user, go }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();
  const { planType, isPro } = useAuth();

  const firstName = user.user_metadata?.full_name?.split(" ")[0] || null;
  const initial = (firstName || user.email)?.[0]?.toUpperCase() || "?";

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    // pointerdown catches touch and mouse reliably
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, []);

  const handleLogout = async (e) => {
    e.stopPropagation();
    setOpen(false);
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push("/");
      router.refresh();
    } catch (err) {
      console.error('[Nav] signOut error:', err);
      router.push("/");
    }
  };

  // Status badge
  let statusLabel = "Besplatno";
  let statusColor = "#6a82a8";
  let statusBg = "rgba(106,130,168,0.13)";
  let statusBorder = "rgba(106,130,168,0.22)";

  if (isPro) {
    statusLabel = "PRO";
    statusColor = "#c084fc";
    statusBg = "rgba(192,132,252,0.13)";
    statusBorder = "rgba(192,132,252,0.22)";
  } else if (planType === "starter") {
    statusLabel = "Standard";
    statusColor = "#e9b446";
    statusBg = "rgba(233,180,70,0.13)";
    statusBorder = "rgba(233,180,70,0.22)";
  }

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 12px 6px 6px",
          borderRadius: 99,
          border: `1px solid ${statusBorder}`,
          background: statusBg,
          cursor: "pointer",
          color: "var(--text)",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--blue), var(--violet))",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          {initial}
        </span>
        <span>{firstName || user.email.split("@")[0]}</span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: statusColor,
            background: statusBg,
            border: `1px solid ${statusBorder}`,
            borderRadius: 99,
            padding: "2px 8px",
            marginLeft: 2,
          }}
        >
          {statusLabel}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.5, marginLeft: -2 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            minWidth: 200,
            background: "rgba(14,18,32,0.98)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 14,
            padding: "6px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            backdropFilter: "blur(20px)",
            zIndex: 999,
          }}
        >
          <div
            style={{
              padding: "8px 12px 10px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              marginBottom: 4,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>
              {user.user_metadata?.full_name || user.email.split("@")[0]}
            </div>
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{user.email}</div>
            <div style={{ marginTop: 6 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: statusColor,
                  background: statusBg,
                  border: `1px solid ${statusBorder}`,
                  borderRadius: 99,
                  padding: "2px 8px",
                }}
              >
                {statusLabel}
              </span>
            </div>
          </div>

          {[
            { label: "🏠 Dashboard", path: "/dashboard" },
            { label: "📅 Plan učenja", path: "/plan-ucenja" },
            { label: "✅ Checklist", path: "/checklist" },
            { label: "⭐ Discere", path: "/discere" },
            { label: "📊 Za roditelje", path: "/roditelji" },
          ].map(({ label, path }) => (
            <button
              key={path}
              onClick={() => { go(path); setOpen(false); }}
              style={dropItem}
            >
              {label}
            </button>
          ))}

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 4, paddingTop: 4 }}>
            <button onClick={handleLogout} style={{ ...dropItem, color: "var(--red)" }}>
              Odjava
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const dropItem = {
  display: "block",
  width: "100%",
  textAlign: "left",
  padding: "8px 12px",
  borderRadius: 9,
  border: "none",
  background: "transparent",
  color: "var(--text)",
  fontSize: 13,
  fontWeight: 500,
  cursor: "pointer",
};