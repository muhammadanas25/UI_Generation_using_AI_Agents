"use client"

import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setIsSubmitted(true)
    setError('')
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6 rounded-lg shadow-lg max-w-sm sm:max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0 sm:mr-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center">
            <Sparkles className="mr-2" /> Join ShineBright Today!
          </h2>
          <p className="text-base sm:text-lg">
            Sign up for exclusive discounts and be the first to know about our latest products!
          </p>
        </div>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-800 placeholder-gray-500 w-full"
              />
              <Button type="submit" variant="secondary" className="w-full">
                Subscribe Now
              </Button>
            </div>
            {error && <p className="text-red-200 mt-2">{error}</p>}
          </form>
        ) : (
          <div className="text-base sm:text-lg font-semibold">
            Thank you for subscribing! Get ready to shine bright with us!
          </div>
        )}
      </div>
    </div>
  )
}

