import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Leaf, Search, Twitter, Menu, X } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"

export default function Component() {
  const [search, setSearch] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between shadow-md bg-white dark:bg-gray-800 fixed top-0 w-full z-50">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-8 w-8 text-green-600 dark:text-green-400 animate-pulse" />
          <span className="ml-3 text-xl sm:text-2xl font-extrabold text-green-700 dark:text-green-300">EcoGarden</span>
        </Link>
        <div className="flex items-center">
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none items-center gap-4 md:gap-6`}>
            <Link className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" href="#">
              Articles
            </Link>
            <Link className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" href="#">
              Contact
            </Link>
            <div className="relative mt-4 md:mt-0">
              <Input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-auto border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full bg-cover bg-center py-20 md:py-32 lg:py-40" style={{ backgroundImage: "url('/garden-bg.jpg')" }}>
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-6 text-center text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                Welcome to EcoGarden
              </h1>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">
                Discover sustainable gardening practices and permaculture techniques to create your own eco-friendly paradise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="animate-bounce w-full sm:w-auto">Read Articles</Button>
                <Button variant="outline" className="hover:bg-green-50 w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-12">Featured Article</h2>
            <motion.div
              className="flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="max-w-xl w-full hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-green-500 text-white">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">The Benefits of Companion Planting in Permaculture</CardTitle>
                </CardHeader>
                <CardContent className="bg-white dark:bg-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Discover how companion planting can enhance your garden's productivity, reduce pest problems, and create a harmonious ecosystem in your backyard.
                  </p>
                  <img src="/companion-planting.jpg" alt="Companion Planting" className="mt-4 rounded-md w-full h-48 object-cover" />
                </CardContent>
                <CardFooter className="bg-gray-100 dark:bg-gray-800">
                  <Button className="w-full hover:bg-green-600">Read More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-12 text-center">Recent Articles</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Creating a Water-Wise Garden", image: "/water-wise.jpg", description: "Learn techniques for conserving water while maintaining a thriving garden." },
                { title: "The Art of Composting", image: "/composting.jpg", description: "Turn your kitchen scraps and yard waste into black gold for your garden." },
                { title: "Attracting Beneficial Insects", image: "/beneficial-insects.jpg", description: "Discover how to create a garden that welcomes helpful bugs and pollinators." }
              ].map((article, index) => (
                <Card key={index} className="hover:translate-y-2 transition-transform duration-200">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={article.image} alt={article.title} className="rounded-md w-full h-40 object-cover mb-4" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{article.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full hover:bg-green-50">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 text-center">Subscribe to Our Newsletter</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md pr-16 py-3 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-800 border-t">
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">© 2024 EcoGarden. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs sm:text-sm hover:underline underline-offset-4 transition-colors duration-200" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs sm:text-sm hover:underline underline-offset-4 transition-colors duration-200" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-200">
            <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-200">
            <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-200">
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
        </div>
      </footer>
      <Link href="#" className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300">
        ↑
      </Link>
    </div>
  )
}

