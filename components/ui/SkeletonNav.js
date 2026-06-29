'use client'

export default function SkeletonNav({ onBack }) {
  return (
    <nav style={{position:'fixed',inset:'0 0 auto',zIndex:100,height:58,display:'flex',alignItems:'center',gap:12,padding:'0 18px',background:'rgba(7,9,15,.92)',backdropFilter:'blur(24px)',borderBottom:'1px solid var(--bdr)'}}>
      <button onClick={onBack} style={{background:'none',border:'none',color:'var(--muted)',cursor:'pointer',fontSize:20,lineHeight:1,padding:'4px 8px'}}>←</button>
      <div style={{fontFamily:'var(--fh)',fontSize:20,fontWeight:900,display:'flex',alignItems:'center',gap:8}}>
        <div style={{width:7,height:7,borderRadius:'50%',background:'var(--blue)',boxShadow:'0 0 10px var(--blue)'}}/>
        Maturiraj.hr
      </div>
    </nav>
  )
}
