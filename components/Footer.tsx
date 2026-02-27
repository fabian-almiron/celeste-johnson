import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Heart, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent-light to-secondary bg-clip-text text-transparent">
              Celeste Johnson
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Community-focused leadership for Utah House District 59
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent-light bg-neutral-800 hover:bg-neutral-700 transition-all p-3 rounded-lg hover:scale-110 duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent-light bg-neutral-800 hover:bg-neutral-700 transition-all p-3 rounded-lg hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent-light bg-neutral-800 hover:bg-neutral-700 transition-all p-3 rounded-lg hover:scale-110 duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-accent-light transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-accent-light transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/issues" className="text-neutral-400 hover:text-accent-light transition-colors font-medium">
                  Issues
                </Link>
              </li>
              <li>
                <Link href="/endorsements" className="text-neutral-400 hover:text-accent-light transition-colors font-medium">
                  Endorsements
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="text-neutral-400 hover:text-accent-light transition-colors font-medium">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Campaign Info */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start text-neutral-400 hover:text-accent-light transition-colors group">
                <Mail size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:contact@celestefordistrict59.com" className="font-medium">
                  contact@<wbr/>celestefordistrict59.com
                </a>
              </li>
              <li className="flex gap-3 items-start text-neutral-400 group">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <address className="not-italic font-medium">
                  P.O. Box 1234<br />
                  Midway, UT 84049
                </address>
              </li>
            </ul>
          </div>

          {/* Get Involved CTA */}
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 md:p-8">
            <h4 className="font-bold mb-3 text-white text-lg">Get Involved</h4>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Join our campaign and help bring community-focused leadership to District 59.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full text-center bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-white px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Volunteer
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-neutral-500">
              © {currentYear} Celeste Johnson for House District 59. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-neutral-500">
              <span>Made with</span>
              <Heart size={14} className="text-secondary animate-pulse" />
              <span>for District 59</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-4 text-center text-xs text-neutral-600 bg-neutral-800/30 rounded-lg p-4">
          <p>
            Paid for by Celeste Johnson for House District 59.
            <br />
            Not authorized by any candidate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
