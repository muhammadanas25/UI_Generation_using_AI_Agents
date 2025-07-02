import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera, Facebook, Instagram, MapPin, Twitter, Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={darkMode ? "flex flex-col min-h-screen dark" : "flex flex-col min-h-screen"}>
      <header className="px-4 lg:px-6 h-16 sm:h-20 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <Link className="flex items-center justify-center" href="#">
          <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
          <span className="ml-2 text-xl sm:text-3xl font-extrabold text-gray-800 dark:text-white">LensJourney</span>
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 dark:text-gray-300">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 sm:top-20 left-0 right-0 flex-col md:flex-row items-center gap-4 md:gap-6 bg-white dark:bg-gray-900 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Blog
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Gallery
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              About
            </Link>
          </nav>
          <Input
            type="search"
            placeholder="Search..."
            className="hidden sm:block w-40 px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
          />
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-gray-800 dark:text-white">
                  Welcome to LensJourney
                </h1>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Capturing the world's beauty, one frame at a time. Join me on my photographic adventures across the globe.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="w-full sm:w-auto transition transform hover:scale-105">Latest Stories</Button>
                <Button variant="outline" className="w-full sm:w-auto transition transform hover:scale-105">Explore Gallery</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
              Recent Blog Posts
            </h2>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="overflow-hidden">
                  <img
                    alt="Blog post thumbnail"
                    className="w-full h-48 sm:h-60 object-cover transform hover:scale-105 transition-transform duration-300"
                    src="/placeholder.svg?height=300&width=600"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Sunrise at Machu Picchu</CardTitle>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Witnessing the first light of day at this ancient Incan citadel was truly breathtaking...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-blue-500 hover:text-blue-700 transition">Read More</Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="overflow-hidden">
                  <img
                    alt="Blog post thumbnail"
                    className="w-full h-48 sm:h-60 object-cover transform hover:scale-105 transition-transform duration-300"
                    src="/placeholder.svg?height=300&width=600"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">The Northern Lights Dance</CardTitle>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Chasing the aurora borealis in Iceland led to this magical moment captured on camera...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-blue-500 hover:text-blue-700 transition">Read More</Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="overflow-hidden">
                  <img
                    alt="Blog post thumbnail"
                    className="w-full h-48 sm:h-60 object-cover transform hover:scale-105 transition-transform duration-300"
                    src="/placeholder.svg?height=300&width=600"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Safari Sunset in Serengeti</CardTitle>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    As the sun dipped below the horizon, the Serengeti came alive with silhouettes...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-blue-500 hover:text-blue-700 transition">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
              Gallery Preview
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="overflow-hidden rounded-lg group">
                  <img
                    alt={`Gallery image ${num}`}
                    className="w-full h-40 sm:h-48 md:h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    src={`/placeholder.svg?height=300&width=450`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <Button className="w-full sm:w-auto transition transform hover:scale-105">View Full Gallery</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8 w-full bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">&copy; 2024 LensJourney. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mb-4 sm:mb-0">
          <Link className="text-xs text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition" href="#">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition" href="#">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition" href="#">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

