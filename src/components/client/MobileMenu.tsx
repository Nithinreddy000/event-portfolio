'use client';

import { useUIStore } from '@/lib/store/ui-store';
import { navigationLinks } from '@/data/services';
import { useEffect } from 'react';

export default function MobileMenu() {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  // Close menu on navigation
  const handleLinkClick = () => {
    closeMobileMenu();
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50"
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        <nav
          className={`flex flex-col items-center justify-center h-full transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col items-center gap-8">
            {navigationLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-300 delay-${index * 100} ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-3xl font-display text-white hover:text-gradient-blue transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <div className="mt-12">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-secondary inline-block"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
