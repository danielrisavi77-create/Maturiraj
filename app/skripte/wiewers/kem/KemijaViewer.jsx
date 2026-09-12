'use client'
import StructuredSkriptaViewer from '../shared/StructuredSkriptaViewer'

// Tanki wrapper — puni prikaz je u ../shared/StructuredSkriptaViewer.jsx
// (izvučeno odavde jer je bilo ~99% generično, samo s "Kemija" hardkodirano).
export default function KemijaViewer({ subject, onBack }) {
  return (
    <StructuredSkriptaViewer
      subject={subject}
      onBack={onBack}
      kicker="Prirodoslovno"
      tagline="Kompletna priprema za državnu maturu iz kemije. Temelji, reakcije, organska kemija i izračuni — od osnova do mature."
    />
  )
}
