import { Badge } from "@/components/ui/badge"
import { Star, Film } from "lucide-react"

interface MovieRatingBadgeProps {
  rating: number
}

export default function Component({ rating = 3.5 }: MovieRatingBadgeProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <Badge variant="secondary" className="flex items-center space-x-2 px-3 py-1">
      <Film className="h-5 w-5 text-primary" />
      <span className="font-bold text-primary">FilmFanatic</span>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < fullStars
                ? "fill-yellow-400 text-yellow-400"
                : i === fullStars && hasHalfStar
                ? "fill-yellow-400 text-yellow-400 half-star"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="font-semibold">{rating.toFixed(1)}</span>
    </Badge>
  )
}