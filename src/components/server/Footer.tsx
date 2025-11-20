import Link from 'next/link';
import Image from 'next/image';
import { navigationLinks } from '@/data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card mt-20">
      <div className="container-custom mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/logos/logo-white.png"
                  alt="Blue Moon Tales Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white drop-shadow-md">
                Blue Moon Tales
              </h3>
            </div>
            <p className="text-slate-400 mb-4">
              Crafting unforgettable moments for weddings, corporate events, live concerts, and celebrations.
            </p>
            <div className="flex gap-4">
              {/* Social Media Placeholders */}
              <a
                href="#"
                className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-gradient-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-gradient-gold">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:info@bluemoontales.com"
                  className="hover:text-white transition-colors"
                >
                  info@bluemoontales.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>123 Event Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>
            &copy; {currentYear} Blue Moon Tales. All rights reserved. Crafted with ❤️ for unforgettable celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}
