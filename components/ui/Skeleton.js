/**
 * Base skeleton primitive.
 * CSS lives in app/globals.css — no runtime injection, no hydration mismatch.
 * @param {object} props
 * @param {number|string} [props.w] - width
 * @param {number|string} [props.h=14] - height (number = px)
 * @param {string} [props.variant] - 'block'|'circle'|'pill'
 * @param {string} [props.className]
 * @param {object} [props.style]
 */
export function Sk({ w, h = 14, variant, className = '', style = {} }) {

  const cls = ['sk', 'sk-block', variant === 'circle' ? 'sk-circle' : variant === 'pill' ? 'sk-pill' : '', className].filter(Boolean).join(' ')

  return (
    <span className={cls} style={{
      width: typeof w === 'number' ? `${w}px` : w ?? '100%',
      height: typeof h === 'number' ? `${h}px` : h,
      ...style,
    }}/>
  )
}

/**
 * Spacer — invisible gap između skeleton elemenata
 */
export function SkGap({ h = 8 }) {
  return <span style={{ display: 'block', height: h }}/>
}

/**
 * Row of inline skeletons (za text lines)
 */
export function SkText({ lines = 3, lastWidth = '60%' }) {
  const widths = Array.from({ length: lines }, (_, i) =>
    i === lines - 1 ? lastWidth : `${70 + Math.floor(Math.random() * 28)}%`
  )
  return (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {widths.map((w, i) => (
        <Sk key={i} h={13} w={w}/>
      ))}
    </span>
  )
}

export function InlineError({ message = 'Greška pri učitavanju.', onRetry }) {
  return (
    <div style={{padding:'20px',textAlign:'center',borderRadius:11,background:'rgba(248,113,113,.06)',border:'1px solid rgba(248,113,113,.2)'}}>
      <div style={{fontSize:13,color:'#f87171',marginBottom:onRetry ? 8 : 0}}>{message}</div>
      {onRetry && (
        <button onClick={onRetry} style={{padding:'6px 12px',borderRadius:8,fontSize:12,fontWeight:600,cursor:'pointer',background:'transparent',color:'var(--muted)',border:'1px solid var(--bdr)',fontFamily:'var(--fb)'}}>
          Pokušaj ponovno
        </button>
      )}
    </div>
  )
}
