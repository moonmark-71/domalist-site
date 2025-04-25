export default function WholesalerCardSkeleton() {
    return (
      <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-4 animate-pulse">
        <div className="h-10 w-10 rounded-md bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-1/2 bg-gray-200 rounded" />
          <div className="h-3 w-1/3 bg-gray-200 rounded" />
        </div>
        <div className="h-6 w-16 bg-gray-200 rounded" />
      </div>
    );
  }
  