'use client';
import { useToast } from '@/hooks/useToast';
import { useEffect } from 'react';

const ICONS = {
  success: (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
  error: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
  info: (
    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
};

function Toast({ id, message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(() => onClose(id), 3500);
    return () => clearTimeout(t);
  }, [id, onClose]);

  return (
    <div className="flex items-center gap-3 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 min-w-[280px] max-w-sm animate-slide-in-up">
      {ICONS[type]}
      <p className="text-sm font-medium text-dark-800 flex-1">{message}</p>
      <button onClick={() => onClose(id)} className="text-gray-300 hover:text-gray-500 ml-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  );
}

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
      {toasts.map((t) => (
        <Toast key={t.id} {...t} onClose={removeToast} />
      ))}
    </div>
  );
}
