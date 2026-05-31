import { ProductGridSkeleton } from '@/components/ui/Skeletons';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse" />
        <ProductGridSkeleton count={8} />
      </div>
    </div>
  );
}
