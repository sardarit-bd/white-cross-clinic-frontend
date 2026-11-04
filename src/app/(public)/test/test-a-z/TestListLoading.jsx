"use client";

export default function TestListLoading() {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto py-10 pt-48">
        
        {/* Sticky Alphabet Filter Skeleton */}
        <div className="z-20 bg-(--bgLight) py-3 px-3 shadow-sm">
          <div className="flex flex-wrap gap-3 text-base font-medium">
            {/* Alphabet buttons skeleton */}
            {[...Array(15)].map((_, index) => (
              <div
                key={index}
                className="w-12 h-10 rounded-lg bg-gray-200 animate-pulse"
              />
            ))}
            
            {/* Profiles button skeleton */}
            <div className="w-20 h-10 rounded-lg bg-gray-200 animate-pulse" />
          </div>
        </div>

        {/* Heading Skeleton */}
        <div className="mt-8 mb-3">
          <div className="h-8 w-64 bg-gray-200 animate-pulse rounded" />
        </div>

        {/* Subheading Skeleton */}
        <div className="mb-6">
          <div className="h-4 w-96 bg-gray-200 animate-pulse rounded" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="rounded-xl border border-(--borderLight) bg-white p-6 shadow-(--shadowCard)"
            >
              <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded" />
              <div className="mt-3 h-3 w-1/3 bg-gray-200 animate-pulse rounded" />
              <div className="mt-6 flex gap-3">
                <div className="h-10 flex-1 bg-gray-200 animate-pulse rounded-lg" />
                <div className="h-10 flex-1 bg-gray-200 animate-pulse rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}