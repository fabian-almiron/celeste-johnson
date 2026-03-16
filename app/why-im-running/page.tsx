import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Why I'm Running | Celeste Johnson for Utah House District 59",
  description:
    "In her own words: why Celeste Johnson is running for Utah House District 59 and what she hopes to accomplish for the Wasatch Back.",
}

const motivations = [
  {
    heading: 'Local voices deserve a seat at the table',
    body: "I watched state-level decisions fall on communities like ours with little understanding of how they would actually play out on the ground. Too often, policies are shaped by people who don't live here and don't see the consequences firsthand.",
  },
  {
    heading: 'Balance and accountability matter',
    body: "I believe balance matters, and that healthy debate makes government stronger. Supermajorities, no matter the party, weaken accountability and shut down needed discussions. We deserve representation that asks questions, listens carefully, and is willing to speak up when something doesn't make sense for the Wasatch Back.",
  },
  {
    heading: 'For the next generation',
    body: "As a mother and grandmother, I think often about the future we're leaving the next generation. I want our children to be able to live here, work here, and feel rooted here. I believe we can plan responsibly for growth while still protecting what makes this place special.",
  },
  {
    heading: 'Practical, steady leadership',
    body: "I'm running to bring steady, practical leadership to state government — leadership grounded in real experience, respect for local voices, and a deep commitment to the Wasatch Back.",
  },
]

export default function WhyRunningPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section
          className="relative pt-36 pb-24 px-5 overflow-hidden"
          style={{ background: 'var(--section-dark)' }}
          aria-labelledby="why-running-heading"
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              In Her Own Words
            </span>
            <h1
              id="why-running-heading"
              className="mt-3 text-5xl lg:text-7xl font-bold text-white leading-tight text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why I&apos;m
              <br />
              <span className="italic font-normal text-white/70">running</span>
            </h1>
            <p className="mt-6 text-white/65 text-lg max-w-2xl leading-relaxed">
              This isn&apos;t a career move. It&apos;s a commitment — built over decades
              of community work and grounded in a deep belief that local
              voices deserve to be heard in the Legislature.
            </p>
          </div>
        </section>

        {/* ─── PERSONAL STATEMENT ─── */}
        <section className="py-20 lg:py-28 px-5 bg-background">
          <div className="max-w-4xl mx-auto">
            <Quote
              size={36}
              className="text-primary mb-8"
              aria-hidden="true"
            />
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p className="text-xl font-medium">
                I never set out to run for office.
              </p>
              <p className="text-muted-foreground">
                I ran for mayor because I cared about Midway and wanted to
                protect the land, farms, and sense of community that brought so
                many of us here.
              </p>
              <p className="text-muted-foreground">
                Serving as mayor showed me what&apos;s possible when local voices
                are part of the process — as well as what happens when they
                aren&apos;t. I watched state-level decisions fall on communities
                like ours with little understanding of how they would actually
                play out on the ground. The reality is, too often policies are
                shaped by people who don&apos;t live here and don&apos;t see the
                consequences firsthand.
              </p>
              <p className="text-muted-foreground">
                That experience is what led me to this race.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              className="my-12 pl-6 border-l-4 border-accent"
            >
              <p
                className="text-2xl font-medium text-foreground italic text-balance"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "We deserve representation that asks questions, listens
                carefully, and is willing to speak up when something doesn&apos;t
                make sense for the Wasatch Back."
              </p>
              <cite className="mt-3 block text-sm text-muted-foreground not-italic">
                — Celeste Johnson
              </cite>
            </blockquote>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I believe balance matters, and that healthy debate makes
                government stronger. Supermajorities, no matter the party,
                weaken accountability and shut down needed discussions.
              </p>
              <p>
                As a mother and grandmother, I think often about the future
                we&apos;re leaving the next generation. I want our children to be
                able to live here, work here, and feel rooted here. I believe
                we can plan responsibly for growth while still protecting what
                makes this place special.
              </p>
              <p>
                I&apos;m running to bring steady, practical leadership to state
                government. Leadership grounded in real experience, respect for
                local voices, and a deep commitment to the Wasatch Back.
              </p>
            </div>

            <p
              className="mt-8 text-foreground font-semibold text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              – Celeste Johnson
            </p>
          </div>
        </section>

        {/* ─── CORE MOTIVATIONS ─── */}
        <section
          className="py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-earth)' }}
          aria-labelledby="motivations-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-14">
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                What Drives Her
              </span>
              <h2
                id="motivations-heading"
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Four reasons Celeste is in this race
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {motivations.map((item, i) => (
                <div
                  key={i}
                  className="bg-background rounded-sm p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <span
                    className="text-5xl font-bold text-border"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="mt-4 text-xl font-semibold text-foreground text-balance"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ACCOUNTABILITY SECTION ─── */}
        <section
          className="py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-dark)' }}
          aria-labelledby="accountability-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Representation
            </span>
            <h2
              id="accountability-heading"
              className="mt-3 text-4xl font-bold text-white text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Wasatch Back deserves a voice in the Legislature
            </h2>
            <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-3xl mx-auto">
              Too many decisions at the state level are being made by people
              who don&apos;t know our communities. The Wasatch Back deserves a
              voice in the Legislature who knows how to deliver.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: 'Ask the hard questions',
                  body: 'Celeste will push back when state proposals don\'t fit the needs of resort communities, rural areas, and small towns like those on the Wasatch Back.',
                },
                {
                  title: 'Listen before deciding',
                  body: 'Years of community leadership have built a habit of listening — to farmers, families, neighbors, and local officials — before acting.',
                },
                {
                  title: 'Deliver for the community',
                  body: 'Celeste has a proven record of turning community priorities into real outcomes: conservation bonds, trail networks, new businesses, and preserved rural character.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-sm border border-white/10 bg-white/5"
                >
                  <h3
                    className="font-semibold text-white text-lg mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FUTURE GENERATIONS ─── */}
        <section className="py-20 lg:py-28 px-5 bg-background">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-muted">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Wasatch Back landscape — the community Celeste is fighting to protect"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                For the Next Generation
              </span>
              <h2
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A community worth protecting
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                As a mother and grandmother, Celeste thinks often about the
                future we&apos;re leaving the next generation. She wants our
                children to be able to live here, work here, and feel rooted
                here.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                That means planning responsibly for growth, protecting what
                makes this place special, and making sure housing policy
                reflects the real cost of living in resort-adjacent
                communities.
              </p>
              <Link
                href="/issues"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-sm text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                See the Issues <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CLOSING CTA ─── */}
        <section
          className="py-20 px-5 text-center"
          style={{ background: 'var(--primary)' }}
        >
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl font-bold text-white text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stand with Celeste
            </h2>
            <p className="mt-4 text-white/70 text-lg leading-relaxed">
              Help bring thoughtful, community-first leadership to Utah House
              District 59.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold bg-white text-primary hover:bg-white/90 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold border border-white/40 text-white hover:bg-white/10 transition-colors"
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
