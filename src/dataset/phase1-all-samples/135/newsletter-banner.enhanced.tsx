"use client"

import { useState } from 'react'
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from 'framer-motion'

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
    <motion.div
      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto my-4 sm:my-6 md:my-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-6 lg:mb-0 lg:mr-10 flex flex-col items-center lg:items-start">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 flex items-center text-center lg:text-left">
            <Sparkles className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 animate-pulse text-yellow-300" />
            Join ShineBright Today!
          </h2>
          <p className="text-base sm:text-lg mb-4 text-center lg:text-left">
            Sign up for exclusive discounts and be the first to know about our latest products!
          </p>
          <img src="/newsletter-illustration.svg" alt="Newsletter Illustration" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 lg:mb-0" />
        </div>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 ease-in-out w-full"
              />
              <Button type="submit" variant="secondary" className="w-full flex items-center justify-center px-6 py-3 hover:bg-yellow-400 hover:text-gray-800 transition duration-300 ease-in-out">
                Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            {error && <p className="text-red-200 mt-2 text-sm sm:text-base">{error}</p>}
          </form>
        ) : (
          <motion.div
            className="flex items-center space-x-3 bg-white text-green-600 p-4 rounded-lg shadow-md w-full lg:w-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
            <span className="text-sm sm:text-base lg:text-lg font-semibold">
              Thank you for subscribing! Get ready to shine bright with us!
            </span>
          </motion.div>
        )}
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <a href="#" className="hover:text-yellow-300 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.15 12.15 0 013 4.89a4.28 4.28 0 001.33 5.72 4.23 4.23 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.72 8.72 0 0024 4.56a8.43 8.43 0 01-2.54.7z" />
          </svg>
        </a>
        <a href="#" className="hover:text-yellow-300 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.418.403a4.92 4.92 0 011.675 1.096 4.92 4.92 0 011.096 1.675c.163.448.347 1.248.403 2.418.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.418a4.92 4.92 0 01-1.096 1.675 4.92 4.92 0 01-1.675 1.096c-.448.163-1.248.347-2.418.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.418-.403a4.92 4.92 0 01-1.675-1.096 4.92 4.92 0 01-1.096-1.675c-.163-.448-.347-1.248-.403-2.418C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.418a4.92 4.92 0 011.096-1.675 4.92 4.92 0 011.675-1.096c.448-.163 1.248-.347 2.418-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.663.313 3.758.637a6.93 6.93 0 00-2.51 1.65A6.93 6.93 0 00.637 4.797c-.324.905-.506 2.017-.565 3.294C.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.241 2.389.565 3.294a6.93 6.93 0 001.65 2.51 6.93 6.93 0 002.51 1.65c.905.324 2.017.506 3.294.565C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.389-.241 3.294-.565a6.93 6.93 0 002.51-1.65 6.93 6.93 0 001.65-2.51c.324-.905.506-2.017.565-3.294.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.241-2.389-.565-3.294a6.93 6.93 0 00-1.65-2.51A6.93 6.93 0 0019.242.637c-.905-.324-2.017-.506-3.294-.565C15.668.013 15.259 0 12 0z" />
            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
          </svg>
        </a>
        <a href="#" className="hover:text-yellow-300 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

