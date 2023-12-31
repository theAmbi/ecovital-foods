import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'
import Footer from './components/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecovital Foods',
  description: 'Where culinary experience meets sustainability.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
