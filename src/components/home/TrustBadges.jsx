'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BADGES = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M5 12h14M5 12l4-4M5 12l4 4M19 12l-4-4M19 12l-4 4"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>),
    title: 'Free Returns',
    sub: '30-day hassle-free return policy',
    accent: '#e8517a',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>),
    title: 'Free Shipping',
    sub: 'On all orders over $99 — worldwide',
    accent: '#f4874b',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
    title: 'Secure Payments',
    sub: '256-bit SSL encryption on every transaction',
    accent: '#6366f1',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>),
    title: '24/7 Support',
    sub: 'Expert help available any time, any day',
    accent: '#10b981',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>),
    title: '100% Genuine',
    sub: 'All products are official & brand-certified',
    accent: '#f59e0b',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>),
    title: 'Easy Payment',
    sub: 'Visa, Mastercard, PayPal, Apple Pay & more',
    accent: '#ec4899',
  },
];

function BadgeCard({ badge, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="group bg-white px-5 py-6 flex flex-col items-center text-center gap-3 transition-all duration-200 hover:bg-gray-50 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 80}ms`,
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:rotate-3"
        style={{
          background: `${badge.accent}12`,
          color: badge.accent,
          transform: visible ? 'scale(1)' : 'scale(0.7)',
          transition: `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 80 + 100}ms`,
        }}
      >
        {badge.icon}
      </div>
      <div>
        <p className="font-bold text-sm text-gray-900 leading-tight mb-0.5 group-hover:text-gray-800 transition-colors">{badge.title}</p>
        <p className="text-xs text-gray-500 leading-snug">{badge.sub}</p>
      </div>
    </div>
  );
}

export default function TrustBadges() {
  const [labelRef, labelVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="container-custom">
        <p
          ref={labelRef}
          className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 transition-all duration-500"
          style={{
            opacity: labelVisible ? 1 : 0,
            transform: labelVisible ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          Why shop with GlobalTech
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-100 rounded-2xl overflow-hidden">
          {BADGES.map((badge, i) => (
            <BadgeCard key={i} badge={badge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
