export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
      <div className="bg-gray-200 h-52 w-full" />
      <div className="p-4 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="flex items-center gap-2 pt-1">
          <div className="h-5 bg-gray-200 rounded w-1/4" />
          <div className="h-4 bg-gray-100 rounded w-1/5" />
        </div>
        <div className="h-9 bg-gray-200 rounded-xl w-full mt-2" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-200 rounded-2xl h-96" />
        <div className="space-y-4">
          <div className="h-3 bg-gray-200 rounded w-1/4" />
          <div className="h-7 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-8 bg-gray-200 rounded w-1/4" />
          <div className="h-3 bg-gray-100 rounded w-full" />
          <div className="h-3 bg-gray-100 rounded w-5/6" />
          <div className="h-3 bg-gray-100 rounded w-4/6" />
          <div className="h-12 bg-gray-200 rounded-xl w-full mt-4" />
          <div className="h-12 bg-gray-100 rounded-xl w-full" />
        </div>
      </div>
    </div>
  );
}

export function CartSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-4 p-4 bg-white rounded-xl">
          <div className="w-20 h-20 bg-gray-200 rounded-xl flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-100 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGridSkeleton;
