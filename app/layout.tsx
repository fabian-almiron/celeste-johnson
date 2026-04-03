import type { Metadata } from 'next'
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-baskerville',
})
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://celestefordistrict59.com'),
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
  alternates: {
    canonical: 'https://celestefordistrict59.com',
  },
  openGraph: {
    title: 'Celeste Johnson for Utah House District 59',
    description:
      'Working for the Wasatch Back and the people who call it home.',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap"
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
