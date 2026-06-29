const predmeti = [
  "✍ Hrvatski jezik", "📐 Matematika A", "📐 Matematika B", "🌍 Engleski jezik",
  "🌍 Njemački jezik", "🌍 Talijanski jezik", "🌍 Francuski jezik", "🌍 Španjolski jezik",
  "⚗ Kemija", "🧬 Biologija", "⚡ Fizika", "🌱 Geografija",
  "📜 Povijest", "💭 Filozofija", "🧠 Psihologija", "💰 Ekonomija",
  "🎨 Likovna umjetnost", "🎵 Glazbena umjetnost", "🏛 Latinski jezik", "💻 Informatika",
  "🏥 MEF prijemni", "⚙ FER prijemni", "⚖ Pravni prijemni", "🏗 AFZ prijemni",
]

export default function Marquee() {
  return (
    <section style={{borderTop:"1px solid var(--bdr)", borderBottom:"1px solid var(--bdr)", background:"var(--s1)", overflow:"hidden", padding:"18px 0"}}>

      {/* Gornja traka — lijevo */}
      <div style={{display:"flex", gap:0, marginBottom:10, overflow:"hidden"}}>
        <div style={{display:"flex", gap:12, animation:"marquee 30s linear infinite", whiteSpace:"nowrap", willChange:"transform"}}>
          {[...predmeti, ...predmeti].map((p, i) => (
            <div key={i} style={{
              display:"inline-flex", alignItems:"center", gap:6,
              padding:"6px 14px", borderRadius:99,
              background:"var(--s2)", border:"1px solid var(--bdr)",
              fontSize:12, fontWeight:600, color:"var(--muted)",
              flexShrink:0
            }}>{p}</div>
          ))}
        </div>
      </div>

      {/* Donja traka — desno */}
      <div style={{display:"flex", gap:0, overflow:"hidden"}}>
        <div style={{display:"flex", gap:12, animation:"marquee-rev 35s linear infinite", whiteSpace:"nowrap", willChange:"transform"}}>
          {[...predmeti.slice(12), ...predmeti.slice(0, 12), ...predmeti.slice(12), ...predmeti.slice(0, 12)].map((p, i) => (
            <div key={i} style={{
              display:"inline-flex", alignItems:"center", gap:6,
              padding:"6px 14px", borderRadius:99,
              background:"var(--s2)", border:"1px solid var(--bdr)",
              fontSize:12, fontWeight:600, color:"var(--muted)",
              flexShrink:0
            }}>{p}</div>
          ))}
        </div>
      </div>

    </section>
  )
}