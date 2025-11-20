'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Service } from '@/types';
import { services } from '@/data/services';

const filterCategories = [
  { label: 'All Services', value: 'all' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Weddings', value: 'wedding' },
  { label: 'Social', value: 'social' },
  { label: 'Concerts', value: 'concert' },
  { label: 'MICE', value: 'mice' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices =
    activeFilter === 'all'
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950" id="portfolio">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient-blue">Our Services</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Transforming visions into unforgettable experiences across every celebration
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category.value
                  ? 'btn-primary'
                  : 'glass-card hover:bg-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl glass-card h-80 ${
        index % 3 === 0 ? 'md:col-span-1 lg:row-span-2 lg:h-[656px]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 md:opacity-90'
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gold-accent-500 text-slate-950 mb-3">
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </span>

          {/* Icon */}
          <div className="text-4xl mb-3">{service.icon}</div>

          {/* Title */}
          <h3 className="text-2xl font-display font-bold mb-2 text-white">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 mb-4">{service.description}</p>

          {/* Features - Show on hover */}
          {isHovered && (
            <ul className="space-y-2 animate-fade-in">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <svg
                    className="w-4 h-4 text-gold-accent-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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
          )}
        </div>
      </div>
    </div>
  );
}
