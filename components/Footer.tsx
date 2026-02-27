import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Celeste Johnson</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Community-focused leadership for Utah House District 59
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-secondary transition-colors p-2 hover:bg-neutral-800 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-secondary transition-colors p-2 hover:bg-neutral-800 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/issues" className="text-neutral-400 hover:text-white transition-colors">
                  Issues
                </Link>
              </li>
              <li>
                <Link href="/endorsements" className="text-neutral-400 hover:text-white transition-colors">
                  Endorsements
                </Link>
              </li>
            </ul>
          </div>

          {/* Campaign Info */}
          <div>
            <h4 className="font-semibold mb-4">Campaign</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-start text-neutral-400">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@celestefordistrict59.com" className="hover:text-white transition-colors">
                  contact@celestefordistrict59.com
                </a>
              </li>
              <li className="flex gap-3 items-start text-neutral-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  P.O. Box 1234<br />
                  Midway, UT 84049
                </address>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <p className="text-neutral-400 text-sm mb-4">
              Join our campaign and help bring community-focused leadership to District 59.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
            >
              Volunteer
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Celeste Johnson for House District 59. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-secondary" />
              <span>for District 59</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-4 text-center text-xs text-neutral-500">
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
