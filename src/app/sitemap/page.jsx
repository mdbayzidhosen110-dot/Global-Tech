import Link from 'next/link';

export const metadata = { title: 'Sitemap' };

const SitemapSection = ({ title, links }) => (
  <div className="mb-8">
    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">{title}</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link href={href}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500 transition-colors group">
            <svg className="w-3 h-3 text-orange-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
            </svg>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SECTIONS = [
  { title: 'Main', links: [
    { label: 'Home', href: '/' },
    { label: 'Flash Deals', href: '/deals' },
    { label: 'PC Builder', href: '/pc-builder' },
    { label: 'Compare Products', href: '/compare' },
    { label: 'Stores', href: '/stores' },
  ]},
  { title: 'Shop by Category', links: [
    { label: 'Phones', href: '/products?category=phones' },
    { label: 'Laptops', href: '/products?category=laptops' },
    { label: 'TVs & Audio', href: '/products?category=tvs' },
    { label: 'Gaming', href: '/products?category=gaming' },
    { label: 'Cameras', href: '/products?category=cameras' },
    { label: 'Smart Home', href: '/products?category=smart-home' },
    { label: 'All Products', href: '/products' },
  ]},
  { title: 'Account', links: [
    { label: 'Sign In / Register', href: '/auth' },
    { label: 'My Account', href: '/account' },
    { label: 'Wishlist', href: '/wishlist' },
    { label: 'Cart', href: '/cart' },
    { label: 'Loyalty Rewards', href: '/loyalty' },
    { label: 'Track Order', href: '/track' },
  ]},
  { title: 'Support', links: [
    { label: 'Support Hub', href: '/support' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Returns & Exchanges', href: '/returns' },
    { label: 'Checkout', href: '/checkout' },
  ]},
  { title: 'Company', links: [
    { label: 'About Us', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ]},
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-white py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg,#e8517a,#f4874b)' }}>
        <h1 className="text-4xl font-bold mb-3">Sitemap</h1>
        <p className="text-white/80 text-sm">All pages on GlobalTech</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {SECTIONS.map(s => <SitemapSection key={s.title} {...s} />)}
          </div>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-gray-500 justify-center">
          <Link href="/" className="hover:text-orange-500 transition-colors">← Back to Store</Link>
        </div>
      </div>
    </div>
  );
}
