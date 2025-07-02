'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "/placeholder.svg?height=100&width=100",
    text: "Emily's photography captured the essence of our wedding day beautifully. Her attention to detail is impeccable!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "/placeholder.svg?height=100&width=100",
    text: "I was blown away by the quality of Emily's corporate headshots. She made everyone feel comfortable and look their best.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia Rodriguez",
    photo: "/placeholder.svg?height=100&width=100",
    text: "Emily has a gift for capturing genuine moments. Our family photos are treasures we'll cherish forever.",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [fade, setFade] = useState(true)

  const nextTestimonial = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setFade(true)
    }, 300)
  }

  const prevTestimonial = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setFade(true)
    }, 300)
  }

  const goToTestimonial = (index) => {
    if (index === currentIndex) return
    setFade(false)
    setTimeout(() => {
      setCurrentIndex(index)
      setFade(true)
    }, 300)
  }

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [currentIndex, isHovered])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div
      className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-2xl relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        className="absolute top-0 left-0 w-32 h-32 text-indigo-200 opacity-50"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-32 h-32 text-purple-200 opacity-50"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">What Our Clients Say</h2>
      <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center gap-6 p-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={currentTestimonial.photo} alt={currentTestimonial.name} />
            <AvatarFallback>{currentTestimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg italic mb-4 text-gray-700">&ldquo;{currentTestimonial.text}&rdquo;</p>
            <div className="flex items-center justify-center md:justify-start mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="font-semibold text-indigo-600">{currentTestimonial.name}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-6">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-indigo-100 transition transform hover:scale-110"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-indigo-600" />
        </Button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-6">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-indigo-100 transition transform hover:scale-110"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-indigo-600" />
        </Button>
      </div>
      <div className="flex justify-center mt-6 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full focus:outline-none transition ${
              index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-indigo-400'
            }`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}