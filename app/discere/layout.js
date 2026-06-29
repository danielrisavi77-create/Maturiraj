// app/discere/layout.js
// Shared layout for all /discere/* pages — uses the app's Nav

export const metadata = {
  title: 'Discere — Maturiraj.hr',
  description: 'Arhiva maturalnih zadataka i simulatori. Vježbaj s pravim zadacima s državnih matura.',
}

export default function DiscereLayout({ children }) {
  return (
    <>
      <div style={{ paddingTop: 58 }}>
        {children}
      </div>
    </>
  )
}
