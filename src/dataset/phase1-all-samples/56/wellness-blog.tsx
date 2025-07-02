'use client'

import { useState } from "react"
import Image from "next/image"
import { Heart, Leaf, Brain, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-green-700">HealthyHabits</h1>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>
            <a href="#" className="text-green-600 hover:text-green-800">Home</a>
            <a href="#" className="text-green-600 hover:text-green-800">Self-Care</a>
            <a href="#" className="text-green-600 hover:text-green-800">Wellness Routines</a>
            <a href="#" className="text-green-600 hover:text-green-800">Mental Health</a>
          </nav>
          <button className="md:hidden text-green-600" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">Featured Article</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Woman meditating"
              width={800}
              height={400}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-2">10 Minutes of Mindfulness: Transform Your Day</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Discover how just 10 minutes of mindfulness practice can significantly improve your mental clarity, reduce stress, and boost overall well-being.</p>
              <a href="#" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm sm:text-base">Read More</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "5 Self-Care Rituals for Busy Professionals", icon: <Heart className="h-6 w-6 text-green-600" />, category: "Self-Care" },
              { title: "The Power of Green Smoothies: Boost Your Energy", icon: <Leaf className="h-6 w-6 text-green-600" />, category: "Wellness Routines" },
              { title: "Understanding and Managing Anxiety", icon: <Brain className="h-6 w-6 text-green-600" />, category: "Mental Health" },
              { title: "Yoga for Beginners: Start Your Journey to Wellness", icon: <Heart className="h-6 w-6 text-green-600" />, category: "Self-Care" },
              { title: "Creating a Sustainable Morning Routine", icon: <Leaf className="h-6 w-6 text-green-600" />, category: "Wellness Routines" },
              { title: "The Importance of Social Connections for Mental Health", icon: <Brain className="h-6 w-6 text-green-600" />, category: "Mental Health" },
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=${index + 1}`}
                  alt="Article thumbnail"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-2">
                    {article.icon}
                    <span className="ml-2 text-xs sm:text-sm text-green-600">{article.category}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">{article.title}</h3>
                  <a href="#" className="text-green-600 hover:text-green-800 text-sm sm:text-base">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-6 sm:py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base">&copy; 2023 HealthyHabits. All rights reserved.</p>
          <div className="mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#" className="block sm:inline-block text-green-200 hover:text-white text-sm sm:text-base">Privacy Policy</a>
            <a href="#" className="block sm:inline-block text-green-200 hover:text-white text-sm sm:text-base">Terms of Service</a>
            <a href="#" className="block sm:inline-block text-green-200 hover:text-white text-sm sm:text-base">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

