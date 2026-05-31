'use client';
import { useState } from 'react';

const FAQS = [
  {
    category: '🛒 Orders & Shipping',
    items: [
      { q: 'How long does shipping take?', a: 'Standard shipping takes 3–5 business days. Express shipping (1–2 days) and Same-Day delivery (select cities) are available at checkout.' },
      { q: 'Do you ship internationally?', a: 'Yes! We ship to 120+ countries. International orders typically take 7–14 business days. Customs fees may apply depending on your country.' },
      { q: 'Can I track my order?', a: 'Absolutely. Once your order ships, you\'ll receive a tracking link via email. You can also view order status in your account under Order History.' },
      { q: 'Can I change or cancel my order?', a: 'Orders can be modified or cancelled within 1 hour of placing them. After that, the order enters processing. Contact support immediately if you need changes.' },
    ],
  },
  {
    category: '↩️ Returns & Refunds',
    items: [
      { q: 'What is your return policy?', a: 'We accept returns within 30 days of delivery for most items, provided they\'re in original condition with all packaging. See our Returns page for details.' },
      { q: 'How do I start a return?', a: 'Log into your account, go to Order History, and click "Return Item" next to the product. You\'ll receive a prepaid return label via email within 24 hours.' },
      { q: 'When will I get my refund?', a: 'Refunds are processed within 3–5 business days after we receive and inspect the returned item. It may take up to 10 days to appear on your statement.' },
    ],
  },
  {
    category: '💳 Payments',
    items: [
      { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and Cash on Delivery (select regions).' },
      { q: 'Is my payment information secure?', a: 'Yes. All payments are encrypted with 256-bit SSL and processed through PCI-DSS certified providers. We never store your full card number.' },
      { q: 'Do you offer buy now, pay later?', a: 'Yes — Klarna and Afterpay are available at checkout, allowing you to split payments into 4 interest-free installments.' },
    ],
  },
  {
    category: '📦 Products & Warranty',
    items: [
      { q: 'Are your products genuine/authentic?', a: 'Every product on GlobalTech is 100% authentic. We source directly from authorized distributors and manufacturers. No grey-market goods.' },
      { q: 'What warranty do products come with?', a: 'All products include the manufacturer\'s standard warranty. Additionally, we offer extended GlobalTech Protection plans at checkout.' },
      { q: 'What if my item arrives damaged?', a: 'Contact us within 48 hours with photos of the damage. We\'ll arrange a replacement or full refund — no need to return the damaged item in most cases.' },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
      >
        <span className="font-medium text-gray-800 text-sm">{q}</span>
        <span className={`text-xl text-gray-400 transition-transform duration-200 flex-shrink-0 ml-3 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-14">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h1>
          <p className="text-gray-500">Find answers to the most common questions. Still need help? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>.</p>
        </div>

        <div className="space-y-10">
          {FAQS.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-lg font-bold text-gray-800 mb-4">{category}</h2>
              <div className="space-y-3">
                {items.map(({ q, a }) => (
                  <AccordionItem key={q} q={q} a={a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-blue-50 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🤔</div>
          <h3 className="font-bold text-gray-800 mb-2">Still have questions?</h3>
          <p className="text-gray-500 text-sm mb-5">Our support team is available 24/7 to help.</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
