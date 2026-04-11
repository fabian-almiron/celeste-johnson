import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import InternalHeroBackground from '@/components/internal-hero-background'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | Celeste Johnson for Utah House District 59',
  description: 'The page you were looking for could not be found. Return to the Celeste Johnson for District 59 campaign website.',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section
          className="relative pt-36 pb-28 px-5 overflow-hidden min-h-[60vh] flex items-center"
          aria-labelledby="not-found-heading"
        >
          <InternalHeroBackground />
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <span
              className="block text-[8rem] font-bold leading-none text-white/10 select-none"
              aria-hidden="true"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              404
            </span>
            <h1
              id="not-found-heading"
              className="mt-2 text-4xl lg:text-5xl font-bold text-white text-balance"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Page not found
            </h1>
            <p className="mt-5 text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
              The page you were looking for doesn&apos;t exist or may have moved.
              Let&apos;s get you back on track.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-3.5 rounded-sm text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Go to Homepage
              </Link>
              <Link
                href="/issues"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                See the Issues <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
