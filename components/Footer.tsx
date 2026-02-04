import Link from 'next/link';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/issues', label: 'Issues' },
    { href: '/endorsements', label: 'Endorsements' },
    { href: '/newsroom', label: 'Newsroom' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Celeste Johnson</h3>
            <p className="text-neutral-300 mb-4">
              Love Your Neighbor - Community-Focused Leadership for Utah House District 59
            </p>
            <p className="text-sm text-neutral-400">
              Former Mayor of Midway, dedicated to preserving our community values and ensuring smart, responsible growth.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-neutral-300">
              <FaEnvelope />
              <a
                href="mailto:contact@celestefordistrict59.com"
                className="hover:text-white transition-colors duration-200"
              >
                contact@celestefordistrict59.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              © 2026 Celeste Johnson for House District 59. All rights reserved.
            </p>
            <p className="text-sm text-neutral-400">
              Paid for by Celeste Johnson for House District 59
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
