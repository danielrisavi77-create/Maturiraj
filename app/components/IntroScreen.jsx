"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const TICKER = [
  { t: "Matura 2026" },
  { t: "AI Profesor", badge: "hot" },
  { t: "Ispitni termini" },
  { t: "Bodovni kalkulator", badge: "novo" },
  { t: "Hrvatski jezik" },
  { t: "Matematika" },
  { t: "Engleski jezik" },
  { t: "Kemija" },
  { t: "Geografija" },
  { t: "Ljetni rok" },
  { t: "Jesenski rok" },
  { t: "NCVVO" },
  { t: "Discere", badge: "novo" },
  { t: "Pripremi se", badge: "hot" },
  { t: "maturiraj.hr" },
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

const QUOTES = [
  '"AI profesor mi je objasnio derivacije bolje nego profesor za 45 min." — Lucija, Zagreb',
  '"Discere arhiva starih zadataka je hit — vježbaš s pravim pitanjima." — Ana, Rijeka',
  '"Za MEF pripremu nema boljeg alata. Sve na jednom mjestu." — Mateo, Split',
  '"Upisala FER. Skripte i kalkulator su mi spasili živce." — Tena, Osijek',
  '"Bez Maturiraj.hr ne znam kako bih prošla kemiju." — Lara, Zagreb',
];

const OB_DATA = {
  hrvatski: {
    ic: "📝",
    name: "Hrvatski jezik",
    title: "Esej je tvoj najveći adut",
    tip: "Esej nosi najviše bodova — uvježbaj strukturu uvod/razrada/zaključak na starim temama. Za test čitanja fokusiraj se na ključne riječi u pitanjima, ne na cijeli tekst.",
  },
  "matematika-a": {
    ic: "📐",
    name: "Matematika A",
    title: "Obrasci se ponavljaju svake godine",
    tip: "Derivacije i integrali su uvijek tu. Kreni od osnovnih formula, pa idi na složene funkcije. Rješavaj stare ispite — obrasci se ponavljaju svake godine.",
  },
  "matematika-b": {
    ic: "🔢",
    name: "Matematika B",
    title: "Brzina je ključ",
    tip: "Najveći problem je brzina. Vježbaj rješavati pod vremenskim pritiskom — imaš 150 minuta za oko 30 zadataka. Trigonometrija i kvadratne jednadžbe su must.",
  },
  engleski: {
    ic: "🇬🇧",
    name: "Engleski jezik",
    title: "Slušanje se ne može naučiti za noć",
    tip: "Slušanje je gdje većina izgubi bodove jer ne vježba dovoljno. Svaki dan 15 minuta engleskog podcasta ili serije bez titlova — za 2 tjedna primijetit ćeš razliku.",
  },
  biologija: {
    ic: "🧬",
    name: "Biologija",
    title: "Ne uči sve podjednako",
    tip: "Genetika, stanična dioba i ekosustavi — ta tri poglavlja čine 60%+ ispita. Ne uči sve podjednako, pametno rasporedi.",
  },
  kemija: {
    ic: "⚗️",
    name: "Kemija",
    title: "Razumijevanje > pamćenje",
    tip: "Stehiometrija i organska kemija su ključni. Nauči pisati jednadžbe reakcija napamet — to štedi dragocjeno vrijeme na ispitu.",
  },
  fizika: {
    ic: "⚡",
    name: "Fizika",
    title: "Razumi formule, ne uči ih napamet",
    tip: "Bez razumijevanja formula nema ništa. Razumi ih, ne uči napamet. Kinematika, sile i elektrika su najčešće teme na ispitu.",
  },
  povijest: {
    ic: "🏛",
    name: "Povijest",
    title: "Uči ZAŠTO, ne KADA",
    tip: "Kronologija je zamka — maturanti uče datume, ali ispit traži uzroke i posljedice. Fokusiraj se na ZAŠTO, ne KADA.",
  },
  geografija: {
    ic: "🌍",
    name: "Geografija",
    title: "Karte su pola ispita",
    tip: "Jako puno pitanja vezano je uz karte i grafove koje moraš znati čitati. Vježbaj s atlasom, ne samo s udžbenikom.",
  },
  informatika: {
    ic: "💻",
    name: "Informatika",
    title: "Algoritmi su uvijek tu",
    tip: "Algoritmi i pseudokod su uvijek na ispitu. Ako ne programiraš svakodnevno, posveti zadnji tjedan isključivo algoritmima.",
  },
  psihologija: {
    ic: "🧠",
    name: "Psihologija",
    title: "Definicije + primjeri iz života",
    tip: "Puno pojmova, malo razumijevanja — to je najčešća greška. Uči definicije, ali znaj dati primjer iz stvarnog života za svaki pojam.",
  },
};

const PLANS = {
  free: {
    feats: [
      { ic: "📄", name: "Skripte", desc: "Svi predmeti državne mature — potpuno besplatno, bez registracije" },
      { ic: "📅", name: "Ispitni termini", desc: "Kalendar ljetnog i jesenskog roka 2026. s točnim datumima" },
      { ic: "📋", name: "Plan učenja", desc: "Osnovni tjedni plan pripreme za maturu" },
      { ic: "🔢", name: "Formule", desc: "Zbirka formula po predmetima — uvijek dostupno" },
      { ic: "✅", name: "Check lista", desc: "Prati što si savladao, što još trebaš ponoviti" },
    ],
    btn: "Počni besplatno →",
    btnCls: "free",
  },
  std: {
    feats: [
      { ic: "📄", name: "Sve iz Besplatnog", desc: "Skripte, termini, plan učenja, formule, check lista" },
      { ic: "🎯", name: "Discere — arhiva zadataka", desc: "Sve mature od 2010. do 2025. — svaki predmet, svaka razina" },
      { ic: "✅", name: "Riješeni odgovori", desc: "Svaki zadatak ima točan odgovor i detaljno objašnjenje" },
      { ic: "⚡", name: "XP i streak sustav", desc: "Zarađuj bodove, prati streak, napreduj po razinama" },
      { ic: "🎯", name: "Simulacija mature", desc: "Pravi uvjeti ispita — vremenski ograničeno, randomizirana pitanja" },
      { ic: "📊", name: "Statistike po temama", desc: "Vidi točno gdje si najslabiji i što trebaš ponoviti" },
    ],
    btn: "Odaberi Standard →",
    btnCls: "std",
  },
  pro: {
    feats: [
      { ic: "🎯", name: "Sve iz Standarda", desc: "Discere arhiva, simulacije, statistike, XP sustav" },
      { ic: "🤖", name: "AI Profesor", desc: "Postavi pitanje o gradivu — odgovara na hrvatskom, 24/7" },
      { ic: "📊", name: "Adaptivni plan učenja", desc: "Plan koji se prilagođava tvom napretku i slabim točkama" },
      { ic: "🏛", name: "Prijemni ispiti", desc: "MEF, FER, Pravni, Arhitektonski, Ekonomski, Stomatološki" },
      { ic: "🎯", name: "Bodovni kalkulator", desc: "Izračunaj koliko bodova trebaš za željeni studij" },
      { ic: "👨‍👩‍👧", name: "Roditeljski dashboard", desc: "Roditelji prate napredak učenika u realnom vremenu" },
    ],
    btn: "Odaberi Pro →",
    btnCls: "pro",
  },
};

function parseExamDate(item) {
  const [d, m, y] = item.datum.split(".");
  const [h, min] = item.vrijeme.split(":");
  return new Date(Number(y), Number(m) - 1, Number(d), Number(h), Number(min));
}

function getNextExam() {
  const now = new Date();
  for (const isp of ISPITI) {
    const dt = parseExamDate(isp);
    if (dt >= now) {
      const diff = Math.ceil((dt - now) / 86400000);
      return { ...isp, dt, diff };
    }
  }
  return null;
}

function getCountdownDays() {
  const diff = new Date("2026-06-01") - new Date();
  if (diff <= 0) return 0;
  return Math.floor(diff / 86400000);
}

function dateColor(days) {
  if (days > 60) return { color: "#3ecf6e", glow: "rgba(62,207,110,.6)", txt: "rgba(62,207,110,.22)" };
  if (days > 30) return { color: "#e9b446", glow: "rgba(233,180,70,.6)", txt: "rgba(233,180,70,.22)" };
  if (days > 14) return { color: "#f87171", glow: "rgba(248,113,113,.6)", txt: "rgba(248,113,113,.22)" };
  return { color: "#fc5c5c", glow: "rgba(252,92,92,.8)", txt: "rgba(252,92,92,.28)" };
}

export default function IntroScreen({ onFinish }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [eyebrowIndex, setEyebrowIndex] = useState(0);
  const [daysLeft, setDaysLeft] = useState(getCountdownDays());
  const [onlineNum, setOnlineNum] = useState(220);
  const [obOpen, setObOpen] = useState(false);
  const [obStep, setObStep] = useState(0);
  const [obSelected, setObSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState("free");
  const [exitToast, setExitToast] = useState(false);

  const sceneRef = useRef(null);
  const curDotRef = useRef(null);
  const spotlightRef = useRef(null);
  const btnMagRef = useRef(null);
  const btnRef = useRef(null);
  const btnTxtRef = useRef(null);
  const capWrapRef = useRef(null);
  const capInnerRef = useRef(null);
  const logoDotRef = useRef(null);
  const trailCanvasRef = useRef(null);
  const particlesCanvasRef = useRef(null);
  const confettiCanvasRef = useRef(null);

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
    const q = setInterval(() => setQuoteIndex((prev) => (prev + 1) % QUOTES.length), 5000);
    const e = setInterval(() => setEyebrowIndex((prev) => (prev + 1) % eyebrowMessages.length), 3000);
    const c = setInterval(() => setDaysLeft(getCountdownDays()), 60000);

    const hour = new Date().getHours();
    setOnlineNum(hour >= 8 && hour <= 23 ? 180 + Math.floor(Math.random() * 160) : 40 + Math.floor(Math.random() * 60));
    const o = setInterval(() => {
      setOnlineNum((prev) => Math.max(20, prev + (Math.random() > 0.5 ? 1 : -1) * (Math.random() > 0.85 ? 3 : 1)));
    }, 4500);

    const onMouseLeave = (ev) => {
      if (ev.clientY <= 10) {
        setExitToast(true);
        setTimeout(() => setExitToast(false), 6000);
      }
    };

    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      clearInterval(q);
      clearInterval(e);
      clearInterval(c);
      clearInterval(o);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [eyebrowMessages.length]);

  useEffect(() => {
    const curDot = curDotRef.current;
    const spotlight = spotlightRef.current;
    const btnMag = btnMagRef.current;
    const btn = btnRef.current;
    const btnTxt = btnTxtRef.current;
    const capWrap = capWrapRef.current;
    const capInner = capInnerRef.current;

    if (!curDot || !spotlight || !btnMag || !btn || !capWrap || !capInner) return;

    let lastMove = 0;
    let targetRX = 0;
    let targetRY = 0;
    let currentRX = 0;
    let currentRY = 0;
    let rafId = null;
    let animating = false;

    // Cache button rect — recalculate only on resize, not on every mousemove
    let btnRect = btnMag.getBoundingClientRect();
    const onResize = () => { btnRect = btnMag.getBoundingClientRect(); };
    window.addEventListener("resize", onResize, { passive: true });

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Use CSS variables for position — GPU composited, no layout reflow
      curDot.style.setProperty('--cx', `${x}px`);
      curDot.style.setProperty('--cy', `${y}px`);

      const now = Date.now();
      if (now - lastMove < 16) return;
      lastMove = now;

      spotlight.style.setProperty("--mx", `${x}px`);
      spotlight.style.setProperty("--my", `${y}px`);

      const nx = (x - window.innerWidth / 2) / (window.innerWidth / 2);
      const ny = (y - window.innerHeight / 2) / (window.innerHeight / 2);

      // Use cached rect — no forced layout reflow
      const cx = btnRect.left + btnRect.width / 2;
      const cy = btnRect.top + btnRect.height / 2;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 160) {
        const s = 1 - dist / 160;
        btnMag.style.transform = `translate(${dx * s * 0.38}px,${dy * s * 0.32}px)`;
        btn.classList.add("mag");
        curDot.classList.add("on-btn");
      } else {
        btnMag.style.transform = "translate(0,0)";
        btn.classList.remove("mag");
        curDot.classList.remove("on-btn");
      }

      targetRY = nx * 22;
      targetRX = -ny * 14;
      capWrap.style.transform = `translate(${nx * -8}px,${ny * -5}px)`;

      // Start rAF loop only when there's something to animate
      if (!animating) {
        animating = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onBtnEnter = () => {
      if (btnTxt) btnTxt.textContent = "Spreman si ✓";
      curDot.classList.add("on-btn");
    };

    const onBtnLeave = () => {
      if (btnTxt) btnTxt.textContent = "Počni učiti besplatno";
      curDot.classList.remove("on-btn");
    };

    const tick = () => {
      currentRX += (targetRX - currentRX) * 0.06;
      currentRY += (targetRY - currentRY) * 0.06;
      capInner.style.transform = `rotateX(${currentRX}deg) rotateY(${currentRY}deg)`;

      // Stop loop when values are stable (within 0.01deg threshold)
      if (Math.abs(targetRX - currentRX) < 0.01 && Math.abs(targetRY - currentRY) < 0.01) {
        animating = false;
        rafId = null;
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    btn.addEventListener("mouseenter", onBtnEnter);
    btn.addEventListener("mouseleave", onBtnLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      btn.removeEventListener("mouseenter", onBtnEnter);
      btn.removeEventListener("mouseleave", onBtnLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const dot = logoDotRef.current;
    if (!dot) return;

    let rafId;
    const timeout = setTimeout(() => {
      const rect = dot.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const cv = document.createElement("canvas");
      cv.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:9990";
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
      document.body.appendChild(cv);
      const ctx = cv.getContext("2d");

      const COLORS = ["#ff6b2b", "#f5c842", "#ffb347", "#fff", "#ff8c30", "#ffd580"];
      const pts = [];
      for (let i = 0; i < 22; i++) {
        const angle = (i / 22) * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1.5;
        pts.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: Math.random() * 2.5 + 1,
          life: 1,
          decay: Math.random() * 0.025 + 0.018,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }

      const draw = () => {
        ctx.clearRect(0, 0, cv.width, cv.height);
        let alive = false;
        for (const p of pts) {
          if (p.life <= 0) continue;
          alive = true;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.08;
          p.vx *= 0.97;
          p.life -= p.decay;
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        if (alive) rafId = requestAnimationFrame(draw);
        else cv.remove();
      };

      draw();
    }, 600);

    return () => {
      clearTimeout(timeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
    const canvas = confettiCanvasRef.current;
    if (!btn || !canvas) return;

    const ctx = canvas.getContext("2d");
    let W = 0;
    let H = 0;
    let particles = [];
    let animId = null;
    let active = false;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const COLORS = ["#ff6b2b", "#f5c842", "#ff8c30", "#fff", "#ffd580", "#ffb347"];

    const spawn = (x, y) => {
      for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI - Math.PI;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          r: Math.random() * 4 + 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          spin: (Math.random() - 0.5) * 0.3,
          angle: Math.random() * Math.PI * 2,
          shape: Math.random() > 0.5 ? "rect" : "circle",
          w: Math.random() * 6 + 3,
          h: Math.random() * 3 + 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles = particles.filter((p) => p.life > 0);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.vx *= 0.98;
        p.life -= p.decay;
        p.angle += p.spin;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        if (p.shape === "rect") ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      if (particles.length > 0) animId = requestAnimationFrame(draw);
      else {
        canvas.style.opacity = 0;
        active = false;
      }
    };

    const onEnter = () => {
      if (active) return;
      active = true;
      const rect = btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top;
      canvas.style.opacity = 1;
      spawn(x, y);
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(draw);
    };

    btn.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("resize", resize);
      btn.removeEventListener("mouseenter", onEnter);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  useEffect(() => {
    const trailCanvas = trailCanvasRef.current;
    const particlesCanvas = particlesCanvasRef.current;
    const capWrap = capWrapRef.current;
    const capInner = capInnerRef.current;

    if (!trailCanvas || !particlesCanvas) return;

    const tctx = trailCanvas.getContext("2d");
    const pctx = particlesCanvas.getContext("2d");

    let W = 0;
    let H = 0;
    let stars = [];
    let trailPts = [];
    const TRAIL_LEN = 16;
    const TRAIL_LIFE = 520;

    let lastPart = 0;
    let lastMove = 0;       // timestamp of last mousemove
    let hadTrail = false;   // track if trail needs clearing
    let tabVisible = true;
    let rafId = null;
    let idleTimeout = null;

    const resize = () => {
      W = trailCanvas.width = particlesCanvas.width = window.innerWidth;
      H = trailCanvas.height = particlesCanvas.height = window.innerHeight;

      stars = [];
      for (let i = 0; i < 60; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 0.55 + 0.1,
          o: Math.random() * 0.45 + 0.08,
          ph: Math.random() * Math.PI * 2,
          ps: Math.random() * 0.01 + 0.003,
          vx: 0,
          vy: 0,
          col: null,
        });
      }

      for (let i = 0; i < 10; i++) {
        const c = [
          "rgba(255,107,43,",
          "rgba(245,200,66,",
          "rgba(45,207,190,",
          "rgba(124,92,252,",
        ][i % 4];

        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 0.5 + 0.15,
          o: Math.random() * 0.18 + 0.04,
          ph: Math.random() * Math.PI * 2,
          ps: Math.random() * 0.006 + 0.002,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.04,
          col: c,
        });
      }
    };

    const onVisibility = () => {
      tabVisible = !document.hidden;
      // Restart loop when tab becomes visible again
      if (tabVisible && !rafId) {
        rafId = requestAnimationFrame(frame);
      }
    };

    const onMove = (e) => {
      const now = Date.now();
      // Throttle: max 1 point per 24ms (~40fps) to reduce trail array churn
      if (now - lastMove < 24) return;
      lastMove = now;
      trailPts.push({ x: e.clientX, y: e.clientY, t: now });
      if (trailPts.length > TRAIL_LEN) trailPts.shift();

      // Resume loop if it was paused due to idle
      if (!rafId) {
        rafId = requestAnimationFrame(frame);
      }
      // Reset idle timer — pause loop 3s after last movement
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        trailPts.length = 0;
      }, 3000);
    };

    const frame = (now) => {
      // Properly pause when tab hidden
      if (!tabVisible) {
        rafId = null;
        return;
      }

      const tNow = Date.now();

      // Only clear + draw trail when there are active points
      const hasTrail = trailPts.length > 1;
      if (hasTrail || hadTrail) {
        tctx.clearRect(0, 0, W, H);
        hadTrail = hasTrail;

        for (let i = trailPts.length - 1; i >= 0; i--) {
          if (tNow - trailPts[i].t >= TRAIL_LIFE) trailPts.splice(i, 1);
        }

        if (trailPts.length > 1) {
          for (let i = 1; i < trailPts.length; i++) {
            const frac = i / trailPts.length;
            const age = tNow - trailPts[i].t;
            const life = 1 - age / TRAIL_LIFE;
            const alpha = life * frac * 0.5;
            const r = 2.5 * life * frac;
            const hue = 22 + frac * 22;

            tctx.beginPath();
            tctx.moveTo(trailPts[i - 1].x, trailPts[i - 1].y);
            tctx.lineTo(trailPts[i].x, trailPts[i].y);
            tctx.strokeStyle = `hsla(${hue},100%,72%,${alpha * 0.6})`;
            tctx.lineWidth = r * 1.2;
            tctx.lineCap = "round";
            tctx.stroke();
          }
        }
      }

      if (now - lastPart > 32) {
        lastPart = now;
        pctx.clearRect(0, 0, W, H);

        for (const s of stars) {
          s.ph += s.ps;
          s.x += s.vx;
          s.y += s.vy;

          if (s.x < 0) s.x = W;
          if (s.x > W) s.x = 0;
          if (s.y < 0) s.y = H;
          if (s.y > H) s.y = 0;

          const tw = s.o * (0.6 + Math.sin(s.ph) * 0.4);

          pctx.beginPath();
          pctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          pctx.fillStyle = s.col ? `${s.col}${tw})` : `rgba(228,237,255,${tw})`;
          pctx.fill();
        }
      }

      rafId = requestAnimationFrame(frame);
    };

    let gyroAttached = false;

    const attachGyro = () => {
      if (gyroAttached) return;
      gyroAttached = true;

      const listen = () => {
        window.addEventListener(
          "deviceorientation",
          (e) => {
            if (!capWrap || !capInner) return;

            const tiltX = Math.max(-25, Math.min(25, e.gamma || 0));
            const tiltY = Math.max(-25, Math.min(25, (e.beta || 0) - 45));

            capWrap.style.transform = `translate(${tiltX * 0.5}px,${tiltY * 0.4}px)`;
            capInner.style.transform = `rotateX(${tiltY * 0.6}deg) rotateY(${tiltX * 0.6}deg)`;
          },
          { passive: true }
        );
      };

      if (
        typeof window !== "undefined" &&
        window.DeviceOrientationEvent &&
        typeof window.DeviceOrientationEvent.requestPermission === "function"
      ) {
        window.DeviceOrientationEvent.requestPermission()
          .then((state) => {
            if (state === "granted") listen();
          })
          .catch(() => {});
      } else {
        listen();
      }
    };

    const onTouchStart = () => {
      attachGyro();
      document.removeEventListener("touchstart", onTouchStart);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    if ("ontouchstart" in window) {
      document.addEventListener("touchstart", onTouchStart, {
        once: true,
        passive: true,
      });
    }

    rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("touchstart", onTouchStart);
      clearTimeout(idleTimeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const dc = dateColor(daysLeft);
  const scLbl =
    daysLeft > 60 ? "dana do mature" : daysLeft > 30 ? "⚡ brzo se spremi" : daysLeft > 14 ? "🔥 ostaje malo vremena" : "🚨 zadnji tren!";
  const urgencyText =
    daysLeft <= 14 ? "🚨 Zadnji tren!" : daysLeft <= 30 ? "🔥 Ostaje malo vremena" : "⚡ Brzo se spremi";

  const plan = PLANS[activePlan];
  const obData = obSelected ? OB_DATA[obSelected] : null;

  const openOB = () => {
    setObOpen(true);
    setObStep(0);
    setObSelected(null);
  };

  const closeOB = () => {
    setObOpen(false);
    setObStep(0);
    setObSelected(null);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const finishAndClose = () => {
    closeOB();
    closeModal();
    onFinish?.();
  };

  return (
    <>
      <div className="scene" id="scene" ref={sceneRef}>
        <div className="cur-dot" ref={curDotRef} />
        <canvas className="cv-trail" ref={trailCanvasRef} />
        <canvas className="cv-particles" ref={particlesCanvasRef} />
        <canvas className="confetti-canvas" ref={confettiCanvasRef} />

        <div className="aurora">
          <div className="au au1" />
          <div className="au au2" />
          <div className="au au3" />
        </div>

        <div className="cap-wrap" ref={capWrapRef}>
          <div className="cap-inner" ref={capInnerRef}>
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

        <div className="grain" />
        <div className="vignette" />
        <div className="bg-a" />
        <div className="bg-b" />
        <div className="bg-c" />
        <div className="spotlight" ref={spotlightRef} />

        <div className="hl hl-t" />
        <div className="hl hl-b" />
        <div className="vl vl-l" />
        <div className="vl vl-r" />
        <div className="co co-tl" />
        <div className="co co-tr" />
        <div className="co co-bl" />
        <div className="co co-br" />

        <div className="topbar" />

        <div className="side-count" style={{ "--dc": dc.color, "--dc-glow": dc.glow, "--dc-txt": dc.txt }}>
          <div className="sc-dot" />
          <div className="sc-num">{String(daysLeft).padStart(2, "0")}</div>
          <div className="sc-lbl" style={{ color: dc.txt }}>{scLbl}</div>
          <div className={`sc-urgency ${daysLeft <= 60 ? "show" : ""}`}>{urgencyText}</div>
        </div>

        <div className="free-badge">
          <div className="free-badge-dot" />
          Skripte i termini besplatno zauvijek
        </div>

        <div className="next-exam" style={{ display: nextExam ? "flex" : "none" }}>
          <div className="ne-label">Sljedeći ispit</div>
          <div className="ne-dot" />
          <div className="ne-date">{nextExam ? `${nextExam.dan}, ${nextExam.datum}` : "—"}</div>
          <div className="ne-subj">{nextExam ? nextExam.predmet : "—"}</div>
          <div className="ne-badge">🕘 {nextExam ? `${nextExam.vrijeme}h` : "uskoro"}</div>
        </div>

        <div className="center">
          <div className="logo">
            <div className="logo-mark">
              <div className="logo-dot" ref={logoDotRef} />
              <div className="logo-ring" />
              <div className="logo-burst">
                <div className="burst-ray" />
                <div className="burst-ray" />
                <div className="burst-ray" />
                <div className="burst-ray" />
                <div className="burst-ray" />
                <div className="burst-ray" />
                <div className="burst-ray" />
                <div className="burst-ray" />
              </div>
            </div>
            <span className="logo-name">maturiraj.hr</span>
          </div>

          <div className="eyebrow-wrap">
            <span className="eyebrow">{eyebrowMessages[eyebrowIndex]}</span>
          </div>

          <div className="headline">
            <span className="h-l1">
              Tvoj uspjeh počinje <span className="h-italic">ovdje.</span>
            </span>
          </div>

          <div className="div-line" />

          <div className="social-proof">
            <div className="sp-avatars">
              <div className="sp-av visible" style={{ "--c1": "#ff6b2b", "--c2": "#f5c842" }}>A</div>
              <div className="sp-av visible" style={{ "--c1": "#3ecf6e", "--c2": "#2dcfbe" }}>M</div>
              <div className="sp-av visible" style={{ "--c1": "#7c5cfc", "--c2": "#4b7bff" }}>T</div>
              <div className="sp-av visible" style={{ "--c1": "#f5c842", "--c2": "#ff8c30" }}>L</div>
            </div>
            <div className="sp-sep" />
            <div className="sp-stars">★★★★★</div>
            <div className="sp-text">
              <strong>1.200+</strong> maturanata se već priprema
            </div>
          </div>

          <div className="sp-quote-wrap">
            <span className="sp-quote">{QUOTES[quoteIndex]}</span>
          </div>

          <div className="cta-group">
            <div className="btn-mag" ref={btnMagRef}>
              <button className="btn-p" onClick={openOB} ref={btnRef}>
                <span className="btn-txt" ref={btnTxtRef}>Počni učiti besplatno</span>
                <span className="btn-arr">→</span>
              </button>
            </div>

            <button className="btn-g" onClick={onFinish}>
              Već imam račun? Prijavi se
            </button>

            <div className="btn-what-wrap">
              <div className="btn-tooltip">
                <div className="tt-item"><span>📄</span><span>Skripte</span></div>
                <div className="tt-sep" />
                <div className="tt-item"><span>🤖</span><span>AI Profesor</span></div>
                <div className="tt-sep" />
                <div className="tt-item"><span>🎯</span><span>Kalkulator</span></div>
              </div>
              <button className="btn-g" style={{ marginTop: 4, opacity: 0.6, fontSize: 12 }} onClick={openModal}>
                Što je uključeno? →
              </button>
            </div>
          </div>

          <div className="scroll-hint">
            <span className="scroll-hint-lbl visible">Saznaj više ↓</span>
            <div className="scroll-hint-line" />
          </div>
        </div>

        <div className="online-pill">
          <div className="online-dot" />
          <span className="online-txt">
            <span className="online-num">{onlineNum}</span> učenika online
          </span>
        </div>

        <div className={`exit-toast ${exitToast ? "show" : ""}`}>
          <span style={{ fontSize: 18 }}>🎓</span>
          <div className="exit-toast-text">
            Čekaj — <span>skripte su besplatne!</span> Bez registracije.
          </div>
          <button className="exit-toast-btn" onClick={onFinish}>Preuzmi →</button>
          <button className="exit-toast-close" onClick={() => setExitToast(false)}>✕</button>
        </div>

        <div className="ticker">
          <div className="ticker-track">
            {[...TICKER, ...TICKER].map((item, idx) => (
              <span className="ticker-item" key={`${item.t}-${idx}`}>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      item.t +
                      (item.badge === "hot" ? ' <span class="t-hot">HOT</span>' : "") +
                      (item.badge === "novo" ? ' <span class="t-new">NOVO</span>' : ""),
                  }}
                />
                <span className="ticker-sep" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {obOpen && (
        <div className="ob-overlay" onClick={(e) => e.target === e.currentTarget && closeOB()}>
          <div className="ob-box">
            <button className="ob-close" onClick={closeOB}>✕</button>

            {obStep === 0 && (
              <div className="ob-step">
                <div className="ob-label">Dobrodošao u Maturiraj</div>
                <div className="ob-title">Kako možemo pomoći?</div>
                <div className="ob-sub">Odaberi što te više zanima.</div>
                <div className="ob-choice">
                  <button className="ob-choice-btn" onClick={() => setObStep(1)}>
                    <div className="ob-choice-ic">🎯</div>
                    <div className="ob-choice-name">Personaliziraj</div>
                    <div className="ob-choice-desc">Dobij savjet za predmet koji te najviše brine</div>
                  </button>
                  <button className="ob-choice-btn" onClick={() => { closeOB(); openModal(); }}>
                    <div className="ob-choice-ic">📦</div>
                    <div className="ob-choice-name">Što dobivaš?</div>
                    <div className="ob-choice-desc">Vidi sve što Maturiraj nudi i odaberi plan</div>
                  </button>
                </div>
              </div>
            )}

            {obStep === 1 && (
              <div className="ob-step">
                <div className="ob-label">Personaliziraj iskustvo</div>
                <div className="ob-title">Koji predmet te najviše brine?</div>
                <div className="ob-sub">Dat ćemo ti konkretne savjete za tvoj ispit.</div>

                <div className="ob-grid">
                  {Object.entries(OB_DATA).map(([key, data]) => (
                    <button
                      key={key}
                      className={`ob-item ${obSelected === key ? "selected" : ""}`}
                      onClick={() => setObSelected(key)}
                    >
                      <div className="ob-item-ic">{data.ic}</div>
                      <div className="ob-item-name">{data.name}</div>
                    </button>
                  ))}
                </div>

                <button
                  className={`ob-next ${obSelected ? "ready" : ""}`}
                  onClick={() => obSelected && setObStep(2)}
                >
                  Vidi savjet →
                </button>
              </div>
            )}

            {obStep === 2 && obData && (
              <div className="ob-step">
                <div className="ob-label">Tvoj personalizirani savjet</div>
                <div className="ob-title">{obData.title}</div>
                <div className="ob-sub">Evo gdje većina maturanata griješi i kako to izbjeći.</div>
                <div className="ob-card">
                  <div className="ob-card-header">
                    <div className="ob-card-ic">{obData.ic}</div>
                    <div className="ob-card-subj">{obData.name}</div>
                  </div>
                  <div className="ob-card-tip">{obData.tip}</div>
                </div>
                <div className="ob-actions">
                  <button
                    className="ob-btn-main"
                    onClick={() => {
                      closeOB();
                      setTimeout(() => openModal(), 220);
                    }}
                  >
                    Pogledaj planove i počni →
                  </button>
                  <button className="ob-btn-sec" onClick={() => setObStep(1)}>
                    ← Odaberi drugi predmet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>✕</button>
            <div className="modal-title">Što dobivaš s Maturiraj.hr?</div>
            <div className="modal-sub">Odaberi plan koji odgovara tvom cilju.</div>

            <div className="plan-tabs">
              <button className={`plan-tab ${activePlan === "free" ? "active-free" : ""}`} onClick={() => setActivePlan("free")}>
                <span className="pt-name">Besplatno</span>
                <span className="pt-price">0 €</span>
              </button>
              <button className={`plan-tab ${activePlan === "std" ? "active-std" : ""}`} onClick={() => setActivePlan("std")}>
                <span className="pt-name">Standard</span>
                <span className="pt-price">9,99 €/mj</span>
              </button>
              <button className={`plan-tab ${activePlan === "pro" ? "active-pro" : ""}`} onClick={() => setActivePlan("pro")}>
                <span className="pt-name">Pro</span>
                <span className="pt-price">19,99 €/mj</span>
              </button>
            </div>

            <div className="feat-list">
              {plan.feats.map((f, idx) => (
                <div className="feat-row" key={idx}>
                  <div className="feat-ic">{f.ic}</div>
                  <div className="feat-body">
                    <div className="feat-name">{f.name}</div>
                    <div className="feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-cta">
              <button className={`modal-btn ${plan.btnCls}`} onClick={finishAndClose}>
                {plan.btn}
              </button>
              <div className="modal-discount">Uz godišnju pretplatu do 30% jeftinije</div>
              <button className="modal-login" onClick={onFinish}>
                Već imam račun? Prijavi se
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root{
          --ink:#07090f;
          --orange:#ff6b2b; --yellow:#f5c842; --teal:#2dcfbe; --green:#3ecf6e;
          --text:#e4edff; --ghost:rgba(228,237,255,.38); --muted:rgba(228,237,255,.2);
          --fh:'Fraunces',serif; --fb:'DM Sans',sans-serif;
        }

        html, body { cursor: none; }

        .scene {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--ink);
          color: var(--text);
          font-family: var(--fb);
          -webkit-font-smoothing: antialiased;
        }

        .cur-dot{
          position:fixed;left:0;top:0;z-index:9999;pointer-events:none;width:6px;height:6px;border-radius:50%;
          background:#fff;box-shadow:0 0 8px rgba(255,255,255,.5);
          transform:translate(var(--cx,0),var(--cy,0)) translate(-50%,-50%);
          transition:background .15s,box-shadow .15s,width .2s,height .2s;will-change:transform;
        }
        .cur-dot.on-btn{
          background:var(--orange);box-shadow:0 0 14px rgba(255,107,43,.8);
          transform:translate(var(--cx,0),var(--cy,0)) translate(-50%,-50%) scale(1.5);
        }

        .cv-trail{
          position:fixed;
          inset:0;
          pointer-events:none;
          z-index:9997;
        }

        .cv-particles{
          position:absolute;
          inset:0;
          pointer-events:none;
          z-index:1;
        }

        .confetti-canvas{position:fixed;inset:0;pointer-events:none;z-index:400;opacity:0;transition:opacity .1s}

        .cap-wrap{
          position:fixed;top:24%;right:5%;width:145px;z-index:55;pointer-events:none;
          perspective:600px;transform-style:preserve-3d;
          filter:drop-shadow(0 20px 50px rgba(255,107,43,.5)) drop-shadow(0 0 80px rgba(255,107,43,.2));
          animation:cap-throw 1.1s cubic-bezier(.16,1,.3,1) .1s both;
        }
        .cap-inner{
          width:100%;transform-style:preserve-3d;
          animation:cap-float3d 6s ease-in-out infinite 1.3s;
          transition:transform .15s ease-out;
        }
        @keyframes cap-throw{
          0%{opacity:0;transform:translateY(-140px) rotate3d(1,.3,0,60deg) scale(.7)}
          60%{transform:translateY(18px) rotate3d(1,.3,0,-8deg) scale(1.04)}
          80%{transform:translateY(-8px) rotate3d(1,.3,0,4deg) scale(.98)}
          100%{opacity:1;transform:translateY(0) rotate3d(0,0,0,0deg) scale(1)}
        }
        @keyframes cap-float3d{
          0%{transform:translateY(0) rotateX(0deg) rotateY(-4deg) rotateZ(-2deg)}
          25%{transform:translateY(-10px) rotateX(4deg) rotateY(2deg) rotateZ(-1deg)}
          50%{transform:translateY(-18px) rotateX(2deg) rotateY(6deg) rotateZ(1deg)}
          75%{transform:translateY(-8px) rotateX(-2deg) rotateY(0deg) rotateZ(-1deg)}
          100%{transform:translateY(0) rotateX(0deg) rotateY(-4deg) rotateZ(-2deg)}
        }

        .aurora{position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden}
        .au{position:absolute;border-radius:50%;filter:blur(60px)}
        .au1{width:110vw;height:35vh;top:4%;left:-8%;background:linear-gradient(90deg,transparent 0%,rgba(45,207,190,.045) 15%,rgba(255,107,43,.065) 42%,rgba(245,200,66,.055) 65%,rgba(124,92,252,.03) 85%,transparent 100%);animation:au1 18s ease-in-out infinite}
        .au2{width:90vw;height:28vh;bottom:8%;left:5%;background:linear-gradient(90deg,transparent 0%,rgba(245,200,66,.04) 25%,rgba(255,107,43,.055) 52%,rgba(45,207,190,.038) 78%,transparent 100%);animation:au2 23s ease-in-out infinite 5s}
        .au3{width:60vw;height:20vh;top:40%;left:20%;background:radial-gradient(ellipse,rgba(124,92,252,.025) 0%,transparent 70%);animation:au3 30s ease-in-out infinite 10s;filter:blur(80px)}
        @keyframes au1{0%,100%{transform:translateX(0) scaleY(1);opacity:.9}40%{transform:translateX(2.5%) scaleY(1.3);opacity:1}70%{transform:translateX(-2%) scaleY(.8);opacity:.65}}
        @keyframes au2{0%,100%{transform:translateX(0) scaleY(1);opacity:.75}45%{transform:translateX(-2.5%) scaleY(1.35);opacity:1}75%{transform:translateX(2%) scaleY(.75);opacity:.5}}
        @keyframes au3{0%,100%{transform:translateX(0) scaleX(1);opacity:.6}50%{transform:translateX(5%) scaleX(1.2);opacity:1}}

        .grain{
          position:absolute;inset:-50%;width:200%;height:200%;opacity:.025;pointer-events:none;z-index:50;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:200px 200px;animation:grain 3s steps(6) infinite
        }
        @keyframes grain{0%{transform:translate(0,0)}25%{transform:translate(-3%,-2%)}50%{transform:translate(2%,3%)}75%{transform:translate(-2%,2%)}}

        .bg-a{position:absolute;width:900px;height:900px;border-radius:50%;top:-300px;left:-200px;background:radial-gradient(circle,rgba(255,107,43,.06) 0%,transparent 65%);pointer-events:none;animation:fa 22s ease-in-out infinite}
        .bg-b{position:absolute;width:700px;height:700px;border-radius:50%;bottom:-200px;right:-150px;background:radial-gradient(circle,rgba(245,200,66,.05) 0%,transparent 65%);pointer-events:none;animation:fb 26s ease-in-out infinite}
        .bg-c{position:absolute;width:500px;height:500px;border-radius:50%;top:30%;left:55%;background:radial-gradient(circle,rgba(124,92,252,.028) 0%,transparent 65%);pointer-events:none;animation:fc 34s ease-in-out infinite 8s}
        @keyframes fa{0%,100%{transform:translate(0,0)}40%{transform:translate(50px,-35px)}70%{transform:translate(-25px,42px)}}
        @keyframes fb{0%,100%{transform:translate(0,0)}35%{transform:translate(-44px,28px)}65%{transform:translate(30px,-38px)}}
        @keyframes fc{0%,100%{transform:translate(0,0)}50%{transform:translate(-30px,20px)}}

        .vignette{
          position:absolute;inset:0;pointer-events:none;z-index:6;
          background:radial-gradient(ellipse 78% 78% at 50% 50%,transparent 35%,rgba(7,9,15,.45) 65%,rgba(7,9,15,.85) 88%,rgba(7,9,15,.97) 100%)
        }

        .spotlight{
          position:fixed;inset:0;pointer-events:none;z-index:2;
          background:radial-gradient(circle 500px at var(--mx,50%) var(--my,50%),rgba(255,107,43,.055) 0%,rgba(245,200,66,.015) 40%,transparent 70%)
        }

        .hl{position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(228,237,255,.055) 30%,rgba(228,237,255,.055) 70%,transparent);pointer-events:none}
        .hl-t{top:17%;animation:ln .7s ease 1.8s both}
        .hl-b{bottom:17%;animation:ln .7s ease 1.9s both}
        .vl{position:absolute;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,transparent,rgba(228,237,255,.048) 25%,rgba(228,237,255,.048) 75%,transparent);pointer-events:none}
        .vl-l{left:13%;animation:vln .7s ease 2.0s both}
        .vl-r{right:13%;animation:vln .7s ease 2.1s both}
        @keyframes ln{from{opacity:0;transform:scaleX(.2)}to{opacity:1;transform:scaleX(1)}}
        @keyframes vln{from{opacity:0;transform:scaleY(.2)}to{opacity:1;transform:scaleY(1)}}

        .co{position:absolute;width:18px;height:18px;pointer-events:none;opacity:0;animation:ci .4s ease both}
        .co::before,.co::after{content:'';position:absolute;background:rgba(255,107,43,.4)}
        .co::before{width:1px;height:100%;top:0;left:0}
        .co::after{width:100%;height:1px;top:0;left:0}
        .co-tl{top:28px;left:28px;animation-delay:2.1s}
        .co-tr{top:28px;right:28px;animation-delay:2.2s;transform:rotate(90deg)}
        .co-bl{bottom:28px;left:28px;animation-delay:2.3s;transform:rotate(-90deg)}
        .co-br{bottom:28px;right:28px;animation-delay:2.4s;transform:rotate(180deg)}
        @keyframes ci{from{opacity:0}to{opacity:1}}

        .center{
          position:relative;z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;
          text-align:center;padding:0 24px;max-width:860px;width:100%;margin:0 auto;
        }

        .logo{display:flex;align-items:center;gap:14px;margin-bottom:28px;animation:up .5s cubic-bezier(.16,1,.3,1) .1s both}
        .logo-mark{position:relative;width:10px;height:10px}
        .logo-dot{position:absolute;inset:0;border-radius:50%;background:var(--orange);box-shadow:0 0 14px rgba(255,107,43,.9);transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s}
        .logo:hover .logo-dot{transform:scale(1.4);box-shadow:0 0 22px rgba(255,107,43,1),0 0 40px rgba(255,107,43,.4)}
        .logo-ring{position:absolute;inset:-5px;border-radius:50%;border:1px solid rgba(255,107,43,.3);animation:rp 3s ease-in-out infinite}
        @keyframes rp{0%,100%{transform:scale(1);opacity:.7}50%{transform:scale(2);opacity:0}}
        .logo-name{
          font-family:'Playfair Display',var(--fh);font-size:58px;font-weight:900;letter-spacing:-.03em;line-height:1;
          background:linear-gradient(110deg,#ff6b2b 0%,#f5c842 40%,#ff8c30 65%,#f5c842 85%,#ff6b2b 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;background-size:300%;
          animation:hs 5s ease-in-out infinite 1s;opacity:.9;
        }
        .logo-burst{position:absolute;inset:-18px;pointer-events:none}
        .burst-ray{position:absolute;top:50%;left:50%;width:1px;height:10px;background:linear-gradient(to top,rgba(255,107,43,.7),transparent);transform-origin:bottom center;opacity:0;border-radius:1px}
        .logo:hover .burst-ray{animation:ray-out .4s cubic-bezier(.16,1,.3,1) both}
        .burst-ray:nth-child(1){transform:translateX(-50%) rotate(0deg) translateY(-100%);animation-delay:.00s}
        .burst-ray:nth-child(2){transform:translateX(-50%) rotate(45deg) translateY(-100%);animation-delay:.03s}
        .burst-ray:nth-child(3){transform:translateX(-50%) rotate(90deg) translateY(-100%);animation-delay:.06s}
        .burst-ray:nth-child(4){transform:translateX(-50%) rotate(135deg) translateY(-100%);animation-delay:.03s}
        .burst-ray:nth-child(5){transform:translateX(-50%) rotate(180deg) translateY(-100%);animation-delay:.00s}
        .burst-ray:nth-child(6){transform:translateX(-50%) rotate(225deg) translateY(-100%);animation-delay:.03s}
        .burst-ray:nth-child(7){transform:translateX(-50%) rotate(270deg) translateY(-100%);animation-delay:.06s}
        .burst-ray:nth-child(8){transform:translateX(-50%) rotate(315deg) translateY(-100%);animation-delay:.03s}
        @keyframes ray-out{0%{opacity:0;height:0}30%{opacity:1;height:10px}100%{opacity:0;height:14px}}

        .eyebrow-wrap{overflow:hidden;height:16px;margin-bottom:36px;animation:up .5s cubic-bezier(.16,1,.3,1) .35s both}
        .eyebrow{font-size:10px;font-weight:400;letter-spacing:.28em;text-transform:uppercase;color:rgba(255,107,43,.8);display:block}
        .headline{
          font-family:'Playfair Display',var(--fh);font-size:41px;font-weight:900;line-height:1;letter-spacing:-.03em;white-space:nowrap;text-align:center;
        }
        .h-l1{
          display:block;background:linear-gradient(110deg,#e4edff 0%,rgba(228,237,255,.9) 40%,rgba(255,200,140,.7) 75%,rgba(245,200,66,.5) 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:up .8s cubic-bezier(.16,1,.3,1) .55s both
        }
        .h-italic{
          font-style:italic;font-weight:700;background:linear-gradient(110deg,#fff 0%,rgba(255,200,100,.95) 30%,rgba(245,200,66,1) 55%,rgba(255,140,50,.95) 80%,#fff 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;background-size:300%;animation:hs 5s ease-in-out infinite 1.5s
        }
        @keyframes hs{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

        .div-line{width:1px;height:50px;background:linear-gradient(to bottom,transparent,rgba(228,237,255,.13),transparent);margin:10px auto;animation:dl .6s ease 1.1s both}
        @keyframes dl{from{height:0;opacity:0}to{height:50px;opacity:1}}

        .btn-what-wrap{position:relative;display:inline-block}
        .btn-tooltip{
          position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(6px);
          background:linear-gradient(135deg,#0e1220,#141828);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:10px 14px;
          display:flex;align-items:center;gap:10px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s ease,transform .2s cubic-bezier(.16,1,.3,1);z-index:50
        }
        .btn-tooltip::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid transparent;border-top-color:rgba(255,255,255,.08)}
        .btn-what-wrap:hover .btn-tooltip{opacity:1;transform:translateX(-50%) translateY(0)}
        .tt-item{display:flex;align-items:center;gap:5px;font-size:11px;color:rgba(228,237,255,.5)}
        .tt-item span:first-child{font-size:14px}
        .tt-sep{width:1px;height:16px;background:rgba(255,255,255,.08)}

        .free-badge{position:fixed;left:32px;top:28px;z-index:20;display:inline-flex;align-items:center;gap:6px;font-size:9px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;color:rgba(62,207,110,.5);animation:up .4s ease 2.4s both;pointer-events:none}
        .free-badge-dot{width:4px;height:4px;border-radius:50%;background:var(--green);box-shadow:0 0 5px rgba(62,207,110,.5);animation:db 2s ease-in-out infinite;flex-shrink:0}
        .sp-quote-wrap{overflow:hidden;height:14px;margin-top:6px;margin-bottom:12px}
        .sp-quote{font-size:11px;font-style:italic;color:rgba(228,237,255,.28);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:340px}

        .cta-group{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;animation:up .6s cubic-bezier(.16,1,.3,1) 1.35s both}
        .btn-mag{display:inline-block}
        .btn-p{
          position:relative;display:inline-flex;align-items:center;gap:14px;padding:19px 52px;border:none;border-radius:999px;
          background:linear-gradient(135deg,#ff6b2b 0%,#f5c842 100%);color:#1a0a00;font-family:var(--fb);font-size:15px;font-weight:700;letter-spacing:.05em;
          overflow:hidden;transition:box-shadow .3s cubic-bezier(.16,1,.3,1),transform .2s cubic-bezier(.16,1,.3,1);
          box-shadow:0 0 0 1px rgba(255,107,43,.28),0 8px 32px rgba(255,107,43,.25),0 2px 8px rgba(0,0,0,.4);cursor:none;
        }
        .btn-p::before{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.18) 50%,transparent 70%);background-size:300% 100%;animation:ss 3.5s ease-in-out infinite 2.8s}
        @keyframes ss{0%,100%{background-position:-200% center}60%{background-position:200% center}}
        .btn-p.mag{box-shadow:0 0 0 1px rgba(255,107,43,.5),0 22px 64px rgba(255,107,43,.5),0 4px 16px rgba(0,0,0,.4);transform:scale(1.02)}
        .btn-txt{position:relative;z-index:1;transition:letter-spacing .3s cubic-bezier(.16,1,.3,1)}
        .btn-p.mag .btn-txt{letter-spacing:.09em}
        .btn-arr{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:rgba(0,0,0,.15);font-size:12px;transition:transform .3s cubic-bezier(.16,1,.3,1),background .2s}
        .btn-p.mag .btn-arr{transform:translateX(6px)}
        .btn-g{background:none;border:none;color:rgba(228,237,255,.3);font-family:var(--fb);font-size:13px;font-weight:300;letter-spacing:.08em;cursor:none;padding:4px 0;position:relative;transition:color .25s;display:inline-flex;align-items:center;gap:8px}
        .btn-g::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:currentColor;opacity:.3;transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.16,1,.3,1),opacity .3s}
        .btn-g:hover{color:rgba(255,200,120,.7)}
        .btn-g:hover::after{transform:scaleX(1);opacity:.5}

        .social-proof{display:flex;align-items:center;gap:16px;margin-bottom:20px;animation:up .5s ease 1.6s both}
        .sp-avatars{display:flex;align-items:center}
        .sp-av{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,var(--c1,#ff6b2b),var(--c2,#f5c842));border:1.5px solid rgba(7,9,15,.8);margin-left:-6px;font-size:10px;display:flex;align-items:center;justify-content:center;opacity:1;transform:scale(1) translateY(0)}
        .sp-av:first-child{margin-left:0}
        .sp-text{font-size:11px;color:rgba(228,237,255,.35);letter-spacing:.04em}
        .sp-text strong{color:rgba(228,237,255,.65);font-weight:600}
        .sp-sep{width:1px;height:12px;background:rgba(228,237,255,.1)}
        .sp-stars{color:var(--yellow);font-size:10px;letter-spacing:1px}

        .online-pill{position:fixed;left:36px;bottom:48px;z-index:20;display:flex;align-items:center;gap:8px;animation:up .5s ease 2.3s both;pointer-events:none}
        .online-dot{width:5px;height:5px;border-radius:50%;background:#3ecf6e;box-shadow:0 0 7px rgba(62,207,110,.8);flex-shrink:0;animation:online-pulse 2.4s ease-in-out infinite}
        @keyframes online-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.5)}}
        .online-txt{font-size:11px;font-weight:300;color:rgba(228,237,255,.28);letter-spacing:.04em}
        .online-num{font-family:var(--fh);font-size:13px;font-weight:700;color:rgba(62,207,110,.7);letter-spacing:-.01em}

        .side-count{position:fixed;right:36px;bottom:48px;z-index:20;display:flex;flex-direction:column;gap:4px;animation:up .5s ease 2.3s both;pointer-events:none;align-items:flex-end}
        .sc-dot{width:5px;height:5px;border-radius:50%;background:var(--dc,#3ecf6e);box-shadow:0 0 7px var(--dc-glow,rgba(62,207,110,.6));animation:db 2s ease-in-out infinite;margin-bottom:8px;transition:background .8s,box-shadow .8s}
        @keyframes db{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(1.6)}}
        .sc-num{display:flex;gap:2px;align-items:center;font-family:var(--fh);font-size:28px;font-weight:900;color:var(--dc-txt,rgba(228,237,255,.18));letter-spacing:-.02em}
        .sc-lbl{font-size:9px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:rgba(228,237,255,.1)}
        .sc-urgency{font-size:8px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(248,113,113,0);transition:color .8s,opacity .8s;opacity:0;text-align:right;margin-top:2px}
        .sc-urgency.show{color:rgba(248,113,113,.6);opacity:1;animation:urgency-pulse 2.5s ease-in-out infinite}
        @keyframes urgency-pulse{0%,100%{opacity:.6}50%{opacity:1}}

        .next-exam{position:fixed;left:32px;top:50%;transform:translateY(-50%);z-index:20;pointer-events:none;animation:up .5s ease 2.6s both;display:flex;flex-direction:column;gap:6px;align-items:flex-start}
        .ne-label{font-size:9px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:rgba(228,237,255,.1)}
        .ne-dot{width:5px;height:5px;border-radius:50%;background:rgba(255,107,43,.7);box-shadow:0 0 7px rgba(255,107,43,.5);animation:db 2s ease-in-out infinite;margin-bottom:2px}
        .ne-date{font-family:var(--fh);font-size:18px;font-weight:900;color:rgba(255,107,43,.65);letter-spacing:-.02em;line-height:1}
        .ne-subj{font-size:9px;font-weight:400;letter-spacing:.1em;text-transform:uppercase;color:rgba(228,237,255,.18);line-height:1.5;margin-top:4px;max-width:140px}
        .ne-badge{display:inline-flex;align-items:center;gap:5px;margin-top:6px;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,107,43,.45)}

        .scroll-hint{display:flex;flex-direction:column;align-items:center;gap:8px;margin-top:16px;pointer-events:none;animation:up .5s ease 2.8s both}
        .scroll-hint-lbl{font-size:8px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,107,43,.4);white-space:nowrap}
        .scroll-hint-line{width:1px;height:24px;background:linear-gradient(to bottom,rgba(255,107,43,.4),transparent);border-radius:1px;animation:scroll-drop 2s cubic-bezier(.4,0,.6,1) infinite 3s}
        @keyframes scroll-drop{0%{transform:scaleY(0);transform-origin:top;opacity:0}30%{transform:scaleY(1);transform-origin:top;opacity:1}70%{transform:scaleY(1);transform-origin:bottom;opacity:1}100%{transform:scaleY(0);transform-origin:bottom;opacity:0}}

        .ticker{position:fixed;bottom:0;left:0;right:0;z-index:30;height:34px;overflow:hidden;border-top:1px solid rgba(228,237,255,.04);display:flex;align-items:center;animation:up .4s ease 2.5s both}
        .ticker-track{display:flex;animation:tick 32s linear infinite;white-space:nowrap}
        @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .ticker-item{display:inline-flex;align-items:center;gap:10px;padding:0 22px;font-size:10px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:rgba(228,237,255,.11)}
        .ticker-sep{width:3px;height:3px;border-radius:50%;background:rgba(255,107,43,.3);flex-shrink:0}
        .t-hot{font-size:8px;font-weight:700;letter-spacing:.1em;padding:1px 5px;border-radius:4px;background:rgba(255,107,43,.18);color:rgba(255,107,43,.8);border:1px solid rgba(255,107,43,.25);vertical-align:middle}
        .t-new{font-size:8px;font-weight:700;letter-spacing:.1em;padding:1px 5px;border-radius:4px;background:rgba(62,207,110,.12);color:rgba(62,207,110,.7);border:1px solid rgba(62,207,110,.2);vertical-align:middle}

        .topbar{position:fixed;top:0;left:0;right:0;z-index:20;display:flex;align-items:center;justify-content:flex-end;padding:24px 36px;animation:up .4s ease 2.4s both;pointer-events:none}
        @keyframes up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

        .exit-toast{position:fixed;top:20px;left:50%;transform:translateX(-50%) translateY(-120px);z-index:600;background:linear-gradient(135deg,#0e1220,#141828);border:1px solid rgba(255,107,43,.35);border-radius:14px;padding:14px 20px;display:flex;align-items:center;gap:14px;box-shadow:0 8px 40px rgba(0,0,0,.6);transition:transform .4s cubic-bezier(.16,1,.3,1),opacity .4s;opacity:0;pointer-events:none;white-space:nowrap}
        .exit-toast.show{transform:translateX(-50%) translateY(0);opacity:1;pointer-events:all}
        .exit-toast-text{font-size:13px;color:var(--text);font-weight:500}
        .exit-toast-text span{color:rgba(255,107,43,.9);font-weight:700}
        .exit-toast-btn{padding:7px 16px;border-radius:99px;border:none;background:linear-gradient(135deg,#ff6b2b,#f5c842);color:#1a0a00;font-family:var(--fb);font-size:12px;font-weight:700;cursor:pointer;flex-shrink:0;transition:transform .15s}
        .exit-toast-btn:hover{transform:scale(1.05)}
        .exit-toast-close{width:22px;height:22px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(228,237,255,.4);font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s}
        .exit-toast-close:hover{background:rgba(255,255,255,.1);color:var(--text)}

        .ob-overlay{position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(7,9,15,.88);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);animation:in .2s ease both}
        .ob-box{position:relative;width:100%;max-width:560px;background:linear-gradient(160deg,#0e1220 0%,#0a0d18 100%);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:36px;box-shadow:0 40px 120px rgba(0,0,0,.7)}
        .ob-close{position:absolute;top:16px;right:16px;width:30px;height:30px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(228,237,255,.4);font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s}
        .ob-close:hover{background:rgba(255,255,255,.1);color:var(--text)}
        .ob-step{display:block;animation:up .3s cubic-bezier(.16,1,.3,1) both}
        .ob-choice{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px}
        .ob-choice-btn{padding:20px 16px;border-radius:16px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.03);cursor:pointer;transition:all .2s;text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px;font-family:var(--fb)}
        .ob-choice-btn:hover{border-color:rgba(255,107,43,.4);background:rgba(255,107,43,.07);transform:translateY(-2px)}
        .ob-choice-ic{font-size:28px}
        .ob-choice-name{font-size:13px;font-weight:700;color:var(--text)}
        .ob-choice-desc{font-size:11px;color:rgba(228,237,255,.35);line-height:1.5}
        .ob-label{font-size:9px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,107,43,.7);margin-bottom:10px}
        .ob-title{font-family:'Playfair Display',var(--fh);font-size:22px;font-weight:900;letter-spacing:-.02em;margin-bottom:6px}
        .ob-sub{font-size:13px;color:rgba(228,237,255,.4);margin-bottom:24px;line-height:1.6}
        .ob-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px}
        .ob-item{padding:12px 10px;border-radius:12px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);cursor:pointer;transition:all .18s;text-align:center;display:flex;flex-direction:column;align-items:center;gap:5px}
        .ob-item:hover{border-color:rgba(255,107,43,.35);background:rgba(255,107,43,.06)}
        .ob-item.selected{border-color:rgba(255,107,43,.6);background:rgba(255,107,43,.1)}
        .ob-item-ic{font-size:20px}
        .ob-item-name{font-size:11px;font-weight:600;color:rgba(228,237,255,.7);line-height:1.3}
        .ob-next{width:100%;padding:14px;border-radius:999px;border:none;background:linear-gradient(135deg,#ff6b2b,#f5c842);color:#1a0a00;font-family:var(--fb);font-size:14px;font-weight:700;cursor:pointer;margin-top:16px;transition:all .2s;opacity:.4;pointer-events:none}
        .ob-next.ready{opacity:1;pointer-events:all}
        .ob-next.ready:hover{transform:scale(1.02);box-shadow:0 8px 32px rgba(255,107,43,.35)}
        .ob-card{background:rgba(255,107,43,.06);border:1px solid rgba(255,107,43,.18);border-radius:16px;padding:20px 22px;margin-bottom:20px}
        .ob-card-header{display:flex;align-items:center;gap:10px;margin-bottom:12px}
        .ob-card-ic{font-size:24px}
        .ob-card-subj{font-size:14px;font-weight:700;color:rgba(255,107,43,.9)}
        .ob-card-tip{font-size:13px;color:rgba(228,237,255,.6);line-height:1.7}
        .ob-actions{display:flex;flex-direction:column;gap:8px}
        .ob-btn-main{width:100%;padding:14px;border-radius:999px;border:none;background:linear-gradient(135deg,#ff6b2b,#f5c842);color:#1a0a00;font-family:var(--fb);font-size:14px;font-weight:700;cursor:pointer;transition:all .2s}
        .ob-btn-main:hover{transform:scale(1.02);box-shadow:0 8px 32px rgba(255,107,43,.3)}
        .ob-btn-sec{width:100%;padding:10px;border-radius:999px;border:1px solid rgba(255,255,255,.1);background:transparent;color:rgba(228,237,255,.4);font-family:var(--fb);font-size:12px;cursor:pointer;transition:all .15s}
        .ob-btn-sec:hover{border-color:rgba(255,255,255,.2);color:rgba(228,237,255,.7)}

        .modal-overlay{position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(7,9,15,.85);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);animation:in .2s ease both}
        .modal{position:relative;width:100%;max-width:720px;max-height:90vh;overflow-y:auto;background:linear-gradient(160deg,#0e1220 0%,#0a0d18 100%);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:36px;box-shadow:0 40px 120px rgba(0,0,0,.7),0 0 0 1px rgba(255,107,43,.08)}
        .modal::-webkit-scrollbar{width:3px}
        .modal::-webkit-scrollbar-thumb{background:rgba(255,107,43,.3);border-radius:99px}
        .modal-close{position:absolute;top:18px;right:18px;width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(228,237,255,.5);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;line-height:1}
        .modal-close:hover{background:rgba(255,255,255,.1);color:var(--text)}
        .modal-title{font-family:'Playfair Display',var(--fh);font-size:26px;font-weight:900;letter-spacing:-.02em;margin-bottom:6px}
        .modal-sub{font-size:13px;color:rgba(228,237,255,.4);margin-bottom:28px}
        .plan-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:28px;background:rgba(255,255,255,.04);border-radius:14px;padding:5px}
        .plan-tab{padding:9px 8px;border-radius:10px;border:1px solid transparent;cursor:pointer;font-family:var(--fb);font-size:12px;font-weight:600;color:rgba(228,237,255,.4);background:none;transition:all .18s;text-align:center;display:flex;flex-direction:column;gap:2px}
        .plan-tab span.pt-name{font-size:13px;font-weight:700}
        .plan-tab span.pt-price{font-size:11px;font-weight:400}
        .plan-tab.active-free{background:rgba(62,207,110,.1);border-color:rgba(62,207,110,.3);color:rgba(62,207,110,.9)}
        .plan-tab.active-std{background:rgba(255,107,43,.1);border-color:rgba(255,107,43,.35);color:rgba(255,150,80,.95)}
        .plan-tab.active-pro{background:rgba(75,123,255,.12);border-color:rgba(75,123,255,.35);color:rgba(100,150,255,.95)}

        .modal-btn.std{background:linear-gradient(135deg,#ff6b2b,#f5c842);color:#1a0a00;box-shadow:0 8px 32px rgba(255,107,43,.3)}
        .modal-btn.pro{background:linear-gradient(135deg,#2a4aff,#6b9bff);color:#fff;box-shadow:0 8px 32px rgba(75,123,255,.3)}
        .feat-list{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
        .feat-row{display:flex;align-items:flex-start;gap:12px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);transition:border-color .15s}
        .feat-row:hover{border-color:rgba(255,255,255,.1)}
        .feat-ic{font-size:20px;flex-shrink:0;width:32px;text-align:center}
        .feat-body{flex:1}
        .feat-name{font-size:13px;font-weight:600;color:var(--text);margin-bottom:2px}
        .feat-desc{font-size:11px;color:rgba(228,237,255,.38);line-height:1.5}
        .modal-cta{display:flex;flex-direction:column;align-items:center;gap:10px}
        .modal-btn{width:100%;max-width:340px;padding:16px 32px;border-radius:999px;border:none;font-family:var(--fb);font-size:15px;font-weight:700;letter-spacing:.04em;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:10px}
        .modal-btn.free{
          background:rgba(62,207,110,.15);
          border:1px solid rgba(62,207,110,.3);
          color:rgba(62,207,110,.9);
        } 

        .modal-btn.std{
          background:linear-gradient(135deg,#ff6b2b,#f5c842);
          color:#1a0a00;
          box-shadow:0 8px 32px rgba(255,107,43,.3);
        }

        .modal-btn.std:hover{
          box-shadow:0 12px 40px rgba(255,107,43,.45);
          transform:scale(1.02);
        }

        .modal-btn.pro{
          background:linear-gradient(135deg,#2a4aff,#6b9bff);
          color:#fff;
          box-shadow:0 8px 32px rgba(75,123,255,.3);
        }

        .modal-btn.pro:hover{
          box-shadow:0 12px 40px rgba(75,123,255,.45);
          transform:scale(1.02); 
        }

        .modal-discount{font-size:11px;color:rgba(228,237,255,.25);letter-spacing:.04em}
        .modal-login{font-size:12px;color:rgba(228,237,255,.3);margin-top:4px;cursor:pointer;background:none;border:none;font-family:var(--fb);transition:color .15s}
        .modal-login:hover{color:rgba(228,237,255,.6)}

        @media(max-width:860px){
          .cap-wrap{width:120px;right:3%;top:20%}
          .next-exam{display:none}
        }

        @media(max-width:600px){
          html, body { cursor: auto; }
          .cur-dot,.cv-trail{display:none}
          .co,.vl,.side-count,.next-exam,.hl{display:none}
          .cap-wrap{display:none}
          .vignette{background:radial-gradient(ellipse 100% 100% at 50% 50%,transparent 30%,rgba(7,9,15,.6) 70%,rgba(7,9,15,.95) 100%)}
          .center{padding:0 20px;max-width:100%;width:100%}
          .logo{margin-bottom:12px}
          .logo-name{font-size:clamp(32px,10vw,52px)!important}
          .logo-mark{width:8px;height:8px}
          .eyebrow-wrap{margin-bottom:10px}
          .eyebrow{font-size:9px;letter-spacing:.2em}
          .headline{white-space:normal;font-size:clamp(26px,8vw,40px)!important}
          .div-line{margin:10px auto!important;height:32px}
          .social-proof{flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:8px}
          .sp-text{font-size:10px}
          .sp-quote{font-size:10px;max-width:280px}
          .cta-group{gap:10px;width:100%}
          .btn-mag,.btn-p{width:100%;max-width:320px;justify-content:center}
          .btn-p{padding:16px 28px;font-size:14px;cursor:pointer}
          .btn-g{font-size:12px;cursor:pointer}
          .btn-what-wrap{width:100%;text-align:center}
          .btn-tooltip{display:none}
          .scroll-hint{margin-top:10px}
          .online-pill{left:16px;bottom:42px}
          .ticker{height:28px}
          .ticker-item{font-size:9px;padding:0 14px}
          .free-badge{left:16px;top:20px;font-size:8px}
          .exit-toast{width:calc(100% - 32px);white-space:normal;flex-wrap:wrap;top:12px}
          .exit-toast-text{font-size:12px}
          .ob-grid{grid-template-columns:repeat(2,1fr)}
          .ob-box{padding:24px 20px}
        }

        @media(max-width:480px){
          .ob-choice{grid-template-columns:1fr}
        }

        @media(prefers-reduced-motion:reduce){
          *{animation-duration:.01ms!important;transition-duration:.01ms!important}
        }
      `}</style>
    </>
  );
}