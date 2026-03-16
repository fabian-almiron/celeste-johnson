import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Celeste Johnson for Utah House District 59',
  description:
    'Celeste Johnson is running for Utah House District 59 to bring local voices, land stewardship, and community-first leadership to the Wasatch Back.',
  keywords: [
    'Celeste Johnson',
    'Utah House District 59',
    'Wasatch Back',
    'Midway Utah',
    'local leadership',
    'land conservation',
    'housing affordability',
  ],
  openGraph: {
    title: 'Celeste Johnson for Utah House District 59',
    description:
      'Working for the Wasatch Back and the people who call it home.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
