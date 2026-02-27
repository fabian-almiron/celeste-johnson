'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/issues', label: 'Issues' },
    { href: '/endorsements', label: 'Endorsements' },
    { href: '/newsroom', label: 'Newsroom' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center flex-shrink-0 group"
          >
            <div className="h-10 md:h-12 flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/campaign-logo.png"
                alt="Celeste Johnson for House District 59"
                width={120}
                height={60}
                className="h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-primary font-semibold transition-all duration-200 px-4 py-2 rounded-lg hover:bg-neutral-100 relative after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-block bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
            >
              Volunteer
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-neutral-700 hover:text-primary transition-all p-2 hover:bg-neutral-100 rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 mt-3 pt-4 pb-3 animate-slideDown">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 hover:text-primary hover:bg-neutral-50 font-semibold transition-all duration-200 px-3 py-2.5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-200 mt-2 shadow-md hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Volunteer
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
