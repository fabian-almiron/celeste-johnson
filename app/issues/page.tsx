import Nav from '@/components/nav'
import Footer from '@/components/footer'
import InternalHeroBackground from '@/components/internal-hero-background'
import Link from 'next/link'
import { ACTBLUE_DONATE_URL } from '@/lib/donate-url'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'District 59 Policy Positions: Open Space, Housing, Local Control',
  description:
    "Celeste Johnson's District 59 policy positions: open space preservation, affordable housing, local control, smart growth, transparent government.",
  alternates: {
    canonical: 'https://celestefordistrict59.com/issues',
  },
  openGraph: {
    title: 'District 59 Policy Positions: Open Space, Housing, Local Control',
    description:
      "Celeste Johnson's policy positions on open space, affordable housing, local control, smart growth, and transparent government.",
    type: 'website',
    url: 'https://celestefordistrict59.com/issues',
    images: [
      {
        url: '/images/farms-open-spaces.jpg',
        width: 1200,
        height: 630,
        alt: 'District 59 Policy Positions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'District 59 Policy Positions',
    description:
      "Celeste Johnson's positions on open space, affordable housing, local control, and transparent government.",
    images: ['/images/farms-open-spaces.jpg'],
  },
}

const schemas = [
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
        name: 'Policy Positions',
        item: 'https://celestefordistrict59.com/issues',
      },
    ],
  },
]

const issues = [
  {
    id: 'farms',
    number: '01',
    imageSrc: '/images/farms-open-spaces.jpg',
    imageAlt:
      'Open landscape and mountain views in the Wasatch Back, reflecting farmland and community character',
    title: 'Protecting Farms, Open Spaces & Community Character',
    subhead: 'What We Protect',
    body: [
      "The Wasatch Back is defined by its working farms, open land, and small-town character — but once those are gone, they are gone for good.",
      "As mayor of Midway, Celeste helped give farmers and landowners real, voluntary options to conserve their land while remaining financially secure. Those local investments unlocked additional state and federal funding and are delivering lasting results for the community.",
      "At the state level, she supports strengthening programs that protect working farmland and open space — including investment in conservation efforts that respect private property and local priorities.",
      "Celeste believes growth should be thoughtful and locally guided. She supports giving communities and landowners real options to protect working land, conserve open space, and plan responsibly for the future — while respecting private property and local needs.",
    ],
    quote:
      "Once we lose these farms and open spaces, we can't get them back. That's why protecting them isn't just an environmental issue — it's a community identity issue.",
    pullStat: '2',
    pullLabel: 'Open Space Bonds passed under her mayoral leadership',
  },
  {
    id: 'local',
    number: '02',
    imageSrc: '/images/local-comunity.jpg',
    imageAlt:
      'Local leaders and neighbors celebrating a Wasatch Back community project',
    title: 'Local Voices, Local Choices',
    subhead: 'Who Is At The Table Matters',
    body: [
      "Communities should be able to solve problems locally — with the people who understand the impacts best. But too many state-level decisions are made without a clear understanding of how they will affect communities like those on the Wasatch Back.",
      "Celeste is running to bring local experience to the Legislature, to be a partner to community leaders, and to make sure small towns, resort communities, and rural areas are part of the conversation.",
      "She believes policies that work for the Wasatch Front don't always work here, and communities deserve the flexibility to make decisions that reflect their own needs.",
    ],
    quote:
      'Government works best when the people closest to the problem are part of finding the solution.',
    pullStat: null,
    pullLabel: null,
  },
  {
    id: 'housing',
    number: '03',
    imageSrc: '/images/housing-placeholder.jpg',
    imageAlt: 'Thoughtful planning for housing and community policy',
    title: 'Housing Affordability That Actually Works',
    subhead: 'How We Measure Outcomes',
    body: [
      "Housing affordability on the Wasatch Back doesn't look the same as it does in other parts of Utah.",
      "Celeste knows firsthand how state policies meant to increase affordability can fall short when they ignore local realities. In resort-adjacent communities, housing labeled 'affordable' on paper often rents for prices working families simply can't afford.",
      "Building more units alone doesn't solve the problem if those homes aren't accessible to the people who live and work here.",
      'Celeste believes housing policy should be shaped locally and measured by real outcomes — not good intentions.',
    ],
    quote:
      "If housing policy doesn't actually make housing accessible to the people who need it, we need to ask harder questions.",
    pullStat: null,
    pullLabel: null,
  },
  {
    id: 'community',
    number: '04',
    imageSrc: '/images/communities.jpg',
    imageAlt: 'Community support and local service on the Wasatch Back',
    title: 'Strong Communities, Healthy Families',
    subhead: 'Community Wellbeing Without Culture Wars',
    body: [
      "Celeste believes strong communities are built when families feel safe, supported, and able to thrive — and when government plays a responsible role in helping make that possible.",
      "Through her community work, she has seen how issues like family stability, access to local support services, and the well-being of women and children affect the health of an entire community.",
      'Celeste supports practical, community-based approaches that focus on preventing family crises, supporting mental and physical well-being, and making sure people can access help early — before problems escalate.',
      'When we invest in people and families, communities are stronger, more resilient, and better prepared for the future.',
    ],
    quote:
      'Investing in families early — before a crisis — is the smartest, most cost-effective thing a community can do.',
    pullStat: null,
    pullLabel: null,
  },
] as const

export default function IssuesPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section
          className="relative pt-36 pb-20 px-5 overflow-hidden"
          aria-labelledby="issues-heading"
        >
          <InternalHeroBackground />

          <div className="relative z-10 max-w-7xl mx-auto">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Policy Positions
            </span>
            <h1
              id="issues-heading"
              className="mt-3 text-5xl lg:text-7xl font-bold text-white leading-tight text-balance"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              District 59 Policy Priorities
              <br />
              <span className="italic font-normal text-white/70">
                Open Space, Housing, Leadership
              </span>
            </h1>
            <p className="mt-6 text-white/65 text-lg max-w-2xl leading-relaxed">
              From working farms to housing affordability, Celeste is running
              on a platform grounded in real experience and shaped by the
              needs of the Wasatch Back.
            </p>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto mt-12">
            <div className="flex flex-wrap gap-3">
              {issues.map((issue) => (
                <a
                  key={issue.id}
                  href={`#${issue.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-white/20 text-white/70 hover:border-white/50 hover:text-white text-sm transition-all duration-200 backdrop-blur-[2px] bg-white/5"
                >
                  <span className="text-white/40 text-xs">{issue.number}</span>
                  {issue.title.split(',')[0]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ISSUES ─── */}
        {issues.map((issue, idx) => (
          <section
            key={issue.id}
            id={issue.id}
            className="scroll-mt-20 py-20 lg:py-28 px-5"
            style={{
              background:
                idx % 2 === 0 ? 'var(--background)' : 'var(--section-earth)',
            }}
            aria-labelledby={`issue-${issue.id}-heading`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div
                  className={`relative w-full aspect-4/3 lg:aspect-auto lg:min-h-[min(72vh,36rem)] rounded-sm overflow-hidden border border-border shadow-sm group ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  } lg:sticky lg:top-28`}
                >
                  <Image
                    src={issue.imageSrc}
                    alt={issue.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(to top, oklch(0.15 0.05 258 / 0.35), transparent 45%)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={`min-w-0 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <p
                    className="text-6xl font-bold text-border"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                    aria-hidden="true"
                  >
                    {issue.number}
                  </p>
                  <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase mt-1 block">
                    {issue.subhead}
                  </span>
                  <h2
                    id={`issue-${issue.id}-heading`}
                    className="mt-3 text-2xl lg:text-3xl font-bold text-foreground text-balance"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                  >
                    {issue.title}
                  </h2>

                  {issue.pullStat && issue.pullLabel && (
                    <div className="mt-6">
                      <p
                        className="text-4xl font-bold text-primary"
                        style={{ fontFamily: "'Libre Baskerville', serif" }}
                      >
                        {issue.pullStat}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2 max-w-md leading-relaxed">
                        {issue.pullLabel}
                      </p>
                    </div>
                  )}

                  <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                    {issue.body.map((para, i) => (
                      <p
                        key={i}
                        className={
                          i === 0 ? 'text-lg text-foreground font-medium' : ''
                        }
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <blockquote className="mt-10 pl-5 border-l-4 border-accent">
                    <p
                      className="text-xl font-medium text-foreground italic text-balance"
                      style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                      &ldquo;{issue.quote}&rdquo;
                    </p>
                    <cite className="mt-2 block text-sm text-muted-foreground not-italic">
                      — Celeste Johnson
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ─── ISSUES CTA ─── */}
        <section
          className="py-20 px-5"
          style={{ background: 'var(--section-dark)' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Take Action
            </span>
            <h2
              className="mt-3 text-4xl font-bold text-white text-balance"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Stand behind these issues
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              If these issues matter to you, join Celeste&apos;s campaign and
              help bring local voices to Utah House District 59.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ACTBLUE_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Donate to the Campaign
              </a>
              <Link
                href="/get-involved"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Get Involved <ArrowRight size={14} className="inline ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
