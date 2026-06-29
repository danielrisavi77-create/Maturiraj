// app/prijemni/layout.js
// Next.js App Router — metadata za /prijemni
// 'use client' NE ide ovdje — layout mora biti Server Component

export const metadata = {
  title: "Prijemni ispiti 2026. — gradivo, datumi i kalkulator bodova | Maturiraj.hr",
  description:
    "Sve o prijemnim ispitima u Hrvatskoj za 2026. godinu — MEF Zagreb, ADU, Stomatološki, KIF, Arhitektonski, Veterinarski i MEF Rijeka. Gradivo, bodovni pragovi, datumi prijava i kalkulator bodova.",

  keywords: [
    "prijemni ispit 2026",
    "medicinski fakultet prijemni",
    "MEF prijemni ispit",
    "kalkulator bodova za fakultet",
    "prijemni ispiti Hrvatska",
    "arhitektonski fakultet prijemni",
    "KIF prijemni ispit",
    "stomatološki fakultet prijemni",
    "bodovni prag fakultet 2025",
    "upis na fakultet 2026",
    "maturiraj prijemni",
  ],

  openGraph: {
    title: "Prijemni ispiti 2026. — gradivo, datumi i kalkulator bodova",
    description:
      "MEF, ADU, Stomatološki, KIF, Arhitektonski, VEF i MEF Rijeka — bodovni pragovi, datumi prijava i kalkulator bodova na jednom mjestu.",
    url: "https://maturiraj.hr/prijemni",
    siteName: "Maturiraj.hr",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "https://maturiraj.hr/og/prijemni.png",
        width: 1200,
        height: 630,
        alt: "Prijemni ispiti 2026. — Maturiraj.hr",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prijemni ispiti 2026. — gradivo, datumi i kalkulator bodova",
    description:
      "MEF, ADU, Stomatološki, KIF, Arhitektonski, VEF i MEF Rijeka — sve na jednom mjestu.",
    images: ["https://maturiraj.hr/og/prijemni.png"],
  },

  alternates: {
    canonical: "https://maturiraj.hr/prijemni",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function PrijemniLayout({ children }) {
  return children
}