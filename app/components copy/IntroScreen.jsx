"use client";

import { useEffect, useMemo, useState } from "react";

const QUOTES = [
  '"AI profesor mi je objasnio derivacije bolje nego profesor za 45 min." — Lucija, Zagreb',
  '"Discere arhiva starih zadataka je hit — vježbaš s pravim pitanjima." — Ana, Rijeka',
  '"Za MEF pripremu nema boljeg alata. Sve na jednom mjestu." — Mateo, Split',
  '"Upisala FER. Skripte i kalkulator su mi spasili živce." — Tena, Osijek',
  '"Bez Maturixa ne znam kako bih prošla kemiju." — Lara, Zagreb',
];

const ISPITI = [
  { datum: "1.6.2026", dan: "Pon", predmet: "Češki / Mađarski / Srpski / Tal. (test)", vrijeme: "09:00" },
  { datum: "2.6.2026", dan: "Uto", predmet: "Češki / Mađarski / Srpski / Tal. (esej)", vrijeme: "09:00" },
  { datum: "3.6.2026", dan: "Sri", predmet: "Biologija", vrijeme: "09:00" },
  { datum: "3.6.2026", dan: "Sri", predmet: "Geografija", vrijeme: "14:00" },
  { datum: "8.6.2026", dan: "Pon", predmet: "Španjolski / Latinski", vrijeme: "09:00" },
  { datum: "9.6.2026", dan: "Uto", predmet: "Njemački jezik", vrijeme: "09:00" },
  { datum: "9.6.2026", dan: "Uto", predmet: "Filozofija", vrijeme: "14:00" },
  { datum: "10.6.2026", dan: "Sri", predmet: "Talijanski jezik", vrijeme: "09:00" },
  { datum: "10.6.2026", dan: "Sri", predmet: "Likovna umjetnost", vrijeme: "14:00" },
  { datum: "11.6.2026", dan: "Čet", predmet: "Francuski jezik", vrijeme: "09:00" },
  { datum: "11.6.2026", dan: "Čet", predmet: "Grčki jezik", vrijeme: "14:00" },
  { datum: "15.6.2026", dan: "Pon", predmet: "Hrvatski jezik (test + sažetak)", vrijeme: "09:00" },
  { datum: "16.6.2026", dan: "Uto", predmet: "Hrvatski jezik (esej)", vrijeme: "09:00" },
  { datum: "17.6.2026", dan: "Sri", predmet: "Politika i gospodarstvo", vrijeme: "09:00" },
  { datum: "17.6.2026", dan: "Sri", predmet: "Povijest", vrijeme: "14:00" },
  { datum: "18.6.2026", dan: "Čet", predmet: "Fizika", vrijeme: "09:00" },
  { datum: "18.6.2026", dan: "Čet", predmet: "Logika", vrijeme: "14:00" },
  { datum: "19.6.2026", dan: "Pet", predmet: "Engleski jezik", vrijeme: "09:00" },
  { datum: "23.6.2026", dan: "Uto", predmet: "Psihologija", vrijeme: "09:00" },
  { datum: "23.6.2026", dan: "Uto", predmet: "Informatika", vrijeme: "14:00" },
  { datum: "24.6.2026", dan: "Sri", predmet: "Kemija", vrijeme: "09:00" },
  { datum: "24.6.2026", dan: "Sri", predmet: "Sociologija", vrijeme: "14:00" },
  { datum: "25.6.2026", dan: "Čet", predmet: "Matematika (viša i osnovna razina)", vrijeme: "09:00" },
  { datum: "26.6.2026", dan: "Pet", predmet: "Glazbena umjetnost", vrijeme: "09:00" },
  { datum: "26.6.2026", dan: "Pet", predmet: "Vjeronauk / Etika", vrijeme: "14:00" },
];

const TICKER = [
  "Matura 2026",
  "AI Profesor",
  "Ispitni termini",
  "Bodovni kalkulator",
  "Hrvatski jezik",
  "Matematika",
  "Engleski jezik",
  "Kemija",
  "Geografija",
  "Ljetni rok",
  "Jesenski rok",
  "NCVVO",
  "Discere",
  "Pripremi se",
  "maturiraj.hr",
];

function parseExamDate(item) {
  const [d, m, y] = item.datum.split(".");
  const [h, min] = item.vrijeme.split(":");
  return new Date(Number(y), Number(m) - 1, Number(d), Number(h), Number(min));
}

function getNextExam() {
  const now = new Date();
  for (const isp of ISPITI) {
    const dt = parseExamDate(isp);
    if (dt >= now) return { ...isp, dt };
  }
  return null;
}

function getDaysToMainExam() {
  const target = new Date("2026-06-01T00:00:00");
  const diff = target.getTime() - Date.now();
  return Math.max(0, Math.floor(diff / 86400000));
}

export default function IntroScreen({ onFinish }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [eyebrowIndex, setEyebrowIndex] = useState(0);
  const [daysLeft, setDaysLeft] = useState(getDaysToMainExam());
  const [onlineCount, setOnlineCount] = useState(248);
  const nextExam = useMemo(() => getNextExam(), []);

  const eyebrowMessages = useMemo(() => {
    const msgs = ["Matura · 2026 · Hrvatska"];
    if (daysLeft > 0) msgs.push(`⏳ ${daysLeft} dana do mature`);
    if (nextExam) msgs.push(`📅 ${nextExam.dan} ${nextExam.datum} · ${nextExam.predmet.split("(")[0].trim()}`);
    msgs.push("✅ Skripte besplatno");
    msgs.push("🤖 AI Profesor dostupan 24/7");
    return msgs;
  }, [daysLeft, nextExam]);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 5000);

    const eyebrowTimer = setInterval(() => {
      setEyebrowIndex((prev) => (prev + 1) % eyebrowMessages.length);
    }, 3000);

    const countdownTimer = setInterval(() => {
      setDaysLeft(getDaysToMainExam());
    }, 60000);

    const onlineTimer = setInterval(() => {
      setOnlineCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const step = Math.random() > 0.85 ? 3 : 1;
        return Math.max(20, prev + delta * step);
      });
    }, 4500);

    return () => {
      clearInterval(quoteTimer);
      clearInterval(eyebrowTimer);
      clearInterval(countdownTimer);
      clearInterval(onlineTimer);
    };
  }, [eyebrowMessages.length]);

  const urgencyLabel =
    daysLeft > 60
      ? "dana do mature"
      : daysLeft > 30
      ? "⚡ brzo se spremi"
      : daysLeft > 14
      ? "🔥 ostaje malo vremena"
      : "🚨 zadnji tren!";

  return (
    <>
      <div className="intro-scene">
        <div className="intro-aurora">
          <div className="intro-au intro-au1" />
          <div className="intro-au intro-au2" />
          <div className="intro-au intro-au3" />
        </div>

        <div className="intro-grain" />
        <div className="intro-vignette" />
        <div className="intro-bg intro-bg-a" />
        <div className="intro-bg intro-bg-b" />
        <div className="intro-bg intro-bg-c" />

        <div className="intro-cap-wrap" aria-hidden="true">
          <div className="intro-cap-inner">
            <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="108" cy="185" rx="62" ry="9" fill="rgba(0,0,0,.18)" />
              <path d="M76 112 Q76 148 108 152 Q140 148 140 112 L140 100 Q140 114 108 116 Q76 114 76 100 Z" fill="#c94010" />
              <ellipse cx="108" cy="100" rx="32" ry="9" fill="#e05020" />
              <path d="M76 100 Q76 114 108 116 Q92 114 84 108 L76 100 Z" fill="rgba(0,0,0,.15)" />
              <path d="M18 82 L108 110 L198 82 L108 54 Z" fill="#cc4010" />
              <path d="M18 74 L108 46 L198 74 L108 102 Z" fill="#ff6b2b" />
              <path d="M62 57 L108 46 L154 57 L108 74 Z" fill="rgba(255,255,255,.22)" />
              <path d="M18 74 L108 102 L108 110 L18 82 Z" fill="#b83a0e" />
              <path d="M198 74 L108 102 L108 110 L198 82 Z" fill="#d44818" />
              <circle cx="108" cy="72" r="6" fill="#b83a0e" />
              <circle cx="108" cy="72" r="3.5" fill="#ff8c52" />
              <path d="M112 74 Q148 68 162 82 Q172 94 168 118" stroke="#f5c842" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="168" cy="118" r="5" fill="#cc9900" />
              <circle cx="168" cy="118" r="3" fill="#f5c842" />
              <line x1="164" y1="122" x2="158" y2="148" stroke="#f5c842" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="167" y1="123" x2="165" y2="150" stroke="#e8b400" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="170" y1="122" x2="172" y2="148" stroke="#f5c842" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="173" y1="120" x2="178" y2="145" stroke="#e8b400" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="168" cy="150" rx="10" ry="5" fill="#cc9900" opacity=".6" />
            </svg>
          </div>
        </div>

        <div className="intro-free-badge">
          <span className="intro-free-dot" />
          Skripte i termini besplatno zauvijek
        </div>

        <div className="intro-next-exam">
          <div className="intro-ne-label">Sljedeći ispit</div>
          <div className="intro-ne-dot" />
          <div className="intro-ne-date">{nextExam ? `${nextExam.dan}, ${nextExam.datum}` : "—"}</div>
          <div className="intro-ne-subj">{nextExam ? nextExam.predmet : "—"}</div>
          <div className="intro-ne-badge">🕘 {nextExam ? `${nextExam.vrijeme}h` : "uskoro"}</div>
        </div>

        <div className="intro-side-count">
          <div className="intro-sc-dot" />
          <div className="intro-sc-num">{String(daysLeft).padStart(2, "0")}</div>
          <div className="intro-sc-lbl">{urgencyLabel}</div>
        </div>

        <div className="intro-online-pill">
          <span className="intro-online-dot" />
          <span className="intro-online-txt">
            <span className="intro-online-num">{onlineCount}</span> učenika online
          </span>
        </div>

        <div className="intro-center">
          <div className="intro-logo">
            <div className="intro-logo-mark">
              <div className="intro-logo-dot" />
              <div className="intro-logo-ring" />
            </div>
            <span className="intro-logo-name">maturiraj.hr</span>
          </div>

          <div className="intro-eyebrow-wrap">
            <span className="intro-eyebrow">{eyebrowMessages[eyebrowIndex]}</span>
          </div>

          <div className="intro-headline">
            <span className="intro-h-l1">
              Tvoj uspjeh počinje <span className="intro-h-italic">ovdje.</span>
            </span>
          </div>

          <div className="intro-div-line" />

          <div className="intro-social-proof">
            <div className="intro-sp-avatars">
              <div className="intro-sp-av intro-av1">A</div>
              <div className="intro-sp-av intro-av2">M</div>
              <div className="intro-sp-av intro-av3">T</div>
              <div className="intro-sp-av intro-av4">L</div>
            </div>
            <div className="intro-sp-sep" />
            <div className="intro-sp-stars">★★★★★</div>
            <div className="intro-sp-text">
              <strong>1.200+</strong> maturanata se već priprema
            </div>
          </div>

          <div className="intro-sp-quote-wrap">
            <span className="intro-sp-quote">{QUOTES[quoteIndex]}</span>
          </div>

          <div className="intro-cta-group">
            <button className="intro-btn-p" onClick={onFinish}>
              <span className="intro-btn-txt">Počni učiti besplatno</span>
              <span className="intro-btn-arr">→</span>
            </button>

            <button className="intro-btn-g" onClick={onFinish}>
              Već imam račun? Prijavi se
            </button>

            <button className="intro-btn-g intro-btn-what" onClick={onFinish}>
              Što je uključeno? →
            </button>
          </div>

          <div className="intro-scroll-hint">
            <span className="intro-scroll-lbl">Saznaj više ↓</span>
            <div className="intro-scroll-line" />
          </div>
        </div>

        <div className="intro-ticker">
          <div className="intro-ticker-track">
            {[...TICKER, ...TICKER].map((item, i) => (
              <span className="intro-ticker-item" key={`${item}-${i}`}>
                {item}
                <span className="intro-ticker-sep" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .intro-scene,
        .intro-scene * {
          box-sizing: border-box;
        }

        .intro-scene {
          --ink: #07090f;
          --orange: #ff6b2b;
          --yellow: #f5c842;
          --teal: #2dcfbe;
          --green: #3ecf6e;
          --text: #e4edff;
          --ghost: rgba(228, 237, 255, 0.38);
          --muted: rgba(228, 237, 255, 0.2);

          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: var(--ink);
          color: var(--text);
          font-family: "DM Sans", system-ui, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .intro-aurora,
        .intro-vignette,
        .intro-grain,
        .intro-bg,
        .intro-ticker,
        .intro-online-pill,
        .intro-side-count,
        .intro-next-exam,
        .intro-free-badge,
        .intro-cap-wrap {
          pointer-events: none;
        }

        .intro-aurora {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }

        .intro-au {
          position: absolute;
          border-radius: 999px;
          filter: blur(60px);
        }

        .intro-au1 {
          width: 110vw;
          height: 35vh;
          top: 4%;
          left: -8%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(45, 207, 190, 0.045) 15%,
            rgba(255, 107, 43, 0.065) 42%,
            rgba(245, 200, 66, 0.055) 65%,
            rgba(124, 92, 252, 0.03) 85%,
            transparent 100%
          );
          animation: introAu1 18s ease-in-out infinite;
        }

        .intro-au2 {
          width: 90vw;
          height: 28vh;
          bottom: 8%;
          left: 5%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(245, 200, 66, 0.04) 25%,
            rgba(255, 107, 43, 0.055) 52%,
            rgba(45, 207, 190, 0.038) 78%,
            transparent 100%
          );
          animation: introAu2 23s ease-in-out infinite 5s;
        }

        .intro-au3 {
          width: 60vw;
          height: 20vh;
          top: 40%;
          left: 20%;
          background: radial-gradient(ellipse, rgba(124, 92, 252, 0.025) 0%, transparent 70%);
          animation: introAu3 30s ease-in-out infinite 10s;
          filter: blur(80px);
        }

        .intro-grain {
          position: absolute;
          inset: -50%;
          width: 200%;
          height: 200%;
          opacity: 0.025;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          animation: introGrain 0.5s steps(1) infinite;
        }

        .intro-vignette {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: radial-gradient(
            ellipse 78% 78% at 50% 50%,
            transparent 35%,
            rgba(7, 9, 15, 0.45) 65%,
            rgba(7, 9, 15, 0.85) 88%,
            rgba(7, 9, 15, 0.97) 100%
          );
        }

        .intro-bg {
          position: absolute;
          border-radius: 999px;
          z-index: 1;
        }

        .intro-bg-a {
          width: 900px;
          height: 900px;
          top: -300px;
          left: -200px;
          background: radial-gradient(circle, rgba(255, 107, 43, 0.06) 0%, transparent 65%);
          animation: introFa 22s ease-in-out infinite;
        }

        .intro-bg-b {
          width: 700px;
          height: 700px;
          bottom: -200px;
          right: -150px;
          background: radial-gradient(circle, rgba(245, 200, 66, 0.05) 0%, transparent 65%);
          animation: introFb 26s ease-in-out infinite;
        }

        .intro-bg-c {
          width: 500px;
          height: 500px;
          top: 30%;
          left: 55%;
          background: radial-gradient(circle, rgba(124, 92, 252, 0.028) 0%, transparent 65%);
          animation: introFc 34s ease-in-out infinite 8s;
        }

        .intro-cap-wrap {
          position: fixed;
          top: 24%;
          right: 5%;
          width: 145px;
          z-index: 8;
          filter: drop-shadow(0 20px 50px rgba(255, 107, 43, 0.5)) drop-shadow(0 0 80px rgba(255, 107, 43, 0.2));
          animation: introCapThrow 1.1s cubic-bezier(.16,1,.3,1) .1s both;
        }

        .intro-cap-inner {
          width: 100%;
          animation: introCapFloat 6s ease-in-out infinite 1.3s;
        }

        .intro-free-badge {
          position: fixed;
          left: 32px;
          top: 28px;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(62, 207, 110, 0.5);
        }

        .intro-free-dot,
        .intro-online-dot,
        .intro-sc-dot,
        .intro-ne-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          flex-shrink: 0;
        }

        .intro-free-dot {
          background: var(--green);
          box-shadow: 0 0 5px rgba(62, 207, 110, 0.5);
          animation: introPulse 2s ease-in-out infinite;
        }

        .intro-next-exam {
          position: fixed;
          left: 32px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-start;
        }

        .intro-ne-label {
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(228, 237, 255, 0.1);
        }

        .intro-ne-dot {
          background: rgba(255, 107, 43, 0.7);
          box-shadow: 0 0 7px rgba(255, 107, 43, 0.5);
          animation: introPulse 2s ease-in-out infinite;
          margin-bottom: 2px;
        }

        .intro-ne-date {
          font-family: "Playfair Display", serif;
          font-size: 18px;
          font-weight: 900;
          color: rgba(255, 107, 43, 0.65);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .intro-ne-subj {
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(228, 237, 255, 0.18);
          line-height: 1.5;
          margin-top: 4px;
          max-width: 140px;
        }

        .intro-ne-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 6px;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 107, 43, 0.45);
        }

        .intro-side-count {
          position: fixed;
          right: 36px;
          bottom: 48px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: flex-end;
        }

        .intro-sc-dot {
          background: #3ecf6e;
          box-shadow: 0 0 7px rgba(62, 207, 110, 0.6);
          animation: introPulse 2s ease-in-out infinite;
          margin-bottom: 8px;
        }

        .intro-sc-num {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          font-weight: 900;
          color: rgba(228, 237, 255, 0.18);
          letter-spacing: -0.02em;
        }

        .intro-sc-lbl {
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(228, 237, 255, 0.16);
          text-align: right;
        }

        .intro-online-pill {
          position: fixed;
          left: 36px;
          bottom: 48px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .intro-online-dot {
          background: #3ecf6e;
          box-shadow: 0 0 7px rgba(62, 207, 110, 0.8);
          animation: introPulse 2.4s ease-in-out infinite;
        }

        .intro-online-txt {
          font-size: 11px;
          font-weight: 300;
          color: rgba(228, 237, 255, 0.28);
          letter-spacing: 0.04em;
        }

        .intro-online-num {
          font-family: "Playfair Display", serif;
          font-size: 13px;
          font-weight: 700;
          color: rgba(62, 207, 110, 0.7);
          letter-spacing: -0.01em;
        }

        .intro-center {
          position: relative;
          z-index: 12;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 24px;
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
        }

        .intro-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
          animation: introUp .5s cubic-bezier(.16,1,.3,1) .1s both;
        }

        .intro-logo-mark {
          position: relative;
          width: 10px;
          height: 10px;
        }

        .intro-logo-dot {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 14px rgba(255, 107, 43, 0.9);
        }

        .intro-logo-ring {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 1px solid rgba(255, 107, 43, 0.3);
          animation: introRing 3s ease-in-out infinite;
        }

        .intro-logo-name {
          font-family: "Playfair Display", serif;
          font-size: 58px;
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1;
          background: linear-gradient(110deg, #ff6b2b 0%, #f5c842 40%, #ff8c30 65%, #f5c842 85%, #ff6b2b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 300%;
          animation: introShine 5s ease-in-out infinite 1s;
          opacity: 0.95;
        }

        .intro-eyebrow-wrap {
          overflow: hidden;
          height: 16px;
          margin-bottom: 36px;
          animation: introUp .5s cubic-bezier(.16,1,.3,1) .35s both;
        }

        .intro-eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 107, 43, 0.8);
        }

        .intro-headline {
          font-family: "Playfair Display", serif;
          font-size: 41px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.03em;
          white-space: nowrap;
          text-align: center;
        }

        .intro-h-l1 {
          display: block;
          background: linear-gradient(
            110deg,
            #e4edff 0%,
            rgba(228, 237, 255, 0.9) 40%,
            rgba(255, 200, 140, 0.7) 75%,
            rgba(245, 200, 66, 0.5) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: introUp .8s cubic-bezier(.16,1,.3,1) .55s both;
        }

        .intro-h-italic {
          font-style: italic;
          font-weight: 700;
          background: linear-gradient(
            110deg,
            #fff 0%,
            rgba(255, 200, 100, 0.95) 30%,
            rgba(245, 200, 66, 1) 55%,
            rgba(255, 140, 50, 0.95) 80%,
            #fff 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 300%;
          animation: introShine 5s ease-in-out infinite 1.5s;
        }

        .intro-div-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, transparent, rgba(228, 237, 255, 0.13), transparent);
          margin: 10px auto;
          animation: introDivider .6s ease 1.1s both;
        }

        .intro-social-proof {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          animation: introUp .5s ease 1.6s both;
        }

        .intro-sp-avatars {
          display: flex;
          align-items: center;
        }

        .intro-sp-av {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1.5px solid rgba(7, 9, 15, 0.8);
          margin-left: -6px;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          animation: introAvatarIn .6s ease both;
        }

        .intro-sp-av:first-child {
          margin-left: 0;
        }

        .intro-av1 { background: linear-gradient(135deg, #ff6b2b, #f5c842); animation-delay: 1.8s; }
        .intro-av2 { background: linear-gradient(135deg, #3ecf6e, #2dcfbe); animation-delay: 2s; }
        .intro-av3 { background: linear-gradient(135deg, #7c5cfc, #4b7bff); animation-delay: 2.2s; }
        .intro-av4 { background: linear-gradient(135deg, #f5c842, #ff8c30); animation-delay: 2.4s; }

        .intro-sp-sep {
          width: 1px;
          height: 12px;
          background: rgba(228, 237, 255, 0.1);
        }

        .intro-sp-stars {
          color: var(--yellow);
          font-size: 10px;
          letter-spacing: 1px;
        }

        .intro-sp-text {
          font-size: 11px;
          color: rgba(228, 237, 255, 0.35);
          letter-spacing: 0.04em;
        }

        .intro-sp-text strong {
          color: rgba(228, 237, 255, 0.65);
          font-weight: 600;
        }

        .intro-sp-quote-wrap {
          overflow: hidden;
          min-height: 14px;
          margin-top: 6px;
          margin-bottom: 12px;
        }

        .intro-sp-quote {
          display: block;
          font-size: 11px;
          font-style: italic;
          color: rgba(228, 237, 255, 0.28);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 380px;
        }

        .intro-cta-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          animation: introUp .6s cubic-bezier(.16,1,.3,1) 1.35s both;
        }

        .intro-btn-p {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 19px 52px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(135deg, #ff6b2b 0%, #f5c842 100%);
          color: #1a0a00;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          overflow: hidden;
          transition: transform .2s ease, box-shadow .3s ease;
          box-shadow: 0 0 0 1px rgba(255, 107, 43, 0.28), 0 8px 32px rgba(255, 107, 43, 0.25), 0 2px 8px rgba(0,0,0,0.4);
        }

        .intro-btn-p::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,.18) 50%, transparent 70%);
          background-size: 300% 100%;
          animation: introSweep 3.5s ease-in-out infinite 2.8s;
        }

        .intro-btn-p:hover {
          transform: translateY(-1px) scale(1.015);
          box-shadow: 0 0 0 1px rgba(255, 107, 43, 0.5), 0 22px 64px rgba(255, 107, 43, 0.45), 0 4px 16px rgba(0,0,0,0.4);
        }

        .intro-btn-txt,
        .intro-btn-arr {
          position: relative;
          z-index: 1;
        }

        .intro-btn-arr {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0,0,0,.15);
          font-size: 12px;
        }

        .intro-btn-g {
          background: none;
          border: none;
          color: rgba(228, 237, 255, 0.35);
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.08em;
          cursor: pointer;
          padding: 4px 0;
          transition: color .25s;
        }

        .intro-btn-g:hover {
          color: rgba(255, 200, 120, 0.8);
        }

        .intro-btn-what {
          opacity: 0.75;
          font-size: 12px;
        }

        .intro-scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          animation: introUp .5s ease 2.8s both;
        }

        .intro-scroll-lbl {
          font-size: 8px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 107, 43, 0.4);
          white-space: nowrap;
        }

        .intro-scroll-line {
          width: 1px;
          height: 24px;
          background: linear-gradient(to bottom, rgba(255, 107, 43, 0.4), transparent);
          border-radius: 1px;
          animation: introScrollDrop 2s cubic-bezier(.4,0,.6,1) infinite 3s;
        }

        .intro-ticker {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 20;
          height: 34px;
          overflow: hidden;
          border-top: 1px solid rgba(228, 237, 255, 0.04);
          display: flex;
          align-items: center;
        }

        .intro-ticker-track {
          display: flex;
          white-space: nowrap;
          animation: introTicker 32s linear infinite;
        }

        .intro-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0 22px;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(228, 237, 255, 0.11);
        }

        .intro-ticker-sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255, 107, 43, 0.3);
          flex-shrink: 0;
        }

        @keyframes introAu1 {
          0%,100% { transform: translateX(0) scaleY(1); opacity: .9; }
          40% { transform: translateX(2.5%) scaleY(1.3); opacity: 1; }
          70% { transform: translateX(-2%) scaleY(.8); opacity: .65; }
        }

        @keyframes introAu2 {
          0%,100% { transform: translateX(0) scaleY(1); opacity: .75; }
          45% { transform: translateX(-2.5%) scaleY(1.35); opacity: 1; }
          75% { transform: translateX(2%) scaleY(.75); opacity: .5; }
        }

        @keyframes introAu3 {
          0%,100% { transform: translateX(0) scaleX(1); opacity: .6; }
          50% { transform: translateX(5%) scaleX(1.2); opacity: 1; }
        }

        @keyframes introGrain {
          0% { transform: translate(0,0); }
          25% { transform: translate(-3%,-2%); }
          50% { transform: translate(2%,3%); }
          75% { transform: translate(-2%,2%); }
        }

        @keyframes introFa {
          0%,100% { transform: translate(0,0); }
          40% { transform: translate(50px,-35px); }
          70% { transform: translate(-25px,42px); }
        }

        @keyframes introFb {
          0%,100% { transform: translate(0,0); }
          35% { transform: translate(-44px,28px); }
          65% { transform: translate(30px,-38px); }
        }

        @keyframes introFc {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-30px,20px); }
        }

        @keyframes introCapThrow {
          0% { opacity: 0; transform: translateY(-140px) rotate3d(1,.3,0,60deg) scale(.7); }
          60% { transform: translateY(18px) rotate3d(1,.3,0,-8deg) scale(1.04); }
          80% { transform: translateY(-8px) rotate3d(1,.3,0,4deg) scale(.98); }
          100% { opacity: 1; transform: translateY(0) rotate3d(0,0,0,0deg) scale(1); }
        }

        @keyframes introCapFloat {
          0% { transform: translateY(0) rotateX(0deg) rotateY(-4deg) rotateZ(-2deg); }
          25% { transform: translateY(-10px) rotateX(4deg) rotateY(2deg) rotateZ(-1deg); }
          50% { transform: translateY(-18px) rotateX(2deg) rotateY(6deg) rotateZ(1deg); }
          75% { transform: translateY(-8px) rotateX(-2deg) rotateY(0deg) rotateZ(-1deg); }
          100% { transform: translateY(0) rotateX(0deg) rotateY(-4deg) rotateZ(-2deg); }
        }

        @keyframes introRing {
          0%,100% { transform: scale(1); opacity: .7; }
          50% { transform: scale(2); opacity: 0; }
        }

        @keyframes introShine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes introPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: .35; transform: scale(1.55); }
        }

        @keyframes introUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes introDivider {
          from { height: 0; opacity: 0; }
          to { height: 50px; opacity: 1; }
        }

        @keyframes introAvatarIn {
          from { opacity: 0; transform: scale(.5) translateY(6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes introSweep {
          0%,100% { background-position: -200% center; }
          60% { background-position: 200% center; }
        }

        @keyframes introScrollDrop {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          30% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          70% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }

        @keyframes introTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 860px) {
          .intro-cap-wrap {
            width: 120px;
            right: 3%;
            top: 20%;
          }

          .intro-next-exam {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .intro-cap-wrap,
          .intro-next-exam,
          .intro-side-count {
            display: none;
          }

          .intro-free-badge {
            left: 16px;
            top: 20px;
            font-size: 8px;
          }

          .intro-online-pill {
            left: 16px;
            bottom: 42px;
          }

          .intro-center {
            padding: 0 20px;
            max-width: 100%;
          }

          .intro-logo {
            margin-bottom: 12px;
          }

          .intro-logo-name {
            font-size: clamp(32px, 10vw, 52px);
          }

          .intro-eyebrow-wrap {
            margin-bottom: 10px;
          }

          .intro-eyebrow {
            font-size: 9px;
            letter-spacing: 0.2em;
          }

          .intro-headline {
            white-space: normal;
            font-size: clamp(26px, 8vw, 40px);
          }

          .intro-div-line {
            margin: 10px auto;
            height: 32px;
          }

          .intro-social-proof {
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-bottom: 8px;
          }

          .intro-sp-text {
            font-size: 10px;
          }

          .intro-sp-quote {
            font-size: 10px;
            max-width: 280px;
          }

          .intro-cta-group {
            gap: 10px;
            width: 100%;
          }

          .intro-btn-p {
            width: 100%;
            max-width: 320px;
            justify-content: center;
            padding: 16px 28px;
            font-size: 14px;
          }

          .intro-btn-g {
            font-size: 12px;
          }

          .intro-scroll-hint {
            margin-top: 10px;
          }

          .intro-ticker {
            height: 28px;
          }

          .intro-ticker-item {
            font-size: 9px;
            padding: 0 14px;
          }

          .intro-vignette {
            background: radial-gradient(
              ellipse 100% 100% at 50% 50%,
              transparent 30%,
              rgba(7, 9, 15, 0.6) 70%,
              rgba(7, 9, 15, 0.95) 100%
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-scene * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}