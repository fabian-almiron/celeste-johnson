import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Celeste Johnson | Utah House District 59',
  description:
    'Learn about Celeste Johnson — former two-term mayor of Midway, community leader, and candidate for Utah House District 59.',
}

const timeline = [
  {
    period: 'The Beginning',
    title: 'Rooted in the Wasatch Back',
    body: "Celeste has called the Wasatch Back home for decades, building her life here long before running for public office. Like so many on the Wasatch Back, she chose this community because it felt rooted and worth protecting.",
  },
  {
    period: 'Community First',
    title: 'Organizing for Open Space',
    body: "As growth accelerated, Celeste helped organize a local nonprofit focused on preserving Midway's open space and agricultural land, working directly with landowners to understand what tools would actually help them stay on their land — instead of selling to developers.",
  },
  {
    period: 'Mayor of Midway',
    title: 'Two Terms of Trusted Leadership',
    body: "Celeste ran for mayor of Midway, won a competitive first race, and was unopposed in her second term. During her time in office, the community passed two open space bonds — giving farmers and landowners a voluntary way to conserve their land while being compensated fairly.",
  },
  {
    period: 'Statewide Impact',
    title: 'Utah State Land Conservancy Board',
    body: "Her work extended statewide through service on the Utah State Land Conservancy Board, where she worked with farmers across Utah to keep their land productive for the next generation. She saw firsthand how smart policy can respect private property, support working families, and protect the landscapes that define our communities.",
  },
  {
    period: 'The Next Step',
    title: 'Running for Utah House District 59',
    body: "As mayor, Celeste watched how decisions made at the state level affect local communities — often without meaningful input from the communities themselves. That experience shaped her decision to run for the Legislature.",
  },
]

const values = [
  'Listens first, follows through always',
  'Believes balance and accountability make government stronger',
  'Respects private property and local decision-making',
  'Community-first approach to public service',
  'Steady, practical leadership under pressure',
  'Deep commitment to the people of the Wasatch Back',
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── PAGE HERO ─── */}
        <section
          className="relative pt-36 pb-20 px-5 overflow-hidden"
          style={{ background: 'var(--section-dark)' }}
          aria-labelledby="about-heading"
        >
          {/* Decorative text */}
          <div
            className="absolute -right-8 top-10 text-[16rem] font-bold leading-none text-white/[0.03] select-none pointer-events-none hidden lg:block"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
            aria-hidden="true"
          >
            CJ
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              About Celeste
            </span>
            <h1
              id="about-heading"
              className="mt-3 text-5xl lg:text-7xl font-bold text-white leading-tight text-balance"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              A life built in
              <br />
              <span className="italic font-normal text-white/70">
                service and community
              </span>
            </h1>
            <p className="mt-6 text-white/65 text-lg max-w-2xl leading-relaxed">
              From neighbor to nonprofit leader to two-term mayor — Celeste
              Johnson&apos;s path to the Legislature is rooted in decades of
              showing up for the Wasatch Back.
            </p>
          </div>
        </section>

        {/* ─── INTRO WITH PHOTO ─── */}
        <section className="py-20 lg:py-28 px-5 bg-background">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-14 items-start">
            {/* Photo */}
            <div className="lg:col-span-2 relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-muted sticky top-28">
                <img
                  src="/images/celeste-community.jpg"
                  alt="Celeste Johnson with local farmers and community members in a Wasatch Back barn"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>
            {/* Bio text */}
            <div className="lg:col-span-3">
              <p className="text-[40px] text-foreground font-semibold leading-tight">
                Celeste has called the Wasatch Back home for decades, building
                her life here long before running for public office.
              </p>
              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Like so many on the Wasatch Back, she chose this community
                  because it felt rooted and worth protecting. As growth
                  accelerated, Celeste began showing up to city meetings with a
                  simple question: how do we plan for the future without losing
                  what brought us here in the first place?
                </p>
                <p>
                  She listened to farmers worried about being forced to sell,
                  families concerned about rapid development, and neighbors who
                  wanted change handled thoughtfully — not imposed from afar.
                  That concern turned into action.
                </p>
                <p>
                  Celeste helped organize a local nonprofit focused on
                  preserving Midway&apos;s open space and agricultural land,
                  working directly with landowners to understand what tools
                  would actually help them stay on their land, instead of
                  selling to developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── LEADERSHIP TIMELINE ─── */}
        <section
          className="py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-earth)' }}
          aria-labelledby="timeline-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-14">
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                Her Journey
              </span>
              <h2
                id="timeline-heading"
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                A record of showing up
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-10">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="sm:pl-16 relative"
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-4 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-section-earth hidden sm:block"
                      style={{ background: 'var(--section-earth)', borderColor: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div className="bg-background rounded-sm p-7 border border-border">
                      <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                        {item.period}
                      </span>
                      <h3
                        className="mt-2 text-xl font-semibold text-foreground"
                        style={{ fontFamily: "'Libre Baskerville', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── ACCOMPLISHMENTS ─── */}
        <section className="py-20 lg:py-28 px-5 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                  Impact
                </span>
                <h2
                  className="mt-3 text-4xl font-bold text-foreground text-balance"
                  style={{ fontFamily: "'Libre Baskerville', serif" }}
                >
                  What her leadership delivered
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  As mayor of Midway, Celeste helped the community plan
                  responsibly for the future while protecting what made it
                  special — and she built trust while doing it.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  {[
                    { stat: '2', label: 'Open Space Bonds Passed' },
                    { stat: '2', label: 'Terms as Mayor' },
                    { stat: '1×', label: 'Unopposed Re-election' },
                    { stat: '∞', label: 'Community Commitment' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-5 rounded-sm border border-border bg-muted/40"
                    >
                      <p
                        className="text-4xl font-bold text-primary"
                        style={{ fontFamily: "'Libre Baskerville', serif" }}
                      >
                        {item.stat}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional bio */}
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  The two open space bonds passed during her tenure unlocked
                  additional state and federal funding, delivering lasting
                  results for the community. During her time in office, Midway
                  also expanded trail connections, provided new transportation
                  options, supported new business opportunities, and grew its
                  arts programming — all while preserving its historically
                  rural character.
                </p>
                <p>
                  Her statewide work on the Utah State Land Conservancy Board
                  gave her a broader view of how smart policy can respect
                  private property, support working families, and protect the
                  landscapes that define Utah&apos;s communities.
                </p>
                <p>
                  Celeste is known as a steady, thoughtful leader who listens
                  first and follows through. She brings real-world experience,
                  a community-first approach to public service, and a deep
                  commitment to the people who call the Wasatch Back home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── VALUES ─── */}
        <section
          className="py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-dark)' }}
          aria-labelledby="values-heading"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
                Leadership Style
              </span>
              <h2
                id="values-heading"
                className="mt-3 text-4xl font-bold text-white text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Grounded values. Proven character.
              </h2>
              <p className="mt-5 text-white/65 leading-relaxed">
                Government works best when local voices are respected and
                balance, accountability, and common sense guide
                decision-making.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4" role="list">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 text-white/80 text-sm"
                >
                  <CheckCircle
                    size={18}
                    className="text-accent mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section
          className="py-16 px-5"
          style={{ background: 'var(--section-earth)' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl font-bold text-foreground text-balance"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Ready to support Celeste&apos;s campaign?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Help bring thoughtful, community-first leadership to Utah House
              District 59.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
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
