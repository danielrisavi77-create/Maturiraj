import Nav from '@/components/layout/Nav'
import NavLoadingBar from './components/NavLoadingBar'

export const metadata = {
  title: 'Skripte — Maturiraj.hr',
  description: 'Besplatne skripte za sve predmete državne mature. Bez registracije, odmah dostupno.',
}

export default function SkripteLayout({ children }) {
  return (
    <>
      <NavLoadingBar />
      <Nav />
      <div className="skripte-pad" style={{ paddingTop: 58 }}>
        {children}
      </div>
    </>
  )
}
