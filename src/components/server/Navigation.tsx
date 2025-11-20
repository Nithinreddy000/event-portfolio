import Link from 'next/link';
import Image from 'next/image';
import { navigationLinks } from '@/data/services';
import MobileMenu from '@/components/client/MobileMenu';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 md:h-24">
      <div className="container-custom mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Professional Brand Mark (Adjust width here freely) */}
          <Link href="/" className="flex items-center group">
            {/* Logo Container - Height is constrained, width is flexible */}
              <div className="relative md:h-20 lg:h-24 aspect-[4/1] group-hover:scale-105 transition-all duration-300" style={{height:'10rem', marginLeft:'-15rem'}}>
                            <div className="absolute inset-0 bg-blue-moon-400/30 rounded-full blur-2xl group-hover:bg-blue-moon-400/50 transition-all duration-300" />
                            <Image
                              src="/logos/logo-white.png"
                              alt="Blue Moon Tales"
                              fill
                              className="object-contain relative z-10 drop-shadow-2xl"
                              priority
                            />
                </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
