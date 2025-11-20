'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { services } from '@/data/services';
import { initHorizontalScroll, initServiceCardHover } from '@/lib/animations/services-animations';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scrollContainerRef.current) return;

      // Only enable horizontal scroll on desktop
      if (window.innerWidth >= 768) {
        initHorizontalScroll(scrollContainerRef.current);
      }
    },
    { scope: containerRef, dependencies: [] }
  );

  useEffect(() => {
    // Add hover animations to service cards
    const cards = document.querySelectorAll<HTMLElement>('.service-card');
    cards.forEach((card) => {
      initServiceCardHover(card);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="section-padding bg-gradient-to-b from-slate-950 to-slate-900"
      id="services"
    >
      <div className="container-custom mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-4">
          <span className="text-gradient-blue">Our Services</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 text-center max-w-3xl mx-auto">
          Comprehensive event management solutions tailored to your unique vision
        </p>
      </div>

      {/* Horizontal Scroll Container (Desktop) */}
      <div
        ref={scrollContainerRef}
        className="hidden md:flex gap-8 overflow-x-hidden px-6"
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Vertical Stack (Mobile) */}
      <div className="md:hidden grid gap-6 px-6 max-w-2xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
  };
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card glass-card-strong p-8 flex-shrink-0 w-full md:w-80 lg:w-96 group hover:scale-105 transition-transform duration-300">
      {/* Icon */}
      <div className="service-icon text-6xl mb-6 flex items-center justify-center w-20 h-20 glass-card rounded-full mx-auto">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-display font-bold mb-4 text-center text-gradient-gold">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 text-center mb-6">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="w-4 h-4 text-blue-moon-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="btn-ghost w-full text-center group-hover:bg-white/20">
        Learn More
      </button>
    </div>
  );
}
