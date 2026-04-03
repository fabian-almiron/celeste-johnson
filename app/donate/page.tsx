import Nav from '@/components/nav'
import Footer from '@/components/footer'
import InternalHeroBackground from '@/components/internal-hero-background'
import Link from 'next/link'
import { Shield, ArrowRight, Users, Mountain, Home } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate | Celeste Johnson for Utah House District 59',
  description:
    "Support Celeste Johnson's campaign for Utah House District 59. Help bring thoughtful, community-first leadership to the Wasatch Back.",
  alternates: {
    canonical: 'https://celestefordistrict59.com/donate',
  },
}

const reasons = [
  {
    icon: <Mountain size={20} />,
    text: 'Protect working farms and open spaces for future generations',
  },
  {
    icon: <Users size={20} />,
    text: 'Ensure local voices shape state-level decisions about the Wasatch Back',
  },
  {
    icon: <Home size={20} />,
    text: 'Champion housing policy that works for families, not just developers',
  },
  {
    icon: <Shield size={20} />,
    text: 'Support steady, accountable leadership in the Legislature',
  },
]

const amounts = [10, 25, 50, 100, 250, 500]

export default function DonatePage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section
          className="relative pt-36 pb-20 px-5 overflow-hidden"
          aria-labelledby="donate-heading"
        >
          <InternalHeroBackground />
          <div className="max-w-7xl mx-auto relative z-10">
            <div>
              <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
                Support the Campaign
              </span>
              <h1
                id="donate-heading"
                className="mt-3 text-5xl lg:text-7xl font-bold text-white leading-tight text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Invest in the
                <br />
                <span className="italic font-normal text-white/70">
                  Wasatch Back
                </span>
              </h1>
              <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-xl">
                Your contribution to Celeste Johnson&apos;s campaign for Utah
                House District 59 helps bring thoughtful, community-first
                leadership to the people who need it most.
              </p>
            </div>
          </div>
        </section>

        {/* ─── DONATION FORM ─── */}
        <section
          className="py-20 lg:py-28 px-5 bg-background"
          aria-labelledby="contribution-heading"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
            {/* Left: Why donate */}
            <div className="lg:col-span-2">
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                Why It Matters
              </span>
              <h2
                id="contribution-heading"
                className="mt-3 text-3xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Your donation supports a better future for District 59
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Every contribution — large or small — helps fund campaign
                outreach, community events, and the people-powered organizing
                that defines this race.
              </p>

              <ul className="mt-8 space-y-5">
                {reasons.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">
                      {item.icon}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-5 rounded-sm border border-border bg-muted/40">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={16} className="text-primary" aria-hidden="true" />
                  <p className="text-sm font-semibold text-foreground">
                    Secure &amp; transparent
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All contributions are subject to applicable Utah campaign
                  finance law. Paid for by Celeste Johnson for Utah House
                  District 59. Contributions are not tax-deductible.
                </p>
              </div>
            </div>

            {/* Right: Donation card */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-sm border border-border p-8 lg:p-10 shadow-sm">
                <h3
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Libre Baskerville', serif" }}
                >
                  Make a contribution
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Select an amount or enter a custom contribution below.
                </p>

                {/* Suggested amounts */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className="py-3 rounded-sm border border-border text-sm font-semibold text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label={`Donate $${amt}`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="mb-8">
                  <label
                    htmlFor="custom-amount"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                      $
                    </span>
                    <input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Other amount"
                      className="w-full pl-8 pr-4 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Placeholder donation embed / CTA */}
                <div className="rounded-sm border border-dashed border-primary/40 bg-primary/5 p-6 text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-3">
                    Secure donation processing powered by your campaign finance
                    platform.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    aria-label="Donate securely to Celeste Johnson's campaign"
                  >
                    Donate Securely Now
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Connect your preferred donation platform (ActBlue,
                    WinRed, Anedot, etc.) here.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield size={13} aria-hidden="true" />
                  256-bit SSL encryption — your information is secure
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── OTHER WAYS TO SUPPORT ─── */}
        <section
          className="py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-earth)' }}
          aria-labelledby="other-ways-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                id="other-ways-heading"
                className="text-3xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Can&apos;t donate right now?
              </h2>
              <p className="mt-3 text-muted-foreground">
                There are many ways to make a meaningful impact on this
                campaign.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'Volunteer Your Time',
                  desc: 'Join the campaign team for canvassing, events, phone banking, and more.',
                  link: '/get-involved',
                  cta: 'Get involved',
                },
                {
                  title: 'Spread the Word',
                  desc: 'Tell your neighbors, friends, and family about Celeste and what she stands for.',
                  link: '/get-involved',
                  cta: 'Learn how to help',
                },
                {
                  title: 'Attend an Event',
                  desc: "Come meet Celeste at community events happening across the Wasatch Back.",
                  link: '/get-involved#events',
                  cta: 'See events',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-background rounded-sm p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <h3
                    className="text-lg font-semibold text-foreground mb-2"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-3 transition-all duration-200"
                  >
                    {item.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TRUST SECTION ─── */}
        <section
          className="py-20 px-5"
          style={{ background: 'var(--section-dark)' }}
          aria-labelledby="transparency-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Shield
              size={40}
              className="text-accent mx-auto mb-6"
              aria-hidden="true"
            />
            <h2
              id="transparency-heading"
              className="text-3xl font-bold text-white text-balance"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              A campaign you can trust
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed text-lg">
              Celeste is committed to transparent, ethical campaigning.
              All contributions are reported in accordance with Utah campaign
              finance law. This campaign is funded by individuals like you,
              not PACs or outside special interests.
            </p>
            <p className="mt-5 text-white/40 text-xs">
              Paid for by Celeste Johnson for Utah House District 59.
              Contributions are not tax-deductible for federal income tax
              purposes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
