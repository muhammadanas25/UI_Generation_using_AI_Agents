import { Badge } from "@/components/ui/badge"
import { Star, Film, Share2, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import { motion } from "framer-motion"

interface MovieRatingBadgeProps {
  rating: number
  moviePoster: string
  movieTitle: string
}

export default function MovieRatingBadge({ rating = 3.5, moviePoster, movieTitle }: MovieRatingBadgeProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xs w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-4 flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={moviePoster}
        alt={`${movieTitle} Poster`}
        className="w-24 h-36 rounded-md object-cover border-2 border-white shadow-sm"
        width={96}
        height={144}
      />
      <span className="text-white font-bold text-lg">{movieTitle}</span>
      <Badge variant="secondary" className="flex items-center space-x-2 px-3 py-1 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-full">
        <Film className="h-5 w-5 text-yellow-300 animate-pulse" />
        <span className="font-bold text-yellow-300">FilmFanatic</span>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="relative"
            >
              <Star
                className={`h-4 w-4 ${
                  i < fullStars
                    ? "fill-yellow-400 text-yellow-400"
                    : i === fullStars && hasHalfStar
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
              {i === fullStars && hasHalfStar && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>
        <span className="font-semibold text-white">{rating.toFixed(1)}</span>
      </Badge>
      <div className="flex space-x-4">
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition">
              <Share2 className="h-5 w-5 text-white" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="text-sm">Share</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition">
              <Info className="h-5 w-5 text-white" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="text-sm">More Info</TooltipContent>
        </Tooltip>
      </div>
    </motion.div>
  )
}