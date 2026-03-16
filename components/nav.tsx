'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: "Why I'm Running", href: '/why-im-running' },
  { label: 'Issues', href: '/issues' },
  { label: 'Get Involved', href: '/get-involved' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[oklch(0.14_0.06_255)]/95 shadow-lg shadow-black/20 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="flex flex-col leading-tight group"
          aria-label="Celeste Johnson for Utah House District 59 — Home"
        >
          <span
            className="text-white font-bold tracking-wide text-lg transition-opacity group-hover:opacity-80"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Celeste Johnson
          </span>
          <span className="text-white/60 text-xs font-light tracking-widest uppercase">
            Utah House District 59
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/donate"
            className="ml-2 px-5 py-2 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200 bg-accent text-accent-foreground hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 -mr-2 transition-transform duration-200"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav
          className="bg-[oklch(0.16_0.08_258)] border-t border-white/10 px-5 pt-4 pb-6 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/85 hover:text-white py-3 text-base font-medium border-b border-white/10 last:border-0 transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-4 px-5 py-3 rounded-sm text-center text-sm font-semibold tracking-wide bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
