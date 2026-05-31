'use client';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CATEGORY_ICONS = {
  phones: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>),
  laptops: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>),
  tvs: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>),
  gaming: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="11" r="1" fill="currentColor"/><circle cx="17" cy="13" r="1" fill="currentColor"/><path d="M2 12C2 7 5.5 4 12 4s10 3 10 8-2 8-10 8S2 17 2 12z"/></svg>),
  cameras: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>),
  drones: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>),
  smartwatch: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="5" y="7" width="14" height="12" rx="3"/><path d="M16 7V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2M16 19v1.5a1.5 1.5 0 0 1-3 0V19M8 19v1.5a1.5 1.5 0 0 1-3 0V19"/><polyline points="12 10 12 13 14 13"/></svg>),
  vr: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z"/><circle cx="8.5" cy="11" r="2"/><circle cx="15.5" cy="11" r="2"/><path d="M10.5 11h3"/></svg>),
  networking: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>),
  desktop: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
  entertainment: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" opacity="0.2"/><polygon points="5 3 19 12 5 21 5 3"/></svg>),
  audio: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>),
  'smart-home': (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
};

function CategoryCard({ cat, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 });
  return (
    <Link ref={ref} href={`/categories/${cat.id}`}
      className="group flex flex-col items-center gap-3 p-5 bg-white rounded-2xl shadow-card hover:shadow-card-lg hover:-translate-y-2 transition-all duration-300 reveal reveal-scale stagger-child"
      style={{ '--delay': `${index * 60}ms`, opacity: visible ? 1 : 0, transform: visible ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(16px)' }}>
      <div className="w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center text-orange-500 group-hover:text-orange-600 transition-all duration-300 group-hover:scale-110">
        {CATEGORY_ICONS[cat.id] || (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-7 h-7"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>)}
      </div>
      <div className="text-center">
        <p className="font-semibold text-sm text-dark-800 group-hover:text-orange-500 transition-colors">{cat.label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{cat.count > 0 ? `${cat.count}+ items` : 'View all'}</p>
      </div>
    </Link>
  );
}

export default function CategoryGrid() {
  const [titleRef, titleVisible] = useScrollAnimation();
  return (
    <section className="container-custom py-14">
      <div ref={titleRef}>
        <h2 className={`section-title section-underline mb-2 transition-all duration-500 ${titleVisible ? 'visible opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Shop by Category</h2>
        <p className={`text-gray-500 mb-8 transition-all duration-500 delay-100 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Find exactly what you need</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {CATEGORIES.map((cat, i) => <CategoryCard key={cat.id} cat={cat} index={i} />)}
      </div>
    </section>
  );
}
