'use client';
import Link from 'next/link';

const CATEGORIES = [
  {
    title: 'Phones & Tablets',
    icon: '📱',
    links: ['Smartphones', 'Tablets', 'Accessories', 'Cases & Covers', 'Chargers'],
    href: '/products?category=phones',
  },
  {
    title: 'Laptops & Computers',
    icon: '💻',
    links: ['Laptops', 'Desktops', 'Monitors', 'Keyboards', 'Mice & Trackpads'],
    href: '/products?category=laptops',
  },
  {
    title: 'TVs & Audio',
    icon: '📺',
    links: ['Smart TVs', 'OLED TVs', 'Soundbars', 'Headphones', 'Speakers'],
    href: '/products?category=tvs',
  },
  {
    title: 'Gaming',
    icon: '🎮',
    links: ['Consoles', 'Games', 'Controllers', 'Gaming PCs', 'VR Headsets'],
    href: '/products?category=gaming',
  },
  {
    title: 'Cameras',
    icon: '📷',
    links: ['DSLR', 'Mirrorless', 'Action Cams', 'Drones', 'Lenses'],
    href: '/products?category=cameras',
  },
  {
    title: 'Smart Home',
    icon: '🏠',
    links: ['Smart Speakers', 'Security Cams', 'Smart Bulbs', 'Thermostats', 'Doorbells'],
    href: '/products?category=smart-home',
  },
];

export default function MegaMenu() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-50 animate-fade-in">
      <div className="container-custom py-8">
        <div className="grid grid-cols-6 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <Link
                href={cat.href}
                className="flex items-center gap-2 font-semibold text-dark-800 hover:text-orange-500 transition-colors mb-3"
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.title}
              </Link>
              <ul className="space-y-1.5">
                {cat.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`${cat.href}&sub=${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-600">🔥 Trending:</span>
          {['iPhone 16 Pro', 'RTX 5090', 'Samsung OLED', 'PS5 Pro', 'MacBook M4'].map((item) => (
            <Link
              key={item}
              href={`/search?q=${encodeURIComponent(item)}`}
              className="text-sm px-3 py-1 bg-orange-50 text-orange-600 rounded-full hover:bg-orange-100 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
