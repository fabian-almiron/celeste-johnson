import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Involved | Celeste Johnson for Utah House District 59',
  description:
    'Join the Celeste Johnson campaign for Utah House District 59. Volunteer, attend events, and help bring community-first leadership to the Wasatch Back.',
  alternates: {
    canonical: 'https://celestefordistrict59.com/get-involved',
  },
}

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
