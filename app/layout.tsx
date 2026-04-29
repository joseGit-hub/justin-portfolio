import type { Metadata } from 'next'
import { Patrick_Hand, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const patrickHand = Patrick_Hand({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-patrick-hand'
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Justin Rei | Portfolio',
  description: 'Personal portfolio of Justin Rei E. Jose - Web Developer & Tech Enthusiast',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${patrickHand.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
