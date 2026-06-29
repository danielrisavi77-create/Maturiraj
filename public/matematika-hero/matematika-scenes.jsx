// matematika-scenes.jsx — 6 scenes for the maturiraj.hr Matematika hero video
// Story arc: panic → chaos → clarity → step-by-step → result → CTA
// Palette: deep navy bg + neon blue + neon purple + warm orange accent

const C = {
  bg: '#0a0a14',
  bgDeep: '#06060d',
  blue: '#5b8cff',
  purple: '#b57bff',
  orange: '#ff9a55',
  text: '#f4f3ff',
  dim: 'rgba(244,243,255,0.55)',
  faint: 'rgba(244,243,255,0.25)',
  red: '#ff6a7a',
  green: '#6be3b3',
  cardBg: 'rgba(255,255,255,0.04)',
  cardBorder: 'rgba(255,255,255,0.10)',
};

const FONT_DISPLAY = "'Space Grotesk', ui-sans-serif, system-ui, sans-serif";
const FONT_BODY = "'Inter', ui-sans-serif, system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace";
const FONT_MATH = "'STIX Two Math', 'Cambria Math', 'Times New Roman', serif";

// ─── Shared building blocks ───────────────────────────────────────────────

function AuroraBG({ intensity = 1, tintA = C.blue, tintB = C.purple }) {
  const t = useTime();
  const drift = Math.sin(t * 0.4) * 40;
  const drift2 = Math.cos(t * 0.3) * 60;
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        left: `calc(20% + ${drift}px)`,
        top: `calc(30% + ${drift2}px)`,
        width: 900, height: 900,
        transform: 'translate(-50%,-50%)',
        background: `radial-gradient(circle, ${tintA}44 0%, transparent 60%)`,
        filter: 'blur(40px)',
        opacity: intensity,
      }}/>
      <div style={{
        position: 'absolute',
        right: `calc(10% - ${drift}px)`,
        bottom: `calc(10% - ${drift2}px)`,
        width: 1000, height: 1000,
        transform: 'translate(50%,50%)',
        background: `radial-gradient(circle, ${tintB}40 0%, transparent 60%)`,
        filter: 'blur(40px)',
        opacity: intensity,
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${C.faint} 1px, transparent 1px),
                          linear-gradient(90deg, ${C.faint} 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        opacity: 0.08,
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
      }}/>
    </div>
  );
}

// ─── SCENE 1 (0–3s) — PANIC: a full problem with glitching symbols ────────

function Scene1_Panic() {
  const { localTime } = useSprite();
  const glitchIntensity = Easing.easeInQuad(clamp(localTime / 2.8, 0, 1));

  // Falling symbols rain
  const rain = Array.from({ length: 36 }).map((_, i) => {
    const seed = (i * 31) % 100;
    return {
      x: (seed * 19) % 1920,
      startY: -100 - (seed % 5) * 80,
      speed: 140 + (seed % 7) * 60,
      rot: (seed % 6 - 3) * 12,
      char: ['∫', 'π', '√', 'Δ', '∑', 'x²', '±', '÷', '∞', 'θ', 'sin', 'log', 'tan', 'cos', 'a²+b²', 'dx'][seed % 16],
      size: 26 + (seed % 5) * 10,
      color: (seed % 9 === 0) ? C.red : (seed % 7 === 0) ? C.purple : C.dim,
      delay: (seed % 10) * 0.08,
    };
  });

  return (
    <>
      <AuroraBG intensity={0.3} tintA={C.red} tintB={C.purple} />

      {/* Symbol rain */}
      {rain.map((r, i) => {
        const t = Math.max(0, localTime - r.delay);
        const y = r.startY + t * r.speed;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: r.x, top: y,
            fontFamily: FONT_MATH,
            fontSize: r.size,
            color: r.color,
            transform: `rotate(${r.rot}deg)`,
            opacity: 0.6,
            textShadow: r.color === C.red ? `0 0 12px ${C.red}` : 'none',
          }}>{r.char}</div>
        );
      })}

      {/* Mock matura exam page */}
      <div style={{
        position: 'absolute',
        left: 380, top: 140,
        width: 1160, height: 740,
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 24,
        padding: '54px 70px',
        boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 28,
        }}>
          <div style={{
            fontFamily: FONT_MONO, fontSize: 18,
            color: C.dim, letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}>
            Matura · Matematika A · Zadatak 14
          </div>
          <div style={{
            fontFamily: FONT_MONO, fontSize: 14,
            color: C.red, letterSpacing: '0.1em',
            padding: '6px 12px',
            border: `1px solid ${C.red}55`,
            borderRadius: 6,
            opacity: clamp((localTime - 0.3) / 0.3, 0, 1),
          }}>4 BODOVA</div>
        </div>

        <div style={{
          fontFamily: FONT_BODY, fontSize: 28,
          color: C.text, lineHeight: 1.5, marginBottom: 28,
          opacity: 1 - glitchIntensity * 0.3,
        }}>
          Riješi kvadratnu jednadžbu i odredi tjeme parabole:
        </div>

        <GlitchyEquation localTime={localTime} intensity={glitchIntensity} />

        <div style={{
          marginTop: 40,
          display: 'flex', gap: 14, flexWrap: 'wrap',
        }}>
          {['A) x = 2', 'B) x = ±3', 'C) x = 1, x = −4', 'D) Nema rješenja'].map((opt, i) => (
            <div key={i} style={{
              padding: '14px 22px',
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${C.cardBorder}`,
              borderRadius: 10,
              fontFamily: FONT_MATH, fontSize: 22,
              color: C.text,
              opacity: 1 - glitchIntensity * 0.4,
              filter: `blur(${glitchIntensity * 2}px)`,
            }}>{opt}</div>
          ))}
        </div>
      </div>

      <Sprite start={0.5} end={3.0}>
        <TextSprite
          text="Gledaš zadatak… i nemaš pojma?"
          x={960} y={970}
          align="center"
          size={60}
          weight={600}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </Sprite>
    </>
  );
}

function GlitchyEquation({ localTime, intensity }) {
  // Render: 2x² − 3x − 5 = 0 with each token wobbling
  const tokens = [
    { t: '2', kind: 'num' },
    { t: 'x', kind: 'var' },
    { t: '²', kind: 'sup' },
    { t: ' − ', kind: 'op' },
    { t: '3', kind: 'num' },
    { t: 'x', kind: 'var' },
    { t: ' − ', kind: 'op' },
    { t: '5', kind: 'num' },
    { t: ' = ', kind: 'op' },
    { t: '0', kind: 'num' },
  ];
  return (
    <div style={{
      padding: '40px 50px',
      background: 'rgba(255,106,122,0.06)',
      border: `1px dashed ${C.red}55`,
      borderRadius: 16,
      textAlign: 'center',
      fontFamily: FONT_MATH,
      fontSize: 96,
      color: C.text,
      letterSpacing: '0.01em',
      filter: `blur(${intensity * 3}px)`,
    }}>
      {tokens.map((tok, i) => {
        const seed = (i * 17) % 97;
        const wobbleX = Math.sin((localTime + seed) * 6) * intensity * 6;
        const wobbleY = Math.cos((localTime + seed) * 5) * intensity * 8;
        const rot = Math.sin((localTime + seed) * 4) * intensity * 5;
        const color = intensity > 0.5 && (seed % 4 === 0) ? C.red
          : intensity > 0.6 && (seed % 5 === 0) ? C.purple
          : C.text;
        return (
          <span key={i} style={{
            display: 'inline-block',
            transform: `translate(${wobbleX}px, ${wobbleY}px) rotate(${rot}deg)`,
            color,
            fontSize: tok.kind === 'sup' ? 64 : 96,
            verticalAlign: tok.kind === 'sup' ? 'super' : 'baseline',
            lineHeight: 1,
          }}>{tok.t}</span>
        );
      })}
    </div>
  );
}

// ─── SCENE 2 (3–6s) — CHAOS: formulas pile up, timer ticks, X marks ──────

function Scene2_Chaos() {
  const { localTime } = useSprite();

  const seconds = Math.max(3, Math.floor(38 - localTime * 11));
  const timerText = `0:${String(seconds).padStart(2, '0')}`;

  // Floating formulas that stack up chaotically
  const formulas = [
    { t: 'x = (−b ± √(b²−4ac)) / 2a', at: 0.1, x: 120, y: 180, rot: -4, color: C.blue },
    { t: 'sin²θ + cos²θ = 1', at: 0.3, x: 1100, y: 150, rot: 6, color: C.purple },
    { t: 'log_a(xy) = log_a x + log_a y', at: 0.5, x: 260, y: 520, rot: 3, color: C.text },
    { t: 'd/dx [ xⁿ ] = n·xⁿ⁻¹', at: 0.7, x: 1200, y: 460, rot: -5, color: C.orange },
    { t: 'a² + b² = c²', at: 0.9, x: 680, y: 380, rot: 2, color: C.red },
    { t: '∫ xⁿ dx = xⁿ⁺¹ / (n+1)', at: 1.1, x: 140, y: 760, rot: 1, color: C.purple },
    { t: 'f(x) = ax² + bx + c', at: 1.3, x: 1150, y: 760, rot: -2, color: C.blue },
  ];

  const wrongAnswers = [
    { t: 'x = 4', at: 1.0, x: 540, y: 260 },
    { t: 'x = −2, 7', at: 1.4, x: 900, y: 620 },
    { t: 'x = ?', at: 1.8, x: 360, y: 330 },
  ];

  return (
    <>
      <AuroraBG intensity={0.5} tintA={C.red} tintB={C.purple} />

      {/* Stack of formulas */}
      {formulas.map((f, i) => {
        const lt = clamp((localTime - f.at) / 0.4, 0, 1);
        const drift = Math.sin(localTime * 1.5 + i) * 4;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: f.x, top: f.y + drift,
            fontFamily: FONT_MATH,
            fontSize: 44 + (i % 3) * 8,
            color: f.color,
            opacity: lt * 0.72,
            transform: `rotate(${f.rot}deg) scale(${0.7 + 0.3 * Easing.easeOutBack(lt)})`,
            textShadow: `0 0 24px ${f.color}55`,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}>{f.t}</div>
        );
      })}

      {/* Wrong answers with Xs */}
      {wrongAnswers.map((w, i) => {
        const lt = clamp((localTime - w.at) / 0.3, 0, 1);
        const xScale = Easing.easeOutBack(clamp((localTime - w.at - 0.2) / 0.3, 0, 1));
        return (
          <div key={i} style={{
            position: 'absolute',
            left: w.x, top: w.y,
            padding: '12px 22px',
            background: 'rgba(255,106,122,0.14)',
            border: `1.5px solid ${C.red}`,
            borderRadius: 12,
            fontFamily: FONT_MATH,
            fontSize: 38,
            color: C.red,
            opacity: lt,
            transform: `scale(${Easing.easeOutBack(lt)})`,
            boxShadow: `0 0 30px ${C.red}55`,
          }}>
            {w.t}
            <span style={{
              position: 'absolute',
              right: -18, top: -18,
              width: 36, height: 36,
              borderRadius: 18,
              background: C.red,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: `scale(${xScale})`,
              boxShadow: `0 0 20px ${C.red}`,
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M5 5 L15 15 M15 5 L5 15" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
        );
      })}

      {/* Timer pill — top center */}
      <div style={{
        position: 'absolute', left: '50%', top: 70,
        transform: 'translateX(-50%)',
        padding: '16px 32px',
        background: 'rgba(255,106,122,0.12)',
        border: `1.5px solid ${C.red}`,
        borderRadius: 999,
        display: 'flex', alignItems: 'center', gap: 14,
        fontFamily: FONT_MONO,
        color: C.red,
        fontSize: 32,
        letterSpacing: '0.08em',
        boxShadow: seconds < 10 ? `0 0 50px ${C.red}bb` : `0 0 25px ${C.red}55`,
      }}>
        <div style={{
          width: 12, height: 12, borderRadius: 6,
          background: C.red,
          opacity: Math.sin(localTime * 10) > 0 ? 1 : 0.2,
        }}/>
        {timerText}
      </div>

      <Sprite start={3.3} end={6.0}>
        <TextSprite
          text="Previše formula. Premalo smisla."
          x={960} y={940}
          align="center"
          size={64}
          weight={600}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </Sprite>
    </>
  );
}

// ─── SCENE 3 (6–10s) — CLARITY: the quadratic, decomposed ────────────────

function Scene3_Clarity() {
  const { localTime } = useSprite();

  // Title in, then the big formula y = ax² + bx + c assembles,
  // then labels a, b, c drop in.
  const formulaT = clamp(localTime / 0.9, 0, 1);
  const labelsT = clamp((localTime - 1.2) / 0.8, 0, 1);

  const formulaParts = [
    { t: 'y', color: C.text, w: 80 },
    { t: '=', color: C.dim, w: 80 },
    { t: 'a', color: C.blue, w: 70 },
    { t: 'x²', color: C.text, w: 90 },
    { t: '+', color: C.dim, w: 70 },
    { t: 'b', color: C.purple, w: 70 },
    { t: 'x', color: C.text, w: 60 },
    { t: '+', color: C.dim, w: 70 },
    { t: 'c', color: C.orange, w: 60 },
  ];

  return (
    <>
      <AuroraBG intensity={0.75} />

      {/* Eyebrow */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 200,
        transform: 'translateX(-50%)',
        fontFamily: FONT_MONO, fontSize: 22,
        color: C.blue, letterSpacing: '0.22em',
        textTransform: 'uppercase',
        opacity: clamp(localTime / 0.4, 0, 1),
      }}>
        <span style={{ opacity: 0.5, marginRight: 14 }}>—</span>
        Sad zamisli ovo
      </div>

      {/* The big formula */}
      <div style={{
        position: 'absolute',
        left: 0, right: 0, top: 340,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        gap: 12,
        fontFamily: FONT_MATH,
        fontSize: 220,
        lineHeight: 1,
        letterSpacing: '-0.01em',
      }}>
        {formulaParts.map((p, i) => {
          const partAt = i * 0.08;
          const lt = clamp((localTime - partAt) / 0.35, 0, 1);
          const eased = Easing.easeOutBack(lt);
          return (
            <span key={i} style={{
              display: 'inline-block',
              color: p.color,
              opacity: lt,
              transform: `translateY(${(1 - eased) * 40}px) scale(${0.5 + 0.5 * eased})`,
              textShadow: (p.color === C.blue || p.color === C.purple || p.color === C.orange)
                ? `0 0 60px ${p.color}77` : 'none',
              minWidth: p.w,
              textAlign: 'center',
            }}>{p.t}</span>
          );
        })}
      </div>

      {/* Coefficient labels a, b, c dropping in with arrows */}
      <CoefLabels t={labelsT} />

      <Sprite start={6.6} end={10.0}>
        <TextSprite
          text="Kvadratna funkcija — jedan obrazac."
          x={960} y={920}
          align="center"
          size={52}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </Sprite>
    </>
  );
}

function CoefLabels({ t }) {
  // Three callout boxes below the formula pointing to a, b, c
  const labels = [
    { k: 'a', color: C.blue, desc: 'oblik parabole', x: 690, at: 0 },
    { k: 'b', color: C.purple, desc: 'pomak po x-osi', x: 960, at: 0.15 },
    { k: 'c', color: C.orange, desc: 'sjecište s y-osi', x: 1230, at: 0.3 },
  ];
  return (
    <>
      {labels.map((l, i) => {
        const lt = clamp((t - l.at) / 0.4, 0, 1);
        const eased = Easing.easeOutCubic(lt);
        return (
          <div key={i} style={{
            position: 'absolute',
            left: l.x, top: 620,
            transform: `translate(-50%, ${(1 - eased) * 20}px)`,
            opacity: lt,
            textAlign: 'center',
          }}>
            {/* dotted arrow up toward formula */}
            <svg width="2" height="80" style={{ display: 'block', margin: '0 auto 14px' }}>
              <line x1="1" y1="0" x2="1" y2="80" stroke={l.color} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6"/>
            </svg>
            <div style={{
              padding: '16px 26px',
              background: `${l.color}12`,
              border: `1.5px solid ${l.color}`,
              borderRadius: 14,
              minWidth: 220,
              boxShadow: `0 14px 40px ${l.color}33`,
            }}>
              <div style={{
                fontFamily: FONT_MATH, fontSize: 38,
                color: l.color, fontWeight: 600,
                lineHeight: 1,
              }}>{l.k}</div>
              <div style={{
                fontFamily: FONT_BODY, fontSize: 18,
                color: C.dim, marginTop: 6,
              }}>{l.desc}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

// ─── SCENE 4 (10–15s) — UNDERSTANDING: steps + graph draws ───────────────

function Scene4_Steps() {
  const { localTime } = useSprite();

  const steps = [
    { n: 1, label: 'Prepoznaj koeficijente', detail: 'a = 1, b = −2, c = −3', at: 0.0 },
    { n: 2, label: 'Izračunaj diskriminantu', detail: 'D = b² − 4ac = 16', at: 0.8 },
    { n: 3, label: 'Riješi po x', detail: 'x₁ = 3, x₂ = −1', at: 1.6 },
    { n: 4, label: 'Skiciraj graf', detail: 'tjeme: (1, −4)', at: 2.4 },
  ];

  return (
    <>
      <AuroraBG intensity={0.85} />

      {/* LEFT: steps */}
      <div style={{
        position: 'absolute',
        left: 120, top: 200,
        width: 800,
      }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 18,
          color: C.blue, letterSpacing: '0.2em',
          textTransform: 'uppercase', marginBottom: 28,
        }}>
          <span style={{ opacity: 0.5, marginRight: 12 }}>—</span>Postupak
        </div>

        {steps.map((s, i) => (
          <StepRow key={i} step={s} localTime={localTime} />
        ))}
      </div>

      {/* RIGHT: parabola graph that draws itself */}
      <ParabolaGraph localTime={localTime} />

      <Sprite start={10.3} end={15.0}>
        <TextSprite
          text="Korak po korak. Bez nagađanja."
          x={960} y={960}
          align="center"
          size={52}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.5}
          exitDur={0.3}
        />
      </Sprite>
    </>
  );
}

function StepRow({ step, localTime }) {
  const lt = clamp((localTime - step.at) / 0.5, 0, 1);
  const checkLT = clamp((localTime - step.at - 0.5) / 0.35, 0, 1);
  const eased = Easing.easeOutCubic(lt);

  return (
    <div style={{
      marginBottom: 22,
      display: 'flex', alignItems: 'center', gap: 20,
      opacity: lt,
      transform: `translateX(${(1 - eased) * -30}px)`,
    }}>
      {/* Number circle w/ checkmark */}
      <div style={{
        width: 56, height: 56, borderRadius: 28,
        background: checkLT > 0.5 ? C.blue : 'rgba(255,255,255,0.04)',
        border: `1.5px solid ${checkLT > 0.5 ? C.blue : C.cardBorder}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 600,
        color: checkLT > 0.5 ? C.bg : C.text,
        boxShadow: checkLT > 0.5 ? `0 0 28px ${C.blue}88` : 'none',
        flexShrink: 0,
        transition: 'all 0.2s',
      }}>
        {checkLT > 0.7 ? (
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M5 12 L10 17 L19 7" stroke={C.bg} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : step.n}
      </div>

      <div style={{
        flex: 1,
        padding: '18px 24px',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${checkLT > 0.5 ? `${C.blue}55` : C.cardBorder}`,
        borderRadius: 14,
        transition: 'border-color 0.3s',
      }}>
        <div style={{
          fontFamily: FONT_BODY, fontSize: 22,
          color: C.text, fontWeight: 500,
        }}>{step.label}</div>
        <div style={{
          fontFamily: FONT_MATH, fontSize: 24,
          color: checkLT > 0.3 ? C.blue : C.dim,
          marginTop: 4,
          transition: 'color 0.3s',
        }}>{step.detail}</div>
      </div>
    </div>
  );
}

function ParabolaGraph({ localTime }) {
  // x in [-3, 5], y = x² - 2x - 3, in user units
  // map to pixels on an 800x800 canvas
  const size = 780;
  const minX = -3, maxX = 5;
  const minY = -5, maxY = 9;
  const toSX = (x) => ((x - minX) / (maxX - minX)) * size;
  const toSY = (y) => size - ((y - minY) / (maxY - minY)) * size;

  // Drawing progress — starts at ~t=0.4, over 1.5s
  const drawT = Easing.easeInOutCubic(clamp((localTime - 0.4) / 1.8, 0, 1));

  // Build path points
  const pts = [];
  const steps = 80;
  for (let i = 0; i <= steps * drawT; i++) {
    const x = minX + (maxX - minX) * (i / steps);
    const y = x * x - 2 * x - 3;
    pts.push(`${toSX(x).toFixed(1)},${toSY(y).toFixed(1)}`);
  }
  const pathD = pts.length ? `M ${pts[0]} L ${pts.slice(1).join(' L ')}` : '';

  // Roots x = -1, 3
  const root1T = clamp((localTime - 2.0) / 0.3, 0, 1);
  const root2T = clamp((localTime - 2.2) / 0.3, 0, 1);
  // Vertex (1, -4)
  const vertexT = clamp((localTime - 2.8) / 0.4, 0, 1);

  return (
    <div style={{
      position: 'absolute',
      right: 100, top: 160,
      width: size + 40, height: size + 40,
      padding: 20,
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${C.cardBorder}`,
      borderRadius: 24,
      boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
    }}>
      <svg width={size} height={size} style={{ display: 'block' }}>
        {/* Grid */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`vg${i}`}
            x1={(i / 8) * size} y1="0"
            x2={(i / 8) * size} y2={size}
            stroke={C.cardBorder} strokeWidth="1"/>
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`hg${i}`}
            x1="0" y1={(i / 8) * size}
            x2={size} y2={(i / 8) * size}
            stroke={C.cardBorder} strokeWidth="1"/>
        ))}

        {/* Axes */}
        <line x1={toSX(0)} y1="0" x2={toSX(0)} y2={size} stroke={C.dim} strokeWidth="2"/>
        <line x1="0" y1={toSY(0)} x2={size} y2={toSY(0)} stroke={C.dim} strokeWidth="2"/>

        {/* Axis labels */}
        <text x={size - 20} y={toSY(0) - 12} fill={C.dim} fontFamily={FONT_MATH} fontSize="22">x</text>
        <text x={toSX(0) + 12} y={20} fill={C.dim} fontFamily={FONT_MATH} fontSize="22">y</text>

        {/* Parabola */}
        <path d={pathD}
          stroke={C.blue}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: `drop-shadow(0 0 12px ${C.blue}99)` }}/>

        {/* Root 1 (-1, 0) */}
        {root1T > 0 && (
          <g transform={`translate(${toSX(-1)}, ${toSY(0)})`}>
            <circle r={12 * root1T} fill={C.orange} opacity="0.3"/>
            <circle r={7 * Easing.easeOutBack(root1T)} fill={C.orange}
              style={{ filter: `drop-shadow(0 0 10px ${C.orange})` }}/>
            <text y="-18" fill={C.orange} fontFamily={FONT_MATH} fontSize="22"
              textAnchor="middle" opacity={root1T}>x₁ = −1</text>
          </g>
        )}

        {/* Root 2 (3, 0) */}
        {root2T > 0 && (
          <g transform={`translate(${toSX(3)}, ${toSY(0)})`}>
            <circle r={12 * root2T} fill={C.orange} opacity="0.3"/>
            <circle r={7 * Easing.easeOutBack(root2T)} fill={C.orange}
              style={{ filter: `drop-shadow(0 0 10px ${C.orange})` }}/>
            <text y="-18" fill={C.orange} fontFamily={FONT_MATH} fontSize="22"
              textAnchor="middle" opacity={root2T}>x₂ = 3</text>
          </g>
        )}

        {/* Vertex (1, -4) */}
        {vertexT > 0 && (
          <g transform={`translate(${toSX(1)}, ${toSY(-4)})`}>
            <circle r={16 * vertexT} fill={C.purple} opacity="0.25"/>
            <circle r={9 * Easing.easeOutBack(vertexT)} fill={C.purple}
              style={{ filter: `drop-shadow(0 0 14px ${C.purple})` }}/>
            <text y="32" fill={C.purple} fontFamily={FONT_MATH} fontSize="22"
              textAnchor="middle" opacity={vertexT}>V(1, −4)</text>
          </g>
        )}
      </svg>
    </div>
  );
}

// ─── SCENE 5 (15–20s) — RESULT: big score + dashboard ────────────────────

function Scene5_Result() {
  const { localTime } = useSprite();

  const countT = Easing.easeOutCubic(clamp(localTime / 1.4, 0, 1));
  const score = Math.round(countT * 92);

  return (
    <>
      <AuroraBG intensity={1.0} />

      {/* confetti */}
      {Array.from({ length: 22 }).map((_, i) => {
        const seed = (i * 37) % 100;
        const delay = (seed / 100) * 0.9;
        const t = clamp(localTime - delay, 0, 10);
        const fall = t * 90;
        const sway = Math.sin(t * 2 + seed) * 30;
        const color = i % 3 === 0 ? C.orange : i % 2 === 0 ? C.blue : C.purple;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${8 + seed * 0.82}%`,
            top: -20 + fall + (seed % 40),
            width: 8, height: 8,
            borderRadius: 4,
            background: color,
            transform: `translateX(${sway}px) rotate(${t * 180}deg)`,
            opacity: t > 0 ? 0.8 - t * 0.1 : 0,
            boxShadow: `0 0 8px ${color}`,
          }}/>
        );
      })}

      {/* Main score card */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -52%)',
        width: 900,
        padding: '60px 70px',
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 32,
        boxShadow: `0 40px 120px ${C.blue}55`,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 16,
          color: C.blue, letterSpacing: '0.2em',
          textTransform: 'uppercase', marginBottom: 20,
        }}>Rezultat · Matura simulacija</div>

        <div style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 260,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          background: `linear-gradient(180deg, ${C.blue} 0%, ${C.purple} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 4,
        }}>
          {score}<span style={{ fontSize: 120 }}>%</span>
        </div>

        <div style={{
          fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 500,
          color: C.text, letterSpacing: '-0.01em',
          opacity: clamp((localTime - 1.3) / 0.4, 0, 1),
        }}>A razina · Ocjena <span style={{ color: C.orange }}>5</span></div>

        {/* Topic bars */}
        <div style={{
          display: 'flex', gap: 14, justifyContent: 'center',
          marginTop: 34,
          opacity: clamp((localTime - 1.6) / 0.5, 0, 1),
        }}>
          {[
            { l: 'Algebra', v: 95 },
            { l: 'Funkcije', v: 92 },
            { l: 'Geometrija', v: 89 },
            { l: 'Analiza', v: 91 },
          ].map((m, i) => {
            const barLT = clamp((localTime - 1.8 - i * 0.1) / 0.6, 0, 1);
            return (
              <div key={i} style={{
                padding: '14px 20px',
                background: 'rgba(91,140,255,0.1)',
                border: `1px solid ${C.blue}44`,
                borderRadius: 12,
                fontFamily: FONT_MONO, fontSize: 14,
                color: C.text,
                minWidth: 140,
              }}>
                <div style={{ opacity: 0.6, fontSize: 11, letterSpacing: '0.1em' }}>{m.l.toUpperCase()}</div>
                <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4 }}>
                  {Math.round(m.v * barLT)}%
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2, marginTop: 6, overflow: 'hidden' }}>
                  <div style={{
                    width: `${m.v * barLT}%`, height: '100%',
                    background: `linear-gradient(90deg, ${C.blue}, ${C.purple})`,
                  }}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Sprite start={15.3} end={20.0}>
        <TextSprite
          text="Matematika koju razumiješ."
          x={960} y={990}
          align="center"
          size={60}
          weight={500}
          font={FONT_DISPLAY}
          color={C.text}
          entryDur={0.4}
          exitDur={0.3}
        />
      </Sprite>
    </>
  );
}

// ─── SCENE 6 (20–25s) — CTA ──────────────────────────────────────────────

function Scene6_CTA({ cta = 'Kreni besplatno' }) {
  const { localTime } = useSprite();

  const logoT = Easing.easeOutCubic(clamp(localTime / 0.6, 0, 1));
  const btnT = Easing.easeOutBack(clamp((localTime - 0.6) / 0.5, 0, 1));
  const urlT = clamp((localTime - 1.3) / 0.4, 0, 1);

  const pulse = 0.7 + Math.sin(localTime * 3) * 0.3;

  return (
    <>
      <AuroraBG intensity={1.2} />

      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        width: 1200, height: 1200,
        transform: 'translate(-50%,-50%)',
        background: `radial-gradient(circle, ${C.blue}55 0%, transparent 55%)`,
        opacity: logoT * pulse,
        filter: 'blur(20px)',
      }}/>

      {/* Logo */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 320,
        transform: `translate(-50%, ${(1 - logoT) * -20}px)`,
        opacity: logoT,
        display: 'flex', alignItems: 'center', gap: 20,
      }}>
        <LogoMark size={96} />
        <div style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 92,
          fontWeight: 700,
          color: C.text,
          letterSpacing: '-0.03em',
        }}>
          maturiraj<span style={{ color: C.blue }}>.hr</span>
        </div>
      </div>

      {/* Subtitle */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 470,
        transform: 'translate(-50%, 0)',
        opacity: logoT,
        fontFamily: FONT_DISPLAY,
        fontSize: 34,
        color: C.dim,
        letterSpacing: '-0.01em',
      }}>
        Matematika · A i B razina
      </div>

      {/* CTA button */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 580,
        transform: `translate(-50%, 0) scale(${0.8 + 0.2 * btnT})`,
        opacity: btnT,
      }}>
        <div style={{
          padding: '28px 60px',
          background: `linear-gradient(135deg, ${C.blue}, ${C.purple})`,
          borderRadius: 18,
          fontFamily: FONT_DISPLAY,
          fontSize: 44,
          fontWeight: 600,
          color: '#fff',
          letterSpacing: '-0.01em',
          boxShadow: `0 20px 60px ${C.blue}${Math.floor(pulse * 255).toString(16).padStart(2, '0')}, 0 0 ${pulse * 80}px ${C.purple}aa`,
          display: 'flex', alignItems: 'center', gap: 20,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {cta}
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path d="M8 16 L24 16 M18 10 L24 16 L18 22" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{
            position: 'absolute',
            top: 0, left: `${-40 + (localTime * 60) % 200}%`,
            width: 80, height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'skewX(-20deg)',
          }}/>
        </div>
      </div>

      {/* Feature pills */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 740,
        transform: 'translate(-50%, 0)',
        opacity: urlT,
        display: 'flex', gap: 14,
      }}>
        {['Plan učenja', 'Discere', 'AI Profesor'].map((p, i) => (
          <div key={i} style={{
            padding: '10px 20px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${C.cardBorder}`,
            borderRadius: 999,
            fontFamily: FONT_MONO,
            fontSize: 18,
            color: C.text,
            letterSpacing: '0.04em',
          }}>
            {p}
          </div>
        ))}
      </div>
    </>
  );
}

function LogoMark({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <defs>
        <linearGradient id="logo-grad-math" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.blue}/>
          <stop offset="1" stopColor={C.purple}/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="72" height="72" rx="18" fill="url(#logo-grad-math)"/>
      <path d="M22 56 L22 24 L32 42 L42 24 L42 56" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="56" cy="50" r="6" fill="#fff"/>
    </svg>
  );
}

// ─── Sound triggers ──────────────────────────────────────────────────────────

const MATH_SOUND_TRIGGERS = [
  { at: 0.05,  sound: 'swoosh' },
  { at: 0.85,  sound: 'error' },
  { at: 3.0,   sound: 'swoosh' },
  { at: 3.65,  sound: 'error' },
  { at: 4.3,   sound: 'error' },
  { at: 5.1,   sound: 'error' },
  { at: 6.0,   sound: 'swoosh' },
  { at: 6.9,   sound: 'appear' },
  { at: 7.15,  sound: 'appear', options: { freq: 1400 } },
  { at: 7.45,  sound: 'appear', options: { freq: 1650 } },
  { at: 10.0,  sound: 'swoosh' },
  { at: 10.85, sound: 'checkmark' },
  { at: 11.65, sound: 'checkmark' },
  { at: 12.45, sound: 'checkmark' },
  { at: 13.25, sound: 'checkmark' },
  { at: 15.0,  sound: 'swoosh' },
  { at: 15.35, sound: 'score-count' },
  { at: 16.3,  sound: 'success' },
  { at: 20.0,  sound: 'cta-whoosh' },
  { at: 20.9,  sound: 'ping', options: { freq: 660 } },
];

function SoundTimeline({ triggers }) {
  const time = useTime();
  const { play } = useSound();
  const prevRef = React.useRef(-1);
  React.useEffect(() => {
    const prev = prevRef.current;
    prevRef.current = time;
    if (time < prev - 0.5) return; // backward seek → skip
    triggers.forEach(({ at, sound, options }) => {
      if (prev < at && time >= at) play(sound, options || {});
    });
  });
  return null;
}

// ─── Root composition — 25s timeline ─────────────────────────────────────

function VideoRoot({ cta, accent }) {
  const t = useTime();
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    if (rootRef.current) {
      rootRef.current.setAttribute('data-screen-label', `t=${t.toFixed(1)}s`);
    }
  }, [Math.floor(t)]);

  return (
    <div ref={rootRef} style={{ position: 'absolute', inset: 0 }}>
      <SoundTimeline triggers={MATH_SOUND_TRIGGERS} />
      <Sprite start={0}    end={3.0}>  <Scene1_Panic /></Sprite>
      <Sprite start={3.0}  end={6.0}>  <Scene2_Chaos /></Sprite>
      <Sprite start={6.0}  end={10.0}> <Scene3_Clarity /></Sprite>
      <Sprite start={10.0} end={15.0}> <Scene4_Steps /></Sprite>
      <Sprite start={15.0} end={20.0}> <Scene5_Result /></Sprite>
      <Sprite start={20.0} end={25.0}> <Scene6_CTA cta={cta} /></Sprite>
    </div>
  );
}

Object.assign(window, {
  VideoRoot, C,
  Scene1_Panic, Scene2_Chaos, Scene3_Clarity,
  Scene4_Steps, Scene5_Result, Scene6_CTA,
  LogoMark,
});
