'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "/placeholder.svg?height=100&width=100",
    text: "Emily's photography captured the essence of our wedding day beautifully. Her attention to detail is impeccable!",
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "/placeholder.svg?height=100&width=100",
    text: "I was blown away by the quality of Emily's corporate headshots. She made everyone feel comfortable and look their best.",
  },
  {
    id: 3,
    name: "Olivia Rodriguez",
    photo: "/placeholder.svg?height=100&width=100",
    text: "Emily has a gift for capturing genuine moments. Our family photos are treasures we'll cherish forever.",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000) // Auto-rotate every 5 seconds
    return () => clearInterval(timer)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-background rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Client Testimonials</h2>
      <div className="relative">
        <div className="flex flex-col md:flex-row items-center gap-6 p-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={currentTestimonial.photo} alt={currentTestimonial.name} />
            <AvatarFallback>{currentTestimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg italic mb-4">&ldquo;{currentTestimonial.text}&rdquo;</p>
            <p className="font-semibold">{currentTestimonial.name}</p>
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}