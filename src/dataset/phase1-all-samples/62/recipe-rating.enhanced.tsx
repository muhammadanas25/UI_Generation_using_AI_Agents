"use client"

import { useState } from "react"
import { Star, Image as ImageIcon, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip } from "@/components/ui/tooltip"
import Image from "next/image"

const initialRating = {
  average: 4.2,
  count: 156
}

export default function RecipeRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [averageRating, setAverageRating] = useState(initialRating.average)
  const [ratingCount, setRatingCount] = useState(initialRating.count)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating > 0) {
      setIsSubmitting(true)
      // Simulate API call
      setTimeout(() => {
        console.log(`Submitted rating: ${rating}`)
        console.log(`Submitted comment: ${comment}`)
        
        const newCount = ratingCount + 1
        const newAverage = (averageRating * ratingCount + rating) / newCount
        setAverageRating(Number(newAverage.toFixed(1)))
        setRatingCount(newCount)
        
        setRating(0)
        setComment("")
        setIsSubmitting(false)
      }, 1000)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="relative">
        <Image
          src="/recipe.jpg"
          alt="Delicious Recipe"
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full text-center py-2">
          <CardTitle className="text-xl">Delicious Chocolate Cake</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Tooltip key={star} content={`Rate ${star} star${star > 1 ? 's' : ''}`}>
                <Star
                  className={`w-10 h-10 cursor-pointer transition-transform transform ${
                    (hover || rating) >= star
                      ? "fill-yellow-400 text-yellow-400 scale-110"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              </Tooltip>
            ))}
          </div>
          <div className="text-lg font-semibold flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Average Rating: {averageRating} ({ratingCount} ratings)</span>
          </div>
          <div className="w-full">
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave a comment..."
              className="mt-2"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-2">
          <Button
            type="submit"
            className="w-full flex items-center justify-center transition-transform transform hover:scale-105"
            disabled={rating === 0 || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Rating
              </>
            )}
          </Button>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">
              Share
            </Button>
            <Button variant="ghost" size="sm">
              Save
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  )
}