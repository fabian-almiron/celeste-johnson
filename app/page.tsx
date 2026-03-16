import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Mountain, TreePine, Users, Home, ChevronDown, ArrowRight, Quote } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
          aria-labelledby="hero-headline"
        >
          {/* Background image placeholder — replace with campaign photo */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            }}
            aria-hidden="true"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, oklch(0.12 0.025 165 / 0.75) 0%, oklch(0.14 0.02 160 / 0.85) 60%, oklch(0.14 0.02 160 / 0.95) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Hero content */}
          <div className="relative z-10 text-center px-5 max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-block text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-in">
              Utah House District 59
            </span>
            <h1
              id="hero-headline"
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-6 animate-fade-up"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Celeste
              <br />
              <span className="italic font-normal">Johnson</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10 animate-fade-up delay-200">
              Working for the Wasatch Back and the people who call it home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link
                href="/donate"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide bg-accent text-accent-foreground hover:opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Donate to the Campaign
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold tracking-wide border border-white/40 text-white hover:bg-white/10 transition-colors duration-200"
              >
                Get Involved
              </Link>
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
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=750&width=600"
                  alt="Celeste Johnson, candidate for Utah House District 59"
                  className="w-full h-full object-cover"
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
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A life built in the{' '}
                <span className="italic">Wasatch Back</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Celeste Johnson is the former two-term mayor of Midway, a wife,
                mother of four, and a fierce advocate for the people and spaces
                that make the Wasatch Back home.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                She is running for Utah House District 59 to center local
                voices in decision-making, protect the character of our
                communities, and make sure growth and land-use policies work
                for the people who live and work here — not developers at the
                state legislature.
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
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Proven leadership. Local roots.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Two terms as mayor. A career built in service. Experience
                that speaks for itself.
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
                    style={{ fontFamily: "'Playfair Display', serif" }}
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

        {/* ─── KEY ISSUES PREVIEW ─── */}
        <section className="py-20 lg:py-28 px-5 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                The Issues
              </span>
              <h2
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Celeste is fighting for
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                From protecting working farms to ensuring housing policy
                reflects local reality, these are the issues that define this
                race.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  number: '01',
                  title: 'Protecting Farms, Open Spaces & Community Character',
                  body: "The Wasatch Back is defined by its working farms, open land, and small-town character. Once those are gone, they're gone for good.",
                  href: '/issues#farms',
                },
                {
                  number: '02',
                  title: 'Local Voices, Local Choices',
                  body: "Communities should solve problems locally, with the people who understand the impacts best. State-level decisions shouldn't override that.",
                  href: '/issues#local',
                },
                {
                  number: '03',
                  title: 'Housing Affordability That Actually Works',
                  body: 'Housing affordability on the Wasatch Back is unique. Building more units alone won\'t solve the problem if those homes aren\'t accessible to working families.',
                  href: '/issues#housing',
                },
                {
                  number: '04',
                  title: 'Strong Communities, Healthy Families',
                  body: 'Strong communities are built when families feel safe, supported, and able to thrive — and when government plays a responsible, practical role.',
                  href: '/issues#community',
                },
              ].map((issue) => (
                <Link
                  key={issue.number}
                  href={issue.href}
                  className="group relative p-8 rounded-sm border border-border hover:border-primary/40 hover:shadow-lg bg-card transition-all duration-300 overflow-hidden"
                >
                  <span
                    className="absolute top-5 right-6 text-5xl font-bold text-border group-hover:text-primary/10 transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    aria-hidden="true"
                  >
                    {issue.number}
                  </span>
                  <h3
                    className="text-xl font-semibold text-foreground mb-3 text-balance pr-12"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {issue.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {issue.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
                    Read more <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
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
            style={{ fontFamily: "'Playfair Display', serif" }}
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
                  fontFamily: "'Playfair Display', serif",
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
                style={{ fontFamily: "'Playfair Display', serif" }}
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
                    style={{ fontFamily: "'Playfair Display', serif" }}
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
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Support this campaign
            </h2>
            <p className="mt-5 text-white/75 text-lg leading-relaxed">
              Your contribution helps Celeste reach more voters, organize
              local events, and bring thoughtful, community-first leadership
              to the Wasatch Back.
            </p>
            <Link
              href="/donate"
              className="mt-9 inline-block px-10 py-4 rounded-sm text-sm font-bold tracking-wide bg-white text-primary hover:bg-white/90 transition-colors hover:scale-[1.02] active:scale-[0.98] duration-200"
            >
              Donate Now
            </Link>
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
