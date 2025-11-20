'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PortfolioItem } from '@/types';

// Placeholder portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elegant Garden Wedding',
    category: 'wedding',
    image: 'https://picsum.photos/seed/wedding1/600/800',
    description: 'A magical outdoor celebration',
    date: '2024-06-15',
    location: 'Rose Garden Estate',
  },
  {
    id: '2',
    title: 'Tech Summit 2024',
    category: 'corporate',
    image: 'https://picsum.photos/seed/corporate1/600/400',
    description: 'Annual technology conference',
    date: '2024-05-20',
    location: 'Convention Center',
  },
  {
    id: '3',
    title: 'Summer Music Festival',
    category: 'concert',
    image: 'https://picsum.photos/seed/concert1/800/600',
    description: 'Three-day outdoor music event',
    date: '2024-07-10',
    location: 'City Park',
  },
  {
    id: '4',
    title: 'Luxury Beach Wedding',
    category: 'wedding',
    image: 'https://picsum.photos/seed/wedding2/600/800',
    description: 'Sunset ceremony by the ocean',
    date: '2024-04-22',
    location: 'Coastal Resort',
  },
  {
    id: '5',
    title: 'Product Launch Gala',
    category: 'corporate',
    image: 'https://picsum.photos/seed/corporate2/600/400',
    description: 'High-profile product unveiling',
    date: '2024-03-15',
    location: 'Grand Hotel Ballroom',
  },
  {
    id: '6',
    title: 'Jazz Night Under Stars',
    category: 'concert',
    image: 'https://picsum.photos/seed/concert2/800/600',
    description: 'Intimate evening concert',
    date: '2024-08-05',
    location: 'Amphitheater',
  },
];

const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Weddings', value: 'wedding' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Concerts', value: 'concert' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950" id="portfolio">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient-blue">Our Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Memorable moments we've crafted for our clients
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

function PortfolioCard({ item, index }: PortfolioCardProps) {
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
          src={item.image}
          alt={item.title}
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
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-display font-bold mb-2 text-white">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 mb-4">{item.description}</p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-slate-400">
            {item.location && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.location}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
