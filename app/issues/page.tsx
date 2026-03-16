import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Leaf, Users, Home, Heart } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Issues | Celeste Johnson for Utah House District 59',
  description:
    "Celeste Johnson's policy positions on land conservation, local decision-making, housing affordability, and community wellbeing for the Wasatch Back.",
}

const issues = [
  {
    id: 'farms',
    number: '01',
    icon: <Leaf size={28} />,
    title: 'Protecting Farms, Open Spaces & Community Character',
    subhead: 'What We Protect',
    color: 'text-emerald-700',
    bgAccent: 'bg-emerald-50',
    borderAccent: 'border-emerald-200',
    body: [
      "The Wasatch Back is defined by its working farms, open land, and small-town character — but once those are gone, they are gone for good.",
      "As mayor of Midway, Celeste helped give farmers and landowners real, voluntary options to conserve their land while remaining financially secure. Those local investments unlocked additional state and federal funding and are delivering lasting results for the community.",
      "At the state level, she supports strengthening programs that protect working farmland and open space — including investment in conservation efforts that respect private property and local priorities.",
      "Celeste believes growth should be thoughtful and locally guided. She supports giving communities and landowners real options to protect working land, conserve open space, and plan responsibly for the future — while respecting private property and local needs.",
    ],
    quote: "Once we lose these farms and open spaces, we can't get them back. That's why protecting them isn't just an environmental issue — it's a community identity issue.",
    pullStat: '2',
    pullLabel: 'Open Space Bonds passed under her mayoral leadership',
  },
  {
    id: 'local',
    number: '02',
    icon: <Users size={28} />,
    title: 'Local Voices, Local Choices',
    subhead: 'Who Is At The Table Matters',
    color: 'text-sky-700',
    bgAccent: 'bg-sky-50',
    borderAccent: 'border-sky-200',
    body: [
      "Communities should be able to solve problems locally — with the people who understand the impacts best. But too many state-level decisions are made without a clear understanding of how they will affect communities like those on the Wasatch Back.",
      "Celeste is running to bring local experience to the Legislature, to be a partner to community leaders, and to make sure small towns, resort communities, and rural areas are part of the conversation.",
      "She believes policies that work for the Wasatch Front don't always work here, and communities deserve the flexibility to make decisions that reflect their own needs.",
    ],
    quote: "Government works best when the people closest to the problem are part of finding the solution.",
    pullStat: null,
    pullLabel: null,
  },
  {
    id: 'housing',
    number: '03',
    icon: <Home size={28} />,
    title: 'Housing Affordability That Actually Works',
    subhead: 'How We Measure Outcomes',
    color: 'text-amber-700',
    bgAccent: 'bg-amber-50',
    borderAccent: 'border-amber-200',
    body: [
      "Housing affordability on the Wasatch Back doesn't look the same as it does in other parts of Utah.",
      "Celeste knows firsthand how state policies meant to increase affordability can fall short when they ignore local realities. In resort-adjacent communities, housing labeled 'affordable' on paper often rents for prices working families simply can't afford.",
      "Building more units alone doesn't solve the problem if those homes aren't accessible to the people who live and work here.",
      "Celeste believes housing policy should be shaped locally and measured by real outcomes — not good intentions.",
    ],
    quote: "If housing policy doesn't actually make housing accessible to the people who need it, we need to ask harder questions.",
    pullStat: null,
    pullLabel: null,
  },
  {
    id: 'community',
    number: '04',
    icon: <Heart size={28} />,
    title: 'Strong Communities, Healthy Families',
    subhead: 'Community Wellbeing Without Culture Wars',
    color: 'text-rose-700',
    bgAccent: 'bg-rose-50',
    borderAccent: 'border-rose-200',
    body: [
      "Celeste believes strong communities are built when families feel safe, supported, and able to thrive — and when government plays a responsible role in helping make that possible.",
      "Through her community work, she has seen how issues like family stability, access to local support services, and the well-being of women and children affect the health of an entire community.",
      "Celeste supports practical, community-based approaches that focus on preventing family crises, supporting mental and physical well-being, and making sure people can access help early — before problems escalate.",
      "When we invest in people and families, communities are stronger, more resilient, and better prepared for the future.",
    ],
    quote: "Investing in families early — before a crisis — is the smartest, most cost-effective thing a community can do.",
    pullStat: null,
    pullLabel: null,
  },
]

export default function IssuesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section
          className="relative pt-36 pb-20 px-5"
          style={{ background: 'var(--section-dark)' }}
          aria-labelledby="issues-heading"
        >
          <div className="max-w-7xl mx-auto">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Policy Positions
            </span>
            <h1
              id="issues-heading"
              className="mt-3 text-5xl lg:text-7xl font-bold text-white leading-tight text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The issues that
              <br />
              <span className="italic font-normal text-white/70">
                define this race
              </span>
            </h1>
            <p className="mt-6 text-white/65 text-lg max-w-2xl leading-relaxed">
              From working farms to housing affordability, Celeste is running
              on a platform grounded in real experience and shaped by the
              needs of the Wasatch Back.
            </p>
          </div>

          {/* Issue nav */}
          <div className="max-w-7xl mx-auto mt-12">
            <div className="flex flex-wrap gap-3">
              {issues.map((issue) => (
                <a
                  key={issue.id}
                  href={`#${issue.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-white/20 text-white/70 hover:border-white/50 hover:text-white text-sm transition-all duration-200"
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
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Sidebar */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <div className={`inline-flex p-3 rounded-sm ${issue.bgAccent} ${issue.color} mb-5`}>
                      {issue.icon}
                    </div>
                    <p
                      className="text-6xl font-bold text-border"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      aria-hidden="true"
                    >
                      {issue.number}
                    </p>
                    <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase mt-2 block">
                      {issue.subhead}
                    </span>
                    <h2
                      id={`issue-${issue.id}-heading`}
                      className="mt-3 text-2xl lg:text-3xl font-bold text-foreground text-balance"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {issue.title}
                    </h2>

                    {issue.pullStat && (
                      <div className="mt-6 p-5 rounded-sm bg-primary/10 border border-primary/20">
                        <p
                          className="text-4xl font-bold text-primary"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {issue.pullStat}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {issue.pullLabel}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    {issue.body.map((para, i) => (
                      <p key={i} className={i === 0 ? 'text-lg text-foreground font-medium' : ''}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Pull quote */}
                  <blockquote className="mt-10 pl-5 border-l-4 border-accent">
                    <p
                      className="text-xl font-medium text-foreground italic text-balance"
                      style={{ fontFamily: "'Playfair Display', serif" }}
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
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stand behind these issues
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              If these issues matter to you, join Celeste&apos;s campaign and
              help bring local voices to Utah House District 59.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Donate to the Campaign
              </Link>
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
