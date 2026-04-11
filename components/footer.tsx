import Link from 'next/link'
import { ACTBLUE_DONATE_URL } from '@/lib/donate-url'

export default function Footer() {
  return (
    <footer
      className="bg-[oklch(0.14_0.06_255)] text-white/70"
      aria-label="Site footer"
    >
      {/* Top CTA band */}
      <div className="border-b border-white/10 py-12 px-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-2xl font-semibold text-white text-balance"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Ready to make a difference?
            </p>
            <p className="text-white/60 mt-1 text-sm">
              Support Celeste and bring local voices to the Utah Legislature.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={ACTBLUE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-sm text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Donate
            </a>
            <Link
              href="/get-involved"
              className="px-6 py-2.5 rounded-sm text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="inline-block group mb-4"
            aria-label="Celeste Johnson for Utah House District 59 — Home"
          >
            <img
              src="/images/footer-logo.svg"
              alt=""
              width={1168}
              height={298}
              className="h-10 w-auto sm:h-11 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-sm text-white/55 leading-relaxed">
            Working for the Wasatch Back and the people who call it home.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
            Navigate
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Celeste', href: '/about' },
              { label: "Why I'm Running", href: '/why-im-running' },
              { label: 'Issues', href: '/issues' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Take Action */}
        <div>
          <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
            Take Action
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { label: 'Get Involved', href: '/get-involved' },
              { label: 'Volunteer', href: '/get-involved#volunteer' },
              { label: 'Attend an Event', href: '/get-involved#events' },
              { label: 'Donate', href: ACTBLUE_DONATE_URL, external: true },
            ].map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
            Connect
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="mailto:info@celestejohnsonforutah.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                info@celestejohnsonforutah.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-5 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            Paid for by Celeste Johnson for Utah House District 59.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Celeste Johnson Campaign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
