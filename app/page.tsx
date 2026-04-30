import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ACTBLUE_DONATE_URL } from '@/lib/donate-url'
import Image from 'next/image'
import { Mountain, TreePine, Users, Home, ChevronDown, ArrowRight, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Celeste Johnson for Utah House District 59 | District 59 Candidate',
  description:
    'Vote Celeste Johnson for Utah House District 59. Former Midway Mayor supporting open space, local control, and affordable housing. Learn her vision.',
  alternates: {
    canonical: 'https://celestefordistrict59.com',
  },
  openGraph: {
    title: 'Celeste Johnson for Utah House District 59',
    description:
      'Vote Celeste Johnson for Utah House District 59. Former Midway Mayor supporting open space, local control, and affordable housing.',
    type: 'website',
    url: 'https://celestefordistrict59.com',
    siteName: 'Celeste Johnson for Utah House District 59',
    locale: 'en_US',
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

type HomeIssuePreview = {
  number: string
  title: string
  body: string
  href: string
  imageAlt: string
  imageSrc?: string
}

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': ['Person', 'PoliticalCandidate'],
    name: 'Celeste Johnson',
    url: 'https://celestefordistrict59.com',
    image: 'https://celestefordistrict59.com/images/hero.jpg',
    jobTitle: 'Candidate for Utah House District 59',
    description:
      'Celeste Johnson is the former two-term mayor of Midway and candidate for Utah House District 59, championing open space preservation, local control, and affordable housing.',
    areaServed: 'Utah House District 59',
    sameAs: [],
    seeksCandidacy: {
      '@type': 'GovernmentOrganization',
      name: 'Utah House of Representatives District 59',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Celeste Johnson for Utah House District 59',
    description:
      'Campaign for Celeste Johnson, candidate for Utah House District 59. Former Midway Mayor supporting open space, local control, and affordable housing.',
    url: 'https://celestefordistrict59.com',
    image: 'https://celestefordistrict59.com/images/hero.jpg',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Utah House District 59',
    },
  },
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
    ],
  },
]

export default function HomePage() {
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
          className="relative min-h-screen flex items-end overflow-hidden"
          aria-labelledby="hero-headline"
          style={{ background: 'oklch(0.14 0.06 255)' }}
        >
          {/* Celeste photo — right-anchored, full bleed */}
          <div
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src="/images/hero.jpg"
              alt="Celeste Johnson smiling outdoors beside an evergreen tree in the Wasatch Back"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: '70% center' }}
              sizes="100vw"
            />
            {/* Left-to-right gradient so text is readable without obscuring face */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(105deg, oklch(0.12 0.07 258 / 0.97) 0%, oklch(0.14 0.07 258 / 0.88) 38%, oklch(0.14 0.06 258 / 0.45) 62%, transparent 100%)',
              }}
            />
            {/* Bottom fade for scroll legibility */}
            <div
              className="absolute bottom-0 left-0 right-0 h-48"
              style={{
                background:
                  'linear-gradient(to top, oklch(0.14 0.06 255 / 0.85) 0%, transparent 100%)',
              }}
            />
          </div>

          {/* Hero content — left-aligned, over the gradient */}
          <div className="relative z-10 w-full px-5 pb-20 pt-40 max-w-7xl mx-auto">
            <div className="max-w-xl">
              <span className="inline-block text-white text-xs font-semibold tracking-[0.22em] uppercase mb-5 animate-fade-in">
                Your Neighbor
              </span>
              <h1
                id="hero-headline"
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6 animate-fade-up"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Celeste
                <br />
                <span className="italic font-normal">Johnson</span>
              </h1>
          
              <span className="inline-block text-white text-xs font-semibold tracking-[0.22em] uppercase mb-5 animate-fade-in">
              For house district 59
              </span>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 animate-fade-up delay-200">
                Working for the Wasatch Back and the people who call it home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <a
                  href={ACTBLUE_DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide bg-accent text-accent-foreground hover:opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Donate to the Campaign
                </a>
                <Link
                  href="/get-involved"
                  className="px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide border border-white/40 text-white hover:bg-white/10 transition-colors duration-200"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce">
            <ChevronDown size={24} aria-hidden="true" />
          </div>
        </section>

        {/* ─── INTRO / CREDIBILITY ─── */}
        <section className="py-20 lg:py-28 px-5 bg-background">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-muted relative">
                <Image
                  src="/images/about-celeste-2.jpg"
                  alt="Celeste Johnson with family in a Wasatch Back barn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-sm -z-10"
                style={{ background: 'var(--accent)', opacity: 0.15 }}
                aria-hidden="true"
              />
            </div>
            {/* Text */}
            <div>
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                About Celeste
              </span>
              <h2
                className="mt-3 text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Serving Utah House District 59
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Celeste Johnson is the former two-term mayor of Midway with 8+ years of local leadership experience. She is a wife, mother of four, and a fierce advocate for the people and spaces that make the Wasatch Back home. Her tenure as Midway Mayor was marked by open space preservation, smart growth planning, and transparent leadership that earned her unopposed re-election.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                She is running for Utah House District 59 — representing the Heber Valley, Wasatch County, and Park City — to center local voices in decision-making, protect the character of our communities, and make sure growth and land-use policies work for the people who live and work here. Celeste believes local control, open space preservation, affordable housing solutions, and transparent government are essential to the Wasatch Back's future.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Read her full story <ArrowRight size={16} />
                </Link>
                <Link
                  href="/why-im-running"
                  className="inline-flex items-center gap-2 text-muted-foreground font-medium text-sm hover:text-foreground transition-colors"
                >
                  Why she&apos;s running <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY CELESTE ─── */}
        <section
          className="py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-earth)' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                Why Celeste
              </span>
              <h2
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Proven Leadership. Local Roots. District 59 Ready.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Eight years as mayor of Midway. A career built in service to the Wasatch Back. Experience that has earned community trust and delivered results for open space, local control, and transparent leadership.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Mountain size={24} />,
                  title: 'Two Open Space Bonds',
                  body: "As mayor, Celeste led the community in passing two open space bonds — giving farmers real, voluntary options to conserve their land without being forced to sell.",
                },
                {
                  icon: <Users size={24} />,
                  title: 'Community Nonprofit Founder',
                  body: "Before running for office, Celeste helped organize a local nonprofit focused on preserving Midway's open space and agricultural land.",
                },
                {
                  icon: <TreePine size={24} />,
                  title: 'Utah State Land Conservancy',
                  body: 'She served on the Utah State Land Conservancy Board, working directly with farmers across Utah to keep their land productive for the next generation.',
                },
                {
                  icon: <Home size={24} />,
                  title: 'Two Terms as Mayor',
                  body: "Celeste won a competitive first race for mayor of Midway and was unopposed in her re-election — a testament to the trust she built with her community.",
                },
                {
                  icon: <Users size={24} />,
                  title: 'Trails & Transportation',
                  body: 'Under her leadership, Midway expanded trail connections, provided new transportation options, and supported new business opportunities.',
                },
                {
                  icon: <Mountain size={24} />,
                  title: 'State & Federal Funding',
                  body: 'Local open space investments she championed unlocked additional state and federal funding, delivering lasting results for the Wasatch Back.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-background rounded-sm p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200 w-fit">
                    {item.icon}
                  </div>
                  <h3
                    className="font-semibold text-foreground text-lg mb-2"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── KEY ISSUES PREVIEW (image-forward) ─── */}
        <section className="py-20 lg:py-28 px-5 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-14 lg:mb-16">
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                The Issues
              </span>
              <h2
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                District 59 Policy Priorities: Open Space, Housing, Local Control
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                From protecting working farms and open space preservation to ensuring housing policy reflects local reality and championing local control, these are the core issues that define Celeste's campaign for Utah House District 59.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8">
              {([
                {
                  number: '01',
                  title: 'Protecting Farms, Open Spaces & Community Character',
                  body: "The Wasatch Back is defined by its working farms, open land, and small-town character. Once those are gone, they're gone for good.",
                  href: '/issues#farms',
                  imageSrc: '/images/farms-open-spaces.jpg',
                  imageAlt: 'Open farmland and Wasatch Back landscape',
                },
                {
                  number: '02',
                  title: 'Local Voices, Local Choices',
                  body: "Communities should solve problems locally, with the people who understand the impacts best. State-level decisions shouldn't override that.",
                  href: '/issues#local',
                  imageSrc: '/images/local-comunity.jpg',
                  imageAlt: 'Neighbors and local community gathering',
                },
                {
                  number: '03',
                  title: 'Housing Affordability That Actually Works',
                  body: 'Housing affordability on the Wasatch Back is unique. Building more units alone won\'t solve the problem if those homes aren\'t accessible to working families.',
                  href: '/issues#housing',
                  imageSrc: '/images/housing-placeholder.jpg',
                  imageAlt: 'Homes and neighborhoods in the Wasatch Back',
                },
                {
                  number: '04',
                  title: 'Strong Communities, Healthy Families',
                  body: 'Strong communities are built when families feel safe, supported, and able to thrive — and when government plays a responsible, practical role.',
                  href: '/issues#community',
                  imageSrc: '/images/communities.jpg',
                  imageAlt: 'Families and community life',
                },
              ] as readonly HomeIssuePreview[]).map((issue, index) => (
                <Link
                  key={issue.number}
                  href={issue.href}
                  className="group grid lg:grid-cols-2 gap-0 rounded-sm border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <div
                    className={`relative aspect-16/10 lg:aspect-auto lg:min-h-[min(36vw,22rem)] ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    {issue.imageSrc ? (
                      <Image
                        src={issue.imageSrc}
                        alt={issue.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-linear-to-br from-muted via-muted/90 to-secondary/25 flex flex-col items-center justify-center gap-2 text-muted-foreground px-6 text-center"
                        aria-hidden="true"
                      >
                        <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase">
                          Photo placeholder
                        </span>
                        <span className="text-xs opacity-75 max-w-56 font-body">
                          Add <code className="text-[0.7rem] bg-background/70 px-1 py-0.5 rounded">imageSrc</code> for issue {issue.number} (e.g.{' '}
                          <code className="text-[0.7rem] bg-background/70 px-1 py-0.5 rounded">/images/issues/01.jpg</code>).
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`relative p-8 lg:p-10 flex flex-col justify-center ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <span
                      className="absolute top-6 right-6 lg:top-8 lg:right-8 text-5xl font-bold text-border group-hover:text-primary/15 transition-colors duration-300"
                      style={{ fontFamily: "'Libre Baskerville', serif" }}
                      aria-hidden="true"
                    >
                      {issue.number}
                    </span>
                    <h3
                      className="text-xl font-semibold text-foreground mb-3 text-balance pr-14"
                      style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                      {issue.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {issue.body}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
                      Read more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/issues"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-sm border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                All Issues <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FEATURED QUOTE ─── */}
        <section
          className="py-20 lg:py-28 px-5 relative overflow-hidden"
          style={{ background: 'var(--section-dark)' }}
          aria-label="Celeste Johnson's campaign message"
        >
          {/* Decorative large quotation mark */}
          <div
            className="absolute top-8 left-8 text-[12rem] leading-none text-white/5 select-none pointer-events-none"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Quote
              size={32}
              className="text-accent mb-8"
              aria-hidden="true"
            />
            <blockquote>
              <p
                className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug text-balance"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: 'var(--section-dark-foreground)',
                }}
              >
                "I ran for mayor to facilitate the discussion on how to best
                protect our rural, agricultural lands and promote outdoor
                activity through building and connecting trails. I&apos;m running
                now for House District 59 because too many decisions at the
                state level are being made by people who don&apos;t know our
                communities."
              </p>
              <footer className="mt-8">
                <cite
                  className="not-italic text-white/60 text-sm font-medium tracking-wide"
                >
                  — Celeste Johnson, Candidate for Utah House District 59
                </cite>
              </footer>
            </blockquote>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/why-im-running"
                className="px-7 py-3 rounded-sm text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity w-fit"
              >
                Read Why She&apos;s Running
              </Link>
              <Link
                href="/about"
                className="px-7 py-3 rounded-sm text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors w-fit"
              >
                About Celeste
              </Link>
            </div>
          </div>
        </section>

        {/* ─── GET INVOLVED CTA ─── */}
        <section
          className="py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-earth)' }}
          aria-labelledby="get-involved-heading"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                Join the Campaign
              </span>
              <h2
                id="get-involved-heading"
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Help bring local voices to the Legislature
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Whether you volunteer, attend an event, or spread the word,
                every contribution to this campaign makes a difference for
                the Wasatch Back.
              </p>
              <Link
                href="/get-involved"
                className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Get Involved Today <ArrowRight size={16} />
              </Link>
            </div>

            {/* Ways to help cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Volunteer', desc: 'Join the team on the ground' },
                { label: 'Attend an Event', desc: 'Meet Celeste in your community' },
                { label: 'Stay Updated', desc: 'Get campaign news and updates' },
                { label: 'Spread the Word', desc: 'Tell your neighbors about Celeste' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href="/get-involved"
                  className="bg-background rounded-sm p-5 border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <p
                    className="font-semibold text-foreground group-hover:text-primary transition-colors"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DONATE CTA ─── */}
        <section
          className="py-20 lg:py-28 px-5 relative overflow-hidden text-center"
          style={{ background: 'var(--primary)' }}
          aria-labelledby="donate-heading"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              id="donate-heading"
              className="text-4xl lg:text-5xl font-bold text-white text-balance"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Support this campaign
            </h2>
            <p className="mt-5 text-white/75 text-lg leading-relaxed">
              Your contribution helps Celeste reach more voters, organize
              local events, and bring thoughtful, community-first leadership
              to the Wasatch Back.
            </p>
            <a
              href={ACTBLUE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block px-10 py-4 rounded-sm text-sm font-bold tracking-wide bg-white text-primary hover:bg-white/90 transition-colors hover:scale-[1.02] active:scale-[0.98] duration-200"
            >
              Donate Now
            </a>
            <p className="mt-4 text-white/40 text-xs">
              Paid for by Celeste Johnson for Utah House District 59.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
