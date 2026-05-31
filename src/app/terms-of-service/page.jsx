import Link from 'next/link';

export const metadata = { title: 'Terms of Service' };

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-white py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg,#e8517a,#f4874b)' }}>
        <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
        <p className="text-white/80 text-sm">Last updated: January 1, 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-10">
            Please read these Terms of Service carefully before using GlobalTech. By accessing or using our website, you agree to be bound by these terms. If you do not agree, please do not use our services.
          </p>

          <Section title="1. Acceptance of Terms">
            <p>By creating an account, browsing, or making a purchase on GlobalTech, you confirm that you are at least 18 years old and agree to these Terms and our Privacy Policy.</p>
          </Section>

          <Section title="2. Products & Pricing">
            <p>We reserve the right to modify or discontinue any product at any time. Prices are subject to change without notice. In the event of a pricing error, we reserve the right to cancel orders placed at the incorrect price.</p>
            <p>All prices are shown in the currency selected and exclude applicable taxes unless stated otherwise.</p>
          </Section>

          <Section title="3. Orders & Payment">
            <p>By placing an order, you represent that the information provided is accurate and complete. We reserve the right to refuse or cancel any order for reasons including product availability, errors, or suspected fraud.</p>
            <p>Payment is due at the time of purchase. We accept Visa, Mastercard, PayPal, Amex, and Apple Pay.</p>
          </Section>

          <Section title="4. Shipping & Delivery">
            <p>Delivery times are estimates and not guaranteed. GlobalTech is not responsible for delays caused by carriers or customs. Risk of loss passes to you upon delivery to the carrier.</p>
          </Section>

          <Section title="5. Returns & Refunds">
            <p>We offer a 30-day return policy on most items in original, unopened condition. Items must be returned with original packaging and accessories. See our <Link href="/returns" className="text-orange-500 hover:underline">Returns page</Link> for full details.</p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>All content on this site—including text, graphics, logos, images, and software—is the property of GlobalTech Inc. and protected by intellectual property laws. You may not reproduce or distribute any content without written permission.</p>
          </Section>

          <Section title="7. Prohibited Conduct">
            <ul className="list-disc pl-5 space-y-2">
              <li>Circumventing security measures or accessing unauthorized areas</li>
              <li>Using bots, scrapers, or automated tools without permission</li>
              <li>Posting false, misleading, or defamatory content</li>
              <li>Infringing on intellectual property rights of GlobalTech or third parties</li>
            </ul>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>To the maximum extent permitted by law, GlobalTech shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services, even if advised of the possibility of such damages.</p>
          </Section>

          <Section title="9. Governing Law">
            <p>These Terms are governed by the laws of the State of California, USA, without regard to its conflict of law provisions. Disputes shall be resolved in the courts of San Francisco County, California.</p>
          </Section>

          <Section title="10. Changes to Terms">
            <p>We may revise these Terms at any time. Continued use of GlobalTech after changes are posted constitutes acceptance of the updated Terms.</p>
          </Section>

          <Section title="11. Contact">
            <div className="bg-gray-50 rounded-xl p-4 text-sm">
              <p className="font-semibold text-gray-800">GlobalTech Inc.</p>
              <p>123 Tech Boulevard, San Francisco, CA 94105</p>
              <p><a href="mailto:legal@globaltech.store" className="text-orange-500 hover:underline">legal@globaltech.store</a></p>
            </div>
          </Section>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-gray-500 justify-center">
          <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/cookie-policy" className="hover:text-orange-500 transition-colors">Cookie Policy</Link>
          <span>·</span>
          <Link href="/" className="hover:text-orange-500 transition-colors">← Back to Store</Link>
        </div>
      </div>
    </div>
  );
}
