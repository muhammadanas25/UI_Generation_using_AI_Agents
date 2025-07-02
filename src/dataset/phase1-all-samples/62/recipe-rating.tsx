"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or API
const initialRating = {
  average: 4.2,
  count: 156
}

export default function Component() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [averageRating, setAverageRating] = useState(initialRating.average)
  const [ratingCount, setRatingCount] = useState(initialRating.count)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating > 0) {
      // In a real application, you would send this rating to your backend
      console.log(`Submitted rating: ${rating}`)
      
      // Update average rating and count
      const newCount = ratingCount + 1
      const newAverage = (averageRating * ratingCount + rating) / newCount
      setAverageRating(Number(newAverage.toFixed(1)))
      setRatingCount(newCount)
      
      // Reset user's rating
      setRating(0)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">TastyBites Recipe Rating</CardTitle>
        <CardDescription className="text-center">Rate this delicious recipe!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 cursor-pointer transition-colors ${
                  (hover || rating) >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              />
            ))}
          </div>
          <div className="text-lg font-semibold">
            Average Rating: {averageRating} ({ratingCount} ratings)
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full">
          <Button type="submit" className="w-full" disabled={rating === 0}>
            Submit Rating
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}