'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('GlobalTech error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl mb-4">⚠️</div>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Something went wrong</h1>
      <p className="text-gray-500 max-w-md mb-2">
        An unexpected error occurred. Our team has been notified.
      </p>
      {error?.message && (
        <p className="text-xs text-gray-400 bg-gray-100 rounded-lg px-4 py-2 mb-6 font-mono max-w-sm truncate">
          {error.message}
        </p>
      )}
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition"
        >
          Try Again
        </button>
        <a
          href="/"
          className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-semibold text-sm hover:border-blue-400 hover:text-blue-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
