'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'

interface Review {
  id: number
  author: string
  rating: number
  comment: string
  date: string
}

export default function ProductReviews() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      author: 'Jane Doe',
      rating: 5,
      comment: 'Absolutely love this product! It has made such a difference in my skincare routine.',
      date: '2023-05-15'
    },
    {
      id: 2,
      author: 'John Smith',
      rating: 4,
      comment: 'Great product, but I wish the packaging was more eco-friendly.',
      date: '2023-05-10'
    }
  ])
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' })
  const [hoverRating, setHoverRating] = useState(0)

  const handleStarClick = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }))
  }

  const handleStarHover = (rating: number) => {
    setHoverRating(rating)
  }

  const handleStarLeave = () => {
    setHoverRating(0)
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview(prev => ({ ...prev, comment: event.target.value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (newReview.rating === 0 || newReview.comment.trim() === '') {
      alert('Please provide both a rating and a comment.')
      return
    }
    const review: Review = {
      id: reviews.length + 1,
      author: 'Anonymous',
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    }
    setReviews(prev => [review, ...prev])
    setNewReview({ rating: 0, comment: '' })
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-primary">Customer Reviews</h2>

      {/* Review submission form */}
      <Card className="mb-6 sm:mb-8 p-4 sm:p-6 bg-background shadow-lg hover:shadow-xl transition-shadow rounded-lg">
        <CardHeader>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Write a Review</h3>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4 justify-center sm:justify-start">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Star
                  className={`w-6 h-6 sm:w-8 sm:h-8 cursor-pointer transition-colors duration-200 ${(hoverRating || newReview.rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={handleStarLeave}
                />
              </motion.div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <Textarea
              placeholder="Write your review here..."
              value={newReview.comment}
              onChange={handleCommentChange}
              className="mb-4 resize-none text-sm sm:text-base"
              rows={4}
            />
            <Button type="submit" className="w-full hover:bg-primary-dark transition-colors">
              Submit Review
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Existing reviews */}
      <AnimatePresence>
        <div className="space-y-4 sm:space-y-6">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-4 sm:p-6 bg-background shadow-md hover:shadow-lg transition-shadow rounded-lg">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center mb-2 sm:mb-4">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4">
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.author}`} alt={review.author} />
                      <AvatarFallback>{review.author.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-base sm:text-lg font-semibold">{review.author}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex sm:ml-auto mt-2 sm:mt-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-700">{review.comment}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}

