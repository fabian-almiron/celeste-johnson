'use client'

import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Mail, Calendar, MessageSquare, Users } from 'lucide-react'

export default function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'volunteer',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder — connect to form service (e.g. Formspree, ActionNetwork, etc.)
    setSubmitted(true)
  }

  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section
          className="relative pt-36 pb-20 px-5"
          style={{ background: 'var(--section-dark)' }}
          aria-labelledby="get-involved-heading"
        >
          <div className="max-w-7xl mx-auto">
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Join the Campaign
            </span>
            <h1
              id="get-involved-heading"
              className="mt-3 text-5xl lg:text-7xl font-bold text-white leading-tight text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get involved
              <br />
              <span className="italic font-normal text-white/70">
                make a difference
              </span>
            </h1>
            <p className="mt-6 text-white/65 text-lg max-w-2xl leading-relaxed">
              Whether you volunteer your time, attend a community event, or
              simply stay connected, every action helps bring local voices to
              the Utah Legislature.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Volunteer', 'Events', 'Stay Updated', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 rounded-sm border border-white/25 text-white/70 hover:border-white/50 hover:text-white text-sm transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WAYS TO HELP ─── */}
        <section
          className="py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-earth)' }}
          aria-labelledby="ways-to-help-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                How to Help
              </span>
              <h2
                id="ways-to-help-heading"
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Every contribution counts
              </h2>
              <p className="mt-4 text-muted-foreground">
                No matter how much time you have, there&apos;s a meaningful role
                for you in this campaign.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Users size={24} />,
                  title: 'Volunteer',
                  desc: 'Join the team on the ground. Canvass neighborhoods, help at events, make calls, and support the campaign directly.',
                  cta: 'Sign up to volunteer',
                  anchor: '#volunteer',
                },
                {
                  icon: <Calendar size={24} />,
                  title: 'Attend an Event',
                  desc: "Meet Celeste at upcoming community events, town halls, and campaign gatherings across the Wasatch Back.",
                  cta: 'See upcoming events',
                  anchor: '#events',
                },
                {
                  icon: <Mail size={24} />,
                  title: 'Stay Updated',
                  desc: 'Get campaign news, event announcements, and policy updates delivered directly to your inbox.',
                  cta: 'Sign up for updates',
                  anchor: '#stay-updated',
                },
                {
                  icon: <MessageSquare size={24} />,
                  title: 'Spread the Word',
                  desc: 'Share Celeste\'s campaign with friends, neighbors, and community members who care about the Wasatch Back.',
                  cta: 'Contact the campaign',
                  anchor: '#contact',
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.anchor}
                  className="bg-background rounded-sm p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group flex flex-col"
                >
                  <div className="text-primary mb-4 group-hover:scale-105 transition-transform duration-200 w-fit">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold text-foreground mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
                    {item.cta} <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VOLUNTEER FORM ─── */}
        <section
          id="volunteer"
          className="scroll-mt-20 py-20 lg:py-28 px-5 bg-background"
          aria-labelledby="volunteer-heading"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                Volunteer
              </span>
              <h2
                id="volunteer-heading"
                className="mt-3 text-4xl font-bold text-foreground text-balance"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Join the campaign team
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Volunteers are the backbone of every local campaign. Whether
                you can commit to weekly hours or just a few weekends,
                there&apos;s a role for you.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Canvassing neighborhoods',
                  'Phone and text banking',
                  'Event setup and support',
                  'Social media and digital outreach',
                  'Data entry and administrative support',
                  'Yard sign distribution',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-card rounded-sm border border-border p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-primary text-4xl mb-4">✓</div>
                  <h3
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Thank you for signing up!
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    The campaign team will be in touch soon with next steps.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary hover:underline"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-xl font-semibold text-foreground mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Sign up to get involved
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                          placeholder="(435) 555-0100"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        How would you like to help?
                      </label>
                      <select
                        id="interest"
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      >
                        <option value="volunteer">Volunteer (canvassing, events, etc.)</option>
                        <option value="phone">Phone / text banking</option>
                        <option value="events">Attend events</option>
                        <option value="digital">Social media & digital outreach</option>
                        <option value="updates">Just stay updated</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Anything else you&apos;d like to share?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us a bit about yourself or ask any questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-sm text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      Join the Campaign
                    </button>
                    <p className="text-center text-xs text-muted-foreground">
                      Your information will only be used for campaign communications.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ─── EVENTS ─── */}
        <section
          id="events"
          className="scroll-mt-20 py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-earth)' }}
          aria-labelledby="events-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                  Events
                </span>
                <h2
                  id="events-heading"
                  className="mt-3 text-4xl font-bold text-foreground text-balance"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Meet Celeste in your community
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Celeste is hosting events across the Wasatch Back — town
                  halls, meet-and-greets, and community conversations. Check
                  back for upcoming dates and locations.
                </p>
                <div className="mt-8 p-6 rounded-sm border border-dashed border-border bg-background text-center">
                  <Calendar size={32} className="text-muted-foreground mx-auto mb-3" aria-hidden="true" />
                  <p className="text-muted-foreground text-sm">
                    Event listings coming soon. Sign up below to be notified
                    when new events are announced.
                  </p>
                  <a
                    href="#stay-updated"
                    className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-3 transition-all duration-200"
                  >
                    Get event updates <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Community gathering in the Wasatch Back"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── STAY UPDATED ─── */}
        <section
          id="stay-updated"
          className="scroll-mt-20 py-20 lg:py-28 px-5 bg-background"
          aria-labelledby="updates-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
              Stay Updated
            </span>
            <h2
              id="updates-heading"
              className="mt-3 text-4xl font-bold text-foreground text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stay connected to the campaign
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sign up for campaign updates, event announcements, and news from
              Celeste and the team.
            </p>
            <form
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-sm text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              Paid for by Celeste Johnson for Utah House District 59.
            </p>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section
          id="contact"
          className="scroll-mt-20 py-20 lg:py-28 px-5"
          style={{ background: 'var(--section-dark)' }}
          aria-labelledby="contact-heading"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
                Contact
              </span>
              <h2
                id="contact-heading"
                className="mt-3 text-4xl font-bold text-white text-balance"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Reach the campaign
              </h2>
              <p className="mt-5 text-white/65 leading-relaxed">
                Have a question, a media inquiry, or want to connect the
                campaign with an organization or community group? Reach out.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@celestejohnson59.com"
                  className="flex items-center gap-3 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <Mail size={18} className="text-accent" aria-hidden="true" />
                  info@celestejohnson59.com
                </a>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-sm border border-white/25 text-white/70 hover:text-white hover:border-white/50 text-sm transition-all duration-200"
                  aria-label="Follow on Facebook"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-sm border border-white/25 text-white/70 hover:text-white hover:border-white/50 text-sm transition-all duration-200"
                  aria-label="Follow on Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="bg-white/5 rounded-sm border border-white/10 p-8">
              <p
                className="text-white font-semibold text-lg mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Media Inquiries
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                For press inquiries, interview requests, or media kit
                information, please email the campaign directly.
              </p>
              <p
                className="text-white font-semibold text-lg mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Endorsements & Organizations
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Organizations interested in endorsing Celeste&apos;s campaign are
                invited to reach out via email to begin the process.
              </p>
              <a
                href="mailto:info@celestejohnson59.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Send a Message <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── DONATE CTA ─── */}
        <section
          className="py-16 px-5 text-center"
          style={{ background: 'var(--primary)' }}
        >
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-bold text-white text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your involvement matters — so does your support
            </h2>
            <p className="mt-3 text-white/70">
              If you can&apos;t volunteer, a contribution to the campaign helps
              Celeste reach more voters across the Wasatch Back.
            </p>
            <Link
              href="/donate"
              className="mt-7 inline-block px-8 py-3.5 rounded-sm text-sm font-semibold bg-white text-primary hover:bg-white/90 transition-colors"
            >
              Donate to the Campaign
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
