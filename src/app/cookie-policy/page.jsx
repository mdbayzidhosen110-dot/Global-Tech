import Link from 'next/link';

export const metadata = { title: 'Cookie Policy' };

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

const CookieRow = ({ name, type, purpose, duration }) => (
  <tr className="border-b border-gray-100 last:border-0">
    <td className="py-3 pr-4 font-mono text-xs text-gray-700">{name}</td>
    <td className="py-3 pr-4 text-xs">
      <span className="px-2 py-0.5 rounded-full text-xs font-medium"
        style={{ background: type === 'Essential' ? '#dcfce7' : type === 'Analytics' ? '#dbeafe' : '#fef3c7',
                 color: type === 'Essential' ? '#166534' : type === 'Analytics' ? '#1e40af' : '#92400e' }}>
        {type}
      </span>
    </td>
    <td className="py-3 pr-4 text-xs text-gray-600">{purpose}</td>
    <td className="py-3 text-xs text-gray-500">{duration}</td>
  </tr>
);

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-white py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg,#e8517a,#f4874b)' }}>
        <h1 className="text-4xl font-bold mb-3">Cookie Policy</h1>
        <p className="text-white/80 text-sm">Last updated: January 1, 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-10">
            This Cookie Policy explains how GlobalTech uses cookies and similar tracking technologies when you visit our website. By continuing to use our site, you consent to our use of cookies as described in this policy.
          </p>

          <Section title="What Are Cookies?">
            <p>Cookies are small text files stored on your device by your web browser when you visit a website. They help websites remember your preferences, keep you logged in, and understand how you use the site.</p>
          </Section>

          <Section title="Types of Cookies We Use">
            <div className="overflow-x-auto rounded-xl border border-gray-200 mt-4">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-xs font-semibold text-gray-700">Cookie</th>
                    <th className="py-3 px-4 text-xs font-semibold text-gray-700">Type</th>
                    <th className="py-3 px-4 text-xs font-semibold text-gray-700">Purpose</th>
                    <th className="py-3 px-4 text-xs font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 px-4">
                  <tr className="border-b border-gray-100"><td className="py-3 px-4 font-mono text-xs text-gray-700">gt_session</td><td className="py-3 px-4 text-xs"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Essential</span></td><td className="py-3 px-4 text-xs text-gray-600">Maintains your login session</td><td className="py-3 px-4 text-xs text-gray-500">Session</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3 px-4 font-mono text-xs text-gray-700">gt_cart</td><td className="py-3 px-4 text-xs"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Essential</span></td><td className="py-3 px-4 text-xs text-gray-600">Stores shopping cart contents</td><td className="py-3 px-4 text-xs text-gray-500">7 days</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3 px-4 font-mono text-xs text-gray-700">gt_currency</td><td className="py-3 px-4 text-xs"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Essential</span></td><td className="py-3 px-4 text-xs text-gray-600">Saves your preferred currency</td><td className="py-3 px-4 text-xs text-gray-500">30 days</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3 px-4 font-mono text-xs text-gray-700">_ga</td><td className="py-3 px-4 text-xs"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Analytics</span></td><td className="py-3 px-4 text-xs text-gray-600">Google Analytics visitor tracking</td><td className="py-3 px-4 text-xs text-gray-500">2 years</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3 px-4 font-mono text-xs text-gray-700">_fbp</td><td className="py-3 px-4 text-xs"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Marketing</span></td><td className="py-3 px-4 text-xs text-gray-600">Facebook Pixel ad measurement</td><td className="py-3 px-4 text-xs text-gray-500">3 months</td></tr>
                  <tr><td className="py-3 px-4 font-mono text-xs text-gray-700">gt_promo</td><td className="py-3 px-4 text-xs"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Marketing</span></td><td className="py-3 px-4 text-xs text-gray-600">Tracks promo popup display status</td><td className="py-3 px-4 text-xs text-gray-500">1 day</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Managing Cookies">
            <p>You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website, such as keeping items in your cart or staying logged in.</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
              <li><strong>Chrome:</strong> Settings → Privacy & Security → Cookies</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
            </ul>
          </Section>

          <Section title="Third-Party Cookies">
            <p>Some cookies are placed by third-party services that appear on our pages, such as Google Analytics and social media platforms. These are subject to the respective third party's privacy policies.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have questions about our use of cookies, contact us at <a href="mailto:privacy@globaltech.store" className="text-orange-500 hover:underline">privacy@globaltech.store</a>.</p>
          </Section>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-gray-500 justify-center">
          <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
          <span>·</span>
          <Link href="/" className="hover:text-orange-500 transition-colors">← Back to Store</Link>
        </div>
      </div>
    </div>
  );
}
