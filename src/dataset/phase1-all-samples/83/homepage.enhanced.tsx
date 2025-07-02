import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Search, ShoppingCart, User, ChevronRight, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">BookNest</span>
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="BookNest Logo"
            className="h-8 w-8 animate-bounce"
          />
          <span className="ml-3 text-2xl md:text-3xl font-extrabold text-white">BookNest</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 right-0 bg-indigo-500 lg:bg-transparent p-4 lg:p-0 gap-4 lg:gap-6`}>
          {["Home", "Categories", "Bestsellers", "About"].map((item) => (
            <Link key={item} className="text-white font-medium hover:text-gray-200 transition-colors" href="#">
              {item}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
            <User className="h-5 w-5" />
            <span className="sr-only">User Account</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-3"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
                  Welcome to <span className="text-yellow-300">BookNest</span>
                </h1>
                <p className="mx-auto max-w-2xl text-base md:text-lg lg:text-xl">
                  Discover your next favorite book in our cozy online bookstore with thousands of titles.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="w-full max-w-md"
              >
                <form className="flex flex-col sm:flex-row items-center gap-2">
                  <Input
                    className="flex-1 w-full"
                    placeholder="Search for books..."
                    type="search"
                    aria-label="Search for books"
                  />
                  <Button type="submit" className="w-full sm:w-auto flex items-center justify-center">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">Book Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance", "Biography"].map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform"
                >
                  <Image
                    src={`/categories/${category.toLowerCase()}.jpg`}
                    alt={`${category} category`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{category}</h3>
                    <p className="text-gray-600 mb-4">Explore our collection of {category.toLowerCase()} books.</p>
                    <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center">
                      Browse {category}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">Bestsellers</h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delayChildren: 0.3, staggerChildren: 0.2 },
                },
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((book) => (
                <motion.div
                  key={book}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <Image
                    src={`/books/book${book}.jpg`}
                    alt={`Book ${book}`}
                    width={300}
                    height={450}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">Book Title {book}</h3>
                    <p className="text-sm text-gray-500 mb-2">Author Name</p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <span className="font-semibold text-indigo-600">$19.99</span>
                      <Button size="sm" className="w-full sm:w-auto flex items-center justify-center">
                        Add to Cart
                        <ShoppingCart className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="container px-4 md:px-6 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="mb-6">Sign up for newsletters and get the latest updates on new arrivals and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
              <Input
                className="w-full sm:w-auto max-w-xs"
                placeholder="Enter your email"
                type="email"
                aria-label="Email Address"
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">BookNest</h3>
            <p className="text-sm">© 2024 BookNest. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "Categories", "Bestsellers", "About", "Contact"].map((link) => (
                <Link key={link} className="text-sm hover:underline" href="#">
                  {link}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.995 16.979H7.005v-9.98h9.99v9.98zM9.503 7.006H7.005V4.508h2.498v2.498zm7.492 0h-2.498V4.508h2.498v2.498z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

