"use client";

export default function TestListLoading() {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto py-10">

        {/* Sticky Alphabet Filter Skeleton */}
        <div className="z-20 bg-[var(--bgLight)] py-3 px-3">
          <div className="flex flex-wrap gap-3 text-base font-medium">
            {/* Alphabet buttons skeleton */}
            {[...Array(15)].map((_, index) => (
              <div
                key={index}
                className="w-12 h-10 bg-gray-200 animate-pulse"
              />
            ))}

            {/* Profiles button skeleton */}
            <div className="w-20 h-10 bg-gray-200 animate-pulse" />
          </div>
        </div>

        {/* Heading Skeleton */}
        <div className="mt-8 mb-3">
          <div className="h-8 w-64 bg-gray-200 animate-pulse" />
        </div>

        {/* Subheading Skeleton */}
        <div className="mb-6">
          <div className="h-4 w-96 bg-gray-200 animate-pulse" />
        </div>

        {/* Table Header Skeleton */}
        <div className="bg-gray-200 px-4 py-3">
          <div className="h-5 w-24 bg-gray-300 animate-pulse" />
        </div>

        {/* Results List Skeleton */}
        <div className="border border-[var(--borderLight)] divide-y divide-[var(--borderLight)] bg-white">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="px-4 py-3"
            >
              <div className="h-5 w-3/4 bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}