import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Involved | Celeste Johnson for Utah House District 59',
  description:
    'Join the Celeste Johnson campaign for Utah House District 59. Volunteer, attend events, and help bring community-first leadership to the Wasatch Back.',
  alternates: {
    canonical: 'https://celestefordistrict59.com/get-involved',
  },
  openGraph: {
    title: 'Get Involved | Celeste Johnson for Utah House District 59',
    description:
      'Join the Celeste Johnson campaign for Utah House District 59. Volunteer, attend events, and help bring community-first leadership to the Wasatch Back.',
    type: 'website',
    url: 'https://celestefordistrict59.com/get-involved',
    siteName: 'Celeste Johnson for Utah House District 59',
    locale: 'en_US',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Get Involved — Celeste Johnson for Utah House District 59',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Involved | Celeste Johnson for Utah House District 59',
    description:
      'Volunteer, attend events, and help bring community-first leadership to the Wasatch Back.',
    images: ['/images/hero.jpg'],
  },
}

const getInvolvedSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://celestefordistrict59.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Get Involved',
        item: 'https://celestefordistrict59.com/get-involved',
      },
    ],
  },
]

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {getInvolvedSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  )
}
