// src/app/components/PostCardSkeleton.jsx

export default function PostCardSkeleton() {
  return (
    <div className="relative w-full aspect-[9/12] overflow-hidden rounded-lg bg-gray-200 animate-pulse">
      {/* Imagen skeleton */}
      <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_200%] animate-shimmer"></div>

      {/* Overlay skeleton */}
      <div className="absolute top-0 w-full h-full bg-black/10"></div>

      {/* Título skeleton */}
      <div className="absolute bottom-0 w-full p-2 space-y-2">
        <div className="h-3 bg-white/60 rounded w-3/4"></div>
        <div className="h-3 bg-white/60 rounded w-full"></div>
        <div className="h-3 bg-white/60 rounded w-2/3"></div>
      </div>
    </div>
  )
}
