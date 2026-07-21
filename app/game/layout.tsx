import type { Metadata } from 'next'
import './game-mode.css'

export const metadata: Metadata = {
  title: 'Game Mode — Hrvatski',
  description: 'Brzo, pristupačno ponavljanje hrvatskog iz provjerenih Discere pitanja.',
}

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return children
}
