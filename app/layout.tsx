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
  title: 'Celeste Johnson for Utah House District 59 | District 59 Candidate',
  description:
    'Vote Celeste Johnson for Utah House District 59. Former two-term Midway Mayor supporting open space preservation, local control, and affordable housing. Learn her vision for the Wasatch Back.',
  keywords: [
    'Celeste Johnson',
    'Utah House District 59',
    'District 59 candidate',
    'Wasatch Back',
    'Midway Mayor',
    'open space preservation',
    'local control',
    'affordable housing',
    'smart growth',
    'local leadership',
  ],
  alternates: {
    canonical: 'https://celestefordistrict59.com',
  },
  openGraph: {
    title: 'Celeste Johnson for Utah House District 59',
    description:
      'Vote Celeste Johnson for Utah House District 59. Former Midway Mayor supporting open space, local control, and affordable housing.',
    type: 'website',
    url: 'https://celestefordistrict59.com',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Celeste Johnson for Utah House District 59',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celeste Johnson for Utah House District 59',
    description:
      'Vote Celeste Johnson for Utah House District 59. Former Midway Mayor supporting open space, local control, and affordable housing.',
    images: ['/images/hero.jpg'],
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
