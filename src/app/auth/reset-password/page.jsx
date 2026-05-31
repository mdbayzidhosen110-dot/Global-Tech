'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const [email, setEmail]     = useState('');
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg,#e8517a,#f4874b)' }}>
              GT
            </div>
            <span className="text-xl font-bold text-gray-900">GlobalTech</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Reset your password</h1>
          <p className="text-sm text-gray-500 mt-1">We'll send you a link to reset it</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                <input
                  type="email" required value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all"
                />
              </div>

              <button type="submit" disabled={loading || !email}
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg,#e8517a,#f4874b)' }}>
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Sending…
                  </>
                ) : 'Send Reset Link'}
              </button>

              <p className="text-center text-sm text-gray-500">
                Remember it?{' '}
                <Link href="/auth" className="text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Back to sign in
                </Link>
              </p>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">Check your inbox</h2>
              <p className="text-sm text-gray-500 mb-1">We sent a reset link to</p>
              <p className="text-sm font-semibold text-gray-800 mb-5">{email}</p>
              <p className="text-xs text-gray-400 mb-5">Didn't get it? Check your spam folder or{' '}
                <button onClick={() => setSent(false)} className="text-orange-500 hover:underline">try again</button>.
              </p>
              <Link href="/auth"
                className="inline-block text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition"
                style={{ background: 'linear-gradient(135deg,#e8517a,#f4874b)' }}>
                Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
