'use client'
import { useState, useEffect, useCallback, useRef } from 'react'

// ─── Matura layout: sin/cos/tan, log/ln, n!, brackets, DEG/RAD ────────────────
const MATURA_KEYS = [
  [{ l: 'sin', v: 'sin', c: 'fn', a: 'sin⁻¹' }, { l: 'cos', v: 'cos', c: 'fn', a: 'cos⁻¹' }, { l: 'tan', v: 'tan', c: 'fn', a: 'tan⁻¹' }, { l: 'DEG', v: 'angle', c: 'util' }, { l: 'AC', v: 'ac', c: 'util' }],
  [{ l: 'x²', v: 'sqr', c: 'fn' }, { l: 'xʸ', v: '^', c: 'fn' }, { l: '√', v: 'sqrt', c: 'fn', a: 'ʸ√x' }, { l: '|x|', v: 'abs', c: 'fn' }, { l: '⌫', v: 'back', c: 'util' }],
  [{ l: 'log', v: 'log', c: 'fn', a: '10ˣ' }, { l: 'ln', v: 'ln', c: 'fn', a: 'eˣ' }, { l: '(', v: '(' }, { l: ')', v: ')' }, { l: '÷', v: '/', c: 'op' }],
  [{ l: 'π', v: 'pi', c: 'fn' }, { l: '7', v: '7' }, { l: '8', v: '8' }, { l: '9', v: '9' }, { l: '×', v: '*', c: 'op' }],
  [{ l: 'e', v: 'e', c: 'fn' }, { l: '4', v: '4' }, { l: '5', v: '5' }, { l: '6', v: '6' }, { l: '−', v: '-', c: 'op' }],
  [{ l: 'n!', v: 'fact', c: 'fn' }, { l: '1', v: '1' }, { l: '2', v: '2' }, { l: '3', v: '3' }, { l: '+', v: '+', c: 'op' }],
  [{ l: '2ⁿᵈ', v: 'second', c: 'fn' }, { l: '±', v: 'neg', c: 'util' }, { l: '0', v: '0' }, { l: ',', v: '.' }, { l: '=', v: 'eq', c: 'eq' }],
]

// ─── Engine ────────────────────────────────────────────────────────────────────
function factorial(n) {
  n = Math.round(n)
  if (n < 0 || n > 170) return NaN
  let r = 1
  for (let i = 2; i <= n; i++) r *= i
  return r
}

function formatResult(n, decimals = 8) {
  if (!isFinite(n)) return n === Infinity ? '∞' : 'Error'
  if (Number.isNaN(n)) return 'Error'
  let s = Number(n.toFixed(decimals)).toString()
  // strip trailing zeros after decimal
  if (s.includes('.')) s = s.replace(/\.?0+$/, '')
  return s.replace('.', ',')
}

function prettify(e) {
  return e
    .replace(/\*/g, '×').replace(/\//g, '÷').replace(/-/g, '−')
    .replace(/\bpi\b/g, 'π').replace(/\./g, ',')
}

function calcEvaluate(expr, angle) {
  let e = expr
    .replace(/\bpi\b/g, 'Math.PI')
    .replace(/(?<![a-zA-Z])e(?![a-zA-Z])/g, 'Math.E')
    .replace(/\^/g, '**')
    .replace(/sin\(/g, angle === 'DEG' ? 'Math.sin((Math.PI/180)*(' : 'Math.sin((')
    .replace(/cos\(/g, angle === 'DEG' ? 'Math.cos((Math.PI/180)*(' : 'Math.cos((')
    .replace(/tan\(/g, angle === 'DEG' ? 'Math.tan((Math.PI/180)*(' : 'Math.tan((')
    .replace(/asin\(/g, angle === 'DEG' ? '(180/Math.PI)*Math.asin(' : 'Math.asin(')
    .replace(/acos\(/g, angle === 'DEG' ? '(180/Math.PI)*Math.acos(' : 'Math.acos(')
    .replace(/atan\(/g, angle === 'DEG' ? '(180/Math.PI)*Math.atan(' : 'Math.atan(')
    .replace(/\bln\(/g, 'Math.log(')
    .replace(/\blog\(/g, 'Math.log10(')
    .replace(/sqrt\(/g, 'Math.sqrt(')
    .replace(/abs\(/g, 'Math.abs(')
    .replace(/fact\(([^)]+)\)/g, (_, a) => `__f(${a})`)
  // balance open parens
  const open = (e.match(/\(/g) || []).length
  const close = (e.match(/\)/g) || []).length
  if (open > close) e += ')'.repeat(open - close)
  // eslint-disable-next-line no-new-func
  const fn = new Function('__f', `return (${e})`)
  return fn(factorial)
}

// ─── Styles ────────────────────────────────────────────────────────────────────
const S = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 9998,
    background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(4px)',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
    padding: 16,
    animation: 'kalk-fadein .15s ease',
  },
  panel: {
    width: 320, borderRadius: 18,
    background: 'linear-gradient(160deg,#111827,#0d1117)',
    border: '1px solid rgba(129,140,248,.22)',
    boxShadow: '0 24px 60px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.04)',
    overflow: 'hidden',
    animation: 'kalk-slidein .2s cubic-bezier(.22,1,.36,1)',
    fontFamily: "'DM Mono','Fira Code',monospace",
  },
  chrome: {
    padding: '10px 14px', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(255,255,255,.05)',
    fontSize: 11, color: 'rgba(138,149,168,.6)',
  },
  dots: { display: 'flex', gap: 5 },
  display: {
    padding: '16px 18px 12px', textAlign: 'right',
    borderBottom: '1px solid rgba(255,255,255,.06)',
    position: 'relative',
  },
  modeBadge: {
    position: 'absolute', top: 10, left: 14,
    display: 'flex', gap: 6,
  },
  modeChip: (active) => ({
    fontSize: 9, fontWeight: 700, letterSpacing: '.08em', padding: '2px 7px',
    borderRadius: 4,
    background: active ? 'rgba(129,140,248,.25)' : 'rgba(255,255,255,.05)',
    color: active ? '#818cf8' : 'rgba(138,149,168,.4)',
    border: `1px solid ${active ? 'rgba(129,140,248,.35)' : 'transparent'}`,
    transition: 'all .15s',
  }),
  history: { fontSize: 11, color: 'rgba(138,149,168,.5)', minHeight: 18, marginBottom: 4 },
  current: { fontSize: 36, fontWeight: 700, color: '#e8edf5', letterSpacing: '-.02em', lineHeight: 1 },
  keys: {
    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 1, padding: '1px', background: 'rgba(255,255,255,.04)',
  },
}

function keyStyle(c, pressed) {
  const base = {
    padding: '14px 8px', border: 'none', cursor: 'pointer',
    fontSize: 14, fontWeight: 600, lineHeight: 1,
    fontFamily: "'DM Mono','Fira Code',monospace",
    transition: 'all .1s', position: 'relative',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
    transform: pressed ? 'scale(.93)' : 'scale(1)',
  }
  if (c === 'eq')   return { ...base, background: 'linear-gradient(135deg,#818cf8,#7c5cfc)', color: '#fff' }
  if (c === 'op')   return { ...base, background: 'rgba(129,140,248,.12)', color: '#a5b4fc' }
  if (c === 'fn')   return { ...base, background: 'rgba(75,123,255,.08)', color: '#93c5fd' }
  if (c === 'util') return { ...base, background: 'rgba(248,113,113,.08)', color: '#fca5a5' }
  return { ...base, background: 'rgba(255,255,255,.04)', color: '#e8edf5' }
}

// ─── FloatButton ──────────────────────────────────────────────────────────────
function FloatButton({ onClick, active }) {
  return (
    <button
      onClick={onClick}
      aria-label="Otvori kalkulator"
      style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 9997,
        width: 52, height: 52, borderRadius: '50%', border: 'none', cursor: 'pointer',
        background: active
          ? 'linear-gradient(135deg,#818cf8,#7c5cfc)'
          : 'linear-gradient(135deg,rgba(129,140,248,.18),rgba(124,92,252,.12))',
        color: '#e8edf5',
        boxShadow: active
          ? '0 4px 24px rgba(129,140,248,.5)'
          : '0 4px 16px rgba(0,0,0,.4), 0 0 0 1px rgba(129,140,248,.2)',
        fontSize: 22,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all .2s',
      }}
    >
      {active ? '✕' : '🧮'}
    </button>
  )
}

// ─── Kalkulator panel ─────────────────────────────────────────────────────────
function KalkulatorPanel({ onClose }) {
  const [expr, setExpr] = useState('')
  const [history, setHistory] = useState('\u00a0')
  const [angle, setAngle] = useState('DEG')
  const [second, setSecond] = useState(false)
  const [pressedKey, setPressedKey] = useState(null)

  const currentDisplay = expr === '' ? '0' : prettify(expr)

  const flashKey = useCallback((v) => {
    setPressedKey(v)
    setTimeout(() => setPressedKey(null), 100)
  }, [])

  const press = useCallback((v) => {
    flashKey(v)

    if (v === 'ac') { setExpr(''); setHistory('\u00a0'); return }
    if (v === 'back') { setExpr(e => e.slice(0, -1)); return }
    if (v === 'angle') { setAngle(a => a === 'DEG' ? 'RAD' : 'DEG'); return }
    if (v === 'second') { setSecond(s => !s); return }

    if (v === 'eq') {
      setExpr(e => {
        if (!e) return e
        try {
          const result = calcEvaluate(e, angle)
          const formatted = formatResult(result)
          setHistory(prettify(e) + ' =')
          return formatted.replace(',', '.')
        } catch {
          setHistory('Error')
          return ''
        }
      })
      return
    }

    if (v === 'neg') {
      setExpr(e => {
        const m = e.match(/(-?\d*\.?\d+)$/)
        if (m) {
          const n = m[1]
          return e.slice(0, e.length - n.length) + (n.startsWith('-') ? n.slice(1) : '-' + n)
        }
        return '-' + e
      })
      return
    }

    const fnMap = {
      sin: second ? 'asin(' : 'sin(',
      cos: second ? 'acos(' : 'cos(',
      tan: second ? 'atan(' : 'tan(',
      sqrt: second ? '^(1/' : 'sqrt(',
      sqr: '^2',
      log: second ? '10^(' : 'log(',
      ln: second ? 'exp(' : 'ln(',
      abs: 'abs(',
      pi: 'pi',
      e: 'e',
      fact: 'fact(',
    }

    if (fnMap[v] != null) {
      if (second && ['sin', 'cos', 'tan', 'sqrt', 'log', 'ln'].includes(v)) setSecond(false)
      setExpr(e => e + fnMap[v])
      return
    }

    if (v === '.') { setExpr(e => e + '.'); return }
    setExpr(e => e + v)
  }, [angle, second, flashKey])

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'Enter') { press('eq'); return }
      if (e.key === 'Backspace') { press('back'); return }
      if (e.key === ',') { press('.'); return }
      if (/^[0-9+\-*/().^]$/.test(e.key)) { press(e.key === '/' ? '/' : e.key); return }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [press, onClose])

  return (
    <>
      <style>{`
        @keyframes kalk-fadein { from{opacity:0} to{opacity:1} }
        @keyframes kalk-slidein { from{opacity:0;transform:translateY(20px) scale(.97)} to{opacity:1;transform:none} }
      `}</style>
      <div style={S.overlay} onClick={onClose}>
        <div style={S.panel} onClick={e => e.stopPropagation()}>
          {/* Chrome bar */}
          <div style={S.chrome}>
            <div style={S.dots}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div>matura.calc</div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'rgba(138,149,168,.5)', cursor: 'pointer', fontSize: 16, padding: 0, lineHeight: 1 }}>✕</button>
          </div>

          {/* Display */}
          <div style={S.display}>
            <div style={S.modeBadge}>
              <span style={S.modeChip(true)}>{angle}</span>
              <span style={S.modeChip(second)}>2ⁿᵈ</span>
            </div>
            <div style={S.history}>{history}</div>
            <div style={S.current}>{currentDisplay}</div>
          </div>

          {/* Keys */}
          <div style={S.keys}>
            {MATURA_KEYS.map((row, ri) =>
              row.map((k, ki) => (
                <button
                  key={`${ri}-${ki}`}
                  onClick={() => press(k.v === 'angle' ? 'angle' : k.v)}
                  style={keyStyle(k.v === 'angle' ? 'util' : k.c, pressedKey === k.v)}
                >
                  <span>{k.v === 'angle' ? angle : k.l}</span>
                  {k.a && <span style={{ fontSize: 8, color: 'rgba(129,140,248,.6)', fontWeight: 500 }}>{k.a}</span>}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function MaturaKalkulator() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <FloatButton onClick={() => setOpen(o => !o)} active={open} />
      {open && <KalkulatorPanel onClose={() => setOpen(false)} />}
    </>
  )
}
