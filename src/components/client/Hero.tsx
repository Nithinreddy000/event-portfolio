'use client';

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { initHeroParallax, initHeroTextAnimation, initScrollIndicator } from '@/lib/animations/hero-animations';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!moonRef.current || !containerRef.current) return;

      // Initialize animations
      initHeroParallax(moonRef.current);
      initHeroTextAnimation(containerRef.current);
      initScrollIndicator();
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section
      ref={containerRef}
      className="hero-section relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-moon-950 via-slate-900 to-slate-950"
      id="hero"
    >
      {/* Animated Background Moon */}
      <div
        ref={moonRef}
        className="moon absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-moon-400 to-blue-moon-600 rounded-full blur-3xl opacity-30"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* 3D Moon Illustration */}
      <div className="moon absolute w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center z-10">
        <div className="relative w-full h-full gpu-accelerated">
          {/* Moon SVG/Emoji Placeholder */}
          <span className="text-[280px] md:text-[420px] absolute inset-0 flex items-center justify-center animate-float">
            🌙
          </span>
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-blue-moon-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="relative h-30 w-auto md:h-20 lg:h-24 aspect-[4/1] group-hover:scale-105 transition-all duration-300" style={{height: '30rem', marginLeft: '-28rem'  }}>
              <div className="absolute inset-0 bg-blue-moon-400/30 rounded-full blur-2xl group-hover:bg-blue-moon-400/50 transition-all duration-300" />
              <Image
                src="/logos/logo-white.png"
                alt="Blue Moon Tales"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm font-medium">Scroll Down</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
}
