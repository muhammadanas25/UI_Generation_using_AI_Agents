'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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

  const handleStarClick = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }))
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
      author: 'Anonymous', // In a real app, this would be the logged-in user's name
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    }
    setReviews(prev => [review, ...prev])
    setNewReview({ rating: 0, comment: '' })
  }

  return (
    <div className="max-w-4xl mx-auto p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Customer Reviews</h2>

      {/* Review submission form */}
      <form onSubmit={handleSubmit} className="mb-6 sm:mb-8 p-3 sm:p-4 bg-secondary rounded-lg">
        <h3 className="text-base sm:text-lg font-semibold mb-2">Write a Review</h3>
        <div className="flex mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 sm:w-6 sm:h-6 cursor-pointer ${star <= newReview.rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                }`}
              onClick={() => handleStarClick(star)}
            />
          ))}
        </div>
        <Textarea
          placeholder="Write your review here..."
          value={newReview.comment}
          onChange={handleCommentChange}
          className="mb-2 text-sm sm:text-base"
        />
        <Button type="submit" className="w-full sm:w-auto">Submit Review</Button>
      </form>

      {/* Existing reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-border pb-4">
            <div className="flex flex-wrap items-start mb-2">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 mr-2">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.author}`} alt={review.author} />
                <AvatarFallback>{review.author.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <p className="font-semibold text-sm sm:text-base truncate">{review.author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{review.date}</p>
              </div>
              <div className="flex mt-1 sm:mt-0 ml-auto">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= review.rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                      }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

