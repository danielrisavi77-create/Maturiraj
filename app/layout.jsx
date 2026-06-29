import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollReset from "./components/ScrollReset";
import AnalyticsInitializer from "./components/AnalyticsInitializer";
import { AuthProvider } from "@/lib/hooks/useAuth";
import Nav from "@/components/layout/Nav";

export const metadata = {
  metadataBase: new URL('https://maturiraj.hr'),
  title: {
    default: 'Maturiraj.hr · Pripreme za državnu maturu',
    template: '%s · Maturiraj.hr',
  },
  description: 'Najbolja platforma za pripremu državne mature — skripte, simulatori, AI profesor.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F0605',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Mono:ital,wght@0,400;0,500;1,400&subset=latin,latin-ext&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <AuthProvider>
          <Nav noCountdown />
          <AnalyticsInitializer />
          <ScrollReset />
          {children}
          <ScrollToTopButton />
        </AuthProvider>
      </body>
    </html>
  );
}