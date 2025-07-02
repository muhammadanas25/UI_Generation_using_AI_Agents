import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Trophy, ShoppingBag, Menu, X } from 'lucide-react'
import Link from "next/link"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center">
            <Dumbbell className="h-6 w-6 mr-2 text-indigo-600" />
            <span className="font-bold text-xl text-indigo-600">StayActive</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Workouts
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Challenges
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              Reviews
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
              About
            </Link>
          </nav>
          <button
            className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
                  Workouts
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
                  Challenges
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" href="#">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 sm:py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fadeIn">
                Stay Active, Stay Healthy
              </h1>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl animate-fadeIn delay-200">
                Your go-to resource for workout guides, fitness challenges, and honest health product reviews.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="animate-bounce w-full sm:w-auto" variant="default">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full sm:w-auto hover:bg-white hover:text-indigo-600 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">Featured Posts</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="flex flex-col items-start">
                  <Dumbbell className="w-8 h-8 text-indigo-600 mb-2" />
                  <CardTitle className="text-xl">10-Minute HIIT Workout</CardTitle>
                  <CardDescription className="text-gray-500">Quick and effective full-body workout</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Boost your metabolism and burn fat with this intense 10-minute HIIT routine.
                  </p>
                  <Button className="mt-4 w-full" variant="link" href="#">
                    Read More
                  </Button>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="flex flex-col items-start">
                  <Trophy className="w-8 h-8 text-indigo-600 mb-2" />
                  <CardTitle className="text-xl">30-Day Plank Challenge</CardTitle>
                  <CardDescription className="text-gray-500">Strengthen your core in just a month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Join our 30-day plank challenge and see amazing results in your core strength.
                  </p>
                  <Button className="mt-4 w-full" variant="link" href="#">
                    Join Challenge
                  </Button>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="flex flex-col items-start">
                  <ShoppingBag className="w-8 h-8 text-indigo-600 mb-2" />
                  <CardTitle className="text-xl">Best Protein Powders of 2024</CardTitle>
                  <CardDescription className="text-gray-500">Honest reviews of top supplements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We've tested the most popular protein powders. See our top picks for every goal.
                  </p>
                  <Button className="mt-4 w-full" variant="link" href="#">
                    Read Reviews
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Stay Updated with StayActive</h2>
              <p className="max-w-xl text-base sm:text-lg md:text-xl">
                Subscribe to our newsletter for the latest workout tips, challenges, and product reviews.
              </p>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
                <Input
                  className="flex-1 w-full"
                  placeholder="Enter your email"
                  type="email"
                  required
                  aria-label="Email Address"
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs mb-2 sm:mb-0">&copy; 2024 StayActive. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-4">
            <Link className="text-xs hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-white transition-colors" href="#">
              Privacy
            </Link>
            <Link className="text-xs hover:text-white transition-colors" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

