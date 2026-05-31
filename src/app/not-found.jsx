import Link from 'next/link';

export default function NotFound() {
  const links = [
    { href: '/',          label: '🏠 Home' },
    { href: '/products',  label: '🛍️ Products' },
    { href: '/account',   label: '👤 My Account' },
    { href: '/contact',   label: '💬 Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-extrabold text-blue-100 select-none mb-2">404</div>
      <div className="text-5xl mb-4">😕</div>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Page Not Found</h1>
      <p className="text-gray-500 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition ${
              href === '/'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
