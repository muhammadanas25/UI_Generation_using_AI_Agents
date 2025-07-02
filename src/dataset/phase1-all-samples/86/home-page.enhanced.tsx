'use client'

import Link from "next/link"
import { ArrowRight, Mail, Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Mock subscription logic
    setSubscriptionStatus('success')
    setEmail('')
    setTimeout(() => setSubscriptionStatus(null), 3000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-shadow">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <img src="/logo.svg" alt="DecorDelight Logo" className="h-8 w-8" />
            <span className="font-bold text-xl sm:text-2xl text-gray-800">DecorDelight</span>
          </Link>
          <nav className={`fixed top-16 left-0 w-full bg-white shadow-md md:shadow-none md:static md:w-auto md:flex items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <Link className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#">
              Shop
            </Link>
            <Link className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#">
              Collections
            </Link>
            <Link className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#">
              About
            </Link>
            <Link className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="hidden md:block relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Link href="/account" className="text-gray-700 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-primary transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-16">
        <motion.section
          className="w-full py-16 sm:py-20 md:py-32 lg:py-40 bg-[url('/hero-background.jpg')] bg-cover bg-center flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <motion.div
              className="space-y-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Spring Collection 2024
              </h1>
              <p className="mx-auto max-w-xl text-base sm:text-lg md:text-xl">
                Refresh your space with our latest spring-inspired decor pieces.
              </p>
              <Button className="mt-4 bg-primary text-white hover:bg-primary-dark transition-transform transform hover:scale-105">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {["Living Room", "Bedroom", "Dining Room", "Home Office", "Outdoor", "Accessories"].map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden rounded-lg">
                    <CardHeader>
                      <img
                        src={`/collections/${category.toLowerCase().replace(' ', '-')}.jpg`}
                        alt={`${category} decor`}
                        className="object-cover w-full h-48 sm:h-60 transition-transform transform hover:scale-110"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">{category}</CardTitle>
                      <CardDescription className="text-sm text-gray-500 mt-2">
                        Explore {category.toLowerCase()} decor
                      </CardDescription>
                      <Button className="mt-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Home Styling Tips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Mix and Match Textures",
                  description: "Combine different textures like smooth, rough, and plush to add depth and interest to your space.",
                  icon: "🌟"
                },
                {
                  title: "Create a Focal Point",
                  description: "Every room needs a focal point. It could be a fireplace, a piece of art, or a statement furniture item.",
                  icon: "🎯"
                },
                {
                  title: "Layer Your Lighting",
                  description: "Use a combination of ambient, task, and accent lighting to create a warm and inviting atmosphere.",
                  icon: "💡"
                }
              ].map((tip) => (
                <Card key={tip.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex items-center justify-center p-4 bg-primary text-white rounded-t-lg">
                    <span className="text-3xl">{tip.icon}</span>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg sm:text-xl font-semibold mb-2">{tip.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600">
                      {tip.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Stay Inspired</h2>
              <p className="max-w-md text-sm sm:text-base text-gray-600">
                Sign up for our newsletter to receive the latest home decor trends and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 w-full"
                />
                <Button type="submit" className="w-full sm:w-auto bg-primary text-white hover:bg-primary-dark transition">
                  <Mail className="mr-2 h-4 w-4" /> Subscribe
                </Button>
              </form>
              <AnimatePresence>
                {subscriptionStatus === 'success' && (
                  <motion.p
                    className="text-green-500 mt-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-white py-6 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-xs text-gray-500">© 2024 DecorDelight. All rights reserved.</p>
          <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <Link className="text-xs text-gray-700 hover:text-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-700 hover:text-primary transition-colors" href="#">
              Privacy
            </Link>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-gray-700 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.116C23.405 24 24 23.406 24 22.674V1.326C24 .594 23.405 0 22.675 0z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-700 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573A4.897 4.897 0 0 1 .964 9.1v.06a4.916 4.916 0 0 0 3.946 4.814 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-700 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608C4.517 2.498 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.093 12 2.093m0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.631.393 3.678 1.346 2.724 2.3 2.462 3.444 2.403 4.72 2.344 6 .332 6.409 0 6.409s-2.344-.344-3.617-.344c-1.277 0-2.42.262-3.373 1.215C-.66 7.836-.398 9 .061 10.276c.058 1.276.32 2.42 1.273 3.373.953.953 2.096 1.215 3.373 1.273C8.332 14.987 8.741 15 12 15s3.668-.013 4.948-.072c1.277-.058 2.42-.32 3.373-1.273.953-.953 1.215-2.096 1.273-3.373.058-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.32-2.42-1.273-3.373-.953-.953-2.096-1.215-3.373-1.273C15.668.013 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

